<script setup lang="ts">
import { nextTick, ref } from 'vue'
import { vocabulary } from '../data/vocabulary'
import { lookupOrdbok, ordbokUrl, type OrdbokEntry } from '../lib/ordbok'
import { speakNorwegian, speechAvailable } from '../lib/speech'
import type { VocabCard } from '../types'

interface Lookup {
  q: string
  local: VocabCard[]
  remote: OrdbokEntry[] | 'loading' | 'error' | null
}

const open = ref(false)
const query = ref('')
const history = ref<Lookup[]>([])
const scrollArea = ref<HTMLElement | null>(null)
const inputEl = ref<HTMLInputElement | null>(null)

function normalize(s: string): string {
  return s.toLowerCase().replace(/^å /, '').trim()
}

/** search the app's own word bank in both directions, best matches first */
function searchLocal(q: string): VocabCard[] {
  const n = normalize(q)
  if (!n) return []
  const scored: [number, VocabCard][] = []
  for (const c of vocabulary) {
    const no = normalize(c.no)
    const en = c.en.toLowerCase()
    let score: number | null = null
    if (no === n) score = 0
    else if (en === n || en.split(/[ /]+/).includes(n)) score = 1
    else if (no.startsWith(n)) score = 2
    else if (en.includes(n) && n.length >= 3) score = 3
    else if (no.includes(n) && n.length >= 3) score = 4
    if (score !== null) scored.push([score, c])
  }
  return scored
    .sort((a, b) => a[0] - b[0])
    .slice(0, 5)
    .map(([, c]) => c)
}

async function submit() {
  const q = query.value.trim()
  if (!q) return
  query.value = ''
  const entry: Lookup = { q, local: searchLocal(q), remote: null }
  history.value.push(entry)
  scrollDown()

  // Norwegian-looking single words also get a live Ordbøkene lookup
  const isSingleWord = !q.replace(/^å /, '').trim().includes(' ')
  if (isSingleWord) {
    entry.remote = 'loading'
    try {
      const results = await lookupOrdbok(q)
      entry.remote = results.length > 0 ? results : null
    } catch {
      entry.remote = 'error'
    }
    scrollDown()
  }
}

async function scrollDown() {
  await nextTick()
  scrollArea.value?.scrollTo({ top: scrollArea.value.scrollHeight, behavior: 'smooth' })
}

async function toggle() {
  open.value = !open.value
  if (open.value) {
    await nextTick()
    inputEl.value?.focus()
  }
}

function clearHistory() {
  history.value = []
}
</script>

