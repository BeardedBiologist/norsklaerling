/**
 * Recordings waiting for AI feedback, kept in IndexedDB on this device
 * until the AI has judged them. If the AI call fails, or the page is
 * reloaded, the same recording can be sent again without speaking again.
 * Nothing is uploaded or kept after a successful judgement.
 */
export interface SavedRecording<M = unknown> {
  blob: Blob | null
  transcript: string
  /** epoch ms */
  at: number
  /** extra state needed to resend (e.g. the conversation so far) */
  meta?: M
}

const DB = 'norskveien-recordings'
const STORE = 'pending'
/** older recordings are dropped */
const MAX_AGE = 7 * 24 * 3600 * 1000

let dbPromise: Promise<IDBDatabase | null> | null = null

function db(): Promise<IDBDatabase | null> {
  if (!dbPromise) {
    dbPromise = new Promise((resolve) => {
      try {
        const req = indexedDB.open(DB, 1)
        req.onupgradeneeded = () => req.result.createObjectStore(STORE)
        req.onsuccess = () => resolve(req.result)
        req.onerror = () => resolve(null)
      } catch {
        resolve(null)
      }
    })
  }
  return dbPromise
}

async function run<T>(mode: IDBTransactionMode, fn: (s: IDBObjectStore) => IDBRequest<T>): Promise<T | undefined> {
  const d = await db()
  if (!d) return undefined
  return new Promise((resolve) => {
    try {
      const req = fn(d.transaction(STORE, mode).objectStore(STORE))
      req.onsuccess = () => resolve(req.result)
      req.onerror = () => resolve(undefined)
    } catch {
      resolve(undefined)
    }
  })
}

/** stored form: raw bytes rather than a Blob (Safari has had bugs keeping Blobs in IndexedDB) */
interface Stored<M> {
  audio: ArrayBuffer | null
  type: string
  transcript: string
  at: number
  meta?: M
}

export async function saveRecording<M>(key: string, rec: Omit<SavedRecording<M>, 'at'>): Promise<void> {
  const stored: Stored<M> = {
    audio: rec.blob ? await rec.blob.arrayBuffer() : null,
    type: rec.blob?.type ?? '',
    transcript: rec.transcript,
    at: Date.now(),
    meta: rec.meta === undefined ? undefined : JSON.parse(JSON.stringify(rec.meta)),
  }
  await run('readwrite', (s) => s.put(stored, key))
}

export async function loadRecording<M = unknown>(key: string): Promise<SavedRecording<M> | null> {
  const rec = (await run('readonly', (s) => s.get(key))) as Stored<M> | undefined
  if (!rec) return null
  if (Date.now() - rec.at > MAX_AGE) {
    void deleteRecording(key)
    return null
  }
  return { blob: rec.audio ? new Blob([rec.audio], { type: rec.type }) : null, transcript: rec.transcript, at: rec.at, meta: rec.meta }
}

export async function deleteRecording(key: string): Promise<void> {
  await run('readwrite', (s) => s.delete(key))
}

/** «i dag 14:05» / «12.10 14:05» */
export function savedAtLabel(at: number): string {
  const d = new Date(at)
  const time = d.toLocaleTimeString('nb-NO', { hour: '2-digit', minute: '2-digit' })
  return d.toDateString() === new Date().toDateString() ? `i dag ${time}` : `${d.getDate()}.${d.getMonth() + 1} ${time}`
}
