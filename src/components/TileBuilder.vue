<script setup lang="ts">
import { ref, watch } from 'vue'
import { shuffle } from '../lib/utils'

/** word-tile sentence builder; emits the built sentence as a string */
const props = defineProps<{ sentence: string; disabled?: boolean; status?: 'correct' | 'wrong' | null }>()
const model = defineModel<string>({ default: '' })

interface Tile {
  word: string
  key: number
}
const bank = ref<Tile[]>([])
const built = ref<Tile[]>([])

function reset() {
  bank.value = shuffle(props.sentence.split(' ').map((word, key) => ({ word, key })))
  built.value = []
  model.value = ''
}
reset()
watch(() => props.sentence, reset)

function sync() {
  model.value = bank.value.length === 0 ? built.value.map((t) => t.word).join(' ') : ''
}
function pick(t: Tile) {
  if (props.disabled) return
  bank.value = bank.value.filter((x) => x.key !== t.key)
  built.value.push(t)
  sync()
}
function unpick(t: Tile) {
  if (props.disabled) return
  built.value = built.value.filter((x) => x.key !== t.key)
  bank.value.push(t)
  sync()
}
</script>

<template>
  <div>
    <div
      class="flex min-h-12 flex-wrap items-center gap-1.5 rounded-xl border-2 border-dashed p-2"
      :class="status === 'correct' ? 'border-moss bg-moss-wash' : status === 'wrong' ? 'border-rod bg-rod-wash' : 'border-rule bg-paper'"
    >
      <span v-if="built.length === 0" class="text-sm text-ink-faint">Trykk på ordene …</span>
      <button v-for="t in built" :key="t.key" class="btn !px-2.5 !py-1 bg-fjord text-card" :disabled="disabled" @click="unpick(t)">{{ t.word }}</button>
    </div>
    <div class="mt-2 flex flex-wrap gap-1.5">
      <button v-for="t in bank" :key="t.key" class="btn btn-ghost !px-2.5 !py-1 bg-card" :disabled="disabled" @click="pick(t)">{{ t.word }}</button>
    </div>
  </div>
</template>
