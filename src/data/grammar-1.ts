import type { GrammarTopic } from './types'

export const grammarTopics1: GrammarTopic[] = [
  {
    id: "present-tenses",
    order: 1,
    title: "Present Simple & Continuous",
    videoRef: "Video 2",
    summary:
      "YÖKDİL'de zaman (tense) soruları ilk 20 sorunun temel direğidir ve bu sorular çoğu zaman cümledeki ZAMAN ZARFINA bakılarak çözülür. Yani cümleyi tamamen anlamana gerek yok; ipucu kelimeyi bul, doğru tense'i işaretle. Bu bölümde geniş zaman (Present Simple) ile şimdiki zaman (Present Continuous) arasındaki farkı sınav gözüyle öğreneceğiz.\n\n## Present Simple (Geniş Zaman)\n\nYapı: Özne + V1 (he/she/it için V1+s). Olumsuzu do not / does not + V1. Türkçe karşılığı \"-r, -ar, -er\" ekidir: \"Water boils at 100 degrees.\" = \"Su 100 derecede kaynar.\"\n\nNe zaman kullanılır? Genel geçer doğrular, bilimsel gerçekler, alışkanlıklar ve rutinler. YÖKDİL Fen metinleri bilimsel gerçeklerle dolu olduğu için Present Simple sınavın en sık görülen zamanıdır.\n\nİpucu zarflar (time expressions): always, usually, often, sometimes, rarely, never, every day/year, generally, typically. Bu zarflardan birini gördüğünde aklına ilk Present Simple gelsin.\n\n## Present Continuous (Şimdiki Zaman)\n\nYapı: am/is/are + V-ing. Türkçe karşılığı \"-yor\" ekidir: \"The climate is changing.\" = \"İklim değişiyor.\"\n\nNe zaman kullanılır? Şu anda olan işler, konuşma anı etrafında süren geçici durumlar ve devam eden değişim/trend anlatımı. Fen metinlerinde \"giderek artıyor, değişiyor, gelişiyor\" tarzı süreç cümleleri hep bu zamanla verilir.\n\nİpucu zarflar: now, right now, at the moment, currently, at present, these days, nowadays, increasingly. Özellikle CURRENTLY kelimesi YÖKDİL'in klasiğidir; gördüğün an şıklarda am/is/are + V-ing ara.\n\n## Püf Noktası\n\n- \"He/she/it\" öznede Present Simple fiile -s takısı ister; şıklarda \"the scientist study\" gibi -s'siz fiil görürsen ele.\n- Durum fiilleri (know, believe, contain, consist, belong) -ing almaz; \"is knowing\" diye bir şey yoktur.\n- Bilimsel gerçek + genellik zarfı = Present Simple; süreç/değişim + currently = Present Continuous. Bu iki denklem sınav sorularının çoğunu çözer.",
    keyPoints: [
      "Cümlede always, usually, often, every day, generally gibi bir genellik zarfı görürsen boşluğa Present Simple gelir.",
      "Cümlede now, currently, at the moment, these days görürsen boşluğa am/is/are + V-ing (Present Continuous) gelir.",
      "Bilimsel gerçekler ve tanımlar (su 100 derecede kaynar gibi) her zaman Present Simple ile anlatılır.",
      "He/she/it öznesi Present Simple'da fiile -s takısı ister; -s'siz şık elenir.",
      "know, believe, contain, consist, belong gibi durum fiilleri -ing almaz; şıkta 'is containing' görürsen ele.",
      "Değişim ve trend anlatan cümleler (increasingly, gradually ile) Present Continuous ister."
    ],
    examples: [
      {
        en: "Water boils at 100 degrees Celsius at sea level.",
        tr: "Su, deniz seviyesinde 100 santigrat derecede kaynar.",
        note: "Bilimsel gerçek → Present Simple. Türkçedeki '-r' eki."
      },
      {
        en: "Scientists usually publish their findings in peer-reviewed journals.",
        tr: "Bilim insanları bulgularını genellikle hakemli dergilerde yayımlar.",
        note: "'usually' zarfı Present Simple'ın ipucusu."
      },
      {
        en: "The global climate is changing at an unprecedented rate.",
        tr: "Küresel iklim, benzeri görülmemiş bir hızla değişiyor.",
        note: "Devam eden süreç/değişim → Present Continuous."
      },
      {
        en: "Researchers ---- currently ---- new methods to store renewable energy more efficiently.",
        tr: "Araştırmacılar şu anda yenilenebilir enerjiyi daha verimli depolamak için yeni yöntemler geliştiriyor.",
        note: "Doğru cevap: are / developing. 'currently' kelimesi Present Continuous'ın (are developing) altın ipucudur."
      },
      {
        en: "The human brain contains approximately 86 billion neurons.",
        tr: "İnsan beyni yaklaşık 86 milyar nöron içerir.",
        note: "'contain' durum fiilidir, -ing almaz; ayrıca bilimsel gerçek → Present Simple."
      }
    ],
    examTip:
      "Sınavda tense sorusunu cümleyi çevirerek değil, zaman zarfını bularak çöz: genellik zarfı (usually, every year) gördün mü Present Simple; currently, now, these days gördün mü Present Continuous işaretle. Şıklarda özne he/she/it iken -s'siz fiil veya durum fiiline eklenmiş -ing görürsen o şıkkı direkt ele."
  },
  {
    id: "perfect-tenses",
    order: 2,
    title: "Present Perfect",
    videoRef: "Video 3",
    summary:
      "Present Perfect, YÖKDİL'in en sevdiği zamandır çünkü ipuçları çok nettir. Mantığı şu: geçmişte başlamış ve etkisi/sonucu şu ana uzanan işler. Türkçede tam karşılığı yok; genellikle \"-di, -miştir, -egelmiştir\" diye çevrilir: \"Scientists have discovered a new species.\" = \"Bilim insanları yeni bir tür keşfetti/keşfetmiştir.\"\n\n## Yapı\n\nhave/has + V3 (fiilin 3. hali). Özne he/she/it ise HAS, diğerlerinde HAVE. Olumsuzu have not / has not + V3.\n\n## Altın İpuçları (Time Expressions)\n\nBu zamanın sinyal kelimeleri sınavın anahtarıdır:\n\n- since + geçmiş zaman noktası (since 1990, since the discovery of...): \"...den beri\" → ana cümle Present Perfect.\n- for + süre (for two decades, for many years): \"...dır/dir\" süren iş → Present Perfect.\n- recently, lately, in recent years, over the past decade: \"son zamanlarda\" → Present Perfect.\n- so far, up to now, until now: \"şimdiye kadar\" → Present Perfect.\n- yet (olumsuz ve soruda), already, just: henüz / çoktan / az önce → Present Perfect.\n\nBu listeden herhangi birini cümlede gördüğün an, boşluğa have/has + V3 içeren şıkkı ara. YÖKDİL'de \"since\" ve \"over the past ... years\" en sık çıkan ikilidir.\n\n## Present Perfect Continuous\n\nhave/has been + V-ing: geçmişte başlayıp hâlâ AKTİF olarak devam eden işi vurgular. \"Researchers have been studying this virus for ten years.\" = \"Araştırmacılar bu virüsü on yıldır inceliyor(lar).\" for/since ile birlikte süreklilik vurgusu varsa bu form da doğru olabilir; şıklarda ikisi birden verilmez, biri verilir, o yüzden kafan karışmasın.\n\n## Püf Noktası\n\nsince'ten sonra geçmiş bir tarih/olay gelir ama ana cümle asla Simple Past olmaz: \"Since 2010, the number of publications increased\" YANLIŞ; \"has increased\" DOĞRU. Sınav tam bu tuzağı kurar: since'i görüp geçmiş zaman şıkkına atlayanı yakalar.",
    keyPoints: [
      "Cümlede 'since + geçmiş zaman noktası' görürsen ana cümle Present Perfect'tir (have/has + V3).",
      "'for + süre' (for two decades) geçmişten şu ana uzanan süreyi anlatır ve Present Perfect ister.",
      "recently, lately, in recent years, over the past decade ifadeleri Present Perfect'in altın sinyalidir.",
      "so far, up to now, yet, already, just kelimeleri de Present Perfect ile kullanılır.",
      "since'li cümlede ana fiil asla Simple Past olmaz; sınavın klasik tuzağı budur.",
      "Özne he/she/it ise HAS + V3, diğer öznelerde HAVE + V3 gelir; has/have karışıklığı şık eler.",
      "Süreklilik vurgusu (hâlâ aktif devam eden iş) için have/has been + V-ing kullanılır."
    ],
    examples: [
      {
        en: "The average global temperature has risen significantly since the industrial revolution.",
        tr: "Ortalama küresel sıcaklık, sanayi devriminden beri önemli ölçüde yükselmiştir.",
        note: "'since + geçmiş olay' → Present Perfect (has risen)."
      },
      {
        en: "Researchers have studied the effects of microplastics for more than two decades.",
        tr: "Araştırmacılar, mikroplastiklerin etkilerini yirmi yılı aşkın süredir incelemektedir.",
        note: "'for + süre' → Present Perfect."
      },
      {
        en: "In recent years, gene-editing technologies have become far more precise.",
        tr: "Son yıllarda gen düzenleme teknolojileri çok daha hassas hale gelmiştir.",
        note: "'in recent years' → Present Perfect'in tipik sinyali."
      },
      {
        en: "Since its launch in 2021, the James Webb telescope ---- astronomers with remarkable images of distant galaxies.",
        tr: "2021'deki fırlatılışından bu yana James Webb teleskobu, astronomlara uzak galaksilerin dikkat çekici görüntülerini sunmuştur.",
        note: "Doğru cevap: has provided. 'Since + 2021' geçmiş nokta → ana cümle Present Perfect; 'provided' (Simple Past) tuzaktır."
      },
      {
        en: "Scientists have been monitoring the glacier's movement since 2015.",
        tr: "Bilim insanları 2015'ten beri buzulun hareketini izlemektedir.",
        note: "Hâlâ aktif devam eden iş + since → Present Perfect Continuous."
      }
    ],
    examTip:
      "Sınavda önce cümleyi tarayıp since, for, recently, so far, over the past ... gibi sinyalleri bul; birini görürsen have/has + V3 içeren şıkkı işaretle. En büyük tuzak since'li cümlede Simple Past şıkkıdır; since varsa Simple Past şıkkını direkt ele. Özne tekilse has, çoğulsa have olduğunu kontrol ederek iki şıkkı daha eleyebilirsin."
  },
  {
    id: "past-tenses",
    order: 3,
    title: "Simple Past & Diğer Past Tense'ler",
    videoRef: "Video 4-5",
    summary:
      "Geçmiş zamanlar YÖKDİL'de üç oyuncuyla oynanır: Simple Past, Past Continuous ve Past Perfect. Hangisinin geleceğini yine zaman zarfları ve cümledeki olay sıralaması söyler.\n\n## Simple Past (Di'li Geçmiş)\n\nYapı: V2 (fiilin 2. hali). Olumsuzu did not + V1. Türkçe karşılığı \"-di\": \"Einstein developed the theory of relativity.\" = \"Einstein görelilik kuramını geliştirdi.\"\n\nİpucu zarflar: in + geçmiş yıl (in 1905), ago (two years ago), last (last century, last year), yesterday, at that time, in the past. Geçmişte belirli bir zamanda olup BİTMİŞ işler için kullanılır. YÖKDİL Fen'de tarihsel bilimsel olaylar (keşifler, icatlar) hep Simple Past ile sorulur; \"in 1928, Fleming ----\" gördüğünde cevap V2'dir.\n\n## Past Continuous (Şimdiki Zamanın Hikayesi)\n\nYapı: was/were + V-ing. Türkçesi \"-yordu\": \"The researchers were conducting an experiment.\" = \"Araştırmacılar bir deney yürütüyordu.\"\n\nEn önemli kullanımı: geçmişte devam eden bir iş, başka bir iş tarafından kesilir. Kalıp: WHILE + Past Continuous, Simple Past / WHEN + Simple Past, Past Continuous. \"While Fleming was examining the dishes, he noticed the mould.\" while'dan sonra -yordu (was/were + V-ing), when'den sonra -di (V2) gelir; bu eşleşme sınavda çok sorulur.\n\n## Past Perfect (Miş'li Geçmişin Hikayesi)\n\nYapı: had + V3. Türkçesi \"-mişti\": geçmişteki iki olaydan DAHA ÖNCE olanı anlatır. \"By the time the rescue team arrived, the flood had destroyed the village.\" = \"Kurtarma ekibi vardığında sel köyü çoktan yok etmişti.\"\n\nİpucu kalıplar: by the time + Simple Past → ana cümle had + V3; before/after bağlaçlarıyla olay sıralaması; \"had already\", \"had just\". Kural basit: iki geçmiş olay varsa önce olan had + V3, sonra olan V2 alır.\n\n## Püf Noktası\n\n- ago, last, in + geçmiş yıl → kesin Simple Past; bu zarflarla Present Perfect KULLANILMAZ (\"has discovered in 1928\" yanlış).\n- Tek başına Past Perfect kullanılmaz; cümlede mutlaka referans alınan ikinci bir geçmiş olay ya da tarih vardır.\n- until recently kalıbı genelde Simple Past veya Past Perfect ile gelir; recently'yi görüp Present Perfect'e atlamadan until'e dikkat et.",
    keyPoints: [
      "in + geçmiş yıl, ago, last, yesterday zarflarını görürsen boşluğa Simple Past (V2) gelir.",
      "Bu belirli geçmiş zarflarıyla (in 1928, two years ago) Present Perfect asla kullanılmaz.",
      "while'dan sonra was/were + V-ing, when'den sonra Simple Past gelir; ikisi aynı cümlede eşleşir.",
      "Geçmişteki iki olaydan önce olan had + V3 (Past Perfect), sonra olan V2 (Simple Past) alır.",
      "'By the time + Simple Past' görürsen ana cümlede had + V3 ara.",
      "Past Perfect tek başına dolaşmaz; cümlede ikinci bir geçmiş olay veya tarih referansı olmalı."
    ],
    examples: [
      {
        en: "Alexander Fleming discovered penicillin in 1928.",
        tr: "Alexander Fleming penisilini 1928'de keşfetti.",
        note: "'in 1928' belirli geçmiş tarih → Simple Past; 'has discovered' burada yanlış olur."
      },
      {
        en: "While the technicians were calibrating the instruments, the power suddenly went off.",
        tr: "Teknisyenler cihazları kalibre ederken elektrik aniden kesildi.",
        note: "while + was/were V-ing, kesen olay Simple Past."
      },
      {
        en: "By the time the vaccine became widely available, the virus had already spread to five continents.",
        tr: "Aşı yaygın olarak erişilebilir olduğunda, virüs çoktan beş kıtaya yayılmıştı.",
        note: "Önce olan olay: had spread (Past Perfect); sonra olan: became (Simple Past)."
      },
      {
        en: "The researchers ---- the samples when they ---- an unexpected chemical reaction.",
        tr: "Araştırmacılar, beklenmedik bir kimyasal tepkime fark ettiklerinde numuneleri analiz ediyorlardı.",
        note: "Doğru cevap: were analysing / noticed. Devam eden iş (Past Continuous) başka bir olayla (Simple Past) kesiliyor."
      },
      {
        en: "Before Watson and Crick published their model, several scientists had collected crucial data on DNA.",
        tr: "Watson ve Crick modellerini yayımlamadan önce, birkaç bilim insanı DNA hakkında kritik veriler toplamıştı.",
        note: "before'dan önceki olay daha eski → had collected."
      }
    ],
    examTip:
      "Sınavda geçmiş zaman sorusunda önce tarih/zarf ara: in 1905, ago, last görürsen V2 işaretle ve Present Perfect şıklarını ele. İki geçmiş olay varsa sıralamayı kur: önce olan had + V3, sonra olan V2. Çift boşluklu sorularda while/when eşleşmesini hatırla: while tarafı -yordu, diğer taraf -di."
  },
  {
    id: "future-tenses",
    order: 4,
    title: "Future Tense",
    videoRef: "Video 6",
    summary:
      "Gelecek zaman YÖKDİL'de iki ana yapıyla gelir: will ve be going to. İkisine ek olarak gelecek anlamı veren zaman bağlacı kuralı (when/if'li cümleler) sınavın favori tuzağıdır.\n\n## Will + V1\n\nTürkçesi \"-ecek/-acak\": \"Renewable energy will play a major role in the future.\" = \"Yenilenebilir enerji gelecekte büyük bir rol oynayacak.\" Tahminler, öngörüler ve bilimsel projeksiyonlar için kullanılır. YÖKDİL Fen metinlerinde gelecek öngörüleri (iklim projeksiyonları, teknoloji tahminleri) hep will ile verilir.\n\nİpucu zarflar: in the future, in the coming decades, by 2050 (dikkat: by + gelecek tarih ayrıca Future Perfect de isteyebilir), soon, in the next ten years, eventually.\n\n## Be Going To + V1\n\nam/is/are going to + V1: planlanmış işler ve eldeki kanıta dayalı yakın tahminler. \"The agency is going to launch a new satellite next year.\" YÖKDİL'de will ile going to genelde birbirinin yerine kabul edilir; ikisi aynı anda şıklarda çeliştirilmez.\n\n## Future Perfect: will have + V3\n\n\"by + gelecek tarih\" kalıbının altın eşleşmesidir: \"By 2050, the world population will have reached 9.7 billion.\" = \"2050'ye kadar dünya nüfusu 9,7 milyara ulaşmış olacak.\" Sınavda \"By 2050 / By the end of this century\" görürsen şıklarda will have + V3 ara.\n\n## En Kritik Kural: Zaman Bağlacından Sonra WILL GELMEZ\n\nwhen, before, after, as soon as, until, once, if bağlaçlarının açtığı yan cümlede gelecekten bahsedilse bile WILL KULLANILMAZ; Present Simple kullanılır. Ana cümle will alır:\n\n- \"When the experiment ends (will end DEĞİL), the team will publish the results.\"\n- \"If the temperature rises further, sea levels will continue to climb.\"\n\nSınav bu kuralı iki boşluklu soruyla test eder: bağlaçlı tarafa Present Simple, ana cümleye will koyan şık doğrudur. \"When ... will\" ikilisini aynı yan cümlede gören şıkkı direkt ele.\n\n## Püf Noktası\n\nbe about to + V1 = \"-mek üzere\" (çok yakın gelecek); be to + V1 = resmi planlar. Bunlar nadir sorulur ama okuma parçasında karşına çıkabilir.",
    keyPoints: [
      "in the future, in the coming decades, soon gibi zarflar gördüğünde boşluğa will + V1 gelir.",
      "'by + gelecek tarih' (by 2050) görürsen Future Perfect (will have + V3) ara.",
      "when, if, before, after, as soon as, until, once bağlaçlarından sonra will gelmez; Present Simple gelir.",
      "Zaman bağlaçlı cümlede ana cümle will alır, yan cümle Present Simple alır; şıkta ikisini eşleştir.",
      "Aynı yan cümle içinde 'when ... will' gören şıkkı direkt ele.",
      "be going to planlı işleri, will tahmin ve öngörüleri anlatır; YÖKDİL'de ikisi genelde çeliştirilmez."
    ],
    examples: [
      {
        en: "Artificial intelligence will transform medical diagnosis in the coming decades.",
        tr: "Yapay zekâ, önümüzdeki on yıllarda tıbbi teşhisi dönüştürecek.",
        note: "'in the coming decades' → will + V1."
      },
      {
        en: "By the end of this century, average temperatures will have increased by nearly two degrees.",
        tr: "Bu yüzyılın sonuna kadar ortalama sıcaklıklar yaklaşık iki derece artmış olacak.",
        note: "'By + gelecek tarih' → Future Perfect (will have increased)."
      },
      {
        en: "When the clinical trials end, the company will apply for official approval.",
        tr: "Klinik denemeler bittiğinde, şirket resmî onay için başvuracak.",
        note: "when'li yan cümlede Present Simple (end), ana cümlede will."
      },
      {
        en: "If governments ---- immediate action, the loss of biodiversity ---- irreversible within decades.",
        tr: "Hükümetler acil önlem almazsa, biyoçeşitlilik kaybı on yıllar içinde geri döndürülemez hale gelecek.",
        note: "Doğru cevap: do not take / will become. if'li tarafta Present Simple, ana cümlede will; 'will not take' içeren şıklar tuzaktır."
      },
      {
        en: "The space agency is going to launch its new probe toward Jupiter next year.",
        tr: "Uzay ajansı, yeni sondasını gelecek yıl Jüpiter'e doğru fırlatacak.",
        note: "Planlanmış gelecek → be going to."
      }
    ],
    examTip:
      "Sınavda gelecek zaman sorusunun yarısı 'zaman bağlacından sonra will gelmez' kuralından çıkar: when/if/as soon as gördüğünde bağlaçlı tarafa Present Simple, ana cümleye will yerleştiren şıkkı seç. 'By + gelecek tarih' görürsen will have + V3 aklına gelsin. Yan cümlede will barındıran şıkları ilk turda ele."
  },
  {
    id: "tense-agreement",
    order: 5,
    title: "Zaman Uyumu Kuralı",
    videoRef: "Video 7",
    summary:
      "Zaman uyumu (tense agreement / harmony), YÖKDİL'in en pratik konusudur çünkü cümleyi anlamadan bile soru çözdürür. Kural şu: bir cümlenin içindeki fiiller ZAMAN OLARAK BİRBİRİYLE UYUMLU olmalıdır. Geçmiş geçmişle, şimdiki şimdikiyle, gelecek gelecekle gider.\n\n## Temel Mantık\n\nİki boşluklu ya da tek boşluklu tense sorusunda önce cümledeki ÇEKİLMİŞ diğer fiile bak. O fiil hangi zamandaysa, boşluk da büyük ihtimalle aynı zaman bloğundadır:\n\n- Ana cümle Simple Past ise, yan cümle de geçmiş blokta olur: V2, was/were V-ing veya had V3.\n- Ana cümle Present ise, yan cümle Present/Present Perfect/will bloğunda olur.\n\n\"The study showed that the drug reduces...\" gibi genel geçer bilimsel gerçek istisnası vardır ama sınavda ana strateji uyumdur.\n\n## Geçmiş Blok Eşleşmeleri\n\n- V2 + V2: iki bitmiş olay art arda. \"The team collected the samples and analysed them.\"\n- was/were V-ing + V2: süren iş + kesen olay (while/when).\n- had V3 + V2: önce olan + sonra olan (before/after/by the time).\n- said/reported/found that + geçmiş blok: aktarma fiili geçmişse that'ten sonrası da geçmişe kayar. \"The researchers reported that the treatment was effective.\"\n\n## Şimdiki/Gelecek Blok Eşleşmeleri\n\n- Present Simple + will: \"If/When the ice melts, sea levels will rise.\"\n- Present Perfect + Present: \"Since the method has improved, scientists now obtain better results.\"\n\n## Sınav Stratejisi\n\n1. Boşluklu cümlede çekilmiş fiili bul (ends, showed, will...).\n2. O fiilin zaman bloğunu belirle: geçmiş mi, şimdi mi, gelecek mi?\n3. Şıklarda aynı bloktan olmayan zamanları ele. Genelde 5 şıktan 3'ü sırf bu uyumsuzlukla elenir.\n4. Kalan iki şık arasında zarf ipucuyla (ago, since, by the time...) karar ver.\n\n## Püf Noktası\n\nGeçmiş bir tarih (in 1990) ya da geçmiş bir çekilmiş fiil varken şıkta will, have V3 (yalın Present Perfect) ya da is V-ing görürsen bunlar %90 elenir. Bu eleme yöntemi, kelime bilgin zayıf olsa bile tense sorularını çözdürür — senin için en değerli kural budur.",
    keyPoints: [
      "Cümledeki çekilmiş fiil geçmişse, boşluğa da geçmiş bloktan bir zaman (V2, was/were V-ing, had V3) gelir.",
      "Aktarma fiili geçmişse (said/reported/found that), that'ten sonraki fiil de geçmişe kayar.",
      "Ana cümlede will varsa yan cümlede Present Simple aranır; ikisi bir blok oluşturur.",
      "Geçmiş tarihli cümlede will veya is V-ing içeren şıklar doğrudan elenir.",
      "İki boşluklu sorularda iki fiilin aynı zaman bloğunda olduğu şık genelde doğrudur.",
      "Önce eleme yap: 5 şıktan 3'ü zaman uyumsuzluğuyla düşer, kalan ikisini zarf ipucuyla ayır."
    ],
    examples: [
      {
        en: "The researchers reported that the new alloy was far more resistant to corrosion.",
        tr: "Araştırmacılar, yeni alaşımın korozyona çok daha dayanıklı olduğunu bildirdi.",
        note: "reported (geçmiş) → that'ten sonrası da geçmiş: was."
      },
      {
        en: "After the volcano had erupted, ash clouds covered the entire region.",
        tr: "Yanardağ patladıktan sonra kül bulutları tüm bölgeyi kapladı.",
        note: "Geçmiş blok eşleşmesi: had erupted (önce) + covered (sonra)."
      },
      {
        en: "When water freezes, its volume increases by about nine percent.",
        tr: "Su donduğunda hacmi yaklaşık yüzde dokuz artar.",
        note: "Genel geçer gerçek: iki taraf da Present Simple, blok uyumlu."
      },
      {
        en: "The astronomers ---- the comet for several weeks before they ---- its exact orbit.",
        tr: "Astronomlar, kesin yörüngesini hesaplamadan önce kuyruklu yıldızı birkaç hafta boyunca gözlemlemişlerdi.",
        note: "Doğru cevap: had observed / calculated. before'lu sıralama: önce olan had + V3, sonra olan V2; will veya present içeren şıklar blok dışı kaldığı için elenir."
      },
      {
        en: "Since the sensors have become cheaper, engineers now install them in almost every device.",
        tr: "Sensörler ucuzladığından beri mühendisler artık onları neredeyse her cihaza takıyor.",
        note: "Present Perfect + Present Simple: şimdiki blok uyumu."
      }
    ],
    examTip:
      "Tense sorusunda cümleyi çevirmeye çalışma; önce çekilmiş fiili bul, zaman bloğunu belirle, blok dışı şıkları çiz. Geçmiş bloktaki bir cümlede will/is doing/has done şıkları neredeyse her zaman çeldiricidir. Kalan iki şık arasında zarf (ago, by the time, since) veya olay sıralaması karar verdirir — bu strateji 14 gramer sorusunun en az 3-4'ünü garantiler."
  },
  {
    id: "modals-present",
    order: 6,
    title: "Present Modals",
    videoRef: "Video 8",
    summary:
      "Modal'lar (kip belirteçleri) fiile anlam katan yardımcı kelimelerdir: can, may, might, must, should, have to... YÖKDİL'de modal sorusu ANLAM sorusudur; tense sorusundan farklı olarak burada cümlenin ne demek istediğine (olasılık mı, zorunluluk mu, tavsiye mi) bakılır.\n\n## Altın Kural: Modal + V1\n\nHer modal'dan sonra fiilin YALIN hali gelir: can go, must be, should take. \"can went, must to go, should goes\" gibi şıklar anında elenir. Bu tek kural bile bazı soruları çözdürür.\n\n## Anlam Grupları\n\n- CAN / BE ABLE TO: yetenek, olabilirlik → \"-ebilir\". \"Bacteria can survive in extreme conditions.\" = \"Bakteriler aşırı koşullarda hayatta kalabilir.\"\n- MAY / MIGHT / COULD: olasılık → \"belki, -ebilir\". might, may'den biraz daha zayıf ihtimaldir ama sınavda bu fark çeliştirilmez; üçü de \"olasılık\" ailesidir. Fen metinlerinde temkinli bilim dili (\"may cause, might lead to\") çok sık geçer.\n- MUST / HAVE TO: zorunluluk → \"-meli, zorunda\". must ayrıca güçlü mantıksal çıkarım da yapar: \"The results must be accurate.\" = \"Sonuçlar doğru olmalı (eminim).\"\n- SHOULD / OUGHT TO: tavsiye, beklenti → \"-meli (iyi olur)\". \"Patients should avoid...\" tavsiyedir, zorunluluk değildir.\n- MUST NOT vs DON'T HAVE TO tuzağı: must not = YASAK (\"yapmamalısın\"); don't have to = GEREK YOK (\"yapmak zorunda değilsin\"). Anlamları zıttır, sınav bu farkı sever.\n- NEED TO: gereklilik; needn't = gerek yok.\n\n## Sınavda Nasıl Çözülür?\n\nCümlenin bağlamından anlam sinyali yakala: \"in order to survive\" gibi bir amaç varsa zorunluluk (must/have to); \"it is possible that\" havası varsa olasılık (may/might); öneri havası varsa should. Şıklar genelde farklı anlam gruplarından gelir, yani can/may/must/should yan yana dizilir; cümleye Türkçe anlamını yerleştirip hangisi mantıklı diye kontrol et.\n\n## Püf Noktası\n\nBilimsel metinlerde kesinlikten kaçınan dil hakimdir: kesin kanıt yoksa may/might/could; kanıt güçlüyse must. Olumsuz olasılık için may not / might not kullanılır; \"can not\" olasılıkta \"imkansız\" anlamına gelir, karıştırma.",
    keyPoints: [
      "Her modal'dan sonra fiilin yalın hali (V1) gelir; 'must to go' veya 'can goes' içeren şık anında elenir.",
      "may / might / could üçlüsü olasılık ailesidir ve bilimsel temkinli dilde en sık çıkan gruptur.",
      "must ve have to zorunluluk bildirir; must ayrıca güçlü mantıksal çıkarım yapar ('...olmalı, eminim').",
      "should tavsiye ve beklenti bildirir; zorunluluk kadar güçlü değildir.",
      "must not = yasak, don't have to = gerek yok; ikisi zıt anlamlıdır ve sınavın klasik tuzağıdır.",
      "Modal sorusu anlam sorusudur: cümleye Türkçe karşılığı (-ebilir / -meli / zorunda) yerleştirip test et."
    ],
    examples: [
      {
        en: "Some bacteria can survive in extremely hot environments such as deep-sea vents.",
        tr: "Bazı bakteriler, derin deniz bacaları gibi aşırı sıcak ortamlarda hayatta kalabilir.",
        note: "Yetenek/olabilirlik → can."
      },
      {
        en: "Prolonged exposure to loud noise may cause permanent hearing loss.",
        tr: "Yüksek sese uzun süre maruz kalmak kalıcı işitme kaybına neden olabilir.",
        note: "Olasılık → may; bilimsel temkinli dil."
      },
      {
        en: "Laboratory workers must wear protective equipment when handling toxic chemicals.",
        tr: "Laboratuvar çalışanları, zehirli kimyasallarla çalışırken koruyucu ekipman giymek zorundadır.",
        note: "Zorunluluk → must."
      },
      {
        en: "Since the samples are stored at the correct temperature, researchers ---- worry about contamination during transport.",
        tr: "Numuneler doğru sıcaklıkta saklandığından, araştırmacıların taşıma sırasında kontaminasyondan endişe etmelerine gerek yoktur.",
        note: "Doğru cevap: do not have to (need not). Anlam 'gerek yok'; 'must not' (yasak) burada tuzaktır."
      },
      {
        en: "Patients with high blood pressure should reduce their daily salt intake.",
        tr: "Yüksek tansiyonu olan hastalar günlük tuz alımını azaltmalıdır.",
        note: "Tavsiye → should."
      }
    ],
    examTip:
      "Modal sorusunda önce yapı kontrolü yap: modal'dan sonra V1 gelmeyen şıkları ele. Sonra cümlenin anlam havasını belirle: temkinli olasılık mı (may/might), zorunluluk mu (must/have to), tavsiye mi (should), gereksizlik mi (don't have to). must not ile don't have to arasında kaldığında 'yasak mı, gerek mi yok?' diye sor — YÖKDİL bu ayrımı sormayı çok sever."
  },
  {
    id: "modals-past",
    order: 7,
    title: "Past & Future Modals",
    videoRef: "Video 9",
    summary:
      "Geçmişe yönelik modal'lar YÖKDİL'in ayırt edici konusudur. Formül tektir ve hepsi buna uyar: MODAL + HAVE + V3. Bu kalıbı gördüğün an geçmişe dönük bir yorum yapıldığını anla.\n\n## Kalıplar ve Türkçe Karşılıkları\n\n- must have V3 = \"kesin ...miştir / ...miş olmalı\" (geçmişe güçlü çıkarım). \"The dinosaurs must have died out after a massive impact.\" = \"Dinozorlar büyük bir çarpmadan sonra yok olmuş olmalı.\"\n- may/might/could have V3 = \"...miş olabilir\" (geçmiş olasılık). \"The ancient settlement might have been abandoned due to drought.\" Fen metinlerinde geçmişe dönük bilimsel tahminlerde (fosiller, jeolojik olaylar, arkeoloji) en sık bu kalıp çıkar.\n- can't/couldn't have V3 = \"...miş olamaz\" (geçmişe güçlü olumsuz çıkarım). must have V3'ün zıttıdır.\n- should have V3 = \"...meliydi (ama yapmadı)\" → geçmişe eleştiri/pişmanlık. \"The authorities should have taken precautions earlier.\" = \"Yetkililer önlemleri daha erken almalıydı.\"\n- needn't have V3 = \"...mesine gerek yoktu (ama yaptı)\".\n- would have V3 = \"...ecekti / ...irdi\" → gerçekleşmemiş geçmiş sonuç (Type 3 koşul cümlelerinin ana parçası).\n\n## Sınav Mantığı\n\nBu soru tipi anlam sorusudur: şıklarda genelde must have V3, might have V3, can't have V3, should have V3 yan yana dizilir. Karar verdiren şey cümlenin kesinlik derecesidir:\n\n- Güçlü kanıt/kesinlik havası → must have V3.\n- \"belki, muhtemelen\" havası → may/might/could have V3.\n- İmkansızlık → can't have V3.\n- \"keşke yapsaydı, hataydı\" havası → should have V3.\n\n## Future Modals ve Diğerleri\n\n- will be able to = gelecekte \"-ebilecek\": can'in geleceği yoktur, yerine bu kullanılır. \"Doctors will be able to detect the disease earlier.\"\n- will have to = gelecekte zorunluluk: \"Countries will have to reduce emissions.\"\n- would: geçmişteki tekrarlanan alışkanlık (used to gibi) ve rica kalıpları.\n- used to + V1 = \"eskiden ...irdi (artık değil)\": \"Scientists used to believe the atom was indivisible.\"\n\n## Püf Noktası\n\nmodal + have + V3 kalıbında have hiç değişmez (has/had olmaz): \"must has been\" diye bir şık görürsen anında ele. Geçmiş zarfı (millions of years ago, in ancient times) + yorum havası = modal have V3 sorusudur.",
    keyPoints: [
      "Geçmişe yorum kalıbı tektir: modal + have + V3; 'have' asla has/had olmaz.",
      "must have V3 = 'kesin ...miş olmalı' (güçlü çıkarım); can't have V3 = '...miş olamaz' (tam zıttı).",
      "may / might / could have V3 = '...miş olabilir'; geçmişe dönük bilimsel tahminlerin standart kalıbıdır.",
      "should have V3 = '...meliydi ama yapmadı'; geçmişe eleştiri/pişmanlık bildirir.",
      "can'in gelecek hali yoktur; gelecekte yetenek için will be able to kullanılır.",
      "used to + V1 = 'eskiden ...irdi, artık değil'; bilim tarihindeki eski inanışlar bu kalıpla anlatılır.",
      "Geçmiş zaman zarfı + tahmin/yorum havası gördüğünde şıklarda modal + have + V3 ara."
    ],
    examples: [
      {
        en: "The crater suggests that a massive asteroid must have struck the Earth millions of years ago.",
        tr: "Krater, milyonlarca yıl önce dev bir asteroidin Dünya'ya çarpmış olması gerektiğini gösteriyor.",
        note: "Güçlü kanıt (krater) → must have struck: 'kesin çarpmıştır'."
      },
      {
        en: "The ancient city might have been abandoned because of a prolonged drought.",
        tr: "Antik kent, uzun süren bir kuraklık yüzünden terk edilmiş olabilir.",
        note: "Kesin kanıt yok, tahmin → might have been."
      },
      {
        en: "The authorities should have warned local residents before the flood reached the valley.",
        tr: "Yetkililer, sel vadiye ulaşmadan önce yöre sakinlerini uyarmalıydı.",
        note: "Yapılmadı, eleştiri var → should have warned."
      },
      {
        en: "Given the freshness of the tracks, the animal ---- the area more than a few hours ago.",
        tr: "İzlerin tazeliği göz önüne alındığında, hayvan bölgeyi birkaç saatten daha önce terk etmiş olamaz.",
        note: "Doğru cevap: can't have left. Kanıt (taze izler) imkânsızlık gösteriyor → '...miş olamaz'; 'must have left' anlamca ters olduğu için tuzaktır."
      },
      {
        en: "Thanks to new imaging techniques, doctors will be able to diagnose tumours at much earlier stages.",
        tr: "Yeni görüntüleme teknikleri sayesinde doktorlar, tümörleri çok daha erken evrelerde teşhis edebilecek.",
        note: "Gelecekte yetenek → will be able to (will can yanlıştır)."
      },
      {
        en: "Scientists used to believe that the continents were fixed in place.",
        tr: "Bilim insanları eskiden kıtaların yerlerinin sabit olduğuna inanırdı.",
        note: "Eski, artık geçerli olmayan inanış → used to."
      }
    ],
    examTip:
      "Şıklarda must have V3 / might have V3 / can't have V3 / should have V3 dizilmişse soru kesinlik derecesi sorusudur: cümledeki kanıta bak — kanıt güçlüyse must have, tahminse might have, imkânsızsa can't have, eleştiriyse should have. Yapı elemesini unutma: 'must has been' veya modal'dan sonra V3'süz have gören şıklar direkt çöpe."
  },
  {
    id: "passive",
    order: 8,
    title: "Passive Voice",
    videoRef: "Video 10",
    summary:
      "Passive (edilgen çatı) YÖKDİL Fen'in EN önemli konusudur çünkü bilimsel dil doğası gereği edilgendir: \"deney yapıldı, sonuçlar analiz edildi, madde keşfedildi\". Neredeyse her sınavda passive'e dayalı soru vardır ve okuma parçalarının yarısı edilgen cümledir.\n\n## Temel Formül\n\nPASSIVE = BE + V3. Her zaman bu ikili vardır; değişen tek şey BE'nin zamana göre çekimidir:\n\n- Present Simple: am/is/are + V3 → \"The data is collected annually.\" (toplanır)\n- Present Continuous: am/is/are being + V3 → \"The samples are being analysed.\" (analiz ediliyor)\n- Present Perfect: have/has been + V3 → \"The vaccine has been developed.\" (geliştirilmiştir)\n- Simple Past: was/were + V3 → \"Penicillin was discovered in 1928.\" (keşfedildi)\n- Past Perfect: had been + V3 → (edilmişti)\n- Future: will be + V3 → \"The results will be published.\" (yayımlanacak)\n- Modal: modal + be + V3 → \"The disease can be prevented.\" (önlenebilir)\n- Modal geçmiş: modal + have been + V3 → \"The fossil must have been buried rapidly.\"\n\n## Aktif mi Passive mi? İki Soru\n\n1. Özne işi YAPAN mı, işten ETKİLENEN mi? Özne işi yapıyorsa aktif, işe maruz kalıyorsa passive. \"The experiment ---- by the team\" → deney kendisi yapamaz, yapılır → passive.\n2. Fiilden sonra NESNE var mı? Boşluktan sonra nesne geliyorsa aktif; nesne yoksa (özellikle hemen \"by ...\" geliyorsa) passive ihtimali yüksektir.\n\n## by + Yapan\n\nEdilgen cümlede işi yapan \"by\" ile verilir: \"The theory was proposed by Einstein.\" Cümlede by + kişi/kurum görmek passive'in en net sinyalidir.\n\n## Püf Noktası\n\n- Türkçe test: boşluğa \"-ıldı / -ilmiş / -ilir\" anlamı oturuyorsa passive şıkkı seç.\n- Passive şıkkı seçerken zaman uyumunu da kontrol et: cümledeki zarf hangi tense'i istiyorsa BE o tense'te çekilmiş olmalı (in 1928 → was/were V3; since 2010 → has/have been V3).\n- occur, happen, take place, appear, die gibi geçişsiz fiillerin passive'i OLMAZ; \"was occurred, was happened\" gören şıkkı anında ele. Bu, YÖKDİL'in bilinen tuzağıdır.",
    keyPoints: [
      "Passive'in değişmez formülü BE + V3'tür; zamana göre sadece BE çekilir (is/was/has been/will be + V3).",
      "Özne işi yapan değil de işten etkilenen ise (deney yapılır, madde keşfedilir) boşluğa passive gelir.",
      "Cümlede 'by + yapan' görmek passive'in en net sinyalidir.",
      "Boşluktan sonra nesne varsa aktif, nesne yoksa passive ihtimali yüksektir.",
      "Modal'lı passive: modal + be + V3 (can be prevented); geçmişte modal + have been + V3.",
      "occur, happen, take place, appear gibi geçişsiz fiiller passive olmaz; 'was occurred' şıkkı anında elenir.",
      "Passive şıkkında zaman uyumunu da kontrol et: zarf hangi tense'i istiyorsa BE o zamanda çekilmelidir."
    ],
    examples: [
      {
        en: "Penicillin was discovered by Alexander Fleming in 1928.",
        tr: "Penisilin, 1928'de Alexander Fleming tarafından keşfedildi.",
        note: "by + yapan ve 'in 1928' → Simple Past passive (was + V3)."
      },
      {
        en: "The samples are being analysed in the laboratory at the moment.",
        tr: "Numuneler şu anda laboratuvarda analiz ediliyor.",
        note: "'at the moment' + edilgen anlam → are being + V3."
      },
      {
        en: "Numerous vaccines have been developed since the discovery of the immune system's mechanisms.",
        tr: "Bağışıklık sisteminin mekanizmalarının keşfinden bu yana çok sayıda aşı geliştirilmiştir.",
        note: "'since' + edilgen anlam → have been + V3 (Present Perfect passive)."
      },
      {
        en: "Many infectious diseases ---- through basic hygiene measures and vaccination.",
        tr: "Birçok bulaşıcı hastalık, temel hijyen önlemleri ve aşılama yoluyla önlenebilir.",
        note: "Doğru cevap: can be prevented. Hastalık kendini önleyemez, önlenir → passive; olasılık anlamı → modal + be + V3."
      },
      {
        en: "The earthquake occurred along a previously unknown fault line.",
        tr: "Deprem, daha önce bilinmeyen bir fay hattı boyunca meydana geldi.",
        note: "occur geçişsizdir, passive olmaz; 'was occurred' yanlıştır."
      },
      {
        en: "The findings will be published in an international journal next month.",
        tr: "Bulgular gelecek ay uluslararası bir dergide yayımlanacak.",
        note: "'next month' + edilgen anlam → will be + V3 (Future passive)."
      }
    ],
    examTip:
      "Boşluklu soruda kendine iki soru sor: özne bu işi kendisi mi yapıyor, yoksa iş ona mı yapılıyor? Ve boşluktan sonra nesne var mı? Edilgen anlam + nesnesizlik + belki bir 'by' → BE + V3 içeren şık. Sonra zarfa bakıp BE'nin doğru zamanda çekildiğini doğrula. Şıklarda 'was occurred / was happened' tipinde geçişsiz fiil passive'i görürsen sevin: o şıklar bedava eleme demektir."
  },
  {
    id: "prepositions",
    order: 9,
    title: "Prepositions",
    videoRef: "Video 11",
    summary:
      "Preposition (edat/ilgeç) soruları YÖKDİL'de her sınavda 2-3 tane çıkar ve genelde ilk sorulardır. Kötü haber: kural azdır, çoğu EZBER ister. İyi haber: sınav hep aynı kalıpları sorar; doğru listeyi ezberlersen bunlar en hızlı çözdüğün sorular olur.\n\n## Temel Zaman/Yer Mantığı\n\n- IN: geniş alan ve uzun zaman → in Turkey, in the atmosphere, in 2020, in the 21st century, in winter.\n- ON: yüzey ve gün → on the surface, on Mars'ın yüzeyinde (on the surface of Mars), on Monday, on 5 May.\n- AT: nokta → at the university, at 5 o'clock, at the beginning/end of.\n\nKaba kural: yüzyıl/yıl/ay/mevsim IN, gün ON, saat AT.\n\n## Sınavın Sevdiği Kalıplar (Fiil + Preposition)\n\n- depend ON (-e bağlı olmak), rely ON (-e güvenmek/dayanmak)\n- result IN (-e yol açmak) ↔ result FROM (-den kaynaklanmak) — YÖKDİL bu ikiliyi ayırt etmeyi ÇOK sever\n- lead TO (-e yol açmak), contribute TO (-e katkıda bulunmak)\n- consist OF (-den oluşmak), be composed OF\n- focus ON, concentrate ON (-e odaklanmak)\n- differ FROM (-den farklı olmak), protect FROM/AGAINST (-den korumak)\n- suffer FROM (-den mustarip olmak), derive FROM (-den elde edilmek)\n- be responsible FOR (-den sorumlu olmak), be associated WITH (-yle ilişkili)\n- be exposed TO (-e maruz kalmak), be related TO (-yle ilgili)\n\n## Sıfat/İsim + Preposition\n\n- be capable OF (-e muktedir), be aware OF (-in farkında)\n- be similar TO (-e benzer), be different FROM (-den farklı)\n- an increase/decrease IN (bir şeydeki artış/azalış — increase OF değil!)\n- the effect/impact OF X ON Y (X'in Y üzerindeki etkisi)\n- the reason FOR (-in nedeni), the cause OF (-in sebebi)\n\n## Püf Noktası\n\n- \"increase/decrease/rise/fall IN + alan\": \"an increase in temperature\" = sıcaklıktaki artış. Sınav klasiğidir.\n- result IN mi FROM mu? Ok yönünü düşün: sebep result IN sonuç; sonuç result FROM sebep. \"Smoking results in cancer\" / \"Cancer results from smoking\".\n- Bu kalıpları tek tek değil, fiille birlikte blok halinde ezberle: \"dependON, consistOF, leadTO\" gibi. Kelime çalışırken preposition'ıyla birlikte yaz.",
    keyPoints: [
      "Zamanlarda kaba kural: yıl/ay/mevsim/yüzyıl IN, gün ON, saat AT.",
      "depend on, rely on, focus on kalıpları ON ister; consist of, be capable of kalıpları OF ister.",
      "result IN = '-e yol açmak', result FROM = '-den kaynaklanmak'; ok yönü sebepten sonuca gider.",
      "'an increase/decrease IN + alan' kalıbı sınav klasiğidir: an increase in temperature.",
      "'the effect/impact OF X ON Y' kalıbında iki preposition birden sorulabilir.",
      "be exposed to, lead to, contribute to kalıpları TO ister; suffer from, differ from FROM ister.",
      "Preposition ezberini fiille blok halinde yap: fiili preposition'sız öğrenme."
    ],
    examples: [
      {
        en: "The success of the experiment depends on the purity of the chemicals used.",
        tr: "Deneyin başarısı, kullanılan kimyasalların saflığına bağlıdır.",
        note: "depend ON — sınavın en sık sorduğu kalıplardan."
      },
      {
        en: "Excessive exposure to ultraviolet radiation can result in serious skin damage.",
        tr: "Ultraviyole radyasyona aşırı maruz kalmak ciddi cilt hasarına yol açabilir.",
        note: "result IN = -e yol açmak (sebep → sonuç yönü)."
      },
      {
        en: "The human body consists of trillions of cells working in coordination.",
        tr: "İnsan vücudu, eşgüdüm içinde çalışan trilyonlarca hücreden oluşur.",
        note: "consist OF = -den oluşmak; 'consist from' diye bir kalıp yoktur."
      },
      {
        en: "Recent studies have examined the effect of air pollution ---- respiratory diseases in urban areas.",
        tr: "Son çalışmalar, hava kirliliğinin kentsel alanlardaki solunum yolu hastalıkları üzerindeki etkisini incelemiştir.",
        note: "Doğru cevap: on. Kalıp: the effect of X ON Y = X'in Y ÜZERİNDEKİ etkisi."
      },
      {
        en: "Researchers observed a significant increase in sea levels over the last century.",
        tr: "Araştırmacılar, geçen yüzyıl boyunca deniz seviyelerinde önemli bir artış gözlemledi.",
        note: "an increase IN + alan; 'increase of' çeldiricidir."
      },
      {
        en: "Many respiratory problems result from long-term exposure to polluted air.",
        tr: "Birçok solunum sorunu, kirli havaya uzun süre maruz kalmaktan kaynaklanır.",
        note: "result FROM = -den kaynaklanmak; result IN ile yönü zıttır."
      }
    ],
    examTip:
      "Preposition sorusu bilgiyi ölçer, mantık yürütmeye çalışma; kalıbı biliyorsan 10 saniyede çöz, bilmiyorsan takılma ve en mantıklı geleni işaretleyip geç. Öncelikli ezber listen: depend on, result in/from, consist of, lead to, effect of X on Y, increase in. result IN mi FROM mu ikilemi neredeyse her sınavda vardır: cümlede sebep başta ise IN, sonuç başta ise FROM."
  }
]
