<script setup lang="ts">
import { computed, ref } from 'vue'
import { speakNorwegian, speechAvailable } from '../lib/speech'
import { stopAudio } from '../lib/audio'
import { useSpeechCapture } from '../lib/useSpeechCapture'
import { analyseFreeSpeech, conversationFeedback, conversationTurn, type ConversationLine, type FreeFeedback } from '../lib/ai'
import FreeFeedbackCard from './FreeFeedbackCard.vue'
import type { SpeakingTask } from '../types'

/**
 * One item in the kapittelprøve's oral part: a spoken answer or a short
 * role-play, graded by the AI. The grade stays hidden until the test is
 * handed in (like a real oral exam); a second attempt is allowed, and the
 * better one counts.
 */
const props = defineProps<{
  task: SpeakingTask
  n: number
  level: string
  /** the test has been handed in: show the feedback */
  submitted: boolean
  /** another oral item is recording */
  locked: boolean
}>()
const emit = defineEmits<{
  graded: [score: number, fb: FreeFeedback]
  busy: [busy: boolean]
  failed: []
}>()

const MAX_ATTEMPTS = 2
const ttsOk = speechAvailable()
const capture = useSpeechCapture()
const { listening, transcript, error, recFailed, elapsed } = capture
const aiLoading = ref(false)
const aiError = ref('')
const attempts = ref(0)
const best = ref<{ score: number; fb: FreeFeedback } | null>(null)
const turnNotes = ref<{ word: string; issue: string }[]>([])

const history = ref<ConversationLine[]>(props.task.role ? [{ who: 'ai', text: props.task.role.opening }] : [])
const learnerTurns = computed(() => history.value.filter((l) => l.who === 'learner').length)
const inConversation = ref(false)

const canTry = computed(() => !props.submitted && attempts.value < MAX_ATTEMPTS && !aiLoading.value && !props.locked)

function say(text: string) {
  if (ttsOk) speakNorwegian(text, 0.9)
}

const average = (s: FreeFeedback['scores']) => (s.task + s.coherence + s.vocabulary + s.grammar + s.fluency) / 25

function grade(fb: FreeFeedback) {
  const score = average(fb.scores)
  if (!best.value || score > best.value.score) {
    best.value = { score, fb }
    emit('graded', score, fb)
  }
}

function fail(e: unknown) {
  aiError.value = e instanceof Error ? e.message : String(e)
  emit('failed')
}

function begin(onFinish: (t: string, blob: Blob | null) => void) {
  aiError.value = ''
  stopAudio()
  emit('busy', true)
  capture.start({
    continuous: true,
    onFinish: ({ transcript: t, blob }) => {
      emit('busy', false)
      if (t || blob) onFinish(t, blob)
    },
  })
}

/** spoken answer */
function startAnswer() {
  begin((t, blob) => void judge(t, blob))
}

async function judge(t: string, blob: Blob | null) {
  aiLoading.value = true
  try {
    const fb = await analyseFreeSpeech({ question: props.task.prompt, transcript: t, audio: blob, level: props.level, taskType: props.task.type, hints: props.task.hints })
    attempts.value++
    grade(fb)
  } catch (e) {
    fail(e)
  } finally {
    aiLoading.value = false
  }
}

/** role-play */
function startConversation() {
  history.value = [{ who: 'ai', text: props.task.role!.opening }]
  turnNotes.value = []
  inConversation.value = true
  say(props.task.role!.opening)
}

function startTurn() {
  begin((t, blob) => void sendTurn(t, blob))
}

async function sendTurn(t: string, blob: Blob | null) {
  const role = props.task.role
  if (!role) return
  aiLoading.value = true
  try {
    const last = learnerTurns.value + 1 >= role.turns
    const turn = await conversationTurn({ role: role.ai, goal: role.goal, level: props.level, history: history.value, transcript: t, audio: blob, last })
    history.value.push({ who: 'learner', text: turn.heard || t })
    turnNotes.value.push(...turn.notes)
    history.value.push({ who: 'ai', text: turn.reply })
    capture.clear()
    say(turn.reply)
    if (last) await finishConversation()
  } catch (e) {
    fail(e)
  } finally {
    aiLoading.value = false
  }
}

async function finishConversation() {
  const role = props.task.role
  if (!role || !learnerTurns.value) return
  inConversation.value = false
  aiLoading.value = true
  try {
    const fb = await conversationFeedback({ role: role.ai, goal: role.goal, level: props.level, history: history.value })
    attempts.value++
    grade(fb)
  } catch (e) {
    fail(e)
  } finally {
    aiLoading.value = false
  }
}
</script>

