import raw from '../data/inflections.json'
import type { VocabCard } from '../types'

/**
 * Inflection tables generated from Ordbøkene by scripts/enrich-vocab.ts.
 * Slot order per word class:
 *  substantiv: [sing ind, sing def, plur ind, plur def]
 *  verb:       [infinitive, present, past, perfect participle]
 *  adjektiv:   [masc/fem, neuter, plural, comparative, superlative]
 */
export const inflections = raw as Record<string, string[]>

/** compact display line for a card's inflections, or null if none */
export function inflectionLine(card: VocabCard): string | null {
  const f = inflections[card.id]
  if (!f) return null
  if (card.type === 'substantiv') {
    const parts = [f[1], f[2], f[3]].filter(Boolean)
    return parts.length ? parts.join(' · ') : null
  }
  if (card.type === 'verb') {
    const parts = [f[1], f[2], f[3] ? `har ${f[3]}` : ''].filter(Boolean)
    return parts.length ? parts.join(' · ') : null
  }
  if (card.type === 'adjektiv') {
    const parts = [f[1], f[2], f[3], f[4]].filter(Boolean)
    return parts.length ? parts.join(' · ') : null
  }
  return null
}
