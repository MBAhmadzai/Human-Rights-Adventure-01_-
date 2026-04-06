export const LANGUAGES = [
  { code: "en", name: "English", dir: "ltr" },
  { code: "ar", name: "العربية", dir: "rtl" },
  { code: "fr", name: "Français", dir: "ltr" },
  { code: "es", name: "Español", dir: "ltr" },
  { code: "zh", name: "中文", dir: "ltr" },
  { code: "hi", name: "हिन्दी", dir: "ltr" },
  { code: "pt", name: "Português", dir: "ltr" },
  { code: "ru", name: "Русский", dir: "ltr" },
  { code: "ja", name: "日本語", dir: "ltr" },
  { code: "de", name: "Deutsch", dir: "ltr" },
  { code: "ko", name: "한국어", dir: "ltr" },
  { code: "tr", name: "Türkçe", dir: "ltr" },
  { code: "it", name: "Italiano", dir: "ltr" },
  { code: "sw", name: "Kiswahili", dir: "ltr" },
  { code: "bn", name: "বাংলা", dir: "ltr" },
  { code: "ur", name: "اردو", dir: "rtl" },
] as const;

export type LangCode = (typeof LANGUAGES)[number]["code"];

export function getLangDir(lang: LangCode): "ltr" | "rtl" {
  return LANGUAGES.find((l) => l.code === lang)?.dir ?? "ltr";
}

type Translations = Record<string, Record<LangCode, string>>;

