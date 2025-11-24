const gLang = 'zh';
const gBook = 'little.prince';
const gChap = '27';
const gMode = 'zh';
const gSpeed = '175';

const slideData =
[
	{
		target: "到现在，一点不错。",
		alt: "dào xiànzài yīdiǎn bùcuò.",
		native: "Until now. Exactly.",
		words: [ '到', '现在', '一点', '不错' ],
		quizSentence: true
	},
	{
		target: "已经有六年了，我还从未讲过这个故事。",
		alt: "yǐjīng yǒu liù niánle wǒ hái cóng wèi jiǎngguò zhège gùshì.",
		native: "Six years have passed... and I have never told this story.",
		words: [ '已经', '有', '六', '年', '了', '我', '还', '从', '未', '讲', '过', '这个', '故事' ],
		quizWords: [ '未' ]
	},
	{
		target: "同伴们重新见到了我，都为能看见我活着回来而高兴。",
		alt: "tóngbànmen chóngxīn jiàn dàole wǒ dōu wéi néng kànjiàn wǒ huózhe huílái ér gāoxìng.",
		native: "My companions saw me again and were happy to see me alive.",
		words: [ '同', '伴', '们', '重新', '见', '到了', '我', '都', '为', '能', '看见', '我', '活着', '回来', '而', '高兴' ],
		quizWords: [ '同', '伴' ]
	},
	{
		target: "我却很悲伤，我告诉他们，这是因为疲劳的缘故。",
		alt: "wǒ què hěn bēishāng wǒ gàosù tāmen zhè shì yīnwèi píláo de yuángù.",
		native: "I was very sad. I told them it was because of fatigue...",
		words: [ '我', '却', '很', '悲伤', '我', '告诉', '他们', '这', '是', '因为', '疲劳', '的', '缘故' ],
		quizWords: [ '悲伤', '疲劳' ]
	},
	{
		target: "现在，我稍微得到了些安慰，就是说，还没有完全平静下来。",
		alt: "xiànzài wǒ shāowéi dédàole xiē ānwèi jiùshì shuō hái méiyǒu wánquán píngjìng xiàlái.",
		native: "Now I am a little comforted, that is to say... I haven\'t completely calmed down yet.",
		words: [ '现在', '我', '稍微', '得', '到了', '些', '安慰', '就是', '说', '还', '没有', '完全', '平静', '下来' ],
		quizWords: [ '平静' ]
	},
	{
		target: "可我知道他已经回到了他的星球上，因为那天黎明，我没有再见到他的身躯。",
		alt: "kě wǒ zhīdào tā yǐjīng huí dàole tā de xīngqiú shàng yīnwèi nèitiān límíng wǒ méiyǒu zàijiàn dào tā de shēnqū.",
		native: "But I know he has returned to his planet, because I didn\'t see his body at dawn that day.",
		words: [ '可', '我', '知道', '他', '已经', '回', '到了', '他', '的', '星球', '上', '因为', '那天', '黎明', '我', '没有', '再见', '到', '他', '的', '身躯' ],
		quizWords: [ '身躯' ]
	},
	{
		target: "他的身躯并不那么重，从此，我就喜欢在夜间倾听着星星。",
		alt: "tā de shēnqū bìng bù nàme zhòng cóngcǐ wǒ jiù xǐhuān zài yèjiān qīngtīngzhe xīngxīng.",
		native: "His body was not so heavy... From then on I loved to listen to the stars at night.",
		words: [ '他', '的', '身躯', '并', '不', '那么', '重', '从此', '我', '就', '喜欢', '在', '夜间', '倾', '听', '着', '星星' ],
		quizWords: [ '夜间', '从此' ]
	},
	{
		target: "好象是倾听着五亿个铃铛，可是，现在却又发生了不寻常的事。",
		alt: "hǎo xiàng shì qīngtīngzhe wǔ yì gè língdāng kěshì xiànzài què yòu fā shēng liǎo bù xúncháng de shì.",
		native: "It was like listening to five hundred million bells... But now something unusual happened.",
		words: [ '好', '象', '是', '倾', '听', '着', '五', '亿', '个', '铃铛', '可是', '现在', '却', '又', '发', '生', '了', '不', '寻常', '的', '事' ],
		quizWords: [ '铃铛', '寻常' ]
	},
	{
		target: "我给小王子画的羊嘴套上，忘了画皮带，他再也不可能把它套在羊嘴上。",
		alt: "wǒ gěi xiǎo wángzǐ huà de yáng zuǐ tào shàng wàngle huà pídài tā zài yě bù kěnéng bǎ tā tào zài yáng zuǐ shàng.",
		native: "I drew the muzzle for the little prince and forgot to draw the belt. He would never be able to put it on the muzzle again.",
		words: [ '我', '给', '小', '王子', '画', '的', '羊', '嘴', '套', '上', '忘了', '画', '皮带', '他', '再', '也', '不', '可能', '把', '它', '套', '在', '羊', '嘴', '上' ],
		quizWords: [ '皮带' ]
	},
	{
		target: "于是，我思忖着，他的星球上发生了什么事呢。",
		alt: "yúshì wǒ sīcǔnzhe tā de xīngqiú shàng fāshēngle shénme shì ne.",
		native: "So I wondered what happened on his planet.",
		words: [ '于是', '我', '思', '忖', '着', '他', '的', '星球', '上', '发', '生', '了', '什么', '事', '呢' ],
		quizSentence: true
	},
	{
		target: "大概小羊把花吃掉了吧，有时我又对自己说，绝对不会的。",
		alt: "dàgài xiǎo yáng bǎ huā chī diàole ba yǒushí wǒ yòu duì zìjǐ shuō juéduì bù huì de.",
		native: "Maybe the lamb ate the flowers... Sometimes I told myself that it would never happen.",
		words: [ '大概', '小', '羊', '把', '花', '吃', '掉了', '吧', '有时', '我', '又', '对', '自己', '说', '绝对', '不', '会', '的' ],
		quizWords: [ '有时' ]
	},
	{
		target: "小王子每天夜里都用玻璃罩子罩住他的花，而且他会把羊看管好的。",
		alt: "xiǎo wángzǐ měitiān yèlǐ dōu yòng bōlí zhàozǐ zhào zhù tā de huā érqiě tā huì bǎ yáng kānguǎn hǎo de.",
		native: "The little prince covered his flowers with a glass cover every night and he would take good care of the lamb...",
		words: [ '小', '王子', '每天', '夜里', '都', '用', '玻璃', '罩子', '罩', '住', '他', '的', '花', '而且', '他', '会', '把', '羊', '看管', '好', '的' ],
		quizWords: [ '看管' ]
	},
	{
		target: "想到这里我就非常高兴，这时，所有的星星都在柔情地轻声笑着。",
		alt: "xiǎngdào zhèlǐ wǒ jiù fēicháng gāoxìng zhè shí suǒyǒu de xīngxīng dōu zài róuqíng de qīngshēng xiàozhe.",
		native: "I was very happy to think of this. At that moment, all the stars were laughing softly.",
		words: [ '想到', '这里', '我', '就', '非常', '高兴', '这', '时', '所有', '的', '星星', '都', '在', '柔情', '地', '轻声', '笑', '着' ],
		quizWords: [ '柔情' ]
	},
	{
		target: "忽而我又对自己说，人们有时总免不了会疏忽的，那就够戗。",
		alt: "hū\'ér wǒ yòu duì zìjǐ shuō rénmen yǒushí zǒng miǎnbule huì shūhū dì nà jiù gòuqiàng.",
		native: "Then I told myself that people are always careless sometimes. That would be enough.",
		words: [ '忽', '而', '我', '又', '对', '自己', '说', '人们', '有时', '总', '免', '不了', '会', '疏忽', '的', '那', '就', '够', '戗' ],
		quizWords: [ '免', '疏忽', '戗' ]
	},
	{
		target: "某一天晚上他忘了玻璃罩子，或者小羊夜里不声不响地跑出来。",
		alt: "mǒu yītiān wǎnshàng tā wàngle bōlí zhàozǐ huòzhě xiǎo yáng yèlǐ bù shēng bù xiǎng de pǎo chūlái.",
		native: "One night he forgot the glass cover or the lamb ran out quietly at night...",
		words: [ '某', '一', '天', '晚上', '他', '忘了', '玻璃', '罩子', '或者', '小', '羊', '夜里', '不', '声', '不', '响', '地', '跑', '出来' ],
		quizSentence: true
	},
	{
		target: "想到这里，小铃铛都变成泪珠了，这真是一个很大的奥秘。",
		alt: "xiǎngdào zhèlǐ xiǎo língdāng dōu biàn chéng lèizhūle zhè zhēnshi yīgè hěn dà de àomì.",
		native: "Thinking of this, The little bells have all turned into tears. This is a great mystery.",
		words: [ '想到', '这里', '小', '铃铛', '都', '变', '成', '泪', '珠', '了', '这', '真是', '一个', '很', '大', '的', '奥秘' ],
		quizWords: [ '泪', '珠' ]
	},
	{
		target: "对你们这些喜欢小王子的人来说，就象对于我来说一样。",
		alt: "duì nǐmen zhèxiē xǐhuān xiǎo wángzǐ de rén lái shuō jiù xiàng duìyú wǒ lái shuō yīyàng.",
		native: "For you who love the Little Prince, as for me.",
		words: [ '对', '你们', '这些', '喜欢', '小', '王子', '的', '人', '来', '说', '就', '象', '对于', '我', '来', '说', '一样' ],
		quizSentence: true
	},
	{
		target: "无论什么地方，凡是某处，如果一只羊（尽管我们并不认识它）。",
		alt: "wúlùn shénme dìfāng fánshì mǒu chù rúguǒ yī zhǐ yáng (jǐnguǎn wǒmen bìng bù rènshí tā).",
		native: "If a sheep (even though we don\'t know it)",
		words: [ '无论', '什么', '地方', '凡是', '某', '处', '如果', '一', '只', '羊', '尽管', '我们', '并', '不', '认识', '它' ],
		quizSentence: true
	},
	{
		target: "吃了一朵玫瑰花，或是没有吃掉一朵玫瑰花，那么宇宙的面貌就全然不同。",
		alt: "chīle yī duǒ méiguī huā huò shì méiyǒu chī diào yī duǒ méiguī huā nàme yǔzhòu de miànmào jiù quánrán bùtóng.",
		native: "eats a rose or doesn\'t eat a rose, the universe will look completely different.",
		words: [ '吃', '了', '一', '朵', '玫瑰', '花', '或', '是', '没有', '吃', '掉', '一', '朵', '玫瑰', '花', '那么', '宇宙', '的', '面貌', '就', '全然', '不同' ],
		quizWords: [ '面貌', '全然' ]
	},
	{
		target: "你们望着天空，你们想一想，羊究竟是吃了还是没有吃掉花。",
		alt: "nǐmen wàngzhe tiānkōng nǐmen xiǎng yī xiǎng yáng jiùjìng shì chīle háishì méiyǒu chī diào huā.",
		native: "Look up at the sky and think whether the sheep ate the rose or not.",
		words: [ '你们', '望', '着', '天空', '你们', '想', '一', '想', '羊', '究竟', '是', '吃', '了', '还是', '没有', '吃', '掉', '花' ],
		quizWords: [ '究竟' ]
	},
	{
		target: "那么你们就会看到一切都变了样。",
		alt: "nàme nǐmen jiù huì kàn dào yīqiè dōu biànle yàng.",
		native: "Then you will see that everything has changed.",
		words: [ '那么', '你们', '就', '会', '看', '到', '一切', '都', '变', '了', '样' ],
		quizSentence: true
	},
	{
		target: "任何一个大人将永远不会明白这个问题竟如此重要。",
		alt: "rènhé yīgè dàrén jiāng yǒngyuǎn bù huì míngbái zhège wèntí jìng rúcǐ zhòngyào.",
		native: "No grown-up will ever understand how important this question is.",
		words: [ '任何', '一个', '大人', '将', '永远', '不', '会', '明白', '这个', '问题', '竟', '如此', '重要' ],
		quizWords: [ '竟' ]
	},
	{
		target: "对我来说，这是世界上最美也是最凄凉的地方。",
		alt: "duì wǒ lái shuō zhè shì shìjiè shàng zuìměi yěshì zuì qīliáng dì dìfāng.",
		native: "For me, this is the most beautiful and the saddest place in the world.",
		words: [ '对', '我', '来', '说', '这', '是', '世界', '上', '最', '美', '也是', '最', '凄凉', '的', '地方' ],
		quizWords: [ '凄凉' ]
	},
	{
		target: "它与前一页画的是同一个地方，我再一次将它画出来。",
		alt: "tā yǔ qián yī yè huà de shì tóng yīgè dìfāng wǒ zài yīcì jiāng tā huà chūlái.",
		native: "It is the same place I drew on the previous page. I have drawn it again.",
		words: [ '它', '与', '前', '一', '页', '画', '的', '是', '同', '一个', '地方', '我', '再', '一次', '将', '它', '画', '出来' ],
		quizSentence: true
	},
	{
		target: "为的是好让你们看清楚，就是在这里，小王子出现在地球上。",
		alt: "wèi de shì hǎo ràng nǐmen kàn qīngchǔ jiùshì zài zhèlǐ xiǎo wángzǐ chūxiàn zài dìqiú shàng.",
		native: "So that you can see clearly that it was here that the Little Prince appeared on the earth.",
		words: [ '为', '的', '是', '好', '让', '你们', '看', '清楚', '就是', '在', '这里', '小', '王子', '出现', '在', '地球', '上' ],
		quizSentence: true
	},
	{
		target: "后来，也正是在这里消失了的，请你们仔细看看这个地方。",
		alt: "hòulái yě zhèng shì zài zhèlǐ xiāoshīle de qǐng nǐmen zǐxì kàn kàn zhège dìfāng.",
		native: "And it was here that he disappeared. Please look carefully at this place.",
		words: [ '后来', '也', '正', '是', '在', '这里', '消', '失', '了', '的', '请', '你们', '仔细', '看', '看', '这个', '地方' ],
		quizSentence: true
	},
	{
		target: "以便你们有一天去非洲沙漠上旅行的时候，能够准确地辨认出这个地方。",
		alt: "yǐbiàn nǐmen yǒu yītiān qù fēizhōu shāmò shàng lǚxíng de shíhòu nénggòu zhǔnquè de biànrèn chū zhège dìfāng.",
		native: "So that one day when you travel to the African desert, you will be able to accurately identify this place.",
		words: [ '以便', '你们', '有', '一', '天', '去', '非洲', '沙漠', '上', '旅行', '的', '时候', '能够', '准确', '地', '辨认', '出', '这个', '地方' ],
		quizSentence: true
	},
	{
		target: "如果，你们有机会经过这个地方，我请求你们不要匆匆而过。",
		alt: "rúguǒ nǐmen yǒu jīhuì jīngguò zhège dìfāng wǒ qǐngqiú nǐmen bùyào cōngcōng érguò.",
		native: "If you ever pass by this place, I ask you not to rush past.",
		words: [ '如果', '你们', '有', '机会', '经过', '这个', '地方', '我', '请求', '你们', '不要', '匆匆', '而', '过' ],
		quizSentence: true
	},
	{
		target: "请你们就在那颗星星底下等一等，如果这时，有个小孩子向你走来。",
		alt: "qǐng nǐmen jiù zài nà kē xīngxīng dǐxia děng yī děng rúguǒ zhè shí yǒu gè xiǎo háizǐ xiàng nǐ zǒu lái.",
		native: "Please wait under that star. If a little child comes to you at this time.",
		words: [ '请', '你们', '就', '在', '那', '颗', '星星', '底下', '等', '一', '等', '如果', '这', '时', '有', '个', '小', '孩子', '向', '你', '走', '来' ],
		quizWords: [ '底下' ]
	},
	{
		target: "如果他笑着，他有金黄色的头发，如果当你问他问题时他不回答。",
		alt: "rúguǒ tā xiàozhe tā yǒu jīn huángsè de tóufǎ rúguǒ dāng nǐ wèn tā wèntí shí tā bù huídá.",
		native: "If he smiles and has golden hair and doesn\'t answer when you ask him a question.",
		words: [ '如果', '他', '笑', '着', '他', '有', '金', '黄色', '的', '头发', '如果', '当', '你', '问', '他', '问题', '时', '他', '不', '回答' ],
		quizSentence: true
	},
	{
		target: "你一定会猜得出他是谁，那就请你们帮个忙，不要让我这么忧伤。",
		alt: "nǐ yīdìng huì cāi dé chū tā shì shéi nà jiù qǐng nǐmen bāng gè máng bùyào ràng wǒ zhème yōushāng.",
		native: "You will definitely guess who he is. So please do me a favor and don\'t make me so sad.",
		words: [ '你', '一定', '会', '猜', '得', '出', '他', '是', '谁', '那', '就', '请', '你们', '帮', '个', '忙', '不要', '让', '我', '这么', '忧伤' ],
		quizSentence: true
	},
	{
		target: "赶快写信告诉我，他又回来了。",
		alt: "gǎnkuài xiě xìn gàosù wǒ tā yòu huíláile.",
		native: "Write to me quickly and tell me that he is back again...",
		words: [ '赶快', '写', '信', '告诉', '我', '他', '又', '回', '来了' ],
		quizWords: [ '赶快' ]
	}
];

