import type { KursChapter, ListeningQuestion } from '../../types'
import { listeningNybegynner } from './listening-nybegynner'
import { listeningB1 } from './listening-b1'

const all: Record<string, ListeningQuestion[][]> = { ...listeningNybegynner, ...listeningB1 }

/** comprehension questions for each of a chapter's NTNU texts, in text order */
export function listeningFor(c: KursChapter): ListeningQuestion[][] {
  return all[c.id] ?? []
}
