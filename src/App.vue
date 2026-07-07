<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useProgressStore } from './stores/progress'
import { useAuthStore } from './stores/auth'
import LoginGate from './components/LoginGate.vue'

const progress = useProgressStore()
const auth = useAuthStore()
const route = useRoute()

const syncLabel: Record<string, string> = {
  local: 'kun lokalt',
  syncing: 'lagrer …',
  synced: 'lagret i skyen ✓',
  error: 'lagring feilet',
}

const nav = [
  { to: '/', label: 'Hjem', name: 'home' },
  { to: '/ord', label: 'Ord', name: 'flashcards' },
  { to: '/setninger', label: 'Setninger', name: 'sentences' },
  { to: '/quiz', label: 'Quiz', name: 'quiz' },
  { to: '/statsborger', label: 'Statsborgerprøven', name: 'citizenship' },
]
</script>

<template>
  <!-- splash while Firebase restores the session -->
  <div v-if="!auth.ready" class="flex min-h-screen items-center justify-center">
    <span class="display animate-pulse text-3xl font-black text-ink">
      Norsk<em class="text-rod not-italic">Lærling</em>
    </span>
  </div>

  <!-- auth gate: no app without a signed-in user (when Firebase is configured) -->
  <LoginGate v-else-if="auth.enabled && !auth.user" />

  <div v-else class="flex min-h-screen flex-col">
    <div class="flag-stripe h-1.5 w-full" aria-hidden="true"></div>

    <header class="border-b border-rule bg-card/80 backdrop-blur-sm sticky top-0 z-40">
      <div class="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <RouterLink to="/" class="group flex items-baseline gap-2 no-underline">
          <span class="display text-2xl font-black tracking-tight text-ink">
            Norsk<em class="text-rod not-italic font-black">Lærling</em>
          </span>
          <span class="kicker hidden sm:inline">A2 → B1 → B2</span>
        </RouterLink>

        <div class="flex items-center gap-2">
          <div
            v-if="progress.streak > 0"
            class="chip bg-gull-wash text-gull"
            :title="`${progress.streak} dager på rad`"
          >
            🔥 {{ progress.streak }}
          </div>

          <RouterLink
            v-if="auth.enabled && auth.user"
            to="/innstillinger"
            class="chip border border-rule bg-card text-ink-soft no-underline hover:bg-paper-warm"
            :title="`${auth.user.email ?? ''} — ${syncLabel[progress.syncStatus]} · innstillinger`"
          >
            {{ (auth.user.displayName ?? auth.user.email ?? '?').slice(0, 1).toUpperCase() }}
            <span class="ml-1.5 hidden sm:inline" :class="progress.syncStatus === 'error' ? 'text-rod' : ''">
              {{ syncLabel[progress.syncStatus] }}
            </span>
          </RouterLink>
        </div>
      </div>

      <nav class="mx-auto flex max-w-5xl gap-1 overflow-x-auto px-4 pb-2 sm:px-6">
        <RouterLink
          v-for="item in nav"
          :key="item.name"
          :to="item.to"
          class="whitespace-nowrap rounded-lg px-3 py-1.5 text-sm font-bold no-underline transition-colors"
          :class="
            route.name === item.name
              ? 'bg-fjord text-card'
              : 'text-ink-soft hover:bg-paper-warm hover:text-ink'
          "
        >
          {{ item.label }}
        </RouterLink>
      </nav>
    </header>

    <main class="mx-auto w-full max-w-5xl flex-1 px-4 py-8 sm:px-6">
      <RouterView />
    </main>

    <footer class="border-t border-rule py-6">
      <div class="mx-auto max-w-5xl px-4 text-center text-xs text-ink-faint sm:px-6">
        Øv hver dag — norskprøven (muntlig B1) og statsborgerprøven venter.
        Offisiell info: <a href="https://prove.hkdir.no" target="_blank" rel="noopener" class="underline hover:text-fjord">prove.hkdir.no</a>
      </div>
    </footer>
  </div>
</template>
