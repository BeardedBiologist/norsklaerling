<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { chapterById, chapterWords, chaptersOf, courses, kursLessonId, ntnuLinks, siblingChapter } from '../data/kurs'
import { useProgressStore } from '../stores/progress'
import { isLearned } from '../lib/srs'
import { speakNorwegian, speechAvailable } from '../lib/speech'
import { dialogueAudioUrls, speakCard } from '../lib/audio'
import AudioPlayer from '../components/AudioPlayer.vue'

const route = useRoute()
const progress = useProgressStore()

const chapter = computed(() => chapterById(String(route.params.id)))
const course = computed(() => (chapter.value ? courses[chapter.value.course] : null))
const courseLength = computed(() => (chapter.value ? chaptersOf(chapter.value.course).length : 0))
const courseHome = computed(() => (chapter.value?.course === 'b1' ? '/kurs?kurs=b1' : '/kurs'))
const links = computed(() => (chapter.value ? ntnuLinks(chapter.value) : null))
const audioUrls = computed(() => (chapter.value ? dialogueAudioUrls(chapter.value) : []))
const words = computed(() => (chapter.value ? chapterWords(chapter.value) : []))
const learnedWords = computed(() => words.value.filter((w) => isLearned(progress.state.srs[w.id])).length)
const showAllWords = ref(false)
const shownWords = computed(() => (showAllWords.value ? words.value : words.value.slice(0, 24)))

const prev = computed(() => (chapter.value ? siblingChapter(chapter.value, -1) : undefined))
const next = computed(() => (chapter.value ? siblingChapter(chapter.value, 1) : undefined))
const isDone = computed(() => !!chapter.value && progress.isLessonRead(kursLessonId(chapter.value)))

function finish() {
  if (chapter.value) progress.markLessonRead(kursLessonId(chapter.value))
}
</script>

