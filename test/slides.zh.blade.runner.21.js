const gLang = 'zh';
const gBook = 'blade.runner';
const gChap = '21';
const gMode = 'zh';
const gSpeed = '120';

const slideData =
[
	{
		target: "我要出来逛逛，午安。",
		alt: "Wǒ　yào　chūlái　guàng　guàng、　wǔ　ān。",
		native: "I\'m going out for a walk. Good afternoon.",
		words: [ '我', '要', '出来', '逛', '逛', '午', '安' ],
		quizWords: [ '安', '逛', '午', '出来' ]
	},
	{
		target: "雨下个不停。",
		alt: "Yǔ　xià　gè　bù　tíng。",
		native: "It keeps raining.",
		words: [ '雨', '下', '个', '不', '停' ],
		quizWords: [ '停' ]
	},
	{
		target: "是呀！下个没完。",
		alt: "Shì　ya！　Xià　gè　méi　wán。",
		native: "yes! There\'s no end to the next one.",
		words: [ '是', '呀', '下', '个', '没', '完' ],
		quizWords: [ '完' ]
	},
	{
		target: "嘿！我给你看个地方。",
		alt: "Hēi！　Wǒ　gěi　nǐ　kàn　gè　dìfāng。",
		native: "Hey! I\'ll show you a place.",
		words: [ '嘿', '我', '给', '你', '看', '个', '地方' ],
		quizWords: [ '嘿' ]
	},
	{
		target: "嘿！我给你看个地方。",
		alt: "Hēi！　Wǒ　gěi　nǐ　kàn　gè　dìfāng。",
		native: "Hey! I\'ll show you a place.",
		words: [ '嘿', '我', '给', '你', '看', '个', '地方' ],
		quizSentence: true
	},
	{
		target: "和泰里尔一起的尸体身份确认了。",
		alt: "Hé　tàilǐěr　yīqǐ　de　shītǐ　shēnfèn　quèrèn　le。",
		native: "The body with Tyrell was identified.",
		words: [ '和', '泰里尔', '一起', '的', '尸体', '身份', '确认', '了' ],
		quizWords: [ '尸体', '一起', '身份', '确认' ]
	},
	{
		target: "25岁的白人。",
		alt: "２５　Suì　de　báirén。",
		native: "25 year old white man.",
		words: [ '岁', '的', '白', '人' ],
		quizWords: [ '白', '岁' ]
	},
	{
		target: "J.F.赛巴斯迪安。",
		alt: "J。F。　Sài　bā　sī　dí　ān。",
		native: "J.F.Sebastian.",
		words: [ '', 'J', 'F', '赛', '巴', '斯' ],
		quizWords: [ '斯', '巴', '赛' ]
	},
	{
		target: "地址布拉德伯瑞公寓 第九区 NF46751。",
		alt: "Dìzhǐ　―　Bù　lā　dé　bó　ruì　gōngyù　dì　jiǔ　qū　NF６７５１。",
		native: "Address: Bradbury Apartments District 9 NF46751.",
		words: [ '地址', '', '布', '拉', '德', '伯', '瑞', '公寓', '第', '九', '区', 'N' ],
		quizWords: [ '拉', '公寓', '九', '伯', '区', '布', '瑞', '德', '地址' ]
	},
	{
		target: "我要你到那里。",
		alt: "Wǒ　yào　nǐ　dào　nàlǐ。",
		native: "I want you there.",
		words: [ '我', '要', '你', '到', '那里' ],
		quizSentence: true
	},
	{
		target: "本区地面交通已经关闭，你在这里做什么?",
		alt: "Běn　qū　dìmiàn　jiāotōng　yǐjīng　guānbì、　nǐ　zài　zhèlǐ　zuò　shénme？",
		native: "Ground transportation in this area has been closed. What are you doing here?",
		words: [ '本', '区', '地面', '交通', '已经', '关闭', '你', '在', '这里', '做', '什么' ],
		quizWords: [ '地面', '交通', '关闭' ]
	},
	{
		target: "我在工作，你在做什么?",
		alt: "Wǒ　zài　gōngzuò、　nǐ　zài　zuò　shénme？",
		native: "I\'m working, what are you doing?",
		words: [ '我', '在', '工作', '你', '在', '做', '什么' ],
		quizSentence: true
	},
	{
		target: "我在逮捕你，我就是在做这个。",
		alt: "Wǒ　zài　dàibǔ　nǐ、　wǒ　jiùshì　zài　zuò　zhège。",
		native: "I\'m arresting you, that\'s what I\'m doing.",
		words: [ '我', '在', '逮捕', '你', '我', '就是', '在', '做', '这个' ],
		quizWords: [ '逮捕' ]
	},
	{
		target: "我是戴克，银翼杀手。",
		alt: "Wǒ　shì　dàikè、　yín　yì　shāshǒu。",
		native: "I am Deckard, Blade Runner.",
		words: [ '我', '是', '戴克', '银', '翼', '杀手' ],
		quizSentence: true
	},
	{
		target: "26345，登记在册，监控中。",
		alt: "２６３４５、　Dēngjì　zài　cè、　jiānkòng　zhōng。",
		native: "26345, registered and under monitoring.",
		words: [ '登', '记在', '册', '监', '控中', '' ],
		quizWords: [ '册', '登', '监' ]
	},
	{
		target: "等等！查核中。",
		alt: "Děng　děng！　Cháhé　zhōng。",
		native: "etc! Under review.",
		words: [ '等', '等', '查核', '中' ],
		quizWords: [ '查核', '等' ]
	},
	{
		target: "好！检查完毕！祝你好运。",
		alt: "Hǎo！　Jiǎnchá　wánbì！　Zhù　nǐ　hǎo　yùn。",
		native: "good! Check completed! Good luck.",
		words: [ '好', '检查', '完毕', '祝', '你', '好', '运' ],
		quizWords: [ '运', '检查', '祝', '完毕' ]
	},
	{
		target: "喂。",
		alt: "Wèi。",
		native: "Hello.",
		words: [ '喂' ],
		quizWords: [ '喂' ]
	},
	{
		target: "喂，J.F.在家么?",
		alt: "Wèi、J。F。　Zàijiā　me？",
		native: "Hello, is J.F. at home?",
		words: [ '喂', 'JF', '在' ],
		quizSentence: true
	},
	{
		target: "是哪一位?",
		alt: "Shì　nǎ　yī　wèi？",
		native: "Who is it?",
		words: [ '是', '哪', '一', '位' ],
		quizWords: [ '位' ]
	},
	{
		target: "J.F.的老朋友艾迪。",
		alt: "J。F。　De　lǎo　péngyǒu　ài　dí。",
		native: "J.F.’s old friend Eddie.",
		words: [ '', 'J', 'F', '的老', '朋', '友' ],
		quizWords: [ '友', '朋' ]
	},
	{
		target: "对朋友可不能这样啊。",
		alt: "Duì　péngyǒu　kě　bùnéng　zhèyàng　a。",
		native: "You can’t do this to your friends.",
		words: [ '对', '朋友', '可', '不能', '这样', '啊' ],
		quizWords: [ '不能', '这样' ]
	},
	{
		target: "给我！是我的。",
		alt: "Gěi　wǒ！　Shì　wǒ　de。",
		native: "Give me! be mine.",
		words: [ '给', '我', '是', '我', '的' ],
		quizSentence: true
	},
	{
		target: "晚安！老兄。",
		alt: "Wǎn\'ān！　Lǎoxiōng。",
		native: "Good night! Dude.",
		words: [ '晚安', '老兄' ],
		quizWords: [ '晚安' ]
	}
];