<template>
  <div class="mt-5 rounded-xl border border-rule bg-paper p-4">
    <p class="text-xs font-bold text-ink-faint">{{ task.type === 'samtale' ? '🗣 Samtale' : '🎙 Muntlig svar' }} {{ n }}</p>
    <p class="mt-1 font-bold text-ink">{{ task.prompt }}</p>
    <p v-if="task.en" class="text-sm italic text-ink-faint">{{ task.en }}</p>
    <p v-if="task.role" class="mt-1 text-sm text-ink-soft"><strong>Mål:</strong> {{ task.role.goal }} · ca. {{ task.role.turns }} svar</p>
    <div v-if="task.hints?.length" class="mt-2 flex flex-wrap gap-1.5">
      <span v-for="h in task.hints" :key="h" class="chip border border-rule bg-card text-xs text-ink-soft">{{ h }}</span>
    </div>

    <!-- spoken answer -->
    <template v-if="task.type !== 'samtale'">
      <div v-if="!submitted" class="mt-3 flex flex-wrap items-center gap-2">
        <button v-if="ttsOk" class="btn btn-ghost !py-1 text-sm" @click="say(task.prompt)">🔊 Hør oppgaven</button>
        <button v-if="!listening" class="btn btn-accent !py-1.5 text-sm" :disabled="!canTry" @click="startAnswer">
          🎙 {{ attempts ? 'Nytt forsøk' : 'Start svaret' }}
        </button>
        <button v-else class="btn bg-rod !py-1.5 text-sm text-card hover:bg-rod-deep" @click="capture.stop()">■ Ferdig</button>
        <span v-if="listening" class="text-sm font-bold text-rod">● Tar opp · {{ elapsed }} s</span>
      </div>
      <p v-if="transcript && !submitted" class="mt-2 text-sm text-ink-soft">«{{ transcript }}»</p>
    </template>

    <!-- role-play -->
    <template v-else>
      <div v-if="inConversation || (history.length > 1 && !submitted)" class="mt-3 space-y-2">
        <div v-for="(l, i) in history" :key="i" class="flex" :class="l.who === 'learner' ? 'justify-end' : 'justify-start'">
          <div class="max-w-[85%] rounded-2xl px-3 py-2 text-sm" :class="l.who === 'learner' ? 'bg-fjord text-card' : 'bg-card text-ink'">
            {{ l.text }}
            <button v-if="l.who === 'ai' && ttsOk" class="ml-1 text-xs" title="Hør igjen" @click="say(l.text)">🔊</button>
          </div>
        </div>
        <div v-if="listening && transcript" class="flex justify-end">
          <div class="max-w-[85%] rounded-2xl bg-fjord-wash px-3 py-2 text-sm italic text-ink">{{ transcript }} …</div>
        </div>
      </div>
      <div v-if="!submitted" class="mt-3 flex flex-wrap items-center gap-2">
        <button v-if="!inConversation" class="btn btn-accent !py-1.5 text-sm" :disabled="!canTry" @click="startConversation">
          🗣 {{ attempts ? 'Ny samtale' : 'Start samtalen' }}
        </button>
        <template v-else>
          <button v-if="!listening" class="btn btn-accent !py-1.5 text-sm" :disabled="aiLoading || locked" @click="startTurn">🎙 Svar</button>
          <button v-else class="btn bg-rod !py-1.5 text-sm text-card hover:bg-rod-deep" @click="capture.stop()">■ Ferdig</button>
          <span v-if="listening" class="text-sm font-bold text-rod">● Tar opp</span>
          <span v-if="aiLoading" class="text-sm font-bold text-fjord">… svarer</span>
          <button v-if="learnerTurns > 0 && !listening && !aiLoading" class="btn btn-ghost !py-1 text-sm" @click="finishConversation">Avslutt samtalen</button>
          <span class="text-xs text-ink-faint">Svar {{ learnerTurns }} av {{ task.role?.turns }}</span>
        </template>
      </div>
    </template>

    <p v-if="listening && recFailed" class="mt-2 rounded-lg bg-gull-wash p-2 text-sm text-ink">Live-teksten virker ikke akkurat nå, men opptaket går. Trykk ■ Ferdig når du er ferdig.</p>
    <p v-if="error" class="mt-2 text-sm font-bold text-rod">{{ error }}</p>
    <p v-if="aiLoading && !inConversation" class="mt-2 text-sm font-bold text-fjord">🤖 AI-en vurderer …</p>
    <p v-if="aiError" class="mt-2 text-sm font-bold text-rod">{{ aiError }}</p>

    <p v-if="best && !submitted" class="mt-2 text-sm font-bold text-moss">
      ✓ Vurdert{{ attempts < MAX_ATTEMPTS ? ' — du kan ta ett nytt forsøk, det beste teller' : '' }}. Resultatet vises når du leverer.
    </p>
    <p v-else-if="!best && submitted" class="mt-2 text-sm font-bold text-rod">Ikke besvart.</p>

    <template v-if="submitted && best">
      <p class="mt-3 text-sm font-bold" :class="best.score >= 0.6 ? 'text-moss' : 'text-gull'">{{ Math.round(best.score * 100) }} %</p>
      <FreeFeedbackCard class="mt-2" :fb="best.fb" :extra-notes="task.type === 'samtale' ? turnNotes : undefined" />
    </template>
  </div>
</template>
