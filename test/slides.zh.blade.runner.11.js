const gLang = 'zh';
const gBook = 'blade.runner';
const gChap = '11';
const gMode = 'zh';
const gSpeed = '120';

const slideData =
[
	{
		target: "放大224到176。",
		alt: "Fàngdà　２２４　dào　１７６。",
		native: "Zoom in from 224 to 176.",
		words: [ '放大', '到', '', '' ],
		quizWords: [ '放大' ]
	},
	{
		target: "放大 停止。",
		alt: "Fàngdà　tíngzhǐ。",
		native: "Zoom Stop.",
		words: [ '放大', '停止' ],
		quizWords: [ '停止' ]
	},
	{
		target: "放大。",
		alt: "Fàngdà。",
		native: "Enlarge.",
		words: [ '放大' ],
		quizSentence: true
	},
	{
		target: "停止！",
		alt: "Tíngzhǐ！",
		native: "stop!",
		words: [ '停止' ],
		quizSentence: true
	},
	{
		target: "缩小，向右移，停！",
		alt: "Suōxiǎo、　xiàng　yòu　yí、　tíng！",
		native: "Zoom out, move right, stop!",
		words: [ '缩小', '向', '右', '移', '停' ],
		quizWords: [ '移', '右', '缩小', '停' ]
	},
	{
		target: "回到中心。",
		alt: "Huí　dào　zhōngxīn。",
		native: "Back to center.",
		words: [ '回', '到', '中心' ],
		quizWords: [ '中心' ]
	},
	{
		target: "停！",
		alt: "Tíng！",
		native: "stop!",
		words: [ '停' ],
		quizSentence: true
	},
	{
		target: "往右45。",
		alt: "Wǎng　yòu　４５。",
		native: "45 to the right.",
		words: [ '往', '右', '' ],
		quizSentence: true
	},
	{
		target: "停！",
		alt: "Tíng！",
		native: "stop!",
		words: [ '停' ],
		quizSentence: true
	},
	{
		target: "回到中心，停！",
		alt: "Huí　dào　zhōngxīn、　tíng！",
		native: "Back to center, stop!",
		words: [ '回', '到', '中心', '停' ],
		quizSentence: true
	},
	{
		target: "放大34到36。",
		alt: "Fàngdà　３４　dào　３６。",
		native: "Zoom in from 34 to 36.",
		words: [ '放大', '到', '', '' ],
		quizSentence: true
	},
	{
		target: "转右 缩小。",
		alt: "Zhuǎn　yòu　suōxiǎo。",
		native: "Turn right to zoom out.",
		words: [ '转', '右', '缩小' ],
		quizWords: [ '转' ]
	},
	{
		target: "停！",
		alt: "Tíng！",
		native: "stop!",
		words: [ '停' ],
		quizSentence: true
	},
	{
		target: "放大34和46。",
		alt: "Fàngdà　３４　hé　４６。",
		native: "Zoom 34 and 46.",
		words: [ '放大', '和', '', '' ],
		quizSentence: true
	},
	{
		target: "缩小。",
		alt: "Suōxiǎo。",
		native: "zoom out.",
		words: [ '缩小' ],
		quizSentence: true
	},
	{
		target: "等等！往右。",
		alt: "Děng　děng！　Wǎng　yòu。",
		native: "etc! Go right.",
		words: [ '等', '等', '往', '右' ],
		quizWords: [ '等' ]
	},
	{
		target: "停！",
		alt: "Tíng！",
		native: "stop!",
		words: [ '停' ],
		quizSentence: true
	},
	{
		target: "放大57到19。",
		alt: "Fàngdà　５７　dào　１９。",
		native: "Zoom 57 to 19.",
		words: [ '放大', '到', '', '' ],
		quizSentence: true
	},
	{
		target: "往左45。",
		alt: "Wǎng　zuǒ　４５。",
		native: "45 to the left.",
		words: [ '往', '左', '' ],
		quizWords: [ '左' ]
	},
	{
		target: "停！",
		alt: "Tíng！",
		native: "stop!",
		words: [ '停' ],
		quizSentence: true
	},
	{
		target: "放大15到23。",
		alt: "Fàngdà　１５　dào　２３。",
		native: "Zoom 15 to 23.",
		words: [ '放大', '到', '', '' ],
		quizSentence: true
	},
	{
		target: "给我一张这里的拷贝。",
		alt: "Gěi　wǒ　yī　zhāng　zhèlǐ　de　kǎobèi。",
		native: "Give me a copy of this.",
		words: [ '给', '我', '一', '张', '这里', '的', '拷贝' ],
		quizWords: [ '张', '拷贝' ]
	}
];