<template>
  <div v-if="chapter && links && course" class="mx-auto max-w-2xl">
    <RouterLink :to="courseHome" class="text-sm font-bold text-ink-faint no-underline hover:text-fjord">← Alle kapitler</RouterLink>

    <p class="kicker rise rise-1 mt-4">{{ course.title }} · kapittel {{ chapter.n }} av {{ courseLength }} · {{ chapter.level }}</p>
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
        Hør hver tekst to ganger: først bare med ørene, så én gang til på 0,75× hvis det går fort.
        Lyden er NTNUs egne opptak fra {{ course.source.name }}.
      </p>
      <div class="mt-4 space-y-2">
        <div v-for="(title, i) in chapter.dialogues" :key="i">
          <AudioPlayer :src="audioUrls[i]" :label="title" :letter="course.dialogueLetters[i]" />
          <a
            :href="links.dialogues[i]"
            target="_blank"
            rel="noopener"
            class="ml-1 mt-0.5 inline-block text-xs text-ink-faint no-underline hover:text-fjord"
          >Les teksten hos NTNU ↗</a>
        </div>
      </div>
      <p class="mt-3 text-xs text-ink-faint">
        Mer hos NTNU:
        <template v-for="(x, i) in links.extras" :key="x.url">
          <a :href="x.url" target="_blank" rel="noopener" class="text-fjord">{{ x.label }}</a><span v-if="i < links.extras.length - 1"> · </span>
        </template>
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
        <button
          v-for="w in shownWords"
          :key="w.id"
          class="chip border border-rule hover:border-fjord"
          :class="progress.state.srs[w.id] ? 'bg-moss-wash text-moss' : 'bg-card text-ink-soft'"
          :title="`${w.en} — klikk for å høre`"
          @click="speakCard(w)"
        >
          {{ w.gender ? `${w.gender} ` : '' }}{{ w.no }}
        </button>
        <button
          v-if="words.length > shownWords.length"
          class="chip border border-dashed border-rule bg-card text-ink-faint"
          @click="showAllWords = true"
        >
          + {{ words.length - shownWords.length }} til
        </button>
      </div>
      <RouterLink :to="{ path: '/ord', query: { kapittel: chapter.id } }" class="btn btn-primary mt-4 inline-flex">
        Lær kapittelets ord →
      </RouterLink>
    </section>

    <!-- 4 speak -->
    <section class="card rise rise-4 mt-6 border-l-4 border-l-moss p-6">
      <h2 class="display text-xl font-black text-ink"><span class="text-ink-faint">4 ·</span> Snakk</h2>
      <p class="mt-1 text-sm text-ink-soft">
        Svar høyt, i hele setninger. I «Snakk fritt» hører du spørsmålet, svarer inn i mikrofonen,
        og får se det du sa skrevet ut — så kan du høre på deg selv og sjekke: står verbet på plass to?
      </p>
      <ol class="mt-3 list-decimal space-y-1.5 pl-5">
        <li v-for="(q, i) in chapter.speaking" :key="i" class="font-bold text-ink">
          {{ q }}
          <button v-if="speechAvailable()" class="ml-1 text-xs font-normal" title="Hør spørsmålet" @click="speakNorwegian(q)">🔊</button>
        </li>
      </ol>
      <RouterLink :to="{ path: '/lytt', query: { kapittel: chapter.id, modus: 'fritt' } }" class="btn btn-primary mt-4 inline-flex">
        🎙 Snakk fritt →
      </RouterLink>
    </section>

    <!-- 5 test -->
    <section class="card rise rise-5 mt-6 p-6">
      <h2 class="display text-xl font-black text-ink"><span class="text-ink-faint">5 ·</span> Test deg</h2>
      <div class="mt-3 flex flex-wrap gap-2">
        <RouterLink :to="{ path: '/quiz', query: { kapittel: chapter.id } }" class="btn btn-accent">
          Kapittelsjekk ({{ chapter.quiz.length }} spørsmål) →
        </RouterLink>
        <RouterLink :to="{ path: '/setninger', query: { kapittel: chapter.id } }" class="btn btn-ghost">
          Bygg setninger ({{ chapter.sentences.length }}) →
        </RouterLink>
        <RouterLink :to="{ path: '/setninger', query: { kapittel: chapter.id, lytt: '1' } }" class="btn btn-ghost">
          🎧 Hør og bygg →
        </RouterLink>
        <RouterLink :to="{ path: '/lytt', query: { kapittel: chapter.id, modus: 'diktat' } }" class="btn btn-ghost">
          ✍️ Diktat →
        </RouterLink>
        <RouterLink :to="{ path: '/lytt', query: { kapittel: chapter.id, modus: 'si' } }" class="btn btn-ghost">
          🎙 Si det på norsk →
        </RouterLink>
      </div>
      <hr class="dotted-rule my-5" />
      <div class="flex flex-wrap items-center gap-3">
        <button v-if="!isDone" class="btn btn-primary" @click="finish">✓ Merk kapittelet som ferdig</button>
        <span v-else class="chip bg-moss-wash text-moss">Kapittel fullført ✓</span>
        <RouterLink v-if="next" :to="`/kurs/${next.id}`" class="text-sm font-bold text-fjord no-underline hover:underline">
          Neste: {{ next.title }} →
        </RouterLink>
      </div>
    </section>

    <div class="mt-6 flex justify-between text-sm font-bold">
      <RouterLink v-if="prev" :to="`/kurs/${prev.id}`" class="text-ink-faint no-underline hover:text-fjord">← {{ prev.title }}</RouterLink>
      <span v-else />
      <RouterLink v-if="next" :to="`/kurs/${next.id}`" class="text-ink-faint no-underline hover:text-fjord">{{ next.title }} →</RouterLink>
    </div>

    <p class="mt-8 text-center text-xs text-ink-faint">
      Rekkefølgen følger NTNUs gratiskurs {{ course.source.name }}. Tekster og lyd © NTNU — forklaringer, eksempler og øvelser her er laget for NorskLærling.
    </p>
  </div>

  <div v-else class="py-20 text-center text-ink-faint">
    Fant ikke kapittelet. <RouterLink to="/kurs" class="text-fjord underline">Tilbake til kurset</RouterLink>
  </div>
</template>
