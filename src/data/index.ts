import type { Word, GrammarTopic, QuizQuestion } from './types'
import { verbWords } from './words-verbs'
import { verbWords2 } from './words-verbs-2'
import { nounWords } from './words-nouns'
import { nounWords2 } from './words-nouns-2'
import { adjWords } from './words-adj'
import { adjWords2 } from './words-adj-2'
import { structureWords } from './structures'
import { modadilWords } from './words-modadil'
import { prepverbWords } from './words-prepverb'
import { sourceWords, examFrequency, zaferSet } from './words-sources'
import { emojiFor } from '../lib/emoji'
import { emojiOverrides } from './emoji-overrides'
import { grammarTopics1 } from './grammar-1'
import { grammarTopics2 } from './grammar-2'
import { quizzes1 } from './quizzes-1'
import { quizzes2 } from './quizzes-2'

// Tüm kelimeler tek listede — id'ye göre tekilleştirilir (çakışma olursa ilk gelen kalır).
function dedupe(words: Word[]): Word[] {
  const seen = new Set<string>()
  const out: Word[] = []
  for (const w of words) {
    const key = w.id.toLowerCase()
    if (seen.has(key)) continue
    seen.add(key)
    out.push(w)
  }
  return out
}

const zaferWordSet = new Set(zaferSet)
const modadilIds = new Set(modadilWords.map((w) => w.id.toLowerCase()))
const prepverbIds = new Set(prepverbWords.map((w) => w.id.toLowerCase()))

// Koç havuzu = senin için üretilen örnekli/emoji'li akademik set (7 dosya).
const kocPool: Word[] = [
  ...verbWords,
  ...verbWords2,
  ...nounWords,
  ...nounWords2,
  ...adjWords,
  ...adjWords2,
  ...structureWords,
]
const kocIds = new Set(kocPool.map((w) => w.id.toLowerCase()))

// Çıkmış sınavda ≥ bu kadar dönemde geçen kelime "önemli" sayılır ve çekirdeğe girer.
const CORE_FREQ_THRESHOLD = 4

// 690'daki düşük getirili günlük edat+isim kalıpları (in cash, on holiday...) —
// çıkmış sınavda geçmedikçe yüksek-getiri setine alınmaz.
const LOW_YIELD_CATS = new Set([
  'IN + NOUN', 'AT + NOUN', 'BY + NOUN', 'ON + NOUN', 'OUT OF + NOUN',
  'TO + NOUN', 'UNDER + NOUN', 'FOR + NOUN',
])

// Kelime türü getiri ağırlığı (ChatGPT önceliği: fiil > sıfat/zarf > yapı > isim).
const POS_YIELD: Record<string, number> = { v: 5, adj: 4, adv: 4, phrasal: 3, 'yapı': 3, n: 1 }
/** Getiri puanı: çıkmış frekansı ana sinyal, tür ikincil. */
function yieldScore(w: Word): number {
  return (w.examCount ?? 0) * 10 + (POS_YIELD[w.pos] ?? 1)
}

/** Her kelimeye tüm kaynaklarını, çıkmış-sınav frekansını ve çekirdek bayrağını iliştirir.
 *  Bir kelime birden çok kaynakta geçebilir; hepsi listelenir. */
function annotate(w: Word): Word {
  const sources: string[] = []
  const periods = examFrequency[w.id]
  const examCount = periods ? periods.length : 0
  if (modadilIds.has(w.id)) sources.push('Modadil 1080')
  if (prepverbIds.has(w.id)) sources.push('Modadil Yapılar')
  if (examCount) sources.push('Çıkmış sorular')
  if (zaferWordSet.has(w.id)) sources.push('Zafer Hoca')
  if (kocIds.has(w.id)) sources.push('Koç havuzu')
  if (sources.length === 0) sources.push('Koç havuzu')
  // Çekirdek: Modadil 1080 + 690 Yapılar + çok tekrar eden çıkmış kelimeler.
  const core = Boolean(w.core) || examCount >= CORE_FREQ_THRESHOLD
  // Emoji: önce el seçimi override (Modadil çekirdeği), yoksa merkezî eşleyici.
  const emoji = emojiOverrides[w.id] || emojiFor(w.en, w.tr, w.pos)
  return { ...w, sources, examPeriods: periods, examCount, core, emoji }
}

