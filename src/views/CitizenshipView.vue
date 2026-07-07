<script setup lang="ts">
import { computed, onUnmounted, ref } from 'vue'
import { citizenshipQuestions, citizenshipTopics } from '../data/citizenship'
import { useProgressStore } from '../stores/progress'
import { permutation, shuffle } from '../lib/utils'
import type { CitizenshipQuestion } from '../types'

const progress = useProgressStore()

type Mode = 'menu' | 'practice' | 'exam' | 'result'

const EXAM_SIZE = 36
const EXAM_MINUTES = 60
const PASS_MARK = 24

interface ActiveQuestion {
  q: CitizenshipQuestion
  options: string[]
  optionsEn: string[]
  correctIndex: number
}

const mode = ref<Mode>('menu')
const topicFilter = ref<string>('alle')
const showEnglish = ref(false)

const session = ref<ActiveQuestion[]>([])
const index = ref(0)
const selected = ref<number | null>(null)
const answers = ref<(number | null)[]>([])
const score = ref(0)

// exam timer
const secondsLeft = ref(EXAM_MINUTES * 60)
let timer: ReturnType<typeof setInterval> | null = null

const current = computed(() => session.value[index.value])
const timeDisplay = computed(() => {
  const m = Math.floor(secondsLeft.value / 60)
  const s = secondsLeft.value % 60
  return `${m}:${String(s).padStart(2, '0')}`
})
const examScore = computed(() =>
  session.value.reduce(
    (sum, aq, i) => sum + (answers.value[i] === aq.correctIndex ? 1 : 0),
    0,
  ),
)

function buildSession(pool: CitizenshipQuestion[], size: number) {
  session.value = shuffle(pool)
    .slice(0, size)
    .map((q) => {
      const perm = permutation(q.options.length)
      return {
        q,
        options: perm.map((i) => q.options[i]),
        optionsEn: perm.map((i) => q.optionsEn[i]),
        correctIndex: perm.indexOf(q.answer),
      }
    })
  index.value = 0
  selected.value = null
  score.value = 0
  answers.value = Array(session.value.length).fill(null)
}

function startPractice() {
  const pool = citizenshipQuestions.filter(
    (q) => topicFilter.value === 'alle' || q.topic === topicFilter.value,
  )
  buildSession(pool, 12)
  mode.value = 'practice'
}

function startExam() {
  buildSession(citizenshipQuestions, EXAM_SIZE)
  showEnglish.value = false
  secondsLeft.value = EXAM_MINUTES * 60
  mode.value = 'exam'
  timer = setInterval(() => {
    secondsLeft.value--
    if (secondsLeft.value <= 0) finishExam()
  }, 1000)
}

function stopTimer() {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
}
onUnmounted(stopTimer)

function finishExam() {
  stopTimer()
  progress.recordExam(examScore.value, session.value.length)
  mode.value = 'result'
}

function choosePractice(i: number) {
  if (selected.value !== null || !current.value) return
  selected.value = i
  answers.value[index.value] = i
  if (i === current.value.correctIndex) score.value++
}

function chooseExam(i: number) {
  answers.value[index.value] = i
}

function nextPractice() {
  if (index.value + 1 >= session.value.length) {
    progress.recordQuiz('citizenship', score.value, session.value.length)
    mode.value = 'result'
  } else {
    index.value++
    selected.value = null
  }
}

function practiceOptionClass(i: number): string {
  if (selected.value === null) return 'btn-ghost bg-card hover:border-fjord'
  if (i === current.value?.correctIndex) return 'border-moss bg-moss-wash text-moss'
  if (i === selected.value) return 'border-rod bg-rod-wash text-rod-deep'
  return 'btn-ghost opacity-50'
}

const wrongAnswers = computed(() =>
  session.value.filter((aq, i) => answers.value[i] !== aq.correctIndex),
)

function backToMenu() {
  stopTimer()
  mode.value = 'menu'
  session.value = []
}
</script>

