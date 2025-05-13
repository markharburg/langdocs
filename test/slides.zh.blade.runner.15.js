const gLang = 'zh';
const gBook = 'blade.runner';
const gChap = '15';
const gMode = 'zh';
const gSpeed = '120';

const slideData =
[
	{
		target: "稍等。",
		alt: "Shāo　děng。",
		native: "Hold on.",
		words: [ '稍', '等' ],
		quizWords: [ '稍', '等' ]
	},
	{
		target: "你要什么?",
		alt: "Nǐ　yào　shénme？",
		native: "what would you like?",
		words: [ '你', '要', '什么' ],
		quizSentence: true
	},
	{
		target: "青岛。",
		alt: "Qīngdǎo。",
		native: "Qingdao.",
		words: [ '青岛' ],
		quizWords: [ '青岛' ]
	},
	{
		target: "就这些了?",
		alt: "Jiù　zhèxiē　le？",
		native: "And that\'s all?",
		words: [ '就', '这些', '了' ],
		quizSentence: true
	},
	{
		target: "是的。",
		alt: "Shì　de。",
		native: "Yes.",
		words: [ '是', '的' ],
		quizSentence: true
	},
	{
		target: "布莱恩特找你。",
		alt: "Bùlái\'ēntè　zhǎo　nǐ。",
		native: "Bryant looking for you.",
		words: [ '布莱恩特', '找', '你' ],
		quizSentence: true
	},
	{
		target: "天啊，戴克，你的样子和你放倒 在人行道的复制人一样糟。",
		alt: "Tiān　a、　dàikè、　nǐ　de　yàngzi　hé　nǐ　fàng　dào　zài　rénxíngdào　de　fùzhì　rén　yīyàng　zāo。",
		native: "Jesus, Dec, you look just as bad as the clone you put down on the sidewalk.",
		words: [ '天', '啊', '戴克', '你', '的', '样子', '和', '你', '放', '倒', '在', '人行道', '的', '复制', '人', '一样', '糟' ],
		quizWords: [ '倒', '样子', '放', '人行道', '糟' ]
	},
	{
		target: "我要回家了。",
		alt: "Wǒ　yào　huí　jiā　le。",
		native: "I am going home.",
		words: [ '我', '要', '回', '家', '了' ],
		quizSentence: true
	},
	{
		target: "你要向他学着点，格夫。",
		alt: "Nǐ　yào　xiàng　tā　xué　zhuó　diǎn、　gé　fū。",
		native: "You should learn from him, Goff.",
		words: [ '你', '要', '向', '他', '学', '着', '点', '格', '夫' ],
		quizWords: [ '点', '着', '夫', '格' ]
	},
	{
		target: "他真是个该死的顶尖杀手。",
		alt: "Tā　zhēnshi　gè　gāisǐ　de　dǐngjiān　shāshǒu。",
		native: "He\'s a damn top killer.",
		words: [ '他', '真是', '个', '该死', '的', '顶尖', '杀手' ],
		quizWords: [ '真是', '顶尖', '该死' ]
	},
	{
		target: "还有四个。",
		alt: "Hái　yǒu　sì　gè。",
		native: "Four more.",
		words: [ '还', '有', '四', '个' ],
		quizSentence: true
	},
	{
		target: "来，格夫，我们走吧。",
		alt: "Lái、　gé　fū、　wǒmen　zǒu　ba。",
		native: "Come on, Goff, let’s go.",
		words: [ '来', '格', '夫', '我们', '走', '吧' ],
		quizSentence: true
	},
	{
		target: "三个。",
		alt: "Sān　gè。",
		native: "Three.",
		words: [ '三', '个' ],
		quizSentence: true
	},
	{
		target: "还要逮到三个。",
		alt: "Hái　yào　dǎi　dào　sān　gè。",
		native: "Three more to catch.",
		words: [ '还', '要', '逮', '到', '三', '个' ],
		quizSentence: true
	},
	{
		target: "四个。",
		alt: "Sì　gè。",
		native: "Four.",
		words: [ '四', '个' ],
		quizSentence: true
	},
	{
		target: "你在泰里尔公司测试过的 那个复制人瑞秋不见了。",
		alt: "Nǐ　zài　tàilǐěr　gōngsī　cèshìguò　dì　nàgè　fùzhì　rén　ruìqiū　bùjiàn　le。",
		native: "The clone Rachel you tested at Tyrell Corporation is missing.",
		words: [ '你', '在', '泰里尔', '公司', '测试过', '的', '那个', '复制', '人', '瑞秋', '不见', '了' ],
		quizWords: [ '测试过', '不见' ]
	},
	{
		target: "她不知道她是复制人。",
		alt: "Tā　bù　zhīdào　tā　shì　fùzhì　rén。",
		native: "She doesn’t know she’s a replicant.",
		words: [ '她', '不', '知道', '她', '是', '复制', '人' ],
		quizSentence: true
	},
	{
		target: "和什么大脑输入有关，泰里尔说的。",
		alt: "Hé　shénme　dànǎo　shūrù　yǒuguān、　tàilǐěr　shuō　de。",
		native: "Related to what brain input, Tyrell said.",
		words: [ '和', '什么', '大脑', '输入', '有关', '泰里尔', '说', '的' ],
		quizWords: [ '大脑', '有关', '输入' ]
	},
	{
		target: "走吧，格夫。",
		alt: "Zǒu　ba、　gé　fū。",
		native: "Let’s go, Goff.",
		words: [ '走', '吧', '格', '夫' ],
		quizSentence: true
	},
	{
		target: "陪我去喝一杯。",
		alt: "Péi　wǒ　qù　hè　yī　bēi。",
		native: "Come have a drink with me.",
		words: [ '陪', '我', '去', '喝', '一', '杯' ],
		quizWords: [ '杯', '陪', '喝' ]
	}
];