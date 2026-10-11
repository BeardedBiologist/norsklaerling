/**
 * Native Norwegian audio. NTNU's LearnNoW and NoW2 publish their dialogue
 * recordings and word pronunciations as plain mp3 files; we stream them
 * straight from NTNU's server (nothing is copied or re-hosted) and fall
 * back to the browser's Norwegian text-to-speech when there is no recording.
 */
import type { KursChapter, VocabCard } from '../types'
import wordAudio from '../data/word-audio.json'
import { speakNorwegian, speechAvailable } from './speech'

const NTNU_AUDIO = 'https://www.hf.ntnu.no/now/'
const wordAudioMap = wordAudio as Record<string, string>

let player: HTMLAudioElement | null = null

/** play one short clip, stopping whatever played before */
export function playUrl(url: string, rate = 1): Promise<void> {
  window.speechSynthesis?.cancel()
  player?.pause()
  player = new Audio(url)
  player.playbackRate = rate
  return player.play().catch(() => undefined)
}

export function stopAudio(): void {
  player?.pause()
  window.speechSynthesis?.cancel()
}

/** NTNU recording of a vocabulary card, if one exists */
export function wordAudioUrl(card: Pick<VocabCard, 'id'>): string | null {
  const path = wordAudioMap[card.id]
  return path ? NTNU_AUDIO + path : null
}

/** native recording when available, otherwise TTS */
export function speakCard(card: Pick<VocabCard, 'id' | 'no'>): void {
  const url = wordAudioUrl(card)
  if (url) void playUrl(url)
  else if (speechAvailable()) speakNorwegian(card.no)
}

/** can we say anything at all? (native clip or TTS) */
export function canSpeakCard(card: Pick<VocabCard, 'id'>): boolean {
  return !!wordAudioUrl(card) || speechAvailable()
}

/** NTNU mp3s for a chapter's texts, in the same order as chapter.dialogues */
export function dialogueAudioUrls(c: KursChapter): string[] {
  const nn = String(c.n).padStart(2, '0')
  const letters = c.course === 'nybegynner' ? ['A', 'B', 'C', 'D'] : ['A', 'B', 'X']
  const dir = c.course === 'nybegynner' ? 'learnnow' : 'now2'
  return letters.map((l) => `${NTNU_AUDIO}${dir}/${nn}${l}.mp3`)
}
