<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { chapterById, courses, kurs } from '../data/kurs'
import { listeningFor } from '../data/kurs/listening'
import { useProgressStore } from '../stores/progress'
import { TEST_PASS, useJourney } from '../lib/journey'
import { dialogueAudioUrls } from '../lib/audio'
import { compareSentence } from '../lib/compare'
import { permutation, shuffle } from '../lib/utils'
import { speakNorwegian, speechAvailable } from '../lib/speech'
import AudioPlayer from '../components/AudioPlayer.vue'
import TileBuilder from '../components/TileBuilder.vue'
import type { SentenceExercise } from '../types'

/**
 * Kapittelprøven: listening questions on NTNU's recordings, the chapter's
 * grammar questions, sentence building and dictation — graded together.
 * Passing it finishes the chapter and unlocks the next one; it can be
 * taken at any time, so known material can be tested out of.
 */
const route = useRoute()
const progress = useProgressStore()
const journey = useJourney()

const chapter = computed(() => chapterById(String(route.params.id)))
const unlocked = computed(() => !!chapter.value && journey.isUnlocked(chapter.value))
const prevChapter = computed(() => (chapter.value ? journey.previousChapter(chapter.value) : undefined))
const nextChapter = computed(() => {
  const i = kurs.findIndex((c) => c.id === chapter.value?.id)
  return i >= 0 ? kurs[i + 1] : undefined
})
const best = computed(() => (chapter.value ? progress.stepValue(chapter.value.id, 'prove') : undefined))

interface McItem {
  q: string
  options: string[]
  correctIndex: number
  pick: number | null
}
interface ListenGroup {
  title: string
  letter: string
  src: string
  items: McItem[]
}
interface WriteItem {
  s: SentenceExercise
  answer: string
}

const started = ref(false)
const submitted = ref(false)
const listen = ref<ListenGroup[]>([])
const quiz = ref<McItem[]>([])
const build = ref<WriteItem[]>([])
const dictation = ref<WriteItem[]>([])

function mc(q: string, options: string[], answer: number): McItem {
  const perm = permutation(options.length)
  return { q, options: perm.map((i) => options[i]), correctIndex: perm.indexOf(answer), pick: null }
}

function start() {
  const c = chapter.value
  if (!c) return
  const qs = listeningFor(c)
  const urls = dialogueAudioUrls(c)
  const letters = courses[c.course].dialogueLetters
  // one or two questions per text, about four in total
  const perText = qs.length <= 2 ? 2 : 1
  listen.value = c.dialogues
    .map((title, i) => ({
      title,
      letter: letters[i],
      src: urls[i],
      items: shuffle(qs[i] ?? []).slice(0, perText).map((x) => mc(x.q, x.options, x.answer)),
    }))
    .filter((g) => g.items.length)
  quiz.value = shuffle(c.quiz).map((x) => mc(x.question, x.options, x.answer))
  const sents = shuffle(c.sentences)
  build.value = sents.slice(0, 3).map((s) => ({ s, answer: '' }))
  dictation.value = sents.slice(3, 5).map((s) => ({ s, answer: '' }))
  submitted.value = false
  started.value = true
}

const DICTATION_PASS = 0.9
const isBuildRight = (w: WriteItem) => w.answer === w.s.no
const isDictationRight = (w: WriteItem) => compareSentence(w.s.no, w.answer).score >= DICTATION_PASS

const allListen = computed(() => listen.value.flatMap((g) => g.items))
const complete = computed(
  () =>
    allListen.value.every((i) => i.pick !== null) &&
    quiz.value.every((i) => i.pick !== null) &&
    build.value.every((w) => w.answer) &&
    dictation.value.every((w) => w.answer.trim()),
)

const sections = computed(() => [
  { name: 'Lytting', right: allListen.value.filter((i) => i.pick === i.correctIndex).length, total: allListen.value.length, practice: '#item-lytt-0' },
  { name: 'Grammatikk', right: quiz.value.filter((i) => i.pick === i.correctIndex).length, total: quiz.value.length, practice: '#item-sjekk' },
  { name: 'Setninger', right: build.value.filter(isBuildRight).length, total: build.value.length, practice: '#item-bygg' },
  { name: 'Diktat', right: dictation.value.filter(isDictationRight).length, total: dictation.value.length, practice: '#item-diktat' },
])
const score = computed(() => {
  const right = sections.value.reduce((s, x) => s + x.right, 0)
  const total = sections.value.reduce((s, x) => s + x.total, 0)
  return total ? right / total : 0
})
const passed = computed(() => score.value >= TEST_PASS)

