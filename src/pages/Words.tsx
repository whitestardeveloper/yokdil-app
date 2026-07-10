import { useMemo, useState } from 'react'
import { allWords, coreWords, wordsForScope, modadilGroups } from '../data'
import type { Word } from '../data/types'
import { useAppState, setState, getState } from '../lib/store'
import type { StudyScope } from '../lib/store'
import { review, isDue, todayStr, type Grade } from '../lib/srs'
import { buildSynGroups } from '../lib/synonyms'

const POS_LABEL: Record<string, string> = {
  v: 'fiil', n: 'isim', adj: 'sıfat', adv: 'zarf', phrasal: 'phrasal verb', 'yapı': 'yapı / edat',
}
const POS_EMOJI: Record<string, string> = {
  v: '⚙️', n: '📦', adj: '🎨', adv: '⏱️', phrasal: '🔗', 'yapı': '🧩',
}

const SCOPES: { key: StudyScope; label: string; hint: string }[] = [
  { key: 'highyield', label: 'Yüksek Getiri', hint: '~625 en çok iş gören · önerilen' },
  { key: 'modadil', label: 'Modadil 1080', hint: 'Tam liste, örnekli' },
  { key: 'core', label: 'Çekirdek', hint: '1080 + Yapılar + çıkmışlar' },
  { key: 'all', label: 'Hepsi', hint: 'Tüm havuz (çok geniş)' },
]

function wordEmoji(w: Word): string {
  return w.emoji || POS_EMOJI[w.pos] || '📘'
}

const POS_YIELD: Record<string, number> = { v: 5, adj: 4, adv: 4, phrasal: 3, 'yapı': 3, n: 1 }

/** SRS önceliği: çıkmış frekansı en güçlü sinyal, sonra kelime türü getirisi, sonra grup. */
function priority(a: Word, b: Word): number {
  const ea = a.examCount ?? 0
  const eb = b.examCount ?? 0
  if (ea !== eb) return eb - ea
  const pa = POS_YIELD[a.pos] ?? 1
  const pb = POS_YIELD[b.pos] ?? 1
  if (pa !== pb) return pb - pa
  return (a.group ?? 999) - (b.group ?? 999)
}

function csvCell(s: string | undefined): string {
  return `"${(s ?? '').replace(/"/g, '""')}"`
}

