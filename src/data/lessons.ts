import type { Lesson } from '../types'
import { grammarLessons } from './lessons-grammar'
import { samfunnLessons } from './lessons-samfunn'

export const lessons: Lesson[] = [...grammarLessons, ...samfunnLessons]

export function lessonById(id: string): Lesson | undefined {
  return lessons.find((l) => l.id === id)
}
