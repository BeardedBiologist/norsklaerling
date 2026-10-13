<script setup lang="ts">
import { computed, onBeforeUnmount, ref, shallowRef, watch } from 'vue'
import { useRoute } from 'vue-router'
import { sentences } from '../data/sentences'
import { chapterFromQuery, chapterLabel, kurs, kursSentences } from '../data/kurs'
import { useProgressStore } from '../stores/progress'
import { shuffle } from '../lib/utils'
import { speakNorwegian, speechAvailable } from '../lib/speech'
import { stopAudio } from '../lib/audio'
import { speakingSupported, useSpeechCapture } from '../lib/useSpeechCapture'
import { compareSentence, normalizeWords, type Comparison } from '../lib/compare'
import { feedbackDateLabel, loadFeedback, saveFeedback, type StoredFeedback } from '../lib/savedFeedback'
import { deleteRecording, loadRecording, saveRecording, savedAtLabel, type SavedRecording } from '../lib/savedRecordings'
import { aiAvailable, analyseFreeSpeech, analyseSentence, type FreeFeedback, type SentenceFeedback, type SentenceTask } from '../lib/ai'
import FreeFeedbackCard from '../components/FreeFeedbackCard.vue'
import type { Level, SentenceExercise } from '../types'

type Mode = 'diktat' | 'gjenta' | 'si' | 'fritt'

const route = useRoute()
const progress = useProgressStore()

/** ?kapittel=<id> limits the material to one course chapter */
const chapter = computed(() => chapterFromQuery(route.query.kapittel))

const MODES: { id: Mode; icon: string; title: string; desc: string; needsMic: boolean }[] = [
  { id: 'diktat', icon: '✍️', title: 'Diktat', desc: 'Hør en setning og skriv det du hører.', needsMic: false },
  { id: 'gjenta', icon: '🔁', title: 'Hør og gjenta', desc: 'Hør setningen, si den etter. Trener uttale og flyt.', needsMic: true },
  { id: 'si', icon: '🎙', title: 'Si det på norsk', desc: 'Se setningen på engelsk og si den på norsk.', needsMic: true },
  { id: 'fritt', icon: '💬', title: 'Snakk fritt', desc: 'Svar muntlig på et spørsmål, som på muntligprøven.', needsMic: true },
]

const initialMode = String(route.query.modus ?? '')
const mode = ref<Mode>((MODES.some((m) => m.id === initialMode) ? initialMode : 'diktat') as Mode)
const modeInfo = computed(() => MODES.find((m) => m.id === mode.value)!)

const levelFilter = ref<Level | 'alle'>('alle')
const levels: (Level | 'alle')[] = ['alle', 'A1', 'A2', 'B1', 'B2']

const micOk = speakingSupported(aiAvailable())

/** run AI feedback automatically after every answer (remembered in this browser) */
const AUTO_KEY = 'norsklaerling-ai-auto'
const autoAi = ref(true)
try {
  autoAi.value = localStorage.getItem(AUTO_KEY) !== '0'
} catch {
  // storage unavailable — keep the default
}
watch(autoAi, (on) => {
  try {
    localStorage.setItem(AUTO_KEY, on ? '1' : '0')
  } catch {
    // ignore
  }
})
const ttsOk = speechAvailable()

// ── session ──
const SESSION_SIZE = 10
const items = ref<SentenceExercise[]>([])
const prompts = ref<string[]>([])
const index = ref(0)
const score = ref(0)
const done = ref(false)
const active = computed(() => items.value.length > 0 || prompts.value.length > 0)
const total = computed(() => (mode.value === 'fritt' ? prompts.value.length : items.value.length))
const current = computed(() => items.value[index.value])
const currentPrompt = computed(() => prompts.value[index.value])

function start() {
  done.value = false
  index.value = 0
  score.value = 0
  if (mode.value === 'fritt') {
    const pool = chapter.value
      ? chapter.value.speaking
      : kurs.filter((c) => levelFilter.value === 'alle' || c.level === levelFilter.value).flatMap((c) => c.speaking)
    prompts.value = shuffle(pool).slice(0, 5)
    items.value = []
  } else {
    const pool = chapter.value
      ? chapter.value.sentences
      : [...kursSentences, ...sentences].filter((s) => levelFilter.value === 'alle' || s.level === levelFilter.value)
    items.value = shuffle(pool).slice(0, SESSION_SIZE)
    prompts.value = []
  }
  resetItem()
}

