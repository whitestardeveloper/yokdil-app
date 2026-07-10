import { useState } from 'react'
import { useAppState, setState, uid } from '../lib/store'
import type { ExamEntry, ErrorEntry } from '../lib/store'
import { todayStr } from '../lib/srs'
import { TARGET_SCORE } from '../data/plan'
import { grammarTopics } from '../data'

const Q_TYPES = [
  'Kelime', 'Gramer', 'Cloze', 'Cümle tamamlama', 'Çeviri', 'Paragraf tamamlama',
  'Anlam bozan cümle', 'Okuma paragrafı',
]
const REASONS = ['kelime bilmiyordum', 'gramer/kural', 'dikkatsizlik', 'süre yetmedi', 'yanlış yorum']

export default function Karne() {
  const s = useAppState()
  const exams = [...s.exams].sort((a, b) => a.date.localeCompare(b.date))

  return (
    <>
      <h1>Karne</h1>
      <p className="muted small" style={{ marginTop: -6 }}>
        Deneme skorların ve hata günlüğün. Yükselen eğri motivasyonun, hata günlüğü de son hafta tekrarının
        ham maddesi.
      </p>

      <ExamChart exams={exams} />
      <ExamList exams={exams} />
      <ErrorLog errors={s.errors} />
    </>
  )
}

function ExamChart({ exams }: { exams: ExamEntry[] }) {
  if (exams.length === 0) return null
  const W = 320
  const H = 130
  const pad = 24
  const maxScore = 100
  const n = exams.length
  const x = (i: number) => (n === 1 ? W / 2 : pad + (i * (W - 2 * pad)) / (n - 1))
  const y = (score: number) => H - pad - (score / maxScore) * (H - 2 * pad)

  const pts = exams.map((e, i) => `${x(i)},${y(e.score)}`).join(' ')
  const targetY = y(TARGET_SCORE)

  return (
    <div className="card">
      <h3>Skor eğrisi</h3>
      <div className="tablewrap">
        <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ maxWidth: 420, display: 'block' }}>
          {/* hedef çizgisi */}
          <line x1={pad} y1={targetY} x2={W - pad} y2={targetY} stroke="var(--warn)" strokeDasharray="4 3" strokeWidth="1" />
          <text x={W - pad} y={targetY - 4} fill="var(--warn)" fontSize="9" textAnchor="end">
            hedef {TARGET_SCORE}
          </text>
          {/* eğri */}
          {n > 1 && <polyline points={pts} fill="none" stroke="var(--accent)" strokeWidth="2.5" />}
          {exams.map((e, i) => (
            <g key={e.id}>
              <circle cx={x(i)} cy={y(e.score)} r="4" fill="var(--accent-ink)" />
              <text x={x(i)} y={y(e.score) - 8} fill="var(--ink)" fontSize="10" textAnchor="middle" fontWeight="700">
                {e.score}
              </text>
            </g>
          ))}
        </svg>
      </div>
      {exams.length >= 2 && (
        <p className="small muted">
          İlk denemeden bu yana{' '}
          <b style={{ color: 'var(--good)' }}>
            +{exams[exams.length - 1].score - exams[0].score} puan
          </b>{' '}
          ilerleme.
        </p>
      )}
    </div>
  )
}

function ExamList({ exams }: { exams: ExamEntry[] }) {
  const [label, setLabel] = useState('')
  const [score, setScore] = useState('')
  const [date, setDate] = useState(todayStr())

  function add() {
    const sc = parseInt(score, 10)
    if (!label.trim() || isNaN(sc)) return
    const entry: ExamEntry = { id: uid(), label: label.trim(), score: Math.max(0, Math.min(100, sc)), date }
    setState((s) => ({ exams: [...s.exams, entry] }))
    setLabel('')
    setScore('')
  }

  function remove(id: string) {
    setState((s) => ({ exams: s.exams.filter((e) => e.id !== id) }))
  }

  return (
    <div className="card">
      <h3>Deneme sonuçları</h3>
      <div className="formrow">
        <div style={{ flex: 2 }}>
          <label className="lbl">Deneme adı</label>
          <input type="text" placeholder="ör. Modadil 3. sınav" value={label} onChange={(e) => setLabel(e.target.value)} />
        </div>
        <div style={{ flex: 1 }}>
          <label className="lbl">Puan</label>
          <input type="number" min={0} max={100} placeholder="0-100" value={score} onChange={(e) => setScore(e.target.value)} />
        </div>
      </div>
      <div className="formrow" style={{ alignItems: 'flex-end' }}>
        <div style={{ flex: 1 }}>
          <label className="lbl">Tarih</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <button className="btn" style={{ flex: 'none' }} onClick={add}>
          Ekle
        </button>
      </div>

      {[...exams].reverse().map((e) => (
        <div className="wordrow" key={e.id}>
          <span className="en" style={{ minWidth: 40 }}>{e.score}</span>
          <span className="tr">
            {e.label} · <span className="mono">{e.date}</span>
          </span>
          <button className="btn ghost small" style={{ flex: 'none', padding: '2px 8px' }} onClick={() => remove(e.id)}>
            sil
          </button>
        </div>
      ))}
    </div>
  )
}

