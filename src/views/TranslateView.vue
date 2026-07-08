<script setup lang="ts">
import { computed, ref } from 'vue'
import { translations, type TranslationExercise } from '../data/translations'
import { useProgressStore } from '../stores/progress'
import { shuffle } from '../lib/utils'
import { speakNorwegian, speechAvailable } from '../lib/speech'
import type { Level } from '../types'

const progress = useProgressStore()

const levelFilter = ref<Level | 'alle'>('alle')
const levels: (Level | 'alle')[] = ['alle', 'A2', 'B1', 'B2']

const session = ref<TranslationExercise[]>([])
const index = ref(0)
const input = ref('')
const status = ref<'answering' | 'correct' | 'wrong' | 'revealed'>('answering')
const attempts = ref(0)
const showHint = ref(false)
const score = ref(0)
const done = ref(false)
const shakeIt = ref(false)

type TokenState = 'correct' | 'present' | 'absent'
const feedback = ref<{ word: string; state: TokenState }[]>([])
const orderNote = ref(false)

const current = computed(() => session.value[index.value])

function normalize(s: string): string[] {
  return s
    .toLowerCase()
    .replace(/[.,!?;:«»"']/g, ' ')
    .split(/\s+/)
    .filter(Boolean)
}

function start() {
  const pool = translations.filter(
    (t) => levelFilter.value === 'alle' || t.level === levelFilter.value,
  )
  session.value = shuffle(pool).slice(0, 10)
  index.value = 0
  score.value = 0
  done.value = false
  resetExercise()
}

function resetExercise() {
  input.value = ''
  status.value = 'answering'
  attempts.value = 0
  showHint.value = false
  feedback.value = []
  orderNote.value = false
}

/** wordle-style: green = right word right place, yellow = right word wrong place */
function tokenFeedback(attempt: string[], target: string[]) {
  const res = attempt.map((word) => ({ word, state: 'absent' as TokenState }))
  const remaining: Record<string, number> = {}
  target.forEach((t, i) => {
    if (attempt[i] === t) res[i].state = 'correct'
    else remaining[t] = (remaining[t] ?? 0) + 1
  })
  res.forEach((r) => {
    if (r.state !== 'correct' && (remaining[r.word] ?? 0) > 0) {
      r.state = 'present'
      remaining[r.word]--
    }
  })
  return res
}

function check() {
  const ex = current.value
  if (!ex || !input.value.trim()) return
  const attempt = normalize(input.value)
  attempts.value++

  const acceptedNorm = ex.accepted.map(normalize)
  if (acceptedNorm.some((a) => a.join(' ') === attempt.join(' '))) {
    status.value = 'correct'
    if (attempts.value === 1) score.value++
    if (speechAvailable()) speakNorwegian(ex.accepted[0])
    return
  }

  // feedback against the closest accepted variant (most shared words)
  let best = acceptedNorm[0]
  let bestShared = -1
  for (const a of acceptedNorm) {
    const set = new Set(a)
    const shared = attempt.filter((w) => set.has(w)).length - Math.abs(a.length - attempt.length) * 0.25
    if (shared > bestShared) {
      bestShared = shared
      best = a
    }
  }
  feedback.value = tokenFeedback(attempt, best)
  orderNote.value =
    [...attempt].sort().join(' ') === [...best].sort().join(' ') && attempt.length === best.length
  status.value = 'wrong'
  shakeIt.value = true
  setTimeout(() => (shakeIt.value = false), 400)
}

function retry() {
  status.value = 'answering'
  feedback.value = []
}

function reveal() {
  status.value = 'revealed'
  if (speechAvailable() && current.value) speakNorwegian(current.value.accepted[0])
}

function next() {
  if (index.value + 1 >= session.value.length) {
    done.value = true
    progress.recordQuiz('translation', score.value, session.value.length)
  } else {
    index.value++
    resetExercise()
  }
}
</script>

<template>
  <div class="mx-auto max-w-2xl">
    <p class="kicker rise rise-1">Modul 05 · Fri produksjon</p>
    <h1 class="display rise rise-1 mt-1 text-3xl font-black text-ink">Oversettelse</h1>

    <!-- setup / results -->
    <template v-if="session.length === 0 || done">
      <div v-if="done" class="card pop mt-6 p-6 text-center">
        <p class="display text-2xl font-black" :class="score >= session.length * 0.7 ? 'text-moss' : 'text-gull'">
          {{ score }} av {{ session.length }} riktige på første forsøk
        </p>
        <p class="mt-2 text-sm text-ink-soft">
          {{ score >= session.length * 0.7
            ? 'Imponerende — å produsere norsk selv er det muntligprøven handler om.'
            : 'Fri produksjon er det vanskeligste som finnes. Hver feil her er læring.' }}
        </p>
      </div>

      <div class="card rise rise-2 mt-6 p-6">
        <p class="text-sm text-ink-soft">
          Her får du en engelsk setning og skriver den norske oversettelsen selv — ingen
          ordbrikker å støtte seg på. Dette er den beste treningen for muntlig og skriftlig
          produksjon på B1-nivå.
        </p>
        <hr class="dotted-rule my-5" />
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
        <hr class="dotted-rule my-5" />
        <button class="btn btn-accent w-full" @click="start">Start 10 oversettelser</button>
      </div>
    </template>

    <!-- exercise -->
    <template v-else-if="current">
      <div class="mt-6 flex items-center justify-between text-xs font-bold text-ink-faint">
        <span>{{ index + 1 }} / {{ session.length }} · {{ score }} riktige</span>
        <span class="chip bg-fjord-wash text-fjord">{{ current.level }} · {{ current.focus }}</span>
      </div>

      <div class="card mt-4 p-6" :class="{ shake: shakeIt }">
        <p class="kicker">Oversett til norsk</p>
        <p class="display mt-1 text-xl font-bold text-ink">“{{ current.en }}”</p>

        <textarea
          v-model="input"
          rows="2"
          :disabled="status === 'correct' || status === 'revealed'"
          placeholder="Skriv den norske setningen her …"
          class="mt-5 w-full resize-none rounded-xl border-2 border-rule bg-paper p-3 text-lg text-ink outline-none transition-colors focus:border-fjord disabled:opacity-70"
          :class="{
            '!border-moss !bg-moss-wash': status === 'correct',
            '!border-rod': status === 'wrong',
          }"
          @keydown.enter.prevent="status === 'answering' ? check() : next()"
        ></textarea>

        <!-- word-level feedback -->
        <div v-if="status === 'wrong'" class="pop mt-3">
          <div class="flex flex-wrap gap-1.5">
            <span
              v-for="(t, i) in feedback"
              :key="i"
              class="rounded-lg px-2 py-1 text-sm font-bold"
              :class="{
                'bg-moss-wash text-moss': t.state === 'correct',
                'bg-gull-wash text-gull': t.state === 'present',
                'bg-rod-wash text-rod-deep line-through': t.state === 'absent',
              }"
            >{{ t.word }}</span>
          </div>
          <p class="mt-2 text-xs text-ink-faint">
            <span class="font-bold text-moss">grønn</span> = riktig ord på riktig plass ·
            <span class="font-bold text-gull">gul</span> = riktig ord, feil plass ·
            <span class="font-bold text-rod">rød</span> = hører ikke hjemme
          </p>
          <p v-if="orderNote" class="mt-2 rounded-lg bg-gull-wash p-2 text-sm font-bold text-gull">
            Alle ordene er riktige — sjekk rekkefølgen! (Husk V2-regelen.)
          </p>
        </div>

        <p v-if="status === 'correct'" class="pop mt-3 rounded-lg bg-moss-wash p-3 text-sm text-moss">
          <strong>Riktig!</strong> «{{ current.accepted[0] }}»
          {{ attempts > 1 ? `(på ${attempts}. forsøk)` : '— på første forsøk! 🎉' }}
        </p>
        <div v-if="status === 'revealed'" class="pop mt-3 rounded-lg bg-fjord-wash p-3 text-sm text-fjord">
          <strong>Fasit:</strong> «{{ current.accepted[0] }}»
          <p v-if="current.accepted.length > 1" class="mt-1 text-xs opacity-80">
            Også riktig: {{ current.accepted.slice(1).map((a) => `«${a}»`).join(' · ') }}
          </p>
        </div>

        <p v-if="showHint && status === 'answering'" class="pop mt-3 rounded-lg bg-gull-wash p-3 text-sm text-ink-soft">
          💡 {{ current.hint }}
        </p>

        <hr class="dotted-rule my-5" />

        <div class="flex flex-wrap gap-2">
          <template v-if="status === 'answering'">
            <button class="btn btn-primary flex-1" :disabled="!input.trim()" @click="check">Sjekk</button>
            <button class="btn btn-ghost" @click="showHint = !showHint">Hint</button>
            <button class="btn btn-ghost" @click="reveal">Vis fasit</button>
          </template>
          <template v-else-if="status === 'wrong'">
            <button class="btn btn-primary flex-1" @click="retry">Prøv igjen</button>
            <button class="btn btn-ghost" @click="showHint = true; retry()">Hint</button>
            <button class="btn btn-ghost" @click="reveal">Vis fasit</button>
          </template>
          <template v-else>
            <button v-if="speechAvailable()" class="btn btn-ghost" @click="speakNorwegian(current.accepted[0])">🔊 Hør</button>
            <button class="btn btn-accent flex-1" @click="next">
              {{ index + 1 >= session.length ? 'Se resultat' : 'Neste setning' }}
            </button>
          </template>
        </div>
      </div>

      <button class="btn btn-ghost mx-auto mt-6 block" @click="session = []">Avslutt økten</button>
    </template>
  </div>
</template>
