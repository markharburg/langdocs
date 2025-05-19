const gLang = 'ai';
const gBook = 'Mark';
const gChap = '14';
const gMode = 'ai';
const gSpeed = '120';

const slideData =
[
	{
		target: "トゥッコ　オカケタ　カマクㇱ　マラプト、　パンダネ　サㇰ　パン　マラプト　アン;　オロワ、　カムイ　コラ　ケンル　エサパネ　ウタラ　ネワ、　カㇺピ　ヌイェ　ウタラ　アナㇰ　ネ　ヌイナノ　シヌマ　キシマ　ワ　ライゲ　クニ　フナラ　ルウェ　ネ:",
		alt: "Tutko okaketa Kamakus marapto, Pandane sak pan marapto an; orowa, Kamui kora kenru esapane utara newa, kampi nuye utara anak ne nuinano sinuma kisima wa raige kuni hunara ruwe ne:",
		native: "It was now two days before the Festival of the Passover and the unleavened bread. The chief priests and the teachers of the Law were looking for an opportunity to arrest Jesus by stealth, and to put him to death;",
		words: [ 'トゥッコ', 'オカケタ', 'カマクㇱ', 'マラプト', 'パンダネ', 'サㇰ', 'パン', 'マラプト', 'アン', 'オロワ', 'カムイ', 'コラ', 'ケンル', 'エサパネ', 'ウタラ', 'ネワ', 'カㇺピ', 'ヌイェ', 'ウタラ', 'アナㇰ', 'ネ', 'ヌイナノ', 'シヌマ', 'キシマ', 'ワ', 'ライゲ', 'クニ', 'フナラ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.14/0.wav",
		quizWords: [ 'カマクㇱ', 'トゥッコ', 'パンダネ', 'ヌイナノ', 'マラプト' ]
	},
	{
		target: "アワ、　エネ　イタㇰヒ　マラプト　トホ　タ　ソモ、　ネイ　トホ　タ　ネイノ　キ　チキ　ウタラ　トゥムゲタ　サカヨ　ウコホプニ　ナンゴロ　クス　ネ、　セコロ　イタㇰ。",
		alt: "awa, ene itakhi Marapto toho ta somo, ney toho ta neyno ki ciki utara tumugeta sakayo ukohopuni nangoro kusu ne, sekoro itak.",
		native: "for they said, \"Not during the Festival, or the people may riot.\"",
		words: [ 'アワ', 'エネ', 'イタㇰヒ', 'マラプト', 'トホ', 'タ', 'ソモ', 'ネイ', 'トホ', 'タ', 'ネイノ', 'キ', 'チキ', 'ウタラ', 'トゥムゲタ', 'サカヨ', 'ウコホプニ', 'ナンゴロ', 'クス', 'ネ', 'セコロ', 'イタㇰ' ],
		audio: "audio/mark.14/1.wav",
		quizWords: [ 'サカヨ', 'ウコホプニ' ]
	},
	{
		target: "オロサマ、　シヌマ　ベタニア　コタン　ウン　ムニン　タスㇺ　キ　シモン　コロ　チセイ　オッタ　アン　ワ　アエプ　イベ　ラポケタ、　シネ　シウェンテプ　シノ　アタイェ　ルイ　トゥル　サㇰ　ナㇽドㇱ　スㇺ　オ　セイ　シントコ　シネプ　コロ　ワ　エㇰ、　アイゲ、　ネイ　アプ　ペレケ　ヒネ　シヌマ　サパ　カタ　スㇺ　オタ　ニサ　ルウェ　ネ。",
		alt: "Orosama, sinuma Betania kotan un munin tasum ki Simon koro cisei otta an wa aep ibe rapoketa, sine siwentep sino ataye rui turu sak nardos sum o sei sintoko sinep koro wa ek, aige, ney ap pereke hine sinuma sapa kata sum ota nisa ruwe ne.",
		native: "When Jesus was still at Bethany, in the house of Simon the leper, while he was sitting at the table, a woman came with an alabaster jar of choice spikenard perfume of great value. She broke the jar, and poured the perfume on his head.",
		words: [ 'オロサマ', 'シヌマ', 'ベタニア', 'コタン', 'ウン', 'ムニン', 'タスㇺ', 'キ', 'シモン', 'コロ', 'チセイ', 'オッタ', 'アン', 'ワ', 'アエプ', 'イベ', 'ラポケタ', 'シネ', 'シウェンテプ', 'シノ', 'アタイェ', 'ルイ', 'トゥル', 'サㇰ', 'ナㇽドㇱ', 'スㇺ', 'オ', 'セイ', 'シントコ', 'シネプ', 'コロ', 'ワ', 'エㇰ', 'アイゲ', 'ネイ', 'アプ', 'ペレケ', 'ヒネ', 'シヌマ', 'サパ', 'カタ', 'スㇺ', 'オタ', 'ニサ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.14/2.wav",
		quizWords: [ 'タスㇺ', 'ラポケタ', 'セイ', 'ムニン', 'ペレケ', 'ナㇽドㇱ' ]
	},
	{
		target: "コロカ、　ウタラ　トゥムゲタ　イルㇱカ　ウタラ　オカイ　ワ　エネ　イタㇰヒ",
		alt: "Koroka, utara tumugeta iruska utara okai wa ene itakhi",
		native: "Some of those who were present said to one another indignantly, \"Why has the perfume been wasted like this?",
		words: [ 'コロカ', 'ウタラ', 'トゥムゲタ', 'イルㇱカ', 'ウタラ', 'オカイ', 'ワ', 'エネ', 'イタㇰヒ' ],
		audio: "audio/mark.14/3.wav",
		quizSentence: true
	},
	{
		target: "ネプ　クス　タン　スㇺ　アコアッチャ　アン　ア？　タン　スㇺ　アナㇰ　ネ　アシㇰネ　ホッネ　デナリア　イカシマ　シネ　ワン　ホッ　デナリア　クス　アエホㇰ　ワ　オテㇰサㇰ　グル　オッタ　アエウンゲライテ　エアㇱカイベ　ネ、　アニ　イタㇰ。　オロワ、　ネイ　シウェンテプ　コサカヨ　イタㇰ　キ　ニサ　ルウェ　ネ。",
		alt: "Nep kusu tan sum akoatca an a? Tan sum anak ne asikne hotne denaria ikasima sine wan hot denaria kusu aehok wa oteksak guru otta aeungeraite easkaibe ne, ani itak. Orowa, ney siwentep kosakayo itak ki nisa ruwe ne.",
		native: "This perfume could have been sold for more than a year\'s wages, and the money given to the poor.\"",
		words: [ 'ネプ', 'クス', 'タン', 'スㇺ', 'アコアッチャ', 'アン', 'ア', 'タン', 'スㇺ', 'アナㇰ', 'ネ', 'アシㇰネ', 'ホッネ', 'デナリア', 'イカシマ', 'シネ', 'ワン', 'ホッ', 'デナリア', 'クス', 'アエホㇰ', 'ワ', 'オテㇰサㇰ', 'グル', 'オッタ', 'アエウンゲライテ', 'エアㇱカイベ', 'ネ', 'アニ', 'イタㇰ', 'オロワ', 'ネイ', 'シウェンテプ', 'コサカヨ', 'イタㇰ', 'キ', 'ニサ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.14/4.wav",
		quizWords: [ 'アエウンゲライテ', 'コサカヨ', 'アコアッチャ', 'ワン', 'アエホㇰ', 'エアㇱカイベ', 'オテㇰサㇰ' ]
	},
	{
		target: "コロカ、　イェス　エネ　イタㇰヒ　ネイ　シウェンテプ　モシマノ　オカイ　ヤン;　ネプ　クス　シヌマ　ラムサラㇰカ　ヤ？　シヌマ　アナㇰ　ネ　エン　オッタ　ピリカ　イキプ　キ　ニサ　ルウェ　ネ。",
		alt: "Koroka, Yesu ene itakhi Nei siwentep mosimano okai yan; nep kusu sinuma ramusarakka ya? sinuma anak ne En otta pirika ikip ki nisa ruwe ne.",
		native: "\"Leave her alone,\" said Jesus, as they began to find fault with her, \"why are you troubling her? This is a beautiful deed that she has done for me.",
		words: [ 'コロカ', 'イェス', 'エネ', 'イタㇰヒ', 'ネイ', 'シウェンテプ', 'モシマノ', 'オカイ', 'ヤン', 'ネプ', 'クス', 'シヌマ', 'ラムサラㇰカ', 'ヤ', 'シヌマ', 'アナㇰ', 'ネ', 'エン', 'オッタ', 'ピリカ', 'イキプ', 'キ', 'ニサ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.14/5.wav",
		quizWords: [ 'モシマノ', 'イキプ' ]
	},
	{
		target: "オテㇰサㇰ　ウタラ　ラㇺマ　エチ　トゥラノ　オカイ　クス　ヘㇺバラ　ネ　ヤㇰカ　エチ　レンガイネ　ネイ　ウタラ　ピリカレ　エアㇱカイ:　コロカ、　クアニ　アナㇰ　ネ　ラㇺマ　エチ　トゥラノ　アン　ソモ　ネ　ルウェ　ネ。",
		alt: "oteksak utara ramma eci turano okai kusu hembara ne yakka eci rengaine ney utara pirikare easkai: koroka, Kuani anak ne ramma eci turano an somo ne ruwe ne.",
		native: "You always have the poor with you, and whenever you wish you can do good to them; but you will not always have me.",
		words: [ 'オテㇰサㇰ', 'ウタラ', 'ラㇺマ', 'エチ', 'トゥラノ', 'オカイ', 'クス', 'ヘㇺバラ', 'ネ', 'ヤㇰカ', 'エチ', 'レンガイネ', 'ネイ', 'ウタラ', 'ピリカレ', 'エアㇱカイ', 'コロカ', 'クアニ', 'アナㇰ', 'ネ', 'ラㇺマ', 'エチ', 'トゥラノ', 'アン', 'ソモ', 'ネ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.14/6.wav",
		quizWords: [ 'レンガイネ' ]
	},
	{
		target: "ネイ　シウェンテプ　アナㇰ　ネ　カラ　エアㇱカイ　パㇰノ　キ:　トゥシリ　オッタ　ク　ネトバケ　アオマレ　クス　エトコタ　カシケタ　スㇺ　オタ　ニサ　ルウェ　ネ。",
		alt: "Ney siwentep anak ne kara easkai pakno ki: tusiri otta Ku netobake aomare kusu etokota kasiketa sum ota nisa ruwe ne.",
		native: "She has done what she could; she has perfumed my body beforehand for my burial.",
		words: [ 'ネイ', 'シウェンテプ', 'アナㇰ', 'ネ', 'カラ', 'エアㇱカイ', 'パㇰノ', 'キ', 'トゥシリ', 'オッタ', 'ク', 'ネトバケ', 'アオマレ', 'クス', 'エトコタ', 'カシケタ', 'スㇺ', 'オタ', 'ニサ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.14/7.wav",
		quizWords: [ 'トゥシリ', 'ネトバケ', 'アオマレ' ]
	},
	{
		target: "オロワ、　ソンノ　エチ　オッタ　ク　イェ　インギ　モシㇽ――エビッタ　ピリカ　ソンゴ　エウパㇱクマ　アン　ウシケタ　タプ　タン　シウェンテプ　イキプ　アナㇰ　ネ　アエㇱカルン　クニ　クス　アイェ　クス　ネ　ナ、　セコロ　イタㇰ。",
		alt: "Orowa, sonno eci otta Ku ye Ingi mosir--ebitta Pirika songo eupaskuma an usiketa tap tan siwentep ikip anak ne aeskarun kuni kusu aye kusu ne na, sekoro itak.",
		native: "And I tell you, wherever, in the whole world, the good news is proclaimed, what this woman has done will be told in memory of her.\"",
		words: [ 'オロワ', 'ソンノ', 'エチ', 'オッタ', 'ク', 'イェ', 'インギ', 'モシㇽ', 'エビッタ', 'ピリカ', 'ソンゴ', 'エウパㇱクマ', 'アン', 'ウシケタ', 'タプ', 'タン', 'シウェンテプ', 'イキプ', 'アナㇰ', 'ネ', 'アエㇱカルン', 'クニ', 'クス', 'アイェ', 'クス', 'ネ', 'ナ', 'セコロ', 'イタㇰ' ],
		audio: "audio/mark.14/8.wav",
		quizWords: [ 'エビッタ', 'エウパㇱクマ', 'アエㇱカルン' ]
	},
	{
		target: "オロワ、　ネイ　トゥン　イカシマ　ワ　ニウ　トゥムゲタ　アン　カリ　オッ　コタン　ウン　グル　ヨウダㇱ　アナㇰ　ネ　シヌマ　エコシ　クニ　クス　カムイ　コラ　ケンル　エサパネ　ウタラ　オロタ　オマン　ニサ　ルウェ　ネ。",
		alt: "Orowa, ney tun ikasima wa niu tumugeta an Kari ot kotan un guru Youdas anak ne sinuma ekosi kuni kusu Kamui kora kenru esapane utara orota oman nisa ruwe ne.",
		native: "After this, Judas Iscariot, one of the Twelve, went to the chief priests, to betray Jesus to them.",
		words: [ 'オロワ', 'ネイ', 'トゥン', 'イカシマ', 'ワ', 'ニウ', 'トゥムゲタ', 'アン', 'カリ', 'オッ', 'コタン', 'ウン', 'グル', 'ヨウダㇱ', 'アナㇰ', 'ネ', 'シヌマ', 'エコシ', 'クニ', 'クス', 'カムイ', 'コラ', 'ケンル', 'エサパネ', 'ウタラ', 'オロタ', 'オマン', 'ニサ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.14/9.wav",
		quizSentence: true
	},
	{
		target: "アワ、　ネイ　ウタラ　ヌ　チキ　ヤイコプンテㇰ　ワ　シヌマ　オッタ　イチェン　コレ　クニ　エイタカㇺキレ　ニサ　ルウェ　ネ。　オロワ、　シヌマ　イラㇺマカカ　イェス　エコシ　クニ　イ　フナラ　ニサ　ルウェ　ネ　ナ。",
		alt: "Awa, ney utara nu ciki yaikopuntek wa sinuma otta icen kore kuni eitakamkire nisa ruwe ne. Orowa, sinuma irammakaka Yesu ekosi kuni i hunara nisa ruwe ne na.",
		native: "They were glad to hear what he said, and promised to pay him. So he began looking for a good opportunity to betray Jesus.",
		words: [ 'アワ', 'ネイ', 'ウタラ', 'ヌ', 'チキ', 'ヤイコプンテㇰ', 'ワ', 'シヌマ', 'オッタ', 'イチェン', 'コレ', 'クニ', 'エイタカㇺキレ', 'ニサ', 'ルウェ', 'ネ', 'オロワ', 'シヌマ', 'イラㇺマカカ', 'イェス', 'エコシ', 'クニ', 'イ', 'フナラ', 'ニサ', 'ルウェ', 'ネ', 'ナ' ],
		audio: "audio/mark.14/10.wav",
		quizWords: [ 'イチェン', 'イラㇺマカカ' ]
	},
	{
		target: "オロワ、　パンダネ　サㇰ　パン　マラプト　エアッパケ　トホ　タ、　カマクㇱベ　ヤンゲ　トホ　タ、　コイカラ　ウタラ　アナㇰ　ネ　シヌマ　オッタ　エネ　イタㇰヒ　アオカイ　カマクㇱ　マラプト　イベ　クニ　ネ　ネイタ　チ　パイェ　アㇱ　ワ　エトコイキ　クス　エ　ラム　ヤ？　アニ　イタㇰ。",
		alt: "Orowa, Pandane sak pan marapto eatpake toho ta, Kamakusbe yange toho ta, koikara utara anak ne sinuma otta ene itakhi Aokai Kamakus marapto ibe kuni ne neita ci paye as wa etokoyki kusu E ramu ya? ani itak.",
		native: "On the first day of the Festival of the unleavened bread, when it was customary to kill the Passover lambs, his disciples said to Jesus, \"Where do you wish us to go and make preparations for your eating the Passover?\"",
		words: [ 'オロワ', 'パンダネ', 'サㇰ', 'パン', 'マラプト', 'エアッパケ', 'トホ', 'タ', 'カマクㇱベ', 'ヤンゲ', 'トホ', 'タ', 'コイカラ', 'ウタラ', 'アナㇰ', 'ネ', 'シヌマ', 'オッタ', 'エネ', 'イタㇰヒ', 'アオカイ', 'カマクㇱ', 'マラプト', 'イベ', 'クニ', 'ネ', 'ネイタ', 'チ', 'パイェ', 'アㇱ', 'ワ', 'エトコイキ', 'クス', 'エ', 'ラム', 'ヤ', 'アニ', 'イタㇰ' ],
		audio: "audio/mark.14/11.wav",
		quizWords: [ 'エアッパケ', 'カマクㇱベ' ]
	},
	{
		target: "オロワ、　シヌマ　コイカラ　ウタラ　トゥン　パイェレ　ワ　オロタ　エネ　イタㇰヒ　マチヤ　オッタ　エチ　パイェ、　ヤㇰ　アナㇰ　ネ　ワㇰカ　オ　セイ　オプ　セイ　ワ　エㇰ　シネ　アイヌ　エトゥナンガラ　クス　ネ:　ネイ　グル　オㇱ　パイェ:",
		alt: "Orowa, sinuma koikara utara tun payere wa orota ene itakhi Maciya otta eci paye, yak anak ne wakka o sei op sei wa ek sine ainu etunangara kusu ne: ney guru os paye:",
		native: "Jesus sent forward two of his disciples and said to them, \"Go into the city, and there a man carrying a pitcher of water will meet you; follow him;",
		words: [ 'オロワ', 'シヌマ', 'コイカラ', 'ウタラ', 'トゥン', 'パイェレ', 'ワ', 'オロタ', 'エネ', 'イタㇰヒ', 'マチヤ', 'オッタ', 'エチ', 'パイェ', 'ヤㇰ', 'アナㇰ', 'ネ', 'ワㇰカ', 'オ', 'セイ', 'オプ', 'セイ', 'ワ', 'エㇰ', 'シネ', 'アイヌ', 'エトゥナンガラ', 'クス', 'ネ', 'ネイ', 'グル', 'オㇱ', 'パイェ' ],
		audio: "audio/mark.14/12.wav",
		quizWords: [ 'オㇱ', 'オプ' ]
	},
	{
		target: "オロワ、　ネイタ　ネ　ヤㇰカ　シヌマ　アフン　チセイ　タ、　ネイ　チセイ　コロ　グル　オッタ　エネ　イタㇰ　ヤン;　エパカㇱヌ　グル　エネ　イェヒ　クアニ　ク　コイカラ　ウタラ　トゥラノ　オッタ　カマクㇱ　マラプト　イベ　クニ　クス　アン　トゥㇺプ　ネイタ　アン　ア？　アリ　イェ　ヤン。",
		alt: "orowa, neita ne yakka sinuma ahun cisei ta, ney cisei koro guru otta ene itak yan; Epakasnu guru ene yehi Kuani Ku koikara utara turano otta Kamakus marapto ibe kuni kusu an tumbu neita an a? ari ye yan.",
		native: "and, wherever he goes in, say to the owner of the house \'The teacher says - Where is my room where I am to eat the Passover with my disciples?\'",
		words: [ 'オロワ', 'ネイタ', 'ネ', 'ヤㇰカ', 'シヌマ', 'アフン', 'チセイ', 'タ', 'ネイ', 'チセイ', 'コロ', 'グル', 'オッタ', 'エネ', 'イタㇰ', 'ヤン', 'エパカㇱヌ', 'グル', 'エネ', 'イェヒ', 'クアニ', 'ク', 'コイカラ', 'ウタラ', 'トゥラノ', 'オッタ', 'カマクㇱ', 'マラプト', 'イベ', 'クニ', 'クス', 'アン', 'トゥㇺプ', 'ネイタ', 'アン', 'ア', 'アリ', 'イェ', 'ヤン' ],
		audio: "audio/mark.14/13.wav",
		quizWords: [ 'イェヒ' ]
	},
	{
		target: "オロワ、　ネイ　グル　ヤイコタ　ソ　アカラ　エトコイキ　ワ　アン　ポロ　リㇰタ　アン　トゥㇺプ　エチ　ヌカレ　クス　ネ、　ネイ　イタ　エトコイキ　ヤン、　セコロ　イェス　ネイ　ウタラ　オッタ　イタㇰ。",
		alt: "Orowa, ney guru yaikota so akara etokoyki wa an poro rikta an tumbu eci nukare kusu ne, ney ita etokoyki yan, sekoro Yesu ney utara otta itak.",
		native: "He will himself show you a large upstairs room, set out ready; and there make preparations for us.\"",
		words: [ 'オロワ', 'ネイ', 'グル', 'ヤイコタ', 'ソ', 'アカラ', 'エトコイキ', 'ワ', 'アン', 'ポロ', 'リㇰタ', 'アン', 'トゥㇺプ', 'エチ', 'ヌカレ', 'クス', 'ネ', 'ネイ', 'イタ', 'エトコイキ', 'ヤン', 'セコロ', 'イェス', 'ネイ', 'ウタラ', 'オッタ', 'イタㇰ' ],
		audio: "audio/mark.14/14.wav",
		quizWords: [ 'ヌカレ', 'ソ' ]
	},
	{
		target: "オロワ、　コイカラ　ウタラ　パイェ　ヒネ　マチヤ　オッタ　アラキ、　アイゲ、　オロタ　イェス　イェ　コラチ　ヌカン　ニサ　ルウェ　ネ:　アワ、　カマクㇱ　マラプト　エトコイキ　ニサ　ルウェ　ネ　ナ。",
		alt: "Orowa, koikara utara paye hine maciya otta araki, aige, orota Yesu ye koraci nukan nisa ruwe ne: awa, Kamakus marapto etokoyki nisa ruwe ne na.",
		native: "So the disciples set out and went into the city, and found everything just as Jesus had told them; and they prepared the Passover.",
		words: [ 'オロワ', 'コイカラ', 'ウタラ', 'パイェ', 'ヒネ', 'マチヤ', 'オッタ', 'アラキ', 'アイゲ', 'オロタ', 'イェス', 'イェ', 'コラチ', 'ヌカン', 'ニサ', 'ルウェ', 'ネ', 'アワ', 'カマクㇱ', 'マラプト', 'エトコイキ', 'ニサ', 'ルウェ', 'ネ', 'ナ' ],
		audio: "audio/mark.14/15.wav",
		quizSentence: true
	},
	{
		target: "オロサマ、　オヌマン　アン　コロ　シヌマ　ネイ　トゥン　イカシマ　ワン　コイカラ　ウタラ　トゥラノ　アラキ　ルウェ　ネ。",
		alt: "Orosama, onuman an koro sinuma ney tun ikasima wan koikara utara turano araki ruwe ne.",
		native: "In the evening he went there with the Twelve,",
		words: [ 'オロサマ', 'オヌマン', 'アン', 'コロ', 'シヌマ', 'ネイ', 'トゥン', 'イカシマ', 'ワン', 'コイカラ', 'ウタラ', 'トゥラノ', 'アラキ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.14/16.wav",
		quizSentence: true
	},
	{
		target: "オロワ、　ロㇰ　ワ　イベ　コラン　イタ、　イェス　エネ　イタㇰヒ　ソンノ　エチ　オッタ　ク　イェ、　エチ　シネン　エン　トゥラノ　イベ　コラン　グル　アナㇰ　ネ　エン　エコシ　クス　ネ、　セコロ　イタㇰ。",
		alt: "Orowa, rok wa ibe koran ita, Yesu ene itakhi Sonno eci otta Ku ye, eci sinen En turano ibe koran guru anak ne En ekosi kusu ne, sekoro itak.",
		native: "and when they had taken their places and were eating, Jesus said, \"I tell you that one of you is going to betray me - one who is eating with me.\"",
		words: [ 'オロワ', 'ロㇰ', 'ワ', 'イベ', 'コラン', 'イタ', 'イェス', 'エネ', 'イタㇰヒ', 'ソンノ', 'エチ', 'オッタ', 'ク', 'イェ', 'エチ', 'シネン', 'エン', 'トゥラノ', 'イベ', 'コラン', 'グル', 'アナㇰ', 'ネ', 'エン', 'エコシ', 'クス', 'ネ', 'セコロ', 'イタㇰ' ],
		audio: "audio/mark.14/17.wav",
		quizWords: [ 'シネン' ]
	},
	{
		target: "アワ、　ネイ　ウタラ　ヤイラㇺコイキ　ヘアシ、　オロワ、　シネン　ランゲ　シネン　ランゲ、　クアニ　ヘ？　アニ　イェ　ヘアシリキ。",
		alt: "Awa, ney utara yairamkoiki heasi, orowa, sinen range sinen range, Kuani he? ani ye heasiriki.",
		native: "They were grieved at this, and began to say to him, one after another, \"Can it be I?\"",
		words: [ 'アワ', 'ネイ', 'ウタラ', 'ヤイラㇺコイキ', 'ヘアシ', 'オロワ', 'シネン', 'ランゲ', 'シネン', 'ランゲ', 'クアニ', 'ヘ', 'アニ', 'イェ', 'ヘアシリキ' ],
		audio: "audio/mark.14/18.wav",
		quizWords: [ 'ヤイラㇺコイキ', 'ヘアシリキ' ]
	},
	{
		target: "オロタ　シヌマ　エネ　イタㇰヒ　エン　トゥラノ　テケヘ　ニマ　オッタ　オマレ　トゥン　イカシマ　ワ　ニウ　トゥムゲタ　オカイ　シネ　アイヌ　ネ。",
		alt: "Orota sinuma ene itakhi En turano tekehe nima otta omare tun ikasima wa niu tumugeta okai sine ainu ne.",
		native: "\"It is one of you Twelve,\" said Jesus, \"the one who is dipping his bread beside me into the dish.",
		words: [ 'オロタ', 'シヌマ', 'エネ', 'イタㇰヒ', 'エン', 'トゥラノ', 'テケヘ', 'ニマ', 'オッタ', 'オマレ', 'トゥン', 'イカシマ', 'ワ', 'ニウ', 'トゥムゲタ', 'オカイ', 'シネ', 'アイヌ', 'ネ' ],
		audio: "audio/mark.14/19.wav",
		quizWords: [ 'ニマ' ]
	},
	{
		target: "イナㇺベ　クス　ネ　ヤクン、　クス　チエシンヌイェ　ワ　アン　コラチ　カ　アイヌ　ポホ　オマン　ルウェ　ネ:　コロカ、　アニ　アイヌ　ポホ　アエコシ　グル　アナㇰ　ネ　ヤイサㇺベポカㇱ　フミ！　ネイ　グル　ソモ　アシコレ　ヤㇰ　ネ　シヌマ　クス　ピリカ　ルウェ　ネ、　セコロ　イタㇰ。",
		alt: "inambe kusu ne yakun, kusu ciesinnuye wa an koraci ka Ainu Poho oman ruwe ne: koroka, ani Ainu Poho aekosi guru anak ne yaisambepokas humi! Ney guru somo asikore yak ne sinuma kusu pirika ruwe ne, sekoro itak.",
		native: "True, the Son of Man must go, as scripture says of him, yet alas for that man by whom the Son of Man is being betrayed! For that man it would be better never to have been born!\"",
		words: [ 'イナㇺベ', 'クス', 'ネ', 'ヤクン', 'クス', 'チエシンヌイェ', 'ワ', 'アン', 'コラチ', 'カ', 'アイヌ', 'ポホ', 'オマン', 'ルウェ', 'ネ', 'コロカ', 'アニ', 'アイヌ', 'ポホ', 'アエコシ', 'グル', 'アナㇰ', 'ネ', 'ヤイサㇺベポカㇱ', 'フミ', 'ネイ', 'グル', 'ソモ', 'アシコレ', 'ヤㇰ', 'ネ', 'シヌマ', 'クス', 'ピリカ', 'ルウェ', 'ネ', 'セコロ', 'イタㇰ' ],
		audio: "audio/mark.14/20.wav",
		quizSentence: true
	},
	{
		target: "イベ　ラポケタ　シヌマ　パンタㇰ　ウㇰ　ワ　ヌヌケ　コロ　メㇱパ、　オロワ、　ネイ　ウタラ　オッタ　コレ　ワ　エネ　イタㇰヒ",
		alt: "Ibe rapoketa sinuma pantak uk wa nunuke koro mespa, orowa, ney utara otta kore wa ene itakhi",
		native: "While they were eating, Jesus took some bread, and, after saying the blessing, broke it, and gave it to them, and said, \"Take it; this is my body.\"",
		words: [ 'イベ', 'ラポケタ', 'シヌマ', 'パンタㇰ', 'ウㇰ', 'ワ', 'ヌヌケ', 'コロ', 'メㇱパ', 'オロワ', 'ネイ', 'ウタラ', 'オッタ', 'コレ', 'ワ', 'エネ', 'イタㇰヒ' ],
		audio: "audio/mark.14/21.wav",
		quizWords: [ 'パンタㇰ' ]
	},
	{
		target: "ウㇰ　ヤン、　タㇺベ　アナㇰ　ク　ネトバケ　ネ。　サマタ、　イタンギ　ウㇰ　コロ　ヤイイライゲ　キ　チキ　ウタラ　オッタ　コレ:　オロワ、　ネイ　ウタラ　イク　ニサ　ルウェ　ネ。　オロサマ、　オロタ　シヌマ　エネ　イタㇰヒ",
		alt: "Uk yan, tambe anak Ku netobake ne. Samata, itangi uk koro yaiiraige ki ciki utara otta kore: orowa, ney utara iku nisa ruwe ne. Orosama, orota sinuma ene itakhi",
		native: "Then he took a cup, and, after saying the thanksgiving, gave it to them, and they all drank from it.",
		words: [ 'ウㇰ', 'ヤン', 'タㇺベ', 'アナㇰ', 'ク', 'ネトバケ', 'ネ', 'サマタ', 'イタンギ', 'ウㇰ', 'コロ', 'ヤイイライゲ', 'キ', 'チキ', 'ウタラ', 'オッタ', 'コレ', 'オロワ', 'ネイ', 'ウタラ', 'イク', 'ニサ', 'ルウェ', 'ネ', 'オロサマ', 'オロタ', 'シヌマ', 'エネ', 'イタㇰヒ' ],
		audio: "audio/mark.14/22.wav",
		quizSentence: true
	},
	{
		target: "タㇺベ　アナㇰ　ネ　インネ　ウタラ　クス　アオヘトゥ　アエウイタㇰヌプ　クス　ク　ケミヒ　ネ　ルウェ　ネ。",
		alt: "Tambe anak ne inne utara kusu aohetu aeuitaknup kusu Ku kemihi ne ruwe ne.",
		native: "\"This is my covenant-blood,\" he said, \"which is poured out on behalf of many.",
		words: [ 'タㇺベ', 'アナㇰ', 'ネ', 'インネ', 'ウタラ', 'クス', 'アオヘトゥ', 'アエウイタㇰヌプ', 'クス', 'ク', 'ケミヒ', 'ネ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.14/23.wav",
		quizWords: [ 'アオヘトゥ', 'ケミヒ', 'アエウイタㇰヌプ' ]
	},
	{
		target: "ソンノ　エチ　オッタ　ク　イェ、　カムイ　モシㇽ――オッタ　エチ　トゥラノ　アシリペ　ク　イク　パㇰノ、　タンデ　オロワノ　ハッ　プンガラ　イベヘ　ク　イク　ソモキ　クス　ネ　ネ、　セコロ　イタㇰ。",
		alt: "Sonno eci otta Ku ye, Kamui mosir--otta eci turano asiripe Ku iku pakno, tande orowano hat pungara ibehe Ku iku somoki kusu ne ne, sekoro itak.",
		native: "I tell you that I will never again drink of the fruit of the vine, until that day when I will drink it new in the kingdom of God.\"",
		words: [ 'ソンノ', 'エチ', 'オッタ', 'ク', 'イェ', 'カムイ', 'モシㇽ', 'オッタ', 'エチ', 'トゥラノ', 'アシリペ', 'ク', 'イク', 'パㇰノ', 'タンデ', 'オロワノ', 'ハッ', 'プンガラ', 'イベヘ', 'ク', 'イク', 'ソモキ', 'クス', 'ネ', 'ネ', 'セコロ', 'イタㇰ' ],
		audio: "audio/mark.14/24.wav",
		quizWords: [ 'プンガラ', 'アシリペ' ]
	},
	{
		target: "オロワ、　シネ　シノッチャキ　キ　オケレ　チキ　カンラン　ウㇱ　ヌプリ　オロタ　ソユㇺバ　ワ　パイェ　ニサ　ルウェ　ネ　ナ。",
		alt: "Orowa, sine sinotcaki ki okere ciki Kanran us nupuri orota soyumba wa paye nisa ruwe ne na.",
		native: "They then sang a hymn, and went out up the Mount of Olives,",
		words: [ 'オロワ', 'シネ', 'シノッチャキ', 'キ', 'オケレ', 'チキ', 'カンラン', 'ウㇱ', 'ヌプリ', 'オロタ', 'ソユㇺバ', 'ワ', 'パイェ', 'ニサ', 'ルウェ', 'ネ', 'ナ' ],
		audio: "audio/mark.14/25.wav",
		quizWords: [ 'シノッチャキ' ]
	},
	{
		target: "オロワ、　ネイ　ウタラ　オッタ　イェス　エネ　イタㇰヒ　エチ　ウタラ　オビッタ　アウレエペッチウレ　クス　ネ:　イナㇺベ　クス　ネ　ヤクン、　ヒッスイィ　チコイキプ　レㇱパ　グル　ク　シリキㇰ　ワ　ネイ　ヒッスイィ　オヤケ　ウン　シッチャリ　クス　ネ　セコㇽ　アㇺベ　アヌイェ　ワ　アン　ルウェ　ネ　クス　ネ　ナ。",
		alt: "Orowa, ney utara otta Yesu ene itakhi Eci utara obitta aureepetciure kusu ne: inambe kusu ne yakun, hitsuji cikoikip respa guru ku sirikik wa ney hitsuji oyake un sitcari kusu ne sekor ambe anuye wa an ruwe ne kusu ne na.",
		native: "presently Jesus said to them, \"All of you will fall away; for scripture says - \'I will strike down the shepherd, and the sheep will be scattered.\'",
		words: [ 'オロワ', 'ネイ', 'ウタラ', 'オッタ', 'イェス', 'エネ', 'イタㇰヒ', 'エチ', 'ウタラ', 'オビッタ', 'アウレエペッチウレ', 'クス', 'ネ', 'イナㇺベ', 'クス', 'ネ', 'ヤクン', 'ヒッスイィ', 'チコイキプ', 'レㇱパ', 'グル', 'ク', 'シリキㇰ', 'ワ', 'ネイ', 'ヒッスイィ', 'オヤケ', 'ウン', 'シッチャリ', 'クス', 'ネ', 'セコㇽ', 'アㇺベ', 'アヌイェ', 'ワ', 'アン', 'ルウェ', 'ネ', 'クス', 'ネ', 'ナ' ],
		audio: "audio/mark.14/26.wav",
		quizWords: [ 'アヌイェ', 'シッチャリ' ]
	},
	{
		target: "ヤㇰカ、　ヘトポ　ア　エン　アシㇰヌレ　イマカケ　エチ　コッチャオッ　ガリラヤ　モシㇽ――オッタ　ク　オマン　クス　ネ　ナ、　セコロ　イタㇰ。",
		alt: "Yakka, hetopo a En asiknure imakake eci kotcaot Gariraya mosir--otta Ku oman kusu ne na, sekoro itak.",
		native: "Yet, after I have risen, I will go before you into Galilee.\"",
		words: [ 'ヤㇰカ', 'ヘトポ', 'ア', 'エン', 'アシㇰヌレ', 'イマカケ', 'エチ', 'コッチャオッ', 'ガリラヤ', 'モシㇽ', 'オッタ', 'ク', 'オマン', 'クス', 'ネ', 'ナ', 'セコロ', 'イタㇰ' ],
		audio: "audio/mark.14/27.wav",
		quizWords: [ 'アシㇰヌレ' ]
	},
	{
		target: "コロカ、　シヌマ　オッタ　ペッロㇱ　エネ　イタㇰヒ　アイヌ　オビッタ　アウレエペッチウレ　ヤㇰカ、　クアニ　アナㇰ　ソモ、　アニ　イタㇰ。",
		alt: "Koroka, sinuma otta Petros ene itakhi Ainu obitta aureepetciure yakka, kuani anak somo, ani itak.",
		native: "\"Even if everyone else falls away,\" said Peter, \"I will not.\"",
		words: [ 'コロカ', 'シヌマ', 'オッタ', 'ペッロㇱ', 'エネ', 'イタㇰヒ', 'アイヌ', 'オビッタ', 'アウレエペッチウレ', 'ヤㇰカ', 'クアニ', 'アナㇰ', 'ソモ', 'アニ', 'イタㇰ' ],
		audio: "audio/mark.14/28.wav",
		quizSentence: true
	},
	{
		target: "オロタ　イェス　エネ　イタㇰヒ　ソンノ　エ　オッタ　ク　イェ、　タント、　タン　ウクラン、　トゥ　スイネ　ニワトリ　チカプ　ハウ　コロ　エトコタ　エアニ　レ　スイ　ネ　エン　エシナ　クス　ネ　ナ、　セコロ　イタㇰ。",
		alt: "Orota Yesu ene itakhi Sonno e otta Ku ye, tanto, tan ukuran, tu suine niwatori cikap hau koro etokota eani re sui ne En esina kusu ne na, sekoro itak.",
		native: "\"I tell you,\" answered Jesus, \"that you yourself today - yes, this very night - before the cock crows twice, will disown me three times.\"",
		words: [ 'オロタ', 'イェス', 'エネ', 'イタㇰヒ', 'ソンノ', 'エ', 'オッタ', 'ク', 'イェ', 'タント', 'タン', 'ウクラン', 'トゥ', 'スイネ', 'ニワトリ', 'チカプ', 'ハウ', 'コロ', 'エトコタ', 'エアニ', 'レ', 'スイ', 'ネ', 'エン', 'エシナ', 'クス', 'ネ', 'ナ', 'セコロ', 'イタㇰ' ],
		audio: "audio/mark.14/29.wav",
		quizWords: [ 'スイネ', 'タント', 'ニワトリ', 'エシナ', 'ウクラン', 'スイ' ]
	},
	{
		target: "コロカ、　シヌマ　シノ　ユプケ　イタㇰ　アニ、　アオカイ　トゥラノ　ク　ライ　ヤㇰカ、　クアニ　エ　エシナ　ソモキ　クス　ネ、　アリ　イタㇰ。　サマタ、　オカイ　ウタラ　オビッタ　ネイノ　コラチ　イェ　ニサ　ルウェ　ネ　ナ。",
		alt: "Koroka, sinuma sino yupke itak ani, Aokai turano ku rai yakka, kuani E esina somoki kusu ne, ari itak. Samata, okai utara obitta neyno koraci ye nisa ruwe ne na.",
		native: "But Peter vehemently protested, \"Even if I must die with you, I will never disown you!\" And they all said the same.",
		words: [ 'コロカ', 'シヌマ', 'シノ', 'ユプケ', 'イタㇰ', 'アニ', 'アオカイ', 'トゥラノ', 'ク', 'ライ', 'ヤㇰカ', 'クアニ', 'エ', 'エシナ', 'ソモキ', 'クス', 'ネ', 'アリ', 'イタㇰ', 'サマタ', 'オカイ', 'ウタラ', 'オビッタ', 'ネイノ', 'コラチ', 'イェ', 'ニサ', 'ルウェ', 'ネ', 'ナ' ],
		audio: "audio/mark.14/30.wav",
		quizWords: [ 'ユプケ' ]
	},
	{
		target: "オロワ、　ゲッセマネ　アニ　アイェ　コタン　タ　アラキ:　アワ、　クアニ　イノンノ　イタㇰ　ク　キ　クス、　ネイ　ラポケタ　テダ　エチ　ロㇰ　ヤン、　アリ　アン　イタㇰ　アニ　シヌマ　アナㇰ　ネ　コイカラ　ウタラ　オッタ　イェ　ニサ　ルウェ　ネ。",
		alt: "Orowa, Getsemane ani aye kotan ta araki: awa, Kuani inonno itak Ku ki kusu, ney rapoketa teda eci rok yan, ari an itak ani sinuma anak ne koikara utara otta ye nisa ruwe ne.",
		native: "Presently they came to a garden known as Gethsemane, and Jesus said to his disciples \"Sit down here while I pray.\"",
		words: [ 'オロワ', 'ゲッセマネ', 'アニ', 'アイェ', 'コタン', 'タ', 'アラキ', 'アワ', 'クアニ', 'イノンノ', 'イタㇰ', 'ク', 'キ', 'クス', 'ネイ', 'ラポケタ', 'テダ', 'エチ', 'ロㇰ', 'ヤン', 'アリ', 'アン', 'イタㇰ', 'アニ', 'シヌマ', 'アナㇰ', 'ネ', 'コイカラ', 'ウタラ', 'オッタ', 'イェ', 'ニサ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.14/31.wav",
		quizSentence: true
	},
	{
		target: "オロワ、　シヌマ　アナㇰ　ネ　ペッロㇱ　ヘㇺヘㇺ、　ヤコブ　ヘㇺヘㇺ、　ヨアンネㇱ　ヘㇺヘㇺ、　トゥラ　ワ　パイェ、　アイネ、　シノ　キマテㇰ　ワ　ポロンノ　ラムオㇰナタラ　ヘアシ　ニサ　ルウェ　ネ。",
		alt: "Orowa, sinuma anak ne Petros hemhem, Yakob hemhem, Yoannes hemhem, tura wa paye, aine, sino kimatek wa poronno ramuoknatara heasi nisa ruwe ne.",
		native: "He took with him Peter, James, and John; and began to show signs of great dismay and deep distress of mind.",
		words: [ 'オロワ', 'シヌマ', 'アナㇰ', 'ネ', 'ペッロㇱ', 'ヘㇺヘㇺ', 'ヤコブ', 'ヘㇺヘㇺ', 'ヨアンネㇱ', 'ヘㇺヘㇺ', 'トゥラ', 'ワ', 'パイェ', 'アイネ', 'シノ', 'キマテㇰ', 'ワ', 'ポロンノ', 'ラムオㇰナタラ', 'ヘアシ', 'ニサ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.14/32.wav",
		quizWords: [ 'ラムオㇰナタラ', 'キマテㇰ' ]
	},
	{
		target: "オロワ、　ネイ　ウタラ　オッタ　エネ　イタㇰヒ　ク　ル　ライ　パㇰノ　ク　ケウトゥㇺ　アナㇰ　ネ　シリ　ヤイラㇺコイキ　ルウェ　ネ:　テダ　エチ　オカイ　ワ　シルウェ　ヤン、　セコロ　イタㇰ。",
		alt: "Orowa, ney utara otta ene itakhi Ku ru rai pakno Ku keutum anak ne siri yairamkoiki ruwe ne: teda eci okai wa siruwe yan, sekoro itak.",
		native: "\"I am sad at heart,\" he said, \"sad even to death; wait here, and watch.\"",
		words: [ 'オロワ', 'ネイ', 'ウタラ', 'オッタ', 'エネ', 'イタㇰヒ', 'ク', 'ル', 'ライ', 'パㇰノ', 'ク', 'ケウトゥㇺ', 'アナㇰ', 'ネ', 'シリ', 'ヤイラㇺコイキ', 'ルウェ', 'ネ', 'テダ', 'エチ', 'オカイ', 'ワ', 'シルウェ', 'ヤン', 'セコロ', 'イタㇰ' ],
		audio: "audio/mark.14/33.wav",
		quizWords: [ 'シルウェ' ]
	},
	{
		target: "オロワ、　シヌマ　ポンノ　ホシキノ　オマン　ワ　シリカタ　ハチリ、　アイゲ、　アエアㇱカイ　ヤㇰ　アナㇰ　ネ　ネイ　パキヒ　シヌマ　オロワノ　ヘチャカ　クニ　イノンノ　イタㇰ　ニサ　ルウェ　ネ。",
		alt: "Orowa, sinuma ponno hosikino oman wa sirikata haciri, aige, aeaskai yak anak ne ney pakihi sinuma orowano hecaka kuni inonno itak nisa ruwe ne.",
		native: "Going on a little further, he threw himself on the ground, and began to pray that, if it were possible, he might be spared that hour.",
		words: [ 'オロワ', 'シヌマ', 'ポンノ', 'ホシキノ', 'オマン', 'ワ', 'シリカタ', 'ハチリ', 'アイゲ', 'アエアㇱカイ', 'ヤㇰ', 'アナㇰ', 'ネ', 'ネイ', 'パキヒ', 'シヌマ', 'オロワノ', 'ヘチャカ', 'クニ', 'イノンノ', 'イタㇰ', 'ニサ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.14/34.wav",
		quizWords: [ 'ヘチャカ', 'ポンノ', 'アエアㇱカイ' ]
	},
	{
		target: "アワ、　エネ　イタㇰヒ　アビバ、　ミチヒ、　アオカイ　キ　エアイカプベ　ネプ　ネ　ヤㇰカ　イサマ:　タン　イタンギ　エン　オロワノ　ウㇰ　ワ　エン　コレ;　コロカ、　ク　レンガイネ　コラチ　ソモ　ネ、　エ　レンガイネ　ネイノ　キ　ワ　エン　コレ、　アリ　イタㇰ。",
		alt: "Awa, ene itakhi Abba, Micihi, Aokai ki eaikapbe nep ne yakka isama: tan itangi En orowano uk wa En kore; koroka, Ku rengaine koraci somo ne, E rengaine neyno ki wa En kore, ari itak.",
		native: "\"Abba, Father,\" he said, \"all things are possible to you; take away this cup from me; yet, not what I will, but what you will.\"",
		words: [ 'アワ', 'エネ', 'イタㇰヒ', 'アビバ', 'ミチヒ', 'アオカイ', 'キ', 'エアイカプベ', 'ネプ', 'ネ', 'ヤㇰカ', 'イサマ', 'タン', 'イタンギ', 'エン', 'オロワノ', 'ウㇰ', 'ワ', 'エン', 'コレ', 'コロカ', 'ク', 'レンガイネ', 'コラチ', 'ソモ', 'ネ', 'エ', 'レンガイネ', 'ネイノ', 'キ', 'ワ', 'エン', 'コレ', 'アリ', 'イタㇰ' ],
		audio: "audio/mark.14/35.wav",
		quizWords: [ 'ミチヒ' ]
	},
	{
		target: "オロワ、　シヌマ　エㇰ　ワ　ネイ　ウタラ　モコロ　ワ　オカイ　イ　ヌカラ、　アイゲ、　ペッロㇱ　オッタ　エネ　イタㇰヒ",
		alt: "Orowa, sinuma ek wa ney utara mokoro wa okai i nukara, aige, Petros otta ene itakhi",
		native: "Then he came and found the three apostles asleep. \"Simon,\" he said to Peter, \"are you asleep? Couldn\'t you watch for one hour?",
		words: [ 'オロワ', 'シヌマ', 'エㇰ', 'ワ', 'ネイ', 'ウタラ', 'モコロ', 'ワ', 'オカイ', 'イ', 'ヌカラ', 'アイゲ', 'ペッロㇱ', 'オッタ', 'エネ', 'イタㇰヒ' ],
		audio: "audio/mark.14/36.wav",
		quizWords: [ 'モコロ' ]
	},
	{
		target: "シモン、　エ　モコロ　ヤ？　シネ　パキヒ　エアニ　シウレ　エアイカプ　ヤ？　エチ　ウタラ　イテキ　アコラㇺヌカラ　クニ　ネ　シウレ　ワ　イノンノ　イタㇰ　キ　ヤン:　ラマッ　アナㇰ　ネ　キ　ルスイベ　ネ、　コロカ、　カㇺ　アナㇰ　カッチャㇰベ　ネ　ルウェ　ネ、　セコロ　イタㇰ。",
		alt: "Simon, e mokoro ya? sine pakihi eani siure eaikap ya? Eci utara iteki akoramnukara kuni ne siure wa inonno itak ki yan: ramat anak ne ki rusuibe ne, koroka, kam anak katcakbe ne ruwe ne, sekoro itak.",
		native: "Watch and pray,\" he said to them all, \"so that you may not fall into temptation. True, the spirit is willing, but the flesh is weak.\"",
		words: [ 'シモン', 'エ', 'モコロ', 'ヤ', 'シネ', 'パキヒ', 'エアニ', 'シウレ', 'エアイカプ', 'ヤ', 'エチ', 'ウタラ', 'イテキ', 'アコラㇺヌカラ', 'クニ', 'ネ', 'シウレ', 'ワ', 'イノンノ', 'イタㇰ', 'キ', 'ヤン', 'ラマッ', 'アナㇰ', 'ネ', 'キ', 'ルスイベ', 'ネ', 'コロカ', 'カㇺ', 'アナㇰ', 'カッチャㇰベ', 'ネ', 'ルウェ', 'ネ', 'セコロ', 'イタㇰ' ],
		audio: "audio/mark.14/37.wav",
		quizWords: [ 'シウレ', 'カッチャㇰベ' ]
	},
	{
		target: "オロワ、　スイ、　シヌマ　オヤケ　ウン　オマン　ワ　イノンノ　イタㇰ　キ　ワ　デエダ　イェプ　コラチ　カンナ　スイ　イェ　ニサ　ルウェ　ネ。",
		alt: "Orowa, sui, sinuma oyake un oman wa inonno itak ki wa deeda yep koraci kanna sui ye nisa ruwe ne.",
		native: "Again he went away, and prayed in the same words;",
		words: [ 'オロワ', 'スイ', 'シヌマ', 'オヤケ', 'ウン', 'オマン', 'ワ', 'イノンノ', 'イタㇰ', 'キ', 'ワ', 'デエダ', 'イェプ', 'コラチ', 'カンナ', 'スイ', 'イェ', 'ニサ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.14/38.wav",
		quizWords: [ 'デエダ', 'カンナ' ]
	},
	{
		target: "オロワノ、　スイ　エㇰ　ワ　ネイ　ウタラ　モコロ　シリ　ヌカラ、　シキ　パセ　ルウェ　ネ　クス　ネ　ナ;　オロワ、　オロタ　ネプ　イタㇰ　アニ　エセ　イタㇰ　キ　クニ　ネイ　ウタラ　エラㇺペウテㇰ　ルウェ　ネ。",
		alt: "Orowano, sui ek wa ney utara mokoro siri nukara, siki pase ruwe ne kusu ne na; orowa, orota nep itak ani ese itak ki kuni ney utara erampeutek ruwe ne.",
		native: "and coming back again he found them asleep, for their eyes were heavy; and they did not know what to say to him.",
		words: [ 'オロワノ', 'スイ', 'エㇰ', 'ワ', 'ネイ', 'ウタラ', 'モコロ', 'シリ', 'ヌカラ', 'シキ', 'パセ', 'ルウェ', 'ネ', 'クス', 'ネ', 'ナ', 'オロワ', 'オロタ', 'ネプ', 'イタㇰ', 'アニ', 'エセ', 'イタㇰ', 'キ', 'クニ', 'ネイ', 'ウタラ', 'エラㇺペウテㇰ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.14/39.wav",
		quizSentence: true
	},
	{
		target: "オロワ、　シヌマ　レ　スイネ　オロタ　エㇰ　ワ　エネ　イタㇰヒ　タネ　エチ　モコロ　ワ　シニ　ヤン;　パㇰノ　ネ;　パキヒ　エㇰ　ワ　アン;　インガラ、　アイヌ　ポホ　アナㇰ　ネ　カッパㇰ　コロ　ウタラ　コロ　テケ　オッタ　アエコシ　ルウェ　ネ。",
		alt: "Orowa, sinuma re suine orota ek wa ene itakhi Tane eci mokoro wa sini yan; pakno ne; pakihi ek wa an; ingara, Ainu Poho anak ne katpak koro utara koro teke otta aekosi ruwe ne.",
		native: "A third time he came, and said to them, \"Sleep on now, and rest yourselves. Enough! My time has come. Look, the Son of Man is being betrayed into the hands of wicked people.",
		words: [ 'オロワ', 'シヌマ', 'レ', 'スイネ', 'オロタ', 'エㇰ', 'ワ', 'エネ', 'イタㇰヒ', 'タネ', 'エチ', 'モコロ', 'ワ', 'シニ', 'ヤン', 'パㇰノ', 'ネ', 'パキヒ', 'エㇰ', 'ワ', 'アン', 'インガラ', 'アイヌ', 'ポホ', 'アナㇰ', 'ネ', 'カッパㇰ', 'コロ', 'ウタラ', 'コロ', 'テケ', 'オッタ', 'アエコシ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.14/40.wav",
		quizWords: [ 'シニ' ]
	},
	{
		target: "ホプニ　ワ　パイェ　アンロ、　ヘタㇰ、　エン　エコシ　グル　エハンゲノ　アン　ルウェ　ネ、　アニ　アン　イタㇰ　アニ　イタㇰ　ニサ　ルウェ　ネ。",
		alt: "Hopuni wa paye anro, hetak, En ekosi guru ehangeno an ruwe ne, ani an itak ani itak nisa ruwe ne.",
		native: "Up, and let us be going. Look! My betrayer is close at hand.\"",
		words: [ 'ホプニ', 'ワ', 'パイェ', 'アンロ', 'ヘタㇰ', 'エン', 'エコシ', 'グル', 'エハンゲノ', 'アン', 'ルウェ', 'ネ', 'アニ', 'アン', 'イタㇰ', 'アニ', 'イタㇰ', 'ニサ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.14/41.wav",
		quizWords: [ 'ヘタㇰ' ]
	},
	{
		target: "オロワ、　ナニ、　シヌマ　イタㇰ　ラポケタ　ネイ　トゥン　イカシマ　ワ　ニウ　トゥムゲタ　アン　シネン　ネ　ヨウダㇱ　アナㇰ　ネ　エムㇱ　ヘㇺヘㇺ、　シリキㇰ　クワ　ヘㇺヘㇺ　コロ　ワ、　カムイ　コラ　ケンル　エサパネ　ウタラ　ネワ　カㇺピ　ヌイェ　ウタラ　ネワ　エカシ　ウタラ　ネワ　オロワノ　アオマンデ　インネ　ウタラ　トゥラノ　エㇰ　ニサ　ルウェ　ネ。",
		alt: "Orowa, nani, sinuma itak rapoketa ney tun ikasima wa niu tumugeta an sinen ne Youdas anak ne emus hemhem, sirikik kuwa hemhem koro wa, Kamui kora kenru esapane utara newa kampi nuye utara newa ekasi utara newa orowano aomande inne utara turano ek nisa ruwe ne.",
		native: "And just then, while he was still speaking, Judas, who was one of the Twelve, came up; and with him a crowd of people, with swords and clubs, sent by the chief priests, the teachers of the Law, and the elders.",
		words: [ 'オロワ', 'ナニ', 'シヌマ', 'イタㇰ', 'ラポケタ', 'ネイ', 'トゥン', 'イカシマ', 'ワ', 'ニウ', 'トゥムゲタ', 'アン', 'シネン', 'ネ', 'ヨウダㇱ', 'アナㇰ', 'ネ', 'エムㇱ', 'ヘㇺヘㇺ', 'シリキㇰ', 'クワ', 'ヘㇺヘㇺ', 'コロ', 'ワ', 'カムイ', 'コラ', 'ケンル', 'エサパネ', 'ウタラ', 'ネワ', 'カㇺピ', 'ヌイェ', 'ウタラ', 'ネワ', 'エカシ', 'ウタラ', 'ネワ', 'オロワノ', 'アオマンデ', 'インネ', 'ウタラ', 'トゥラノ', 'エㇰ', 'ニサ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.14/42.wav",
		quizSentence: true
	},
	{
		target: "オロワ、　シヌマ　エコシ　グル　アナㇰ　ネ　ネイ　ウタラ　オッタ　シネ　シロㇱ　コレ　ワ　エネ　イタㇰヒ　ネン　ネ　ヤㇰカ　ク　チョプチョプセカラ　グル　アナㇰ　ネ　ネイ　グル　アナㇰ　シヌマ　ネ;　キシマ　ワ　ヤイトゥバレノ　トゥラ　ヤン、　アリ　イタㇰ。",
		alt: "Orowa, sinuma ekosi guru anak ne ney utara otta sine siros kore wa ene itakhi Nen ne yakka ku copcopsekara guru anak ne ney guru anak sinuma ne; kisima wa yaitubareno tura yan, ari itak.",
		native: "Now the betrayer had arranged a signal with them. \"The man whom I kiss,\" he had said, \"will be the one; arrest him and take him away safely.\"",
		words: [ 'オロワ', 'シヌマ', 'エコシ', 'グル', 'アナㇰ', 'ネ', 'ネイ', 'ウタラ', 'オッタ', 'シネ', 'シロㇱ', 'コレ', 'ワ', 'エネ', 'イタㇰヒ', 'ネン', 'ネ', 'ヤㇰカ', 'ク', 'チョプチョプセカラ', 'グル', 'アナㇰ', 'ネ', 'ネイ', 'グル', 'アナㇰ', 'シヌマ', 'ネ', 'キシマ', 'ワ', 'ヤイトゥバレノ', 'トゥラ', 'ヤン', 'アリ', 'イタㇰ' ],
		audio: "audio/mark.14/43.wav",
		quizWords: [ 'ヤイトゥバレノ' ]
	},
	{
		target: "オロワ、　ネイ　グル　エㇰ　チキ　ナニ　シヌマ　オッタ　アラパ　ヒネ、　エネ　イタㇰヒ　ラビビ　ヘ！　アイゲ、　チョプチョプセカン　ニサ　ルウェ　ネ。",
		alt: "Orowa, ney guru ek ciki nani sinuma otta arapa hine, ene itakhi Rabbi he! Aige, copcopsekan nisa ruwe ne.",
		native: "As soon as Judas came, he went up to Jesus at once, and said, \"Rabbi!\" and kissed him.",
		words: [ 'オロワ', 'ネイ', 'グル', 'エㇰ', 'チキ', 'ナニ', 'シヌマ', 'オッタ', 'アラパ', 'ヒネ', 'エネ', 'イタㇰヒ', 'ラビビ', 'ヘ', 'アイゲ', 'チョプチョプセカン', 'ニサ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.14/44.wav",
		quizWords: [ 'チョプチョプセカン' ]
	},
	{
		target: "オロワノ、　オカイ　ウタラ　テケ　アニ　イェス　キシマ　ルウェ　ネ。",
		alt: "Orowano, okai utara teke ani Yesu kisima ruwe ne.",
		native: "Then the men seized Jesus, and arrested him.",
		words: [ 'オロワノ', 'オカイ', 'ウタラ', 'テケ', 'アニ', 'イェス', 'キシマ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.14/45.wav",
		quizSentence: true
	},
	{
		target: "コロカ、　サマケタ　ロㇱキ　ワ　オカイ　ウタラ　トゥラ、　アン　シネン　アナㇰ　ネ　コロ　エムㇱ　エタイェ　ワ　カムイ　コラ、　ケンル　エサパネ　グル　コロ　ウイテㇰ　グル　キサラハ　オアットゥイェ　ニサ　ルウェ　ネ　ナ。",
		alt: "Koroka, samaketa roski wa okai utara tura, an sinen anak ne koro emus etaye wa Kamui kora, kenru esapane guru koro uitek guru kisaraha oattuye nisa ruwe ne na.",
		native: "One of those who were standing by drew his sword, and struck at the high priest\'s servant, and cut off his ear.",
		words: [ 'コロカ', 'サマケタ', 'ロㇱキ', 'ワ', 'オカイ', 'ウタラ', 'トゥラ', 'アン', 'シネン', 'アナㇰ', 'ネ', 'コロ', 'エムㇱ', 'エタイェ', 'ワ', 'カムイ', 'コラ', 'ケンル', 'エサパネ', 'グル', 'コロ', 'ウイテㇰ', 'グル', 'キサラハ', 'オアットゥイェ', 'ニサ', 'ルウェ', 'ネ', 'ナ' ],
		audio: "audio/mark.14/46.wav",
		quizWords: [ 'エタイェ', 'オアットゥイェ', 'キサラハ' ]
	},
	{
		target: "ネイ　ウタラ　オッタ　イェス　エセ　ワ　エネ　イタㇰヒ　エムㇱ　ヘㇺヘㇺ、　シリキㇰ　クワ　ヘㇺヘㇺ　コロ　ワ　イㇰカ　グル　キシマ　クニ　コラチ　エチ　アラキ　ワ。",
		alt: "Ney utara otta Yesu ese wa ene itakhi Emus hemhem, sirikik kuwa hemhem koro wa ikka guru kisima kuni koraci eci araki wa.",
		native: "But Jesus spoke up, and said to the men, \"Have you come out, as if after a robber, with swords and clubs, to take me?",
		words: [ 'ネイ', 'ウタラ', 'オッタ', 'イェス', 'エセ', 'ワ', 'エネ', 'イタㇰヒ', 'エムㇱ', 'ヘㇺヘㇺ', 'シリキㇰ', 'クワ', 'ヘㇺヘㇺ', 'コロ', 'ワ', 'イㇰカ', 'グル', 'キシマ', 'クニ', 'コラチ', 'エチ', 'アラキ', 'ワ' ],
		audio: "audio/mark.14/47.wav",
		quizSentence: true
	},
	{
		target: "エン　キシマ　シリ　ヘ　アン？　クアニ　ケㇱト　カムイ　コラ　ケンル　タ　エチ　トゥラノ　ク　アン　ワ　エパカㇱヌ、　アワ、　ネイ　イタ　エチ　エン　キシマ　ソモキ:　コロカ、　タン　オカイペ　アナㇰ　ネ　カムイ　カㇺピソㇱ　アウウェオマ　クニ　ネ　ホプニ　アㇺベ　ネ　ルウェ　ネ、　セコロ　イタㇰ。",
		alt: "En kisima siri he an? Kuani kesto Kamui kora kenru ta eci turano Ku an wa epakasnu, awa, ney ita eci En kisima somoki: koroka, tan okaype anak ne Kamui kampisos auweoma kuni ne hopuni ambe ne ruwe ne, sekoro itak.",
		native: "I have been among you day after day in the Temple Courts teaching, and yet you did not arrest me; but this is in fulfillment of the scriptures.\"",
		words: [ 'エン', 'キシマ', 'シリ', 'ヘ', 'アン', 'クアニ', 'ケㇱト', 'カムイ', 'コラ', 'ケンル', 'タ', 'エチ', 'トゥラノ', 'ク', 'アン', 'ワ', 'エパカㇱヌ', 'アワ', 'ネイ', 'イタ', 'エチ', 'エン', 'キシマ', 'ソモキ', 'コロカ', 'タン', 'オカイペ', 'アナㇰ', 'ネ', 'カムイ', 'カㇺピソㇱ', 'アウウェオマ', 'クニ', 'ネ', 'ホプニ', 'アㇺベ', 'ネ', 'ルウェ', 'ネ', 'セコロ', 'イタㇰ' ],
		audio: "audio/mark.14/48.wav",
		quizWords: [ 'カㇺピソㇱ', 'アウウェオマ' ]
	},
	{
		target: "オロワ、　ウタラ　オビッタ　イェス　サオッ　ニサ　ルウェ　ネ　ナ。",
		alt: "Orowa, utara obitta Yesu saot nisa ruwe ne na.",
		native: "And all the apostles deserted him and fled.",
		words: [ 'オロワ', 'ウタラ', 'オビッタ', 'イェス', 'サオッ', 'ニサ', 'ルウェ', 'ネ', 'ナ' ],
		audio: "audio/mark.14/49.wav",
		quizWords: [ 'サオッ' ]
	},
	{
		target: "オロワノ、　イェス　オㇱ　オマン　コロ　アトゥサ　ネトバケ　センカキ　コカラカリ　シネ　ウペン　アイヌ　アン:　アワ、　ウタラ　ネイ　アイヌ　キシマ:",
		alt: "Orowano, Yesu os oman koro atusa netobake senkaki kokarakari sine upen ainu an: awa, utara ney ainu kisima:",
		native: "One young man did indeed follow him, wrapped only in a linen sheet. They tried to arrest him;",
		words: [ 'オロワノ', 'イェス', 'オㇱ', 'オマン', 'コロ', 'アトゥサ', 'ネトバケ', 'センカキ', 'コカラカリ', 'シネ', 'ウペン', 'アイヌ', 'アン', 'アワ', 'ウタラ', 'ネイ', 'アイヌ', 'キシマ' ],
		audio: "audio/mark.14/50.wav",
		quizWords: [ 'センカキ', 'アトゥサ' ]
	},
	{
		target: "コロカ、　シヌマ　アナㇰ　ネ　コロ　センカキ　アンデ　ワ　アトゥサ　ワ　サオッ　ニサ　ルウェ　ネ　ナ。",
		alt: "koroka, sinuma anak ne koro senkaki ande wa atusa wa saot nisa ruwe ne na.",
		native: "but he left the sheet in their hands, and fled naked.",
		words: [ 'コロカ', 'シヌマ', 'アナㇰ', 'ネ', 'コロ', 'センカキ', 'アンデ', 'ワ', 'アトゥサ', 'ワ', 'サオッ', 'ニサ', 'ルウェ', 'ネ', 'ナ' ],
		audio: "audio/mark.14/51.wav",
		quizWords: [ 'アンデ' ]
	},
	{
		target: "オロワ、　ウタラ　アナㇰ　ネ　カムイ　コラ　ケンル　エサパネ　グル　オッタ　イェス　トゥラ　ニサ　ルウェ　ネ:　アワ、　シヌマ　ウコイラㇺノ　カムイ　コラ　ケンル　エサパネ　ウタラ　オビッタ　ヘㇺヘㇺ、　エカシ　ウタラ　ヘㇺヘㇺ、　カㇺピ　ヌイェ　ウタラ　ヘㇺヘㇺ　ウウェカラパ。",
		alt: "Orowa, utara anak ne Kamui kora kenru esapane guru otta Yesu tura nisa ruwe ne: awa, sinuma ukoiramno Kamui kora kenru esapane utara obitta hemhem, ekasi utara hemhem, kampi nuye utara hemhem uwekarapa.",
		native: "Then they took Jesus to the high priest; and all the chief priests, elders, and the teachers of the Law assembled.",
		words: [ 'オロワ', 'ウタラ', 'アナㇰ', 'ネ', 'カムイ', 'コラ', 'ケンル', 'エサパネ', 'グル', 'オッタ', 'イェス', 'トゥラ', 'ニサ', 'ルウェ', 'ネ', 'アワ', 'シヌマ', 'ウコイラㇺノ', 'カムイ', 'コラ', 'ケンル', 'エサパネ', 'ウタラ', 'オビッタ', 'ヘㇺヘㇺ', 'エカシ', 'ウタラ', 'ヘㇺヘㇺ', 'カㇺピ', 'ヌイェ', 'ウタラ', 'ヘㇺヘㇺ', 'ウウェカラパ' ],
		audio: "audio/mark.14/52.wav",
		quizWords: [ 'ウコイラㇺノ' ]
	},
	{
		target: "ペッロㇱ　アナㇰ　ネ　トゥイマノ　シヌマ　オㇱ　エㇰ　ワ　アフン、　カムイ　コラ　ケンル　エサパネ　グル　コロ　イピシ　トゥㇺプ　オッタ　カ　アフン　ニサ　ルウェ　ネ;　オロワ、　アウイテㇰ　コロ　ウタラ　トゥラノ　アベ　ヌペㇰ　サマタ　ア　ワ　ヤイポプケレ　コラン　ルウェ　ネ。",
		alt: "Petros anak ne tuimano sinuma os ek wa ahun, Kamui kora kenru esapane guru koro ipisi tumbu otta ka ahun nisa ruwe ne; orowa, auitek koro utara turano abe nupek samata a wa yaipopkere koran ruwe ne.",
		native: "Peter, who had followed Jesus at a distance into the courtyard of the high priest, was sitting there among the guards, warming himself at the blaze of the fire.",
		words: [ 'ペッロㇱ', 'アナㇰ', 'ネ', 'トゥイマノ', 'シヌマ', 'オㇱ', 'エㇰ', 'ワ', 'アフン', 'カムイ', 'コラ', 'ケンル', 'エサパネ', 'グル', 'コロ', 'イピシ', 'トゥㇺプ', 'オッタ', 'カ', 'アフン', 'ニサ', 'ルウェ', 'ネ', 'オロワ', 'アウイテㇰ', 'コロ', 'ウタラ', 'トゥラノ', 'アベ', 'ヌペㇰ', 'サマタ', 'ア', 'ワ', 'ヤイポプケレ', 'コラン', 'ルウェ', 'ネ' ],
		audio: "audio/mark.14/53.wav",
		quizWords: [ 'イピシ', 'ヤイポプケレ', 'トゥイマノ', 'ヌペㇰ' ]
	},
	{
		target: "アワ、　カムイ　コラ　ケンル　エサパネ　ウタラ　ウコラㇺコロ　ウタラ　アナㇰ　ネ　イェス　ライゲ　クニ　スンゲ　パウェテス　イ　フナラ　ルウェ　ネ;　コロカ、　パ　エアイカプ。",
		alt: "Awa, Kamui kora kenru esapane utara ukoramkoro utara anak ne Yesu raige kuni sunge pawetesu i hunara ruwe ne; koroka, pa eaikap.",
		native: "Meanwhile the chief priest and the whole of the High Council were trying to get such evidence against Jesus as would warrant his being put to death, but they could not find any;",
		words: [ 'アワ', 'カムイ', 'コラ', 'ケンル', 'エサパネ', 'ウタラ', 'ウコラㇺコロ', 'ウタラ', 'アナㇰ', 'ネ', 'イェス', 'ライゲ', 'クニ', 'スンゲ', 'パウェテス', 'イ', 'フナラ', 'ルウェ', 'ネ', 'コロカ', 'パ', 'エアイカプ' ],
		audio: "audio/mark.14/54.wav",
		quizWords: [ 'スンゲ', 'パウェテス', 'ウコラㇺコロ' ]
	},
	{
		target: "インネ　ウタラ　シヌマ　クス　スンゲ　パウェテス　キ　ヤㇰカ、　コロ　パウェテス　イ　ウウェオウパㇰ　ソモキ　ルウェ　ネ。",
		alt: "Inne utara sinuma kusu sunge pawetesu ki yakka, koro pawetesu i uweoupak somoki ruwe ne.",
		native: "for, though there were many who gave false evidence against him, yet their evidence did not agree.",
		words: [ 'インネ', 'ウタラ', 'シヌマ', 'クス', 'スンゲ', 'パウェテス', 'キ', 'ヤㇰカ', 'コロ', 'パウェテス', 'イ', 'ウウェオウパㇰ', 'ソモキ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.14/55.wav",
		quizWords: [ 'ウウェオウパㇰ' ]
	},
	{
		target: "オロワ、　シヌマ　クス　スンゲ　パウェテス　キ　ウタラ　ホプㇺバ　ヒネ　エネ　イタㇰヒ",
		alt: "Orowa, sinuma kusu sunge pawetesu ki utara hopumba hine ene itakhi",
		native: "Presently some men stood up, and gave this false evidence against him -",
		words: [ 'オロワ', 'シヌマ', 'クス', 'スンゲ', 'パウェテス', 'キ', 'ウタラ', 'ホプㇺバ', 'ヒネ', 'エネ', 'イタㇰヒ' ],
		audio: "audio/mark.14/56.wav",
		quizSentence: true
	},
	{
		target: "クアニ　アナㇰ　ネ　テケヘ　アニ　アカラ　タン　カムイ　コラ　ケンル　ク　イサㇺカ、　オロワ、　レレコ　ウトゥルタ　テケ　サㇰノ　アカラ　アシリペ　ク　カラ　クス　ネ、　アニ　タン　グル　イェ　イタㇰ　チ　ヌ　ニサ　ルウェ　ネ、　セコロ　イタㇰ。",
		alt: "Kuani anak ne tekehe ani akara tan Kamui kora kenru Ku isamka, orowa, rereko uturuta teke sakno akara asiripe Ku kara kusu ne, ani tan guru ye itak ci nu nisa ruwe ne, sekoro itak.",
		native: "\"We ourselves heard him say \'I will destroy this Temple made with hands, and in three days build another made without hands.\'\"",
		words: [ 'クアニ', 'アナㇰ', 'ネ', 'テケヘ', 'アニ', 'アカラ', 'タン', 'カムイ', 'コラ', 'ケンル', 'ク', 'イサㇺカ', 'オロワ', 'レレコ', 'ウトゥルタ', 'テケ', 'サㇰノ', 'アカラ', 'アシリペ', 'ク', 'カラ', 'クス', 'ネ', 'アニ', 'タン', 'グル', 'イェ', 'イタㇰ', 'チ', 'ヌ', 'ニサ', 'ルウェ', 'ネ', 'セコロ', 'イタㇰ' ],
		audio: "audio/mark.14/57.wav",
		quizSentence: true
	},
	{
		target: "タプ　コラチ　イェ　ヤㇰカ　ネイ　パウェテス　イ　ウウェオウパㇰ　ソモキ　ニサ　ルウェ　ネ。",
		alt: "Tap koraci ye yakka ney pawetesu i uweoupak somoki nisa ruwe ne.",
		native: "Yet not even on that point did their evidence agree.",
		words: [ 'タプ', 'コラチ', 'イェ', 'ヤㇰカ', 'ネイ', 'パウェテス', 'イ', 'ウウェオウパㇰ', 'ソモキ', 'ニサ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.14/58.wav",
		quizSentence: true
	},
	{
		target: "オロワノ　カムイ　コラ　ケンル　エサパネ　グル　アナㇰ　ウタラ　トゥムゲタ　アㇱ　ワ　イェス　オッタ　ヌ　ワ　エネ　イタㇰヒ　ネプ　ネ　ヤㇰカ　エ　エセ　ソモキ　ルウェ？　エアニ　クス　タン　オカイ　ウタラ　パウェテス　アㇺベ　ネコン　ア　アㇺベ　ネ　ヤ？",
		alt: "Orowano Kamui kora kenru esapane guru anak utara tumugeta as wa Yesu otta nu wa ene itakhi Nep ne yakka E ese somoki ruwe? Eani kusu tan okai utara pawetesu ambe nekon a ambe ne ya?",
		native: "Then the high priest stood forward, and questioned Jesus. \"Have you no answer to make?\" he asked. \"What is this evidence which these men are giving against you?\"",
		words: [ 'オロワノ', 'カムイ', 'コラ', 'ケンル', 'エサパネ', 'グル', 'アナㇰ', 'ウタラ', 'トゥムゲタ', 'アㇱ', 'ワ', 'イェス', 'オッタ', 'ヌ', 'ワ', 'エネ', 'イタㇰヒ', 'ネプ', 'ネ', 'ヤㇰカ', 'エ', 'エセ', 'ソモキ', 'ルウェ', 'エアニ', 'クス', 'タン', 'オカイ', 'ウタラ', 'パウェテス', 'アㇺベ', 'ネコン', 'ア', 'アㇺベ', 'ネ', 'ヤ' ],
		audio: "audio/mark.14/59.wav",
		quizSentence: true
	},
	{
		target: "コロカ、　シヌマ　モノ　アン　ワ　ネプ　カ　イェ　ソモキ　ニサ　ルウェ　ネ。　オロワ、　スイ、　カムイ　コラ　ケンル　エサパネ　グル　シヌマ　オッタ　ヌ　ワ　エネ　イタㇰヒ　アヌヌケプ　コロ　ポホ　ネ　キリㇱト　エ　ネ　ルウェ　ヘ　アン？",
		alt: "Koroka, sinuma mono an wa nep ka ye somoki nisa ruwe ne. Orowa, sui, Kamui kora kenru esapane guru sinuma otta nu wa ene itakhi Anunukep koro Poho ne Kiristo E ne ruwe he an?",
		native: "But Jesus remained silent, and made no answer. A second time the high priest questioned him. \"Are you,\" he asked, \"the Christ, the Son of the Blessed One?\"",
		words: [ 'コロカ', 'シヌマ', 'モノ', 'アン', 'ワ', 'ネプ', 'カ', 'イェ', 'ソモキ', 'ニサ', 'ルウェ', 'ネ', 'オロワ', 'スイ', 'カムイ', 'コラ', 'ケンル', 'エサパネ', 'グル', 'シヌマ', 'オッタ', 'ヌ', 'ワ', 'エネ', 'イタㇰヒ', 'アヌヌケプ', 'コロ', 'ポホ', 'ネ', 'キリㇱト', 'エ', 'ネ', 'ルウェ', 'ヘ', 'アン' ],
		audio: "audio/mark.14/60.wav",
		quizWords: [ 'アヌヌケプ' ]
	},
	{
		target: "オロタ　イェス　エネ　イタㇰヒ　ルウェ　ネ　ワ;　オロワ、　アイヌ　ポホ　キロロ　シモン　テㇰ　サマタ　ア　ヒネ　カンド　ニㇱクル　コロ　ワ　エㇰ　シリ　エチ　ヌカラ　クス　ネ　ナ、　アリ　イタㇰ。",
		alt: "Orota Yesu ene itakhi Ruwe ne wa; orowa, Ainu Poho kiroro simon tek samata a hine kando niskuru koro wa ek siri eci nukara kusu ne na, ari itak.",
		native: "\"I am,\" replied Jesus, \"and you will all see the Son of Man sitting on the right hand of the Almighty, and coming in the clouds of heaven.\"",
		words: [ 'オロタ', 'イェス', 'エネ', 'イタㇰヒ', 'ルウェ', 'ネ', 'ワ', 'オロワ', 'アイヌ', 'ポホ', 'キロロ', 'シモン', 'テㇰ', 'サマタ', 'ア', 'ヒネ', 'カンド', 'ニㇱクル', 'コロ', 'ワ', 'エㇰ', 'シリ', 'エチ', 'ヌカラ', 'クス', 'ネ', 'ナ', 'アリ', 'イタㇰ' ],
		audio: "audio/mark.14/61.wav",
		quizSentence: true
	},
	{
		target: "オロワノ、　カムイ　コラ　ケンル　エサパネ　グル　ヤイコタ　ミ　アミプ　ヤㇱパ　ワ　エネ　イタㇰヒ　ネプ　クス　モシマ　オカイ　パウェテス　イ　チ　コン　ルスイ　ヤ？",
		alt: "Orowano, Kamui kora kenru esapane guru yaikota mi amip yaspa wa ene itakhi Nep kusu mosima okai pawetesu i ci kon rusui ya?",
		native: "At this the high priest tore his vestments. \"Why do we want any more witnesses?\" he exclaimed.",
		words: [ 'オロワノ', 'カムイ', 'コラ', 'ケンル', 'エサパネ', 'グル', 'ヤイコタ', 'ミ', 'アミプ', 'ヤㇱパ', 'ワ', 'エネ', 'イタㇰヒ', 'ネプ', 'クス', 'モシマ', 'オカイ', 'パウェテス', 'イ', 'チ', 'コン', 'ルスイ', 'ヤ' ],
		audio: "audio/mark.14/62.wav",
		quizWords: [ 'ヤㇱパ', 'モシマ' ]
	},
	{
		target: "ネイ　コアッチャプ　エチ　ヌ:　ネコン　ア　エチ　ヤイヌ　ヤ？　オロワ、　ウタラ　オビッタ　シヌマ　アライゲ　クニ　グル　ネ　セコロ　エサンニヨ　ニサ　ルウェ　ネ。",
		alt: "Ney koatcap eci nu: nekon a eci yaynu ya? Orowa, utara obitta sinuma araige kuni guru ne sekoro esanniyo nisa ruwe ne.",
		native: "\"You heard his blasphemy? What is your verdict?\" They all condemned him, declaring that he deserved death.",
		words: [ 'ネイ', 'コアッチャプ', 'エチ', 'ヌ', 'ネコン', 'ア', 'エチ', 'ヤイヌ', 'ヤ', 'オロワ', 'ウタラ', 'オビッタ', 'シヌマ', 'アライゲ', 'クニ', 'グル', 'ネ', 'セコロ', 'エサンニヨ', 'ニサ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.14/63.wav",
		quizWords: [ 'コアッチャプ' ]
	},
	{
		target: "アワ、　シヌマ　カタ　トプセ　カラ　ヒネ　コロ　ナヌフ　カムレ、　オロワ、　シリキㇰ　ワ、　ウウェインカラ　ヤン、　アニ　シヌマ　オッタ　イタㇰ　ウタラ　オカイ:　オロワノ、　アウイテㇰ　ウタラ　アナㇰ　ネ　シヌマ　コキㇰ　コロ　キシマ　ニサ　ルウェ　ネ　ナ。",
		alt: "Awa, sinuma kata topse kara hine koro nanuhu kamure, orowa, sirikik wa, uweinkara yan, ani sinuma otta itak utara okai: orowano, auitek utara anak ne sinuma kokik koro kisima nisa ruwe ne na.",
		native: "Some of those present began to spit at him, and to blindfold his eyes, and strike him, saying, as they did so, \"Now play the prophet!\" and even the guards received him with blows.",
		words: [ 'アワ', 'シヌマ', 'カタ', 'トプセ', 'カラ', 'ヒネ', 'コロ', 'ナヌフ', 'カムレ', 'オロワ', 'シリキㇰ', 'ワ', 'ウウェインカラ', 'ヤン', 'アニ', 'シヌマ', 'オッタ', 'イタㇰ', 'ウタラ', 'オカイ', 'オロワノ', 'アウイテㇰ', 'ウタラ', 'アナㇰ', 'ネ', 'シヌマ', 'コキㇰ', 'コロ', 'キシマ', 'ニサ', 'ルウェ', 'ネ', 'ナ' ],
		audio: "audio/mark.14/64.wav",
		quizWords: [ 'コキㇰ', 'トプセ' ]
	},
	{
		target: "オロワ、　ペッロㇱ　アナㇰ　ネ　ラタ　トゥㇺプ　タ　アン　イタ　カムイ　コラ　ケンル　エサパネ　グル　ウイテㇰ　マッ　シネン　エㇰ;　アワ、　ヤイポプケレ　コラン　ペッロㇱ　ヌカラ　コロ　オルン　インガラ　ワ、",
		alt: "Orowa, Petros anak ne rata tumbu ta an ita Kamui kora kenru esapane guru uitek mat sinen ek; awa, yaipopkere koran Petros nukara koro orun ingara wa,",
		native: "While Peter was in the courtyard down below, one of the high priest\'s maidservants came up;",
		words: [ 'オロワ', 'ペッロㇱ', 'アナㇰ', 'ネ', 'ラタ', 'トゥㇺプ', 'タ', 'アン', 'イタ', 'カムイ', 'コラ', 'ケンル', 'エサパネ', 'グル', 'ウイテㇰ', 'マッ', 'シネン', 'エㇰ', 'アワ', 'ヤイポプケレ', 'コラン', 'ペッロㇱ', 'ヌカラ', 'コロ', 'オルン', 'インガラ', 'ワ' ],
		audio: "audio/mark.14/65.wav",
		quizSentence: true
	},
	{
		target: "エアニ　ネ　ヤㇰカ　ナザレッ　ウン　イェス　トゥラ　アン　グル　エ　ネ、　セコロ　イタㇰ。",
		alt: "Eani ne yakka Nazaret un Yesu tura an guru e ne, sekoro itak.",
		native: "and, seeing Peter warming himself, she looked closely at him, and exclaimed, \"Why, you were with Jesus, the Nazarene!\"",
		words: [ 'エアニ', 'ネ', 'ヤㇰカ', 'ナザレッ', 'ウン', 'イェス', 'トゥラ', 'アン', 'グル', 'エ', 'ネ', 'セコロ', 'イタㇰ' ],
		audio: "audio/mark.14/66.wav",
		quizSentence: true
	},
	{
		target: "コロカ、　シヌマ　エシナ　ワ　エネ　イタㇰヒ　エ　イェ　イタㇰ　ク　エラム　カ　ソモキ、　ク　ラメパカリ　カ　ソモキ　ルウェ　ネ、　セコロ　イタㇰ　コロ、　セㇺ　オッタ　ソイネ　ニサ　ルウェ　ネ;　アワ、　ニワトリ　チカプ　ハウ　コン　ニサ　ルウェ　ネ。",
		alt: "Koroka, sinuma esina wa ene itakhi E ye itak ku eramu ka somoki, ku ramepakari ka somoki ruwe ne, sekoro itak koro, sem otta soine nisa ruwe ne; awa, niwatori cikap hau kon nisa ruwe ne.",
		native: "But Peter denied it. \"I do not know or understand what you mean,\" he replied. Then he went out into the porch;",
		words: [ 'コロカ', 'シヌマ', 'エシナ', 'ワ', 'エネ', 'イタㇰヒ', 'エ', 'イェ', 'イタㇰ', 'ク', 'エラム', 'カ', 'ソモキ', 'ク', 'ラメパカリ', 'カ', 'ソモキ', 'ルウェ', 'ネ', 'セコロ', 'イタㇰ', 'コロ', 'セㇺ', 'オッタ', 'ソイネ', 'ニサ', 'ルウェ', 'ネ', 'アワ', 'ニワトリ', 'チカプ', 'ハウ', 'コン', 'ニサ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.14/67.wav",
		quizWords: [ 'ラメパカリ', 'セㇺ' ]
	},
	{
		target: "オロワ、　スイ、　ネイ　ウイテㇰ　マッ　シヌマ　ヌカラ、　アイゲ、　タン　グル　アナㇰ　ネ　ネイ　ウタラ　ウン　シネン　ネ、　セコㇽ　アン　イタㇰ　アニ　サマケタ　ロㇱキ　ワ　オカイ　ウタラ　オッタ　イェ　ヘアシ　ニサ　ルウェ　ネ。",
		alt: "Orowa, sui, ney uitek mat sinuma nukara, aige, Tan guru anak ne ney utara un sinen ne, sekor an itak ani samaketa roski wa okai utara otta ye heasi nisa ruwe ne.",
		native: "and there the maidservant, on seeing him, began to say again to the bystanders, \"This is one of them!\"",
		words: [ 'オロワ', 'スイ', 'ネイ', 'ウイテㇰ', 'マッ', 'シヌマ', 'ヌカラ', 'アイゲ', 'タン', 'グル', 'アナㇰ', 'ネ', 'ネイ', 'ウタラ', 'ウン', 'シネン', 'ネ', 'セコㇽ', 'アン', 'イタㇰ', 'アニ', 'サマケタ', 'ロㇱキ', 'ワ', 'オカイ', 'ウタラ', 'オッタ', 'イェ', 'ヘアシ', 'ニサ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.14/68.wav",
		quizSentence: true
	},
	{
		target: "コロカ、　カンナ　スイ　シヌマ　ネイ　アㇺベ　エシナ　ニサ　ルウェ　ネ。　サマタ、　ナア　ポンノ　シラン　コロ、　サマケタ　ロㇱキ　ワ　オカイ　ウタラ　アナㇰ　ネ　ペッロㇱ　オッタ　エネ　イタㇰヒ　ソンノ　ポカ　エアニ　ネイ　ウタラ　ウン　シネン　エ　ネ;　エアニ、　ガリラヤ　ウン　グル　エ　ネ　ルウェ　ネ　クス　ネ　ナ、　セコロ　イタㇰ。",
		alt: "Koroka, kanna sui sinuma ney ambe esina nisa ruwe ne. Samata, naa ponno siran koro, samaketa roski wa okai utara anak ne Petros otta ene itakhi Sonno poka eani ney utara un sinen e ne; eani, Gariraya un guru e ne ruwe ne kusu ne na, sekoro itak.",
		native: "But Peter again denied it. Soon afterward the bystanders again said to him, \"You certainly are one of them; why you are a Galilean!\"",
		words: [ 'コロカ', 'カンナ', 'スイ', 'シヌマ', 'ネイ', 'アㇺベ', 'エシナ', 'ニサ', 'ルウェ', 'ネ', 'サマタ', 'ナア', 'ポンノ', 'シラン', 'コロ', 'サマケタ', 'ロㇱキ', 'ワ', 'オカイ', 'ウタラ', 'アナㇰ', 'ネ', 'ペッロㇱ', 'オッタ', 'エネ', 'イタㇰヒ', 'ソンノ', 'ポカ', 'エアニ', 'ネイ', 'ウタラ', 'ウン', 'シネン', 'エ', 'ネ', 'エアニ', 'ガリラヤ', 'ウン', 'グル', 'エ', 'ネ', 'ルウェ', 'ネ', 'クス', 'ネ', 'ナ', 'セコロ', 'イタㇰ' ],
		audio: "audio/mark.14/69.wav",
		quizWords: [ 'シラン' ]
	},
	{
		target: "コロカ、　シヌマ　イヨイタクシ　イタㇰ　ヘㇺヘㇺ　キ　トイコ　イェ　ヘㇺヘㇺ　キ　ワ、―クス　エチ　イェ　タン　アイヌ　ク　エアㇺキリ　ソモキ、　セコロ　イタㇰ。",
		alt: "Koroka, sinuma iyoitakusi itak hemhem ki toiko ye hemhem ki wa,-kusu eci ye tan ainu ku eamkiri somoki, sekoro itak.",
		native: "But he said to them, \"I swear that I do not know the man you are talking about! May God punish me if I am lying!\"",
		words: [ 'コロカ', 'シヌマ', 'イヨイタクシ', 'イタㇰ', 'ヘㇺヘㇺ', 'キ', 'トイコ', 'イェ', 'ヘㇺヘㇺ', 'キ', 'ワ', 'クス', 'エチ', 'イェ', 'タン', 'アイヌ', 'ク', 'エアㇺキリ', 'ソモキ', 'セコロ', 'イタㇰ' ],
		audio: "audio/mark.14/70.wav",
		quizWords: [ 'エアㇺキリ', 'イヨイタクシ' ]
	},
	{
		target: "オロワ　ナニ　トゥ　スイネ　ニワトリ　チカプ　ハウ　コン　ルウェ　ネ。　タタオッタ、―トゥ　スイネ　ニワトリ　チカプ　ハウ　コロ　エトコタ　エアニ　レ　スイネ　エン　エシナ　クス　ネ　ナ、　アニ　アン　イタㇰ　アニ　オロタ　イェス　イェ　イタㇰ　ペッロㇱ　エシカルン　ニサ　ルウェ　ネ。　アワ、　ネイ　アㇺベ　エサンニヨ　チキ　シヌマ　チㇱ　ニサ　ルウェ　ネ　ナ。",
		alt: "Orowa nani tu suine niwatori cikap hau kon ruwe ne. Tataotta,-Tu suine niwatori cikap hau koro etokota eani re suine En esina kusu ne na, ani an itak ani orota Yesu ye itak Petros esikarun nisa ruwe ne. Awa, ney ambe esanniyo ciki sinuma cis nisa ruwe ne na.",
		native: "At that moment, for the second time, a cock crowed; and Peter remembered the words that Jesus had said to him - \'Before a cock has crowed twice, you will disown me three times\'; and, as he thought of it, he began to weep.",
		words: [ 'オロワ', 'ナニ', 'トゥ', 'スイネ', 'ニワトリ', 'チカプ', 'ハウ', 'コン', 'ルウェ', 'ネ', 'タタオッタ', 'トゥ', 'スイネ', 'ニワトリ', 'チカプ', 'ハウ', 'コロ', 'エトコタ', 'エアニ', 'レ', 'スイネ', 'エン', 'エシナ', 'クス', 'ネ', 'ナ', 'アニ', 'アン', 'イタㇰ', 'アニ', 'オロタ', 'イェス', 'イェ', 'イタㇰ', 'ペッロㇱ', 'エシカルン', 'ニサ', 'ルウェ', 'ネ', 'アワ', 'ネイ', 'アㇺベ', 'エサンニヨ', 'チキ', 'シヌマ', 'チㇱ', 'ニサ', 'ルウェ', 'ネ', 'ナ' ],
		audio: "audio/mark.14/71.wav",
		quizWords: [ 'エシカルン' ]
	}
];
