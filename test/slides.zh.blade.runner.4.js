const gLang = 'zh';
const gBook = 'blade.runner';
const gChap = '4';
const gMode = 'zh';
const gSpeed = '120';

const slideData =
[
	{
		target: "我今年已经做过智商测试了。",
		alt: "Wǒ　jīnnián　yǐjīng　zuòguò　zhìshāng　cèshì　le。",
		native: "I have taken an IQ test this year.",
		words: [ '我', '今年', '已经', '做过', '智商', '测试', '了' ]
	},
	{
		target: "但是我应该没有做过这种的。",
		alt: "Dànshì　wǒ　yīnggāi　méiyǒu　zuòguò　zhè　zhǒng　de。",
		native: "But I probably have never done this.",
		words: [ '但是', '我', '应该', '没有', '做过', '这', '种', '的' ]
	},
	{
		target: "反应时间也是测试内容之一 所以，请注意。",
		alt: "Fǎnyìng　shíjiān　yěshì　cèshì　nèiróng　zhī　yī　suǒyǐ、　qǐng　zhùyì。",
		native: "Reaction time is also one of the test contents, so please pay attention.",
		words: [ '反应', '时间', '也是', '测试', '内容', '之', '一', '所以', '请', '注意' ]
	},
	{
		target: "尽快回答问题。 好的。",
		alt: "Jǐnkuài　huídá　wèntí.　hǎo　de。",
		native: "Answer the questions as quickly as possible. Okay.",
		words: [ '尽快', '回答', '问题', '好', '的' ]
	},
	{
		target: "亨特瓦瑟路1172号。",
		alt: "Hēngtèwǎsè　lù　１１７２　hào。",
		native: "1172 Hunter Wasser Road.",
		words: [ '亨特瓦瑟', '路', '号', '' ]
	},
	{
		target: "那是家旅馆 --什么?",
		alt: "Nà　shì　jiā　lu:３guan３　――shénme？",
		native: "That\'s a hotel -- what?",
		words: [ '那', '是', '家', '旅馆', '什么' ]
	},
	{
		target: "我住的地方。",
		alt: "Wǒ　zhù　dì　dìfāng。",
		native: "Where I live.",
		words: [ '我', '住', '的', '地方' ]
	},
	{
		target: "地方好吗? --我想是吧！",
		alt: "Dìfāng　hǎo　ma？　――Wǒ　xiǎng　shì　ba！",
		native: "Is the place good? --I think so!",
		words: [ '地方', '好', '吗', '我', '想', '是', '吧' ]
	},
	{
		target: "他们是两周前从外世界殖民地逃出的。",
		alt: "Tāmen　shì　liǎng　zhōu　qián　cóng　wài　shìjiè　zhímíndì　táo　chū　de。",
		native: "They escaped from the outer world colony two weeks ago.",
		words: [ '他们', '是', '两', '周', '前', '从', '外', '世界', '殖民地', '逃', '出', '的' ],
		quizSentence: true
	},
	{
		target: "六个复制人，三个男的，三个女的。",
		alt: "Liù　gè　fùzhì　rén、　sān　gè　nán　de、　sān　gè　nu:３　de。",
		native: "Six clones, three male and three female.",
		words: [ '六', '个', '复制', '人', '三', '个', '男', '的', '三', '个', '女', '的' ]
	},
	{
		target: "他们杀掉23人，抢了一艘飞船。",
		alt: "Tāmen　shā　diào　２３　rén、　qiǎng　le　yī　sōu　fēichuán。",
		native: "They killed 23 people and took a spaceship.",
		words: [ '他们', '杀', '掉', '人', '抢', '了', '一', '艘', '飞', '船' ],
		quizSentence: true
	},
	{
		target: "飞行巡逻队在海岸发现了船，里面没有人，没有线索。",
		alt: "Fēixíng　xúnluó　duì　zài　hǎi\'àn　fāxiàn　le　chuán,　lǐmiàn　méiyǒu　rén、　méiyǒu　xiànsuǒ。",
		native: "Flying Patrol found the boat off the coast. No one inside, no clues.",
		words: [ '飞行', '巡逻', '队', '在', '海岸', '发现', '了', '船', '里面', '没有', '人', '没有', '线索' ]
	},
	{
		target: "三天前的晚上，他们想闯入泰里尔公司。",
		alt: "Sān　tiān　qián　de　wǎnshàng、　tāmen　xiǎng　chuǎng　rù　tàilǐěr　gōngsī。",
		native: "Three nights ago, they tried to break into Tyrell Company.",
		words: [ '三', '天', '前', '的', '晚上', '他们', '想', '闯', '入', '泰里尔', '公司' ]
	},
	{
		target: "一个被电网烧死了，其他人失踪了。",
		alt: "Yīgè　bèi　diànwǎng　shāo　sǐ　le、　qítā　rén　shīzōng　le。",
		native: "One was burned to death by the power grid and the others are missing.",
		words: [ '一个', '被', '电网', '烧', '死', '了', '其他', '人', '失踪', '了' ],
		quizSentence: true
	},
	{
		target: "他们可能想装成职员渗透入公司。",
		alt: "Tāmen　kěnéng　xiǎng　zhuāng　chéng　zhíyuán　shèntòu　rù　gōngsī。",
		native: "They may want to infiltrate the company by pretending to be employees.",
		words: [ '他们', '可能', '想', '装', '成', '职员', '渗透', '入', '公司' ]
	},
	{
		target: "我派霍顿过去对每个新职员做了沃特坎普夫测试。",
		alt: "Wǒ　pài　huòdùn　guòqù　duì　měi　gè　xīn　zhíyuán　zuò　le　wòtè―kǎnpǔfū　cèshì。",
		native: "I sent Horton over to do the \"Walter-Kampf\" test on every new hire.",
		words: [ '我', '派', '霍顿', '过去', '对', '每', '个', '新', '职员', '做', '了', '沃特坎普夫', '测试' ]
	},
	{
		target: "他好像逮到了一个。",
		alt: "Tā　hǎoxiàng　dǎi　dào　le　yīgè。",
		native: "He seems to have caught one.",
		words: [ '他', '好像', '逮', '到', '了', '一个' ]
	},
	{
		target: "你往下看，见到一支乌龟向你爬过来，里昂。",
		alt: "Nǐ　wǎng　xià　kàn、　jiàn　dào　yī　zhī　wūguī　xiàng　nǐ　pá　guòlái、　lǐ\'áng。",
		native: "You look down and see a turtle crawling towards you, Leon.",
		words: [ '你', '往', '下', '看', '见', '到', '一', '支', '乌龟', '向', '你', '爬', '过来', '里昂' ]
	},
	{
		target: "乌龟?那是什么?",
		alt: "Wūguī？　Nà　shì　shénme？",
		native: "turtle?What is that?",
		words: [ '乌龟', '那', '是', '什么' ]
	},
	{
		target: "知道海龟是什么吗? 当然知道。",
		alt: "Zhīdào　hǎiguī　shì　shénme　ma？　Dāngrán　zhīdào。",
		native: "Do you know what a turtle is? Of course you do.",
		words: [ '知道', '海龟', '是', '什么', '吗', '当然', '知道' ]
	},
	{
		target: "相同的东西。",
		alt: "Xiāngtóng　de　dōngxī。",
		native: "same thing.",
		words: [ '相同', '的', '东西' ]
	},
	{
		target: "我从没见过乌龟。",
		alt: "Wǒ　cóng　méi　jiànguò　wūguī。",
		native: "I\'ve never seen a turtle.",
		words: [ '我', '从', '没', '见过', '乌龟' ]
	},
	{
		target: "我不懂他们冒险回地球 的原因，太不寻常了。",
		alt: "Wǒ　bù　dǒng　tāmen　màoxiǎn　huí　dìqiú　de　yuányīn、　tài　bù　xúncháng　le。",
		native: "I don’t understand why they ventured back to Earth, it’s so unusual.",
		words: [ '我', '不', '懂', '他们', '冒险', '回', '地球', '的', '原因', '太', '不', '寻常', '了' ],
		quizSentence: true
	},
	{
		target: "为什么?他们去泰里尔公司干什么?",
		alt: "Wèishéme？　Tāmen　qù　tàilǐěr　gōngsī　gànshénme？",
		native: "Why? What are they doing in Tyrell Company?",
		words: [ '为什么', '他们', '去', '泰里尔', '公司', '干什么' ],
		quizSentence: true
	},
	{
		target: "你告诉我，老弟，所以才请你来的呀。",
		alt: "Nǐ　gàosù　wǒ、　lǎodì、　suǒyǐ　cái　qǐng　nǐ　lái　de　ya。",
		native: "You tell me, brother, that’s why I invited you here.",
		words: [ '你', '告诉', '我', '老弟', '所以', '才', '请', '你', '来', '的', '呀' ],
		quizSentence: true
	},
	{
		target: "这是什么?",
		alt: "Zhè　shì　shénme？",
		native: "What\'s this?",
		words: [ '这', '是', '什么' ]
	},
	{
		target: "连锁六代 洛伊贝利。",
		alt: "Liánsuǒ　liù　dài　luòyī　bèilì。",
		native: "ChainSixGenerations Roy Bailey.",
		words: [ '连锁', '六', '代', '洛伊', '贝利' ]
	},
	{
		target: "启用日期2016年。",
		alt: "Qǐyòng　rìqí　―　２0１６　Nián。",
		native: "Date of activation: 2016.",
		words: [ '启用', '日期', '', '年', '' ],
		quizSentence: true
	},
	{
		target: "战斗型，最有独立性的。",
		alt: "Zhàndòu　xíng、　zuì　yǒu　dúlì　xìng　de。",
		native: "Fighting type, the most independent.",
		words: [ '战斗', '型', '最', '有', '独立', '性', '的' ],
		quizSentence: true
	},
	{
		target: "可能是首脑。",
		alt: "Kěnéng　shì　shǒunǎo。",
		native: "Might be the leader.",
		words: [ '可能', '是', '首脑' ]
	},
	{
		target: "这一个是索拉。",
		alt: "Zhè　yīgè　shì　suǒlā。",
		native: "This one is Sora.",
		words: [ '这', '一个', '是', '索拉' ]
	},
	{
		target: "她是为外世界反谋杀部队训练的。",
		alt: "Tā　shì　wèi　wài　shìjiè　fǎn　móushā　bùduì　xùnliàn　de。",
		native: "She was trained for the anti-murder force in the outer world.",
		words: [ '她', '是', '为', '外', '世界', '反', '谋杀', '部队', '训练', '的' ],
		quizSentence: true
	},
	{
		target: "说到和美女和野兽，她两者皆是。",
		alt: "Shuō　dào　hé　mei３nu:３　hé　yěshòu、　tā　liǎng　zhě　jiē　shì。",
		native: "Speaking of beauty and the beast, she is both.",
		words: [ '说', '到', '和', '美女', '和', '野兽', '她', '两', '者', '皆', '是' ],
		quizSentence: true
	},
	{
		target: "第四个复制人是佩莉丝。",
		alt: "Dì　sì　gè　fùzhì　rén　shì　pèilìsī。",
		native: "The fourth clone is Peris.",
		words: [ '第', '四', '个', '复制', '人', '是', '佩莉丝' ],
		quizSentence: true
	},
	{
		target: "她的基本职务是在其他 殖民地的军事俱乐部工作。",
		alt: "Tā　de　jīběn　zhíwù　shì　zài　qítā　zhímíndì　de　jūnshì　jùlèbù　gōngzuò。",
		native: "Her basic duties were with military clubs in other colonies.",
		words: [ '她', '的', '基本', '职务', '是', '在', '其他', '殖民地', '的', '军事', '俱乐部', '工作' ],
		quizSentence: true
	},
	{
		target: "除了他们的情绪以外 他们的一切都是人类的复制。",
		alt: "Chú　le　tāmen　de　qíngxù　yǐwài　tāmen　de　yīqiè　dōu　shì　rénlèi　de　fùzhì。",
		native: "Everything about them is a copy of a human being except their emotions.",
		words: [ '除', '了', '他们', '的', '情绪', '以外', '他们', '的', '一切', '都', '是', '人类', '的', '复制' ],
		quizWords: [ '除' ]
	},
	{
		target: "设计者猜想几年来,",
		alt: "Shèjì　zhě　cāixiǎng　jǐ　niánlái,",
		native: "Designers guess that in a few years,",
		words: [ '设计', '者', '猜想', '几', '年来' ],
		quizSentence: true
	},
	{
		target: "他们可能发展出个人的情绪反应。",
		alt: "tāmen　kěnéng　fāzhǎn　chū　gèrén　de　qíngxù　fǎnyìng。",
		native: "they may develop personal emotional responses.",
		words: [ '他们', '可能', '发展', '出', '个人', '的', '情绪', '反应' ],
		quizSentence: true
	},
	{
		target: "仇恨、爱、恐惧、气愤、嫉妒等。",
		alt: "Chóuhèn、　ài、　kǒngjù、　qìfèn、　jídù　děng。",
		native: "Hatred, love, fear, anger, jealousy, etc.",
		words: [ '仇恨', '爱', '恐惧', '气愤', '嫉妒', '等' ],
		quizWords: [ '等' ]
	},
	{
		target: "所以他们安装了一种安全装置。",
		alt: "Suǒyǐ　tāmen　ānzhuāng　le　yī　zhǒng　ānquán　zhuāngzhì。",
		native: "So they installed a safety device.",
		words: [ '所以', '他们', '安装', '了', '一', '种', '安全', '装置' ],
		quizSentence: true
	},
	{
		target: "是什么?",
		alt: "Shì　shénme？",
		native: "What is?",
		words: [ '是', '什么' ]
	},
	{
		target: "四年寿命控制。",
		alt: "Sì　nián　shòumìng　kòngzhì。",
		native: "Four-year life control.",
		words: [ '四', '年', '寿命', '控制' ],
		quizSentence: true
	},
	{
		target: "在泰里尔公司，有个连锁六代。",
		alt: "Zài　tàilǐěr　gōngsī、　yǒu　gè　liánsuǒ　liù　dài。",
		native: "In Tyrell Company, there is a chain for six generations.",
		words: [ '在', '泰里尔', '公司', '有', '个', '连锁', '六', '代' ]
	},
	{
		target: "我要你去测试他。",
		alt: "Wǒ　yào　nǐ　qù　cèshì　tā。",
		native: "I want you to test him.",
		words: [ '我', '要', '你', '去', '测试', '他' ]
	},
	{
		target: "要是测试没有用呢?",
		alt: "Yàoshi　cèshì　méiyǒu　yòng　ne？",
		native: "What if the test doesn’t work?",
		words: [ '要是', '测试', '没有', '用', '呢' ],
		quizSentence: true
	}
];