/** Tüm kelime havuzunu CSV olarak indirir (Excel/Sheets uyumlu, UTF-8 BOM'lu). */
function downloadCsv(): void {
  const header = ['en', 'tr', 'pos', 'syn', 'kaynaklar', 'cikmis_tekrar', 'cikmis_donemler', 'grup', 'cekirdek', 'example', 'exampleTr', 'tier'].join(',')
  const rows = allWords.map((w) =>
    [
      csvCell(w.en), csvCell(w.tr), csvCell(w.pos), csvCell((w.syn || []).join('; ')),
      csvCell((w.sources || []).join('; ')), String(w.examCount || 0), csvCell((w.examPeriods || []).join('; ')),
      String(w.group || ''), w.core ? '1' : '0', csvCell(w.example), csvCell(w.exampleTr), String(w.tier),
    ].join(','),
  )
  const blob = new Blob(['﻿' + header + '\n' + rows.join('\n')], { type: 'text/csv;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'yokdil-kelimeler.csv'
  a.click()
  URL.revokeObjectURL(url)
}

type Mode = 'menu' | 'srs' | 'browse' | 'syn' | 'groups' | 'preview' | 'test'

/** Bir kelime listesinden çoktan seçmeli test soruları üretir. */
function buildTestQuestions(words: Word[], pool: Word[], dir: 'en2tr' | 'tr2en', count: number) {
  const shuffle = <T,>(arr: T[], salt = ''): T[] => {
    const a = [...arr]
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor((i + 1) * pseudoRandom(salt + ':' + i))
      ;[a[i], a[j]] = [a[j], a[i]]
    }
    return a
  }
  const picked = shuffle(words, 'q').slice(0, count)
  return picked.map((w, qi) => {
    const distractors = shuffle(pool.filter((p) => p.id !== w.id && p.pos === w.pos), w.id)
      .slice(0, 3)
    const fallback = shuffle(pool.filter((p) => p.id !== w.id), w.id + 'f').slice(0, 3)
    const others = (distractors.length >= 3 ? distractors : fallback).slice(0, 3)
    const opts = shuffle([w, ...others], w.id + qi)
    return {
      word: w,
      prompt: dir === 'en2tr' ? w.en : firstMeaning(w.tr),
      options: opts.map((o) => (dir === 'en2tr' ? firstMeaning(o.tr) : o.en)),
      answer: opts.findIndex((o) => o.id === w.id),
    }
  })
}

function firstMeaning(tr: string): string {
  return tr.split(/[,;/]/)[0].trim()
}

// Deterministik sözde-rastgele (tohum dizesinden). Her test aynı seed'le tutarlı karışır.
function pseudoRandom(seed: string): number {
  let h = 2166136261
  for (let k = 0; k < seed.length; k++) {
    h ^= seed.charCodeAt(k)
    h = Math.imul(h, 16777619)
  }
  return ((h >>> 0) % 10000) / 10000
}

/** Oturum kuyruğu: kapsamdaki günü gelen tekrarlar + kotayı dolduran yeni kelimeler. */
function buildQueue(): Word[] {
  const s = getState()
  const today = todayStr()
  const newToday = s.newDate === today ? s.newToday : 0
  const remainingNew = Math.max(0, s.newPerDay - newToday)
  const pool = wordsForScope(s.scope)

  const dueCards: Word[] = []
  const fresh: Word[] = []
  for (const w of pool) {
    if (s.known[w.id]) continue // "biliyorum" ile atlananlar
    const c = s.cards[w.id]
    if (c) {
      if (isDue(c)) dueCards.push(w)
    } else {
      fresh.push(w)
    }
  }
  fresh.sort(priority)
  return [...dueCards, ...fresh.slice(0, remainingNew)]
}

export default function Words() {
  const s = useAppState()
  const [mode, setMode] = useState<Mode>('menu')

  const today = todayStr()
  const newToday = s.newDate === today ? s.newToday : 0
  const pool = wordsForScope(s.scope)
  const poolIds = useMemo(() => new Set(pool.map((w) => w.id)), [pool])
  const activePool = pool.filter((w) => !s.known[w.id]) // biliyorum-hariç
  const learnedInScope = activePool.filter((w) => s.cards[w.id]).length
  const knownInScope = pool.filter((w) => s.known[w.id]).length
  const due = activePool.filter((w) => {
    const c = s.cards[w.id]
    return c ? isDue(c) : false
  }).length
  const remainingNew = Math.max(0, s.newPerDay - newToday)
  const totalLearned = Object.keys(s.cards).filter((id) => poolIds.has(id)).length

  const newSet = () => activePool.filter((w) => !s.cards[w.id]).sort(priority).slice(0, s.newPerDay)
  const seenSet = () => activePool.filter((w) => s.cards[w.id])

  if (mode === 'srs') return <SrsSession queue={buildQueue()} title="Günün oturumu" onExit={() => setMode('menu')} />
  if (mode === 'browse') return <Browse onExit={() => setMode('menu')} />
  if (mode === 'syn') return <SynGroups onExit={() => setMode('menu')} />
  if (mode === 'groups') return <GroupStudy onExit={() => setMode('menu')} />
  if (mode === 'preview') return <Preview words={newSet()} title="Bugünün yeni kelimeleri" onExit={() => setMode('menu')} />
  if (mode === 'test') {
    const src = seenSet().length >= 8 ? seenSet() : newSet()
    return <VocabTest words={src} pool={pool} onExit={() => setMode('menu')} />
  }

  const daysLeft = Math.max(1, Math.ceil((new Date(2026, 7, 9).getTime() - Date.now()) / 86400000))
  const perDayNeeded = Math.ceil((activePool.length - learnedInScope) / daysLeft)

  return (
    <>
      <h1>Kelime Antrenörü</h1>
      <p className="muted small" style={{ marginTop: -6 }}>
        Aralıklı tekrar (SRS): bildiğin kelime seyrekleşir, zorlandığın sık gelir. Sınavda gördüğünde
        anlamını hatırlaman için.
      </p>

      {/* Kapsam seçici */}
      <div className="card">
        <h3>🎯 Çalışma kapsamı</h3>
        <div className="scope-grid">
          {SCOPES.map((sc) => {
            const n = wordsForScope(sc.key).length
            const active = s.scope === sc.key
            return (
              <button
                key={sc.key}
                className={`scope-btn ${active ? 'active' : ''}`}
                onClick={() => setState({ scope: sc.key })}
              >
                <span className="sc-label">{sc.label}</span>
                <span className="sc-count">{n.toLocaleString('tr')}</span>
                <span className="sc-hint">{sc.hint}</span>
              </button>
            )
          })}
        </div>
        <p className="small muted" style={{ marginTop: 8 }}>
          Seçili kapsamda <b>{learnedInScope.toLocaleString('tr')}/{activePool.length.toLocaleString('tr')}</b> kelime
          öğrenildi{knownInScope > 0 && <>, <b>{knownInScope}</b> tanesini "biliyorum" ile atladın</>}. Sınava kadar
          bitirmek için günde ~<b>{perDayNeeded}</b> yeni kelime yeter.
        </p>
      </div>

      <div className="statrow">
        <div className="stat"><div className="num">{due}</div><div className="lbl">Tekrar bekliyor</div></div>
        <div className="stat"><div className="num">{remainingNew}</div><div className="lbl">Bugün yeni kalan</div></div>
        <div className="stat"><div className="num">{totalLearned}</div><div className="lbl">Öğrenilen</div></div>
        <div className="stat"><div className="num">{pool.length.toLocaleString('tr')}</div><div className="lbl">Kapsam</div></div>
      </div>

      {/* Önerilen 3 adımlı akış */}
      <div className="card accent-card">
        <h3 style={{ marginTop: 0 }}>Bugünün akışı</h3>
        <p className="small muted" style={{ marginTop: -6 }}>En verimlisi: önce oku, sonra test et, sonra kartlarla pekiştir.</p>
        <div className="flow-steps">
          <button className="flow-step" onClick={() => setMode('preview')}>
            <span className="fs-n">1</span><span className="fs-ico">👁️</span>
            <span className="fs-t">Önizle</span><span className="fs-d">{remainingNew} yeni kelimeyi oku</span>
          </button>
          <button className="flow-step" onClick={() => setMode('test')}>
            <span className="fs-n">2</span><span className="fs-ico">📝</span>
            <span className="fs-t">Test</span><span className="fs-d">Çoktan seçmeli dene</span>
          </button>
          <button className="flow-step" onClick={() => setMode('srs')} disabled={due + remainingNew === 0}>
            <span className="fs-n">3</span><span className="fs-ico">🎴</span>
            <span className="fs-t">Kartlar</span><span className="fs-d">{due + remainingNew} kart · SRS</span>
          </button>
        </div>
      </div>

      <div className="grid2">
        <div className="card">
          <h3>📚 Gruplar (54)</h3>
          <p className="small muted" style={{ marginTop: -6 }}>
            Modadil 1080'i 20'şerlik gruplar hâlinde çalış. Her grupta önizle / test / kart seçeneği.
          </p>
          <button className="btn ghost small" onClick={() => setMode('groups')}>Grupları aç</button>
        </div>
        <div className="card">
          <h3>🔤 Eş Anlamlılar</h3>
          <p className="small muted" style={{ marginTop: -6 }}>
            Aynı manaya gelen kelimeleri bir arada öğren — şıklar hep bunlardan seçilir.
          </p>
          <button className="btn ghost small" onClick={() => setMode('syn')}>Grupları gör</button>
        </div>
      </div>

      <div className="card">
        <h3>Ayar: günlük yeni kelime</h3>
        <div className="formrow" style={{ alignItems: 'center' }}>
          {[25, 35, 45, 60].map((n) => (
            <button key={n} className={`btn small ${s.newPerDay === n ? '' : 'ghost'}`} onClick={() => setState({ newPerDay: n })}>
              {n}
            </button>
          ))}
        </div>
        <p className="small muted">
          Tekrarlar bu sayıya dahil değil. 35 dengeli bir tempodur; sıkışırsan düşür.
        </p>
      </div>

      <div className="card">
        <h3>Sözlük & dışa aktarma</h3>
        <p className="small muted">Tüm havuz {allWords.length.toLocaleString('tr')} kelime · çekirdek {coreWords.length.toLocaleString('tr')}</p>
        <div className="formrow">
          <button className="btn ghost small" style={{ flex: 'none' }} onClick={() => setMode('browse')}>Listeyi aç / ara</button>
          <button className="btn ghost small" style={{ flex: 'none' }} onClick={downloadCsv}>⬇ CSV indir</button>
        </div>
      </div>
    </>
  )
}

function GroupStudy({ onExit }: { onExit: () => void }) {
  const s = useAppState()
  const [active, setActive] = useState<number | null>(null)
  const [action, setAction] = useState<'preview' | 'test' | 'srs' | null>(null)

  if (active != null) {
    const grp = modadilGroups.find((g) => g.group === active)
    if (grp) {
      if (action === 'preview') return <Preview words={grp.words} title={`Grup ${active} · Önizle`} onExit={() => setAction(null)} />
      if (action === 'test') return <VocabTest words={grp.words} pool={allWords} onExit={() => setAction(null)} />
      if (action === 'srs') return <SrsSession queue={grp.words} title={`Grup ${active}`} onExit={() => setAction(null)} freeReview />
      // grup aksiyon menüsü
      const learned = grp.words.filter((w) => s.cards[w.id]).length
      return (
        <>
          <div className="formrow" style={{ alignItems: 'center' }}>
            <button className="btn ghost small" onClick={() => setActive(null)} style={{ flex: 'none' }}>← Gruplar</button>
            <b>Grup {active}</b>
            <span className="small muted" style={{ marginLeft: 'auto' }}>{learned}/{grp.words.length} öğrenildi</span>
          </div>
          <div className="flow-steps" style={{ marginTop: 8 }}>
            <button className="flow-step" onClick={() => setAction('preview')}>
              <span className="fs-ico">👁️</span><span className="fs-t">Önizle</span><span className="fs-d">{grp.words.length} kelimeyi oku</span>
            </button>
            <button className="flow-step" onClick={() => setAction('test')}>
              <span className="fs-ico">📝</span><span className="fs-t">Test</span><span className="fs-d">Çoktan seçmeli</span>
            </button>
            <button className="flow-step" onClick={() => setAction('srs')}>
              <span className="fs-ico">🎴</span><span className="fs-t">Kartlar</span><span className="fs-d">Çevirmeli SRS</span>
            </button>
          </div>
          <div className="card" style={{ marginTop: 12 }}>
            <p className="small muted" style={{ marginTop: 0 }}>Bu grubun kelimeleri</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {grp.words.map((w) => (
                <span key={w.id} className="pill muted">{w.emoji} {w.en}</span>
              ))}
            </div>
          </div>
        </>
      )
    }
  }

  return (
    <>
      <div className="formrow" style={{ alignItems: 'center' }}>
        <button className="btn ghost small" onClick={onExit} style={{ flex: 'none' }}>← Geri</button>
        <b>Modadil 1080 · Gruplar</b>
      </div>
      <p className="small muted">Her grup ~20 kelime. Bir grup seç → önizle, test et, kartlarla pekiştir.</p>
      <div className="group-grid">
        {modadilGroups.map((g) => {
          const learned = g.words.filter((w) => s.cards[w.id]).length
          const pct = Math.round((learned / g.words.length) * 100)
          return (
            <button key={g.group} className="group-cell" onClick={() => setActive(g.group)}>
              <span className="g-no">{g.group}</span>
              <span className="g-meta">{learned}/{g.words.length}</span>
              <span className="g-bar"><span style={{ width: `${pct}%` }} /></span>
            </button>
          )
        })}
      </div>
    </>
  )
}

function Preview({ words, title, onExit }: { words: Word[]; title: string; onExit: () => void }) {
  const [hide, setHide] = useState(false)
  return (
    <>
      <div className="formrow" style={{ alignItems: 'center' }}>
        <button className="btn ghost small" onClick={onExit} style={{ flex: 'none' }}>← Geri</button>
        <b style={{ flex: 1 }}>{title}</b>
        <button className={`btn small ${hide ? '' : 'ghost'}`} style={{ flex: 'none' }} onClick={() => setHide((h) => !h)}>
          {hide ? 'Anlamları göster' : 'Anlamları gizle'}
        </button>
      </div>
      <p className="small muted">{words.length} kelime · dokunmadan yukarı kaydırarak oku. {hide && 'Anlamları gizledin — kendini dene.'}</p>
      {words.length === 0 && <div className="card"><p className="small muted">Bu kapsamda okunacak yeni kelime kalmadı 👍</p></div>}
      {words.map((w) => (
        <div className="study-card" key={w.id}>
          <div className="sc-emoji">{w.emoji}</div>
          <div className="sc-body">
            <div className="sc-head">
              <span className="sc-en">{w.en}</span>
              <span className="pill muted">{POS_LABEL[w.pos]}</span>
              {w.examCount ? <span className="pill warn">🎯 {w.examCount}×</span> : null}
            </div>
            {!hide && (
              <>
                <div className="sc-tr">{w.tr}</div>
                {w.example && <div className="sc-ex serif">{w.example}</div>}
                {w.exampleTr && <div className="sc-extr">{w.exampleTr}</div>}
                {w.syn && w.syn.length > 0 && <div className="sc-syn">≈ {w.syn.join(', ')}</div>}
              </>
            )}
          </div>
        </div>
      ))}
    </>
  )
}

function VocabTest({ words, pool, onExit }: { words: Word[]; pool: Word[]; onExit: () => void }) {
  // Kelime ve havuzu mount'ta dondur: test sırasında store değişse de sorular sabit kalır.
  const [snap] = useState(() => ({ words, pool }))
  const [dir, setDir] = useState<'en2tr' | 'tr2en'>('en2tr')
  const [started, setStarted] = useState(false)
  const count = Math.min(20, snap.words.length)
  const questions = useMemo(() => (started ? buildTestQuestions(snap.words, snap.pool, dir, count) : []), [started, dir, count, snap])
  const [idx, setIdx] = useState(0)
  const [picked, setPicked] = useState<number | null>(null)
  const [correct, setCorrect] = useState(0)
  const [wrong, setWrong] = useState<Word[]>([])

  if (snap.words.length < 4) {
    return (
      <div className="card">
        <div className="formrow" style={{ alignItems: 'center' }}>
          <button className="btn ghost small" onClick={onExit} style={{ flex: 'none' }}>← Geri</button>
        </div>
        <p className="small muted">Test için en az 4 kelime gerekir. Önce birkaç kelime çalış ya da bir grup seç.</p>
      </div>
    )
  }

  if (!started) {
    return (
      <div className="card">
        <div className="formrow" style={{ alignItems: 'center' }}>
          <button className="btn ghost small" onClick={onExit} style={{ flex: 'none' }}>← Geri</button>
          <b>Kelime Testi</b>
        </div>
        <p className="small muted">{count} soru · çoktan seçmeli. Yön seç:</p>
        <div className="formrow">
          <button className={`btn small ${dir === 'en2tr' ? '' : 'ghost'}`} style={{ flex: 1 }} onClick={() => setDir('en2tr')}>İngilizce → Türkçe</button>
          <button className={`btn small ${dir === 'tr2en' ? '' : 'ghost'}`} style={{ flex: 1 }} onClick={() => setDir('tr2en')}>Türkçe → İngilizce</button>
        </div>
        <button className="btn" style={{ width: '100%', marginTop: 8 }} onClick={() => setStarted(true)}>▶ Teste başla</button>
      </div>
    )
  }

  const q = questions[idx]

  function pick(i: number) {
    if (picked !== null) return
    setPicked(i)
    if (i === q.answer) setCorrect((c) => c + 1)
    else {
      setWrong((w) => [...w, q.word])
      // yanlışı SRS'e "tekrar" olarak işle ki kartlarda sık gelsin
      const st = getState()
      setState({ cards: { ...st.cards, [q.word.id]: review(st.cards[q.word.id], 0) } })
    }
  }
  function next() {
    if (idx + 1 < questions.length) { setIdx(idx + 1); setPicked(null) }
    else setIdx(questions.length)
  }

  if (idx >= questions.length) {
    const pct = Math.round((correct / questions.length) * 100)
    return (
      <div className="card" style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '3rem' }}>{pct >= 80 ? '🏆' : pct >= 60 ? '💪' : '📚'}</div>
        <h2>{correct}/{questions.length} doğru · %{pct}</h2>
        {wrong.length > 0 ? (
          <>
            <p className="small">Şu kelimeler kartlarda sık gelecek şekilde işaretlendi:</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, justifyContent: 'center' }}>
              {wrong.map((w) => <span key={w.id} className="pill warn">{w.emoji} {w.en}</span>)}
            </div>
          </>
        ) : <p>Hepsi doğru! 🎯</p>}
        <button className="btn" style={{ marginTop: 12 }} onClick={onExit}>← Geri dön</button>
      </div>
    )
  }

  return (
    <>
      <div className="formrow" style={{ alignItems: 'center', marginBottom: 8 }}>
        <button className="btn ghost small" onClick={onExit} style={{ flex: 'none' }}>✕</button>
        <div className="progress" style={{ flex: 1 }}><div style={{ width: `${(idx / questions.length) * 100}%` }} /></div>
        <span className="small mono" style={{ flex: 'none' }}>{idx + 1}/{questions.length}</span>
      </div>
      <div className="card" style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '2.6rem' }}>{q.word.emoji}</div>
        <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent-ink)' }}>{q.prompt}</div>
        <div className="small muted">{dir === 'en2tr' ? 'anlamı hangisi?' : 'İngilizcesi hangisi?'}</div>
      </div>
      <div className="quiz-opts">
        {q.options.map((opt, i) => {
          let cls = 'quiz-opt'
          if (picked !== null) {
            if (i === q.answer) cls += ' correct'
            else if (i === picked) cls += ' wrong'
          }
          return (
            <button key={i} className={cls} disabled={picked !== null} onClick={() => pick(i)}>
              <span className="letter">{'ABCD'[i]}</span><span>{opt}</span>
            </button>
          )
        })}
      </div>
      {picked !== null && (
        <button className="btn" style={{ width: '100%', marginTop: 12 }} onClick={next}>
          {idx + 1 < questions.length ? 'Sonraki →' : 'Testi bitir'}
        </button>
      )}
    </>
  )
}

