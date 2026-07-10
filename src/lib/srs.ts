// SM-2 tabanlı aralıklı tekrar — sınava 1 aydan az kaldığı için aralıklar 15 günle sınırlı.

export interface CardState {
  ef: number
  reps: number
  interval: number
  due: string // YYYY-MM-DD
  lapses: number
}

/** 0 = tekrar (bilemedim), 3 = zor, 4 = iyi, 5 = kolay */
export type Grade = 0 | 3 | 4 | 5

const MAX_INTERVAL = 15

export function todayStr(d: Date = new Date()): string {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

export function addDays(dateStr: string, days: number): string {
  const [y, m, d] = dateStr.split('-').map(Number)
  const dt = new Date(y, m - 1, d + days)
  return todayStr(dt)
}

export function review(card: CardState | undefined, grade: Grade): CardState {
  const today = todayStr()
  const c: CardState = card ?? { ef: 2.5, reps: 0, interval: 0, due: today, lapses: 0 }

  if (grade < 3) {
    return { ...c, reps: 0, interval: 0, due: today, lapses: c.lapses + 1 }
  }

  const ef = Math.max(1.3, c.ef + (0.1 - (5 - grade) * (0.08 + (5 - grade) * 0.02)))
  const reps = c.reps + 1
  let interval: number
  if (reps === 1) interval = 1
  else if (reps === 2) interval = 3
  else interval = Math.round(c.interval * ef)
  if (grade === 5) interval = Math.max(interval, reps === 1 ? 2 : interval)
  interval = Math.min(interval, MAX_INTERVAL)

  return { ef, reps, interval, due: addDays(today, interval), lapses: c.lapses }
}

export function isDue(card: CardState): boolean {
  return card.due <= todayStr()
}
