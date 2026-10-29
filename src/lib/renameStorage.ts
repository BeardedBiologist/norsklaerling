/**
 * The app used to be called NorskLærling. Move anything this device saved
 * under the old names to the new ones, so a rename never loses progress.
 */
const OLD = 'norsklaerling-'
const NEW = 'norskveien-'

export function renameStorage() {
  try {
    for (const key of Object.keys(localStorage)) {
      if (!key.startsWith(OLD)) continue
      const newKey = NEW + key.slice(OLD.length)
      const value = localStorage.getItem(key)
      if (value !== null && localStorage.getItem(newKey) === null) localStorage.setItem(newKey, value)
      localStorage.removeItem(key)
    }
  } catch {
    // storage blocked: nothing to move
  }
  try {
    // pending recordings only live until judged, so the old store is just dropped
    indexedDB.deleteDatabase(OLD + 'recordings')
  } catch {
    // no IndexedDB
  }
}
