import { useSyncExternalStore } from 'react'
import type { CardState } from './srs'
import { review, todayStr } from './srs'

export interface QuizAttempt {
  topicId: string
  correct: number
  total: number
  date: string
}

export interface ExamEntry {
  id: string
  label: string
  date: string
  score: number // 0-100
  note?: string
}

export interface ErrorEntry {
  id: string
  date: string
  qType: string // soru tipi
  reason: string // kelime | gramer | dikkat | süre | yorum
  note: string
  resolved: boolean
}

export type StudyScope = 'highyield' | 'modadil' | 'core' | 'all'

export interface AppState {
  cards: Record<string, CardState>
  newPerDay: number
  newDate: string // en son yeni kelime verilen gün
  newToday: number // o gün verilen yeni kelime sayısı
  reviewDates: Record<string, number> // gün -> tekrar sayısı (streak için)
  quizAttempts: QuizAttempt[]
  exams: ExamEntry[]
  errors: ErrorEntry[]
  planDone: Record<string, boolean> // "YYYY-MM-DD:taskIndex"
  scope: StudyScope // SRS'in hangi kelime havuzundan çalışacağı
  known: Record<string, true> // "zaten biliyorum" ile atlanan kelimeler
  hard: Record<string, true> // "zor" işaretli / testte bilinemeyen kelimeler
  _v: number // sürüm damgası (bulut senkron son-yazan-kazanır için)
}

const KEY = 'yokdil-koc-v1'

const defaultState: AppState = {
  cards: {},
  newPerDay: 30,
  newDate: '',
  newToday: 0,
  reviewDates: {},
  quizAttempts: [],
  exams: [{ id: 'diag', label: 'Teşhis (2021 çıkmış)', date: '2026-07-06', score: 24, note: 'Başlangıç seviyesi' }],
  errors: [],
  planDone: {},
  scope: 'highyield',
  known: {},
  hard: {},
  _v: 0,
}

function load(): AppState {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return defaultState
    return { ...defaultState, ...JSON.parse(raw) }
  } catch {
    return defaultState
  }
}

let state: AppState = load()
const listeners = new Set<() => void>()
let onLocalChange: ((s: AppState) => void) | null = null

export function getState(): AppState {
  return state
}

function persist(): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(state))
  } catch {
    // depolama dolu/kapalıysa uygulama bellek-içi çalışmaya devam eder
  }
}

export function setState(patch: Partial<AppState> | ((s: AppState) => Partial<AppState>)): void {
  const p = typeof patch === 'function' ? patch(state) : patch
  state = { ...state, ...p, _v: Date.now() }
  persist()
  listeners.forEach((l) => l())
  if (onLocalChange) onLocalChange(state)
}

/** Bulut senkrondan gelen tüm state'i uygular (dinleyici tetiklemeden yalnızca yerel değişiklik geri-push'u yapılmaz). */
export function replaceState(next: AppState): void {
  state = { ...defaultState, ...next }
  persist()
  listeners.forEach((l) => l())
}

/** Bulut senkron modülü yerel değişiklikleri dinlemek için bunu kaydeder. */
export function setLocalChangeHandler(fn: (s: AppState) => void): void {
  onLocalChange = fn
}

function subscribe(l: () => void): () => void {
  listeners.add(l)
  return () => listeners.delete(l)
}

export function useAppState(): AppState {
  return useSyncExternalStore(subscribe, getState)
}

export function uid(): string {
  return Math.random().toString(36).slice(2, 10)
}

/** Üst üste çalışılan gün sayısı (bugün veya dün dahil başlar) */
export function streak(s: AppState): number {
  const days = new Set(Object.keys(s.reviewDates))
  Object.keys(s.planDone).forEach((k) => {
    if (s.planDone[k]) days.add(k.split(':')[0])
  })
  let count = 0
  const d = new Date()
  const fmt = (dt: Date) =>
    `${dt.getFullYear()}-${String(dt.getMonth() + 1).padStart(2, '0')}-${String(dt.getDate()).padStart(2, '0')}`
  if (!days.has(fmt(d))) d.setDate(d.getDate() - 1) // bugün henüz çalışılmadıysa dünden say
  while (days.has(fmt(d))) {
    count++
    d.setDate(d.getDate() - 1)
  }
  return count
}

/** Bir konunun en iyi test sonucu */
export function bestAttempt(s: AppState, topicId: string): QuizAttempt | undefined {
  return s.quizAttempts
    .filter((a) => a.topicId === topicId)
    .sort((a, b) => b.correct / b.total - a.correct / a.total)[0]
}

export type WordState = 'known' | 'hard' | 'mastered' | 'learning' | 'new'

/** Bir kelimenin ilerleme durumu (görsel rozet + öncelik için). */
export function wordState(s: AppState, id: string): WordState {
  if (s.known[id]) return 'known'
  const c = s.cards[id]
  if (s.hard[id]) return 'hard'
  if (!c) return 'new'
  if (c.interval >= 7 && c.reps >= 2) return 'mastered'
  return 'learning'
}

// ——— İlerleme aksiyonları ———

export function markKnown(id: string): void {
  const s = getState()
  const hard = { ...s.hard }
  delete hard[id]
  setState({ known: { ...s.known, [id]: true }, hard })
}

export function unmarkKnown(id: string): void {
  const s = getState()
  const known = { ...s.known }
  delete known[id]
  setState({ known })
}

export function markHard(id: string): void {
  const s = getState()
  setState({ hard: { ...s.hard, [id]: true } })
}

export function unmarkHard(id: string): void {
  const s = getState()
  const hard = { ...s.hard }
  delete hard[id]
  setState({ hard })
}

/** "Öğrendim / doğru bildim": kartı ilerlet (yoksa oluştur), zor listesinden çıkar.
 *  countsAsNew=false ise günlük yeni-kelime kotasını harcamaz (test/işaretleme). */
export function markLearned(id: string, grade: 3 | 4 | 5 = 4, countsAsNew = false): void {
  const s = getState()
  const today = todayStr()
  const isNew = !s.cards[id]
  const hard = { ...s.hard }
  delete hard[id]
  const newToday = s.newDate === today ? s.newToday : 0
  setState({
    cards: { ...s.cards, [id]: review(s.cards[id], grade) },
    hard,
    newDate: today,
    newToday: newToday + (isNew && countsAsNew ? 1 : 0),
    reviewDates: { ...s.reviewDates, [today]: (s.reviewDates[today] ?? 0) + 1 },
  })
}

/** Testte bilinemeyen: zor listesine ekle + SRS'te "tekrar" olarak sıfırla. */
export function markFailed(id: string): void {
  const s = getState()
  const today = todayStr()
  setState({
    cards: { ...s.cards, [id]: review(s.cards[id], 0) },
    hard: { ...s.hard, [id]: true },
    reviewDates: { ...s.reviewDates, [today]: (s.reviewDates[today] ?? 0) + 1 },
  })
}
