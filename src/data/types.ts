// Ortak veri tipleri — içerik dosyaları bu tipleri kullanır.

export type Pos = 'v' | 'n' | 'adj' | 'adv' | 'phrasal' | 'yapı'

export interface Word {
  /** benzersiz: ingilizce kelimenin kendisi (küçük harf) */
  id: string
  en: string
  /** Türkçe anlam(lar), virgülle ayrılmış, sınavda geçen anlam önce */
  tr: string
  pos: Pos
  /** Fen/bilim temalı, YÖKDİL tarzı örnek cümle (kaynak-türevi kelimelerde olmayabilir) */
  example?: string
  exampleTr?: string
  /** eş/yakın anlamlılar (sınav şıklarında görülen) */
  syn?: string[]
  /** flashcard için tek bir görsel ipucu emojisi (isteğe bağlı) */
  emoji?: string
  /** kelimenin hangi kaynaklarda geçtiği (ör. "Çıkmış sorular", "Zafer Hoca", "Koç havuzu") */
  sources?: string[]
  /** çıkmış sınavlarda kaç farklı dönemde geçtiği */
  examCount?: number
  /** çıktığı çıkmış-sınav dönemleri (ör. ["2021-1","2023-2"]) */
  examPeriods?: string[]
  /** ezber çekirdeğinde mi? (SRS varsayılan kapsamı bu kelimelerden çalışır) */
  core?: boolean
  /** yüksek getiri: sınırlı sürede en çok iş gören ~625 kelimelik alt küme */
  highYield?: boolean
  /** Modadil 1080 çalışma grubu numarası (1-54) */
  group?: number
  /** 690 yapı listesindeki kategori (ör. "PHRASAL VERBS", "ADJ + PREP") */
  partCat?: string
  /** 1 = en yüksek öncelik (sınavda en sık), 3 = düşük */
  tier: 1 | 2 | 3
}

export interface GrammarExample {
  en: string
  tr: string
  note?: string
}

export interface GrammarTopic {
  id: string
  order: number
  title: string
  /** Fatih Çömez videosundaki karşılık gelen ders numarası/adı */
  videoRef: string
  /** Türkçe, sade, sınav odaklı konu anlatımı. Paragraflar \n\n ile ayrılır.
   *  Satır başında "## " alt başlık, "- " madde işareti olarak render edilir. */
  summary: string
  keyPoints: string[]
  examples: GrammarExample[]
  /** "sınavda bu konu böyle sorulur" ipucu */
  examTip: string
}

export interface QuizQuestion {
  id: string
  topicId: string
  /** Boşluk "----" ile gösterilir (YÖKDİL formatı) */
  question: string
  options: string[]
  /** doğru şıkkın index'i (0-4) */
  answer: number
  /** Türkçe açıklama: neden bu şık, diğerleri neden değil */
  explanation: string
}
