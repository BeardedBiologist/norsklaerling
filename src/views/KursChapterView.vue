<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { chapterById, chapterWords, chaptersOf, courses, kurs, kursLessonId, ntnuLinks } from '../data/kurs'
import { listeningFor } from '../data/kurs/listening'
import { useProgressStore } from '../stores/progress'
import { useJourney, type StepKey } from '../lib/journey'
import { speakNorwegian, speechAvailable } from '../lib/speech'
import { dialogueAudioUrls, speakCard } from '../lib/audio'
import AudioPlayer from '../components/AudioPlayer.vue'
import ListeningCheck from '../components/ListeningCheck.vue'

const route = useRoute()
const progress = useProgressStore()
const journey = useJourney()

const chapter = computed(() => chapterById(String(route.params.id)))
const course = computed(() => (chapter.value ? courses[chapter.value.course] : null))
const courseLength = computed(() => (chapter.value ? chaptersOf(chapter.value.course).length : 0))
const links = computed(() => (chapter.value ? ntnuLinks(chapter.value) : null))
const audioUrls = computed(() => (chapter.value ? dialogueAudioUrls(chapter.value) : []))
const questions = computed(() => (chapter.value ? listeningFor(chapter.value) : []))
const words = computed(() => (chapter.value ? chapterWords(chapter.value) : []))
const showAllWords = ref(false)
const shownWords = computed(() => (showAllWords.value ? words.value : words.value.slice(0, 24)))

/** the journey runs straight from the beginner course into the B1 course */
const index = computed(() => kurs.findIndex((c) => c.id === chapter.value?.id))
const prev = computed(() => (index.value > 0 ? kurs[index.value - 1] : undefined))
const next = computed(() => (index.value >= 0 ? kurs[index.value + 1] : undefined))

const steps = computed(() => (chapter.value ? journey.chapterSteps(chapter.value) : []))
const nextStep = computed(() => steps.value.find((s) => !s.done) ?? null)
const allStepsDone = computed(() => steps.value.length > 0 && steps.value.every((s) => s.done))
const isDone = computed(() => !!chapter.value && journey.isChapterDone(chapter.value))
const stepDone = (key: StepKey) => steps.value.find((s) => s.key === key)?.done ?? false

// remember where we are, and file the chapter as finished once every step is done
watch(
  chapter,
  (c) => {
    if (c) progress.setLastChapter(c.id)
  },
  { immediate: true },
)
watch(allStepsDone, (done) => {
  if (done && chapter.value && !progress.isLessonRead(kursLessonId(chapter.value))) progress.markLessonRead(kursLessonId(chapter.value))
})

function listened(i: number, score: number) {
  if (chapter.value) progress.recordStep(chapter.value.id, `lytt-${i}`, score)
}

function grammarRead() {
  if (chapter.value) progress.recordStep(chapter.value.id, 'grammatikk', 1)
}

function finishByHand() {
  if (chapter.value) progress.markLessonRead(kursLessonId(chapter.value))
}

