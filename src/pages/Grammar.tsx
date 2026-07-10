import { Link } from 'react-router-dom'
import { grammarTopics, quizzesForTopic } from '../data'
import { useAppState, bestAttempt } from '../lib/store'

export default function Grammar() {
  const s = useAppState()
  return (
    <>
      <h1>Gramer & Testler</h1>
      <p className="muted small" style={{ marginTop: -6 }}>
        Fatih Çömez serisinin sırasına göre 18 konu. Her konuyu oku, sonra mini testle kendini dene.
        YÖKDİL'de ilk 20 sorunun 14'ü buradan çıkar.
      </p>

      <Link to="/referans/zaman" className="topicrow" style={{ borderColor: 'var(--accent)', background: 'var(--accent-soft)' }}>
        <div className="order" style={{ background: 'var(--accent)', color: '#fff' }}>⏱️</div>
        <div className="t">
          <div>Tense Zaman İfadeleri Tablosu</div>
          <div className="video">Çömez'in tense sinyal kelimeleri + zaman uyumu kuralı</div>
        </div>
        <span className="pill">referans</span>
      </Link>

      {grammarTopics.map((t) => {
        const qCount = quizzesForTopic(t.id).length
        const best = bestAttempt(s, t.id)
        const pct = best ? Math.round((best.correct / best.total) * 100) : null
        return (
          <Link key={t.id} to={`/gramer/${t.id}`} className="topicrow">
            <div className="order">{t.order}</div>
            <div className="t">
              <div>{t.title}</div>
              <div className="video">🎬 {t.videoRef} · {qCount} soru</div>
            </div>
            {pct !== null ? (
              <span className={`pill ${pct >= 70 ? 'good' : pct >= 50 ? 'warn' : 'muted'}`}>%{pct}</span>
            ) : (
              <span className="pill muted">yeni</span>
            )}
          </Link>
        )
      })}
    </>
  )
}
