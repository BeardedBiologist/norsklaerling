<script setup lang="ts">
import { computed, ref } from 'vue'
import { vocabulary } from '../data/vocabulary'
import { inflections } from '../lib/inflections'
import { useProgressStore } from '../stores/progress'
import { shuffle } from '../lib/utils'
import { speakNorwegian, speechAvailable } from '../lib/speech'
import type { Level, VocabCard } from '../types'

const progress = useProgressStore()

const levelFilter = ref<Level | 'alle'>('alle')
const levels: (Level | 'alle')[] = ['alle', 'A2', 'B1', 'B2']
type Kind = 'alle' | 'verb' | 'substantiv' | 'adjektiv'
const kindFilter = ref<Kind>('alle')
const kinds: { k: Kind; label: string }[] = [
  { k: 'alle', label: 'Alt' },
  { k: 'verb', label: 'Verb' },
  { k: 'substantiv', label: 'Substantiv' },
  { k: 'adjektiv', label: 'Adjektiv' },
]

interface Drill {
  card: VocabCard
  question: string
  /** the form asked for, e.g. "preteritum" */
  label: string
  answers: string[]
  /** shown after answering */
  fullLine: string
}

/** build every possible drill for a card from its inflection slots */
function drillsFor(card: VocabCard): Drill[] {
  const f = inflections[card.id]
  if (!f) return []
  const out: Drill[] = []
  const add = (label: string, slot: string, extraAccepted: string[] = []) => {
    if (!slot) return
    const variants = slot.split('/')
    out.push({
      card,
      question: card.type === 'verb' ? `å ${f[0]}` : card.type === 'substantiv' ? `${card.gender ?? ''} ${f[0]}`.trim() : f[0],
      label,
      answers: [...variants, ...extraAccepted],
      fullLine: '',
    })
  }
  if (card.type === 'verb') {
    add('presens', f[1])
    add('preteritum', f[2])
    if (f[3]) add('presens perfektum (har …)', f[3], f[3].split('/').map((v) => `har ${v}`))
  } else if (card.type === 'substantiv') {
    add('bestemt form entall', f[1])
    add('ubestemt form flertall', f[2])
    add('bestemt form flertall', f[3])
  } else if (card.type === 'adjektiv') {
    add('intetkjønn (et …)', f[1])
    if (f[3]) add('komparativ (mer …)', f[3])
    if (f[4]) add('superlativ (mest …)', f[4])
  }
  return out
}

const session = ref<Drill[]>([])
const index = ref(0)
const input = ref('')
const status = ref<'answering' | 'correct' | 'wrong'>('answering')
const score = ref(0)
const done = ref(false)
const shakeIt = ref(false)
const firstTry = ref(true)

const current = computed(() => session.value[index.value])

function start() {
  const pool = vocabulary.filter(
    (c) =>
      inflections[c.id] &&
      (levelFilter.value === 'alle' || c.level === levelFilter.value) &&
      (kindFilter.value === 'alle' || c.type === kindFilter.value),
  )
  const drills = shuffle(pool)
    .slice(0, 12)
    .map((c) => {
      const options = drillsFor(c)
      return options[Math.floor(Math.random() * options.length)]
    })
    .filter(Boolean)
  session.value = drills
  index.value = 0
  score.value = 0
  done.value = false
  resetDrill()
}

function resetDrill() {
  input.value = ''
  status.value = 'answering'
  firstTry.value = true
}

function check() {
  const d = current.value
  if (!d || !input.value.trim()) return
  const attempt = input.value.trim().toLowerCase()
  if (d.answers.some((a) => a.toLowerCase() === attempt)) {
    status.value = 'correct'
    if (firstTry.value) score.value++
    if (speechAvailable()) speakNorwegian(d.answers[0])
  } else {
    firstTry.value = false
    shakeIt.value = true
    setTimeout(() => (shakeIt.value = false), 400)
  }
}

function reveal() {
  if (!current.value) return
  status.value = 'wrong'
  if (speechAvailable()) speakNorwegian(current.value.answers[0])
}

function next() {
  if (index.value + 1 >= session.value.length) {
    done.value = true
    progress.recordQuiz('inflection', score.value, session.value.length)
  } else {
    index.value++
    resetDrill()
  }
}
</script>

