import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppState, streak, wordState, bestAttempt } from '../lib/store'
import { wordsForScope, grammarTopics, highYieldWords } from '../data'
import { getSyncKey, connectSync, disconnectSync, pushNow, getSyncStatus, onSyncStatus, type SyncStatus } from '../lib/sync'

function pct(a: number, b: number): number {
  return b === 0 ? 0 : Math.round((a / b) * 100)
}

export default function Progress() {
  const s = useAppState()
  const pool = wordsForScope('highyield', s.known)
  const target = highYieldWords.length // 625

  // Kelime durum dağılımı (aktif yüksek-getiri kapsamı üzerinden)
  let mastered = 0, learning = 0, hard = 0, fresh = 0
  for (const w of pool) {
    const st = wordState(s, w.id)
    if (st === 'mastered') mastered++
    else if (st === 'hard') hard++
    else if (st === 'learning') learning++
    else fresh++
  }
  const knownCount = Object.keys(s.known).length
  const done = mastered + learning // üzerinden geçilenler
  const overallPct = pct(mastered, pool.length)

  // Gramer
  const gAttempted = grammarTopics.filter((t) => bestAttempt(s, t.id))
  const gMastered = grammarTopics.filter((t) => {
    const b = bestAttempt(s, t.id)
    return b && b.correct === b.total
  }).length
  const gStar = gAttempted.length - gMastered

  // Deneme skoru eğrisi
  const exams = [...s.exams].sort((a, b) => a.date.localeCompare(b.date))
  const lastScore = exams[exams.length - 1]?.score ?? 0

  // Son 14 gün aktivite (tekrar sayısı)
  const days: { d: string; n: number }[] = []
  for (let i = 13; i >= 0; i--) {
    const dt = new Date()
    dt.setDate(dt.getDate() - i)
    const key = `${dt.getFullYear()}-${String(dt.getMonth() + 1).padStart(2, '0')}-${String(dt.getDate()).padStart(2, '0')}`
    days.push({ d: key, n: s.reviewDates[key] ?? 0 })
  }
  const maxDay = Math.max(1, ...days.map((x) => x.n))

  return (
    <>
      <h1>İlerleme</h1>
      <p className="muted small" style={{ marginTop: -6 }}>Nerede olduğunu tek bakışta gör. Hedef: Yüksek Getiri {target} kelime + gramer + yükselen deneme skoru.</p>

      {/* Ana halka */}
      <div className="card" style={{ textAlign: 'center' }}>
        <div className="ring" style={{ ['--p' as string]: overallPct }}>
          <div className="ring-in">
            <div className="ring-pct">%{overallPct}</div>
            <div className="ring-lbl">pekiştirildi</div>
          </div>
        </div>
        <p className="small muted" style={{ marginTop: 6 }}>
          {mastered} kelime kalıcı · {learning} öğreniliyor · {pool.length} aktif hedef
        </p>
      </div>

      {/* Kelime durum çubuğu */}
      <div className="card">
        <h3 style={{ marginTop: 0 }}>Kelime durumu</h3>
        <div className="segbar">
          <span className="seg seg-mast" style={{ flex: mastered || 0.001 }} title={`Kalıcı: ${mastered}`} />
          <span className="seg seg-learn" style={{ flex: learning || 0.001 }} title={`Öğreniliyor: ${learning}`} />
          <span className="seg seg-hard" style={{ flex: hard || 0.001 }} title={`Zor: ${hard}`} />
          <span className="seg seg-new" style={{ flex: fresh || 0.001 }} title={`Yeni: ${fresh}`} />
        </div>
        <div className="seglegend">
          <span><i className="dot-mast" /> Kalıcı {mastered}</span>
          <span><i className="dot-learn" /> Öğreniliyor {learning}</span>
          <span><i className="dot-hard" /> Zor {hard}</span>
          <span><i className="dot-new" /> Yeni {fresh}</span>
        </div>
        <p className="small muted" style={{ marginBottom: 0 }}>
          Ayrıca <b>{knownCount}</b> kelimeyi "biliyorum" ile çıkardın; yerlerine 1080'den yenileri geldi.
        </p>
      </div>

      <div className="statrow">
        <div className="stat"><div className="num">{done}</div><div className="lbl">Üzerinden geçilen</div></div>
        <div className="stat"><div className="num" style={{ color: hard ? 'var(--warn)' : undefined }}>{hard}</div><div className="lbl">Zor kelime</div></div>
        <div className="stat"><div className="num">{streak(s)}🔥</div><div className="lbl">Gün serisi</div></div>
        <div className="stat"><div className="num">{lastScore}</div><div className="lbl">Son deneme</div></div>
      </div>

      {/* Gramer ilerleme */}
      <div className="card">
        <h3 style={{ marginTop: 0 }}>Gramer konuları</h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div className="progress" style={{ flex: 1 }}><div style={{ width: `${pct(gMastered, grammarTopics.length)}%` }} /></div>
          <span className="small mono">{gMastered}/{grammarTopics.length}</span>
        </div>
        <p className="small muted" style={{ marginBottom: 0 }}>
          {gMastered} konu ✓ tam · {gStar > 0 ? <>⭐ {gStar} konu tekrar bekliyor · </> : null}{grammarTopics.length - gAttempted.length} konu hiç denenmedi.{' '}
          <Link to="/gramer">Gramere git →</Link>
        </p>
      </div>

      {/* Son 14 gün aktivite */}
      <div className="card">
        <h3 style={{ marginTop: 0 }}>Son 14 gün</h3>
        <div className="activity">
          {days.map((x) => (
            <div key={x.d} className="act-col" title={`${x.d}: ${x.n}`}>
              <div className="act-bar" style={{ height: `${Math.max(4, (x.n / maxDay) * 46)}px`, opacity: x.n ? 1 : 0.25 }} />
            </div>
          ))}
        </div>
        <p className="small muted" style={{ marginBottom: 0 }}>Her çubuk bir gün — yükseklik o gün çalıştığın kart sayısı. Boşluk bırakma, seriyi koru.</p>
      </div>

      <div className="callout teal">
        Bu sayfa gerçek ilerlemen. "Üzerinden geçilen" arttıkça, "zor" azaldıkça 60'a yaklaşıyorsun.{' '}
        {hard > 0 && <>Şu an {hard} zor kelimen var — <Link to="/kelime">önce onları kapat.</Link></>}
      </div>

      <CloudSync />
    </>
  )
}

