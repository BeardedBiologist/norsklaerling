<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { chaptersOf, chapterWords, courses, kursLessonId } from '../data/kurs'
import { useProgressStore } from '../stores/progress'
import { isLearned } from '../lib/srs'
import type { KursChapter, KursCourse } from '../types'

const route = useRoute()
const progress = useProgressStore()

/** ?kurs=b1 shows the B1 course; default is the beginner course */
const course = computed<KursCourse>(() => (route.query.kurs === 'b1' ? 'b1' : 'nybegynner'))
const info = computed(() => courses[course.value])
const chapters = computed(() => chaptersOf(course.value))

const isDone = (c: KursChapter) => progress.isLessonRead(kursLessonId(c))
const doneCount = computed(() => chapters.value.filter(isDone).length)

/** first chapter not yet finished — where to pick up */
const nextChapter = computed(() => chapters.value.find((c) => !isDone(c)) ?? null)

/** learned / total words per chapter */
const wordStats = computed(() =>
  Object.fromEntries(
    chapters.value.map((c) => {
      const words = chapterWords(c)
      return [c.id, { learned: words.filter((w) => isLearned(progress.state.srs[w.id])).length, total: words.length }]
    }),
  ) as Record<string, { learned: number; total: number }>,
)

const tabs: { course: KursCourse; to: string }[] = [
  { course: 'nybegynner', to: '/kurs' },
  { course: 'b1', to: '/kurs?kurs=b1' },
]
</script>

<template>
  <div>
    <div class="rise rise-1 flex flex-wrap gap-2">
      <RouterLink
        v-for="t in tabs"
        :key="t.course"
        :to="t.to"
        class="btn no-underline"
        :class="course === t.course ? 'btn-primary' : 'btn-ghost'"
      >
        {{ courses[t.course].title }} <span class="ml-1 opacity-70">{{ courses[t.course].levels }}</span>
      </RouterLink>
    </div>

    <p class="kicker rise rise-1 mt-6">{{ info.levels }} — steg for steg</p>
    <h1 class="display rise rise-1 mt-1 text-3xl font-black text-ink sm:text-4xl">{{ info.title }}</h1>
    <p v-if="course === 'nybegynner'" class="rise rise-2 mt-3 max-w-2xl text-ink-soft">
      Tolv kapitler som bygger grunnmuren: ordstilling, verb, substantiv og uttale — i samme
      rekkefølge som NTNUs gratiskurs <a :href="info.source.url" target="_blank" rel="noopener" class="font-bold text-fjord">LearnNoW</a>.
      Hør dialogene med lyd hos NTNU, og lær grammatikken, ordene og øvelsene her.
    </p>
    <p v-else class="rise rise-2 mt-3 max-w-2xl text-ink-soft">
      Ti kapitler som tar deg fra A2 til B1 — i samme rekkefølge som NTNUs
      <a :href="info.source.url" target="_blank" rel="noopener" class="font-bold text-fjord">NoW2</a>.
      Temaene er de samme som på norskprøven og statsborgerprøven: bolig, skole, jobb, historie,
      17. mai, religion og livets store dager. Hvert kapittel trener også det du må kunne muntlig:
      å diskutere, sammenligne, begrunne og fortelle.
    </p>
    <p class="rise rise-2 mt-2 text-sm font-bold text-ink-faint">{{ doneCount }} av {{ chapters.length }} kapitler fullført</p>

    <RouterLink
      v-if="nextChapter"
      :to="`/kurs/${nextChapter.id}`"
      class="card rise rise-3 mt-6 flex items-center justify-between gap-4 border-l-4 border-l-gull p-5 no-underline transition-shadow hover:shadow-lift"
    >
      <span>
        <span class="kicker block">{{ doneCount === 0 ? 'Start her' : 'Fortsett' }}</span>
        <span class="display block text-xl font-black text-ink">Kapittel {{ nextChapter.n }} · {{ nextChapter.title }}</span>
        <span class="block text-sm text-ink-soft">{{ nextChapter.theme }}</span>
      </span>
      <span class="display text-3xl font-black text-gull">→</span>
    </RouterLink>

    <section class="rise rise-4 mt-8 grid gap-3 sm:grid-cols-2">
      <RouterLink
        v-for="c in chapters"
        :key="c.id"
        :to="`/kurs/${c.id}`"
        class="card group flex items-start gap-3 p-4 no-underline transition-shadow hover:shadow-lift"
      >
        <span class="display mt-0.5 w-8 shrink-0 text-lg font-black" :class="isDone(c) ? 'text-moss' : 'text-ink-faint'">
          {{ isDone(c) ? '✓' : String(c.n).padStart(2, '0') }}
        </span>
        <span class="min-w-0">
          <span class="block font-bold text-ink group-hover:text-fjord">{{ c.title }}</span>
          <span class="block text-xs text-ink-faint">{{ c.titleEn }} · {{ c.level }}</span>
          <span class="mt-1 block text-sm text-ink-soft">{{ c.grammar.map((g) => g.heading?.split(':')[0]).slice(0, 3).join(' · ') }}</span>
          <span class="mt-1 block text-xs font-bold text-ink-faint">
            {{ wordStats[c.id].learned }} / {{ wordStats[c.id].total }} ord lært
          </span>
        </span>
      </RouterLink>
    </section>

    <section class="rise rise-5 mt-10">
      <hr class="dotted-rule mb-6" />
      <div class="card border-l-4 border-l-fjord p-5">
        <h3 class="display text-lg font-black text-ink">Slik bruker du et kapittel</h3>
        <ol class="mt-2 list-decimal space-y-1 pl-5 text-sm text-ink-soft">
          <li><strong>Lytt</strong> til tekstene hos NTNU (lenkene er i kapittelet) — gjerne to ganger.</li>
          <li><strong>Les</strong> grammatikken her, og si eksemplene høyt.</li>
          <li><strong>Lær ordene</strong> — kapittelets ord åpnes rett i Ordforråd.</li>
          <li><strong>Snakk</strong>: svar høyt på spørsmålene. Muntlig B1 bygges fra dag én.</li>
          <li><strong>Test deg</strong> med kapittelsjekken og setningene, og merk kapittelet som ferdig.</li>
        </ol>
      </div>
    </section>
  </div>
</template>
