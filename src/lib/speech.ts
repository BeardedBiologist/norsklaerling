let cachedVoice: SpeechSynthesisVoice | null | undefined

function norwegianVoice(): SpeechSynthesisVoice | null {
  if (cachedVoice !== undefined) return cachedVoice
  const voices = window.speechSynthesis?.getVoices() ?? []
  cachedVoice =
    voices.find((v) => v.lang.toLowerCase().startsWith('nb')) ??
    voices.find((v) => v.lang.toLowerCase().startsWith('no')) ??
    voices.find((v) => v.lang.toLowerCase().startsWith('nn')) ??
    null
  return cachedVoice
}

// voice list loads asynchronously in some browsers
if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  window.speechSynthesis.addEventListener?.('voiceschanged', () => {
    cachedVoice = undefined
  })
}

export function speakNorwegian(text: string, rate = 0.9): void {
  if (!('speechSynthesis' in window)) return
  window.speechSynthesis.cancel()
  const utterance = new SpeechSynthesisUtterance(text)
  utterance.lang = 'nb-NO'
  utterance.rate = rate
  const voice = norwegianVoice()
  if (voice) utterance.voice = voice
  window.speechSynthesis.speak(utterance)
}

export function speechAvailable(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window
}
