import { Link } from 'react-router-dom'
import { useAppState, streak } from '../lib/store'
import { isDue, todayStr } from '../lib/srs'
import { wordsForScope } from '../data'
import { daysToExam, plan, TARGET_SCORE } from '../data/plan'

const MOTIVATION = [
  'Küçük ama her gün. 24\'ten 60\'a giden yol, günde bir avuç kelimeyle döşenir.',
  'Bugün öğrendiğin her kelime, sınavda gördüğünde tanıdık bir yüz olacak.',
  'Bağlaç ve edatları bilen, cloze ve cümle tamamlamayı kasar. Sen kasacaksın.',
  'Yanlışların hazinen: her hata, kapatılınca bir daha o soruyu kaçırmazsın.',
  'Çeviri soruları en garantili puanların. Onları bırakma.',
  'Disiplin motivasyondan güçlüdür. Plana dokun, gerisi gelir.',
]

export default function Dashboard() {
  const s = useAppState()
  const today = todayStr()
  const pool = wordsForScope(s.scope).filter((w) => !s.known[w.id])
  const learned = pool.filter((w) => s.cards[w.id]).length
  const due = pool.filter((w) => {
    const c = s.cards[w.id]
    return c ? isDue(c) : false
  }).length
  const st = streak(s)
  const days = daysToExam()

  const latestExam = [...s.exams].sort((a, b) => b.date.localeCompare(a.date))[0]
  const firstExam = [...s.exams].sort((a, b) => a.date.localeCompare(b.date))[0]
  const gain = latestExam && firstExam ? latestExam.score - firstExam.score : 0

  const todayTasks = plan.find((p) => p.date === today)
  const doneToday = todayTasks
    ? todayTasks.tasks.filter((_, i) => s.planDone[`${today}:${i}`]).length
    : 0

  const motivation = MOTIVATION[new Date().getDate() % MOTIVATION.length]

  return (
    <>
      <div className="card" style={{ background: 'var(--accent)', color: '#fff', border: 'none' }}>
        <div style={{ fontSize: '0.8rem', opacity: 0.85, letterSpacing: '0.05em' }}>SINAVA KALAN · 9 AĞUSTOS</div>
        <div style={{ fontSize: '2.4rem', fontWeight: 800, lineHeight: 1.1 }}>{days} gün</div>
        <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>
          Hedef: {TARGET_SCORE} puan · Son deneme: {latestExam?.score ?? '—'}{' '}
          {gain > 0 && <span>(+{gain} ilerleme)</span>}
        </div>
      </div>

      <Link to="/anatomi" className="card" style={{ display: 'block', textDecoration: 'none', color: 'inherit', borderColor: 'var(--accent)' }}>
        <h3 style={{ margin: 0 }}>🧭 Sınav Anatomisi</h3>
        <p className="small muted" style={{ margin: '4px 0 0' }}>
          80 soru nerede kolay, nerede zor? 60 puana giden yol · "1080 kelime yeter mi?" — güven tazele.
        </p>
      </Link>

      <div className="statrow">
        <div className="stat">
          <div className="num">{due}</div>
          <div className="lbl">Tekrar bekliyor</div>
        </div>
        <div className="stat">
          <div className="num">{learned}</div>
          <div className="lbl">Öğrenilen kelime</div>
        </div>
        <div className="stat">
          <div className="num">{st}🔥</div>
          <div className="lbl">Gün serisi</div>
        </div>
        <div className="stat">
          <div className="num">{pool.length.toLocaleString('tr')}</div>
          <div className="lbl">Kapsam kelimesi</div>
        </div>
      </div>

      <div className="card">
        <h3>Bugünün işi</h3>
        {todayTasks ? (
          <>
            <p className="small muted" style={{ marginTop: -4 }}>
              {todayTasks.phase} · {todayTasks.title}
            </p>
            <div className="progress" style={{ marginBottom: 8 }}>
              <div style={{ width: `${(doneToday / todayTasks.tasks.length) * 100}%` }} />
            </div>
            <p className="small">
              {doneToday}/{todayTasks.tasks.length} görev tamamlandı
            </p>
            <Link to="/plan" className="btn small">
              Planı aç →
            </Link>
          </>
        ) : (
          <p className="small muted">Bugün için planlı görev yok — kelime ve test serbest çalışma günü.</p>
        )}
      </div>

      <div className="grid2">
        <Link to="/kelime" className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
          <h3>🗂️ Kelime çalış</h3>
          {due > 0 ? (
            <p className="small">
              <span className="pill warn">{due} kart hazır</span> — SRS oturumunu başlat.
            </p>
          ) : (
            <p className="small muted">Bugünlük tekrar bitti 👍 Yeni kelime eklemeye devam edebilirsin.</p>
          )}
        </Link>
        <Link to="/gramer" className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
          <h3>📘 Gramer & Test</h3>
          <p className="small muted">18 konu, Çömez serisi sırasına göre. Konuyu oku, mini testi çöz.</p>
        </Link>
      </div>

      <div className="callout">💡 {motivation}</div>
    </>
  )
}
