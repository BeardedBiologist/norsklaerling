<script setup lang="ts">
import { computed, nextTick, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { chapterById, chapterLabel, courses, kurs } from '../data/kurs'
import { passesTask, speakingTarget, speakingTasksFor, taskPassKey, taskScoreKey } from '../data/kurs/speaking'
import { useProgressStore } from '../stores/progress'
import { useJourney } from '../lib/journey'
import { speakNorwegian, speechAvailable } from '../lib/speech'
import { stopAudio } from '../lib/audio'
import { speakingSupported, useSpeechCapture } from '../lib/useSpeechCapture'
import {
  aiAvailable,
  analyseFreeSpeech,
  conversationFeedback,
  conversationTurn,
  type ConversationLine,
  type FreeFeedback,
} from '../lib/ai'
import FreeFeedbackCard from '../components/FreeFeedbackCard.vue'
import type { SpeakingTask, SpeakingTaskType } from '../types'

/**
 * Snakkeoppgaver: graded speaking tasks per chapter. Single answers are
 * recorded and judged by the AI; conversations let the AI play a role over
 * several spoken turns and then judge the whole conversation. Passed tasks
 * count towards the chapter's speaking step on the journey.
 */
const route = useRoute()
const router = useRouter()
const progress = useProgressStore()
const journey = useJourney()

const aiOk = aiAvailable()
const micOk = speakingSupported(aiOk)
const ttsOk = speechAvailable()

const chapter = computed(
  () => chapterById(String(route.query.kapittel ?? '')) ?? journey.current.value?.chapter ?? kurs[0],
)
const tasks = computed(() => speakingTasksFor(chapter.value))
const target = computed(() => speakingTarget(chapter.value))

const isPassed = (t: SpeakingTask) => progress.stepValue(chapter.value.id, taskPassKey(t)) === 1
const bestScore = (t: SpeakingTask) => progress.stepValue(chapter.value.id, taskScoreKey(t))
const passedCount = computed(() => tasks.value.filter(isPassed).length)
const passedConversations = computed(() => tasks.value.filter((t) => t.type === 'samtale' && isPassed(t)).length)

const TYPE_INFO: Record<SpeakingTaskType, { icon: string; label: string }> = {
  svar: { icon: '💬', label: 'Svar' },
  fortell: { icon: '📖', label: 'Fortell' },
  beskriv: { icon: '🖼', label: 'Beskriv' },
  mening: { icon: '⚖️', label: 'Mening' },
  sammenlign: { icon: '↔️', label: 'Sammenlign' },
  presenter: { icon: '🎤', label: 'Presenter' },
  samtale: { icon: '🗣', label: 'Samtale' },
}

const filter = ref<'alle' | 'samtale' | 'enkelt' | 'igjen'>('alle')
const shown = computed(() =>
  tasks.value.filter((t) =>
    filter.value === 'samtale' ? t.type === 'samtale' : filter.value === 'enkelt' ? t.type !== 'samtale' : filter.value === 'igjen' ? !isPassed(t) : true,
  ),
)

function pickChapter(id: string) {
  void router.replace({ query: { kapittel: id } })
}

// ── running a task ──
const active = ref<SpeakingTask | null>(null)
const capture = useSpeechCapture()
const { listening, transcript, error, recFailed, recordingUrl, elapsed } = capture
const aiLoading = ref(false)
const aiError = ref('')
const feedback = ref<FreeFeedback | null>(null)
const passedNow = ref<boolean | null>(null)

// conversation state
const history = ref<ConversationLine[]>([])
const turnNotes = ref<{ word: string; issue: string }[]>([])
const learnerTurns = computed(() => history.value.filter((l) => l.who === 'learner').length)
const convDone = ref(false)

function open(t: SpeakingTask) {
  capture.release()
  capture.clear()
  stopAudio()
  active.value = t
  feedback.value = null
  passedNow.value = null
  aiError.value = ''
  history.value = []
  turnNotes.value = []
  convDone.value = false
  if (t.type === 'samtale' && t.role) {
    history.value = [{ who: 'ai', text: t.role.opening }]
    setTimeout(() => say(t.role!.opening), 300)
  } else {
    setTimeout(() => say(t.prompt), 300)
  }
  void nextTick(() => document.getElementById('task-runner')?.scrollIntoView({ behavior: 'smooth', block: 'start' }))
}

function close() {
  capture.release()
  stopAudio()
  active.value = null
}

function say(text: string) {
  if (ttsOk) speakNorwegian(text, 0.9)
}

function record(fb: FreeFeedback) {
  const t = active.value
  if (!t) return
  const s = fb.scores
  progress.recordStep(chapter.value.id, taskScoreKey(t), (s.task + s.coherence + s.vocabulary + s.grammar + s.fluency) / 25)
  passedNow.value = passesTask(s, chapter.value)
  if (passedNow.value) progress.recordStep(chapter.value.id, taskPassKey(t), 1)
}

/** single answer */
function startAnswer() {
  feedback.value = null
  passedNow.value = null
  aiError.value = ''
  stopAudio()
  capture.start({
    continuous: true,
    onFinish: ({ transcript: t, blob }) => {
      if (t || blob) void judgeAnswer(t, blob)
    },
  })
}

async function judgeAnswer(t: string, blob: Blob | null) {
  const task = active.value
  if (!task) return
  aiLoading.value = true
  try {
    const fb = await analyseFreeSpeech({
      question: task.prompt,
      transcript: t,
      audio: blob,
      level: chapter.value.level,
      taskType: task.type,
      hints: task.hints,
    })
    if (!transcript.value && fb.heard) transcript.value = fb.heard
    feedback.value = fb
    record(fb)
  } catch (e) {
    aiError.value = e instanceof Error ? e.message : String(e)
  } finally {
    aiLoading.value = false
  }
}

/** one conversation turn */
function startTurn() {
  aiError.value = ''
  stopAudio()
  capture.start({
    continuous: true,
    onFinish: ({ transcript: t, blob }) => {
      if (t || blob) void sendTurn(t, blob)
    },
  })
}

async function sendTurn(t: string, blob: Blob | null) {
  const task = active.value
  if (!task?.role) return
  aiLoading.value = true
  try {
    const last = learnerTurns.value + 1 >= task.role.turns
    const turn = await conversationTurn({
      role: task.role.ai,
      goal: task.role.goal,
      level: chapter.value.level,
      history: history.value,
      transcript: t,
      audio: blob,
      last,
    })
    history.value.push({ who: 'learner', text: turn.heard || t })
    turnNotes.value.push(...turn.notes)
    history.value.push({ who: 'ai', text: turn.reply })
    capture.clear()
    say(turn.reply)
    if (last) await finishConversation()
  } catch (e) {
    aiError.value = e instanceof Error ? e.message : String(e)
  } finally {
    aiLoading.value = false
  }
}

async function finishConversation() {
  const task = active.value
  if (!task?.role || !learnerTurns.value) return
  convDone.value = true
  aiLoading.value = true
  try {
    const fb = await conversationFeedback({ role: task.role.ai, goal: task.role.goal, level: chapter.value.level, history: history.value })
    feedback.value = fb
    record(fb)
  } catch (e) {
    aiError.value = e instanceof Error ? e.message : String(e)
  } finally {
    aiLoading.value = false
  }
}

const nextTask = computed(() => {
  if (!active.value) return null
  const i = tasks.value.findIndex((t) => t.id === active.value!.id)
  return tasks.value.slice(i + 1).find((t) => !isPassed(t)) ?? tasks.value.find((t) => !isPassed(t) && t.id !== active.value!.id) ?? null
})

watch(chapter, () => close())

// open a specific task from the URL (?oppgave=id)
watch(
  () => route.query.oppgave,
  (id) => {
    const t = tasks.value.find((x) => x.id === id)
    if (t) open(t)
  },
  { immediate: true },
)
</script>

<template>
  <div class="mx-auto max-w-2xl">
    <p class="kicker rise rise-1">Muntlig trening med AI</p>
    <h1 class="display rise rise-1 mt-1 text-3xl font-black text-ink">Snakkeoppgaver</h1>
    <p class="rise rise-2 mt-2 text-ink-soft">
      Snakk inn svaret ditt — AI-en lytter, retter og gir poeng som på muntligprøven. En oppgave er bestått når du svarer
      på oppgaven og grammatikken holder for nivået. I samtalene spiller AI-en en rolle, og dere snakker sammen i flere runder.
    </p>

    <p v-if="!aiOk" class="mt-4 rounded-lg bg-rod-wash p-3 text-sm text-rod-deep">AI-tilbakemelding er ikke tilgjengelig her (Firebase er ikke konfigurert).</p>
    <p v-else-if="!micOk" class="mt-4 rounded-lg bg-rod-wash p-3 text-sm text-rod-deep">Nettleseren kan ikke ta opp lyd. Bruk Safari på iPhone eller Chrome på Android/PC.</p>

    <!-- chapter + progress -->
    <div class="card rise rise-2 mt-6 p-5">
      <label class="text-sm font-bold text-ink-soft" for="kap">Kapittel</label>
      <select id="kap" class="mt-1 w-full rounded-lg border border-rule bg-card p-2 text-ink" :value="chapter.id" @change="pickChapter(($event.target as HTMLSelectElement).value)">
        <optgroup v-for="course in (['nybegynner', 'b1'] as const)" :key="course" :label="courses[course].title">
          <option v-for="c in kurs.filter((k) => k.course === course)" :key="c.id" :value="c.id">{{ c.n }}. {{ c.title }} ({{ c.level }})</option>
        </optgroup>
      </select>
      <div class="mt-4 flex flex-wrap items-center justify-between gap-2 text-sm">
        <span class="font-bold" :class="passedCount >= target.passes && passedConversations >= target.conversations ? 'text-moss' : 'text-ink'">
          {{ passedCount }} av {{ tasks.length }} bestått · mål for kapittelet: {{ target.passes }}{{ target.conversations ? ` (minst ${target.conversations} samtale)` : '' }}
        </span>
        <RouterLink :to="`/kurs/${chapter.id}#item-tale`" class="text-xs font-bold text-fjord">Til kapittelet →</RouterLink>
      </div>
      <div class="mt-2 h-2 overflow-hidden rounded-full bg-paper-warm">
        <div class="h-full rounded-full bg-moss" :style="{ width: Math.min(100, (passedCount / target.passes) * 100) + '%' }" />
      </div>
    </div>

    <!-- runner -->
    <section v-if="active" id="task-runner" class="card mt-6 scroll-mt-32 border-2 border-gull p-5">
      <div class="flex items-start justify-between gap-2">
        <p class="kicker">{{ TYPE_INFO[active.type].icon }} {{ TYPE_INFO[active.type].label }} · {{ chapterLabel(chapter) }}</p>
        <button class="text-sm font-bold text-ink-faint hover:text-fjord" @click="close">✕ Lukk</button>
      </div>
      <p class="display mt-1 text-xl font-bold text-ink">{{ active.prompt }}</p>
      <p v-if="active.en" class="text-sm italic text-ink-faint">{{ active.en }}</p>
      <p v-if="active.role" class="mt-1 text-sm text-ink-soft"><strong>Mål:</strong> {{ active.role.goal }} · ca. {{ active.role.turns }} svar</p>
      <div v-if="active.hints?.length" class="mt-2 flex flex-wrap gap-1.5">
        <span v-for="h in active.hints" :key="h" class="chip border border-rule bg-paper text-xs text-ink-soft">{{ h }}</span>
      </div>

      <!-- single answer -->
      <template v-if="active.type !== 'samtale'">
        <div class="mt-4 flex flex-wrap items-center gap-2">
          <button v-if="ttsOk" class="btn btn-ghost !py-1 text-sm" @click="say(active.prompt)">🔊 Hør oppgaven</button>
          <button v-if="!listening" class="btn btn-accent" :disabled="aiLoading || !micOk || !aiOk" @click="startAnswer">
            🎙 {{ feedback || transcript ? 'Svar på nytt' : 'Start svaret' }}
          </button>
          <button v-else class="btn bg-rod text-card hover:bg-rod-deep" @click="capture.stop()">■ Ferdig</button>
          <span v-if="listening" class="text-sm font-bold text-rod">● Tar opp · {{ elapsed }} s</span>
        </div>
        <p v-if="listening && recFailed" class="mt-2 rounded-lg bg-gull-wash p-2 text-sm text-ink">Live-teksten virker ikke akkurat nå, men opptaket går. Trykk ■ Ferdig når du er ferdig.</p>
        <div v-if="transcript" class="mt-4 rounded-xl bg-paper p-3 text-sm">
          <p class="kicker">Dette hørte jeg</p>
          <p class="mt-1 text-ink">{{ transcript }}</p>
        </div>
        <audio v-if="recordingUrl && !listening" :src="recordingUrl" controls class="mt-3 w-full" />
      </template>

      <!-- conversation -->
      <template v-else>
        <div class="mt-4 space-y-2">
          <div v-for="(l, i) in history" :key="i" class="flex" :class="l.who === 'learner' ? 'justify-end' : 'justify-start'">
            <div class="max-w-[85%] rounded-2xl px-3 py-2 text-sm" :class="l.who === 'learner' ? 'bg-fjord text-card' : 'bg-paper text-ink'">
              {{ l.text }}
              <button v-if="l.who === 'ai' && ttsOk" class="ml-1 text-xs" title="Hør igjen" @click="say(l.text)">🔊</button>
            </div>
          </div>
          <div v-if="listening && transcript" class="flex justify-end">
            <div class="max-w-[85%] rounded-2xl bg-fjord-wash px-3 py-2 text-sm italic text-ink">{{ transcript }} …</div>
          </div>
        </div>
        <div v-if="!convDone" class="mt-4 flex flex-wrap items-center gap-2">
          <button v-if="!listening" class="btn btn-accent" :disabled="aiLoading || !micOk || !aiOk" @click="startTurn">🎙 Svar</button>
          <button v-else class="btn bg-rod text-card hover:bg-rod-deep" @click="capture.stop()">■ Ferdig</button>
          <span v-if="listening" class="text-sm font-bold text-rod">● Tar opp</span>
          <span v-if="aiLoading" class="text-sm font-bold text-fjord">… svarer</span>
          <button v-if="learnerTurns > 0 && !listening && !aiLoading" class="btn btn-ghost !py-1 text-sm" @click="finishConversation">Avslutt og få tilbakemelding</button>
        </div>
        <p v-if="listening && recFailed" class="mt-2 rounded-lg bg-gull-wash p-2 text-sm text-ink">Live-teksten virker ikke akkurat nå, men opptaket går. Trykk ■ Ferdig når du er ferdig.</p>
        <p class="mt-2 text-xs text-ink-faint">Svar {{ learnerTurns }} av {{ active.role?.turns }}</p>
      </template>

      <p v-if="error" class="mt-3 text-sm font-bold text-rod">{{ error }}</p>
      <p v-if="aiLoading && (active.type !== 'samtale' || convDone)" class="mt-4 text-sm font-bold text-fjord">🤖 AI-en vurderer svaret ditt …</p>
      <p v-if="aiError" class="mt-3 text-sm font-bold text-rod">{{ aiError }}</p>

      <!-- result -->
      <template v-if="feedback">
        <p class="mt-4 rounded-lg p-3 font-bold" :class="passedNow ? 'bg-moss-wash text-moss' : 'bg-gull-wash text-gull'">
          {{ passedNow ? 'Bestått ✓ — oppgaven teller for kapittelet' : 'Ikke bestått ennå — se tilbakemeldingen og prøv igjen' }}
        </p>
        <FreeFeedbackCard class="mt-3" :fb="feedback" :extra-notes="turnNotes" />
        <div class="mt-4 flex flex-wrap gap-2">
          <button class="btn btn-ghost" @click="open(active)">Prøv igjen</button>
          <button v-if="nextTask" class="btn btn-accent" @click="open(nextTask)">Neste oppgave →</button>
        </div>
      </template>
    </section>

    <!-- task list -->
    <div class="rise rise-3 mt-6 flex flex-wrap gap-2">
      <button
        v-for="f in ([['alle', 'Alle'], ['samtale', '🗣 Samtaler'], ['enkelt', 'Enkeltsvar'], ['igjen', 'Ikke bestått']] as const)"
        :key="f[0]"
        class="btn !py-1 text-sm"
        :class="filter === f[0] ? 'btn-primary' : 'btn-ghost'"
        @click="filter = f[0]"
      >{{ f[1] }}</button>
    </div>
    <ul class="rise rise-3 mt-3 space-y-2">
      <li v-for="t in shown" :key="t.id">
        <button
          class="card flex w-full items-start gap-3 p-4 text-left transition-shadow hover:shadow-lift"
          :class="active?.id === t.id ? 'ring-2 ring-gull' : ''"
          @click="open(t)"
        >
          <span class="text-xl">{{ isPassed(t) ? '✅' : TYPE_INFO[t.type].icon }}</span>
          <span class="min-w-0 flex-1">
            <span class="block text-xs font-bold text-ink-faint">{{ TYPE_INFO[t.type].label }}</span>
            <span class="block font-bold text-ink">{{ t.prompt }}</span>
            <span v-if="t.role" class="block text-xs text-ink-soft">{{ t.role.goal }}</span>
          </span>
          <span class="shrink-0 text-xs font-bold" :class="isPassed(t) ? 'text-moss' : 'text-ink-faint'">
            {{ isPassed(t) ? 'Bestått' : bestScore(t) !== undefined ? `${Math.round(bestScore(t)! * 100)} %` : '' }}
          </span>
        </button>
      </li>
    </ul>
  </div>
</template>
