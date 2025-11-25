const gLang = 'zh';
const gBook = 'little.prince';
const gChap = '24';
const gMode = 'zh';
const gSpeed = '175';

const slideData =
[
	{
		target: "这是我在沙漠上出了事故的第八天。",
		alt: "zhè shì wǒ zài shāmò shàng chū liǎo shìgù de dì bā tiān.",
		native: "It was the eighth day since my accident in the desert.",
		words: [ '这', '是', '我', '在', '沙漠', '上', '出', '了', '事故', '的', '第', '八', '天' ]
	},
	{
		target: "我听着有关这个商人的故事，喝完了我所备用的最后一滴水。",
		alt: "wǒ tīngzhe yǒuguān zhège shāngrén de gùshì hē wánliǎo wǒ suǒ bèiyòng de zuìhòu yī dīshuǐ.",
		native: "I listened to the story about this merchant, drank the last drop of water I had in reserve.",
		words: [ '我', '听', '着', '有关', '这个', '商人', '的', '故事', '喝', '完', '了', '我', '所', '备用', '的', '最后', '一', '滴水' ],
		quizSentence: true
	},
	{
		target: "啊，我对小王子说，你回忆的这些故事真美。",
		alt: "a wǒ duì xiǎo wángzǐ shuō nǐ huíyì de zhèxiē gùshì zhēnměi.",
		native: "Ah, I said to the little prince, These stories you recall are so beautiful.",
		words: [ '啊', '我', '对', '小', '王子', '说', '你', '回忆', '的', '这些', '故事', '真美' ]
	},
	{
		target: "可是，我还没有修好我的飞机，我没有喝的了。",
		alt: "kěshì wǒ hái méiyǒu xiūhǎo wǒ de fēijī wǒ méiyǒu hē dele.",
		native: "But I haven\'t repaired my plane yet. I have nothing to drink.",
		words: [ '可是', '我', '还', '没有', '修好', '我', '的', '飞机', '我', '没有', '喝', '的了' ]
	},
	{
		target: "假如我能悠哉游哉地走到水泉边去，我一定也会很高兴的。",
		alt: "jiǎrú wǒ néng yōuzāi yóu zāi de zǒu dào shuǐquán biān qù wǒ yīdìng yě huì hěn gāoxìng de.",
		native: "If I could just walk to the spring at my leisure, I would be very happy.",
		words: [ '假如', '我', '能', '悠哉', '游', '哉', '地', '走', '到', '水', '泉', '边', '去', '我', '一定', '也', '会', '很', '高兴', '的' ],
		quizSentence: true
	},
	{
		target: "小王子对我说，我的朋友狐狸。",
		alt: "xiǎo wángzǐ duì wǒ shuō wǒ de péngyǒu húlí.",
		native: "The little prince said to me, My friend the fox…",
		words: [ '小', '王子', '对', '我', '说', '我', '的', '朋友', '狐狸' ]
	},
	{
		target: "我的小家伙，现在还说什么狐狸？为什么？",
		alt: "wǒ de xiǎo jiāhuo xiànzài hái shuō shénme húlí wèishéme?",
		native: "My little fellow, why are you still talking about foxes? Why [not]?",
		words: [ '我', '的', '小', '家伙', '现在', '还', '说', '什么', '狐狸', '为什么' ]
	},
	{
		target: "因为这就要渴死人了。他不理解我的思路，他回答我道。",
		alt: "yīnwèi zhè jiù yào kě sǐrénle tā bù lǐjiě wǒ de sīlù tā huídá wǒ dào.",
		native: "Because people are going to die of thirst (because this then will [make?] people die of thirst). He didn\'t understand my train of thought. He answered me,",
		words: [ '因为', '这', '就', '要', '渴', '死', '人了', '他', '不', '理解', '我', '的', '思路', '他', '回答', '我', '道' ]
	},
	{
		target: "即使快要死了，有过一个朋友也好么。",
		alt: "jíshǐ kuàiyào sǐle yǒuguò yīgè péngyǒu yě hǎo me.",
		native: "Even approaching death, it\'s good to have a friend.",
		words: [ '即使', '快要', '死', '了', '有', '过', '一个', '朋友', '也', '好', '么' ],
		quizSentence: true
	},
	{
		target: "我就为我有过一个狐狸朋友而感到很高兴。",
		alt: "wǒ jiù wèi wǒ yǒuguò yīgè húlí péngyǒu ér gǎndào hěn gāoxìng.",
		native: "I was very happen since I had a fox friend.",
		words: [ '我', '就', '为', '我', '有', '过', '一个', '狐狸', '朋友', '而', '感到', '很', '高兴' ],
		quizSentence: true
	},
	{
		target: "他不顾危险，我自己思量着，他从来不知道饥渴。",
		alt: "tā bùgù wéixiǎn wǒ zìjǐ sīliangzhe tā cónglái bu zhīdào jī kě.",
		native: "He disregarded the danger, I thought to myself. He never knew hunger or thirst.",
		words: [ '他', '不顾', '危险', '我', '自己', '思量', '着', '他', '从来', '不', '知道', '饥', '渴' ],
		quizWords: [ '思量' ]
	},
	{
		target: "只要有点阳光，他就满足了。他看着我，答复着我的思想。",
		alt: "zhǐyào yǒudiǎn yángguāng tā jiù mǎnzúle tā kànzhe wǒ dáfùzhe wǒ de sīxiǎng.",
		native: "As long as there\'s a little sunshine, he\'s satisfied… He looked at me and answered my thoughts.",
		words: [ '只要', '有点', '阳光', '他', '就', '满足', '了', '他', '看着', '我', '答复', '着', '我', '的', '思想' ],
		quizWords: [ '答复' ]
	},
	{
		target: "我也渴了，我们去找一口井吧。我显出厌烦的样子，",
		alt: "wǒ yě kěle wǒmen qù zhǎo yīkǒu jǐng ba wǒ xiǎn chū yànfán de yàngzǐ.",
		native: "I\'m thirsty too… Let\'s go find a well. I looked weary.",
		words: [ '我', '也', '渴', '了', '我们', '去', '找', '一口', '井', '吧', '我', '显', '出', '厌烦', '的', '样子' ],
		quizSentence: true
	},
	{
		target: "在茫茫的大沙漠上盲目地去找水井，真荒唐。",
		alt: "zài mángmáng de dà shāmò shàng mángmù de qù zhǎo shuǐjǐng zhēn huāngtáng.",
		native: "it\'s absurd to blindly search for a well in the vast desert.",
		words: [ '在', '茫茫', '的', '大', '沙漠', '上', '盲目', '地', '去', '找', '水井', '真', '荒唐' ],
		quizSentence: true
	},
	{
		target: "然而我们还是开始去寻找了。",
		alt: "rán\'ér wǒmen háishì kāishǐ qù xúnzhǎole.",
		native: "However, we still set out to search.",
		words: [ '然', '而', '我们', '还是', '开始', '去', '寻', '找', '了' ],
		quizSentence: true
	},
	{
		target: "当我们默默地走了好几个小时以后，天黑了下来，星星开始发出光亮。",
		alt: "dāng wǒmen mòmò de zǒule hǎojǐ gè xiǎoshí yǐhòu tiān hēile xiàlái xīngxīng kāishǐ fāchū guāngliàng.",
		native: "After we had walked for hours in silence, it was dark and the stars began to shine.",
		words: [ '当', '我们', '默默', '地', '走', '了', '好几', '个', '小时', '以后', '天', '黑', '了', '下来', '星星', '开始', '发出', '光亮' ],
		quizWords: [ '黑' ]
	},
	{
		target: "由于渴我有点发烧，我看着这些星星，象是在做梦一样。",
		alt: "yóuyú kě wǒ yǒudiǎn fāshāo wǒ kànzhe zhèxiē xīngxīng xiàng shì zài zuòmèng yīyàng.",
		native: "Because of thirst, I was a little feverish, I looked at these stars as if I were in a dream.",
		words: [ '由于', '渴', '我', '有点', '发烧', '我', '看着', '这些', '星星', '象', '是', '在', '做梦', '一样' ],
		quizSentence: true
	},
	{
		target: "小王子的话在我的脑海中跳来跳去，你也渴吗，我问他。",
		alt: "xiǎo wángzǐ dehuà zài wǒ de nǎohǎi zhōng tiào lái tiào qù nǐ yě kě ma wǒ wèn tā.",
		native: "The little prince\'s words kept jumping around in my head. Are you thirsty too? I asked him.",
		words: [ '小', '王子', '的', '话', '在', '我', '的', '脑海', '中', '跳', '来', '跳', '去', '你', '也', '渴', '吗', '我', '问', '他' ],
		quizSentence: true
	},
	{
		target: "他却不回答我的问题，只是对我说，水对心也是有益处的。",
		alt: "tā què bù huídá wǒ de wèntí zhǐshì duì wǒ shuō shuǐ duì xīn yěshì yǒu yìchu de.",
		native: "But he did not answer my question and only said to me that water is also good for the heart...",
		words: [ '他', '却', '不', '回答', '我', '的', '问题', '只是', '对', '我', '说', '水', '对', '心', '也是', '有', '益处', '的' ]
	},
	{
		target: "我不懂他的话是什么意思，可我也不做声，我知道不应该去问他。",
		alt: "wǒ bù dǒng tā dehuà shì shénme yìsi kě wǒ yě bù zuò shēng wǒ zhīdào bù yìng gāi qù wèn tā.",
		native: "I did not understand what his words he meant, but I still did not make noise, I knew I should not ask him.",
		words: [ '我', '不', '懂', '他', '的', '话', '是', '什么', '意思', '可', '我', '也', '不', '做', '声', '我', '知道', '不', '应', '该', '去', '问', '他' ],
		quizSentence: true
	},
	{
		target: "他累了，他坐下来，我在他身旁坐下，沉默了一会。",
		alt: "tā lèile tā zuò xiàlái wǒ zài tā shēn páng zuò xià chénmòle yī huǐ.",
		native: "He was tired and sat down. I sat down beside him and was silent for a while.",
		words: [ '他', '累', '了', '他', '坐', '下来', '我', '在', '他', '身', '旁', '坐', '下', '沉', '默', '了', '一', '会' ]
	},
	{
		target: "他又说道，星星是很美的，因为有一朵人们看不到的花。",
		alt: "tā yòu shuōdao xīngxīng shì hěn měide yīnwèi yǒuyī duǒ rénmen kàn bù dào de huā.",
		native: "He said again that the stars are beautiful because there is a flower that people cannot see...",
		words: [ '他', '又', '说道', '星星', '是', '很', '美', '的', '因为', '有', '一', '朵', '人们', '看', '不', '到', '的', '花' ]
	},
	{
		target: "我回答道，当然，而我默默地看着月光下沙漠的褶皱。",
		alt: "wǒ huídá dào dāngrán\'ér wǒ mòmò de kànzhe yuèguāng xià shāmò de zhězhòu.",
		native: "I replied, \"Of course,\" and I silently looked at the desert ripples in the moonlight.",
		words: [ '我', '回答', '道', '当然', '而', '我', '默默', '地', '看着', '月光', '下', '沙漠', '的', '褶皱' ],
		quizSentence: true
	},
	{
		target: "沙漠是美的，他又说道。确实如此，我一直很喜欢沙漠。",
		alt: "shāmò shì měide tā yòu shuōdao quèshí rúcǐ wǒ yīzhí hěn xǐhuān shāmò.",
		native: "The desert is beautiful, he said again, \"Indeed it\'s so, I have always loved the desert.\"",
		words: [ '沙漠', '是', '美', '的', '他', '又', '说道', '确实', '如此', '我', '一直', '很', '喜欢', '沙漠' ],
		quizSentence: true
	},
	{
		target: "坐在一个沙丘上，什么也看不见，听不见，",
		alt: "zuò zài yīgè shāqiū shàng shénme yě kàn bùjiàn tīng bùjiàn,",
		native: "Sitting on a sand dune, nothing could be seen nor could be heard,",
		words: [ '坐', '在', '一个', '沙丘', '上', '什么', '也', '看', '不见', '听', '不见' ],
		quizSentence: true
	},
	{
		target: "但是，却有一种说不出的东西在默默地放着光芒。",
		alt: "dànshì què yǒuyī zhǒng shuō bu chū de dōngxī zài mòmò de fàngzhe guāngmáng.",
		native: "however, yet there was an indescribable something that was silently shining...",
		words: [ '但是', '却', '有', '一', '种', '说', '不', '出', '的', '东西', '在', '默默', '地', '放', '着', '光芒' ],
		quizSentence: true
	},
	{
		target: "使沙漠更加美丽的，就是在某个角落里，藏着一口井。",
		alt: "shǐ shāmò gèngjiā měilì de jiùshì zài mǒu gè jiǎoluò lǐ cángzhe yīkǒu jǐng.",
		native: "What makes the desert even more beautiful is that in some corner a well is hiding.",
		words: [ '使', '沙漠', '更加', '美丽', '的', '就是', '在', '某', '个', '角落', '里', '藏', '着', '一口', '井' ],
		quizSentence: true
	},
	{
		target: "我很惊讶，突然明白了为什么沙漠放着光芒。",
		alt: "wǒ hěn jīngyà túrán míngbáile wèishéme shāmò fàngzhe guāngmáng.",
		native: "I was surprised and suddenly understood why the desert glowed.",
		words: [ '我', '很', '惊讶', '突然', '明', '白', '了', '为什么', '沙漠', '放', '着', '光芒' ],
		quizSentence: true
	},
	{
		target: "当我还是一个小孩子的时候，我住在一座古老的房子里。",
		alt: "dāng wǒ háishì yīgè xiǎoháizǐ de shíhòu wǒ zhù zài yīzuò gǔlǎo de fángzǐ lǐ.",
		native: "When I was a child, I lived in an old house.",
		words: [ '当', '我', '还是', '一个', '小孩子', '的', '时候', '我', '住', '在', '一', '座', '古老', '的', '房子', '里' ]
	},
	{
		target: "而且传说，这个房子里埋藏着一个宝贝。",
		alt: "érqiě chuánshuō zhège fángzǐ lǐ máicángzhe yīgè bǎobèi.",
		native: "And it was said that there was a treasure buried in this house.",
		words: [ '而且', '传说', '这个', '房子', '里', '埋', '藏', '着', '一个', '宝贝' ],
		quizSentence: true
	},
	{
		target: "当然，从来没有任何人能发现这个宝贝。",
		alt: "dāngrán cónglái méiyǒu rènhé rén néng fāxiàn zhège bǎobèi.",
		native: "Of course, no one had ever found this treasure.",
		words: [ '当然', '从来', '没有', '任何', '人', '能', '发现', '这个', '宝贝' ]
	},
	{
		target: "可能，甚至也没有人去寻找过，",
		alt: "kěnéng shènzhì yě méiyǒu rén qù xúnzhǎoguò,",
		native: "Perhaps no one had even looked for it,",
		words: [ '可能', '甚至', '也', '没有', '人', '去', '寻', '找过' ],
		quizSentence: true
	},
	{
		target: "但是，这个宝贝使整个房子着了魔似的。",
		alt: "dànshì zhège bǎobèi shǐ zhěnggè fángzǐzhele mó sì de.",
		native: "but this treasure had seemed to enchant the whole house.",
		words: [ '但是', '这个', '宝贝', '使', '整个', '房子', '着', '了', '魔', '似', '的' ],
		quizSentence: true
	},
	{
		target: "我家的房子在它的心灵深处隐藏着一个秘密。",
		alt: "wǒjiā de fángzǐ zài tā de xīnlíng shēn chù yǐncángzhe yīgè mìmì.",
		native: "My house has a secret hidden deep in its heart...",
		words: [ '我家', '的', '房子', '在', '它', '的', '心灵', '深', '处', '隐', '藏', '着', '一个', '秘密' ],
		quizSentence: true
	},
	{
		target: "我对小王子说道，是的，无论是房子，星星，或是沙漠，",
		alt: "wǒ duì xiǎo wángzǐ shuōdao shì de wúlùn shì fángzǐ xīngxīng huò shì shāmò,",
		native: "I said to the little prince, yes, whether it is a house, a star, or a desert,",
		words: [ '我', '对', '小', '王子', '说道', '是', '的', '无论', '是', '房子', '星星', '或', '是', '沙漠' ],
		quizSentence: true
	},
	{
		target: "使它们美丽的东西是看不见的。",
		alt: "shǐ tāmen měilì de dōngxī shì kàn bùjiàn de.",
		native: "what makes them beautiful is invisible.",
		words: [ '使', '它们', '美丽', '的', '东西', '是', '看', '不见', '的' ]
	},
	{
		target: "我真高兴，你和我的狐狸的看法一样，小王子说。",
		alt: "wǒ zhēn gāoxìng nǐ hé wǒ de húlí de kànfǎ yīyàng xiǎo wángzǐ shuō.",
		native: "I am so glad that you think the same as my fox, the little prince said.",
		words: [ '我', '真', '高兴', '你', '和', '我', '的', '狐狸', '的', '看法', '一样', '小', '王子', '说' ],
		quizSentence: true
	},
	{
		target: "小王子睡觉了，我就把他抱在怀里，又重新上路了，我很激动。",
		alt: "xiǎo wángzǐ shuìjiàole wǒ jiù bǎ tā bào zài huái lǐ yòu chóngxīn shànglùle wǒ hěn jīdòng.",
		native: "The little prince fell asleep, so I took him in my arms and set off again. I was very excited.",
		words: [ '小', '王子', '睡', '觉', '了', '我', '就', '把', '他', '抱', '在', '怀', '里', '又', '重新', '上', '路', '了', '我', '很', '激动' ],
		quizSentence: true
	},
	{
		target: "就好象抱着一个脆弱的宝贝，就好象在地球上没有比这更脆弱的了。",
		alt: "jiù hǎo xiàng bàozhe yīgè cuìruò de bǎobèi jiù hǎo xiàng zài dìqiú shàng méiyǒu bǐ zhè gèng cuìruò dele.",
		native: "It was as if I were holding a fragile treasure, as if there was nothing more fragile on earth.",
		words: [ '就', '好', '象', '抱', '着', '一个', '脆弱', '的', '宝贝', '就', '好', '象', '在', '地球', '上', '没有', '比', '这', '更', '脆弱', '的', '了' ],
		quizSentence: true
	},
	{
		target: "我借着月光看着这惨白的面额，这双紧闭的眼睛。",
		alt: "wǒ jièzhe yuèguāng kànzhe zhè cǎnbái de miàn\'é zhè shuāng jǐn bì de yǎnjīng.",
		native: "I looked by the light of the moon at this pale face. These closed eyes",
		words: [ '我', '借', '着', '月光', '看着', '这', '惨白', '的', '面', '额', '这', '双', '紧', '闭', '的', '眼睛' ],
		quizSentence: true
	},
	{
		target: "这随风飘动的绺绺头发。这时我对自己说道，",
		alt: "zhè suí fēng piāodòng de liǔ liǔ tóufǎ zhè shí wǒ duì zìjǐ shuōdao,",
		native: "These wisps of hair fluttering in the wind, then, I said to myself,",
		words: [ '这', '随', '风', '飘动', '的', '绺', '绺', '头发', '这', '时', '我', '对', '自己', '说道' ],
		quizSentence: true
	},
	{
		target: "我所看到的仅仅是外表，最重要的是看不见的。",
		alt: "wǒ suǒ kàn dào de jǐnjǐn shì wàibiǎo zuì zhòngyào de shì kàn bùjiàn de.",
		native: "What I see is only appearance; what is most important is what is invisible...",
		words: [ '我', '所', '看', '到', '的', '仅仅', '是', '外表', '最', '重要', '的', '是', '看', '不见', '的' ],
		quizSentence: true
	},
	{
		target: "由于看到他稍稍张开的嘴唇露出一丝微笑，我又自言自语地说。",
		alt: "yóuyú kàn dào tā shāoshāo zhāng kāi de zuǐchún lùchū yīsī wéixiào wǒ yòu zì yán zì yǔ de shuō.",
		native: "Seeing his lips slightly parted in a smile, I said to myself again",
		words: [ '由于', '看', '到', '他', '稍稍', '张', '开', '的', '嘴唇', '露出', '一', '丝', '微笑', '我', '又', '自', '言', '自', '语', '地', '说' ],
		quizSentence: true
	},
	{
		target: "在这个熟睡了的小王子身上，使我非常感动的，是他对他那朵花的忠诚。",
		alt: "zài zhège shúshuìle de xiǎo wángzǐ shēnshang shǐ wǒ fēicháng gǎndòng de shì tā duì tā nà duǒ huā de zhōngchéng.",
		native: "In the sleeping little prince, what moved me most was his devotion to his flower",
		words: [ '在', '这个', '熟睡', '了', '的', '小', '王子', '身上', '使', '我', '非常', '感动', '的', '是', '他', '对', '他', '那', '朵', '花', '的', '忠诚' ],
		quizWords: [ '熟睡' ]
	},
	{
		target: "是在他心中闪烁的那朵玫瑰花的形象，",
		alt: "shì zài tā xīnzhōng shǎnshuò dì nà duǒ méiguī huā de xíngxiàng,",
		native: "It was the image in his heart of the shimmering rose,",
		words: [ '是', '在', '他', '心中', '闪烁', '的', '那', '朵', '玫瑰', '花', '的', '形象' ],
		quizSentence: true
	},
	{
		target: "这朵玫瑰花，即使在小王子睡着了的时候，",
		alt: "zhè duǒ méiguī huā jíshǐ zài xiǎo wángzǐ shuìzhele de shíhòu,",
		native: "this rose, even when the little prince was asleep,",
		words: [ '这', '朵', '玫瑰', '花', '即使', '在', '小', '王子', '睡', '着', '了', '的', '时候' ],
		quizSentence: true
	},
	{
		target: "也象一盏灯的火焰一样在他身上闪耀着光辉。",
		alt: "yě xiàng yī zhǎn dēng de huǒyàn yīyàng zài tā shēnshang shǎnyàozhe guānghuī.",
		native: "also like a lamp\'s flame in his body shining brilliantly.",
		words: [ '也', '象', '一', '盏', '灯', '的', '火焰', '一样', '在', '他', '身上', '闪', '耀', '着', '光辉' ],
		quizSentence: true
	},
	{
		target: "这时，我就感觉到他更加脆弱，应该保护灯焰。",
		alt: "zhè shí wǒ jiù gǎnjué dào tā gèngjiā cuìruò yīnggāi bǎohù dēng yàn.",
		native: "Then, I felt that he was more fragile, [that I] should protect the flame",
		words: [ '这', '时', '我', '就', '感觉', '到', '他', '更加', '脆弱', '应该', '保护', '灯', '焰' ],
		quizSentence: true
	},
	{
		target: "一阵风就可能把它吹灭，于是，就这样走着。",
		alt: "yīzhènfēng jiù kěnéng bǎ tā chuī miè yúshì jiù zhèyàng zǒuzhe.",
		native: "A gust of wind could blow it out, so then (like that?) walked on.",
		words: [ '一', '阵风', '就', '可能', '把', '它', '吹', '灭', '于是', '就', '这样', '走', '着' ],
		quizSentence: true
	},
	{
		target: "我在黎明时发现了水井。",
		alt: "wǒ zài límíng shí fāxiànle shuǐjǐng.",
		native: "I found the well at dawn",
		words: [ '我', '在', '黎明', '时', '发现了', '水井' ],
		quizSentence: true
	}
];
