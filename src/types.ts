export type Level = 'A2' | 'B1' | 'B2'

export type WordType = 'substantiv' | 'verb' | 'adjektiv' | 'adverb' | 'uttrykk' | 'preposisjon'

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