function quit() {
  stopEverything()
  items.value = []
  prompts.value = []
}

// ── per-item state ──
const typed = ref('')
const result = ref<Comparison | null>(null)
const revealed = ref(false)
const counted = ref(false)
const capture = useSpeechCapture()
const { listening, transcript, error, recFailed, recordingUrl, hasRecording, elapsed } = capture

function resetItem() {
  stopEverything()
  typed.value = ''
  transcript.value = ''
  result.value = null
  revealed.value = false
  counted.value = false
  aiCredited.value = false
  error.value = ''
  clearRecording()
  void checkSaved()
  if (mode.value === 'diktat' || mode.value === 'gjenta') setTimeout(() => play(), 250)
  if (mode.value === 'fritt') setTimeout(() => playPrompt(), 250)
}

function play(rate = 0.9) {
  if (current.value && ttsOk) speakNorwegian(current.value.no, rate)
}

function playPrompt() {
  if (currentPrompt.value && ttsOk) speakNorwegian(currentPrompt.value, 0.9)
}

const PASS = 0.9

function grade(answer: string) {
  if (!current.value) return
  result.value = compareSentence(current.value.no, answer)
  if (!counted.value) {
    counted.value = true
    if (result.value.score >= PASS) score.value++
  }
  if (result.value.score >= PASS) revealed.value = true
}

function checkTyped() {
  grade(typed.value)
  if (autoAi.value && aiOk && (result.value?.score ?? 0) < 1) void askAi()
}

// ── microphone (shared capture logic: src/lib/useSpeechCapture.ts) ──
function clearRecording() {
  capture.clear()
  restoredAudio.value = null
  freeFb.value = null
  sentFb.value = null
  aiError.value = ''
}

function startSpeaking() {
  restoredAudio.value = null
  saved.value = null
  freeFb.value = null
  sentFb.value = null
  aiError.value = ''
  result.value = null
  stopAudio()
  const free = mode.value === 'fritt'
  capture.start({
    continuous: free,
    onFinal: (t) => {
      if (!free) grade(t)
    },
    onFinish: ({ transcript: t, blob }) => {
      // keep the recording on the device until the AI has judged it
      const key = itemKey()
      if (aiOk && key && (t || blob)) void saveRecording(key, { blob, transcript: t })
      if (autoAi.value && aiOk && (t || blob)) void askAi()
    },
  })
}

function stopSpeaking() {
  capture.stop()
}

function stopEverything() {
  capture.release()
  stopAudio()
}

function reveal() {
  revealed.value = true
  if (!counted.value) counted.value = true
  play()
}

function next() {
  if (index.value + 1 >= total.value) {
    stopEverything()
    done.value = true
    if (mode.value !== 'fritt') progress.recordQuiz(mode.value === 'diktat' ? 'dictation' : 'speaking', score.value, items.value.length)
    else progress.recordActivity()
    if (chapter.value) {
      const result = mode.value === 'fritt' ? 1 : score.value / items.value.length
      progress.recordStep(chapter.value.id, mode.value === 'diktat' ? 'diktat' : `snakk-${mode.value}`, result)
    }
  } else {
    index.value++
    resetItem()
  }
}

// ── AI feedback (Gemini via Firebase AI Logic, free tier) ──
const aiOk = aiAvailable()
const aiLoading = ref(false)
const aiError = ref('')
const freeFb = ref<FreeFeedback | null>(null)
const sentFb = ref<SentenceFeedback | null>(null)
/** the AI accepted an answer the word match rejected — counted once per sentence */
const aiCredited = ref(false)

/** spoken items only: the key a waiting recording is saved under */
function itemKey(): string | null {
  if (mode.value === 'diktat') return null
  const text = mode.value === 'fritt' ? currentPrompt.value : current.value?.no
  return text ? `lytt-${mode.value}-${text}` : null
}

/** a recording of this item that the AI never judged (e.g. before a reload) */
const saved = ref<SavedRecording | null>(null)
/** the AI's feedback the last time this item was answered (any device) */
const previous = ref<StoredFeedback<FreeFeedback | SentenceFeedback> | null>(null)
/** the audio of a saved recording being resent (there is no live recording after a reload) */
const restoredAudio = shallowRef<Blob | null>(null)
async function checkSaved() {
  saved.value = null
  previous.value = null
  const key = feedbackKey()
  if (!aiOk || !key) return
  const [rec, prev] = await Promise.all([mode.value === 'diktat' ? null : loadRecording(key), loadFeedback<FreeFeedback | SentenceFeedback>(key)])
  if (feedbackKey() !== key) return
  previous.value = prev
  if (!hasRecording.value && !listening.value && (!prev || !rec || rec.at > prev.at)) saved.value = rec
}

