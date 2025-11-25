const gLang = 'zh';
const gBook = 'little.prince';
const gChap = '25';
const gMode = 'zh';
const gSpeed = '175';

const slideData =
[
	{
		target: "那些人们，他们往快车里拥挤，",
		alt: "nàxiē rénmen tāmen wǎng kuàichē lǐ yǒngjǐ,",
		native: "Those people, they crowded into the express train,",
		words: [ '那些', '人们', '他们', '往', '快车', '里', '拥挤' ]
	},
	{
		target: "但是他们却不知道要寻找什么，于是，他们就忙忙碌碌。",
		alt: "dànshì tāmen què bù zhīdào yào xúnzhǎo shénme yúshì tāmen jiù máng mang lùlù.",
		native: "but they did not know what they were looking for, so they rushed around,",
		words: [ '但是', '他们', '却', '不', '知道', '要', '寻找', '什么', '于是', '他们', '就', '忙', '忙', '碌', '碌' ]
	},
	{
		target: "来回转圈子，小王子说道，他接着又说，这没有必要。",
		alt: "lái huí zhuàn quānzǐ xiǎo wángzǐ shuōdao tā jiēzhe yòu shuō zhè méiyǒu bìyào.",
		native: "going around in circles, said the little prince. He then added, \"That\'s not necessary...\"",
		words: [ '来', '回', '转', '圈子', '小', '王子', '说道', '他', '接着', '又', '说', '这', '没有', '必要' ]
	},
	{
		target: "我们终于找到的这口井，不同于撒哈拉的那些井。",
		alt: "wǒmen zhōngyú zhǎodào de zhè kǒu jǐng bùtóng yú sǎhālā dì nàxiē jǐng.",
		native: "The well we finally found is different from the wells in the Sahara.",
		words: [ '我们', '终于', '找到', '的', '这', '口', '井', '不同', '于', '撒哈拉', '的', '那些', '井' ],
		quizSentence: true
	},
	{
		target: "撒哈拉的井只是沙漠中挖的洞。",
		alt: "sǎhālā de jǐng zhǐshì shāmò zhōng wā de dòng.",
		native: "The wells in the Sahara are just holes dug in the desert.\"",
		words: [ '撒哈拉', '的', '井', '只是', '沙漠', '中', '挖', '的', '洞' ],
		quizSentence: true
	},
	{
		target: "这口井则很象村子中的井，可是，那里又没有任何村庄。",
		alt: "zhè kǒu jǐng zé hěn xiàng cūnzǐ zhōng de jǐng kěshì nàlǐ yòu méiyǒu rènhé cūnzhuāng.",
		native: "This well is like a well in a village, but there is no village there.",
		words: [ '这', '口', '井', '则', '很', '象', '村子', '中', '的', '井', '可是', '那里', '又', '没有', '任何', '村庄' ],
		quizSentence: true
	},
	{
		target: "我还以为是在做梦呢，真怪，我对小王子说。",
		alt: "wǒ hái yǐwéi shì zài zuòmèng ne zhēn guàiwǒ duì xiǎo wángzǐ shuō.",
		native: "I thought I was dreaming. It\'s so strange, I said to the little prince.",
		words: [ '我', '还', '以为', '是', '在', '做梦', '呢', '真', '怪', '我', '对', '小', '王子', '说' ],
		quizSentence: true
	},
	{
		target: "一切都是现成的，辘轳，水桶，绳子。",
		alt: "yīqiè dōu shì xiànchéng de lùlú shuǐtǒng shéngzǐ.",
		native: "Everything is ready: the windlass, the bucket, the rope...",
		words: [ '一切', '都', '是', '现成', '的', '辘轳', '水桶', '绳子' ],
		quizSentence: true
	},
	{
		target: "他笑了，拿着绳子，转动着辘轳。",
		alt: "tā xiàole názhe shéngzǐ zhuǎndòngzhe lùlú.",
		native: "He smiled, took the rope, and turned the windlass.",
		words: [ '他', '笑', '了', '拿', '着', '绳子', '转', '动', '着', '辘轳' ]
	},
	{
		target: "辘轳就象是一个长期没有风来吹动的旧风标一样。",
		alt: "lùlú jiù xiàng shì yīgè chángqí méiyǒu fēng lái chuī dòng de jiù fēngbiāo yīyàng.",
		native: "The windlass was like an old weathervane that had not been blown for a long time.",
		words: [ '辘轳', '就', '象', '是', '一个', '长期', '没有', '风', '来', '吹', '动', '的', '旧', '风标', '一样' ],
		quizSentence: true
	},
	{
		target: "吱吱作响，你听，小王子说，我们唤醒了这口井。",
		alt: "zhī zhī zuò xiǎng nǐ tīng xiǎo wángzǐ shuō wǒmen huànxǐngle zhè kǒu jǐng.",
		native: "It creaks. Listen, the little prince said. We have awakened the well.",
		words: [ '吱', '吱', '作', '响', '你', '听', '小', '王子', '说', '我们', '唤', '醒', '了', '这', '口', '井' ],
		quizSentence: true
	},
	{
		target: "它现在唱起歌来了，我不愿让他费劲，我对他说。",
		alt: "tā xiànzài chàng qǐ gē láile wǒ bù yuàn ràng tā fèijìng wǒ duì tā shuō.",
		native: "It is singing now... I don\'t want to make him work hard, I said to him.",
		words: [ '它', '现在', '唱', '起', '歌', '来了', '我', '不', '愿', '让', '他', '费', '劲', '我', '对', '他', '说' ],
		quizSentence: true
	},
	{
		target: "让我来干吧，这活对你太重了，我慢慢地把水桶提到井栏上。",
		alt: "ràng wǒ lái gàn ba zhè huó duì nǐ tài zhòngle wǒ màn man de bǎ shuǐtǒng tí dào jǐng lán shàng.",
		native: "Let me do it. This is too heavy for you. I slowly lifted the bucket onto the well curb.",
		words: [ '让', '我', '来', '干', '吧', '这', '活', '对', '你', '太', '重', '了', '我', '慢', '慢', '地', '把', '水桶', '提', '到', '井', '栏', '上' ],
		quizSentence: true
	},
	{
		target: "我把它稳稳地放在那里，我的耳朵里还响着辘轳的歌声。",
		alt: "wǒ bǎ tā wěn wěn de fàng zài nàlǐ wǒ de ěrduǒ lǐ hái xiǎngzhe lùlú de gēshēng.",
		native: "I placed it there securely. The song of the windlass was still ringing in my ears.",
		words: [ '我', '把', '它', '稳', '稳', '地', '放', '在', '那里', '我', '的', '耳朵', '里', '还', '响', '着', '辘轳', '的', '歌声' ],
		quizWords: [ '稳' ]
	},
	{
		target: "依然还在晃荡的水面上，我看见太阳的影子在跳动。",
		alt: "yīrán hái zài huàngdang de shuǐmiàn shàng wǒ kànjiàn tàiyáng de yǐngzǐ zài tiàodòng.",
		native: "On the still swaying water I saw the shadow of the sun dancing.",
		words: [ '依然', '还', '在', '晃荡', '的', '水面', '上', '我', '看见', '太阳', '的', '影子', '在', '跳动' ],
		quizSentence: true
	},
	{
		target: "我正需要喝这种水，小王子说，给我喝点。",
		alt: "wǒ zhèng xūyào hē zhè zhǒng shuǐ xiǎo wángzǐ shuō gěi wǒ hē diǎn.",
		native: "I need to drink this water. The little prince said, Give me some to drink...",
		words: [ '我', '正', '需要', '喝', '这', '种', '水', '小', '王子', '说', '给', '我', '喝', '点' ],
		quizSentence: true
	},
	{
		target: "这时我才明白了他所要寻找的是什么，我把水桶提到他的嘴边。",
		alt: "zhè shí wǒ cái míngbáile tā suǒyào xúnzhǎo de shì shénme wǒ bǎ shuǐtǒng tí dào tā de zuǐ biān.",
		native: "Then I understood what he was looking for. I lifted the bucket to his lips.",
		words: [ '这', '时', '我', '才', '明', '白', '了', '他', '所', '要', '寻找', '的', '是', '什么', '我', '把', '水桶', '提', '到', '他', '的', '嘴', '边' ],
		quizSentence: true
	},
	{
		target: "他闭着眼睛喝水，就象节日一般舒适愉快。",
		alt: "tā bì zhuó yǎnjīng hē shuǐ jiù xiàng jiérì yībān shūshì yúkuài.",
		native: "He drank with his eyes closed. It was as comfortable and joyful as a holiday.",
		words: [ '他', '闭', '着', '眼睛', '喝', '水', '就', '象', '节日', '一般', '舒适', '愉快' ],
		quizSentence: true
	},
	{
		target: "这水远不只是一种饮料。",
		alt: "zhè shuǐ yuǎn bù zhǐshì yī zhǒng yǐnliào.",
		native: "This water was more than just a drink.",
		words: [ '这', '水', '远', '不', '只是', '一', '种', '饮料' ],
		quizSentence: true
	},
	{
		target: "它是披星戴月走了许多路才找到的，是在辘轳的歌声中。",
		alt: "tā shì pīxīngdàiyuè zǒule xǔduō lù cái zhǎodào de shì zài lùlú de gēshēng zhōng.",
		native: "It was just found by walking so much road all through the night, (was) in the song of the windlass.",
		words: [ '它', '是', '披星戴月', '走', '了', '许多', '路', '才', '找到', '的', '是', '在', '辘轳', '的', '歌声', '中' ],
		quizSentence: true
	},
	{
		target: "经过我双臂的努力得来的，它象是一件礼品慰藉着心田。",
		alt: "jīngguò wǒ shuāng bì de nǔlì dé lái de tā xiàng shì yī jiàn lǐpǐn wèijízhe xīntián.",
		native: "It was obtained by the efforts of my arms. It was like a gift that comforted my heart.",
		words: [ '经过', '我', '双', '臂', '的', '努力', '得', '来', '的', '它', '象', '是', '一', '件', '礼品', '慰', '藉', '着', '心田' ],
		quizSentence: true
	},
	{
		target: "在我小的时候，圣诞树的灯光，午夜的弥撒的音乐，",
		alt: "zài wǒ xiǎo de shíhòu shèngdànshù de dēngguāng wǔyè de mísā de yīnyuè,",
		native: "When I was a child, the lights of the Christmas tree, the music of the midnight mass,",
		words: [ '在', '我', '小', '的', '时候', '圣诞树', '的', '灯光', '午夜', '的', '弥撒', '的', '音乐' ],
		quizSentence: true
	},
	{
		target: "甜蜜的微笑，这一切都使圣诞节时我收到的礼品辉映着幸福的光彩。",
		alt: "tiánmì de wéixiào zhè yīqiè dōu shǐ shèngdàn jié shí wǒ shōu dào de lǐpǐn huīyìngzhe xìngfú de guāngcǎi.",
		native: "the sweet smile, all these made the gifts I received at Christmas shine with the light of happiness.",
		words: [ '甜蜜', '的', '微笑', '这', '一切', '都', '使', '圣诞', '节', '时', '我', '收', '到', '的', '礼品', '辉', '映', '着', '幸福', '的', '光彩' ],
		quizSentence: true
	},
	{
		target: "你这里的人在同一个花园中种植着五千朵玫瑰。",
		alt: "nǐ zhèlǐ de rén zài tóng yīgè huāyuán zhōng zhòngzhízhe wǔqiān duǒ méiguī.",
		native: "People here grow five thousand roses in the same garden.",
		words: [ '你', '这里', '的', '人', '在', '同', '一个', '花园', '中', '种植', '着', '五千', '朵', '玫瑰' ],
		quizSentence: true
	},
	{
		target: "小王子说，可是，他们却不能从中找到自己所要寻找的东西。",
		alt: "xiǎo wángzǐ shuō kěshì tāmen què bùnéng cóngzhōng zhǎodào zìjǐ suǒyào xúnzhǎo de dōngxī.",
		native: "The little prince said, But They cannot find what they seek in it...",
		words: [ '小', '王子', '说', '可是', '他们', '却', '不能', '从中', '找到', '自己', '所', '要', '寻找', '的', '东西' ],
		quizSentence: true
	},
	{
		target: "他们是找不到的，我回答道。",
		alt: "tāmen shì zhǎo bù dào de wǒ huídá dào.",
		native: "They cannot find it, I answered.",
		words: [ '他们', '是', '找', '不', '到', '的', '我', '回答', '道' ],
		quizSentence: true
	},
	{
		target: "然而，他们所寻找的东西却是可以从一朵玫瑰花或一点儿水中找到的。",
		alt: "rán ér tāmen suǒ xúnzhǎo de dōngxī què shì kěyǐ cóng yī duǒ méiguī huā huò yīdiǎn er shuǐzhōng zhǎodào de.",
		native: "But what they seek can be found in a rose or a drop of water...",
		words: [ '然', '而', '他们', '所', '寻找', '的', '东西', '却', '是', '可以', '从', '一', '朵', '玫瑰', '花', '或', '一点', '儿', '水', '中', '找到', '的' ],
		quizSentence: true
	},
	{
		target: "一点不错，我回答道。小王子又加了一句，",
		alt: "yīdiǎn bùcuò wǒ huídá dào xiǎo wángzǐ yòu jiāle yījù,",
		native: "That\'s right, I answered. The little prince added.",
		words: [ '一点', '不错', '我', '回答', '道', '小', '王子', '又', '加', '了', '一句' ],
		quizSentence: true
	},
	{
		target: "眼睛是什么也看不见的，应该用心去寻找。",
		alt: "yǎnjīng shì shénme yě kàn bùjiàn de yīnggāi yòngxīn qù xúnzhǎo.",
		native: "The eyes see nothing. One must seek with the heart.",
		words: [ '眼睛', '是', '什么', '也', '看', '不见', '的', '应该', '用心', '去', '寻找' ],
		quizSentence: true
	},
	{
		target: "我喝了水，我痛快地呼吸着空气，沙漠在晨曦中泛出蜂蜜的光泽。",
		alt: "wǒ hēle shuǐ wǒ tòngkuài dì hūxīzhe kōngqì shāmò zài chénxī zhōng fàn chū fēngmì de guāngzé.",
		native: "I drank the water. I breathed the air with delight. The desert glowed with the luster of honey in the morning light.",
		words: [ '我', '喝', '了', '水', '我', '痛快', '地', '呼', '吸', '着', '空气', '沙漠', '在', '晨曦', '中', '泛', '出', '蜂蜜', '的', '光泽' ],
		quizSentence: true
	},
	{
		target: "这蜂蜜般的光泽也使我感到幸福，为什么我要难过。",
		alt: "zhè fēngmì bān de guāngzé yě shǐ wǒ gǎndào xìngfú wèishéme wǒ yào nánguò.",
		native: "This honey-like luster also makes me happy. Why should I be sad...",
		words: [ '这', '蜂蜜', '般', '的', '光泽', '也', '使', '我', '感到', '幸福', '为什么', '我', '要', '难过' ],
		quizSentence: true
	},
	{
		target: "小王子又重新在我的身边坐下，他温柔地对我说。",
		alt: "xiǎo wángzǐ yòu chóngxīn zài wǒ de shēnbiān zuò xià tā wēnróu dì duì wǒ shuō.",
		native: "The little prince sat down beside me again. He said to me gently.",
		words: [ '小', '王子', '又', '重新', '在', '我', '的', '身边', '坐', '下', '他', '温柔', '地', '对', '我', '说' ],
		quizSentence: true
	},
	{
		target: "你应该实践你的诺言。什么诺言？你知道，",
		alt: "nǐ yīnggāi shíjiàn nǐ de nuòyán shénme nuòyán nǐ zhīdào,",
		native: "You must keep your promise. What promise? You know,",
		words: [ '你', '应该', '实践', '你', '的', '诺言', '什么', '诺言', '你', '知道' ],
		quizSentence: true
	},
	{
		target: "给我的小羊一个嘴套子，我要对我的花负责的呀。",
		alt: "gěi wǒ de xiǎo yáng yīgè zuǐ tàozǐ wǒ yào duì wǒ de huā fùzé de ya.",
		native: "give my lamb a muzzle... I have to take care of my flowers.",
		words: [ '给', '我', '的', '小', '羊', '一个', '嘴', '套子', '我', '要', '对', '我', '的', '花', '负责', '的', '呀' ],
		quizSentence: true
	},
	{
		target: "我从口袋中拿出我的画稿，小王子瞅见了，笑着说。",
		alt: "wǒ cóng kǒudài zhōng ná chū wǒ dehuàgǎo xiǎo wángzǐ chǒujiànle xiàozhe shuō.",
		native: "I took my sketch from my pocket. The little prince saw it and said with a smile.",
		words: [ '我', '从', '口袋', '中', '拿', '出', '我', '的', '画稿', '小', '王子', '瞅', '见', '了', '笑', '着', '说' ],
		quizSentence: true
	},
	{
		target: "你画的猴面包树，有点象白菜。",
		alt: "nǐ huà de hóu miànbāo shù yǒudiǎn xiàng báicài.",
		native: "The baobab tree you drew looks a bit like a cabbage.",
		words: [ '你', '画', '的', '猴', '面包', '树', '有点', '象', '白菜' ],
		quizSentence: true
	},
	{
		target: "啊，我还为我画的猴面包树感到骄傲呢。",
		alt: "a wǒ hái wèi wǒ huà de hóu miànbāo shù gǎndào jiāo\'ào ne.",
		native: "Ah, I am proud of my baobab tree.",
		words: [ '啊', '我', '还', '为', '我', '画', '的', '猴', '面包', '树', '感到', '骄', '傲', '呢' ],
		quizSentence: true
	},
	{
		target: "你画的狐狸，它那双耳朵，有点象犄角，而且又太长了。",
		alt: "nǐ huà de húlí tā nà shuāng ěrduǒ yǒudiǎn xiàng jījiǎo érqiě yòu tài zhǎngle.",
		native: "The fox you drew...its ears...are a bit like horns...and they are too long.",
		words: [ '你', '画', '的', '狐狸', '它', '那', '双', '耳朵', '有点', '象', '犄角', '而且', '又', '太', '长', '了' ]
	},
	{
		target: "这时，他又笑了，小家伙，你太不公正了。",
		alt: "zhè shí tā yòu xiàole xiǎo jiāhuo nǐ tài bù gōngzhèngle.",
		native: "Then, he laughed again, \"Little fellow, you are so unfair.\"",
		words: [ '这', '时', '他', '又', '笑', '了', '小', '家伙', '你', '太', '不', '公', '正', '了' ],
		quizSentence: true
	},
	{
		target: "我过去只会画开着肚皮和闭着肚皮的巨蟒。啊，这就行了，他说。",
		alt: "wǒ guòqù zhǐ huì huà kāizhe dùpí hé bìzhe dùpí de jù mǎng a zhè jiùxíngle tā shuō.",
		native: "I used to only draw pythons with their bellies open and closed. Ah, that\'s all,\" he said.",
		words: [ '我', '过去', '只', '会', '画', '开着', '肚皮', '和', '闭着', '肚皮', '的', '巨', '蟒', '啊', '这', '就', '行', '了', '他', '说' ],
		quizSentence: true
	},
	{
		target: "孩子们认得出来，我就用铅笔勾画了一个嘴套。",
		alt: "háizǐmen rèndé chūlái wǒ jiù yòng qiānbǐ gōuhuàle yīgè zuǐ tào.",
		native: "The children would recognize it, so I sketched a muzzle with a pencil.",
		words: [ '孩子们', '认得', '出来', '我', '就', '用', '铅笔', '勾', '画', '了', '一个', '嘴', '套' ],
		quizSentence: true
	},
	{
		target: "当我把它递给小王子时，我心里很难受。",
		alt: "dāng wǒ bǎ tā dì gěi xiǎo wángzǐ shí wǒ xīnlǐ hěn nánshòu.",
		native: "When I handed it to the little prince, I felt very sad.",
		words: [ '当', '我', '把', '它', '递', '给', '小', '王子', '时', '我', '心里', '很', '难受' ],
		quizSentence: true
	},
	{
		target: "你的打算，我一点也不知道。",
		alt: "nǐ de dǎsuàn wǒ yīdiǎn yě bù zhīdào.",
		native: "I had no idea what you were planning...",
		words: [ '你', '的', '打算', '我', '一点', '也', '不', '知道' ],
		quizSentence: true
	},
	{
		target: "但是，他不回答我。他对我说，你知道，",
		alt: "dànshì tā bù huídá wǒ tā duì wǒ shuō nǐ zhīdào,",
		native: "But he did not answer me. He said to me, \"You know...\"",
		words: [ '但是', '他', '不', '回答', '我', '他', '对', '我', '说', '你', '知道' ]
	},
	{
		target: "我落在地球上，到明天就一周年了，接着，沉默了一会儿。",
		alt: "wǒ luò zài dìqiú shàng dào míngtiān jiù yī zhōuniánle jiēzhe chénmòle yīhuǐ\'er.",
		native: "I fell on Earth...tomorrow will be a year later... Then there was a pause.",
		words: [ '我', '落', '在', '地球', '上', '到', '明天', '就', '一', '周', '年', '了', '接着', '沉', '默', '了', '一会', '儿' ],
		quizSentence: true
	},
	{
		target: "他又说道，我就落在这附近，此时，他的面颊绯红。",
		alt: "tā yòu shuōdao wǒ jiù luò zài zhè fùjìn cǐ shí tā de miànjiá fēihóng.",
		native: "He continued, \"I fell near here...\" At this moment, his cheeks flushed.",
		words: [ '他', '又', '说道', '我', '就', '落', '在', '这', '附近', '此', '时', '他', '的', '面颊', '绯红' ],
		quizWords: [ '附近' ]
	},
	{
		target: "我不知为什么，又感到一阵莫名其妙的心酸。",
		alt: "wǒ bù zhī wèishéme yòu gǎndào yīzhèn mòmíngqímiào de xīnsuān.",
		native: "I don\'t know why, but I felt a strange sadness again.",
		words: [ '我', '不', '知', '为什么', '又', '感到', '一阵', '莫名其妙', '的', '心酸' ],
		quizSentence: true
	},
	{
		target: "这时，我产生了一个问题，",
		alt: "zhè shí wǒ chǎnshēngle yīgè wèntí,",
		native: "Then, I raised a question,",
		words: [ '这', '时', '我', '产', '生', '了', '一个', '问题' ],
		quizSentence: true
	},
	{
		target: "一星期以前，我认识你的那天早上，",
		alt: "yī xīngqí yǐqián wǒ rènshí nǐ dì nèitiān zǎoshang,",
		native: "A week ago, on the morning I met you,",
		words: [ '一', '星期', '以前', '我', '认识', '你', '的', '那天', '早上' ],
		quizSentence: true
	},
	{
		target: "你单独一个人在这旷无人烟的地方走着，",
		alt: "nǐ dāndú yīgè rén zài zhè kuàng wú rényān dì dìfāng zǒuzhe,",
		native: "you were walking alone in this deserted place,",
		words: [ '你', '单独', '一个', '人', '在', '这', '旷', '无', '人烟', '的', '地方', '走', '着' ],
		quizSentence: true
	},
	{
		target: "这么说，这并不是偶然的了？你是要回到你降落的地方去是吗？",
		alt: "zhème shuō zhè bìng bùshì ǒurán dele nǐ shì yào huí dào nǐ jiàngluò dì dìfāng qù shì ma?",
		native: "so, this is not a coincidence? Are you going back to where you landed?",
		words: [ '这么', '说', '这', '并', '不是', '偶然', '的了', '你', '是', '要', '回', '到', '你', '降落', '的', '地方', '去', '是', '吗' ],
		quizSentence: true
	},
	{
		target: "小王子的脸又红了。我犹豫不定地又说了一句，",
		alt: "xiǎo wángzǐ de liǎn yòu hóngle wǒ yóuyù bùdìng dì yòu shuōle yījù,",
		native: "The little prince blushed again. I hesitated indecisively, saying another sentence,",
		words: [ '小', '王子', '的', '脸', '又', '红', '了', '我', '犹豫', '不定', '地', '又', '说', '了', '一句' ],
		quizSentence: true
	},
	{
		target: "可能是因为周年纪念吧。小王子脸又红了。",
		alt: "kěnéng shì yīnwèi zhōunián jìniàn ba xiǎo wángzǐ liǎn yòu hóngle.",
		native: "perhaps it was because of the anniversary. The little prince blushed again.",
		words: [ '可能', '是', '因为', '周年', '纪念', '吧', '小', '王子', '脸', '又', '红', '了' ],
		quizSentence: true
	},
	{
		target: "他从来也不回答这些问题，但是，脸红，就等于说是的，是吧？",
		alt: "tā cónglái yě bù huídá zhèxiē wèntí dànshì liǎnhóng jiù děngyú shuō shì de shì ba?",
		native: "He never answered these questions, but blushing meant yes, didn\'t it?",
		words: [ '他', '从来', '也', '不', '回答', '这些', '问题', '但是', '脸红', '就', '等于', '说', '是', '的', '是', '吧' ],
		quizSentence: true
	},
	{
		target: "啊，我对他说，我有点怕。但他却回答我说，",
		alt: "a wǒ duì tā shuō wǒ yǒudiǎn pà dàn tā què huídá wǒ shuō,",
		native: "Ah, I said to him, I\'m a little scared... But he answered me.",
		words: [ '啊', '我', '对', '他', '说', '我', '有点', '怕', '但', '他', '却', '回答', '我', '说' ],
		quizSentence: true
	},
	{
		target: "你现在该工作了，你应该回到你的机器那里去。",
		alt: "nǐ xiànzài gāi gōngzuòle nǐ yīnggāi huí dào nǐ de jīqì nàlǐ qù.",
		native: "You should work now. You should return to your machine.",
		words: [ '你', '现在', '该', '工作了', '你', '应该', '回', '到', '你', '的', '机器', '那里', '去' ],
		quizSentence: true
	},
	{
		target: "我在这里等你，你明天晚上再来。但是我放心不下。",
		alt: "wǒ zài zhèlǐ děng nǐ nǐ míngtiān wǎnshàng zàilái dànshì wǒ fàngxīn bùxià.",
		native: "I\'ll wait for you here. Come back tomorrow night... But I\'m worried (had no relief).",
		words: [ '我', '在', '这里', '等', '你', '你', '明天', '晚上', '再', '来', '但是', '我', '放心', '不下' ],
		quizSentence: true
	},
	{
		target: "我想起了狐狸的话，如果被人驯服了，就可能会要哭的。",
		alt: "wǒ xiǎngqǐle húlí de huà rúguǒ bèi rén xùnfúle jiù kěnéng huì yào kū de.",
		native: "I remembered what the fox said: If it is tamed, it might cry...",
		words: [ '我', '想', '起', '了', '狐狸', '的', '话', '如果', '被', '人', '驯', '服', '了', '就', '可能', '会', '要', '哭', '的' ]
	}
];
