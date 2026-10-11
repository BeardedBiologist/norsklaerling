<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type { ListeningQuestion } from '../types'
import { permutation } from '../lib/utils'

const props = defineProps<{
  questions: ListeningQuestion[]
  best?: number
  showEnglish?: boolean
  /** bump to open the questions from outside (e.g. when the audio ends) */
  openSignal?: number
}>()
const emit = defineEmits<{ done: [score: number] }>()

const open = ref(false)
const checked = ref(false)
const picks = ref<(number | null)[]>([])

/** options shuffled once per attempt; correctIndex points into the shuffled list */
const shuffled = ref<{ options: string[]; correctIndex: number }[]>([])

function start() {
  shuffled.value = props.questions.map((q) => {
    const perm = permutation(q.options.length)
    return { options: perm.map((i) => q.options[i]), correctIndex: perm.indexOf(q.answer) }
  })
  picks.value = props.questions.map(() => null)
  checked.value = false
  open.value = true
}

watch(
  () => props.openSignal,
  (n) => {
    if (n && !open.value) start()
  },
)

const allPicked = computed(() => picks.value.every((p) => p !== null))
const score = computed(() => picks.value.filter((p, i) => p === shuffled.value[i]?.correctIndex).length)

function check() {
  checked.value = true
  emit('done', score.value / props.questions.length)
}

function optionClass(qi: number, oi: number): string {
  const picked = picks.value[qi] === oi
  if (!checked.value) return picked ? 'border-fjord bg-fjord-wash text-ink' : 'border-rule bg-card hover:border-fjord'
  if (oi === shuffled.value[qi].correctIndex) return 'border-moss bg-moss-wash text-moss'
  if (picked) return 'border-rod bg-rod-wash text-rod-deep'
  return 'border-rule bg-card opacity-60'
}
</script>

<template>
  <div class="mt-1">
    <button v-if="!open" class="text-xs font-bold no-underline" :class="best !== undefined ? 'text-moss' : 'text-fjord'" @click="start">
      <template v-if="best !== undefined">✓ Spørsmål besvart ({{ Math.round(best * questions.length) }}/{{ questions.length }}) · ta igjen</template>
      <template v-else>❓ Svar på {{ questions.length }} spørsmål om teksten →</template>
    </button>

    <div v-else class="mt-2 space-y-4 rounded-xl border border-rule bg-card p-4">
      <div v-for="(q, qi) in questions" :key="qi">
        <p class="text-sm font-bold text-ink">{{ qi + 1 }}. {{ q.q }}</p>
        <p v-if="showEnglish && q.en" class="text-xs italic text-ink-faint">{{ q.en }}</p>
        <div class="mt-2 grid gap-1.5 sm:grid-cols-2">
          <button
            v-for="(opt, oi) in shuffled[qi].options"
            :key="oi"
            class="rounded-lg border-2 px-3 py-1.5 text-left text-sm transition-colors"
            :class="optionClass(qi, oi)"
            :disabled="checked"
            @click="picks[qi] = oi"
          >
            {{ opt }}
          </button>
        </div>
      </div>
      <div class="flex flex-wrap items-center gap-3">
        <button v-if="!checked" class="btn btn-accent" :disabled="!allPicked" @click="check">Sjekk svarene</button>
        <template v-else>
          <span class="font-bold" :class="score / questions.length >= 0.66 ? 'text-moss' : 'text-gull'">
            {{ score }} av {{ questions.length }} riktige{{ score / questions.length >= 0.66 ? ' ✓' : ' — hør teksten en gang til og prøv igjen' }}
          </span>
          <button class="btn btn-ghost !py-1 text-sm" @click="start">Prøv igjen</button>
          <button class="btn btn-ghost !py-1 text-sm" @click="open = false">Lukk</button>
        </template>
      </div>
    </div>
  </div>
</template>
