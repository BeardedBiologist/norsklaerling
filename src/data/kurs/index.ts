import type { KursChapter, QuizQuestion, SentenceExercise, VocabCard } from '../../types'
import { vocabulary } from '../vocabulary'
import { chapters1to4 } from './chapters-1-4'
import { chapters5to8 } from './chapters-5-8'
import { chapters9to12 } from './chapters-9-12'
import { chapterWordIds } from './chapter-words'

export const kurs: KursChapter[] = [...chapters1to4, ...chapters5to8, ...chapters9to12]

export function chapterByN(n: number): KursChapter | undefined {
  return kurs.find((c) => c.n === n)
}

/** progress key stored in readLessons when a chapter is finished */
export function kursLessonId(n: number): string {
  return `kurs-${n}`
}

const NTNU_BASE = 'https://www.ntnu.edu/learnnow'
const DIALOGUE_SLUGS = ['alex', 'ben', 'cecilie', 'dina']

/** LearnNoW pages for a chapter: dialogues A–D (text + native audio) and extras */
export function ntnuLinks(n: number): { dialogues: string[]; pronunciation: string; listening: string; grammar: string } {
  return {
    dialogues: DIALOGUE_SLUGS.map((s) => `${NTNU_BASE}/${n}/${s}`),
    pronunciation: `${NTNU_BASE}/${n}/pronunciation`,
    listening: `${NTNU_BASE}/${n}/listening`,
    grammar: `${NTNU_BASE}/${n}/grammar`,
  }
}

const byId = new Map(vocabulary.map((v) => [v.id, v]))

/** every card introduced in a chapter: the course's own words + matching older cards */
export function chapterWords(n: number): VocabCard[] {
  const own = vocabulary.filter((v) => v.chapter === n)
  const linked = (chapterWordIds[n] ?? []).map((id) => byId.get(id)).filter((v): v is VocabCard => !!v)
  return [...own, ...linked]
}

export const kursQuiz: QuizQuestion[] = kurs.flatMap((c) => c.quiz)
export const kursSentences: SentenceExercise[] = kurs.flatMap((c) => c.sentences)

/** parse a ?kapittel=N query value into a valid chapter number */
export function chapterFromQuery(q: unknown): number | null {
  const n = Number(Array.isArray(q) ? q[0] : q)
  return Number.isInteger(n) && chapterByN(n) ? n : null
}
