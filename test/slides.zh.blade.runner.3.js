const gLang = 'zh';
const gBook = 'blade.runner';
const gChap = '3';
const gMode = 'zh';
const gSpeed = '120';

const slideData =
[
	{
		target: "准许进入，准许进入。",
		alt: "Zhǔnxǔ　jìnrù、　zhǔnxǔ　jìnrù。",
		native: "Granted entry, Granted entry.",
		words: [ '准许', '进入', '准许', '进入' ]
	},
	{
		target: "你好吗?戴克。",
		alt: "Nǐ　hǎo　ma？　dàikè。",
		native: "How are you?Dike.",
		words: [ '你', '好', '吗', '戴克' ]
	},
	{
		target: "布莱恩特。",
		alt: "Bùlái\'ēntè。",
		native: "Bryant.",
		words: [ '布莱恩特' ]
	},
	{
		target: "不找人押着你 过来，你就不会来的。",
		alt: "Bù　zhǎo　rén　yāzhe　nǐ　guòlái、　nǐ　jiù　bù　huì　lái　de。",
		native: "If you don’t find someone to escort you over, you won’t come.",
		words: [ '不', '找', '人', '押着', '你', '过来', '你', '就', '不', '会', '来', '的' ]
	},
	{
		target: "坐下！老弟！",
		alt: "Zuò　xià！　Lǎodì！",
		native: "sit down! Brother!",
		words: [ '坐', '下', '老弟' ]
	},
	{
		target: "别那么混蛋！戴克。",
		alt: "Bié　nàme　húndàn！　dàikè。",
		native: "Don’t be such a jerk! Dyke.",
		words: [ '别', '那么', '混蛋', '戴克' ]
	},
	{
		target: "有四个复制人逃到这里来了。",
		alt: "Yǒu　sì　gè　fùzhì　rén　táo　dào　zhèlǐ　lái　le。",
		native: "Four clones escaped here.",
		words: [ '有', '四', '个', '复制', '人', '逃', '到', '这里', '来', '了' ]
	},
	{
		target: "他们在外世界劫持了一艘飞船， 杀光了飞船上所有的人。",
		alt: "Tāmen　zàiwài　shìjiè　jiéchí　le　yī　sōu　fēichuán,　shā　guāng　le　fēichuán　shàng　suǒyǒu　de　rén。",
		native: "They hijacked a spaceship in the outer world and killed everyone on the spacecraft.",
		words: [ '他们', '在外', '世界', '劫持', '了', '一', '艘', '飞船', '杀', '光', '了', '飞船', '上', '所有', '的', '人' ],
		quizSentence: true
	},
	{
		target: "我们两周前在海岸边发现了飞船。",
		alt: "Wǒmen　liǎng　zhōu　qián　zài　hǎi\'àn　biān　fāxiàn　le　fēichuán。",
		native: "We found the craft off the coast two weeks ago.",
		words: [ '我们', '两', '周', '前', '在', '海岸', '边', '发现', '了', '飞船' ]
	},
	{
		target: "所以知道他们在这一带。",
		alt: "Suǒyǐ　zhīdào　tāmen　zài　zhè　yīdài。",
		native: "So I know they are in this area.",
		words: [ '所以', '知道', '他们', '在', '这', '一带' ]
	},
	{
		target: "真难堪。",
		alt: "Zhēn　nánkān。",
		native: "So embarrassing.",
		words: [ '真', '难堪' ]
	},
	{
		target: "不！不难堪！ 没人知道他们在这里。",
		alt: "Bù！　Bù　nánkān！　Méi　rén　zhīdào　tāmen　zài　zhèlǐ。",
		native: "No! Not embarrassed! No one knows they are here.",
		words: [ '不', '不', '难堪', '没', '人', '知道', '他们', '在', '这里' ]
	},
	{
		target: "你要查出他们，你要揪出他们。",
		alt: "Nǐ　yào　chá　chū　tāmen、　nǐ　yào　jiū　chū　tāmen。",
		native: "You have to find them out, you have to catch them.",
		words: [ '你', '要', '查', '出', '他们', '你', '要', '揪', '出', '他们' ]
	},
	{
		target: "我不再为这儿工作了。",
		alt: "Wǒ　bù　zài　wèi　zhè\'er　gōngzuò　le。",
		native: "I don’t work here anymore.",
		words: [ '我', '不', '再', '为', '这儿', '工作', '了' ]
	},
	{
		target: "去找霍顿，他很出色。",
		alt: "Qù　zhǎo　huòdùn、　tā　hěn　chūsè。",
		native: "Go to Holden, he’s great.",
		words: [ '去', '找', '霍顿', '他', '很', '出色' ]
	},
	{
		target: "我找过他了。",
		alt: "Wǒ　zhǎoguò　tā　le。",
		native: "I have looked for him.",
		words: [ '我', '找过', '他', '了' ]
	},
	{
		target: "但是他已经被杀掉了。",
		alt: "Dànshì　tā　yǐjīng　bèi　shā　diào　le。",
		native: "But he has been killed.",
		words: [ '但是', '他', '已经', '被', '杀', '掉', '了' ]
	},
	{
		target: "他不够好。",
		alt: "Tā　bùgòu　hǎo。",
		native: "He\'s not good enough.",
		words: [ '他', '不够', '好' ]
	},
	{
		target: "比你略逊一筹。",
		alt: "Bǐ　nǐ　lüè　xùn　yīchóu。",
		native: "Slightly inferior to you.",
		words: [ '比', '你', '略', '逊', '一筹' ]
	},
	{
		target: "我需要你，戴克。",
		alt: "Wǒ　xūyào　nǐ、　dàikè。",
		native: "I need you, Decker.",
		words: [ '我', '需要', '你', '戴克' ]
	},
	{
		target: "这是棘手案子，很难对付。",
		alt: "Zhè　shì　jíshǒu　ànzi、　hěn　nán　duìfù。",
		native: "This is a difficult case and difficult to deal with.",
		words: [ '这', '是', '棘手', '案子', '很', '难', '对付' ]
	},
	{
		target: "我需要老银翼杀手。",
		alt: "Wǒ　xūyào　lǎo　yín　yì　shāshǒu。",
		native: "I need the old Blade Runner.",
		words: [ '我', '需要', '老', '银', '翼', '杀手' ]
	},
	{
		target: "我需要你施展魔法。",
		alt: "Wǒ　xūyào　nǐ　shīzhǎn　mófǎ。",
		native: "I need you to work your magic.",
		words: [ '我', '需要', '你', '施展', '魔法' ]
	},
	{
		target: "我早就已经辞职了，布莱恩特。",
		alt: "Wǒ　zǎo　jiù　yǐjīng　cízhí　le、　Bùlái\'ēntè。",
		native: "I quit a long time ago, Bryant.",
		words: [ '我', '早', '就', '已经', '辞职', '了', '布莱恩特' ],
		quizSentence: true
	},
	{
		target: "我再辞职一回。",
		alt: "Wǒ　zài　cízhí　yī　huí。",
		native: "I will resign again.",
		words: [ '我', '再', '辞职', '一', '回' ]
	},
	{
		target: "站住。",
		alt: "Zhànzhù。",
		native: "Stop.",
		words: [ '站住' ]
	},
	{
		target: "你知道形势的，老弟。",
		alt: "Nǐ　zhīdào　xíngshì　de、　lǎodì。",
		native: "You know the situation, bro.",
		words: [ '你', '知道', '形势', '的', '老弟' ]
	},
	{
		target: "你若不是警察，就只是个平头老百姓。",
		alt: "Nǐ　ruò　bùshì　jǐngchá、　jiù　zhǐshì　gè　píngtóu　lǎobǎixìng。",
		native: "If you are not a policeman, you are just an ordinary citizen.",
		words: [ '你', '若', '不是', '警察', '就', '只是', '个', '平头', '老百姓' ]
	},
	{
		target: "没得选?",
		alt: "Méi　dé　xuǎn？",
		native: "No choice?",
		words: [ '没', '得', '选' ]
	},
	{
		target: "没得选，伙计。",
		alt: "Méi　dé　xuǎn、　huǒjì。",
		native: "No choice, man.",
		words: [ '没', '得', '选', '伙计' ]
	}
];