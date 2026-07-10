import type { GrammarTopic } from './types'

export const grammarTopics2: GrammarTopic[] = [
  {
    id: "determiners",
    order: 10,
    title: "Determiners & Quantifiers",
    videoRef: "Video 12",
    summary:
      "Determiner dediğimiz şey, ismin önüne gelip o ismi belirleyen kelimelerdir: a/an, the, some, any, many, much, few, little, a few, a little, each, every, all, both, either, neither, most, several... Sınavda bu konu neredeyse her yıl 1-2 soru getirir ve mantığı çok basittir: önce boşluktan sonraki isme bak. İsim sayılabilir mi, sayılamaz mı? Tekil mi, çoğul mu? Cevabın anahtarı budur.\n\n## Sayılabilir / Sayılamaz Ayrımı\nSayılabilir çoğul isimlerle: many, few, a few, several, a number of, both. Sayılamaz isimlerle: much, little, a little, a great deal of, an amount of. İkisiyle de kullanılanlar: some, any, all, most, a lot of, plenty of. Yani boşluktan sonra \"water, information, energy, research\" gibi sayılamaz bir isim varsa many gelemez, much veya little gelir. \"experiments, cells, studies\" gibi çoğul isim varsa much gelemez.\n\n## few / a few ve little / a little Farkı\nBurası püf noktası: a few = birkaç (olumlu, var demek), few = çok az (olumsuz, neredeyse yok demek). Aynı şekilde a little = biraz (olumlu), little = çok az (olumsuz). Cümlenin anlamı olumluysa \"a few / a little\", olumsuz bir hava varsa \"few / little\" seçilir.\n\n## Tekil İsim İsteyenler\neach, every, either, neither ve \"another\" kendinden sonra TEKİL isim ister: each student, every experiment. \"each of / neither of\" derken ise arkadan çoğul isim gelir ama fiil tekil kalır: Each of the samples was tested.\n\n## Fen Metinlerinde Dikkat\nYÖKDİL Fen metinlerinde sık geçen sayılamaz isimleri ezberle: information, research, evidence, equipment, knowledge, energy, pollution, data (genelde sayılamaz muamelesi görür). Boşluk sorusunda şıklarda hem many hem much varsa, isme bakıp saniyeler içinde eleme yaparsın. Bu konu ezber değil, kontrol konusudur: isme bak, say/sayama kararını ver, şıkları ele.",
    keyPoints: [
      "Önce boşluktan sonraki isme bak: sayılabilir çoğulsa many/few/several, sayılamazsa much/little.",
      "a few = birkaç (olumlu); few = çok az (olumsuz). a little = biraz (olumlu); little = çok az (olumsuz).",
      "each, every, either, neither, another → arkasından TEKİL isim gelir.",
      "each of / neither of + çoğul isim, ama fiil TEKİL: Each of the samples was...",
      "information, research, evidence, equipment, knowledge sayılamaz — many ile asla kullanılmaz.",
      "some olumlu cümlede, any olumsuz cümle ve soruda tercih edilir."
    ],
    examples: [
      {
        en: "Many experiments have been conducted to test this hypothesis.",
        tr: "Bu hipotezi test etmek için birçok deney yapılmıştır.",
        note: "experiments sayılabilir çoğul → many."
      },
      {
        en: "There is little evidence that this drug is effective.",
        tr: "Bu ilacın etkili olduğuna dair çok az kanıt vardır.",
        note: "evidence sayılamaz + olumsuz anlam → little (a little değil)."
      },
      {
        en: "Each sample was analysed under the microscope.",
        tr: "Her bir örnek mikroskop altında incelendi.",
        note: "each + tekil isim + tekil fiil."
      },
      {
        en: "---- research has been carried out on renewable energy in recent years.",
        tr: "Son yıllarda yenilenebilir enerji üzerine ---- araştırma yapılmıştır.",
        note: "Doğru cevap: Much / A great deal of. Çünkü research sayılamaz bir isimdir; many, a number of, several gibi şıklar elenir."
      },
      {
        en: "A few scientists still disagree with this theory.",
        tr: "Birkaç bilim insanı hâlâ bu teoriye katılmıyor.",
        note: "scientists sayılabilir çoğul + \"birkaç\" olumlu anlam → a few."
      }
    ],
    examTip:
      "Sınavda şıklarda many/much/few/little bir arada verilir ve tek yapman gereken boşluktan sonraki ismin sayılıp sayılamadığına bakmaktır. research, information, evidence gibi tuzak sayılamaz isimler Fen metinlerinin klasiğidir. İsme bakmadan asla şık işaretleme."
  },
  {
    id: "conditionals",
    order: 11,
    title: "Conditionals (If Clauses)",
    videoRef: "Video 13-14",
    summary:
      "If clause yani koşul cümleleri, YÖKDİL'in en sevdiği gramer konularından biridir çünkü formülü nettir: if'li tarafa bakarsın, ana cümlenin zamanını bulursun (ya da tersi). Üç ana tip vardır ve her tipin ikili kombinasyonu ezberlenir.\n\n## Type 1 — Gerçek / Olası Durum\nIf + geniş zaman (V1), ana cümle: will / can / may + V1. \"If you heat water to 100°C, it boils / it will boil.\" Bilimsel genel gerçeklerde iki taraf da geniş zaman olabilir (Type 0). Fen metinlerinde bu çok çıkar: doğa kanunları hep Type 0/1 ile anlatılır.\n\n## Type 2 — Şimdiki Hayali Durum\nIf + geçmiş zaman (V2), ana cümle: would / could / might + V1. \"If we had enough funding, we would expand the study.\" Anlamı geçmiş DEĞİLDİR; şu an için hayal kurmadır: param olsaydı (şu an yok).\n\n## Type 3 — Geçmiş Hayali Durum\nIf + had V3, ana cümle: would/could/might + have V3. \"If the experiment had been repeated, the results would have been more reliable.\" Geçmişte olmamış bir şeyin hayali kurulur.\n\n## Püf Noktası: Çapraz Kontrol\nSınav sorusunda boşluk ya if tarafındadır ya ana cümlede. Dolu tarafa bak, tipini teşhis et, boşluğa formülün diğer yarısını koy. if tarafında ASLA will/would olmaz (kibarlık kalıpları hariç) — şıklarda \"if ... will\" görürsen direkt ele.\n\n## unless, provided that, as long as\nunless = if ... not (\"-medikçe\"): Unless you study, you will fail = çalışmazsan kalırsın. unless zaten olumsuzluk taşıdığı için arkasından gelen fiil olumludur. provided that / providing / as long as / on condition that = \"şartıyla\" anlamında if gibi davranır. in case = \"-e karşı, ihtimaline karşı\". even if = \"-se bile\". Bu bağlaçlar şıklara serpiştirilir; anlamdan doğrusunu seçersin.",
    keyPoints: [
      "Type 1: If + V1 → will/can + V1 (gerçek olasılık, bilimsel gerçeklerde iki taraf da geniş zaman olabilir).",
      "Type 2: If + V2 → would/could + V1 (şu ana dair hayal; anlam geçmiş değildir).",
      "Type 3: If + had V3 → would have V3 (geçmişe dair hayal/pişmanlık).",
      "If tarafında will/would görürsen o şık %99 yanlıştır — direkt ele.",
      "unless = if not; arkasından olumlu fiil gelir, anlamı \"-medikçe\".",
      "provided that / as long as = \"şartıyla\"; in case = \"ihtimaline karşı\"; even if = \"-se bile\".",
      "Boşluk hangi taraftaysa dolu tarafın zamanına bakıp formülün diğer yarısını seç."
    ],
    examples: [
      {
        en: "If water is heated to 100°C, it boils.",
        tr: "Su 100°C'ye ısıtılırsa kaynar.",
        note: "Type 0 — bilimsel gerçek: iki taraf da geniş zaman."
      },
      {
        en: "If the vaccine had been developed earlier, thousands of lives would have been saved.",
        tr: "Aşı daha erken geliştirilmiş olsaydı, binlerce hayat kurtarılmış olurdu.",
        note: "Type 3: had V3 → would have V3."
      },
      {
        en: "If researchers had more funding, they could conduct larger clinical trials.",
        tr: "Araştırmacıların daha fazla fonu olsaydı, daha büyük klinik denemeler yapabilirlerdi.",
        note: "Type 2: V2 (had) → could + V1."
      },
      {
        en: "If the temperature ---- above the critical level, the reactor will shut down automatically.",
        tr: "Sıcaklık kritik seviyenin üzerine ---- reaktör otomatik olarak kapanacaktır.",
        note: "Doğru cevap: rises. Ana cümlede will var → Type 1 → if tarafı geniş zaman. \"will rise\" şıkkı tuzaktır; if tarafına will gelmez."
      },
      {
        en: "Unless the data are verified, the results cannot be published.",
        tr: "Veriler doğrulanmadıkça sonuçlar yayımlanamaz.",
        note: "unless = if not; fiil olumlu kalır."
      }
    ],
    examTip:
      "Sınavda boşluğun karşı tarafındaki fiile bak: would have V3 görüyorsan boşluğa had V3, will görüyorsan geniş zaman gelir. Şıklarda if tarafına will/would koyan tuzaklar hep vardır, onları saniyesinde ele. unless'li soruda cümleye \"-medikçe\" diye çevirip anlam kontrolü yap."
  },
  {
    id: "gerund-infinitive",
    order: 12,
    title: "Gerund & Infinitive",
    videoRef: "Video 15",
    summary:
      "Gerund = Ving (fiilin isim hali: swimming, analysing), infinitive = to V1 (to swim, to analyse). Türkçedeki karşılığı \"-me/-ma\" ve \"-mek/-mak\" ekleridir: smoking = sigara içme(k), to understand = anlamak. Sınavda bu konu iki şekilde gelir: hangi fiilden sonra hangisi gelir, ve edatlardan (preposition) sonra ne gelir.\n\n## Altın Kural 1: Edattan Sonra Ving\nin, on, at, of, about, for, without, by, before, after gibi bir edattan sonra fiil gelecekse MUTLAKA Ving gelir: interested in studying, capable of producing, without damaging. Bu tek kural sınavda birçok soruyu çözer.\n\n## Altın Kural 2: Özne Pozisyonunda Ving\nCümle fiille başlıyorsa ve o fiil öznenin kendisiyse Ving kullanılır: Smoking causes cancer. Recycling reduces waste. Cümle başında yalın fiil (Smoke causes...) göremezsin.\n\n## Gerund İsteyen Fiiller\nenjoy, avoid, finish, consider, suggest, deny, mind, keep, involve, risk, postpone, delay + Ving: \"The process involves heating the mixture.\"\n\n## Infinitive İsteyen Fiiller\nwant, decide, plan, hope, expect, agree, refuse, manage, fail, tend, attempt, aim + to V1: \"Scientists aim to develop a new method.\" Ayrıca amaç bildirirken to V1 / in order to V1 / so as to V1 kullanılır: \"Samples were frozen to preserve them\" (korumak İÇİN).\n\n## Tuzaklar\n- stop Ving = o işi bırakmak; stop to V1 = başka bir iş yapmak için durmak.\n- to bazen edattır (preposition), o zaman arkasına Ving gelir: look forward to seeing, be used to working, object to being, devoted to improving. \"be used to Ving\" (alışkın olmak) ile \"used to V1\" (eskiden yapardı) karışmasın.\n- let, make, have (ettirgen) sonrası yalın fiil: make it work.\nSınavda şıklarda aynı fiilin dört hali verilir (develop / developing / to develop / developed); boşluktan önceki kelimeye bakıp kuralı uygularsın.",
    keyPoints: [
      "Edattan (in, of, by, without, for...) sonra fiil MUTLAKA Ving olur.",
      "Cümlenin öznesi bir eylemse Ving ile başlar: Smoking causes cancer.",
      "enjoy, avoid, consider, suggest, involve, deny, mind → Ving ister.",
      "want, decide, plan, aim, manage, fail, tend, refuse → to V1 ister.",
      "Amaç anlatan \"için\" = to V1 / in order to V1 / so as to V1.",
      "look forward to, be used to, object to, devoted to → buradaki to edattır, arkasına Ving gelir.",
      "stop Ving = bırakmak; stop to V1 = yapmak için durmak."
    ],
    examples: [
      {
        en: "Recycling plastic waste helps to protect the environment.",
        tr: "Plastik atıkları geri dönüştürmek çevreyi korumaya yardımcı olur.",
        note: "Özne pozisyonunda eylem → Ving (Recycling)."
      },
      {
        en: "The new technique is capable of detecting very small tumours.",
        tr: "Yeni teknik çok küçük tümörleri tespit edebilmektedir.",
        note: "of edatından sonra Ving: of detecting."
      },
      {
        en: "Researchers decided to repeat the experiment under different conditions.",
        tr: "Araştırmacılar deneyi farklı koşullar altında tekrarlamaya karar verdiler.",
        note: "decide + to V1."
      },
      {
        en: "The samples were kept at low temperatures ---- contamination.",
        tr: "Örnekler kontaminasyonu ---- düşük sıcaklıklarda saklandı.",
        note: "Doğru cevap: to prevent (veya in order to prevent). Amaç bildiriyor: \"önlemek için\". preventing şıkkı tuzaktır; amaç anlamı to V1 ister."
      },
      {
        en: "This method involves measuring the oxygen level in the blood.",
        tr: "Bu yöntem, kandaki oksijen seviyesini ölçmeyi içerir.",
        note: "involve + Ving."
      },
      {
        en: "Scientists are looking forward to publishing their findings.",
        tr: "Bilim insanları bulgularını yayımlamayı dört gözle bekliyor.",
        note: "look forward to → buradaki to edat, arkasına Ving gelir."
      }
    ],
    examTip:
      "Şıklarda aynı fiilin dört hali (V1 / Ving / to V1 / V3) varsa bu bir gerund-infinitive sorusudur: boşluktan hemen önceki kelimeye bak. Edat varsa Ving, amaç anlamı (\"...mek için\") varsa to V1 seç. \"to\"dan sonra otomatik yalın fiil koyma; look forward to / be used to gibi kalıplarda to edattır."
  },
  {
    id: "reduction",
    order: 13,
    title: "Kısaltma Çözüm Tekniği (Reduced Clauses)",
    videoRef: "Video 16",
    summary:
      "Kısaltma (reduction), yan cümledeki özne ve yardımcı fiilin atılıp fiilin Ving veya V3 haline dönüştürülmesidir. YÖKDİL metinleri kısaltma doludur; bunları çözemezsen cümleyi çeviremezsin. Sınavda hem boşluk sorusu olarak hem de okuma parçalarını anlamak için kritiktir.\n\n## Temel Mantık: Aktif → Ving, Pasif → V3\nTek kural her şeyi çözer: kısaltılan fiil ile ismin arasındaki ilişki aktifse (isim o işi YAPIYORSA) Ving, pasifse (isim o işe MARUZ kalıyorsa) V3 kullanılır.\n- The students who study hard → The students studying hard (öğrenciler çalışıyor → aktif → Ving)\n- The method which is used in this study → The method used in this study (yöntem kullanılıyor → pasif → V3)\n\n## Relative Clause Kısaltması\nwho/which/that + fiil yapısında: who/which atılır; fiil aktifse Ving, pasifse V3 kalır. \"the gases which are emitted by factories\" → \"the gases emitted by factories\". İsimden hemen sonra gelen Ving/V3 gördüğünde, oraya zihninde \"which is / which are\" ekleyerek oku — cümle çözülür.\n\n## Zarf Cümleciği Kısaltması\nwhen, while, after, before, since ile kurulan cümlelerde iki taraftaki özne AYNIYSA kısaltma yapılır: \"While she was working in the lab, she noticed...\" → \"While working in the lab, she noticed...\". \"After the data were collected\" → \"After being collected\" veya \"Having been collected\". \"Having V3\" yapısı, ana fiilden ÖNCE bitmiş bir eylemi gösterir: \"Having completed the tests, the team published the results.\" (testleri bitirdikten sonra).\n\n## Çeviri Taktiği\nCümlede virgülle ayrılmış Ving/V3 kümesi gördüğünde bunlar ana fiil DEĞİLDİR; ana fiili bulmak için virgül dışına çık. Ving kümesini \"-erek / -en / -dığında\", V3 kümesini \"-ilen / -ilmiş\" diye çevir: \"Published in 2020, the study...\" = \"2020'de yayımlanan çalışma...\". Sınavda boşluk isimden sonra geliyorsa ve şıklarda Ving ile V3 yarışıyorsa tek soru sor: isim bu işi yapıyor mu, yoksa maruz mu kalıyor?",
    keyPoints: [
      "Tek altın kural: isim işi YAPIYORSA Ving (aktif), işe MARUZ kalıyorsa V3 (pasif).",
      "who/which/that kısaltmasında zamir atılır: the method (which is) used → the method used.",
      "İsimden hemen sonra gelen Ving/V3'ü zihninde \"which is/are\" ekleyerek oku.",
      "Zarf kısaltması sadece iki cümlenin öznesi AYNIYSA yapılır: While working in the lab, she...",
      "Having V3 = ana fiilden önce bitmiş eylem: Having completed the tests, they published...",
      "Virgüller arasındaki Ving/V3 kümesi ana fiil değildir; ana fiili virgül dışında ara."
    ],
    examples: [
      {
        en: "The gases emitted by factories contribute to global warming.",
        tr: "Fabrikalar tarafından salınan gazlar küresel ısınmaya katkıda bulunur.",
        note: "= the gases which are emitted... Gazlar salınıyor (pasif) → V3."
      },
      {
        en: "Students preparing for the exam should focus on vocabulary.",
        tr: "Sınava hazırlanan öğrenciler kelimeye odaklanmalıdır.",
        note: "= students who are preparing... Öğrenciler hazırlanıyor (aktif) → Ving."
      },
      {
        en: "While analysing the data, the researchers noticed an unexpected pattern.",
        tr: "Verileri analiz ederken araştırmacılar beklenmedik bir örüntü fark ettiler.",
        note: "While they were analysing → özne aynı olduğu için kısaltılmış."
      },
      {
        en: "The vaccine ---- by the research team proved highly effective in clinical trials.",
        tr: "Araştırma ekibi tarafından ---- aşı, klinik denemelerde son derece etkili çıktı.",
        note: "Doğru cevap: developed. Aşı geliştirilir, geliştirmez → pasif ilişki → V3. developing şıkkı tuzaktır."
      },
      {
        en: "Having tested the samples, the scientists reported their findings.",
        tr: "Örnekleri test ettikten sonra bilim insanları bulgularını rapor ettiler.",
        note: "Having V3 → önce test bitti, sonra rapor edildi."
      }
    ],
    examTip:
      "Boşluk bir isimden hemen sonra geliyorsa ve şıklarda developing/developed gibi ikili varsa, kendine tek soru sor: \"İsim bu işi yapıyor mu, yoksa ona mı yapılıyor?\" Yapıyorsa Ving, yapılıyorsa V3. Okuma parçalarında da isimden sonraki Ving/V3'e zihninde \"which is\" ekleyerek oku; uzun cümleler anında çözülür."
  },
  {
    id: "relative-clause",
    order: 14,
    title: "Relative Clause",
    videoRef: "Video 17-19",
    summary:
      "Relative clause (sıfat cümleciği), bir ismi arkadan gelen cümleyle tanımlar; Türkçeye \"-en, -an, -dığı\" ekleriyle çevrilir: \"the scientist who discovered penicillin\" = penisilini keşfedEN bilim insanı. YÖKDİL'de hem doğrudan boşluk sorusu hem de okuma cümlelerini çözmenin anahtarıdır.\n\n## Hangi Zamir Ne Zaman?\n- who → insan için (the researcher who...)\n- which → insan dışı her şey için (the cell which...)\n- that → ikisinin yerine de geçer (ama virgülden ve edattan sonra KULLANILMAZ)\n- whose → sahiplik, \"-in ...i\": the scientist whose theory... (teorisi ... olan bilim insanı). whose'dan sonra mutlaka isim gelir.\n- whom → who'nun nesne hali; özellikle edatla birlikte: with whom, for whom.\n- where → yer isimlerinden sonra (the laboratory where...), when → zaman isimlerinden sonra (the year when...), why → the reason why.\n\n## Püf Noktası: where mi which mi?\nBoşluktan sonraki cümle EKSİKSİZ (özne+fiil+nesne tam) ise where/when gelir; cümlede özne ya da nesne EKSİKSE which/who gelir. \"the city ---- the conference was held\" → arkası tam cümle → where. \"the city ---- hosts the conference\" → özne eksik → which. Sınavın en klasik tuzağı budur.\n\n## Edat + which/whom\n\"in which, on which, to whom, of which\" kalıpları YÖKDİL'in favorisidir: \"the conditions in which bacteria grow\" (bakterilerin içinde büyüdüğü koşullar). in which çoğu zaman where ile eş değerdir. Edattan sonra that ASLA gelmez: in that ✗ (bu anlamda), in which ✓.\n\n## Virgüllü / Virgülsüz\nVirgülsüz (defining) cümle ismi tanımlar, bilgi zorunludur. Virgüllü (non-defining) ek bilgi verir ve burada that kullanılamaz, zamir atılamaz: \"Water, which covers 70% of the Earth, ...\". Ayrıca \", which\" bazen önceki cümlenin TAMAMINI kasteder: \"The experiment failed, which surprised everyone.\" (bu durum herkesi şaşırttı). Bir de \"most of which / some of whom\" kalıpları: \"hundreds of species, most of which are endangered\" — iki cümleyi bağlarken şıklarda \"most of them\" tuzağı verilir; bağlaçsız iki cümle \"them\" ile bağlanamaz, \"which\" gerekir.",
    keyPoints: [
      "who = insan, which = insan dışı, that = ikisi de (ama virgülden ve edattan sonra that yasak).",
      "whose = sahiplik (\"-in ...i\") ve arkasından mutlaka isim gelir.",
      "Boşluktan sonraki cümle tam ise where/when, eksik (öznesiz/nesnesiz) ise which/who.",
      "Edat + which/whom: in which, to whom... — in which çoğu zaman where demektir.",
      "Virgüllü relative clause'da that kullanılamaz.",
      "\", which\" önceki cümlenin tamamına gönderme yapabilir.",
      "İki cümleyi bağlarken \"most of them\" değil \"most of which/whom\" gerekir."
    ],
    examples: [
      {
        en: "Marie Curie was the first scientist who won two Nobel Prizes.",
        tr: "Marie Curie, iki Nobel Ödülü kazanan ilk bilim insanıydı.",
        note: "İnsan → who; Türkçeye \"-an/-en\" ile çevrilir."
      },
      {
        en: "The laboratory where the tests were conducted is fully equipped.",
        tr: "Testlerin yapıldığı laboratuvar tam donanımlıdır.",
        note: "Yer ismi + arkası tam cümle → where (= in which)."
      },
      {
        en: "Einstein, whose theories changed physics, received the Nobel Prize in 1921.",
        tr: "Teorileri fiziği değiştiren Einstein, 1921'de Nobel Ödülü aldı.",
        note: "Sahiplik: whose + isim (whose theories)."
      },
      {
        en: "The ocean contains thousands of species, ---- have not yet been identified.",
        tr: "Okyanus, ---- henüz tanımlanmamış binlerce tür barındırır.",
        note: "Doğru cevap: most of which. \"most of them\" tuzaktır; iki cümle bağlaçsız them ile bağlanamaz, which gerekir."
      },
      {
        en: "The conditions in which these bacteria survive are extremely harsh.",
        tr: "Bu bakterilerin hayatta kaldığı koşullar son derece zorludur.",
        note: "Edat + which kalıbı: in which ≈ where."
      },
      {
        en: "The experiment produced inconsistent results, which forced the team to revise their method.",
        tr: "Deney tutarsız sonuçlar verdi, ki bu da ekibi yöntemini gözden geçirmeye zorladı.",
        note: "\", which\" önceki cümlenin tamamını kasteder."
      }
    ],
    examTip:
      "Boşluktan sonrasını oku: cümle tamsa where/when, öznesi veya nesnesi eksikse which/who seç — bu kontrol soruların çoğunu çözer. Virgülden sonra that gören şıkkı ve iki cümleyi \"them/it\" ile bağlayan şıkkı direkt ele. whose gördüğünde arkasında isim var mı diye bak."
  },
  {
    id: "noun-clause",
    order: 15,
    title: "Noun Clause",
    videoRef: "Video 20",
    summary:
      "Noun clause (isim cümleciği), bir cümlenin özne veya nesne görevini üstlenen yan cümledir. Türkçeye \"-dığını, -eceğini, -ip -mediğini\" diye çevrilir: \"Scientists know that the climate is changing\" = Bilim insanları iklimin değişTİĞİNİ biliyor. YÖKDİL'de hem boşluk sorusu hem çeviri sorularının belkemiğidir.\n\n## Üç Kurucu\n- that: düz aktarım, \"-dığını\": They believe that the drug works.\n- whether / if: \"-ip -mediğini\" (iki ihtimal): They tested whether the drug works. (işe yarayıp yaramadığını)\n- soru kelimeleri (what, why, how, when, where, who): What causes cancer is still unknown. (kansere neyin sebep olduğu)\n\n## En Kritik Kural: Düz Cümle Dizilişi\nNoun clause içinde SORU DEVRİKLİĞİ OLMAZ. Soru kelimesinden sonra özne + fiil sırası gelir: \"how the brain works\" ✓, \"how does the brain work\" ✗. Sınav şıklarında devrik yapı (does/is öne alınmış) verilirse direkt elenir. Bu, konunun bir numaralı tuzağıdır.\n\n## Özne Olarak Noun Clause\nCümle That/What/Whether ile başlayabilir ve bu blok tekil sayılır: \"That the Earth is warming is undeniable.\" / \"What matters most is accuracy.\" Cümle başında boşluk varsa ve arkadan özne+fiil+fiil dizilişi geliyorsa (iki fiil!), boşluğa What/That/Whether gibi bir kurucu gelir.\n\n## if vs whether\nNesne pozisyonunda ikisi de olur: \"We don't know if/whether it works.\" Ama edattan sonra, özne pozisyonunda ve \"or not\" ile bitişik kullanımda SADECE whether: \"depends on whether...\", \"Whether or not...\". Şıklarda if varsa bu kontrolleri yap.\n\n## Sık Kalıplar\nthe fact that (gerçeği), it is thought/believed/estimated that (düşünülmektedir/tahmin edilmektedir — Fen metinlerinin klasik pasif aktarımı), there is no doubt that (şüphe yok ki). \"the fact that\" ile \"that\" arasındaki fark: edatlardan sonra çıplak that gelemez, \"despite the fact that\" denir. Çeviri taktiği: that/what bloğunu tek bir isim gibi paketle (\"şunu biliyorlar: ...\"), cümle anında sadeleşir.",
    keyPoints: [
      "Noun clause \"-dığını / -ip -mediğini\" diye çevrilir ve cümlede özne ya da nesne görevi görür.",
      "Noun clause içinde devrik soru yapısı OLMAZ: how the brain works ✓, how does the brain work ✗.",
      "whether/if = \"-ip -mediğini\"; edattan sonra ve özne pozisyonunda sadece whether kullanılır.",
      "Özne pozisyonundaki That/What/Whether bloğu tekil fiil alır.",
      "It is thought/estimated/believed that... = \"...olduğu düşünülmektedir\" — Fen metinlerinin klasiği.",
      "Edattan sonra çıplak that gelmez: despite the fact that... denir."
    ],
    examples: [
      {
        en: "Scientists have proven that regular exercise reduces the risk of heart disease.",
        tr: "Bilim insanları düzenli egzersizin kalp hastalığı riskini azalttığını kanıtlamıştır.",
        note: "that'li noun clause, prove fiilinin nesnesi: \"azalttığını\"."
      },
      {
        en: "It is estimated that the universe is about 13.8 billion years old.",
        tr: "Evrenin yaklaşık 13,8 milyar yaşında olduğu tahmin edilmektedir.",
        note: "It is V3 that... kalıbı — Fen metinlerinde çok sık."
      },
      {
        en: "Researchers are investigating whether the new material can conduct electricity.",
        tr: "Araştırmacılar yeni malzemenin elektrik iletip iletemeyeceğini araştırıyor.",
        note: "whether = \"-ip -mediğini\"."
      },
      {
        en: "---- causes some species to adapt faster than others remains a mystery.",
        tr: "Bazı türlerin diğerlerinden daha hızlı adapte olmasına neyin sebep olduğu hâlâ bir gizemdir.",
        note: "Doğru cevap: What. Boşluk özne pozisyonunda ve cümlede iki fiil var (causes + remains) → noun clause kurucusu gerekir; \"neyin\" anlamı için What."
      },
      {
        en: "The success of the project depends on whether sufficient funding is provided.",
        tr: "Projenin başarısı, yeterli fon sağlanıp sağlanmadığına bağlıdır.",
        note: "Edattan (on) sonra if değil whether gelir."
      }
    ],
    examTip:
      "Şıklarda soru kelimeleri yarışıyorsa önce devrik dizilişli şıkları ele (does/is özneden önce gelemez). Cümlede iki çekimli fiil görüyorsan ve baştaki boşluk özneyi kuruyorsa What/That/Whether ara. Çeviri sorularında that-bloğunu \"-dığını\" diye paketleyip cümleyi ikiye bölerek çevir."
  },
  {
    id: "adjective-adverb",
    order: 16,
    title: "Adjective & Adverb",
    videoRef: "Video 21-22",
    summary:
      "Sıfat (adjective) ismi, zarf (adverb) fiili, sıfatı veya başka bir zarfı niteler. Sınavdaki soru tipi bellidir: boşluğa aynı kelimenin sıfat hali mi zarf hali mi gelecek? Karar mekanizması: boşluk neyi anlatıyor? İsmi anlatıyorsa sıfat (a significant increase), fiilin NASIL yapıldığını anlatıyorsa zarf (increased significantly).\n\n## Yerleşim Kuralları\nSıfat ya isimden önce gelir (a rapid change) ya da be/become/seem/remain/appear gibi fiillerden sonra gelir: \"The results seem accurate.\" Bu fiiller (linking verbs) sonrasında zarf DEĞİL sıfat kullanılır — sınavın klasik tuzağı: \"seems perfectly\" ✗, \"seems perfect\" ✓. Zarf ise genelde fiilden sonra ya da cümle başında olur ve çoğu \"sıfat + ly\" ile yapılır: quick → quickly.\n\n## Tuzak Kelimeler\n- hard (zor/sıkı) zarfı da hard'dır: work hard. hardly ise \"neredeyse hiç\" demektir: hardly works = neredeyse hiç çalışmaz. Anlam tamamen değişir!\n- late (geç) / lately (son zamanlarda), high (yüksek) / highly (son derece: highly effective).\n- friendly, lonely, likely -ly ile bitse de SIFATTIR.\n- fast, early hem sıfat hem zarftır: a fast reaction / react fast.\n- good sıfat, well zarftır: a good result / works well.\n\n## Karşılaştırma (Comparatives & Superlatives)\nKısa sıfat: -er / the -est (larger, the largest). Uzun sıfat: more / the most (more efficient, the most efficient). Karşılaştırmanın imzası THAN'dir: cümlede than görüyorsan boşluğa -er/more'lu yapı gelir. \"the\" + üstünlük: en ... olan. Düzensizler: good–better–best, bad–worse–worst, little–less–least, far–further.\n\n## Kritik Kalıplar\n- as ... as: eşitlik, araya YALIN sıfat/zarf girer: as effective as (as more effective as ✗).\n- the more ..., the more ...: \"ne kadar ... o kadar ...\": The more we pollute, the worse the climate gets.\n- twice/three times as ... as: kat karşılaştırması.\n- much/far/considerably/significantly + comparative: pekiştirme (very more ✗, much more ✓).",
    keyPoints: [
      "İsmi niteliyorsan sıfat, fiilin nasıl yapıldığını anlatıyorsan zarf seç.",
      "be, seem, become, remain, appear gibi fiillerden sonra zarf değil SIFAT gelir.",
      "hardly = neredeyse hiç (hard'ın zarfı değil!); highly = son derece; lately = son zamanlarda.",
      "Cümlede than varsa boşluğa comparative (-er / more) gelir; the ...-est/most = \"en\".",
      "as ... as arasına yalın sıfat girer: as effective as (more'lu hali yanlış).",
      "Comparative'i very ile değil much/far/significantly ile pekiştir: much more effective.",
      "good sıfat / well zarf; fast ve early ikisi birden olabilir."
    ],
    examples: [
      {
        en: "The population of the city has increased significantly over the last decade.",
        tr: "Şehrin nüfusu son on yılda önemli ölçüde artmıştır.",
        note: "Fiili (increase) niteliyor → zarf: significantly."
      },
      {
        en: "The new treatment seems remarkably effective against the virus.",
        tr: "Yeni tedavi virüse karşı dikkat çekici biçimde etkili görünmektedir.",
        note: "seem'den sonra sıfat (effective); remarkably ise sıfatı niteleyen zarf."
      },
      {
        en: "Solar panels are now far more efficient than they were ten years ago.",
        tr: "Güneş panelleri artık on yıl öncesine göre çok daha verimlidir.",
        note: "than var → comparative; pekiştirme için very değil far/much."
      },
      {
        en: "The experiment was designed so ---- that even minor errors could be detected.",
        tr: "Deney o kadar ---- tasarlandı ki küçük hatalar bile tespit edilebiliyordu.",
        note: "Doğru cevap: carefully. \"was designed\" fiilini niteliyor → zarf. careful şıkkı tuzaktır; so + zarf + that kalıbı."
      },
      {
        en: "The deeper scientists dig, the older the fossils they find.",
        tr: "Bilim insanları ne kadar derine kazarsa, o kadar eski fosiller bulurlar.",
        note: "the + comparative, the + comparative = \"ne kadar ... o kadar ...\"."
      },
      {
        en: "This bacterium can hardly survive outside the human body.",
        tr: "Bu bakteri insan vücudu dışında neredeyse hiç hayatta kalamaz.",
        note: "hardly = neredeyse hiç; \"sıkı şekilde\" ile karıştırma."
      }
    ],
    examTip:
      "Şıklarda significant/significantly gibi ikili varsa boşluğun neyi nitelediğine bak: isimse sıfat, fiilse zarf. seem/remain/become sonrası gelen zarf şıkkı tuzaktır. Cümlede than gördüğün an comparative ara; as...as gördüğünde araya yalın sıfat koy."
  },
  {
    id: "conjunctions",
    order: 17,
    title: "Conjunctions (Bağlaçlar)",
    videoRef: "Video 23-25",
    summary:
      "Bağlaç soruları YÖKDİL'in en garanti puanlarıdır çünkü tamamen ANLAM işidir: iki cümleyi oku, aralarındaki ilişkiyi bul (zıtlık mı, sebep mi, sonuç mu, amaç mı), o anlam grubundaki bağlacı seç. Bağlaçları tek tek değil, anlam gruplarıyla ezberle.\n\n## Zıtlık: although, though, even though, whereas, while, despite, in spite of, however, nevertheless\nalthough/even though + CÜMLE: \"Although it was expensive, ...\". whereas/while iki durumu kıyaslar: \"Mammals are warm-blooded, whereas reptiles are cold-blooded.\" however/nevertheless cümle BAŞLATIR ve noktalama ile ayrılır: \"...; however, ...\".\n\n## EN KRİTİK AYRIM: despite + İSİM vs although + CÜMLE\ndespite ve in spite of'tan sonra sadece İSİM veya Ving gelir: despite the rain, despite being ill. although'dan sonra ise özne+fiil içeren tam CÜMLE gelir: although it rained. Sınav bu ayrımı HER YIL sorar: boşluktan sonra isim öbeği varsa despite/in spite of, özne+fiil varsa although/even though seç. \"despite of\" diye bir şey yoktur; \"in spite of\" veya \"despite\" denir. Cümle kurmak istersen: despite the fact that + cümle.\n\n## Sebep: because, since, as, due to, owing to, because of\nbecause/since/as + CÜMLE: \"Since the sample was contaminated, ...\". due to / owing to / because of + İSİM: \"due to contamination\". Aynı despite/although mantığı: arkasına bak, isim mi cümle mi?\n\n## Sonuç: therefore, thus, hence, consequently, as a result, so\nBunlar \"bu yüzden, dolayısıyla\" demektir ve ikinci cümlenin başında gelir: \"The data were unreliable; therefore, the study was repeated.\" Birinci cümle sebep, ikinci cümle sonuçsa bunları seç.\n\n## Amaç: so that, in order that, in order to, so as to\nso that + CÜMLE (içinde genelde can/could/will/would olur): \"...so that patients can recover faster.\" in order to / so as to + V1: \"in order to reduce costs\".\n\n## Diğerleri\nEkleme: moreover, furthermore, in addition, besides (üstelik, dahası). İkili bağlaçlar: both...and, either...or, neither...nor, not only...but also — biri verilirse eşini ara. Zaman: as soon as (-er -mez), until (-e kadar), once (bir kez ...ınca), while (-iken).\n\nÇözüm sırası: 1) İki cümleyi çevir, ilişkiyi bul. 2) O anlam grubuna git. 3) Boşluktan sonrası isim mi cümle mi kontrol et. Bu üç adım bağlaç sorularının hepsini çözer.",
    keyPoints: [
      "despite / in spite of / due to / because of + İSİM; although / even though / because / since + CÜMLE.",
      "Zıtlık grubu: although, whereas, while, despite, however, nevertheless.",
      "Sebep grubu: because, since, as (+cümle); due to, owing to, because of (+isim).",
      "Sonuç grubu: therefore, thus, hence, consequently, as a result = \"bu yüzden\".",
      "Amaç grubu: so that + cümle (içinde can/could); in order to / so as to + V1.",
      "İkili bağlaçların eşi sabittir: not only...but also, neither...nor, both...and, either...or.",
      "Önce anlam ilişkisini bul, sonra boşluktan sonrasının isim mi cümle mi olduğunu kontrol et."
    ],
    examples: [
      {
        en: "Although the experiment was repeated several times, the results remained inconsistent.",
        tr: "Deney birkaç kez tekrarlanmasına rağmen sonuçlar tutarsız kaldı.",
        note: "although + tam cümle (özne + fiil); anlam zıtlık."
      },
      {
        en: "Despite its small size, the chip can process enormous amounts of data.",
        tr: "Küçük boyutuna rağmen çip, muazzam miktarda veriyi işleyebilir.",
        note: "despite + isim öbeği (its small size) — cümle gelmez."
      },
      {
        en: "The flight was cancelled due to severe weather conditions.",
        tr: "Uçuş, şiddetli hava koşulları nedeniyle iptal edildi.",
        note: "due to + isim; \"because severe weather\" denemez, because'dan sonra cümle gerekir."
      },
      {
        en: "---- the drug proved effective in animal trials, it has not yet been tested on humans.",
        tr: "İlaç hayvan deneylerinde etkili ---- henüz insanlar üzerinde test edilmemiştir.",
        note: "Doğru cevap: Although / Even though. Boşluktan sonra özne+fiil (the drug proved) var → despite elenir; iki cümle arasında zıtlık var → although."
      },
      {
        en: "The samples were stored at -80°C so that they could be analysed later.",
        tr: "Örnekler daha sonra analiz edilebilsin diye -80°C'de saklandı.",
        note: "Amaç: so that + cümle (could'lu)."
      },
      {
        en: "Mammals maintain a constant body temperature, whereas reptiles depend on external heat.",
        tr: "Memeliler sabit bir vücut sıcaklığı korurken, sürüngenler dış ısıya bağımlıdır.",
        note: "whereas iki zıt durumu kıyaslar."
      }
    ],
    examTip:
      "Bağlaç sorusunda iki adım: önce iki cümlenin anlam ilişkisini (zıtlık/sebep/sonuç/amaç) bul, sonra boşluktan sonrası isim mi cümle mi diye bak. Şıklarda hem despite hem although verilir — arkası cümleyse despite'ı, isimse although'yu gözünü kırpmadan ele. Bu iki kontrol bağlaç sorularının neredeyse tamamını çözer."
  },
  {
    id: "reading-strategy",
    order: 18,
    title: "Okuma & Soru Tipi Taktikleri",
    videoRef: "Video 26-33",
    summary:
      "YÖKDİL 80 sorudur ve gramerden çok soru tipi taktiği sınavı kazandırır. Her soru tipinin kendi çözüm yöntemi vardır; hepsinde ortak kural: soru kökünü ve şıkları paragraftan ÖNCE okuma alışkanlığı edin, ne aradığını bilerek metne gir.\n\n## Okuma (Reading) Soruları\nParçayı kelime kelime çevirmeye çalışma; önce soruyu oku, sorudaki anahtar kelimeyi (isim, sayı, özel ad) parçada tara. Cevap genelde anahtar kelimenin geçtiği cümlede veya bir sonrasındadır. \"It can be inferred/understood that...\" sorularında parçada birebir yazmayan ama parçadan ÇIKAN şık doğrudur; parçada geçen kelimeleri aynen kullanan şıklar çoğu zaman tuzaktır. \"main idea / mainly about\" sorusunda ilk ve son cümlelere ağırlık ver; çok dar veya çok geniş şıkları ele.\n\n## Cloze Test (Paragrafta Boşluk)\nHer boşluğa kendi kuralıyla yaklaş: şıklar tense ise özne ve zaman zarfına, bağlaçsa cümleler arası anlama, edatsa kalıba, kelimeyse cümlenin gelişine bak. Boşluğun olduğu cümleyi tek başına değil, önceki cümleyle birlikte oku — cloze'un mantığı bağlamdır.\n\n## Çeviri Soruları (EN→TR ve TR→EN)\nÖnce iki cümlenin ZAMANINI ve olumlu/olumsuzluğunu eşleştir: cümle geçmişse şıkta geçmiş olmayan hepsi elenir — çoğu zaman 2-3 şık böyle gider. Sonra özneyi eşleştir, en son ayrıntı kelimelere bak. Kelimesi kelimesine değil, yapı yapı ele.\n\n## Paragraf Tamamlama\nBoşluğun bir ÖNCEKİ ve bir SONRAKİ cümlesini dikkatle oku. Doğru şık iki taraf arasında köprü kurar: öncekiyle konu bütünlüğü, sonrakiyle bağlantı (özellikle sonraki cümledeki this/these/such/however gibi işaretçilerin neye gönderme yaptığına bak). Zamir ve bağlaç uyumu bozan şıkları ele.\n\n## Anlam Bütünlüğünü Bozan Cümle\nÖnce I. cümleyi oku ve paragrafın KONUSUNU tek cümleyle zihninde özetle (örn. \"arıların yön bulması\"). Sonra her cümleye \"bu, o konudan mı bahsediyor?\" diye sor. Bozan cümle genelde aynı genel temadan (arılar) bahseder ama alt konuyu değiştirir (yön bulma yerine bal üretimi). Kelime benzerliğine aldanma, KONU sürekliliğine bak.\n\n## Genel Strateji\nSüre 80 soruya 180 dakika; takılırsan işaretle geç. Kelime sorularında cümlenin geneline uyan anlamı seç, bilmediğin şıklara değil bildiğin şıkların elenip elenemediğine odaklan. Emin olmadığında bile 2 şık eleyip işaretlemek istatistiksel kazançtır.",
    keyPoints: [
      "Her soru tipinde önce soruyu/şıkları oku, ne aradığını bilerek metne gir.",
      "Okuma sorusunda anahtar kelimeyi parçada tara; cevap o cümle ve civarındadır.",
      "Çeviri sorusunda önce zaman ve olumlu/olumsuz eşleştir — şıkların yarısı böyle elenir.",
      "Paragraf tamamlamada boşluğun önceki ve sonraki cümlesiyle köprü kuran şıkkı seç; this/however işaretçilerini takip et.",
      "Bütünlüğü bozan cümlede kelime benzerliğine aldanma; paragrafın alt konusunu değiştiren cümleyi ara.",
      "Cloze'da boşluklu cümleyi önceki cümleyle birlikte oku; her boşluğa kendi gramer kuralıyla yaklaş.",
      "Takıldığın soruda bekleme; işaretle, geç, sonra dön."
    ],
    examples: [
      {
        en: "It can be inferred from the passage that renewable energy sources will play a greater role in the future.",
        tr: "Parçadan, yenilenebilir enerji kaynaklarının gelecekte daha büyük bir rol oynayacağı çıkarılabilir.",
        note: "Çıkarım sorusu kalıbı: parçada birebir yazmaz ama parçadan mantıken çıkar."
      },
      {
        en: "The passage is mainly about the effects of climate change on marine ecosystems.",
        tr: "Parça temel olarak iklim değişikliğinin deniz ekosistemleri üzerindeki etkileri hakkındadır.",
        note: "Ana fikir sorusu: ilk/son cümleye bak; çok dar ve çok geniş şıkları ele."
      },
      {
        en: "Ozone in the upper atmosphere protects living organisms ---- it absorbs harmful ultraviolet radiation from the Sun.",
        tr: "Üst atmosferdeki ozon, Güneş'ten gelen zararlı morötesi ışınımı emdiği ---- canlı organizmaları korur.",
        note: "Cloze örneği. Doğru cevap: because/since. İkinci cümle birincinin SEBEBİ → sebep bağlacı; boşluktan sonra tam cümle olduğu için due to elenir."
      },
      {
        en: "Which of the following sentences disturbs the coherence of the paragraph?",
        tr: "Aşağıdaki cümlelerden hangisi paragrafın anlam bütünlüğünü bozmaktadır?",
        note: "Bozan cümle soru kökü: konuyu özetle, alt konuyu değiştiren cümleyi bul."
      },
      {
        en: "Antibiotics, which were discovered in the twentieth century, have saved millions of lives; however, their overuse has led to resistant bacteria.",
        tr: "Yirminci yüzyılda keşfedilen antibiyotikler milyonlarca hayat kurtarmıştır; ancak aşırı kullanımları dirençli bakterilere yol açmıştır.",
        note: "Çeviri taktiği: önce zamanları eşleştir (V3'lü present perfect → \"-mıştır\"), sonra however'ın \"ancak\" ile karşılandığını doğrula."
      }
    ],
    examTip:
      "YÖKDİL'de puanı gramer bilgisi kadar soru tipi disiplini getirir: her soru tipine kendi rutinini uygula ve rutini sınavdan önce denemelerle otomatikleştir. Çeviri ve cloze sorularında eleme yönteminle 30 saniyede 2-3 şık düşürebilirsin. Parçayı tamamen anlamak zorunda değilsin; soruyu çözecek cümleyi bulman yeterli."
  }
]