// Sıra önemli: en zengin kaynak (Modadil 1080, sonra Yapılar) önce gelir ki
// aynı kelime çakışırsa onların örnek/emoji/grup verisi korunsun.
const annotated: Word[] = dedupe([
  ...modadilWords,
  ...prepverbWords,
  ...kocPool,
  ...sourceWords,
]).map(annotate)

// Yüksek getiri seti (~625): Modadil'den en iyi 470 + Yapılar'dan en iyi 155,
// getiri puanına göre sıralanıp seçilir. Düşük getirili günlük edat kalıpları elenir.
const HY_MODADIL = 470
const HY_PREPVERB = 155
const topModadil = annotated
  .filter((w) => w.group != null)
  .sort((a, b) => yieldScore(b) - yieldScore(a))
  .slice(0, HY_MODADIL)
const topPrepverb = annotated
  .filter((w) => w.partCat != null && (!LOW_YIELD_CATS.has(w.partCat) || (w.examCount ?? 0) >= 1))
  .sort((a, b) => yieldScore(b) - yieldScore(a))
  .slice(0, HY_PREPVERB)
const highYieldIds = new Set([...topModadil, ...topPrepverb].map((w) => w.id))

export const allWords: Word[] = annotated.map((w) =>
  highYieldIds.has(w.id) ? { ...w, highYield: true } : w,
)

export const coreWords: Word[] = allWords.filter((w) => w.core)
export const highYieldWords: Word[] = allWords.filter((w) => w.highYield)

export const wordsById: Record<string, Word> = Object.fromEntries(
  allWords.map((w) => [w.id, w]),
)

export type StudyScope = 'highyield' | 'modadil' | 'core' | 'all'

/** SRS'in çalışacağı kelime havuzu — kapsam ayarına göre. */
export function wordsForScope(scope: StudyScope): Word[] {
  if (scope === 'all') return allWords
  if (scope === 'core') return coreWords
  if (scope === 'highyield') return highYieldWords
  return allWords.filter((w) => w.sources?.includes('Modadil 1080')) // 'modadil'
}

/** Modadil 1080'in 54 çalışma grubu (sıralı), grup bazlı çalışma için. */
export const modadilGroups: { group: number; words: Word[] }[] = (() => {
  const map = new Map<number, Word[]>()
  for (const w of allWords) {
    if (w.group == null) continue
    if (!map.has(w.group)) map.set(w.group, [])
    map.get(w.group)!.push(w)
  }
  return [...map.entries()].sort((a, b) => a[0] - b[0]).map(([group, words]) => ({ group, words }))
})()

export const grammarTopics: GrammarTopic[] = [...grammarTopics1, ...grammarTopics2].sort(
  (a, b) => a.order - b.order,
)

export const grammarById: Record<string, GrammarTopic> = Object.fromEntries(
  grammarTopics.map((t) => [t.id, t]),
)

export const allQuizzes: QuizQuestion[] = [...quizzes1, ...quizzes2]

export function quizzesForTopic(topicId: string): QuizQuestion[] {
  return allQuizzes.filter((q) => q.topicId === topicId)
}

export const wordCount = allWords.length
export const posBreakdown = {
  verb: allWords.filter((w) => w.pos === 'v').length,
  noun: allWords.filter((w) => w.pos === 'n').length,
  adj: allWords.filter((w) => w.pos === 'adj').length,
  adv: allWords.filter((w) => w.pos === 'adv').length,
  structure: allWords.filter((w) => w.pos === 'yapı' || w.pos === 'phrasal').length,
}
