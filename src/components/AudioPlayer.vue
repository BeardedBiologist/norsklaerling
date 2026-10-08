<script setup lang="ts">
import { computed, onBeforeUnmount, ref } from 'vue'
import { stopAudio } from '../lib/audio'

const props = defineProps<{ src: string; label: string; letter?: string }>()

const audio = ref<HTMLAudioElement | null>(null)
const playing = ref(false)
const current = ref(0)
const duration = ref(0)
const slow = ref(false)
const failed = ref(false)

const pct = computed(() => (duration.value ? (current.value / duration.value) * 100 : 0))

function fmt(s: number): string {
  if (!Number.isFinite(s)) return '0:00'
  return `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`
}

function ensure(): HTMLAudioElement {
  if (!audio.value) {
    const a = new Audio(props.src)
    a.preload = 'metadata'
    a.addEventListener('timeupdate', () => (current.value = a.currentTime))
    a.addEventListener('loadedmetadata', () => (duration.value = a.duration))
    a.addEventListener('ended', () => (playing.value = false))
    a.addEventListener('pause', () => (playing.value = false))
    a.addEventListener('play', () => (playing.value = true))
    a.addEventListener('error', () => (failed.value = true))
    audio.value = a
  }
  return audio.value
}

/** only one player at a time: pause the others when this one starts */
const PLAY_EVENT = 'norsk-audioplayer-play'
function onOtherPlay(e: Event) {
  if ((e as CustomEvent).detail !== props.src) audio.value?.pause()
}
window.addEventListener(PLAY_EVENT, onOtherPlay)

function toggle() {
  const a = ensure()
  if (a.paused) {
    stopAudio()
    window.dispatchEvent(new CustomEvent(PLAY_EVENT, { detail: props.src }))
    a.playbackRate = slow.value ? 0.75 : 1
    void a.play().catch(() => (failed.value = true))
  } else a.pause()
}

function back() {
  const a = ensure()
  a.currentTime = Math.max(0, a.currentTime - 5)
}

function toggleSlow() {
  slow.value = !slow.value
  if (audio.value) audio.value.playbackRate = slow.value ? 0.75 : 1
}

function seek(e: MouseEvent) {
  const a = ensure()
  if (!duration.value) return
  const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
  a.currentTime = ((e.clientX - rect.left) / rect.width) * duration.value
}

onBeforeUnmount(() => {
  audio.value?.pause()
  window.removeEventListener(PLAY_EVENT, onOtherPlay)
})
</script>

<template>
  <div class="rounded-lg border border-rule bg-paper px-3 py-2">
    <div class="flex items-center gap-2">
      <button
        class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-fjord text-card hover:bg-fjord-deep"
        :title="playing ? 'Pause' : 'Spill av'"
        @click="toggle"
      >
        <span v-if="playing" aria-hidden="true">❚❚</span>
        <span v-else aria-hidden="true" class="ml-0.5">▶</span>
      </button>
      <div class="min-w-0 flex-1">
        <p class="truncate text-sm font-bold text-ink">
          <span v-if="letter" class="display mr-1 text-fjord">{{ letter }}</span>{{ label }}
        </p>
        <div class="mt-1 h-1.5 cursor-pointer rounded-full bg-rule" @click="seek">
          <div class="h-full rounded-full bg-fjord" :style="{ width: pct + '%' }" />
        </div>
      </div>
      <span class="w-16 shrink-0 text-right text-xs tabular-nums text-ink-faint">{{ fmt(current) }} / {{ fmt(duration) }}</span>
      <button class="chip shrink-0 border border-rule bg-card text-ink-soft" title="Spol tilbake 5 sekunder" @click="back">↺ 5s</button>
      <button
        class="chip shrink-0 border"
        :class="slow ? 'border-gull bg-gull-wash text-gull' : 'border-rule bg-card text-ink-soft'"
        title="Saktere avspilling"
        @click="toggleSlow"
      >
        0,75×
      </button>
    </div>
    <p v-if="failed" class="mt-1 text-xs text-rod">Lydfilen kunne ikke lastes fra NTNU akkurat nå.</p>
  </div>
</template>
