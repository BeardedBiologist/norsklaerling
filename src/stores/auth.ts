import { defineStore } from 'pinia'
import { ref } from 'vue'
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  type User,
} from 'firebase/auth'
import { auth, firebaseEnabled } from '../lib/firebase'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null)
  /** true once the initial auth state is known (immediately in local-only mode) */
  const ready = ref(!firebaseEnabled)
  const error = ref<string | null>(null)

  if (firebaseEnabled && auth) {
    onAuthStateChanged(auth, (u) => {
      user.value = u
      ready.value = true
    })
  }

  async function signIn() {
    if (!auth) return
    error.value = null
    try {
      await signInWithPopup(auth, new GoogleAuthProvider())
    } catch (e) {
      error.value = e instanceof Error ? e.message : String(e)
    }
  }

  async function logOut() {
    if (!auth) return
    await signOut(auth)
  }

  return { user, ready, error, signIn, logOut, enabled: firebaseEnabled }
})
