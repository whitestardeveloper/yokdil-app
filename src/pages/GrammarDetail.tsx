import { Link, useParams } from 'react-router-dom'
import { grammarById, quizzesForTopic } from '../data'
import type { GrammarTopic } from '../data/types'

/** summary metnini basit satır-bazlı biçimlemeyle render eder:
 *  "## " => alt başlık, "- " => madde, boş satır => paragraf ayracı. */
function Summary({ text }: { text: string }) {
  const blocks = text.split('\n\n')
  return (
    <div className="prose">
      {blocks.map((block, i) => {
        const lines = block.split('\n')
        // Madde listesi bloğu
        if (lines.every((l) => l.trim().startsWith('- '))) {
          return (
            <ul key={i}>
              {lines.map((l, j) => (
                <li key={j}>{l.trim().slice(2)}</li>
              ))}
            </ul>
          )
        }
        // Alt başlık (tek satır ## ile başlıyorsa)
        if (lines.length === 1 && lines[0].startsWith('## ')) {
          return <h3 key={i}>{lines[0].slice(3)}</h3>
        }
        return (
          <p key={i}>
            {lines.map((l, j) => (
              <span key={j}>
                {l.startsWith('## ') ? <strong>{l.slice(3)}</strong> : l}
                {j < lines.length - 1 && <br />}
              </span>
            ))}
          </p>
        )
      })}
    </div>
  )
}

export default function GrammarDetail() {
  const { id } = useParams()
  const topic: GrammarTopic | undefined = id ? grammarById[id] : undefined

  if (!topic) {
    return (
      <div className="card">
        <p>Konu bulunamadı.</p>
        <Link to="/gramer" className="btn small">← Gramer listesi</Link>
      </div>
    )
  }

  const qCount = quizzesForTopic(topic.id).length

  return (
    <>
      <Link to="/gramer" className="small">← Tüm konular</Link>
      <h1 style={{ marginTop: 8 }}>
        {topic.order}. {topic.title}
      </h1>
      <p className="muted small" style={{ marginTop: -6 }}>🎬 Çömez serisi: {topic.videoRef}</p>

      <div className="card">
        <Summary text={topic.summary} />
      </div>

      <div className="card">
        <h3>🔑 Altın kurallar</h3>
        <ul className="prose" style={{ margin: 0 }}>
          {topic.keyPoints.map((k, i) => (
            <li key={i}>{k}</li>
          ))}
        </ul>
      </div>

      <div className="card">
        <h3>Örnekler</h3>
        {topic.examples.map((ex, i) => (
          <div key={i} style={{ marginBottom: 14 }}>
            <div className="serif" style={{ fontSize: '1.02rem' }}>{ex.en}</div>
            <div className="small muted">{ex.tr}</div>
            {ex.note && (
              <div className="small" style={{ color: 'var(--accent-ink)', marginTop: 2 }}>💡 {ex.note}</div>
            )}
          </div>
        ))}
      </div>

      <div className="callout warn">
        <b>Sınavda:</b> {topic.examTip}
      </div>

      {qCount > 0 && (
        <Link to={`/test/${topic.id}`} className="btn" style={{ width: '100%' }}>
          ▶ Mini testi çöz ({qCount} soru)
        </Link>
      )}
    </>
  )
}
