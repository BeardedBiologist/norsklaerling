import type { KursChapter, SpeakingTask } from '../../types'
import { speakingNybegynner } from './speaking-nybegynner'
import { speakingB1 } from './speaking-b1'

const extra: Record<string, SpeakingTask[]> = { ...speakingNybegynner, ...speakingB1 }

/** every speaking task in a chapter: its five «speaking» questions plus the extra task bank */
export function speakingTasksFor(c: KursChapter): SpeakingTask[] {
  const questions: SpeakingTask[] = c.speaking.map((prompt, i) => ({ id: `${c.id}-q${i + 1}`, type: 'svar', prompt }))
  return [...questions, ...(extra[c.id] ?? [])]
}

/**
 * How many tasks must be passed to finish the chapter's speaking step —
 * a little at A1, more at A2, a lot at B1 (where one must be a conversation).
 */
export function speakingTarget(c: KursChapter): { passes: number; conversations: number } {
  if (c.course === 'b1') return { passes: 8, conversations: 1 }
  return c.n <= 6 ? { passes: 2, conversations: 0 } : { passes: 4, conversations: 0 }
}

/** progress keys: best average score (0–1) and a pass flag per task */
export const taskScoreKey = (t: SpeakingTask) => `tale-${t.id}`
export const taskPassKey = (t: SpeakingTask) => `tale-${t.id}-ok`

/** a spoken answer passes when it answers the task and the grammar is good enough for the level */
export function passesTask(scores: { task: number; grammar: number }, c: KursChapter): boolean {
  const minGrammar = c.course === 'nybegynner' && c.n <= 6 ? 2 : 3
  return scores.task >= 3 && scores.grammar >= minGrammar
}
