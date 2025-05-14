const gLang = 'ai';
const gBook = 'Mark';
const gChap = '12';
const gMode = 'ai';
const gSpeed = '120';

const slideData =
[
	{
		target: "オロワ、　イタㇰ　マウクㇱテ　イタㇰ　アニ、　ウタラ　オッタ　イェ　ヘアシ　ニサ　ルウェ　ネ。　「シネ　アイヌ　アナㇰ　ネ、　ハッ　トイ　エトイタ、　ネイ　オカリ　アンクラ　アㇱテ、　オロワ、　オルン　トノト　カラ　クニ　ニス　オマ　クス　スイ　オウリ、　サマタ、　シニウェ　チセイ　カラ、　アイゲ、　トイ　カラ　ウタラ　オッタ　エイルサ、　ワ　オヤ　モシリ　オルン　オマン　ニサ　ルウェ　ネ。",
		alt: "Orowa, itak maukuste itak ani, utara otta ye heasi nisa ruwe ne. \"sine ainu anak ne, hat toi etoita, ney okari ankura aste, orowa, orun tonoto kara kuni nisu oma kusu sui ouri, samata, siniwe cisei kara, aige, toi kara utara otta eirusa, wa oya mosiri orun oman nisa ruwe ne.",
		native: "Jesus began to speak to them in parables, \"A man once planted a vineyard, put a fence around it, dug a wine-press, built a tower, and then let it out to tenants and went abroad.",
		words: [ 'オロワ', 'イタㇰ', 'マウクㇱテ', 'イタㇰ', 'アニ', 'ウタラ', 'オッタ', 'イェ', 'ヘアシ', 'ニサ', 'ルウェ', 'ネ', 'シネ', 'アイヌ', 'アナㇰ', 'ネ', 'ハッ', 'トイ', 'エトイタ', 'ネイ', 'オカリ', 'アンクラ', 'アㇱテ', 'オロワ', 'オルン', 'トノト', 'カラ', 'クニ', 'ニス', 'オマ', 'クス', 'スイ', 'オウリ', 'サマタ', 'シニウェ', 'チセイ', 'カラ', 'アイゲ', 'トイ', 'カラ', 'ウタラ', 'オッタ', 'エイルサ', 'ワ', 'オヤ', 'モシリ', 'オルン', 'オマン', 'ニサ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.12.0.wav",
		quizWords: [ 'マウクㇱテ', 'アンクラ', 'スイ' ]
	},
	{
		target: "アワ、　イベ　オ　ウシ　エパ　イタ、　ハッ　トイ　ウン　ニカオプ、　トイ　カラ　ウタラ　オロワノ　ウイナ　クニ　ネ、　オロタ　シネ　ウイテㇰ　グル　オマンデ　ニサ　ルウェ　ネ。",
		alt: "Awa, ibe o usi epa ita, hat toi un nikaop, toi kara utara orowano uina kuni ne, orota sine uitek guru omande nisa ruwe ne.",
		native: "At the proper time he sent a servant to the tenants, to receive from them a share of the produce of the grape harvest;",
		words: [ 'アワ', 'イベ', 'オ', 'ウシ', 'エパ', 'イタ', 'ハッ', 'トイ', 'ウン', 'ニカオプ', 'トイ', 'カラ', 'ウタラ', 'オロワノ', 'ウイナ', 'クニ', 'ネ', 'オロタ', 'シネ', 'ウイテㇰ', 'グル', 'オマンデ', 'ニサ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.12.1.wav",
		quizWords: [ 'ニカオプ' ]
	},
	{
		target: "アイゲ、　トイ　カラ　ウタラ　アナㇰ　ネ　シヌマ　キシマ　ワ　シリキㇰ　ヒネ　ネプ　カ　サㇰノ　アラパレ。",
		alt: "Aige, toi kara utara anak ne sinuma kisima wa sirikik hine nep ka sakno arapare.",
		native: "but they seized him, and beat him, and sent him away empty-handed.",
		words: [ 'アイゲ', 'トイ', 'カラ', 'ウタラ', 'アナㇰ', 'ネ', 'シヌマ', 'キシマ', 'ワ', 'シリキㇰ', 'ヒネ', 'ネプ', 'カ', 'サㇰノ', 'アラパレ' ],
		audio: "audio/mark.12.2.wav",
		quizWords: [ 'アラパレ' ]
	},
	{
		target: "オロワ、　スイ、　ナア　シネ　ウイテㇰ　グル　ネイ　ウタラ　オッタ　アオマンデ、　アワ、　ウタラ　アナㇰ　ネ　ネイ　グル　サパ　ピリ　オマレ　ヒネ　オッタ　ソモ　ヤイカタヌ　キ　ルウェ　ネ。",
		alt: "Orowa, sui, naa sine uitek guru ney utara otta aomande, awa, utara anak ne ney guru sapa piri omare hine otta somo yaikatanu ki ruwe ne.",
		native: "A second time the owner sent a servant to them; this man, too, the tenants struck on the head, and insulted.",
		words: [ 'オロワ', 'スイ', 'ナア', 'シネ', 'ウイテㇰ', 'グル', 'ネイ', 'ウタラ', 'オッタ', 'アオマンデ', 'アワ', 'ウタラ', 'アナㇰ', 'ネ', 'ネイ', 'グル', 'サパ', 'ピリ', 'オマレ', 'ヒネ', 'オッタ', 'ソモ', 'ヤイカタヌ', 'キ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.12.3.wav",
		quizWords: [ 'ヤイカタヌ', 'ピリ' ]
	},
	{
		target: "オロワ、　ナア　シネン　オマンデ、　アワ、　ネイ　ウタラ　シヌマ　ライゲ　ニサ　ルウェ　ネ:　オロワ、　モシマ　オカイ　インネ　ウタラ　パイェレ;　アイゲ、　セレケ　シリキㇰ、　セレケ　ロンヌ　ニサ　ルウェ　ネ　ナ。",
		alt: "Orowa, naa sinen omande, awa, ney utara sinuma raige nisa ruwe ne: orowa, mosima okai inne utara payere; aige, sereke sirikik, sereke ronnu nisa ruwe ne na.",
		native: "He sent another, but him they killed; and so with many others - some they beat and some they killed.",
		words: [ 'オロワ', 'ナア', 'シネン', 'オマンデ', 'アワ', 'ネイ', 'ウタラ', 'シヌマ', 'ライゲ', 'ニサ', 'ルウェ', 'ネ', 'オロワ', 'モシマ', 'オカイ', 'インネ', 'ウタラ', 'パイェレ', 'アイゲ', 'セレケ', 'シリキㇰ', 'セレケ', 'ロンヌ', 'ニサ', 'ルウェ', 'ネ', 'ナ' ],
		audio: "audio/mark.12.4.wav",
		quizWords: [ 'シネン', 'モシマ', 'セレケ' ]
	},
	{
		target: "トイ　コン　ニㇱパ　ナア　シネン　ポカ　コロ、　オマプ　アン　ポホ　ネ:　アワ、　イヨッタ　オカケタ　ネイ　ウタラ　オッタ　シヌマ　オマンデ　ワ",
		alt: "Toi kon nispa naa sinen poka koro, omap an poho ne: awa, iyotta okaketa ney utara otta sinuma omande wa",
		native: "He had still one son, who was very dear to him; and him he sent to them last of all. \'They will respect my son,\' he said.",
		words: [ 'トイ', 'コン', 'ニㇱパ', 'ナア', 'シネン', 'ポカ', 'コロ', 'オマプ', 'アン', 'ポホ', 'ネ', 'アワ', 'イヨッタ', 'オカケタ', 'ネイ', 'ウタラ', 'オッタ', 'シヌマ', 'オマンデ', 'ワ' ],
		audio: "audio/mark.12.5.wav",
		quizSentence: true
	},
	{
		target: "ク　ポホ　コオリパㇰ　ナンゴロ、　アリ　イタㇰ。　コロカ、　トイ　カラ　ウタラ　ウタㇱパ　エネ　ウウェ　イタㇰヒ　タン　グル　アナㇰ　ネ　エイケㇱコロ　グン　ネ;　ヘタㇰ、　シヌマ　ライゲ、　ヤㇰ　アナㇰ　ネ　ネイ　エイケㇱコロ　クニプ　チ　コロベ　ネ　クス　ネ　ナ、　アリ　イタㇰ。",
		alt: "Ku poho kooripak nangoro, ari itak. Koroka, toi kara utara utaspa ene uwe itakhi Tan guru anak ne eikeskoro gun ne; hetak, sinuma raige, yak anak ne ney eikeskoro kunip ci korobe ne kusu ne na, ari itak.",
		native: "But those tenants said to one another \'Here is the heir! Come, let us kill him, and his inheritance will be ours.\'",
		words: [ 'ク', 'ポホ', 'コオリパㇰ', 'ナンゴロ', 'アリ', 'イタㇰ', 'コロカ', 'トイ', 'カラ', 'ウタラ', 'ウタㇱパ', 'エネ', 'ウウェ', 'イタㇰヒ', 'タン', 'グル', 'アナㇰ', 'ネ', 'エイケㇱコロ', 'グン', 'ネ', 'ヘタㇰ', 'シヌマ', 'ライゲ', 'ヤㇰ', 'アナㇰ', 'ネ', 'ネイ', 'エイケㇱコロ', 'クニプ', 'チ', 'コロベ', 'ネ', 'クス', 'ネ', 'ナ', 'アリ', 'イタㇰ' ],
		audio: "audio/mark.12.6.wav",
		quizWords: [ 'ウウェ', 'ヘタㇰ' ]
	},
	{
		target: "タタオッタ　ネイ　ウタラ　シヌマ　キシマ　ワ　ライゲ、　オロワノ、　ハッ　トイ　ワノ　エマカ　ニサ　ルウェ　ネ。",
		alt: "Tataotta ney utara sinuma kisima wa raige, orowano, hat toi wano emaka nisa ruwe ne.",
		native: "So they seized him, and killed him, and threw his body outside the vineyard.",
		words: [ 'タタオッタ', 'ネイ', 'ウタラ', 'シヌマ', 'キシマ', 'ワ', 'ライゲ', 'オロワノ', 'ハッ', 'トイ', 'ワノ', 'エマカ', 'ニサ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.12.7.wav",
		quizWords: [ 'エマカ' ]
	},
	{
		target: "タㇺベ　クス、　ハッ　トイ　コン　ニㇱパ　ネコン　ア　キ　ナンゴラ？　シヌマ　エㇰ　ワ　ネイ　オカイ　トイ　カラ　ウタラ　イサㇺカ、　アイゲ、　モシマ　ウタラ　オッタ　ネイ　ハッ　トイ　コロパレ　クス　ネ　ナ。",
		alt: "Tambe kusu, hat toi kon nispa nekon a ki nangora? sinuma ek wa ney okai toi kara utara isamka, aige, mosima utara otta ney hat toi koropare kusu ne na.",
		native: "What will the owner of the vineyard do? He will come and put the tenants to death, and he will let the vineyard to others.",
		words: [ 'タㇺベ', 'クス', 'ハッ', 'トイ', 'コン', 'ニㇱパ', 'ネコン', 'ア', 'キ', 'ナンゴラ', 'シヌマ', 'エㇰ', 'ワ', 'ネイ', 'オカイ', 'トイ', 'カラ', 'ウタラ', 'イサㇺカ', 'アイゲ', 'モシマ', 'ウタラ', 'オッタ', 'ネイ', 'ハッ', 'トイ', 'コロパレ', 'クス', 'ネ', 'ナ' ],
		audio: "audio/mark.12.8.wav",
		quizSentence: true
	},
	{
		target: "タン　チエシンヌイェ　ワ　アン　イタㇰ　カ　ナア　ソモ　エチ　オロオイタㇰ　ヤ？―　チセイ　カラ　ウタラ　オスラ　スマ　アナㇰ、　ネイ　アㇺベ　シㇰケウ　サパハ　スマ　ネ　アカン　ニサ　ルウェ　ネ:",
		alt: "Tan ciesinnuye wa an itak ka naa somo eci orooitak ya?- cisei kara utara osura suma anak, Ney ambe sikkeu sapaha suma ne akan nisa ruwe ne:",
		native: "\"Have you never read this passage of scripture? - \'The stone which the builders despised has now itself become the cornerstone;",
		words: [ 'タン', 'チエシンヌイェ', 'ワ', 'アン', 'イタㇰ', 'カ', 'ナア', 'ソモ', 'エチ', 'オロオイタㇰ', 'ヤ', 'チセイ', 'カラ', 'ウタラ', 'オスラ', 'スマ', 'アナㇰ', 'ネイ', 'アㇺベ', 'シㇰケウ', 'サパハ', 'スマ', 'ネ', 'アカン', 'ニサ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.12.9.wav",
		quizWords: [ 'オスラ', 'シㇰケウ', 'サパハ', 'オロオイタㇰ', 'スマ' ]
	},
	{
		target: "タㇺベ　アナㇰ　ネ　ウタラパ　オロワノ　アン　アㇺベ　ネ、　チ　シㇰ　サマタ　アエヌㇱカリプ　ネ　ルウェ　ネ:　セコロ　イェス　イタㇰ。",
		alt: "Tambe anak ne Utarapa orowano an ambe ne, ci sik samata aenuskarip ne ruwe ne: sekoro Yesu itak.",
		native: "this cornerstone has come from the Lord, and is marvelous in our eyes.\'\"",
		words: [ 'タㇺベ', 'アナㇰ', 'ネ', 'ウタラパ', 'オロワノ', 'アン', 'アㇺベ', 'ネ', 'チ', 'シㇰ', 'サマタ', 'アエヌㇱカリプ', 'ネ', 'ルウェ', 'ネ', 'セコロ', 'イェス', 'イタㇰ' ],
		audio: "audio/mark.12.10.wav",
		quizWords: [ 'アエヌㇱカリプ' ]
	},
	{
		target: "オロワ、　ウタラ　アナㇰ　ネ　シヌマ　キシマ　ルスイ　ア　コロカ、　インネ　ウタラ　コイシトマ、　ニサ　ルウェ　ネ;　シヌマ　ネイ　ウタラ　エペカノ　ネイ　イタㇰ　マウクㇱテ　イタㇰ　イェ　シリ　ラメパカリ　ワ　オカイ　ルウェ　ネ　クス　ネ　ナ;　オロワノ、　ネイ　ウタラ　シヌマ　モシマノ　アンデ　ワ　パイェ　ニサ　ルウェ　ネ　ナ。",
		alt: "Orowa, utara anak ne sinuma kisima rusui a koroka, inne utara koisitoma, nisa ruwe ne; sinuma ney utara epekano ney itak maukuste itak ye siri ramepakari wa okai ruwe ne kusu ne na; orowano, ney utara sinuma mosimano ande wa paye nisa ruwe ne na.",
		native: "After this his enemies were eager to arrest him, but they were afraid of the crowd; for they saw that it was at them that he had aimed the parable. So they left him alone, and went away.",
		words: [ 'オロワ', 'ウタラ', 'アナㇰ', 'ネ', 'シヌマ', 'キシマ', 'ルスイ', 'ア', 'コロカ', 'インネ', 'ウタラ', 'コイシトマ', 'ニサ', 'ルウェ', 'ネ', 'シヌマ', 'ネイ', 'ウタラ', 'エペカノ', 'ネイ', 'イタㇰ', 'マウクㇱテ', 'イタㇰ', 'イェ', 'シリ', 'ラメパカリ', 'ワ', 'オカイ', 'ルウェ', 'ネ', 'クス', 'ネ', 'ナ', 'オロワノ', 'ネイ', 'ウタラ', 'シヌマ', 'モシマノ', 'アンデ', 'ワ', 'パイェ', 'ニサ', 'ルウェ', 'ネ', 'ナ' ],
		audio: "audio/mark.12.11.wav",
		quizWords: [ 'モシマノ', 'アンデ', 'ラメパカリ' ]
	},
	{
		target: "オロワノ、　シヌマ　オイタㇰサㇰテ　クニ　ネ　ウタラ　アナㇰ　ネ　パリセエ　ウン　ウタラ　ネワ　ヘロジアン　ウン　ウタラ　シヌマ　オロタ　パイェレ　ニサ　ルウェ　ネ。",
		alt: "Orowano, sinuma oitaksakte kuni ne utara anak ne Parisee un utara newa Herodian un utara sinuma orota payere nisa ruwe ne.",
		native: "Afterward they sent to Jesus some of the Pharisees and Herodians, to set a trap for him in the course of conversation.",
		words: [ 'オロワノ', 'シヌマ', 'オイタㇰサㇰテ', 'クニ', 'ネ', 'ウタラ', 'アナㇰ', 'ネ', 'パリセエ', 'ウン', 'ウタラ', 'ネワ', 'ヘロジアン', 'ウン', 'ウタラ', 'シヌマ', 'オロタ', 'パイェレ', 'ニサ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.12.12.wav",
		quizWords: [ 'オイタㇰサㇰテ' ]
	},
	{
		target: "アワ、　オロタ　アラキ　チキ　シヌマ　オッタ　エネ　イタㇰヒ　エパカㇱヌ　グル、　アオカイ　アナㇰ　ネ　ソネ　アン　グン――ネ、　ネン　ネ　ヤㇰカ　エ　コイシトマ　ソモキ　ルウェ　ネ　シリ　チ　エラマン:　アイヌ　カトゥフ　アオカイ　エサンニヨ　ソモキノ　ソンノ　ネワ　カムイ　ル　エパカㇱヌ　ルウェ　ネ　クス　ネ　ナ:　カイサロㇱ　オッタ　ヤクイチェン　コロパレ　アㇺベ　アナㇰ　ネ　カㇱパオッテ　ネイノ　アン　アㇺベ　ネ　ヤ、　ソモ　ヤ？",
		alt: "Awa, orota araki ciki sinuma otta ene itakhi Epakasnu guru, Aokai anak ne sone an gun--ne, nen ne yakka E koisitoma somoki ruwe ne siri ci eraman: ainu katuhu Aokai esanniyo somokino sonno newa Kamui ru epakasnu ruwe ne kusu ne na: Kaisaros otta yakuicen koropare ambe anak ne kaspaotte neyno an ambe ne ya, somo ya?",
		native: "These men came to him and said, \"Teacher, we know that you are an honest man, and are not afraid of anyone, for you pay no regard to a person\'s position, but teach the way of God honestly; are we right in paying taxes to the Emperor, or not?",
		words: [ 'アワ', 'オロタ', 'アラキ', 'チキ', 'シヌマ', 'オッタ', 'エネ', 'イタㇰヒ', 'エパカㇱヌ', 'グル', 'アオカイ', 'アナㇰ', 'ネ', 'ソネ', 'アン', 'グン', 'ネ', 'ネン', 'ネ', 'ヤㇰカ', 'エ', 'コイシトマ', 'ソモキ', 'ルウェ', 'ネ', 'シリ', 'チ', 'エラマン', 'アイヌ', 'カトゥフ', 'アオカイ', 'エサンニヨ', 'ソモキノ', 'ソンノ', 'ネワ', 'カムイ', 'ル', 'エパカㇱヌ', 'ルウェ', 'ネ', 'クス', 'ネ', 'ナ', 'カイサロㇱ', 'オッタ', 'ヤクイチェン', 'コロパレ', 'アㇺベ', 'アナㇰ', 'ネ', 'カㇱパオッテ', 'ネイノ', 'アン', 'アㇺベ', 'ネ', 'ヤ', 'ソモ', 'ヤ' ],
		audio: "audio/mark.12.13.wav",
		quizWords: [ 'カトゥフ', 'ソモキノ', 'カㇱパオッテ', 'ヤクイチェン', 'ソネ' ]
	},
	{
		target: "チ　ウタラ　アナㇰ　ネ　ネイ　アㇺベ　サンゲ　クニプ　ネ　ヤ、　ソモ　サンゲ　ヤㇰ　ピリカ　ヤ？　アリ　イタㇰ。　コロカ、　シヌマ　ネイ　ウタラ　カンカプカペカ　アㇺベ　エラマン　ワ　オロタ　エネ　イタㇰヒ　ネプ　クス　エチ　エン　コラㇺヌカラ　ヤ？　デナリア　シネプ　コロ　ワ　アラキ　ワ　エン　ヌカレ。",
		alt: "ci utara anak ne ney ambe sange kunip ne ya, somo sange yak pirika ya? ari itak. Koroka, sinuma ney utara kankapkapeka ambe eraman wa orota ene itakhi Nep kusu eci En koramnukara ya? Denaria sinep koro wa araki wa En nukare.",
		native: "Should we pay, or should we not pay?\" Knowing their hypocrisy, Jesus said to them, \"Why are you testing me? Bring me a coin to look at.\"",
		words: [ 'チ', 'ウタラ', 'アナㇰ', 'ネ', 'ネイ', 'アㇺベ', 'サンゲ', 'クニプ', 'ネ', 'ヤ', 'ソモ', 'サンゲ', 'ヤㇰ', 'ピリカ', 'ヤ', 'アリ', 'イタㇰ', 'コロカ', 'シヌマ', 'ネイ', 'ウタラ', 'カンカプカペカ', 'アㇺベ', 'エラマン', 'ワ', 'オロタ', 'エネ', 'イタㇰヒ', 'ネプ', 'クス', 'エチ', 'エン', 'コラㇺヌカラ', 'ヤ', 'デナリア', 'シネプ', 'コロ', 'ワ', 'アラキ', 'ワ', 'エン', 'ヌカレ' ],
		audio: "audio/mark.12.14.wav",
		quizWords: [ 'コラㇺヌカラ', 'ヌカレ' ]
	},
	{
		target: "オロワノ、　コロ　ワ　アラキ。　タタオッタ　シヌマ　ネイ　ウタラ　オッタ　エネ　イタㇰヒ　タン　ノカハ　ネワ　カシケタ　アヌイェ　ワ　アン　イキリ　イナン　グル　コロペ　ネ　ルウェ　ヘ　アン？　セコロ　イタㇰ。　オロタ、　カイサロㇱ　コロペ　ネ　アニ　ネイ　ウタラ　イェ　ルウェ　ネ。",
		alt: "Orowano, koro wa araki. Tataotta sinuma ney utara otta ene itakhi Tan nokaha newa kasiketa anuye wa an ikiri inan guru korope ne ruwe he an? sekoro itak. orota, Kaisaros korope ne ani ney utara ye ruwe ne.",
		native: "And, when they had brought it, he asked, \"Whose head and title are these?\" \"The Emperor\'s,\" they said;",
		words: [ 'オロワノ', 'コロ', 'ワ', 'アラキ', 'タタオッタ', 'シヌマ', 'ネイ', 'ウタラ', 'オッタ', 'エネ', 'イタㇰヒ', 'タン', 'ノカハ', 'ネワ', 'カシケタ', 'アヌイェ', 'ワ', 'アン', 'イキリ', 'イナン', 'グル', 'コロペ', 'ネ', 'ルウェ', 'ヘ', 'アン', 'セコロ', 'イタㇰ', 'オロタ', 'カイサロㇱ', 'コロペ', 'ネ', 'アニ', 'ネイ', 'ウタラ', 'イェ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.12.15.wav",
		quizWords: [ 'アヌイェ', 'ノカハ', 'イナン', 'コロペ' ]
	},
	{
		target: "タタオッタ　イェス　ネイ　ウタラ　オッタ　エネ　イタㇰヒ　カイサロㇱ　オッタ　カイサロㇱ　コロベ　コロパレ　ヤン、　カムイ　オッタ　カムイ　コロベ　コロパレ　ヤン、　アリ　イタㇰ。　オロワノ、　ネイ　ウタラ　シノ　エヌㇱカリ　ニサ　ルウェ　ネ　ナ。",
		alt: "Tataotta Yesu ney utara otta ene itakhi Kaisaros otta Kaisaros korobe koropare yan, Kamui otta Kamui korobe koropare yan, ari itak. Orowano, ney utara sino enuskari nisa ruwe ne na.",
		native: "and Jesus replied, \"Pay to the Emperor what belongs to the Emperor, and to God what belongs to God.\" And they were amazed at him.",
		words: [ 'タタオッタ', 'イェス', 'ネイ', 'ウタラ', 'オッタ', 'エネ', 'イタㇰヒ', 'カイサロㇱ', 'オッタ', 'カイサロㇱ', 'コロベ', 'コロパレ', 'ヤン', 'カムイ', 'オッタ', 'カムイ', 'コロベ', 'コロパレ', 'ヤン', 'アリ', 'イタㇰ', 'オロワノ', 'ネイ', 'ウタラ', 'シノ', 'エヌㇱカリ', 'ニサ', 'ルウェ', 'ネ', 'ナ' ],
		audio: "audio/mark.12.16.wav",
		quizSentence: true
	},
	{
		target: "オロワ、　ヘトポ　シㇰヌ　アㇺベ　イサㇺ　セコロ　イェ　サヅドカイ　ウン　ウタラ　アナㇰ　ネ　イェス　オッタ　アラキ　ヒネ　ウウェペケンヌ　ワ　エネ　イタㇰヒ",
		alt: "Orowa, hetopo siknu ambe isam sekoro ye Saddokai un utara anak ne Yesu otta araki hine uwepekennu wa ene itakhi",
		native: "Next came some Sadducees - the men who maintain that there is no resurrection. Their question was this -",
		words: [ 'オロワ', 'ヘトポ', 'シㇰヌ', 'アㇺベ', 'イサㇺ', 'セコロ', 'イェ', 'サヅドカイ', 'ウン', 'ウタラ', 'アナㇰ', 'ネ', 'イェス', 'オッタ', 'アラキ', 'ヒネ', 'ウウェペケンヌ', 'ワ', 'エネ', 'イタㇰヒ' ],
		audio: "audio/mark.12.17.wav",
		quizWords: [ 'シㇰヌ' ]
	},
	{
		target: "エパカㇱヌ　グル、　モセ　アナㇰ　ネ　ウン　クス　カㇺピ　ヌイェ　カトゥ　エネ　オカイヒ　アイヌ　コロ　アイヌ　イリワㇰ　ライ　ワ　コロ　マチ　ホプパ、　アイゲ、　ポ　サㇰ　チキ、　ライ　グル　コロ　アイヌ　イリワㇰ　アナㇰ　ネ　ネイ　マチ　コロ　ワ　イリワㇰ　オッタ　ケセ　コレ　クニ　ポ　ヘトゥクレ　ヤン、　アニ　ネ　ルウェ　ネ。",
		alt: "Epakasnu guru, Mose anak ne un kusu kampi nuye katu ene okaihi Ainu koro ainu iriwak rai wa koro maci hoppa, aige, po sak ciki, rai guru koro ainu iriwak anak ne ney maci koro wa iriwak otta kese kore kuni po hetukure yan, ani ne ruwe ne.",
		native: "\"Teacher, in our scriptures Moses decreed that, should a man\'s brother die, leaving a widow but no child, the man should take the widow as his wife, and raise up a family for his brother.",
		words: [ 'エパカㇱヌ', 'グル', 'モセ', 'アナㇰ', 'ネ', 'ウン', 'クス', 'カㇺピ', 'ヌイェ', 'カトゥ', 'エネ', 'オカイヒ', 'アイヌ', 'コロ', 'アイヌ', 'イリワㇰ', 'ライ', 'ワ', 'コロ', 'マチ', 'ホプパ', 'アイゲ', 'ポ', 'サㇰ', 'チキ', 'ライ', 'グル', 'コロ', 'アイヌ', 'イリワㇰ', 'アナㇰ', 'ネ', 'ネイ', 'マチ', 'コロ', 'ワ', 'イリワㇰ', 'オッタ', 'ケセ', 'コレ', 'クニ', 'ポ', 'ヘトゥクレ', 'ヤン', 'アニ', 'ネ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.12.18.wav",
		quizWords: [ 'カトゥ', 'イリワㇰ', 'モセ', 'オカイヒ', 'ホプパ', 'ケセ' ]
	},
	{
		target: "アラワン　アイヌ　ウイリワㇰ　オカイ:　キヤンネ　グル　マチ　コロ、　オロワノ　ポ　サㇰノ　ライ:",
		alt: "Arawan ainu uiriwak okai: kiyanne guru maci koro, orowano po sakno rai:",
		native: "There were once seven brothers. The eldest married, but died and left no family;",
		words: [ 'アラワン', 'アイヌ', 'ウイリワㇰ', 'オカイ', 'キヤンネ', 'グル', 'マチ', 'コロ', 'オロワノ', 'ポ', 'サㇰノ', 'ライ' ],
		audio: "audio/mark.12.19.wav",
		quizWords: [ 'キヤンネ' ]
	},
	{
		target: "トゥタヌ　アン　アイヌ　ネイ　シウェンテプ　コロ、　アイネ、　ポ　ホプパ　ソモキノ　ライ:",
		alt: "tutanu an ainu ney siwentep koro, aine, po hoppa somokino rai:",
		native: "and the second married his widow, and died without family; and so did the third.",
		words: [ 'トゥタヌ', 'アン', 'アイヌ', 'ネイ', 'シウェンテプ', 'コロ', 'アイネ', 'ポ', 'ホプパ', 'ソモキノ', 'ライ' ],
		audio: "audio/mark.12.20.wav",
		quizWords: [ 'トゥタヌ' ]
	},
	{
		target: "ネイ　オトゥタヌ　アン　アイヌ　セㇺ　コラチ;　アラワン　ウタラ　ポ　アンデ　ソモキ　ニサ　ルウェ　ネ。　オカケタ　ネイ　シウェンテプ　ネ　ヤㇰカ　ライ　ニサ　ルウェ　ネ　ナ。",
		alt: "ney otutanu an ainu sem koraci; arawan utara po ande somoki nisa ruwe ne. Okaketa ney siwentep ne yakka rai nisa ruwe ne na.",
		native: "All the seven died and left no family. The woman herself died last of all.",
		words: [ 'ネイ', 'オトゥタヌ', 'アン', 'アイヌ', 'セㇺ', 'コラチ', 'アラワン', 'ウタラ', 'ポ', 'アンデ', 'ソモキ', 'ニサ', 'ルウェ', 'ネ', 'オカケタ', 'ネイ', 'シウェンテプ', 'ネ', 'ヤㇰカ', 'ライ', 'ニサ', 'ルウェ', 'ネ', 'ナ' ],
		audio: "audio/mark.12.21.wav",
		quizWords: [ 'オトゥタヌ', 'セㇺ' ]
	},
	{
		target: "ヘトポ　シㇰヌ　イ　イタ　アナㇰ　ネ　ネイ　シウェンテプ　アナㇰ　ネイ　ウタラ　オッタ　イナン　グル　コロ　マチヒ　ネ　クス　ネ　ヤ？　アラワ　ニウ　マチ　ネ　コン　ニサ　ルウェ　ネ　クス　ネ　ナ。",
		alt: "Hetopo siknu i ita anak ne ney siwentep anak ney utara otta inan guru koro macihi ne kusu ne ya? arawa niu maci ne kon nisa ruwe ne kusu ne na.",
		native: "At the resurrection whose wife will she be, all seven brothers having had her as their wife?\"",
		words: [ 'ヘトポ', 'シㇰヌ', 'イ', 'イタ', 'アナㇰ', 'ネ', 'ネイ', 'シウェンテプ', 'アナㇰ', 'ネイ', 'ウタラ', 'オッタ', 'イナン', 'グル', 'コロ', 'マチヒ', 'ネ', 'クス', 'ネ', 'ヤ', 'アラワ', 'ニウ', 'マチ', 'ネ', 'コン', 'ニサ', 'ルウェ', 'ネ', 'クス', 'ネ', 'ナ' ],
		audio: "audio/mark.12.22.wav",
		quizWords: [ 'アラワ', 'マチヒ' ]
	},
	{
		target: "オロタ　イェス　エネ　イタㇰヒ　エチ　ウタラ　アナㇰ　ネ　カムイ　ヌイェレ　カㇺビソㇱ　ネワ　カムイ　キロロ　エチ　エラㇺペウテㇰ　ワ　クス、　タㇺベ　クス、　エチ　オハイタ　ソモキ　ルウェ　ヘ　アン？",
		alt: "Orota Yesu ene itakhi Eci utara anak ne Kamui nuyere kambisos newa Kamui kiroro eci erampeutek wa kusu, tambe kusu, eci ohaita somoki ruwe he an?",
		native: "\"Is not the reason of your mistake,\" answered Jesus, \"your ignorance of the scriptures and of the power of God?",
		words: [ 'オロタ', 'イェス', 'エネ', 'イタㇰヒ', 'エチ', 'ウタラ', 'アナㇰ', 'ネ', 'カムイ', 'ヌイェレ', 'カㇺビソㇱ', 'ネワ', 'カムイ', 'キロロ', 'エチ', 'エラㇺペウテㇰ', 'ワ', 'クス', 'タㇺベ', 'クス', 'エチ', 'オハイタ', 'ソモキ', 'ルウェ', 'ヘ', 'アン' ],
		audio: "audio/mark.12.23.wav",
		quizWords: [ 'オハイタ', 'ヌイェレ', 'カㇺビソㇱ' ]
	},
	{
		target: "ライ　オロワノ　ヘトポ　シㇰヌ　イタ　アナㇰ　ネ　マッ　アフプカラ　アㇺベ、　アイヌ　アフプカラ　アㇺベ、　マッ　コレ、　アイヌ　コレ　イ　イサマ;　コロカ、　カンド　オッタ　アン　カムイ　ハウトゥルンベ　ウコラチ　ネ　ルウェ　ネ。",
		alt: "Rai orowano hetopo siknu ita anak ne mat ahupkara ambe, ainu ahupkara ambe, mat kore, ainu kore i isama; koroka, kando otta an Kamui hauturunbe ukoraci ne ruwe ne.",
		native: "When people rise from the dead, there is no marrying or being married; but they are as angels in heaven.",
		words: [ 'ライ', 'オロワノ', 'ヘトポ', 'シㇰヌ', 'イタ', 'アナㇰ', 'ネ', 'マッ', 'アフプカラ', 'アㇺベ', 'アイヌ', 'アフプカラ', 'アㇺベ', 'マッ', 'コレ', 'アイヌ', 'コレ', 'イ', 'イサマ', 'コロカ', 'カンド', 'オッタ', 'アン', 'カムイ', 'ハウトゥルンベ', 'ウコラチ', 'ネ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.12.24.wav",
		quizWords: [ 'ハウトゥルンベ', 'ウコラチ' ]
	},
	{
		target: "コロカ、　ライ　グル　ヘトポ　ア　シㇰヌレ　クス　アン　アプ　アナㇰ:　モセ　ヌイェ　カㇺビソㇱ　カタ　ネイ　チャハ　オルㇱペ　チエシンヌイェ　ワ　アン　ウシケタ、　ネコン　ア　イタㇰ　アニ　シヌマ　オロタ　カムイ　イェ　ヤ？　ナア　ソモ　エチ　オロオイタㇰ　ヤ？―　クアニ　アナㇰ　ネ　アビラハㇺ　コロ　カムイ　ネ、　イサアㇰ　コロ　カムイ　ネ、　ヤコブ　コロ　カムイ　ネ　ルウェ　ネ、　アリ　アン　イタㇰ　アニ　カムイ　イタㇰ　ニサ。",
		alt: "Koroka, rai guru hetopo a siknure kusu an ap anak: Mose nuye kambisos kata ney caha oruspe ciesinnuye wa an usiketa, nekon a itak ani sinuma orota Kamui ye ya? Naa somo eci orooitak ya?- Kuani anak ne Abraham koro Kamui ne, Isaak koro Kamui ne, Yakob koro Kamui ne ruwe ne, ari an itak ani Kamui itak nisa.",
		native: "\"As to the dead, and the fact that they rise, have you never read in the book of Moses, in the passage about the Bush, how God spoke to him saying - \'I am the God of Abraham, and the God of Isaac, and the God of Jacob\'?",
		words: [ 'コロカ', 'ライ', 'グル', 'ヘトポ', 'ア', 'シㇰヌレ', 'クス', 'アン', 'アプ', 'アナㇰ', 'モセ', 'ヌイェ', 'カㇺビソㇱ', 'カタ', 'ネイ', 'チャハ', 'オルㇱペ', 'チエシンヌイェ', 'ワ', 'アン', 'ウシケタ', 'ネコン', 'ア', 'イタㇰ', 'アニ', 'シヌマ', 'オロタ', 'カムイ', 'イェ', 'ヤ', 'ナア', 'ソモ', 'エチ', 'オロオイタㇰ', 'ヤ', 'クアニ', 'アナㇰ', 'ネ', 'アビラハㇺ', 'コロ', 'カムイ', 'ネ', 'イサアㇰ', 'コロ', 'カムイ', 'ネ', 'ヤコブ', 'コロ', 'カムイ', 'ネ', 'ルウェ', 'ネ', 'アリ', 'アン', 'イタㇰ', 'アニ', 'カムイ', 'イタㇰ', 'ニサ' ],
		audio: "audio/mark.12.25.wav",
		quizWords: [ 'チャハ' ]
	},
	{
		target: "シヌマ　アナㇰ　ネ　ライ　グル　コロ　カムイ　ソモ　ネ、　シㇰヌ　グル　コロ　カムイ　ネ　ルウェ　ネ:　エチ　ウタラ　ポロンノ　オハイタ　ルウェ　ネ　ナ。",
		alt: "sinuma anak ne rai guru koro Kamui somo ne, siknu guru koro Kamui ne ruwe ne: eci utara poronno ohaita ruwe ne na.",
		native: "He is not God of dead people, but of living. You are greatly mistaken.\"",
		words: [ 'シヌマ', 'アナㇰ', 'ネ', 'ライ', 'グル', 'コロ', 'カムイ', 'ソモ', 'ネ', 'シㇰヌ', 'グル', 'コロ', 'カムイ', 'ネ', 'ルウェ', 'ネ', 'エチ', 'ウタラ', 'ポロンノ', 'オハイタ', 'ルウェ', 'ネ', 'ナ' ],
		audio: "audio/mark.12.26.wav",
		quizSentence: true
	},
	{
		target: "オロワ、　カㇺピ　ヌイェ　グル　シネン　エㇰ、　アワ、　ネイ　ウタラ　ウタㇱパ　ウウェペケンヌ　シリ　ヌ、　サマタ、　イェス　アナㇰ　ネ　ピリカノ　ネイ　ウタラ　オッタ　エセ　イタㇰ　キ　セコㇽ　アㇺベ　エラマン　コロ、　オロタ　エネ　ウウェペケンヌヒ　イヨッタ　サパネ　アン　イカㇱパオッテ　ネコン　ア　アㇺベ　ネ　ヤ、　アリ　イタㇰ。",
		alt: "Orowa, kampi nuye guru sinen ek, awa, ney utara utaspa uwepekennu siri nu, samata, Yesu anak ne pirikano ney utara otta ese itak ki sekor ambe eraman koro, orota ene uwepekennuhi Iyotta sapane an ikaspaotte nekon a ambe ne ya, ari itak.",
		native: "Then came up one of the teachers of the Law who had heard their discussions. Knowing that Jesus had answered them wisely, he asked him this question, \"Which commandment is the most important of all?\"",
		words: [ 'オロワ', 'カㇺピ', 'ヌイェ', 'グル', 'シネン', 'エㇰ', 'アワ', 'ネイ', 'ウタラ', 'ウタㇱパ', 'ウウェペケンヌ', 'シリ', 'ヌ', 'サマタ', 'イェス', 'アナㇰ', 'ネ', 'ピリカノ', 'ネイ', 'ウタラ', 'オッタ', 'エセ', 'イタㇰ', 'キ', 'セコㇽ', 'アㇺベ', 'エラマン', 'コロ', 'オロタ', 'エネ', 'ウウェペケンヌヒ', 'イヨッタ', 'サパネ', 'アン', 'イカㇱパオッテ', 'ネコン', 'ア', 'アㇺベ', 'ネ', 'ヤ', 'アリ', 'イタㇰ' ],
		audio: "audio/mark.12.27.wav",
		quizSentence: true
	},
	{
		target: "イェス　エセ　ワ　エネ　イタㇰヒ　イヨッタ　サパネプ　アナㇰ　ネ　タㇺベ　ネ　イㇱラエル　ウン　ウタラ　イヌ　ヤン、　ウタラパ　ネ　チコロ　カムイ　アナㇰ　シネ　ウタラパ　ネ:",
		alt: "Yesu ese wa ene itakhi Iyotta sapanep anak ne tambe ne Israeru un utara inu yan, Utarapa ne cikoro Kamui anak sine Utarapa ne:",
		native: "\"The most important,\" answered Jesus, \"is - \'Hear, Israel; the Lord our God is the one Lord;",
		words: [ 'イェス', 'エセ', 'ワ', 'エネ', 'イタㇰヒ', 'イヨッタ', 'サパネプ', 'アナㇰ', 'ネ', 'タㇺベ', 'ネ', 'イㇱラエル', 'ウン', 'ウタラ', 'イヌ', 'ヤン', 'ウタラパ', 'ネ', 'チコロ', 'カムイ', 'アナㇰ', 'シネ', 'ウタラパ', 'ネ' ],
		audio: "audio/mark.12.28.wav",
		quizWords: [ 'サパネプ' ]
	},
	{
		target: "エアニ　アナㇰ　サㇺベ　オㇱシ　ワノ　ヘㇺヘㇺ、　ケウトゥㇺ　オㇱシ　ワノ　ヘㇺヘㇺ、　ラム　オㇱシ　ワノ　ヘㇺヘㇺ、　オロワ、　キロロ　アン　パㇰノ　ヘㇺヘㇺ、　ウタラパ　ネ　エ　コロ　カムイ　オマプ　ヤン。",
		alt: "eani anak sambe ossi wano hemhem, keutum ossi wano hemhem, ramu ossi wano hemhem, orowa, kiroro an pakno hemhem, Utarapa ne e koro Kamui omap yan.",
		native: "and you must love the Lord your God with all your heart, and with all your soul, and with all your mind, and with all your strength.\'",
		words: [ 'エアニ', 'アナㇰ', 'サㇺベ', 'オㇱシ', 'ワノ', 'ヘㇺヘㇺ', 'ケウトゥㇺ', 'オㇱシ', 'ワノ', 'ヘㇺヘㇺ', 'ラム', 'オㇱシ', 'ワノ', 'ヘㇺヘㇺ', 'オロワ', 'キロロ', 'アン', 'パㇰノ', 'ヘㇺヘㇺ', 'ウタラパ', 'ネ', 'エ', 'コロ', 'カムイ', 'オマプ', 'ヤン' ],
		audio: "audio/mark.12.29.wav",
		quizSentence: true
	},
	{
		target: "ネイ　オトゥタヌプ　アナㇰ　ネ　タㇺベ　ネ:　エアニ　ヤイコタ　ヤイオマプ　コラチ　アオタ　ウン　グル　オマプ　ヤン。　タン　イカㇱパオッテ　カスノ　パセプ　イサㇺ　ルウェ　ネ。",
		alt: "Ney otutanup anak ne tambe ne: Eani yaikota yaiomap koraci aota un guru omap yan. Tan ikaspaotte kasuno pasep isam ruwe ne.",
		native: "The second is this - \'You must love your neighbor as you love yourself.\' There is no commandment greater than these.\"",
		words: [ 'ネイ', 'オトゥタヌプ', 'アナㇰ', 'ネ', 'タㇺベ', 'ネ', 'エアニ', 'ヤイコタ', 'ヤイオマプ', 'コラチ', 'アオタ', 'ウン', 'グル', 'オマプ', 'ヤン', 'タン', 'イカㇱパオッテ', 'カスノ', 'パセプ', 'イサㇺ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.12.30.wav",
		quizWords: [ 'パセプ', 'オトゥタヌプ', 'カスノ' ]
	},
	{
		target: "シヌマ　オロタ　ネイ　カㇺピ　ヌイェ　グル　エネ　イタㇰヒ　ソンノ　ポカ、　エパカㇱヌ　グル、　シヌマ　アナㇰ　ネ　シネプ　ネ、　オロワ、　ネイ　カムイ　モシマ　ウタラパ　イサㇺ、　アニ　エ　イェ　カトゥ　ピリカプ　ネ　ルウェ　ネ;",
		alt: "sinuma orota ney kampi nuye guru ene itakhi Sonno poka, Epakasnu guru, sinuma anak ne sinep ne, orowa, ney Kamui mosima Utarapa isam, ani E ye katu pirikap ne ruwe ne;",
		native: "\"Wisely answered, teacher!\" exclaimed the teacher of the Law. \"It is true, as you say, that there is one God, and that there is no other besides him;",
		words: [ 'シヌマ', 'オロタ', 'ネイ', 'カㇺピ', 'ヌイェ', 'グル', 'エネ', 'イタㇰヒ', 'ソンノ', 'ポカ', 'エパカㇱヌ', 'グル', 'シヌマ', 'アナㇰ', 'ネ', 'シネプ', 'ネ', 'オロワ', 'ネイ', 'カムイ', 'モシマ', 'ウタラパ', 'イサㇺ', 'アニ', 'エ', 'イェ', 'カトゥ', 'ピリカプ', 'ネ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.12.31.wav",
		quizSentence: true
	},
	{
		target: "オロワ、　サㇺベ　オㇱシ　ワノ　ヘㇺヘㇺ、　ラム　アン　パㇰノ　ヘㇺヘㇺ、　キロロ　アン　パㇰノ　ヘㇺヘㇺ、　シヌマ　コオマプ、　サマタ、　ヤイオマプ　コラチ　アオタ　ウン　グル　オマプ　アㇺベ　アナㇰ　ネ　オビッタノ　オカイ　ウフイェカ―ヤンゲプ　ネワ　ヤンゲ　クニプ　カスノ　エアリキンネ　イカシマ　アン　アㇺベ　ネ　ナ、　セコロ　イタㇰ。",
		alt: "orowa, sambe ossi wano hemhem, ramu an pakno hemhem, kiroro an pakno hemhem, sinuma koomap, samata, yaiomap koraci aota un guru omap ambe anak ne obittano okai uhuyeka-yangep newa yange kunip kasuno earikinne ikasima an ambe ne na, sekoro itak.",
		native: "and to love him with all one\'s heart, and with all one\'s understanding, and with all one\'s strength, and to love one\'s neighbor as one loves oneself is far beyond all burnt offerings and sacrifices.\"",
		words: [ 'オロワ', 'サㇺベ', 'オㇱシ', 'ワノ', 'ヘㇺヘㇺ', 'ラム', 'アン', 'パㇰノ', 'ヘㇺヘㇺ', 'キロロ', 'アン', 'パㇰノ', 'ヘㇺヘㇺ', 'シヌマ', 'コオマプ', 'サマタ', 'ヤイオマプ', 'コラチ', 'アオタ', 'ウン', 'グル', 'オマプ', 'アㇺベ', 'アナㇰ', 'ネ', 'オビッタノ', 'オカイ', 'ウフイェカ', 'ヤンゲプ', 'ネワ', 'ヤンゲ', 'クニプ', 'カスノ', 'エアリキンネ', 'イカシマ', 'アン', 'アㇺベ', 'ネ', 'ナ', 'セコロ', 'イタㇰ' ],
		audio: "audio/mark.12.32.wav",
		quizWords: [ 'オビッタノ', 'ウフイェカ', 'コオマプ', 'ヤンゲプ' ]
	},
	{
		target: "オロワ、　ネイ　グル　オラムㇱノ　エセ　ルウェ　ネ　セコロ　イェス　ヌカラ　コロ、　オロタ　エネ　イタㇰヒ　アオカイ　アナㇰ　ネ　カムイ　モシリ　オロワノ　エハンゲコノ　アン　ソモ　ネ、　アニ　イタㇰ。　オロワノ、　ネイ　イ　ワノ　ネン　ネ　ヤㇰカ　イェス　オッタ　ネプカ　ウウェペケンヌ　クニ　グル　イサㇺ　ルウェ　ネ　ナ。",
		alt: "Orowa, ney guru oramusno ese ruwe ne sekoro Yesu nukara koro, orota ene itakhi Aokai anak ne Kamui mosiri orowano ehangekono an somo ne, ani itak. Orowano, ney i wano nen ne yakka Yesu otta nepka uwepekennu kuni guru isam ruwe ne na.",
		native: "Seeing that he had answered with discernment, Jesus said to him, \"You are not far from the kingdom of God.\" After that no one ventured to question him further.",
		words: [ 'オロワ', 'ネイ', 'グル', 'オラムㇱノ', 'エセ', 'ルウェ', 'ネ', 'セコロ', 'イェス', 'ヌカラ', 'コロ', 'オロタ', 'エネ', 'イタㇰヒ', 'アオカイ', 'アナㇰ', 'ネ', 'カムイ', 'モシリ', 'オロワノ', 'エハンゲコノ', 'アン', 'ソモ', 'ネ', 'アニ', 'イタㇰ', 'オロワノ', 'ネイ', 'イ', 'ワノ', 'ネン', 'ネ', 'ヤㇰカ', 'イェス', 'オッタ', 'ネプカ', 'ウウェペケンヌ', 'クニ', 'グル', 'イサㇺ', 'ルウェ', 'ネ', 'ナ' ],
		audio: "audio/mark.12.33.wav",
		quizWords: [ 'オラムㇱノ' ]
	},
	{
		target: "オロワ、　イェス　カムイ　コラ　ケンル　タ　エパカㇱヌ　ワ　アン　イタ　エセ　ワ　エネ　イタㇰヒ　ヘマンダ　クス　カㇺピ　ヌイェ　ウタラ　アナㇰ　ネ　キリㇱト　アナㇰ　ダビダ　コロ　ポホ　ネ　アニ　イタㇰ　ヤ？",
		alt: "Orowa, Yesu Kamui kora kenru ta epakasnu wa an ita ese wa ene itakhi Hemanda kusu kampi nuye utara anak ne Kiristo anak Dabid koro poho ne ani itak ya?",
		native: "While Jesus was teaching in the Temple Courts, he asked, \"How is it that the teachers of the Law say that the Christ is to be David\'s son?",
		words: [ 'オロワ', 'イェス', 'カムイ', 'コラ', 'ケンル', 'タ', 'エパカㇱヌ', 'ワ', 'アン', 'イタ', 'エセ', 'ワ', 'エネ', 'イタㇰヒ', 'ヘマンダ', 'クス', 'カㇺピ', 'ヌイェ', 'ウタラ', 'アナㇰ', 'ネ', 'キリㇱト', 'アナㇰ', 'ダビダ', 'コロ', 'ポホ', 'ネ', 'アニ', 'イタㇰ', 'ヤ' ],
		audio: "audio/mark.12.34.wav",
		quizSentence: true
	},
	{
		target: "ダビダ　アナㇰ　ネ　ヤイコタ　アㇱカンネ　ラマッ　アニ、　ウタラパ　アナㇰ　ネ　ク　ウタラパ　オッタ、　エネ　イタㇰヒ　エ　エポㇰバ　ウタラ　カタ　エ　チキリ　アアンデ　クニプ　ネ　ク　カラ　パㇰノ、　ク　シモン　テㇰ　サマタ　ア、　セコロ　イタㇰ。",
		alt: "Dabid anak ne yaikota Askanne Ramat ani, Utarapa anak ne ku Utarapa otta, ene itakhi E epokba utara kata e cikiri aande kunip ne ku kara pakno, Ku simon tek samata a, sekoro itak.",
		native: "David said himself, speaking under the inspiration of the Holy Spirit - \'The Lord said to my lord: Sit at my right hand, until I put your enemies beneath your feet.\'",
		words: [ 'ダビダ', 'アナㇰ', 'ネ', 'ヤイコタ', 'アㇱカンネ', 'ラマッ', 'アニ', 'ウタラパ', 'アナㇰ', 'ネ', 'ク', 'ウタラパ', 'オッタ', 'エネ', 'イタㇰヒ', 'エ', 'エポㇰバ', 'ウタラ', 'カタ', 'エ', 'チキリ', 'アアンデ', 'クニプ', 'ネ', 'ク', 'カラ', 'パㇰノ', 'ク', 'シモン', 'テㇰ', 'サマタ', 'ア', 'セコロ', 'イタㇰ' ],
		audio: "audio/mark.12.35.wav",
		quizWords: [ 'チキリ' ]
	},
	{
		target: "ダビダ　ヤイコタ　シヌマ　ウタラパ　アニ　イェ;　ヘマンダ　クス　コロ　ポホ　ネ　ルウェ　ネ　ヤ？　オロワ、　ネイ　ウワッテノ　アン　ウタラ　アナㇰ　ネ　ヤイコプンテㇰノ　シヌマ　ヌ　ニサ　ルウェ　ネ。",
		alt: "Dabid yaikota sinuma Utarapa ani ye; Hemanda kusu koro poho ne ruwe ne ya? Orowa, ney uwatteno an utara anak ne yaikopuntekno sinuma nu nisa ruwe ne.",
		native: "David himself calls him \'lord,\' how comes it, then, that he is to be his son?\" The mass of the people listened to Jesus with delight.",
		words: [ 'ダビダ', 'ヤイコタ', 'シヌマ', 'ウタラパ', 'アニ', 'イェ', 'ヘマンダ', 'クス', 'コロ', 'ポホ', 'ネ', 'ルウェ', 'ネ', 'ヤ', 'オロワ', 'ネイ', 'ウワッテノ', 'アン', 'ウタラ', 'アナㇰ', 'ネ', 'ヤイコプンテㇰノ', 'シヌマ', 'ヌ', 'ニサ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.12.36.wav",
		quizWords: [ 'ヤイコプンテㇰノ', 'ウワッテノ' ]
	},
	{
		target: "オロワ、　エパカㇱヌ　ラポケタ　エネ　イタㇰヒ　タンネ　ミピヒ　ミ　ワ　アプカㇱ　ルスイ、　イラウゲトゥパ　ウシケタ　アコランガラプ　コノプル、",
		alt: "Orowa, epakasnu rapoketa ene itakhi Tanne mipihi mi wa apkas rusui, iraugetupa usiketa akorangarap konoburu,",
		native: "In the course of his teaching, Jesus said, \"See that you are on your guard against the teachers of the Law, who delight to walk about in long robes, and to be greeted in the streets with respect,",
		words: [ 'オロワ', 'エパカㇱヌ', 'ラポケタ', 'エネ', 'イタㇰヒ', 'タンネ', 'ミピヒ', 'ミ', 'ワ', 'アプカㇱ', 'ルスイ', 'イラウゲトゥパ', 'ウシケタ', 'アコランガラプ', 'コノプル' ],
		audio: "audio/mark.12.37.wav",
		quizWords: [ 'ラポケタ', 'アコランガラプ', 'イラウゲトゥパ', 'コノプル' ]
	},
	{
		target: "ウウェカラパ　チセイ　タ　イヨッタ　サパネ　セッ　カタ、　サマタ　マラプト　アン　イタ　イヨッタ　サパネ　ウシケタ　ロㇰ　ルスイ　カㇺピ　ヌイェ　ウタラ　ヤイトゥバレ　ヤン;",
		alt: "Uwekarapa cisei ta iyotta sapane set kata, samata marapto an ita iyotta sapane usiketa rok rusui kampi nuye utara yaitubare yan;",
		native: "and to have the best seats in the synagogues, and places of honor at dinner.",
		words: [ 'ウウェカラパ', 'チセイ', 'タ', 'イヨッタ', 'サパネ', 'セッ', 'カタ', 'サマタ', 'マラプト', 'アン', 'イタ', 'イヨッタ', 'サパネ', 'ウシケタ', 'ロㇰ', 'ルスイ', 'カㇺピ', 'ヌイェ', 'ウタラ', 'ヤイトゥバレ', 'ヤン' ],
		audio: "audio/mark.12.38.wav",
		quizWords: [ 'マラプト' ]
	},
	{
		target: "ネイ　ウタラ　シヨㇺピヤラ　シウェンテプ　コロ　チセイ　イサㇺカ、　オロワ、　アコインガラ　クニ　クス　タンネ　イノンノ　イタㇰ　キ　ルウェ　ネ:　ネイ　ウタラ　アナㇰ　ネ　ナア　ポロンノ　アパナㇰテ　クス　ネ　ナ。",
		alt: "ney utara siyompiyara siwentep koro cisei isamka, orowa, akoingara kuni kusu tanne inonno itak ki ruwe ne: ney utara anak ne naa poronno apanakte kusu ne na.",
		native: "They are the men who rob widows of their homes, and make a pretense of saying long prayers. Their sentence will be all the heavier.\"",
		words: [ 'ネイ', 'ウタラ', 'シヨㇺピヤラ', 'シウェンテプ', 'コロ', 'チセイ', 'イサㇺカ', 'オロワ', 'アコインガラ', 'クニ', 'クス', 'タンネ', 'イノンノ', 'イタㇰ', 'キ', 'ルウェ', 'ネ', 'ネイ', 'ウタラ', 'アナㇰ', 'ネ', 'ナア', 'ポロンノ', 'アパナㇰテ', 'クス', 'ネ', 'ナ' ],
		audio: "audio/mark.12.39.wav",
		quizWords: [ 'アコインガラ', 'アパナㇰテ', 'シヨㇺピヤラ' ]
	},
	{
		target: "オロワ、　シヌマ　アナㇰ　ネ　カムイ　ヤンゲ　イチェン　カラウト　アン　ウシケタ　ア　ワ　インネ　ウタラ　ネイ　カラウト　オシケタ　イチェン　オマレ　カトゥ　ヌカラ:　オロワ、　インネ　オテㇰヌ　ウタラ　アナㇰ　ネ　ポロンノ　オマレ　ニサ　ルウェ　ネ。",
		alt: "Orowa, sinuma anak ne Kamui yange icen karauto an usiketa a wa inne utara ney karauto osiketa icen omare katu nukara: orowa, inne oteknu utara anak ne poronno omare nisa ruwe ne.",
		native: "Then Jesus sat down opposite the chests for the Temple offerings, and watched how the people put money into them. Many rich people were putting in large sums;",
		words: [ 'オロワ', 'シヌマ', 'アナㇰ', 'ネ', 'カムイ', 'ヤンゲ', 'イチェン', 'カラウト', 'アン', 'ウシケタ', 'ア', 'ワ', 'インネ', 'ウタラ', 'ネイ', 'カラウト', 'オシケタ', 'イチェン', 'オマレ', 'カトゥ', 'ヌカラ', 'オロワ', 'インネ', 'オテㇰヌ', 'ウタラ', 'アナㇰ', 'ネ', 'ポロンノ', 'オマレ', 'ニサ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.12.40.wav",
		quizWords: [ 'イチェン', 'カラウト' ]
	},
	{
		target: "アワ、　シネ　オテㇰサㇰ　シヨㇺピヤラ　シウェンテプ　エㇰ　ワ　トゥ　レプトㇱ　オマレ　ニサ　ルウェ　ネ、　ネイ　アㇺベ　アナㇰ　ゴ　リン　パㇰノ　アン　アプ　ネ。",
		alt: "Awa, sine oteksak siyompiyara siwentep ek wa tu reptos omare nisa ruwe ne, ney ambe anak go rin pakno an ap ne.",
		native: "but one poor widow came and put in two small coins, worth very little.",
		words: [ 'アワ', 'シネ', 'オテㇰサㇰ', 'シヨㇺピヤラ', 'シウェンテプ', 'エㇰ', 'ワ', 'トゥ', 'レプトㇱ', 'オマレ', 'ニサ', 'ルウェ', 'ネ', 'ネイ', 'アㇺベ', 'アナㇰ', 'ゴ', 'リン', 'パㇰノ', 'アン', 'アプ', 'ネ' ],
		audio: "audio/mark.12.41.wav",
		quizWords: [ 'リン', 'レプトㇱ', 'オテㇰサㇰ' ]
	},
	{
		target: "オロワ、　シヌマ　アナㇰ　ネ　コロ　コイカラ　ウタラ　ホトゥイェカラ　ワ　オロタ　エネ　イタㇰヒ　ソンノ　エチ　オッタ　ク　イェ、　ネイ　カラウト　オッタ　イチェン　オマレ　グル　カスノ　タン　オテㇰサㇰ　シヨㇺピヤラ　シウェンテプ　ナア　ポロンノ　オマレ　ニサ　ルウェ　ネ:",
		alt: "Orowa, sinuma anak ne koro koikara utara hotuyekara wa orota ene itakhi Sonno eci otta Ku ye, ney karauto otta icen omare guru kasuno tan oteksak siyompiyara siwentep naa poronno omare nisa ruwe ne:",
		native: "Then, calling his disciples to him, Jesus said, \"I tell you that this poor widow has put in more than all the others who were putting money into the chests;",
		words: [ 'オロワ', 'シヌマ', 'アナㇰ', 'ネ', 'コロ', 'コイカラ', 'ウタラ', 'ホトゥイェカラ', 'ワ', 'オロタ', 'エネ', 'イタㇰヒ', 'ソンノ', 'エチ', 'オッタ', 'ク', 'イェ', 'ネイ', 'カラウト', 'オッタ', 'イチェン', 'オマレ', 'グル', 'カスノ', 'タン', 'オテㇰサㇰ', 'シヨㇺピヤラ', 'シウェンテプ', 'ナア', 'ポロンノ', 'オマレ', 'ニサ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.12.42.wav",
		quizSentence: true
	},
	{
		target: "イナㇺベ　クス　ネ　ヤクン、　ネイ　ウタラ　アナㇰ　ネ　イカシマ　アン　アㇺベ　オロワノ　ウㇰ　ワ　オマレ　ルウェ　ネ:　コロカ、　タン　シウェンテプ　アナㇰ　オテㇰサㇰ　ヤㇰカ　コロベ　オビッタ　オマレ　ニサ　ルウェ　ネ　クス　ネ　ナ、　セコロ　イタㇰ。",
		alt: "inambe kusu ne yakun, ney utara anak ne ikasima an ambe orowano uk wa omare ruwe ne: koroka, tan siwentep anak oteksak yakka korobe obitta omare nisa ruwe ne kusu ne na, sekoro itak.",
		native: "for everyone else put in something from what he had to spare, while she, in her need, put in all she had - everything that she had to live on.\"",
		words: [ 'イナㇺベ', 'クス', 'ネ', 'ヤクン', 'ネイ', 'ウタラ', 'アナㇰ', 'ネ', 'イカシマ', 'アン', 'アㇺベ', 'オロワノ', 'ウㇰ', 'ワ', 'オマレ', 'ルウェ', 'ネ', 'コロカ', 'タン', 'シウェンテプ', 'アナㇰ', 'オテㇰサㇰ', 'ヤㇰカ', 'コロベ', 'オビッタ', 'オマレ', 'ニサ', 'ルウェ', 'ネ', 'クス', 'ネ', 'ナ', 'セコロ', 'イタㇰ' ],
		audio: "audio/mark.12.43.wav",
		quizSentence: true
	}
];
