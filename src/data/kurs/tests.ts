import type { ChapterTestBank, KursChapter } from '../../types'
import { testsNybegynner1 } from './tests-nybegynner-1'
import { testsNybegynner2 } from './tests-nybegynner-2'
import { testsB1a } from './tests-b1-1'
import { testsB1b } from './tests-b1-2'

/**
 * Kapittelprøve banks: test-only questions on the same material as the
 * chapter, never the practice items themselves, so a pass means the
 * content is known rather than the exact questions remembered.
 */
const banks: Record<string, ChapterTestBank> = { ...testsNybegynner1, ...testsNybegynner2, ...testsB1a, ...testsB1b }

export function testBankFor(c: KursChapter): ChapterTestBank | undefined {
  return banks[c.id]
}

/**
 * The oral part grows towards B1: one answer at A1, two at A2, and two
 * answers plus a role-play at B1. Each oral item counts as `weight` points,
 * and from A2 on the oral part must reach `minScore` on its own.
 */
export function oralPlan(c: KursChapter): { monologues: number; conversations: number; weight: number; minScore: number } {
  if (c.course === 'b1') return { monologues: 2, conversations: 1, weight: 3, minScore: 0.6 }
  return c.n <= 6 ? { monologues: 1, conversations: 0, weight: 2, minScore: 0 } : { monologues: 2, conversations: 0, weight: 2, minScore: 0.6 }
}
