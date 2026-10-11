<script setup lang="ts">
import type { FreeFeedback } from '../lib/ai'
import { speakNorwegian, speechAvailable } from '../lib/speech'

/** AI feedback on a spoken answer or a whole conversation */
defineProps<{
  fb: FreeFeedback
  /** extra pronunciation notes, e.g. collected over a conversation's turns */
  extraNotes?: { word: string; issue: string }[]
}>()

const ttsOk = speechAvailable()

const SCORE_LABELS: Record<keyof FreeFeedback['scores'], string> = {
  task: 'Svarer på oppgaven',
  coherence: 'Sammenheng',
  vocabulary: 'Ordforråd',
  grammar: 'Grammatikk',
  fluency: 'Flyt',
}
const ERROR_LABELS: Record<string, string> = { ordstilling: 'Ordstilling', bøyning: 'Bøyning', ordvalg: 'Ordvalg', uttale: 'Uttale', annet: 'Annet' }
const scoreClass = (n: number) => (n >= 4 ? 'text-moss' : n >= 3 ? 'text-gull' : 'text-rod')
</script>

<template>
  <div class="pop space-y-4 rounded-xl border-2 border-fjord bg-fjord-wash p-4">
    <div class="flex flex-wrap items-baseline justify-between gap-2">
      <p class="display text-lg font-black text-ink">Tilbakemelding</p>
      <span class="chip bg-card text-fjord">Anslått nivå: {{ fb.level }}</span>
    </div>
    <p class="text-sm font-bold text-moss">{{ fb.praise }}</p>

    <div class="grid grid-cols-2 gap-2 sm:grid-cols-5">
      <div v-for="(label, k) in SCORE_LABELS" :key="k" class="rounded-lg bg-card p-2 text-center">
        <p class="text-[11px] font-bold text-ink-faint">{{ label }}</p>
        <p class="display text-xl font-black" :class="scoreClass(fb.scores[k])">{{ fb.scores[k] }}/5</p>
      </div>
    </div>

    <div>
      <p class="kicker">Riktig og naturlig norsk</p>
      <p class="mt-1 whitespace-pre-line rounded-lg bg-card p-3 leading-relaxed text-ink">{{ fb.corrected }}</p>
      <button v-if="ttsOk" class="btn btn-ghost mt-2 !py-1 text-sm" @click="speakNorwegian(fb.corrected, 0.9)">🔊 Hør den riktige versjonen</button>
    </div>

    <div v-if="fb.errors.length">
      <p class="kicker">Feil å jobbe med</p>
      <ul class="mt-1 space-y-2">
        <li v-for="(e, i) in fb.errors" :key="i" class="rounded-lg bg-card p-3 text-sm">
          <span class="chip mr-1 bg-gull-wash text-gull">{{ ERROR_LABELS[e.type] ?? e.type }}</span>
          <span class="text-rod-deep line-through">{{ e.said }}</span>
          → <strong class="text-moss">{{ e.correct }}</strong>
          <p class="mt-1 text-ink-soft">{{ e.explanation }}</p>
        </li>
      </ul>
    </div>
    <p v-else class="text-sm font-bold text-moss">Ingen grammatikkfeil funnet 👏</p>

    <div v-if="fb.pronunciation.score > 0 || extraNotes?.length">
      <p class="kicker">Uttale<span v-if="fb.pronunciation.score > 0">: {{ fb.pronunciation.score }}/5</span></p>
      <ul class="mt-1 space-y-1 text-sm">
        <li v-for="(n, i) in [...fb.pronunciation.notes, ...(extraNotes ?? [])]" :key="i">
          <strong class="text-ink">{{ n.word }}</strong>
          <button v-if="ttsOk" class="ml-1 text-xs" title="Hør ordet" @click="speakNorwegian(n.word, 0.8)">🔊</button>
          — <span class="text-ink-soft">{{ n.issue }}</span>
        </li>
      </ul>
    </div>

    <p class="rounded-lg bg-gull-wash p-3 text-sm text-ink"><strong>Neste gang:</strong> {{ fb.tip }}</p>
    <p class="text-[11px] text-ink-faint">AI-vurderingen er veiledende og kan ta feil. Hørt av AI: «{{ fb.heard }}»</p>
  </div>
</template>
