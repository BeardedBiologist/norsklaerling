import type { Grade, SrsState } from '../types'

const DAY = 24 * 60 * 60 * 1000

export function newSrsState(): SrsState {
  return { ease: 2.5, interval: 0, due: 0, reps: 0, lapses: 0 }
}

/**
 * Simplified SM-2. Intervals are in days; "again" resets the card and
 * makes it due in 10 minutes so it comes back within the session.
 */
export function review(state: SrsState, grade: Grade, now = Date.now()): SrsState {
  const s = { ...state }
  s.reps += 1

  if (grade === 'again') {
    s.lapses += 1
    s.interval = 0
    s.ease = Math.max(1.3, s.ease - 0.2)
    s.due = now + 10 * 60 * 1000
    return s
  }

  if (grade === 'hard') {
    s.ease = Math.max(1.3, s.ease - 0.15)
    s.interval = s.interval === 0 ? 1 : Math.max(1, Math.round(s.interval * 1.2))
  } else if (grade === 'good') {
    s.interval = s.interval === 0 ? 1 : Math.round(s.interval * s.ease)
  } else {
    s.ease = Math.min(3.0, s.ease + 0.15)
    s.interval = s.interval === 0 ? 3 : Math.round(s.interval * s.ease * 1.3)
  }

  s.interval = Math.min(s.interval, 365)
  s.due = now + s.interval * DAY
  return s
}

export function isDue(state: SrsState | undefined, now = Date.now()): boolean {
  return !state || state.due <= now
}

/** rough "learned" heuristic: seen and scheduled at least a week out */
export function isLearned(state: SrsState | undefined): boolean {
  return !!state && state.interval >= 7
}
