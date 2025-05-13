const gLang = 'zh';
const gBook = 'blade.runner';
const gChap = '10';
const gMode = 'zh';
const gSpeed = '120';

const slideData =
[
	{
		target: "你忘了你的手提袋。",
		alt: "Nǐ　wàng　le　nǐ　de　shǒutí　dài。",
		native: "You forgot your handbag.",
		words: [ '你', '忘', '了', '你', '的', '手提', '袋' ],
		quizWords: [ '手提', '袋', '忘' ]
	},
	{
		target: "我迷路了。",
		alt: "Wǒ　mílù　le。",
		native: "I\'m lost.",
		words: [ '我', '迷路', '了' ],
		quizWords: [ '迷路' ]
	},
	{
		target: "不用怕，我不会伤害你的。",
		alt: "Bùyòng　pà、　wǒ　bù　huì　shānghài　nǐ　de。",
		native: "Don\'t be afraid, I won\'t hurt you.",
		words: [ '不用', '怕', '我', '不', '会', '伤害', '你', '的' ],
		quizWords: [ '不用', '怕', '伤害' ]
	},
	{
		target: "你叫什么名字?",
		alt: "Nǐ　jiào　shénme　míngzì？",
		native: "May I have your name?",
		words: [ '你', '叫', '什么', '名字' ],
		quizWords: [ '叫', '名字' ]
	},
	{
		target: "佩莉丝。",
		alt: "pèilìsī。",
		native: "Peris.",
		words: [ '佩莉丝' ],
		quizSentence: true
	},
	{
		target: "我叫J.F.赛巴斯迪安。",
		alt: "Wǒ　jiào　J。F。　Sài　bā　sī　dí　ān。",
		native: "My name is J.F. Sebastian.",
		words: [ '我', '叫', '', 'J', 'F', '赛', '巴', '斯' ],
		quizWords: [ '斯', '巴', '赛' ]
	},
	{
		target: "嗨！",
		alt: "Hāi！",
		native: "Hi!",
		words: [ '嗨' ],
		quizSentence: true
	},
	{
		target: "你要去那里?",
		alt: "Nǐ　yào　qù　nàlǐ？",
		native: "where are you going?",
		words: [ '你', '要', '去', '那里' ],
		quizSentence: true
	},
	{
		target: "家吗?",
		alt: "Jiā　ma？",
		native: "Home?",
		words: [ '家', '吗' ],
		quizSentence: true
	},
	{
		target: "我没有家。",
		alt: "Wǒ　méiyǒu　jiā。",
		native: "I don’t have a home.",
		words: [ '我', '没有', '家' ],
		quizSentence: true
	},
	{
		target: "我们彼此都吓的够戗，对吗? 是呀。",
		alt: "Wǒmen　bǐcǐ　dōu　xià　de　gòuqiàng、　duì　ma？　Shì　ya。",
		native: "We\'re all pretty scared of each other, right? Yeah.",
		words: [ '我们', '彼此', '都', '吓', '的', '够戗', '对', '吗', '是', '呀' ],
		quizWords: [ '够戗', '彼此', '吓' ]
	},
	{
		target: "我很饿，J.F.。",
		alt: "Wǒ　hěn　è、J。F。。",
		native: "I\'m hungry, J.F..",
		words: [ '我', '很', '饿' ],
		quizWords: [ '饿' ]
	},
	{
		target: "我家里有吃的。",
		alt: "Wǒ　jiā　li　yǒu　chī　de。",
		native: "I have food at home.",
		words: [ '我', '家', '里', '有', '吃', '的' ],
		quizSentence: true
	},
	{
		target: "你要进来吗?",
		alt: "Nǐ　yào　jìnlái　ma？",
		native: "Do you want to come in?",
		words: [ '你', '要', '进来', '吗' ],
		quizWords: [ '进来' ]
	},
	{
		target: "就期望你那么说。",
		alt: "Jiù　qīwàng　nǐ　nàme　shuō。",
		native: "Just expect you to say that.",
		words: [ '就', '期望', '你', '那么', '说' ],
		quizWords: [ '期望' ]
	},
	{
		target: "你一个人住这么大栋楼?",
		alt: "Nǐ　yīgèrén　zhù　zhème　dà　dòng　lóu？",
		native: "Do you live in such a big building alone?",
		words: [ '你', '一个人', '住', '这么', '大', '栋', '楼' ],
		quizWords: [ '一个人', '大', '栋', '楼' ]
	},
	{
		target: "是的 我一个人。",
		alt: "Shì　de　wǒ　yīgèrén。",
		native: "Yes I am alone.",
		words: [ '是', '的', '我', '一个人' ],
		quizSentence: true
	},
	{
		target: "这里倒是不缺房子。",
		alt: "Zhèlǐ　dǎoshì　bù　quē　fángzi。",
		native: "There is no shortage of houses here.",
		words: [ '这里', '倒是', '不', '缺', '房子' ],
		quizWords: [ '倒是', '房子', '缺' ]
	},
	{
		target: "每个人都有房间。",
		alt: "Měi　gè　rén　dōu　yǒu　fángjiān。",
		native: "There is room for everyone.",
		words: [ '每', '个', '人', '都', '有', '房间' ],
		quizWords: [ '房间' ]
	},
	{
		target: "当心地板上的水。",
		alt: "Dāngxīn　dìbǎn　shàng　de　shuǐ。",
		native: "Watch out for water on the floor.",
		words: [ '当心', '地板', '上', '的', '水' ],
		quizWords: [ '当心', '水', '地板' ]
	},
	{
		target: "你一定很寂寞，J.F.。",
		alt: "Nǐ　yīdìng　hěn　jìmò、J。F。。",
		native: "You must be lonely, J.F..",
		words: [ '你', '一定', '很', '寂寞' ],
		quizWords: [ '寂寞' ]
	},
	{
		target: "不太会，我制造朋友。",
		alt: "Bù　tài　huì、　wǒ　zhìzào　péngyǒu。",
		native: "Not really, I make friends.",
		words: [ '不', '太', '会', '我', '制造', '朋友' ],
		quizWords: [ '制造' ]
	},
	{
		target: "他们是玩具，我的朋友 是玩具，我制造的。",
		alt: "Tāmen　shì　wánjù、　wǒ　de　péngyǒu　shì　wánjù、　wǒ　zhìzào　de。",
		native: "They are toys, my friends They are toys, I made them.",
		words: [ '他们', '是', '玩具', '我', '的', '朋友', '是', '玩具', '我', '制造', '的' ],
		quizWords: [ '玩具' ]
	},
	{
		target: "这是我的爱好 我是基因设计师。",
		alt: "Zhè　shì　wǒ　de　àihào　wǒ　shì　jīyīn　shèjì　shī。",
		native: "This is my hobby. I am a genetic designer.",
		words: [ '这', '是', '我', '的', '爱好', '我', '是', '基因', '设计', '师' ],
		quizWords: [ '师', '爱好', '基因' ]
	},
	{
		target: "你知道那是什么吗?",
		alt: "Nǐ　zhīdào　nà　shì　shénme　ma？",
		native: "Do you know what that is?",
		words: [ '你', '知道', '那', '是', '什么', '吗' ],
		quizSentence: true
	},
	{
		target: "不知道。",
		alt: "Bù　zhīdào。",
		native: "have no idea.",
		words: [ '不', '知道' ],
		quizSentence: true
	},
	{
		target: "到了。",
		alt: "Dào　le。",
		native: "arrive.",
		words: [ '到', '了' ],
		quizSentence: true
	},
	{
		target: "又回家了。",
		alt: "Yòu　huí　jiā　le。",
		native: "is home again.",
		words: [ '又', '回', '家', '了' ],
		quizSentence: true
	},
	{
		target: "又回家了！又回家了！ 放轻松！J.F.。",
		alt: "Yòu　huí　jiā　le！　Yòu　huí　jiā　le！　Fàng　qīngsōng！J。F。。",
		native: "Home again! Home again! Take it easy! J.F.",
		words: [ '又', '回', '家', '了', '又', '回', '家', '了', '放', '轻松' ],
		quizWords: [ '放', '轻松' ]
	},
	{
		target: "晚安！老大 晚安！两位。",
		alt: "Wǎn\'ān！　Lǎodà　wǎn\'ān！　Liǎng　wèi。",
		native: "Good night! Good night, boss! Two people.",
		words: [ '晚安', '老大', '晚安', '两', '位' ],
		quizWords: [ '晚安', '位', '老大' ]
	},
	{
		target: "他们是我的朋友。",
		alt: "Tāmen　shì　wǒ　de　péngyǒu。",
		native: "they are my friends.",
		words: [ '他们', '是', '我', '的', '朋友' ],
		quizSentence: true
	},
	{
		target: "我制造他们，你的父母呢?",
		alt: "Wǒ　zhìzào　tāmen、　nǐ　de　fùmǔ　ne？",
		native: "I made them, where are your parents?",
		words: [ '我', '制造', '他们', '你', '的', '父母', '呢' ],
		quizWords: [ '父母' ]
	},
	{
		target: "我是个孤儿。",
		alt: "Wǒ　shìgè　gū\'ér。",
		native: "I am an orphan.",
		words: [ '我', '是个', '孤儿' ],
		quizWords: [ '孤儿', '是个' ]
	},
	{
		target: "你的朋友们呢?",
		alt: "Nǐ　de　péngyǒumen　ne？",
		native: "Where are your friends?",
		words: [ '你', '的', '朋友们', '呢' ],
		quizWords: [ '朋友们' ]
	},
	{
		target: "我有些朋友，但是我得去找他们。",
		alt: "Wǒ　yǒuxiē　péngyǒu、　dànshì　wǒ　dé　qù　zhǎo　tāmen。",
		native: "I have some friends, but I have to find them.",
		words: [ '我', '有些', '朋友', '但是', '我', '得', '去', '找', '他们' ],
		quizWords: [ '有些' ]
	},
	{
		target: "明天我会让他们知道我在哪里。",
		alt: "Míngtiān　wǒ　huì　ràng　tāmen　zhīdào　wǒ　zài　nǎlǐ。",
		native: "I\'ll let them know where I am tomorrow.",
		words: [ '明天', '我', '会', '让', '他们', '知道', '我', '在', '哪里' ],
		quizWords: [ '哪里', '让' ]
	},
	{
		target: "把你的包给我吧。",
		alt: "Bǎ　nǐ　de　bāo　gěi　wǒ　ba。",
		native: "Give me your bag.",
		words: [ '把', '你', '的', '包', '给', '我', '吧' ],
		quizWords: [ '把' ]
	},
	{
		target: "这里好暗！",
		alt: "Zhèlǐ　hǎo　àn！",
		native: "It’s so dark in here!",
		words: [ '这里', '好', '暗' ],
		quizWords: [ '暗' ]
	}
];