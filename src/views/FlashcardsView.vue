<script setup lang="ts">
import { computed, ref } from 'vue'
import { vocabulary } from '../data/vocabulary'
import { useProgressStore } from '../stores/progress'
import { isDue } from '../lib/srs'
import { shuffle } from '../lib/utils'
import { speakNorwegian, speechAvailable } from '../lib/speech'
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
}

function grade(g: Grade) {
  if (!current.value) return
  progress.gradeCard(current.value.id, g)
  graded.value[g]++
  flipped.value = false
  // wait for the flip-back before advancing so the answer isn't spoiled
  setTimeout(() => {
    if (index.value + 1 >= session.value.length) {
      sessionDone.value = true
    } else {
      index.value++
    }
  }, 220)
}

function speak() {
  if (!current.value) return
  speakNorwegian(current.value.no)
}
function speakExample() {
  if (!current.value) return
  speakNorwegian(current.value.example)
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

      <!-- flip card -->
      <div class="flip-scene mt-6 h-80 cursor-pointer select-none" @click="flipped = !flipped">
        <div class="flip-inner" :class="{ 'is-flipped': flipped }">
          <div class="flip-face card flex flex-col items-center justify-center gap-3 p-8">
            <p class="kicker">{{ current.type }}</p>
            <p class="display text-center text-4xl font-black text-ink">
              <span v-if="current.gender" class="text-ink-faint">{{ current.gender }}&nbsp;</span>{{ current.no }}
            </p>
            <button
              v-if="speechAvailable()"
              class="btn btn-ghost mt-2"
              @click.stop="speak"
              title="Hør uttalen"
            >
              🔊 Hør
            </button>
            <p class="mt-4 text-xs text-ink-faint">Trykk for å snu kortet</p>
          </div>

          <div class="flip-back flip-face card flex flex-col items-center justify-center gap-3 border-fjord p-8">
            <p class="display text-center text-3xl font-black text-fjord">{{ current.en }}</p>
            <hr class="dotted-rule w-24" />
            <p class="text-center italic text-ink">«{{ current.example }}»</p>
            <p class="text-center text-sm text-ink-faint">{{ current.exampleEn }}</p>
            <button
              v-if="speechAvailable()"
              class="btn btn-ghost"
              @click.stop="speakExample"
              title="Hør eksempelsetningen"
            >
              🔊 Hør setningen
            </button>
          </div>
        </div>
      </div>

      <!-- grading -->
      <div v-if="flipped" class="pop mt-5 grid grid-cols-4 gap-2">
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
      <p v-else class="mt-5 text-center text-sm text-ink-faint">
        Husker du hva ordet betyr? Snu kortet og vurder deg selv.
      </p>

      <button class="btn btn-ghost mx-auto mt-6 block" @click="session = []">
        Avslutt økten
      </button>
    </template>
  </div>
</template>
