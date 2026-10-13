/**
 * The latest AI feedback per task, so it is still there after a reload and
 * on other devices. Kept in localStorage, and for signed-in users also in
 * Firestore (users/{uid}/feedback/{key}, one small document per task,
 * written only when new feedback arrives and read when a task is opened).
 */
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { auth, db } from './firebase'
import type { ConversationLine } from './ai'

export interface StoredFeedback<F = unknown> {
  fb: F
  /** epoch ms */
  at: number
  /** what the learner said (single answers) */
  transcript?: string
  /** the whole conversation (role-plays) */
  history?: ConversationLine[]
  /** pronunciation notes collected over a conversation's turns */
  notes?: { word: string; issue: string }[]
}

const LOCAL_KEY = 'norsklaerling-feedback-v1'
/** localStorage keeps only the most recent ones */
const LOCAL_MAX = 150

type LocalMap = Record<string, StoredFeedback>

function readLocal(): LocalMap {
  try {
    return JSON.parse(localStorage.getItem(LOCAL_KEY) ?? '{}') as LocalMap
  } catch {
    return {}
  }
}

function writeLocal(map: LocalMap) {
  const entries = Object.entries(map).sort((a, b) => b[1].at - a[1].at).slice(0, LOCAL_MAX)
  try {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(Object.fromEntries(entries)))
  } catch {
    // storage full — the cloud copy (if any) still has it
  }
}

/** Firestore ids can't contain «/» and are limited in length */
const docId = (key: string) => encodeURIComponent(key).slice(0, 700)

function cloudRef(key: string) {
  const uid = auth?.currentUser?.uid
  return uid && db ? doc(db, 'users', uid, 'feedback', docId(key)) : null
}

export async function saveFeedback<F>(key: string, data: Omit<StoredFeedback<F>, 'at'>): Promise<void> {
  // plain JSON (no Vue proxies, no undefined fields) for both stores
  const entry = JSON.parse(JSON.stringify({ ...data, at: Date.now() })) as StoredFeedback<F>
  const map = readLocal()
  map[key] = entry
  writeLocal(map)
  const ref = cloudRef(key)
  if (ref) await setDoc(ref, entry).catch(() => undefined)
}

/** the newest of the cloud and local copies */
export async function loadFeedback<F = unknown>(key: string): Promise<StoredFeedback<F> | null> {
  const local = (readLocal()[key] as StoredFeedback<F> | undefined) ?? null
  const ref = cloudRef(key)
  if (!ref) return local
  try {
    const snap = await getDoc(ref)
    const cloud = snap.exists() ? (snap.data() as StoredFeedback<F>) : null
    if (cloud && (!local || cloud.at > local.at)) {
      const map = readLocal()
      map[key] = cloud
      writeLocal(map)
      return cloud
    }
  } catch {
    // offline — fall back to this device's copy
  }
  return local
}

/** «i dag 14:05» / «12.10 14:05» */
export function feedbackDateLabel(at: number): string {
  const d = new Date(at)
  const time = d.toLocaleTimeString('nb-NO', { hour: '2-digit', minute: '2-digit' })
  return d.toDateString() === new Date().toDateString() ? `i dag ${time}` : `${d.getDate()}.${d.getMonth() + 1} ${time}`
}