/** dictation too has AI feedback worth keeping */
function feedbackKey(): string | null {
  if (mode.value === 'diktat') return current.value ? `lytt-diktat-${current.value.no}` : null
  return itemKey()
}
function useSaved() {
  const rec = saved.value
  saved.value = null
  if (!rec) return
  transcript.value = rec.transcript
  restoredAudio.value = rec.blob
  if (mode.value !== 'fritt' && rec.transcript) grade(rec.transcript)
  void askAi()
}
function discardSaved() {
  const key = itemKey()
  if (key) void deleteRecording(key)
  saved.value = null
}

async function askAi() {
  const audio = capture.blob() ?? restoredAudio.value
  const key = itemKey()
  aiLoading.value = true
  aiError.value = ''
  try {
    if (mode.value === 'fritt' && currentPrompt.value) {
      freeFb.value = await analyseFreeSpeech({
        question: currentPrompt.value,
        transcript: transcript.value,
        audio,
        level: chapter.value?.level ?? (levelFilter.value === 'alle' ? 'B1' : levelFilter.value),
      })
      // live recognition gave nothing — show what the AI heard instead
      if (!transcript.value && freeFb.value.heard) transcript.value = freeFb.value.heard
    } else if (current.value) {
      const task = mode.value as SentenceTask
      sentFb.value = await analyseSentence({
        task,
        target: current.value.no,
        english: current.value.en,
        answer: task === 'diktat' ? typed.value : transcript.value,
        audio,
      })
      // live recognition gave nothing — use what the AI heard for «Du sa» and the word match
      if (task !== 'diktat' && !transcript.value && sentFb.value.heard) {
        transcript.value = sentFb.value.heard
        grade(sentFb.value.heard)
      }
      // a different but correct way of saying it still counts
      if (sentFb.value.correct && (result.value?.score ?? 0) < PASS && !aiCredited.value) {
        aiCredited.value = true
        score.value++
        revealed.value = true
      }
    }
    if (key) void deleteRecording(key)
    const fbKey = feedbackKey()
    const fb = freeFb.value ?? sentFb.value
    if (fbKey && fb) void saveFeedback(fbKey, { fb, transcript: mode.value === 'diktat' ? typed.value : transcript.value })
  } catch (e) {
    aiError.value = e instanceof Error ? e.message : String(e)
  } finally {
    aiLoading.value = false
  }
}

const isFreeFb = (fb: FreeFeedback | SentenceFeedback): fb is FreeFeedback => 'scores' in fb

const ERROR_LABELS: Record<string, string> = { ordstilling: 'Ordstilling', bøyning: 'Bøyning', ordvalg: 'Ordvalg', uttale: 'Uttale', annet: 'Annet' }

watch(mode, () => quit())
onBeforeUnmount(() => {
  stopEverything()
  clearRecording()
})

// ── free speaking feedback ──
const LINKERS = [
  'fordi', 'derfor', 'men', 'så', 'når', 'da', 'hvis', 'selv om', 'likevel', 'dessuten', 'i tillegg',
  'for eksempel', 'først', 'deretter', 'til slutt', 'etter min mening', 'jeg synes', 'jeg tror', 'på den ene siden',
  'på den andre siden', 'som', 'at', 'mens', 'alt i alt',
]
const freeStats = computed(() => {
  const words = normalizeWords(transcript.value)
  const text = ' ' + words.join(' ') + ' '
  const used = LINKERS.filter((l) => text.includes(` ${l} `))
  return { words: words.length, used }
})
</script>

