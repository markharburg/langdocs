const gLang = 'ai';
const gBook = 'uwepeker';
const gChap = 'pananpe_escapes_from_the_demons_hands';
const gMode = 'ai';
const gSpeed = '120';

const slideData =
[
	{
		target: "パㇰノ　ニㇱパ　イサㇺ　ニㇱパ　ア　ネ　ヒネ　アン　アン　ペ　ネ　ヒケ、",
		alt: "pakno nispa isam nispa a= ne hine an =an pe ne hike,",
		native: "I am a rich man, richer than anyone else.",
		words: [ 'パㇰノ', 'ニㇱパ', 'イサㇺ', 'ニㇱパ', 'ア', 'ネ', 'ヒネ', 'アン', 'アン', 'ペ', 'ネ', 'ヒケ' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/0.wav",
		quizSentence: true
	},
	{
		target: "エキㇺネ　アン　コㇽ　ユㇰ　ネ　チキ　カムイ　ネ　チキ　ヌウェ　ア　コアン。",
		alt: "ekimne =an kor yuk ne ciki kamuy ne ciki nuwe a= koan.",
		native: "When I go to the mountains, I capture lots of deer and bears.",
		words: [ 'エキㇺネ', 'アン', 'コㇽ', 'ユㇰ', 'ネ', 'チキ', 'カムイ', 'ネ', 'チキ', 'ヌウェ', 'ア', 'コアン' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/1.wav",
		quizWords: [ 'ヌウェ', 'カムイ', 'エキㇺネ' ]
	},
	{
		target: "ウトゥル　タ　アトゥイ　テㇰサㇺ　タ　サン　アン　ワ　ペライ　アン　ネ　ヤ",
		alt: "uturu ta atuy teksam ta san =an wa peray =an ne ya",
		native: "I also go down to the seashore to fish.",
		words: [ 'ウトゥル', 'タ', 'アトゥイ', 'テㇰサㇺ', 'タ', 'サン', 'アン', 'ワ', 'ペライ', 'アン', 'ネ', 'ヤ' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/2.wav",
		quizWords: [ 'テㇰサㇺ', 'ペライ', 'アトゥイ', 'ウトゥル' ]
	},
	{
		target: "レポッチコイキプ　ヤオッチコイキプ　ヌウェ　ア　コアン　ペ　ネ　コㇽ、",
		alt: "repotcikoykip yaotcikoykip nuwe a= koan pe ne kor,",
		native: "I\'ve hauled in lots of things from the ocean and I\'ve caught many things in the mountains.",
		words: [ 'レポッチコイキプ', 'ヤオッチコイキプ', 'ヌウェ', 'ア', 'コアン', 'ペ', 'ネ', 'コㇽ' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/3.wav",
		quizWords: [ 'レポッチコイキプ', 'ヤオッチコイキプ' ]
	},
	{
		target: "シネ　アㇽ　スイ　ネ　スイ　ピㇱ　タ　サン　アン　ヒネ　ペライ　アン　コㇽ　アン　アン　アクス、",
		alt: "sine ar suy ne suy pis ta san =an hine peray =an kor an =an akusu,",
		native: "One day, when I was down on the beach fishing,",
		words: [ 'シネ', 'アㇽ', 'スイ', 'ネ', 'スイ', 'ピㇱ', 'タ', 'サン', 'アン', 'ヒネ', 'ペライ', 'アン', 'コㇽ', 'アン', 'アン', 'アクス' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/4.wav",
		quizWords: [ 'アㇽ', 'スイ', 'ピㇱ', 'アクス' ]
	},
	{
		target: "シラㇽ　カ　タ　オニ　アン。",
		alt: "sirar ka ta oni an.",
		native: "there was a demon up on one of the rocks.",
		words: [ 'シラㇽ', 'カ', 'タ', 'オニ', 'アン' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/5.wav",
		quizWords: [ 'シラㇽ', 'オニ' ]
	},
	{
		target: "オニ　ペライ　コㇽ　アン　ヒネ、",
		alt: "oni peray kor an hine,",
		native: "The demon was fishing.",
		words: [ 'オニ', 'ペライ', 'コㇽ', 'アン', 'ヒネ' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/6.wav",
		quizSentence: true
	},
	{
		target: "\"ピㇽカ　ウペン　カㇺ　ア　パ　シリ　アン。\"",
		alt: "\"pirka upen kam a= pa siri an.\"",
		native: "[He said,] \"I\'ve found some delicious young meat.\"",
		words: [ 'ピㇽカ', 'ウペン', 'カㇺ', 'ア', 'パ', 'シリ', 'アン' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/7.wav",
		quizWords: [ 'ピㇽカ' ]
	},
	{
		target: "セコㇽ　ハウェアン　コㇽ　エㇰ　コㇽカ、",
		alt: "sekor hawean kor ek korka,",
		native: "While saying this, the demon came toward me.",
		words: [ 'セコㇽ', 'ハウェアン', 'コㇽ', 'エㇰ', 'コㇽカ' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/8.wav",
		quizWords: [ 'コㇽカ', 'ハウェアン' ]
	},
	{
		target: "キラ　アン　カ　エアイカプ　ペ　ネ　クス、",
		alt: "kira =an ka eaykap pe ne kusu,",
		native: "Since it wasn\'t possible to escape,",
		words: [ 'キラ', 'アン', 'カ', 'エアイカプ', 'ペ', 'ネ', 'クス' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/9.wav",
		quizWords: [ 'エアイカプ' ]
	},
	{
		target: "ネノ　アン　アン　ワ　アン　アン　アクス、",
		alt: "neno an =an wa an =an akusu,",
		native: "I stood still,",
		words: [ 'ネノ', 'アン', 'アン', 'ワ', 'アン', 'アン', 'アクス' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/10.wav",
		quizWords: [ 'ネノ' ]
	},
	{
		target: "イ　ウㇰ　ヒネ、",
		alt: "i= uk hine,",
		native: "he caught me,",
		words: [ 'イ', 'ウㇰ', 'ヒネ' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/11.wav",
		quizSentence: true
	},
	{
		target: "オラノ　チプ　オㇽ　オマレ、",
		alt: "orano cip or omare,",
		native: "and put me in his boat.",
		words: [ 'オラノ', 'チプ', 'オㇽ', 'オマレ' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/12.wav",
		quizWords: [ 'オラノ', 'オㇽ' ]
	},
	{
		target: "イ　オマレ　ヒネ　イ　クサ　ヒネ　ヒナㇰ　タ　パイェ　アン　アクス、",
		alt: "i= omare hine i= kusa hine hinak ta paye =an akusu,",
		native: "Carrying me in his boat,",
		words: [ 'イ', 'オマレ', 'ヒネ', 'イ', 'クサ', 'ヒネ', 'ヒナㇰ', 'タ', 'パイェ', 'アン', 'アクス' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/13.wav",
		quizWords: [ 'クサ', 'ヒナㇰ' ]
	},
	{
		target: "ポル　アン　ヒネ、",
		alt: "poru an hine,",
		native: "we came to a cavern",
		words: [ 'ポル', 'アン', 'ヒネ' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/14.wav",
		quizWords: [ 'ポル' ]
	},
	{
		target: "ポル　オㇽ_　タ　アフプ　アン　ルウェ　ネ　アクス、",
		alt: "poru or_ ta ahup =an ruwe ne akusu,",
		native: "and as we went in to the cavern,",
		words: [ 'ポル', 'オㇽ', 'タ', 'アフプ', 'アン', 'ルウェ', 'ネ', 'アクス' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/15.wav",
		quizSentence: true
	},
	{
		target: "ポン　オニ　アン　ルウェ　ネ　ヒネ、",
		alt: "pon oni an ruwe ne hine,",
		native: "there was a little demon there.",
		words: [ 'ポン', 'オニ', 'アン', 'ルウェ', 'ネ', 'ヒネ' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/16.wav",
		quizSentence: true
	},
	{
		target: "\"ア　コㇽ　ポン　オニ、",
		alt: "\"a= kor pon oni,",
		native: "\"My little demon,",
		words: [ 'ア', 'コㇽ', 'ポン', 'オニ' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/17.wav",
		quizSentence: true
	},
	{
		target: "ウペン　カㇺ　ア　パ　ワ　エㇰ　アン　ルウェ　ネ　ナ。",
		alt: "upen kam a= pa wa ek =an ruwe ne na.",
		native: "I\'ve found some fresh, young meat.",
		words: [ 'ウペン', 'カㇺ', 'ア', 'パ', 'ワ', 'エㇰ', 'アン', 'ルウェ', 'ネ', 'ナ' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/18.wav",
		quizSentence: true
	},
	{
		target: "ホクレ　ピㇽカノ　エ　イペレ　ワ　ミムㇱ　ヤㇰネ　ア　エ　ヤㇰ　ア　エキロンヌ　クス　ネ　ナ。",
		alt: "hokure pirkano e= ipere wa mimus yakne a= e yak a= ekironnu kusu ne na.",
		native: "Make him eat a lot and when he\'s fat, you will feel well fed if you eat him then.",
		words: [ 'ホクレ', 'ピㇽカノ', 'エ', 'イペレ', 'ワ', 'ミムㇱ', 'ヤㇰネ', 'ア', 'エ', 'ヤㇰ', 'ア', 'エキロンヌ', 'クス', 'ネ', 'ナ' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/19.wav",
		quizWords: [ 'ホクレ', 'ピㇽカノ', 'イペレ', 'ミムㇱ', 'エキロンヌ', 'ヤㇰネ' ]
	},
	{
		target: "エネ　アン　ウペン　カㇺ　ネイ　タ　カ　ア　パ　ルスイ　ヒケ　カ、",
		alt: "ene an upen kam ney ta ka a= pa rusuy hike ka,",
		native: "I wanted to find some young meat like this somewhere,",
		words: [ 'エネ', 'アン', 'ウペン', 'カㇺ', 'ネイ', 'タ', 'カ', 'ア', 'パ', 'ルスイ', 'ヒケ', 'カ' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/20.wav",
		quizWords: [ 'ルスイ' ]
	},
	{
		target: "ア　パ　カ　ソモ　キ　ア　p。\"",
		alt: "a= pa ka somo ki a p.\"",
		native: "but it was difficult to find.\"",
		words: [ 'ア', 'パ', 'カ', 'ソモ', 'キ', 'ア', 'p' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/21.wav",
		quizWords: [ 'p' ]
	},
	{
		target: "セコㇽ　ハウェアン　コㇽ　キ　ア　コㇽカ",
		alt: "sekor hawean kor ki a korka",
		native: "While he was saying this,",
		words: [ 'セコㇽ', 'ハウェアン', 'コㇽ', 'キ', 'ア', 'コㇽカ' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/22.wav",
		quizSentence: true
	},
	{
		target: "ア　シトマ　カトゥン　キ　カ　ア　エアイカプ　クス",
		alt: "a= sitoma katun ki ka a= eaykap kusu",
		native: "[I stayed quiet,] unable to even be afraid,",
		words: [ 'ア', 'シトマ', 'カトゥン', 'キ', 'カ', 'ア', 'エアイカプ', 'クス' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/23.wav",
		quizWords: [ 'カトゥン', 'シトマ' ]
	},
	{
		target: "モㇱマノ　アン　アン。",
		alt: "mosmano an =an.",
		native: "I stayed quiet.",
		words: [ 'モㇱマノ', 'アン', 'アン' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/24.wav",
		quizWords: [ 'モㇱマノ' ]
	},
	{
		target: "オラノ　ポン　オニ　スケ。",
		alt: "orano pon oni suke.",
		native: "Then, the little demon cooked dinner.",
		words: [ 'オラノ', 'ポン', 'オニ', 'スケ' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/25.wav",
		quizWords: [ 'スケ' ]
	},
	{
		target: "ピㇽカノ　スケ　ワ　イ　イペレ。",
		alt: "pirkano suke wa i= ipere.",
		native: "He fed me and the food was really good.",
		words: [ 'ピㇽカノ', 'スケ', 'ワ', 'イ', 'イペレ' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/26.wav",
		quizSentence: true
	},
	{
		target: "イペ　アン　コㇽ　アン　アン　ア　p、",
		alt: "ipe =an kor an =an a p,",
		native: "While we were eating,",
		words: [ 'イペ', 'アン', 'コㇽ', 'アン', 'アン', 'ア', 'p' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/27.wav",
		quizWords: [ 'イペ' ]
	},
	{
		target: "コント　オニ　エキㇺネ　ワ　イサㇺ　ヒ　クス、",
		alt: "konto oni ekimne wa isam hi kusu,",
		native: "the demon went to the mountain.",
		words: [ 'コント', 'オニ', 'エキㇺネ', 'ワ', 'イサㇺ', 'ヒ', 'クス' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/28.wav",
		quizWords: [ 'コント' ]
	},
	{
		target: "\"ポン　オニ　エ　ネ　ワ　ンタ　エ　オナハ　エヌプㇽ？\"",
		alt: "\"pon oni e= ne wa hnta e= onaha enupur?\"",
		native: "\"Little demon, what sort of magic does your father practice?\"",
		words: [ 'ポン', 'オニ', 'エ', 'ネ', 'ワ', 'ンタ', 'エ', 'オナハ', 'エヌプㇽ' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/29.wav",
		quizWords: [ 'ンタ', 'エヌプㇽ', 'オナハ' ]
	},
	{
		target: "セコㇽ　ハウェアン　アン　アクス、",
		alt: "sekor hawean =an akusu,",
		native: "I asked,",
		words: [ 'セコㇽ', 'ハウェアン', 'アン', 'アクス' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/30.wav",
		quizSentence: true
	},
	{
		target: "\"ア　オナハ　エヌプㇽ　ペ、",
		alt: "\"a= onaha enupur pe,",
		native: "\"Father practices magic,",
		words: [ 'ア', 'オナハ', 'エヌプㇽ', 'ペ' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/31.wav",
		quizSentence: true
	},
	{
		target: "クンネ　カタㇰ　レタㇽ　カタㇰ　ネ　ワ　エヌプㇽ　ペ　ネ。\"",
		alt: "kunne katak retar katak ne wa enupur pe ne.\"",
		native: "he practices magic with a ball of black string and a ball of white string.\"",
		words: [ 'クンネ', 'カタㇰ', 'レタㇽ', 'カタㇰ', 'ネ', 'ワ', 'エヌプㇽ', 'ペ', 'ネ' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/32.wav",
		quizWords: [ 'カタㇰ' ]
	},
	{
		target: "セコㇽ　ハウェアン　ヒ　クス、",
		alt: "sekor hawean hi kusu,",
		native: "he said.",
		words: [ 'セコㇽ', 'ハウェアン', 'ヒ', 'クス' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/33.wav",
		quizSentence: true
	},
	{
		target: "\"マㇰ　ア　エイワンケ　p　アン？\"",
		alt: "\"mak a= eywanke p an?\"",
		native: "\"How does he do it?\"",
		words: [ 'マㇰ', 'ア', 'エイワンケ', 'p', 'アン' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/34.wav",
		quizWords: [ 'マㇰ', 'エイワンケ' ]
	},
	{
		target: "セコㇽ　ハウェアン　アン　アクス、",
		alt: "sekor hawean =an akusu,",
		native: "I asked.",
		words: [ 'セコㇽ', 'ハウェアン', 'アン', 'アクス' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/35.wav",
		quizSentence: true
	},
	{
		target: "\"クンネ　カタㇰ　シエトㇰ　ウン　ア　オスラ　コㇽ　シㇽクンネ、",
		alt: "\"kunne katak sietok un a= osura kor sirkunne,",
		native: "\"If one throws the ball of black string forward the area in front of him becomes dark.",
		words: [ 'クンネ', 'カタㇰ', 'シエトㇰ', 'ウン', 'ア', 'オスラ', 'コㇽ', 'シㇽクンネ' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/36.wav",
		quizWords: [ 'オスラ', 'シエトㇰ', 'シㇽクンネ' ]
	},
	{
		target: "レタㇽ　カタㇰ　シオカ　ウン　ア　オスラ　コㇽ　シㇽペケㇽ　ペ　ネ　ワ、",
		alt: "retar katak sioka un a= osura kor sirpeker pe ne wa,",
		native: "If one throws the ball of white string backward, the area behind him becomes light.",
		words: [ 'レタㇽ', 'カタㇰ', 'シオカ', 'ウン', 'ア', 'オスラ', 'コㇽ', 'シㇽペケㇽ', 'ペ', 'ネ', 'ワ' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/37.wav",
		quizWords: [ 'シオカ', 'シㇽペケㇽ' ]
	},
	{
		target: "キラ　アン　コㇽ　レタㇽ　カタㇰ　シエトㇰ　ウン　ア　オスラ　ワ",
		alt: "kira =an kor retar katak sietok un a= osura wa",
		native: "So, when one is escaping, if he throws the ball made of white string in front,",
		words: [ 'キラ', 'アン', 'コㇽ', 'レタㇽ', 'カタㇰ', 'シエトㇰ', 'ウン', 'ア', 'オスラ', 'ワ' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/38.wav",
		quizSentence: true
	},
	{
		target: "シオカ　ウン　クンネ　カタㇰ　ア　オスラ　コㇽ、",
		alt: "sioka un kunne katak a= osura kor,",
		native: "and throws a ball made of black string in back backward",
		words: [ 'シオカ', 'ウン', 'クンネ', 'カタㇰ', 'ア', 'オスラ', 'コㇽ' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/39.wav",
		quizSentence: true
	},
	{
		target: "ソモ　ア　イ　オㇱコニ　p　ネ　ワ　アン　ネ　ヤㇰ　ア　オナハ　イェ。\"",
		alt: "somo a= i= oskoni p ne wa an ne yak a= onaha ye.\"",
		native: "no one can overtake him, Father said.\"",
		words: [ 'ソモ', 'ア', 'イ', 'オㇱコニ', 'p', 'ネ', 'ワ', 'アン', 'ネ', 'ヤㇰ', 'ア', 'オナハ', 'イェ' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/40.wav",
		quizWords: [ 'オㇱコニ' ]
	},
	{
		target: "セコㇽ　カネ　ハウェアン　ヒ　クス、",
		alt: "sekor kane hawean hi kusu,",
		native: "he said, so",
		words: [ 'セコㇽ', 'カネ', 'ハウェアン', 'ヒ', 'クス' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/41.wav",
		quizWords: [ 'カネ' ]
	},
	{
		target: "\"サンケ　ワ　イ　ヌカレ　ヤㇰ　ピㇽカ。\"",
		alt: "\"sanke wa i= nukare yak pirka.\"",
		native: "\"Won\'t you get them out and show them to me?\"",
		words: [ 'サンケ', 'ワ', 'イ', 'ヌカレ', 'ヤㇰ', 'ピㇽカ' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/42.wav",
		quizWords: [ 'サンケ', 'ヌカレ' ]
	},
	{
		target: "セコㇽ　ハウェアン　アン　アクㇱ、",
		alt: "sekor hawean =an akus,",
		native: "I asked.",
		words: [ 'セコㇽ', 'ハウェアン', 'アン', 'アクㇱ' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/43.wav",
		quizSentence: true
	},
	{
		target: "\"ア　サンケ　ヤㇰ　ア　オナ　イ　コイキ　クス、",
		alt: "\"a= sanke yak a= ona i= koyki kusu,",
		native: "\"If I get them out, Father would be angry,",
		words: [ 'ア', 'サンケ', 'ヤㇰ', 'ア', 'オナ', 'イ', 'コイキ', 'クス' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/44.wav",
		quizWords: [ 'コイキ' ]
	},
	{
		target: "ソモ　ア　サンケ。\"",
		alt: "somo a= sanke.\"",
		native: "so I won\'t do it.\"",
		words: [ 'ソモ', 'ア', 'サンケ' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/45.wav",
		quizSentence: true
	},
	{
		target: "セコㇽ　ハウェアン　ヤㇰカ",
		alt: "sekor hawean yakka",
		native: "he replied.",
		words: [ 'セコㇽ', 'ハウェアン', 'ヤㇰカ' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/46.wav",
		quizSentence: true
	},
	{
		target: "\"サンケ　ワ　イ　ヌカレ　ポカ　キ　ヤㇰ　ピㇽカ。\"",
		alt: "\"sanke wa i= nukare poka ki yak pirka.\"",
		native: "\"It\'s OK just to show me\"",
		words: [ 'サンケ', 'ワ', 'イ', 'ヌカレ', 'ポカ', 'キ', 'ヤㇰ', 'ピㇽカ' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/47.wav",
		quizSentence: true
	},
	{
		target: "セコㇽ　カネ　ハウェアン　アン　アクス、",
		alt: "sekor kane hawean =an akusu,",
		native: "I said, and",
		words: [ 'セコㇽ', 'カネ', 'ハウェアン', 'アン', 'アクス' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/48.wav",
		quizSentence: true
	},
	{
		target: "サンケ　ヒネ　イ　ヌカレ　ヒネ、",
		alt: "sanke hine i= nukare hine,",
		native: "he did get the ball of string out.",
		words: [ 'サンケ', 'ヒネ', 'イ', 'ヌカレ', 'ヒネ' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/49.wav",
		quizSentence: true
	},
	{
		target: "\"タプ　ネノ　タプ　ネノ　ア　エイワンケ　p　ネ。\"",
		alt: "\"tap neno tap neno a= eywanke p ne.\"",
		native: "\"This is how he does it.\"",
		words: [ 'タプ', 'ネノ', 'タプ', 'ネノ', 'ア', 'エイワンケ', 'p', 'ネ' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/50.wav",
		quizSentence: true
	},
	{
		target: "セコㇽ　ハウェアン　ヒ　クス　オラウン、",
		alt: "sekor hawean hi kusu oraun,",
		native: "he said, so",
		words: [ 'セコㇽ', 'ハウェアン', 'ヒ', 'クス', 'オラウン' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/51.wav",
		quizWords: [ 'オラウン' ]
	},
	{
		target: "\"モㇱマ　ンタ　エ　オナ　エヌプㇽ？\"",
		alt: "\"mosma hnta e= ona enupur?\"",
		native: "\"What other sorts of magic does your father practice?\"",
		words: [ 'モㇱマ', 'ンタ', 'エ', 'オナ', 'エヌプㇽ' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/52.wav",
		quizWords: [ 'モㇱマ' ]
	},
	{
		target: "セコㇽ　ハウェアン　アン　ルウェ　ネ　アクス、",
		alt: "sekor hawean =an ruwe ne akusu,",
		native: "I asked.",
		words: [ 'セコㇽ', 'ハウェアン', 'アン', 'ルウェ', 'ネ', 'アクス' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/53.wav",
		quizSentence: true
	},
	{
		target: "\"アネ　ケㇺ　ルウェ　ケㇺ　ア　オナ　エヌプㇽ。\"",
		alt: "\"ane kem ruwe kem a= ona enupur.\"",
		native: "\"Father practices magic with a thin needle and a thick needle.\"",
		words: [ 'アネ', 'ケㇺ', 'ルウェ', 'ケㇺ', 'ア', 'オナ', 'エヌプㇽ' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/54.wav",
		quizWords: [ 'アネ' ]
	},
	{
		target: "セコㇽ　ハウェアン　クス、",
		alt: "sekor hawean kusu,",
		native: "he said.",
		words: [ 'セコㇽ', 'ハウェアン', 'クス' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/55.wav",
		quizSentence: true
	},
	{
		target: "\"マㇰ　ア　エイワンケ　p　アン？\"",
		alt: "\"mak a= eywanke p an?\"",
		native: "\"How does he use them?",
		words: [ 'マㇰ', 'ア', 'エイワンケ', 'p', 'アン' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/56.wav",
		quizSentence: true
	},
	{
		target: "セコㇽ　ハウェアン　アン　アクス",
		alt: "sekor hawean =an akusu",
		native: "I asked.",
		words: [ 'セコㇽ', 'ハウェアン', 'アン', 'アクス' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/57.wav",
		quizSentence: true
	},
	{
		target: "\"アネ　ケㇺ　シヘコテ　ア　トゥリ　コㇽ　ライ　アン。",
		alt: "\"ane kem sihekote a= turi kor ray =an.",
		native: "\"If one moves the thin needle toward himself, then he dies.",
		words: [ 'アネ', 'ケㇺ', 'シヘコテ', 'ア', 'トゥリ', 'コㇽ', 'ライ', 'アン' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/58.wav",
		quizWords: [ 'トゥリ', 'ライ' ]
	},
	{
		target: "ルウェ　ケㇺ　シヘコテ　ア　エタイェ　コㇽ　シㇰヌ　アン　ペ　ネ。\"",
		alt: "ruwe kem sihekote a= etaye kor siknu =an pe ne.\"",
		native: "If one pulls the thick needle toward himself, then he will come back to life,\"",
		words: [ 'ルウェ', 'ケㇺ', 'シヘコテ', 'ア', 'エタイェ', 'コㇽ', 'シㇰヌ', 'アン', 'ペ', 'ネ' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/59.wav",
		quizWords: [ 'エタイェ', 'シㇰヌ' ]
	},
	{
		target: "セコㇽ　カネ　ハウェアン　ヒ　クス",
		alt: "sekor kane hawean hi kusu",
		native: "and so he said.",
		words: [ 'セコㇽ', 'カネ', 'ハウェアン', 'ヒ', 'クス' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/60.wav",
		quizSentence: true
	},
	{
		target: "\"サンケ　ワ　イ　ヌカレ　ヤㇰ　ピㇽカ。\"",
		alt: "\"sanke wa i= nukare yak pirka.\"",
		native: "\"Won\'t you get them out and show me?\"",
		words: [ 'サンケ', 'ワ', 'イ', 'ヌカレ', 'ヤㇰ', 'ピㇽカ' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/61.wav",
		quizSentence: true
	},
	{
		target: "セコㇽ　カネ　ハウェアン　アン　ルウェ　ネ　アクス、",
		alt: "sekor kane hawean =an ruwe ne akusu,",
		native: "I asked.",
		words: [ 'セコㇽ', 'カネ', 'ハウェアン', 'アン', 'ルウェ', 'ネ', 'アクス' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/62.wav",
		quizSentence: true
	},
	{
		target: "コパン　ヒケカ　ア　イェ　アイネ　ミナ　トゥラ",
		alt: "kopan hikeka a= ye ayne mina tura",
		native: "He didn\'t like it [when I asked], but I asked him over and over and over with a smile on my face.",
		words: [ 'コパン', 'ヒケカ', 'ア', 'イェ', 'アイネ', 'ミナ', 'トゥラ' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/63.wav",
		quizWords: [ 'ヒケカ', 'ミナ', 'アイネ' ]
	},
	{
		target: "\"ネン　カ　キラ　アン　カ　ソモ　キ　p　ネ　クㇱ、",
		alt: "\"nen ka kira =an ka somo ki p ne kus,",
		native: "\"I won\'t escape anywhere.",
		words: [ 'ネン', 'カ', 'キラ', 'アン', 'カ', 'ソモ', 'キ', 'p', 'ネ', 'クㇱ' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/64.wav",
		quizSentence: true
	},
	{
		target: "ポン　オニ　サンケ　ワ　イ　ヌカレ　ヤㇰネ、",
		alt: "pon oni sanke wa i= nukare yakne,",
		native: "If only you would show them to me.",
		words: [ 'ポン', 'オニ', 'サンケ', 'ワ', 'イ', 'ヌカレ', 'ヤㇰネ' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/65.wav",
		quizSentence: true
	},
	{
		target: "ミㇱム　アン　クス　ア　ヌカㇽ　クス　ネ。",
		alt: "mismu =an kusu a= nukar kusu ne.",
		native: "I just want to see them because I\'m bored.\"\"",
		words: [ 'ミㇱム', 'アン', 'クス', 'ア', 'ヌカㇽ', 'クス', 'ネ' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/66.wav",
		quizWords: [ 'ミㇱム' ]
	},
	{
		target: "セコㇽ　ハウェアン　アン　アクス、",
		alt: "sekor hawean =an akusu,",
		native: "I said.",
		words: [ 'セコㇽ', 'ハウェアン', 'アン', 'アクス' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/67.wav",
		quizSentence: true
	},
	{
		target: "ポン　オニ　サンケ　ヒネ　イ　ヌカレ。",
		alt: "pon oni sanke hine i= nukare.",
		native: "Then, the little demon did bring them out and show me.",
		words: [ 'ポン', 'オニ', 'サンケ', 'ヒネ', 'イ', 'ヌカレ' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/68.wav",
		quizSentence: true
	},
	{
		target: "\"タプ　ネノ　タプ　ネノ　ア　エイワンケ　p　ネ。\"",
		alt: "\"tap neno tap neno a= eywanke p ne.\"",
		native: "\"One uses them this way and that way.\"",
		words: [ 'タプ', 'ネノ', 'タプ', 'ネノ', 'ア', 'エイワンケ', 'p', 'ネ' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/69.wav",
		quizSentence: true
	},
	{
		target: "セコㇽ　イェ。",
		alt: "sekor ye.",
		native: "he said.",
		words: [ 'セコㇽ', 'イェ' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/70.wav",
		quizSentence: true
	},
	{
		target: "\"ア　テケ　オマレ　ヤㇰ　ア　ヌカㇽ　クス　ネ。\"",
		alt: "\"a= teke omare yak a= nukar kusu ne.\"",
		native: "\"Please put them in my hand so I can see them,\"",
		words: [ 'ア', 'テケ', 'オマレ', 'ヤㇰ', 'ア', 'ヌカㇽ', 'クス', 'ネ' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/71.wav",
		quizSentence: true
	},
	{
		target: "セコㇽ　ハウェアン　アン　ルウェ　ネ　アクス",
		alt: "sekor hawean =an ruwe ne akusu",
		native: "I said,",
		words: [ 'セコㇽ', 'ハウェアン', 'アン', 'ルウェ', 'ネ', 'アクス' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/72.wav",
		quizSentence: true
	},
	{
		target: "ア　テケ　アネ　ケㇺ　ルウェ　ケㇺ　オマレ　ヒ　クス、",
		alt: "a= teke ane kem ruwe kem omare hi kusu,",
		native: "he put the thin needle and the thick needle in my hand.",
		words: [ 'ア', 'テケ', 'アネ', 'ケㇺ', 'ルウェ', 'ケㇺ', 'オマレ', 'ヒ', 'クス' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/73.wav",
		quizSentence: true
	},
	{
		target: "\"セコㇽ　ヘ？\"",
		alt: "\"sekor he?\"",
		native: "\"Like this?\"",
		words: [ 'セコㇽ', 'ヘ' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/74.wav",
		quizSentence: true
	},
	{
		target: "セコㇽ　ハウェアン　アン　コㇽ、",
		alt: "sekor hawean =an kor,",
		native: "I asked, and",
		words: [ 'セコㇽ', 'ハウェアン', 'アン', 'コㇽ' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/75.wav",
		quizSentence: true
	},
	{
		target: "アネ　ケㇺ　ヘコテ　ア　トゥリ　ルウェ　ネ　クス　ライ　ルウェ　ネ　ヒ　クス、",
		alt: "ane kem hekote a= turi ruwe ne kusu ray ruwe ne hi kusu,",
		native: "I moved the thin needle toward the little demon and he died.",
		words: [ 'アネ', 'ケㇺ', 'ヘコテ', 'ア', 'トゥリ', 'ルウェ', 'ネ', 'クス', 'ライ', 'ルウェ', 'ネ', 'ヒ', 'クス' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/76.wav",
		quizWords: [ 'ヘコテ' ]
	},
	{
		target: "オラ　ネア　レタㇽ　カタㇰ　クンネ　カタㇰ　ア　ウㇰ　ヒネ、",
		alt: "ora nea retar katak kunne katak a= uk hine,",
		native: "Then, I took the ball of white string and the ball of black string,",
		words: [ 'オラ', 'ネア', 'レタㇽ', 'カタㇰ', 'クンネ', 'カタㇰ', 'ア', 'ウㇰ', 'ヒネ' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/77.wav",
		quizWords: [ 'ネア', 'オラ' ]
	},
	{
		target: "オラノ　キラ　アン　ヒネ　マ　アン　ヒネ　ヘヤシ　ヤン　アン　クス　マ　アン　ルウェ　ネ　アクス、",
		alt: "orano kira =an hine ma =an hine heyasi yan =an kusu ma =an ruwe ne akusu,",
		native: "and escaped. I swam out into the sea, heading for land.",
		words: [ 'オラノ', 'キラ', 'アン', 'ヒネ', 'マ', 'アン', 'ヒネ', 'ヘヤシ', 'ヤン', 'アン', 'クス', 'マ', 'アン', 'ルウェ', 'ネ', 'アクス' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/78.wav",
		quizWords: [ 'マ', 'ヘヤシ' ]
	},
	{
		target: "オニ　イ　ケサンパ　ヒネ、",
		alt: "oni i= kesanpa hine,",
		native: "The demon came chasing after me.",
		words: [ 'オニ', 'イ', 'ケサンパ', 'ヒネ' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/79.wav",
		quizWords: [ 'ケサンパ' ]
	},
	{
		target: "\"ネウン　エ　キラ　ヒケ　ア　エ　オㇱコニ　ソモ　キ　エ　キ　p　ネ　ヤ？\"",
		alt: "\"neun e= kira hike a= e= oskoni somo ki e= ki p ne ya?\"",
		native: "\"Where are you going? Do you think I can\'t catch up to you?\"",
		words: [ 'ネウン', 'エ', 'キラ', 'ヒケ', 'ア', 'エ', 'オㇱコニ', 'ソモ', 'キ', 'エ', 'キ', 'p', 'ネ', 'ヤ' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/80.wav",
		quizWords: [ 'ネウン' ]
	},
	{
		target: "セコㇽ　ハウェアン　コㇽ　キ。",
		alt: "sekor hawean kor ki.",
		native: "saying so, he was chasing me.",
		words: [ 'セコㇽ', 'ハウェアン', 'コㇽ', 'キ' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/81.wav",
		quizSentence: true
	},
	{
		target: "イ　オㇱコニ　ノイネ　フミ　アン　ヒ　クス、",
		alt: "i= oskoni noyne humi an hi kusu,",
		native: "Since I was about to be caught,",
		words: [ 'イ', 'オㇱコニ', 'ノイネ', 'フミ', 'アン', 'ヒ', 'クス' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/82.wav",
		quizWords: [ 'ノイネ' ]
	},
	{
		target: "クンネ　カタㇰ　シオカ　ウン　ア　オスラ　ルウェ　ネ　アクス、",
		alt: "kunne katak sioka un a= osura ruwe ne akusu,",
		native: "I threw the ball of black string behind me,",
		words: [ 'クンネ', 'カタㇰ', 'シオカ', 'ウン', 'ア', 'オスラ', 'ルウェ', 'ネ', 'アクス' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/83.wav",
		quizSentence: true
	},
	{
		target: "イ　エトコホ　*シㇽクン　。。。　イ　オカケ　シㇽクンネ。",
		alt: "i= etokoho *sirkun ... i= okake sirkunne.",
		native: "then the area behind me became black.",
		words: [ 'イ', 'エトコホ', 'シㇽクン', 'イ', 'オカケ', 'シㇽクンネ' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/84.wav",
		quizWords: [ 'シㇽクン', 'エトコホ' ]
	},
	{
		target: "レタㇽ　カタㇰ　*シオ　。。。",
		alt: "retar katak *sio ...",
		native: "[When I threw] the ball of white string",
		words: [ 'レタㇽ', 'カタㇰ', 'シオ' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/85.wav",
		quizSentence: true
	},
	{
		target: "シエトㇰ　ウン　ア　オスラ　コㇽ　レタㇽ　カタㇰ　シル　エマㇰコサヌ　ヒネ、",
		alt: "sietok un a= osura kor retar katak siru emakkosanu hine,",
		native: "in front of me, the area in front of me suddenly became bright with the ball of white string.",
		words: [ 'シエトㇰ', 'ウン', 'ア', 'オスラ', 'コㇽ', 'レタㇽ', 'カタㇰ', 'シル', 'エマㇰコサヌ', 'ヒネ' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/86.wav",
		quizWords: [ 'シル' ]
	},
	{
		target: "オラノ　キラ　アン　ヒネ　ヤン　アン　ヒネ",
		alt: "orano kira =an hine yan =an hine",
		native: "I escaped and got back to land.",
		words: [ 'オラノ', 'キラ', 'アン', 'ヒネ', 'ヤン', 'アン', 'ヒネ' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/87.wav",
		quizSentence: true
	},
	{
		target: "コント　ア　ウニ　タ　アン　アン　カ　シトマ　クス、",
		alt: "konto a= uni ta an =an ka sitoma kusu,",
		native: "Since I was afraid to return to my house,",
		words: [ 'コント', 'ア', 'ウニ', 'タ', 'アン', 'アン', 'カ', 'シトマ', 'クス' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/88.wav",
		quizSentence: true
	},
	{
		target: "オロワ　コント　オヤㇰ　タ　アㇽパ　アン　ヒネ、",
		alt: "orowa konto oyak ta arpa =an hine,",
		native: "I went to live in another place.",
		words: [ 'オロワ', 'コント', 'オヤㇰ', 'タ', 'アㇽパ', 'アン', 'ヒネ' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/89.wav",
		quizWords: [ 'オヤㇰ', 'アㇽパ' ]
	},
	{
		target: "オラノ　。。。　オラノ　アン　アン、",
		alt: "orano ... orano an =an,",
		native: "And then,",
		words: [ 'オラノ', 'オラノ', 'アン', 'アン' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/90.wav",
		quizSentence: true
	},
	{
		target: "オラノ　ネア　レタㇽ　カタㇰ　クンネ　カタㇰ　ア　エピㇽカ。",
		alt: "orano nea retar katak kunne katak a= epirka.",
		native: "I [used] the ball of white string and the ball of black string and made a lot of money.",
		words: [ 'オラノ', 'ネア', 'レタㇽ', 'カタㇰ', 'クンネ', 'カタㇰ', 'ア', 'エピㇽカ' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/91.wav",
		quizWords: [ 'エピㇽカ' ]
	},
	{
		target: "ネア　アネ　ケㇺ　ルウェ　ケㇺ　ネ　ヤㇰカ　ア　エピㇽカ　コㇽ　アン　アン　アクス、",
		alt: "nea ane kem ruwe kem ne yakka a= epirka kor an =an akusu,",
		native: "I also [used] the thin needle and the thick needle for lots of money and lived [using that money].",
		words: [ 'ネア', 'アネ', 'ケㇺ', 'ルウェ', 'ケㇺ', 'ネ', 'ヤㇰカ', 'ア', 'エピㇽカ', 'コㇽ', 'アン', 'アン', 'アクス' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/92.wav",
		quizSentence: true
	},
	{
		target: "オロ　タ　スイ　イ　ペナケ　タ　ウェン　クㇽ　オㇰカイポ　アン　ア　p、",
		alt: "oro ta suy i= penake ta wen kur okkaypo an a p,",
		native: "Up the river, there was a poor young man.",
		words: [ 'オロ', 'タ', 'スイ', 'イ', 'ペナケ', 'タ', 'ウェン', 'クㇽ', 'オㇰカイポ', 'アン', 'ア', 'p' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/93.wav",
		quizWords: [ 'オㇰカイポ', 'クㇽ', 'ペナケ' ]
	},
	{
		target: "オロ　タ　サン　ヒネ、",
		alt: "oro ta san hine,",
		native: "He came to see me one day [and asked]",
		words: [ 'オロ', 'タ', 'サン', 'ヒネ' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/94.wav",
		quizSentence: true
	},
	{
		target: "\"ア　コㇽ　オㇰカイポ　マㇰ　キ　ヒネ　エネ　ニㇱパ　ネ　ル　アン？\"",
		alt: "\"a= kor okkaypo mak ki hine ene nispa ne ru an?\"",
		native: "\"Brother, how did you become so rich?\"",
		words: [ 'ア', 'コㇽ', 'オㇰカイポ', 'マㇰ', 'キ', 'ヒネ', 'エネ', 'ニㇱパ', 'ネ', 'ル', 'アン' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/95.wav",
		quizSentence: true
	},
	{
		target: "セコㇽ　ハウェアン　ヒ　クス、",
		alt: "sekor hawean hi kusu,",
		native: "he asked.",
		words: [ 'セコㇽ', 'ハウェアン', 'ヒ', 'クス' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/96.wav",
		quizSentence: true
	},
	{
		target: "\"タプネ　カネ　ネ　ルウェ　ネ。\"",
		alt: "\"tapne kane ne ruwe ne.\"",
		native: "\"This and that happened.\"",
		words: [ 'タプネ', 'カネ', 'ネ', 'ルウェ', 'ネ' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/97.wav",
		quizSentence: true
	},
	{
		target: "セコㇽ　ハウェアン　アン　アクㇱ、",
		alt: "sekor hawean =an akus,",
		native: "I told him.",
		words: [ 'セコㇽ', 'ハウェアン', 'アン', 'アクㇱ' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/98.wav",
		quizSentence: true
	},
	{
		target: "ピㇱ　タ　サン　ルウェ　ネ　ヒネ、",
		alt: "pis ta san ruwe ne hine,",
		native: "He went down to the seashore.",
		words: [ 'ピㇱ', 'タ', 'サン', 'ルウェ', 'ネ', 'ヒネ' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/99.wav",
		quizSentence: true
	},
	{
		target: "アクス　オニ　アン　ヒネ、",
		alt: "akusu oni an hine,",
		native: "The demon was down there.",
		words: [ 'アクス', 'オニ', 'アン', 'ヒネ' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/100.wav",
		quizSentence: true
	},
	{
		target: "スイ　オニ　ウニ　タ　ア　トゥラ　ワ　アㇽパ　ヒネ、",
		alt: "suy oni uni ta a= tura wa arpa hine,",
		native: "[The young man] was caught and taken to the demon\'s house.",
		words: [ 'スイ', 'オニ', 'ウニ', 'タ', 'ア', 'トゥラ', 'ワ', 'アㇽパ', 'ヒネ' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/101.wav",
		quizSentence: true
	},
	{
		target: "オニ　エキㇺネ　オカケ　タ、",
		alt: "oni ekimne okake ta,",
		native: "After the demon went to the mountain,",
		words: [ 'オニ', 'エキㇺネ', 'オカケ', 'タ' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/102.wav",
		quizSentence: true
	},
	{
		target: "ネ　ポン　オニ　コウェペケンヌ　ヒネ、",
		alt: "ne pon oni kowepekennu hine,",
		native: "he asked the little demon",
		words: [ 'ネ', 'ポン', 'オニ', 'コウェペケンヌ', 'ヒネ' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/103.wav",
		quizSentence: true
	},
	{
		target: "レタㇽ　カタㇰ　クンネ　カタㇰ　ウㇰ　ヒネ、",
		alt: "retar katak kunne katak uk hine,",
		native: "and snatched away the ball of white string and the ball of black string.",
		words: [ 'レタㇽ', 'カタㇰ', 'クンネ', 'カタㇰ', 'ウㇰ', 'ヒネ' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/104.wav",
		quizSentence: true
	},
	{
		target: "オラウン　アネ　ケㇺ　ルウェ　ケㇺ　ウㇰ　ヒネ、",
		alt: "oraun ane kem ruwe kem uk hine,",
		native: "Then, he took away the thin needle and the thick needle.",
		words: [ 'オラウン', 'アネ', 'ケㇺ', 'ルウェ', 'ケㇺ', 'ウㇰ', 'ヒネ' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/105.wav",
		quizSentence: true
	},
	{
		target: "ネ　アネ　ケㇺ　ポン　オニ　ヘコテ　トゥリ　ルウェ　ネ　ヒネ、",
		alt: "ne ane kem pon oni hekote turi ruwe ne hine,",
		native: "Holding the thin needle out toward the little demon,",
		words: [ 'ネ', 'アネ', 'ケㇺ', 'ポン', 'オニ', 'ヘコテ', 'トゥリ', 'ルウェ', 'ネ', 'ヒネ' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/106.wav",
		quizSentence: true
	},
	{
		target: "ポン　オニ　ライ　ラポㇰケ、",
		alt: "pon oni ray rapokke,",
		native: "the little demon died.",
		words: [ 'ポン', 'オニ', 'ライ', 'ラポㇰケ' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/107.wav",
		quizWords: [ 'ラポㇰケ' ]
	},
	{
		target: "キラ　ルウェ　ネ　p、",
		alt: "kira ruwe ne p,",
		native: "Then, [the young man] escaped.",
		words: [ 'キラ', 'ルウェ', 'ネ', 'p' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/108.wav",
		quizSentence: true
	},
	{
		target: "エネ　オニ　ワ",
		alt: "ene oni WA",
		native: "Then, the demon [said,]",
		words: [ 'エネ', 'オニ', 'ワ' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/109.wav",
		quizSentence: true
	},
	{
		target: "\"テ　タ　カ　エネ　アン　ウェン　プリ　コㇽ　ア　ウェンクㇽ",
		alt: "\"te ta ka ene an wen puri kor a wenkur",
		native: "\"Again, an ill-natured poor man",
		words: [ 'テ', 'タ', 'カ', 'エネ', 'アン', 'ウェン', 'プリ', 'コㇽ', 'ア', 'ウェンクㇽ' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/110.wav",
		quizWords: [ 'テ', 'ウェンクㇽ', 'プリ' ]
	},
	{
		target: "スイ　ア　コㇽ　マㇺプリ　エイㇰカ　シリ　エネ　アン。\"",
		alt: "suy a= kor mampuri eikka siri ene an.\"",
		native: "has come to steal my treasures.\"",
		words: [ 'スイ', 'ア', 'コㇽ', 'マㇺプリ', 'エイㇰカ', 'シリ', 'エネ', 'アン' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/111.wav",
		quizWords: [ 'エイㇰカ' ]
	},
	{
		target: "セコㇽ　ハウェアン　コㇽ　ケサンパ　ヒネ",
		alt: "sekor hawean kor kesanpa hine",
		native: "he said, and chased after the young man",
		words: [ 'セコㇽ', 'ハウェアン', 'コㇽ', 'ケサンパ', 'ヒネ' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/112.wav",
		quizSentence: true
	},
	{
		target: "タネ　ア　ウㇰ　ノイネ　フマㇱ　ヒ　タ、",
		alt: "tane a= uk noyne humas hi ta,",
		native: "and just as he was about to be caught,",
		words: [ 'タネ', 'ア', 'ウㇰ', 'ノイネ', 'フマㇱ', 'ヒ', 'タ' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/113.wav",
		quizWords: [ 'フマㇱ' ]
	},
	{
		target: "レタㇽ　カタㇰ　シエトㇰ　ウン　オスラ、",
		alt: "retar katak sietok un osura,",
		native: "[he intended to throw] the ball of white string forward and",
		words: [ 'レタㇽ', 'カタㇰ', 'シエトㇰ', 'ウン', 'オスラ' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/114.wav",
		quizSentence: true
	},
	{
		target: "クンネ　カタㇰ　シオカ　ウン　オスラ　フミ　ネ　クナㇰ　ラム　ア　p、",
		alt: "kunne katak sioka un osura humi ne kunak ramu a p,",
		native: "he intended to throw the ball of black string backward.",
		words: [ 'クンネ', 'カタㇰ', 'シオカ', 'ウン', 'オスラ', 'フミ', 'ネ', 'クナㇰ', 'ラム', 'ア', 'p' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/115.wav",
		quizWords: [ 'クナㇰ' ]
	},
	{
		target: "ア　キマテㇰカ　p　ネ　クス",
		alt: "a= kimatekka p ne kusu",
		native: "But since he was in a hurry,",
		words: [ 'ア', 'キマテㇰカ', 'p', 'ネ', 'クス' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/116.wav",
		quizWords: [ 'キマテㇰカ' ]
	},
	{
		target: "クンネ　カタㇰ　シオカ　ウン　。。。　シエトㇰ　ウン　オスラ。",
		alt: "kunne katak sioka un ... sietok un osura.",
		native: "[he ended up throwing] the ball of black string forward",
		words: [ 'クンネ', 'カタㇰ', 'シオカ', 'ウン', 'シエトㇰ', 'ウン', 'オスラ' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/117.wav",
		quizSentence: true
	},
	{
		target: "レタㇽ　カタㇰ　シオカ　ウン　オスラ　ヒネ、",
		alt: "retar katak sioka un osura hine,",
		native: "and the ball of white string backward.",
		words: [ 'レタㇽ', 'カタㇰ', 'シオカ', 'ウン', 'オスラ', 'ヒネ' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/118.wav",
		quizSentence: true
	},
	{
		target: "オロ　タ　オニ　エㇰ　ヒネ、",
		alt: "oro ta oni ek hine,",
		native: "There came the demon.",
		words: [ 'オロ', 'タ', 'オニ', 'エㇰ', 'ヒネ' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/119.wav",
		quizSentence: true
	},
	{
		target: "\"コノヤロ　テ　タ　カ　エネ　アン　ウェン　プリ　エ　コㇽ　ア　クス",
		alt: "\"KONOYARO te ta ka ene an wen puri e= kor a kusu",
		native: "\"You\'re finished. You\'ve done something bad again to me,",
		words: [ 'コノヤロ', 'テ', 'タ', 'カ', 'エネ', 'アン', 'ウェン', 'プリ', 'エ', 'コㇽ', 'ア', 'クス' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/120.wav",
		quizSentence: true
	},
	{
		target: "ア　エ　ウㇰ　ワ　ア　エ　ポネコヌクヌク　p　ネ　ナ。\"",
		alt: "a= e= uk wa a= e= ponekonukunuku p ne na.\"",
		native: "so I\'m going to catch you and gnaw on you, bones and all.\"",
		words: [ 'ア', 'エ', 'ウㇰ', 'ワ', 'ア', 'エ', 'ポネコヌクヌク', 'p', 'ネ', 'ナ' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/121.wav",
		quizSentence: true
	},
	{
		target: "セコㇽ　ハウェアン　コㇽ",
		alt: "sekor hawean kor",
		native: "he said and",
		words: [ 'セコㇽ', 'ハウェアン', 'コㇽ' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/122.wav",
		quizSentence: true
	},
	{
		target: "ナニ　ア　エオマ　ヒネ　アㇽパ　ヒネ、",
		alt: "nani a= eoma hine arpa hine,",
		native: "[the young man] was immediately caught and [the demon] went away.",
		words: [ 'ナニ', 'ア', 'エオマ', 'ヒネ', 'アㇽパ', 'ヒネ' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/123.wav",
		quizWords: [ 'エオマ' ]
	},
	{
		target: "ネ　ワ　アン　ペ　アニ、",
		alt: "ne wa an pe ani,",
		native: "And so",
		words: [ 'ネ', 'ワ', 'アン', 'ペ', 'アニ' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/124.wav",
		quizSentence: true
	},
	{
		target: "ネプ　オㇰカイポ　トゥ　ライ　ウェン　ライ　セコㇽ。",
		alt: "nep okkaypo tu ray wen ray sekor.",
		native: "the young man ended up dying this dreadful way.",
		words: [ 'ネプ', 'オㇰカイポ', 'トゥ', 'ライ', 'ウェン', 'ライ', 'セコㇽ' ],
		audio: "audio/uwepeker.pananpe_escapes_from_the_demons_hands/125.wav",
		quizSentence: true
	}
];