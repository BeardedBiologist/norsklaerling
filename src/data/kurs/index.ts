import type { KursChapter, KursCourse, QuizQuestion, SentenceExercise, VocabCard } from '../../types'
import { vocabulary } from '../vocabulary'
import { chapters1to4 } from './chapters-1-4'
import { chapters5to8 } from './chapters-5-8'
import { chapters9to12 } from './chapters-9-12'
import { b1Chapters1to5 } from './b1-chapters-1-5'
import { b1Chapters6to10 } from './b1-chapters-6-10'
import { chapterWordIds } from './chapter-words'

export interface KursCourseInfo {
  course: KursCourse
  title: string
  levels: string
  /** the NTNU course this one is sequenced after */
  source: { name: string; url: string }
  /** letters shown on the NTNU text links, in order */
  dialogueLetters: string[]
}

export const courses: Record<KursCourse, KursCourseInfo> = {
  nybegynner: {
    course: 'nybegynner',
    title: 'Nybegynnerkurs',
    levels: 'A1–A2',
    source: { name: 'LearnNoW', url: 'https://www.ntnu.edu/learnnow' },
    dialogueLetters: ['A', 'B', 'C', 'D'],
  },
  b1: {
    course: 'b1',
    title: 'B1-kurs',
    levels: 'A2–B1',
    source: { name: 'NoW2', url: 'https://www.ntnu.edu/now2' },
    dialogueLetters: ['A', 'B', 'X'],
  },
}

export const kurs: KursChapter[] = [
  ...chapters1to4,
  ...chapters5to8,
  ...chapters9to12,
  ...b1Chapters1to5,
  ...b1Chapters6to10,
]

export function chaptersOf(course: KursCourse): KursChapter[] {
  return kurs.filter((c) => c.course === course)
}

export function chapterById(id: string): KursChapter | undefined {
  return kurs.find((c) => c.id === id)
}

/** the chapter before/after this one in the same course */
export function siblingChapter(c: KursChapter, offset: number): KursChapter | undefined {
  return chaptersOf(c.course).find((x) => x.n === c.n + offset)
}

/** progress key stored in readLessons when a chapter is finished */
export function kursLessonId(c: KursChapter): string {
  return `kurs-${c.id}`
}

export interface NtnuLinks {
  dialogues: string[]
  extras: { label: string; url: string }[]
}

/** NTNU pages for a chapter: the texts (with native audio) and the extra material */
export function ntnuLinks(c: KursChapter): NtnuLinks {
  if (c.course === 'nybegynner') {
    const base = `https://www.ntnu.edu/learnnow/${c.n}`
    return {
      dialogues: ['alex', 'ben', 'cecilie', 'dina'].map((s) => `${base}/${s}`),
      extras: [
        { label: 'lytteøvelser', url: `${base}/listening` },
        { label: 'uttale', url: `${base}/pronunciation` },
        { label: 'deres grammatikk', url: `${base}/grammar` },
      ],
    }
  }
  const base = `https://www.ntnu.edu/now2/${c.n}`
  return {
    dialogues: ['a', 'b', 'x'].map((s) => `${base}/${c.n}${s}`),
    extras: [
      { label: 'lytteoppgaver', url: `${base}/lytte` },
      { label: 'skriftlige oppgaver', url: `${base}/skriftlig` },
      { label: 'deres grammatikk', url: `${base}/grammatikk` },
    ],
  }
}

const byId = new Map(vocabulary.map((v) => [v.id, v]))

/** every card introduced in a chapter: the course's own words + matching older cards */
export function chapterWords(c: KursChapter): VocabCard[] {
  const own = vocabulary.filter((v) => v.chapter === c.id)
  const linked = (chapterWordIds[c.id] ?? []).map((id) => byId.get(id)).filter((v): v is VocabCard => !!v)
  return [...own, ...linked]
}

/** «Kapittel 3» or «B1 · kapittel 3» — for chips in the practice modules */
export function chapterLabel(c: KursChapter): string {
  return `${c.course === 'b1' ? 'B1 · k' : 'K'}apittel ${c.n} · ${c.title}`
}

export const kursQuiz: QuizQuestion[] = kurs.flatMap((c) => c.quiz)
export const kursSentences: SentenceExercise[] = kurs.flatMap((c) => c.sentences)

/** parse a ?kapittel=<id> query value */
export function chapterFromQuery(q: unknown): KursChapter | null {
  const id = String(Array.isArray(q) ? q[0] : (q ?? ''))
  return chapterById(id) ?? null
}
