import { defineStore } from 'pinia'
import { computed, reactive, ref, watch } from 'vue'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import type { Grade, SrsState } from '../types'
import { isDue, isLearned, newSrsState, review } from '../lib/srs'
import { todayKey } from '../lib/utils'
import { vocabulary } from '../data/vocabulary'
import { db } from '../lib/firebase'
import { useAuthStore } from './auth'

const STORAGE_KEY = 'norsklaerling-progress-v1'
/**
 * Firestore write budget: localStorage is the source of truth during a
 * session, so we only push to the cloud after a long quiet period — plus
 * an immediate flush when the tab is hidden/closed or the user logs out.
 * A whole study session typically costs 1–2 document writes.
 */
const CLOUD_SAVE_DEBOUNCE_MS = 30_000

interface ExamAttempt {
  date: string
  score: number
  total: number
  passed: boolean
}

interface QuizResult {
  date: string
  module: 'grammar' | 'sentences' | 'citizenship' | 'translation'
  score: number
  total: number
}

interface PersistedState {
  srs: Record<string, SrsState>
  activityDays: string[]
  quizResults: QuizResult[]
  examAttempts: ExamAttempt[]
}

function emptyState(): PersistedState {
  return { srs: {}, activityDays: [], quizResults: [], examAttempts: [] }
}

function load(): PersistedState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return { ...emptyState(), ...(JSON.parse(raw) as PersistedState) }
  } catch {
    // corrupted state — start fresh
  }
  return emptyState()
}

export const useProgressStore = defineStore('progress', () => {
  const authStore = useAuthStore()
  const state = reactive<PersistedState>(load())

  /** 'local' until signed in; then 'syncing' | 'synced' | 'error' */
  const syncStatus = ref<'local' | 'syncing' | 'synced' | 'error'>('local')

  let cloudSaveTimer: ReturnType<typeof setTimeout> | null = null
  let applyingCloud = false
  let lastSavedJson = ''

  function userDoc(uid: string) {
    return doc(db!, 'users', uid)
  }

  async function saveToCloud() {
    const uid = authStore.user?.uid
    if (!uid || !db) return
    // strip Vue reactivity → plain JSON for Firestore
    const json = JSON.stringify(state)
    if (json === lastSavedJson) {
      syncStatus.value = 'synced'
      return
    }
    try {
      await setDoc(userDoc(uid), JSON.parse(json) as PersistedState)
      lastSavedJson = json
      syncStatus.value = 'synced'
    } catch {
      syncStatus.value = 'error'
    }
  }

  function scheduleCloudSave() {
    if (!authStore.user || !db || applyingCloud) return
    if (cloudSaveTimer) clearTimeout(cloudSaveTimer)
    syncStatus.value = 'syncing'
    cloudSaveTimer = setTimeout(saveToCloud, CLOUD_SAVE_DEBOUNCE_MS)
  }

  /** write pending changes now (tab hidden, page closing, logout) */
  function flushCloudSave(): Promise<void> {
    if (cloudSaveTimer) {
      clearTimeout(cloudSaveTimer)
      cloudSaveTimer = null
    }
    return saveToCloud()
  }

  if (typeof document !== 'undefined') {
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') flushCloudSave()
    })
    window.addEventListener('pagehide', () => flushCloudSave())
  }

  /**
   * Merge cloud state into local. Per card: keep whichever side has seen
   * the card more. Days and results are unioned, so signing in on a new
   * device never wipes progress from either side.
   */
  function mergeCloud(cloud: PersistedState) {
    for (const [id, cardState] of Object.entries(cloud.srs ?? {})) {
      const local = state.srs[id]
      if (!local || cardState.reps >= local.reps) state.srs[id] = cardState
    }
    state.activityDays = [...new Set([...state.activityDays, ...(cloud.activityDays ?? [])])].sort()
    const seenQuiz = new Set(state.quizResults.map((r) => JSON.stringify(r)))
    for (const r of cloud.quizResults ?? []) {
      if (!seenQuiz.has(JSON.stringify(r))) state.quizResults.push(r)
    }
    const seenExam = new Set(state.examAttempts.map((a) => JSON.stringify(a)))
    for (const a of cloud.examAttempts ?? []) {
      if (!seenExam.has(JSON.stringify(a))) state.examAttempts.push(a)
    }
  }

  // on sign-in: pull cloud state, merge, push the merged result back
  watch(
    () => authStore.user?.uid,
    async (uid) => {
      if (!uid || !db) {
        syncStatus.value = 'local'
        return
      }
      syncStatus.value = 'syncing'
      try {
        applyingCloud = true
        const snap = await getDoc(userDoc(uid))
        if (snap.exists()) mergeCloud(snap.data() as PersistedState)
        applyingCloud = false
        await saveToCloud()
      } catch {
        applyingCloud = false
        syncStatus.value = 'error'
      }
    },
    { immediate: true },
  )

  watch(
    state,
    () => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
      scheduleCloudSave()
    },
    { deep: true },
  )

  function recordActivity() {
    const key = todayKey()
    if (!state.activityDays.includes(key)) state.activityDays.push(key)
  }

  function gradeCard(cardId: string, grade: Grade) {
    const current = state.srs[cardId] ?? newSrsState()
    state.srs[cardId] = review(current, grade)
    recordActivity()
  }

  function recordQuiz(module: QuizResult['module'], score: number, total: number) {
    state.quizResults.push({ date: todayKey(), module, score, total })
    recordActivity()
  }

  function recordExam(score: number, total: number) {
    state.examAttempts.push({ date: todayKey(), score, total, passed: score >= 24 })
    recordActivity()
  }

  const dueCards = computed(() =>
    vocabulary.filter((v) => isDue(state.srs[v.id])),
  )

  const learnedCount = computed(
    () => vocabulary.filter((v) => isLearned(state.srs[v.id])).length,
  )

  const seenCount = computed(() => Object.keys(state.srs).length)

  /** consecutive days ending today or yesterday */
  const streak = computed(() => {
    const days = new Set(state.activityDays)
    let count = 0
    const cursor = new Date()
    if (!days.has(todayKey(cursor))) cursor.setDate(cursor.getDate() - 1)
    while (days.has(todayKey(cursor))) {
      count++
      cursor.setDate(cursor.getDate() - 1)
    }
    return count
  })

  const bestExam = computed(() =>
    state.examAttempts.reduce<ExamAttempt | null>(
      (best, a) => (!best || a.score > best.score ? a : best),
      null,
    ),
  )

  const totalQuizAnswers = computed(() =>
    state.quizResults.reduce((sum, r) => sum + r.total, 0),
  )
  const totalQuizCorrect = computed(() =>
    state.quizResults.reduce((sum, r) => sum + r.score, 0),
  )

  function resetAll() {
    state.srs = {}
    state.activityDays = []
    state.quizResults = []
    state.examAttempts = []
  }

  return {
    state,
    syncStatus,
    flushCloudSave,
    gradeCard,
    recordQuiz,
    recordExam,
    recordActivity,
    dueCards,
    learnedCount,
    seenCount,
    streak,
    bestExam,
    totalQuizAnswers,
    totalQuizCorrect,
    resetAll,
  }
})
