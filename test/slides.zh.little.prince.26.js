const gLang = 'zh';
const gBook = 'little.prince';
const gChap = '26';
const gMode = 'zh';
const gSpeed = '175';

const slideData =
[
	{
		target: "在井旁边有一堵残缺的石墙。",
		alt: "zài jǐng pángbiān yǒu yī dǔ cánquē de shí qiáng.",
		native: "There was a broken stone wall next to the well.",
		words: [ '在', '井', '旁边', '有', '一', '堵', '残缺', '的', '石', '墙' ],
		quizWords: [ '墙', '旁边', '堵', '残缺' ]
	},
	{
		target: "第二天晚上我工作回来的时候，我远远地看见了小王子耷拉着双腿坐在墙上。",
		alt: "dì èr tiān wǎnshàng wǒ gōngzuò huílái de shíhòu wǒ yuǎn yuǎn dì kànjiànle xiǎo wángzǐ dālazhe shuāng tuǐ zuò zài qiáng shàng.",
		native: "The next night when I came back from work, I saw the little prince sitting on the wall with his legs dangling from a distance.",
		words: [ '第', '二', '天', '晚上', '我', '工作', '回来', '的', '时候', '我', '远', '远', '地', '看', '见', '了', '小', '王子', '耷', '拉', '着', '双', '腿', '坐', '在', '墙', '上' ],
		quizWords: [ '腿', '耷' ]
	},
	{
		target: "我听见他在说话，你怎么不记得了呢，他说，绝不是在这儿。",
		alt: "wǒ tīngjiàn tā zài shuōhuà nǐ zěnme bù jìdéliǎo ne tā shuō jué bùshì zài zhè\'er.",
		native: "I heard him talking. Why don\'t you remember? He said, It\'s definitely not here.",
		words: [ '我', '听见', '他', '在', '说话', '你', '怎么', '不', '记', '得了', '呢', '他', '说', '绝', '不是', '在', '这', '儿' ],
		quizSentence: true
	},
	{
		target: "大概还有另一个声音在回答他，因为他答着腔说道。",
		alt: "dàgài hái yǒu lìng yīgè shēngyīn zài huídá tā yīnwèi tā dázhe qiāng shuōdao.",
		native: "Perhaps another voice was answering him, for he replied in a low voice:",
		words: [ '大概', '还', '有', '另', '一个', '声音', '在', '回答', '他', '因为', '他', '答', '着', '腔', '说道' ],
		quizSentence: true
	},
	{
		target: "没错，没错，日子是对的，但地点不是这里。",
		alt: "méi cuò méi cuò rìzǐ shì duì de dàn dìdiǎn bùshì zhèlǐ.",
		native: "Yes, yes, the date is right, but the place is not here...",
		words: [ '没', '错', '没', '错', '日子', '是', '对', '的', '但', '地点', '不是', '这里' ],
		quizWords: [ '地点' ]
	},
	{
		target: "我继续朝墙走去，我还是看不到，也听不见任何别人。",
		alt: "wǒ jìxù cháo qiáng zǒu qù wǒ háishì kàn bù dào yě tīng bùjiàn rènhé biérén.",
		native: "I continued to walk towards the wall. I still could not see or hear anyone else.",
		words: [ '我', '继续', '朝', '墙', '走', '去', '我', '还是', '看', '不', '到', '也', '听', '不见', '任何', '别人' ],
		quizSentence: true
	},
	{
		target: "可是小王子又回答道，那当然，你会在沙上看到我的脚印是从什么地方开始的。",
		alt: "kěshì xiǎo wángzǐ yòu huídá dào nà dāngrán nǐ huì zài shā shàng kàn dào wǒ de jiǎoyìn shì cóng shénme dìfāng kāishǐ de.",
		native: "But the little prince replied, \"Of course you will see where my footprints begin in the sand.\"",
		words: [ '可是', '小', '王子', '又', '回答', '道', '那', '当然', '你', '会', '在', '沙', '上', '看', '到', '我', '的', '脚印', '是', '从', '什么', '地方', '开始', '的' ],
		quizWords: [ '脚印' ]
	},
	{
		target: "你在那里等着我就行了，今天夜里我去那里。",
		alt: "nǐ zài nàlǐ děngzhe wǒ jiùxíngle jīntiān yèlǐ wǒ qù nàlǐ.",
		native: "\"Just wait for me there. I will go there tonight.\"",
		words: [ '你', '在', '那里', '等', '着', '我', '就', '行', '了', '今天', '夜里', '我', '去', '那里' ],
		quizWords: [ '今天' ]
	},
	{
		target: "我离墙约有二十米远，可我依然什么也没有看见。",
		alt: "wǒ lí qiáng yuē yǒu èrshí mǐ yuǎn kě wǒ yīrán shénme yě méiyǒu kànjiàn.",
		native: "I was about twenty meters away from the wall, but I still saw nothing.",
		words: [ '我', '离', '墙', '约', '有', '二十', '米', '远', '可', '我', '依然', '什么', '也', '没有', '看见' ],
		quizWords: [ '约', '米' ]
	},
	{
		target: "小王子沉默了一会又说，你的毒液管用吗？",
		alt: "xiǎo wángzǐ chénmòle yī huǐ yòu shuō nǐ de dúyè guǎnyòng ma.",
		native: "The little prince was silent for a moment and then said, \"Does your venom work?\"",
		words: [ '小', '王子', '沉', '默', '了', '一', '会', '又', '说', '你', '的', '毒液', '管用', '吗' ],
		quizWords: [ '毒液', '管用' ]
	},
	{
		target: "你保证不会使我长时间地痛苦吗，我焦虑地赶上前去。",
		alt: "nǐ bǎozhèng bù huì shǐ wǒ cháng shíjiān dì tòngkǔ ma wǒ jiāolǜ de gǎn shàng qián qù.",
		native: "\"Do you promise not to make me suffer for a long time?\" I hurried forward anxiously.",
		words: [ '你', '保证', '不', '会', '使', '我', '长', '时间', '地', '痛苦', '吗', '我', '焦虑', '地', '赶', '上', '前', '去' ],
		quizWords: [ '保证', '赶', '焦虑' ]
	},
	{
		target: "但我仍然不明白是怎么回事，现在你去吧，我要下来了，小王子说。",
		alt: "dàn wǒ réngrán bù míngbái shì zěnme huí shì xiànzài nǐ qù ba wǒ yào xiàláile xiǎo wángzǐ shuō.",
		native: "But I still did not understand what was going on. Now go ahead. I am coming down,\" the little prince said.",
		words: [ '但', '我', '仍然', '不', '明白', '是', '怎么', '回', '事', '现在', '你', '去', '吧', '我', '要', '下', '来了', '小', '王子', '说' ],
		quizSentence: true
	},
	{
		target: "于是，我也朝墙脚下看去，我吓了一跳，就在那里。",
		alt: "yúshì wǒ yě cháo qiángjiǎo xià kàn qù wǒ xiàle yī tiào jiù zài nàlǐ.",
		native: "So I also looked towards the foot of the wall. I was startled. There it was.",
		words: [ '于是', '我', '也', '朝', '墙', '脚', '下', '看', '去', '我', '吓', '了', '一', '跳', '就', '在', '那里' ],
		quizWords: [ '吓' ]
	},
	{
		target: "一条黄蛇直起身子冲着小王子，这种黄蛇半分钟就能结果你的性命。",
		alt: "yītiáo huáng shé zhíqǐ shēnzǐ chōngzhe xiǎo wángzǐ zhè zhǒng huáng shé bàn fēnzhōng jiù néng jiéguǒ nǐ dì xìngmìng.",
		native: "A yellow snake stood up and faced the little prince. Such a yellow snake would kill you in half a minute.",
		words: [ '一', '条', '黄', '蛇', '直', '起', '身子', '冲', '着', '小', '王子', '这', '种', '黄', '蛇', '半', '分钟', '就', '能', '结果', '你', '的', '性命' ],
		quizWords: [ '黄', '半', '直', '性命' ]
	},
	{
		target: "我一面赶紧掏口袋，拔出手枪，一面跑过去。",
		alt: "wǒ yīmiàn gǎnjǐn tāo kǒudài bá chū shǒuqiāng yīmiàn pǎo guòqù.",
		native: "I quickly reached into my pocket. I drew my pistol and ran over.",
		words: [ '我', '一面', '赶紧', '掏', '口袋', '拔', '出', '手枪', '一面', '跑', '过去' ],
		quizWords: [ '赶紧', '手枪' ]
	},
	{
		target: "可是一听到我的脚步声，蛇却象一股干涸了的水柱一样，",
		alt: "kěshì yī tīng dào wǒ de jiǎobù shēng shé què xiàng yī gǔ gānhéle de shuǐzhù yīyàng,",
		native: "But at the sound of my footsteps, the snake, like a dried-up stream of water,",
		words: [ '可是', '一', '听', '到', '我', '的', '脚步', '声', '蛇', '却', '象', '一', '股', '干', '涸', '了', '的', '水柱', '一样' ],
		quizWords: [ '水柱', '涸', '股' ]
	},
	{
		target: "慢慢钻进沙里去，它不慌不忙地在石头的缝隙中钻动着。",
		alt: "màn man zuān jìn shālǐ qù tā bù huāng bù máng de zài shítou de fèngxì zhōng zuān dòngzhe.",
		native: "slowly burrowed into the sand. It moved leisurely between the cracks in the stones.",
		words: [ '慢', '慢', '钻', '进', '沙', '里', '去', '它', '不', '慌', '不', '忙', '地', '在', '石头', '的', '缝隙', '中', '钻', '动', '着' ],
		quizWords: [ '缝隙', '钻' ]
	},
	{
		target: "发出轻轻的金属般的响声，我到达墙边的时候，",
		alt: "fāchū qīng qīng de jīnshǔ bān de xiǎngshēng wǒ dàodá qiáng biān de shíhòu,",
		native: "It made a soft, metallic sound. When I reached the wall,",
		words: [ '发出', '轻', '轻', '的', '金属', '般', '的', '响声', '我', '到达', '墙', '边', '的', '时候' ],
		quizWords: [ '响声', '金属', '到达' ]
	},
	{
		target: "正好把我的这位小王子接在我的怀抱中，他的脸色雪一样惨白。",
		alt: "zhènghǎo bǎ wǒ de zhè wèi xiǎo wángzǐ jiē zài wǒ de huáibào zhōng tā de liǎnsè xuě yīyàng cǎnbái.",
		native: "I took my little prince into my arms. His face was as pale as snow.",
		words: [ '正好', '把', '我', '的', '这', '位', '小', '王子', '接', '在', '我', '的', '怀抱', '中', '他', '的', '脸色', '雪', '一样', '惨白' ],
		quizWords: [ '怀抱' ]
	},
	{
		target: "这是搞的什么名堂，你怎么竟然和蛇也谈起心来了？",
		alt: "zhè shì gǎo de shénme míngtáng nǐ zěnme jìngrán hé shé yě tán qǐ xīn láile?",
		native: "What the hell is going on? How can you even talk to a snake?",
		words: [ '这', '是', '搞', '的', '什么', '名堂', '你', '怎么', '竟然', '和', '蛇', '也', '谈', '起', '心', '来了' ],
		quizWords: [ '竟然', '名堂' ]
	},
	{
		target: "我解开了他一直带着的金黄色的围脖，我用水渍湿了他的太阳穴。",
		alt: "wǒ jiě kāile tā yīzhí dàizhe de jīn huángsè de wéibó wǒ yòngshuǐ zì shīle tā de tàiyángxué.",
		native: "I untied the golden scarf he always wore. I wet his temple with water.",
		words: [ '我', '解', '开', '了', '他', '一直', '带', '着', '的', '金', '黄色', '的', '围脖', '我', '用水', '渍', '湿', '了', '他', '的', '太阳穴' ],
		quizWords: [ '围脖', '用水', '太阳穴', '湿', '渍' ]
	},
	{
		target: "让他喝了点水，这时，我什么也不敢再问他。",
		alt: "ràng tā hēle diǎn shuǐ zhè shí wǒ shénme yě bù gǎn zài wèn tā.",
		native: "I gave him some water. At this point, I didn\'t dare ask him anything.",
		words: [ '让', '他', '喝', '了', '点', '水', '这', '时', '我', '什么', '也', '不', '敢', '再', '问', '他' ],
		quizSentence: true
	},
	{
		target: "他严肃地看着我，用双臂搂着我的脖子。",
		alt: "tā yánsù de kànzhe wǒ yòng shuāng bì lǒuzhe wǒ de bózǐ.",
		native: "He looked at me seriously and put his arms around my neck.",
		words: [ '他', '严肃', '地', '看着', '我', '用', '双', '臂', '搂', '着', '我', '的', '脖子' ],
		quizWords: [ '搂' ]
	},
	{
		target: "我感到他的心就象一只被枪弹击中而濒于死亡的鸟的心脏一样在跳动着。",
		alt: "wǒ gǎndào tā de xīn jiù xiàng yī zhǐ bèi qiāngdàn jí zhòng ér bīnyú sǐwáng de niǎo de xīnzàng yīyàng zài tiàodòngzhe.",
		native: "I felt his heart beating like the heart of a dying bird shot by a bullet.",
		words: [ '我', '感到', '他', '的', '心', '就', '象', '一', '只', '被', '枪弹', '击', '中', '而', '濒于', '死亡', '的', '鸟', '的', '心脏', '一样', '在', '跳', '动', '着' ],
		quizWords: [ '枪弹', '击', '濒于', '心脏' ]
	},
	{
		target: "他对我说，我很高兴，你找到了你的机器所缺少的东西。",
		alt: "tā duì wǒ shuō wǒ hěn gāoxìng nǐ zhǎodàole nǐ de jīqì suǒ quēshǎo de dōngxī.",
		native: "He said to me, \"I\'m glad you found what your machine was missing.\"",
		words: [ '他', '对', '我', '说', '我', '很', '高兴', '你', '找', '到了', '你', '的', '机器', '所', '缺少', '的', '东西' ],
		quizWords: [ '缺少' ]
	},
	{
		target: "你不久就可以回家去了，你怎么知道的？",
		alt: "nǐ bùjiǔ jiù kěyǐ huí jiā qùle nǐ zěnme zhīdào de?",
		native: "You will be able to go home soon... How did you know?",
		words: [ '你', '不久', '就', '可以', '回', '家', '去', '了', '你', '怎么', '知道', '的' ],
		quizSentence: true
	},
	{
		target: "我正是来告诉他，在没有任何希望的情况下，我成功地完成了修理工作。",
		alt: "wǒ zhèng shì lái gàosù tā zài méiyǒu rènhé xīwàng de qíngkuàng xià wǒ chénggōng de wánchéngle xiūlǐ gōngzuò.",
		native: "I came to tell him that I had successfully completed the repair work despite all hope.",
		words: [ '我', '正', '是', '来', '告诉', '他', '在', '没有', '任何', '希望', '的', '情况', '下', '我', '成功', '地', '完', '成了', '修理', '工作' ],
		quizWords: [ '修理' ]
	},
	{
		target: "他不回答我的问题，却接着说道，我也一样。",
		alt: "tā bù huídá wǒ de wèntí què jiēzhe shuōdao wǒ yě yīyàng.",
		native: "He did not answer my question but continued, \"So am I.\"",
		words: [ '他', '不', '回答', '我', '的', '问题', '却', '接着', '说道', '我', '也', '一样' ],
		quizSentence: true
	},
	{
		target: "今天，要回家去了，然后，他忧伤地说。",
		alt: "jīntiān yào huí jiā qùle ránhòu tā yōushāng de shuō.",
		native: "I am going home today... Then he said sadly.",
		words: [ '今天', '要', '回', '家', '去', '了', '然后', '他', '忧伤', '地', '说' ],
		quizSentence: true
	},
	{
		target: "我回家要远得多，要难得多，我清楚地感到发生了某种不寻常的事。",
		alt: "wǒ huí jiā yào yuǎn dé duō yào nándé duō wǒ qīngchǔ dì gǎndào fāshēngle mǒu zhǒng bù xúncháng de shì.",
		native: "It is much farther away... much harder for me to go home... I clearly felt that something unusual had happened.",
		words: [ '我', '回', '家', '要', '远', '得', '多', '要', '难得', '多', '我', '清楚', '地', '感到', '发', '生', '了', '某', '种', '不', '寻常', '的', '事' ],
		quizWords: [ '寻常' ]
	},
	{
		target: "我把他当作小孩一样紧紧抱在怀里，可是我感觉到他径直地向着一个无底深渊沉陷下去。",
		alt: "wǒ bǎ tā dàng zuò xiǎo hái yīyàng jǐn jǐn bào zài huái lǐ kěshì wǒ gǎnjué dào tā jìngzhí dì xiàngzhe yīgè wú dǐ shēnyuān chénxiàn xiàqù.",
		native: "I held him tightly in my arms like a child, but I felt that he was sinking straight into a bottomless abyss.",
		words: [ '我', '把', '他', '当', '作', '小', '孩', '一样', '紧', '紧', '抱', '在', '怀', '里', '可是', '我', '感觉', '到', '他', '径直', '地', '向着', '一个', '无', '底', '深渊', '沉陷', '下去' ],
		quizWords: [ '孩', '径直', '深渊', '沉陷', '向着' ]
	},
	{
		target: "我想法拉住他，却怎么也办不到，他的眼神很严肃，望着遥远的地方。",
		alt: "wǒ xiǎngfǎ lā zhù tā què zěnme yě bàn bù dào tā de yǎnshén hěn yánsù wàngzhe yáoyuǎn dì dìfāng.",
		native: "I tried to hold him back, but I could not... His eyes were serious, looking into the distance.",
		words: [ '我', '想法', '拉', '住', '他', '却', '怎么', '也', '办', '不', '到', '他', '的', '眼神', '很', '严肃', '望', '着', '遥远', '的', '地方' ],
		quizWords: [ '眼神' ]
	},
	{
		target: "我有你画的羊，羊的箱子和羊的嘴套子。",
		alt: "wǒ yǒu nǐ huà de yáng yáng de xiāngzǐ hé yáng de zuǐ tàozǐ.",
		native: "I have the sheep you drew, the sheep\'s box and the sheep\'s muzzle...",
		words: [ '我', '有', '你', '画', '的', '羊', '羊', '的', '箱子', '和', '羊', '的', '嘴', '套子' ],
		quizWords: [ '套子' ]
	},
	{
		target: "他带着忧伤的神情微笑了，我等了很长时间，才觉得他身子渐渐暖和起来。",
		alt: "tā dàizhe yōushāng de shénqíng wéixiàole wǒ děngle hěn cháng shíjiān cái juédé tā shēnzǐ jiànjiàn nuǎnhuo qǐlái.",
		native: "He smiled with a sad look. I waited for a long time before I felt that he was gradually warming up.",
		words: [ '他', '带', '着', '忧伤', '的', '神情', '微', '笑', '了', '我', '等', '了', '很', '长', '时间', '才', '觉得', '他', '身子', '渐渐', '暖和', '起来' ],
		quizWords: [ '渐渐', '暖和' ]
	},
	{
		target: "小家伙，你受惊了，他害怕了，这是无疑的。",
		alt: "xiǎo jiāhuo nǐ shòujīngle tā hàipàle zhè shì wúyí de.",
		native: "Little boy, you are frightened... He is afraid, there is no doubt about it.",
		words: [ '小', '家伙', '你', '受', '惊', '了', '他', '害', '怕', '了', '这', '是', '无疑', '的' ],
		quizWords: [ '害', '受', '无疑' ]
	},
	{
		target: "他却温柔地笑着说，今天晚上，我会怕得更厉害。",
		alt: "tā què wēnróu de xiàozhe shuō jīntiān wǎnshàng wǒ huì pà dé gèng lìhài.",
		native: "But he smiled gently and said, \"Tonight I will be even more afraid...\"",
		words: [ '他', '却', '温柔', '地', '笑', '着', '说', '今天', '晚上', '我', '会', '怕', '得', '更', '厉害' ],
		quizSentence: true
	},
	{
		target: "我再度意识到要发生一件不可弥补的事。",
		alt: "wǒ zàidù yìshí dào yào fāshēng yī jiàn bùkě míbǔ de shì.",
		native: "I once again realized that something irreparable was about to happen.",
		words: [ '我', '再度', '意识', '到', '要', '发生', '一', '件', '不可', '弥补', '的', '事' ],
		quizWords: [ '弥补', '再度' ]
	},
	{
		target: "我觉得我的心一下子就凉了，这时我才明白。",
		alt: "wǒ juédé wǒ de xīn yīxià zǐ jiù liángle zhè shí wǒ cái míngbái.",
		native: "I felt my heart suddenly turn cold. Then I understood.",
		words: [ '我', '觉得', '我', '的', '心', '一下', '子', '就', '凉', '了', '这', '时', '我', '才', '明白' ],
		quizWords: [ '凉' ]
	},
	{
		target: "一想到再也不能听到这笑声，我就不能忍受。",
		alt: "yī xiǎngdào zài yě bùnéng tīng dào zhè xiào shēng wǒ jiù bùnéng rěnshòu.",
		native: "I couldn\'t bear the thought of never hearing that laughter again.",
		words: [ '一', '想到', '再', '也', '不能', '听', '到', '这', '笑', '声', '我', '就', '不能', '忍受' ],
		quizWords: [ '忍受' ]
	},
	{
		target: "这笑声对我来说，就好象是沙漠中的甘泉一样。",
		alt: "zhè xiào shēng duì wǒ lái shuō jiù hǎo xiàng shì shāmò zhōng de gānquán yīyàng.",
		native: "This laughter was like a spring of sweet water in the desert to me.",
		words: [ '这', '笑', '声', '对', '我', '来', '说', '就', '好', '象', '是', '沙漠', '中', '的', '甘泉', '一样' ],
		quizWords: [ '甘泉' ]
	},
	{
		target: "小家伙，我还想听你笑，但他对我说，到今天夜里，正好是一年了。",
		alt: "xiǎo jiāhuo wǒ hái xiǎng tīng nǐ xiào dàn tā duì wǒ shuō dào jīntiān yèlǐ zhènghǎo shì yī niánle.",
		native: "Little one, I still want to hear you laugh... But he told me that tonight will be exactly one year.",
		words: [ '小', '家伙', '我', '还', '想', '听', '你', '笑', '但', '他', '对', '我', '说', '到', '今天', '夜里', '正好', '是', '一', '年', '了' ],
		quizSentence: true
	},
	{
		target: "我的星球将正好处于我去年降落的那个地方的上空。",
		alt: "wǒ de xīngqiú jiāng zhènghǎo chǔyú wǒ qùnián jiàngluò dì nàgè dìfāng de shàngkōng.",
		native: "My planet will be right above the place where I landed last year...",
		words: [ '我', '的', '星球', '将', '正好', '处于', '我', '去年', '降落', '的', '那个', '地方', '的', '上空' ],
		quizWords: [ '去年', '降落', '上空' ]
	},
	{
		target: "小家伙，这蛇的事，约会的事，还有星星。",
		alt: "xiǎo jiāhuo zhè shé de shì yuēhuì de shì hái yǒu xīngxīng.",
		native: "Little one, this snake thing, the date thing, and the stars.",
		words: [ '小', '家伙', '这', '蛇', '的', '事', '约会', '的', '事', '还', '有', '星星' ],
		quizWords: [ '约会' ]
	},
	{
		target: "这全是一场噩梦吧，但他并不回答我的问题。",
		alt: "zhè quán shì yī chǎng èmèng ba dàn tā bìng bù huídá wǒ de wèntí.",
		native: "This is all a nightmare, right? But he didn\'t answer my question.",
		words: [ '这', '全', '是', '一', '场', '噩梦', '吧', '但', '他', '并', '不', '回答', '我', '的', '问题' ],
		quizWords: [ '噩梦', '场' ]
	},
	{
		target: "他对我说，重要的事，是看不见的。",
		alt: "tā duì wǒ shuō zhòngyào de shì shì kàn bùjiàn de.",
		native: "He told me that important things are invisible...",
		words: [ '他', '对', '我', '说', '重要', '的', '事', '是', '看', '不见', '的' ],
		quizSentence: true
	},
	{
		target: "当然，这就象花一样，如果你爱上了一朵生长在一颗星星上的花。",
		alt: "dāngrán zhè jiù xiàng huā yīyàng rúguǒ nǐ ài shàngle yī duǒ shēngzhǎng zài yī kē xīngxīng shàng de huā.",
		native: "Of course... It\'s like a flower. If you fall in love with a flower that grows on a star...",
		words: [ '当然', '这', '就', '象', '花', '一样', '如果', '你', '爱', '上', '了', '一', '朵', '生长', '在', '一', '颗', '星星', '上', '的', '花' ],
		quizSentence: true
	},
	{
		target: "那么夜间，你看着天空就感到甜蜜愉快。",
		alt: "nàme yèjiān nǐ kànzhe tiānkōng jiù gǎndào tiánmì yúkuài.",
		native: "Then at night you look at the sky and feel sweet and happy...",
		words: [ '那么', '夜间', '你', '看着', '天空', '就', '感到', '甜蜜', '愉快' ],
		quizWords: [ '夜间' ]
	},
	{
		target: "所有的星星上都好象开着花，当然，这也就象水一样。",
		alt: "suǒyǒu de xīngxīng shàng dū hǎo xiàng kāizhe huā dāngrán zhè yě jiù xiàng shuǐ yīyàng.",
		native: "All the stars seem to be blooming with flowers. Of course... It\'s like water...",
		words: [ '所有', '的', '星星', '上', '都', '好', '象', '开着', '花', '当然', '这', '也', '就', '象', '水', '一样' ],
		quizSentence: true
	},
	{
		target: "由于那辘轳和绳子的缘故，你给我喝的井水好象音乐一样，你记得吗？",
		alt: "yóuyú nà lùlú hé shéngzǐ de yuángù nǐ gěi wǒ hē de jǐng shuǐ hǎo xiàng yīnyuè yīyàng nǐ jìdé ma?",
		native: "Because of the windlass and the rope, the well water you gave me was like music... Do you remember?",
		words: [ '由于', '那', '辘轳', '和', '绳子', '的', '缘故', '你', '给', '我', '喝', '的', '井', '水', '好', '象', '音乐', '一样', '你', '记得', '吗' ],
		quizWords: [ '记得' ]
	},
	{
		target: "这水非常好喝，当然，夜晚，你抬头望着星星。",
		alt: "zhè shuǐ fēicháng hǎo hē dāngrán yèwǎn nǐ táitóu wàngzhe xīngxīng.",
		native: "It was very delicious... Of course... At night you look up at the stars...",
		words: [ '这', '水', '非常', '好', '喝', '当然', '夜晚', '你', '抬头', '望', '着', '星星' ],
		quizWords: [ '抬头' ]
	},
	{
		target: "我的那颗太小了，我无法给你指出我的那颗星星是在哪里。",
		alt: "wǒ dì nà kē tài xiǎole wǒ wúfǎ gěi nǐ zhǐchū wǒ dì nà kē xīngxīng shì zài nǎlǐ.",
		native: "Mine is too small. I can\'t tell you where my star is.",
		words: [ '我', '的', '那', '颗', '太', '小', '了', '我', '无法', '给', '你', '指出', '我', '的', '那', '颗', '星星', '是', '在', '哪里' ],
		quizWords: [ '指出' ]
	},
	{
		target: "这样倒更好，你可以认为我的那颗星星就在这些星星之中。",
		alt: "zhèyàng dào gèng hǎo nǐ kěyǐ rènwéi wǒ dì nà kē xīngxīng jiù zài zhèxiē xīngxīng zhī zhōng.",
		native: "It\'s better this way. You can think of my star as being among these stars.",
		words: [ '这样', '倒', '更', '好', '你', '可以', '认为', '我', '的', '那', '颗', '星星', '就', '在', '这些', '星星', '之', '中' ],
		quizSentence: true
	},
	{
		target: "那么，所有的星星，你都会喜欢看的，这些星星都将成为你的朋友。",
		alt: "nàme suǒyǒu de xīngxīng nǐ dūhuì xǐhuān kàn de zhèxiē xīngxīng dōu jiāng chéngwéi nǐ de péngyǒu.",
		native: "Then you will love to look at all the stars... These stars will become your friends.",
		words: [ '那么', '所有', '的', '星星', '你', '都会', '喜欢', '看', '的', '这些', '星星', '都', '将', '成为', '你', '的', '朋友' ],
		quizWords: [ '都会' ]
	},
	{
		target: "而且，我还要给你一件礼物，他又笑了。",
		alt: "érqiě wǒ hái yào gěi nǐ yī jiàn lǐwù tā yòu xiàole.",
		native: "And I have a gift for you... He laughed again.",
		words: [ '而且', '我', '还', '要', '给', '你', '一', '件', '礼物', '他', '又', '笑', '了' ],
		quizWords: [ '礼物' ]
	},
	{
		target: "啊，小家伙，小家伙，我喜欢听你这笑声。",
		alt: "a xiǎo jiāhuo xiǎo jiāhuo wǒ xǐhuān tīng nǐ zhè xiào shēng.",
		native: "Ah, little one, little one, I love to hear your laughter.",
		words: [ '啊', '小', '家伙', '小', '家伙', '我', '喜欢', '听', '你', '这', '笑', '声' ],
		quizSentence: true
	},
	{
		target: "这正好是我给你的礼物，这就好象水那样。",
		alt: "zhè zhènghǎo shì wǒ gěi nǐ de lǐwù zhè jiù hǎo xiàng shuǐ nàyàng.",
		native: "This is exactly my gift for you. It\'s like water.",
		words: [ '这', '正好', '是', '我', '给', '你', '的', '礼物', '这', '就', '好', '象', '水', '那样' ],
		quizSentence: true
	},
	{
		target: "你说的是什么，人们眼里的星星并不都一样。",
		alt: "nǐ shuō de shì shénme rénmen yǎn lǐ de xīngxīng bìng bù dōu yīyàng.",
		native: "What are you talking about? Not all stars look the same to people.",
		words: [ '你', '说', '的', '是', '什么', '人们', '眼', '里', '的', '星星', '并', '不', '都', '一样' ],
		quizSentence: true
	},
	{
		target: "对旅行的人来说，星星是向导，对别的人来说，星星只是些小亮光。",
		alt: "duì lǚxíng de rén lái shuō xīngxīng shì xiàngdǎo duì bié de rén lái shuō xīngxīng zhǐshì xiēxiǎo liàngguāng.",
		native: "To travelers, the stars are guides. To others, they are just little lights.",
		words: [ '对', '旅行', '的', '人', '来', '说', '星星', '是', '向导', '对', '别', '的', '人', '来', '说', '星星', '只是', '些小', '亮光' ],
		quizWords: [ '向导', '些小', '亮光' ]
	},
	{
		target: "对另外一些学者来说，星星就是他们探讨的学问。",
		alt: "duì lìngwài yīxiē xuézhě lái shuō xīngxīng jiùshì tāmen tàntǎo de xuéwèn.",
		native: "To other scholars, the stars are the things they study.",
		words: [ '对', '另外', '一些', '学者', '来', '说', '星星', '就是', '他们', '探讨', '的', '学问' ],
		quizWords: [ '学问', '探讨' ]
	},
	{
		target: "对我所遇见的那个实业家来说，星星是金钱。",
		alt: "duì wǒ suǒ yùjiàn dì nàgè shíyè jiā lái shuō xīngxīng shì jīnqián.",
		native: "To the businessman I met, the stars are money.",
		words: [ '对', '我', '所', '遇见', '的', '那个', '实业', '家', '来', '说', '星星', '是', '金钱' ],
		quizWords: [ '遇见', '金钱' ]
	},
	{
		target: "但是，所有这些星星都不会说话。",
		alt: "dànshì suǒyǒu zhèxiē xīngxīng dōu bù huì shuōhuà.",
		native: "But all these stars can\'t speak.",
		words: [ '但是', '所有', '这些', '星星', '都', '不', '会', '说话' ],
		quizSentence: true
	},
	{
		target: "你呢，你的那些星星将是任何人都不曾有过的。",
		alt: "nǐ ne nǐ dì nàxiē xīngxīng jiāng shì rènhé rén dōu bùcéng yǒuguò de.",
		native: "And you? Your stars will be like no one else\'s...",
		words: [ '你', '呢', '你', '的', '那些', '星星', '将', '是', '任何', '人', '都', '不曾', '有', '过', '的' ],
		quizSentence: true
	},
	{
		target: "你说的是什么，夜晚，当你望着天空的时候，",
		alt: "nǐ shuō de shì shénme yèwǎn dāng nǐ wàngzhe tiānkōng de shíhòu,",
		native: "What are you talking about? At night, when you look at the sky,",
		words: [ '你', '说', '的', '是', '什么', '夜晚', '当', '你', '望', '着', '天空', '的', '时候' ],
		quizSentence: true
	},
	{
		target: "既然我就住在其中一颗星星上，既然我在其中一颗星星上笑着，",
		alt: "jìrán wǒ jiù zhù zài qízhōng yī kē xīngxīng shàng jìrán wǒ zài qízhōng yī kē xīngxīng shàng xiàozhe,",
		native: "since I live on one of the stars, since I laugh on one of the stars,",
		words: [ '既然', '我', '就', '住', '在', '其中', '一', '颗', '星星', '上', '既然', '我', '在', '其中', '一', '颗', '星星', '上', '笑', '着' ],
		quizSentence: true
	},
	{
		target: "那么对你来说，就好象所有的星星都在笑。",
		alt: "nàme duì nǐ lái shuō jiù hǎo xiàng suǒyǒu de xīngxīng dōu zài xiào.",
		native: "then for you, it will be as if all the stars are laughing.",
		words: [ '那么', '对', '你', '来', '说', '就', '好', '象', '所有', '的', '星星', '都', '在', '笑' ],
		quizSentence: true
	},
	{
		target: "那么你将看到的星星就是会笑的星星。",
		alt: "nàme nǐ jiāng kàn dào de xīngxīng jiùshì huì xiào de xīngxīng.",
		native: "Then the stars you will see will be laughing stars.",
		words: [ '那么', '你', '将', '看', '到', '的', '星星', '就是', '会', '笑', '的', '星星' ],
		quizSentence: true
	},
	{
		target: "这时，他又笑了，那么，在你得到了安慰之后（人们总是会自我安慰的），",
		alt: "zhè shí tā yòu xiàole nàme zài nǐ dédàole ānwèi zhīhòu (rénmen zǒng shì huì zìwǒ ānwèi de),",
		native: "Then he laughed again. Then, after you have been comforted (people always comfort themselves),",
		words: [ '这', '时', '他', '又', '笑', '了', '那么', '在', '你', '得', '到了', '安慰', '之后', '人们', '总', '是', '会', '自我', '安慰', '的' ],
		quizWords: [ '自我' ]
	},
	{
		target: "你就会因为认识了我而感到高兴，你将永远是我的朋友。",
		alt: "nǐ jiù huì yīnwèi rènshíle wǒ ér gǎndào gāoxìng nǐ jiāng yǒngyuǎn shì wǒ de péngyǒu.",
		native: "you will be happy to have known me. You will always be my friend.",
		words: [ '你', '就', '会', '因为', '认', '识', '了', '我', '而', '感到', '高兴', '你', '将', '永远', '是', '我', '的', '朋友' ],
		quizWords: [ '认' ]
	},
	{
		target: "你就会想要同我一起笑，有时，你会为了快乐而不知不觉地打开窗户。",
		alt: "nǐ jiù huì xiǎng yào tóng wǒ yīqǐ xiào yǒushí nǐ huì wèile kuàilè ér bùzhī bù jué de dǎkāi chuānghù.",
		native: "You will want to laugh with me. Sometimes you will open the window unconsciously for fun.",
		words: [ '你', '就', '会', '想', '要', '同', '我', '一起', '笑', '有时', '你', '会', '为了', '快乐', '而', '不知', '不', '觉', '地', '打开', '窗户' ],
		quizWords: [ '有时', '快乐' ]
	},
	{
		target: "你的朋友们会奇怪地看着你笑着仰望天空。",
		alt: "nǐ de péngyǒumen huì qíguài de kànzhe nǐ xiàozhe yǎngwàng tiānkōng.",
		native: "Your friends will look at you in wonder, laughing and looking up at the sky.",
		words: [ '你', '的', '朋友们', '会', '奇怪', '地', '看着', '你', '笑', '着', '仰望', '天空' ],
		quizWords: [ '仰望' ]
	},
	{
		target: "那时，你就可以对他们说，是的，星星总是引我欢笑。",
		alt: "nà shí nǐ jiù kěyǐ duì tāmen shuō shì de xīngxīng zǒng shì yǐn wǒ huānxiào.",
		native: "Then you can say to them, yes, the stars always make me laugh.",
		words: [ '那', '时', '你', '就', '可以', '对', '他们', '说', '是', '的', '星星', '总', '是', '引', '我', '欢笑' ],
		quizWords: [ '欢笑', '引' ]
	},
	{
		target: "他们会以为你发疯了，我的恶作剧将使你难堪。",
		alt: "tāmen huì yǐwéi nǐ fāfēngle wǒ de èzuòjù jiāng shǐ nǐ nánkān.",
		native: "They will think you are crazy and my pranks will embarrass you...",
		words: [ '他们', '会', '以为', '你', '发', '疯了', '我', '的', '恶作剧', '将', '使', '你', '难堪' ],
		quizWords: [ '疯了', '恶作剧' ]
	},
	{
		target: "这时，他又笑了，这就好象我并没有给你星星。",
		alt: "zhè shí tā yòu xiàole zhè jiù hǎo xiàng wǒ bìng méiyǒu gěi nǐ xīngxīng.",
		native: "Then he laughed again. It is as if I did not give you stars.",
		words: [ '这', '时', '他', '又', '笑', '了', '这', '就', '好', '象', '我', '并', '没有', '给', '你', '星星' ],
		quizSentence: true
	},
	{
		target: "而是给你一大堆会笑出声来的小铃铛，他仍然笑着，随后他变得严肃起来。",
		alt: "ér shì gěi nǐ yī dà duī huì xiào chū shēng lái de xiǎo língdāng tā réngrán xiàozhe suíhòu tā biàn dé yánsù qǐlái.",
		native: "But I gave you a bunch of little bells that make you laugh... He was still laughing. Then he became serious.",
		words: [ '而', '是', '给', '你', '一', '大', '堆', '会', '笑', '出', '声', '来', '的', '小', '铃铛', '他', '仍然', '笑', '着', '随后', '他', '变', '得', '严肃', '起来' ],
		quizWords: [ '铃铛' ]
	},
	{
		target: "今天夜里，你知道，不要来了，我不离开你。",
		alt: "jīntiān yèlǐ nǐ zhīdào bùyào láile wǒ bù líkāi nǐ.",
		native: "Tonight... you know... don\'t come. I won\'t leave you.",
		words: [ '今天', '夜里', '你', '知道', '不要', '来了', '我', '不', '离开', '你' ],
		quizSentence: true
	},
	{
		target: "我将会象是很痛苦的样子，我有点象要死去似的。",
		alt: "wǒ jiāng huì xiàng shì hěn tòngkǔ de yàngzǐ wǒ yǒudiǎn xiàng yào sǐqù sì de.",
		native: "I will be in great pain... I will feel like I am dying.",
		words: [ '我', '将', '会', '象', '是', '很', '痛苦', '的', '样子', '我', '有点', '象', '要', '死去', '似', '的' ],
		quizSentence: true
	},
	{
		target: "就是这么回事，你就别来看这些了，没有必要，我不离开你。",
		alt: "jiùshì zhème huí shì nǐ jiù bié lái kàn zhèxiēle méiyǒu bìyào wǒ bù líkāi nǐ.",
		native: "That\'s it. Don\'t come to see these things. There is no need. I won\'t leave you.",
		words: [ '就是', '这么', '回', '事', '你', '就', '别', '来', '看', '这', '些', '了', '没有', '必要', '我', '不', '离开', '你' ],
		quizSentence: true
	},
	{
		target: "可是他担心起来，我对你说这些，这也是因为蛇的缘故。",
		alt: "kěshì tā dānxīn qǐlái wǒ duì nǐ shuō zhèxiē zhè yěshì yīnwèi shé de yuángù.",
		native: "But he became worried. I tell you this... It is also because of the snake.",
		words: [ '可是', '他', '担心', '起来', '我', '对', '你', '说', '这些', '这', '也是', '因为', '蛇', '的', '缘故' ],
		quizSentence: true
	},
	{
		target: "别让它咬了你，蛇是很坏的，它随意咬人。",
		alt: "bié ràng tā yǎole nǐ shé shì hěn huài de tā suíyì yǎo rén.",
		native: "Don\'t let it bite you... Snakes are very bad. They bite people at random...",
		words: [ '别', '让', '它', '咬', '了', '你', '蛇', '是', '很', '坏', '的', '它', '随意', '咬', '人' ],
		quizWords: [ '咬', '随意' ]
	},
	{
		target: "我不离开你，这时，他似乎有点放心了。",
		alt: "wǒ bù líkāi nǐ zhè shí tā sìhū yǒudiǎn fàngxīnle.",
		native: "I won\'t leave you. He seemed a little relieved at this moment.",
		words: [ '我', '不', '离开', '你', '这', '时', '他', '似乎', '有点', '放', '心', '了' ],
		quizSentence: true
	},
	{
		target: "对了，它咬第二口的时候就没有毒液了。",
		alt: "duìle tā yǎo dì èr kǒu de shíhòu jiù méiyǒu dúyèle.",
		native: "By the way, the second bite had no venom...",
		words: [ '对了', '它', '咬', '第', '二', '口', '的', '时候', '就', '没有', '毒', '液', '了' ],
		quizWords: [ '液' ]
	},
	{
		target: "这天夜里，我没有看到他起程，他不声不响地跑了。",
		alt: "zhè tiān yèlǐ wǒ méiyǒu kàn dào tā qǐchéng tā bù shēng bù xiǎng de pǎole.",
		native: "That night I didn\'t see him set off. He ran away silently.",
		words: [ '这', '天', '夜里', '我', '没有', '看', '到', '他', '起程', '他', '不', '声', '不', '响', '地', '跑了' ],
		quizWords: [ '起程' ]
	},
	{
		target: "当我终于赶上他的时候，他坚定地快步走着。",
		alt: "dāng wǒ zhōngyú gǎn shàng tā de shíhòu tā jiāndìng dì kuài bù zǒuzhe.",
		native: "When I finally caught up with him, he was walking quickly and firmly.",
		words: [ '当', '我', '终于', '赶', '上', '他', '的', '时候', '他', '坚定', '地', '快', '步', '走', '着' ],
		quizWords: [ '坚定' ]
	},
	{
		target: "他只是对我说道，啊，你在这儿，于是他拉着我的手，但是他仍然很担心。",
		alt: "tā zhǐshì duì wǒ shuōdao a nǐ zài zhè\'er yúshì tā lāzhe wǒ de shǒu dànshì tā réngrán hěn dānxīn.",
		native: "He just said to me, \"Ah, you are here...\" Then he took my hand, but he was still worried.",
		words: [ '他', '只是', '对', '我', '说道', '啊', '你', '在', '这', '儿', '于是', '他', '拉', '着', '我', '的', '手', '但是', '他', '仍然', '很', '担心' ],
		quizSentence: true
	},
	{
		target: "你不该这样，你会难受的，我会象是死去的样子，但这不会是真的。",
		alt: "nǐ bù gāi zhèyàng nǐ huì nánshòu de wǒ huì xiàng shì sǐqù de yàngzǐ dàn zhè bù huì shì zhēn de.",
		native: "You shouldn\'t do this. You will feel uncomfortable. I will feel like I am dead, but it won\'t be true...",
		words: [ '你', '不', '该', '这样', '你', '会', '难受', '的', '我', '会', '象', '是', '死去', '的', '样子', '但', '这', '不', '会', '是', '真', '的' ],
		quizWords: [ '难受' ]
	},
	{
		target: "我默默无言，你明白，路很远。",
		alt: "wǒ mòmò wú yán nǐ míngbái lù hěn yuǎn.",
		native: "I was silent. You understand. The road is long.",
		words: [ '我', '默默', '无', '言', '你', '明白', '路', '很', '远' ],
		quizSentence: true
	},
	{
		target: "我不能带着这付身躯走，它太重了。",
		alt: "wǒ bùnéng dàizhe zhè fù shēnqū zǒu tā tài zhòngle.",
		native: "I can\'t carry this body with me. It is too heavy.",
		words: [ '我', '不能', '带', '着', '这', '付', '身躯', '走', '它', '太', '重', '了' ],
		quizWords: [ '付', '身躯' ]
	},
	{
		target: "我依然沉默不语，但是，这就好象剥落的旧树皮一样。",
		alt: "wǒ yīrán chénmò bù yǔ dànshì zhè jiù hǎo xiàng bōluò de jiù shù pí yīyàng.",
		native: "I am still silent. But it is like the peeling old bark.",
		words: [ '我', '依然', '沉默', '不', '语', '但是', '这', '就', '好', '象', '剥落', '的', '旧', '树', '皮', '一样' ],
		quizWords: [ '剥落' ]
	},
	{
		target: "旧树皮，并没有什么可悲的，我还是沉默不语。",
		alt: "jiù shù pí bìng méiyǒu shé me kěbēi de wǒ háishì chénmò bù yǔ.",
		native: "There is nothing sad about the old bark. I am still silent.",
		words: [ '旧', '树', '皮', '并', '没有', '什', '么', '可悲', '的', '我', '还是', '沉默', '不', '语' ],
		quizWords: [ '可悲' ]
	},
	{
		target: "他有些泄气了，但是他又振作起来。",
		alt: "tā yǒuxiē xièqìle dànshì tā yòu zhènzuò qǐlái.",
		native: "He was a little discouraged, but he pulled himself together again.",
		words: [ '他', '有些', '泄', '气', '了', '但是', '他', '又', '振作', '起来' ],
		quizSentence: true
	},
	{
		target: "这将是蛮好的，你知道，我也一定会看星星的。",
		alt: "zhè jiāng shì mán hǎo de nǐ zhīdào wǒ yě yīdìng huì kàn xīngxīng de.",
		native: "This will be nice, you know. I will definitely look at the stars.",
		words: [ '这', '将', '是', '蛮', '好', '的', '你', '知道', '我', '也', '一定', '会', '看', '星星', '的' ],
		quizSentence: true
	},
	{
		target: "所有的星星都将是带有生了锈的辘轳的井，所有的星星都会倒水给我喝。",
		alt: "suǒyǒu de xīngxīng dōu jiāng shì dài yǒu shēngle xiù de lùlú de jǐng suǒyǒu de xīngxīng dūhuì dào shuǐ gěi wǒ hē.",
		native: "All the stars will be wells with rusty windlasses. All the stars will pour water for me to drink...",
		words: [ '所有', '的', '星星', '都', '将', '是', '带', '有', '生', '了', '锈', '的', '辘轳', '的', '井', '所有', '的', '星星', '都会', '倒', '水', '给', '我', '喝' ],
		quizWords: [ '锈' ]
	},
	{
		target: "我还是沉默不语，这将是多么好玩啊，你将有五亿个铃铛。",
		alt: "wǒ háishì chénmò bù yǔ zhè jiāng shì duōme hǎowán a nǐ jiāng yǒu wǔ yì gè língdāng.",
		native: "I remained silent. How fun it will be. You will have 500 million bells.",
		words: [ '我', '还是', '沉默', '不', '语', '这', '将', '是', '多么', '好玩', '啊', '你', '将', '有', '五', '亿', '个', '铃铛' ],
		quizSentence: true
	},
	{
		target: "我将有五亿口水井，这时，他也沉默了，因为他在哭。",
		alt: "wǒ jiāng yǒu wǔ yì kǒu shuǐjǐng zhè shí tā yě chénmòle yīnwèi tā zài kū.",
		native: "I will have 500 million wells... Then he also fell silent because he was crying.",
		words: [ '我', '将', '有', '五', '亿', '口', '水井', '这', '时', '他', '也', '沉', '默', '了', '因为', '他', '在', '哭' ],
		quizSentence: true
	},
	{
		target: "就是这儿，让我自个儿走一步吧。",
		alt: "jiùshì zhè\'er ràng wǒ zì gě er zǒu yībù ba.",
		native: "Here it is. Let me take a step by myself.",
		words: [ '就是', '这', '儿', '让', '我', '自', '个', '儿', '走', '一', '步', '吧' ],
		quizSentence: true
	},
	{
		target: "他这时坐下来，因为他害怕了，他却仍然说道。",
		alt: "tā zhè shí zuò xiàlái yīnwèi tā hàipàle tā què réngrán shuōdao.",
		native: "He sat down because he was afraid. But he still said...",
		words: [ '他', '这', '时', '坐', '下来', '因为', '他', '害', '怕', '了', '他', '却', '仍然', '说道' ],
		quizSentence: true
	},
	{
		target: "你知道，我的花，我是要对她负责的。",
		alt: "nǐ zhīdào wǒ de huā wǒ shì yào duì tā fùzé de.",
		native: "You know... my flower... I am responsible for her.",
		words: [ '你', '知道', '我', '的', '花', '我', '是', '要', '对', '她', '负责', '的' ],
		quizSentence: true
	},
	{
		target: "而她又是那么弱小，她又是那么天真。",
		alt: "ér tā yòu shì nàme ruòxiǎo tā yòu shì nàme tiānzhēn.",
		native: "And she is so weak and so innocent.",
		words: [ '而', '她', '又', '是', '那么', '弱小', '她', '又', '是', '那么', '天真' ],
		quizSentence: true
	},
	{
		target: "她只有四根微不足道的刺，保护自己，抵抗外敌。",
		alt: "tā zhǐyǒu sì gēn wēibùzúdào de cì bǎohù zìjǐ dǐkàng wàidí.",
		native: "She only has four insignificant thorns to protect herself from the enemy...",
		words: [ '她', '只有', '四', '根', '微不足道', '的', '刺', '保护', '自己', '抵抗', '外', '敌' ],
		quizWords: [ '敌', '微不足道', '抵抗' ]
	},
	{
		target: "我也坐了下来，因为我再也站立不住了。",
		alt: "wǒ yě zuòle xiàlái yīnwèi wǒ zài yě zhànlì bù zhùle.",
		native: "I also sat down because I could no longer stand.",
		words: [ '我', '也', '坐', '了', '下来', '因为', '我', '再', '也', '站立', '不', '住', '了' ],
		quizSentence: true
	},
	{
		target: "他说道，就是这些，全都说啦。",
		alt: "tā shuōdao jiùshì zhèxiē quándōu shuō la.",
		native: "He said That\'s all... I\'ve said it all...",
		words: [ '他', '说道', '就是', '这些', '全都', '说', '啦' ],
		quizWords: [ '啦' ]
	},
	{
		target: "他犹豫了一下，然后站起来，他迈出了一步，而我却动弹不得。",
		alt: "tā yóuyùle yīxià ránhòu zhàn qǐlái tā mài chūle yībù ér wǒ què dòngtán bùdé.",
		native: "He hesitated, then stood up. He took a step, but I couldn\'t move.",
		words: [ '他', '犹', '豫', '了', '一下', '然后', '站', '起来', '他', '迈', '出', '了', '一', '步', '而', '我', '却', '动弹', '不得' ],
		quizWords: [ '犹', '迈', '豫', '动弹', '不得' ]
	},
	{
		target: "在他的脚踝子骨附近，一道黄光闪了一下。",
		alt: "zài tā de jiǎohuái zǐ gǔ fùjìn yīdào huáng guāng shǎnle yīxià.",
		native: "A flash of yellow light flashed near his ankle.",
		words: [ '在', '他', '的', '脚踝', '子', '骨', '附近', '一道', '黄', '光', '闪', '了', '一下' ],
		quizWords: [ '光', '骨', '一道', '脚踝' ]
	},
	{
		target: "刹那间他一动也不动了，他没有叫喊，他轻轻地象一棵树一样倒在地上。",
		alt: "chà nà jiān tā yīdòng yě bù dòngle tā méiyǒu jiàohǎn tā qīng qīng de xiàng yī kē shù yīyàng dào zài dìshàng.",
		native: "In an instant he was motionless. He didn\'t cry out. He fell softly to the ground like a tree.",
		words: [ '刹', '那', '间', '他', '一', '动', '也', '不', '动', '了', '他', '没有', '叫喊', '他', '轻', '轻', '地', '象', '一', '棵', '树', '一样', '倒', '在', '地上' ],
		quizWords: [ '刹' ]
	},
	{
		target: "大概由于沙地的缘故，连一点响声都没有。",
		alt: "dàgài yóuyú shā dì de yuángù lián yīdiǎn xiǎngshēng dōu méiyǒu.",
		native: "There was no sound, probably because of the sand.",
		words: [ '大概', '由于', '沙', '地', '的', '缘故', '连', '一点', '响声', '都', '没有' ],
		quizSentence: true
	}
];
