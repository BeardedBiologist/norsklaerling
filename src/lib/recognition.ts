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
  onError?: (message: string) => void
}

const ERRORS: Record<string, string> = {
  'not-allowed': 'Mikrofonen er blokkert. Gi nettleseren tilgang til mikrofonen og prøv igjen.',
  'no-speech': 'Jeg hørte ingenting. Prøv igjen, og snakk litt høyere.',
  'audio-capture': 'Fant ingen mikrofon.',
  network: 'Talegjenkjenningen trenger internett.',
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
      if (r.isFinal) finalText += r[0].transcript + ' '
      else interim += r[0].transcript
    }
    opts.onUpdate?.((finalText + interim).trim())
  }
  rec.onerror = (e) => {
    if (e.error !== 'aborted') opts.onError?.(ERRORS[e.error] ?? `Talegjenkjenning feilet (${e.error}).`)
  }
  rec.onend = () => opts.onDone((finalText + interim).trim())
  rec.start()
  return { stop: () => rec.stop() }
}
