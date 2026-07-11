import { Link } from 'react-router-dom'
import { grammarTopics, quizzesForTopic } from '../data'
import { useAppState, bestAttempt } from '../lib/store'

export default function Grammar() {
  const s = useAppState()

  // Konuları duruma göre sırala: yıldızlı (eksik) önce, sonra yeni, sonra tamamlanan.
  const withState = grammarTopics.map((t) => {
    const best = bestAttempt(s, t.id)
    const pct = best ? Math.round((best.correct / best.total) * 100) : null
    const mastered = best ? best.correct === best.total : false
    const starred = best != null && !mastered // bir tane bile yanlış → yıldız
    return { t, pct, mastered, starred, attempted: best != null }
  })
  const starredCount = withState.filter((x) => x.starred).length
  const order = (x: typeof withState[number]) => (x.starred ? 0 : !x.attempted ? 1 : 2)
  const sorted = [...withState].sort((a, b) => order(a) - order(b) || a.t.order - b.t.order)

  return (
    <>
      <h1>Gramer & Testler</h1>
      <p className="muted small" style={{ marginTop: -6 }}>
        18 konu. Testte <b>hepsini bilirsen</b> konu ✓ tamamlanır; <b>bir tane bile</b> yanlışta ⭐ yıldız
        alır ve öğrenene kadar en üstte kalır. YÖKDİL'de ilk 20 sorunun 14'ü buradan.
      </p>
      {starredCount > 0 && (
        <div className="callout">⭐ <b>{starredCount} konu</b> tekrar bekliyor — üstte listelendi. Tıkla, oku, testi yeniden çöz.</div>
      )}

      <Link to="/referans/zaman" className="topicrow" style={{ borderColor: 'var(--accent)', background: 'var(--accent-soft)' }}>
        <div className="order" style={{ background: 'var(--accent)', color: '#fff' }}>⏱️</div>
        <div className="t">
          <div>Tense Zaman İfadeleri Tablosu</div>
          <div className="video">Çömez'in tense sinyal kelimeleri + zaman uyumu kuralı</div>
        </div>
        <span className="pill">referans</span>
      </Link>

      {sorted.map(({ t, pct, mastered, starred }) => {
        const qCount = quizzesForTopic(t.id).length
        return (
          <Link key={t.id} to={`/gramer/${t.id}`} className="topicrow" style={starred ? { borderColor: 'var(--warn)' } : undefined}>
            <div className="order">{starred ? '⭐' : mastered ? '✓' : t.order}</div>
            <div className="t">
              <div>{t.title}</div>
              <div className="video">🎬 {t.videoRef} · {qCount} soru</div>
            </div>
            {pct !== null ? (
              <span className={`pill ${mastered ? 'good' : 'warn'}`}>{mastered ? '✓ tam' : `%${pct}`}</span>
            ) : (
              <span className="pill muted">yeni</span>
            )}
          </Link>
        )
      })}
    </>
  )
}