function submit() {
  if (!chapter.value) return
  submitted.value = true
  progress.recordStep(chapter.value.id, 'prove', score.value)
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function optionClass(i: McItem, oi: number): string {
  if (!submitted.value) return i.pick === oi ? 'border-fjord bg-fjord-wash text-ink' : 'border-rule bg-card hover:border-fjord'
  if (oi === i.correctIndex) return 'border-moss bg-moss-wash text-moss'
  if (i.pick === oi) return 'border-rod bg-rod-wash text-rod-deep'
  return 'border-rule bg-card opacity-60'
}
</script>

<template>
  <div v-if="chapter" class="mx-auto max-w-2xl">
    <RouterLink :to="`/kurs/${chapter.id}`" class="text-sm font-bold text-ink-faint no-underline hover:text-fjord">← Tilbake til kapittelet</RouterLink>
    <p class="kicker rise rise-1 mt-4">{{ courses[chapter.course].title }} · kapittel {{ chapter.n }}</p>
    <h1 class="display rise rise-1 mt-1 text-3xl font-black text-ink">Kapittelprøve: {{ chapter.title }}</h1>

    <!-- locked -->
    <div v-if="!unlocked" class="card rise rise-2 mt-6 p-6 text-center">
      <p class="text-4xl">🔒</p>
      <p class="mt-2 font-bold text-ink">Dette kapittelet er låst.</p>
      <p v-if="prevChapter" class="mt-1 text-sm text-ink-soft">Bestå kapittelprøven i «{{ prevChapter.title }}» først.</p>
      <RouterLink v-if="prevChapter" :to="`/kurs/${prevChapter.id}/prove`" class="btn btn-accent mt-4 inline-flex">Ta prøven for «{{ prevChapter.title }}» →</RouterLink>
    </div>

    <!-- intro -->
    <div v-else-if="!started" class="card rise rise-2 mt-6 p-6">
      <p class="text-ink-soft">
        Prøven tester hele kapittelet: <strong>lytting</strong> (NTNUs opptak), <strong>grammatikk</strong>,
        <strong>setningsbygging</strong> og <strong>diktat</strong>. Du må ha minst {{ Math.round(TEST_PASS * 100) }} % riktig
        for å bestå og låse opp neste kapittel.
      </p>
      <p class="mt-2 text-sm text-ink-faint">
        Kan du stoffet fra før? Da kan du ta prøven med en gang og hoppe rett videre.
      </p>
      <p v-if="best !== undefined" class="mt-3 text-sm font-bold" :class="best >= TEST_PASS ? 'text-moss' : 'text-gull'">
        Beste resultat: {{ Math.round(best * 100) }} %{{ best >= TEST_PASS ? ' — bestått ✓' : '' }}
      </p>
      <button class="btn btn-accent mt-5 w-full" @click="start">Start prøven</button>
    </div>

    <template v-else>
      <!-- result -->
      <div v-if="submitted" class="card pop mt-6 p-6" :class="passed ? 'border-l-4 border-l-moss' : 'border-l-4 border-l-gull'">
        <p class="display text-2xl font-black" :class="passed ? 'text-moss' : 'text-gull'">
          {{ Math.round(score * 100) }} % — {{ passed ? 'bestått! 🎉' : 'ikke bestått ennå' }}
        </p>
        <ul class="mt-3 space-y-1 text-sm">
          <li v-for="s in sections" :key="s.name" class="flex justify-between gap-2">
            <span class="text-ink">{{ s.name }}</span>
            <span :class="s.right === s.total ? 'text-moss' : 'text-ink-soft'">
              {{ s.right }} / {{ s.total }}
              <RouterLink v-if="!passed && s.right < s.total" :to="`/kurs/${chapter.id}${s.practice}`" class="ml-2 text-xs font-bold text-fjord">øv mer →</RouterLink>
            </span>
          </li>
        </ul>
        <p class="mt-3 text-sm text-ink-soft">
          {{ passed ? 'Kapittelet er fullført, og neste kapittel er låst opp.' : `Du trenger ${Math.round(TEST_PASS * 100)} %. Se gjennom svarene under, øv på delene som gikk dårlig, og prøv igjen.` }}
        </p>
        <div class="mt-4 flex flex-wrap gap-2">
          <RouterLink v-if="passed && nextChapter" :to="`/kurs/${nextChapter.id}`" class="btn btn-accent">Neste kapittel: {{ nextChapter.title }} →</RouterLink>
          <button v-if="!passed" class="btn btn-accent" @click="start">Ta prøven på nytt</button>
          <RouterLink :to="`/kurs/${chapter.id}`" class="btn btn-ghost">Tilbake til kapittelet</RouterLink>
        </div>
      </div>

      <!-- 1 listening -->
      <section class="card mt-6 p-6">
        <h2 class="display text-xl font-black text-ink"><span class="text-ink-faint">1 ·</span> Lytting</h2>
        <p class="mt-1 text-sm text-ink-soft">Hør tekstene og svar på spørsmålene.</p>
        <div v-for="(g, gi) in listen" :key="gi" class="mt-4">
          <AudioPlayer :src="g.src" :label="g.title" :letter="g.letter" />
          <div v-for="(item, ii) in g.items" :key="ii" class="mt-3">
            <p class="text-sm font-bold text-ink">{{ item.q }}</p>
            <div class="mt-1.5 grid gap-1.5 sm:grid-cols-2">
              <button
                v-for="(opt, oi) in item.options"
                :key="oi"
                class="rounded-lg border-2 px-3 py-1.5 text-left text-sm"
                :class="optionClass(item, oi)"
                :disabled="submitted"
                @click="item.pick = oi"
              >{{ opt }}</button>
            </div>
          </div>
        </div>
      </section>

      <!-- 2 grammar -->
      <section class="card mt-6 p-6">
        <h2 class="display text-xl font-black text-ink"><span class="text-ink-faint">2 ·</span> Grammatikk</h2>
        <div v-for="(item, ii) in quiz" :key="ii" class="mt-4">
          <p class="text-sm font-bold text-ink">{{ ii + 1 }}. {{ item.q }}</p>
          <div class="mt-1.5 grid gap-1.5 sm:grid-cols-2">
            <button
              v-for="(opt, oi) in item.options"
              :key="oi"
              class="rounded-lg border-2 px-3 py-1.5 text-left text-sm"
              :class="optionClass(item, oi)"
              :disabled="submitted"
              @click="item.pick = oi"
            >{{ opt }}</button>
          </div>
        </div>
      </section>

      <!-- 3 build -->
      <section class="card mt-6 p-6">
        <h2 class="display text-xl font-black text-ink"><span class="text-ink-faint">3 ·</span> Bygg setningene</h2>
        <div v-for="(w, wi) in build" :key="wi" class="mt-4">
          <p class="text-sm font-bold text-ink">“{{ w.s.en }}”</p>
          <TileBuilder
            v-model="w.answer"
            class="mt-1.5"
            :sentence="w.s.no"
            :disabled="submitted"
            :status="submitted ? (isBuildRight(w) ? 'correct' : 'wrong') : null"
          />
          <p v-if="submitted && !isBuildRight(w)" class="mt-1 text-sm text-ink-soft">Riktig: <strong class="text-ink">{{ w.s.no }}</strong></p>
        </div>
      </section>

      <!-- 4 dictation -->
      <section class="card mt-6 p-6">
        <h2 class="display text-xl font-black text-ink"><span class="text-ink-faint">4 ·</span> Diktat</h2>
        <p class="mt-1 text-sm text-ink-soft">Hør setningen og skriv den.</p>
        <div v-for="(w, wi) in dictation" :key="wi" class="mt-4">
          <div class="flex gap-2">
            <button v-if="speechAvailable()" class="btn btn-primary !py-1 text-sm" @click="speakNorwegian(w.s.no, 0.9)">🔊 Hør setning {{ wi + 1 }}</button>
            <button v-if="speechAvailable()" class="btn btn-ghost !py-1 text-sm" @click="speakNorwegian(w.s.no, 0.6)">🐢 Sakte</button>
          </div>
          <input
            v-model="w.answer"
            type="text"
            class="mt-2 w-full rounded-xl border-2 bg-paper p-2.5 text-ink focus:border-fjord focus:outline-none"
            :class="submitted ? (isDictationRight(w) ? 'border-moss' : 'border-rod') : 'border-rule'"
            placeholder="Skriv det du hører …"
            :disabled="submitted"
          />
          <p v-if="submitted && !isDictationRight(w)" class="mt-1 text-sm text-ink-soft">Riktig: <strong class="text-ink">{{ w.s.no }}</strong></p>
        </div>
      </section>

      <button v-if="!submitted" class="btn btn-accent mt-6 w-full" :disabled="!complete" @click="submit">
        {{ complete ? 'Lever prøven' : 'Svar på alt for å levere' }}
      </button>
    </template>
  </div>
</template>
