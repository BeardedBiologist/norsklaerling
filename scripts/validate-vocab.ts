/**
 * Validates the vocabulary bank:
 *  1. Local schema checks (duplicate ids, enums, missing fields).
 *  2. Every single-token word is checked against Ordbøkene (ord.uib.no,
 *     the official UiB/Språkrådet dictionary API): does it exist in bokmål,
 *     and for nouns, is the assigned gender one the dictionary allows?
 *
 * Run: npx tsx scripts/validate-vocab.ts
 * API responses are cached in .ordbok-cache.json so re-runs are cheap.
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { vocabulary } from '../src/data/vocabulary'
import type { VocabCard } from '../src/types'

const CACHE_FILE = new URL('../.ordbok-cache.json', import.meta.url).pathname
const cache: Record<string, { ids: number[]; genders: string[] } | null> = existsSync(CACHE_FILE)
  ? JSON.parse(readFileSync(CACHE_FILE, 'utf8'))
  : {}

const LEVELS = new Set(['A2', 'B1', 'B2'])
const TYPES = new Set(['substantiv', 'verb', 'adjektiv', 'adverb', 'uttrykk', 'preposisjon'])
const GENDERS = new Set(['en', 'ei', 'et'])
const GENDER_TAG: Record<string, string> = { en: 'Masc', ei: 'Fem', et: 'Neuter' }

const errors: string[] = []
const warnings: string[] = []

// ── local checks ──
const seenIds = new Map<string, string>()
const seenWords = new Map<string, string>()
for (const c of vocabulary) {
  const where = `${c.id} (${c.no})`
  if (seenIds.has(c.id)) errors.push(`DUPLICATE ID: ${c.id} — "${c.no}" and "${seenIds.get(c.id)}"`)
  seenIds.set(c.id, c.no)

  const norm = c.no.toLowerCase().replace(/^å /, '').trim()
  if (seenWords.has(norm)) warnings.push(`duplicate word: "${c.no}" in ${c.id} and ${seenWords.get(norm)}`)
  seenWords.set(norm, c.id)

  if (!LEVELS.has(c.level)) errors.push(`BAD LEVEL "${c.level}": ${where}`)
  if (!TYPES.has(c.type)) errors.push(`BAD TYPE "${c.type}": ${where}`)
  if (c.gender && !GENDERS.has(c.gender)) errors.push(`BAD GENDER "${c.gender}": ${where}`)
  if (c.gender && c.type !== 'substantiv') errors.push(`GENDER ON NON-NOUN (${c.type}): ${where}`)
  if (c.type === 'substantiv' && !c.gender && !/\(|\ /.test(c.no))
    warnings.push(`noun without gender: ${where}`)
  for (const f of ['no', 'en', 'example', 'exampleEn'] as const)
    if (!c[f]?.trim()) errors.push(`EMPTY FIELD ${f}: ${where}`)
  if (/^(en|ei|et) /.test(c.no) && c.type === 'substantiv')
    warnings.push(`headword still has article: ${where}`)
}

// ── remote checks ──
function lookupWord(c: VocabCard): string | null {
  let w = c.no.replace(/^å /, '').replace(/\s*\(.*\)/, '').trim()
  if (c.type === 'uttrykk' || w.includes(' ')) return null
  return w
}

async function fetchWord(w: string): Promise<{ ids: number[]; genders: string[] } | null> {
  const key = w.toLowerCase()
  if (key in cache) return cache[key]
  try {
    const res = await fetch(
      `https://ord.uib.no/api/articles?w=${encodeURIComponent(key)}&dict=bm&scope=ei`,
    )
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const data = (await res.json()) as { articles?: { bm?: number[] } }
    const ids = data.articles?.bm ?? []
    if (ids.length === 0) {
      cache[key] = null
      return null
    }
    const genders = new Set<string>()
    for (const id of ids.slice(0, 4)) {
      const ares = await fetch(`https://ord.uib.no/bm/article/${id}.json`)
      if (!ares.ok) continue
      const art = (await ares.json()) as {
        lemmas?: { paradigm_info?: { tags?: string[] }[] }[]
      }
      for (const lemma of art.lemmas ?? [])
        for (const p of lemma.paradigm_info ?? []) {
          const tags = p.tags ?? []
          if (tags.includes('NOUN'))
            for (const g of ['Masc', 'Fem', 'Neuter']) if (tags.includes(g)) genders.add(g)
        }
    }
    const entry = { ids, genders: [...genders] }
    cache[key] = entry
    return entry
  } catch (e) {
    warnings.push(`API error for "${w}": ${e}`)
    return undefined as never
  }
}

const toCheck = vocabulary
  .map((c) => ({ c, w: lookupWord(c) }))
  .filter((x): x is { c: VocabCard; w: string } => x.w !== null)

console.log(`local checks done. checking ${toCheck.length} single words against ordbøkene …`)

let done = 0
const CONCURRENCY = 8
async function worker(queue: typeof toCheck) {
  for (;;) {
    const item = queue.pop()
    if (!item) return
    const { c, w } = item
    const result = await fetchWord(w)
    done++
    if (done % 200 === 0) console.log(`  ${done}/${toCheck.length}`)
    if (result === null) {
      warnings.push(`not in ordbøkene: "${c.no}" (${c.id}, ${c.type}) — compound/proper noun or typo?`)
      continue
    }
    if (!result) continue
    if (c.type === 'substantiv' && c.gender) {
      if (result.genders.length > 0 && !result.genders.includes(GENDER_TAG[c.gender])) {
        errors.push(
          `WRONG GENDER: ${c.id} "${c.no}" has "${c.gender}" but ordbøkene allows [${result.genders.join(', ')}]`,
        )
      }
    }
  }
}

const queue = [...toCheck]
await Promise.all(Array.from({ length: CONCURRENCY }, () => worker(queue)))
writeFileSync(CACHE_FILE, JSON.stringify(cache))

console.log(`\n════ ${vocabulary.length} cards · ${errors.length} errors · ${warnings.length} warnings ════\n`)
if (errors.length) {
  console.log('ERRORS:')
  for (const e of errors.sort()) console.log('  ✗ ' + e)
}
if (warnings.length) {
  console.log('\nWARNINGS:')
  for (const w of warnings.sort()) console.log('  ⚠ ' + w)
}
process.exit(errors.length > 0 ? 1 : 0)
