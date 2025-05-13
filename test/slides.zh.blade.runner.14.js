const gLang = 'zh';
const gBook = 'blade.runner';
const gChap = '14';
const gMode = 'zh';
const gSpeed = '120';

const slideData =
[
	{
		target: "对不起，莎乐美小姐 可以和你谈谈吗?",
		alt: "Duìbùqǐ、　shā　lè　měi　xiǎojiě　kěyǐ　hé　nǐ　tán　tán　ma？",
		native: "Sorry, Miss Salome, can I talk to you?",
		words: [ '对不起', '莎', '乐', '美', '小姐', '可以', '和', '你', '谈', '谈', '吗' ],
		quizWords: [ '莎', '美', '小姐', '谈', '对不起', '乐' ]
	},
	{
		target: "我是美国联邦杂耍艺术家的会员。",
		alt: "Wǒ　shì　měiguó　liánbāng　záshuǎ　yìshùjiā　de　huìyuán。",
		native: "I am a member of the American Federation of Vaudeville Artists.",
		words: [ '我', '是', '美国', '联邦', '杂耍', '艺术家', '的', '会员' ],
		quizWords: [ '联邦', '会员', '杂耍', '艺术家', '美国' ]
	},
	{
		target: "是吗?",
		alt: "Shì　ma？",
		native: "Yeah?",
		words: [ '是', '吗' ],
		quizSentence: true
	},
	{
		target: "我不是来让您入会的 那不归我的部门管。",
		alt: "Wǒ　bùshì　lái　ràng　nín　rùhuì　dì　nà　bù　guī　wǒ　de　bùmén　guǎn。",
		native: "I\'m not here to make you a member. That\'s not under my department\'s control.",
		words: [ '我', '不是', '来', '让', '您', '入会', '的', '那', '不', '归', '我', '的', '部门', '管' ],
		quizWords: [ '入会', '部门', '让', '归', '管' ]
	},
	{
		target: "事实上，我来自道德冒犯秘密委员会。",
		alt: "Shìshí　shàng、　wǒ　láizì　dàodé　màofàn　mìmì　wěiyuánhuì。",
		native: "Actually, I\'m from the Secret Committee on Moral Offenses.",
		words: [ '事实', '上', '我', '来自', '道德', '冒犯', '秘密', '委员会' ],
		quizWords: [ '冒犯', '事实', '委员会', '秘密', '来自', '道德' ]
	},
	{
		target: "道德冒犯秘密委员会。",
		alt: "Dàodé　màofàn　mìmì　wěiyuánhuì。",
		native: "Secret Committee on Moral Offenses.",
		words: [ '道德', '冒犯', '秘密', '委员会' ],
		quizSentence: true
	},
	{
		target: "对！小姐！有报告称这里的管理人员...。",
		alt: "Duì！　Xiǎojiě！　Yǒu　bàogào　chēng　zhèlǐ　de　guǎnlǐ　rényuán。。。。",
		native: "right! Miss! There are reports that the management here….",
		words: [ '对', '小姐', '有', '报告', '称', '这里', '的', '管理', '人员' ],
		quizWords: [ '称', '报告', '管理', '人员' ]
	},
	{
		target: "剥夺了演员的人身自由。",
		alt: "Bōduó　le　yǎnyuán　de　rénshēn　zìyóu。",
		native: "Deprives the actor of his personal freedom.",
		words: [ '剥夺', '了', '演员', '的', '人身', '自由' ],
		quizWords: [ '剥夺', '演员', '自由', '人身' ]
	},
	{
		target: "这种事我完全不知道。",
		alt: "Zhè　zhǒng　shì　wǒ　wánquán　bù　zhīdào。",
		native: "I have absolutely no idea about this.",
		words: [ '这', '种', '事', '我', '完全', '不', '知道' ],
		quizWords: [ '完全' ]
	},
	{
		target: "你觉得自己被谁剥削了吗?",
		alt: "Nǐ　juédé　zìjǐ　bèi　shéi　bōxuè　le　ma？",
		native: "Do you feel you have been exploited by someone?",
		words: [ '你', '觉得', '自己', '被', '谁', '剥削', '了', '吗' ],
		quizWords: [ '自己', '剥削' ]
	},
	{
		target: "怎么说算是剥削?",
		alt: "Zěnme　shuō　suànshì　bōxuè？",
		native: "How do you call it exploitation?",
		words: [ '怎么', '说', '算是', '剥削' ],
		quizWords: [ '算是' ]
	},
	{
		target: "就像你做这个工作。",
		alt: "Jiù　xiàng　nǐ　zuò　zhège　gōngzuò。",
		native: "Just like you do this job.",
		words: [ '就', '像', '你', '做', '这个', '工作' ],
		quizWords: [ '像' ]
	},
	{
		target: "你做过或有人要求你做 一些你感到可耻的事情。",
		alt: "Nǐ　zuòguò　huò　yǒurén　yāoqiú　nǐ　zuò　yīxiē　nǐ　gǎndào　kěchǐ　de　shìqíng。",
		native: "You have done or been asked to do something that you feel shameful about.",
		words: [ '你', '做过', '或', '有人', '要求', '你', '做', '一些', '你', '感到', '可耻', '的', '事情' ],
		quizWords: [ '或', '有人', '一些', '事情', '要求', '可耻', '感到' ]
	},
	{
		target: "或是对你个人的压抑。",
		alt: "Huò　shì　duì　nǐ　gè　rén　de　yāyì。",
		native: "Or it’s your personal depression.",
		words: [ '或', '是', '对', '你', '个', '人', '的', '压抑' ],
		quizWords: [ '压抑' ]
	},
	{
		target: "你不是在开玩笑吧?",
		alt: "Nǐ　bùshì　zài　kāiwánxiào　ba？",
		native: "Are you kidding?",
		words: [ '你', '不是', '在', '开玩笑', '吧' ],
		quizWords: [ '开玩笑' ]
	},
	{
		target: "说真的?",
		alt: "Shuō　zhēn　de？",
		native: "honestly?",
		words: [ '说', '真', '的' ],
		quizSentence: true
	},
	{
		target: "如果可以的话，我 要检查你的更衣室。",
		alt: "Rúguǒ　kěyǐ　dehuà、　wǒ　yào　jiǎnchá　nǐ　de　gēngyī　shì。",
		native: "I\'d like to check your dressing room if I may.",
		words: [ '如果', '可以', '的话', '我', '要', '检查', '你', '的', '更衣', '室' ],
		quizWords: [ '如果', '检查', '室', '更衣' ]
	},
	{
		target: "为什么呢?",
		alt: "Wèishéme　ne？",
		native: "why?",
		words: [ '为什么', '呢' ],
		quizSentence: true
	},
	{
		target: "要检查洞。",
		alt: "Yào　jiǎnchá　dòng。",
		native: "To check the hole.",
		words: [ '要', '检查', '洞' ],
		quizWords: [ '洞' ]
	},
	{
		target: "洞?",
		alt: "Dòng？",
		native: "Hole?",
		words: [ '洞' ],
		quizSentence: true
	},
	{
		target: "你会很吃惊的，有人从 洞里偷窥美丽的躯体。",
		alt: "Nǐ　huì　hěn　chījīng　de、　yǒurén　cóng　dòng　lǐ　tōukuī　měilì　de　qūtǐ。",
		native: "You will be surprised to see someone peeking at a beautiful body from the hole.",
		words: [ '你', '会', '很', '吃惊', '的', '有人', '从', '洞', '里', '偷窥', '美丽', '的', '躯体' ],
		quizWords: [ '躯体', '美丽', '偷窥', '吃惊' ]
	},
	{
		target: "我不会。",
		alt: "Wǒ　bù　huì。",
		native: "I won\'t.",
		words: [ '我', '不', '会' ],
		quizSentence: true
	},
	{
		target: "他们在墙壁挖些小洞 好看小姐们脱衣。",
		alt: "Tāmen　zài　qiángbì　wā　xiēxiǎo　dòng　hǎokàn　xiǎojiěmen　tuōyī。",
		native: "They dug little holes in the wall and the pretty ladies took off their clothes.",
		words: [ '他们', '在', '墙壁', '挖', '些小', '洞', '好看', '小姐们', '脱衣' ],
		quizWords: [ '墙壁', '挖', '些小', '小姐们', '脱衣' ]
	},
	{
		target: "这是真蛇吗?",
		alt: "Zhè　shì　zhēn　shé　ma？",
		native: "Is this a real snake?",
		words: [ '这', '是', '真', '蛇', '吗' ],
		quizWords: [ '蛇' ]
	},
	{
		target: "当然不是真的。",
		alt: "Dāngrán　bùshì　zhēn　de。",
		native: "Of course not true.",
		words: [ '当然', '不是', '真', '的' ],
		quizSentence: true
	},
	{
		target: "我在这种地方工作，养得起真蛇吗?",
		alt: "Wǒ　zài　zhè　zhòng　dìfāng　gōngzuò、　yǎng　dé　qǐ　zhēn　shé　ma？",
		native: "I work in a place like this, can I afford to keep a real snake?",
		words: [ '我', '在', '这', '种', '地方', '工作', '养', '得', '起', '真', '蛇', '吗' ],
		quizWords: [ '种', '养', '起' ]
	},
	{
		target: "如果有人在剥削我，我该去找谁呢？",
		alt: "Rúguǒ　yǒurén　zài　bōxuè　wǒ、　wǒ　gāi　qù　zhǎo　shéi　ne？。",
		native: "If someone is exploiting me, who should I go to? .",
		words: [ '如果', '有人', '在', '剥削', '我', '我', '该', '去', '找', '谁', '呢' ],
		quizSentence: true
	},
	{
		target: "我。",
		alt: "Wǒ。",
		native: "I.",
		words: [ '我' ],
		quizSentence: true
	},
	{
		target: "你是个尽职的人，帮我擦背。",
		alt: "Nǐ　shìgè　jìnzhí　de　rén、　bāng　wǒ　cābèi。",
		native: "You are a conscientious person, rub my back.",
		words: [ '你', '是个', '尽职', '的', '人', '帮', '我', '擦背' ],
		quizWords: [ '尽职', '是个', '擦背' ]
	},
	{
		target: "（通过……）。",
		alt: "（Tōngguò……）。",
		native: "(pass……).",
		words: [ '通过' ],
		quizSentence: true
	},
	{
		target: "（不准通行）。",
		alt: "（Bù　zhǔn　tōngxíng）。",
		native: "(No access allowed).",
		words: [ '不', '准', '通行' ],
		quizWords: [ '准', '通行' ]
	},
	{
		target: "（通过）。",
		alt: "（Tōngguò）。",
		native: "(pass).",
		words: [ '通过' ],
		quizSentence: true
	},
	{
		target: "让开 让开。",
		alt: "Ràng　kāi　ràng　kāi。",
		native: "Get out of the way Get out of the way.",
		words: [ '让', '开', '让', '开' ],
		quizSentence: true
	},
	{
		target: "戴克，B26354。",
		alt: "dàikè、B６３５４。",
		native: "dyke, B26354.",
		words: [ '戴克B' ],
		quizSentence: true
	}
];