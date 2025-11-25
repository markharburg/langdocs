const gLang = 'zh';
const gBook = 'little.prince';
const gChap = '23';
const gMode = 'zh';
const gSpeed = '175';

const slideData =
[
	{
		target: "你好，小王子说。",
		alt: "nǐ hǎo xiǎo wángzǐ shuō.",
		native: "Hello, the little prince said.",
		words: [ '你', '好', '小', '王子', '说' ]
	},
	{
		target: "你好，商人说道，这是一位贩卖能够止渴的精制药丸的商人。",
		alt: "nǐ hǎo shāngrén shuōdao zhè shì yī wèi fànmài nénggòu zhǐ kě de jīngzhì yàowán de shāngrén.",
		native: "Hello, the merchant said. This is a merchant who sells a refined pill that can quench thirst.",
		words: [ '你', '好', '商人', '说道', '这', '是', '一', '位', '贩卖', '能够', '止', '渴', '的', '精制', '药丸', '的', '商人' ],
		quizSentence: true
	},
	{
		target: "每周吞服一丸就不会感觉口渴，你为什么卖这玩艺儿，小王子说。",
		alt: "měi zhōu tūn fú yīwán jiù bù huì gǎnjué kǒu kě nǐ wèishéme mài zhè wán yì er xiǎo wángzǐ shuō.",
		native: "Take one pill a week and [you] won\'t feel thirsty. Why do you sell this thing? The little prince said.",
		words: [ '每', '周', '吞', '服', '一', '丸', '就', '不', '会', '感觉', '口', '渴', '你', '为什么', '卖', '这', '玩', '艺', '儿', '小', '王子', '说' ],
		quizSentence: true
	},
	{
		target: "这就大大地节约了时间，商人说，专家们计算过，这样。",
		alt: "zhè jiù dàdà dì jiéyuēle shíjiān shāngrén shuō zhuānjiāmen jìsuànguò zhèyàng.",
		native: "This will save a lot of time. The merchant said, \"Experts have calculated it like this.\"",
		words: [ '这', '就', '大大', '地', '节约', '了', '时间', '商人', '说', '专', '家', '们', '计', '算', '过', '这样' ],
		quizSentence: true
	},
	{
		target: "每周可以节约五十三分钟。那么，用这五十三分钟做什么用？",
		alt: "měi zhōu kěyǐ jiéyuē wǔshísān fēnzhōng nàme yòng zhè wǔshísān fēnzhōng zuò shénme yòng?",
		native: "You can save fifty-three minutes a week. So what do you do with these fifty-three minutes?",
		words: [ '每', '周', '可以', '节约', '五', '十三', '分钟', '那么', '用', '这', '五', '十三', '分钟', '做', '什么', '用' ],
		quizSentence: true
	},
	{
		target: "随便怎么用都行，小王子自言自语地说。",
		alt: "suíbiàn zěnme yòng dōu xíng xiǎo wángzǐ zì yán zì yǔ de shuō.",
		native: "However you like to use [it]. The little prince said to himself.",
		words: [ '随便', '怎么', '用', '都', '行', '小', '王子', '自', '言', '自', '语', '地', '说' ],
		quizSentence: true
	},
	{
		target: "我如果有五十三分钟可支配，我就悠哉游哉地向水泉走去。",
		alt: "wǒ rúguǒ yǒu wǔshísān fēnzhōng kě zhīpèi wǒ jiù yōuzāi yóu zāi dì xiàng shuǐquán zǒu qù.",
		native: "If I had fifty-three minutes to spare, I would walk leisurely to the spring...",
		words: [ '我', '如果', '有', '五', '十三', '分钟', '可', '支配', '我', '就', '悠哉游哉', '地', '向', '水', '泉', '走', '去' ],
		quizSentence: true
	}
];
