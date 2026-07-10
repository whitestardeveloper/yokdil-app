// 10 Temmuz – 9 Ağustos 2026 çalışma planı (30 gün). Teşhis 24 → Hedef 60.
// Günde ~2 saat (hafta içi), hafta sonu deneme + analiz. Kelime: ~30/gün, Yüksek Getiri 625 kapsamı (bildiğini atla).

export interface PlanTask { text: string; minutes: number }
export interface PlanDay { date: string; phase: string; title: string; tasks: PlanTask[]; milestone?: string }

export const EXAM_DATE = '2026-08-09'
export const START_DATE = '2026-07-10'
export const TARGET_SCORE = 60

export const plan: PlanDay[] = [
  { date: "2026-07-10", phase: "Faz 1 · Temel + Kelime Motoru", title: "Başlangıç + Tense’ler", tasks: [{ text: "Kelime akışı: Önizle → Test → Kartlar (~30 yeni + tekrarlar) · Yüksek Getiri 625", minutes: 40 }, { text: "Sınav Anatomisi sayfasını oku (10 dk). Çömez Video 1-2-3 (Ön hazırlık, Present, Perfect) + aktif özet", minutes: 60 }] },
  { date: "2026-07-11", phase: "Faz · Deneme", title: "CUMARTESİ · Deneme #1", tasks: [{ text: "DENEME: Modadil tam çıkmış sınav — sabah 10:15, 180 dk, kesintisiz", minutes: 180 }, { text: "Kelime: kısa SRS turu", minutes: 25 }], milestone: "Hedef: 32+ puan (teşhis 24 → yükseliş)" },
  { date: "2026-07-12", phase: "Faz · Analiz", title: "PAZAR · Deneme analizi", tasks: [{ text: "DENEME ANALİZİ: video çözümler + hata günlüğü + bilmediğin kelimeleri desteye ekle", minutes: 110 }, { text: "Kelime akışı: Önizle → Test → Kartlar (~30 yeni + tekrarlar) · Yüksek Getiri 625", minutes: 40 }] },
  { date: "2026-07-13", phase: "Faz 1 · Temel + Kelime Motoru", title: "Geçmiş + Gelecek", tasks: [{ text: "Kelime akışı: Önizle → Test → Kartlar (~30 yeni + tekrarlar) · Yüksek Getiri 625", minutes: 40 }, { text: "Çömez Video 4-5-6 (Past’ler, Future) + mini test: past-tenses, future-tenses", minutes: 55 }] },
  { date: "2026-07-14", phase: "Faz 1 · Temel + Kelime Motoru", title: "Zaman uyumu + Modals", tasks: [{ text: "Kelime akışı: Önizle → Test → Kartlar (~30 yeni + tekrarlar) · Yüksek Getiri 625", minutes: 40 }, { text: "Çömez Video 7-8-9 + Zaman İfadeleri Tablosunu ezberle + mini test: modals", minutes: 55 }] },
  { date: "2026-07-15", phase: "Faz 1 · Temel + Kelime Motoru", title: "Passive + Preposition", tasks: [{ text: "Kelime akışı: Önizle → Test → Kartlar (~30 yeni + tekrarlar) · Yüksek Getiri 625", minutes: 40 }, { text: "Çömez Video 10-11 + Passive & Prepositions soru çözümü + mini test", minutes: 60 }] },
  { date: "2026-07-16", phase: "Faz 1 · Temel + Kelime Motoru", title: "Determiner + Conditionals", tasks: [{ text: "Kelime akışı: Önizle → Test → Kartlar (~30 yeni + tekrarlar) · Yüksek Getiri 625", minutes: 40 }, { text: "Çömez Video 12-13-14 + Conditionals soru çözümü + mini test", minutes: 60 }] },
  { date: "2026-07-17", phase: "Faz 1 · Temel + Kelime Motoru", title: "Gerund + Kısaltma", tasks: [{ text: "Kelime akışı: Önizle → Test → Kartlar (~30 yeni + tekrarlar) · Yüksek Getiri 625", minutes: 40 }, { text: "Çömez Video 15-16 + Gerund/Infinitive soru çözümü + mini test", minutes: 55 }] },
  { date: "2026-07-18", phase: "Faz · Deneme", title: "CUMARTESİ · Deneme #2", tasks: [{ text: "DENEME: Modadil tam çıkmış sınav — sabah 10:15, 180 dk, kesintisiz", minutes: 180 }, { text: "Kelime: kısa SRS turu", minutes: 25 }], milestone: "Hedef: 40+ puan (teşhis 24 → yükseliş)" },
  { date: "2026-07-19", phase: "Faz · Analiz", title: "PAZAR · Deneme analizi", tasks: [{ text: "DENEME ANALİZİ: video çözümler + hata günlüğü + bilmediğin kelimeleri desteye ekle", minutes: 110 }, { text: "Kelime akışı: Önizle → Test → Kartlar (~30 yeni + tekrarlar) · Yüksek Getiri 625", minutes: 40 }] },
  { date: "2026-07-20", phase: "Faz 1 · Temel + Kelime Motoru", title: "Relative + Noun Clause", tasks: [{ text: "Kelime akışı: Önizle → Test → Kartlar (~30 yeni + tekrarlar) · Yüksek Getiri 625", minutes: 40 }, { text: "Çömez Video 17-20 + Relative & Noun Clause soru çözümü + mini test", minutes: 65 }] },
  { date: "2026-07-21", phase: "Faz 1 · Temel + Kelime Motoru", title: "Adj/Adv + Bağlaçlar", tasks: [{ text: "Kelime akışı: Önizle → Test → Kartlar (~30 yeni + tekrarlar) · Yüksek Getiri 625", minutes: 40 }, { text: "Çömez Video 21-25 (Adj-Adv, Conjunctions) + mini test: conjunctions", minutes: 65 }] },
  { date: "2026-07-22", phase: "Faz 2 · Çıkmış Sınav Kampı", title: "Okuma taktikleri", tasks: [{ text: "Kelime akışı: Önizle → Test → Kartlar (~30 yeni + tekrarlar) · Yüksek Getiri 625", minutes: 40 }, { text: "Çömez Reading 26-33 (hızlı) + mini test: reading-strategy + Yapılar draili", minutes: 55 }] },
  { date: "2026-07-23", phase: "Faz 2 · Çıkmış Sınav Kampı", title: "İlk 20 soru antrenmanı", tasks: [{ text: "Kelime akışı: Önizle → Test → Kartlar (~30 yeni + tekrarlar) · Yüksek Getiri 625", minutes: 40 }, { text: "Modadil çıkmış 1 sınavın ilk 20 sorusu (30 dk süre) + video çözümleri + hata günlüğü", minutes: 70 }] },
  { date: "2026-07-24", phase: "Faz 2 · Çıkmış Sınav Kampı", title: "Cloze + cümle tamamlama", tasks: [{ text: "Kelime akışı: Önizle → Test → Kartlar (~30 yeni + tekrarlar) · Yüksek Getiri 625", minutes: 40 }, { text: "Aynı sınavın cloze (10) + cümle tamamlama soruları + çözüm analizi", minutes: 70 }] },
  { date: "2026-07-25", phase: "Faz · Deneme", title: "CUMARTESİ · Deneme #3", tasks: [{ text: "DENEME: Modadil tam çıkmış sınav — sabah 10:15, 180 dk, kesintisiz", minutes: 180 }, { text: "Kelime: kısa SRS turu", minutes: 25 }], milestone: "Hedef: 48+ puan (teşhis 24 → yükseliş)" },
  { date: "2026-07-26", phase: "Faz · Analiz", title: "PAZAR · Deneme analizi", tasks: [{ text: "DENEME ANALİZİ: video çözümler + hata günlüğü + bilmediğin kelimeleri desteye ekle", minutes: 110 }, { text: "Kelime akışı: Önizle → Test → Kartlar (~30 yeni + tekrarlar) · Yüksek Getiri 625", minutes: 40 }] },
  { date: "2026-07-27", phase: "Faz 2 · Çıkmış Sınav Kampı", title: "Çeviri günü", tasks: [{ text: "Kelime akışı: Önizle → Test → Kartlar (~30 yeni + tekrarlar) · Yüksek Getiri 625", minutes: 40 }, { text: "Çeviri (12) + paragraf tamamlama soruları — en garantili puanlar + analiz", minutes: 70 }] },
  { date: "2026-07-28", phase: "Faz 2 · Çıkmış Sınav Kampı", title: "Okuma + anlam bozan", tasks: [{ text: "Kelime akışı: Önizle → Test → Kartlar (~30 yeni + tekrarlar) · Yüksek Getiri 625", minutes: 40 }, { text: "Okuma paragrafları + anlam bütünlüğünü bozan cümle + analiz", minutes: 70 }] },
  { date: "2026-07-29", phase: "Faz 2 · Çıkmış Sınav Kampı", title: "Zayıf konu tekrarı", tasks: [{ text: "Kelime akışı: Önizle → Test → Kartlar (~30 yeni + tekrarlar) · Yüksek Getiri 625", minutes: 40 }, { text: "Karnedeki en zayıf 2 gramer konusunu tekrar oku + testlerini yeniden çöz", minutes: 60 }] },
  { date: "2026-07-30", phase: "Faz 2 · Çıkmış Sınav Kampı", title: "İkinci çıkmış: ilk 40", tasks: [{ text: "Kelime akışı: Önizle → Test → Kartlar (~30 yeni + tekrarlar) · Yüksek Getiri 625", minutes: 40 }, { text: "Yeni bir çıkmış sınavın ilk 40 sorusu (85 dk) + analiz", minutes: 90 }] },
  { date: "2026-07-31", phase: "Faz 2 · Çıkmış Sınav Kampı", title: "İkinci çıkmış: son 40", tasks: [{ text: "Kelime akışı: Önizle → Test → Kartlar (~30 yeni + tekrarlar) · Yüksek Getiri 625", minutes: 40 }, { text: "Aynı sınavın son 40 sorusu (85 dk) + hata günlüğü", minutes: 90 }] },
  { date: "2026-08-01", phase: "Faz · Deneme", title: "CUMARTESİ · Deneme #4", tasks: [{ text: "DENEME: Modadil tam çıkmış sınav — sabah 10:15, 180 dk, kesintisiz", minutes: 180 }, { text: "Kelime: kısa SRS turu", minutes: 25 }], milestone: "Hedef: 55+ puan (teşhis 24 → yükseliş)" },
  { date: "2026-08-02", phase: "Faz · Analiz", title: "PAZAR · Deneme analizi", tasks: [{ text: "DENEME ANALİZİ: video çözümler + hata günlüğü + bilmediğin kelimeleri desteye ekle", minutes: 110 }, { text: "Kelime akışı: Önizle → Test → Kartlar (~30 yeni + tekrarlar) · Yüksek Getiri 625", minutes: 40 }] },
  { date: "2026-08-03", phase: "Faz 2 · Çıkmış Sınav Kampı", title: "Kelime yoğun + yapılar", tasks: [{ text: "Kelime akışı: Önizle → Test → Kartlar (~30 yeni + tekrarlar) · Yüksek Getiri 625", minutes: 40 }, { text: "Kelime testi 3 tur (zayıf kelimeler) + Yapılar & Edatlar tier-1 tara", minutes: 55 }] },
  { date: "2026-08-04", phase: "Faz 2 · Çıkmış Sınav Kampı", title: "Üçüncü çıkmış analizi", tasks: [{ text: "Kelime akışı: Önizle → Test → Kartlar (~30 yeni + tekrarlar) · Yüksek Getiri 625", minutes: 40 }, { text: "Çıkmış sınav çöz + tam analiz + kelime çıkarımı", minutes: 80 }] },
  { date: "2026-08-05", phase: "Faz 3 · Simülasyon", title: "Süre stratejisi", tasks: [{ text: "Kelime akışı: Önizle → Test → Kartlar (~30 yeni + tekrarlar) · Yüksek Getiri 625", minutes: 40 }, { text: "Simülasyon analizi + bölüm bazlı süre planını yaz (ilk 20 ≤35dk, çeviri ≤20dk...)", minutes: 60 }] },
  { date: "2026-08-06", phase: "Faz 3 · Simülasyon", title: "Yarım deneme", tasks: [{ text: "Kelime akışı: Önizle → Test → Kartlar (~30 yeni + tekrarlar) · Yüksek Getiri 625", minutes: 40 }, { text: "Çıkmış sınavın ilk 40 sorusu — 85 dk, sabah saatinde", minutes: 90 }] },
  { date: "2026-08-07", phase: "Toparlanma", title: "Hata günlüğünün tamamını son kez oku + tier-1 kelime turu (hafif gün)", tasks: [{ text: "Hata günlüğü final + kelime turu", minutes: 60 }, { text: "Kelime: kısa SRS", minutes: 25 }] },
  { date: "2026-08-08", phase: "Faz 4 · Toparlanma", title: "CUMARTESİ · Son hafif deneme", tasks: [{ text: "DENEME: en yeni çıkmış sınav — 10:15, tam koşul. Akşam ERKEN uyu", minutes: 180 }, { text: "Kimlik + sınav belgesi + bina kontrolü", minutes: 10 }], milestone: "Hedef: 55-60 bandı" },
  { date: "2026-08-09", phase: "Faz 4 · Sınav", title: "PAZAR · SINAV GÜNÜ 🎯", tasks: [{ text: "Sabah: hafif kahvaltı + 10 dk kelime göz gezdirme", minutes: 15 }, { text: "SINAV 10:15 — 80 sorunun 80’ini işaretle. Takılırsan geç, sonra dön", minutes: 180 }], milestone: "Hedef: 60 🎯" },
]

export function daysToExam(): number {
  const now = new Date()
  const exam = new Date(2026, 7, 9, 10, 15)
  return Math.max(0, Math.ceil((exam.getTime() - now.getTime()) / 86400000))
}

export function todayPlan(dateStr: string): PlanDay | undefined {
  return plan.find((p) => p.date === dateStr)
}