function ErrorLog({ errors }: { errors: ErrorEntry[] }) {
  const [qType, setQType] = useState(Q_TYPES[0])
  const [reason, setReason] = useState(REASONS[0])
  const [note, setNote] = useState('')

  function add() {
    const entry: ErrorEntry = {
      id: uid(), date: todayStr(), qType, reason, note: note.trim(), resolved: false,
    }
    setState((s) => ({ errors: [entry, ...s.errors] }))
    setNote('')
  }
  function toggle(id: string) {
    setState((s) => ({ errors: s.errors.map((e) => (e.id === id ? { ...e, resolved: !e.resolved } : e)) }))
  }
  function remove(id: string) {
    setState((s) => ({ errors: s.errors.filter((e) => e.id !== id) }))
  }

  const open = errors.filter((e) => !e.resolved)
  const closed = errors.filter((e) => e.resolved)

  // sebep dağılımı (en çok nereden yanlış?)
  const byReason: Record<string, number> = {}
  errors.forEach((e) => (byReason[e.reason] = (byReason[e.reason] ?? 0) + 1))
  const topReason = Object.entries(byReason).sort((a, b) => b[1] - a[1])[0]

  return (
    <div className="card">
      <h3>Hata Günlüğü</h3>
      <p className="small muted" style={{ marginTop: -6 }}>
        Denemede yaptığın her yanlışı buraya işle. Sınavdan önce en sık yaptığın hata tipini görmek altın değerinde.
      </p>

      <div className="formrow">
        <div>
          <label className="lbl">Soru tipi</label>
          <select value={qType} onChange={(e) => setQType(e.target.value)}>
            {Q_TYPES.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="lbl">Sebep</label>
          <select value={reason} onChange={(e) => setReason(e.target.value)}>
            {REASONS.map((r) => (
              <option key={r}>{r}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="formrow" style={{ alignItems: 'flex-end' }}>
        <div style={{ flex: 3 }}>
          <label className="lbl">Not (kelime, kural, soru no…)</label>
          <input type="text" placeholder="ör. 'account for' = açıklamak, karıştırdım" value={note} onChange={(e) => setNote(e.target.value)} />
        </div>
        <button className="btn" style={{ flex: 'none' }} onClick={add}>
          Kaydet
        </button>
      </div>

      {topReason && errors.length >= 3 && (
        <div className="callout">
          📌 En sık hata sebebin: <b>{topReason[0]}</b> ({topReason[1]} kez). Çalışmanı buraya yönlendir.
        </div>
      )}

      {open.length > 0 && <p className="small" style={{ marginTop: 10 }}><b>Açık ({open.length})</b></p>}
      {open.map((e) => (
        <ErrRow key={e.id} e={e} onToggle={toggle} onRemove={remove} />
      ))}

      {closed.length > 0 && (
        <details style={{ marginTop: 10 }}>
          <summary className="small muted" style={{ cursor: 'pointer' }}>
            Kapatılanlar ({closed.length})
          </summary>
          {closed.map((e) => (
            <ErrRow key={e.id} e={e} onToggle={toggle} onRemove={remove} />
          ))}
        </details>
      )}

      {errors.length === 0 && <p className="small muted">Henüz kayıt yok. İlk denemenden sonra doldurmaya başla.</p>}
    </div>
  )
}

function ErrRow({ e, onToggle, onRemove }: { e: ErrorEntry; onToggle: (id: string) => void; onRemove: (id: string) => void }) {
  return (
    <div className={`taskrow ${e.resolved ? 'done' : ''}`}>
      <input type="checkbox" checked={e.resolved} onChange={() => onToggle(e.id)} />
      <label style={{ flex: 1 }}>
        <span className="pill muted" style={{ marginRight: 6 }}>{e.qType}</span>
        <span className="small" style={{ color: 'var(--warn)' }}>{e.reason}</span>
        {e.note && <div className="small">{e.note}</div>}
      </label>
      <button className="btn ghost small" style={{ flex: 'none', padding: '2px 8px' }} onClick={() => onRemove(e.id)}>
        sil
      </button>
    </div>
  )
}
