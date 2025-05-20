const gLang = 'zh';
const gBook = 'gram.intermed.01';
const gChap = '1';
const gMode = 'zh';
const gSpeed = '120';

const slideData =
[
	{
		target: "我是坐地铁来的 。",
		alt: "wǒ　shì　zuò　dìtiě　lái　de。",
		native: "I’m taking the metro.",
		words: [ '我', '是', '坐', '地铁', '来', '的' ]
	},
	{
		target: "我坐地铁来的 。",
		alt: "wǒ　zuò　dìtiě　lái　de。",
		native: "I’m taking the metro.",
		words: [ '我', '坐', '地铁', '来', '的' ]
	},
	{
		target: "我是跟朋友看电影。",
		alt: "wǒ　shì　gēn　péngyǒu　kàn　diànyǐng。",
		native: "My friends and I saw the movie.",
		words: [ '我', '是', '跟', '朋友', '看', '电影' ]
	},
	{
		target: "我跟朋友看电影。",
		alt: "wǒ　gēn　péngyǒu　kàn　diànyǐng。",
		native: "My friends and I saw the movie.",
		words: [ '我', '跟', '朋友', '看', '电影' ]
	},
	{
		target: "我喜欢一边喝咖啡一边看书。",
		alt: "wǒ　xǐhuān　yībiān　hē　kāfēi　yībiān　kànshū。",
		native: "I like to drink coffee and read a book.",
		words: [ '我', '喜欢', '一边', '喝', '咖啡', '一边', '看书' ]
	},
	{
		target: "这个酱汁又浓又香。",
		alt: "zhège　jiàng　zhī　yòu　nóng　yòu　xiāng。",
		native: "The sauce is both thick and rich.",
		words: [ '这个', '酱', '汁', '又', '浓', '又', '香' ]
	},
	{
		target: "他越来越会说汉语了。",
		alt: "tā　yuè　lái　yuè　huì　shuō　hànyǔ　le。",
		native: "His Chinese is improving more and more.",
		words: [ '他', '越', '来', '越', '会', '说', '汉语', '了' ]
	},
	{
		target: "我访问了那个名人好几次。",
		alt: "wǒ　fǎngwèn　le　nàgè　míngrén　hǎojǐ　cì。",
		native: "I’ve interviewed this celebrity many times.",
		words: [ '我', '访问', '了', '那个', '名人', '好几', '次' ]
	},
	{
		target: "你每个星期上运动几次？",
		alt: "nǐ　měi　gè　xīngqí　shàng　yùndòng　jǐ　cì？",
		native: "How many times a week do you workout?",
		words: [ '你', '每', '个', '星期', '上', '运动', '几', '次' ]
	},
	{
		target: "她说得很好。",
		alt: "tā　shuō　dé　hěn　hǎo。",
		native: "She speaks well.",
		words: [ '她', '说', '得', '很', '好' ]
	},
	{
		target: "他开得太快。",
		alt: "tā　kāi　dé　tài　kuài。",
		native: "He drives too fast.",
		words: [ '他', '开', '得', '太', '快' ]
	},
	{
		target: "他会说汉语。",
		alt: "tā　huì　shuō　hànyǔ。",
		native: "He can speak Chinese.",
		words: [ '他', '会', '说', '汉语' ]
	},
	{
		target: "图书馆离公园很近。",
		alt: "túshū　guǎn　lí　gōngyuán　hěn　jìn。",
		native: "This library is close to the park.",
		words: [ '图书', '馆', '离', '公园', '很', '近' ]
	},
	{
		target: "我家离我公司远。",
		alt: "wǒjiā　lí　wǒ　gōngsī　yuǎn。",
		native: "My home is far from my company.",
		words: [ '我家', '离', '我', '公司', '远' ]
	},
	{
		target: "学校离我家有四公里。",
		alt: "xuéxiào　lí　wǒjiā　yǒu　sì　gōnglǐ。",
		native: "The school is 4 miles from my home.",
		words: [ '学校', '离', '我家', '有', '四', '公里' ]
	},
	{
		target: "我家里挺小的。",
		alt: "wǒ　jiālǐ　tǐng　xiǎo　de。",
		native: "My home is quite small.",
		words: [ '我', '家里', '挺', '小', '的' ]
	},
	{
		target: "你好吗？",
		alt: "nǐ　hǎo　ma？",
		native: "How’re you?",
		words: [ '你', '好', '吗' ]
	},
	{
		target: "很好。 你呢？",
		alt: "hěn　hǎo。　nǐ　ne？",
		native: "I’m great, you?",
		words: [ '很', '好', '你', '呢' ]
	},
	{
		target: "我眼镜呢？",
		alt: "wǒ　yǎnjìng　ne？",
		native: "Where are my glasses?",
		words: [ '我', '眼镜', '呢' ]
	},
	{
		target: "好看",
		alt: "hǎokàn。",
		native: "good-looking",
		words: [ '好看' ]
	},
	{
		target: "好喝",
		alt: "hǎo　hē。",
		native: "tastes good",
		words: [ '好', '喝' ]
	},
	{
		target: "好吃",
		alt: "hào　chī。",
		native: "delicious",
		words: [ '好', '吃' ]
	},
	{
		target: "好玩",
		alt: "hǎowán。",
		native: "interesting / fun",
		words: [ '好玩' ]
	},
	{
		target: "他比我高。",
		alt: "tā　bǐ　wǒ　gāo。",
		native: "He is taller than me.",
		words: [ '他', '比', '我', '高' ]
	},
	{
		target: "我的身体比以前好了。",
		alt: "wǒ　de　shēntǐ　bǐ　yǐqián　hǎo　le。",
		native: "My health is better than before.",
		words: [ '我', '的', '身体', '比', '以前', '好', '了' ]
	},
	{
		target: "很好",
		alt: "hěn　hǎo。",
		native: "very good",
		words: [ '很', '好' ]
	},
	{
		target: "真好",
		alt: "zhēn　hǎo。",
		native: "good / great",
		words: [ '真', '好' ]
	},
	{
		target: "特别好",
		alt: "tèbié　hǎo。",
		native: "especially good",
		words: [ '特别', '好' ]
	},
	{
		target: "非常好",
		alt: "fēicháng　hǎo。",
		native: "pretty good",
		words: [ '非常', '好' ]
	},
	{
		target: "太好了",
		alt: "tài　hǎo　le。",
		native: "very good",
		words: [ '太', '好', '了' ]
	},
	{
		target: "最好",
		alt: "zuì　hǎo。",
		native: "best",
		words: [ '最', '好' ]
	},
	{
		target: "通过这篇报道，我对中国有了更多的了解。",
		alt: "tōngguò　zhè　piān　bàodào、　wǒ　duì　zhōngguó　yǒu　le　gèng　duō　de　liǎojiě。",
		native: "According to this news report, I know more about China.",
		words: [ '通过', '这', '篇', '报道', '我', '对', '中国', '有', '了', '更', '多', '的', '了解' ]
	},
	{
		target: "半个小时",
		alt: "bàn　gè　xiǎoshí。",
		native: "half an hour",
		words: [ '半', '个', '小时' ]
	},
	{
		target: "两个半小时。",
		alt: "liǎng　gè　bàn　xiǎoshí。",
		native: "Two and a half hours.",
		words: [ '两', '个', '半', '小时' ]
	},
	{
		target: "半分钟",
		alt: "bàn　fēnzhōng。",
		native: "half a minute",
		words: [ '半', '分钟' ]
	},
	{
		target: "半秒钟",
		alt: "bàn　miǎo　zhōng。",
		native: "half a second",
		words: [ '半', '秒', '钟' ]
	},
	{
		target: "一分半",
		alt: "yī　fēn　bàn。",
		native: "one minute and a half",
		words: [ '一', '分', '半' ]
	},
	{
		target: "两秒半",
		alt: "liǎng　miǎo　bàn。",
		native: "two and a half seconds",
		words: [ '两', '秒', '半' ]
	},
	{
		target: "他是我最喜欢的老师。",
		alt: "tā　shì　wǒ　zuì　xǐhuān　de　lǎoshī。",
		native: "He is my favourite teacher.",
		words: [ '他', '是', '我', '最', '喜欢', '的', '老师' ]
	},
	{
		target: "我就一个杯子。",
		alt: "wǒ　jiù　yīgè　bēizi。",
		native: "I only have 1 cup.",
		words: [ '我', '就', '一个', '杯子' ]
	},
	{
		target: "她还没来呢。",
		alt: "tā　hái　méi　lái　ne。",
		native: "She has not come.",
		words: [ '她', '还', '没', '来', '呢' ]
	},
	{
		target: "我的钥匙呢？",
		alt: "wǒ　de　yàoshi　ne？",
		native: "Where is my key?",
		words: [ '我', '的', '钥匙', '呢' ]
	},
	{
		target: "你听见我刚才说的话了吧？",
		alt: "nǐ　tīngjiàn　wǒ　gāngcái　shuō　dehuàle　ba？",
		native: "Did you hear what I just said?",
		words: [ '你', '听见', '我', '刚才', '说', '的话了', '吧' ]
	},
	{
		target: "恐怕他已经离开了吧。",
		alt: "kǒngpà　tā　yǐjīng　líkāi　le　ba。",
		native: "I am afraid that he may has left already.",
		words: [ '恐怕', '他', '已经', '离开', '了', '吧' ]
	},
	{
		target: "昨天是你给我打电话呀？",
		alt: "zuótiān　shì　nǐ　gěi　wǒ　dǎ　diànhuà　ya？",
		native: "Was it you that called me yesterday?",
		words: [ '昨天', '是', '你', '给', '我', '打', '电话', '呀' ]
	},
	{
		target: "这是你们学校的图书馆哪？",
		alt: "zhè　shì　nǐmen　xuéxiào　de　túshū　guǎn　nǎ？",
		native: "Is this the library of your school?",
		words: [ '这', '是', '你们', '学校', '的', '图书', '馆', '哪' ]
	},
	{
		target: "你明天去哪儿啊？",
		alt: "nǐ　míngtiān　qù　nǎ\'er　a？",
		native: "Where are you going tomorrow?",
		words: [ '你', '明天', '去', '哪儿', '啊' ]
	},
	{
		target: "你到底想不想去呀？",
		alt: "nǐ　dàodǐ　xiǎng　bùxiǎng　qù　ya？",
		native: "Would you like to go or not?",
		words: [ '你', '到底', '想', '不想', '去', '呀' ]
	},
	{
		target: "快走啊，时间不早了。",
		alt: "kuàizǒu　a、　shíjiān　bù　zǎo　le。",
		native: "Go quickly, it is late now.",
		words: [ '快走', '啊', '时间', '不', '早', '了' ]
	},
	{
		target: "你怎么不说了，说呀！",
		alt: "nǐ　zěnme　bù　shuō　le、　shuō　ya！",
		native: "Why do you keep silent? Speak!",
		words: [ '你', '怎么', '不', '说', '了', '说', '呀' ]
	},
	{
		target: "这件事你得好好想想啊。",
		alt: "zhè　jiàn　shì　nǐ　dé　hǎohǎo　xiǎng　xiǎng　a。",
		native: "You’d better think about this issue carefully.",
		words: [ '这', '件', '事', '你', '得', '好好', '想', '想', '啊' ]
	},
	{
		target: "学汉语真不容易啊！",
		alt: "xué　hànyǔ　zhēn　bù　róngyì　a！",
		native: "It’s so difficult to learn Chinese!",
		words: [ '学', '汉语', '真', '不', '容易', '啊' ]
	},
	{
		target: "这里真美啊！",
		alt: "zhèlǐ　zhēnměi　a！",
		native: "Here is so beautiful!",
		words: [ '这里', '真美', '啊' ]
	},
	{
		target: "你呀，下回可要小心了。",
		alt: "nǐ　ya、　xià　huí　kě　yào　xiǎoxīn　le。",
		native: "You‘d better take care next time.",
		words: [ '你', '呀', '下', '回', '可', '要', '小心', '了' ]
	},
	{
		target: "我呀，还没准备好。",
		alt: "wǒ　ya、　hái　méi　zhǔnbèi　hǎo。",
		native: "I am not ready yet.",
		words: [ '我', '呀', '还', '没', '准备', '好' ]
	},
	{
		target: "你呀，一定要好好努力。",
		alt: "nǐ　ya、　yīdìng　yào　hǎohǎo　nǔlì。",
		native: "You should work hard.",
		words: [ '你', '呀', '一定', '要', '好好', '努力' ]
	},
	{
		target: "衣服呀、鞋子呀、包呀，我买了许多。",
		alt: "yīfú　ya、　xiézi　ya、　bāo　ya、　wǒ　mǎi　le　xǔduō。",
		native: "I bought lots of clothes, shoes and bags.",
		words: [ '衣服', '呀', '鞋子', '呀', '包', '呀', '我', '买', '了', '许多' ]
	},
	{
		target: "恐怕他已经到了吧。",
		alt: "kǒngpà　tā　yǐjīng　dào　le　ba。",
		native: "I’m afraid that he has already arrived.",
		words: [ '恐怕', '他', '已经', '到', '了', '吧' ]
	},
	{
		target: "您就是校长吧？",
		alt: "nín　jiùshì　xiàozhǎng　ba？",
		native: "You’re the headmaster?",
		words: [ '您', '就是', '校长', '吧' ]
	},
	{
		target: "这些道理，我想你不会不懂吧？",
		alt: "zhèxiē　dàolǐ、　wǒ　xiǎng　nǐ　bù　huì　bù　dǒng　ba？",
		native: "I presume that you understand these principles?",
		words: [ '这些', '道理', '我', '想', '你', '不', '会', '不', '懂', '吧' ]
	},
	{
		target: "你到底同意不同意吧？",
		alt: "nǐ　dàodǐ　tóngyì　bù　tóngyì　ba？",
		native: "Do you agree or not?",
		words: [ '你', '到底', '同意', '不', '同意', '吧' ]
	},
	{
		target: "你说这事该怎么解决吧？",
		alt: "nǐ　shuō　zhè　shì　gāi　zěnme　jiějué　ba？",
		native: "How do you think we can solve this problem?",
		words: [ '你', '说', '这', '事', '该', '怎么', '解决', '吧' ]
	},
	{
		target: "请帮帮我的忙吧。",
		alt: "qǐng　bāng　bāng　wǒ　de　máng　ba。",
		native: "Please help me.",
		words: [ '请', '帮', '帮', '我', '的', '忙', '吧' ]
	},
	{
		target: "晚点走吧，现在下雨了。",
		alt: "wǎndiǎn　zǒu　ba、　xiànzài　xià　yǔ　le。",
		native: "Stay for a bit longer, it’s raining now.",
		words: [ '晚点', '走', '吧', '现在', '下', '雨', '了' ]
	},
	{
		target: "那我就再去一趟吧。",
		alt: "nà　wǒ　jiù　zài　qù　yī　tàng　ba。",
		native: "Then, I will go there again.",
		words: [ '那', '我', '就', '再', '去', '一', '趟', '吧' ]
	},
	{
		target: "随你的便吧。",
		alt: "suí　nǐ　de　biàn　ba。",
		native: "Have it your own way.",
		words: [ '随', '你', '的', '便', '吧' ]
	},
	{
		target: "就说喝茶吧，里面也有许多讲究。",
		alt: "jiù　shuō　hē　chá　bā、　lǐmiàn　yěyǒu　xǔduō　jiǎngjiù。",
		native: "Take drinking tea as an example, there are many elements to pay attention to.",
		words: [ '就', '说', '喝', '茶', '吧', '里面', '也有', '许多', '讲究' ]
	},
	{
		target: "去吧，又没有时间，不去吧，我又有点不甘心。",
		alt: "qù　ba、　yòu　méiyǒu　shíjiān、　bù　qù　ba、　wǒ　yòu　yǒudiǎn　bù　gānxīn。",
		native: "I want to go there, but there is not enough time. I can’t reconcile with myself that I will miss out.",
		words: [ '去', '吧', '又', '没有', '时间', '不', '去', '吧', '我', '又', '有点', '不', '甘心' ]
	},
	{
		target: "我该怎么对她说呢？",
		alt: "wǒ　gāi　zěnme　duì　tā　shuō　ne？",
		native: "How can I tell her?",
		words: [ '我', '该', '怎么', '对', '她', '说', '呢' ]
	},
	{
		target: "你去呢，还是他去呢？",
		alt: "nǐ　qù　ne、　háishì　tā　qù　ne？",
		native: "Will you go, or will he?",
		words: [ '你', '去', '呢', '还是', '他', '去', '呢' ]
	},
	{
		target: "明天你来不来呢？",
		alt: "míngtiān　nǐ　lái　bù　lái　ne？",
		native: "Will you go tomorrow?",
		words: [ '明天', '你', '来', '不', '来', '呢' ]
	},
	{
		target: "你怎么能不来呢？",
		alt: "nǐ　zěnme　néng　bù　lái　ne？",
		native: "How can you not come?",
		words: [ '你', '怎么', '能', '不', '来', '呢' ]
	},
	{
		target: "你们老师呢？",
		alt: "nǐmen　lǎoshī　ne？",
		native: "Where is your teacher?",
		words: [ '你们', '老师', '呢' ]
	},
	{
		target: "我们都去，你呢？",
		alt: "wǒmen　dōu　qù、　nǐ　ne？",
		native: "All of us will go, how about you?",
		words: [ '我们', '都', '去', '你', '呢' ]
	},
	{
		target: "我一直工作到晚上呢。",
		alt: "wǒ　yīzhí　gōngzuò　dào　wǎnshàng　ne。",
		native: "I will work till evening.",
		words: [ '我', '一直', '工作', '到', '晚上', '呢' ]
	},
	{
		target: "我呢，并不同意你的观点。",
		alt: "wǒ　ne、　bìng　bù　tóngyì　nǐ　de　guāndiǎn。",
		native: "I, um, can’t agree with your opinion.",
		words: [ '我', '呢', '并', '不', '同意', '你', '的', '观点' ]
	},
	{
		target: "他呢，喜欢足球，他弟弟呢，喜欢篮球，我呢，喜欢羽毛球。",
		alt: "tā　ne、　xǐhuān　zúqiú、　tā　dìdì　ne、　xǐhuān　lánqiú、　wǒ　ne、　xǐhuān　yǔmáoqiú。",
		native: "He likes football, his brother likes basketball, and I like badminton.",
		words: [ '他', '呢', '喜欢', '足球', '他', '弟弟', '呢', '喜欢', '篮球', '我', '呢', '喜欢', '羽毛球' ]
	},
	{
		target: "你会来吗？",
		alt: "nǐ　huì　lái　ma？",
		native: "Will you come?",
		words: [ '你', '会', '来', '吗' ]
	},
	{
		target: "已经准备好了吗？",
		alt: "yǐjīng　zhǔnbèi　hǎo　le　ma？",
		native: "Is it ready?",
		words: [ '已经', '准备', '好', '了', '吗' ]
	},
	{
		target: "这难道是我的错吗？",
		alt: "zhè　nándào　shì　wǒ　de　cuò　ma？",
		native: "Is it my fault?",
		words: [ '这', '难道', '是', '我', '的', '错', '吗' ]
	},
	{
		target: "一切不是已经很清楚了吗？",
		alt: "yīqiè　bùshì　yǐjīng　hěn　qīngchǔ　le　ma？",
		native: "Isn’t it already very clear?",
		words: [ '一切', '不是', '已经', '很', '清楚', '了', '吗' ]
	},
	{
		target: "放心，明天我一定会来的。",
		alt: "fàngxīn、　míngtiān　wǒ　yīdìng　huì　lái　de。",
		native: "Do not worry, I am certain to come tomorrow.",
		words: [ '放心', '明天', '我', '一定', '会', '来', '的' ]
	},
	{
		target: "这种办法是可以的。",
		alt: "zhè　zhǒng　bànfǎ　shì　kěyǐ　de。",
		native: "This way is OK.",
		words: [ '这', '种', '办法', '是', '可以', '的' ]
	},
	{
		target: "你是怎么搞的？这么重要的事也会忘记。",
		alt: "nǐ　shì　zěnme　gǎo　de？　zhème　zhòngyào　de　shì　yě　huì　wàngjì。",
		native: "How did you do that? How can you forget such an important thing?",
		words: [ '你', '是', '怎么', '搞', '的', '这么', '重要', '的', '事', '也', '会', '忘记' ],
		quizSentence: true
	},
	{
		target: "就是你亲口说的！",
		alt: "jiùshì　nǐ　qīnkǒu　shuō　de！",
		native: "You said that yourself!",
		words: [ '就是', '你', '亲口', '说', '的' ]
	},
	{
		target: "我明天会去的。 明天我会去。",
		alt: "wǒ　míngtiān　huì　qù　de。　míngtiān　wǒ　huì　qù。",
		native: "I will go tomorrow（√）",
		words: [ '我', '明天', '会', '去', '的', '明天', '我', '会', '去' ]
	},
	{
		target: "这本书是图书馆的。",
		alt: "zhè　běn　shū　shì　túshū　guǎn　de。",
		native: "This book is from the library.",
		words: [ '这', '本', '书', '是', '图书', '馆', '的' ]
	},
	{
		target: "我看了今天的报纸了。",
		alt: "wǒ　kàn　le　jīntiān　de　bàozhǐ　le。",
		native: "I have read today‘s newspaper.",
		words: [ '我', '看', '了', '今天', '的', '报纸', '了' ]
	},
	{
		target: "要下雨了。",
		alt: "yào　xià　yǔ　le。",
		native: "It is going to rain.",
		words: [ '要', '下', '雨', '了' ]
	},
	{
		target: "你多大了？",
		alt: "nǐ　duōdà　le？",
		native: "How old are you?",
		words: [ '你', '多大', '了' ]
	},
	{
		target: "他太过分了！",
		alt: "tā　tài　guòfèn　le！",
		native: "He was out of line!",
		words: [ '他', '太', '过分', '了' ]
	},
	{
		target: "我看了两遍了。",
		alt: "wǒ　kàn　le　liǎng　biàn　le。",
		native: "I have looked everywhere twice.",
		words: [ '我', '看', '了', '两', '遍', '了' ]
	},
	{
		target: "他不过说说罢了。",
		alt: "tā　bùguò　shuō　shuō　bà　le。",
		native: "He was just talking.",
		words: [ '他', '不过', '说', '说', '罢', '了' ]
	},
	{
		target: "我只是想想而已。",
		alt: "wǒ　zhǐshì　xiǎng　xiǎng　éryǐ。",
		native: "I was just thinking.",
		words: [ '我', '只是', '想', '想', '而已' ]
	}
];