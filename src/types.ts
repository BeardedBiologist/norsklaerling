export type Level = 'A1' | 'A2' | 'B1' | 'B2'

export type WordType =
  | 'substantiv'
  | 'verb'
  | 'adjektiv'
  | 'adverb'
  | 'uttrykk'
  | 'preposisjon'
  | 'pronomen'
  | 'konjunksjon'
  | 'tallord'

export interface VocabCard {
  id: string
  no: string
  en: string
  type: WordType
  /** grammatical gender for nouns: en / ei / et */
  gender?: 'en' | 'ei' | 'et'
  example: string
  exampleEn: string
  level: Level
  topic: string
  /** id of the course chapter that introduces the word (see KursChapter.id) */
  chapter?: string
}

export interface SentenceExercise {
  id: string
  /** the correct Norwegian sentence, words separated by spaces */
  no: string
  en: string
  level: Level
  /** grammar point being drilled */
  focus: string
  hint: string
}

export interface QuizQuestion {
  id: string
  question: string
  options: string[]
  /** index into options */
  answer: number
  explanation: string
  level: Level
  topic: string
}

export interface CitizenshipQuestion {
  id: string
  /** question in Norwegian, as on the real test */
  no: string
  /** English translation shown as a learning aid */
  en: string
  options: string[]
  optionsEn: string[]
  answer: number
  topic: string
  explanation: string
}

export interface LessonExample {
  no: string
  en: string
  /** short annotation, e.g. which rule the example shows */
  note?: string
}

export interface LessonSection {
  heading?: string
  /** paragraphs separated by blank lines; grammar lessons are in English,
   *  samfunn chapters in Norwegian */
  body: string
  /** English translation of a Norwegian body (samfunn chapters) */
  bodyEn?: string
  examples?: LessonExample[]
}

export interface Lesson {
  id: string
  title: string
  titleEn: string
  category: 'grammatikk' | 'samfunn'
  level: Level
  /** one-line teaser for the hub */
  teaser: string
  sections: LessonSection[]
  /** where to practise what this lesson teaches */
  test: { to: string; label: string }
}

/** spaced-repetition state for one card */
export interface SrsState {
  ease: number
  /** current interval in days */
  interval: number
  /** epoch ms when the card is next due */
  due: number
  reps: number
  lapses: number
}

export type Grade = 'again' | 'hard' | 'good' | 'easy'

/** nybegynner = A1–A2 after NTNU LearnNoW · b1 = A2–B1 after NTNU NoW2 */
export type KursCourse = 'nybegynner' | 'b1'

/** one chapter of a course, sequenced after the matching NTNU course */
export interface KursChapter {
  /** unique id used in URLs, progress and VocabCard.chapter: '3' or 'b1-3' */
  id: string
  course: KursCourse
  /** chapter number within the course, also NTNU's chapter number */
  n: number
  title: string
  titleEn: string
  level: Level
  /** situations the chapter's dialogues cover, in English */
  theme: string
  /** what you can do after the chapter */
  canDo: LessonExample[]
  /** NTNU text titles in order (LearnNoW: A–D, NoW2: A, B, X), linked for audio + text */
  dialogues: string[]
  /** everyday phrases to learn as chunks */
  phrases: LessonExample[]
  /** grammar explained in English, in LearnNoW's order */
  grammar: LessonSection[]
  /** one pronunciation focus */
  pronunciation: LessonSection
  /** questions to answer out loud — oral practice from day one */
  speaking: string[]
  /** chapter check; correct answer is always index 0 */
  quiz: QuizQuestion[]
  /** word-order drills */
  sentences: SentenceExercise[]
}

/** one comprehension question about an NTNU text; correct answer is always index 0 */
export interface ListeningQuestion {
  q: string
  /** English translation of the question, for the early chapters */
  en?: string
  options: string[]
  answer: number
}
