<script setup lang="ts">
import { computed, nextTick, reactive, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { chapterById, chapterWords, chaptersOf, courses, kurs, ntnuLinks } from '../data/kurs'
import { listeningFor } from '../data/kurs/listening'
import { useProgressStore } from '../stores/progress'
import { TEST_PASS, useJourney, type JourneyItem, type StepKey } from '../lib/journey'
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

const unlocked = computed(() => !!chapter.value && journey.isUnlocked(chapter.value))
const passed = computed(() => !!chapter.value && journey.isPassed(chapter.value))
const prevChapter = computed(() => (chapter.value ? journey.previousChapter(chapter.value) : undefined))
const nextChapter = computed(() => {
  const i = kurs.findIndex((c) => c.id === chapter.value?.id)
  return i >= 0 ? kurs[i + 1] : undefined
})

const steps = computed(() => (chapter.value ? journey.stepsFor(chapter.value) : []))
const next = computed(() => (chapter.value ? journey.nextItem(chapter.value) : null))
const best = computed(() => (chapter.value ? progress.stepValue(chapter.value.id, 'prove') : undefined))

function stepOf(key: StepKey) {
  return steps.value.find((s) => s.key === key)
}
function item(key: string): JourneyItem | undefined {
  return steps.value.flatMap((s) => s.items).find((i) => i.key === key)
}
function counts(key: StepKey) {
  const req = stepOf(key)?.items.filter((i) => i.required) ?? []
  return `${req.filter((i) => i.done).length}/${req.length}`
}

// ── accordion: the step you are working on is open; finished ones fold away ──
const open = reactive<Record<string, boolean>>({})
function toggle(key: StepKey) {
  open[key] = !open[key]
}

/** open the step that holds an item and scroll to it */
async function goTo(anchor: string) {
  const s = steps.value.find((st) => st.items.some((i) => i.anchor === anchor)) ?? steps.value.find((st) => anchor.includes(st.key))
  if (s) open[s.key] = true
  await nextTick()
  document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
}

watch(
  chapter,
  (c) => {
    if (!c) return
    progress.setLastChapter(c.id)
    for (const k of Object.keys(open)) delete open[k]
    if (next.value) open[next.value.step.key] = true
    showAllWords.value = false
  },
  { immediate: true },
)

watch(
  () => route.hash,
  (h) => {
    if (h) setTimeout(() => goTo(h.slice(1)), 150)
  },
  { immediate: true },
)

function listened(i: number, score: number) {
  if (chapter.value) progress.recordStep(chapter.value.id, `lytt-${i}`, score)
}

function toggleManual(key: string) {
  if (!chapter.value) return
  if (item(key)?.done) progress.clearStep(chapter.value.id, key)
  else progress.recordStep(chapter.value.id, key, 1)
}
</script>

<template>
  <div v-if="chapter && links && course" class="mx-auto max-w-2xl">
    <RouterLink to="/kurs" class="text-sm font-bold text-ink-faint no-underline hover:text-fjord">← Reisen</RouterLink>

    <p class="kicker rise rise-1 mt-4">{{ course.title }} · kapittel {{ chapter.n }} av {{ courseLength }} · {{ chapter.level }}</p>
    <h1 class="display rise rise-1 mt-1 text-3xl font-black text-ink">{{ chapter.title }}</h1>
    <p class="rise rise-1 text-ink-faint">{{ chapter.titleEn }} — {{ chapter.theme }}</p>

    <!-- locked -->
    <div v-if="!unlocked" class="card rise rise-2 mt-6 p-6 text-center">
      <p class="text-4xl">🔒</p>
      <p class="mt-2 font-bold text-ink">Dette kapittelet er låst.</p>
      <p v-if="prevChapter" class="mt-1 text-sm text-ink-soft">
        Bestå kapittelprøven i «{{ prevChapter.title }}» for å låse det opp. Kan du stoffet fra før, kan du ta prøven med en gang.
      </p>
      <div v-if="prevChapter" class="mt-4 flex flex-wrap justify-center gap-2">
        <RouterLink :to="`/kurs/${prevChapter.id}/prove`" class="btn btn-accent">Ta prøven for «{{ prevChapter.title }}» →</RouterLink>
        <RouterLink :to="`/kurs/${prevChapter.id}`" class="btn btn-ghost">Gå til «{{ prevChapter.title }}»</RouterLink>
      </div>
    </div>

    <template v-else>
      <!-- tracker -->
      <section class="card rise rise-2 sticky top-[7.5rem] z-30 mt-6 p-3">
        <ol class="grid grid-cols-6 gap-1">
          <li v-for="(s, i) in steps" :key="s.key">
            <button class="flex w-full flex-col items-center gap-0.5 rounded-lg p-1 hover:bg-paper" :title="s.title" @click="goTo(`step-${s.key}`)">
              <span
                class="flex h-7 w-7 items-center justify-center rounded-full border-2 text-xs font-bold"
                :class="s.done ? 'border-moss bg-moss text-card' : next?.step.key === s.key ? 'border-gull bg-gull-wash text-ink' : 'border-rule bg-card text-ink-faint'"
              >{{ s.done ? '✓' : i + 1 }}</span>
              <span class="hidden text-[11px] font-bold leading-tight text-ink-soft sm:block">{{ s.title }}</span>
              <span class="text-[10px] text-ink-faint">{{ counts(s.key) }}</span>
            </button>
          </li>
        </ol>
        <div class="mt-2 flex flex-wrap items-center justify-between gap-2 border-t border-rule pt-2">
          <p v-if="passed" class="text-sm font-bold text-moss">Kapittelet er bestått ✓</p>
          <p v-else-if="next" class="min-w-0 truncate text-sm text-ink-soft">
            <strong class="text-ink">Fortsett:</strong> {{ next.step.icon }} {{ next.item.label }}
          </p>
          <RouterLink v-if="passed && nextChapter" :to="`/kurs/${nextChapter.id}`" class="btn btn-accent !py-1 text-sm">Neste kapittel →</RouterLink>
          <button v-else-if="next" class="btn btn-accent !py-1 text-sm" @click="goTo(next.item.anchor)">Gå dit ↓</button>
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
        <p class="mt-3 text-xs text-ink-faint">
          Kan du dette fra før? <RouterLink :to="`/kurs/${chapter.id}/prove`" class="font-bold text-fjord">Ta kapittelprøven med en gang</RouterLink> og hopp videre.
        </p>
      </section>

      <!-- steps -->
      <section
        v-for="(s, si) in steps"
        :id="`step-${s.key}`"
        :key="s.key"
        class="card mt-4 scroll-mt-56 overflow-hidden"
        :class="next?.step.key === s.key ? 'ring-2 ring-gull' : ''"
      >
        <button class="flex w-full items-center gap-3 p-5 text-left hover:bg-paper" @click="toggle(s.key)">
          <span
            class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 font-bold"
            :class="s.done ? 'border-moss bg-moss text-card' : 'border-rule text-ink-soft'"
          >{{ s.done ? '✓' : si + 1 }}</span>
          <span class="min-w-0 flex-1">
            <span class="display block text-lg font-black text-ink">{{ s.icon }} {{ s.title }}</span>
            <span class="block text-xs text-ink-faint">{{ s.goal }}</span>
          </span>
          <span class="shrink-0 text-sm font-bold" :class="s.done ? 'text-moss' : 'text-ink-faint'">{{ counts(s.key) }}</span>
          <span class="shrink-0 text-ink-faint">{{ open[s.key] ? '▴' : '▾' }}</span>
        </button>

        <!-- checklist summary when folded -->
        <div v-if="!open[s.key]" class="flex flex-wrap gap-1.5 px-5 pb-4">
          <button
            v-for="it in s.items"
            :key="it.key"
            class="chip border text-xs"
            :class="it.done ? 'border-moss bg-moss-wash text-moss' : it.required ? 'border-rule bg-card text-ink-soft' : 'border-dashed border-rule bg-card text-ink-faint'"
            @click="goTo(it.anchor)"
          >{{ it.done ? '✓' : '○' }} {{ it.label }}</button>
        </div>

        <div v-show="open[s.key]" class="border-t border-rule p-5">
          <!-- 1 listen -->
          <template v-if="s.key === 'lytt'">
            <p class="text-sm text-ink-soft">
              Hør hver tekst først bare med ørene, så svarer du på spørsmålene. Går det for fort, spill av på 0,75×.
              Lyden er NTNUs egne opptak fra {{ course.source.name }}.
            </p>
            <div v-for="(title, i) in chapter.dialogues" :id="`item-lytt-${i}`" :key="i" class="mt-4 scroll-mt-56">
              <p class="mb-1 text-xs font-bold" :class="item(`lytt-${i}`)?.done ? 'text-moss' : 'text-ink-faint'">
                {{ item(`lytt-${i}`)?.done ? '✓ Ferdig' : '○ Ikke ferdig' }}
              </p>
              <AudioPlayer :src="audioUrls[i]" :label="title" :letter="course.dialogueLetters[i]" />
              <div class="ml-1 flex flex-wrap items-start justify-between gap-x-4">
                <ListeningCheck
                  v-if="questions[i]?.length"
                  :questions="questions[i]"
                  :best="progress.stepValue(chapter.id, `lytt-${i}`)"
                  :show-english="chapter.course === 'nybegynner' && chapter.n <= 6"
                  @done="(sc) => listened(i, sc)"
                />
                <a :href="links.dialogues[i]" target="_blank" rel="noopener" class="mt-1 text-xs text-ink-faint no-underline hover:text-fjord">Les teksten hos NTNU ↗</a>
              </div>
            </div>
            <p class="mt-4 text-xs text-ink-faint">
              Mer hos NTNU:
              <template v-for="(x, i) in links.extras" :key="x.url">
                <a :href="x.url" target="_blank" rel="noopener" class="text-fjord">{{ x.label }}</a><span v-if="i < links.extras.length - 1"> · </span>
              </template>
            </p>
          </template>

          <!-- 2 grammar -->
          <template v-else-if="s.key === 'grammatikk'">
            <div id="item-gram-phrases" class="scroll-mt-56 rounded-xl border border-rule p-4">
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
              <button class="btn mt-3 !py-1 text-sm" :class="item('gram-phrases')?.done ? 'bg-moss-wash text-moss' : 'btn-ghost'" @click="toggleManual('gram-phrases')">
                {{ item('gram-phrases')?.done ? '✓ Forstått' : 'Hak av: forstått' }}
              </button>
            </div>

            <div v-for="(g, i) in chapter.grammar" :id="`item-gram-${i}`" :key="i" class="mt-4 scroll-mt-56 rounded-xl border border-rule p-4">
              <h3 v-if="g.heading" class="display mb-2 text-lg font-black text-ink">{{ g.heading }}</h3>
              <p class="whitespace-pre-line leading-relaxed text-ink">{{ g.body }}</p>
              <div v-if="g.examples?.length" class="mt-3 space-y-2 border-l-2 border-fjord-wash pl-4">
                <div v-for="(ex, j) in g.examples" :key="j" class="text-sm">
                  <p class="font-bold text-ink">
                    {{ ex.no }}
                    <button v-if="speechAvailable()" class="ml-1 text-xs" title="Hør" @click="speakNorwegian(ex.no)">🔊</button>
                  </p>
                  <p class="text-ink-faint">{{ ex.en }}<span v-if="ex.note" class="text-gull"> — {{ ex.note }}</span></p>
                </div>
              </div>
              <button class="btn mt-3 !py-1 text-sm" :class="item(`gram-${i}`)?.done ? 'bg-moss-wash text-moss' : 'btn-ghost'" @click="toggleManual(`gram-${i}`)">
                {{ item(`gram-${i}`)?.done ? '✓ Forstått' : 'Hak av: forstått' }}
              </button>
            </div>

            <div id="item-gram-uttale" class="mt-4 scroll-mt-56 rounded-xl border border-rule border-l-4 border-l-rod p-4">
              <p class="kicker">Uttale</p>
              <h3 class="display mb-2 text-lg font-black text-ink">{{ chapter.pronunciation.heading }}</h3>
              <p class="whitespace-pre-line leading-relaxed text-ink">{{ chapter.pronunciation.body }}</p>
              <button class="btn mt-3 !py-1 text-sm" :class="item('gram-uttale')?.done ? 'bg-moss-wash text-moss' : 'btn-ghost'" @click="toggleManual('gram-uttale')">
                {{ item('gram-uttale')?.done ? '✓ Forstått' : 'Hak av: forstått' }}
              </button>
            </div>
          </template>

          <!-- 3 words -->
          <template v-else-if="s.key === 'ord'">
            <div id="item-ord" class="scroll-mt-56">
              <p class="text-sm font-bold" :class="item('ord')?.done ? 'text-moss' : 'text-ink-faint'">
                {{ item('ord')?.done ? '✓' : '○' }} {{ item('ord')?.detail }} (mål: 80 %)
              </p>
              <p class="mt-1 text-sm text-ink-soft">Klikk på et ord for å høre det. Grønne ord har du allerede gått gjennom.</p>
              <div class="mt-3 flex flex-wrap gap-1.5">
                <button
                  v-for="w in shownWords"
                  :key="w.id"
                  class="chip border border-rule hover:border-fjord"
                  :class="progress.state.srs[w.id] ? 'bg-moss-wash text-moss' : 'bg-card text-ink-soft'"
                  :title="`${w.en} — klikk for å høre`"
                  @click="speakCard(w)"
                >{{ w.gender ? `${w.gender} ` : '' }}{{ w.no }}</button>
                <button v-if="words.length > shownWords.length" class="chip border border-dashed border-rule bg-card text-ink-faint" @click="showAllWords = true">
                  + {{ words.length - shownWords.length }} til
                </button>
              </div>
              <RouterLink :to="{ path: '/ord', query: { kapittel: chapter.id } }" class="btn btn-primary mt-4 inline-flex">Lær kapittelets ord →</RouterLink>
            </div>
          </template>

          <!-- 4 practice / 5 speak: module checklists -->
          <template v-else-if="s.key === 'ov' || s.key === 'snakk'">
            <ol v-if="s.key === 'snakk'" class="mb-4 list-decimal space-y-1.5 pl-5">
              <li v-for="(qq, i) in chapter.speaking" :key="i" class="font-bold text-ink">
                {{ qq }}
                <button v-if="speechAvailable()" class="ml-1 text-xs font-normal" title="Hør spørsmålet" @click="speakNorwegian(qq)">🔊</button>
              </li>
            </ol>
            <ul class="space-y-2">
              <li
                v-for="it in s.items"
                :id="it.anchor"
                :key="it.key"
                class="flex scroll-mt-56 flex-wrap items-center justify-between gap-2 rounded-xl border p-3"
                :class="it.done ? 'border-moss bg-moss-wash' : 'border-rule bg-card'"
              >
                <span>
                  <span class="font-bold" :class="it.done ? 'text-moss' : 'text-ink'">{{ it.done ? '✓' : '○' }} {{ it.label }}</span>
                  <span v-if="!it.required" class="ml-1 text-xs text-ink-faint">(valgfritt)</span>
                  <span v-if="it.detail" class="block text-xs text-ink-faint">{{ it.detail }}</span>
                </span>
                <RouterLink v-if="it.to" :to="it.to" class="btn !py-1 text-sm" :class="it.done ? 'btn-ghost' : 'btn-accent'">
                  {{ it.done ? 'Øv igjen' : 'Start' }} →
                </RouterLink>
              </li>
            </ul>
          </template>

          <!-- 6 test -->
          <template v-else-if="s.key === 'prove'">
            <div id="item-prove" class="scroll-mt-56">
              <p class="text-sm text-ink-soft">
                Prøven tester lytting, grammatikk, setningsbygging og diktat fra hele kapittelet.
                Du trenger minst {{ Math.round(TEST_PASS * 100) }} % for å bestå og låse opp neste kapittel.
              </p>
              <p v-if="best !== undefined" class="mt-2 text-sm font-bold" :class="passed ? 'text-moss' : 'text-gull'">
                Beste resultat: {{ Math.round(best * 100) }} %{{ passed ? ' — bestått ✓' : '' }}
              </p>
              <p v-if="!passed && next && next.step.key !== 'prove'" class="mt-2 text-xs text-ink-faint">
                Tips: gjør stegene over først — da går prøven mye lettere. Men du kan ta den når du vil.
              </p>
              <div class="mt-4 flex flex-wrap gap-2">
                <RouterLink :to="`/kurs/${chapter.id}/prove`" class="btn btn-accent">{{ passed ? 'Ta prøven igjen' : '🏁 Ta kapittelprøven' }} →</RouterLink>
                <RouterLink v-if="passed && nextChapter" :to="`/kurs/${nextChapter.id}`" class="btn btn-primary">Neste kapittel: {{ nextChapter.title }} →</RouterLink>
              </div>
            </div>
          </template>
        </div>
      </section>

      <div class="mt-6 flex justify-between text-sm font-bold">
        <RouterLink v-if="prevChapter" :to="`/kurs/${prevChapter.id}`" class="text-ink-faint no-underline hover:text-fjord">← {{ prevChapter.title }}</RouterLink>
        <span v-else />
        <RouterLink v-if="nextChapter && passed" :to="`/kurs/${nextChapter.id}`" class="text-ink-faint no-underline hover:text-fjord">{{ nextChapter.title }} →</RouterLink>
        <span v-else-if="nextChapter" class="text-ink-faint">🔒 {{ nextChapter.title }}</span>
      </div>
    </template>

    <p class="mt-8 text-center text-xs text-ink-faint">
      Rekkefølgen følger NTNUs gratiskurs {{ course.source.name }}. Tekster og lyd © NTNU — forklaringer, spørsmål og øvelser her er laget for NorskLærling.
    </p>
  </div>

  <div v-else class="py-20 text-center text-ink-faint">
    Fant ikke kapittelet. <RouterLink to="/kurs" class="text-fjord underline">Tilbake til reisen</RouterLink>
  </div>
</template>
