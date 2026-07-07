<script setup lang="ts">
import { computed, ref } from 'vue'
import { grammarQuiz } from '../data/grammarQuiz'
import { useProgressStore } from '../stores/progress'
import { permutation, shuffle } from '../lib/utils'
import type { Level, QuizQuestion } from '../types'

const progress = useProgressStore()

const levelFilter = ref<Level | 'alle'>('alle')
const levels: (Level | 'alle')[] = ['alle', 'A2', 'B1', 'B2']

interface ActiveQuestion {
  q: QuizQuestion
  options: string[]
  correctIndex: number
}

const session = ref<ActiveQuestion[]>([])
const index = ref(0)
const selected = ref<number | null>(null)
const score = ref(0)
const done = ref(false)

const current = computed(() => session.value[index.value])

function start() {
  const pool = grammarQuiz.filter(
    (q) => levelFilter.value === 'alle' || q.level === levelFilter.value,
  )
  session.value = shuffle(pool)
    .slice(0, 10)
    .map((q) => {
      const perm = permutation(q.options.length)
      return {
        q,
        options: perm.map((i) => q.options[i]),
        correctIndex: perm.indexOf(q.answer),
      }
    })
  index.value = 0
  selected.value = null
  score.value = 0
  done.value = false
}

function choose(i: number) {
  if (selected.value !== null || !current.value) return
  selected.value = i
  if (i === current.value.correctIndex) score.value++
}

function next() {
  if (index.value + 1 >= session.value.length) {
    done.value = true
    progress.recordQuiz('grammar', score.value, session.value.length)
  } else {
    index.value++
    selected.value = null
  }
}

function optionClass(i: number): string {
  if (selected.value === null) return 'btn-ghost bg-card hover:border-fjord'
  if (i === current.value?.correctIndex) return 'border-moss bg-moss-wash text-moss'
  if (i === selected.value) return 'border-rod bg-rod-wash text-rod-deep'
  return 'btn-ghost opacity-50'
}
</script>

<template>
  <div class="mx-auto max-w-2xl">
    <p class="kicker rise rise-1">Modul 03 · Grammatikk</p>
    <h1 class="display rise rise-1 mt-1 text-3xl font-black text-ink">Grammatikkquiz</h1>

    <template v-if="session.length === 0 || done">
      <div v-if="done" class="card pop mt-6 p-6 text-center">
        <p class="display text-2xl font-black" :class="score >= 7 ? 'text-moss' : 'text-gull'">
          {{ score }} av {{ session.length }} riktige
        </p>
        <p class="mt-2 text-sm text-ink-soft">
          {{ score >= 7 ? 'Sterkt! Dette lover godt for norskprøven.' : 'Les forklaringene nøye — reglene setter seg etter hvert.' }}
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
        <button class="btn btn-accent w-full" @click="start">Start quiz (10 spørsmål)</button>
      </div>
    </template>

    <template v-else-if="current">
      <div class="mt-6 flex items-center justify-between text-xs font-bold text-ink-faint">
        <span>{{ index + 1 }} / {{ session.length }} · {{ score }} riktige</span>
        <span class="chip bg-fjord-wash text-fjord">{{ current.q.level }} · {{ current.q.topic }}</span>
      </div>

      <div class="card mt-4 p-6">
        <p class="display text-xl font-bold text-ink">{{ current.q.question }}</p>

        <div class="mt-5 flex flex-col gap-2">
          <button
            v-for="(opt, i) in current.options"
            :key="i"
            class="btn justify-start border text-left"
            :class="optionClass(i)"
            @click="choose(i)"
          >
            <span class="mr-2 font-black text-ink-faint">{{ 'ABCD'[i] }}</span>
            {{ opt }}
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
          <button class="btn btn-accent mt-4 w-full" @click="next">
            {{ index + 1 >= session.length ? 'Se resultat' : 'Neste spørsmål' }}
          </button>
        </div>
      </div>

      <button class="btn btn-ghost mx-auto mt-6 block" @click="session = []">
        Avslutt quizen
      </button>
    </template>
  </div>
</template>
