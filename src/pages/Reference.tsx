import { Link } from 'react-router-dom'
import { tenseTable, agreementRules } from '../data/tense-time'

export default function Reference() {
  return (
    <>
      <Link to="/gramer" className="small">← Gramer</Link>
      <h1 style={{ marginTop: 8 }}>Tense Zaman İfadeleri Tablosu</h1>
      <p className="muted small" style={{ marginTop: -6 }}>
        Çömez'in vurguladığı altın kural: tense sorusunun cevabı çoğu zaman cümledeki <b>zaman
        ifadesinden</b> okunur. Sinyal kelimeyi gör, tense'i işaretle.
      </p>

      {tenseTable.map((row) => (
        <div className="card" key={row.tense} style={{ padding: '14px 16px' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, flexWrap: 'wrap' }}>
            <span style={{ fontSize: '1.4rem' }}>{row.emoji}</span>
            <b style={{ fontSize: '1.02rem' }}>{row.tense}</b>
            <span className="small muted">{row.tr}</span>
            <span className="pill mono" style={{ marginLeft: 'auto' }}>{row.formula}</span>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, margin: '10px 0' }}>
            {row.signals.map((s) => (
              <span key={s} className="pill warn">{s}</span>
            ))}
          </div>
          <p className="small" style={{ marginBottom: 6 }}>{row.use}</p>
          <div className="serif" style={{ fontSize: '0.98rem' }}>{row.example}</div>
          <div className="small muted">{row.exampleTr}</div>
        </div>
      ))}

      <h2 style={{ marginTop: 24 }}>Zaman Uyumu Kuralı (Sequence of Tenses)</h2>
      <p className="muted small" style={{ marginTop: -6 }}>
        İki eylemin zamanını birbirine bağlayan kalıplar — YÖKDİL'de tense sorularının en tuzaklı kısmı.
      </p>
      <div className="card">
        {agreementRules.map((r, i) => (
          <div key={i} style={{ marginBottom: 14 }}>
            <div className="small" style={{ fontWeight: 600 }}>🔑 {r.rule}</div>
            <div className="serif small" style={{ color: 'var(--accent-ink)', marginTop: 2 }}>{r.example}</div>
          </div>
        ))}
      </div>

      <div className="callout warn">
        <b>Sınavda:</b> Boşluklu tense sorusunda önce zaman ifadesini ara. "since/for" → Present Perfect,
        "ago/in 1990" → Simple Past, "by the time" → Perfect tense, "while" → Continuous. Sinyal yoksa
        cümlenin genel bir gerçek mi yoksa tek seferlik bir olay mı anlattığına bak.
      </div>
    </>
  )
}
