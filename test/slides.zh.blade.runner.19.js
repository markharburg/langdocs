const gLang = 'zh';
const gBook = 'blade.runner';
const gChap = '19';
const gMode = 'zh';
const gSpeed = '120';

const slideData =
[
	{
		target: "你在干嘛?",
		alt: "Nǐ　zài　gàn　ma？",
		native: "What are you doing?",
		words: [ '你', '在', '干', '嘛' ],
		quizWords: [ '干', '嘛' ]
	},
	{
		target: "抱歉。",
		alt: "Bàoqiàn。",
		native: "Feel sorry.",
		words: [ '抱歉' ],
		quizSentence: true
	},
	{
		target: "只是偷看一下。",
		alt: "Zhǐshì　tōu　kàn　yīxià。",
		native: "Just a peek.",
		words: [ '只是', '偷', '看', '一下' ],
		quizWords: [ '一下', '偷' ]
	},
	{
		target: "我看起来怎样?",
		alt: "Wǒ　kàn　qǐlái　zěnyàng？",
		native: "How do I look?",
		words: [ '我', '看', '起来', '怎样' ],
		quizWords: [ '起来', '怎样' ]
	},
	{
		target: "好一点了。",
		alt: "Hǎo　yīdiǎn　le。",
		native: "Feeling better now.",
		words: [ '好', '一点', '了' ],
		quizWords: [ '一点' ]
	},
	{
		target: "只好一点吗?",
		alt: "Zhǐhǎo　yīdiǎn　ma？",
		native: "Just a little better?",
		words: [ '只好', '一点', '吗' ],
		quizWords: [ '只好' ]
	},
	{
		target: "你很美丽。",
		alt: "Nǐ　hěn　měilì。",
		native: "you are beautiful.",
		words: [ '你', '很', '美丽' ],
		quizWords: [ '美丽' ]
	},
	{
		target: "谢谢！",
		alt: "xièxiè！",
		native: "Thanks!",
		words: [ '谢谢' ],
		quizWords: [ '谢谢' ]
	},
	{
		target: "你几岁?",
		alt: "Nǐ　jǐ　suì？",
		native: "How old are you?",
		words: [ '你', '几', '岁' ],
		quizWords: [ '岁' ]
	},
	{
		target: "二十五。",
		alt: "Er　shí　wǔ。",
		native: "twenty five.",
		words: [ '二', '十', '五' ],
		quizSentence: true
	},
	{
		target: "你的问题在哪里?",
		alt: "Nǐ　de　wèntí　zài　nǎlǐ？",
		native: "What is your problem?",
		words: [ '你', '的', '问题', '在', '哪里' ],
		quizWords: [ '哪里' ]
	},
	{
		target: "早衰。",
		alt: "Zǎoshuāi。",
		native: "progeria.",
		words: [ '早衰' ],
		quizWords: [ '早衰' ]
	},
	{
		target: "那是什么?",
		alt: "Nà　shì　shénme？",
		native: "what is that?",
		words: [ '那', '是', '什么' ],
		quizSentence: true
	},
	{
		target: "我的腺体衰老的太快。",
		alt: "Wǒ　de　xiàn　tǐ　shuāilǎo　de　tài　kuài。",
		native: "My glands are aging too fast.",
		words: [ '我', '的', '腺', '体', '衰老', '的', '太', '快' ],
		quizWords: [ '体', '腺', '衰老' ]
	},
	{
		target: "所以你仍然在地球。",
		alt: "Suǒyǐ　nǐ　réngrán　zài　dìqiú。",
		native: "So you are still on Earth.",
		words: [ '所以', '你', '仍然', '在', '地球' ],
		quizWords: [ '仍然' ]
	},
	{
		target: "我通不过体检。",
		alt: "Wǒ　tōng　bùguò　tǐjiǎn。",
		native: "I failed the physical examination.",
		words: [ '我', '通', '不过', '体检' ],
		quizWords: [ '通', '体检' ]
	},
	{
		target: "再说，我挺喜欢这里。",
		alt: "Zàishuō、　wǒ　tǐng　xǐhuān　zhèlǐ。",
		native: "Besides, I quite like it here.",
		words: [ '再说', '我', '挺', '喜欢', '这里' ],
		quizWords: [ '再说' ]
	},
	{
		target: "我喜欢你。",
		alt: "Wǒ　xǐhuān　nǐ。",
		native: "I like you.",
		words: [ '我', '喜欢', '你' ],
		quizSentence: true
	},
	{
		target: "现在这样的你。",
		alt: "Xiànzài　zhèyàng　de　nǐ。",
		native: "You are like this now.",
		words: [ '现在', '这样', '的', '你' ],
		quizWords: [ '这样' ]
	},
	{
		target: "嗨！洛伊。",
		alt: "Hāi！　luòyī。",
		native: "Hi! Roy.",
		words: [ '嗨', '洛伊' ],
		quizSentence: true
	},
	{
		target: "老天！这里的玩具好棒。",
		alt: "Lǎo　tiān！　Zhèlǐ　de　wánjù　hǎo　bàng。",
		native: "God! The toys here are great.",
		words: [ '老', '天', '这里', '的', '玩具', '好', '棒' ],
		quizWords: [ '玩具', '棒' ]
	},
	{
		target: "这就是我告诉你的那位朋友。",
		alt: "Zhè　jiùshì　wǒ　gàosù　nǐ　dì　nà　wèi　péngyǒu。",
		native: "This is the friend I told you about.",
		words: [ '这', '就是', '我', '告诉', '你', '的', '那', '位', '朋友' ],
		quizWords: [ '位' ]
	},
	{
		target: "这是我最喜欢的J.F.赛巴斯迪安。",
		alt: "Zhè　shì　wǒ　zuì　xǐhuān　de　J。F。　Sài　bā　sī　dí　ān。",
		native: "This is my favorite J.F. Sebastian.",
		words: [ '这', '是', '我', '最', '喜欢', '的', '', 'J', 'F', '赛', '巴', '斯' ],
		quizWords: [ '斯', '巴', '赛' ]
	},
	{
		target: "赛巴斯迪安。",
		alt: "Sài　bā　sī　dí　ān。",
		native: "Sebastian.",
		words: [ '赛', '巴', '斯', '迪', '安' ],
		quizWords: [ '安', '迪' ]
	},
	{
		target: "我喜欢留在原地不走的家伙。",
		alt: "Wǒ　xǐhuān　liú　zàiyuán　dì　bù　zǒu　de　jiāhuo。",
		native: "I like guys who stay put and don’t leave.",
		words: [ '我', '喜欢', '留', '在原', '地', '不', '走', '的', '家伙' ],
		quizWords: [ '家伙', '在原', '地', '留' ]
	},
	{
		target: "你独自住这里吗?",
		alt: "Nǐ　dúzì　zhù　zhèlǐ　ma？",
		native: "Do you live here alone?",
		words: [ '你', '独自', '住', '这里', '吗' ],
		quizWords: [ '独自' ]
	},
	{
		target: "是的。",
		alt: "Shì　de。",
		native: "Yes.",
		words: [ '是', '的' ],
		quizSentence: true
	},
	{
		target: "来点早餐吧?",
		alt: "Lái　diǎn　zǎocān　ba？",
		native: "How about some breakfast?",
		words: [ '来', '点', '早餐', '吧' ],
		quizWords: [ '点', '早餐' ]
	},
	{
		target: "我正在做。",
		alt: "Wǒ　zhèngzài　zuò。",
		native: "I\'m doing.",
		words: [ '我', '正在', '做' ],
		quizWords: [ '正在' ]
	},
	{
		target: "那么?",
		alt: "Nàme？",
		native: "So?",
		words: [ '那么' ],
		quizSentence: true
	},
	{
		target: "里昂。",
		alt: "Lǐ\'áng。",
		native: "Lyon.",
		words: [ '里昂' ],
		quizSentence: true
	},
	{
		target: "怎么了?",
		alt: "Zěnme　liǎo？",
		native: "What\'s wrong?",
		words: [ '怎么', '了' ],
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
		target: "就剩我们两个了。",
		alt: "Jiù　shèng　wǒmen　liǎng　gè　le。",
		native: "There are only two of us left.",
		words: [ '就', '剩', '我们', '两', '个', '了' ],
		quizWords: [ '剩' ]
	},
	{
		target: "我们要是犯傻了就会死。",
		alt: "Wǒmen　yàoshi　fànshǎ　le　jiù　huì　sǐ。",
		native: "If we are stupid we will die.",
		words: [ '我们', '要是', '犯傻', '了', '就', '会', '死' ],
		quizWords: [ '犯傻' ]
	},
	{
		target: "我们不会。",
		alt: "Wǒmen　bù　huì。",
		native: "we will not.",
		words: [ '我们', '不', '会' ],
		quizSentence: true
	},
	{
		target: "不对。",
		alt: "Bùduì。",
		native: "Wrong.",
		words: [ '不对' ],
		quizWords: [ '不对' ]
	},
	{
		target: "骑士吃掉皇后对吗?",
		alt: "Qíshì　chī　diào　huánghòu　duì　ma？",
		native: "Is it right for the knight to eat the queen?",
		words: [ '骑士', '吃', '掉', '皇后', '对', '吗' ],
		quizWords: [ '骑士', '皇后' ]
	},
	{
		target: "不行！",
		alt: "Bùxíng！",
		native: "no!",
		words: [ '不行' ],
		quizWords: [ '不行' ]
	},
	{
		target: "为何那样看着我们?赛巴斯迪安。",
		alt: "Wèihé　nàyàng　kànzhe　wǒmen？　Sài　bā　sī　dí　ān。",
		native: "Why are you looking at us like that? Sebastian.",
		words: [ '为何', '那样', '看着', '我们', '赛', '巴', '斯', '迪', '安' ],
		quizWords: [ '看着' ]
	},
	{
		target: "因为你与众不同。",
		alt: "Yīnwèi　nǐ　yǔ　zhòng　bùtóng。",
		native: "Because you are different.",
		words: [ '因为', '你', '与', '众', '不同' ],
		quizWords: [ '与', '众', '不同' ]
	},
	{
		target: "你如此完美。",
		alt: "Nǐ　rúcǐ　wánměi。",
		native: "You are so perfect.",
		words: [ '你', '如此', '完美' ],
		quizWords: [ '完美', '如此' ]
	},
	{
		target: "对。",
		alt: "Duì。",
		native: "right.",
		words: [ '对' ],
		quizSentence: true
	},
	{
		target: "你是那一代的?",
		alt: "Nǐ　shì　nà　yīdài　de？",
		native: "Which generation are you from?",
		words: [ '你', '是', '那', '一代', '的' ],
		quizWords: [ '一代' ]
	},
	{
		target: "连锁六代。",
		alt: "Liánsuǒ　liù　dài。",
		native: "chain six generations.",
		words: [ '连锁', '六', '代' ],
		quizSentence: true
	},
	{
		target: "我就知道。",
		alt: "Wǒ　jiù　zhīdào。",
		native: "I knew it.",
		words: [ '我', '就', '知道' ],
		quizSentence: true
	},
	{
		target: "因为我为泰里尔公司做基因设计。",
		alt: "Yīnwèi　wǒ　wèi　tàilǐěr　gōngsī　zuò　jīyīn　shèjì。",
		native: "Because I do genetic design for Tyrell Corporation.",
		words: [ '因为', '我', '为', '泰里尔', '公司', '做', '基因', '设计' ],
		quizWords: [ '基因' ]
	},
	{
		target: "你身体里有我设计的部分。",
		alt: "Nǐ　shēntǐ　li　yǒu　wǒ　shèjì　de　bùfèn。",
		native: "There are parts of your body designed by me.",
		words: [ '你', '身体', '里', '有', '我', '设计', '的', '部分' ],
		quizWords: [ '部分' ]
	},
	{
		target: "给我看点东西。",
		alt: "Gěi　wǒ　kàn　diǎn　dōngxī。",
		native: "Show me something.",
		words: [ '给', '我', '看', '点', '东西' ],
		quizSentence: true
	},
	{
		target: "比如什么?",
		alt: "Bǐrú　shénme？",
		native: "Like what?",
		words: [ '比如', '什么' ],
		quizWords: [ '比如' ]
	},
	{
		target: "什么都可以。",
		alt: "Shénme　dōu　kěyǐ。",
		native: "Anything is fine.",
		words: [ '什么', '都', '可以' ],
		quizSentence: true
	},
	{
		target: "我们不是电脑，赛巴斯迪安。",
		alt: "Wǒmen　bùshì　diànnǎo、　sài　bā　sī　dí　ān。",
		native: "We are not computers, Sebastian.",
		words: [ '我们', '不是', '电脑', '赛', '巴', '斯', '迪', '安' ],
		quizWords: [ '电脑' ]
	},
	{
		target: "我们是有血有肉的。",
		alt: "Wǒmen　shì　yǒu　xuè　yǒu　ròu　de。",
		native: "We are flesh and blood.",
		words: [ '我们', '是', '有', '血', '有', '肉', '的' ],
		quizWords: [ '血', '肉' ]
	},
	{
		target: "我想,赛巴斯迪安,因此,我是。",
		alt: "Wǒ　xiǎng、　sài　bā　sī　dí　ān、　yīncǐ、　wǒ　shì。",
		native: "I think, Sebastian, therefore, I am.",
		words: [ '我', '想', '赛', '巴', '斯', '迪', '安', '因此', '我', '是' ],
		quizWords: [ '因此' ]
	},
	{
		target: "很好，佩莉丝，告诉他为什么。",
		alt: "Hěn　hǎo、　pèilìsī、　gàosù　tā　wèishéme。",
		native: "Very good, Peris, tell him why.",
		words: [ '很', '好', '佩莉丝', '告诉', '他', '为什么' ],
		quizSentence: true
	},
	{
		target: "我们有许多共同处。",
		alt: "Wǒmen　yǒu　xǔduō　gòngtóng　chù。",
		native: "We have a lot in common.",
		words: [ '我们', '有', '许多', '共同', '处' ],
		quizWords: [ '共同', '处' ]
	},
	{
		target: "什么意思?",
		alt: "Shénme　yìsi？",
		native: "What\'s the meaning?",
		words: [ '什么', '意思' ],
		quizSentence: true
	},
	{
		target: "类似的问题。",
		alt: "Lèisì　de　wèntí。",
		native: "Similar question.",
		words: [ '类似', '的', '问题' ],
		quizWords: [ '类似' ]
	},
	{
		target: "加速衰老。",
		alt: "Jiāsù　shuāilǎo。",
		native: "Accelerate aging.",
		words: [ '加速', '衰老' ],
		quizWords: [ '加速' ]
	},
	{
		target: "我对生物机械所懂不多，但愿我懂。",
		alt: "Wǒ　duì　shēngwù　jīxiè　suǒ　dǒng　bù　duō、　dàn　yuàn　wǒ　dǒng。",
		native: "I don’t know much about biomechanics, I wish I did.",
		words: [ '我', '对', '生物', '机械', '所', '懂', '不', '多', '但', '愿', '我', '懂' ],
		quizWords: [ '所', '机械', '生物' ]
	},
	{
		target: "如果不尽快找出原因。",
		alt: "Rúguǒ　bù　jìn　kuài　zhǎo　chū　yuányīn。",
		native: "If the reason is not found out soon.",
		words: [ '如果', '不', '尽', '快', '找', '出', '原因' ],
		quizWords: [ '如果', '尽' ]
	},
	{
		target: "佩莉丝就活不长了。",
		alt: "pèilìsī　jiùhuó　bù　cháng　le。",
		native: "Peris will not live long.",
		words: [ '佩莉丝', '就活', '不', '长', '了' ],
		quizWords: [ '长' ]
	},
	{
		target: "我们不能让这发生。",
		alt: "Wǒmen　bùnéng　ràng　zhè　fāshēng。",
		native: "We can\'t let this happen.",
		words: [ '我们', '不能', '让', '这', '发生' ],
		quizWords: [ '不能', '发生', '让' ]
	},
	{
		target: "他强吗?",
		alt: "Tā　qiáng　ma？",
		native: "Is he strong?",
		words: [ '他', '强', '吗' ],
		quizWords: [ '强' ]
	},
	{
		target: "谁?",
		alt: "Shéi？",
		native: "who?",
		words: [ '谁' ],
		quizSentence: true
	},
	{
		target: "你的敌手。",
		alt: "Nǐ　de　díshǒu。",
		native: "your adversary.",
		words: [ '你', '的', '敌手' ],
		quizWords: [ '敌手' ]
	},
	{
		target: "泰里尔博士。",
		alt: "tàilǐěr　bóshì。",
		native: "Dr Tyrell.",
		words: [ '泰里尔', '博士' ],
		quizWords: [ '博士' ]
	},
	{
		target: "下棋我只赢过他一次。",
		alt: "Xià　qí　wǒ　zhǐ　yíng　guò　tā　yīcì。",
		native: "I only beat him once in chess.",
		words: [ '下', '棋', '我', '只', '赢', '过', '他', '一次' ],
		quizWords: [ '棋', '只', '赢', '一次' ]
	},
	{
		target: "他是天才。",
		alt: "Tā　shì　tiāncái。",
		native: "He is a genius.",
		words: [ '他', '是', '天才' ],
		quizWords: [ '天才' ]
	},
	{
		target: "他设计你。",
		alt: "Tā　shèjì　nǐ。",
		native: "He designed you.",
		words: [ '他', '设计', '你' ],
		quizSentence: true
	},
	{
		target: "或许他能够帮忙。",
		alt: "Huòxǔ　tā　nénggòu　bāngmáng。",
		native: "Maybe he can help.",
		words: [ '或许', '他', '能够', '帮忙' ],
		quizWords: [ '能够' ]
	},
	{
		target: "我会乐意向他提的，真的。",
		alt: "Wǒ　huì　lè　yìxiàng　tā　tí　de、　zhēn　de。",
		native: "I would be happy to mention it to him, really.",
		words: [ '我', '会', '乐', '意向', '他', '提', '的', '真', '的' ],
		quizWords: [ '意向', '提', '乐' ]
	},
	{
		target: "最好我亲自跟他谈。",
		alt: "Zuì　hǎo　wǒ　qīnzì　gēn　tā　tán。",
		native: "It’s best if I talk to him in person.",
		words: [ '最', '好', '我', '亲自', '跟', '他', '谈' ],
		quizWords: [ '谈', '亲自' ]
	},
	{
		target: "我知道要见他很难。",
		alt: "Wǒ　zhīdào　yào　jiàn　tā　hěn　nán。",
		native: "I know it’s hard to meet him.",
		words: [ '我', '知道', '要', '见', '他', '很', '难' ],
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
		target: "很难。",
		alt: "Hěn　nán。",
		native: "It’s hard.",
		words: [ '很', '难' ],
		quizSentence: true
	},
	{
		target: "你愿帮我们吗?",
		alt: "Nǐ　yuàn　bāng　wǒmen　ma？",
		native: "Will you help us?",
		words: [ '你', '愿', '帮', '我们', '吗' ],
		quizSentence: true
	},
	{
		target: "我不能。",
		alt: "Wǒ　bùnéng。",
		native: "I can not.",
		words: [ '我', '不能' ],
		quizSentence: true
	},
	{
		target: "我们需要你，赛巴斯迪安。",
		alt: "Wǒmen　xūyào　nǐ、　sài　bā　sī　dí　ān。",
		native: "We need you, Sebastian.",
		words: [ '我们', '需要', '你', '赛', '巴', '斯', '迪', '安' ],
		quizSentence: true
	},
	{
		target: "你是我们仅有的好朋友。",
		alt: "Nǐ　shì　wǒmen　jǐn　yǒu　de　hǎo　péngyǒu。",
		native: "You are the only good friend we have.",
		words: [ '你', '是', '我们', '仅', '有', '的', '好', '朋友' ],
		quizWords: [ '仅' ]
	},
	{
		target: "真高兴你找到了我们。",
		alt: "Zhēn　gāoxìng　nǐ　zhǎodào　le　wǒmen。",
		native: "So glad you found us.",
		words: [ '真', '高兴', '你', '找到', '了', '我们' ],
		quizWords: [ '高兴', '找到' ]
	},
	{
		target: "我相信这个世界上再没有其他一个人类 会帮助我们了。",
		alt: "Wǒ　xiāngxìn　zhège　shìjiè　shàng　zài　méiyǒu　qítā　yīgè　rénlèi　huì　bāngzhù　wǒmen　le。",
		native: "I believe there is no other human being in this world who will help us.",
		words: [ '我', '相信', '这个', '世界', '上', '再', '没有', '其他', '一个', '人类', '会', '帮助', '我们', '了' ],
		quizWords: [ '相信', '帮助' ]
	}
];