function goToStep(key: StepKey) {
  document.getElementById(key)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<template>
  <div v-if="chapter && links && course" class="mx-auto max-w-2xl">
    <RouterLink to="/kurs" class="text-sm font-bold text-ink-faint no-underline hover:text-fjord">← Reisen</RouterLink>

    <p class="kicker rise rise-1 mt-4">{{ course.title }} · kapittel {{ chapter.n }} av {{ courseLength }} · {{ chapter.level }}</p>
    <h1 class="display rise rise-1 mt-1 text-3xl font-black text-ink">{{ chapter.title }}</h1>
    <p class="rise rise-1 text-ink-faint">{{ chapter.titleEn }} — {{ chapter.theme }}</p>

    <!-- journey tracker -->
    <section class="card rise rise-2 sticky top-[7.5rem] z-30 mt-6 p-4">
      <div class="flex items-center justify-between gap-2">
        <p class="kicker">Steg i kapittelet</p>
        <p class="text-xs font-bold text-ink-faint">{{ steps.filter((s) => s.done).length }} av {{ steps.length }} ferdig</p>
      </div>
      <ol class="mt-2 grid grid-cols-6 gap-1">
        <li v-for="(s, i) in steps" :key="s.key">
          <button
            class="flex w-full flex-col items-center gap-1 rounded-lg p-1 text-center hover:bg-paper"
            :title="`${s.title}: ${s.detail}`"
            @click="goToStep(s.key)"
          >
            <span
              class="flex h-8 w-8 items-center justify-center rounded-full border-2 text-sm"
              :class="s.done ? 'border-moss bg-moss text-card' : nextStep?.key === s.key ? 'border-gull bg-gull-wash' : 'border-rule bg-card'"
            >{{ s.done ? '✓' : i + 1 }}</span>
            <span class="hidden text-[11px] font-bold leading-tight text-ink-soft sm:block">{{ s.title }}</span>
          </button>
        </li>
      </ol>
      <div v-if="nextStep" class="mt-2 flex flex-wrap items-center justify-between gap-2 border-t border-rule pt-2">
        <p class="text-sm text-ink-soft"><strong class="text-ink">Neste: {{ nextStep.icon }} {{ nextStep.title }}</strong> — {{ nextStep.goal }}</p>
        <button class="btn btn-accent !py-1 text-sm" @click="goToStep(nextStep.key)">Gå dit ↓</button>
      </div>
      <div v-else class="mt-2 flex flex-wrap items-center justify-between gap-2 border-t border-rule pt-2">
        <p class="text-sm font-bold text-moss">Kapittelet er fullført! 🎉</p>
        <RouterLink v-if="next" :to="`/kurs/${next.id}`" class="btn btn-accent !py-1 text-sm">Neste kapittel: {{ next.title }} →</RouterLink>
      </div>
    </section>

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
    <section id="lytt" class="card rise rise-2 mt-6 scroll-mt-64 p-6">
      <div class="flex items-baseline justify-between gap-2">
        <h2 class="display text-xl font-black text-ink"><span class="text-ink-faint">1 ·</span> Lytt og forstå</h2>
        <span v-if="stepDone('lytt')" class="chip bg-moss-wash text-moss">Ferdig ✓</span>
      </div>
      <p class="mt-1 text-sm text-ink-soft">
        Hør hver tekst først bare med ørene, og svar på spørsmålene. Går det for fort, spill av på 0,75×.
        Lyden er NTNUs egne opptak fra {{ course.source.name }}.
      </p>
      <div class="mt-4 space-y-4">
        <div v-for="(title, i) in chapter.dialogues" :key="i">
          <AudioPlayer :src="audioUrls[i]" :label="title" :letter="course.dialogueLetters[i]" />
          <div class="ml-1 flex flex-wrap items-start justify-between gap-x-4">
            <ListeningCheck
              v-if="questions[i]?.length"
              :questions="questions[i]"
              :best="progress.stepValue(chapter.id, `lytt-${i}`)"
              :show-english="chapter.course === 'nybegynner' && chapter.n <= 6"
              @done="(s) => listened(i, s)"
            />
            <a
              :href="links.dialogues[i]"
              target="_blank"
              rel="noopener"
              class="mt-1 text-xs text-ink-faint no-underline hover:text-fjord"
            >Les teksten hos NTNU ↗</a>
          </div>
        </div>
      </div>
      <p class="mt-4 text-xs text-ink-faint">
        Mer hos NTNU:
        <template v-for="(x, i) in links.extras" :key="x.url">
          <a :href="x.url" target="_blank" rel="noopener" class="text-fjord">{{ x.label }}</a><span v-if="i < links.extras.length - 1"> · </span>
        </template>
      </p>
    </section>

    <!-- 2 grammar -->
    <div id="grammatikk" class="scroll-mt-64">
      <div class="rise rise-3 mt-10 flex items-baseline justify-between gap-2">
        <h2 class="display text-xl font-black text-ink"><span class="text-ink-faint">2 ·</span> Grammatikk</h2>
        <span v-if="stepDone('grammatikk')" class="chip bg-moss-wash text-moss">Lest ✓</span>
      </div>

      <section class="card mt-3 p-6">
        <h3 class="display text-lg font-black text-ink">Nyttige uttrykk</h3>
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

      <article class="mt-4 space-y-4">
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

      <div class="mt-4 flex justify-center">
        <button v-if="!stepDone('grammatikk')" class="btn btn-primary" @click="grammarRead">✓ Jeg har lest grammatikken</button>
        <span v-else class="chip bg-moss-wash text-moss">Grammatikken er lest ✓</span>
      </div>
    </div>

    <!-- 3 words -->
    <section id="ord" class="card rise rise-4 mt-10 scroll-mt-64 p-6">
      <div class="flex flex-wrap items-baseline justify-between gap-2">
        <h2 class="display text-xl font-black text-ink"><span class="text-ink-faint">3 ·</span> Ord</h2>
        <span class="text-sm font-bold" :class="stepDone('ord') ? 'text-moss' : 'text-ink-faint'">
          {{ steps.find((s) => s.key === 'ord')?.detail }} gjennomgått{{ stepDone('ord') ? ' ✓' : '' }}
        </span>
      </div>
      <p class="mt-1 text-sm text-ink-soft">Klikk på et ord for å høre det. Grønne ord har du allerede sett i ordforrådet.</p>
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

    <!-- 4 build -->
    <section id="bygg" class="card rise rise-4 mt-6 scroll-mt-64 p-6">
      <div class="flex items-baseline justify-between gap-2">
        <h2 class="display text-xl font-black text-ink"><span class="text-ink-faint">4 ·</span> Bygg setninger</h2>
        <span v-if="stepDone('bygg')" class="chip bg-moss-wash text-moss">Ferdig ✓</span>
      </div>
      <p class="mt-1 text-sm text-ink-soft">Sett ordene i riktig rekkefølge. Vil du trene øret samtidig, velg «Hør og bygg».</p>
      <div class="mt-3 flex flex-wrap gap-2">
        <RouterLink :to="{ path: '/setninger', query: { kapittel: chapter.id } }" class="btn btn-primary">
          🧩 Bygg setninger ({{ chapter.sentences.length }}) →
        </RouterLink>
        <RouterLink :to="{ path: '/setninger', query: { kapittel: chapter.id, lytt: '1' } }" class="btn btn-ghost">🎧 Hør og bygg →</RouterLink>
        <RouterLink :to="{ path: '/lytt', query: { kapittel: chapter.id, modus: 'diktat' } }" class="btn btn-ghost">✍️ Diktat →</RouterLink>
      </div>
    </section>

    <!-- 5 speak -->
    <section id="snakk" class="card rise rise-4 mt-6 scroll-mt-64 border-l-4 border-l-moss p-6">
      <div class="flex items-baseline justify-between gap-2">
        <h2 class="display text-xl font-black text-ink"><span class="text-ink-faint">5 ·</span> Snakk</h2>
        <span v-if="stepDone('snakk')" class="chip bg-moss-wash text-moss">Ferdig ✓</span>
      </div>
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
      <div class="mt-4 flex flex-wrap gap-2">
        <RouterLink :to="{ path: '/lytt', query: { kapittel: chapter.id, modus: 'fritt' } }" class="btn btn-primary">🎙 Snakk fritt →</RouterLink>
        <RouterLink :to="{ path: '/lytt', query: { kapittel: chapter.id, modus: 'si' } }" class="btn btn-ghost">Si det på norsk →</RouterLink>
        <RouterLink :to="{ path: '/lytt', query: { kapittel: chapter.id, modus: 'gjenta' } }" class="btn btn-ghost">Hør og gjenta →</RouterLink>
      </div>
    </section>

    <!-- 6 check -->
    <section id="sjekk" class="card rise rise-5 mt-6 scroll-mt-64 p-6">
      <div class="flex items-baseline justify-between gap-2">
        <h2 class="display text-xl font-black text-ink"><span class="text-ink-faint">6 ·</span> Kapittelsjekk</h2>
        <span class="text-sm font-bold" :class="stepDone('sjekk') ? 'text-moss' : 'text-ink-faint'">{{ steps.find((s) => s.key === 'sjekk')?.detail }}</span>
      </div>
      <p class="mt-1 text-sm text-ink-soft">{{ chapter.quiz.length }} spørsmål om det du har lært. Du trenger 70 % for å fullføre kapittelet.</p>
      <RouterLink :to="{ path: '/quiz', query: { kapittel: chapter.id } }" class="btn btn-accent mt-3 inline-flex">
        ✅ Ta kapittelsjekken →
      </RouterLink>
      <hr class="dotted-rule my-5" />
      <div class="flex flex-wrap items-center gap-3">
        <span v-if="isDone" class="chip bg-moss-wash text-moss">Kapittel fullført ✓</span>
        <button v-else class="btn btn-ghost text-sm" title="Hopp over resten — for kapitler du allerede kan" @click="finishByHand">
          Jeg kan dette — merk kapittelet som ferdig
        </button>
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
      Rekkefølgen følger NTNUs gratiskurs {{ course.source.name }}. Tekster og lyd © NTNU — forklaringer, spørsmål og øvelser her er laget for NorskLærling.
    </p>
  </div>

  <div v-else class="py-20 text-center text-ink-faint">
    Fant ikke kapittelet. <RouterLink to="/kurs" class="text-fjord underline">Tilbake til reisen</RouterLink>
  </div>
</template>
