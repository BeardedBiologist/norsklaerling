/**
 * Word-level comparison of an answer (typed or spoken) against a target
 * sentence, used to grade dictation and speaking drills.
 */

export interface DiffToken {
  word: string
  /** ok = matched · missing = in the target but not said · extra = said but not in the target */
  status: 'ok' | 'missing' | 'extra'
}

export interface Comparison {
  tokens: DiffToken[]
  /** share of target words matched, 0–1 */
  score: number
}

/** lower-case, drop punctuation, keep Norwegian letters */
export function normalizeWords(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[–—-]/g, ' ')
    .replace(/[^\p{L}\p{N}\s]/gu, '')
    .split(/\s+/)
    .filter(Boolean)
}

/** longest-common-subsequence diff: target words in order, extras where they were said */
export function compareSentence(target: string, answer: string): Comparison {
  const t = normalizeWords(target)
  const a = normalizeWords(answer)
  const dp: number[][] = Array.from({ length: t.length + 1 }, () => new Array<number>(a.length + 1).fill(0))
  for (let i = t.length - 1; i >= 0; i--)
    for (let j = a.length - 1; j >= 0; j--)
      dp[i][j] = t[i] === a[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1])

  const tokens: DiffToken[] = []
  let i = 0
  let j = 0
  while (i < t.length && j < a.length) {
    if (t[i] === a[j]) {
      tokens.push({ word: t[i], status: 'ok' })
      i++
      j++
    } else if (dp[i + 1][j] >= dp[i][j + 1]) tokens.push({ word: t[i++], status: 'missing' })
    else tokens.push({ word: a[j++], status: 'extra' })
  }
  while (i < t.length) tokens.push({ word: t[i++], status: 'missing' })
  while (j < a.length) tokens.push({ word: a[j++], status: 'extra' })

  return { tokens, score: t.length ? dp[0][0] / t.length : 0 }
}
