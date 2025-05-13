const gLang = 'zh';
const gBook = 'blade.runner';
const gChap = '5';
const gMode = 'zh';
const gSpeed = '120';

const slideData =
[
	{
		target: "喜欢我们的猫头鹰吗?",
		alt: "Xǐhuān　wǒmen　de　māotóuyīng　ma？",
		native: "Like our owl?",
		words: [ '喜欢', '我们', '的', '猫头鹰', '吗' ],
		quizSentence: true
	},
	{
		target: "人工制作的吗?",
		alt: "Réngōng　zhìzuò　de　ma？",
		native: "Is it artificially made?",
		words: [ '人工', '制作', '的', '吗' ],
		quizSentence: true
	},
	{
		target: "当然是。",
		alt: "Dāngrán　shì。",
		native: "of course.",
		words: [ '当然', '是' ]
	},
	{
		target: "一定很贵。",
		alt: "Yīdìng　hěn　guì。",
		native: "Must be expensive.",
		words: [ '一定', '很', '贵' ],
		quizSentence: true
	},
	{
		target: "非常贵！",
		alt: "Fēicháng　guì！",
		native: "Very expensive!",
		words: [ '非常', '贵' ]
	},
	{
		target: "我是瑞秋。",
		alt: "Wǒ　shì　ruìqiū。",
		native: "I\'m Rachel.",
		words: [ '我', '是', '瑞秋' ],
		quizSentence: true
	},
	{
		target: "戴克。",
		alt: "dàikè。",
		native: "Dike.",
		words: [ '戴克' ]
	},
	{
		target: "你好像觉得我们的工作对大众无益。",
		alt: "Nǐ　hǎoxiàng　juédé　wǒmen　de　gōngzuò　duì　dàzhòng　wúyì。",
		native: "You seem to think that our work is not beneficial to the public.",
		words: [ '你', '好像', '觉得', '我们', '的', '工作', '对', '大众', '无益' ],
		quizWords: [ '大众', '无益' ]
	},
	{
		target: "复制者和其他机器一样。",
		alt: "Fùzhì　zhě　hé　qítā　jīqì　yīyàng。",
		native: "Replicators are like other machines.",
		words: [ '复制', '者', '和', '其他', '机器', '一样' ],
		quizWords: [ '机器' ]
	},
	{
		target: "他们既有益又危险。",
		alt: "Tāmen　jì　yǒuyì　yòu　wéixiǎn。",
		native: "They are both beneficial and dangerous.",
		words: [ '他们', '既', '有益', '又', '危险' ],
		quizWords: [ '既', '有益', '危险' ]
	},
	{
		target: "只不过他们有益的方面，不关我的事。",
		alt: "Zhǐ　bùguò　tāmen　yǒuyì　de　fāngmiàn、　bù　guān　wǒ　de　shì。",
		native: "It’s just that their beneficial aspects are none of my business.",
		words: [ '只', '不过', '他们', '有益', '的', '方面', '不', '关', '我', '的', '事' ],
		quizWords: [ '只', '关' ]
	},
	{
		target: "可以请教你一个私人问题吗?",
		alt: "Kěyǐ　qǐngjiào　nǐ　yīgè　sīrén　wèntí　ma？",
		native: "Can I ask you a personal question?",
		words: [ '可以', '请教', '你', '一个', '私人', '问题', '吗' ],
		quizWords: [ '请教' ]
	},
	{
		target: "当然。",
		alt: "Dāngrán。",
		native: "certainly.",
		words: [ '当然' ]
	},
	{
		target: "你曾错误地令杀死人类吗?",
		alt: "Nǐ　céng　cuòwù　de　lìng　shā　sǐ　rénlèi　ma？",
		native: "Have you ever mistakenly ordered the killing of a human being?",
		words: [ '你', '曾', '错误', '地', '令', '杀', '死', '人类', '吗' ],
		quizWords: [ '地', '曾', '令' ]
	},
	{
		target: "没有。",
		alt: "Méiyǒu。",
		native: "No.",
		words: [ '没有' ]
	},
	{
		target: "但你的职务有此风险。",
		alt: "Dàn　nǐ　de　zhíwù　yǒu　cǐ　fēngxiǎn。",
		native: "But your position carries this risk.",
		words: [ '但', '你', '的', '职务', '有', '此', '风险' ],
		quizWords: [ '风险', '此' ]
	},
	{
		target: "你们在进行移情测试吗?",
		alt: "Nǐmen　zài　jìnxíng　yí　qíng　cèshì　ma？",
		native: "Are you doing empathy testing?",
		words: [ '你们', '在', '进行', '移', '情', '测试', '吗' ],
		quizWords: [ '移', '进行', '情' ]
	},
	{
		target: "充血反应引起毛细管扩大。",
		alt: "Chōngxuè　fǎnyìng　yǐnqǐ　máoxìguǎn　kuòdà。",
		native: "Congestive reaction causes capillary dilation.",
		words: [ '充血', '反应', '引起', '毛细管', '扩大' ],
		quizWords: [ '扩大', '毛细管', '充血', '引起' ]
	},
	{
		target: "瞳孔波动。",
		alt: "Tóngkǒng　bōdòng。",
		native: "Pupil fluctuations.",
		words: [ '瞳孔', '波动' ],
		quizWords: [ '波动', '瞳孔' ]
	},
	{
		target: "虹膜不自觉地扩大。",
		alt: "Hóngmó　bù　zìjué　de　kuòdà。",
		native: "The iris enlarges involuntarily.",
		words: [ '虹膜', '不', '自觉', '地', '扩大' ],
		quizWords: [ '虹膜', '自觉' ]
	},
	{
		target: "我们称它\"沃特-坎普夫\"测试。",
		alt: "Wǒmen　chēng　tā\"wòtè―kǎnpǔfū\"cèshì。",
		native: "We call it the \"Wout-Kampf\" test.",
		words: [ '我们', '称', '它沃特坎普夫测试' ],
		quizWords: [ '称' ]
	},
	{
		target: "戴克先生 这是艾尔顿 泰里尔博士。",
		alt: "Dàikè　xiānshēng　zhè　shì　ài　ěr　dùn　tàilǐěr　bóshì。",
		native: "Mr. Dyke This is Dr. Elton Tyrell.",
		words: [ '戴克', '先生', '这', '是', '艾', '尔', '顿', '泰里尔', '博士' ],
		quizWords: [ '博士', '尔', '顿', '艾' ]
	},
	{
		target: "示范一下。",
		alt: "Shìfàn　yīxià。",
		native: "Demonstrate.",
		words: [ '示范', '一下' ],
		quizWords: [ '示范', '一下' ]
	},
	{
		target: "我想看看它运作 被测试者在哪里?",
		alt: "Wǒ　xiǎng　kàn　kàn　tā　yùnzuò　bèi　cèshì　zhě　zài　nǎlǐ？",
		native: "I want to see it working Where are the test subjects?",
		words: [ '我', '想', '看', '看', '它', '运作', '被', '测试', '者', '在', '哪里' ],
		quizWords: [ '哪里', '运作' ]
	},
	{
		target: "我要看它测试人类 我要看到一个阴性样本。",
		alt: "Wǒ　yào　kàn　tā　cèshì　rénlèi　wǒ　yào　kàn　dào　yīgè　yīnxìng　yàngběn。",
		native: "I want to see it tested on humans I want to see a negative sample.",
		words: [ '我', '要', '看', '它', '测试', '人类', '我', '要', '看', '到', '一个', '阴性', '样本' ],
		quizWords: [ '阴性', '样本' ]
	},
	{
		target: "我才会让你测试阳性的 --你想证明什么?",
		alt: "Wǒ　cái　huì　ràng　nǐ　cèshì　yángxìng　de　――nǐ　xiǎng　zhèngmíng　shénme？",
		native: "That\'s why I let you test positive --What do you want to prove?",
		words: [ '我', '才', '会', '让', '你', '测试', '阳性', '的', '你', '想', '证明', '什么' ],
		quizWords: [ '证明', '阳性', '让' ]
	},
	{
		target: "就当是纵容我一下好了。",
		alt: "Jiù　dāng　shì　zòngróng　wǒ　yīxià　hǎo　le。",
		native: "Just think of it as pampering me.",
		words: [ '就', '当', '是', '纵容', '我', '一下', '好', '了' ],
		quizWords: [ '当', '纵容' ]
	},
	{
		target: "在你身上吗?",
		alt: "Zài　nǐ　shēnshang　ma？",
		native: "on you?",
		words: [ '在', '你', '身上', '吗' ],
		quizWords: [ '身上' ]
	},
	{
		target: "测试她！",
		alt: "Cèshì　tā！",
		native: "test her!",
		words: [ '测试', '她' ],
		quizSentence: true
	},
	{
		target: "光线太亮了。",
		alt: "Guāngxiàn　tài　liàng　le。",
		native: "The light is too bright.",
		words: [ '光线', '太', '亮', '了' ],
		quizWords: [ '亮', '光线' ]
	},
	{
		target: "介意我抽烟吗?",
		alt: "Jièyì　wǒ　chōuyān　ma？",
		native: "Do you mind if I smoke?",
		words: [ '介意', '我', '抽烟', '吗' ],
		quizWords: [ '介意', '抽烟' ]
	},
	{
		target: "那对测试没有影响。",
		alt: "Nà　duì　cèshì　méiyǒu　yǐngxiǎng。",
		native: "That has no effect on testing.",
		words: [ '那', '对', '测试', '没有', '影响' ],
		quizWords: [ '影响' ]
	},
	{
		target: "好！我要问你一系列问题。",
		alt: "Hǎo！　Wǒ　yào　wèn　nǐ　yī　xìliè　wèntí。",
		native: "good! I\'m going to ask you a series of questions.",
		words: [ '好', '我', '要', '问', '你', '一', '系列', '问题' ],
		quizWords: [ '问', '系列' ]
	},
	{
		target: "放松，尽可能简单的回答我。",
		alt: "Fàngsōng、　jǐn　kěnéng　jiǎndān　de　huídá　wǒ。",
		native: "Relax and answer me as simply as possible.",
		words: [ '放松', '尽', '可能', '简单', '的', '回答', '我' ],
		quizWords: [ '放松', '尽', '简单' ]
	},
	{
		target: "你过生日，有人送你一个小牛皮皮夹。",
		alt: "Nǐ　guò　shēngrì、　yǒurén　sòng　nǐ　yīgè　xiǎo　niúpí　pí　jiá。",
		native: "It’s your birthday and someone gives you a calfskin wallet.",
		words: [ '你', '过', '生日', '有人', '送', '你', '一个', '小', '牛皮', '皮', '夹' ],
		quizWords: [ '有人', '夹', '送', '皮', '牛皮', '生日' ]
	},
	{
		target: "我不会接受。",
		alt: "Wǒ　bù　huì　jiēshòu。",
		native: "I won\'t accept it.",
		words: [ '我', '不', '会', '接受' ],
		quizWords: [ '接受' ]
	},
	{
		target: "同时，我还会把此人报告给警察。",
		alt: "Tóngshí、　wǒ　hái　huì　bǎ　cǐ　rén　bàogào　gěi　jǐngchá。",
		native: "Also, I will report this person to the police.",
		words: [ '同时', '我', '还', '会', '把', '此', '人', '报告', '给', '警察' ],
		quizWords: [ '同时', '把', '报告' ]
	},
	{
		target: "你有个小男孩。",
		alt: "Nǐ　yǒu　gè　xiǎo　nánhái。",
		native: "You have a little boy.",
		words: [ '你', '有', '个', '小', '男孩' ],
		quizWords: [ '男孩' ]
	},
	{
		target: "他给你看他的蝴蝶标本和捕蝶罐。",
		alt: "Tā　gěi　nǐ　kàn　tā　de　húdié　biāoběn　hé　bǔ　dié　guàn。",
		native: "He shows you his butterfly specimens and butterfly jars.",
		words: [ '他', '给', '你', '看', '他', '的', '蝴蝶', '标本', '和', '捕', '蝶', '罐' ],
		quizWords: [ '标本', '蝶', '罐', '蝴蝶' ]
	},
	{
		target: "我带他去看医生。",
		alt: "Wǒ　dài　tā　qù　kàn　yīshēng。",
		native: "I took him to the doctor.",
		words: [ '我', '带', '他', '去', '看', '医生' ],
		quizWords: [ '带', '医生' ]
	},
	{
		target: "你正在看电视。",
		alt: "Nǐ　zhèngzài　kàn　diànshì。",
		native: "You are watching TV.",
		words: [ '你', '正在', '看', '电视' ],
		quizWords: [ '正在', '电视' ]
	},
	{
		target: "突然你发现手臂上有只黄蜂。",
		alt: "Túrán　nǐ　fāxiàn　shǒubì　shàng　yǒu　zhǐ　huángfēng。",
		native: "Suddenly you notice a wasp on your arm.",
		words: [ '突然', '你', '发现', '手臂', '上', '有', '只', '黄蜂' ],
		quizWords: [ '手臂', '黄蜂' ]
	},
	{
		target: "我会打死它。",
		alt: "Wǒ　huì　dǎ　sǐ　tā。",
		native: "I\'ll kill it.",
		words: [ '我', '会', '打', '死', '它' ],
		quizSentence: true
	},
	{
		target: "你在看杂志，看到一张整页的裸女照片。",
		alt: "Nǐ　zài　kàn　zázhì、　kàn　dào　yī　zhāng　zhěng　yè　de　luǒ　nu:３　zhàopiàn。",
		native: "You are reading a magazine and see a full page photo of a naked woman.",
		words: [ '你', '在', '看', '杂志', '看', '到', '一', '张', '整', '页', '的', '裸', '女', '照片' ],
		quizWords: [ '杂志', '整', '页', '照片', '裸', '张' ]
	},
	{
		target: "这在测试复制人测试 还是同性恋测试?戴克先生。",
		alt: "Zhè　zài　cèshì　fùzhì　rén　cèshì　háishì　tóngxìngliàn　cèshì？　dàikè　xiānshēng。",
		native: "Is this a test for replicants or a test for homosexuality? Mr. Decker.",
		words: [ '这', '在', '测试', '复制', '人', '测试', '还是', '同性恋', '测试', '戴克', '先生' ],
		quizWords: [ '同性恋' ]
	},
	{
		target: "请只回答问题，别说其他的。",
		alt: "Qǐng　zhǐ　huídá　wèntí、　bié　shuō　qítā　de。",
		native: "Please just answer the question and nothing else.",
		words: [ '请', '只', '回答', '问题', '别', '说', '其他', '的' ],
		quizSentence: true
	},
	{
		target: "你给你老公看。",
		alt: "Nǐ　gěi　nǐ　lǎogōng　kàn。",
		native: "Show it to your husband.",
		words: [ '你', '给', '你', '老公', '看' ],
		quizWords: [ '老公' ]
	},
	{
		target: "他很喜欢，而且把它挂在你们卧室墙上。",
		alt: "Tā　hěn　xǐhuān、　érqiě　bǎ　tā　guà　zài　nǐmen　wòshì　qiáng　shàng。",
		native: "He loved it and hung it on your bedroom wall.",
		words: [ '他', '很', '喜欢', '而且', '把', '它', '挂', '在', '你们', '卧室', '墙', '上' ],
		quizWords: [ '墙', '而且', '卧室', '挂' ]
	},
	{
		target: "我不会让他挂。",
		alt: "Wǒ　bù　huì　ràng　tā　guà。",
		native: "I won’t let him hang.",
		words: [ '我', '不', '会', '让', '他', '挂' ],
		quizSentence: true
	},
	{
		target: "为什么?",
		alt: "Wèishéme？",
		native: "Why?",
		words: [ '为什么' ],
		quizSentence: true
	},
	{
		target: "他有我就够了。",
		alt: "Tā　yǒu　wǒ　jiù　gòu　le。",
		native: "It’s enough for him to have me.",
		words: [ '他', '有', '我', '就', '够', '了' ],
		quizWords: [ '够' ]
	},
	{
		target: "最后一个问题。",
		alt: "Zuìhòu　yīgè　wèntí。",
		native: "last question.",
		words: [ '最后', '一个', '问题' ],
		quizWords: [ '最后' ]
	},
	{
		target: "你观赏一出舞台剧 剧中正在举行宴会。",
		alt: "Nǐ　guānshǎng　yī　chū　wǔtái　jù　jù　zhōng　zhèngzài　jǔxíng　yànhuì。",
		native: "You are watching a stage play and a banquet is being held in the play.",
		words: [ '你', '观赏', '一', '出', '舞台', '剧', '剧', '中', '正在', '举行', '宴会' ],
		quizWords: [ '剧', '舞台', '观赏', '宴会', '举行' ]
	},
	{
		target: "宾客在享受开胃菜生蚝。",
		alt: "Bīnkè　zài　xiǎngshòu　kāiwèi　cài　shēngháo。",
		native: "Guests enjoying oyster appetizers.",
		words: [ '宾客', '在', '享受', '开胃', '菜', '生蚝' ],
		quizWords: [ '宾客', '开胃', '享受', '菜', '生蚝' ]
	},
	{
		target: "但是盘子里面却是煮熟的狗肉。",
		alt: "Dànshì　pánzi　lǐmiàn　què　shì　zhǔ　shú　de　gǒuròu。",
		native: "But there is cooked dog meat on the plate.",
		words: [ '但是', '盘子', '里面', '却', '是', '煮', '熟', '的', '狗肉' ],
		quizWords: [ '熟', '盘子', '煮', '却', '狗肉' ]
	},
	{
		target: "请出去一下，瑞秋。",
		alt: "Qǐng　chūqù　yīxià、　ruìqiū。",
		native: "Please step outside, Rachel.",
		words: [ '请', '出去', '一下', '瑞秋' ],
		quizWords: [ '出去' ]
	},
	{
		target: "谢谢。",
		alt: "Xièxiè。",
		native: "Thanks.",
		words: [ '谢谢' ],
		quizWords: [ '谢谢' ]
	},
	{
		target: "她是复制人，对不对?",
		alt: "Tā　shì　fùzhì　rén、　duì　bùduì？",
		native: "She is a clone, right?",
		words: [ '她', '是', '复制', '人', '对', '不对' ],
		quizWords: [ '不对' ]
	},
	{
		target: "我很惊讶你能发现。",
		alt: "Wǒ　hěn　jīngyà　nǐ　néng　fāxiàn。",
		native: "I\'m surprised you found out.",
		words: [ '我', '很', '惊讶', '你', '能', '发现' ],
		quizWords: [ '惊讶' ]
	},
	{
		target: "通常需要问多少个问题才能得出结论? --我不明白，泰里尔。",
		alt: "Tōngcháng　xūyào　wèn　duōshǎo　gè　wèntí　cáinéng　dé　chū　jiélùn？　――Wǒ　bù　míngbái、　tàilǐěr。",
		native: "How many questions does it usually take to reach a conclusion? --I don\'t understand, Tyrell.",
		words: [ '通常', '需要', '问', '多少', '个', '问题', '才能', '得', '出', '结论', '我', '不', '明白', '泰里尔' ],
		quizWords: [ '多少', '才能', '明白', '通常', '结论' ]
	},
	{
		target: "多少个问题? 二、三十个，交叉比对。",
		alt: "Duōshǎo　gè　wèntí？　èr、　sānshí　gè、　jiāochā　bǐ　duì。",
		native: "How many questions? Twenty or thirty, cross-reference.",
		words: [ '多少', '个', '问题', '二', '三十', '个', '交叉', '比', '对' ],
		quizWords: [ '三十', '交叉' ]
	},
	{
		target: "测试瑞秋得用超过一百个，对么? --她自己不知道么?",
		alt: "Cèshì　ruìqiū　dé　yòng　chāoguò　yī　bǎi　gè、　duì　me？　――Tā　zìjǐ　bù　zhīdào　me？",
		native: "It would take more than a hundred to test Rachel, right? --Didn’t she know that?",
		words: [ '测试', '瑞秋', '得', '用', '超过', '一', '百', '个', '对', '么', '她', '自己', '不', '知道', '么' ],
		quizWords: [ '百', '超过', '自己' ]
	},
	{
		target: "我想她已经开始怀疑了。",
		alt: "Wǒ　xiǎng　tā　yǐjīng　kāishǐ　huáiyí　le。",
		native: "I think she was already suspicious.",
		words: [ '我', '想', '她', '已经', '开始', '怀疑', '了' ],
		quizWords: [ '开始', '怀疑' ]
	},
	{
		target: "怀疑?她怎么会不知道自己是什么。",
		alt: "Huáiyí？　Tā　zěnme　huì　bù　zhīdào　zìjǐ　shì　shénme。",
		native: "Doubt? How could she not know what she is.",
		words: [ '怀疑', '她', '怎么', '会', '不', '知道', '自己', '是', '什么' ],
		quizSentence: true
	},
	{
		target: "泰里尔公司的目标是利润。",
		alt: "tàilǐěr　gōngsī　de　mùbiāo　shì　lìrùn。",
		native: "Terrell\'s company\'s goal is profit.",
		words: [ '泰里尔', '公司', '的', '目标', '是', '利润' ],
		quizWords: [ '目标', '利润' ]
	},
	{
		target: "我们的座右铭是\"比人类还象人类\"。",
		alt: "Wǒmen　de　zuòyòumíng　shì\"bǐ　rénlèi　hái　xiàng　rénlèi\"。",
		native: "Our motto is \"More than human\".",
		words: [ '我们', '的', '座右铭', '是比', '人类', '还', '象', '人类' ],
		quizWords: [ '象', '还', '座右铭' ]
	},
	{
		target: "瑞秋只是个实验品，仅此而已。",
		alt: "ruìqiū　zhǐshì　gè　shíyàn　pǐn、　jǐn　cǐ　éryǐ。",
		native: "Rachel is just a guinea pig, nothing more.",
		words: [ '瑞秋', '只是', '个', '实验', '品', '仅', '此', '而已' ],
		quizWords: [ '实验', '品', '仅' ]
	},
	{
		target: "我们开始发现他们中的陌生的部份。",
		alt: "Wǒmen　kāishǐ　fāxiàn　tāmen　zhōng　de　mòshēng　de　bù　fèn。",
		native: "We begin to discover unfamiliar parts of them.",
		words: [ '我们', '开始', '发现', '他们', '中', '的', '陌生', '的', '部', '份' ],
		quizWords: [ '陌生', '部', '份' ]
	},
	{
		target: "毕竟，他们的感情不成熟。",
		alt: "Bìjìng、　tāmen　de　gǎnqíng　bù　chéngshú。",
		native: "After all, they are emotionally immature.",
		words: [ '毕竟', '他们', '的', '感情', '不', '成熟' ],
		quizWords: [ '感情', '成熟', '毕竟' ]
	},
	{
		target: "因为他们的寿命太短不足以积累经验 这一点，你我都能保证。",
		alt: "Yīnwèi　tāmen　de　shòumìng　tài　duǎn　bùzú　yǐ　jīlěi　jīngyàn　zhè　yīdiǎn、　nǐ　wǒ　dū　néng　bǎozhèng。",
		native: "Because their life span is too short to accumulate experience. You and I can guarantee this.",
		words: [ '因为', '他们', '的', '寿命', '太', '短', '不足', '以', '积累', '经验', '这', '一点', '你', '我', '都', '能', '保证' ],
		quizWords: [ '保证', '短', '积累', '以', '不足', '都', '一点', '经验' ]
	},
	{
		target: "假如我们给他们创造一个过去 给他们的感情一个基础。",
		alt: "Jiǎrú　wǒmen　gěi　tāmen　chuàngzào　yīgè　guòqù　gěi　tāmen　de　gǎnqíng　yīgè　jīchǔ。",
		native: "If we create a past for them to give their feelings a foundation.",
		words: [ '假如', '我们', '给', '他们', '创造', '一个', '过去', '给', '他们', '的', '感情', '一个', '基础' ],
		quizWords: [ '假如', '基础', '创造' ]
	},
	{
		target: "从而，我们就能更好的控制他们 --记忆。",
		alt: "Cóng\'ér、　wǒmen　jiù　néng　gèng　hǎo　de　kòngzhì　tāmen　――jìyì。",
		native: "Thus, we can better control them - memory.",
		words: [ '从而', '我们', '就', '能', '更', '好', '的', '控制', '他们', '记忆' ],
		quizWords: [ '更', '的', '从而' ]
	},
	{
		target: "你谈论的是记忆。",
		alt: "Nǐ　tánlùn　de　shì　jìyì。",
		native: "You are talking about memory.",
		words: [ '你', '谈论', '的', '是', '记忆' ],
		quizWords: [ '谈论' ]
	}
];