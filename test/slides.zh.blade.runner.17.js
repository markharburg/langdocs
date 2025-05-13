const gLang = 'zh';
const gBook = 'blade.runner';
const gChap = '17';
const gMode = 'zh';
const gSpeed = '120';

const slideData =
[
	{
		target: "发抖?",
		alt: "Fādǒu？",
		native: "Trembling?",
		words: [ '发抖' ],
		quizWords: [ '发抖' ]
	},
	{
		target: "我也一样。",
		alt: "Wǒ　yě　yīyàng。",
		native: "me too.",
		words: [ '我', '也', '一样' ],
		quizSentence: true
	},
	{
		target: "我没搞好。",
		alt: "Wǒ　méi　gǎo　hǎo。",
		native: "I didn’t do it well.",
		words: [ '我', '没', '搞', '好' ],
		quizSentence: true
	},
	{
		target: "这是这生意的一部分。",
		alt: "Zhè　shì　zhè　shēngyì　de　yībùfèn。",
		native: "This is part of the business.",
		words: [ '这', '是', '这', '生意', '的', '一部分' ],
		quizWords: [ '一部分', '生意' ]
	},
	{
		target: "我不想加入到这生意中来。",
		alt: "Wǒ　bùxiǎng　jiārù　dào　zhè　shēngyì　zhōng　lái。",
		native: "I don’t want to be a part of this business.",
		words: [ '我', '不想', '加入', '到', '这', '生意', '中', '来' ],
		quizWords: [ '加入' ]
	},
	{
		target: "但是我就是这个生意。",
		alt: "Dànshì　wǒ　jiùshì　zhège　shēngyì。",
		native: "But this is my business.",
		words: [ '但是', '我', '就是', '这个', '生意' ],
		quizSentence: true
	},
	{
		target: "假如我到北方呢?",
		alt: "Jiǎrú　wǒ　dào　běifāng　ne？",
		native: "What if I go to the north?",
		words: [ '假如', '我', '到', '北方', '呢' ],
		quizWords: [ '假如', '北方' ]
	},
	{
		target: "隐藏起来。",
		alt: "Yǐncáng　qǐlái。",
		native: "Hide.",
		words: [ '隐藏', '起来' ],
		quizWords: [ '起来', '隐藏' ]
	},
	{
		target: "你会来追踪我吗?",
		alt: "Nǐ　huì　lái　zhuīzōng　wǒ　ma？",
		native: "Will you follow me?",
		words: [ '你', '会', '来', '追踪', '我', '吗' ],
		quizWords: [ '追踪' ]
	},
	{
		target: "伤害我?",
		alt: "Shānghài　wǒ？",
		native: "hurt me?",
		words: [ '伤害', '我' ],
		quizWords: [ '伤害' ]
	},
	{
		target: "不会。",
		alt: "Bù　huì。",
		native: "Won\'t.",
		words: [ '不', '会' ],
		quizSentence: true
	},
	{
		target: "我不会。",
		alt: "Wǒ　bù　huì。",
		native: "I won\'t.",
		words: [ '我', '不', '会' ],
		quizSentence: true
	},
	{
		target: "我欠你的。",
		alt: "Wǒ　qiàn　nǐ　de。",
		native: "I owe you.",
		words: [ '我', '欠', '你', '的' ],
		quizWords: [ '欠' ]
	},
	{
		target: "不过会有人追杀你。",
		alt: "Bùguò　huì　yǒurén　zhuī　shā　nǐ。",
		native: "But there will be people chasing you.",
		words: [ '不过', '会', '有人', '追', '杀', '你' ],
		quizWords: [ '有人', '追' ]
	},
	{
		target: "戴克。",
		alt: "dàikè。",
		native: "Dike.",
		words: [ '戴克' ],
		quizSentence: true
	},
	{
		target: "你知道我的档案吗?",
		alt: "Nǐ　zhīdào　wǒ　de　dǎng\'àn　ma？",
		native: "Do you know my profile?",
		words: [ '你', '知道', '我', '的', '档案', '吗' ],
		quizWords: [ '档案', '吗' ]
	},
	{
		target: "启用日期。",
		alt: "Qǐyòng　rìqí。",
		native: "Activation date.",
		words: [ '启用', '日期' ],
		quizSentence: true
	},
	{
		target: "寿命。",
		alt: "Shòumìng。",
		native: "life.",
		words: [ '寿命' ],
		quizSentence: true
	},
	{
		target: "那些资料。",
		alt: "Nàxiē　zīliào。",
		native: "those information.",
		words: [ '那些', '资料' ],
		quizWords: [ '那些', '资料' ]
	},
	{
		target: "你看过没?",
		alt: "Nǐ　kànguò　méi？",
		native: "Have you seen it?",
		words: [ '你', '看过', '没' ],
		quizWords: [ '看过' ]
	},
	{
		target: "那些是机密文件。",
		alt: "Nàxiē　shì　jīmì　wénjiàn。",
		native: "Those are confidential documents.",
		words: [ '那些', '是', '机密', '文件' ],
		quizWords: [ '机密', '文件' ]
	},
	{
		target: "你是警察。",
		alt: "Nǐ　shì　jǐngchá。",
		native: "You are the police.",
		words: [ '你', '是', '警察' ],
		quizSentence: true
	},
	{
		target: "我没有看。",
		alt: "Wǒ　méiyǒu　kàn。",
		native: "I didn’t read it.",
		words: [ '我', '没有', '看' ],
		quizSentence: true
	},
	{
		target: "你们那些测试。",
		alt: "Nǐmen　nàxiē　cèshì。",
		native: "those tests you guys.",
		words: [ '你们', '那些', '测试' ],
		quizSentence: true
	},
	{
		target: "你自己测试过吗?",
		alt: "Nǐ　zìjǐ　cèshìguò　ma？",
		native: "Have you tested it yourself?",
		words: [ '你', '自己', '测试过', '吗' ],
		quizWords: [ '测试过', '自己' ]
	},
	{
		target: "戴克。",
		alt: "dàikè。",
		native: "Dike.",
		words: [ '戴克' ],
		quizSentence: true
	}
];