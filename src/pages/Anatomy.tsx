import { Link } from 'react-router-dom'

interface Section {
  name: string
  q: number
  icon: string
  diff: 1 | 2 | 3 // 1 kolay, 2 orta, 3 zor
  vocab: number // kelimeye bağımlılık %
  note: string
}

const SECTIONS: Section[] = [
  { name: 'Kelime bilgisi', q: 6, icon: '📖', diff: 1, vocab: 100, note: 'Kelimeyi biliyorsan direkt puan. Modadil 1080 tam da bunun için.' },
  { name: 'Çeviri (İng↔Tr)', q: 12, icon: '🔁', diff: 1, vocab: 80, note: 'Sınavın en garantili bölgesi. Kelime + temel gramerle kolayca yapılır.' },
  { name: 'Dil bilgisi', q: 14, icon: '🔧', diff: 2, vocab: 30, note: 'Tense, bağlaç, edat, clause. Çömez serisi tam bunu çözüyor.' },
  { name: 'Cloze test', q: 10, icon: '🧩', diff: 2, vocab: 60, note: '2 paragraf × 5 boşluk. Yarısı kelime, yarısı gramer.' },
  { name: 'Cümle tamamlama', q: 10, icon: '🔗', diff: 2, vocab: 55, note: 'Bağlaç mantığı + anlam. Gramer bilirsen orta zorluk.' },
  { name: 'Okuma paragrafı', q: 15, icon: '📄', diff: 2, vocab: 70, note: '5 metin × 3 soru. Kelime bilirsen anlarsın; asıl düşman süre.' },
  { name: 'Anlam bozan cümle', q: 7, icon: '🎯', diff: 3, vocab: 50, note: 'Paragraftan sırıtan cümleyi bul. Zamir/bağlaç takibi ister.' },
  { name: 'Paragraf tamamlama', q: 6, icon: '🧠', diff: 3, vocab: 55, note: 'Boşluğa uygun cümle. En zorlu bölüm; en sona bırak.' },
]

const DIFF_LABEL = ['', 'Kolay', 'Orta', 'Zor']
const DIFF_COLOR = ['', 'var(--good)', 'var(--warn)', 'var(--danger)']

// 60 puana giden yol: gerçekçi net projeksiyonu (48/80 = 60 puan)
const PATH: { sec: string; q: number; target: number }[] = [
  { sec: 'Kelime bilgisi', q: 6, target: 5 },
  { sec: 'Çeviri', q: 12, target: 10 },
  { sec: 'Dil bilgisi', q: 14, target: 8 },
  { sec: 'Cloze', q: 10, target: 6 },
  { sec: 'Cümle tamamlama', q: 10, target: 6 },
  { sec: 'Okuma', q: 15, target: 9 },
  { sec: 'Anlam bozan', q: 7, target: 2 },
  { sec: 'Paragraf tamamlama', q: 6, target: 2 },
]