export const t: Translations = {
  // Hero
  heroTitle: {
    en: "Human Rights for Everyone",
    ar: "حقوق الإنسان للجميع",
    fr: "Les droits humains pour tous",
    es: "Derechos humanos para todos",
    zh: "人人享有人权",
    hi: "सबके लिए मानवाधिकार",
    pt: "Direitos humanos para todos",
    ru: "Права человека для всех",
    ja: "すべての人に人権を",
    de: "Menschenrechte für alle",
    ko: "모두를 위한 인권",
    tr: "Herkes için insan hakları",
    it: "Diritti umani per tutti",
    sw: "Haki za binadamu kwa wote",
    bn: "সবার জন্য মানবাধিকার",
    ur: "سب کے لیے انسانی حقوق",
  },
  heroSubtitle: {
    en: "Discover your rights through a fun adventure! Learn, play, and become a champion of fairness 🌟",
    ar: "اكتشف حقوقك من خلال مغامرة ممتعة! تعلّم، العب، وكن بطلاً للعدالة 🌟",
    fr: "Découvre tes droits à travers une aventure amusante ! Apprends, joue et deviens un champion de la justice 🌟",
    es: "¡Descubre tus derechos a través de una aventura divertida! Aprende, juega y conviértete en un campeón de la justicia 🌟",
    zh: "通过有趣的冒险发现你的权利！学习、玩耍，成为公平的冠军 🌟",
    hi: "एक मज़ेदार रोमांच से अपने अधिकारों की खोज करो! सीखो, खेलो, और निष्पक्षता के चैंपियन बनो 🌟",
    pt: "Descubra seus direitos através de uma aventura divertida! Aprenda, jogue e seja um campeão da justiça 🌟",
    ru: "Открой свои права через увлекательное приключение! Учись, играй и стань чемпионом справедливости 🌟",
    ja: "楽しい冒険を通じて自分の権利を発見しよう！学んで、遊んで、公平さのチャンピオンになろう 🌟",
    de: "Entdecke deine Rechte durch ein lustiges Abenteuer! Lerne, spiele und werde ein Champion der Fairness 🌟",
    ko: "재미있는 모험을 통해 권리를 발견하세요! 배우고, 놀고, 공정함의 챔피언이 되세요 🌟",
    tr: "Haklarını eğlenceli bir macera ile keşfet! Öğren, oyna ve adaletin şampiyonu ol 🌟",
    it: "Scopri i tuoi diritti attraverso un'avventura divertente! Impara, gioca e diventa un campione di giustizia 🌟",
    sw: "Gundua haki zako kupitia msafara wa kufurahisha! Jifunze, cheza, na uwe bingwa wa haki 🌟",
    bn: "একটি মজার অ্যাডভেঞ্চারে তোমার অধিকার আবিষ্কার করো! শেখো, খেলো এবং ন্যায়ের চ্যাম্পিয়ন হও 🌟",
    ur: "ایک مزیدار مہم جوئی سے اپنے حقوق دریافت کرو! سیکھو، کھیلو اور انصاف کے چیمپئن بنو 🌟",
  },
  startAdventure: {
    en: "🚀 Start Adventure",
    ar: "🚀 ابدأ المغامرة",
    fr: "🚀 Commencer l'aventure",
    es: "🚀 Comenzar aventura",
    zh: "🚀 开始冒险",
    hi: "🚀 रोमांच शुरू करो",
    pt: "🚀 Iniciar aventura",
    ru: "🚀 Начать приключение",
    ja: "🚀 冒険を始めよう",
    de: "🚀 Abenteuer starten",
    ko: "🚀 모험 시작",
    tr: "🚀 Maceraya başla",
    it: "🚀 Inizia l'avventura",
    sw: "🚀 Anza msafara",
    bn: "🚀 অ্যাডভেঞ্চার শুরু করো",
    ur: "🚀 مہم جوئی شروع کرو",
  },

  // Rights Section
  whatAreHumanRights: {
    en: "🌈 What Are Human Rights?",
    ar: "🌈 ما هي حقوق الإنسان؟",
    fr: "🌈 Que sont les droits humains ?",
    es: "🌈 ¿Qué son los derechos humanos?",
    zh: "🌈 什么是人权？",
    hi: "🌈 मानवाधिकार क्या हैं?",
    pt: "🌈 O que são os direitos humanos?",
    ru: "🌈 Что такое права человека?",
    ja: "🌈 人権とは？",
    de: "🌈 Was sind Menschenrechte?",
    ko: "🌈 인권이란 무엇인가요?",
    tr: "🌈 İnsan hakları nedir?",
    it: "🌈 Cosa sono i diritti umani?",
    sw: "🌈 Haki za binadamu ni nini?",
    bn: "🌈 মানবাধিকার কী?",
    ur: "🌈 انسانی حقوق کیا ہیں؟",
  },
  rightsDescription: {
    en: "Human rights are things every person in the world deserves. Click the cards to discover more!",
    ar: "حقوق الإنسان هي أشياء يستحقها كل شخص في العالم. انقر على البطاقات لاكتشاف المزيد!",
    fr: "Les droits humains sont des choses que chaque personne au monde mérite. Clique sur les cartes pour en savoir plus !",
    es: "Los derechos humanos son cosas que toda persona en el mundo merece. ¡Haz clic en las tarjetas para descubrir más!",
    zh: "人权是世界上每个人应得的。点击卡片了解更多！",
    hi: "मानवाधिकार वे चीजें हैं जिनकी दुनिया में हर व्यक्ति को ज़रूरत है। और जानने के लिए कार्ड पर क्लिक करें!",
    pt: "Direitos humanos são coisas que toda pessoa no mundo merece. Clique nos cartões para descobrir mais!",
    ru: "Права человека — это то, что заслуживает каждый человек в мире. Нажми на карточки, чтобы узнать больше!",
    ja: "人権は世界中のすべての人が持つべきものです。カードをクリックしてもっと知ろう！",
    de: "Menschenrechte sind Dinge, die jeder Mensch auf der Welt verdient. Klicke auf die Karten, um mehr zu erfahren!",
    ko: "인권은 세상 모든 사람이 누릴 자격이 있는 것입니다. 카드를 클릭해서 더 알아보세요!",
    tr: "İnsan hakları, dünyada herkesin hak ettiği şeylerdir. Daha fazla keşfetmek için kartlara tıkla!",
    it: "I diritti umani sono cose che ogni persona al mondo merita. Clicca sulle carte per scoprire di più!",
    sw: "Haki za binadamu ni mambo ambayo kila mtu duniani anastahili. Bonyeza kadi kugundua zaidi!",
    bn: "মানবাধিকার হলো সেই জিনিসগুলো যা পৃথিবীর প্রতিটি মানুষ পাওয়ার যোগ্য। আরও জানতে কার্ডে ক্লিক করো!",
    ur: "انسانی حقوق وہ چیزیں ہیں جن کا ہر شخص مستحق ہے۔ مزید جاننے کے لیے کارڈز پر کلک کریں!",
  },
  clickToLearnMore: {
    en: "Click to learn more",
    ar: "انقر لمعرفة المزيد",
    fr: "Clique pour en savoir plus",
    es: "Haz clic para saber más",
    zh: "点击了解更多",
    hi: "और जानने के लिए क्लिक करें",
    pt: "Clique para saber mais",
    ru: "Нажми, чтобы узнать больше",
    ja: "クリックして詳しく",
    de: "Klicke, um mehr zu erfahren",
    ko: "자세히 알아보려면 클릭하세요",
    tr: "Daha fazla öğrenmek için tıkla",
    it: "Clicca per saperne di più",
    sw: "Bonyeza kujifunza zaidi",
    bn: "আরও জানতে ক্লিক করো",
    ur: "مزید جاننے کے لیے کلک کریں",
  },

  // Rights cards
  rightEducationTitle: {
    en: "Right to Education", ar: "الحق في التعليم", fr: "Droit à l'éducation", es: "Derecho a la educación", zh: "受教育权", hi: "शिक्षा का अधिकार", pt: "Direito à educação", ru: "Право на образование", ja: "教育を受ける権利", de: "Recht auf Bildung", ko: "교육권", tr: "Eğitim hakkı", it: "Diritto all'istruzione", sw: "Haki ya elimu", bn: "শিক্ষার অধিকার", ur: "تعلیم کا حق",
  },
  rightEducationDesc: {
    en: "Every child deserves to learn, grow, and discover amazing things at school!", ar: "كل طفل يستحق أن يتعلم وينمو ويكتشف أشياء رائعة في المدرسة!", fr: "Chaque enfant mérite d'apprendre, grandir et découvrir des choses incroyables à l'école !", es: "¡Cada niño merece aprender, crecer y descubrir cosas increíbles en la escuela!", zh: "每个孩子都值得在学校里学习、成长和发现令人惊奇的事情！", hi: "हर बच्चा स्कूल में सीखने, बढ़ने और अद्भुत चीजें खोजने का हकदार है!", pt: "Toda criança merece aprender, crescer e descobrir coisas incríveis na escola!", ru: "Каждый ребёнок заслуживает учиться, расти и открывать удивительные вещи в школе!", ja: "すべての子どもは学校で学び、成長し、素晴らしいことを発見する権利があります！", de: "Jedes Kind verdient es, zu lernen, zu wachsen und tolle Dinge in der Schule zu entdecken!", ko: "모든 아이는 학교에서 배우고 성장하고 놀라운 것을 발견할 자격이 있어요!", tr: "Her çocuk okulda öğrenmeyi, büyümeyi ve harika şeyler keşfetmeyi hak eder!", it: "Ogni bambino merita di imparare, crescere e scoprire cose incredibili a scuola!", sw: "Kila mtoto anastahili kujifunza, kukua na kugundua mambo ya ajabu shuleni!", bn: "প্রতিটি শিশু স্কুলে শিখতে, বড় হতে এবং আশ্চর্যজনক জিনিস আবিষ্কার করার যোগ্য!", ur: "ہر بچہ اسکول میں سیکھنے، بڑھنے اور حیرت انگیز چیزیں دریافت کرنے کا مستحق ہے!",
  },
  rightSafetyTitle: {
    en: "Right to Safety", ar: "الحق في الأمان", fr: "Droit à la sécurité", es: "Derecho a la seguridad", zh: "安全权", hi: "सुरक्षा का अधिकार", pt: "Direito à segurança", ru: "Право на безопасность", ja: "安全の権利", de: "Recht auf Sicherheit", ko: "안전권", tr: "Güvenlik hakkı", it: "Diritto alla sicurezza", sw: "Haki ya usalama", bn: "নিরাপত্তার অধিকার", ur: "تحفظ کا حق",
  },
  rightSafetyDesc: {
    en: "You have the right to feel safe and protected wherever you are.", ar: "لديك الحق في الشعور بالأمان والحماية أينما كنت.", fr: "Tu as le droit de te sentir en sécurité et protégé(e) où que tu sois.", es: "Tienes derecho a sentirte seguro y protegido dondequiera que estés.", zh: "无论你在哪里，你都有权感到安全和被保护。", hi: "आपको जहां भी हों, सुरक्षित और संरक्षित महसूस करने का अधिकार है।", pt: "Você tem o direito de se sentir seguro e protegido onde quer que esteja.", ru: "Ты имеешь право чувствовать себя в безопасности, где бы ты ни был.", ja: "どこにいても安全で守られていると感じる権利があります。", de: "Du hast das Recht, dich überall sicher und geschützt zu fühlen.", ko: "어디에 있든 안전하고 보호받을 권리가 있어요.", tr: "Nerede olursan ol, güvende ve korunmuş hissetme hakkına sahipsin.", it: "Hai il diritto di sentirti al sicuro e protetto ovunque tu sia.", sw: "Una haki ya kujisikia salama na kulindwa popote ulipo.", bn: "তুমি যেখানেই থাকো, নিরাপদ এবং সুরক্ষিত বোধ করার অধিকার তোমার আছে।", ur: "آپ کو جہاں بھی ہوں محفوظ اور محفوظ محسوس کرنے کا حق ہے۔",
  },
  rightHealthTitle: {
    en: "Right to Health", ar: "الحق في الصحة", fr: "Droit à la santé", es: "Derecho a la salud", zh: "健康权", hi: "स्वास्थ्य का अधिकार", pt: "Direito à saúde", ru: "Право на здоровье", ja: "健康の権利", de: "Recht auf Gesundheit", ko: "건강권", tr: "Sağlık hakkı", it: "Diritto alla salute", sw: "Haki ya afya", bn: "স্বাস্থ্যের অধিকার", ur: "صحت کا حق",
  },
  rightHealthDesc: {
    en: "Everyone should have access to doctors, medicine, and healthy food.", ar: "يجب أن يحصل الجميع على الأطباء والأدوية والغذاء الصحي.", fr: "Tout le monde devrait avoir accès aux médecins, aux médicaments et à une alimentation saine.", es: "Todos deberían tener acceso a médicos, medicinas y comida saludable.", zh: "每个人都应该能获得医生、药品和健康食品。", hi: "सभी को डॉक्टरों, दवाइयों और स्वस्थ भोजन तक पहुंच होनी चाहिए।", pt: "Todos devem ter acesso a médicos, remédios e comida saudável.", ru: "Каждый должен иметь доступ к врачам, лекарствам и здоровой пище.", ja: "すべての人が医者、薬、健康な食べ物にアクセスできるべきです。", de: "Jeder sollte Zugang zu Ärzten, Medikamenten und gesundem Essen haben.", ko: "모든 사람은 의사, 약, 건강한 음식에 접근할 수 있어야 해요.", tr: "Herkes doktorlara, ilaçlara ve sağlıklı gıdaya erişebilmelidir.", it: "Tutti dovrebbero avere accesso a medici, medicine e cibo sano.", sw: "Kila mtu anapaswa kupata madaktari, dawa na chakula cha afya.", bn: "সবার ডাক্তার, ওষুধ এবং স্বাস্থ্যকর খাবারের সুযোগ থাকা উচিত।", ur: "ہر ایک کو ڈاکٹروں، ادویات اور صحت مند خوراک تک رسائی ہونی چاہیے۔",
  },
  rightEqualityTitle: {
    en: "Right to Equality", ar: "الحق في المساواة", fr: "Droit à l'égalité", es: "Derecho a la igualdad", zh: "平等权", hi: "समानता का अधिकार", pt: "Direito à igualdade", ru: "Право на равенство", ja: "平等の権利", de: "Recht auf Gleichheit", ko: "평등권", tr: "Eşitlik hakkı", it: "Diritto all'uguaglianza", sw: "Haki ya usawa", bn: "সমতার অধিকার", ur: "مساوات کا حق",
  },
  rightEqualityDesc: {
    en: "No matter who you are, you deserve to be treated fairly and with respect.", ar: "بغض النظر عمن تكون، تستحق أن تُعامل بعدل واحترام.", fr: "Peu importe qui tu es, tu mérites d'être traité(e) équitablement et avec respect.", es: "No importa quién seas, mereces ser tratado con justicia y respeto.", zh: "不管你是谁，你都值得被公平和尊重地对待。", hi: "आप कोई भी हों, आप निष्पक्ष और सम्मानजनक व्यवहार के हकदार हैं।", pt: "Não importa quem você seja, você merece ser tratado com justiça e respeito.", ru: "Кем бы ты ни был, ты заслуживаешь справедливого и уважительного отношения.", ja: "あなたが誰であっても、公平で敬意を持って扱われる権利があります。", de: "Egal wer du bist, du verdienst es, fair und respektvoll behandelt zu werden.", ko: "누구든 공정하고 존중받을 자격이 있어요.", tr: "Kim olursan ol, adil ve saygılı muamele görmeyi hak ediyorsun.", it: "Non importa chi sei, meriti di essere trattato con giustizia e rispetto.", sw: "Haijalishi wewe ni nani, unastahili kutendewa kwa haki na heshima.", bn: "তুমি যে-ই হও না কেন, তুমি ন্যায্য এবং সম্মানজনক আচরণ পাওয়ার যোগ্য।", ur: "آپ جو بھی ہوں، آپ منصفانہ اور عزت سے سلوک کے مستحق ہیں۔",
  },
  rightHomeTitle: {
    en: "Right to a Home", ar: "الحق في المسكن", fr: "Droit à un logement", es: "Derecho a una vivienda", zh: "住房权", hi: "घर का अधिकार", pt: "Direito à moradia", ru: "Право на жильё", ja: "住居の権利", de: "Recht auf ein Zuhause", ko: "주거권", tr: "Barınma hakkı", it: "Diritto alla casa", sw: "Haki ya makazi", bn: "বাসস্থানের অধিকার", ur: "گھر کا حق",
  },
  rightHomeDesc: {
    en: "Every child deserves a warm, safe place to call home.", ar: "كل طفل يستحق مكاناً دافئاً وآمناً يسميه بيتاً.", fr: "Chaque enfant mérite un endroit chaud et sûr qu'il peut appeler maison.", es: "Cada niño merece un lugar cálido y seguro al que pueda llamar hogar.", zh: "每个孩子都值得拥有一个温暖、安全的家。", hi: "हर बच्चा एक गर्म, सुरक्षित घर का हकदार है।", pt: "Toda criança merece um lugar quente e seguro para chamar de lar.", ru: "Каждый ребёнок заслуживает тёплого и безопасного места, которое он может назвать домом.", ja: "すべての子どもは温かくて安全な家を持つ権利があります。", de: "Jedes Kind verdient ein warmes, sicheres Zuhause.", ko: "모든 아이는 따뜻하고 안전한 집을 가질 자격이 있어요.", tr: "Her çocuk sıcak, güvenli bir eve sahip olmayı hak eder.", it: "Ogni bambino merita un posto caldo e sicuro da chiamare casa.", sw: "Kila mtoto anastahili mahali pa joto na salama pa kuita nyumbani.", bn: "প্রতিটি শিশু একটি উষ্ণ, নিরাপদ বাড়ির যোগ্য।", ur: "ہر بچہ ایک گرم، محفوظ گھر کا مستحق ہے۔",
  },
  rightSpeakTitle: {
    en: "Right to Speak", ar: "الحق في التعبير", fr: "Droit à la parole", es: "Derecho a expresarse", zh: "言论自由权", hi: "बोलने का अधिकार", pt: "Direito à expressão", ru: "Право на свободу слова", ja: "発言の権利", de: "Recht auf freie Meinungsäußerung", ko: "표현의 자유", tr: "İfade özgürlüğü hakkı", it: "Diritto di parola", sw: "Haki ya kuzungumza", bn: "কথা বলার অধিকার", ur: "اظہار کا حق",
  },
  rightSpeakDesc: {
    en: "Your voice matters! You have the right to share your thoughts and ideas.", ar: "صوتك مهم! لديك الحق في مشاركة أفكارك وآرائك.", fr: "Ta voix compte ! Tu as le droit de partager tes pensées et idées.", es: "¡Tu voz importa! Tienes derecho a compartir tus pensamientos e ideas.", zh: "你的声音很重要！你有权分享你的想法和主意。", hi: "आपकी आवाज़ मायने रखती है! आपको अपने विचार साझा करने का अधिकार है।", pt: "Sua voz importa! Você tem o direito de compartilhar seus pensamentos e ideias.", ru: "Твой голос важен! Ты имеешь право делиться своими мыслями и идеями.", ja: "あなたの声は大切です！自分の考えやアイデアを共有する権利があります。", de: "Deine Stimme zählt! Du hast das Recht, deine Gedanken und Ideen zu teilen.", ko: "너의 목소리는 소중해! 생각과 아이디어를 나눌 권리가 있어요.", tr: "Sesin önemli! Düşüncelerini ve fikirlerini paylaşma hakkına sahipsin.", it: "La tua voce conta! Hai il diritto di condividere i tuoi pensieri e le tue idee.", sw: "Sauti yako ni muhimu! Una haki ya kushiriki mawazo na maoni yako.", bn: "তোমার কণ্ঠস্বর গুরুত্বপূর্ণ! তোমার চিন্তাভাবনা শেয়ার করার অধিকার আছে।", ur: "آپ کی آواز اہم ہے! آپ کو اپنے خیالات بانٹنے کا حق ہے۔",
  },

  // Interactive Story
  interactiveStories: {
    en: "🎭 Interactive Stories", ar: "🎭 القصص التفاعلية", fr: "🎭 Histoires interactives", es: "🎭 Historias interactivas", zh: "🎭 互动故事", hi: "🎭 इंटरैक्टिव कहानियाँ", pt: "🎭 Histórias interativas", ru: "🎭 Интерактивные истории", ja: "🎭 インタラクティブストーリー", de: "🎭 Interaktive Geschichten", ko: "🎭 인터랙티브 이야기", tr: "🎭 Etkileşimli hikayeler", it: "🎭 Storie interattive", sw: "🎭 Hadithi shirikishi", bn: "🎭 ইন্টারেক্টিভ গল্প", ur: "🎭 انٹرایکٹو کہانیاں",
  },
  whatWouldYouDo: {
    en: "What would YOU do? Choose wisely!", ar: "ماذا ستفعل أنت؟ اختر بحكمة!", fr: "Que ferais-TU ? Choisis bien !", es: "¿Qué harías TÚ? ¡Elige sabiamente!", zh: "你会怎么做？明智选择！", hi: "तुम क्या करोगे? समझदारी से चुनो!", pt: "O que VOCÊ faria? Escolha com sabedoria!", ru: "Что бы ТЫ сделал? Выбирай мудро!", ja: "あなたならどうする？賢く選ぼう！", de: "Was würdest DU tun? Wähle weise!", ko: "너라면 어떻게 할래? 현명하게 선택해봐!", tr: "SEN ne yapardın? Akıllıca seç!", it: "Cosa faresti TU? Scegli saggiamente!", sw: "WEWE ungefanya nini? Chagua kwa busara!", bn: "তুমি কী করতে? বুদ্ধিমানের মতো বেছে নাও!", ur: "تم کیا کرو گے؟ سمجھداری سے چنو!",
  },
  nextStory: {
    en: "Next Story ➡️", ar: "القصة التالية ➡️", fr: "Histoire suivante ➡️", es: "Siguiente historia ➡️", zh: "下一个故事 ➡️", hi: "अगली कहानी ➡️", pt: "Próxima história ➡️", ru: "Следующая история ➡️", ja: "次のストーリー ➡️", de: "Nächste Geschichte ➡️", ko: "다음 이야기 ➡️", tr: "Sonraki hikaye ➡️", it: "Prossima storia ➡️", sw: "Hadithi inayofuata ➡️", bn: "পরের গল্প ➡️", ur: "اگلی کہانی ➡️",
  },

  // Story scenarios
  amiraTitle: {
    en: "Amira's Story", ar: "قصة أميرة", fr: "L'histoire d'Amira", es: "La historia de Amira", zh: "阿米拉的故事", hi: "अमीरा की कहानी", pt: "A história de Amira", ru: "История Амиры", ja: "アミラの物語", de: "Amiras Geschichte", ko: "아미라의 이야기", tr: "Amira'nın hikayesi", it: "La storia di Amira", sw: "Hadithi ya Amira", bn: "আমিরার গল্প", ur: "امیرہ کی کہانی",
  },
  amiraStory: {
    en: "Amira loves learning, but her parents say she can't go to school anymore because they need help at home. Amira feels sad because she dreams of becoming a doctor.",
    ar: "أميرة تحب التعلم، لكن والديها يقولان إنها لا تستطيع الذهاب إلى المدرسة لأنهم بحاجة للمساعدة في المنزل. أميرة حزينة لأنها تحلم بأن تصبح طبيبة.",
    fr: "Amira adore apprendre, mais ses parents disent qu'elle ne peut plus aller à l'école car ils ont besoin d'aide à la maison. Amira est triste car elle rêve de devenir médecin.",
    es: "Amira ama aprender, pero sus padres dicen que ya no puede ir a la escuela porque necesitan ayuda en casa. Amira se siente triste porque sueña con ser doctora.",
    zh: "阿米拉热爱学习，但她的父母说她不能再上学了，因为家里需要帮忙。阿米拉很难过，因为她梦想成为一名医生。",
    hi: "अमीरा को पढ़ना पसंद है, लेकिन उसके माता-पिता कहते हैं कि वह अब स्कूल नहीं जा सकती क्योंकि उन्हें घर पर मदद चाहिए। अमीरा दुखी है क्योंकि वह डॉक्टर बनने का सपना देखती है।",
    pt: "Amira adora aprender, mas seus pais dizem que ela não pode mais ir à escola porque precisam de ajuda em casa. Amira está triste porque sonha em ser médica.",
    ru: "Амира любит учиться, но родители говорят, что она больше не может ходить в школу, потому что дома нужна помощь. Амира грустит, ведь она мечтает стать врачом.",
    ja: "アミラは学ぶことが大好きですが、家の手伝いが必要なので学校に行けないと両親に言われました。医者になりたいアミラは悲しんでいます。",
    de: "Amira lernt gerne, aber ihre Eltern sagen, dass sie nicht mehr zur Schule gehen kann, weil sie zu Hause helfen muss. Amira ist traurig, weil sie davon träumt, Ärztin zu werden.",
    ko: "아미라는 배우는 것을 좋아하지만, 부모님은 집에서 도움이 필요해서 학교에 갈 수 없다고 합니다. 의사가 되고 싶은 아미라는 슬퍼합니다.",
    tr: "Amira öğrenmeyi çok seviyor ama ailesi evde yardıma ihtiyaçları olduğu için artık okula gidemeyeceğini söylüyor. Amira doktor olmayı hayal ettiği için üzgün.",
    it: "Amira ama imparare, ma i suoi genitori dicono che non può più andare a scuola perché hanno bisogno di aiuto a casa. Amira è triste perché sogna di diventare dottoressa.",
    sw: "Amira anapenda kujifunza, lakini wazazi wake wanasema hawezi kwenda shule tena kwa sababu wanahitaji msaada nyumbani. Amira ana huzuni kwa sababu anaota kuwa daktari.",
    bn: "আমিরা শিখতে ভালোবাসে, কিন্তু তার বাবা-মা বলেছেন সে আর স্কুলে যেতে পারবে না কারণ বাড়িতে সাহায্য দরকার। আমিরা দুঃখিত কারণ সে ডাক্তার হওয়ার স্বপ্ন দেখে।",
    ur: "امیرہ کو سیکھنا پسند ہے، لیکن اس کے والدین کہتے ہیں کہ وہ اب اسکول نہیں جا سکتی کیونکہ انہیں گھر پر مدد چاہیے۔ امیرہ اداس ہے کیونکہ وہ ڈاکٹر بننے کا خواب دیکھتی ہے۔",
  },
  amiraChoice1: { en: "Tell Amira it's okay, she doesn't need school", ar: "أخبر أميرة أنه لا بأس، لا تحتاج المدرسة", fr: "Dire à Amira que c'est ok, elle n'a pas besoin de l'école", es: "Decirle a Amira que está bien, no necesita la escuela", zh: "告诉阿米拉没关系，她不需要上学", hi: "अमीरा को बताओ कि ठीक है, उसे स्कूल की ज़रूरत नहीं", pt: "Dizer à Amira que está tudo bem, ela não precisa da escola", ru: "Сказать Амире, что всё хорошо, ей не нужна школа", ja: "アミラに大丈夫、学校は必要ないと言う", de: "Amira sagen, dass es okay ist, sie braucht keine Schule", ko: "아미라에게 괜찮다고, 학교는 필요 없다고 말해", tr: "Amira'ya sorun değil, okula ihtiyacı yok de", it: "Dire ad Amira che va bene, non ha bisogno della scuola", sw: "Mwambie Amira sawa, hahitaji shule", bn: "আমিরাকে বলো ঠিক আছে, স্কুলের দরকার নেই", ur: "امیرہ سے کہو ٹھیک ہے، اسکول کی ضرورت نہیں" },
  amiraFeedback1: { en: "Every child has the right to education. Without school, Amira can't achieve her dreams. Let's think of a better way!", ar: "كل طفل لديه الحق في التعليم. بدون المدرسة، لا تستطيع أميرة تحقيق أحلامها.", fr: "Chaque enfant a droit à l'éducation. Sans école, Amira ne peut pas réaliser ses rêves !", es: "Cada niño tiene derecho a la educación. Sin escuela, Amira no puede lograr sus sueños.", zh: "每个孩子都有受教育的权利。没有学校，阿米拉无法实现她的梦想。", hi: "हर बच्चे को शिक्षा का अधिकार है। स्कूल के बिना अमीरा अपने सपने पूरे नहीं कर सकती।", pt: "Toda criança tem direito à educação. Sem escola, Amira não pode realizar seus sonhos!", ru: "Каждый ребёнок имеет право на образование. Без школы Амира не сможет осуществить свои мечты!", ja: "すべての子どもに教育を受ける権利があります。学校がなければアミラは夢を叶えられません。", de: "Jedes Kind hat das Recht auf Bildung. Ohne Schule kann Amira ihre Träume nicht verwirklichen!", ko: "모든 아이는 교육받을 권리가 있어요. 학교 없이 아미라는 꿈을 이룰 수 없어요.", tr: "Her çocuğun eğitim hakkı var. Okul olmadan Amira hayallerini gerçekleştiremez!", it: "Ogni bambino ha diritto all'istruzione. Senza scuola, Amira non può realizzare i suoi sogni!", sw: "Kila mtoto ana haki ya elimu. Bila shule, Amira hawezi kutimiza ndoto zake!", bn: "প্রতিটি শিশুর শিক্ষার অধিকার আছে। স্কুল ছাড়া আমিরা তার স্বপ্ন পূরণ করতে পারবে না!", ur: "ہر بچے کو تعلیم کا حق ہے۔ اسکول کے بغیر امیرہ اپنے خواب پورے نہیں کر سکتی!" },
  amiraChoice2: { en: "Help Amira talk to a trusted adult or teacher", ar: "ساعد أميرة في التحدث إلى شخص بالغ موثوق أو معلم", fr: "Aider Amira à parler à un adulte de confiance", es: "Ayudar a Amira a hablar con un adulto de confianza", zh: "帮助阿米拉和信任的大人或老师谈谈", hi: "अमीरा को किसी भरोसेमंद बड़े या शिक्षक से बात करने में मदद करो", pt: "Ajudar Amira a conversar com um adulto de confiança", ru: "Помочь Амире поговорить с надёжным взрослым или учителем", ja: "アミラが信頼できる大人や先生に相談する手助けをする", de: "Amira helfen, mit einem vertrauenswürdigen Erwachsenen zu sprechen", ko: "아미라가 믿을 수 있는 어른이나 선생님과 이야기하도록 도와줘", tr: "Amira'nın güvenilir bir yetişkin veya öğretmenle konuşmasına yardım et", it: "Aiutare Amira a parlare con un adulto di fiducia", sw: "Msaidie Amira kuzungumza na mtu mzima anayemwamini", bn: "আমিরাকে বিশ্বস্ত বড় বা শিক্ষকের সাথে কথা বলতে সাহায্য করো", ur: "امیرہ کو قابل اعتماد بڑے یا استاد سے بات کرنے میں مدد کرو" },
  amiraFeedback2: { en: "Great choice! 🌟 A trusted adult can help find solutions so Amira can go to school AND her family gets the help they need!", ar: "اختيار رائع! 🌟 يمكن لشخص بالغ موثوق المساعدة في إيجاد حلول حتى تذهب أميرة للمدرسة وعائلتها تحصل على المساعدة!", fr: "Excellent choix ! 🌟 Un adulte de confiance peut trouver des solutions pour qu'Amira aille à l'école ET que sa famille reçoive l'aide nécessaire !", es: "¡Gran elección! 🌟 Un adulto de confianza puede encontrar soluciones para que Amira vaya a la escuela Y su familia reciba ayuda.", zh: "好选择！🌟 信任的大人可以帮忙找到解决办法，让阿米拉上学，家人也能得到帮助！", hi: "बढ़िया चुनाव! 🌟 एक भरोसेमंद बड़ा समाधान ढूंढ सकता है ताकि अमीरा स्कूल जा सके और उसका परिवार भी मदद पा सके!", pt: "Ótima escolha! 🌟 Um adulto de confiança pode encontrar soluções para Amira ir à escola E sua família receber ajuda!", ru: "Отличный выбор! 🌟 Надёжный взрослый поможет найти решение, чтобы Амира ходила в школу, а семья получила помощь!", ja: "素晴らしい選択！🌟 信頼できる大人が解決策を見つけて、アミラは学校に行け、家族も助けてもらえます！", de: "Tolle Wahl! 🌟 Ein vertrauenswürdiger Erwachsener kann helfen, damit Amira zur Schule geht UND ihre Familie Unterstützung bekommt!", ko: "훌륭한 선택! 🌟 믿을 수 있는 어른이 해결책을 찾아줘서 아미라도 학교에 가고 가족도 도움을 받을 수 있어요!", tr: "Harika seçim! 🌟 Güvenilir bir yetişkin çözüm bulabilir, Amira okula gider VE ailesi ihtiyaç duyduğu yardımı alır!", it: "Ottima scelta! 🌟 Un adulto di fiducia può trovare soluzioni perché Amira vada a scuola E la famiglia riceva aiuto!", sw: "Chaguo zuri! 🌟 Mtu mzima anayeaminika anaweza kusaidia kupata suluhisho ili Amira aende shule NA familia yake ipate msaada!", bn: "দারুণ পছন্দ! 🌟 বিশ্বস্ত বড় সমাধান খুঁজতে পারে যাতে আমিরা স্কুলে যেতে পারে এবং পরিবারও সাহায্য পায়!", ur: "بہترین انتخاب! 🌟 قابل اعتماد بڑا حل ڈھونڈ سکتا ہے تاکہ امیرہ اسکول جائے اور خاندان کو بھی مدد ملے!" },
  amiraChoice3: { en: "Ignore the situation", ar: "تجاهل الموقف", fr: "Ignorer la situation", es: "Ignorar la situación", zh: "忽视这个情况", hi: "स्थिति को नज़रअंदाज़ करो", pt: "Ignorar a situação", ru: "Проигнорировать ситуацию", ja: "状況を無視する", de: "Die Situation ignorieren", ko: "상황을 무시해", tr: "Durumu görmezden gel", it: "Ignorare la situazione", sw: "Puuza hali hiyo", bn: "পরিস্থিতি উপেক্ষা করো", ur: "صورتحال کو نظرانداز کرو" },
  amiraFeedback3: { en: "When we see someone's rights not being met, staying silent doesn't help. Speaking up can make a real difference!", ar: "عندما نرى حقوق شخص ما لا تُحترم، الصمت لا يساعد. التحدث يمكن أن يحدث فرقاً حقيقياً!", fr: "Quand on voit les droits de quelqu'un bafoués, se taire n'aide pas. Parler peut faire une vraie différence !", es: "Cuando vemos que los derechos de alguien no se respetan, quedarse callado no ayuda. ¡Hablar puede marcar la diferencia!", zh: "当我们看到某人的权利没有得到保障时，沉默没有帮助。发声可以带来真正的改变！", hi: "जब हम किसी के अधिकारों का उल्लंघन देखते हैं, चुप रहना मदद नहीं करता। बोलना वास्तव में फ़र्क ला सकता है!", pt: "Quando vemos os direitos de alguém não sendo respeitados, ficar em silêncio não ajuda. Falar pode fazer a diferença!", ru: "Когда мы видим, что чьи-то права нарушаются, молчание не помогает. Высказаться — значит изменить ситуацию!", ja: "誰かの権利が守られていないのを見たとき、黙っていても助けになりません。声を上げることで本当に変えられます！", de: "Wenn wir sehen, dass jemandes Rechte nicht respektiert werden, hilft Schweigen nicht. Sich zu äußern kann einen echten Unterschied machen!", ko: "누군가의 권리가 지켜지지 않는 것을 보면, 침묵은 도움이 안 돼요. 말하면 정말 차이를 만들 수 있어요!", tr: "Birinin haklarının karşılanmadığını gördüğümüzde sessiz kalmak yardımcı olmaz. Sesini çıkarmak gerçek bir fark yaratabilir!", it: "Quando vediamo che i diritti di qualcuno non vengono rispettati, restare in silenzio non aiuta. Parlare può fare davvero la differenza!", sw: "Tunapoona haki za mtu hazitimizwi, kukaa kimya hakusaidii. Kusema kunaweza kuleta tofauti kubwa!", bn: "যখন আমরা দেখি কারো অধিকার মানা হচ্ছে না, চুপ থাকা সাহায্য করে না। কথা বলা সত্যিই পরিবর্তন আনতে পারে!", ur: "جب ہم کسی کے حقوق کی خلاف ورزی دیکھتے ہیں تو خاموش رہنا مدد نہیں کرتا۔ بولنا واقعی فرق لا سکتا ہے!" },

  youssefTitle: {
    en: "Youssef's Story", ar: "قصة يوسف", fr: "L'histoire de Youssef", es: "La historia de Youssef", zh: "优素福的故事", hi: "यूसुफ़ की कहानी", pt: "A história de Youssef", ru: "История Юсуфа", ja: "ユセフの物語", de: "Youssefs Geschichte", ko: "유세프의 이야기", tr: "Yusuf'un hikayesi", it: "La storia di Youssef", sw: "Hadithi ya Youssef", bn: "ইউসুফের গল্প", ur: "یوسف کی کہانی",
  },
  youssefStory: {
    en: "Youssef just moved to a new town. At school, some kids won't let him play because he looks different and speaks with an accent. He feels lonely and left out.",
    ar: "يوسف انتقل للتو إلى مدينة جديدة. في المدرسة، بعض الأطفال لا يسمحون له باللعب لأنه يبدو مختلفاً ويتحدث بلهجة مختلفة.",
    fr: "Youssef vient de déménager dans une nouvelle ville. À l'école, certains enfants ne le laissent pas jouer parce qu'il a l'air différent et parle avec un accent.",
    es: "Youssef acaba de mudarse a una nueva ciudad. En la escuela, algunos niños no lo dejan jugar porque se ve diferente y habla con acento.",
    zh: "优素福刚搬到一个新城镇。在学校里，一些孩子不让他玩，因为他长得不同，说话有口音。他感到孤独和被排斥。",
    hi: "यूसुफ़ अभी एक नए शहर में आया है। स्कूल में कुछ बच्चे उसे खेलने नहीं देते क्योंकि वह अलग दिखता है और अलग लहज़े में बोलता है।",
    pt: "Youssef acabou de se mudar para uma nova cidade. Na escola, algumas crianças não o deixam brincar porque ele parece diferente e fala com sotaque.",
    ru: "Юсуф только переехал в новый город. В школе некоторые дети не берут его в игру, потому что он выглядит иначе и говорит с акцентом.",
    ja: "ユセフは新しい町に引っ越してきたばかりです。学校で見た目が違い、なまりがあるので、一部の子が遊ばせてくれません。",
    de: "Youssef ist gerade in eine neue Stadt gezogen. In der Schule lassen ihn manche Kinder nicht mitspielen, weil er anders aussieht und mit Akzent spricht.",
    ko: "유세프는 새로운 마을로 막 이사 왔어요. 학교에서 일부 아이들이 그를 다르게 생겼다며 놀아주지 않아요.",
    tr: "Yusuf yeni bir kasabaya taşındı. Okulda bazı çocuklar farklı göründüğü ve aksanla konuştuğu için onunla oynamıyor.",
    it: "Youssef si è appena trasferito in una nuova città. A scuola, alcuni bambini non lo lasciano giocare perché è diverso e parla con un accento.",
    sw: "Youssef amehamia mji mpya. Shuleni, watoto wengine hawamruhusu kucheza kwa sababu anaonekana tofauti na anazungumza kwa lafudhi.",
    bn: "ইউসুফ সবে একটি নতুন শহরে এসেছে। স্কুলে কিছু বাচ্চা তাকে খেলতে দেয় না কারণ সে দেখতে আলাদা এবং ভিন্ন উচ্চারণে কথা বলে।",
    ur: "یوسف ابھی ایک نئے شہر میں آیا ہے۔ اسکول میں کچھ بچے اسے کھیلنے نہیں دیتے کیونکہ وہ مختلف دکھتا ہے اور لہجے میں بولتا ہے۔",
  },
  youssefChoice1: { en: "Join the other kids in excluding Youssef", ar: "انضم للأطفال الآخرين في استبعاد يوسف", fr: "Rejoindre les autres enfants pour exclure Youssef", es: "Unirte a los otros niños para excluir a Youssef", zh: "和其他孩子一起排斥优素福", hi: "दूसरे बच्चों के साथ यूसुफ़ को बाहर करो", pt: "Juntar-se às outras crianças para excluir Youssef", ru: "Присоединиться к другим детям и исключить Юсуфа", ja: "他の子と一緒にユセフを仲間外れにする", de: "Sich den anderen anschließen und Youssef ausschließen", ko: "다른 아이들과 함께 유세프를 배제해", tr: "Diğer çocuklarla birlikte Yusuf'u dışla", it: "Unirsi agli altri bambini nell'escludere Youssef", sw: "Jiunge na watoto wengine kumtenga Youssef", bn: "অন্য বাচ্চাদের সাথে ইউসুফকে বাদ দাও", ur: "دوسرے بچوں کے ساتھ یوسف کو الگ کرو" },
  youssefFeedback1: { en: "Everyone deserves to be treated equally, no matter where they come from. Excluding someone because they're different is never okay.", ar: "الجميع يستحق المعاملة بالتساوي، بغض النظر عن مكان قدومهم.", fr: "Tout le monde mérite d'être traité de manière égale, peu importe d'où il vient.", es: "Todos merecen ser tratados por igual, sin importar de dónde vengan.", zh: "每个人都应该被平等对待，无论他们来自哪里。", hi: "सबको बराबर का व्यवहार मिलना चाहिए, चाहे वे कहीं से भी आए हों।", pt: "Todos merecem ser tratados igualmente, não importa de onde venham.", ru: "Каждый заслуживает равного обращения, неважно, откуда он.", ja: "どこから来ても、みんな平等に扱われるべきです。", de: "Jeder verdient es, gleich behandelt zu werden, egal woher er kommt.", ko: "모든 사람은 어디에서 왔든 평등하게 대우받을 자격이 있어요.", tr: "Herkes nereden gelirse gelsin eşit muamele görmeyi hak eder.", it: "Tutti meritano di essere trattati allo stesso modo, da qualunque posto vengano.", sw: "Kila mtu anastahili kutendewa sawa, bila kujali anatoka wapi.", bn: "সবাই সমান আচরণ পাওয়ার যোগ্য, তারা যেখান থেকেই আসুক।", ur: "ہر کوئی برابر سلوک کا مستحق ہے، چاہے وہ کہیں سے بھی آئے۔" },
  youssefChoice2: { en: "Invite Youssef to play and be his friend", ar: "ادعُ يوسف للعب وكن صديقه", fr: "Inviter Youssef à jouer et devenir son ami", es: "Invitar a Youssef a jugar y ser su amigo", zh: "邀请优素福一起玩，做他的朋友", hi: "यूसुफ़ को खेलने के लिए बुलाओ और उसका दोस्त बनो", pt: "Convidar Youssef para brincar e ser amigo dele", ru: "Пригласить Юсуфа играть и подружиться с ним", ja: "ユセフを遊びに誘って友達になる", de: "Youssef zum Spielen einladen und sein Freund sein", ko: "유세프를 놀자고 초대하고 친구가 되어줘", tr: "Yusuf'u oynamaya davet et ve arkadaşı ol", it: "Invitare Youssef a giocare e diventare suo amico", sw: "Mualike Youssef kucheza na kuwa rafiki yake", bn: "ইউসুফকে খেলতে ডাকো এবং তার বন্ধু হও", ur: "یوسف کو کھیلنے کی دعوت دو اور اس کے دوست بنو" },
  youssefFeedback2: { en: "Amazing! 🎉 By being kind and inclusive, you're standing up for Youssef's right to equality. One friend can change everything!", ar: "رائع! 🎉 من خلال اللطف والشمول، أنت تدافع عن حق يوسف في المساواة. صديق واحد يمكن أن يغير كل شيء!", fr: "Incroyable ! 🎉 En étant gentil et inclusif, tu défends le droit de Youssef à l'égalité. Un ami peut tout changer !", es: "¡Increíble! 🎉 Al ser amable e inclusivo, defiendes el derecho de Youssef a la igualdad. ¡Un amigo puede cambiarlo todo!", zh: "太棒了！🎉 通过友善和包容，你在维护优素福的平等权利。一个朋友可以改变一切！", hi: "अद्भुत! 🎉 दयालु और समावेशी बनकर, तुम यूसुफ़ के समानता के अधिकार की रक्षा कर रहे हो।", pt: "Incrível! 🎉 Sendo gentil e inclusivo, você defende o direito de Youssef à igualdade!", ru: "Потрясающе! 🎉 Проявляя доброту, ты защищаешь право Юсуфа на равенство. Один друг может всё изменить!", ja: "すごい！🎉 優しく仲間に入れることで、ユセフの平等の権利を守っています。一人の友達がすべてを変えられます！", de: "Toll! 🎉 Durch Freundlichkeit verteidigst du Youssefs Recht auf Gleichheit. Ein Freund kann alles ändern!", ko: "멋져요! 🎉 친절하고 포용적으로 행동해서 유세프의 평등권을 지켜주고 있어요!", tr: "Harika! 🎉 Nazik ve kapsayıcı olarak Yusuf'un eşitlik hakkını savunuyorsun!", it: "Fantastico! 🎉 Essendo gentile e inclusivo, difendi il diritto di Youssef all'uguaglianza!", sw: "Ajabu! 🎉 Kwa kuwa mkarimu, unasimamia haki ya Youssef ya usawa!", bn: "দারুণ! 🎉 সদয় ও অন্তর্ভুক্তিমূলক হয়ে তুমি ইউসুফের সমতার অধিকার রক্ষা করছ!", ur: "شاندار! 🎉 مہربان ہو کر تم یوسف کے مساوات کے حق کی حمایت کر رہے ہو!" },
  youssefChoice3: { en: "Tell a teacher but don't get involved", ar: "أخبر المعلم لكن لا تتدخل", fr: "Dire à un professeur mais ne pas s'impliquer", es: "Decirle a un profesor pero no involucrarse", zh: "告诉老师但不要参与", hi: "शिक्षक को बताओ लेकिन शामिल मत हो", pt: "Contar ao professor mas não se envolver", ru: "Сказать учителю, но не вмешиваться", ja: "先生に言うけど関わらない", de: "Einem Lehrer sagen, aber sich nicht einmischen", ko: "선생님에게 말하지만 직접 관여하지 마", tr: "Öğretmene söyle ama karışma", it: "Dire a un insegnante ma non farsi coinvolgere", sw: "Mwambie mwalimu lakini usijihusishe", bn: "শিক্ষককে বলো কিন্তু জড়িত হয়ো না", ur: "استاد کو بتاؤ لیکن شامل مت ہو" },
  youssefFeedback3: { en: "Telling a teacher is good, but you can also make a difference yourself! Being a friend directly shows real courage.", ar: "إخبار المعلم أمر جيد، لكن يمكنك أيضاً أن تحدث فرقاً بنفسك!", fr: "Dire à un professeur, c'est bien, mais tu peux aussi faire la différence toi-même !", es: "Decirle a un profesor está bien, ¡pero tú también puedes marcar la diferencia!", zh: "告诉老师很好，但你自己也能带来改变！直接做朋友需要真正的勇气。", hi: "शिक्षक को बताना अच्छा है, लेकिन तुम खुद भी फ़र्क ला सकते हो!", pt: "Contar ao professor é bom, mas você também pode fazer a diferença!", ru: "Сказать учителю хорошо, но ты тоже можешь изменить ситуацию!", ja: "先生に言うのはいいけど、自分でも違いを作れます！", de: "Einem Lehrer sagen ist gut, aber du kannst auch selbst einen Unterschied machen!", ko: "선생님에게 말하는 건 좋지만, 직접 친구가 되는 것도 큰 용기예요!", tr: "Öğretmene söylemek iyi, ama sen de fark yaratabilirsin!", it: "Dire a un insegnante va bene, ma anche tu puoi fare la differenza!", sw: "Kumwambia mwalimu ni vizuri, lakini wewe pia unaweza kuleta tofauti!", bn: "শিক্ষককে বলা ভালো, কিন্তু তুমি নিজেও পরিবর্তন আনতে পারো!", ur: "استاد کو بتانا اچھا ہے، لیکن تم خود بھی فرق لا سکتے ہو!" },

  // Quiz
  quizTitle: {
    en: "🧠 Human Rights Quiz", ar: "🧠 اختبار حقوق الإنسان", fr: "🧠 Quiz droits humains", es: "🧠 Quiz de derechos humanos", zh: "🧠 人权小测验", hi: "🧠 मानवाधिकार प्रश्नोत्तरी", pt: "🧠 Quiz de direitos humanos", ru: "🧠 Викторина о правах человека", ja: "🧠 人権クイズ", de: "🧠 Menschenrechte-Quiz", ko: "🧠 인권 퀴즈", tr: "🧠 İnsan hakları testi", it: "🧠 Quiz sui diritti umani", sw: "🧠 Mtihani wa haki za binadamu", bn: "🧠 মানবাধিকার কুইজ", ur: "🧠 انسانی حقوق کوئز",
  },
  quizSubtitle: {
    en: "Test your knowledge and earn stars!", ar: "اختبر معلوماتك واكسب النجوم!", fr: "Teste tes connaissances et gagne des étoiles !", es: "¡Pon a prueba tus conocimientos y gana estrellas!", zh: "测试你的知识，赢取星星！", hi: "अपने ज्ञान की परीक्षा लो और सितारे कमाओ!", pt: "Teste seus conhecimentos e ganhe estrelas!", ru: "Проверь свои знания и заработай звёзды!", ja: "知識をテストしてスターを集めよう！", de: "Teste dein Wissen und verdiene Sterne!", ko: "지식을 테스트하고 별을 모으세요!", tr: "Bilgini test et ve yıldızlar kazan!", it: "Metti alla prova le tue conoscenze e guadagna stelle!", sw: "Jaribu maarifa yako na upate nyota!", bn: "তোমার জ্ঞান পরীক্ষা করো এবং তারা জিতো!", ur: "اپنے علم کی جانچ کرو اور ستارے کماؤ!",
  },
  questionOf: {
    en: "Question {current} of {total}", ar: "السؤال {current} من {total}", fr: "Question {current} sur {total}", es: "Pregunta {current} de {total}", zh: "第{current}题，共{total}题", hi: "प्रश्न {current}/{total}", pt: "Pergunta {current} de {total}", ru: "Вопрос {current} из {total}", ja: "質問 {current}/{total}", de: "Frage {current} von {total}", ko: "질문 {current}/{total}", tr: "Soru {current}/{total}", it: "Domanda {current} di {total}", sw: "Swali {current} kati ya {total}", bn: "প্রশ্ন {current}/{total}", ur: "سوال {current}/{total}",
  },
  nextQuestion: {
    en: "Next Question ➡️", ar: "السؤال التالي ➡️", fr: "Question suivante ➡️", es: "Siguiente pregunta ➡️", zh: "下一题 ➡️", hi: "अगला प्रश्न ➡️", pt: "Próxima pergunta ➡️", ru: "Следующий вопрос ➡️", ja: "次の質問 ➡️", de: "Nächste Frage ➡️", ko: "다음 질문 ➡️", tr: "Sonraki soru ➡️", it: "Prossima domanda ➡️", sw: "Swali linalofuata ➡️", bn: "পরবর্তী প্রশ্ন ➡️", ur: "اگلا سوال ➡️",
  },
  seeResults: {
    en: "See Results 🏆", ar: "شاهد النتيجة 🏆", fr: "Voir les résultats 🏆", es: "Ver resultados 🏆", zh: "查看结果 🏆", hi: "परिणाम देखें 🏆", pt: "Ver resultados 🏆", ru: "Результаты 🏆", ja: "結果を見る 🏆", de: "Ergebnisse sehen 🏆", ko: "결과 보기 🏆", tr: "Sonuçları gör 🏆", it: "Vedi risultati 🏆", sw: "Tazama matokeo 🏆", bn: "ফলাফল দেখো 🏆", ur: "نتائج دیکھو 🏆",
  },
  perfect: {
    en: "🎉 Perfect!", ar: "🎉 مثالي!", fr: "🎉 Parfait !", es: "🎉 ¡Perfecto!", zh: "🎉 完美！", hi: "🎉 परफेक्ट!", pt: "🎉 Perfeito!", ru: "🎉 Идеально!", ja: "🎉 パーフェクト！", de: "🎉 Perfekt!", ko: "🎉 완벽해요!", tr: "🎉 Mükemmel!", it: "🎉 Perfetto!", sw: "🎉 Kamilifu!", bn: "🎉 নিখুঁত!", ur: "🎉 بہترین!",
  },
  greatJob: {
    en: "👏 Great Job!", ar: "👏 أحسنت!", fr: "👏 Bravo !", es: "👏 ¡Buen trabajo!", zh: "👏 做得好！", hi: "👏 शाबाश!", pt: "👏 Ótimo trabalho!", ru: "👏 Отлично!", ja: "👏 よくできました！", de: "👏 Toll gemacht!", ko: "👏 잘했어요!", tr: "👏 Harika!", it: "👏 Ottimo lavoro!", sw: "👏 Kazi nzuri!", bn: "👏 দারুণ!", ur: "👏 شاباش!",
  },
  tryAgainMsg: {
    en: "💪 Try Again!", ar: "💪 حاول مرة أخرى!", fr: "💪 Réessaie !", es: "💪 ¡Inténtalo de nuevo!", zh: "💪 再试一次！", hi: "💪 फिर कोशिश करो!", pt: "💪 Tente de novo!", ru: "💪 Попробуй ещё!", ja: "💪 もう一度！", de: "💪 Versuch's nochmal!", ko: "💪 다시 도전해봐!", tr: "💪 Tekrar dene!", it: "💪 Riprova!", sw: "💪 Jaribu tena!", bn: "💪 আবার চেষ্টা করো!", ur: "💪 دوبارہ کوشش کرو!",
  },
  youGot: {
    en: "You got {score} out of {total}", ar: "حصلت على {score} من {total}", fr: "Tu as obtenu {score} sur {total}", es: "Obtuviste {score} de {total}", zh: "你答对了{score}/{total}", hi: "आपने {total} में से {score} पाए", pt: "Você acertou {score} de {total}", ru: "Ты получил {score} из {total}", ja: "{total}問中{score}問正解", de: "Du hast {score} von {total}", ko: "{total}개 중 {score}개 맞았어요", tr: "{total} üzerinden {score}", it: "Hai ottenuto {score} su {total}", sw: "Umepata {score} kati ya {total}", bn: "তুমি {total} এর মধ্যে {score} পেয়েছ", ur: "آپ نے {total} میں سے {score} حاصل کیے",
  },
  playAgain: {
    en: "🔄 Play Again", ar: "🔄 حاول مرة أخرى", fr: "🔄 Rejouer", es: "🔄 Jugar de nuevo", zh: "🔄 再玩一次", hi: "🔄 फिर खेलो", pt: "🔄 Jogar de novo", ru: "🔄 Играть снова", ja: "🔄 もう一度プレイ", de: "🔄 Nochmal spielen", ko: "🔄 다시 플레이", tr: "🔄 Tekrar oyna", it: "🔄 Gioca ancora", sw: "🔄 Cheza tena", bn: "🔄 আবার খেলো", ur: "🔄 دوبارہ کھیلو",
  },

  // Quiz questions
  q1: { en: "Which of these is a basic human right?", ar: "أي من هذه حق أساسي من حقوق الإنسان؟", fr: "Lequel est un droit humain fondamental ?", es: "¿Cuál es un derecho humano básico?", zh: "以下哪项是基本人权？", hi: "इनमें से कौन सा बुनियादी मानवाधिकार है?", pt: "Qual destes é um direito humano básico?", ru: "Что из этого — основное право человека?", ja: "基本的人権はどれ？", de: "Was davon ist ein grundlegendes Menschenrecht?", ko: "기본 인권은 무엇일까요?", tr: "Bunlardan hangisi temel bir insan hakkıdır?", it: "Quale di questi è un diritto umano fondamentale?", sw: "Ni ipi kati ya hizi ni haki ya msingi ya binadamu?", bn: "এগুলোর মধ্যে কোনটি মৌলিক মানবাধিকার?", ur: "ان میں سے بنیادی انسانی حق کونسا ہے؟" },
  q1o1: { en: "Having the latest phone", ar: "امتلاك أحدث هاتف", fr: "Avoir le dernier téléphone", es: "Tener el último teléfono", zh: "拥有最新手机", hi: "नवीनतम फ़ोन रखना", pt: "Ter o celular mais recente", ru: "Иметь последний телефон", ja: "最新のスマホを持つ", de: "Das neueste Handy haben", ko: "최신 폰을 갖는 것", tr: "En son telefona sahip olmak", it: "Avere l'ultimo telefono", sw: "Kuwa na simu ya kisasa", bn: "সর্বশেষ ফোন থাকা", ur: "تازہ ترین فون رکھنا" },
  q1o2: { en: "Getting an education", ar: "الحصول على التعليم", fr: "Recevoir une éducation", es: "Recibir educación", zh: "接受教育", hi: "शिक्षा प्राप्त करना", pt: "Receber educação", ru: "Получить образование", ja: "教育を受ける", de: "Bildung erhalten", ko: "교육받는 것", tr: "Eğitim almak", it: "Ricevere un'istruzione", sw: "Kupata elimu", bn: "শিক্ষা পাওয়া", ur: "تعلیم حاصل کرنا" },
  q1o3: { en: "Eating candy every day", ar: "أكل الحلوى كل يوم", fr: "Manger des bonbons chaque jour", es: "Comer dulces todos los días", zh: "每天吃糖果", hi: "हर दिन कैंडी खाना", pt: "Comer doces todos os dias", ru: "Есть конфеты каждый день", ja: "毎日キャンディを食べる", de: "Jeden Tag Süßigkeiten essen", ko: "매일 사탕 먹기", tr: "Her gün şeker yemek", it: "Mangiare dolci ogni giorno", sw: "Kula pipi kila siku", bn: "প্রতিদিন মিষ্টি খাওয়া", ur: "روزانہ مٹھائی کھانا" },
  q1o4: { en: "Staying up late", ar: "السهر لوقت متأخر", fr: "Rester debout tard", es: "Quedarse despierto hasta tarde", zh: "熬夜", hi: "देर तक जागना", pt: "Ficar acordado até tarde", ru: "Не спать допоздна", ja: "夜更かし", de: "Lange aufbleiben", ko: "늦게까지 깨어있기", tr: "Geç saatlere kadar uyanık kalmak", it: "Stare svegli fino a tardi", sw: "Kukesha usiku", bn: "দেরি পর্যন্ত জেগে থাকা", ur: "دیر تک جاگنا" },

  q2: { en: "What should you do if you see someone being bullied?", ar: "ماذا يجب أن تفعل إذا رأيت شخصاً يتعرض للتنمر؟", fr: "Que faire si tu vois quelqu'un se faire harceler ?", es: "¿Qué debes hacer si ves a alguien siendo acosado?", zh: "如果你看到有人被欺负，你应该怎么做？", hi: "अगर तुम किसी को तंग होते देखो तो क्या करना चाहिए?", pt: "O que fazer se você vir alguém sendo intimidado?", ru: "Что делать, если видишь, что кого-то травят?", ja: "いじめを見たらどうすべき？", de: "Was solltest du tun, wenn du siehst, dass jemand gemobbt wird?", ko: "누군가 괴롭힘을 당하는 걸 보면 어떻게 해야 할까요?", tr: "Birinin zorbalığa uğradığını görürsen ne yapmalısın?", it: "Cosa dovresti fare se vedi qualcuno vittima di bullismo?", sw: "Unapaswa kufanya nini ukiona mtu ananyanyaswa?", bn: "কেউ উৎপীড়িত হলে তোমার কী করা উচিত?", ur: "اگر آپ کسی کو غنڈہ گردی کا شکار دیکھیں تو کیا کرنا چاہیے؟" },
  q2o1: { en: "Join in", ar: "انضم إليهم", fr: "Participer", es: "Unirte", zh: "加入", hi: "शामिल हो जाओ", pt: "Participar", ru: "Присоединиться", ja: "参加する", de: "Mitmachen", ko: "함께 해", tr: "Katıl", it: "Unirsi", sw: "Jiunge", bn: "যোগ দাও", ur: "شامل ہو جاؤ" },
  q2o2: { en: "Walk away and ignore it", ar: "ابتعد وتجاهل الأمر", fr: "S'éloigner et ignorer", es: "Alejarte e ignorarlo", zh: "走开不管", hi: "चले जाओ और अनदेखा करो", pt: "Ir embora e ignorar", ru: "Уйти и игнорировать", ja: "立ち去って無視する", de: "Weggehen und ignorieren", ko: "그냥 지나쳐", tr: "Uzaklaş ve görmezden gel", it: "Andarsene e ignorare", sw: "Ondoka na kupuuza", bn: "চলে যাও আর উপেক্ষা করো", ur: "چلے جاؤ اور نظرانداز کرو" },
  q2o3: { en: "Tell a trusted adult and support the person", ar: "أخبر شخصاً بالغاً موثوقاً وادعم الشخص", fr: "Dire à un adulte de confiance et soutenir la personne", es: "Decirle a un adulto de confianza y apoyar a la persona", zh: "告诉信任的大人并支持那个人", hi: "भरोसेमंद बड़े को बताओ और उस व्यक्ति का समर्थन करो", pt: "Contar a um adulto de confiança e apoiar a pessoa", ru: "Сказать надёжному взрослому и поддержать", ja: "信頼できる大人に伝え、その人を支える", de: "Einem vertrauenswürdigen Erwachsenen sagen und die Person unterstützen", ko: "믿을 수 있는 어른에게 말하고 그 사람을 도와줘", tr: "Güvenilir bir yetişkine söyle ve kişiyi destekle", it: "Dirlo a un adulto di fiducia e sostenere la persona", sw: "Mwambie mtu mzima anayeaminika na umsaidie mtu huyo", bn: "বিশ্বস্ত বড়কে বলো এবং সেই ব্যক্তিকে সমর্থন করো", ur: "قابل اعتماد بڑے کو بتاؤ اور اس شخص کی مدد کرو" },
  q2o4: { en: "Film it for social media", ar: "صوّره لوسائل التواصل", fr: "Filmer pour les réseaux sociaux", es: "Grabarlo para las redes sociales", zh: "拍下来发社交媒体", hi: "सोशल मीडिया के लिए रिकॉर्ड करो", pt: "Filmar para as redes sociais", ru: "Снять на видео для соцсетей", ja: "SNSのために撮影する", de: "Für Social Media filmen", ko: "소셜 미디어를 위해 촬영해", tr: "Sosyal medya için çek", it: "Filmarlo per i social", sw: "Piga picha kwa mitandao ya kijamii", bn: "সোশ্যাল মিডিয়ার জন্য ভিডিও করো", ur: "سوشل میڈیا کے لیے ویڈیو بناؤ" },

  q3: { en: "Human rights belong to...", ar: "حقوق الإنسان تعود إلى...", fr: "Les droits humains appartiennent à...", es: "Los derechos humanos pertenecen a...", zh: "人权属于……", hi: "मानवाधिकार किसके हैं...", pt: "Os direitos humanos pertencem a...", ru: "Права человека принадлежат...", ja: "人権は…のもの", de: "Menschenrechte gehören...", ko: "인권은 ... 의 것이에요", tr: "İnsan hakları ... aittir", it: "I diritti umani appartengono a...", sw: "Haki za binadamu ni za...", bn: "মানবাধিকার ... এর", ur: "انسانی حقوق ... کے ہیں" },
  q3o1: { en: "Only adults", ar: "البالغين فقط", fr: "Seulement les adultes", es: "Solo adultos", zh: "只有成年人", hi: "केवल बड़े", pt: "Só adultos", ru: "Только взрослым", ja: "大人だけ", de: "Nur Erwachsenen", ko: "어른만", tr: "Sadece yetişkinlere", it: "Solo adulti", sw: "Watu wazima pekee", bn: "শুধু বড়দের", ur: "صرف بڑوں کے" },
  q3o2: { en: "Only people in rich countries", ar: "الناس في الدول الغنية فقط", fr: "Seulement les pays riches", es: "Solo personas en países ricos", zh: "只有富裕国家的人", hi: "केवल अमीर देशों के लोग", pt: "Só pessoas em países ricos", ru: "Только людям в богатых странах", ja: "豊かな国の人だけ", de: "Nur Menschen in reichen Ländern", ko: "부유한 나라 사람들만", tr: "Sadece zengin ülkelerdeki insanlara", it: "Solo persone nei paesi ricchi", sw: "Watu katika nchi tajiri pekee", bn: "শুধু ধনী দেশের মানুষের", ur: "صرف امیر ملکوں کے لوگوں کے" },
  q3o3: { en: "Everyone, everywhere!", ar: "الجميع، في كل مكان!", fr: "Tout le monde, partout !", es: "¡Todos, en todas partes!", zh: "所有人，到处都是！", hi: "हर जगह, हर कोई!", pt: "Todos, em todos os lugares!", ru: "Всем, везде!", ja: "すべての人、どこでも！", de: "Jedem, überall!", ko: "모두에게, 어디에서나!", tr: "Herkese, her yerde!", it: "Tutti, ovunque!", sw: "Kila mtu, kila mahali!", bn: "সবাই, সর্বত্র!", ur: "ہر جگہ، سب کے!" },
  q3o4: { en: "Only famous people", ar: "المشاهير فقط", fr: "Seulement les célébrités", es: "Solo personas famosas", zh: "只有名人", hi: "केवल प्रसिद्ध लोग", pt: "Só pessoas famosas", ru: "Только знаменитостям", ja: "有名人だけ", de: "Nur berühmten Menschen", ko: "유명인만", tr: "Sadece ünlü insanlara", it: "Solo persone famose", sw: "Watu mashuhuri pekee", bn: "শুধু বিখ্যাত মানুষের", ur: "صرف مشہور لوگوں کے" },

  q4: { en: "Why is the right to play important for kids?", ar: "لماذا حق اللعب مهم للأطفال؟", fr: "Pourquoi le droit de jouer est-il important ?", es: "¿Por qué es importante el derecho a jugar?", zh: "为什么玩耍的权利对孩子很重要？", hi: "बच्चों के लिए खेलने का अधिकार क्यों ज़रूरी है?", pt: "Por que o direito de brincar é importante?", ru: "Почему право на игру важно для детей?", ja: "なぜ遊ぶ権利は子どもに大切？", de: "Warum ist das Recht zu spielen wichtig?", ko: "놀 권리는 왜 중요할까요?", tr: "Oynama hakkı çocuklar için neden önemli?", it: "Perché il diritto al gioco è importante?", sw: "Kwa nini haki ya kucheza ni muhimu kwa watoto?", bn: "শিশুদের জন্য খেলার অধিকার কেন গুরুত্বপূর্ণ?", ur: "بچوں کے لیے کھیلنے کا حق کیوں اہم ہے؟" },
  q4o1: { en: "It's not important", ar: "ليس مهماً", fr: "Ce n'est pas important", es: "No es importante", zh: "不重要", hi: "यह ज़रूरी नहीं", pt: "Não é importante", ru: "Это не важно", ja: "重要じゃない", de: "Es ist nicht wichtig", ko: "중요하지 않아", tr: "Önemli değil", it: "Non è importante", sw: "Si muhimu", bn: "গুরুত্বপূর্ণ নয়", ur: "اہم نہیں" },
  q4o2: { en: "It helps kids learn, grow, and be healthy", ar: "يساعد الأطفال على التعلم والنمو والصحة", fr: "Ça aide les enfants à apprendre, grandir et être en bonne santé", es: "Ayuda a los niños a aprender, crecer y estar sanos", zh: "帮助孩子学习、成长和保持健康", hi: "यह बच्चों को सीखने, बढ़ने और स्वस्थ रहने में मदद करता है", pt: "Ajuda as crianças a aprender, crescer e ser saudáveis", ru: "Это помогает детям учиться, расти и быть здоровыми", ja: "子どもが学び、成長し、健康でいるのを助ける", de: "Es hilft Kindern zu lernen, zu wachsen und gesund zu sein", ko: "아이들이 배우고 자라고 건강해지는 데 도움이 돼요", tr: "Çocukların öğrenmesine, büyümesine ve sağlıklı olmasına yardımcı olur", it: "Aiuta i bambini a imparare, crescere e stare in salute", sw: "Inasaidia watoto kujifunza, kukua na kuwa na afya", bn: "এটা শিশুদের শিখতে, বড় হতে এবং সুস্থ থাকতে সাহায্য করে", ur: "یہ بچوں کو سیکھنے، بڑھنے اور صحت مند رہنے میں مدد کرتا ہے" },
  q4o3: { en: "Only so they don't bother adults", ar: "فقط حتى لا يزعجوا الكبار", fr: "Juste pour ne pas déranger les adultes", es: "Solo para que no molesten a los adultos", zh: "只是为了不打扰大人", hi: "बस ताकि वे बड़ों को परेशान न करें", pt: "Só para não incomodarem os adultos", ru: "Только чтобы не мешали взрослым", ja: "大人の邪魔をしないためだけ", de: "Nur damit sie Erwachsene nicht stören", ko: "어른들을 방해하지 않으려고", tr: "Sadece yetişkinleri rahatsız etmemeleri için", it: "Solo per non disturbare gli adulti", sw: "Tu ili wasiwasumbue watu wazima", bn: "শুধু যাতে বড়দের বিরক্ত না করে", ur: "صرف تاکہ بڑوں کو تنگ نہ کریں" },
  q4o4: { en: "So they can skip homework", ar: "حتى يتخطوا الواجبات", fr: "Pour sauter les devoirs", es: "Para saltarse la tarea", zh: "为了逃避作业", hi: "ताकि वे होमवर्क छोड़ सकें", pt: "Para pular a lição de casa", ru: "Чтобы не делать домашнее задание", ja: "宿題をサボるため", de: "Um Hausaufgaben zu überspringen", ko: "숙제를 안 하려고", tr: "Ödevleri atlayabilmeleri için", it: "Per saltare i compiti", sw: "Ili waruke kazi za nyumbani", bn: "যাতে তারা হোমওয়ার্ক বাদ দিতে পারে", ur: "تاکہ وہ ہوم ورک چھوڑ سکیں" },

  // Real Stories
  inspiringStories: {
    en: "📖 Inspiring Real Stories", ar: "📖 قصص حقيقية ملهمة", fr: "📖 Histoires vraies inspirantes", es: "📖 Historias reales inspiradoras", zh: "📖 鼓舞人心的真实故事", hi: "📖 प्रेरणादायक सच्ची कहानियाँ", pt: "📖 Histórias reais inspiradoras", ru: "📖 Вдохновляющие реальные истории", ja: "📖 感動の実話", de: "📖 Inspirierende wahre Geschichten", ko: "📖 영감을 주는 실화", tr: "📖 İlham verici gerçek hikayeler", it: "📖 Storie vere ispiranti", sw: "📖 Hadithi za kweli zenye msukumo", bn: "📖 অনুপ্রেরণামূলক সত্য গল্প", ur: "📖 متاثر کن سچی کہانیاں",
  },
  realPeopleDifference: {
    en: "Real people who made a big difference", ar: "أشخاص حقيقيون أحدثوا فرقاً كبيراً", fr: "De vraies personnes qui ont fait une grande différence", es: "Personas reales que marcaron la diferencia", zh: "创造了巨大改变的真实人物", hi: "वास्तविक लोग जिन्होंने बड़ा बदलाव किया", pt: "Pessoas reais que fizeram grande diferença", ru: "Реальные люди, изменившие мир", ja: "大きな違いを生んだ実在の人々", de: "Echte Menschen, die einen großen Unterschied gemacht haben", ko: "큰 변화를 만든 실제 사람들", tr: "Büyük fark yaratan gerçek insanlar", it: "Persone vere che hanno fatto la differenza", sw: "Watu wa kweli walioleta tofauti kubwa", bn: "সত্যিকার মানুষ যারা বড় পরিবর্তন এনেছে", ur: "حقیقی لوگ جنہوں نے بڑا فرق ڈالا",
  },
  malalaTitle: {
    en: "Malala's Fight for Education", ar: "كفاح ملالا من أجل التعليم", fr: "Le combat de Malala pour l'éducation", es: "La lucha de Malala por la educación", zh: "马拉拉为教育而战", hi: "मलाला की शिक्षा के लिए लड़ाई", pt: "A luta de Malala pela educação", ru: "Борьба Малалы за образование", ja: "マララの教育のための戦い", de: "Malalas Kampf für Bildung", ko: "말랄라의 교육을 위한 싸움", tr: "Malala'nın eğitim mücadelesi", it: "La lotta di Malala per l'istruzione", sw: "Mapambano ya Malala kwa elimu", bn: "মালালার শিক্ষার জন্য লড়াই", ur: "ملالہ کی تعلیم کے لیے جدوجہد",
  },
  malalaDesc: {
    en: "Malala Yousafzai stood up for girls' right to go to school. Even when it was dangerous, she kept speaking up. Today, she inspires millions of kids around the world!",
    ar: "ملالا يوسفزاي دافعت عن حق الفتيات في الذهاب إلى المدرسة. حتى عندما كان الأمر خطيراً، استمرت في التحدث. اليوم، تلهم ملايين الأطفال حول العالم!",
    fr: "Malala Yousafzai s'est battue pour le droit des filles à aller à l'école. Même quand c'était dangereux, elle a continué à s'exprimer. Aujourd'hui, elle inspire des millions d'enfants !",
    es: "Malala Yousafzai defendió el derecho de las niñas a ir a la escuela. Incluso cuando era peligroso, siguió hablando. ¡Hoy inspira a millones de niños!",
    zh: "马拉拉·尤萨夫扎伊为女孩上学的权利挺身而出。即使很危险，她也坚持发声。今天，她激励着全世界数百万儿童！",
    hi: "मलाला यूसुफ़ज़ई ने लड़कियों के स्कूल जाने के अधिकार के लिए आवाज़ उठाई। खतरे में भी उन्होंने बोलना नहीं छोड़ा। आज वह दुनिया भर के लाखों बच्चों को प्रेरित करती हैं!",
    pt: "Malala Yousafzai lutou pelo direito das meninas de ir à escola. Mesmo quando era perigoso, continuou falando. Hoje, ela inspira milhões de crianças!",
    ru: "Малала Юсуфзай отстаивала право девочек на образование. Даже когда это было опасно, она продолжала говорить. Сегодня она вдохновляет миллионы детей!",
    ja: "マララ・ユスフザイは女の子が学校に行く権利のために立ち上がりました。危険な時でも声を上げ続けました。今日、世界中の何百万人もの子どもたちを励ましています！",
    de: "Malala Yousafzai setzte sich für das Recht der Mädchen auf Schulbildung ein. Auch als es gefährlich war, sprach sie weiter. Heute inspiriert sie Millionen von Kindern!",
    ko: "말랄라 유사프자이는 소녀들의 교육받을 권리를 위해 일어섰습니다. 위험할 때도 계속 목소리를 냈습니다. 오늘날 수백만 아이들에게 영감을 줍니다!",
    tr: "Malala Yousafzai kızların okula gitme hakkını savundu. Tehlikeli olsa bile konuşmaya devam etti. Bugün dünya genelinde milyonlarca çocuğa ilham veriyor!",
    it: "Malala Yousafzai ha difeso il diritto delle ragazze di andare a scuola. Anche quando era pericoloso, ha continuato a parlare. Oggi ispira milioni di bambini!",
    sw: "Malala Yousafzai alisimamia haki ya wasichana kwenda shule. Hata ilipokuwa hatari, aliendelea kusema. Leo, anamtia moyo mamilioni ya watoto!",
    bn: "মালালা ইউসুফজাই মেয়েদের স্কুলে যাওয়ার অধিকারের জন্য দাঁড়িয়েছিলেন। বিপদেও তিনি কথা বলা থামাননি। আজ তিনি কোটি কোটি শিশুকে অনুপ্রাণিত করেন!",
    ur: "ملالہ یوسفزئی نے لڑکیوں کے اسکول جانے کے حق کے لیے آواز اٹھائی۔ خطرے میں بھی بولنا نہیں چھوڑا۔ آج وہ دنیا بھر کے لاکھوں بچوں کو متاثر کرتی ہیں!",
  },
  cleanWaterTitle: {
    en: "Clean Water for Everyone", ar: "مياه نظيفة للجميع", fr: "De l'eau propre pour tous", es: "Agua limpia para todos", zh: "人人享有清洁水", hi: "सबके लिए स्वच्छ पानी", pt: "Água limpa para todos", ru: "Чистая вода для всех", ja: "みんなにきれいな水を", de: "Sauberes Wasser für alle", ko: "모두를 위한 깨끗한 물", tr: "Herkes için temiz su", it: "Acqua pulita per tutti", sw: "Maji safi kwa wote", bn: "সবার জন্য পরিষ্কার পানি", ur: "سب کے لیے صاف پانی",
  },
  cleanWaterDesc: {
    en: "In many places, kids walk miles just to get clean water. Organizations are helping build wells and water systems so every child can have safe drinking water.",
    ar: "في أماكن كثيرة، يمشي الأطفال لأميال للحصول على مياه نظيفة. المنظمات تساعد في بناء آبار وأنظمة مياه حتى يحصل كل طفل على مياه شرب آمنة.",
    fr: "Dans beaucoup d'endroits, les enfants marchent des kilomètres pour avoir de l'eau propre. Des organisations aident à construire des puits pour que chaque enfant ait de l'eau potable.",
    es: "En muchos lugares, los niños caminan kilómetros solo para conseguir agua limpia. Las organizaciones ayudan a construir pozos para que cada niño tenga agua potable.",
    zh: "在许多地方，孩子们要走很远才能获得清洁的水。组织正在帮助建造水井，让每个孩子都能喝到安全的饮用水。",
    hi: "कई जगहों पर बच्चे स्वच्छ पानी के लिए मीलों पैदल चलते हैं। संगठन कुएं बना रहे हैं ताकि हर बच्चे को सुरक्षित पीने का पानी मिले।",
    pt: "Em muitos lugares, crianças andam quilômetros para conseguir água limpa. Organizações ajudam a construir poços para que cada criança tenha água potável.",
    ru: "Во многих местах дети идут километры ради чистой воды. Организации помогают строить колодцы, чтобы у каждого ребёнка была безопасная питьевая вода.",
    ja: "多くの場所で、子どもたちはきれいな水を得るために何マイルも歩きます。すべての子どもが安全な飲料水を得られるよう井戸が建設されています。",
    de: "An vielen Orten laufen Kinder kilometerlangs für sauberes Wasser. Organisationen helfen, Brunnen zu bauen, damit jedes Kind sicheres Trinkwasser hat.",
    ko: "많은 곳에서 아이들은 깨끗한 물을 얻기 위해 먼 길을 걸어요. 단체들이 우물을 만들어 모든 아이가 안전한 물을 마실 수 있게 돕고 있어요.",
    tr: "Birçok yerde çocuklar temiz su için kilometrelerce yürüyor. Kuruluşlar her çocuğun güvenli içme suyuna sahip olması için kuyular inşa ediyor.",
    it: "In molti posti, i bambini camminano chilometri per avere acqua pulita. Le organizzazioni costruiscono pozzi perché ogni bambino abbia acqua potabile.",
    sw: "Katika maeneo mengi, watoto wanatembea maili kupata maji safi. Mashirika yanasaidia kujenga visima ili kila mtoto apate maji salama.",
    bn: "অনেক জায়গায় শিশুরা পরিষ্কার পানির জন্য মাইলের পর মাইল হাঁটে। সংগঠনগুলো কূপ তৈরি করছে যাতে প্রতিটি শিশু নিরাপদ পানি পায়।",
    ur: "بہت سی جگہوں پر بچے صاف پانی کے لیے میلوں پیدل چلتے ہیں۔ تنظیمیں کنویں بنا رہی ہیں تاکہ ہر بچے کو محفوظ پینے کا پانی ملے۔",
  },
  artRightsTitle: {
    en: "Art That Speaks for Rights", ar: "فن يتحدث عن الحقوق", fr: "L'art qui parle des droits", es: "Arte que habla de derechos", zh: "为权利发声的艺术", hi: "कला जो अधिकारों की बात करती है", pt: "Arte que fala de direitos", ru: "Искусство, говорящее о правах", ja: "権利を訴えるアート", de: "Kunst, die für Rechte spricht", ko: "권리를 말하는 예술", tr: "Haklar için konuşan sanat", it: "L'arte che parla di diritti", sw: "Sanaa inayozungumzia haki", bn: "অধিকারের পক্ষে বলা শিল্প", ur: "حقوق کی بات کرنے والا فن",
  },
  artRightsDesc: {
    en: "Kids around the world use art, music, and stories to share messages about fairness and kindness. Your creativity can change the world too!",
    ar: "أطفال حول العالم يستخدمون الفن والموسيقى والقصص لمشاركة رسائل عن العدالة واللطف. إبداعك يمكن أن يغير العالم أيضاً!",
    fr: "Les enfants du monde utilisent l'art, la musique et les histoires pour partager des messages sur la justice et la gentillesse. Ta créativité peut aussi changer le monde !",
    es: "Los niños usan arte, música e historias para compartir mensajes sobre justicia y amabilidad. ¡Tu creatividad también puede cambiar el mundo!",
    zh: "世界各地的孩子们用艺术、音乐和故事来分享关于公平和善良的信息。你的创造力也能改变世界！",
    hi: "दुनिया भर के बच्चे कला, संगीत और कहानियों से निष्पक्षता और दयालुता के संदेश साझा करते हैं। तुम्हारी रचनात्मकता भी दुनिया बदल सकती है!",
    pt: "Crianças ao redor do mundo usam arte, música e histórias para compartilhar mensagens sobre justiça e gentileza. Sua criatividade pode mudar o mundo!",
    ru: "Дети по всему миру используют искусство, музыку и рассказы, чтобы говорить о справедливости и доброте. Твоё творчество тоже может изменить мир!",
    ja: "世界中の子どもたちがアート、音楽、物語を使って公平さと優しさのメッセージを伝えています。あなたの創造力も世界を変えられます！",
    de: "Kinder weltweit nutzen Kunst, Musik und Geschichten, um Botschaften über Fairness und Freundlichkeit zu teilen. Deine Kreativität kann die Welt verändern!",
    ko: "전 세계 아이들이 예술, 음악, 이야기로 공정함과 친절에 대한 메시지를 전해요. 너의 창의력도 세상을 바꿀 수 있어!",
    tr: "Dünya genelinde çocuklar sanat, müzik ve hikayelerle adalet ve nezaket mesajları paylaşıyor. Senin yaratıcılığın da dünyayı değiştirebilir!",
    it: "I bambini di tutto il mondo usano arte, musica e storie per condividere messaggi su giustizia e gentilezza. La tua creatività può cambiare il mondo!",
    sw: "Watoto duniani kote wanatumia sanaa, muziki na hadithi kushiriki ujumbe wa haki na upole. Ubunifu wako pia unaweza kubadilisha dunia!",
    bn: "বিশ্বজুড়ে শিশুরা শিল্প, সঙ্গীত এবং গল্প দিয়ে ন্যায় ও দয়ার বার্তা ছড়াচ্ছে। তোমার সৃজনশীলতাও পৃথিবী বদলাতে পারে!",
    ur: "دنیا بھر کے بچے آرٹ، موسیقی اور کہانیوں سے انصاف اور مہربانی کے پیغامات بانٹتے ہیں۔ تمہاری تخلیقیت بھی دنیا بدل سکتی ہے!",
  },

  // Call to action
  howCanYouHelp: {
    en: "🌟 How Can YOU Help?", ar: "🌟 كيف يمكنك المساعدة؟", fr: "🌟 Comment peux-TU aider ?", es: "🌟 ¿Cómo puedes TÚ ayudar?", zh: "🌟 你怎么帮忙？", hi: "🌟 तुम कैसे मदद कर सकते हो?", pt: "🌟 Como VOCÊ pode ajudar?", ru: "🌟 Как ТЫ можешь помочь?", ja: "🌟 あなたにできること", de: "🌟 Wie kannst DU helfen?", ko: "🌟 어떻게 도울 수 있을까?", tr: "🌟 SEN nasıl yardım edebilirsin?", it: "🌟 Come puoi aiutare TU?", sw: "🌟 WEWE unawezaje kusaidia?", bn: "🌟 তুমি কীভাবে সাহায্য করতে পারো?", ur: "🌟 تم کیسے مدد کر سکتے ہو؟",
  },
  neverTooYoung: {
    en: "You're never too young to make a difference! Here are things you can do:", ar: "أنت لست صغيراً جداً على إحداث فرق! إليك بعض الأشياء التي يمكنك فعلها:", fr: "Tu n'es jamais trop jeune pour faire la différence ! Voici ce que tu peux faire :", es: "¡Nunca eres demasiado joven para marcar la diferencia! Aquí hay cosas que puedes hacer:", zh: "你永远不会太小，无法产生影响！这些是你可以做的事情：", hi: "तुम कभी भी फ़र्क लाने के लिए बहुत छोटे नहीं हो! यहाँ कुछ चीज़ें हैं जो तुम कर सकते हो:", pt: "Você nunca é jovem demais para fazer a diferença! Aqui estão coisas que você pode fazer:", ru: "Ты никогда не слишком мал, чтобы менять мир! Вот что ты можешь делать:", ja: "若すぎることはありません！あなたにできること：", de: "Du bist nie zu jung, um etwas zu bewirken! Hier sind Dinge, die du tun kannst:", ko: "변화를 만들기에 너무 어린 나이란 없어요! 할 수 있는 일:", tr: "Fark yaratmak için asla çok küçük değilsin! İşte yapabileceğin şeyler:", it: "Non sei mai troppo giovane per fare la differenza! Ecco cosa puoi fare:", sw: "Huko mdogo sana kuleta tofauti! Haya ni mambo unayoweza kufanya:", bn: "পরিবর্তন আনতে তুমি কখনও বেশি ছোট নও! এগুলো করতে পারো:", ur: "فرق لانے کے لیے تم کبھی بہت چھوٹے نہیں! یہ چیزیں تم کر سکتے ہو:",
  },
  beKindTitle: { en: "Be Kind", ar: "كن لطيفاً", fr: "Sois gentil", es: "Sé amable", zh: "善良待人", hi: "दयालु बनो", pt: "Seja gentil", ru: "Будь добрым", ja: "優しくしよう", de: "Sei nett", ko: "친절해지세요", tr: "Nazik ol", it: "Sii gentile", sw: "Kuwa mkarimu", bn: "সদয় হও", ur: "مہربان بنو" },
  beKindDesc: { en: "Small acts of kindness make the world better every day", ar: "أعمال اللطف الصغيرة تجعل العالم أفضل كل يوم", fr: "De petits actes de gentillesse rendent le monde meilleur chaque jour", es: "Pequeños actos de amabilidad hacen el mundo mejor cada día", zh: "小小的善举每天都让世界更美好", hi: "छोटे-छोटे दयालु काम हर दिन दुनिया को बेहतर बनाते हैं", pt: "Pequenos atos de gentileza tornam o mundo melhor todos os dias", ru: "Маленькие добрые дела делают мир лучше каждый день", ja: "小さな優しさが毎日世界を良くしています", de: "Kleine Gesten der Freundlichkeit machen die Welt jeden Tag besser", ko: "작은 친절이 매일 세상을 더 좋게 만들어요", tr: "Küçük iyilikler her gün dünyayı daha iyi yapar", it: "Piccoli atti di gentilezza rendono il mondo migliore ogni giorno", sw: "Vitendo vidogo vya ukarimu vinafanya dunia kuwa bora kila siku", bn: "ছোট ছোট সদয় কাজ প্রতিদিন পৃথিবীকে সুন্দর করে", ur: "مہربانی کے چھوٹے کام دنیا کو روزانہ بہتر بناتے ہیں" },
  speakUpTitle: { en: "Speak Up", ar: "تحدث بصوت عالٍ", fr: "Ose parler", es: "Habla", zh: "大胆说", hi: "बोलो", pt: "Fale", ru: "Высказывайся", ja: "声を上げよう", de: "Sprich auf", ko: "목소리를 내세요", tr: "Sesini çıkar", it: "Parla", sw: "Sema", bn: "বলো", ur: "بولو" },
  speakUpDesc: { en: "If you see something unfair, tell a trusted adult", ar: "إذا رأيت شيئاً غير عادل، أخبر شخصاً بالغاً موثوقاً", fr: "Si tu vois quelque chose d'injuste, dis-le à un adulte de confiance", es: "Si ves algo injusto, dile a un adulto de confianza", zh: "如果你看到不公平的事，告诉你信任的大人", hi: "अगर तुम कुछ अनुचित देखो तो भरोसेमंद बड़े को बताओ", pt: "Se vir algo injusto, conte a um adulto de confiança", ru: "Если видишь несправедливость, скажи надёжному взрослому", ja: "不公平なことを見たら、信頼できる大人に伝えよう", de: "Wenn du etwas Unfaires siehst, sag es einem vertrauenswürdigen Erwachsenen", ko: "불공정한 것을 보면 믿을 수 있는 어른에게 말해요", tr: "Haksız bir şey görürsen güvendiğin bir yetişkine söyle", it: "Se vedi qualcosa di ingiusto, dillo a un adulto di fiducia", sw: "Ukiona kitu kisicho cha haki, mwambie mtu mzima anayeaminika", bn: "অন্যায় দেখলে বিশ্বস্ত বড়কে বলো", ur: "اگر کچھ ناانصافی دیکھو تو قابل اعتماد بڑے کو بتاؤ" },
  includeEveryoneTitle: { en: "Include Everyone", ar: "اشمل الجميع", fr: "Inclus tout le monde", es: "Incluye a todos", zh: "包容每个人", hi: "सबको शामिल करो", pt: "Inclua todos", ru: "Включай всех", ja: "みんなを仲間に", de: "Schließe alle ein", ko: "모두를 포함해요", tr: "Herkesi dahil et", it: "Includi tutti", sw: "Wahusishe wote", bn: "সবাইকে অন্তর্ভুক্ত করো", ur: "سب کو شامل کرو" },
  includeEveryoneDesc: { en: "Make sure nobody feels left out or alone", ar: "تأكد أن لا أحد يشعر بالاستبعاد أو الوحدة", fr: "Assure-toi que personne ne se sente exclu ou seul", es: "Asegúrate de que nadie se sienta excluido o solo", zh: "确保没有人感到被排斥或孤独", hi: "सुनिश्चित करो कि कोई अकेला या बाहर न महसूस करे", pt: "Garanta que ninguém se sinta excluído ou sozinho", ru: "Убедись, что никто не чувствует себя одиноким или исключённым", ja: "誰も仲間外れや孤独を感じないようにしよう", de: "Stelle sicher, dass sich niemand ausgeschlossen oder allein fühlt", ko: "아무도 소외감이나 외로움을 느끼지 않게 해요", tr: "Kimsenin dışlanmış veya yalnız hissetmemesini sağla", it: "Assicurati che nessuno si senta escluso o solo", sw: "Hakikisha hakuna anayejisikia kuachwa au peke yake", bn: "কেউ যেন একা বা বাদ পড়া মনে না করে", ur: "یقینی بناؤ کہ کوئی اکیلا یا الگ محسوس نہ کرے" },
  shareLearnTitle: { en: "Share & Learn", ar: "شارك وتعلم", fr: "Partage et apprends", es: "Comparte y aprende", zh: "分享与学习", hi: "साझा करो और सीखो", pt: "Compartilhe e aprenda", ru: "Делись и учись", ja: "共有して学ぼう", de: "Teile und lerne", ko: "공유하고 배우세요", tr: "Paylaş ve öğren", it: "Condividi e impara", sw: "Shiriki na ujifunze", bn: "শেয়ার করো এবং শেখো", ur: "بانٹو اور سیکھو" },
  shareLearnDesc: { en: "Tell your friends and family what you learned today!", ar: "أخبر أصدقاءك وعائلتك بما تعلمته اليوم!", fr: "Dis à tes amis et ta famille ce que tu as appris aujourd'hui !", es: "¡Cuéntale a tus amigos y familia lo que aprendiste hoy!", zh: "告诉你的朋友和家人你今天学到了什么！", hi: "आज जो सीखा वो अपने दोस्तों और परिवार को बताओ!", pt: "Conte para seus amigos e família o que aprendeu hoje!", ru: "Расскажи друзьям и семье, что ты узнал сегодня!", ja: "今日学んだことを友達や家族に伝えよう！", de: "Erzähle deinen Freunden und deiner Familie, was du heute gelernt hast!", ko: "오늘 배운 것을 친구와 가족에게 알려주세요!", tr: "Bugün öğrendiklerini arkadaşlarına ve ailene anlat!", it: "Racconta ai tuoi amici e alla tua famiglia cosa hai imparato oggi!", sw: "Waambie marafiki na familia yako ulichojifunza leo!", bn: "আজ যা শিখেছ তা বন্ধু ও পরিবারকে বলো!", ur: "آج جو سیکھا دوستوں اور خاندان کو بتاؤ!" },

  // Navigation
  navHome: { en: "Home", ar: "الرئيسية", fr: "Accueil", es: "Inicio", zh: "首页", hi: "होम", pt: "Início", ru: "Главная", ja: "ホーム", de: "Start", ko: "홈", tr: "Ana Sayfa", it: "Home", sw: "Nyumbani", bn: "হোম", ur: "ہوم" },
  navGames: { en: "Games", ar: "ألعاب", fr: "Jeux", es: "Juegos", zh: "游戏", hi: "खेल", pt: "Jogos", ru: "Игры", ja: "ゲーム", de: "Spiele", ko: "게임", tr: "Oyunlar", it: "Giochi", sw: "Michezo", bn: "গেমস", ur: "گیمز" },
  gamesPageTitle: { en: "Games Zone", ar: "منطقة الألعاب", fr: "Zone de jeux", es: "Zona de juegos", zh: "游戏区", hi: "गेम्स ज़ोन", pt: "Zona de jogos", ru: "Зона игр", ja: "ゲームゾーン", de: "Spielezone", ko: "게임 존", tr: "Oyun Alanı", it: "Zona giochi", sw: "Eneo la Michezo", bn: "গেমস জোন", ur: "گیمز زون" },
  gamesPageSubtitle: { en: "Learn about human rights while having fun!", ar: "تعلّم عن حقوق الإنسان أثناء الاستمتاع!", fr: "Apprends les droits humains en t'amusant !", es: "¡Aprende sobre derechos humanos divirtiéndote!", zh: "在玩乐中了解人权！", hi: "मज़े करते हुए मानवाधिकार सीखो!", pt: "Aprenda sobre direitos humanos se divertindo!", ru: "Учись о правах человека, играя!", ja: "楽しみながら人権を学ぼう！", de: "Lerne Menschenrechte beim Spielen!", ko: "재미있게 인권을 배우세요!", tr: "Eğlenirken insan haklarını öğren!", it: "Impara i diritti umani divertendoti!", sw: "Jifunze haki za binadamu huku ukifurahi!", bn: "মজা করতে করতে মানবাধিকার শেখো!", ur: "مزے کرتے ہوئے انسانی حقوق سیکھو!" },
  matchingTitle: { en: "Match the Rights!", ar: "طابق الحقوق!", fr: "Associe les droits !", es: "¡Asocia los derechos!", zh: "匹配权利！", hi: "अधिकार मिलाओ!", pt: "Combine os direitos!", ru: "Сопоставь права!", ja: "権利をマッチしよう！", de: "Ordne die Rechte zu!", ko: "권리를 맞춰보세요!", tr: "Hakları eşleştir!", it: "Abbina i diritti!", sw: "Linganisha haki!", bn: "অধিকার মেলাও!", ur: "حقوق ملاؤ!" },
  matchingSubtitle: { en: "Select a right, then click the matching situation", ar: "اختر حقاً، ثم انقر على الموقف المطابق", fr: "Choisis un droit, puis clique sur la situation correspondante", es: "Selecciona un derecho y luego la situación correspondiente", zh: "选择一项权利，然后点击匹配的情况", hi: "एक अधिकार चुनो, फिर मिलान वाली स्थिति पर क्लिक करो", pt: "Selecione um direito e clique na situação correspondente", ru: "Выбери право, затем нажми на подходящую ситуацию", ja: "権利を選んで、一致する状況をクリック", de: "Wähle ein Recht und klicke auf die passende Situation", ko: "권리를 선택한 다음 맞는 상황을 클릭하세요", tr: "Bir hak seç, sonra eşleşen duruma tıkla", it: "Scegli un diritto e clicca sulla situazione corrispondente", sw: "Chagua haki, kisha bonyeza hali inayolingana", bn: "একটি অধিকার বেছে নাও, তারপর মিলের পরিস্থিতিতে ক্লিক করো", ur: "ایک حق چنو، پھر ملتی جلتی صورتحال پر کلک کرو" },
  rights: { en: "Rights", ar: "الحقوق", fr: "Droits", es: "Derechos", zh: "权利", hi: "अधिकार", pt: "Direitos", ru: "Права", ja: "権利", de: "Rechte", ko: "권리", tr: "Haklar", it: "Diritti", sw: "Haki", bn: "অধিকার", ur: "حقوق" },
  situations: { en: "Situations", ar: "المواقف", fr: "Situations", es: "Situaciones", zh: "情况", hi: "स्थितियाँ", pt: "Situações", ru: "Ситуации", ja: "状況", de: "Situationen", ko: "상황", tr: "Durumlar", it: "Situazioni", sw: "Hali", bn: "পরিস্থিতি", ur: "حالات" },
  matchRight1: { en: "Right to Education", ar: "الحق في التعليم", fr: "Droit à l'éducation", es: "Derecho a la educación", zh: "受教育权", hi: "शिक्षा का अधिकार", pt: "Direito à educação", ru: "Право на образование", ja: "教育を受ける権利", de: "Recht auf Bildung", ko: "교육권", tr: "Eğitim hakkı", it: "Diritto all'istruzione", sw: "Haki ya elimu", bn: "শিক্ষার অধিকার", ur: "تعلیم کا حق" },
  matchSituation1: { en: "A child wants to go to school but can't afford it", ar: "طفل يريد الذهاب إلى المدرسة لكنه لا يستطيع تحمل التكاليف", fr: "Un enfant veut aller à l'école mais n'en a pas les moyens", es: "Un niño quiere ir a la escuela pero no puede pagarlo", zh: "一个孩子想上学但付不起费用", hi: "एक बच्चा स्कूल जाना चाहता है पर उसके पास पैसे नहीं", pt: "Uma criança quer ir à escola mas não pode pagar", ru: "Ребёнок хочет ходить в школу, но не может", ja: "学校に行きたいが通えない子ども", de: "Ein Kind möchte zur Schule, kann es sich aber nicht leisten", ko: "학교에 가고 싶지만 형편이 안 되는 아이", tr: "Okula gitmek isteyen ama karşılayamayan bir çocuk", it: "Un bambino vuole andare a scuola ma non può permetterselo", sw: "Mtoto anataka kwenda shule lakini hawezi kumudu", bn: "একটি শিশু স্কুলে যেতে চায় কিন্তু সামর্থ্য নেই", ur: "بچہ اسکول جانا چاہتا ہے مگر پیسے نہیں" },
  matchRight2: { en: "Right to Safety", ar: "الحق في الأمان", fr: "Droit à la sécurité", es: "Derecho a la seguridad", zh: "安全权", hi: "सुरक्षा का अधिकार", pt: "Direito à segurança", ru: "Право на безопасность", ja: "安全の権利", de: "Recht auf Sicherheit", ko: "안전권", tr: "Güvenlik hakkı", it: "Diritto alla sicurezza", sw: "Haki ya usalama", bn: "নিরাপত্তার অধিকার", ur: "تحفظ کا حق" },
  matchSituation2: { en: "A child is being bullied at school and feels scared", ar: "طفل يتعرض للتنمر في المدرسة ويشعر بالخوف", fr: "Un enfant est harcelé à l'école et a peur", es: "Un niño es acosado en la escuela y tiene miedo", zh: "一个孩子在学校被欺负感到害怕", hi: "एक बच्चा स्कूल में बदमाशी का शिकार है और डरा हुआ है", pt: "Uma criança está sendo intimidada e tem medo", ru: "Ребёнок подвергается травле в школе и боится", ja: "学校でいじめられて怖がっている子ども", de: "Ein Kind wird in der Schule gemobbt und hat Angst", ko: "학교에서 괴롭힘을 당하고 무서워하는 아이", tr: "Okulda zorbalığa uğrayan ve korkan bir çocuk", it: "Un bambino viene bullizzato a scuola e ha paura", sw: "Mtoto ananyanyaswa shuleni na anaogopa", bn: "একটি শিশু স্কুলে উৎপীড়িত হচ্ছে এবং ভয় পাচ্ছে", ur: "بچہ اسکول میں غنڈہ گردی کا شکار ہے اور خوفزدہ ہے" },
  matchRight3: { en: "Right to Health", ar: "الحق في الصحة", fr: "Droit à la santé", es: "Derecho a la salud", zh: "健康权", hi: "स्वास्थ्य का अधिकार", pt: "Direito à saúde", ru: "Право на здоровье", ja: "健康の権利", de: "Recht auf Gesundheit", ko: "건강권", tr: "Sağlık hakkı", it: "Diritto alla salute", sw: "Haki ya afya", bn: "স্বাস্থ্যের অধিকার", ur: "صحت کا حق" },
  matchSituation3: { en: "A sick child needs medicine but there's no doctor nearby", ar: "طفل مريض يحتاج دواء لكن لا يوجد طبيب قريب", fr: "Un enfant malade a besoin de médicaments mais il n'y a pas de médecin", es: "Un niño enfermo necesita medicina pero no hay médico cerca", zh: "一个生病的孩子需要药物但附近没有医生", hi: "एक बीमार बच्चे को दवा चाहिए लेकिन आसपास कोई डॉक्टर नहीं", pt: "Uma criança doente precisa de remédio mas não há médico perto", ru: "Больному ребёнку нужно лекарство, но рядом нет врача", ja: "病気の子どもに薬が必要だが近くに医者がいない", de: "Ein krankes Kind braucht Medizin, aber kein Arzt ist in der Nähe", ko: "아픈 아이에게 약이 필요하지만 근처에 의사가 없어요", tr: "Hasta bir çocuğun ilaca ihtiyacı var ama yakınlarda doktor yok", it: "Un bambino malato ha bisogno di medicine ma non c'è un dottore vicino", sw: "Mtoto mgonjwa anahitaji dawa lakini hakuna daktari karibu", bn: "একটি অসুস্থ শিশুর ওষুধ দরকার কিন্তু কাছে কোনো ডাক্তার নেই", ur: "بیمار بچے کو دوائی چاہیے مگر قریب ڈاکٹر نہیں" },
  matchRight4: { en: "Right to Equality", ar: "الحق في المساواة", fr: "Droit à l'égalité", es: "Derecho a la igualdad", zh: "平等权", hi: "समानता का अधिकार", pt: "Direito à igualdade", ru: "Право на равенство", ja: "平等の権利", de: "Recht auf Gleichheit", ko: "평등권", tr: "Eşitlik hakkı", it: "Diritto all'uguaglianza", sw: "Haki ya usawa", bn: "সমতার অধিকার", ur: "مساوات کا حق" },
  matchSituation4: { en: "A kid is treated differently because of how they look", ar: "طفل يُعامل بشكل مختلف بسبب مظهره", fr: "Un enfant est traité différemment à cause de son apparence", es: "Un niño es tratado diferente por su apariencia", zh: "一个孩子因为外貌而被区别对待", hi: "एक बच्चे से उसकी शक्ल-सूरत की वजह से अलग व्यवहार किया जाता है", pt: "Uma criança é tratada diferente por sua aparência", ru: "К ребёнку относятся иначе из-за его внешности", ja: "見た目が違うという理由で差別される子ども", de: "Ein Kind wird wegen seines Aussehens anders behandelt", ko: "외모 때문에 다르게 대우받는 아이", tr: "Görünüşü yüzünden farklı muamele gören bir çocuk", it: "Un bambino viene trattato diversamente per il suo aspetto", sw: "Mtoto anatendewe tofauti kwa sababu ya jinsi anavyoonekana", bn: "একটি শিশুর সাথে তার চেহারার কারণে ভিন্ন আচরণ করা হয়", ur: "بچے سے اس کی شکل و صورت کی وجہ سے مختلف سلوک" },
  matchRight5: { en: "Right to Speak", ar: "الحق في التعبير", fr: "Droit à la parole", es: "Derecho a expresarse", zh: "言论自由权", hi: "बोलने का अधिकार", pt: "Direito à expressão", ru: "Право на свободу слова", ja: "発言の権利", de: "Recht auf freie Meinungsäußerung", ko: "표현의 자유", tr: "İfade özgürlüğü", it: "Diritto di parola", sw: "Haki ya kuzungumza", bn: "কথা বলার অধিকার", ur: "اظہار کا حق" },
  matchSituation5: { en: "A student has an idea but is told to stay quiet", ar: "طالب لديه فكرة لكن يُطلب منه الصمت", fr: "Un élève a une idée mais on lui dit de se taire", es: "Un estudiante tiene una idea pero le dicen que se calle", zh: "一个学生有想法但被要求保持沉默", hi: "एक छात्र के पास विचार है लेकिन उसे चुप रहने कहा जाता है", pt: "Um aluno tem uma ideia mas é mandado ficar quieto", ru: "У ученика есть идея, но ему велят молчать", ja: "アイデアがあるのに黙れと言われる生徒", de: "Ein Schüler hat eine Idee, wird aber zum Schweigen aufgefordert", ko: "아이디어가 있는 학생에게 조용히 하라고 해요", tr: "Fikri olan bir öğrenciye sessiz olması söyleniyor", it: "Uno studente ha un'idea ma gli dicono di stare zitto", sw: "Mwanafunzi ana wazo lakini anaambiwa akae kimya", bn: "একজন ছাত্রের ধারণা আছে কিন্তু চুপ থাকতে বলা হয়", ur: "ایک طالب علم کے پاس خیال ہے مگر خاموش رہنے کو کہا جاتا ہے" },
  matchingComplete: { en: "🎉 All Matched!", ar: "🎉 تم التطابق!", fr: "🎉 Tout associé !", es: "🎉 ¡Todo asociado!", zh: "🎉 全部匹配！", hi: "🎉 सब मिल गया!", pt: "🎉 Tudo combinado!", ru: "🎉 Всё совпало!", ja: "🎉 全部マッチ！", de: "🎉 Alles zugeordnet!", ko: "🎉 모두 맞췄어요!", tr: "🎉 Hepsi eşleşti!", it: "🎉 Tutto abbinato!", sw: "🎉 Yote yamelingana!", bn: "🎉 সব মিলে গেছে!", ur: "🎉 سب مل گیا!" },
  matchingCongrats: { en: "You matched all rights to their situations! You're a human rights champion! 🏆", ar: "لقد طابقت جميع الحقوق مع مواقفها! أنت بطل حقوق الإنسان! 🏆", fr: "Tu as associé tous les droits à leurs situations ! Tu es un champion des droits humains ! 🏆", es: "¡Asociaste todos los derechos con sus situaciones! ¡Eres un campeón de los derechos humanos! 🏆", zh: "你将所有权利与其情况匹配了！你是人权冠军！🏆", hi: "तुमने सभी अधिकारों को उनकी स्थितियों से मिला दिया! तुम मानवाधिकार चैंपियन हो! 🏆", pt: "Você combinou todos os direitos com suas situações! Você é um campeão dos direitos humanos! 🏆", ru: "Ты сопоставил все права с ситуациями! Ты чемпион по правам человека! 🏆", ja: "全ての権利を状況にマッチさせました！人権チャンピオンです！🏆", de: "Du hast alle Rechte ihren Situationen zugeordnet! Du bist ein Menschenrechtschampion! 🏆", ko: "모든 권리를 상황과 맞췄어요! 인권 챔피언이에요! 🏆", tr: "Tüm hakları durumlarıyla eşleştirdin! İnsan hakları şampiyonusun! 🏆", it: "Hai abbinato tutti i diritti alle loro situazioni! Sei un campione dei diritti umani! 🏆", sw: "Umelinganisha haki zote na hali zao! Wewe ni bingwa wa haki za binadamu! 🏆", bn: "তুমি সব অধিকার পরিস্থিতির সাথে মিলিয়েছ! তুমি মানবাধিকার চ্যাম্পিয়ন! 🏆", ur: "تم نے سب حقوق کو ان کی حالتوں سے ملایا! تم انسانی حقوق کے چیمپئن ہو! 🏆" },

  // Footer
  forParentsTeachers: { en: "For Parents & Teachers", ar: "للآباء والمعلمين", fr: "Pour parents et enseignants", es: "Para padres y profesores", zh: "给家长和老师", hi: "माता-पिता और शिक्षकों के लिए", pt: "Para pais e professores", ru: "Для родителей и учителей", ja: "保護者と教師の方へ", de: "Für Eltern und Lehrer", ko: "학부모와 교사를 위해", tr: "Ebeveynler ve öğretmenler için", it: "Per genitori e insegnanti", sw: "Kwa wazazi na walimu", bn: "অভিভাবক ও শিক্ষকদের জন্য", ur: "والدین اور اساتذہ کے لیے" },
  teachingGuides: { en: "Teaching guides", ar: "أدلة تعليمية", fr: "Guides pédagogiques", es: "Guías de enseñanza", zh: "教学指南", hi: "शिक्षण गाइड", pt: "Guias de ensino", ru: "Методические пособия", ja: "教育ガイド", de: "Lehrmaterialien", ko: "교육 가이드", tr: "Öğretim rehberleri", it: "Guide didattiche", sw: "Miongozo ya kufundisha", bn: "শিক্ষণ গাইড", ur: "تدریسی رہنمائی" },
  classroomActivities: { en: "Classroom activities", ar: "أنشطة صفية", fr: "Activités en classe", es: "Actividades en clase", zh: "课堂活动", hi: "कक्षा गतिविधियाँ", pt: "Atividades em sala", ru: "Классные занятия", ja: "教室活動", de: "Unterrichtsaktivitäten", ko: "교실 활동", tr: "Sınıf etkinlikleri", it: "Attività in classe", sw: "Shughuli za darasani", bn: "শ্রেণীকক্ষ কার্যক্রম", ur: "کلاس روم سرگرمیاں" },
  additionalResources: { en: "Additional resources", ar: "موارد إضافية", fr: "Ressources supplémentaires", es: "Recursos adicionales", zh: "更多资源", hi: "अतिरिक्त संसाधन", pt: "Recursos adicionais", ru: "Дополнительные ресурсы", ja: "追加リソース", de: "Zusätzliche Ressourcen", ko: "추가 자료", tr: "Ek kaynaklar", it: "Risorse aggiuntive", sw: "Rasilimali za ziada", bn: "অতিরিক্ত সম্পদ", ur: "اضافی وسائل" },
  helpfulLinks: { en: "Helpful Links", ar: "روابط مفيدة", fr: "Liens utiles", es: "Enlaces útiles", zh: "有用的链接", hi: "उपयोगी लिंक", pt: "Links úteis", ru: "Полезные ссылки", ja: "役立つリンク", de: "Nützliche Links", ko: "유용한 링크", tr: "Faydalı bağlantılar", it: "Link utili", sw: "Viungo muhimu", bn: "সহায়ক লিংক", ur: "مفید لنکس" },
  conventionRightsChild: { en: "Convention on the Rights of the Child", ar: "اتفاقية حقوق الطفل", fr: "Convention relative aux droits de l'enfant", es: "Convención sobre los Derechos del Niño", zh: "儿童权利公约", hi: "बाल अधिकार सम्मेलन", pt: "Convenção sobre os Direitos da Criança", ru: "Конвенция о правах ребёнка", ja: "子どもの権利条約", de: "Kinderrechtskonvention", ko: "아동 권리 협약", tr: "Çocuk Hakları Sözleşmesi", it: "Convenzione sui diritti dell'infanzia", sw: "Mkataba wa Haki za Mtoto", bn: "শিশু অধিকার সনদ", ur: "بچوں کے حقوق کا معاہدہ" },
  universalDeclaration: { en: "Universal Declaration of Human Rights", ar: "الإعلان العالمي لحقوق الإنسان", fr: "Déclaration universelle des droits de l'homme", es: "Declaración Universal de los Derechos Humanos", zh: "世界人权宣言", hi: "मानवाधिकारों की सार्वभौमिक घोषणा", pt: "Declaração Universal dos Direitos Humanos", ru: "Всеобщая декларация прав человека", ja: "世界人権宣言", de: "Allgemeine Erklärung der Menschenrechte", ko: "세계 인권 선언", tr: "İnsan Hakları Evrensel Beyannamesi", it: "Dichiarazione Universale dei Diritti Umani", sw: "Tamko la Kimataifa la Haki za Binadamu", bn: "মানবাধিকারের সর্বজনীন ঘোষণাপত্র", ur: "انسانی حقوق کا عالمی اعلامیہ" },
  madeWithLove: { en: "Made with ❤️ for children of the world", ar: "صُنع بحب ❤️ لأطفال العالم", fr: "Fait avec ❤️ pour les enfants du monde", es: "Hecho con ❤️ para los niños del mundo", zh: "用 ❤️ 为全世界的孩子制作", hi: "दुनिया के बच्चों के लिए ❤️ से बनाया", pt: "Feito com ❤️ para as crianças do mundo", ru: "Сделано с ❤️ для детей всего мира", ja: "世界の子どもたちのために ❤️ で作られました", de: "Mit ❤️ für die Kinder der Welt gemacht", ko: "세계 어린이들을 위해 ❤️로 만들었어요", tr: "Dünya çocukları için ❤️ ile yapıldı", it: "Fatto con ❤️ per i bambini del mondo", sw: "Imetengenezwa kwa ❤️ kwa watoto wa dunia", bn: "বিশ্বের শিশুদের জন্য ❤️ দিয়ে তৈরি", ur: "دنیا کے بچوں کے لیے ❤️ سے بنایا" },
  learnAboutRights: { en: "Learn about your rights in a fun, interactive way", ar: "تعلّم عن حقوقك بطريقة ممتعة وتفاعلية", fr: "Apprends tes droits de manière amusante et interactive", es: "Aprende sobre tus derechos de forma divertida e interactiva", zh: "以有趣互动的方式了解你的权利", hi: "मज़ेदार और इंटरैक्टिव तरीके से अपने अधिकारों के बारे में जानो", pt: "Aprenda sobre seus direitos de forma divertida e interativa", ru: "Узнай о своих правах весело и интерактивно", ja: "楽しくインタラクティブに自分の権利を学ぼう", de: "Lerne deine Rechte auf lustige, interaktive Weise kennen", ko: "재미있고 인터랙티브한 방식으로 권리를 배우세요", tr: "Haklarını eğlenceli ve etkileşimli bir şekilde öğren", it: "Scopri i tuoi diritti in modo divertente e interattivo", sw: "Jifunze kuhusu haki zako kwa njia ya kufurahisha na shirikishi", bn: "মজার ও ইন্টারেক্টিভভাবে তোমার অধিকার সম্পর্কে জানো", ur: "اپنے حقوق کے بارے میں مزیدار اور انٹرایکٹو طریقے سے جانو" },
};

export function tr(key: string, lang: LangCode, replacements?: Record<string, string | number>): string {
  let text = t[key]?.[lang] || t[key]?.["en"] || key;
  if (replacements) {
    Object.entries(replacements).forEach(([k, v]) => {
      text = text.replace(`{${k}}`, String(v));
    });
  }
  return text;
}
