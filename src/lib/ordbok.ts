/**
 * Thin client for Ordbøkene (ord.uib.no) — the official UiB/Språkrådet
 * bokmål dictionary API. CORS is open, so it works straight from the browser.
 */

export interface OrdbokEntry {
  lemma: string
  wordClass: string
  gender: string | null
  /** compact inflection line, e.g. "huset · hus · husa/husene" */
  inflections: string[]
  definitions: string[]
}

const CLASS_LABEL: Record<string, string> = {
  NOUN: 'substantiv',
  VERB: 'verb',
  ADJ: 'adjektiv',
  ADV: 'adverb',
  PRON: 'pronomen',
  DET: 'determinativ',
  CCONJ: 'konjunksjon',
  SCONJ: 'subjunksjon',
  ADP: 'preposisjon',
  INTJ: 'interjeksjon',
}

const GENDER_LABEL: Record<string, string> = {
  Masc: 'en (hankjønn)',
  Fem: 'en/ei (hunkjønn)',
  Neuter: 'et (intetkjønn)',
}

interface ContentNode {
  content?: string
  items?: { text?: string; lemmas?: { lemma?: string }[]; word_form?: string }[]
}

function renderContent(node: ContentNode): string {
  let i = 0
  return (node.content ?? '').replace(/\$/g, () => {
    const it = node.items?.[i++]
    return it?.text ?? it?.lemmas?.[0]?.lemma ?? it?.word_form ?? '…'
  })
}

function collectDefinitions(elements: unknown[], out: string[]): void {
  for (const el of elements as Record<string, unknown>[]) {
    if (!el || typeof el !== 'object') continue
    if (el.type_ === 'explanation') {
      const text = renderContent(el as ContentNode).trim()
      if (text && out.length < 4) out.push(text)
    } else if (Array.isArray(el.elements)) {
      collectDefinitions(el.elements, out)
    }
  }
}

export async function lookupOrdbok(word: string): Promise<OrdbokEntry[]> {
  const w = word.toLowerCase().replace(/^å /, '').trim()
  if (!w) return []
  const res = await fetch(
    `https://ord.uib.no/api/articles?w=${encodeURIComponent(w)}&dict=bm&scope=ei`,
  )
  if (!res.ok) return []
  const { articles } = (await res.json()) as { articles?: { bm?: number[] } }
  const ids = (articles?.bm ?? []).slice(0, 3)

  const entries = await Promise.all(
    ids.map(async (id): Promise<OrdbokEntry | null> => {
      const ares = await fetch(`https://ord.uib.no/bm/article/${id}.json`)
      if (!ares.ok) return null
      const art = (await ares.json()) as {
        lemmas?: {
          lemma?: string
          paradigm_info?: { tags?: string[]; inflection?: { tags?: string[]; word_form?: string | null }[] }[]
        }[]
        body?: { definitions?: unknown[] }
      }
      const lemma = art.lemmas?.[0]
      if (!lemma?.lemma) return null

      const tags = lemma.paradigm_info?.flatMap((p) => p.tags ?? []) ?? []
      const cls = Object.keys(CLASS_LABEL).find((c) => tags.includes(c))
      const genderTag = ['Neuter', 'Fem', 'Masc'].filter((g) => tags.includes(g))
      // prefer showing Fem/Neuter info; Masc-only nouns just say "en"
      const gender =
        genderTag.length === 0
          ? null
          : genderTag.includes('Neuter')
            ? GENDER_LABEL.Neuter
            : genderTag.includes('Fem')
              ? GENDER_LABEL.Fem
              : GENDER_LABEL.Masc

      const forms: string[] = []
      for (const infl of lemma.paradigm_info?.[0]?.inflection ?? []) {
        if (infl.word_form && !forms.includes(infl.word_form)) forms.push(infl.word_form)
        if (forms.length >= 5) break
      }

      const defs: string[] = []
      collectDefinitions(art.body?.definitions ?? [], defs)

      return {
        lemma: lemma.lemma,
        wordClass: cls ? CLASS_LABEL[cls] : '',
        gender: cls === 'NOUN' ? gender : null,
        inflections: forms,
        definitions: defs,
      }
    }),
  )
  return entries.filter((e): e is OrdbokEntry => e !== null)
}

export function ordbokUrl(word: string): string {
  return `https://ordbokene.no/nob/bm/${encodeURIComponent(word.toLowerCase().replace(/^å /, ''))}`
}