function CloudSync() {
  const [key, setKey] = useState(() => getSyncKey())
  const [input, setInput] = useState('')
  const [status, setStatusState] = useState<SyncStatus>(getSyncStatus())
  useEffect(() => onSyncStatus(setStatusState), [])

  const label: Record<SyncStatus, string> = {
    off: 'kapalı', idle: 'senkron ✓', syncing: 'senkronlanıyor…', error: 'hata ⚠️',
  }

  async function connect() {
    const k = input.trim()
    if (k.length < 6) return
    await connectSync(k)
    setKey(k)
    setInput('')
  }

  return (
    <div className="card">
      <h3 style={{ marginTop: 0 }}>☁️ Cihazlar arası kayıt (isteğe bağlı)</h3>
      {key ? (
        <>
          <p className="small">
            Bağlı — durum: <b>{label[status]}</b>. İlerlemen otomatik olarak buluta yazılıyor. Başka
            cihazda aynı anahtarı gir, kaldığın yerden devam et.
          </p>
          <div className="formrow">
            <button className="btn small" style={{ flex: 'none' }} onClick={() => void pushNow()}>Şimdi yedekle</button>
            <button className="btn ghost small" style={{ flex: 'none' }} onClick={() => { disconnectSync(); setKey('') }}>Bağlantıyı kes</button>
          </div>
        </>
      ) : (
        <>
          <p className="small muted" style={{ marginTop: -4 }}>
            Kendine özel bir anahtar belirle (parola gibi, min 6 karakter). Aynı anahtarı tüm cihazlarında
            kullan. Not: Bu, sunucuda <b>DATABASE_URL</b> ortam değişkeni ayarlıysa çalışır.
          </p>
          <div className="formrow">
            <input type="text" placeholder="gizli anahtarın…" value={input} onChange={(e) => setInput(e.target.value)} />
            <button className="btn small" style={{ flex: 'none' }} disabled={input.trim().length < 6} onClick={() => void connect()}>Bağlan</button>
          </div>
        </>
      )}
    </div>
  )
}