function SynGroups({ onExit }: { onExit: () => void }) {
  const [q, setQ] = useState('')
  const groups = useMemo(() => buildSynGroups(coreWords), [])
  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase()
    if (!query) return groups
    return groups.filter(
      (g) =>
        g.label.toLowerCase().includes(query) ||
        g.words.some((w) => w.en.toLowerCase().includes(query) || w.tr.toLowerCase().includes(query)),
    )
  }, [q, groups])

  return (
    <>
      <div className="formrow" style={{ alignItems: 'center' }}>
        <button className="btn ghost small" onClick={onExit} style={{ flex: 'none' }}>← Geri</button>
        <input type="text" placeholder="ara: anlam veya kelime…" value={q} onChange={(e) => setQ(e.target.value)} />
      </div>
      <p className="small muted">{filtered.length} anlamdaş grup (çekirdek kelimeler). Bir gruptakiler sınavda birbirinin yerine kullanılır.</p>
      {filtered.slice(0, 150).map((g, i) => (
        <div className="card" key={i} style={{ padding: '12px 16px' }}>
          <div className="small" style={{ color: 'var(--accent-ink)', fontWeight: 700, marginBottom: 6 }}>
            {g.label} · {g.words.length} kelime
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {g.words.map((w) => (
              <span key={w.id} className="pill" title={w.tr} style={{ background: 'var(--accent-soft)' }}>
                {w.emoji ? w.emoji + ' ' : ''}{w.en}
              </span>
            ))}
          </div>
        </div>
      ))}
      {filtered.length > 150 && <p className="small muted">…ilk 150 grup gösteriliyor, aramayı daralt.</p>}
    </>
  )
}

