/**
 * The learning journey: every course chapter is worked through in six
 * steps. Steps tick off automatically from what the learner does in the
 * modules (results are stored per chapter in progress.kursSteps), so the
 * journey can always say where to pick up.
 */
import { computed } from 'vue'
import type { RouteLocationRaw } from 'vue-router'
import type { KursChapter } from '../types'
import { chapterWords, kurs, kursLessonId } from '../data/kurs'
import { listeningFor } from '../data/kurs/listening'
import { useProgressStore } from '../stores/progress'

export type StepKey = 'lytt' | 'grammatikk' | 'ord' | 'bygg' | 'snakk' | 'sjekk'

export interface StepInfo {
  key: StepKey
  icon: string
  title: string
  /** what finishing the step means */
  goal: string
}

export const STEPS: StepInfo[] = [
  { key: 'lytt', icon: '🎧', title: 'Lytt og forstå', goal: 'Hør tekstene og svar riktig på minst 2 av 3 spørsmål til hver.' },
  { key: 'grammatikk', icon: '📖', title: 'Grammatikk', goal: 'Les grammatikken og si eksemplene høyt.' },
  { key: 'ord', icon: '🗂', title: 'Ord', goal: 'Gå gjennom minst 80 % av kapittelets ord i «Lær nye ord».' },
  { key: 'bygg', icon: '🧩', title: 'Bygg setninger', goal: 'Fullfør kapittelets setningsøvelse.' },
  { key: 'snakk', icon: '🎙', title: 'Snakk', goal: 'Fullfør en muntlig økt: «Snakk fritt» eller «Si det på norsk».' },
  { key: 'sjekk', icon: '✅', title: 'Kapittelsjekk', goal: 'Få minst 70 % riktig på kapittelsjekken.' },
]

export const LISTEN_PASS = 0.66
export const WORDS_PASS = 0.8
export const CHECK_PASS = 0.7

export interface StepStatus {
  done: boolean
  /** short progress label, e.g. «2 av 4 tekster» */
  detail: string
  /** where to go to do this step */
  to: RouteLocationRaw
}

export function useJourney() {
  const progress = useProgressStore()

  function stepStatus(c: KursChapter, key: StepKey): StepStatus {
    const v = (k: string) => progress.stepValue(c.id, k)
    const chapterPage = (hash: string): RouteLocationRaw => ({ path: `/kurs/${c.id}`, hash })
    switch (key) {
      case 'lytt': {
        const texts = listeningFor(c).length
        const passed = Array.from({ length: texts }, (_, i) => v(`lytt-${i}`) ?? 0).filter((s) => s >= LISTEN_PASS).length
        return { done: texts > 0 && passed === texts, detail: `${passed} av ${texts} tekster`, to: chapterPage('#lytt') }
      }
      case 'grammatikk':
        return { done: v('grammatikk') === 1, detail: v('grammatikk') === 1 ? 'Lest' : 'Ikke lest ennå', to: chapterPage('#grammatikk') }
      case 'ord': {
        const words = chapterWords(c)
        const seen = words.filter((w) => progress.state.srs[w.id]).length
        const share = words.length ? seen / words.length : 1
        return {
          done: share >= WORDS_PASS,
          detail: `${seen} av ${words.length} ord`,
          to: { path: '/ord', query: { kapittel: c.id } },
        }
      }
      case 'bygg':
        return { done: v('bygg') !== undefined, detail: v('bygg') !== undefined ? `Beste: ${Math.round(v('bygg')! * 100)} %` : 'Ikke tatt', to: { path: '/setninger', query: { kapittel: c.id } } }
      case 'snakk':
        return { done: v('snakk') !== undefined, detail: v('snakk') !== undefined ? 'Fullført' : 'Ikke tatt', to: { path: '/lytt', query: { kapittel: c.id, modus: 'fritt' } } }
      case 'sjekk': {
        const best = v('sjekk')
        return {
          done: (best ?? 0) >= CHECK_PASS,
          detail: best !== undefined ? `Beste: ${Math.round(best * 100)} %` : 'Ikke tatt',
          to: { path: '/quiz', query: { kapittel: c.id } },
        }
      }
    }
  }

  function chapterSteps(c: KursChapter) {
    return STEPS.map((s) => ({ ...s, ...stepStatus(c, s.key) }))
  }

  /** finished = all six steps done, or marked finished by hand */
  function isChapterDone(c: KursChapter): boolean {
    return progress.isLessonRead(kursLessonId(c)) || STEPS.every((s) => stepStatus(c, s.key).done)
  }

  function doneSteps(c: KursChapter): number {
    return STEPS.filter((s) => stepStatus(c, s.key).done).length
  }

  /** the first step not yet done in a chapter */
  function nextStep(c: KursChapter) {
    return chapterSteps(c).find((s) => !s.done) ?? null
  }

  /** where the learner is: the last opened unfinished chapter, else the first unfinished one */
  const current = computed(() => {
    const last = kurs.find((c) => c.id === progress.state.lastChapter)
    const chapter = last && !isChapterDone(last) ? last : (kurs.find((c) => !isChapterDone(c)) ?? null)
    return chapter ? { chapter, step: nextStep(chapter) } : null
  })

  const totalSteps = kurs.length * STEPS.length
  const completedSteps = computed(() =>
    kurs.reduce((sum, c) => sum + (progress.isLessonRead(kursLessonId(c)) ? STEPS.length : doneSteps(c)), 0),
  )

  return { stepStatus, chapterSteps, isChapterDone, doneSteps, nextStep, current, totalSteps, completedSteps }
}