<template>
  <div class="mx-auto max-w-2xl">
    <p class="kicker rise rise-1">Modul 04 · Samfunnskunnskap</p>
    <h1 class="display rise rise-1 mt-1 text-3xl font-black text-ink">Statsborgerprøven</h1>

    <!-- ═══ menu ═══ -->
    <template v-if="mode === 'menu'">
      <div class="card rise rise-2 mt-6 border-l-4 border-l-gull p-5 text-sm text-ink-soft">
        Den ekte prøven: <strong>36 spørsmål · minst 24 riktige · 60 minutter · på norsk.</strong>
        Øv med engelsk støtte først, og ta simuleringen når du er klar.
      </div>

      <div class="card rise rise-3 mt-4 p-6">
        <h2 class="display text-xl font-black text-ink">Øvingsmodus</h2>
        <p class="mt-1 text-sm text-ink-soft">12 spørsmål med fasit og forklaring med en gang. Engelsk oversettelse tilgjengelig.</p>
        <div class="mt-4 flex flex-wrap gap-2">
          <button
            class="btn"
            :class="topicFilter === 'alle' ? 'btn-primary' : 'btn-ghost'"
            @click="topicFilter = 'alle'"
          >
            Alle temaer
          </button>
          <button
            v-for="t in citizenshipTopics"
            :key="t"
            class="btn"
            :class="topicFilter === t ? 'btn-primary' : 'btn-ghost'"
            @click="topicFilter = t"
          >
            {{ t }}
          </button>
        </div>
        <button class="btn btn-primary mt-5 w-full" @click="startPractice">Start øving</button>
      </div>

      <div class="card rise rise-4 mt-4 border-2 border-rod p-6">
        <h2 class="display text-xl font-black text-rod">Prøvesimulering</h2>
        <p class="mt-1 text-sm text-ink-soft">
          Som den ekte prøven: 36 spørsmål, 60 minutter, ingen fasit underveis, ingen engelsk hjelp.
          Du trenger 24 riktige for å bestå.
        </p>
        <p v-if="progress.bestExam" class="mt-2 text-sm font-bold" :class="progress.bestExam.passed ? 'text-moss' : 'text-gull'">
          Beste forsøk: {{ progress.bestExam.score }}/{{ progress.bestExam.total }}
          {{ progress.bestExam.passed ? '— bestått! ✓' : '' }}
        </p>
        <button class="btn btn-accent mt-5 w-full" @click="startExam">Start simulering</button>
      </div>
    </template>

    <!-- ═══ practice ═══ -->
    <template v-else-if="mode === 'practice' && current">
      <div class="mt-6 flex items-center justify-between text-xs font-bold text-ink-faint">
        <span>{{ index + 1 }} / {{ session.length }} · {{ score }} riktige</span>
        <div class="flex items-center gap-2">
          <span class="chip bg-gull-wash text-gull">{{ current.q.topic }}</span>
          <button class="chip border border-rule bg-card text-ink-soft" @click="showEnglish = !showEnglish">
            {{ showEnglish ? 'Skjul engelsk' : 'Vis engelsk' }}
          </button>
        </div>
      </div>

      <div class="card mt-4 p-6">
        <p class="display text-xl font-bold text-ink">{{ current.q.no }}</p>
        <p v-if="showEnglish" class="mt-1 text-sm italic text-ink-faint">{{ current.q.en }}</p>

        <div class="mt-5 flex flex-col gap-2">
          <button
            v-for="(opt, i) in current.options"
            :key="i"
            class="btn flex-col items-start border text-left"
            :class="practiceOptionClass(i)"
            @click="choosePractice(i)"
          >
            <span><span class="mr-2 font-black text-ink-faint">{{ 'ABCD'[i] }}</span>{{ opt }}</span>
            <span v-if="showEnglish" class="ml-6 text-xs font-normal italic opacity-70">{{ current.optionsEn[i] }}</span>
          </button>
        </div>

        <div v-if="selected !== null" class="pop mt-4">
          <p
            class="rounded-lg p-3 text-sm"
            :class="selected === current.correctIndex ? 'bg-moss-wash text-moss' : 'bg-rod-wash text-rod-deep'"
          >
            <strong>{{ selected === current.correctIndex ? 'Riktig! ' : 'Ikke riktig. ' }}</strong>
            {{ current.q.explanation }}
          </p>
          <button class="btn btn-accent mt-4 w-full" @click="nextPractice">
            {{ index + 1 >= session.length ? 'Se resultat' : 'Neste spørsmål' }}
          </button>
        </div>
      </div>

      <button class="btn btn-ghost mx-auto mt-6 block" @click="backToMenu">Avbryt</button>
    </template>

    <!-- ═══ exam ═══ -->
    <template v-else-if="mode === 'exam' && current">
      <div class="mt-6 flex items-center justify-between">
        <span class="text-xs font-bold text-ink-faint">Spørsmål {{ index + 1 }} / {{ session.length }}</span>
        <span
          class="chip font-mono text-sm"
          :class="secondsLeft < 300 ? 'bg-rod-wash text-rod-deep' : 'bg-fjord-wash text-fjord'"
        >
          ⏱ {{ timeDisplay }}
        </span>
      </div>

      <div class="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-paper-warm">
        <div
          class="h-full rounded-full bg-rod transition-all duration-300"
          :style="{ width: `${((index + 1) / session.length) * 100}%` }"
        ></div>
      </div>

      <div class="card mt-4 p-6">
        <p class="display text-xl font-bold text-ink">{{ current.q.no }}</p>
        <div class="mt-5 flex flex-col gap-2">
          <button
            v-for="(opt, i) in current.options"
            :key="i"
            class="btn justify-start border text-left"
            :class="answers[index] === i ? 'border-fjord bg-fjord-wash text-fjord' : 'btn-ghost bg-card'"
            @click="chooseExam(i)"
          >
            <span class="mr-2 font-black text-ink-faint">{{ 'ABCD'[i] }}</span>
            {{ opt }}
          </button>
        </div>

        <div class="mt-5 flex gap-2">
          <button class="btn btn-ghost" :disabled="index === 0" @click="index--">← Forrige</button>
          <button
            v-if="index + 1 < session.length"
            class="btn btn-primary flex-1"
            @click="index++"
          >
            Neste →
          </button>
          <button v-else class="btn btn-accent flex-1" @click="finishExam">Lever prøven</button>
        </div>
        <p class="mt-3 text-center text-xs text-ink-faint">
          {{ answers.filter((a) => a !== null).length }} av {{ session.length }} besvart
        </p>
      </div>

      <button class="btn btn-ghost mx-auto mt-6 block" @click="backToMenu">Avbryt prøven</button>
    </template>

    <!-- ═══ result ═══ -->
    <template v-else-if="mode === 'result'">
      <div class="card pop mt-6 p-8 text-center">
        <template v-if="answers.length === EXAM_SIZE">
          <p class="kicker">Prøvesimulering</p>
          <p class="display mt-2 text-5xl font-black" :class="examScore >= PASS_MARK ? 'text-moss' : 'text-rod'">
            {{ examScore }} / {{ session.length }}
          </p>
          <p class="display mt-2 text-2xl font-black" :class="examScore >= PASS_MARK ? 'text-moss' : 'text-rod'">
            {{ examScore >= PASS_MARK ? 'Bestått! 🇳🇴' : 'Ikke bestått ennå' }}
          </p>
          <p class="mt-2 text-sm text-ink-soft">
            {{ examScore >= PASS_MARK
              ? 'Du klarte kravet på 24 riktige. Gjenta simuleringen til du består hver gang.'
              : `Du trenger ${PASS_MARK} riktige. Se gjennom feilene nedenfor og prøv igjen.` }}
          </p>
        </template>
        <template v-else>
          <p class="kicker">Øvingsrunde</p>
          <p class="display mt-2 text-5xl font-black" :class="score >= session.length * 0.7 ? 'text-moss' : 'text-gull'">
            {{ score }} / {{ session.length }}
          </p>
        </template>
      </div>

      <div v-if="wrongAnswers.length > 0" class="mt-6">
        <p class="kicker mb-3">Dette bør du lese om igjen</p>
        <div class="flex flex-col gap-3">
          <div v-for="aq in wrongAnswers" :key="aq.q.id" class="card border-l-4 border-l-rod p-4">
            <p class="font-bold text-ink">{{ aq.q.no }}</p>
            <p class="mt-1 text-sm text-moss"><strong>Riktig svar:</strong> {{ aq.options[aq.correctIndex] }}</p>
            <p class="mt-1 text-sm text-ink-soft">{{ aq.q.explanation }}</p>
          </div>
        </div>
      </div>

      <button class="btn btn-primary mx-auto mt-8 block" @click="backToMenu">Tilbake til menyen</button>
    </template>
  </div>
</template>
