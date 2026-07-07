<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '../stores/auth'

const auth = useAuthStore()
const busy = ref(false)

async function signIn() {
  busy.value = true
  await auth.signIn()
  busy.value = false
}
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <div class="flag-stripe h-1.5 w-full" aria-hidden="true"></div>

    <main class="flex flex-1 items-center justify-center px-4 py-12">
      <div class="w-full max-w-md">
        <p class="kicker rise rise-1 text-center">Veien til norsk statsborgerskap</p>
        <h1 class="display rise rise-1 mt-2 text-center text-5xl font-black tracking-tight text-ink">
          Norsk<em class="text-rod not-italic">Lærling</em>
        </h1>
        <p class="rise rise-2 mt-3 text-center text-ink-soft">
          Ordforråd, setningsbygging og statsborgerprøven —<br />
          alt du trenger for å nå <strong>B1</strong> og bli norsk statsborger.
        </p>

        <div class="card rise rise-3 mt-8 p-8">
          <button
            class="btn w-full border border-rule bg-card py-3 text-base text-ink hover:bg-paper-warm"
            :disabled="busy"
            @click="signIn"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18A10.97 10.97 0 0 0 1 12c0 1.77.43 3.45 1.18 4.94l3.66-2.84z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
            </svg>
            {{ busy ? 'Logger inn …' : 'Fortsett med Google' }}
          </button>

          <p v-if="auth.error" class="pop mt-4 rounded-lg bg-rod-wash p-3 text-sm text-rod-deep">
            Innloggingen feilet: {{ auth.error }}
          </p>

          <hr class="dotted-rule my-6" />
          <p class="text-center text-xs text-ink-faint">
            Framgangen din — streak, ordkort og prøveresultater — lagres trygt på din
            egen bruker, så du kan fortsette der du slapp på hvilken som helst enhet.
          </p>
        </div>

        <p class="rise rise-4 mt-6 text-center text-xs text-ink-faint">
          Offisiell prøveinfo:
          <a href="https://prove.hkdir.no" target="_blank" rel="noopener" class="underline hover:text-fjord">prove.hkdir.no</a>
        </p>
      </div>
    </main>
  </div>
</template>
