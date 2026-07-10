import { useSyncExternalStore } from 'react'
import type { CardState } from './srs'

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

export function getState(): AppState {
  return state
}

export function setState(patch: Partial<AppState> | ((s: AppState) => Partial<AppState>)): void {
  const p = typeof patch === 'function' ? patch(state) : patch
  state = { ...state, ...p }
  try {
    localStorage.setItem(KEY, JSON.stringify(state))
  } catch {
    // depolama dolu/kapalıysa uygulama bellek-içi çalışmaya devam eder
  }
  listeners.forEach((l) => l())
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
