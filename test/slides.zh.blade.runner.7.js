const gLang = 'zh';
const gBook = 'blade.runner';
const gChap = '7';
const gMode = 'zh';
const gSpeed = '120';

const slideData =
[
	{
		target: "时间?",
		alt: "Shíjiān？",
		native: "time?",
		words: [ '时间' ],
		quizSentence: true
	},
	{
		target: "足够了！",
		alt: "Zúgòu　le！",
		native: "enough!",
		words: [ '足够', '了' ],
		quizWords: [ '足够' ]
	},
	{
		target: "拿到你宝贵的照片了吗?",
		alt: "Ná　dào　nǐ　bǎoguì　de　zhàopiàn　le　ma？",
		native: "Got your precious photos?",
		words: [ '拿', '到', '你', '宝贵', '的', '照片', '了', '吗' ],
		quizWords: [ '拿', '照片', '宝贵' ]
	},
	{
		target: "有人在那里。",
		alt: "Yǒu　rén　zài　nàlǐ。",
		native: "Someone is there.",
		words: [ '有', '人', '在', '那里' ],
		quizSentence: true
	},
	{
		target: "人吗?",
		alt: "Rén　ma？",
		native: "person?",
		words: [ '人', '吗' ],
		quizSentence: true
	},
	{
		target: "警察。",
		alt: "Jǐngchá。",
		native: "police.",
		words: [ '警察' ],
		quizSentence: true
	},
	{
		target: "\"火焰天使坠落了..\"。",
		alt: "\"Huǒyàn　tiānshǐ　zhuìluò　le。。\"。",
		native: "\"The Angel of Fire fell...\".",
		words: [ '火焰', '天使', '坠落', '了' ],
		quizWords: [ '坠落', '火焰', '天使' ]
	},
	{
		target: "\"雷电在他们的海岸边咆哮\"。",
		alt: "\"Léidiàn　zài　tāmen　dì　hǎi\'àn　biān　páoxiāo\"。",
		native: "\"Thunder and lightning roared by their shores\".",
		words: [ '雷电', '在', '他们', '的', '海岸', '边', '咆哮' ],
		quizWords: [ '雷电', '咆哮' ]
	},
	{
		target: "\"魔鬼的火焰在燃烧\"。",
		alt: "\"Móguǐ　de　huǒyàn　zài　ránshāo\"。",
		native: "\"The devil\'s fire is burning\".",
		words: [ '魔鬼', '的', '火焰', '在', '燃烧' ],
		quizWords: [ '燃烧', '魔鬼' ]
	},
	{
		target: "你们不能来这里。",
		alt: "Nǐmen　bùnéng　lái　zhèlǐ。",
		native: "You can’t come here.",
		words: [ '你们', '不能', '来', '这里' ],
		quizWords: [ '不能' ]
	},
	{
		target: "这是非法的！",
		alt: "Zhè　shì　fēifǎ　de！",
		native: "This is illegal!",
		words: [ '这', '是', '非法', '的' ],
		quizWords: [ '非法' ]
	},
	{
		target: "嘿！嘿！怎么搞的?",
		alt: "Hēi！　Hēi！　Zěnme　gǎo　de？",
		native: "Hey! Hey! What happened?",
		words: [ '嘿', '嘿', '怎么', '搞', '的' ],
		quizWords: [ '嘿' ]
	},
	{
		target: "那里面很冷的。",
		alt: "Nà　lǐmiàn　hěn　lěng　de。",
		native: "It’s very cold in there.",
		words: [ '那', '里面', '很', '冷', '的' ],
		quizWords: [ '冷' ]
	},
	{
		target: "那是我的眼睛，那里面很冷的。",
		alt: "Nà　shì　wǒ　de　yǎnjīng、　nà　lǐmiàn　hěn　lěng　de。",
		native: "Those are my eyes, they are very cold inside.",
		words: [ '那', '是', '我', '的', '眼睛', '那', '里面', '很', '冷', '的' ],
		quizWords: [ '眼睛' ]
	},
	{
		target: "是的，我有些问题。",
		alt: "Shì　de、　wǒ　yǒuxiē　wèntí。",
		native: "Yes, I have some questions.",
		words: [ '是', '的', '我', '有些', '问题' ],
		quizWords: [ '有些' ]
	},
	{
		target: "形态学?寿命?启用日期?",
		alt: "Xíngtài　xué？　Shòumìng？　Qǐyòng　rìqí？",
		native: "Morphology?Lifespan?Commissioning date?",
		words: [ '形态', '学', '寿命', '启用', '日期' ],
		quizWords: [ '形态' ]
	},
	{
		target: "我不知道。",
		alt: "Wǒ　bù　zhīdào。",
		native: "I have no idea.",
		words: [ '我', '不', '知道' ],
		quizSentence: true
	},
	{
		target: "我不知道那些事。",
		alt: "Wǒ　bù　zhīdào　nàxiē　shì。",
		native: "I don’t know about those things.",
		words: [ '我', '不', '知道', '那些', '事' ],
		quizWords: [ '那些' ]
	},
	{
		target: "我只管做眼睛。",
		alt: "Wǒ　zhǐguǎn　zuò　yǎnjīng。",
		native: "I just do the eyes.",
		words: [ '我', '只管', '做', '眼睛' ],
		quizWords: [ '只管' ]
	},
	{
		target: "只是眼睛，只是基因设计。",
		alt: "Zhǐshì　yǎnjīng、　zhǐshì　jīyīn　shèjì。",
		native: "Just eyes, just genetic design.",
		words: [ '只是', '眼睛', '只是', '基因', '设计' ],
		quizWords: [ '基因' ]
	},
	{
		target: "只是眼睛。",
		alt: "Zhǐshì　yǎnjīng。",
		native: "Just the eyes.",
		words: [ '只是', '眼睛' ],
		quizSentence: true
	},
	{
		target: "你是连锁复制人?",
		alt: "Nǐ　shì　liánsuǒ　fùzhì　rén？",
		native: "Are you a chain replicator?",
		words: [ '你', '是', '连锁', '复制', '人' ],
		quizSentence: true
	},
	{
		target: "我设计了你的眼睛。",
		alt: "Wǒ　shèjì　le　nǐ　de　yǎnjīng。",
		native: "I designed your eyes.",
		words: [ '我', '设计', '了', '你', '的', '眼睛' ],
		quizSentence: true
	},
	{
		target: "没错。",
		alt: "Méi　cuò。",
		native: "That\'s right.",
		words: [ '没', '错' ],
		quizSentence: true
	},
	{
		target: "如果你只能看见我用你的眼睛看见的东西。",
		alt: "Rúguǒ　nǐ　zhǐ　néng　kànjiàn　wǒ　yòng　nǐ　de　yǎnjīng　kànjiàn　de　dōngxī。",
		native: "If you could only see what I see with your eyes.",
		words: [ '如果', '你', '只', '能', '看见', '我', '用', '你', '的', '眼睛', '看见', '的', '东西' ],
		quizWords: [ '如果', '只' ]
	},
	{
		target: "回答我的问题。",
		alt: "Huídá　wǒ　de　wèntí。",
		native: "answer my question.",
		words: [ '回答', '我', '的', '问题' ],
		quizSentence: true
	},
	{
		target: "我不知道答案。",
		alt: "Wǒ　bù　zhīdào　dá\'àn。",
		native: "I don’t know the answer.",
		words: [ '我', '不', '知道', '答案' ],
		quizWords: [ '答案' ]
	},
	{
		target: "谁知道?",
		alt: "Shéi　zhīdào？",
		native: "who knows?",
		words: [ '谁', '知道' ],
		quizSentence: true
	},
	{
		target: "泰里尔。",
		alt: "tàilǐěr。",
		native: "Terrell.",
		words: [ '泰里尔' ],
		quizSentence: true
	},
	{
		target: "他都知道。",
		alt: "Tā　dōu　zhīdào。",
		native: "He knows it all.",
		words: [ '他', '都', '知道' ],
		quizSentence: true
	},
	{
		target: "泰里尔公司?",
		alt: "tàilǐěr　gōngsī？",
		native: "Tyrell Company?",
		words: [ '泰里尔', '公司' ],
		quizSentence: true
	},
	{
		target: "他是大老板。",
		alt: "Tā　shì　dà　lǎobǎn。",
		native: "He is the big boss.",
		words: [ '他', '是', '大', '老板' ],
		quizWords: [ '老板', '大' ]
	},
	{
		target: "他是个天才，他设计了你的意识。",
		alt: "Tā　shìgè　tiāncái、　tā　shèjì　le　nǐ　de　yìshí。",
		native: "He is a genius, he designed your consciousness.",
		words: [ '他', '是个', '天才', '他', '设计', '了', '你', '的', '意识' ],
		quizWords: [ '意识', '是个', '天才' ]
	},
	{
		target: "你的脑子。",
		alt: "Nǐ　de　nǎozi。",
		native: "your brain.",
		words: [ '你', '的', '脑子' ],
		quizWords: [ '脑子' ]
	},
	{
		target: "很聪明。",
		alt: "Hěn　cōngmíng。",
		native: "very smart.",
		words: [ '很', '聪明' ],
		quizWords: [ '聪明' ]
	},
	{
		target: "好冷。",
		alt: "Hǎo　lěng。",
		native: "So cold.",
		words: [ '好', '冷' ],
		quizSentence: true
	},
	{
		target: "不是每个人都能发现...。",
		alt: "Bùshì　měi　gèrén　dōu　néng　fāxiàn。。。。",
		native: "Not everyone can spot….",
		words: [ '不是', '每', '个人', '都', '能', '发现' ],
		quizSentence: true
	},
	{
		target: "好冷。",
		alt: "Hǎo　lěng。",
		native: "So cold.",
		words: [ '好', '冷' ],
		quizSentence: true
	},
	{
		target: "我想。",
		alt: "Wǒ　xiǎng。",
		native: "I think.",
		words: [ '我', '想' ],
		quizSentence: true
	},
	{
		target: "赛巴斯迪安！他会带你去。",
		alt: "Sài　bā　sī　dí　ān！　Tā　huì　dài　nǐ　qù。",
		native: "Sebastian! He will take you there.",
		words: [ '赛', '巴', '斯', '迪', '安', '他', '会', '带', '你', '去' ],
		quizWords: [ '带', '斯', '安', '巴', '赛', '迪' ]
	},
	{
		target: "赛巴斯迪安的全名?",
		alt: "Sài　bā　sī　dí　ān　dì　quán　míng？",
		native: "Sebastian’s full name?",
		words: [ '赛', '巴', '斯', '迪', '安', '的', '全', '名' ],
		quizWords: [ '全', '名' ]
	},
	{
		target: "J.F.赛巴斯迪安。",
		alt: "J。F。　Sài　bā　sī　dí　ān。",
		native: "J.F.Sebastian.",
		words: [ '', 'J', 'F', '赛', '巴', '斯' ],
		quizSentence: true
	},
	{
		target: "我们要去哪……找这位。",
		alt: "Wǒmen　yào　qù　nǎ……zhǎo　zhè　wèi。",
		native: "Where are we going...to this guy.",
		words: [ '我们', '要', '去', '哪…', '…', '找' ],
		quizSentence: true
	},
	{
		target: "J.F.赛巴斯迪安?",
		alt: "J。F。　Sài　bā　sī　dí　ān？",
		native: "J.F.Sebastian?",
		words: [ '', 'J', 'F', '赛', '巴', '斯' ],
		quizSentence: true
	}
];