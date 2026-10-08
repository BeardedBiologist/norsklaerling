<script setup lang="ts">
import { computed, nextTick, onMounted } from 'vue'
import { chaptersOf, courses } from '../data/kurs'
import { STEPS, useJourney } from '../lib/journey'
import type { KursCourse } from '../types'

const journey = useJourney()

const sections: { course: KursCourse; intro: string }[] = [
  {
    course: 'nybegynner',
    intro: 'Grunnmuren: ordstilling, verb, substantiv og uttale — i samme rekkefølge som NTNUs gratiskurs LearnNoW.',
  },
  {
    course: 'b1',
    intro: 'Fra A2 til B1 etter NTNUs NoW2: bolig, skole, jobb, historie, 17. mai og livets store dager — og å diskutere, sammenligne og begrunne muntlig.',
  },
]

const current = computed(() => journey.current.value)
const pct = computed(() => Math.round((journey.completedSteps.value / journey.totalSteps) * 100))

onMounted(async () => {
  await nextTick()
  if (current.value) document.getElementById(`k-${current.value.chapter.id}`)?.scrollIntoView({ block: 'center' })
})
</script>

<template>
  <div class="mx-auto max-w-3xl">
    <p class="kicker rise rise-1">A1 → A2 → B1</p>
    <h1 class="display rise rise-1 mt-1 text-3xl font-black text-ink sm:text-4xl">Reisen</h1>
    <p class="rise rise-2 mt-3 max-w-2xl text-ink-soft">
      22 kapitler, seks steg i hvert: lytt og forstå, grammatikk, ord, bygg setninger, snakk og kapittelsjekk.
      Stegene hakes av automatisk når du gjør dem, og fremgangen lagres på kontoen din — så du kan alltid
      fortsette der du slapp. Alle modulene i menyen kan du fortsatt bruke fritt.
    </p>

    <!-- overall progress + resume -->
    <div class="card rise rise-2 mt-6 p-5">
      <div class="flex items-center justify-between text-sm font-bold">
        <span class="text-ink">Hele reisen</span>
        <span class="text-ink-faint">{{ journey.completedSteps.value }} av {{ journey.totalSteps }} steg · {{ pct }} %</span>
      </div>
      <div class="mt-2 h-2.5 overflow-hidden rounded-full bg-paper-warm">
        <div class="h-full rounded-full bg-moss transition-all" :style="{ width: pct + '%' }" />
      </div>
      <RouterLink
        v-if="current"
        :to="current.step?.to ?? `/kurs/${current.chapter.id}`"
        class="mt-4 flex items-center justify-between gap-4 rounded-xl border-2 border-gull bg-gull-wash p-4 no-underline hover:shadow-lift"
      >
        <span>
          <span class="kicker block">{{ journey.completedSteps.value === 0 ? 'Start her' : 'Fortsett der du slapp' }}</span>
          <span class="display block text-lg font-black text-ink">
            {{ courses[current.chapter.course].title }} · kapittel {{ current.chapter.n }}: {{ current.chapter.title }}
          </span>
          <span v-if="current.step" class="block text-sm text-ink-soft">Neste steg: {{ current.step.icon }} {{ current.step.title }} — {{ current.step.detail }}</span>
        </span>
        <span class="display text-3xl font-black text-gull">→</span>
      </RouterLink>
      <p v-else class="mt-4 text-center font-bold text-moss">Du har fullført hele reisen! Nå er du klar for norskprøven på B1. 🎉</p>
    </div>

    <!-- the path -->
    <section v-for="sec in sections" :key="sec.course" class="rise rise-3 mt-10">
      <div class="flex items-baseline justify-between gap-2">
        <h2 class="display text-2xl font-black text-ink">{{ courses[sec.course].title }}</h2>
        <span class="chip bg-fjord-wash text-fjord">{{ courses[sec.course].levels }}</span>
      </div>
      <p class="mt-1 text-sm text-ink-soft">
        {{ sec.intro }}
        <a :href="courses[sec.course].source.url" target="_blank" rel="noopener" class="text-fjord">{{ courses[sec.course].source.name }} ↗</a>
      </p>

      <ol class="relative mt-5 space-y-3 border-l-2 border-rule pl-6">
        <li v-for="c in chaptersOf(sec.course)" :id="`k-${c.id}`" :key="c.id" class="relative">
          <span
            class="absolute -left-[2.15rem] top-4 flex h-6 w-6 items-center justify-center rounded-full border-2 text-xs font-black"
            :class="
              journey.isChapterDone(c)
                ? 'border-moss bg-moss text-card'
                : current?.chapter.id === c.id
                  ? 'border-gull bg-gull text-card'
                  : 'border-rule bg-card text-ink-faint'
            "
          >{{ journey.isChapterDone(c) ? '✓' : c.n }}</span>

          <RouterLink
            :to="`/kurs/${c.id}`"
            class="card group block p-4 no-underline transition-shadow hover:shadow-lift"
            :class="current?.chapter.id === c.id ? 'ring-2 ring-gull' : ''"
          >
            <div class="flex flex-wrap items-baseline justify-between gap-2">
              <span>
                <span class="font-bold text-ink group-hover:text-fjord">{{ c.n }}. {{ c.title }}</span>
                <span class="ml-2 text-xs text-ink-faint">{{ c.titleEn }} · {{ c.level }}</span>
              </span>
              <span class="text-xs font-bold" :class="journey.isChapterDone(c) ? 'text-moss' : 'text-ink-faint'">
                {{ journey.isChapterDone(c) ? 'Fullført' : `${journey.doneSteps(c)} / ${STEPS.length} steg` }}
              </span>
            </div>
            <p class="mt-1 text-sm text-ink-soft">{{ c.theme }}</p>
            <div class="mt-2 flex gap-1">
              <span
                v-for="s in journey.chapterSteps(c)"
                :key="s.key"
                class="h-1.5 flex-1 rounded-full"
                :class="s.done ? 'bg-moss' : 'bg-paper-warm'"
                :title="`${s.title}: ${s.detail}`"
              />
            </div>
          </RouterLink>
        </li>
      </ol>
    </section>
  </div>
</template>
