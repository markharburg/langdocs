const gLang = 'zh';
const gBook = 'blade.runner';
const gChap = '9';
const gMode = 'zh';
const gSpeed = '120';

const slideData =
[
	{
		target: "声纹识别认证 请说出你要去的楼层。",
		alt: "Shēng　wén　shìbié　rènzhèng　qǐng　shuō　chū　nǐ　yào　qù　de　lóucéng。",
		native: "Voiceprint recognition authentication Please tell me the floor you want to go to.",
		words: [ '声', '纹', '识别', '认证', '请', '说', '出', '你', '要', '去', '的', '楼层' ],
		quizWords: [ '纹', '识别', '认证', '楼层', '声' ]
	},
	{
		target: "戴克，九十七层。",
		alt: "dàikè、　jiǔ　shí　qī　céng。",
		native: "Dike, ninety-seventh floor.",
		words: [ '戴克', '九', '十', '七', '层' ],
		quizWords: [ '层', '七', '九' ]
	},
	{
		target: "九十七层，谢谢。",
		alt: "Jiǔ　shí　qī　céng、　xièxiè。",
		native: "Ninety-Seventh Floor, thank you.",
		words: [ '九', '十', '七', '层', '谢谢' ],
		quizWords: [ '谢谢' ]
	},
	{
		target: "我想要见你！",
		alt: "Wǒ　xiǎng　yào　jiàn　nǐ！",
		native: "I want to see you!",
		words: [ '我', '想', '要', '见', '你' ],
		quizSentence: true
	},
	{
		target: "所以我一直在这里等你。",
		alt: "Suǒyǐ　wǒ　yīzhí　zài　zhèlǐ　děng　nǐ。",
		native: "So I\'ve been waiting for you here.",
		words: [ '所以', '我', '一直', '在', '这里', '等', '你' ],
		quizWords: [ '等' ]
	},
	{
		target: "让我来。",
		alt: "Ràng　wǒ　lái。",
		native: "let me.",
		words: [ '让', '我', '来' ],
		quizWords: [ '让' ]
	},
	{
		target: "我干嘛需要你帮忙。",
		alt: "Wǒ　gàn　ma　xūyào　nǐ　bāngmáng。",
		native: "Why do I need your help?",
		words: [ '我', '干', '嘛', '需要', '你', '帮忙' ],
		quizWords: [ '干', '嘛' ]
	},
	{
		target: "我不知道他为什么告诉 你他都做了些什么。",
		alt: "Wǒ　bù　zhīdào　tā　wèishéme　gàosù　nǐ　tā　dōu　zuò　le　xiē　shénme。",
		native: "I don’t know why he told you what he did.",
		words: [ '我', '不', '知道', '他', '为什么', '告诉', '你', '他', '都', '做', '了', '些', '什么' ],
		quizWords: [ '些' ]
	},
	{
		target: "去跟他谈！",
		alt: "Qù　gēn　tā　tán！",
		native: "Go talk to him!",
		words: [ '去', '跟', '他', '谈' ],
		quizWords: [ '谈' ]
	},
	{
		target: "他不肯见我。",
		alt: "Tā　bù　kěn　jiàn　wǒ。",
		native: "He refuses to see me.",
		words: [ '他', '不', '肯', '见', '我' ],
		quizWords: [ '肯' ]
	},
	{
		target: "想喝杯酒吗?",
		alt: "Xiǎng　hē　bēi　jiǔ　ma？",
		native: "Want to have a drink?",
		words: [ '想', '喝', '杯', '酒', '吗' ],
		quizWords: [ '酒', '杯' ]
	},
	{
		target: "不想?",
		alt: "Bùxiǎng？",
		native: "In no mood?",
		words: [ '不想' ],
		quizSentence: true
	},
	{
		target: "你认为我是复制人，是吗?",
		alt: "Nǐ　rènwéi　wǒ　shì　fùzhì　rén、　shì　ma？",
		native: "You think I\'m a clone, don\'t you?",
		words: [ '你', '认为', '我', '是', '复制', '人', '是', '吗' ],
		quizWords: [ '认为' ]
	},
	{
		target: "看！",
		alt: "Kàn！",
		native: "look!",
		words: [ '看' ],
		quizSentence: true
	},
	{
		target: "这是我和我母亲。",
		alt: "Zhè　shì　wǒ　hé　wǒ　mǔqīn。",
		native: "This is me and my mother.",
		words: [ '这', '是', '我', '和', '我', '母亲' ],
		quizSentence: true
	},
	{
		target: "是吗?",
		alt: "Shì　ma？",
		native: "Yeah?",
		words: [ '是', '吗' ],
		quizSentence: true
	},
	{
		target: "记得你六岁那年。",
		alt: "Jìdé　nǐ　liù　suì　nà　nián。",
		native: "Remember when you were six years old.",
		words: [ '记得', '你', '六', '岁', '那', '年' ],
		quizWords: [ '记得', '岁' ]
	},
	{
		target: "你和你哥哥从地下室 窗户溜进一栋空大楼。",
		alt: "Nǐ　hé　nǐ　gēgē　cóng　dìxiàshì　chuānghù　liū　jìn　yī　dòng　kōng　dàlóu。",
		native: "You and your brother sneak into an empty building through a basement window.",
		words: [ '你', '和', '你', '哥哥', '从', '地下室', '窗户', '溜', '进', '一', '栋', '空', '大楼' ],
		quizWords: [ '窗户', '溜', '栋', '大楼', '哥哥', '地下室', '空' ]
	},
	{
		target: "你们玩大夫游戏。",
		alt: "Nǐmen　wán　dàfū　yóuxì。",
		native: "You guys are playing the doctor game.",
		words: [ '你们', '玩', '大夫', '游戏' ],
		quizWords: [ '大夫', '玩', '游戏' ]
	},
	{
		target: "他把他的给你看了。",
		alt: "Tā　bǎ　tā　de　gěi　nǐ　kàn　le。",
		native: "He showed you his.",
		words: [ '他', '把', '他', '的', '给', '你', '看', '了' ],
		quizWords: [ '把' ]
	},
	{
		target: "轮到你，你却胆小逃了，记得吗?",
		alt: "Lún　dào　nǐ、　nǐ　què　dǎn　xiǎo　táo　le、　jìdé　ma？",
		native: "When it was your turn, you ran away cowardly, remember?",
		words: [ '轮', '到', '你', '你', '却', '胆', '小', '逃', '了', '记得', '吗' ],
		quizWords: [ '轮', '胆', '却' ]
	},
	{
		target: "你告诉过谁这件事吗? 你妈妈，泰里尔，任何人?",
		alt: "Nǐ　gàosùguò　shéi　zhè　jiàn　shì　ma？　Nǐ　māmā、　tàilǐěr、　rènhé　rén？",
		native: "Have you told anyone about this? Your mom, Tyrell, anyone?",
		words: [ '你', '告诉过', '谁', '这', '件', '事', '吗', '你', '妈妈', '泰里尔', '任何', '人' ],
		quizWords: [ '告诉过', '任何', '妈妈' ]
	},
	{
		target: "还记得住在窗外灌木里的蜘蛛么？",
		alt: "Hái　jìdé　zhù　zài　chuāngwài　guànmù　lǐ　de　zhīzhū　me？。",
		native: "Remember the spider living in the bush outside your window? .",
		words: [ '还', '记得', '住', '在', '窗外', '灌木', '里', '的', '蜘蛛', '么' ],
		quizWords: [ '灌木', '窗外', '蜘蛛' ]
	},
	{
		target: "桔色身体，绿色脚。",
		alt: "Jú　sè　shēntǐ、　lu:４se４　jiǎo。",
		native: "Orange body, green feet.",
		words: [ '桔', '色', '身体', '绿色', '脚' ],
		quizWords: [ '色', '脚', '桔', '绿色' ]
	},
	{
		target: "夏天看它吐丝结网。",
		alt: "Xiàtiān　kàn　tā　tǔ　sī　jié　wǎng。",
		native: "Watch it spin silk and form webs in summer.",
		words: [ '夏天', '看', '它', '吐', '丝', '结', '网' ],
		quizWords: [ '丝', '网', '结', '夏天', '吐' ]
	},
	{
		target: "有一天网里有个卵。",
		alt: "Yǒu　yī　tiān　wǎng　li　yǒu　gè　luǎn。",
		native: "One day there was an egg in the net.",
		words: [ '有', '一', '天', '网', '里', '有', '个', '卵' ],
		quizWords: [ '卵' ]
	},
	{
		target: "卵孵出来了。",
		alt: "Luǎn　fū　chūlái　le。",
		native: "The egg hatched.",
		words: [ '卵', '孵', '出来', '了' ],
		quizWords: [ '孵', '出来' ]
	},
	{
		target: "卵孵出来了 之后呢。",
		alt: "Luǎn　fū　chūlái　liǎo　zhīhòu　ne。",
		native: "What happens after the egg hatches?",
		words: [ '卵', '孵', '出来', '了', '之后', '呢' ],
		quizWords: [ '之后' ]
	},
	{
		target: "几百只小蜘蛛跑出来。",
		alt: "Jǐ　bǎi　zhǐ　xiǎo　zhīzhū　pǎo　chū　lái。",
		native: "Hundreds of little spiders ran out.",
		words: [ '几', '百', '只', '小', '蜘蛛', '跑', '出', '来' ],
		quizWords: [ '百', '只', '跑' ]
	},
	{
		target: "它们把她吃掉了。",
		alt: "Tāmen　bǎ　tā　chī　diào　le。",
		native: "They ate her.",
		words: [ '它们', '把', '她', '吃', '掉', '了' ],
		quizWords: [ '它们' ]
	},
	{
		target: "这是输入的记忆，不是你的记忆。",
		alt: "Zhè　shì　shūrù　de　jìyì、　bùshì　nǐ　de　jìyì。",
		native: "This is the input\'s memory, not yours.",
		words: [ '这', '是', '输入', '的', '记忆', '不是', '你', '的', '记忆' ],
		quizWords: [ '输入' ]
	},
	{
		target: "是别人的记忆 是泰里尔侄女的记忆。",
		alt: "Shì　biérén　de　jìyì　shì　tàilǐěr　zhi２nu:３　de　jìyì。",
		native: "is someone else’s memory. It’s the memory of Tyril’s niece.",
		words: [ '是', '别人', '的', '记忆', '是', '泰里尔', '侄女', '的', '记忆' ],
		quizWords: [ '侄女', '别人', '的' ]
	},
	{
		target: "好吧！这是个恶劣的玩笑。",
		alt: "Hǎo　ba！　Zhè　shìgè　èliè　de　wánxiào。",
		native: "All right! This is a bad joke.",
		words: [ '好', '吧', '这', '是个', '恶劣', '的', '玩笑' ],
		quizWords: [ '恶劣', '玩笑', '是个' ]
	},
	{
		target: "我开了个恶劣的玩笑。",
		alt: "Wǒ　kāi　le　gè　èliè　de　wánxiào。",
		native: "I made a bad joke.",
		words: [ '我', '开', '了', '个', '恶劣', '的', '玩笑' ],
		quizSentence: true
	},
	{
		target: "你不是复制人，回家好吗?",
		alt: "Nǐ　bùshì　fùzhì　rén、　huí　jiā　hǎo　ma？",
		native: "You are not a replicator. How about going home?",
		words: [ '你', '不是', '复制', '人', '回', '家', '好', '吗' ],
		quizSentence: true
	},
	{
		target: "真的，我很抱歉。",
		alt: "Zhēn　de、　wǒ　hěn　bàoqiàn。",
		native: "Really, I\'m sorry.",
		words: [ '真', '的', '我', '很', '抱歉' ],
		quizSentence: true
	},
	{
		target: "回家去吧。",
		alt: "Huí　jiā　qù　ba。",
		native: "Go home.",
		words: [ '回', '家', '去', '吧' ],
		quizSentence: true
	},
	{
		target: "想喝酒吗?",
		alt: "Xiǎng　hējiǔ　ma？",
		native: "Want to drink?",
		words: [ '想', '喝酒', '吗' ],
		quizWords: [ '喝酒' ]
	},
	{
		target: "我给你倒杯酒。",
		alt: "Wǒ　gěi　nǐ　dào　bēi　jiǔ。",
		native: "I\'ll pour you a glass of wine.",
		words: [ '我', '给', '你', '倒', '杯', '酒' ],
		quizWords: [ '倒' ]
	},
	{
		target: "我去拿个杯子。",
		alt: "Wǒ　qù　ná　gè　bēizi。",
		native: "I\'ll get a cup.",
		words: [ '我', '去', '拿', '个', '杯子' ],
		quizWords: [ '拿' ]
	}
];