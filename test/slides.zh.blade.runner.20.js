const gLang = 'zh';
const gBook = 'blade.runner';
const gChap = '20';
const gMode = 'zh';
const gSpeed = '120';

const slideData =
[
	{
		target: "成交。",
		alt: "Chéngjiāo。",
		native: "make a deal.",
		words: [ '成交' ],
		quizWords: [ '成交' ]
	},
	{
		target: "入口处有位J.F.赛巴斯迪安 先生，16417。",
		alt: "Rùkǒu　chù　yǒu　wèi　J。F。　Sài　bā　sī　dí　ān　xiānshēng、１６４１７。",
		native: "At the entrance is Mr. J.F. Sebastian, 16417.",
		words: [ '入口', '处', '有', '位', '', 'J', 'F', '赛', '巴', '斯', '迪安先' ],
		quizWords: [ '处', '位', '斯', '巴', '入口', '赛' ]
	},
	{
		target: "在这个时候?",
		alt: "Zài　zhège　shíhòu？",
		native: "at this time?",
		words: [ '在', '这个', '时候' ],
		quizWords: [ '时候' ]
	},
	{
		target: "有何指教?赛巴斯迪安。",
		alt: "Yǒu　hé　zhǐjiào？　Sài　bā　sī　dí　ān。",
		native: "Any advice? Sebastian.",
		words: [ '有', '何', '指教', '赛', '巴', '斯', '迪', '安' ],
		quizWords: [ '安', '何', '迪', '指教' ]
	},
	{
		target: "女王到主教六，将军。",
		alt: "Nu:３wang２　dào　zhǔjiào　liù、　jiāngjūn。",
		native: "Queen to Bishop VI, General.",
		words: [ '女王', '到', '主教', '六', '将军' ],
		quizWords: [ '女王', '主教', '将军' ]
	},
	{
		target: "胡说!。",
		alt: "Húshuō！。",
		native: "Nonsense!.",
		words: [ '胡说' ],
		quizWords: [ '胡说' ]
	},
	{
		target: "等一下。",
		alt: "Děng　yīxià。",
		native: "Wait a moment.",
		words: [ '等', '一下' ],
		quizWords: [ '一下', '等' ]
	},
	{
		target: "女王到主教六，真荒唐。",
		alt: "Nu:３wang２　dào　zhǔjiào　liù、　zhēn　huāngtáng。",
		native: "Queen to Bishop VI, so ridiculous.",
		words: [ '女王', '到', '主教', '六', '真', '荒唐' ],
		quizWords: [ '荒唐' ]
	},
	{
		target: "女王。",
		alt: "Nu:３wang２。",
		native: "Queen.",
		words: [ '女王' ],
		quizSentence: true
	},
	{
		target: "主教，六。",
		alt: "Zhǔjiào、　liù。",
		native: "bishop, vi.",
		words: [ '主教', '六' ],
		quizSentence: true
	},
	{
		target: "武士。",
		alt: "Wǔshì。",
		native: "Samurai.",
		words: [ '武士' ],
		quizWords: [ '武士' ]
	},
	{
		target: "吃掉女王。",
		alt: "Chī　diào　nu:３wang２。",
		native: "EAT THE QUEEN.",
		words: [ '吃', '掉', '女王' ],
		quizSentence: true
	},
	{
		target: "你糊涂了么?赛巴斯迪安。",
		alt: "Nǐ　hútú　le　me？　Sài　bā　sī　dí　ān。",
		native: "Are you confused? Sebastian.",
		words: [ '你', '糊涂', '了', '么', '赛', '巴', '斯', '迪', '安' ],
		quizWords: [ '糊涂' ]
	},
	{
		target: "你在想什么啊。",
		alt: "Nǐ　zài　xiǎng　shénme　a。",
		native: "What are you thinking about?",
		words: [ '你', '在', '想', '什么', '啊' ],
		quizSentence: true
	},
	{
		target: "主教到国王七，将军。",
		alt: "Zhǔjiào　dào　guówáng　qī、　jiāngjūn。",
		native: "Bishop to King VII, General.",
		words: [ '主教', '到', '国王', '七', '将军' ],
		quizWords: [ '国王', '七' ]
	},
	{
		target: "不简单呀！赛巴斯迪安。",
		alt: "Bù　jiǎndān　ya！　Sài　bā　sī　dí　ān。",
		native: "It’s not simple! Sebastian.",
		words: [ '不', '简单', '呀', '赛', '巴', '斯', '迪', '安' ],
		quizWords: [ '简单' ]
	},
	{
		target: "牛奶和饼干让你精神这么好啊。",
		alt: "Niúnǎi　hé　bǐnggān　ràng　nǐ　jīngshén　zhème　hǎo　a。",
		native: "Milk and cookies make you so energetic.",
		words: [ '牛奶', '和', '饼干', '让', '你', '精神', '这么', '好', '啊' ],
		quizWords: [ '饼干', '精神', '牛奶', '让' ]
	},
	{
		target: "我们来讨论讨论这个。",
		alt: "Wǒmen　lái　tǎolùn　tǎolùn　zhège。",
		native: "Let’s discuss this.",
		words: [ '我们', '来', '讨论', '讨论', '这个' ],
		quizWords: [ '讨论' ]
	},
	{
		target: "你上来吧，赛巴斯迪安。",
		alt: "Nǐ　shànglái　ba、　sài　bā　sī　dí　ān。",
		native: "Come on up, Sebastian.",
		words: [ '你', '上来', '吧', '赛', '巴', '斯', '迪', '安' ],
		quizWords: [ '上来' ]
	},
	{
		target: "泰里尔先生。",
		alt: "tàilǐěr　xiānshēng。",
		native: "Mr Tyrell.",
		words: [ '泰里尔', '先生' ],
		quizSentence: true
	},
	{
		target: "我带来一个朋友。",
		alt: "Wǒ　dài　lái　yīgè　péngyǒu。",
		native: "I brought a friend.",
		words: [ '我', '带', '来', '一个', '朋友' ],
		quizWords: [ '带' ]
	},
	{
		target: "很惊讶，你没早点来这儿。",
		alt: "Hěn　jīngyà、　nǐ　méi　zǎodiǎn　lái　zhè\'er。",
		native: "I\'m surprised you didn\'t get here earlier.",
		words: [ '很', '惊讶', '你', '没', '早点', '来', '这儿' ],
		quizWords: [ '早点', '惊讶' ]
	},
	{
		target: "要见自己的制造者可真不容易。",
		alt: "Yào　jiàn　zìjǐ　de　zhìzào　zhě　kě　zhēn　bù　róngyì。",
		native: "It’s not easy to meet your maker.",
		words: [ '要', '见', '自己', '的', '制造', '者', '可', '真', '不', '容易' ],
		quizWords: [ '自己', '制造' ]
	},
	{
		target: "我能为你做什么?",
		alt: "Wǒ　néng　wéi　nǐ　zuò　shénme？",
		native: "what can I do for you?",
		words: [ '我', '能', '为', '你', '做', '什么' ],
		quizWords: [ '为' ]
	},
	{
		target: "制造者能修理他的产品吗?",
		alt: "Zhìzào　zhě　néng　xiūlǐ　tā　de　chǎnpǐn　ma？",
		native: "Can the manufacturer repair his product?",
		words: [ '制造', '者', '能', '修理', '他', '的', '产品', '吗' ],
		quizWords: [ '修理', '产品' ]
	},
	{
		target: "你想被改造?",
		alt: "Nǐ　xiǎng　bèi　gǎizào？",
		native: "Do you want to be transformed?",
		words: [ '你', '想', '被', '改造' ],
		quizWords: [ '改造' ]
	},
	{
		target: "待在这里。",
		alt: "Dài　zài　zhèlǐ。",
		native: "stay here.",
		words: [ '待', '在', '这里' ],
		quizWords: [ '待' ]
	},
	{
		target: "我要更根本的东西。",
		alt: "Wǒ　yào　gèng　gēnběn　de　dōngxī。",
		native: "I want something more fundamental.",
		words: [ '我', '要', '更', '根本', '的', '东西' ],
		quizWords: [ '根本' ]
	},
	{
		target: "那么……是什么问题呢?",
		alt: "Nàme……shì　shénme　wèntí　ne？",
		native: "So...what\'s the problem?",
		words: [ '那么…', '…是', '什么', '问' ],
		quizWords: [ '问' ]
	},
	{
		target: "死亡。",
		alt: "Sǐwáng。",
		native: "die.",
		words: [ '死亡' ],
		quizWords: [ '死亡' ]
	},
	{
		target: "恐怕那就超出我的权限了。",
		alt: "Kǒngpà　nà　jiù　chāochū　wǒ　de　quánxiàn　le。",
		native: "I\'m afraid that\'s beyond my authority.",
		words: [ '恐怕', '那', '就', '超出', '我', '的', '权限', '了' ],
		quizWords: [ '超出', '权限' ]
	},
	{
		target: "我要更长久的生命，混蛋。",
		alt: "Wǒ　yào　gèng　chángjiǔ　de　shēngmìng、　húndàn。",
		native: "I want a longer life, asshole.",
		words: [ '我', '要', '更', '长久', '的', '生命', '混蛋' ],
		quizWords: [ '长久', '生命' ]
	},
	{
		target: "生命的真相。",
		alt: "Shēngmìng　de　zhēnxiàng。",
		native: "The truth of life.",
		words: [ '生命', '的', '真相' ],
		quizWords: [ '真相' ]
	},
	{
		target: "对有机体生命系统的发展 做出一种改变，是致命的。",
		alt: "Duì　yǒujītǐ　shēngmìng　xìtǒng　de　fǎ　zhǎn　zuò　chū　yī　zhǒng　gǎibiàn、　shì　zhìmìng　de。",
		native: "Making a change to the development of an organism\'s life system is fatal.",
		words: [ '对', '有机体', '生命', '系统', '的', '发', '展', '做', '出', '一', '种', '改变', '是', '致命', '的' ],
		quizWords: [ '改变', '系统', '致命', '发', '有机体', '展' ]
	},
	{
		target: "基因编码顺序一旦建立就无法逆转了。",
		alt: "Jīyīn　biānmǎ　shùnxù　yīdàn　jiànlì　jiù　wúfǎ　nìzhuǎn　le。",
		native: "Once the genetic coding sequence is established, it cannot be reversed.",
		words: [ '基因', '编码', '顺序', '一旦', '建立', '就', '无法', '逆转', '了' ],
		quizWords: [ '一旦', '编码', '基因', '建立', '逆转', '顺序', '无法' ]
	},
	{
		target: "为何不能?",
		alt: "Wèihé　bùnéng？",
		native: "Why not?",
		words: [ '为何', '不能' ],
		quizWords: [ '不能' ]
	},
	{
		target: "因为根据第二再生原理。",
		alt: "Yīnwèi　gēnjù　dì　èr　zàishēng　yuánlǐ。",
		native: "Because according to the second regeneration principle.",
		words: [ '因为', '根据', '第', '二', '再生', '原理' ],
		quizWords: [ '原理', '再生', '根据' ]
	},
	{
		target: "任何细胞经历倒转变异。",
		alt: "Rènhé　xìbāo　jīnglì　dàozhuǎn　biànyì。",
		native: "Any cell that undergoes inversion mutation.",
		words: [ '任何', '细胞', '经历', '倒转', '变异' ],
		quizWords: [ '倒转', '任何', '细胞', '变异', '经历' ]
	},
	{
		target: "都会产生回复子的菌落。",
		alt: "Dūhuì　chǎnshēng　huífù　zi　de　jūnluò。",
		native: "will produce revertant colonies.",
		words: [ '都会', '产生', '回复', '子', '的', '菌落' ],
		quizWords: [ '都会', '子', '菌落', '回复', '产生' ]
	},
	{
		target: "就象船上的老鼠都跑掉了。",
		alt: "Jiù　xiàng　chuánshàng　de　lǎoshǔ　dōu　pǎo　diào　le。",
		native: "It\'s like all the mice on the ship have escaped.",
		words: [ '就', '象', '船上', '的', '老鼠', '都', '跑', '掉', '了' ],
		quizWords: [ '象', '船上', '老鼠', '跑' ]
	},
	{
		target: "然后 船沉了。",
		alt: "Ránhòu　chuán　chén　le。",
		native: "Then the ship sank.",
		words: [ '然后', '船', '沉', '了' ],
		quizWords: [ '沉', '然后' ]
	},
	{
		target: "使用E.M.S. 重结合呢?",
		alt: "Shǐyòng　E。M。S。　Zhòng　jiéhé　ne？",
		native: "What about recombination using E.M.S.?",
		words: [ '使用', '', 'E', 'MS', '重' ],
		quizWords: [ '重', '使用' ]
	},
	{
		target: "我们已经试过了 甲基磺酸乙酯(E.M.S)是一种烷化剂 和一种有力的诱导有机体突变的物质。",
		alt: "Wǒmen　yǐjīng　shìguò　le　jiǎ　jī　huáng　suān　yǐ　zhǐ　（E。M。S）　shì　yī　zhǒng　wán　huà　jì　hé　yī　zhǒng　yǒulì　de　yòudǎo　yǒujītǐ　túbiàn　de　wùzhí。",
		native: "We have tried Ethyl Methanesulfonate (E.M.S) is an alkylating agent and a potent mutagenic substance.",
		words: [ '我们', '已经', '试过', '了', '甲', '基', '磺', '酸', '乙', '酯', '', 'E', 'M', 'S', '是', '一', '种', '烷', '化', '剂', '和一', '种', '有力', '的诱导', '有机', '体', '突变' ],
		quizWords: [ '基', '烷', '有力', '有机', '酸', '剂', '乙', '体', '种', '试过', '化', '突变', '甲', '磺', '酯' ]
	},
	{
		target: "它产生了一种致命的病毒 导致实验品尚未离开手术台就已经死亡。",
		alt: "Tā　chǎnshēng　le　yī　zhǒng　zhìmìng　de　bìngdú　dǎozhì　shíyàn　pǐn　shàngwèi　líkāi　shǒushù　tái　jiù　yǐjīng　sǐwáng。",
		native: "It produced a deadly virus that caused the experimental subjects to die before they even left the operating table.",
		words: [ '它', '产生', '了', '一', '种', '致命', '的', '病毒', '导致', '实验', '品', '尚未', '离开', '手术', '台', '就', '已经', '死亡' ],
		quizWords: [ '实验', '台', '品', '手术', '尚未', '病毒', '导致' ]
	},
	{
		target: "那么用一个抑制蛋白来抑制繁殖的细胞。",
		alt: "Nàme　yòng　yīgè　yìzhì　dànbái　lái　yìzhì　fánzhí　de　xìbāo。",
		native: "Then use an inhibitory protein to inhibit the reproducing cells.",
		words: [ '那么', '用', '一个', '抑制', '蛋白', '来', '抑制', '繁殖', '的', '细胞' ],
		quizWords: [ '抑制', '繁殖', '蛋白' ]
	},
	{
		target: "它不能阻断复制。",
		alt: "Tā　bùnéng　zǔ　duàn　fùzhì。",
		native: "It cannot block replication.",
		words: [ '它', '不能', '阻', '断', '复制' ],
		quizWords: [ '阻', '断' ]
	},
	{
		target: "但是它确实能使复制出错。",
		alt: "Dànshì　tā　quèshí　néng　shǐ　fùzhì　chūcuò。",
		native: "But it does cause replication errors.",
		words: [ '但是', '它', '确实', '能', '使', '复制', '出错' ],
		quizWords: [ '确实', '使', '出错' ]
	},
	{
		target: "如此新形成的DNA链就携带着变异。",
		alt: "Rúcǐ　xīn　xíngchéng　de　D。N。A。　liàn　jiù　xiédàizhe　biànyì。",
		native: "The newly formed DNA strands carry mutations.",
		words: [ '如此', '新', '形成', '的', '', 'D', 'N', 'A链就', '携带' ],
		quizWords: [ '携带', '如此', '形成' ]
	},
	{
		target: "你就又染上了病毒。",
		alt: "Nǐ　jiù　yòu　rǎn　shàng　le　bìngdú。",
		native: "You have contracted the virus again.",
		words: [ '你', '就', '又', '染', '上', '了', '病毒' ],
		quizWords: [ '染' ]
	},
	{
		target: "但这些全是学院理论。",
		alt: "Dàn　zhèxiē　quán　shì　xuéyuàn　lǐlùn。",
		native: "But these are all academic theories.",
		words: [ '但', '这些', '全', '是', '学院', '理论' ],
		quizWords: [ '理论', '学院', '全' ]
	},
	{
		target: "我们已经尽可能完美的制造了你。",
		alt: "Wǒmen　yǐjīng　jǐn　kěnéng　wánměi　de　zhìzào　le　nǐ。",
		native: "We have made you as perfect as possible.",
		words: [ '我们', '已经', '尽', '可能', '完美', '的', '制造', '了', '你' ],
		quizWords: [ '尽', '完美' ]
	},
	{
		target: "但我的生命太短暂。",
		alt: "Dàn　wǒ　de　shēngmìng　tài　duǎnzàn。",
		native: "But my life is too short.",
		words: [ '但', '我', '的', '生命', '太', '短暂' ],
		quizWords: [ '短暂' ]
	},
	{
		target: "燃烧的光彩越亮。",
		alt: "Ránshāo　de　guāngcǎi　yuè　liàng。",
		native: "The brighter it burns.",
		words: [ '燃烧', '的', '光彩', '越', '亮' ],
		quizWords: [ '燃烧', '光彩', '亮' ]
	},
	{
		target: "燃烧的时间就越短。",
		alt: "Ránshāo　de　shíjiān　jiù　yuè　duǎn。",
		native: "The shorter the burning time.",
		words: [ '燃烧', '的', '时间', '就', '越', '短' ],
		quizWords: [ '短' ]
	},
	{
		target: "你燃烧的光彩非常明亮，洛伊！",
		alt: "Nǐ　ránshāo　de　guāngcǎi　fēicháng　míngliàng、　luòyī！",
		native: "You burn so brightly, Loy!",
		words: [ '你', '燃烧', '的', '光彩', '非常', '明亮', '洛伊' ],
		quizWords: [ '明亮' ]
	},
	{
		target: "看看你！",
		alt: "Kàn　kàn　nǐ！",
		native: "look at you!",
		words: [ '看', '看', '你' ],
		quizSentence: true
	},
	{
		target: "你浪子回头了。",
		alt: "Nǐ　làngzǐ　huítóu　le。",
		native: "Your prodigal son has returned.",
		words: [ '你', '浪子', '回头', '了' ],
		quizWords: [ '回头', '浪子' ]
	},
	{
		target: "你值得奖赏。",
		alt: "Nǐ　zhídé　jiǎngshǎng。",
		native: "You deserve a reward.",
		words: [ '你', '值得', '奖赏' ],
		quizWords: [ '奖赏', '值得' ]
	},
	{
		target: "我做了令人疑惑的事。",
		alt: "Wǒ　zuò　le　lìng　rén　yíhuò　de　shì。",
		native: "I did something questionable.",
		words: [ '我', '做', '了', '令', '人', '疑惑', '的', '事' ],
		quizWords: [ '疑惑', '令' ]
	},
	{
		target: "同时也是非凡的事。",
		alt: "Tóngshí　yěshì　fēifán　de　shì。",
		native: "Also something extraordinary.",
		words: [ '同时', '也是', '非凡', '的', '事' ],
		quizWords: [ '同时', '非凡' ]
	},
	{
		target: "享受你剩下的时间吧。",
		alt: "Xiǎngshòu　nǐ　shèng　xià　de　shíjiān　ba。",
		native: "Enjoy the rest of your time.",
		words: [ '享受', '你', '剩', '下', '的', '时间', '吧' ],
		quizWords: [ '剩', '享受' ]
	},
	{
		target: "生物机械学的上帝会让你进天堂的。",
		alt: "Shēngwù　jīxiè　xué　de　shàngdì　huì　ràng　nǐ　jìn　tiāntáng　de。",
		native: "The god of biomechanics will let you go to heaven.",
		words: [ '生物', '机械', '学', '的', '上帝', '会', '让', '你', '进', '天堂', '的' ],
		quizWords: [ '机械', '上帝', '天堂', '生物' ]
	}
];