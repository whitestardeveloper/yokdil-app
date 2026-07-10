# YÖKDİL Koç 🎯

9 Ağustos 2026 YÖKDİL Fen sınavı için kişisel hazırlık uygulaması. Teşhis: 24 → Hedef: 60.

Tamamen tarayıcıda çalışır, verin cihazında (localStorage) saklanır, internet gerektirmez.

## İçindekiler

- **Panel** — sınava geri sayım, günün işi, kelime/gün serisi durumu, motivasyon.
- **Kelime** — 945 YÖKDİL Fen kelimesi (fiil/isim/sıfat/zarf/yapı-edat) + SM-2 aralıklı tekrar (SRS). Sınavda gördüğünde anlamını hatırlayacak şekilde çalıştırır. Ayrıca aranabilir sözlük.
- **Gramer** — Fatih Çömez serisinin sırasına göre 18 konu anlatımı (Türkçe, sade) + her konu için mini test. Testten düşük alırsan seni konuya geri yönlendirir.
- **Plan** — 8 Temmuz – 9 Ağustos günü gününe görev listesi (hafta içi ~2s, hafta sonu ~4s), işaretlemeli ilerleme.
- **Karne** — deneme skoru grafiği (hedef çizgili) + hata günlüğü (en sık hata sebebini otomatik gösterir).

## Çalıştırma

```bash
npm install
npm run dev      # http://localhost:5173
```

## Derleme

```bash
npm run build    # dist/ klasörü oluşur
npm run preview  # derlenmiş sürümü önizle
```

## Yayınlama (deploy)

Statik bir SPA — sunucu ayarı gerektirmez (HashRouter kullanır).

**Vercel:** repoyu bağla, framework "Vite" otomatik algılanır. Build komutu `npm run build`, output `dist`.

**Netlify:** Build `npm run build`, publish `dist`.

**GitHub Pages / herhangi bir statik host:** `npm run build` sonrası `dist/` klasörünü yükle.

## İçeriği güncelleme

Tüm içerik `src/data/` altında düz TypeScript dizileri:

- `words-*.ts`, `structures.ts` — kelimeler (tip: `Word`)
- `grammar-*.ts` — konu anlatımları (tip: `GrammarTopic`)
- `quizzes-*.ts` — mini test soruları (tip: `QuizQuestion`)
- `plan.ts` — günlük çalışma planı

Yeni kelime/soru eklemek için ilgili dosyaya nesne eklemen yeterli; tipleri `src/data/types.ts`'de.
