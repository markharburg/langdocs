const gLang = 'zh';
const gBook = 'little.prince';
const gChap = '21';
const gMode = 'zh';
const gSpeed = '175';

const slideData =
[
	{
		target: "就在这当儿，跑来了一只狐狸。",
		alt: "jiù zài zhè dāng er pǎo láile yī zhǐ húlí.",
		native: "Just then a fox came running.",
		words: [ '就', '在', '这', '当', '儿', '跑', '来了', '一', '只', '狐狸' ]
	},
	{
		target: "你好，狐狸说。你好，小王子很有礼貌地回答道。",
		alt: "nǐ hǎo húlí shuō nǐ hǎo xiǎo wángzǐ hěn yǒu lǐmào de huídá dào.",
		native: "Hello, said the fox. Hello, the little prince replied politely.",
		words: [ '你', '好', '狐狸', '说', '你', '好', '小', '王子', '很', '有', '礼貌', '地', '回答', '道' ]
	},
	{
		target: "他转过身来，但什么也没有看到。我在这儿，在苹果树下，",
		alt: "tā zhuǎnguò shēn lái dàn shénme yě méiyǒu kàn dào wǒ zài zhè\'er zài píngguǒ shù xià,",
		native: "He turned around but saw nothing. I am here, under the apple tree,",
		words: [ '他', '转', '过', '身', '来', '但', '什么', '也', '没有', '看', '到', '我', '在', '这', '儿', '在', '苹果', '树', '下' ]
	},
	{
		target: "那声音说。你是谁？小王子说。",
		alt: "nà shēngyīn shuō nǐ shì shéi xiǎo wángzǐ shuō.",
		native: "the voice said. \"Who are you?\" said the little prince.",
		words: [ '那', '声音', '说', '你', '是', '谁', '小', '王子', '说' ]
	},
	{
		target: "你很漂亮。我是一只狐狸，狐狸说。",
		alt: "nǐ hěn piàoliang wǒ shì yī zhǐ húlí húlí shuō.",
		native: "\"You are very beautiful. I am a fox,\" said the fox.",
		words: [ '你', '很', '漂亮', '我', '是', '一', '只', '狐狸', '狐狸', '说' ]
	},
	{
		target: "来和我一起玩吧，小王子建议道，我很苦恼。",
		alt: "lái hé wǒ yīqǐ wán ba xiǎo wángzǐ jiànyì dào wǒ hěn kǔ nǎo.",
		native: "\"Come and play with me,\" suggested the little prince. \"I am very distressed...\"",
		words: [ '来', '和', '我', '一起', '玩', '吧', '小', '王子', '建议', '道', '我', '很', '苦', '恼' ]
	},
	{
		target: "我不能和你一起玩，狐狸说，我还没有被驯服呢。",
		alt: "wǒ bùnéng hé nǐ yīqǐ wán húlí shuō wǒ hái méiyǒu bèi xùnfú ne.",
		native: "\"I cannot play with you,\" said the fox. \"I am not tamed yet.\"",
		words: [ '我', '不能', '和', '你', '一起', '玩', '狐狸', '说', '我', '还', '没有', '被', '驯服', '呢' ]
	},
	{
		target: "啊，真对不起，小王子说，思索了一会儿。",
		alt: "a zhēn duìbùqǐ xiǎo wángzǐ shuō sīsuǒle yīhuǐ\'er.",
		native: "\"Oh, I\'m so sorry,\" the little prince said, thinking for a moment.",
		words: [ '啊', '真', '对不起', '小', '王子', '说', '思', '索', '了', '一会', '儿' ]
	},
	{
		target: "他又说道，什么叫驯服呀？你不是此地人，",
		alt: "tā yòu shuōdao shénme jiào xùnfú ya nǐ bùshì cǐdì rén,",
		native: "He then added, \"What do you mean by \'tamed\'?\" \"You\'re not from here,\"",
		words: [ '他', '又', '说道', '什么', '叫', '驯服', '呀', '你', '不是', '此地', '人' ]
	},
	{
		target: "狐狸说，你来寻找什么？我来找人，",
		alt: "húlí shuō nǐ lái xúnzhǎo shénme wǒ lái zhǎo rén,",
		native: "the  fox said, \"What are you looking for?\" \"I am looking for people.\"",
		words: [ '狐狸', '说', '你', '来', '寻找', '什么', '我', '来', '找', '人' ]
	},
	{
		target: "小王子说，什么叫驯服呢？",
		alt: "xiǎo wángzǐ shuō shénme jiào xùnfú ne.",
		native: "the little prince said, \"What do you mean by tamed? People?\"",
		words: [ '小', '王子', '说', '什么', '叫', '驯服', '呢' ]
	},
	{
		target: "人，狐狸说，他们有枪，他们还打猎。",
		alt: "rén húlí shuō tāmen yǒu qiāng tāmen hái dǎliè.",
		native: "\"Men\", the fox said, \"They have guns and they hunt.\"",
		words: [ '人', '狐狸', '说', '他们', '有', '枪', '他们', '还', '打猎' ]
	},
	{
		target: "这真碍事，他们唯一的可取之处就是他们也养鸡。",
		alt: "zhè zhēn àishì tāmen wéiyī de kěqǔ zhī chù jiùshì tāmen yě yǎng jī.",
		native: "\"That is a nuisance. Their only saving grace is that they also raise chickens.\"",
		words: [ '这', '真', '碍事', '他们', '唯一', '的', '可取', '之', '处', '就是', '他们', '也', '养', '鸡' ]
	},
	{
		target: "你是来寻找鸡的吗，不，小王子说，",
		alt: "nǐ shì lái xúnzhǎo jī de ma bù xiǎo wángzǐ shuō,",
		native: "\"Are you looking for chickens?\" \"No\", said the little prince,",
		words: [ '你', '是', '来', '寻找', '鸡', '的', '吗', '不', '小', '王子', '说' ]
	},
	{
		target: "我是来找朋友的。什么叫驯服呢？",
		alt: "wǒ shì lái zhǎo péngyǒu de shénme jiào xùnfú ne?",
		native: "I\'m here to find a friend. What does taming mean?",
		words: [ '我', '是', '来', '找', '朋友', '的', '什么', '叫', '驯服', '呢' ]
	},
	{
		target: "这是已经早就被人遗忘了的事情，狐狸说，",
		alt: "zhè shì yǐjīng zǎo jiù bèi rén yíwàngle de shìqíng húlí shuō.",
		native: "This is a matter that has already long been forgotten by people, said the fox,",
		words: [ '这', '是', '已经', '早', '就', '被', '人', '遗', '忘了', '的', '事情', '狐狸', '说' ]
	},
	{
		target: "它的意思就是，建立联系。建立联系？",
		alt: "tā de yìsi jiùshì jiànlì liánxì jiànlì liánxì.",
		native: "it means to establish a connection. Establish a connection?",
		words: [ '它', '的', '意思', '就是', '建立', '联系', '建立', '联系' ]
	},
	{
		target: "一点不错，狐狸说，对我来说，",
		alt: "yīdiǎn bùcuò húlí shuō duì wǒ lái shuō,",
		native: "That\'s right, said the fox. According to me,",
		words: [ '一点', '不错', '狐狸', '说', '对', '我', '来', '说' ]
	},
	{
		target: "你还只是一个小男孩，就像其他千万个小男孩一样。",
		alt: "nǐ hái zhǐshì yīgè xiǎo nánhái jiù xiàng qítā qiān wàn gè xiǎo nánhái yīyàng.",
		native: "you are just a little boy, like a million other little boys.",
		words: [ '你', '还', '只是', '一个', '小', '男孩', '就', '像', '其他', '千', '万', '个', '小', '男孩', '一样' ]
	},
	{
		target: "我不需要你，你也同样用不着我。",
		alt: "wǒ bù xūyào nǐ nǐ yě tóngyàng yòng bùzháo wǒ.",
		native: "I don\'t need you, and you don\'t need me either.",
		words: [ '我', '不', '需要', '你', '你', '也', '同样', '用', '不着', '我' ]
	},
	{
		target: "对你来说，我也不过是一只狐狸，和其他千万只狐狸一样。",
		alt: "duì nǐ lái shuō wǒ yě bùguò shì yī zhǐ húlí hé qítā qiān wàn zhǐ húlí yīyàng.",
		native: "To you, I am just a fox, like a million other foxes.",
		words: [ '对', '你', '来', '说', '我', '也', '不过', '是', '一', '只', '狐狸', '和', '其他', '千', '万', '只', '狐狸', '一样' ]
	},
	{
		target: "但是，如果你驯服了我，我们就互相不可缺少了。",
		alt: "dànshì rúguǒ nǐ xùnfúle wǒ wǒmen jiù hùxiāng bùkě quēshǎole.",
		native: "But if you tame me, we will be indispensable to each other.",
		words: [ '但是', '如果', '你', '驯', '服', '了', '我', '我们', '就', '互相', '不可', '缺', '少', '了' ]
	},
	{
		target: "对我来说，你就是世界上唯一的了，我对你来说，",
		alt: "duì wǒ lái shuō nǐ jiùshì shìjiè shàng wéiyī dele wǒ duì nǐ lái shuō,",
		native: "To me, you are unique in the world, I, to you,",
		words: [ '对', '我', '来', '说', '你', '就是', '世界', '上', '唯一', '的了', '我', '对', '你', '来', '说' ]
	},
	{
		target: "也是世界上唯一的了。我有点明白了，",
		alt: "yěshì shìjiè shàng wéi yī dele wǒ yǒudiǎn míngbáile,",
		native: "[I] am also unique in the world. I understood a little bit,",
		words: [ '也是', '世界', '上', '唯', '一', '的了', '我', '有点', '明', '白', '了' ]
	},
	{
		target: "小王子说，有一朵花，我想，她把我驯服了。",
		alt: "xiǎo wángzǐ shuō yǒu yī duǒ huā wǒ xiǎng tā bǎ wǒ xùnfúle.",
		native: "The little prince said, There is a flower... I think she tamed me...",
		words: [ '小', '王子', '说', '有', '一', '朵', '花', '我', '想', '她', '把', '我', '驯', '服', '了' ]
	},
	{
		target: "这是可能的，狐狸说，世界上什么样的事都可能看到。",
		alt: "zhè shì kěnéng de húlí shuō shìjiè shàng shénme yàng de shì dōu kěnéng kàn dào.",
		native: "It\'s possible, said the fox. You can see anything in the world...",
		words: [ '这', '是', '可能', '的', '狐狸', '说', '世界', '上', '什么', '样', '的', '事', '都', '可能', '看', '到' ]
	},
	{
		target: "啊，这不是在地球上的事，小王子说。",
		alt: "a zhè bùshì zài dìqiú shàng de shì xiǎo wángzǐ shuō.",
		native: "Ah, this is not something that happened on Earth, said the little prince.",
		words: [ '啊', '这', '不是', '在', '地球', '上', '的', '事', '小', '王子', '说' ]
	},
	{
		target: "狐狸感到十分蹊跷，在另一个星球上？",
		alt: "húlí gǎndào shífēn qīqiāo zài lìng yīgè xīngqiú shàng?",
		native: "The fox felt very strange, On another planet?",
		words: [ '狐狸', '感到', '十分', '蹊跷', '在', '另', '一个', '星球', '上' ]
	},
	{
		target: "是的。在那个星球上，有猎人吗？",
		alt: "shì de zài nàgè xīngqiú shàng yǒu lièrén ma?",
		native: "Yes. On that planet, are there hunters?",
		words: [ '是', '的', '在', '那个', '星球', '上', '有', '猎人', '吗' ]
	},
	{
		target: "没有。这很有意思，那么，有鸡吗？",
		alt: "méiyǒu zhè hěn yǒuyìsi nàme yǒu jī ma?",
		native: "No. That\'s interesting, so are there chickens?",
		words: [ '没有', '这', '很', '有意思', '那么', '有', '鸡', '吗' ]
	},
	{
		target: "没有。没有十全十美的，狐狸叹息地说道。",
		alt: "méiyǒu méiyǒushíquánshíměi de húlí tànxí de shuōdao.",
		native: "No, there are no perfect ones, sighed the fox (said sighingly).",
		words: [ '没有', '没有', '十全十美', '的', '狐狸', '叹息', '地', '说道' ]
	},
	{
		target: "可是，狐狸又把话题拉回来，我的生活很单调。",
		alt: "kěshì húlí yòu bǎ huàtí lā huílái wǒ de shēnghuó hěn dāndiào.",
		native: "But the fox brought the subject back. My life is very monotonous.",
		words: [ '可是', '狐狸', '又', '把', '话题', '拉', '回来', '我', '的', '生活', '很', '单调' ]
	},
	{
		target: "我捕捉鸡，而人又捕捉我，所有的鸡全都一样。",
		alt: "wǒ bǔzhuō jī ér rén yòu bǔzhuō wǒ suǒyǒu de jī quándōu yīyàng.",
		native: "I catch chickens and people catch me. All the chickens are the same.",
		words: [ '我', '捕捉', '鸡', '而', '人', '又', '捕捉', '我', '所有', '的', '鸡', '全都', '一样' ]
	},
	{
		target: "所有的人也全都一样，因此，我感到有些厌烦了。",
		alt: "suǒyǒu de rén yě quándōu yīyàng yīncǐ wǒ gǎndào yǒuxiē yànfánle.",
		native: "All the people are the same. So I feel a little bored.",
		words: [ '所有', '的', '人', '也', '全都', '一样', '因此', '我', '感到', '有些', '厌烦了' ]
	},
	{
		target: "但是，如果你要是驯服了我，我的生活就一定会是欢快的。",
		alt: "dànshì rúguǒ nǐ yàoshi xùnfúle wǒ wǒ de shēnghuó jiù yīdìng huì shì huānkuài de.",
		native: "But if supposing you tamed me, my life will definitely be happy.",
		words: [ '但是', '如果', '你', '要是', '驯', '服', '了', '我', '我', '的', '生活', '就', '一定', '会', '是', '欢快', '的' ]
	},
	{
		target: "我会辨认出一种与众不同的脚步声。",
		alt: "wǒ huì biànrèn chū yī zhǒng yǔ zhòng bùtóng de jiǎobù shēng.",
		native: "I will recognize a distinct kind of footstep (sound).",
		words: [ '我', '会', '辨认', '出', '一', '种', '与', '众', '不同', '的', '脚步', '声' ]
	},
	{
		target: "其他的脚步声会使我躲到地下去。",
		alt: "qítā de jiǎobù shēng huì shǐ wǒ duǒ dào dì xiàqù.",
		native: "Other footsteps will make me hide underground.",
		words: [ '其他', '的', '脚步', '声', '会', '使', '我', '躲', '到', '地', '下去' ]
	},
	{
		target: "而你的脚步声就会象音乐一样让我从洞里走出来。",
		alt: "ér nǐ de jiǎobù shēng jiù huì xiàng yīnyuè yīyàng ràng wǒ cóng dòng lǐ zǒu chūlái.",
		native: "But your footsteps will be like music that will bring me out of my cave.",
		words: [ '而', '你', '的', '脚步', '声', '就', '会', '象', '音乐', '一样', '让', '我', '从', '洞', '里', '走', '出来' ]
	},
	{
		target: "再说，你看，你看到那边的麦田没有？",
		alt: "zàishuō nǐ kàn nǐ kàn dào nà biān de màitián méiyǒu?",
		native: "Besides, look, do you not see the wheat field over there?",
		words: [ '再说', '你', '看', '你', '看', '到', '那', '边', '的', '麦', '田', '没有' ]
	},
	{
		target: "我不吃面包，麦子对我来说，一点用也没有。",
		alt: "wǒ bù chī miànbāo màizǐ duì wǒ lái shuō yīdiǎn yòng yě méiyǒu.",
		native: "I don\'t eat bread. Wheat is of no use to me.",
		words: [ '我', '不', '吃', '面包', '麦子', '对', '我', '来', '说', '一点', '用', '也', '没有' ],
		quizSentence: true
	},
	{
		target: "我对麦田无动于衷，而这，真使人扫兴。",
		alt: "wǒ duì màitián wúdòngyúzhōng ér zhè zhēn shǐ rén sǎoxìng.",
		native: "I am indifferent to the wheat field, and this is really a disappointment (really makes people disappointed?).",
		words: [ '我', '对', '麦', '田', '无动于衷', '而', '这', '真', '使', '人', '扫兴' ]
	},
	{
		target: "但是，你有着金黄色的头发，那么，一旦你驯服了我，",
		alt: "dànshì nǐ yǒuzhe jīn huángsè de tóufǎ nàme yīdàn nǐ xùnfúle wǒ,",
		native: "But you have golden hair, so Once you have tamed me,",
		words: [ '但是', '你', '有着', '金', '黄色', '的', '头发', '那么', '一旦', '你', '驯', '服', '了', '我' ]
	},
	{
		target: "这就会十分美妙，麦子，是金黄色的。",
		alt: "zhè jiù huì shífēn měimiào màizǐ shì jīn huángsè de.",
		native: "It will be wonderful. The wheat is golden.",
		words: [ '这', '就', '会', '十分', '美妙', '麦子', '是', '金', '黄色', '的' ]
	},
	{
		target: "它就会使我想起你，而且，我甚至会喜欢那风吹麦浪的声音。",
		alt: "tā jiù huì shǐ wǒ xiǎngqǐ nǐ érqiě wǒ shènzhì huì xǐhuān nà fēng chuī màilàng de shēngyīn.",
		native: "It will remind me of you, and I shall even love that sound of the wind in the waves of wheat…",
		words: [ '它', '就', '会', '使', '我', '想起', '你', '而且', '我', '甚至', '会', '喜欢', '那', '风', '吹', '麦', '浪', '的', '声音' ],
		quizSentence: true
	},
	{
		target: "狐狸沉默不语，久久地看着小王子，请你驯服我吧，",
		alt: "húlí chénmò bù yǔ jiǔjiǔ de kànzhe xiǎo wángzǐ qǐng nǐ xùnfú wǒ ba,",
		native: "The fox remained silent and looked at the little prince for a long time. Please tame me,",
		words: [ '狐狸', '沉默', '不', '语', '久久', '地', '看着', '小', '王子', '请', '你', '驯服', '我', '吧' ]
	},
	{
		target: "他说。我是很愿意的，小王子回答道，",
		alt: "tā shuō wǒ shì hěn yuànyì de xiǎo wángzǐ huídá dào,",
		native: "he said. I\'m very willing to, the little prince replied,",
		words: [ '他', '说', '我', '是', '很', '愿意', '的', '小', '王子', '回答', '道' ]
	},
	{
		target: "可我的时间不多了，我还要去寻找朋友，还有许多事物要了解。",
		alt: "kě wǒ de shíjiān bù duōle wǒ hái yào qù xúnzhǎo péngyǒu hái yǒu xǔduō shìwù yào liǎojiě.",
		native: "but my time is not long. I still have friends to find, still have many things to learn.",
		words: [ '可', '我', '的', '时间', '不', '多', '了', '我', '还', '要', '去', '寻找', '朋友', '还', '有', '许多', '事物', '要', '了解' ]
	},
	{
		target: "只有被驯服了的事物，才会被了解，狐狸说。",
		alt: "zhǐyǒu bèi xùnfúle de shìwù cái huì bèi liǎojiě húlí shuō.",
		native: "Only things that are tamed can then  be understood, said the fox.",
		words: [ '只有', '被', '驯', '服', '了', '的', '事物', '才', '会', '被', '了解', '狐狸', '说' ]
	},
	{
		target: "人不会再有时间去了解任何东西的。",
		alt: "rén bù huì zài yǒu shíjiān qù liǎojiě rènhé dōngxī de.",
		native: "People no longer have time to learn anything.",
		words: [ '人', '不', '会', '再', '有', '时间', '去', '了解', '任何', '东西', '的' ]
	},
	{
		target: "他们总是到商人那里去购买现成的东西。",
		alt: "tāmen zǒng shì dào shāngrén nàlǐ qù gòumǎi xiànchéng de dōngxī.",
		native: "They always go to merchants to buy things ready-made.",
		words: [ '他们', '总', '是', '到', '商人', '那里', '去', '购买', '现成', '的', '东西' ]
	},
	{
		target: "因为世界上还没有购买朋友的商店，所以人也就没有朋友。",
		alt: "yīnwèi shìjiè shàng hái méiyǒu gòumǎi péngyǒu de shāngdiàn suǒyǐ rén yě jiù méiyǒu péngyǒu.",
		native: "As there are no shops in the world where you can buy friends, people have no friends.",
		words: [ '因为', '世界', '上', '还', '没有', '购买', '朋友', '的', '商店', '所以', '人', '也', '就', '没有', '朋友' ]
	},
	{
		target: "如果你想要一个朋友，那就驯服我吧。",
		alt: "rúguǒ nǐ xiǎng yào yīgè péngyǒu nà jiù xùnfú wǒ ba.",
		native: "If you want a friend, tame me.",
		words: [ '如果', '你', '想', '要', '一个', '朋友', '那', '就', '驯服', '我', '吧' ]
	},
	{
		target: "那么应当做些什么呢？小王子说。",
		alt: "nàme yīng dàng zuò xiē shénme ne xiǎo wángzǐ shuō.",
		native: "So what should be done? The little prince said.",
		words: [ '那么', '应', '当', '做', '些', '什么', '呢', '小', '王子', '说' ]
	},
	{
		target: "应当非常耐心，狐狸回答道。",
		alt: "yīngdāng fēicháng nàixīn húlí huídá dào.",
		native: "You should be very patient, replied the fox.",
		words: [ '应当', '非常', '耐心', '狐狸', '回答', '道' ]
	},
	{
		target: "开始你就这样坐在草丛中，坐得离我稍微远些。",
		alt: "kāishǐ nǐ jiù zhèyàng zuò zài cǎocóng zhōng zuò dé lí wǒ shāowéi yuǎn xiē.",
		native: "First, you just sit like this in the grass, sit a little distance away from me.",
		words: [ '开始', '你', '就', '这样', '坐', '在', '草丛', '中', '坐', '得', '离', '我', '稍微', '远', '些' ]
	},
	{
		target: "我用眼角瞅着你。你什么也不要说，话语是误会的根源。",
		alt: "wǒ yòng yǎnjiǎo chǒuzhe nǐ nǐ shénme yě bùyào shuō huàyǔ shì wùhuì de gēnyuán.",
		native: "I look at you out of the corner of my eye. You must not say anything. Words are the source of misunderstandings.",
		words: [ '我', '用', '眼角', '瞅', '着', '你', '你', '什么', '也', '不要', '说', '话语', '是', '误会', '的', '根源' ]
	},
	{
		target: "但是，每天，你坐得靠我更近些。",
		alt: "dànshì měitiān nǐ zuò dé kào wǒ gèng jìn xiē.",
		native: "But every day you sit closer to me...",
		words: [ '但是', '每天', '你', '坐', '得', '靠', '我', '更', '近', '些' ]
	},
	{
		target: "第二天，小王子又来了。最好还是在原来的那个时间来，",
		alt: "dì èr tiān xiǎo wángzǐ yòu láile zuì hào huán shì zài yuánlái dì nàgè shíjiān lái,",
		native: "The next day the little prince comes again. It would be better to come at that original time as before,",
		words: [ '第', '二', '天', '小', '王子', '又', '来了', '最', '好', '还', '是', '在', '原来', '的', '那个', '时间', '来' ],
		quizSentence: true
	},
	{
		target: "狐狸说道，比如说，你下午四点钟来。",
		alt: "húlí shuōdao bǐrú shuō nǐ xiàwǔ sì diǎn zhōng lái.",
		native: "The fox said, \"Say for example, you come at four o\'clock in the afternoon...",
		words: [ '狐狸', '说道', '比如', '说', '你', '下午', '四', '点', '钟', '来' ]
	},
	{
		target: "那么从三点钟起，我就开始感到幸福。时间越临近，",
		alt: "nàme cóng sān diǎn zhōng qǐ wǒ jiù kāishǐ gǎndào xìngfú shíjiān yuè línjìn.",
		native: "Then from three o\'clock onward, I begin to feel happy. The closer the time gets...",
		words: [ '那么', '从', '三', '点', '钟', '起', '我', '就', '开始', '感到', '幸福', '时间', '越', '临近' ]
	},
	{
		target: "我就越感到幸福。到了四点钟的时候，我就会坐立不安。",
		alt: "wǒ jiù yuè gǎndào xìngfú dàole sì diǎn zhōng de shíhòu wǒ jiù huì zuòlìbù\'ān.",
		native: "the happier I feel. Finally at four o\'clock I become restless.",
		words: [ '我', '就', '越', '感到', '幸福', '到了', '四', '点', '钟', '的', '时候', '我', '就', '会', '坐立不安' ]
	},
	{
		target: "我就会发现幸福的代价。但是，如果你随便什么时候来，",
		alt: "wǒ jiù huì fāxiàn xìngfú de dàijià dànshì rúguǒ nǐ suíbiàn shénme shíhòu lái,",
		native: "I will discover the price of happiness. But if you come at any time...",
		words: [ '我', '就', '会', '发现', '幸福', '的', '代价', '但是', '如果', '你', '随便', '什么', '时候', '来' ]
	},
	{
		target: "我就不知道在什么时候该准备好我的心情，应当有一定的仪式。",
		alt: "wǒ jiù bù zhīdào zài shénme shíhòu gāi zhǔnbèi hǎo wǒ de xīnqíng yīngdāng yǒu yīdìng de yíshì.",
		native: "I don\'t know when to have prepared my mood... There must be a certain ritual.",
		words: [ '我', '就', '不', '知道', '在', '什么', '时候', '该', '准备', '好', '我', '的', '心情', '应当', '有', '一定', '的', '仪式' ],
		quizSentence: true
	},
	{
		target: "仪式是什么？小王子问道。这也是一种早已被人忘却了的事，",
		alt: "yíshì shì shénme xiǎo wángzǐ wèn dào zhè yěshì yī zhǒng zǎoyǐ bèi rén wàngquèle de shì,",
		native: "What is a ritual? The little prince asked. This is also something that has long been forgotten.",
		words: [ '仪式', '是', '什么', '小', '王子', '问', '道', '这', '也是', '一', '种', '早已', '被', '人', '忘却', '了', '的', '事' ]
	},
	{
		target: "狐狸说，它就是使某一天与其他日子不同。",
		alt: "húlí shuō tā jiùshì shǐ mǒu yī tiān yǔ qítā rìzǐ bùtóng.",
		native: "The fox said, \"It is to make one day different from other days.\"",
		words: [ '狐狸', '说', '它', '就是', '使', '某', '一', '天', '与', '其他', '日子', '不同' ]
	},
	{
		target: "使某一时刻与其他时刻不同，比如说。",
		alt: "shǐ mǒu yī shíkè yǔ qítā shíkè bùtóng bǐrú shuō.",
		native: "To make one moment different from other moments. For example...",
		words: [ '使', '某', '一', '时刻', '与', '其他', '时刻', '不同', '比如', '说' ]
	},
	{
		target: "我的那些猎人就有一种仪式，他们每星期四都和村子里的姑娘们跳舞。",
		alt: "wǒ dì nàxiē lièrén jiù yǒu yī zhǒng yíshì tāmen měi xīngqísì dōu hé cūnzǐ lǐ de gūniángmen tiàowǔ.",
		native: "My hunters have a ritual. Every Thursday they dance with the girls in the village.",
		words: [ '我', '的', '那些', '猎人', '就', '有', '一', '种', '仪式', '他们', '每', '星期四', '都', '和', '村子', '里', '的', '姑', '娘', '们', '跳舞' ]
	},
	{
		target: "于是，星期四就是一个美好的日子，我可以一直散步到葡萄园去。",
		alt: "yúshì xīngqísì jiùshì yīgè měihǎo de rìzǐ wǒ kěyǐ yīzhí sànbù dào pútáo yuán qù.",
		native: "So Thursday is a beautiful day. I could walk all the way to the vineyard.",
		words: [ '于是', '星期四', '就是', '一个', '美好', '的', '日子', '我', '可以', '一直', '散步', '到', '葡萄', '园', '去' ]
	},
	{
		target: "如果猎人们什么时候都跳舞，天天又全都一样，",
		alt: "rúguǒ lièrénmen shénme shíhòu dōu tiàowǔ tiāntiān yòu quándōu yīyàng,",
		native: "If the hunters danced all the time and every day was the same,",
		words: [ '如果', '猎', '人们', '什么', '时候', '都', '跳舞', '天天', '又', '全都', '一样' ]
	},
	{
		target: "那么我也就没有假日了，就这样。",
		alt: "nàme wǒ yě jiù méiyǒu jiàrìle jiù zhèyàng.",
		native: "then I would have no holidays either. That\'s it.",
		words: [ '那么', '我', '也', '就', '没有', '假日', '了', '就', '这样' ]
	},
	{
		target: "小王子驯服了狐狸。当出发的时刻就快要来到时，",
		alt: "xiǎo wángzǐ xùnfúle húlí dāng chūfā de shíkè jiù kuàiyào lái dào shí,",
		native: "The little prince tamed the fox. When the time for departure was approaching,",
		words: [ '小', '王子', '驯', '服', '了', '狐狸', '当', '出发', '的', '时刻', '就', '快要', '来', '到', '时' ]
	},
	{
		target: "啊，狐狸说，我一定会哭的。",
		alt: "a húlí shuō wǒ yīdìng huì kū de.",
		native: "ah, said the fox, I will surely cry.",
		words: [ '啊', '狐狸', '说', '我', '一定', '会', '哭', '的' ]
	},
	{
		target: "这是你的过错，小王子说，我本来并不想给你任何痛苦，",
		alt: "zhè shì nǐ de guòcuò xiǎo wángzǐ shuō wǒ běnlái bìng bùxiǎng gěi nǐ rènhé tòngkǔ,",
		native: "It\'s your fault, said the little prince. I of course didn\'t want to cause you any pain,",
		words: [ '这', '是', '你', '的', '过错', '小', '王子', '说', '我', '本来', '并', '不想', '给', '你', '任何', '痛苦' ]
	},
	{
		target: "可你却要我驯服你。是这样的，",
		alt: "kě nǐ què yào wǒ xùnfú nǐ shì zhèyàng de,",
		native: "but you asked me to tame you. That\'s true (it\'s like that).",
		words: [ '可', '你', '却', '要', '我', '驯服', '你', '是', '这样', '的' ]
	},
	{
		target: "狐狸说。你可就要哭了，小王子说。",
		alt: "húlí shuō nǐ kě jiù yào kūle xiǎo wángzǐ shuō.",
		native: "said the fox. You\'re going to cry, said the little prince.",
		words: [ '狐狸', '说', '你', '可', '就', '要', '哭', '了', '小', '王子', '说' ]
	},
	{
		target: "当然罗，狐狸说。那么你什么好处也没得到，",
		alt: "dāngrán luó húlí shuō nàme nǐ shénme hǎochù yě méi dédào,",
		native: "Of course, said the fox. Then you have (also/really?) not obtained what is beneficial.",
		words: [ '当然', '罗', '狐狸', '说', '那么', '你', '什么', '好处', '也', '没', '得到' ],
		quizSentence: true
	},
	{
		target: "由于麦子颜色的缘故，我还是得到了好处。",
		alt: "yóuyú màizǐ yánsè de yuángù wǒ háishì dédàole hǎochù.",
		native: "I have gained something because of the color of the wheat.",
		words: [ '由于', '麦子', '颜色', '的', '缘故', '我', '还是', '得', '到了', '好处' ]
	},
	{
		target: "狐狸说。然后，他又接着说，再去看看那些玫瑰花吧，",
		alt: "húlí shuō ránhòu tā yòu jiēzhe shuō zài qù kàn kàn nàxiē méiguī huā ba,",
		native: "said the fox. Then he went on to say, Go look at the roses again,",
		words: [ '狐狸', '说', '然后', '他', '又', '接着', '说', '再', '去', '看', '看', '那些', '玫瑰', '花', '吧' ]
	},
	{
		target: "你一定会明白，你的那朵是世界上独一无二的玫瑰。",
		alt: "nǐ yīdìng huì míngbái nǐ dì nà duǒ shì shìjiè shàng dúyīwú\'èr de méiguī.",
		native: "You will surely understand that yours is the only rose in the world.",
		words: [ '你', '一定', '会', '明白', '你', '的', '那', '朵', '是', '世界', '上', '独', '一', '无', '二', '的', '玫瑰' ]
	},
	{
		target: "你回来和我告别时，我再赠送给你一个秘密。",
		alt: "nǐ huílái hé wǒ gàobié shí wǒ zài zèngsòng gěi nǐ yīgè mìmì.",
		native: "When you come back to say goodbye to me, I will give you another secret.",
		words: [ '你', '回来', '和', '我', '告别', '时', '我', '再', '赠送', '给', '你', '一个', '秘密' ]
	},
	{
		target: "于是小王子又去看那些玫瑰，你们一点也不象我的那朵玫瑰。",
		alt: "yúshì xiǎo wángzǐ yòu qù kàn nàxiē méiguī nǐmen yīdiǎn yě bù xiàng wǒ dì nà duǒ méiguī.",
		native: "So the little prince went to look at the roses again. You are nothing like my rose.",
		words: [ '于是', '小', '王子', '又', '去', '看', '那些', '玫瑰', '你们', '一点', '也', '不', '象', '我', '的', '那', '朵', '玫瑰' ]
	},
	{
		target: "你们还什么都不是呢，小王子对她们说。",
		alt: "nǐmen hái shénme dōu bùshì ne xiǎo wángzǐ duì tāmen shuō.",
		native: "You are (all) nothing yet, the little prince said to them.",
		words: [ '你们', '还', '什么', '都', '不是', '呢', '小', '王子', '对', '她们', '说' ]
	},
	{
		target: "没有人驯服过你们，你们也没有驯服过任何人。",
		alt: "méiyǒu rén xùnfúguò nǐmen nǐmen yě méiyǒu xùnfúguò rènhé rén.",
		native: "No one has ever tamed you, and you have never tamed anyone.",
		words: [ '没有', '人', '驯', '服', '过', '你们', '你们', '也', '没有', '驯', '服', '过', '任何', '人' ]
	},
	{
		target: "你们就象我的狐狸过去那样。",
		alt: "nǐmen jiù xiàng wǒ de húlí guòqù nàyàng.",
		native: "You are just like my fox was.",
		words: [ '你们', '就', '象', '我', '的', '狐狸', '过去', '那样' ]
	},
	{
		target: "它那时只是和千万只别的狐狸一样的一只狐狸。",
		alt: "tā nà shí zhǐshì hé qiān wàn zhǐ bié de húlí yīyàng de yī zhǐ húlí.",
		native: "At that time, it was just one fox, like millions of other foxes.",
		words: [ '它', '那', '时', '只是', '和', '千', '万', '只', '别', '的', '狐狸', '一样', '的', '一', '只', '狐狸' ]
	},
	{
		target: "但是，我现在已经把它当成了我的朋友，",
		alt: "dànshì wǒ xiànzài yǐjīng bǎ tā dàngchéngle wǒ de péngyǒu,",
		native: "But now I have made it my friend,",
		words: [ '但是', '我', '现在', '已经', '把', '它', '当成', '了', '我', '的', '朋友' ]
	},
	{
		target: "于是它现在就是世界上独一无二的了。",
		alt: "yúshì tā xiànzài jiùshì shìjiè shàng dúyīwú\'èr dele.",
		native: "and it is now unique in the world.",
		words: [ '于是', '它', '现在', '就是', '世界', '上', '独', '一', '无', '二', '的了' ]
	},
	{
		target: "这时，那些玫瑰花显得十分难堪。",
		alt: "zhè shí nàxiē méiguī huā xiǎndé shífēn nánkān.",
		native: "Then, the roses appeared very embarrassed.",
		words: [ '这', '时', '那些', '玫瑰', '花', '显得', '十分', '难堪' ]
	},
	{
		target: "你们很美，但你们是空虚的，小王子仍然在对她们说。",
		alt: "nǐmen hěn měi dàn nǐmen shì kōngxū de xiǎo wángzǐ réngrán zài duì tāmen shuō.",
		native: "You are beautiful, but you are empty. The little prince was still saying to them.",
		words: [ '你们', '很', '美', '但', '你们', '是', '空虚', '的', '小', '王子', '仍然', '在', '对', '她们', '说' ]
	},
	{
		target: "没有人能为你们去死。当然罗，我的那朵玫瑰花，",
		alt: "méiyǒu rén néng wéi nǐmen qù sǐ dāngrán luó wǒ dì nà duǒ méiguī huā,",
		native: "No one could die for you. Of course, my rose,",
		words: [ '没有', '人', '能', '为', '你们', '去', '死', '当然', '罗', '我', '的', '那', '朵', '玫瑰', '花' ]
	},
	{
		target: "一个普通的过路人以为她和你们一样，",
		alt: "yīgè pǔtōng de guòlù rén yǐwéi tā hé nǐmen yīyàng,",
		native: "An ordinary passerby would think she was just like you,",
		words: [ '一个', '普通', '的', '过', '路', '人', '以为', '她', '和', '你们', '一样' ]
	},
	{
		target: "可是，她单独一朵就比你们全体更重要。",
		alt: "kěshì tā dāndú yī duǒ jiù bǐ nǐmen quántǐ gèng zhòngyào.",
		native: "but she alone is more important than all of you.",
		words: [ '可是', '她', '单独', '一', '朵', '就', '比', '你们', '全体', '更', '重要' ],
		quizSentence: true
	},
	{
		target: "因为她是我浇灌的，因为她是我放在花罩中的。",
		alt: "yīnwèi tā shì wǒ jiāoguàn de yīnwèi tā shì wǒ fàng zài huā zhào zhōng de.",
		native: "Because she is [the one] I watered. Because she is [the one] I put under the flower canopy.",
		words: [ '因为', '她', '是', '我', '浇灌', '的', '因为', '她', '是', '我', '放', '在', '花', '罩', '中', '的' ],
		quizSentence: true
	},
	{
		target: "因为她是我用屏风保护起来的。",
		alt: "yīnwèi tā shì wǒ yòng píngfēng bǎohù qǐlái de.",
		native: "Because I protected her with the screen.",
		words: [ '因为', '她', '是', '我', '用', '屏风', '保护', '起来', '的' ]
	},
	{
		target: "因为她身上的毛虫（除了留下两三只为了变蝴蝶而外）是我除灭的。",
		alt: "yīnwèi tā shēnshang de máochóng (chúle liú xià liǎng sān zhī wèile biàn húdié ér wài) shì wǒ chú miè de.",
		native: "Because the caterpillars on her (besides leaving two or three for changing to butterflies outside) I got rid of.",
		words: [ '因为', '她', '身上', '的', '毛虫', '除了', '留', '下', '两', '三', '只', '为了', '变', '蝴蝶', '而', '外', '是', '我', '除', '灭', '的' ],
		quizSentence: true
	},
	{
		target: "因为我倾听过她的怨艾和自诩，甚至有时我聆听着她的沉默。",
		alt: "yīnwèi wǒ qīngtīngguò tā de yuànyì hé zì xǔ shènzhì yǒu shí wǒ língtīngzhe tā de chénmò.",
		native: "Because I\'ve listened to her complaints and boasts, even sometimes I\'m listening to silence.",
		words: [ '因为', '我', '倾听', '过', '她', '的', '怨艾', '和', '自', '诩', '甚至', '有', '时', '我', '聆', '听', '着', '她', '的', '沉默' ],
		quizSentence: true
	},
	{
		target: "因为她是我的玫瑰，他又回到了狐狸身边。",
		alt: "yīnwèi tā shì wǒ de méiguī tā yòu huí dàole húlí shēnbiān.",
		native: "Because she is my rose. He returned to the fox.",
		words: [ '因为', '她', '是', '我', '的', '玫瑰', '他', '又', '回', '到了', '狐狸', '身边' ]
	},
	{
		target: "再见了，小王子说道，再见，狐狸说。",
		alt: "zàijiànle xiǎo wángzǐ shuōdao zàijiàn húlí shuō.",
		native: "Goodbye, said the little prince. Goodbye, said the fox.",
		words: [ '再', '见', '了', '小', '王子', '说道', '再见', '狐狸', '说' ]
	},
	{
		target: "喏，这就是我的秘密，很简单，只有用心才能看得清。",
		alt: "nuò zhè jiùshì wǒ de mìmì hěn jiǎndān zhǐyǒu yòngxīn cái néng kàn dé qīng.",
		native: "Here, this is my secret. It is very simple, and can only be seen with the heart clearly.",
		words: [ '喏', '这', '就是', '我', '的', '秘密', '很', '简单', '只有', '用心', '才', '能', '看', '得', '清' ],
		quizSentence: true
	},
	{
		target: "实质性的东西，用眼睛是看不见的。实质性的东西，",
		alt: "shí zhí xìng de dōngxī yòng yǎnjīng shì kàn bùjiàn de shí zhí xìng de dōngxī,",
		native: "The essential things are invisible to the eyes. The essential things,",
		words: [ '实', '质', '性', '的', '东西', '用', '眼睛', '是', '看', '不见', '的', '实', '质', '性', '的', '东西' ],
		quizSentence: true
	},
	{
		target: "用眼睛是看不见的，小王子重复着这句话。",
		alt: "yòng yǎnjīng shì kàn bùjiàn de xiǎo wángzǐ chóngfùzhe zhè jù huà.",
		native: "are invisible to the eyes. The little prince repeated this.",
		words: [ '用', '眼睛', '是', '看', '不见', '的', '小', '王子', '重', '复', '着', '这', '句', '话' ]
	},
	{
		target: "以便能把它记在心间。正因为你为你的玫瑰花费了时间，",
		alt: "yǐbiàn néng bǎ tā jì zài xīnjiān zhèng yīnwèi nǐ wèi nǐ de méiguī huāfèile shíjiān,",
		native: "So that he could remember it in his heart. It is just because you have spent time on your rose,",
		words: [ '以便', '能', '把', '它', '记', '在', '心', '间', '正', '因为', '你', '为', '你', '的', '玫瑰', '花', '费', '了', '时间' ],
		quizSentence: true
	},
	{
		target: "这才使你的玫瑰变得如此重要。",
		alt: "zhè cái shǐ nǐ de méiguī biàn dé rúcǐ zhòngyào.",
		native: "(only) that is what makes your rose (become) so important.",
		words: [ '这', '才', '使', '你', '的', '玫瑰', '变', '得', '如此', '重要' ]
	},
	{
		target: "正因为你为你的玫瑰花费了时间，小王子又重复着。",
		alt: "zhèng yīnwèi nǐ wèi nǐ de méiguī huāfèile shíjiān xiǎo wángzǐ yòu chóngfùzhe.",
		native: "It is just because you have spent time on your rose... The little prince repeated.",
		words: [ '正', '因为', '你', '为', '你', '的', '玫瑰', '花', '费', '了', '时间', '小', '王子', '又', '重', '复', '着' ],
		quizSentence: true
	},
	{
		target: "要使自己记住这些。人们已经忘记了这个道理，",
		alt: "yào shǐ zìjǐ jì zhù zhèxiē rénmen yǐjīng wàngjìle zhège dàolǐ,",
		native: "To make yourself remember this. People have forgotten this reason,",
		words: [ '要', '使', '自己', '记', '住', '这些', '人们', '已经', '忘', '记', '了', '这个', '道理' ]
	},
	{
		target: "狐狸说，可是，你不应该忘记它。",
		alt: "húlí shuō kěshì nǐ bù yìng gāi wàngjì tā.",
		native: "the fox said, but you must not forget it.",
		words: [ '狐狸', '说', '可是', '你', '不', '应', '该', '忘记', '它' ]
	},
	{
		target: "你现在要对你驯服过的一切负责到底，你要对你的玫瑰负责。",
		alt: "nǐ xiànzài yào duì nǐ xùnfúguò de yīqiè fùzé dàodǐ nǐ yào duì nǐ de méiguī fùzé.",
		native: "You are now responsible to the end for everything you have tamed. You are responsible for your rose...",
		words: [ '你', '现在', '要', '对', '你', '驯', '服', '过', '的', '一切', '负责', '到底', '你', '要', '对', '你', '的', '玫瑰', '负责' ],
		quizSentence: true
	},
	{
		target: "我要对我的玫瑰负责，小王子又重复着。",
		alt: "wǒ yào duì wǒ de méiguī fùzé xiǎo wángzǐ yòu chóngfùzhe.",
		native: "I am responsible for my rose... The little prince repeated...",
		words: [ '我', '要', '对', '我', '的', '玫瑰', '负责', '小', '王子', '又', '重', '复', '着' ]
	}
];
