<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { lessonById, lessons } from '../data/lessons'
import { useProgressStore } from '../stores/progress'
import { speakNorwegian, speechAvailable } from '../lib/speech'

const route = useRoute()
const progress = useProgressStore()

const lesson = computed(() => lessonById(String(route.params.id)))
const showEnglish = ref(false)

const nextLesson = computed(() => {
  if (!lesson.value) return null
  const sameCategory = lessons.filter((l) => l.category === lesson.value!.category)
  const i = sameCategory.findIndex((l) => l.id === lesson.value!.id)
  return sameCategory[i + 1] ?? null
})

function finish() {
  if (lesson.value) progress.markLessonRead(lesson.value.id)
}
</script>

<template>
  <div v-if="lesson" class="mx-auto max-w-2xl">
    <RouterLink to="/laer" class="text-sm font-bold text-ink-faint no-underline hover:text-fjord">← Alle leksjoner</RouterLink>

    <p class="kicker rise rise-1 mt-4">{{ lesson.category }} · {{ lesson.level }}</p>
    <h1 class="display rise rise-1 mt-1 text-3xl font-black text-ink">{{ lesson.title }}</h1>
    <p class="rise rise-1 text-ink-faint">{{ lesson.titleEn }}</p>

    <div v-if="lesson.category === 'samfunn'" class="rise rise-2 mt-4">
      <button class="btn btn-ghost" @click="showEnglish = !showEnglish">
        {{ showEnglish ? 'Skjul engelsk oversettelse' : 'Vis engelsk oversettelse' }}
      </button>
    </div>

    <article class="rise rise-2 mt-6 space-y-6">
      <section v-for="(s, i) in lesson.sections" :key="i" class="card p-6">
        <h2 v-if="s.heading" class="display mb-3 text-xl font-black text-ink">{{ s.heading }}</h2>

        <p class="whitespace-pre-line leading-relaxed text-ink">{{ s.body }}</p>

        <div v-if="lesson.category === 'samfunn'" class="mt-2 flex justify-end">
          <button v-if="speechAvailable()" class="btn btn-ghost !px-2 !py-1 text-xs" title="Hør avsnittet" @click="speakNorwegian(s.body.replace(/\n+/g, ' '))">
            🔊 Hør avsnittet
          </button>
        </div>

        <p v-if="showEnglish && s.bodyEn" class="mt-3 whitespace-pre-line rounded-lg bg-paper p-3 text-sm italic leading-relaxed text-ink-soft">
          {{ s.bodyEn }}
        </p>

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
    </article>

    <div class="card mt-8 border-l-4 border-l-moss p-5">
      <p class="font-bold text-ink">Klar til å teste det du har lest?</p>
      <div class="mt-3 flex flex-wrap gap-2">
        <RouterLink :to="lesson.test.to" class="btn btn-accent" @click="finish">
          {{ lesson.test.label }} →
        </RouterLink>
        <button
          v-if="!progress.isLessonRead(lesson.id)"
          class="btn btn-ghost"
          @click="finish"
        >
          ✓ Merk som lest
        </button>
        <span v-else class="chip self-center bg-moss-wash text-moss">Lest ✓</span>
      </div>
      <RouterLink
        v-if="nextLesson"
        :to="`/laer/${nextLesson.id}`"
        class="mt-3 block text-sm font-bold text-fjord no-underline hover:underline"
      >
        Neste leksjon: {{ nextLesson.title }} →
      </RouterLink>
    </div>
  </div>

  <div v-else class="py-20 text-center text-ink-faint">
    Fant ikke leksjonen. <RouterLink to="/laer" class="text-fjord underline">Tilbake til leksjonene</RouterLink>
  </div>
</template>