export default function Anatomy() {
  const totalQ = SECTIONS.reduce((a, s) => a + s.q, 0)
  const pathNet = PATH.reduce((a, p) => a + p.target, 0)
  const pathScore = Math.round(pathNet * 1.25)

  return (
    <>
      <Link to="/" className="small">← Panel</Link>
      <h1 style={{ marginTop: 8 }}>Sınav Anatomisi</h1>
      <p className="muted small" style={{ marginTop: -6 }}>
        80 soru · 180 dakika · her soru 1,25 puan · yanlış doğruyu götürmez. 60 puan = <b>48 doğru</b>.
        Nerede kolay puan var, nerede zorlanırsın — ve 1080 kelime seni nereye taşır?
      </p>

      <div className="callout teal">
        <b>Önce moral:</b> Bu sınav "zeki misin" testi değil, <b>tanıdık kelime + kalıp</b> testi. Sorular
        her yıl aynı kelimeleri ve yapıları tekrar ediyor (elimizdeki frekans verisi bunu kanıtlıyor).
        Doğru kelimeleri ezberleyen, bu sınavı kasar. Sen doğru yoldasın.
      </div>

      <h2>Bölüm bölüm: kolay mı, zor mu?</h2>
      {SECTIONS.map((s) => (
        <div className="card" key={s.name} style={{ padding: '14px 16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
            <span style={{ fontSize: '1.5rem' }}>{s.icon}</span>
            <b style={{ fontSize: '1rem' }}>{s.name}</b>
            <span className="pill muted">{s.q} soru</span>
            <span className="pill" style={{ marginLeft: 'auto', background: 'transparent', color: DIFF_COLOR[s.diff], border: `1px solid ${DIFF_COLOR[s.diff]}` }}>
              {DIFF_LABEL[s.diff]}
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, margin: '8px 0 4px' }}>
            <span className="small muted" style={{ minWidth: 96 }}>Kelimeye bağlı</span>
            <div className="progress" style={{ flex: 1 }}><div style={{ width: `${s.vocab}%` }} /></div>
            <span className="small mono">{s.vocab}%</span>
          </div>
          <p className="small" style={{ margin: '4px 0 0' }}>{s.note}</p>
        </div>
      ))}

      <h2>60 puana giden gerçekçi yol</h2>
      <p className="muted small" style={{ marginTop: -6 }}>
        Aşağıdaki hedefler ezbere değil — kolay bölgeden çok, zor bölgeden az toplama stratejisi. Toplam{' '}
        <b>{pathNet} net = ~{pathScore} puan</b>.
      </p>
      <div className="card tablewrap">
        <table className="plain">
          <thead>
            <tr><th>Bölüm</th><th>Soru</th><th>Hedef doğru</th><th>Doluluk</th></tr>
          </thead>
          <tbody>
            {PATH.map((p) => (
              <tr key={p.sec}>
                <td>{p.sec}</td>
                <td className="mono">{p.q}</td>
                <td className="mono"><b>{p.target}</b></td>
                <td style={{ width: '38%' }}>
                  <div className="progress"><div style={{ width: `${(p.target / p.q) * 100}%` }} /></div>
                </td>
              </tr>
            ))}
            <tr>
              <td><b>Toplam</b></td>
              <td className="mono">{totalQ}</td>
              <td className="mono"><b style={{ color: 'var(--good)' }}>{pathNet}</b></td>
              <td><b>≈ {pathScore} puan</b></td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Peki 1080 kelimeyi tam bilsem 60 alır mıyım?</h2>
      <div className="card">
        <p style={{ marginTop: 0 }}>
          <b>Dürüst cevap: Tek başına kelime seni 60'ın eşiğine getirir ama son adımı gramer atar.</b>
        </p>
        <p className="small">
          1080 kelimeyi <b>gerçekten</b> bilmek (sınavda görünce anında tanımak) demek:
        </p>
        <ul className="prose" style={{ margin: '0 0 10px' }}>
          <li><b>Kelime + çeviri</b> bölümlerinin neredeyse tamamı → ~15 net</li>
          <li><b>Okuma + cloze</b>'da kelime engelinin kalkması → ~15 net</li>
          <li>Toplam sadece kelimeyle gerçekçi taban: <b>~40-45 puan</b></li>
        </ul>
        <p className="small">
          Kalan 15-20 puan <b>gramerden</b> gelir: tense, bağlaç, edat, relative/noun clause. İyi haber —
          bunlar Çömez serisinin tam konusu ve öğrenilmesi kelimeden <b>daha hızlı</b> (kural sonlu, kelime sonsuz).
        </p>
        <div className="callout" style={{ marginBottom: 0 }}>
          🎯 <b>Formül:</b> 1080 kelime (tam) + Çömez grameri (temel) + çeviri/okuma tekniği ={' '}
          <b>60 rahat, 65-70 ulaşılabilir.</b> Kelime olmadan gramer, gramer olmadan kelime tek başına 60'ı zor geçer;
          ikisi birlikte kesin geçer.
        </div>
      </div>

      <h2>Sınav günü taktiği</h2>
      <div className="card">
        <ul className="prose" style={{ margin: 0 }}>
          <li><b>Sırayı sen belirle:</b> Önce kelime + çeviri + gramer (garantili ~32 soru), sonra okuma, en son paragraf tamamlama.</li>
          <li><b>Takılma:</b> Bir soruda 60 saniyeden fazla durma; işaretle, geç, sonra dön.</li>
          <li><b>Boş bırakma yok:</b> Yanlış götürmüyor — 80 sorunun 80'ini işaretle. Emin olmadıklarında bile ele.</li>
          <li><b>Süre:</b> İlk 20 ≤ 35 dk, çeviri ≤ 20 dk, cloze+tamamlama ≤ 40 dk, okuma ≤ 70 dk, kodlama 15 dk.</li>
        </ul>
      </div>

      <div className="callout teal">
        Teşhiste 24 aldın; bu <b>sıfır değil</b>, üstüne inşa edilecek bir taban. 30 günde kelime motorunu
        çevirip grameri oturtursan 60 fazlasıyla mümkün. Panik değil, <b>plan</b>. Panele dön ve bugünkü işi yap. 💪
      </div>
    </>
  )
}
