<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { chapterById, courses, kurs } from '../data/kurs'
import { oralPlan, testBankFor } from '../data/kurs/tests'
import { useProgressStore } from '../stores/progress'
import { TEST_PASS, useJourney } from '../lib/journey'
import { dialogueAudioUrls } from '../lib/audio'
import { compareSentence } from '../lib/compare'
import { permutation, shuffle } from '../lib/utils'
import { speakNorwegian, speechAvailable } from '../lib/speech'
import AudioPlayer from '../components/AudioPlayer.vue'
import TileBuilder from '../components/TileBuilder.vue'
import OralTestItem from '../components/OralTestItem.vue'
import { aiAvailable } from '../lib/ai'
import { speakingSupported } from '../lib/useSpeechCapture'
import type { SentenceExercise, SpeakingTask } from '../types'

/**
 * Kapittelprøven: listening questions on NTNU's recordings, grammar,
 * sentence building, dictation and an AI-graded oral part — all drawn from
 * a test-only bank (same material as the chapter, never the practice
 * items). The oral part grows towards B1 and counts extra. Passing finishes
 * the chapter and unlocks the next one; it can be taken at any time, so
 * known material can be tested out of.
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

interface OralItem {
  task: SpeakingTask
  score: number | null
}
const oral = ref<OralItem[]>([])
const oralSkipped = ref(false)
const oralBusy = ref(false)
const oralFailed = ref(false)
const oralOk = aiAvailable() && speakingSupported(true)
const plan = computed(() => (chapter.value ? oralPlan(chapter.value) : undefined))

function mc(q: string, options: string[], answer: number): McItem {
  const perm = permutation(options.length)
  return { q, options: perm.map((i) => options[i]), correctIndex: perm.indexOf(answer), pick: null }
}

function start() {
  const c = chapter.value
  if (!c) return
  const bank = testBankFor(c)
  if (!bank) return
  const qs = bank.listening
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
  quiz.value = shuffle(bank.quiz).slice(0, 6).map((x) => mc(x.question, x.options, x.answer))
  const sents = shuffle(bank.sentences)
  build.value = sents.slice(0, 3).map((s) => ({ s, answer: '' }))
  dictation.value = sents.slice(3, 5).map((s) => ({ s, answer: '' }))
  const p = oralPlan(c)
  const monologues = shuffle(bank.oral.filter((t) => t.type !== 'samtale')).slice(0, p.monologues)
  const conversations = shuffle(bank.oral.filter((t) => t.type === 'samtale')).slice(0, p.conversations)
  oral.value = [...monologues, ...conversations].map((task) => ({ task, score: null }))
  oralSkipped.value = !oralOk
  oralBusy.value = false
  oralFailed.value = false
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
    dictation.value.every((w) => w.answer.trim()) &&
    (oralSkipped.value || oral.value.every((o) => o.score !== null)),
)

const oralCounts = computed(() => !oralSkipped.value && oral.value.length > 0)
const oralScore = computed(() => {
  if (!oralCounts.value) return null
  return oral.value.reduce((s, o) => s + (o.score ?? 0), 0) / oral.value.length
})

const sections = computed(() => [
  { name: 'Lytting', right: allListen.value.filter((i) => i.pick === i.correctIndex).length, total: allListen.value.length, practice: '#item-lytt-0' },
  { name: 'Grammatikk', right: quiz.value.filter((i) => i.pick === i.correctIndex).length, total: quiz.value.length, practice: '#item-sjekk' },
  { name: 'Setninger', right: build.value.filter(isBuildRight).length, total: build.value.length, practice: '#item-bygg' },
  { name: 'Diktat', right: dictation.value.filter(isDictationRight).length, total: dictation.value.length, practice: '#item-diktat' },
])
const score = computed(() => {
  let right = sections.value.reduce((s, x) => s + x.right, 0)
  let total = sections.value.reduce((s, x) => s + x.total, 0)
  if (oralCounts.value && plan.value) {
    // each oral item is worth several points
    right += oral.value.reduce((s, o) => s + (o.score ?? 0), 0) * plan.value.weight
    total += oral.value.length * plan.value.weight
  }
  return total ? right / total : 0
})
const oralPassed = computed(() => oralScore.value === null || !plan.value || oralScore.value >= plan.value.minScore)
const passed = computed(() => score.value >= TEST_PASS && oralPassed.value)

function submit() {
  if (!chapter.value) return
  submitted.value = true
  oralBusy.value = false
  // a failed oral part caps the result below the pass mark
  progress.recordStep(chapter.value.id, 'prove', passed.value ? score.value : Math.min(score.value, TEST_PASS - 0.01))
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
        <strong>setningsbygging</strong>, <strong>diktat</strong> og en <strong>muntlig del</strong> som AI-en vurderer.
        Spørsmålene er nye — de handler om det samme som kapittelet, men er ikke de samme som i øvingene.
        Du må ha minst {{ Math.round(TEST_PASS * 100) }} % riktig for å bestå og låse opp neste kapittel.
      </p>
      <p v-if="plan" class="mt-2 text-sm text-ink-soft">
        Muntlig del: {{ plan.monologues }} {{ plan.monologues === 1 ? 'muntlig svar' : 'muntlige svar' }}{{ plan.conversations ? ` og ${plan.conversations} samtale med AI-en` : '' }}.
        Hver muntlig oppgave teller {{ plan.weight }} poeng<span v-if="plan.minScore">, og du må ha minst {{ Math.round(plan.minScore * 100) }} % på den muntlige delen</span>.
      </p>
      <p v-if="!oralOk" class="mt-2 rounded-lg bg-gull-wash p-2 text-sm text-ink">
        Den muntlige delen krever AI og mikrofon, som ikke er tilgjengelig her. Prøven blir vurdert uten den.
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
          <li v-if="oralScore !== null" class="flex justify-between gap-2">
            <span class="text-ink">Muntlig ({{ plan?.weight }} poeng per oppgave)</span>
            <span :class="oralPassed ? 'text-moss' : 'text-rod'">
              {{ Math.round(oralScore * 100) }} %
              <RouterLink v-if="!oralPassed" :to="`/snakk?kapittel=${chapter.id}`" class="ml-2 text-xs font-bold text-fjord">øv mer →</RouterLink>
            </span>
          </li>
          <li v-else-if="oral.length" class="text-xs text-ink-faint">Muntlig del hoppet over — ikke med i vurderingen.</li>
        </ul>
        <p v-if="!oralPassed" class="mt-3 text-sm font-bold text-rod">
          Den muntlige delen må være minst {{ Math.round((plan?.minScore ?? 0) * 100) }} % for å bestå, uansett totalsum.
        </p>
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

      <!-- 5 oral -->
      <section v-if="oral.length" class="card mt-6 p-6">
        <h2 class="display text-xl font-black text-ink"><span class="text-ink-faint">5 ·</span> Muntlig</h2>
        <template v-if="!oralSkipped">
          <p class="mt-1 text-sm text-ink-soft">
            Snakk inn svaret ditt. AI-en vurderer oppgaveløsning, sammenheng, ordforråd, grammatikk og flyt.
            Snakk gjerne i flere setninger.
          </p>
          <OralTestItem
            v-for="(o, oi) in oral"
            :key="o.task.id"
            :task="o.task"
            :n="oi + 1"
            :level="chapter.level"
            :submitted="submitted"
            :locked="oralBusy"
            @graded="(sc) => (o.score = sc)"
            @busy="(b) => (oralBusy = b)"
            @failed="oralFailed = true"
          />
          <div v-if="oralFailed && !submitted" class="mt-4 rounded-lg bg-gull-wash p-3 text-sm text-ink">
            Får du ikke AI-en til å virke? Du kan prøve igjen litt senere, eller levere uten den muntlige delen.
            <button class="btn btn-ghost mt-2 !py-1 text-sm" @click="oralSkipped = true">Hopp over muntlig del</button>
          </div>
        </template>
        <p v-else class="mt-1 text-sm text-ink-soft">
          Den muntlige delen er hoppet over og teller ikke med. Øv på snakkeoppgavene for kapittelet når AI-en virker.
        </p>
      </section>

      <button v-if="!submitted" class="btn btn-accent mt-6 w-full" :disabled="!complete" @click="submit">
        {{ complete ? 'Lever prøven' : 'Svar på alt for å levere' }}
      </button>
    </template>
  </div>
</template>
