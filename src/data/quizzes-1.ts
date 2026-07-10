import type { QuizQuestion } from './types'

export const quizzes1: QuizQuestion[] = [
  // ---------- present-tenses ----------
  {
    id: "present-tenses-1",
    topicId: "present-tenses",
    question: "Water ---- at 100 degrees Celsius at sea level, but this temperature drops at higher altitudes.",
    options: ["boils", "is boiling", "has boiled", "boiled", "will boil"],
    answer: 0,
    explanation: "Değişmez bir bilimsel gerçek anlatılıyor. Bilimsel gerçekler ve doğa kanunları her zaman Present Simple ile ifade edilir."
  },
  {
    id: "present-tenses-2",
    topicId: "present-tenses",
    question: "Researchers at the institute ---- a new vaccine against the virus at the moment, and early results seem promising.",
    options: ["develop", "are developing", "will develop", "developed", "had developed"],
    answer: 1,
    explanation: "'At the moment' sinyal ifadesi, eylemin şu anda devam ettiğini gösterir. Konuşma anında süren işler Present Continuous ile anlatılır."
  },
  {
    id: "present-tenses-3",
    topicId: "present-tenses",
    question: "The Earth ---- around the Sun once every 365.25 days, which is why we add an extra day to the calendar every four years.",
    options: ["is orbiting", "orbited", "orbits", "has orbited", "will orbit"],
    answer: 2,
    explanation: "'Once every 365.25 days' düzenli tekrar eden bir doğa olayını gösterir. Rutinler ve bilimsel gerçekler Present Simple ister."
  },
  {
    id: "present-tenses-4",
    topicId: "present-tenses",
    question: "Global temperatures ---- at an alarming rate as greenhouse gas concentrations continue to increase.",
    options: ["rise", "rose", "have risen", "are rising", "will have risen"],
    answer: 3,
    explanation: "'Continue to increase' ifadesi süregelen bir değişimi gösterir. Günümüzde devam eden değişim ve trendler Present Continuous ile anlatılır."
  },
  {
    id: "present-tenses-5",
    topicId: "present-tenses",
    question: "Sound ---- faster through water than through air because water molecules are packed more densely.",
    options: ["is traveling", "travels", "traveled", "has traveled", "will travel"],
    answer: 1,
    explanation: "Fizik kanunu niteliğinde genel geçer bir bilgi verilmektedir; cümlenin diğer fiili (are packed) de geniş zamandadır. Bilimsel gerçek = Present Simple."
  },
  {
    id: "present-tenses-6",
    topicId: "present-tenses",
    question: "More and more hospitals ---- artificial intelligence to detect tumours at earlier stages these days.",
    options: ["use", "used", "are using", "have used", "will use"],
    answer: 2,
    explanation: "'These days' ve 'more and more' sinyalleri, içinde bulunduğumuz dönemde gelişen bir eğilimi gösterir; bu durum Present Continuous ile ifade edilir."
  },
  {
    id: "present-tenses-7",
    topicId: "present-tenses",
    question: "Light from distant galaxies ---- millions of years to reach telescopes on Earth, which is why astronomers effectively look into the past.",
    options: ["is taking", "has taken", "took", "takes", "will take"],
    answer: 3,
    explanation: "Evrensel ve her zaman geçerli bir astronomi gerçeği anlatılıyor; ana cümledeki 'look' fiili de geniş zamandadır. Doğru cevap Present Simple."
  },
  {
    id: "present-tenses-8",
    topicId: "present-tenses",
    question: "Antibiotic resistance ---- an increasingly serious threat to public health, so scientists are urgently searching for alternative treatments.",
    options: ["became", "becomes", "had become", "is becoming", "will have become"],
    answer: 3,
    explanation: "'Increasingly' zarfı, durumun giderek değiştiğini gösterir; ikinci cümledeki 'are searching' de şimdiki zamandadır. Devam eden değişim Present Continuous ister."
  },

  // ---------- perfect-tenses ----------
  {
    id: "perfect-tenses-1",
    topicId: "perfect-tenses",
    question: "Astronomers ---- more than 5,000 exoplanets since the first discovery was made in 1992.",
    options: ["discovered", "have discovered", "discover", "are discovering", "had discovered"],
    answer: 1,
    explanation: "'Since + geçmiş zaman noktası' yapısı, geçmişte başlayıp hâlâ süren bir eylemi gösterir ve Present Perfect gerektirir."
  },
  {
    id: "perfect-tenses-2",
    topicId: "perfect-tenses",
    question: "Over the past two decades, renewable energy technology ---- remarkably cheaper and more efficient.",
    options: ["becomes", "became", "has become", "had become", "will become"],
    answer: 2,
    explanation: "'Over the past two decades' (son yirmi yılda) ifadesi, geçmişten günümüze uzanan bir süreci gösterir; bu sinyal Present Perfect ister."
  },
  {
    id: "perfect-tenses-3",
    topicId: "perfect-tenses",
    question: "Researchers ---- a complete cure for the disease yet, but several promising drugs are in clinical trials.",
    options: ["did not find", "do not find", "had not found", "have not found", "will not find"],
    answer: 3,
    explanation: "'Yet' (henüz) sinyal kelimesi olumsuz cümlelerde Present Perfect ile kullanılır; süreç günümüze kadar uzanmaktadır."
  },
  {
    id: "perfect-tenses-4",
    topicId: "perfect-tenses",
    question: "By the time the spacecraft reached Jupiter, it ---- through space for more than five years.",
    options: ["has traveled", "had been traveling", "travels", "is traveling", "will have traveled"],
    answer: 1,
    explanation: "'By the time + Past Simple (reached)' yapısında, ondan önce başlayıp süren eylem Past Perfect (Continuous) ile anlatılır; 'for more than five years' süreklilik vurgusunu güçlendirir."
  },
  {
    id: "perfect-tenses-5",
    topicId: "perfect-tenses",
    question: "The research team ---- on this gene-editing project for three years, and they expect the first results by next spring.",
    options: ["worked", "works", "is working", "has been working", "had worked"],
    answer: 3,
    explanation: "'For three years' + eylemin hâlâ sürdüğünü gösteren ikinci cümle, geçmişte başlayıp devam eden eylemi işaret eder: Present Perfect Continuous."
  },
  {
    id: "perfect-tenses-6",
    topicId: "perfect-tenses",
    question: "By 2050, engineers estimate that global energy demand ---- by nearly fifty percent.",
    options: ["will have increased", "has increased", "increased", "had increased", "increases"],
    answer: 0,
    explanation: "'By + gelecek zaman noktası (by 2050)' sinyali, gelecekte belirli bir tarihe kadar tamamlanacak eylemi gösterir: Future Perfect."
  },
  {
    id: "perfect-tenses-7",
    topicId: "perfect-tenses",
    question: "Geologists confirmed that the glacier ---- significantly before satellite monitoring began in the 1970s.",
    options: ["has retreated", "retreated", "had retreated", "retreats", "would retreat"],
    answer: 2,
    explanation: "'Before + Past Simple (began)' yapısında, daha önce gerçekleşen eylem Past Perfect ile ifade edilir; iki geçmiş eylemden önceki 'had retreated' olmalıdır."
  },
  {
    id: "perfect-tenses-8",
    topicId: "perfect-tenses",
    question: "This is the first time that astronomers ---- a direct image of a black hole's shadow.",
    options: ["captured", "capture", "are capturing", "had captured", "have captured"],
    answer: 4,
    explanation: "'This is the first time that...' kalıbı her zaman Present Perfect ile devam eder; ilk kez yaşanan deneyimler bu yapıyla anlatılır."
  },

  // ---------- past-tenses ----------
  {
    id: "past-tenses-1",
    topicId: "past-tenses",
    question: "Alexander Fleming ---- penicillin in 1928 while he was studying bacteria in his laboratory.",
    options: ["discovers", "has discovered", "discovered", "was discovering", "had discovered"],
    answer: 2,
    explanation: "'In 1928' gibi belirli bir geçmiş tarih Past Simple gerektirir; tamamlanmış geçmiş olaylarda Present Perfect kullanılmaz."
  },
  {
    id: "past-tenses-2",
    topicId: "past-tenses",
    question: "Dinosaurs ---- the Earth for about 165 million years before they went extinct.",
    options: ["dominate", "have dominated", "are dominating", "dominated", "will dominate"],
    answer: 3,
    explanation: "Tamamen geçmişte kalmış ve bitmiş bir dönem anlatılıyor ('before they went extinct'). Günümüzle bağı olmayan geçmiş olaylar Past Simple ister."
  },
  {
    id: "past-tenses-3",
    topicId: "past-tenses",
    question: "The technicians ---- the giant telescope when the power in the observatory suddenly went out.",
    options: ["calibrated", "were calibrating", "have calibrated", "calibrate", "had calibrated"],
    answer: 1,
    explanation: "Geçmişte devam eden bir eylem (kalibrasyon), ani bir olayla (elektriğin kesilmesi) bölünüyor. 'When + Past Simple' ile kesilen eylem Past Continuous ile anlatılır."
  },
  {
    id: "past-tenses-4",
    topicId: "past-tenses",
    question: "Marie Curie ---- two Nobel Prizes, a feat that very few scientists have achieved since.",
    options: ["has won", "won", "had won", "wins", "would win"],
    answer: 1,
    explanation: "Hayatta olmayan kişilerin eylemleri Past Simple ile anlatılır; 'has won' kullanılamaz çünkü Present Perfect günümüzle bağlantı gerektirir."
  },
  {
    id: "past-tenses-5",
    topicId: "past-tenses",
    question: "Before computers became widespread, engineers ---- complex calculations by hand with the help of slide rules.",
    options: ["perform", "are performing", "have performed", "will perform", "used to perform"],
    answer: 4,
    explanation: "'Before computers became widespread' geçmişteki eski bir alışkanlığı işaret eder; artık yapılmayan geçmiş alışkanlıklar 'used to' ile ifade edilir."
  },
  {
    id: "past-tenses-6",
    topicId: "past-tenses",
    question: "The patient ---- from severe headaches for weeks before doctors finally identified the underlying cause.",
    options: ["suffers", "is suffering", "had been suffering", "has suffered", "will suffer"],
    answer: 2,
    explanation: "'For weeks before + Past Simple (identified)' yapısı, geçmişteki bir olaydan önce bir süre devam etmiş eylemi gösterir: Past Perfect Continuous."
  },
  {
    id: "past-tenses-7",
    topicId: "past-tenses",
    question: "When Galileo pointed his telescope at Jupiter in 1610, he ---- four moons that no one had ever seen before.",
    options: ["observes", "has observed", "was observing", "observed", "had observed"],
    answer: 3,
    explanation: "'In 1610' belirli geçmiş tarihi ve 'pointed' fiiliyle art arda gelen olay zinciri Past Simple gerektirir; gözlem, teleskobu çevirdikten sonra gerçekleşmiştir."
  },
  {
    id: "past-tenses-8",
    topicId: "past-tenses",
    question: "The laboratory ---- its safety protocols shortly after the chemical leak occurred in 2019.",
    options: ["revised", "has revised", "revises", "had revised", "was revising"],
    answer: 0,
    explanation: "'Shortly after' revizyonun sızıntıdan SONRA yapıldığını gösterir; bu yüzden Past Perfect (had revised) yanlış olur. Belirli geçmiş tarihle (in 2019) Past Simple kullanılır."
  },

  // ---------- future-tenses ----------
  {
    id: "future-tenses-1",
    topicId: "future-tenses",
    question: "Astronomers predict that the comet ---- visible to the naked eye next month.",
    options: ["is", "was", "will be", "has been", "had been"],
    answer: 2,
    explanation: "'Next month' sinyali ve 'predict' (tahmin etmek) fiili geleceğe yönelik bir öngörüyü gösterir; tahminler 'will' ile ifade edilir."
  },
  {
    id: "future-tenses-2",
    topicId: "future-tenses",
    question: "Look at those dark clouds over the observatory; it ---- soon, so tonight's sky survey may be cancelled.",
    options: ["rains", "rained", "has rained", "is going to rain", "was raining"],
    answer: 3,
    explanation: "Mevcut bir kanıta (kara bulutlar) dayanan gelecek tahmini 'be going to' ile yapılır; 'Look at those clouds' tipik bir 'going to' sinyalidir."
  },
  {
    id: "future-tenses-3",
    topicId: "future-tenses",
    question: "The research team ---- its findings at the international climate conference next week.",
    options: ["will present", "presented", "has presented", "was presenting", "had presented"],
    answer: 0,
    explanation: "'Next week' gelecek zaman sinyalidir; diğer şıkların tümü geçmiş veya perfect yapılar olduğundan gelecek anlamı yalnızca 'will present' ile sağlanır."
  },
  {
    id: "future-tenses-4",
    topicId: "future-tenses",
    question: "By the end of this decade, electric vehicles ---- a substantial share of the global car market.",
    options: ["captured", "have captured", "capture", "will have captured", "had captured"],
    answer: 3,
    explanation: "'By the end of this decade' (bu on yılın sonuna kadar) sinyali, gelecekte belli bir noktaya kadar tamamlanacak eylemi gösterir: Future Perfect."
  },
  {
    id: "future-tenses-5",
    topicId: "future-tenses",
    question: "This time tomorrow, the astronauts ---- their first spacewalk outside the space station.",
    options: ["perform", "performed", "have performed", "had performed", "will be performing"],
    answer: 4,
    explanation: "'This time tomorrow' (yarın bu saatlerde) sinyali, gelecekte belirli bir anda sürmekte olacak eylemi gösterir: Future Continuous."
  },
  {
    id: "future-tenses-6",
    topicId: "future-tenses",
    question: "As soon as the test results ----, the doctors will decide on the most suitable treatment for the patient.",
    options: ["will arrive", "arrive", "arrived", "had arrived", "will have arrived"],
    answer: 1,
    explanation: "'As soon as' gibi zaman bağlaçlarından sonra gelecek anlamı olsa bile 'will' kullanılmaz; yan cümle Present Simple ile kurulur (ana cümlede 'will decide' vardır)."
  },
  {
    id: "future-tenses-7",
    topicId: "future-tenses",
    question: "Experts warn that unless emissions are reduced drastically, sea levels ---- by up to one metre by 2100.",
    options: ["will have risen", "rose", "have risen", "had risen", "rise"],
    answer: 0,
    explanation: "'By 2100' sinyali, gelecekteki bir tarihe kadar tamamlanmış olacak değişimi gösterir: Future Perfect. Diğer şıklar geçmiş veya geniş zaman olduğundan gelecek anlamını veremez."
  },
  {
    id: "future-tenses-8",
    topicId: "future-tenses",
    question: "The spacecraft ---- around Mars for six months by the time the landing module separates from it.",
    options: ["orbits", "orbited", "will have been orbiting", "has orbited", "is orbiting"],
    answer: 2,
    explanation: "'For six months by the time...' yapısı, gelecekteki bir ana kadar sürmüş olacak eylemi gösterir: Future Perfect Continuous."
  },

  // ---------- tense-agreement ----------
  {
    id: "tense-agreement-1",
    topicId: "tense-agreement",
    question: "The professor explained to the students that water ---- of two hydrogen atoms and one oxygen atom.",
    options: ["consisted", "will consist", "has consisted", "had consisted", "consists"],
    answer: 4,
    explanation: "Ana cümle geçmiş zamanda (explained) olsa bile, yan cümlede değişmez bir bilimsel gerçek varsa Present Simple korunur."
  },
  {
    id: "tense-agreement-2",
    topicId: "tense-agreement",
    question: "Before the invention of the microscope, scientists ---- that microorganisms even existed.",
    options: ["do not know", "have not known", "did not know", "will not know", "had not been knowing"],
    answer: 2,
    explanation: "'Before the invention of...' geçmiş bir dönemi işaret eder ve yan cümledeki 'existed' fiiliyle zaman uyumu için Past Simple gerekir."
  },
  {
    id: "tense-agreement-3",
    topicId: "tense-agreement",
    question: "When the volcano erupted, ash clouds ---- air traffic across the entire continent for days.",
    options: ["disrupt", "have disrupted", "are disrupting", "disrupted", "will disrupt"],
    answer: 3,
    explanation: "Ana cümledeki 'erupted' fiili Past Simple olduğundan, aynı olay zincirindeki ikinci eylem de Past Simple ile uyumlu olmalıdır."
  },
  {
    id: "tense-agreement-4",
    topicId: "tense-agreement",
    question: "The researchers announced that they ---- a major breakthrough in battery technology the previous month.",
    options: ["had achieved", "achieve", "have achieved", "will achieve", "achieves"],
    answer: 0,
    explanation: "Aktarılan eylem, geçmişteki duyurudan (announced) daha önce gerçekleşmiştir; 'the previous month' sinyaliyle Past Perfect gerekir."
  },
  {
    id: "tense-agreement-5",
    topicId: "tense-agreement",
    question: "Since satellites began monitoring the polar regions, scientists ---- a steady decline in Arctic sea ice.",
    options: ["observe", "observed", "had observed", "have observed", "will observe"],
    answer: 3,
    explanation: "'Since + Past Simple (began)' yapısında ana cümle Present Perfect olmalıdır; eylem geçmişte başlayıp günümüze kadar sürmektedir."
  },
  {
    id: "tense-agreement-6",
    topicId: "tense-agreement",
    question: "As the temperature of the solution ----, the reaction rate increases proportionally.",
    options: ["rose", "rises", "will rise", "had risen", "was rising"],
    answer: 1,
    explanation: "Ana cümledeki 'increases' Present Simple olduğundan, genel geçer bu bilimsel ilişkide yan cümle de Present Simple ile uyumlu olmalıdır."
  },
  {
    id: "tense-agreement-7",
    topicId: "tense-agreement",
    question: "Kepler showed that planets ---- in elliptical orbits rather than in perfect circles.",
    options: ["moved", "had moved", "will move", "move", "have moved"],
    answer: 3,
    explanation: "Ana cümle geçmiş zamanda (showed) olsa da, gezegenlerin hareketi hâlâ geçerli bir doğa kanunudur; bilimsel gerçekler Present Simple ile korunur."
  },
  {
    id: "tense-agreement-8",
    topicId: "tense-agreement",
    question: "By the time the antidote arrived at the rural clinic, the venom ---- to spread through the patient's bloodstream.",
    options: ["has already begun", "already began", "had already begun", "will already have begun", "is already beginning"],
    answer: 2,
    explanation: "'By the time + Past Simple (arrived)' yapısında, ondan önce gerçekleşmiş eylem Past Perfect ile anlatılır; 'already' bu öncelik vurgusunu güçlendirir."
  },

  // ---------- modals-present ----------
  {
    id: "modals-present-1",
    topicId: "modals-present",
    question: "Excessive exposure to ultraviolet radiation ---- serious damage to skin cells and increase the risk of cancer.",
    options: ["can cause", "must have caused", "should have caused", "would rather cause", "could have caused"],
    answer: 0,
    explanation: "Genel bir olasılık/yetenek anlatılıyor: UV ışını hasara yol açABİLİR. Genel geçer olasılıklar 'can' ile ifade edilir; 'have caused' içeren şıklar geçmişe yöneliktir."
  },
  {
    id: "modals-present-2",
    topicId: "modals-present",
    question: "Doctors agree that patients with high blood pressure ---- their daily salt intake significantly.",
    options: ["would reduce", "may have reduced", "should reduce", "must be reduced", "could have reduced"],
    answer: 2,
    explanation: "Doktor tavsiyesi söz konusudur; öneri ve tavsiyeler 'should' ile verilir. 'Must be reduced' pasif olduğu için özneyle (patients) uyumsuzdur."
  },
  {
    id: "modals-present-3",
    topicId: "modals-present",
    question: "According to safety regulations, laboratory workers ---- protective goggles whenever they handle hazardous chemicals.",
    options: ["would wear", "might have worn", "used to wear", "must wear", "should have worn"],
    answer: 3,
    explanation: "'According to safety regulations' resmi bir zorunluluğu işaret eder; kurallardan doğan zorunluluk 'must' ile ifade edilir."
  },
  {
    id: "modals-present-4",
    topicId: "modals-present",
    question: "The samples ---- be contaminated, because the results differ dramatically from those of all previous trials.",
    options: ["shall", "needn't", "must", "would rather", "had better"],
    answer: 2,
    explanation: "Eldeki güçlü kanıta dayanan mantıksal bir çıkarım yapılıyor ('kirlenmiş olmalı'). Güçlü tahmin/çıkarım 'must' ile yapılır."
  },
  {
    id: "modals-present-5",
    topicId: "modals-present",
    question: "You ---- take antibiotics for viral infections, as they are only effective against bacteria.",
    options: ["would rather not", "need not", "must", "can", "might"],
    answer: 1,
    explanation: "Antibiyotik almanın 'gereksiz' olduğu anlatılıyor; gereksizlik 'need not' (needn't) ile ifade edilir. Sebep cümlesi (only effective against bacteria) ipucudur."
  },
  {
    id: "modals-present-6",
    topicId: "modals-present",
    question: "Thanks to modern telescopes, astronomers ---- now detect planets orbiting stars thousands of light-years away.",
    options: ["must", "should", "had better", "would rather", "can"],
    answer: 4,
    explanation: "'Thanks to modern telescopes' teknolojinin sağladığı bir yeteneği/imkânı gösterir; yetenek ve imkân 'can' ile ifade edilir."
  },
  {
    id: "modals-present-7",
    topicId: "modals-present",
    question: "Given the current data, the experiment ---- succeed, but the researchers remain cautious about unexpected errors.",
    options: ["might", "must", "shall", "had better", "would rather"],
    answer: 0,
    explanation: "'But the researchers remain cautious' ifadesi kesinlik olmadığını gösterir; zayıf olasılık 'might' ile anlatılır. 'Must' güçlü kesinlik bildirdiği için uygun değildir."
  },
  {
    id: "modals-present-8",
    topicId: "modals-present",
    question: "Visitors to the sterile production facility ---- touch any of the equipment under any circumstances.",
    options: ["need not", "must not", "do not have to", "might not", "would not"],
    answer: 1,
    explanation: "'Under any circumstances' kesin bir yasağı işaret eder; yasak 'must not' ile ifade edilir. 'Need not' ve 'do not have to' yalnızca gereksizlik bildirir, yasak bildirmez."
  },

  // ---------- modals-past ----------
  {
    id: "modals-past-1",
    topicId: "modals-past",
    question: "Scientists believe that a massive asteroid impact ---- the extinction of the dinosaurs about 66 million years ago.",
    options: ["may have caused", "may cause", "must cause", "should cause", "can cause"],
    answer: 0,
    explanation: "'66 million years ago' geçmişe yönelik bir tahmin gerektirir; geçmiş hakkında olasılık 'may have + V3' ile ifade edilir. Diğer şıklar şimdiki/geniş zamana yöneliktir."
  },
  {
    id: "modals-past-2",
    topicId: "modals-past",
    question: "The patient's condition worsened rapidly; he ---- his medication regularly as the doctor had instructed.",
    options: ["need not take", "cannot have taken", "must take", "should take", "might take"],
    answer: 1,
    explanation: "Kanıta dayalı olumsuz çıkarım: Durumu kötüleştiğine göre ilaçlarını düzenli almış OLAMAZ. Geçmişe yönelik güçlü olumsuz çıkarım 'cannot have + V3' ile yapılır."
  },
  {
    id: "modals-past-3",
    topicId: "modals-past",
    question: "The experiment failed completely; the researchers ---- the samples at a much lower temperature.",
    options: ["must store", "should store", "should have stored", "can have stored", "may store"],
    answer: 2,
    explanation: "Geçmişte yapılması gerekip yapılmayan bir eylem eleştiriliyor ('saklamalıydılar'). Geçmişe yönelik pişmanlık/eleştiri 'should have + V3' ile ifade edilir."
  },
  {
    id: "modals-past-4",
    topicId: "modals-past",
    question: "Ancient civilizations ---- sophisticated astronomical knowledge, as their monuments align precisely with solar events.",
    options: ["should have possessed", "must have possessed", "may possess", "can possess", "needn't have possessed"],
    answer: 1,
    explanation: "Güçlü kanıta (anıtların güneş olaylarıyla hizalanması) dayanan geçmişe yönelik kesin çıkarım 'must have + V3' ile yapılır."
  },
  {
    id: "modals-past-5",
    topicId: "modals-past",
    question: "You ---- the laboratory report by hand; the department provides software that formats it automatically.",
    options: ["must have written", "cannot have written", "should write", "needn't have written", "may write"],
    answer: 3,
    explanation: "Geçmişte yapılmış ama gereksiz olduğu sonradan anlaşılan eylem 'needn't have + V3' ile anlatılır: 'Elle yazmana gerek yoktu.'"
  },
  {
    id: "modals-past-6",
    topicId: "modals-past",
    question: "The rescue team arrived too late; with earlier medical intervention, many more victims ----.",
    options: ["can be saved", "must be saved", "should be saved", "may be saved", "could have been saved"],
    answer: 4,
    explanation: "Geçmişte mümkün olan ama gerçekleşmeyen bir durum anlatılıyor ('kurtarılabilirlerdi'). Kaçırılmış geçmiş olasılık 'could have + V3' ile ifade edilir."
  },
  {
    id: "modals-past-7",
    topicId: "modals-past",
    question: "The fossil record suggests that early birds ---- from small feathered dinosaurs rather than from reptiles.",
    options: ["must evolve", "should evolve", "may have evolved", "can evolve", "had better evolve"],
    answer: 2,
    explanation: "'Suggests' fiili kesin olmayan bir bilimsel tahmini gösterir; geçmişteki bir olay hakkındaki olasılık 'may have + V3' ile ifade edilir."
  },
  {
    id: "modals-past-8",
    topicId: "modals-past",
    question: "The control group ---- the placebo instead of the actual drug, because their blood tests show no trace of the compound.",
    options: ["should receive", "must receive", "need not receive", "must have received", "would receive"],
    answer: 3,
    explanation: "Kan testlerindeki kanıta dayanarak geçmişe yönelik güçlü bir çıkarım yapılıyor ('plasebo almış olmalılar'): 'must have + V3'."
  },

  // ---------- passive ----------
  {
    id: "passive-1",
    topicId: "passive",
    question: "Penicillin, one of the most important drugs in history, ---- by Alexander Fleming in 1928.",
    options: ["discovered", "was discovered", "has discovered", "is discovered", "had discovered"],
    answer: 1,
    explanation: "'By Alexander Fleming' pasif yapının en net sinyalidir; özne (penisilin) eylemi yapan değil, eylemden etkilenendir. 'In 1928' ile Past Simple Passive gerekir."
  },
  {
    id: "passive-2",
    topicId: "passive",
    question: "Millions of tons of plastic waste ---- into the world's oceans every year.",
    options: ["dump", "dumped", "are dumped", "are dumping", "have dumped"],
    answer: 2,
    explanation: "Atıklar 'atma' eylemini yapamaz, eylemden etkilenir; bu yüzden pasif gerekir. 'Every year' sinyaliyle Present Simple Passive kullanılır."
  },
  {
    id: "passive-3",
    topicId: "passive",
    question: "A promising new cancer treatment ---- at the university hospital at the moment.",
    options: ["is testing", "tests", "has tested", "tested", "is being tested"],
    answer: 4,
    explanation: "Tedavi 'test etme' eylemini kendisi yapamaz; test edilendir. 'At the moment' sinyaliyle Present Continuous Passive (is being tested) gerekir."
  },
  {
    id: "passive-4",
    topicId: "passive",
    question: "The results of the clinical trial ---- until all the data have been carefully verified.",
    options: ["will not be published", "are not publishing", "will not publish", "have not published", "do not publish"],
    answer: 0,
    explanation: "Sonuçlar 'yayımlama' eylemini yapamaz, yayımlanır; pasif gerekir. 'Until' yan cümlesi gelecekteki bir koşulu gösterdiğinden Future Simple Passive uygundur."
  },
  {
    id: "passive-5",
    topicId: "passive",
    question: "Since the 1960s, hundreds of satellites ---- into Earth's orbit for communication and research purposes.",
    options: ["launched", "have launched", "were launched", "have been launched", "are launching"],
    answer: 3,
    explanation: "'Since the 1960s' Present Perfect ister; uydular fırlatma eylemini yapamayacağı için pasif gerekir: 'have been launched'."
  },
  {
    id: "passive-6",
    topicId: "passive",
    question: "After the accident, the damaged reactor ---- with a thick concrete shell to prevent radiation leaks.",
    options: ["covered", "was covered", "has covered", "is covering", "had covered"],
    answer: 1,
    explanation: "Reaktör kendini kaplayamaz; eylemden etkilenendir. 'After the accident' geçmişteki tamamlanmış olayı gösterir: Past Simple Passive."
  },
  {
    id: "passive-7",
    topicId: "passive",
    question: "The vaccine candidate ---- on thousands of volunteers before it received official approval.",
    options: ["had tested", "has been tested", "had been tested", "was testing", "has tested"],
    answer: 2,
    explanation: "'Before + Past Simple (received)' yapısında önce gerçekleşen eylem Past Perfect ister; aşı test edilen taraf olduğu için de pasif gerekir: 'had been tested'."
  },
  {
    id: "passive-8",
    topicId: "passive",
    question: "It ---- that rising ocean temperatures are responsible for the widespread bleaching of coral reefs.",
    options: ["widely believes", "has widely believed", "was widely believing", "is widely believed", "widely believed"],
    answer: 3,
    explanation: "'It is believed that...' kalıbı, genel kanıyı aktaran kişisel olmayan (impersonal) pasif yapıdır; 'it' sözde öznedir ve pasif zorunludur."
  },

  // ---------- prepositions ----------
  {
    id: "prepositions-1",
    topicId: "prepositions",
    question: "Vitamin D deficiency can lead ---- weakened bones and a higher risk of fractures in elderly people.",
    options: ["to", "for", "with", "at", "on"],
    answer: 0,
    explanation: "'Lead to' (yol açmak) kalıp fiildir ve her zaman 'to' edatıyla kullanılır; sonuç bildiren tipik YÖKDİL kalıplarındandır."
  },
  {
    id: "prepositions-2",
    topicId: "prepositions",
    question: "The success of the experiment depends largely ---- the purity of the chemical compounds used.",
    options: ["in", "at", "on", "for", "to"],
    answer: 2,
    explanation: "'Depend on' (bağlı olmak) sabit bir fiil-edat birleşimidir; araya 'largely' gibi bir zarf girse bile edat değişmez."
  },
  {
    id: "prepositions-3",
    topicId: "prepositions",
    question: "A water molecule consists ---- two hydrogen atoms bonded to a single oxygen atom.",
    options: ["from", "in", "at", "of", "with"],
    answer: 3,
    explanation: "'Consist of' (oluşmak, -den meydana gelmek) kalıbı her zaman 'of' ile kullanılır; 'from' tipik bir çeldiricidir."
  },
  {
    id: "prepositions-4",
    topicId: "prepositions",
    question: "Certain bacteria are remarkably resistant ---- extreme temperatures and even high levels of radiation.",
    options: ["with", "against", "to", "from", "on"],
    answer: 2,
    explanation: "'Resistant to' (dirençli) sıfatı her zaman 'to' edatını alır; anlamca yakın görünen 'against' bu sıfatla kullanılmaz."
  },
  {
    id: "prepositions-5",
    topicId: "prepositions",
    question: "The newly developed drug protects patients ---- the most severe complications of the disease.",
    options: ["from", "of", "to", "with", "at"],
    answer: 0,
    explanation: "'Protect from' (korumak) kalıbı '-den korumak' anlamı verir; kişi zararlı olandan 'from' ile korunur."
  },
  {
    id: "prepositions-6",
    topicId: "prepositions",
    question: "Global warming results ---- the accumulation of greenhouse gases in the Earth's atmosphere.",
    options: ["in", "from", "of", "at", "with"],
    answer: 1,
    explanation: "'Result from' sebep bildirir (-den kaynaklanmak); ısınmanın kaynağı sera gazlarıdır. 'Result in' ise sonuç bildirir ve burada anlamı tersine çevirirdi."
  },
  {
    id: "prepositions-7",
    topicId: "prepositions",
    question: "The recently published research paper draws attention ---- the alarming decline in pollinator populations worldwide.",
    options: ["on", "at", "for", "to", "over"],
    answer: 3,
    explanation: "'Draw attention to' (dikkat çekmek) kalıbı her zaman 'to' ile kullanılır; 'attention' kelimesinden sonra gelen 'on' tipik bir çeldiricidir."
  },
  {
    id: "prepositions-8",
    topicId: "prepositions",
    question: "Unlike fossil fuels, solar panels are not associated ---- harmful carbon emissions during their operation.",
    options: ["to", "by", "for", "in", "with"],
    answer: 4,
    explanation: "'Be associated with' (ile ilişkili olmak) kalıbı her zaman 'with' edatını alır; pasif yapıdaki 'by' burada güçlü ama yanlış bir çeldiricidir."
  },
]
