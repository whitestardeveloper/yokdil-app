import type { Word } from '../data/types'

export interface SynGroup {
  words: Word[]
  /** grubu temsil eden ortak anlam etiketi */
  label: string
}

/** Türkçe anlamı, gruplama için sadeleştirir: ilk anlamı al, ekleri/parantezi at. */
function meaningKey(tr: string): string {
  let s = tr.split(/[,;(/]/)[0].trim().toLowerCase()
  // baştaki edat kalıplarını ("-e", "-den", "-i", "bir şeye") temizle
  s = s.replace(/^-?\w{0,3}\s+/, (m) => (/^-/.test(m) ? '' : m)) // "-e güvenmek" -> "güvenmek"
  s = s.replace(/^-\S+\s*/, '')
  s = s.replace(/[.!?]+$/, '').trim()
  return s
}

/** Kelimeleri paylaştıkları TÜRKÇE anlama göre kümeler — zincirleme birleşme olmadan,
 *  böylece "artırmak → increase / enhance / boost" gibi tutarlı, dar gruplar çıkar. */
export function buildSynGroups(words: Word[]): SynGroup[] {
  const byMeaning = new Map<string, Word[]>()
  for (const w of words) {
    const key = meaningKey(w.tr)
    if (!key || key.length < 2) continue
    if (!byMeaning.has(key)) byMeaning.set(key, [])
    byMeaning.get(key)!.push(w)
  }

  const result: SynGroup[] = []
  for (const [key, ws] of byMeaning) {
    if (ws.length < 2) continue
    // aynı kelime türlerini bir arada tut, sık olanı başa al
    ws.sort((a, b) => a.tier - b.tier || a.en.localeCompare(b.en))
    result.push({ words: ws, label: key })
  }
  // önce büyük ve öğrenmesi değerli gruplar
  result.sort((a, b) => b.words.length - a.words.length || a.label.localeCompare(b.label))
  return result
}
