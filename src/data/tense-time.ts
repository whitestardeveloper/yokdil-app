// Tense'lerin "sinyal" zaman ifadeleri tablosu (Fatih Çömez tarzı).
// Sınavda tense sorusunun cevabı çoğu zaman cümledeki zaman zarfından okunur.

export interface TenseRow {
  tense: string
  tr: string
  formula: string
  signals: string[] // ayırt edici zaman ifadeleri
  use: string
  example: string
  exampleTr: string
  emoji: string
}

export const tenseTable: TenseRow[] = [
  {
    tense: 'Present Simple',
    tr: 'Geniş Zaman',
    formula: 'V1 / V(-s)',
    signals: ['always', 'usually', 'often', 'sometimes', 'rarely', 'never', 'every day/week', 'generally', 'as a rule'],
    use: 'Bilimsel gerçekler, alışkanlıklar, genel doğrular. YÖKDİL\'de bilimsel bir gerçek anlatan cümle neredeyse her zaman Present Simple.',
    example: 'Water boils at 100 degrees Celsius at sea level.',
    exampleTr: 'Su, deniz seviyesinde 100 santigrat derecede kaynar.',
    emoji: '🔁',
  },
  {
    tense: 'Present Continuous',
    tr: 'Şimdiki Zaman',
    formula: 'am/is/are + V-ing',
    signals: ['now', 'right now', 'at the moment', 'currently', 'these days', 'look!', 'listen!'],
    use: 'Şu an sürmekte olan eylem; geçici durumlar; değişen eğilimler (gitgide artıyor/azalıyor).',
    example: 'Global temperatures are currently rising faster than at any point in recorded history.',
    exampleTr: 'Küresel sıcaklıklar şu anda kayıtlı tarihin herhangi bir noktasından daha hızlı yükseliyor.',
    emoji: '⏳',
  },
  {
    tense: 'Present Perfect',
    tr: 'Yakın Geçmiş (etkisi süren)',
    formula: 'have/has + V3',
    signals: ['since + nokta', 'for + süre', 'already', 'yet', 'just', 'ever', 'never', 'so far', 'recently', 'up to now', 'over the past ...'],
    use: 'Geçmişte başlayıp etkisi/sonucu bugüne uzanan olay. ZAMAN NOKTASI belirtilmez. "since" görürsen ana cümle Present Perfect.',
    example: 'Researchers have discovered several new species since the expedition began.',
    exampleTr: 'Araştırmacılar, sefer başladığından beri birkaç yeni tür keşfetti.',
    emoji: '🔗',
  },
  {
    tense: 'Present Perfect Continuous',
    tr: 'Süregelen Yakın Geçmiş',
    formula: 'have/has been + V-ing',
    signals: ['for + süre', 'since + nokta', 'lately', 'recently', 'all day', 'how long...?'],
    use: 'Geçmişte başlayıp hâlâ süren ve süresi vurgulanan eylem.',
    example: 'Scientists have been studying this glacier for over three decades.',
    exampleTr: 'Bilim insanları bu buzulu otuz yılı aşkın süredir inceliyor.',
    emoji: '⏱️',
  },
  {
    tense: 'Simple Past',
    tr: 'Geçmiş Zaman',
    formula: 'V2',
    signals: ['ago', 'yesterday', 'last week/year', 'in + geçmiş yıl (in 1990)', 'when + V2', 'then', 'once'],
    use: 'Geçmişte belirli bir zamanda başlayıp biten olay. NET ZAMAN NOKTASI vardır (in 1990, ... ago).',
    example: 'Alexander Fleming discovered penicillin in 1928.',
    exampleTr: 'Alexander Fleming penisilini 1928\'de keşfetti.',
    emoji: '📅',
  },
  {
    tense: 'Past Continuous',
    tr: 'Şimdiki Zamanın Hikâyesi',
    formula: 'was/were + V-ing',
    signals: ['while', 'as', 'when + V2 (kesen olay)', 'at that time', 'all day yesterday'],
    use: 'Geçmişte bir an sürmekte olan eylem; genellikle başka bir olay tarafından kesilir. "while" + Past Continuous.',
    example: 'While the team was collecting samples, an unexpected storm hit the region.',
    exampleTr: 'Ekip örnek toplarken bölgeyi beklenmedik bir fırtına vurdu.',
    emoji: '🌀',
  },
  {
    tense: 'Past Perfect',
    tr: 'Miş\'li Geçmişin Öncesi',
    formula: 'had + V3',
    signals: ['before', 'after', 'by the time', 'already (geçmişte)', 'when (önce olan)'],
    use: 'Geçmişteki iki olaydan ÖNCE olanı gösterir. "by the time + V2, ... had V3".',
    example: 'By the time the vaccine was approved, the virus had already spread worldwide.',
    exampleTr: 'Aşı onaylandığında virüs çoktan dünya geneline yayılmıştı.',
    emoji: '⏮️',
  },
  {
    tense: 'Future Simple',
    tr: 'Gelecek Zaman',
    formula: 'will + V1',
    signals: ['tomorrow', 'next week/year', 'soon', 'in the future', 'by 2050', 'in + gelecek süre'],
    use: 'Gelecekteki eylem, tahmin, karar. Bilimsel tahminlerde "will" veya "is expected to" sık.',
    example: 'Renewable sources will supply most of the world\'s energy within a few decades.',
    exampleTr: 'Yenilenebilir kaynaklar birkaç on yıl içinde dünya enerjisinin çoğunu sağlayacak.',
    emoji: '➡️',
  },
  {
    tense: 'Future Perfect',
    tr: 'Gelecekte Tamamlanmış',
    formula: 'will have + V3',
    signals: ['by + gelecek zaman', 'by then', 'by the time (gelecek)', 'by 2050'],
    use: 'Gelecekte belirli bir noktaya KADAR tamamlanmış olacak eylem. "by 2050, ... will have V3".',
    example: 'By 2050, engineers will have developed far more efficient solar panels.',
    exampleTr: '2050\'ye kadar mühendisler çok daha verimli güneş panelleri geliştirmiş olacak.',
    emoji: '⏭️',
  },
]

// Zaman uyumu kuralı özetleri (sequence of tenses) — Çömez'in Video 7 konusu.
export const agreementRules: { rule: string; example: string }[] = [
  {
    rule: 'İki eylem geçmişte ardışıksa: önce olan Past Perfect (had V3), sonra olan Simple Past (V2).',
    example: 'The reaction had stopped before the researcher added the catalyst.',
  },
  {
    rule: '"since + Simple Past" → ana cümle Present Perfect (have/has V3).',
    example: 'Emissions have fallen since the new law took effect.',
  },
  {
    rule: '"by the time + Simple Past" → diğer cümle Past Perfect (had V3).',
    example: 'By the time help arrived, the fire had destroyed the lab.',
  },
  {
    rule: '"by the time + Present Simple" → diğer cümle Future Perfect (will have V3).',
    example: 'By the time you graduate, the technology will have changed completely.',
  },
  {
    rule: '"while / as + Past Continuous", ana olay Simple Past ile keser.',
    example: 'While they were testing the engine, it suddenly caught fire.',
  },
]
