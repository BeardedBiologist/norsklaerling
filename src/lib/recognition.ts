/**
 * Norwegian speech recognition through the browser's Web Speech API.
 * Chrome and Edge send the audio to Google's servers; Safari uses Apple's.
 * Firefox has no support, so callers must check recognitionAvailable().
 */

interface RecognitionResultEvent {
  resultIndex: number
  results: ArrayLike<ArrayLike<{ transcript: string }> & { isFinal: boolean }>
}

interface Recognition {
  lang: string
  continuous: boolean
  interimResults: boolean
  onresult: ((e: RecognitionResultEvent) => void) | null
  onerror: ((e: { error: string }) => void) | null
  onend: (() => void) | null
  start(): void
  stop(): void
  abort(): void
}

type RecognitionCtor = new () => Recognition

function ctor(): RecognitionCtor | null {
  if (typeof window === 'undefined') return null
  const w = window as unknown as { SpeechRecognition?: RecognitionCtor; webkitSpeechRecognition?: RecognitionCtor }
  return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null
}

export function recognitionAvailable(): boolean {
  return ctor() !== null
}

export interface Listening {
  /** stop listening; the final transcript arrives through onDone */
  stop(): void
}

export interface ListenOptions {
  /** keep listening through pauses (free speaking) instead of stopping after one sentence */
  continuous?: boolean
  /** live transcript while speaking */
  onUpdate?: (text: string) => void
  onDone: (text: string) => void
  /** message for the learner, plus the raw Web Speech error code */
  onError?: (message: string, code: string) => void
}

const ERRORS: Record<string, string> = {
  'not-allowed': 'Mikrofonen er blokkert. Gi nettleseren tilgang til mikrofonen og prøv igjen.',
  'no-speech': 'Jeg hørte ingenting. Prøv igjen, og snakk litt høyere.',
  'audio-capture': 'Fant ingen mikrofon.',
  network: 'Talegjenkjenningen trenger internett.',
}

/** a sentence that starts with a question word gets «?» */
const QUESTION_START = /^(hva|hvem|hvor|hvorfor|hvordan|hvilken|hvilket|hvilke|når)\b/i

/**
 * Speech recognition gives no punctuation or capitals. Each final result
 * (a stretch of speech up to a pause) is turned into a sentence: capital
 * first letter and a full stop, or «?» after a question word. Text the
 * recogniser already punctuated (Safari sometimes does) is left as it is.
 */
export function asSentence(text: string, final: boolean): string {
  const t = text.trim()
  if (!t) return ''
  const capped = t[0].toLocaleUpperCase('nb-NO') + t.slice(1)
  if (!final || /[.!?…]$/.test(capped)) return capped
  return capped + (QUESTION_START.test(capped) ? '?' : '.')
}

/** start listening in Norwegian (bokmål) */
export function listen(opts: ListenOptions): Listening | null {
  const C = ctor()
  if (!C) return null
  const rec = new C()
  rec.lang = 'nb-NO'
  rec.continuous = !!opts.continuous
  rec.interimResults = true

  let finalText = ''
  let interim = ''
  rec.onresult = (e) => {
    interim = ''
    for (let i = e.resultIndex; i < e.results.length; i++) {
      const r = e.results[i]
      if (r.isFinal) finalText += asSentence(r[0].transcript, true) + ' '
      else interim += r[0].transcript
    }
    opts.onUpdate?.((finalText + asSentence(interim, false)).trim())
  }
  rec.onerror = (e) => {
    if (e.error !== 'aborted') opts.onError?.(ERRORS[e.error] ?? `Talegjenkjenning feilet (${e.error}).`, e.error)
  }
  // speech cut off before it was final still ends as a sentence
  rec.onend = () => opts.onDone((finalText + asSentence(interim, true)).trim())
  try {
    rec.start()
  } catch {
    // e.g. a previous session still holding the recogniser — report it as a failed start
    opts.onError?.('Talegjenkjenningen kunne ikke starte. Prøv igjen.', 'start-failed')
    return null
  }
  return { stop: () => rec.stop() }
}
