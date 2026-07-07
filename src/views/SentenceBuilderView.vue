<script setup lang="ts">
import { computed, ref } from 'vue'
import { sentences } from '../data/sentences'
import { useProgressStore } from '../stores/progress'
import { shuffle } from '../lib/utils'
import { speakNorwegian, speechAvailable } from '../lib/speech'
import type { Level, SentenceExercise } from '../types'

const progress = useProgressStore()

const levelFilter = ref<Level | 'alle'>('alle')
const levels: (Level | 'alle')[] = ['alle', 'A2', 'B1', 'B2']

interface Tile {
  word: string
  key: number
}

const session = ref<SentenceExercise[]>([])
const index = ref(0)
const bank = ref<Tile[]>([])
const built = ref<Tile[]>([])
const status = ref<'building' | 'correct' | 'wrong'>('building')
const showHint = ref(false)
const score = ref(0)
const attempted = ref(0)
const done = ref(false)
const shakeIt = ref(false)

const current = computed(() => session.value[index.value])

function loadExercise() {
  const ex = current.value
  if (!ex) return
  const words = ex.no.split(' ')
  bank.value = shuffle(words.map((word, i) => ({ word, key: i })))
  built.value = []
  status.value = 'building'
  showHint.value = false
}

function start() {
  const pool = sentences.filter(
    (s) => levelFilter.value === 'alle' || s.level === levelFilter.value,
  )
  session.value = shuffle(pool).slice(0, 10)
  index.value = 0
  score.value = 0
  attempted.value = 0
  done.value = false
  loadExercise()
}

function pick(tile: Tile) {
  if (status.value === 'correct') return
  bank.value = bank.value.filter((t) => t.key !== tile.key)
  built.value.push(tile)
  status.value = 'building'
}

function unpick(tile: Tile) {
  if (status.value === 'correct') return
  built.value = built.value.filter((t) => t.key !== tile.key)
  bank.value.push(tile)
  status.value = 'building'
}

function check() {
  const ex = current.value
  if (!ex) return
  attempted.value++
  const attempt = built.value.map((t) => t.word).join(' ')
  if (attempt === ex.no) {
    status.value = 'correct'
    score.value++
    if (speechAvailable()) speakNorwegian(ex.no)
  } else {
    status.value = 'wrong'
    shakeIt.value = true
    setTimeout(() => (shakeIt.value = false), 400)
  }
}

function reveal() {
  const ex = current.value
  if (!ex) return
  built.value = ex.no.split(' ').map((word, i) => ({ word, key: i }))
  bank.value = []
  status.value = 'correct'
  attempted.value++
  if (speechAvailable()) speakNorwegian(ex.no)
}

function next() {
  if (index.value + 1 >= session.value.length) {
    done.value = true
    progress.recordQuiz('sentences', score.value, session.value.length)
  } else {
    index.value++
    loadExercise()
  }
}
</script>

<template>
  <div class="mx-auto max-w-2xl">
    <p class="kicker rise rise-1">Modul 02 · Ordstilling</p>
    <h1 class="display rise rise-1 mt-1 text-3xl font-black text-ink">Setningsbygging</h1>

    <!-- setup / results -->
    <template v-if="session.length === 0 || done">
      <div v-if="done" class="card pop mt-6 p-6 text-center">
        <p class="display text-2xl font-black" :class="score >= session.length * 0.7 ? 'text-moss' : 'text-gull'">
          {{ score }} av {{ session.length }} riktige
        </p>
        <p class="mt-2 text-sm text-ink-soft">
          {{ score >= session.length * 0.7 ? 'Solid! Ordstillingen sitter bedre og bedre.' : 'Fortsett å øve — V2-regelen kommer med repetisjon.' }}
        </p>
      </div>

      <div class="card rise rise-2 mt-6 p-6">
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
        <button class="btn btn-accent w-full" @click="start">Start 10 setninger</button>
      </div>
    </template>

    <!-- exercise -->
    <template v-else-if="current">
      <div class="mt-6 flex items-center justify-between text-xs font-bold text-ink-faint">
        <span>{{ index + 1 }} / {{ session.length }} · {{ score }} riktige</span>
        <span class="chip bg-fjord-wash text-fjord">{{ current.level }} · {{ current.focus }}</span>
      </div>

      <div class="card mt-4 p-6">
        <p class="kicker">Oversett og bygg setningen</p>
        <p class="display mt-1 text-xl font-bold text-ink">“{{ current.en }}”</p>

        <!-- built sentence -->
        <div
          class="mt-5 flex min-h-16 flex-wrap items-center gap-2 rounded-xl border-2 border-dashed p-3 transition-colors"
          :class="{
            'border-rule bg-paper': status === 'building',
            'border-moss bg-moss-wash': status === 'correct',
            'border-rod bg-rod-wash': status === 'wrong',
            shake: shakeIt,
          }"
        >
          <p v-if="built.length === 0" class="text-sm text-ink-faint">
            Trykk på ordene nedenfor …
          </p>
          <button
            v-for="tile in built"
            :key="tile.key"
            class="btn bg-fjord text-card"
            @click="unpick(tile)"
          >
            {{ tile.word }}
          </button>
          <span v-if="status === 'correct'" class="pop ml-1 text-xl">✓</span>
        </div>

        <!-- word bank -->
        <div class="mt-4 flex flex-wrap gap-2">
          <button
            v-for="tile in bank"
            :key="tile.key"
            class="btn btn-ghost bg-card"
            @click="pick(tile)"
          >
            {{ tile.word }}
          </button>
        </div>

        <p v-if="showHint" class="pop mt-4 rounded-lg bg-gull-wash p-3 text-sm text-ink-soft">
          💡 {{ current.hint }}
        </p>
        <p v-if="status === 'wrong'" class="mt-3 text-sm font-bold text-rod">
          Ikke helt — prøv å flytte på ordene.
        </p>

        <hr class="dotted-rule my-5" />

        <div class="flex flex-wrap gap-2">
          <template v-if="status !== 'correct'">
            <button class="btn btn-primary flex-1" :disabled="bank.length > 0" @click="check">
              Sjekk
            </button>
            <button class="btn btn-ghost" @click="showHint = !showHint">Hint</button>
            <button class="btn btn-ghost" @click="reveal">Vis svar</button>
          </template>
          <template v-else>
            <button v-if="speechAvailable()" class="btn btn-ghost" @click="speakNorwegian(current.no)">
              🔊 Hør
            </button>
            <button class="btn btn-accent flex-1" @click="next">
              {{ index + 1 >= session.length ? 'Se resultat' : 'Neste setning' }}
            </button>
          </template>
        </div>
      </div>

      <button class="btn btn-ghost mx-auto mt-6 block" @click="session = []">
        Avslutt økten
      </button>
    </template>
  </div>
</template>