function SrsSession({ queue, title, onExit, freeReview }: { queue: Word[]; title: string; onExit: () => void; freeReview?: boolean }) {
  useAppState()
  const [session] = useState<Word[]>(() => queue)
  const [idx, setIdx] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [done, setDone] = useState(0)

  const word = session[idx]

  function grade(g: Grade) {
    const s = getState()
    const today = todayStr()
    const isNew = !s.cards[word.id]
    const nextCard = review(s.cards[word.id], g)
    setState((cur) => {
      const newToday = cur.newDate === today ? cur.newToday : 0
      return {
        cards: { ...cur.cards, [word.id]: nextCard },
        newDate: today,
        newToday: newToday + (isNew && !freeReview ? 1 : 0),
        reviewDates: { ...cur.reviewDates, [today]: (cur.reviewDates[today] ?? 0) + 1 },
      }
    })
    setDone((d) => d + 1)
    advance()
  }

  function advance() {
    if (idx + 1 < session.length) {
      setIdx(idx + 1)
      setFlipped(false)
    } else {
      setIdx(session.length)
    }
  }

  /** "Zaten biliyorum": kelimeyi kalıcı olarak kuyruktan çıkar. */
  function markKnown() {
    const st = getState()
    setState({ known: { ...st.known, [word.id]: true } })
    advance()
  }

  if (session.length === 0) {
    return (
      <div className="card">
        <h3>Kart yok</h3>
        <p className="small muted">Bu kapsamda bugünlük tekrar ve yeni kelime kotan doldu. Kapsamı genişletebilir ya da yarın devam edebilirsin.</p>
        <button className="btn" onClick={onExit}>← Geri dön</button>
      </div>
    )
  }

  if (idx >= session.length) {
    return (
      <div className="card" style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '3rem' }}>🎉</div>
        <h2>{title} tamam!</h2>
        <p><b>{done}</b> kart çalıştın. Düzenli gelirsen kalıcı olur.</p>
        <button className="btn" onClick={onExit}>← Geri dön</button>
      </div>
    )
  }

  return (
    <>
      <div className="formrow" style={{ alignItems: 'center', marginBottom: 4 }}>
        <button className="btn ghost small" onClick={onExit} style={{ flex: 'none' }}>✕ Çık</button>
        <div className="progress" style={{ flex: 1 }}>
          <div style={{ width: `${(idx / session.length) * 100}%` }} />
        </div>
        <span className="small mono" style={{ flex: 'none' }}>{idx + 1}/{session.length}</span>
      </div>

      <div className="flashcard" onClick={() => !flipped && setFlipped(true)} style={{ cursor: flipped ? 'default' : 'pointer' }}>
        <div className="fc-emoji">{wordEmoji(word)}</div>
        <div className="fc-tags">
          <span className="pill muted">{POS_LABEL[word.pos]}</span>
          {word.group ? <span className="pill">Grup {word.group}</span> : null}
          {word.examCount ? <span className="pill warn">🎯 {word.examCount}× çıkmış</span> : null}
        </div>
        <div className="word">{word.en}</div>
        {!flipped ? (
          <div className="muted small">anlamı hatırla, sonra karta dokun</div>
        ) : (
          <>
            <div className="tr">{word.tr}</div>
            {word.example && <div className="example">{word.example}</div>}
            {word.exampleTr && <div className="example-tr">{word.exampleTr}</div>}
            {word.syn && word.syn.length > 0 && <div className="syn">≈ {word.syn.join(', ')}</div>}
            {word.examCount ? (
              <div className="small" style={{ color: 'var(--warn)' }}>
                2021'den beri çıkmış sınavlarda {word.examCount} kez: {word.examPeriods?.join(', ')}
              </div>
            ) : null}
            {word.sources && <div className="small muted">📚 {word.sources.join(' · ')}</div>}
          </>
        )}
      </div>

      {!flipped ? (
        <div className="formrow">
          <button className="btn" style={{ flex: 1 }} onClick={() => setFlipped(true)}>Cevabı göster</button>
          <button className="btn ghost" style={{ flex: 'none' }} onClick={markKnown} title="2 saniyede aklına geldiyse atla">
            ✓ Biliyorum
          </button>
        </div>
      ) : (
        <div className="gradebtns">
          <button className="g-again" onClick={() => grade(0)}>Tekrar<span className="sub">bilemedim</span></button>
          <button className="g-hard" onClick={() => grade(3)}>Zor<span className="sub">zorlandım</span></button>
          <button className="g-good" onClick={() => grade(4)}>İyi<span className="sub">bildim</span></button>
          <button className="g-easy" onClick={() => grade(5)}>Kolay<span className="sub">çok kolay</span></button>
        </div>
      )}
    </>
  )
}

