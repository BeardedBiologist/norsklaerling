/**
 * One speaking attempt = live speech recognition (for the on-screen text)
 * + a MediaRecorder recording (for playback and AI feedback), run together.
 *
 * Each start() is an attempt with its own id. It ends only when both the
 * recogniser and the recorder have stopped, and then onFinish fires once.
 * Getting the microphone is asynchronous, so a recorder that becomes ready
 * after stop() was pressed is shut down at once instead of holding the
 * microphone (which used to break every later attempt on phones). If live
 * recognition fails mid-way, recording continues until stop().
 */
import { onBeforeUnmount, ref } from 'vue'
import { listen, recognitionAvailable, type Listening } from './recognition'

export interface CaptureResult {
  transcript: string
  blob: Blob | null
}

export interface CaptureOptions {
  /** keep listening through pauses (free speaking) instead of stopping after one sentence */
  continuous: boolean
  /** the recogniser's final text, as soon as it has it (before the recording is ready) */
  onFinal?: (text: string) => void
  /** the attempt is over: recogniser and recorder are both done */
  onFinish?: (r: CaptureResult) => void
}

export const canRecord = typeof MediaRecorder !== 'undefined' && typeof navigator !== 'undefined' && !!navigator.mediaDevices?.getUserMedia

/** can this browser take a spoken answer at all? (live text, or a recording an AI can listen to) */
export function speakingSupported(withAi: boolean): boolean {
  return recognitionAvailable() || (withAi && canRecord)
}

export function useSpeechCapture() {
  const listening = ref(false)
  const transcript = ref('')
  const error = ref('')
  /** live recognition failed but the recording keeps going until stop() */
  const recFailed = ref(false)
  const recordingUrl = ref<string | null>(null)
  const hasRecording = ref(false)
  const elapsed = ref(0)

  let blob: Blob | null = null
  let rec: Listening | null = null
  let recorder: MediaRecorder | null = null
  let stream: MediaStream | null = null
  let attempt = 0
  let recDone = true
  let recorderDone = true
  let stopRequested = false
  let startedAt = 0
  let timer: number | undefined
  let opts: CaptureOptions = { continuous: false }

  function clear() {
    if (recordingUrl.value) URL.revokeObjectURL(recordingUrl.value)
    recordingUrl.value = null
    blob = null
    hasRecording.value = false
    transcript.value = ''
    error.value = ''
    recFailed.value = false
    elapsed.value = 0
  }

  /** let go of the microphone completely, whatever attempt holds it */
  function releaseMic() {
    if (recorder && recorder.state !== 'inactive') {
      recorder.onstop = null
      recorder.stop()
    }
    recorder = null
    stream?.getTracks().forEach((t) => t.stop())
    stream = null
  }

  async function startRecorder(id: number) {
    try {
      const s = await navigator.mediaDevices.getUserMedia({ audio: true })
      if (id !== attempt || stopRequested) {
        // stopped before the microphone was ready
        s.getTracks().forEach((t) => t.stop())
        recorderDone = true
        maybeFinish(id)
        return
      }
      stream = s
      const chunks: Blob[] = []
      const r = new MediaRecorder(s)
      recorder = r
      r.ondataavailable = (e) => {
        if (e.data.size) chunks.push(e.data)
      }
      r.onstop = () => {
        s.getTracks().forEach((t) => t.stop())
        if (stream === s) stream = null
        if (recorder === r) recorder = null
        if (id !== attempt) return
        if (chunks.length) {
          blob = new Blob(chunks, { type: r.mimeType || 'audio/webm' })
          recordingUrl.value = URL.createObjectURL(blob)
          hasRecording.value = true
        }
        recorderDone = true
        maybeFinish(id)
      }
      r.start()
    } catch {
      recorderDone = true
      maybeFinish(id)
    }
  }

  function stopRecorderNow() {
    stopRequested = true
    if (recorder && recorder.state !== 'inactive') recorder.stop()
  }

  function maybeFinish(id: number) {
    if (id !== attempt || !recDone || !recorderDone) return
    listening.value = false
    window.clearInterval(timer)
    if (!transcript.value && !hasRecording.value && !error.value) error.value = 'Jeg fikk ikke med meg noe. Prøv igjen og snakk litt høyere.'
    opts.onFinish?.({ transcript: transcript.value, blob })
  }

  function start(o: CaptureOptions) {
    releaseMic()
    attempt++
    const id = attempt
    opts = o
    clear()
    stopRequested = false
    recDone = false
    recorderDone = !canRecord

    rec = listen({
      continuous: o.continuous,
      onUpdate: (t) => {
        if (id === attempt) transcript.value = t
      },
      onDone: (t) => {
        if (id !== attempt) return
        transcript.value = t
        if (t) o.onFinal?.(t)
        recDone = true
        rec = null
        // normally the recording stops with the recogniser; if live text failed, keep recording until stop()
        if (!recFailed.value) stopRecorderNow()
        maybeFinish(id)
      },
      onError: (m, code) => {
        if (id !== attempt) return
        if (code === 'no-speech' || !canRecord) error.value = m
        else recFailed.value = true
      },
    })
    if (!rec) {
      recDone = true
      if (canRecord) recFailed.value = true
    }
    if (!rec && !canRecord) {
      error.value = 'Nettleseren kan verken ta opp eller gjenkjenne tale.'
      return
    }
    listening.value = true
    if (canRecord) void startRecorder(id)
    startedAt = Date.now()
    timer = window.setInterval(() => (elapsed.value = Math.round((Date.now() - startedAt) / 1000)), 500)
  }

  function stop() {
    stopRequested = true
    if (rec) rec.stop()
    stopRecorderNow()
    maybeFinish(attempt)
  }

  /** abandon any attempt (leaving a page, skipping a task) */
  function release() {
    attempt++
    rec?.stop()
    rec = null
    listening.value = false
    window.clearInterval(timer)
    releaseMic()
  }

  onBeforeUnmount(() => {
    release()
    if (recordingUrl.value) URL.revokeObjectURL(recordingUrl.value)
  })

  return {
    listening,
    transcript,
    error,
    recFailed,
    recordingUrl,
    hasRecording,
    elapsed,
    blob: () => blob,
    start,
    stop,
    release,
    clear,
  }
}
