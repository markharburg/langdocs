const gLang = 'zh';
const gBook = 'blade.runner';
const gChap = '12';
const gMode = 'zh';
const gSpeed = '120';

const slideData =
[
	{
		target: "鱼吗?",
		alt: "Yú　ma？",
		native: "fish?",
		words: [ '鱼', '吗' ],
		quizWords: [ '鱼' ]
	},
	{
		target: "它是人造的。",
		alt: "Tā　shì　rénzào　de。",
		native: "It is man-made.",
		words: [ '它', '是', '人造', '的' ],
		quizWords: [ '人造' ]
	},
	{
		target: "最精致品质，优异的手工。",
		alt: "Zuì　jīngzhì　pǐnzhí、　yōuyì　de　shǒugōng。",
		native: "The most exquisite quality, excellent workmanship.",
		words: [ '最', '精致', '品质', '优异', '的', '手工' ],
		quizWords: [ '品质', '优异', '手工', '精致' ]
	},
	{
		target: "这里有制造者的号码。",
		alt: "Zhè　li　yǒu　zhìzào　zhě　de　hàomǎ。",
		native: "Here is the manufacturer\'s number.",
		words: [ '这', '里', '有', '制造', '者', '的', '号码' ],
		quizWords: [ '制造', '号码' ]
	},
	{
		target: "很有意思。",
		alt: "Hěn　yǒuyìsi。",
		native: "Interesting.",
		words: [ '很', '有意思' ],
		quizWords: [ '有意思' ]
	},
	{
		target: "不是鱼，是蛇鳞。",
		alt: "Bùshì　yú、　shì　shé　lín。",
		native: "It’s not a fish, it’s a snake scale.",
		words: [ '不是', '鱼', '是', '蛇', '鳞' ],
		quizWords: [ '蛇', '鳞' ]
	},
	{
		target: "蛇?",
		alt: "Shé？",
		native: "snake?",
		words: [ '蛇' ],
		quizSentence: true
	},
	{
		target: "找阿布杜尔 本 哈桑。",
		alt: "Zhǎo　ā　bù　dù　ěr　běn　hā　sāng。",
		native: "Find Abdul bin Hassan.",
		words: [ '找', '阿', '布', '杜', '尔', '本', '哈', '桑' ],
		quizWords: [ '哈', '尔', '布', '杜', '阿', '桑' ]
	},
	{
		target: "是他制造的这条蛇。",
		alt: "Shì　tā　zhìzào　de　zhè　tiáo　shé。",
		native: "He made the snake.",
		words: [ '是', '他', '制造', '的', '这', '条', '蛇' ],
		quizWords: [ '条' ]
	},
	{
		target: "阿布杜尔 哈桑，我是警察 我要问你几个问题。",
		alt: "A　bù　dù　ěr　hā　sāng、　wǒ　shì　jǐngchá　wǒ　yào　wèn　nǐ　jǐ　gè　wèntí。",
		native: "Abdul Hassan, I am a police officer and I want to ask you a few questions.",
		words: [ '阿', '布', '杜', '尔', '哈', '桑', '我', '是', '警察', '我', '要', '问', '你', '几', '个', '问题' ],
		quizWords: [ '问' ]
	},
	{
		target: "人造蛇执照编号XB71，是你的吗?",
		alt: "Rénzào　shé　zhízhào　biānhào　XB７１、　shì　nǐ　de　ma？",
		native: "Artificial snake license number XB71, is it yours?",
		words: [ '人造', '蛇', '执照', '编号', 'X', 'B', '是', '你', '的' ],
		quizWords: [ '执照', 'B', '编号', '的' ]
	},
	{
		target: "这是你做的，你卖给谁了? --我的产品?",
		alt: "Zhè　shì　nǐ　zuò　de、　nǐ　mài　gěi　shéi　le？　――Wǒ　de　chǎnpǐn？",
		native: "This is what you made, who did you sell it to? --My product?",
		words: [ '这', '是', '你', '做', '的', '你', '卖', '给', '谁', '了', '我', '的', '产品' ],
		quizWords: [ '卖', '产品' ]
	},
	{
		target: "很少有产品能达到这个质量 --有多少个?",
		alt: "Hěn　shǎo　yǒu　chǎnpǐn　néng　dádào　zhège　zhìliàng　――yǒu　duōshǎo　gè？",
		native: "Very few products can reach this quality -- how many are there?",
		words: [ '很', '少', '有', '产品', '能', '达到', '这个', '质量', '有', '多少', '个' ],
		quizWords: [ '达到', '多少', '质量', '少' ]
	},
	{
		target: "很少 --有多少?",
		alt: "Hěn　shǎo　――yǒu　duōshǎo？",
		native: "Very few --How many?",
		words: [ '很', '少', '有', '多少' ],
		quizSentence: true
	},
	{
		target: "告诉我！朋友。",
		alt: "Gàosù　wǒ！　Péngyǒu。",
		native: "tell me! friend.",
		words: [ '告诉', '我', '朋友' ],
		quizSentence: true
	},
	{
		target: "戴菲路易斯，第四区，唐人街。",
		alt: "Dài　fēilùyìsī、　dì　sì　qū、　tángrénjiē。",
		native: "Daphi Lewis, 4th Ward, Chinatown.",
		words: [ '戴', '菲路易斯', '第', '四', '区', '唐人街' ],
		quizWords: [ '戴', '唐人街' ]
	},
	{
		target: "请问哪位是戴菲路易斯?",
		alt: "Qǐngwèn　nǎ　wèi　shì　dài　fēilùyìsī？",
		native: "Excuse me, who is Davey Lewis?",
		words: [ '请问', '哪', '位', '是', '戴', '菲路易斯' ],
		quizWords: [ '位', '请问' ]
	}
];