<template>
  <div class="mx-auto max-w-2xl">
    <p class="kicker rise rise-1">Modul 07 · Lytting og muntlig</p>
    <h1 class="display rise rise-1 mt-1 text-3xl font-black text-ink">Lytt og snakk</h1>

    <!-- setup / results -->
    <template v-if="!active || done">
      <div v-if="done" class="card pop mt-6 p-6 text-center">
        <template v-if="mode === 'fritt'">
          <p class="display text-2xl font-black text-moss">Godt snakket! 🎙</p>
          <p class="mt-2 text-sm text-ink-soft">Jo mer du snakker, jo lettere blir det. Prøv de samme spørsmålene igjen i morgen.</p>
        </template>
        <template v-else>
          <p class="display text-2xl font-black" :class="score >= items.length * 0.7 ? 'text-moss' : 'text-gull'">
            {{ score }} av {{ items.length }} helt riktige
          </p>
          <p class="mt-2 text-sm text-ink-soft">En setning teller som riktig når minst 90 % av ordene stemmer.</p>
        </template>
        <RouterLink v-if="chapter" :to="`/kurs/${chapter.id}`" class="btn btn-accent mt-4 inline-flex">← Tilbake til kapittelet</RouterLink>
      </div>

      <div class="card rise rise-2 mt-6 p-6">
        <p class="mb-3 text-sm font-bold text-ink-soft">Velg øvelse</p>
        <div class="grid gap-2 sm:grid-cols-2">
          <button
            v-for="m in MODES"
            :key="m.id"
            class="rounded-xl border-2 p-3 text-left transition-colors"
            :class="mode === m.id ? 'border-fjord bg-fjord-wash' : 'border-rule bg-card hover:border-fjord'"
            @click="mode = m.id"
          >
            <span class="block font-bold text-ink">{{ m.icon }} {{ m.title }}</span>
            <span class="block text-xs text-ink-soft">{{ m.desc }}</span>
          </button>
        </div>

        <p v-if="modeInfo.needsMic && !micOk" class="mt-4 rounded-lg bg-rod-wash p-3 text-sm text-rod-deep">
          Nettleseren din støtter ikke talegjenkjenning. Bruk Chrome, Edge eller Safari for de muntlige øvelsene.
        </p>
        <p v-if="!ttsOk && mode !== 'si'" class="mt-4 rounded-lg bg-rod-wash p-3 text-sm text-rod-deep">
          Nettleseren din har ingen norsk stemme for opplesning.
        </p>

        <hr class="dotted-rule my-5" />

        <div v-if="chapter" class="flex flex-wrap items-center justify-between gap-2">
          <span class="chip bg-gull-wash text-gull">{{ chapterLabel(chapter) }}</span>
          <RouterLink to="/lytt" class="text-xs font-bold text-ink-faint no-underline hover:text-fjord">Vis alle nivåer i stedet</RouterLink>
        </div>
        <template v-else>
          <p class="mb-3 text-sm font-bold text-ink-soft">Velg nivå</p>
          <div class="flex flex-wrap gap-2">
            <button
              v-for="l in levels"
              :key="l"
              class="btn"
              :class="levelFilter === l ? 'btn-primary' : 'btn-ghost'"
              @click="levelFilter = l"
            >
              {{ l === 'alle' ? 'Alle nivåer' : l }}
            </button>
          </div>
        </template>

        <label v-if="aiOk" class="mt-5 flex cursor-pointer items-center gap-3">
          <input v-model="autoAi" type="checkbox" class="h-4 w-4 accent-fjord" />
          <span class="text-sm font-medium text-ink">
            🤖 AI-tilbakemelding automatisk etter hvert svar
            <span class="block text-xs text-ink-faint">Grammatikk, uttale og forklaringer. Slå av for å spare gratiskvoten — du kan fortsatt be om det med en knapp.</span>
          </span>
        </label>
        <button class="btn btn-accent mt-5 w-full" :disabled="modeInfo.needsMic && !micOk" @click="start">
          Start {{ modeInfo.title.toLowerCase() }}
        </button>
        <p v-if="modeInfo.needsMic && micOk" class="mt-3 text-center text-xs text-ink-faint">
          Første gang spør nettleseren om lov til å bruke mikrofonen. I Chrome sendes lyden til Google for å gjøres om til tekst.
        </p>
      </div>
    </template>

    <!-- free speaking -->
    <template v-else-if="mode === 'fritt' && currentPrompt">
      <div class="mt-6 flex items-center justify-between text-xs font-bold text-ink-faint">
        <span>Spørsmål {{ index + 1 }} / {{ prompts.length }}</span>
        <span v-if="listening" class="chip bg-rod-wash text-rod-deep">● Tar opp · {{ elapsed }} s</span>
      </div>

      <div class="card mt-4 p-6">
        <p class="kicker">Svar muntlig — snakk i 30–60 sekunder</p>
        <p class="display mt-1 text-xl font-bold text-ink">{{ currentPrompt }}</p>
        <button v-if="ttsOk" class="btn btn-ghost mt-3 !py-1 text-sm" @click="playPrompt">🔊 Hør spørsmålet</button>

        <div class="mt-5 flex flex-wrap gap-2">
          <button v-if="!listening" class="btn btn-primary" @click="startSpeaking">🎙 {{ transcript ? 'Svar på nytt' : 'Start svaret' }}</button>
          <button v-else class="btn bg-rod text-card hover:bg-rod-deep" @click="stopSpeaking">■ Ferdig</button>
        </div>

        <p v-if="error" class="mt-3 text-sm font-bold text-rod">{{ error }}</p>

