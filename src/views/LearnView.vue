<script setup lang="ts">
import { computed } from 'vue'
import { lessons } from '../data/lessons'
import { useProgressStore } from '../stores/progress'

const progress = useProgressStore()

const grammar = computed(() => lessons.filter((l) => l.category === 'grammatikk'))
const samfunn = computed(() => lessons.filter((l) => l.category === 'samfunn'))
const readCount = computed(() => lessons.filter((l) => progress.isLessonRead(l.id)).length)
</script>

<template>
  <div>
    <p class="kicker rise rise-1">Lær først — test etterpå</p>
    <h1 class="display rise rise-1 mt-1 text-3xl font-black text-ink sm:text-4xl">Leksjoner</h1>
    <p class="rise rise-2 mt-3 max-w-2xl text-ink-soft">
      Les leksjonen først, så vet du <em>hvorfor</em> svaret er riktig når du tester deg.
      Hver leksjon peker til modulen som tester akkurat det du har lest.
    </p>
    <p class="rise rise-2 mt-2 text-sm font-bold text-ink-faint">
      {{ readCount }} av {{ lessons.length }} leksjoner lest
    </p>

    <section class="rise rise-3 mt-8">
      <h2 class="display text-xl font-black text-fjord">Grammatikk</h2>
      <p class="mt-1 text-sm text-ink-faint">Reglene bak setningsbygging, quiz og bøyning — forklart på engelsk med norske eksempler.</p>
      <div class="mt-4 grid gap-3 sm:grid-cols-2">
        <RouterLink
          v-for="(l, i) in grammar"
          :key="l.id"
          :to="`/laer/${l.id}`"
          class="card group flex items-start gap-3 p-4 no-underline transition-shadow hover:shadow-lift"
        >
          <span class="display mt-0.5 text-lg font-black" :class="progress.isLessonRead(l.id) ? 'text-moss' : 'text-ink-faint'">
            {{ progress.isLessonRead(l.id) ? '✓' : String(i + 1).padStart(2, '0') }}
          </span>
          <span>
            <span class="block font-bold text-ink group-hover:text-fjord">{{ l.title }}</span>
            <span class="block text-xs text-ink-faint">{{ l.titleEn }} · {{ l.level }}</span>
            <span class="mt-1 block text-sm text-ink-soft">{{ l.teaser }}</span>
          </span>
        </RouterLink>
      </div>
    </section>

    <section class="rise rise-4 mt-10">
      <h2 class="display text-xl font-black text-rod">Samfunnskunnskap</h2>
      <p class="mt-1 text-sm text-ink-faint">Pensum til statsborgerprøven — på enkel norsk med engelsk oversettelse. Å lese disse ER lesetrening.</p>
      <div class="mt-4 grid gap-3 sm:grid-cols-2">
        <RouterLink
          v-for="(l, i) in samfunn"
          :key="l.id"
          :to="`/laer/${l.id}`"
          class="card group flex items-start gap-3 p-4 no-underline transition-shadow hover:shadow-lift"
        >
          <span class="display mt-0.5 text-lg font-black" :class="progress.isLessonRead(l.id) ? 'text-moss' : 'text-ink-faint'">
            {{ progress.isLessonRead(l.id) ? '✓' : String(i + 1).padStart(2, '0') }}
          </span>
          <span>
            <span class="block font-bold text-ink group-hover:text-rod">{{ l.title }}</span>
            <span class="block text-xs text-ink-faint">{{ l.titleEn }} · {{ l.level }}</span>
            <span class="mt-1 block text-sm text-ink-soft">{{ l.teaser }}</span>
          </span>
        </RouterLink>
      </div>
    </section>

    <section class="rise rise-5 mt-10">
      <hr class="dotted-rule mb-6" />
      <div class="card border-l-4 border-l-moss p-5">
        <h3 class="display text-lg font-black text-ink">Og ordforrådet?</h3>
        <p class="mt-1 text-sm text-ink-soft">
          Nye ord lærer du i <strong>Ordforråd</strong> med «Lær nye ord»-modusen: du får se
          hele kortet først — ord, kjønn, bøyning, eksempel og uttale — før ordet legges i
          øvingskøen og testes med smart repetisjon.
        </p>
        <RouterLink to="/ord" class="btn btn-primary mt-4 inline-flex">Lær nye ord →</RouterLink>
      </div>
    </section>
  </div>
</template>
