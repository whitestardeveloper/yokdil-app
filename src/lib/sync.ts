import { getState, replaceState, setLocalChangeHandler, type AppState } from './store'

// Bulut senkron: verini /api/state üzerinden Neon veritabanında saklar.
// Şifre sunucuda (DATABASE_URL env). Burada yalnızca kullanıcı-anahtarı tutulur.
const KEY_STORE = 'yokdil-sync-key'

export function getSyncKey(): string {
  try {
    return localStorage.getItem(KEY_STORE) || ''
  } catch {
    return ''
  }
}

export function setSyncKey(k: string): void {
  try {
    if (k) localStorage.setItem(KEY_STORE, k)
    else localStorage.removeItem(KEY_STORE)
  } catch {
    // yok say
  }
}

export type SyncStatus = 'off' | 'idle' | 'syncing' | 'error'
let status: SyncStatus = 'off'
const statusListeners = new Set<(s: SyncStatus) => void>()
function setStatus(s: SyncStatus) {
  status = s
  statusListeners.forEach((l) => l(s))
}
export function getSyncStatus(): SyncStatus {
  return status
}
export function onSyncStatus(fn: (s: SyncStatus) => void): () => void {
  statusListeners.add(fn)
  return () => statusListeners.delete(fn)
}

let pushTimer: ReturnType<typeof setTimeout> | null = null

async function pull(key: string): Promise<AppState | null> {
  const res = await fetch(`/api/state?key=${encodeURIComponent(key)}`)
  if (!res.ok) throw new Error('pull failed')
  return (await res.json()) as AppState | null
}

async function push(key: string, state: AppState): Promise<void> {
  const res = await fetch(`/api/state?key=${encodeURIComponent(key)}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(state),
  })
  if (!res.ok) throw new Error('push failed')
}

function schedulePush() {
  const key = getSyncKey()
  if (!key) return
  if (pushTimer) clearTimeout(pushTimer)
  pushTimer = setTimeout(async () => {
    try {
      setStatus('syncing')
      await push(key, getState())
      setStatus('idle')
    } catch {
      setStatus('error')
    }
  }, 1500)
}

/** Uygulama açılışında çağrılır: anahtar varsa uzaktan çek, daha yeniyse uygula. */
export async function initSync(): Promise<void> {
  setLocalChangeHandler(schedulePush)
  const key = getSyncKey()
  if (!key) {
    setStatus('off')
    return
  }
  setStatus('syncing')
  try {
    const remote = await pull(key)
    if (remote && typeof remote._v === 'number' && remote._v > (getState()._v || 0)) {
      replaceState(remote)
    } else if (!remote) {
      // uzakta yoksa mevcut yereli yükle
      await push(key, getState())
    }
    setStatus('idle')
  } catch {
    setStatus('error')
  }
}

/** Kullanıcı yeni anahtar girince: anahtarı kaydet, uzaktan çek/başlat. */
export async function connectSync(key: string): Promise<void> {
  setSyncKey(key.trim())
  await initSync()
}

/** Anahtarı kes. */
export function disconnectSync(): void {
  setSyncKey('')
  setStatus('off')
}

/** Yereli hemen uzağa yaz (manuel yedekle). */
export async function pushNow(): Promise<void> {
  const key = getSyncKey()
  if (!key) return
  setStatus('syncing')
  try {
    await push(key, getState())
    setStatus('idle')
  } catch {
    setStatus('error')
  }
}
