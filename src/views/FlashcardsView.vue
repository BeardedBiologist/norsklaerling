<script setup lang="ts">
import { computed, ref } from 'vue'
import { vocabulary } from '../data/vocabulary'
import { useProgressStore } from '../stores/progress'
import { isDue } from '../lib/srs'
import { shuffle } from '../lib/utils'
import { inflectionLine } from '../lib/inflections'
import type { Grade, Level, VocabCard } from '../types'

const progress = useProgressStore()

const levelFilter = ref<Level | 'alle'>('alle')
const levels: (Level | 'alle')[] = ['alle', 'A2', 'B1', 'B2']

const SESSION_SIZE = 20

const session = ref<VocabCard[]>([])
const index = ref(0)
const flipped = ref(false)
const graded = ref<Record<Grade, number>>({ again: 0, hard: 0, good: 0, easy: 0 })
const sessionDone = ref(false)
const genderMode = ref(true)
const genderGuess = ref<'en' | 'ei' | 'et' | null>(null)

const showGenderQuiz = computed(() => genderMode.value && !!current.value?.gender && genderGuess.value === null)

const pool = computed(() =>
  vocabulary.filter(
    (v) => levelFilter.value === 'alle' || v.level === levelFilter.value,
  ),
)
const duePool = computed(() => pool.value.filter((v) => isDue(progress.state.srs[v.id])))

const current = computed(() => session.value[index.value])

function startSession(onlyDue: boolean) {
  const source = onlyDue ? duePool.value : pool.value
  session.value = shuffle(source).slice(0, SESSION_SIZE)
  index.value = 0
  flipped.value = false
  sessionDone.value = false
  graded.value = { again: 0, hard: 0, good: 0, easy: 0 }
  genderGuess.value = null
}

function grade(g: Grade) {
  if (!current.value) return
  progress.gradeCard(current.value.id, g)
  graded.value[g]++
  flipped.value = false
  genderGuess.value = null
  // wait for the flip-back before advancing so the answer isn't spoiled
  setTimeout(() => {
    if (index.value + 1 >= session.value.length) {
      sessionDone.value = true
    } else {
      index.value++
    }
  }, 220)
}

function guessGender(g: 'en' | 'ei' | 'et') {
  genderGuess.value = g
}

const gradeButtons: { g: Grade; label: string; cls: string }[] = [
  { g: 'again', label: 'Igjen', cls: 'bg-rod-wash text-rod-deep hover:bg-rod hover:text-card' },
  { g: 'hard', label: 'Vanskelig', cls: 'bg-gull-wash text-gull hover:bg-gull hover:text-card' },
  { g: 'good', label: 'Bra', cls: 'bg-fjord-wash text-fjord hover:bg-fjord hover:text-card' },
  { g: 'easy', label: 'Lett', cls: 'bg-moss-wash text-moss hover:bg-moss hover:text-card' },
]
</script>

