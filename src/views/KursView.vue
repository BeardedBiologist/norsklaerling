<script setup lang="ts">
import { computed } from 'vue'
import { kurs, kursLessonId, chapterWords } from '../data/kurs'
import { useProgressStore } from '../stores/progress'
import { isLearned } from '../lib/srs'

const progress = useProgressStore()

const doneCount = computed(() => kurs.filter((c) => progress.isLessonRead(kursLessonId(c.n))).length)

/** first chapter not yet finished — where to pick up */
const nextChapter = computed(() => kurs.find((c) => !progress.isLessonRead(kursLessonId(c.n))) ?? null)

/** learned / total words per chapter */
const wordStats = computed(() =>
  Object.fromEntries(
    kurs.map((c) => {
      const words = chapterWords(c.n)
      return [c.n, { learned: words.filter((w) => isLearned(progress.state.srs[w.id])).length, total: words.length }]
    }),
  ) as Record<number, { learned: number; total: number }>,
)
</script>

<template>
  <div>
    <p class="kicker rise rise-1">Fra A1 til A2 — steg for steg</p>
    <h1 class="display rise rise-1 mt-1 text-3xl font-black text-ink sm:text-4xl">Nybegynnerkurs</h1>
    <p class="rise rise-2 mt-3 max-w-2xl text-ink-soft">
      Tolv kapitler som bygger grunnmuren: ordstilling, verb, substantiv og uttale — i samme
      rekkefølge som NTNUs gratiskurs <a href="https://www.ntnu.edu/learnnow" target="_blank" rel="noopener" class="font-bold text-fjord">LearnNoW</a>.
      Hør dialogene med lyd hos NTNU, og lær grammatikken, ordene og øvelsene her.
    </p>
    <p class="rise rise-2 mt-2 text-sm font-bold text-ink-faint">{{ doneCount }} av {{ kurs.length }} kapitler fullført</p>

    <RouterLink
      v-if="nextChapter"
      :to="`/kurs/${nextChapter.n}`"
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
        v-for="c in kurs"
        :key="c.n"
        :to="`/kurs/${c.n}`"
        class="card group flex items-start gap-3 p-4 no-underline transition-shadow hover:shadow-lift"
      >
        <span
          class="display mt-0.5 w-8 shrink-0 text-lg font-black"
          :class="progress.isLessonRead(kursLessonId(c.n)) ? 'text-moss' : 'text-ink-faint'"
        >
          {{ progress.isLessonRead(kursLessonId(c.n)) ? '✓' : String(c.n).padStart(2, '0') }}
        </span>
        <span class="min-w-0">
          <span class="block font-bold text-ink group-hover:text-fjord">{{ c.title }}</span>
          <span class="block text-xs text-ink-faint">{{ c.titleEn }} · {{ c.level }}</span>
          <span class="mt-1 block text-sm text-ink-soft">{{ c.grammar.map((g) => g.heading?.split(':')[0]).slice(0, 3).join(' · ') }}</span>
          <span class="mt-1 block text-xs font-bold text-ink-faint">
            {{ wordStats[c.n].learned }} / {{ wordStats[c.n].total }} ord lært
          </span>
        </span>
      </RouterLink>
    </section>

    <section class="rise rise-5 mt-10">
      <hr class="dotted-rule mb-6" />
      <div class="card border-l-4 border-l-fjord p-5">
        <h3 class="display text-lg font-black text-ink">Slik bruker du et kapittel</h3>
        <ol class="mt-2 list-decimal space-y-1 pl-5 text-sm text-ink-soft">
          <li><strong>Lytt</strong> til de fire dialogene hos NTNU (lenkene er i kapittelet) — gjerne to ganger.</li>
          <li><strong>Les</strong> grammatikken her, og si eksemplene høyt.</li>
          <li><strong>Lær ordene</strong> — kapittelets ord åpnes rett i Ordforråd.</li>
          <li><strong>Snakk</strong>: svar høyt på spørsmålene. Muntlig B1 bygges fra dag én.</li>
          <li><strong>Test deg</strong> med kapittelsjekken og setningene, og merk kapittelet som ferdig.</li>
        </ol>
      </div>
    </section>
  </div>
</template>
