<script setup lang="ts">
import { computed } from 'vue'
import { useProgressStore } from '../stores/progress'
import { vocabulary } from '../data/vocabulary'

const progress = useProgressStore()

const learnedPct = computed(() =>
  Math.round((progress.learnedCount / vocabulary.length) * 100),
)

const quizAccuracy = computed(() =>
  progress.totalQuizAnswers === 0
    ? null
    : Math.round((progress.totalQuizCorrect / progress.totalQuizAnswers) * 100),
)

const modules = [
  {
    to: '/laer',
    no: 'Lær',
    title: 'Leksjoner',
    desc: 'Start her: grammatikk forklart på engelsk og hele pensumet til statsborgerprøven — lær først, test etterpå.',
    accent: 'moss',
    number: '00',
  },
  {
    to: '/ord',
    no: 'Ord',
    title: 'Ordforråd',
    desc: `Flashcards med smart repetisjon. ${vocabulary.length} ord fra A2 til B2 med eksempler og uttale.`,
    accent: 'rod',
    number: '01',
  },
  {
    to: '/setninger',
    no: 'Setninger',
    title: 'Setningsbygging',
    desc: 'Sett ordene i riktig rekkefølge. Tren V2-regelen, leddsetninger og «ikke».',
    accent: 'fjord',
    number: '02',
  },
  {
    to: '/quiz',
    no: 'Quiz',
    title: 'Grammatikkquiz',
    desc: 'Flervalgsoppgaver i norskprøve-stil med forklaringer på hver regel.',
    accent: 'moss',
    number: '03',
  },
  {
    to: '/statsborger',
    no: 'Statsborger',
    title: 'Statsborgerprøven',
    desc: 'Øv på samfunnskunnskap — eller ta full prøvesimulering: 36 spørsmål, 60 minutter.',
    accent: 'gull',
    number: '04',
  },
  {
    to: '/oversett',
    no: 'Oversett',
    title: 'Oversettelse',
    desc: 'Skriv norsken selv: engelsk setning inn, din norske oversettelse ut. Fri produksjon som på muntligprøven.',
    accent: 'rod',
    number: '05',
  },
  {
    to: '/boyning',
    no: 'Bøyning',
    title: 'Bøyning',
    desc: 'Preteritum, bestemt form, komparativ — skriv riktig form. Fasit fra den offisielle ordboka.',
    accent: 'fjord',
    number: '06',
  },
]
</script>

<template>
  <div>
    <!-- hero -->
    <section class="rise rise-1 mb-10">
      <p class="kicker mb-2">Veien til norsk statsborgerskap</p>
      <h1 class="display text-4xl font-black leading-tight tracking-tight text-ink sm:text-5xl">
        Du kan allerede norsk.<br />
        <em class="text-fjord">Nå skal vi bevise det.</em>
      </h1>
      <p class="mt-4 max-w-2xl text-ink-soft">
        Ti år i Norge er verdt mer enn du tror — men prøvene krever system. Denne appen
        drilller ordforråd, ordstilling og samfunnskunnskap til du består
        <strong>muntlig B1</strong> og <strong>statsborgerprøven</strong>.
      </p>
    </section>

    <!-- stats -->
    <section class="rise rise-2 mb-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
      <div class="card p-4">
        <p class="kicker">Å repetere nå</p>
        <p class="display mt-1 text-3xl font-black text-rod">{{ progress.dueCards.length }}</p>
        <p class="text-xs text-ink-faint">ord venter på deg</p>
      </div>
      <div class="card p-4">
        <p class="kicker">Lært</p>
        <p class="display mt-1 text-3xl font-black text-moss">{{ progress.learnedCount }}</p>
        <p class="text-xs text-ink-faint">{{ learnedPct }} % av ordbanken</p>
      </div>
      <div class="card p-4">
        <p class="kicker">Streak</p>
        <p class="display mt-1 text-3xl font-black text-gull">{{ progress.streak }}</p>
        <p class="text-xs text-ink-faint">dager på rad</p>
      </div>
      <div class="card p-4">
        <p class="kicker">Quiz-treff</p>
        <p class="display mt-1 text-3xl font-black text-fjord">
          {{ quizAccuracy === null ? '–' : quizAccuracy + ' %' }}
        </p>
        <p class="text-xs text-ink-faint">riktige svar totalt</p>
      </div>
    </section>

    <!-- modules -->
    <section class="rise rise-3 mb-12 grid gap-4 sm:grid-cols-2">
      <RouterLink
        v-for="m in modules"
        :key="m.to"
        :to="m.to"
        class="card group relative overflow-hidden p-6 no-underline transition-shadow hover:shadow-lift"
      >
        <span
          class="display absolute -right-2 -top-4 text-7xl font-black opacity-10 transition-opacity group-hover:opacity-20"
          :class="{
            'text-rod': m.accent === 'rod',
            'text-fjord': m.accent === 'fjord',
            'text-moss': m.accent === 'moss',
            'text-gull': m.accent === 'gull',
          }"
          aria-hidden="true"
          >{{ m.number }}</span
        >
        <h2 class="display text-2xl font-black text-ink">{{ m.title }}</h2>
        <p class="mt-2 text-sm text-ink-soft">{{ m.desc }}</p>
        <span
          class="mt-4 inline-block text-sm font-bold"
          :class="{
            'text-rod': m.accent === 'rod',
            'text-fjord': m.accent === 'fjord',
            'text-moss': m.accent === 'moss',
            'text-gull': m.accent === 'gull',
          }"
          >Start →</span
        >
      </RouterLink>
    </section>

    <!-- exam facts -->
    <section class="rise rise-4">
      <hr class="dotted-rule mb-6" />
      <p class="kicker mb-4">Dette må du bestå (kilde: prove.hkdir.no)</p>
      <div class="grid gap-4 sm:grid-cols-2">
        <div class="card border-l-4 border-l-fjord p-5">
          <h3 class="display text-lg font-black text-ink">Norskprøven — muntlig B1</h3>
          <ul class="mt-2 space-y-1 text-sm text-ink-soft">
            <li>• Fire delprøver: lytte, lese, skrive og muntlig</li>
            <li>• For statsborgerskap kreves <strong>muntlig på minst B1</strong></li>
            <li>• Muntlig prøve: samtale med eksaminator og sensor</li>
            <li>• For skriftlig og muntlig velger du nivå (A2–B1 eller B1–B2)</li>
          </ul>
        </div>
        <div class="card border-l-4 border-l-rod p-5">
          <h3 class="display text-lg font-black text-ink">Statsborgerprøven</h3>
          <ul class="mt-2 space-y-1 text-sm text-ink-soft">
            <li>• 36 flervalgsspørsmål på norsk</li>
            <li>• Du må ha minst <strong>24 riktige</strong> for å bestå</li>
            <li>• 60 minutter</li>
            <li>• Temaer: historie, geografi, demokrati, velferd, arbeidsliv, verdier</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>
