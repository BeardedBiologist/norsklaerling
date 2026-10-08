<script setup lang="ts">
import { computed, onBeforeUnmount, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { sentences } from '../data/sentences'
import { chapterFromQuery, chapterLabel, kurs, kursSentences } from '../data/kurs'
import { useProgressStore } from '../stores/progress'
import { shuffle } from '../lib/utils'
import { speakNorwegian, speechAvailable } from '../lib/speech'
import { stopAudio } from '../lib/audio'
import { listen, recognitionAvailable, type Listening } from '../lib/recognition'
import { compareSentence, normalizeWords, type Comparison } from '../lib/compare'
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

const micOk = recognitionAvailable()
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
const transcript = ref('')
const result = ref<Comparison | null>(null)
const revealed = ref(false)
const counted = ref(false)
const listening = ref(false)
const error = ref('')
let rec: Listening | null = null

function resetItem() {
  stopEverything()
  typed.value = ''
  transcript.value = ''
  result.value = null
  revealed.value = false
  counted.value = false
  error.value = ''
  clearRecording()
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
}

// ── microphone: speech recognition + a recording to listen back to ──
const recordingUrl = ref<string | null>(null)
let recorder: MediaRecorder | null = null
let stream: MediaStream | null = null
const startedAt = ref(0)
const elapsed = ref(0)
let timer: number | undefined

function clearRecording() {
  if (recordingUrl.value) URL.revokeObjectURL(recordingUrl.value)
  recordingUrl.value = null
}

async function startRecorder() {
  try {
    stream = await navigator.mediaDevices.getUserMedia({ audio: true })
    const chunks: Blob[] = []
    recorder = new MediaRecorder(stream)
    recorder.ondataavailable = (e) => chunks.push(e.data)
    recorder.onstop = () => {
      recordingUrl.value = URL.createObjectURL(new Blob(chunks, { type: recorder?.mimeType || 'audio/webm' }))
      stream?.getTracks().forEach((t) => t.stop())
      stream = null
    }
    recorder.start()
  } catch {
    // recording is a bonus — recognition still works without it
  }
}

function startSpeaking() {
  error.value = ''
  transcript.value = ''
  result.value = null
  clearRecording()
  stopAudio()
  const free = mode.value === 'fritt'
  rec = listen({
    continuous: free,
    onUpdate: (t) => (transcript.value = t),
    onDone: (t) => {
      listening.value = false
      transcript.value = t
      stopRecorder()
      if (!free && t) grade(t)
    },
    onError: (m) => (error.value = m),
  })
  if (!rec) return
  listening.value = true
  if (free) {
    void startRecorder()
    startedAt.value = Date.now()
    elapsed.value = 0
    timer = window.setInterval(() => (elapsed.value = Math.round((Date.now() - startedAt.value) / 1000)), 500)
  }
}

function stopSpeaking() {
  rec?.stop()
}

function stopRecorder() {
  window.clearInterval(timer)
  if (recorder && recorder.state !== 'inactive') recorder.stop()
  recorder = null
}

function stopEverything() {
  rec?.stop()
  rec = null
  listening.value = false
  stopRecorder()
  stream?.getTracks().forEach((t) => t.stop())
  stream = null
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
  } else {
    index.value++
    resetItem()
  }
}

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

        <div v-if="transcript" class="mt-5 rounded-xl bg-paper p-4">
          <p class="kicker">Dette hørte jeg</p>
          <p class="mt-1 leading-relaxed text-ink">{{ transcript }}</p>
        </div>

        <template v-if="!listening && transcript">
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