<template>
  <div class="mx-auto max-w-2xl">
    <p class="kicker rise rise-1">Modul 01 · Spaced repetition</p>
    <h1 class="display rise rise-1 mt-1 text-3xl font-black text-ink">Ordforråd</h1>

    <!-- setup screen -->
    <template v-if="session.length === 0 || sessionDone">
      <div v-if="sessionDone" class="card pop mt-6 p-6 text-center">
        <p class="display text-2xl font-black text-moss">Økt fullført! 🎉</p>
        <p class="mt-2 text-sm text-ink-soft">
          {{ graded.good + graded.easy }} satt ·
          {{ graded.hard }} vanskelige ·
          {{ graded.again }} må repeteres
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

        <label class="flex cursor-pointer items-center gap-3">
          <input v-model="genderMode" type="checkbox" class="h-4 w-4 accent-fjord" />
          <span class="text-sm font-medium text-ink">Øv på kjønn: velg <em>en / ei / et</em> først</span>
        </label>

        <hr class="dotted-rule my-5" />

        <div class="flex flex-col gap-3 sm:flex-row">
          <button
            class="btn btn-accent flex-1"
            :disabled="duePool.length === 0"
            @click="startSession(true)"
          >
            Repeter {{ Math.min(duePool.length, SESSION_SIZE) }} ord som venter
          </button>
          <button class="btn btn-ghost flex-1" @click="startSession(false)">
            Øv på tilfeldige ord
          </button>
        </div>
        <p v-if="duePool.length === 0" class="mt-3 text-center text-xs text-ink-faint">
          Ingen ord å repetere på dette nivået akkurat nå — godt jobbet!
        </p>
      </div>
    </template>

    <!-- study screen -->
    <template v-else-if="current">
      <div class="mt-6 flex items-center justify-between text-xs font-bold text-ink-faint">
        <span>{{ index + 1 }} / {{ session.length }}</span>
        <span class="chip" :class="{
          'bg-moss-wash text-moss': current.level === 'A2',
          'bg-fjord-wash text-fjord': current.level === 'B1',
          'bg-rod-wash text-rod-deep': current.level === 'B2',
        }">{{ current.level }} · {{ current.topic }}</span>
      </div>

      <div class="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-paper-warm">
        <div
          class="h-full rounded-full bg-fjord transition-all duration-300"
          :style="{ width: `${(index / session.length) * 100}%` }"
        ></div>
      </div>

      <!-- card -->
      <div class="card mt-6 min-h-[20rem] flex flex-col items-center justify-center gap-4 p-8 select-none">
        <template v-if="!flipped">
          <p class="kicker">{{ current.type }}</p>
          <p class="display text-center text-4xl font-black text-ink">
            <template v-if="showGenderQuiz">
              <span class="inline-block w-20 border-b-2 border-ink-faint text-ink-faint">___</span>&nbsp;{{ current.no }}
            </template>
            <template v-else-if="current.gender">
              <span :class="genderMode && genderGuess ? (genderGuess === current.gender ? 'text-moss' : 'text-rod-deep') : 'text-ink-faint'">{{ current.gender }}</span>&nbsp;{{ current.no }}
            </template>
            <template v-else>
              {{ current.no }}
            </template>
          </p>

          <!-- gender quiz inside the card -->
          <div v-if="showGenderQuiz" class="flex flex-wrap justify-center gap-2">
            <button
              v-for="g in (['en', 'ei', 'et'] as const)"
              :key="g"
              class="btn btn-ghost min-w-[3.5rem] font-bold capitalize"
              @click="guessGender(g)"
            >
              {{ g }}
            </button>
          </div>
          <p v-else-if="current.gender && genderMode" class="text-center text-sm font-medium" :class="genderGuess === current.gender ? 'text-moss' : 'text-rod-deep'">
            {{ genderGuess === current.gender ? 'Riktig kjønn!' : `Det er ${current.gender} ${current.no}.` }}
          </p>

          <p class="text-xs text-ink-faint">Trykk under for å se betydningen.</p>
        </template>

        <template v-else>
          <p v-if="current.gender" class="text-center text-sm font-bold uppercase tracking-wide text-ink-faint">{{ current.gender }} {{ current.no }}</p>
          <p class="display text-center text-3xl font-black text-fjord">{{ current.en }}</p>
          <p v-if="inflectionLine(current)" class="text-center text-sm font-medium text-ink-soft">
            {{ inflectionLine(current) }}
          </p>
          <hr class="dotted-rule w-24" />
          <p class="text-center italic text-ink">«{{ current.example }}»</p>
          <p class="text-center text-sm text-ink-faint">{{ current.exampleEn }}</p>
        </template>
      </div>

      <!-- controls -->
      <div class="mt-5">
        <div v-if="!flipped" class="flex justify-center">
          <button class="btn btn-accent w-full sm:w-auto px-10" @click="flipped = !flipped">Snu kortet</button>
        </div>
        <div v-else class="pop grid grid-cols-4 gap-2">
          <button
            v-for="b in gradeButtons"
            :key="b.g"
            class="btn"
            :class="b.cls"
            @click="grade(b.g)"
          >
            {{ b.label }}
          </button>
        </div>
      </div>

      <button class="btn btn-ghost mx-auto mt-6 block" @click="session = []">
        Avslutt økten
      </button>
    </template>
  </div>
</template>