<template>
  <div class="mx-auto max-w-2xl">
    <p class="kicker rise rise-1">Modul 06 · Ordbøkene-data</p>
    <h1 class="display rise rise-1 mt-1 text-3xl font-black text-ink">Bøyning</h1>

    <template v-if="session.length === 0 || done">
      <div v-if="done" class="card pop mt-6 p-6 text-center">
        <p class="display text-2xl font-black" :class="score >= session.length * 0.7 ? 'text-moss' : 'text-gull'">
          {{ score }} av {{ session.length }} riktige på første forsøk
        </p>
        <p class="mt-2 text-sm text-ink-soft">
          Bøyningsformene kommer fra den offisielle ordboka — akkurat det sensor hører etter.
        </p>
      </div>

      <div class="card rise rise-2 mt-6 p-6">
        <p class="text-sm text-ink-soft">
          Skriv riktig bøyningsform: preteritum av verb, bestemt form av substantiv,
          komparativ av adjektiv. Alle fasitformene er hentet fra ordbøkene.no.
        </p>
        <hr class="dotted-rule my-5" />
        <p class="mb-3 text-sm font-bold text-ink-soft">Velg nivå</p>
        <div class="flex flex-wrap gap-2">
          <button v-for="l in levels" :key="l" class="btn" :class="levelFilter === l ? 'btn-primary' : 'btn-ghost'" @click="levelFilter = l">
            {{ l === 'alle' ? 'Alle nivåer' : l }}
          </button>
        </div>
        <p class="mb-3 mt-4 text-sm font-bold text-ink-soft">Velg ordklasse</p>
        <div class="flex flex-wrap gap-2">
          <button v-for="k in kinds" :key="k.k" class="btn" :class="kindFilter === k.k ? 'btn-primary' : 'btn-ghost'" @click="kindFilter = k.k">
            {{ k.label }}
          </button>
        </div>
        <hr class="dotted-rule my-5" />
        <button class="btn btn-accent w-full" @click="start">Start 12 bøyninger</button>
      </div>
    </template>

    <template v-else-if="current">
      <div class="mt-6 flex items-center justify-between text-xs font-bold text-ink-faint">
        <span>{{ index + 1 }} / {{ session.length }} · {{ score }} riktige</span>
        <span class="chip bg-fjord-wash text-fjord">{{ current.card.level }} · {{ current.card.type }}</span>
      </div>

      <div class="card mt-4 p-6" :class="{ shake: shakeIt }">
        <p class="kicker">Skriv {{ current.label }} av</p>
        <p class="display mt-1 text-3xl font-black text-ink">{{ current.question }}</p>
        <p class="text-sm text-ink-faint">({{ current.card.en }})</p>

        <input
          v-model="input"
          type="text"
          :disabled="status !== 'answering'"
          :placeholder="`${current.label} …`"
          class="mt-5 w-full rounded-xl border-2 border-rule bg-paper p-3 text-lg text-ink outline-none transition-colors focus:border-fjord disabled:opacity-70"
          :class="{ '!border-moss !bg-moss-wash': status === 'correct', '!border-fjord': status === 'wrong' }"
          @keydown.enter="status === 'answering' ? check() : next()"
        />

        <p v-if="status === 'correct'" class="pop mt-3 rounded-lg bg-moss-wash p-3 text-sm text-moss">
          <strong>Riktig!</strong> {{ current.answers[0] }}
          <span v-if="current.answers.length > 1" class="opacity-75">(også: {{ current.answers.slice(1).join(', ') }})</span>
        </p>
        <p v-else-if="status === 'wrong'" class="pop mt-3 rounded-lg bg-fjord-wash p-3 text-sm text-fjord">
          <strong>Fasit:</strong> {{ current.answers.join(' eller ') }}
        </p>

        <hr class="dotted-rule my-5" />

        <div class="flex gap-2">
          <template v-if="status === 'answering'">
            <button class="btn btn-primary flex-1" :disabled="!input.trim()" @click="check">Sjekk</button>
            <button class="btn btn-ghost" @click="reveal">Vis fasit</button>
          </template>
          <button v-else class="btn btn-accent flex-1" @click="next">
            {{ index + 1 >= session.length ? 'Se resultat' : 'Neste' }}
          </button>
        </div>
      </div>

      <button class="btn btn-ghost mx-auto mt-6 block" @click="session = []">Avslutt økten</button>
    </template>
  </div>
</template>
