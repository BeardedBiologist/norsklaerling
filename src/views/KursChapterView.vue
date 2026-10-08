<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { chapterByN, chapterWords, kurs, kursLessonId, ntnuLinks } from '../data/kurs'
import { useProgressStore } from '../stores/progress'
import { isLearned } from '../lib/srs'
import { speakNorwegian, speechAvailable } from '../lib/speech'

const route = useRoute()
const progress = useProgressStore()

const chapter = computed(() => chapterByN(Number(route.params.n)))
const links = computed(() => (chapter.value ? ntnuLinks(chapter.value.n) : null))
const words = computed(() => (chapter.value ? chapterWords(chapter.value.n) : []))
const learnedWords = computed(() => words.value.filter((w) => isLearned(progress.state.srs[w.id])).length)
const showAllWords = ref(false)
const shownWords = computed(() => (showAllWords.value ? words.value : words.value.slice(0, 24)))

const prev = computed(() => (chapter.value ? chapterByN(chapter.value.n - 1) : undefined))
const next = computed(() => (chapter.value ? chapterByN(chapter.value.n + 1) : undefined))
const isDone = computed(() => !!chapter.value && progress.isLessonRead(kursLessonId(chapter.value.n)))

function finish() {
  if (chapter.value) progress.markLessonRead(kursLessonId(chapter.value.n))
}

const letters = ['A', 'B', 'C', 'D']
</script>