function Browse({ onExit }: { onExit: () => void }) {
  const [q, setQ] = useState('')
  const [pos, setPos] = useState<string>('all')
  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase()
    return allWords.filter((w) => {
      if (pos !== 'all') {
        if (pos === 'structure' && w.pos !== 'yapı' && w.pos !== 'phrasal') return false
        if (pos !== 'structure' && w.pos !== pos) return false
      }
      if (!query) return true
      return w.en.toLowerCase().includes(query) || w.tr.toLowerCase().includes(query)
    })
  }, [q, pos])

  return (
    <>
      <div className="formrow" style={{ alignItems: 'center' }}>
        <button className="btn ghost small" onClick={onExit} style={{ flex: 'none' }}>← Geri</button>
        <input type="text" placeholder="ara: kelime veya anlam…" value={q} onChange={(e) => setQ(e.target.value)} />
      </div>
      <div className="formrow">
        {[
          ['all', 'Tümü'], ['v', 'Fiil'], ['n', 'İsim'], ['adj', 'Sıfat'], ['adv', 'Zarf'], ['structure', 'Yapı/Edat'],
        ].map(([k, label]) => (
          <button key={k} className={`btn small ${pos === k ? '' : 'ghost'}`} style={{ flex: 'none' }} onClick={() => setPos(k)}>
            {label}
          </button>
        ))}
      </div>
      <div className="card">
        <p className="small muted">{filtered.length.toLocaleString('tr')} kelime</p>
        {filtered.slice(0, 400).map((w) => (
          <div className="wordrow" key={w.id}>
            <span style={{ flex: 'none' }}>{wordEmoji(w)}</span>
            <span className="en">{w.en}</span>
            <span className="tr">{w.tr}</span>
            {w.examCount ? <span className="pill warn" style={{ flex: 'none' }}>{w.examCount}×</span> : null}
          </div>
        ))}
        {filtered.length > 400 && <p className="small muted">…ilk 400 gösteriliyor, aramayı daralt.</p>}
      </div>
    </>
  )
}
