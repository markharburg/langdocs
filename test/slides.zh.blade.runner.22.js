const gLang = 'zh';
const gBook = 'blade.runner';
const gChap = '22';
const gMode = 'zh';
const gSpeed = '120';

const slideData =
[
	{
		target: "对手无寸铁的人开枪 可不怎么有运动员风范哦。",
		alt: "Duì　shǒuwúcùntiě　de　rén　kāi　qiāng　kěbù　zěn　me　yǒu　yùndòngyuán　fēngfàn　ó。",
		native: "It\'s not very sportsmanlike to shoot at an unarmed man.",
		words: [ '对', '手无寸铁', '的', '人', '开', '枪', '可不', '怎', '么', '有', '运动员', '风范', '哦' ],
		quizWords: [ '运动员', '哦', '枪', '可不', '怎', '手无寸铁', '风范' ]
	},
	{
		target: "真遗憾！我以为你该是个好人啊。",
		alt: "Zhēn　yíhàn！　Wǒ　yǐwéi　nǐ　gāi　shìgè　hǎorén　a。",
		native: "it\'s a pity! I thought you were supposed to be a good person.",
		words: [ '真', '遗憾', '我', '以为', '你', '该', '是个', '好人', '啊' ],
		quizWords: [ '好人', '以为', '遗憾', '是个' ]
	},
	{
		target: "你不是好人吗?",
		alt: "Nǐ　bùshì　hǎorén　ma？",
		native: "Aren’t you a good person?",
		words: [ '你', '不是', '好人', '吗' ],
		quizSentence: true
	},
	{
		target: "来吧！戴克。",
		alt: "Lái　ba！　dàikè。",
		native: "bring it on! Dyke.",
		words: [ '来', '吧', '戴克' ],
		quizSentence: true
	},
	{
		target: "让我瞧瞧你是什么材料做的。",
		alt: "Ràng　wǒ　qiáo　qiáo　nǐ　shì　shénme　cáiliào　zuò　de。",
		native: "Let me see what you are made of.",
		words: [ '让', '我', '瞧', '瞧', '你', '是', '什么', '材料', '做', '的' ],
		quizWords: [ '材料', '瞧', '让' ]
	},
	{
		target: "很为你自己骄傲吗？小个子。",
		alt: "Hěn　wèi　nǐ　zìjǐ　jiāo\'ào　ma？　Xiǎo　gèzi。",
		native: "Are you very proud of yourself? Little man.",
		words: [ '很', '为', '你', '自己', '骄傲', '吗', '小', '个子' ],
		quizWords: [ '自己', '个子', '骄傲', '吗' ]
	},
	{
		target: "这是为了索拉。",
		alt: "Zhè　shì　wèi　le　suǒlā。",
		native: "This is for Sora.",
		words: [ '这', '是', '为', '了', '索拉' ],
		quizSentence: true
	},
	{
		target: "这是为了佩莉丝。",
		alt: "Zhè　shì　wèi　le　pèilìsī。",
		native: "This is for Peris.",
		words: [ '这', '是', '为', '了', '佩莉丝' ],
		quizSentence: true
	},
	{
		target: "来吧！戴克。",
		alt: "Lái　ba！　dàikè。",
		native: "bring it on! Dyke.",
		words: [ '来', '吧', '戴克' ],
		quizSentence: true
	},
	{
		target: "我就在这里，你可别射歪了。",
		alt: "Wǒ　jiù　zài　zhèlǐ、　nǐ　kě　bié　shè　wāi　le。",
		native: "I\'m right here, don\'t cum wrongly.",
		words: [ '我', '就', '在', '这里', '你', '可', '别', '射', '歪', '了' ],
		quizWords: [ '射', '歪' ]
	},
	{
		target: "够直了！但不够好。",
		alt: "Gòu　zhí　le！　Dàn　bùgòu　hǎo。",
		native: "Straight enough! But not good enough.",
		words: [ '够', '直', '了', '但', '不够', '好' ],
		quizWords: [ '够', '直' ]
	},
	{
		target: "轮到我了。",
		alt: "Lún　dào　wǒ　le。",
		native: "It\'s my turn.",
		words: [ '轮', '到', '我', '了' ],
		quizWords: [ '轮' ]
	},
	{
		target: "我来之前，会给你几秒钟。",
		alt: "Wǒ　lái　zhīqián、　huì　gěi　nǐ　jǐ　miǎo　zhōng。",
		native: "I\'ll give you a few seconds before I come.",
		words: [ '我', '来', '之前', '会', '给', '你', '几', '秒', '钟' ],
		quizWords: [ '之前' ]
	},
	{
		target: "一。",
		alt: "Yī。",
		native: "one.",
		words: [ '一' ],
		quizSentence: true
	},
	{
		target: "二。",
		alt: "Er。",
		native: "two.",
		words: [ '二' ],
		quizSentence: true
	},
	{
		target: "三。",
		alt: "Sān。",
		native: "three.",
		words: [ '三' ],
		quizSentence: true
	},
	{
		target: "四。",
		alt: "Sì。",
		native: "Four.",
		words: [ '四' ],
		quizSentence: true
	},
	{
		target: "佩莉丝。",
		alt: "pèilìsī。",
		native: "Peris.",
		words: [ '佩莉丝' ],
		quizSentence: true
	},
	{
		target: "戴克。",
		alt: "dàikè。",
		native: "Dike.",
		words: [ '戴克' ],
		quizSentence: true
	},
	{
		target: "四   五。",
		alt: "Sì　wǔ。",
		native: "Four Five.",
		words: [ '四', '五' ],
		quizSentence: true
	},
	{
		target: "如何保住性命。",
		alt: "Rúhé　bǎozhù　xìngmìng。",
		native: "How to save your life.",
		words: [ '如何', '保住', '性命' ],
		quizWords: [ '保住', '如何', '性命' ]
	},
	{
		target: "我看得见你。",
		alt: "Wǒ　kàn　dé　jiàn　nǐ。",
		native: "I can see you.",
		words: [ '我', '看', '得', '见', '你' ],
		quizSentence: true
	},
	{
		target: "还没完呢!坚持住!。",
		alt: "Hái　méi　wán　ne！　Jiānchí　zhù！。",
		native: "It’s not over yet! Hold on!.",
		words: [ '还', '没', '完', '呢', '坚持', '住' ],
		quizWords: [ '坚持', '完' ]
	},
	{
		target: "行了。",
		alt: "Xíng　le。",
		native: "okay.",
		words: [ '行', '了' ],
		quizWords: [ '行' ]
	},
	{
		target: "你最好要挺住。",
		alt: "Nǐ　zuì　hǎo　yào　tǐng　zhù。",
		native: "You better hold on.",
		words: [ '你', '最', '好', '要', '挺', '住' ],
		quizSentence: true
	},
	{
		target: "不然我就要杀了你。",
		alt: "Bùrán　wǒ　jiù　yào　shā　le　nǐ。",
		native: "Otherwise I will kill you.",
		words: [ '不然', '我', '就', '要', '杀', '了', '你' ],
		quizWords: [ '不然' ]
	},
	{
		target: "只要你活着。",
		alt: "Zhǐyào　nǐ　huózhe。",
		native: "As long as you live.",
		words: [ '只要', '你', '活着' ],
		quizWords: [ '只要', '活着' ]
	},
	{
		target: "你就得玩下去，如果你不玩...。",
		alt: "Nǐ　jiù　dé　wán　xiàqù、　rúguǒ　nǐ　bù　wán。。。。",
		native: "You have to keep playing, if you don’t play….",
		words: [ '你', '就', '得', '玩', '下去', '如果', '你', '不', '玩' ],
		quizWords: [ '如果', '玩', '下去' ]
	},
	{
		target: "六。",
		alt: "Liù。",
		native: "six.",
		words: [ '六' ],
		quizSentence: true
	},
	{
		target: "七。",
		alt: "Qī。",
		native: "seven.",
		words: [ '七' ],
		quizWords: [ '七' ]
	},
	{
		target: "下地狱或上天堂。",
		alt: "Xià　dìyù　huò　shàng　tiāntáng。",
		native: "Go to hell or go to heaven.",
		words: [ '下', '地狱', '或', '上', '天堂' ],
		quizWords: [ '或', '地狱', '天堂' ]
	},
	{
		target: "好的！",
		alt: "Hǎo　de！",
		native: "OK!",
		words: [ '好', '的' ],
		quizSentence: true
	},
	{
		target: "就是这样。",
		alt: "Jiùshì　zhèyàng。",
		native: "That\'s it.",
		words: [ '就是', '这样' ],
		quizWords: [ '这样' ]
	},
	{
		target: "这可不好。",
		alt: "Zhè　kě　bù　hǎo。",
		native: "This is not good.",
		words: [ '这', '可', '不', '好' ],
		quizSentence: true
	},
	{
		target: "你失去理性了。",
		alt: "Nǐ　shīqù　lǐxìng　le。",
		native: "You are losing your mind.",
		words: [ '你', '失去', '理性', '了' ],
		quizWords: [ '失去', '理性' ]
	},
	{
		target: "更别提你这么的没有运动员风范了。",
		alt: "Gèng　bié　tí　nǐ　zhème　de　méiyǒu　yùndòngyuán　fēngfàn　le。",
		native: "Not to mention you are so unsportsmanlike.",
		words: [ '更', '别', '提', '你', '这么', '的', '没有', '运动员', '风范', '了' ],
		quizWords: [ '提' ]
	},
	{
		target: "你要去那里?",
		alt: "Nǐ　yào　qù　nàlǐ？",
		native: "where are you going?",
		words: [ '你', '要', '去', '那里' ],
		quizSentence: true
	},
	{
		target: "深深的体会到了生活在恐惧中的滋味了 是不是?",
		alt: "Shēn　shēn　de　tǐhuì　dào　le　shēnghuó　zài　kǒngjù　zhōng　de　zīwèi　le　shì　bùshì？",
		native: "I deeply understand what it is like to live in fear, right?",
		words: [ '深', '深', '的', '体会', '到', '了', '生活', '在', '恐惧', '中', '的', '滋味', '了', '是', '不是' ],
		quizWords: [ '深', '体会', '滋味' ]
	},
	{
		target: "身为奴隶就是这样的感觉。",
		alt: "Shēn　wèi　núlì　jiùshì　zhèyàng　de　gǎnjué。",
		native: "This is what it feels like to be a slave.",
		words: [ '身', '为', '奴隶', '就是', '这样', '的', '感觉' ],
		quizWords: [ '感觉', '奴隶' ]
	},
	{
		target: "上帝！",
		alt: "Shàngdì！",
		native: "God!",
		words: [ '上帝' ],
		quizWords: [ '上帝' ]
	},
	{
		target: "我看过你们人类无法相信的事情。",
		alt: "Wǒ　kànguò　nǐmen　rénlèi　wúfǎ　xiāngxìn　de　shìqíng。",
		native: "I\'ve seen things you humans wouldn\'t believe.",
		words: [ '我', '看过', '你们', '人类', '无法', '相信', '的', '事情' ],
		quizWords: [ '看过', '相信', '事情', '无法' ]
	},
	{
		target: "攻击奥林海滩边着火的船。",
		alt: "Gōngjí　ào　lín　hǎitān　biān　zháohuǒ　de　chuán。",
		native: "Attack the burning boat on Orin Beach.",
		words: [ '攻击', '奥', '林', '海滩', '边', '着火', '的', '船' ],
		quizWords: [ '海滩', '着火', '奥', '攻击', '林' ]
	},
	{
		target: "我看见激光闪耀在唐豪塞门旁的黑暗中。",
		alt: "Wǒ　kànjiàn　jīguāng　shǎnyào　zài　táng　háo　sāi　mén　páng　de　hēi\'àn　zhōng。",
		native: "I saw lasers shining in the darkness beside the Tannhäuser Gate.",
		words: [ '我', '看见', '激光', '闪耀', '在', '唐', '豪', '塞', '门', '旁', '的', '黑暗', '中' ],
		quizWords: [ '豪', '激光', '旁', '黑暗', '门', '塞', '唐', '中', '闪耀' ]
	},
	{
		target: "所有这些将在时光洪流中消逝无踪。",
		alt: "Suǒyǒu　zhèxiē　jiàng　zài　shíguāng　hóngliú　zhōng　xiāoshì　wú　zōng。",
		native: "All these will disappear without a trace in the torrent of time.",
		words: [ '所有', '这些', '将', '在', '时光', '洪流', '中', '消逝', '无', '踪' ],
		quizWords: [ '时光', '消逝', '洪流', '将', '无', '踪' ]
	},
	{
		target: "就像雨中的泪水。",
		alt: "Jiù　xiàng　yǔzhōng　de　lèishuǐ。",
		native: "Like tears in the rain.",
		words: [ '就', '像', '雨中', '的', '泪水' ],
		quizWords: [ '像', '雨中', '泪水' ]
	},
	{
		target: "死期到了。",
		alt: "Sǐqī　dào　le。",
		native: "The time to die has arrived.",
		words: [ '死期', '到', '了' ],
		quizWords: [ '死期' ]
	},
	{
		target: "你完成了了不起的任务！先生。",
		alt: "Nǐ　wán　chéng　liǎo　liǎobùqǐ　de　rènwù！　Xiānshēng。",
		native: "You have done an amazing job! gentlemen.",
		words: [ '你', '完', '成', '了', '了不起', '的', '任务', '先生' ],
		quizWords: [ '了不起', '任务' ]
	},
	{
		target: "我想你挺的住，是不是？",
		alt: "Wǒ　xiǎng　nǐ　tǐng　de　zhù、　shì　bùshì？。",
		native: "I think you\'re doing fine, right? .",
		words: [ '我', '想', '你', '挺', '的', '住', '是', '不是' ],
		quizSentence: true
	},
	{
		target: "完成了。",
		alt: "Wánchéng　le。",
		native: "finished.",
		words: [ '完成', '了' ],
		quizWords: [ '完成' ]
	},
	{
		target: "很遗憾她活不下去了。",
		alt: "Hěn　yíhàn　tā　huó　bù　xiàqù　le。",
		native: "It\'s a pity she won\'t survive.",
		words: [ '很', '遗憾', '她', '活', '不', '下去', '了' ],
		quizWords: [ '活' ]
	},
	{
		target: "但话说回来，谁又不是呢?",
		alt: "Dàn　huàshuō　huílái、　shéi　yòu　bùshì　ne？",
		native: "But then again, who isn’t?",
		words: [ '但', '话说', '回来', '谁', '又', '不是', '呢' ],
		quizWords: [ '回来', '话说' ]
	}
];