<template>
  <div v-if="chapter && links" class="mx-auto max-w-2xl">
    <RouterLink to="/kurs" class="text-sm font-bold text-ink-faint no-underline hover:text-fjord">← Alle kapitler</RouterLink>

    <p class="kicker rise rise-1 mt-4">Kapittel {{ chapter.n }} av {{ kurs.length }} · {{ chapter.level }}</p>
    <h1 class="display rise rise-1 mt-1 text-3xl font-black text-ink">{{ chapter.title }}</h1>
    <p class="rise rise-1 text-ink-faint">{{ chapter.titleEn }} — {{ chapter.theme }}</p>

    <!-- goals -->
    <section class="card rise rise-2 mt-6 border-l-4 border-l-gull p-5">
      <h2 class="kicker">Etter dette kapittelet</h2>
      <ul class="mt-2 space-y-1">
        <li v-for="(g, i) in chapter.canDo" :key="i" class="text-sm">
          <span class="font-bold text-ink">✓ {{ g.no }}</span>
          <span class="text-ink-faint"> — {{ g.en }}</span>
        </li>
      </ul>
    </section>

    <!-- 1 listen -->
    <section class="card rise rise-2 mt-6 p-6">
      <h2 class="display text-xl font-black text-ink"><span class="text-ink-faint">1 ·</span> Lytt</h2>
      <p class="mt-1 text-sm text-ink-soft">
        Dialogene med tekst og lyd ligger hos NTNU LearnNoW. Hør hver dialog to ganger: først uten tekst, så med.
      </p>
      <div class="mt-4 grid gap-2 sm:grid-cols-2">
        <a
          v-for="(title, i) in chapter.dialogues"
          :key="i"
          :href="links.dialogues[i]"
          target="_blank"
          rel="noopener"
          class="flex items-center gap-3 rounded-lg border border-rule bg-paper px-3 py-2 text-sm no-underline hover:border-fjord"
        >
          <span class="display font-black text-fjord">{{ letters[i] }}</span>
          <span class="font-bold text-ink">{{ title }}</span>
          <span class="ml-auto text-ink-faint">↗</span>
        </a>
      </div>
      <p class="mt-3 text-xs text-ink-faint">
        Mer hos NTNU:
        <a :href="links.listening" target="_blank" rel="noopener" class="text-fjord">lytteøvelser</a> ·
        <a :href="links.pronunciation" target="_blank" rel="noopener" class="text-fjord">uttale</a> ·
        <a :href="links.grammar" target="_blank" rel="noopener" class="text-fjord">deres grammatikk</a>
      </p>
    </section>

    <!-- phrases -->
    <section class="card rise rise-3 mt-6 p-6">
      <h2 class="display text-xl font-black text-ink">Nyttige uttrykk</h2>
      <div class="mt-3 space-y-2 border-l-2 border-gull-wash pl-4">
        <div v-for="(ex, j) in chapter.phrases" :key="j" class="text-sm">
          <p class="font-bold text-ink">
            {{ ex.no }}
            <button v-if="speechAvailable()" class="ml-1 text-xs" title="Hør" @click="speakNorwegian(ex.no)">🔊</button>
          </p>
          <p class="text-ink-faint">{{ ex.en }}</p>
        </div>
      </div>
    </section>

    <!-- 2 grammar -->
    <h2 class="display rise rise-3 mt-10 text-xl font-black text-ink"><span class="text-ink-faint">2 ·</span> Grammatikk</h2>
    <article class="rise rise-3 mt-3 space-y-4">
      <section v-for="(s, i) in chapter.grammar" :key="i" class="card p-6">
        <h3 v-if="s.heading" class="display mb-3 text-lg font-black text-ink">{{ s.heading }}</h3>
        <p class="whitespace-pre-line leading-relaxed text-ink">{{ s.body }}</p>
        <div v-if="s.examples?.length" class="mt-4 space-y-2 border-l-2 border-fjord-wash pl-4">
          <div v-for="(ex, j) in s.examples" :key="j" class="text-sm">
            <p class="font-bold text-ink">
              {{ ex.no }}
              <button v-if="speechAvailable()" class="ml-1 text-xs" title="Hør" @click="speakNorwegian(ex.no)">🔊</button>
            </p>
            <p class="text-ink-faint">{{ ex.en }}<span v-if="ex.note" class="text-gull"> — {{ ex.note }}</span></p>
          </div>
        </div>
      </section>

      <section class="card border-l-4 border-l-rod p-6">
        <p class="kicker">Uttale</p>
        <h3 class="display mb-3 text-lg font-black text-ink">{{ chapter.pronunciation.heading }}</h3>
        <p class="whitespace-pre-line leading-relaxed text-ink">{{ chapter.pronunciation.body }}</p>
      </section>
    </article>

    <!-- 3 words -->
    <section class="card rise rise-4 mt-10 p-6">
      <div class="flex flex-wrap items-baseline justify-between gap-2">
        <h2 class="display text-xl font-black text-ink"><span class="text-ink-faint">3 ·</span> Ord</h2>
        <span class="text-sm font-bold text-ink-faint">{{ learnedWords }} / {{ words.length }} lært</span>
      </div>
      <div class="mt-3 flex flex-wrap gap-1.5">
        <span
          v-for="w in shownWords"
          :key="w.id"
          class="chip border border-rule"
          :class="progress.state.srs[w.id] ? 'bg-moss-wash text-moss' : 'bg-card text-ink-soft'"
          :title="w.en"
        >
          {{ w.gender ? `${w.gender} ` : '' }}{{ w.no }}
        </span>
        <button
          v-if="words.length > shownWords.length"
          class="chip border border-dashed border-rule bg-card text-ink-faint"
          @click="showAllWords = true"
        >
          + {{ words.length - shownWords.length }} til
        </button>
      </div>
      <RouterLink :to="{ path: '/ord', query: { kapittel: chapter.n } }" class="btn btn-primary mt-4 inline-flex">
        Lær kapittelets ord →
      </RouterLink>
    </section>

    <!-- 4 speak -->
    <section class="card rise rise-4 mt-6 border-l-4 border-l-moss p-6">
      <h2 class="display text-xl font-black text-ink"><span class="text-ink-faint">4 ·</span> Snakk</h2>
      <p class="mt-1 text-sm text-ink-soft">
        Svar høyt, i hele setninger. Ta opp deg selv på mobilen og hør etter: står verbet på plass to?
      </p>
      <ol class="mt-3 list-decimal space-y-1.5 pl-5">
        <li v-for="(q, i) in chapter.speaking" :key="i" class="font-bold text-ink">
          {{ q }}
          <button v-if="speechAvailable()" class="ml-1 text-xs font-normal" title="Hør spørsmålet" @click="speakNorwegian(q)">🔊</button>
        </li>
      </ol>
    </section>

    <!-- 5 test -->
    <section class="card rise rise-5 mt-6 p-6">
      <h2 class="display text-xl font-black text-ink"><span class="text-ink-faint">5 ·</span> Test deg</h2>
      <div class="mt-3 flex flex-wrap gap-2">
        <RouterLink :to="{ path: '/quiz', query: { kapittel: chapter.n } }" class="btn btn-accent">
          Kapittelsjekk ({{ chapter.quiz.length }} spørsmål) →
        </RouterLink>
        <RouterLink :to="{ path: '/setninger', query: { kapittel: chapter.n } }" class="btn btn-ghost">
          Bygg setninger ({{ chapter.sentences.length }}) →
        </RouterLink>
      </div>
      <hr class="dotted-rule my-5" />
      <div class="flex flex-wrap items-center gap-3">
        <button v-if="!isDone" class="btn btn-primary" @click="finish">✓ Merk kapittelet som ferdig</button>
        <span v-else class="chip bg-moss-wash text-moss">Kapittel fullført ✓</span>
        <RouterLink v-if="next" :to="`/kurs/${next.n}`" class="text-sm font-bold text-fjord no-underline hover:underline">
          Neste: {{ next.title }} →
        </RouterLink>
      </div>
    </section>

    <div class="mt-6 flex justify-between text-sm font-bold">
      <RouterLink v-if="prev" :to="`/kurs/${prev.n}`" class="text-ink-faint no-underline hover:text-fjord">← {{ prev.title }}</RouterLink>
      <span v-else />
      <RouterLink v-if="next" :to="`/kurs/${next.n}`" class="text-ink-faint no-underline hover:text-fjord">{{ next.title }} →</RouterLink>
    </div>

    <p class="mt-8 text-center text-xs text-ink-faint">
      Rekkefølgen følger NTNUs gratiskurs LearnNoW. Dialoger og lyd © NTNU — forklaringer, eksempler og øvelser her er laget for NorskLærling.
    </p>
  </div>

  <div v-else class="py-20 text-center text-ink-faint">
    Fant ikke kapittelet. <RouterLink to="/kurs" class="text-fjord underline">Tilbake til kurset</RouterLink>
  </div>
</template>
