const gLang = 'zh';
const gBook = 'blade.runner';
const gChap = '13';
const gMode = 'zh';
const gSpeed = '120';

const slideData =
[
	{
		target: "戴菲。",
		alt: "Dài　fēi。",
		native: "Diffy.",
		words: [ '戴', '菲' ],
		quizWords: [ '戴', '菲' ]
	},
	{
		target: "我要问你几个问题 --你先走开。",
		alt: "Wǒ　yào　wèn　nǐ　jǐ　gè　wèntí　――nǐ　xiān　zǒu　kāi。",
		native: "I want to ask you a few questions -- you go away first.",
		words: [ '我', '要', '问', '你', '几', '个', '问题', '你', '先', '走', '开' ],
		quizWords: [ '先', '问' ]
	},
	{
		target: "你曾向个埃及人买蛇吗? --经常在买，老弟。",
		alt: "Nǐ　céng　xiàng　gè　āijí　rén　mǎi　shé　ma？　――Jīngcháng　zài　mǎi、　lǎodì。",
		native: "Have you ever bought a snake from an Egyptian? --Often, bro.",
		words: [ '你', '曾', '向', '个', '埃及', '人', '买', '蛇', '吗', '经常', '在', '买', '老弟' ],
		quizWords: [ '经常', '曾', '蛇', '埃及' ]
	},
	{
		target: "看过这个女孩吗? --没看过，滚吧！",
		alt: "Kànguò　zhège　nu:３hai２　ma？　――Méi　kànguò、　gǔn　ba！",
		native: "Have you seen this girl? --No, go away!",
		words: [ '看过', '这个', '女孩', '吗', '没', '看过', '滚', '吧' ],
		quizWords: [ '看过', '没', '滚', '女孩', '吗' ]
	},
	{
		target: "你的执照没问题吧?老兄 --路易。",
		alt: "Nǐ　de　zhízhào　méi　wèntí　ba？　Lǎoxiōng　――lùyì。",
		native: "Is your license okay? Dude --Louis.",
		words: [ '你', '的', '执照', '没', '问题', '吧', '老兄', '路易' ],
		quizWords: [ '执照', '路易' ]
	},
	{
		target: "这个人渴了，给他一杯酒，记在我们帐上。",
		alt: "Zhège　rén　kě　le、　gěi　tā　yī　bēi　jiǔ、　jì　zài　wǒmen　zhàng　shàng。",
		native: "This man is thirsty, give him a glass of wine and charge it to our account.",
		words: [ '这个', '人', '渴', '了', '给', '他', '一', '杯', '酒', '记', '在', '我们', '帐', '上' ],
		quizWords: [ '酒', '记', '渴', '杯', '帐' ]
	},
	{
		target: "再见。",
		alt: "Zàijiàn。",
		native: "goodbye.",
		words: [ '再见' ],
		quizWords: [ '再见' ]
	},
	{
		target: "喂。",
		alt: "Wèi。",
		native: "Hello.",
		words: [ '喂' ],
		quizWords: [ '喂' ]
	},
	{
		target: "以前有人掉头不理我。",
		alt: "Yǐqián　yǒurén　diàotóu　bù　lǐ　wǒ。",
		native: "Some people have turned around and ignored me before.",
		words: [ '以前', '有人', '掉头', '不', '理', '我' ],
		quizWords: [ '有人', '掉头', '理' ]
	},
	{
		target: "但没有一个是在我这么帅的时候。",
		alt: "Dàn　méiyǒu　yīgè　shì　zài　wǒ　zhème　shuài　de　shíhòu。",
		native: "But none when I was this handsome.",
		words: [ '但', '没有', '一个', '是', '在', '我', '这么', '帅', '的', '时候' ],
		quizWords: [ '帅', '时候' ]
	},
	{
		target: "我在第四区的酒吧里。",
		alt: "Wǒ　zài　dì　sì　qū　de　jiǔbā　lǐ。",
		native: "I\'m in a bar in the 4th arrondissement.",
		words: [ '我', '在', '第', '四', '区', '的', '酒吧', '里' ],
		quizWords: [ '酒吧' ]
	},
	{
		target: "戴菲路易斯在这里。",
		alt: "Dài　fēilùyìsī　zài　zhèlǐ。",
		native: "DafiLewis here.",
		words: [ '戴', '菲路易斯', '在', '这里' ],
		quizSentence: true
	},
	{
		target: "你何不过来喝一杯。",
		alt: "Nǐ　hébù　guòlái　hè　yī　bēi。",
		native: "Why don\'t you come over and have a drink.",
		words: [ '你', '何不', '过来', '喝', '一', '杯' ],
		quizWords: [ '何不', '喝' ]
	},
	{
		target: "我不想去，戴克先生。",
		alt: "Wǒ　bùxiǎng　qù、　dàikè　xiānshēng。",
		native: "I don\'t want to go, Mr. Dyke.",
		words: [ '我', '不想', '去', '戴克', '先生' ],
		quizSentence: true
	},
	{
		target: "那地方不适合我。",
		alt: "Nà　dìfāng　bù　shìhé　wǒ。",
		native: "That place is not for me.",
		words: [ '那', '地方', '不', '适合', '我' ],
		quizWords: [ '适合' ]
	},
	{
		target: "那就去别的地方吧。",
		alt: "Nà　jiù　qù　bié　dì　dìfāng　ba。",
		native: "Then go somewhere else.",
		words: [ '那', '就', '去', '别', '的', '地方', '吧' ],
		quizSentence: true
	},
	{
		target: "总共一块二毛五。",
		alt: "Zǒnggòng　yīkuài　èr　máo　wǔ。",
		native: "A total of one dollar and twenty-five cents.",
		words: [ '总共', '一块', '二', '毛', '五' ],
		quizWords: [ '一块', '毛', '总共' ]
	},
	{
		target: "先生们，女士们。",
		alt: "Xiānshēngmen、　nu:３shìmen５。",
		native: "Ladies and gentlemen.",
		words: [ '先生们', '女士们' ],
		quizWords: [ '先生们', '女士们' ]
	},
	{
		target: "戴菲路易斯献给各位 莎乐美和蛇之舞。",
		alt: "Dài　fēi　lùyìsī　xiàn　gěi　gèwèi　―　Shā　lè　měi　hé　shé　zhī　wǔ。",
		native: "Daphi Lewis Dedicated to you all: Salome and the Dance of the Snakes.",
		words: [ '戴', '菲', '路易斯', '献', '给', '各位', '', '莎', '乐', '美', '和', '蛇', '之', '舞' ],
		quizWords: [ '舞', '美', '路易斯', '莎', '各位', '献', '乐' ]
	},
	{
		target: "请看她如何从致命的大毒蛇那里取乐的。",
		alt: "Qǐng　kàn　tā　rúhé　cóng　zhìmìng　de　dà　dúshé　nàlǐ　qǔlè　de。",
		native: "See how she takes pleasure from the deadly serpent.",
		words: [ '请', '看', '她', '如何', '从', '致命', '的', '大', '毒蛇', '那里', '取乐', '的' ],
		quizWords: [ '致命', '大', '取乐', '毒蛇', '如何' ]
	}
];