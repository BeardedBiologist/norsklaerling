<script setup lang="ts">
import { computed, ref } from 'vue'
import { useAuthStore } from '../stores/auth'
import { useProgressStore } from '../stores/progress'
import { vocabulary } from '../data/vocabulary'
import { speakNorwegian, speechAvailable } from '../lib/speech'

const auth = useAuthStore()
const progress = useProgressStore()

const confirmingReset = ref(false)

const syncLabel = computed(() => {
  switch (progress.syncStatus) {
    case 'local': return 'Kun lagret lokalt i denne nettleseren'
    case 'syncing': return 'Lagrer i skyen …'
    case 'synced': return 'Alt er lagret i skyen ✓'
    case 'error': return 'Lagring til skyen feilet — framgangen ligger fortsatt lokalt'
  }
  return ''
})

function resetProgress() {
  progress.resetAll()
  confirmingReset.value = false
}

async function logOut() {
  // push any pending changes before the auth token goes away
  await progress.flushCloudSave()
  await auth.logOut()
}

function testVoice() {
  speakNorwegian('Hei! Slik høres den norske stemmen ut.')
}
</script>

<template>
  <div class="mx-auto max-w-2xl">
    <p class="kicker rise rise-1">Konto og data</p>
    <h1 class="display rise rise-1 mt-1 text-3xl font-black text-ink">Innstillinger</h1>

    <!-- account -->
    <div v-if="auth.user" class="card rise rise-2 mt-6 flex items-center gap-4 p-6">
      <img
        v-if="auth.user.photoURL"
        :src="auth.user.photoURL"
        alt=""
        class="h-14 w-14 rounded-full border border-rule"
        referrerpolicy="no-referrer"
      />
      <div
        v-else
        class="display flex h-14 w-14 items-center justify-center rounded-full bg-fjord text-xl font-black text-card"
      >
        {{ (auth.user.displayName ?? auth.user.email ?? '?').slice(0, 1).toUpperCase() }}
      </div>
      <div class="min-w-0 flex-1">
        <p class="truncate font-bold text-ink">{{ auth.user.displayName ?? 'Uten navn' }}</p>
        <p class="truncate text-sm text-ink-faint">{{ auth.user.email }}</p>
        <p class="mt-1 text-xs" :class="progress.syncStatus === 'error' ? 'text-rod' : 'text-moss'">
          {{ syncLabel }}
        </p>
      </div>
      <button class="btn btn-ghost shrink-0" @click="logOut">Logg ut</button>
    </div>

    <!-- study stats -->
    <div class="card rise rise-3 mt-4 p-6">
      <h2 class="display text-xl font-black text-ink">Din framgang</h2>
      <div class="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <div>
          <p class="kicker">Sett</p>
          <p class="display text-2xl font-black text-fjord">{{ progress.seenCount }}<span class="text-sm text-ink-faint"> / {{ vocabulary.length }}</span></p>
        </div>
        <div>
          <p class="kicker">Lært</p>
          <p class="display text-2xl font-black text-moss">{{ progress.learnedCount }}</p>
        </div>
        <div>
          <p class="kicker">Streak</p>
          <p class="display text-2xl font-black text-gull">{{ progress.streak }}</p>
        </div>
        <div>
          <p class="kicker">Prøveforsøk</p>
          <p class="display text-2xl font-black text-rod">{{ progress.state.examAttempts.length }}</p>
        </div>
      </div>
    </div>

    <!-- voice -->
    <div v-if="speechAvailable()" class="card rise rise-4 mt-4 p-6">
      <h2 class="display text-xl font-black text-ink">Norsk uttale</h2>
      <p class="mt-1 text-sm text-ink-soft">
        Appen bruker nettleserens innebygde stemmer. Høres stemmen robotaktig ut, kan du
        installere en bedre norsk stemme: Systeminnstillinger → Tilgjengelighet → Opplest
        innhold → Systemstemme.
      </p>
      <button class="btn btn-ghost mt-4" @click="testVoice">🔊 Test stemmen</button>
    </div>

    <!-- danger zone -->
    <div class="card rise rise-5 mt-4 border-l-4 border-l-rod p-6">
      <h2 class="display text-xl font-black text-rod">Tilbakestill framgang</h2>
      <p class="mt-1 text-sm text-ink-soft">
        Sletter all framgang — ordkort, streak, quizhistorikk og prøveforsøk — både lokalt
        og i skyen. Dette kan ikke angres.
      </p>
      <div class="mt-4 flex gap-2">
        <template v-if="!confirmingReset">
          <button class="btn btn-ghost text-rod" @click="confirmingReset = true">
            Tilbakestill alt …
          </button>
        </template>
        <template v-else>
          <button class="btn btn-accent" @click="resetProgress">Ja, slett all framgang</button>
          <button class="btn btn-ghost" @click="confirmingReset = false">Avbryt</button>
        </template>
      </div>
    </div>
  </div>
</template>
