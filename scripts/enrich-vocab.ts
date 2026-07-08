/**
 * Fetches full inflection tables (bøyning) for every vocabulary word from
 * Ordbøkene (ord.uib.no) and bakes them into src/data/inflections.json,
 * keyed by card id. Run after adding new words:
 *
 *   npx tsx scripts/enrich-vocab.ts
 *
 * Article JSONs are cached in .ordbok-articles-cache.json.
 */
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { vocabulary } from '../src/data/vocabulary'
import type { VocabCard } from '../src/types'

const OUT_FILE = new URL('../src/data/inflections.json', import.meta.url).pathname
const IDS_CACHE = new URL('../.ordbok-cache.json', import.meta.url).pathname
const ART_CACHE = new URL('../.ordbok-articles-cache.json', import.meta.url).pathname

const idsCache: Record<string, { ids: number[] } | null> = existsSync(IDS_CACHE)
  ? JSON.parse(readFileSync(IDS_CACHE, 'utf8'))
  : {}
const artCache: Record<string, unknown> = existsSync(ART_CACHE)
  ? JSON.parse(readFileSync(ART_CACHE, 'utf8'))
  : {}

interface Paradigm {
  tags?: string[]
  inflection?: { tags?: string[]; word_form?: string | null }[]
}
interface Article {
  lemmas?: { lemma?: string; paradigm_info?: Paradigm[] }[]
}

const CLASS_FOR_TYPE: Record<string, string> = {
  substantiv: 'NOUN',
  verb: 'VERB',
  adjektiv: 'ADJ',
}
const GENDER_TAG: Record<string, string> = { en: 'Masc', ei: 'Fem', et: 'Neuter' }

/** slot definitions per word class, in display order */
const SLOTS: Record<string, string[][]> = {
  NOUN: [['Sing', 'Ind'], ['Sing', 'Def'], ['Plur', 'Ind'], ['Plur', 'Def']],
  VERB: [['Inf'], ['Pres'], ['Past'], ['<PerfPart>']],
  ADJ: [['Pos', 'Masc/Fem', 'Ind', 'Sing'], ['Pos', 'Neuter', 'Ind', 'Sing'], ['Pos', 'Plur'], ['Cmp'], ['Sup', 'Ind']],
}

function sameTags(a: string[], b: string[]): boolean {
  return a.length === b.length && a.every((t) => b.includes(t))
}

async function getWordIds(word: string): Promise<number[]> {
  const key = word.toLowerCase()
  if (key in idsCache) return idsCache[key]?.ids ?? []
  const res = await fetch(`https://ord.uib.no/api/articles?w=${encodeURIComponent(key)}&dict=bm&scope=ei`)
  if (!res.ok) return []
  const data = (await res.json()) as { articles?: { bm?: number[] } }
  const ids = data.articles?.bm ?? []
  idsCache[key] = { ids }
  return ids
}

async function getArticle(id: number): Promise<Article | null> {
  if (id in artCache) return artCache[id] as Article
  const res = await fetch(`https://ord.uib.no/bm/article/${id}.json`)
  if (!res.ok) return null
  const art = (await res.json()) as Article
  artCache[id] = art
  return art
}

function extractForms(card: VocabCard, articles: Article[]): string[] | null {
  const cls = CLASS_FOR_TYPE[card.type]
  if (!cls) return null
  const head = card.no.replace(/^å /, '').toLowerCase()

  // collect matching paradigms across all articles for this word
  let paradigms: Paradigm[] = []
  for (const art of articles) {
    for (const lemma of art.lemmas ?? []) {
      if (lemma.lemma?.toLowerCase() !== head) continue
      for (const p of lemma.paradigm_info ?? []) {
        if (!p.tags?.includes(cls)) continue
        paradigms.push(p)
      }
    }
  }
  if (paradigms.length === 0) return null

  // nouns: keep paradigms matching the card's gender
  if (cls === 'NOUN' && card.gender) {
    const wanted = GENDER_TAG[card.gender]
    const filtered = paradigms.filter((p) => p.tags?.includes(wanted))
    if (filtered.length > 0) paradigms = filtered
  }

  const forms: string[] = []
  for (const slot of SLOTS[cls]) {
    const variants: string[] = []
    for (const p of paradigms) {
      for (const infl of p.inflection ?? []) {
        if (!infl.word_form) continue
        if (sameTags(slot, infl.tags ?? [])) {
          if (!variants.includes(infl.word_form)) variants.push(infl.word_form)
        }
      }
    }
    forms.push(variants.slice(0, 2).join('/'))
  }
  // require at least the essential slots to be filled
  const filled = forms.filter(Boolean).length
  if (filled < 3) return null
  return forms
}

async function main() {
  const targets = vocabulary.filter(
    (c) =>
      CLASS_FOR_TYPE[c.type] &&
      !c.no.replace(/^å /, '').includes(' ') &&
      !/\(/.test(c.no),
  )
  console.log(`enriching ${targets.length} of ${vocabulary.length} cards …`)

  const out: Record<string, string[]> = {}
  let done = 0
  const queue = [...targets]
  async function worker() {
    for (;;) {
      const card = queue.pop()
      if (!card) return
      done++
      if (done % 200 === 0) console.log(`  ${done}/${targets.length}`)
      const ids = await getWordIds(card.no.replace(/^å /, ''))
      if (ids.length === 0) continue
      const articles = (await Promise.all(ids.slice(0, 4).map(getArticle))).filter(
        (a): a is Article => a !== null,
      )
      const forms = extractForms(card, articles)
      if (forms) out[card.id] = forms
    }
  }
  await Promise.all(Array.from({ length: 8 }, worker))

  writeFileSync(ART_CACHE, JSON.stringify(artCache))
  writeFileSync(IDS_CACHE, JSON.stringify(idsCache))
  writeFileSync(OUT_FILE, JSON.stringify(out))
  console.log(`wrote ${Object.keys(out).length} inflection tables → src/data/inflections.json`)
}

main()