<template>
  <!-- launcher -->
  <button
    v-if="!open"
    class="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-fjord text-2xl text-card shadow-lift transition-transform hover:scale-105 active:scale-95"
    title="Ordbok — slå opp ord"
    @click="toggle"
  >
    📖
  </button>

  <!-- panel -->
  <div
    v-else
    class="card fixed bottom-5 right-5 z-50 flex h-[min(34rem,75vh)] w-[min(24rem,calc(100vw-2.5rem))] flex-col overflow-hidden !rounded-2xl shadow-lift"
  >
    <div class="flag-stripe h-1 w-full shrink-0" aria-hidden="true"></div>
    <header class="flex items-center justify-between border-b border-rule px-4 py-2.5">
      <div>
        <p class="display text-lg font-black text-ink">Ordbok</p>
        <p class="text-[0.65rem] text-ink-faint">norsk ⇄ engelsk · {{ vocabulary.length }} ord + ordbøkene.no</p>
      </div>
      <div class="flex gap-1">
        <button v-if="history.length" class="btn btn-ghost !px-2 !py-1 text-xs" title="Tøm historikken" @click="clearHistory">Tøm</button>
        <button class="btn btn-ghost !px-2.5 !py-1" title="Lukk" @click="open = false">✕</button>
      </div>
    </header>

    <!-- results -->
    <div ref="scrollArea" class="flex-1 space-y-3 overflow-y-auto p-3">
      <p v-if="history.length === 0" class="mt-6 text-center text-sm text-ink-faint">
        Skriv et ord på norsk eller engelsk.<br />
        Norske ord slås også opp i den offisielle ordboka.
      </p>

      <template v-for="(item, i) in history" :key="i">
        <!-- query bubble -->
        <div class="flex justify-end">
          <span class="rounded-2xl rounded-br-sm bg-fjord px-3 py-1.5 text-sm font-bold text-card">{{ item.q }}</span>
        </div>

        <!-- local hits -->
        <div v-if="item.local.length" class="space-y-2">
          <div v-for="c in item.local" :key="c.id" class="rounded-2xl rounded-bl-sm border border-rule bg-paper p-3">
            <div class="flex items-baseline justify-between gap-2">
              <p class="font-bold text-ink">
                <span v-if="c.gender" class="text-ink-faint">{{ c.gender }}&nbsp;</span>{{ c.no }}
                <button v-if="speechAvailable()" class="ml-1 text-sm" title="Hør uttalen" @click="speakNorwegian(c.no)">🔊</button>
              </p>
              <span class="chip shrink-0" :class="{
                'bg-moss-wash text-moss': c.level === 'A2',
                'bg-fjord-wash text-fjord': c.level === 'B1',
                'bg-rod-wash text-rod-deep': c.level === 'B2',
              }">{{ c.level }}</span>
            </div>
            <p class="text-sm text-fjord">{{ c.en }} <span class="text-ink-faint">· {{ c.type }}</span></p>
            <p class="mt-1 text-xs italic text-ink-soft">«{{ c.example }}»</p>
          </div>
        </div>

        <!-- remote hits -->
        <div v-if="item.remote === 'loading'" class="rounded-2xl rounded-bl-sm border border-rule bg-paper p-3 text-sm text-ink-faint">
          Slår opp i ordbøkene.no …
        </div>
        <div v-else-if="Array.isArray(item.remote)" class="space-y-2">
          <div v-for="(e, j) in item.remote" :key="j" class="rounded-2xl rounded-bl-sm border-l-4 border-l-gull border border-rule bg-gull-wash/40 p-3">
            <p class="font-bold text-ink">
              {{ e.lemma }}
              <button v-if="speechAvailable()" class="ml-1 text-sm" title="Hør uttalen" @click="speakNorwegian(e.lemma)">🔊</button>
              <span class="ml-1 text-xs font-normal text-ink-faint">{{ e.wordClass }}<template v-if="e.gender"> · {{ e.gender }}</template></span>
            </p>
            <p v-if="e.inflections.length > 1" class="text-xs text-ink-soft">{{ e.inflections.join(' · ') }}</p>
            <ol v-if="e.definitions.length" class="mt-1 list-inside list-decimal space-y-0.5 text-sm text-ink">
              <li v-for="(d, k) in e.definitions" :key="k">{{ d }}</li>
            </ol>
            <a :href="ordbokUrl(e.lemma)" target="_blank" rel="noopener" class="mt-1 inline-block text-xs text-fjord underline">
              Se hele artikkelen på ordbokene.no →
            </a>
          </div>
        </div>

        <p v-if="item.local.length === 0 && (item.remote === null || item.remote === 'error')" class="rounded-2xl rounded-bl-sm border border-rule bg-paper p-3 text-sm text-ink-soft">
          Ingen treff på «{{ item.q }}»<span v-if="item.remote === 'error'"> (fikk ikke kontakt med ordbøkene.no)</span>.
          Prøv en annen form av ordet — eller
          <a :href="ordbokUrl(item.q)" target="_blank" rel="noopener" class="text-fjord underline">søk på ordbokene.no</a>.
        </p>
      </template>
    </div>

    <!-- input -->
    <form class="flex gap-2 border-t border-rule p-3" @submit.prevent="submit">
      <input
        ref="inputEl"
        v-model="query"
        type="text"
        placeholder="Søk på norsk eller engelsk …"
        class="min-w-0 flex-1 rounded-lg border border-rule bg-card px-3 py-2 text-sm text-ink outline-none focus:border-fjord"
        @keydown.esc="open = false"
      />
      <button type="submit" class="btn btn-primary !px-4" :disabled="!query.trim()">Søk</button>
    </form>
  </div>
</template>
