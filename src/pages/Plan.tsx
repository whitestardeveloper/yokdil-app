import { useEffect, useRef } from 'react'
import { plan } from '../data/plan'
import { useAppState, setState } from '../lib/store'
import { todayStr } from '../lib/srs'

function fmtDate(dateStr: string): string {
  const [, m, d] = dateStr.split('-').map(Number)
  const months = ['', 'Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara']
  const days = ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt']
  const dt = new Date(dateStr + 'T00:00:00')
  return `${d} ${months[m]} ${days[dt.getDay()]}`
}

export default function Plan() {
  const s = useAppState()
  const today = todayStr()
  const todayRef = useRef<HTMLDetailsElement>(null)

  useEffect(() => {
    todayRef.current?.scrollIntoView({ block: 'center', behavior: 'smooth' })
  }, [])

  function toggle(date: string, i: number) {
    const key = `${date}:${i}`
    setState((cur) => ({ planDone: { ...cur.planDone, [key]: !cur.planDone[key] } }))
  }

  // Faz bazlı ilerleme
  const phases = [...new Set(plan.map((p) => p.phase))]
  const totalTasks = plan.reduce((a, p) => a + p.tasks.length, 0)
  const doneTasks = plan.reduce(
    (a, p) => a + p.tasks.filter((_, i) => s.planDone[`${p.date}:${i}`]).length,
    0,
  )

  return (
    <>
      <h1>36 Günlük Plan</h1>
      <p className="muted small" style={{ marginTop: -6 }}>
        Hafta içi ~2 saat, hafta sonu ~4 saat. Cumartesileri deneme günü. Kutuları işaretledikçe ilerlersin.
      </p>

      <div className="card">
        <div className="formrow" style={{ alignItems: 'center', marginBottom: 6 }}>
          <b>Genel ilerleme</b>
          <span className="small mono" style={{ flex: 'none' }}>
            {doneTasks}/{totalTasks} görev
          </span>
        </div>
        <div className="progress">
          <div style={{ width: `${(doneTasks / totalTasks) * 100}%` }} />
        </div>
      </div>

      {phases.map((phase) => (
        <div key={phase}>
          <h3 style={{ marginTop: 22, marginBottom: 8, color: 'var(--accent-ink)' }}>{phase}</h3>
          {plan
            .filter((p) => p.phase === phase)
            .map((day) => {
              const isToday = day.date === today
              const isPast = day.date < today
              const done = day.tasks.filter((_, i) => s.planDone[`${day.date}:${i}`]).length
              const allDone = done === day.tasks.length
              return (
                <details
                  key={day.date}
                  className={`dayblock ${isToday ? 'today' : ''}`}
                  open={isToday}
                  ref={isToday ? todayRef : undefined}
                >
                  <summary>
                    <span className="date">{fmtDate(day.date)}</span>
                    <span>{day.title}</span>
                    <span className="spacer" />
                    {isToday && <span className="pill">bugün</span>}
                    {allDone ? (
                      <span className="pill good">✓</span>
                    ) : (
                      <span className={`pill ${isPast ? 'warn' : 'muted'}`}>
                        {done}/{day.tasks.length}
                      </span>
                    )}
                  </summary>
                  <div className="daytasks">
                    {day.milestone && (
                      <div className="callout warn" style={{ margin: '4px 0 10px' }}>
                        🎯 {day.milestone}
                      </div>
                    )}
                    {day.tasks.map((task, i) => {
                      const checked = !!s.planDone[`${day.date}:${i}`]
                      return (
                        <div key={i} className={`taskrow ${checked ? 'done' : ''}`}>
                          <input
                            type="checkbox"
                            id={`${day.date}-${i}`}
                            checked={checked}
                            onChange={() => toggle(day.date, i)}
                          />
                          <label htmlFor={`${day.date}-${i}`}>{task.text}</label>
                          {task.minutes > 0 && <span className="min">{task.minutes}dk</span>}
                        </div>
                      )
                    })}
                  </div>
                </details>
              )
            })}
        </div>
      ))}
    </>
  )
}
