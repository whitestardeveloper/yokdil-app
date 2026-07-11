import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { grammarById, quizzesForTopic } from '../data'
import { setState, getState } from '../lib/store'
import { todayStr } from '../lib/srs'

const LETTERS = ['A', 'B', 'C', 'D', 'E']

export default function Quiz() {
  const { id } = useParams()
  const topic = id ? grammarById[id] : undefined
  // Her girişte soruları karıştır — konuyu tekrar tekrar farklı sırayla çözebilirsin.
  const [seed, setSeed] = useState(0)
  const questions = useMemo(() => {
    const qs = id ? [...quizzesForTopic(id)] : []
    for (let i = qs.length - 1; i > 0; i--) {
      let h = 2166136261 ^ seed
      for (let k = 0; k < qs[i].id.length; k++) { h ^= qs[i].id.charCodeAt(k); h = Math.imul(h, 16777619) }
      const j = (h >>> 0) % (i + 1)
      ;[qs[i], qs[j]] = [qs[j], qs[i]]
    }
    return qs
  }, [id, seed])

  const [idx, setIdx] = useState(0)
  const [picked, setPicked] = useState<number | null>(null)
  const [correct, setCorrect] = useState(0)
  const [finished, setFinished] = useState(false)
  const [recorded, setRecorded] = useState(false)

  if (!topic || questions.length === 0) {
    return (
      <div className="card">
        <p>Bu konu için test bulunamadı.</p>
        <Link to="/gramer" className="btn small">← Gramer</Link>
      </div>
    )
  }

  const q = questions[idx]

  function pick(i: number) {
    if (picked !== null) return
    setPicked(i)
    if (i === q.answer) setCorrect((c) => c + 1)
  }

  function next() {
    if (idx + 1 < questions.length) {
      setIdx(idx + 1)
      setPicked(null)
    } else {
      setFinished(true)
      if (!recorded) {
        const today = todayStr()
        setState((s) => ({
          quizAttempts: [
            ...s.quizAttempts,
            { topicId: topic!.id, correct, total: questions.length, date: today },
          ],
          reviewDates: { ...s.reviewDates, [today]: (s.reviewDates[today] ?? 0) + 1 },
        }))
        setRecorded(true)
      }
    }
  }

  function restart() {
    setSeed((x) => x + 1) // yeni karışım
    setIdx(0)
    setPicked(null)
    setCorrect(0)
    setFinished(false)
    setRecorded(false)
  }

  if (finished) {
    const pct = Math.round((correct / questions.length) * 100)
    const good = pct >= 70
    const mid = pct >= 50
    return (
      <div className="card" style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '3rem' }}>{good ? '🎯' : mid ? '💪' : '📚'}</div>
        <h2>
          {correct} / {questions.length} doğru · %{pct}
        </h2>
        {good ? (
          <p>Bu konu oturmuş. Bir sonraki konuya geçebilirsin.</p>
        ) : mid ? (
          <p>Fena değil ama kalıcı değil. Konuyu bir daha oku, sonra testi tekrar çöz.</p>
        ) : (
          <p className="serif">
            Bu konu henüz oturmamış — <b>hiç sorun değil, olması gereken bu.</b> Konu anlatımına geri dön,
            örneklere dikkatlice bak, sonra testi tekrarla. İkinci turda fark göreceksin.
          </p>
        )}
        <div className="formrow" style={{ marginTop: 12, justifyContent: 'center' }}>
          {!good && (
            <Link to={`/gramer/${topic.id}`} className="btn" style={{ flex: 'none' }}>
              📘 Konuyu tekrar oku
            </Link>
          )}
          <button className="btn ghost" style={{ flex: 'none' }} onClick={restart}>
            🔁 Testi tekrarla
          </button>
          <Link to="/gramer" className="btn ghost" style={{ flex: 'none' }}>
            Konular
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="formrow" style={{ alignItems: 'center', marginBottom: 8 }}>
        <Link to={`/gramer/${topic.id}`} className="btn ghost small" style={{ flex: 'none' }}>
          ✕
        </Link>
        <div className="progress" style={{ flex: 1 }}>
          <div style={{ width: `${(idx / questions.length) * 100}%` }} />
        </div>
        <span className="small mono" style={{ flex: 'none' }}>
          {idx + 1}/{questions.length}
        </span>
      </div>

      <div className="small muted">{topic.title}</div>
      <div className="quiz-q">{q.question}</div>

      <div className="quiz-opts">
        {q.options.map((opt, i) => {
          let cls = 'quiz-opt'
          if (picked !== null) {
            if (i === q.answer) cls += ' correct'
            else if (i === picked) cls += ' wrong'
          }
          return (
            <button key={i} className={cls} disabled={picked !== null} onClick={() => pick(i)}>
              <span className="letter">{LETTERS[i]}</span>
              <span>{opt}</span>
            </button>
          )
        })}
      </div>

      {picked !== null && (
        <>
          <div className="explanation">
            {picked === q.answer ? '✅ Doğru! ' : `❌ Doğru cevap: ${LETTERS[q.answer]}. `}
            {q.explanation}
          </div>
          <button className="btn" style={{ width: '100%', marginTop: 12 }} onClick={next}>
            {idx + 1 < questions.length ? 'Sonraki soru →' : 'Testi bitir'}
          </button>
        </>
      )}
    </>
  )
}
