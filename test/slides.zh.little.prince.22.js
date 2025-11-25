const gLang = 'zh';
const gBook = 'little.prince';
const gChap = '22';
const gMode = 'zh';
const gSpeed = '175';

const slideData =
[
	{
		target: "你好，小王子说道。",
		alt: "nǐ hǎo xiǎo wángzǐ shuōdao.",
		native: "Hello, said the little prince.",
		words: [ '你', '好', '小', '王子', '说道' ]
	},
	{
		target: "你好，扳道工说道。你在这里做什么？小王子问。",
		alt: "nǐ hǎo bāndào gōng shuōdao nǐ zài zhèlǐ zuò shénme xiǎo wángzǐ wèn.",
		native: "Hello, said the switchman. What are you doing here? asked the little prince.",
		words: [ '你', '好', '扳道', '工', '说道', '你', '在', '这里', '做', '什么', '小', '王子', '问' ]
	},
	{
		target: "我一包包地分选旅客，按每千人一包，扳道工说。",
		alt: "wǒ yī bāo bāo dì fēn xuǎn lǚkè àn měi qiān rén yī bāo bāndào gōng shuō.",
		native: "I sort the passengers in bundles, one bundle for every thousand people. said the switchman.",
		words: [ '我', '一', '包', '包', '地', '分', '选', '旅客', '按', '每', '千', '人', '一', '包', '扳道', '工', '说' ],
		quizSentence: true
	},
	{
		target: "我打发这些运载旅客的列车，一会儿发往右方，一会儿发往左方。",
		alt: "wǒ dǎfā zhèxiē yùnzài lǚkè dì lièchē yīhuǐ\'er fā wǎng yòu fāng yīhuǐ\'er fā wǎng zuǒ fāng.",
		native: "I send these trains carrying passengers now to the right, now to the left.",
		words: [ '我', '打发', '这些', '运载', '旅客', '的', '列车', '一会', '儿', '发', '往', '右', '方', '一会', '儿', '发', '往', '左', '方' ],
		quizSentence: true
	},
	{
		target: "这时，一列灯火明亮的快车，雷鸣般地响着，把扳道房震得颤颤悠悠。",
		alt: "zhè shí yīliè dēnghuǒ míngliàng de kuàichē léimíng bān dì xiǎngzhe bǎ bāndào fáng zhèn dé chàn chàn you yōu.",
		native: "Then, a brightly lit express train roared like thunder, making the switch room shake with a prolonged trembling.",
		words: [ '这', '时', '一', '列', '灯火', '明亮', '的', '快车', '雷鸣', '般', '地', '响', '着', '把', '扳道', '房', '震', '得', '颤', '颤', '悠', '悠' ],
		quizSentence: true
	},
	{
		target: "他们真匆忙呀，小王子说，他们要寻找什么？",
		alt: "tāmen zhēn cōngmáng ya xiǎo wángzǐ shuō tāmen yào xúnzhǎo shénme?",
		native: "They are in such a hurry, the little prince said. What are they looking for?",
		words: [ '他们', '真', '匆忙', '呀', '小', '王子', '说', '他们', '要', '寻找', '什么' ]
	},
	{
		target: "开机车的人自己也不知道，扳道工说道。",
		alt: "kāijī chē de rén zìjǐ yě bùzhīdào bāndào gōng shuōdao.",
		native: "The locomotive operator himself doesn\'t know, the switchman said.",
		words: [ '开机', '车', '的', '人', '自己', '也', '不', '知道', '扳道', '工', '说道' ]
	},
	{
		target: "于是第二列灯火通明的快车，",
		alt: "yúshì dì èr liè dēnghuǒ tōngmíng de kuàichē,",
		native: "Then the second express train, all brightly lit,",
		words: [ '于是', '第', '二', '列', '灯火', '通明', '的', '快车' ]
	},
	{
		target: "又朝着相反的方向轰隆轰隆地开过去。",
		alt: "yòu cháozhe xiāngfǎn de fāngxiàng hōnglóng hōnglóng dì kāi guòqù.",
		native: "and rumbled and roared past in the opposite direction.",
		words: [ '又', '朝着', '相反', '的', '方向', '轰隆', '轰隆', '地', '开', '过去' ],
		quizSentence: true
	},
	{
		target: "他们怎么又回来了呢，小王子问道。",
		alt: "tāmen zěnme yòu huíláile ne xiǎo wángzǐ wèn dào.",
		native: "How did they come back? the little prince asked.",
		words: [ '他们', '怎么', '又', '回', '来了', '呢', '小', '王子', '问', '道' ]
	},
	{
		target: "他们不是原来那些人了，扳道工说，这是一次对开列车。",
		alt: "tāmen bùshì yuánlái nàxiē rénle bāndào gōng shuō zhè shì yīcì duì kāi lièchē.",
		native: "They are not the same people, the switchman said. This is a train running in opposite directions (this is a return? train).",
		words: [ '他们', '不是', '原来', '那些', '人', '了', '扳道', '工', '说', '这', '是', '一次', '对', '开', '列车' ],
		quizSentence: true
	},
	{
		target: "他们不满意他们原来所住的地方吗？",
		alt: "tāmen bù mǎnyì tāmen yuánlái suǒ zhù dì dìfāng ma?",
		native: "Are they not satisfied with the place they originally lived?",
		words: [ '他们', '不', '满意', '他们', '原来', '所', '住', '的', '地方', '吗' ],
		quizSentence: true
	},
	{
		target: "人们是从来也不会满意自己所在的地方的，扳道工说。",
		alt: "rénmen shì cónglái yě bù huì mǎnyì zìjǐ suǒzài dì dìfāng de bāndào gōng shuō.",
		native: "People are never satisfied with where they are, the switchman said.",
		words: [ '人们', '是', '从来', '也', '不', '会', '满意', '自己', '所在', '的', '地方', '的', '扳道', '工', '说' ]
	},
	{
		target: "此时，第三趟灯火明亮的快车又隆隆而过。",
		alt: "cǐ shí dì sān tàng dēnghuǒ míngliàng de kuàichē yòu lónglóng érguò.",
		native: "At this moment, the third express train, all brightly lit, rumbled and passed.",
		words: [ '此', '时', '第', '三', '趟', '灯火', '明亮', '的', '快车', '又', '隆隆', '而', '过' ],
		quizSentence: true
	},
	{
		target: "他们是在追随第一批旅客吗，小王子问道。",
		alt: "tāmen shì zài zhuīsuí dì yī pī lǚkè ma xiǎo wángzǐ wèn dào.",
		native: "Are they following the first group of passengers? the little prince asked.",
		words: [ '他们', '是', '在', '追随', '第', '一', '批', '旅客', '吗', '小', '王子', '问', '道' ],
		quizSentence: true
	},
	{
		target: "他们什么也不追随，扳道工说，他们在里面睡觉，",
		alt: "tāmen shénme yě bù zhuīsuí bāndào gōng shuō tāmen zài lǐmiàn shuìjiào,",
		native: "They are following nothing, the switchman said. They are sleeping inside,",
		words: [ '他们', '什么', '也', '不', '追随', '扳道', '工', '说', '他们', '在', '里面', '睡觉' ]
	},
	{
		target: "或是在打哈欠。只有孩子们把鼻子贴在玻璃窗上往外看。",
		alt: "huò shì zài dǎ hāqian zhǐyǒu háizǐmen bǎ bízǐ tiē zài bōlí chuāng shàng wǎngwài kàn.",
		native: "or yawning. Only the children press their noses to the window panes and look out.",
		words: [ '或', '是', '在', '打', '哈欠', '只有', '孩子们', '把', '鼻子', '贴', '在', '玻璃', '窗', '上', '往外', '看' ]
	},
	{
		target: "只有孩子知道他们自己在寻找什么，小王子说。",
		alt: "zhǐyǒu háizǐ zhīdào tāmen zìjǐ zài xúnzhǎo shénme xiǎo wángzǐ shuō.",
		native: "Only the children know what they are looking for, the little prince said.",
		words: [ '只有', '孩子', '知道', '他们', '自己', '在', '寻找', '什么', '小', '王子', '说' ],
		quizSentence: true
	},
	{
		target: "他们为一个布娃娃花费不少时间，",
		alt: "tāmen wéi yīgè bù wáwá huāfèi bù shǎo shíjiān,",
		native: "They spend (waste?) not a little time on a rag doll,",
		words: [ '他们', '为', '一个', '布', '娃娃', '花费', '不', '少', '时间' ]
	},
	{
		target: "这个布娃娃就成了很重要的东西,",
		alt: "zhège bù wáwá jiù chéngle hěn zhòngyào de dōngxī.",
		native: "this doll became a very important thing,",
		words: [ '这个', '布', '娃娃', '就', '成了', '很', '重要', '的', '东西' ],
		quizWords: [ '成了' ]
	},
	{
		target: "如果有人夺走的他们的布娃娃，他们就哭泣。",
		alt: "rúguǒ yǒurén duó zǒu de tāmen de bù wáwá tāmen jiù kūqì.",
		native: "if someone took their doll away, they would cry. [extraneous \"de\" after \"took\")",
		words: [ '如果', '有人', '夺', '走', '的', '他们', '的', '布', '娃娃', '他们', '就', '哭泣' ],
		quizSentence: true
	},
	{
		target: "他们真幸运，扳道工说。",
		alt: "tāmen zhēn xìngyùn bāndào gōng shuō.",
		native: "They are so lucky, the switchman said.",
		words: [ '他们', '真', '幸运', '扳道', '工', '说' ]
	}
];