<div v-if="saved && !aiLoading && !listening" class="mt-3 rounded-lg bg-gull-wash p-3 text-sm text-ink">
          Du har et opptak fra {{ savedAtLabel(saved.at) }} som AI-en ikke fikk vurdert<template v-if="saved.transcript">: «{{ saved.transcript }}»</template>.
          <div class="mt-2 flex flex-wrap gap-2">
            <button class="btn btn-accent !py-1 text-sm" @click="useSaved">🤖 Send opptaket til AI-en</button>
            <button class="btn btn-ghost !py-1 text-sm" @click="discardSaved">Slett</button>
          </div>
        </div>
        <p v-if="listening && recFailed" class="mt-3 rounded-lg bg-gull-wash p-2 text-sm text-ink">
          Live-teksten virker ikke i denne nettleseren akkurat nå, men opptaket går. Trykk <strong>■ Ferdig</strong> når du er ferdig, så lytter AI-en til svaret.
        </p>
        <div v-if="transcript" class="mt-5 rounded-xl bg-paper p-4">
          <p class="kicker">Dette hørte jeg</p>
          <p class="mt-1 leading-relaxed text-ink">{{ transcript }}</p>
        </div>

        <template v-if="!listening && (transcript || hasRecording || restoredAudio)">
          <audio v-if="recordingUrl" :src="recordingUrl" controls class="mt-4 w-full" />
          <div class="mt-4 grid gap-3 sm:grid-cols-2">
            <div class="rounded-xl border border-rule p-3">
              <p class="kicker">Lengde</p>
              <p class="mt-1 text-sm text-ink">
                <strong>{{ freeStats.words }}</strong> ord<span v-if="elapsed"> på {{ elapsed }} sekunder</span>.
                <span v-if="freeStats.words < 40" class="text-gull">Prøv å si litt mer — på B1 forventes flere setninger.</span>
                <span v-else class="text-moss">Fin lengde.</span>
              </p>
            </div>
            <div class="rounded-xl border border-rule p-3">
              <p class="kicker">Bindeord du brukte</p>
              <p class="mt-1 text-sm text-ink">
                <template v-if="freeStats.used.length">{{ freeStats.used.join(', ') }}</template>
                <span v-else class="text-gull">Ingen ennå — prøv «fordi», «derfor», «men» eller «for eksempel».</span>
              </p>
            </div>
          </div>
          <div class="mt-4 rounded-xl bg-gull-wash p-4 text-sm text-ink-soft">
            <p class="font-bold text-ink">Hør på opptaket og sjekk selv:</p>
            <ul class="mt-1 space-y-0.5">
              <li>☐ Svarte jeg på det spørsmålet faktisk spurte om?</li>
              <li>☐ Står verbet på plass to — også etter «i dag», «i Norge», «da jeg …»?</li>
              <li>☐ Står «ikke» foran verbet i leddsetninger (… fordi jeg ikke har tid)?</li>
              <li>☐ Begrunnet jeg meningen min med et eksempel?</li>
            </ul>
          </div>
          <details v-if="aiOk && previous && !freeFb && !sentFb && !listening && !aiLoading" class="mt-4 rounded-xl border border-rule bg-paper p-3 text-sm">
            <summary class="cursor-pointer font-bold text-ink-soft">Forrige tilbakemelding fra AI-en · {{ feedbackDateLabel(previous.at) }}</summary>
            <p v-if="previous.transcript" class="mt-2 text-ink-soft">Du sa: <em class="text-ink">«{{ previous.transcript }}»</em></p>
            <FreeFeedbackCard v-if="isFreeFb(previous.fb)" class="mt-2" :fb="previous.fb" />
            <template v-else>
              <p class="mt-2 font-bold" :class="previous.fb.correct ? 'text-moss' : 'text-gull'">{{ previous.fb.correct ? 'Godtatt ✓' : 'Ikke helt riktig' }}</p>
              <p v-if="previous.fb.corrected" class="mt-1 text-ink">Riktig: <strong>{{ previous.fb.corrected }}</strong></p>
              <ul v-if="previous.fb.errors.length" class="mt-1 list-disc pl-5 text-ink-soft">
                <li v-for="(e, ei) in previous.fb.errors" :key="ei"><strong class="text-ink">{{ e.said }} → {{ e.correct }}</strong> — {{ e.explanation }}</li>
              </ul>
              <p v-if="previous.fb.tip" class="mt-1 text-ink-soft">💡 {{ previous.fb.tip }}</p>
            </template>
          </details>
          <div v-if="aiOk" class="mt-4">
            <p v-if="aiLoading" class="text-sm font-bold text-fjord">🤖 AI-en lytter til svaret ditt … <span class="font-normal text-ink-faint">(kan ta opptil et minutt)</span></p>
            <button v-else-if="!freeFb" class="btn btn-primary" :disabled="listening" @click="askAi">{{ aiError ? '🔁 Send samme opptak på nytt' : '🤖 Få tilbakemelding fra AI' }}</button>
            <p v-if="aiError" class="mt-2 text-sm font-bold text-rod">{{ aiError }}</p>
          </div>

          <FreeFeedbackCard v-if="freeFb" class="mt-4" :fb="freeFb" />
        </template>

        <hr class="dotted-rule my-5" />
        <button class="btn btn-accent w-full" :disabled="listening" @click="next">
          {{ index + 1 >= prompts.length ? 'Ferdig' : 'Neste spørsmål' }}
        </button>
      </div>

      <button class="btn btn-ghost mx-auto mt-6 block" @click="quit">Avslutt økten</button>
    </template>

    <!-- sentence modes -->
    <template v-else-if="current">
      <div class="mt-6 flex items-center justify-between text-xs font-bold text-ink-faint">
        <span>{{ index + 1 }} / {{ items.length }} · {{ score }} riktige</span>
        <span class="chip bg-fjord-wash text-fjord">{{ current.level }} · {{ current.focus }}</span>
      </div>

      <div class="card mt-4 p-6">
        <!-- prompt -->
        <template v-if="mode === 'diktat'">
          <p class="kicker">Skriv det du hører</p>
        </template>
        <template v-else-if="mode === 'gjenta'">
          <p class="kicker">Hør og si setningen etter</p>
          <p class="display mt-1 text-xl font-bold text-ink">{{ current.no }}</p>
        </template>
        <template v-else>
          <p class="kicker">Si dette på norsk</p>
          <p class="display mt-1 text-xl font-bold text-ink">“{{ current.en }}”</p>
        </template>

        <div v-if="mode !== 'si' || revealed" class="mt-3 flex flex-wrap gap-2">
          <button v-if="ttsOk" class="btn btn-primary" @click="play()">🔊 Hør {{ mode === 'si' ? 'fasit' : 'igjen' }}</button>
          <button v-if="ttsOk" class="btn btn-ghost" @click="play(0.6)">🐢 Sakte</button>
        </div>

        <!-- answer: typing -->
        <template v-if="mode === 'diktat'">
          <textarea
            v-model="typed"
            rows="2"
            class="mt-5 w-full rounded-xl border-2 border-rule bg-paper p-3 text-lg text-ink focus:border-fjord focus:outline-none"
            placeholder="Skriv setningen her …"
            :disabled="revealed"
            @keydown.enter.prevent="checkTyped"
          />
          <div v-if="!revealed" class="mt-3 flex gap-2">
            <button class="btn btn-accent flex-1" :disabled="!typed.trim()" @click="checkTyped">Sjekk</button>
            <button class="btn btn-ghost" @click="reveal">Vis svar</button>
          </div>
        </template>

        <!-- answer: speaking -->
        <template v-else>
          <div class="mt-5 flex flex-wrap items-center gap-2">
            <button v-if="!listening" class="btn btn-accent" :disabled="revealed && (result?.score ?? 0) >= PASS" @click="startSpeaking">
              🎙 {{ transcript ? 'Prøv igjen' : 'Snakk' }}
            </button>
            <button v-else class="btn bg-rod text-card hover:bg-rod-deep" @click="stopSpeaking">■ Stopp</button>
            <button v-if="!revealed" class="btn btn-ghost" @click="reveal">Vis svar</button>
            <span v-if="listening" class="text-sm font-bold text-rod">● Lytter …</span>
          </div>
  <div v-if="saved && !aiLoading && !listening" class="mt-3 rounded-lg bg-gull-wash p-3 text-sm text-ink">
            Du har et opptak fra {{ savedAtLabel(saved.at) }} som AI-en ikke fikk vurdert<template v-if="saved.transcript">: «{{ saved.transcript }}»</template>.
            <div class="mt-2 flex flex-wrap gap-2">
              <button class="btn btn-accent !py-1 text-sm" @click="useSaved">🤖 Send opptaket til AI-en</button>
              <button class="btn btn-ghost !py-1 text-sm" @click="discardSaved">Slett</button>
            </div>
          </div>
          <p v-if="listening && recFailed" class="mt-2 rounded-lg bg-gull-wash p-2 text-sm text-ink">
            Live-teksten virker ikke akkurat nå, men opptaket går. Trykk <strong>■ Stopp</strong> når du er ferdig, så lytter AI-en til deg.
          </p>
          <p v-if="transcript" class="mt-3 text-sm text-ink-soft">Du sa: <em class="text-ink">«{{ transcript }}»</em></p>
        </template>

        <p v-if="error" class="mt-3 text-sm font-bold text-rod">{{ error }}</p>

        <!-- feedback -->
        <div v-if="result" class="mt-5 rounded-xl p-4" :class="result.score >= PASS ? 'bg-moss-wash' : 'bg-gull-wash'">
          <p class="font-bold" :class="result.score >= PASS ? 'text-moss' : 'text-gull'">
            {{ result.score >= PASS ? 'Riktig! ✓' : `${Math.round(result.score * 100)} % av ordene stemmer` }}
          </p>
          <p class="mt-2 flex flex-wrap gap-1.5 text-base">
            <span
              v-for="(t, i) in result.tokens"
              :key="i"
              class="rounded px-1"
              :class="{
                'bg-card text-ink': t.status === 'ok',
                'bg-rod-wash text-rod-deep underline decoration-dotted': t.status === 'missing',
                'text-ink-faint line-through': t.status === 'extra',
              }"
              :title="t.status === 'missing' ? 'Manglet' : t.status === 'extra' ? 'Står ikke i setningen' : ''"
            >{{ t.word }}</span>
          </p>
          <p v-if="result.score < PASS" class="mt-2 text-xs text-ink-faint">
            <span class="rounded bg-rod-wash px-1 text-rod-deep">rødt</span> = ord du ikke fikk med ·
            <span class="line-through">gjennomstreket</span> = ord som ikke står i setningen
          </p>
        </div>

        <details v-if="aiOk && previous && !freeFb && !sentFb && !listening && !aiLoading" class="mt-4 rounded-xl border border-rule bg-paper p-3 text-sm">
          <summary class="cursor-pointer font-bold text-ink-soft">Forrige tilbakemelding fra AI-en · {{ feedbackDateLabel(previous.at) }}</summary>
          <p v-if="previous.transcript" class="mt-2 text-ink-soft">Du {{ mode === 'diktat' ? 'skrev' : 'sa' }}: <em class="text-ink">«{{ previous.transcript }}»</em></p>
          <FreeFeedbackCard v-if="isFreeFb(previous.fb)" class="mt-2" :fb="previous.fb" />
          <template v-else>
            <p class="mt-2 font-bold" :class="previous.fb.correct ? 'text-moss' : 'text-gull'">{{ previous.fb.correct ? 'Godtatt ✓' : 'Ikke helt riktig' }}</p>
            <p v-if="previous.fb.corrected" class="mt-1 text-ink">Riktig: <strong>{{ previous.fb.corrected }}</strong></p>
            <ul v-if="previous.fb.errors.length" class="mt-1 list-disc pl-5 text-ink-soft">
              <li v-for="(e, ei) in previous.fb.errors" :key="ei"><strong class="text-ink">{{ e.said }} → {{ e.correct }}</strong> — {{ e.explanation }}</li>
            </ul>
            <p v-if="previous.fb.tip" class="mt-1 text-ink-soft">💡 {{ previous.fb.tip }}</p>
          </template>
        </details>
        <!-- AI feedback (all sentence modes) -->
        <div v-if="aiOk && !listening && (mode === 'diktat' ? !!result : !!transcript || hasRecording || !!restoredAudio)" class="mt-4">
          <p v-if="aiLoading" class="text-sm font-bold text-fjord">🤖 AI-en ser på svaret ditt … <span class="font-normal text-ink-faint">(kan ta opptil et minutt)</span></p>
          <button v-else-if="!sentFb" class="btn btn-primary !py-1 text-sm" @click="askAi">
            {{ aiError ? (mode === 'diktat' ? '🔁 Prøv AI-en igjen' : '🔁 Send samme opptak på nytt') : mode === 'diktat' ? '🤖 Forklar feilene med AI' : '🤖 Få tilbakemelding fra AI' }}
          </button>
          <p v-if="aiError" class="mt-2 text-sm font-bold text-rod">{{ aiError }}</p>
        </div>

        <div v-if="sentFb" class="pop mt-4 space-y-3 rounded-xl border-2 border-fjord bg-fjord-wash p-4 text-sm">
          <div class="flex flex-wrap items-baseline justify-between gap-2">
            <p class="font-bold" :class="sentFb.correct ? 'text-moss' : 'text-gull'">
              <template v-if="aiCredited">AI-en godtar svaret ditt ✓ — det teller som riktig</template>
              <template v-else-if="sentFb.correct">{{ mode === 'diktat' ? 'Riktig skrevet ✓' : 'Riktig ✓' }}</template>
              <template v-else>{{ mode === 'si' ? 'Ikke helt riktig ennå' : mode === 'diktat' ? 'Noen feil i det du skrev' : 'Ikke helt den setningen' }}</template>
            </p>
            <span v-if="sentFb.pronunciationScore > 0" class="chip bg-card text-fjord">Uttale: {{ sentFb.pronunciationScore }}/5</span>
          </div>

          <div v-if="!sentFb.correct || aiCredited || mode === 'si'">
            <p class="kicker">{{ mode === 'si' ? 'Din setning, rettet' : 'Riktig' }}</p>
            <p class="mt-1 rounded-lg bg-card p-2 font-bold text-ink">
              {{ sentFb.corrected }}
              <button v-if="ttsOk" class="ml-1 text-xs font-normal" title="Hør" @click="speakNorwegian(sentFb.corrected, 0.9)">🔊</button>
            </p>
          </div>

          <ul v-if="sentFb.errors.length" class="space-y-2">
            <li v-for="(e, i) in sentFb.errors" :key="i" class="rounded-lg bg-card p-2">
              <span class="chip mr-1 bg-gull-wash text-gull">{{ ERROR_LABELS[e.type] ?? e.type }}</span>
              <span class="text-rod-deep line-through">{{ e.said }}</span> → <strong class="text-moss">{{ e.correct }}</strong>
              <p class="mt-1 text-ink-soft">{{ e.explanation }}</p>
            </li>
          </ul>

          <ul v-if="sentFb.notes.length" class="space-y-1">
            <li v-for="(n, i) in sentFb.notes" :key="i">
              🗣 <strong class="text-ink">{{ n.word }}</strong>
              <button v-if="ttsOk" class="ml-1 text-xs" title="Hør ordet" @click="speakNorwegian(n.word, 0.8)">🔊</button>
              — <span class="text-ink-soft">{{ n.issue }}</span>
            </li>
          </ul>

          <p class="text-ink"><strong>Tips:</strong> {{ sentFb.tip }}</p>
          <p class="text-[11px] text-ink-faint">{{ mode === 'diktat' ? 'Du skrev' : 'Hørt av AI' }}: «{{ sentFb.heard }}» · AI-vurderingen er veiledende.</p>
        </div>
        <div v-if="revealed" class="mt-4 rounded-xl bg-paper p-4">
          <p class="kicker">Fasit</p>
          <p class="mt-1 text-lg font-bold text-ink">{{ current.no }}</p>
          <p class="text-sm italic text-ink-faint">{{ current.en }}</p>
        </div>

        <hr class="dotted-rule my-5" />
        <button v-if="revealed || result" class="btn btn-accent w-full" :disabled="listening" @click="next">
          {{ index + 1 >= items.length ? 'Se resultat' : 'Neste setning' }}
        </button>
      </div>

      <button class="btn btn-ghost mx-auto mt-6 block" @click="quit">Avslutt økten</button>
    </template>
  </div>
</template>
