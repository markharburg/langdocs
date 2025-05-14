const gLang = 'ai';
const gBook = 'Mark';
const gChap = '13';
const gMode = 'ai';
const gSpeed = '120';

const slideData =
[
	{
		target: "オロワ、　シヌマ　カムイ　コラ　ケンル　オロワノ　ソイネ　ワ　オマン、　アイゲ、　コイカラ　グル　シネン　シヌマ　オッタ　エネ　イタㇰヒ　エパカㇱヌ　グル、　タプ　ネプ　オカイ　スマ　ネプ　オカイ　チセイ　インガラ！",
		alt: "Orowa, sinuma Kamui kora kenru orowano soine wa oman, aige, koikara guru sinen sinuma otta ene itakhi Epakasnu guru, tap nep okai suma nep okai cisei ingara!",
		native: "As Jesus was walking out of the Temple Courts, one of his disciples said to him, \"Teacher, look what fine stones and buildings these are!\"",
		words: [ 'オロワ', 'シヌマ', 'カムイ', 'コラ', 'ケンル', 'オロワノ', 'ソイネ', 'ワ', 'オマン', 'アイゲ', 'コイカラ', 'グル', 'シネン', 'シヌマ', 'オッタ', 'エネ', 'イタㇰヒ', 'エパカㇱヌ', 'グル', 'タプ', 'ネプ', 'オカイ', 'スマ', 'ネプ', 'オカイ', 'チセイ', 'インガラ' ],
		audio: "audio/mark.13/0.wav",
		quizWords: [ 'シネン', 'スマ' ]
	},
	{
		target: "オロタ　イェス　エネ　イタㇰヒ　タン　オカイ　ポロ　チセイ　エ　ヌカラ　ヤ？　テダ　アン　ウカタ　ウカタ　オカイ　スマ　オビッタ　アハチレ　ワ　シネプ　カ　ウカタ　アンデ　ソモキ　クス　ネ　ナ、　セコロ　イタㇰ。",
		alt: "Orota Yesu ene itakhi Tan okai poro cisei e nukara ya? Teda an ukata ukata okai suma obitta ahacire wa sinep ka ukata ande somoki kusu ne na, sekoro itak.",
		native: "\"Do you see these great buildings?\" asked Jesus. \"Not a single stone will be left here on another, which will not be thrown down.\"",
		words: [ 'オロタ', 'イェス', 'エネ', 'イタㇰヒ', 'タン', 'オカイ', 'ポロ', 'チセイ', 'エ', 'ヌカラ', 'ヤ', 'テダ', 'アン', 'ウカタ', 'ウカタ', 'オカイ', 'スマ', 'オビッタ', 'アハチレ', 'ワ', 'シネプ', 'カ', 'ウカタ', 'アンデ', 'ソモキ', 'クス', 'ネ', 'ナ', 'セコロ', 'イタㇰ' ],
		audio: "audio/mark.13/1.wav",
		quizWords: [ 'ウカタ', 'アンデ', 'アハチレ' ]
	},
	{
		target: "オロワ、　シヌマ　カムイ　コラ　ケンル　サマケ　ウン　カン　ラン　ウㇱ　ヌプリ　カタ　ア　ワ　アン　イタ、　ペッロㇱ　ネワ　ヤコブ　ネワ　ヨアンネㇱ　ネワ　アンヅレウ　ネワ　アロロキㇱネノ　シヌマ　オッタ　エネ　ヌヒ",
		alt: "Orowa, sinuma Kamui kora kenru samake un Kan ran us nupuri kata a wa an ita, Petros newa Yakob newa Yoannes newa Andreu newa arorokisneno sinuma otta ene nuhi",
		native: "When Jesus had sat down on the Mount of Olives, facing the Temple, Peter, James, John and Andrew questioned him privately,",
		words: [ 'オロワ', 'シヌマ', 'カムイ', 'コラ', 'ケンル', 'サマケ', 'ウン', 'カン', 'ラン', 'ウㇱ', 'ヌプリ', 'カタ', 'ア', 'ワ', 'アン', 'イタ', 'ペッロㇱ', 'ネワ', 'ヤコブ', 'ネワ', 'ヨアンネㇱ', 'ネワ', 'アンヅレウ', 'ネワ', 'アロロキㇱネノ', 'シヌマ', 'オッタ', 'エネ', 'ヌヒ' ],
		audio: "audio/mark.13/2.wav",
		quizWords: [ 'ラン', 'ヌヒ' ]
	},
	{
		target: "タプ　オカイペ　ヘㇺバラ　ヘトゥク　ヤ？　オロワ、　タプ　オルㇱペ　オビッタ　ウウェオマレ　クニ　クス　ネ　パハ　タ　ヘマンダ　シロㇱ　アン　ナンゴロ　ヤ？　ネイ　アㇺベ　ウン　ヌレ　ワ　ウン　コレ、　アリ　ヌ。",
		alt: "Tap okaype hembara hetuku ya? orowa, tap oruspe obitta uweomare kuni kusu ne paha ta hemanda siros an nangoro ya? ney ambe un nure wa un kore, ari nu.",
		native: "\"Tell us when this will be, and what will be the sign when all this is drawing to its close.\"",
		words: [ 'タプ', 'オカイペ', 'ヘㇺバラ', 'ヘトゥク', 'ヤ', 'オロワ', 'タプ', 'オルㇱペ', 'オビッタ', 'ウウェオマレ', 'クニ', 'クス', 'ネ', 'パハ', 'タ', 'ヘマンダ', 'シロㇱ', 'アン', 'ナンゴロ', 'ヤ', 'ネイ', 'アㇺベ', 'ウン', 'ヌレ', 'ワ', 'ウン', 'コレ', 'アリ', 'ヌ' ],
		audio: "audio/mark.13/3.wav",
		quizWords: [ 'ヘトゥク', 'パハ' ]
	},
	{
		target: "オロタ　イェス　エネ　イタㇰ　ヘアシ　イテキ　モシマ　グル　エチ　シレン　ワ　コカンダマ　クニ　ヤイトゥバレ　ヤン。",
		alt: "Orota Yesu ene itak heasi Iteki mosima guru eci siren wa kokandama kuni yaitubare yan.",
		native: "Then Jesus began, \"See that no one leads you astray.",
		words: [ 'オロタ', 'イェス', 'エネ', 'イタㇰ', 'ヘアシ', 'イテキ', 'モシマ', 'グル', 'エチ', 'シレン', 'ワ', 'コカンダマ', 'クニ', 'ヤイトゥバレ', 'ヤン' ],
		audio: "audio/mark.13/4.wav",
		quizWords: [ 'モシマ', 'シレン', 'コカンダマ' ]
	},
	{
		target: "インネ　ウタラ　ク　レイヘイ　アニ　ヒネ　アラキ　ワ、　クアニ　シヌマ　ネ、　アリ　イタㇰ　ワ　インネ　ウタラ　シレン　ワ　コカンダマ　クス　ネ。",
		alt: "Inne utara Ku reihei ani hine araki wa, Kuani sinuma ne, ari itak wa inne utara siren wa kokandama kusu ne.",
		native: "Many will take my name, and come saying \'I am He\', and will lead many astray.",
		words: [ 'インネ', 'ウタラ', 'ク', 'レイヘイ', 'アニ', 'ヒネ', 'アラキ', 'ワ', 'クアニ', 'シヌマ', 'ネ', 'アリ', 'イタㇰ', 'ワ', 'インネ', 'ウタラ', 'シレン', 'ワ', 'コカンダマ', 'クス', 'ネ' ],
		audio: "audio/mark.13/5.wav",
		quizSentence: true
	},
	{
		target: "オロワ、　トゥミラㇺ　ヘネ、　トゥミラㇺ　アㇱスル　ヘネ、　エチ　ヌ　チキ、　イテキ　キマテㇰ　ヤン:　タプ　オカイペ　ヘトゥク　クニプ　ネ　ルウェ　ネ！　コロカ、　ケセケ　アナㇰ　ネ　ナア　ソモ　ルウェ　ネ！",
		alt: "Orowa, tumiram hene, tumiram assuru hene, eci nu ciki, iteki kimatek yan: tap okaype hetuku kunip ne ruwe ne! Koroka, keseke anak ne naa somo ruwe ne!",
		native: "\"And, when you hear of wars and rumors of wars, do not be alarmed; such things must occur; but the end is not yet.",
		words: [ 'オロワ', 'トゥミラㇺ', 'ヘネ', 'トゥミラㇺ', 'アㇱスル', 'ヘネ', 'エチ', 'ヌ', 'チキ', 'イテキ', 'キマテㇰ', 'ヤン', 'タプ', 'オカイペ', 'ヘトゥク', 'クニプ', 'ネ', 'ルウェ', 'ネ', 'コロカ', 'ケセケ', 'アナㇰ', 'ネ', 'ナア', 'ソモ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.13/6.wav",
		quizWords: [ 'ケセケ', 'キマテㇰ', 'トゥミラㇺ' ]
	},
	{
		target: "イナㇺベ　クス　ネ　ヤクン、　ウイルプ　アナㇰ　ネ　ウイルプ　コトゥミ　コロ、　モシリ　アナㇰ　ネ　モシリ　コトゥミ　コロ:　ウサ　オカイ　コタン　タ　シリ　シモイェ　アン;　ケムㇱ　イキ　クス　ネ:　タプ　オカイペ　ウヌワプ　エアッパケ　ネ　ルウェ　ネ　ナ。",
		alt: "Inambe kusu ne yakun, uirup anak ne uirup kotumi koro, mosiri anak ne mosiri kotumi koro: usa okai kotan ta siri simoye an; kemus iki kusu ne: tap okaype unuwap eatpake ne ruwe ne na.",
		native: "For nation will rise against nation, and kingdom against kingdom; there will be earthquakes in various places; there will be famines. This will be but the beginning of the birth-pangs.",
		words: [ 'イナㇺベ', 'クス', 'ネ', 'ヤクン', 'ウイルプ', 'アナㇰ', 'ネ', 'ウイルプ', 'コトゥミ', 'コロ', 'モシリ', 'アナㇰ', 'ネ', 'モシリ', 'コトゥミ', 'コロ', 'ウサ', 'オカイ', 'コタン', 'タ', 'シリ', 'シモイェ', 'アン', 'ケムㇱ', 'イキ', 'クス', 'ネ', 'タプ', 'オカイペ', 'ウヌワプ', 'エアッパケ', 'ネ', 'ルウェ', 'ネ', 'ナ' ],
		audio: "audio/mark.13/7.wav",
		quizWords: [ 'ケムㇱ', 'ウヌワプ', 'シモイェ', 'エアッパケ', 'コトゥミ' ]
	},
	{
		target: "コロカ、　エチ　ウタラ　ヤイトゥバレ　ヤン:　イナㇺベ　クス　ネ　ヤクン、　ウタラ　アナㇰ　ネ　ウコラㇺコロ　ウタラ　オッタ　エチ　エコシ　クス　ネ:　オロワノ、　ウウェカラパ　チセイ　タ　エチ　シリキㇰ　アン、　サマタ、　ネイ　ウタラ　エペカノ　パウェテス　イ　エチ　ネ　クニ　ク　レンガプ　クス　エサパネ　ウタラ　ネワ　モシリ　シㇰカシマ　ウタラ　シㇰ　サマタ　エチ　ロㇱキ　クス　ネ。",
		alt: "Koroka, eci utara yaitubare yan: inambe kusu ne yakun, utara anak ne ukoramkoro utara otta eci ekosi kusu ne: orowano, Uwekarapa cisei ta eci sirikik an, samata, ney utara epekano pawetesu i eci ne kuni Ku rengap kusu Esapane utara newa Mosiri sikkasima utara sik samata eci roski kusu ne.",
		native: "\"See to yourselves! They will betray you to courts of law; and you will be taken to synagogues and beaten; and you will be brought up before governors and kings for my sake, so that you can bear witness before them.",
		words: [ 'コロカ', 'エチ', 'ウタラ', 'ヤイトゥバレ', 'ヤン', 'イナㇺベ', 'クス', 'ネ', 'ヤクン', 'ウタラ', 'アナㇰ', 'ネ', 'ウコラㇺコロ', 'ウタラ', 'オッタ', 'エチ', 'エコシ', 'クス', 'ネ', 'オロワノ', 'ウウェカラパ', 'チセイ', 'タ', 'エチ', 'シリキㇰ', 'アン', 'サマタ', 'ネイ', 'ウタラ', 'エペカノ', 'パウェテス', 'イ', 'エチ', 'ネ', 'クニ', 'ク', 'レンガプ', 'クス', 'エサパネ', 'ウタラ', 'ネワ', 'モシリ', 'シㇰカシマ', 'ウタラ', 'シㇰ', 'サマタ', 'エチ', 'ロㇱキ', 'クス', 'ネ' ],
		audio: "audio/mark.13/8.wav",
		quizWords: [ 'パウェテス', 'ウコラㇺコロ' ]
	},
	{
		target: "オロワ、　インギ　モシㇽ――ウン　ウイルプ　オッタ　ピリカ　ソンゴ　ホシキノ　アエウパㇱクマ　クス　ネ　ナ。",
		alt: "Orowa, ingi mosir--un uirup otta Pirika songo hosikino aeupaskuma kusu ne na.",
		native: "But the good news must first be proclaimed to every nation.",
		words: [ 'オロワ', 'インギ', 'モシㇽ', 'ウン', 'ウイルプ', 'オッタ', 'ピリカ', 'ソンゴ', 'ホシキノ', 'アエウパㇱクマ', 'クス', 'ネ', 'ナ' ],
		audio: "audio/mark.13/9.wav",
		quizSentence: true
	},
	{
		target: "オロワ、　ウタラ　エチ　アニ　ワ　エコシ　イタ、　ネコン　ア　カトゥ　アン　イタㇰ　アニ　イェ　ヤ、　イテキ　エトコタ　ニソマプ　ヤン;　コロカ、　ネイ　パキヒ　タ　ネプ　ネ　ヤㇰカ　エチ　コロパレ　アン　アㇺベ　アニ　エチ　イェ　クス　ネ;　エチ　ヤイコタ　イェ　イタㇰ　ソモ　ネ、　アㇱカンネ　ラマッ　イェ　イタㇰ　ネ　ルウェ　ネ　クス　ネ　ナ。",
		alt: "Orowa, utara eci ani wa ekosi ita, nekon a katu an itak ani ye ya, iteki etokota nisomap yan; koroka, ney pakihi ta nep ne yakka eci koropare an ambe ani eci ye kusu ne; eci yaikota ye itak somo ne, Askanne Ramat ye itak ne ruwe ne kusu ne na.",
		native: "Whenever they betray you and hand you over for trial, do not be anxious beforehand as to what you will say, but say whatever is given you at the moment; for it will not be you who speak, but the Holy Spirit.",
		words: [ 'オロワ', 'ウタラ', 'エチ', 'アニ', 'ワ', 'エコシ', 'イタ', 'ネコン', 'ア', 'カトゥ', 'アン', 'イタㇰ', 'アニ', 'イェ', 'ヤ', 'イテキ', 'エトコタ', 'ニソマプ', 'ヤン', 'コロカ', 'ネイ', 'パキヒ', 'タ', 'ネプ', 'ネ', 'ヤㇰカ', 'エチ', 'コロパレ', 'アン', 'アㇺベ', 'アニ', 'エチ', 'イェ', 'クス', 'ネ', 'エチ', 'ヤイコタ', 'イェ', 'イタㇰ', 'ソモ', 'ネ', 'アㇱカンネ', 'ラマッ', 'イェ', 'イタㇰ', 'ネ', 'ルウェ', 'ネ', 'クス', 'ネ', 'ナ' ],
		audio: "audio/mark.13/10.wav",
		quizWords: [ 'カトゥ' ]
	},
	{
		target: "アイヌ　イリワㇰ　アナㇰ　ネ　コロ　アイヌ　イリワㇰ　アライゲレ　クス　エコシ、　ミチ　アナㇰ　ネ　コロ　ポホ　エコシ　クス　ネ;　オロワ、　ポ　ウタラ　アナㇰ　ネ　コロ　エシコプ　コピウキ　ワ　ライゲ　クス　ネ　ナ。",
		alt: "Ainu iriwak anak ne koro ainu iriwak araigere kusu ekosi, mici anak ne koro poho ekosi kusu ne; orowa, po utara anak ne koro esikop kopiuki wa raige kusu ne na.",
		native: "Brother will betray brother to death, and the father his child; and children will turn against their parents, and cause them to be put to death;",
		words: [ 'アイヌ', 'イリワㇰ', 'アナㇰ', 'ネ', 'コロ', 'アイヌ', 'イリワㇰ', 'アライゲレ', 'クス', 'エコシ', 'ミチ', 'アナㇰ', 'ネ', 'コロ', 'ポホ', 'エコシ', 'クス', 'ネ', 'オロワ', 'ポ', 'ウタラ', 'アナㇰ', 'ネ', 'コロ', 'エシコプ', 'コピウキ', 'ワ', 'ライゲ', 'クス', 'ネ', 'ナ' ],
		audio: "audio/mark.13/11.wav",
		quizWords: [ 'コピウキ', 'イリワㇰ', 'アライゲレ' ]
	},
	{
		target: "サマタ、　エチ　ウタラ　アナㇰ　ネ　ク　レイヘイ　レンガプ　クス　オビッタノ　オカイ　ウタラ　オロワノ　アエトゥンネ　クス　ネ:　コロカ、　ケセヘ　パㇰノ　ヤイシポロレ　グル　アナㇰ　ネ、　ネイ　グル　アナㇰ　カシアオビウキ　クス　ネ　ナ。",
		alt: "Samata, eci utara anak ne Ku reihei rengap kusu obittano okai utara orowano aetunne kusu ne: koroka, kesehe pakno yaisiporore guru anak ne, ney guru anak kasiaobiuki kusu ne na.",
		native: "and you will be hated by everyone because of me. Yet the person who endures to the end will be saved.",
		words: [ 'サマタ', 'エチ', 'ウタラ', 'アナㇰ', 'ネ', 'ク', 'レイヘイ', 'レンガプ', 'クス', 'オビッタノ', 'オカイ', 'ウタラ', 'オロワノ', 'アエトゥンネ', 'クス', 'ネ', 'コロカ', 'ケセヘ', 'パㇰノ', 'ヤイシポロレ', 'グル', 'アナㇰ', 'ネ', 'ネイ', 'グル', 'アナㇰ', 'カシアオビウキ', 'クス', 'ネ', 'ナ' ],
		audio: "audio/mark.13/12.wav",
		quizWords: [ 'アエトゥンネ', 'オビッタノ', 'ケセヘ' ]
	},
	{
		target: "コロカ、　ソモ　アㇱ　クニ　ウシケタ　アエトゥンネ　ウェンデプ　アㇱ　シリ　エチ　ヌカラ　イタ　（オロオイタㇰ　グル　イラム　ヤン）、",
		alt: "Koroka, somo as kuni usiketa aetunne wendep as siri eci nukara ita (orooitak guru iramu yan),",
		native: "\"As soon, however, as you see \'the Foul Desecration\' standing where it ought not\" (the reader must consider what this means) \"then those of you who are in Judea must take refuge in the mountains;",
		words: [ 'コロカ', 'ソモ', 'アㇱ', 'クニ', 'ウシケタ', 'アエトゥンネ', 'ウェンデプ', 'アㇱ', 'シリ', 'エチ', 'ヌカラ', 'イタ', 'オロオイタㇰ', 'グル', 'イラム', 'ヤン' ],
		audio: "audio/mark.13/13.wav",
		quizWords: [ 'イラム', 'ウェンデプ', 'オロオイタㇰ' ]
	},
	{
		target: "ネイ　イタ　ユデア　ウン　ウタラ　ヌプリ　オッタ　コキラ:　オロワ、　チセイ　カタ　アン　グル　チセイ　オッタ　アン　オカイペ　ウㇰ　クニ　クス　イテキ　ラン　ワ　アフン　ヤン:",
		alt: "ney ita Yudea un utara nupuri otta kokira: orowa, cisei kata an guru cisei otta an okaype uk kuni kusu iteki ran wa ahun yan:",
		native: "and a person on the house-top must not go down, or go in to get anything out of their house:",
		words: [ 'ネイ', 'イタ', 'ユデア', 'ウン', 'ウタラ', 'ヌプリ', 'オッタ', 'コキラ', 'オロワ', 'チセイ', 'カタ', 'アン', 'グル', 'チセイ', 'オッタ', 'アン', 'オカイペ', 'ウㇰ', 'クニ', 'クス', 'イテキ', 'ラン', 'ワ', 'アフン', 'ヤン' ],
		audio: "audio/mark.13/14.wav",
		quizWords: [ 'コキラ' ]
	},
	{
		target: "オロワ、　トイ　オッタ　アン　グル　ホカンナシ　ミプ　ウㇰ　クス　イテキ　ホシピ　ヤン。",
		alt: "orowa, toi otta an guru hokannasi mip uk kusu iteki hosipi yan.",
		native: "nor must one who is on their farm turn back to get their cloak.",
		words: [ 'オロワ', 'トイ', 'オッタ', 'アン', 'グル', 'ホカンナシ', 'ミプ', 'ウㇰ', 'クス', 'イテキ', 'ホシピ', 'ヤン' ],
		audio: "audio/mark.13/15.wav",
		quizSentence: true
	},
	{
		target: "コロカ、　ホンコロ　グル　ネワ　イト　ノンデ　グル　ヤイサㇺベポカㇱ　フミ！",
		alt: "Koroka, honkoro guru newa ito nonde guru yaisambepokas humi!",
		native: "And alas for pregnant women, and for those who are nursing infants in those days!",
		words: [ 'コロカ', 'ホンコロ', 'グル', 'ネワ', 'イト', 'ノンデ', 'グル', 'ヤイサㇺベポカㇱ', 'フミ' ],
		audio: "audio/mark.13/16.wav",
		quizWords: [ 'ノンデ', 'イト' ]
	},
	{
		target: "タプ　オカイペ　イテキ　マタパ　オッタ　アン　クニ　イノンノ　イタㇰ　ヤン。",
		alt: "Tap okaype iteki matapa otta an kuni inonno itak yan.",
		native: "Pray, too, that this may not occur in winter.",
		words: [ 'タプ', 'オカイペ', 'イテキ', 'マタパ', 'オッタ', 'アン', 'クニ', 'イノンノ', 'イタㇰ', 'ヤン' ],
		audio: "audio/mark.13/17.wav",
		quizWords: [ 'マタパ' ]
	},
	{
		target: "イナㇺベ　クス　ネ　ヤクン、　ネイ　トホ　タ　アナㇰ　ネ　カムイ　カン　ロㇰ　モシリ　ヘアシ　ワノ　タネ　パㇰノ　ヘネ、　タネ　ワノ　ヘㇺバラ　パㇰノ　ネ　ヤㇰカ　イサㇺ　パㇰノ　アン　アエラムチゥプテㇰベ　ヘトゥク　クス　ネ　ナ。",
		alt: "Inambe kusu ne yakun, ney toho ta anak ne Kamui kan rok mosiri heasi wano tane pakno hene, tane wano hembara pakno ne yakka isam pakno an aeramucuptekbe hetuku kusu ne na.",
		native: "For those days will be a time of distress, the like of which has not occurred from the beginning of God\'s creation until now - and never will again.",
		words: [ 'イナㇺベ', 'クス', 'ネ', 'ヤクン', 'ネイ', 'トホ', 'タ', 'アナㇰ', 'ネ', 'カムイ', 'カン', 'ロㇰ', 'モシリ', 'ヘアシ', 'ワノ', 'タネ', 'パㇰノ', 'ヘネ', 'タネ', 'ワノ', 'ヘㇺバラ', 'パㇰノ', 'ネ', 'ヤㇰカ', 'イサㇺ', 'パㇰノ', 'アン', 'アエラムチゥプテㇰベ', 'ヘトゥク', 'クス', 'ネ', 'ナ' ],
		audio: "audio/mark.13/18.wav",
		quizWords: [ 'アエラムチゥプテㇰベ' ]
	},
	{
		target: "オロワ、　ウタラパ　アナㇰ　ネ　ネイ　トホ　タㇰネレ　ソモキ　チキ、　ネン　ネ　ヤㇰカ　ソモ　カシアオビウキ　ルウェ　ネ、　コロカ、　シヌマ　ヌㇺゲ　アヌㇺゲ　ウタラ　レンガプ　クス　ネイ　トホ　アタㇰネレ　ニサ　ルウェ　ネ。",
		alt: "Orowa, Utarapa anak ne ney toho taknere somoki ciki, nen ne yakka somo kasiaobiuki ruwe ne, koroka, sinuma numge anumge utara rengap kusu ney toho ataknere nisa ruwe ne.",
		native: "And, had not the Lord put a limit to those days, not a single soul would escape; but, for the sake of God\'s own chosen people, he did limit them.",
		words: [ 'オロワ', 'ウタラパ', 'アナㇰ', 'ネ', 'ネイ', 'トホ', 'タㇰネレ', 'ソモキ', 'チキ', 'ネン', 'ネ', 'ヤㇰカ', 'ソモ', 'カシアオビウキ', 'ルウェ', 'ネ', 'コロカ', 'シヌマ', 'ヌㇺゲ', 'アヌㇺゲ', 'ウタラ', 'レンガプ', 'クス', 'ネイ', 'トホ', 'アタㇰネレ', 'ニサ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.13/19.wav",
		quizWords: [ 'タㇰネレ', 'アヌㇺゲ', 'アタㇰネレ' ]
	},
	{
		target: "オロワ、　ネイ　イタ　アナㇰ　ネ、　インガラ、　キリㇱト　テダ　アン　トアダ　アン　アリ　アン　イタㇰ　アニ　イェ　グル　アン　チキ、　イテキ　エイソコロ　ヤン;",
		alt: "Orowa, ney ita anak ne, ingara, Kiristo teda an toada an ari an itak ani ye guru an ciki, iteki eisokoro yan;",
		native: "\"And at that time if anyone should say to you \'Look, here is the Christ!\' \'Look, there he is!\', do not believe it;",
		words: [ 'オロワ', 'ネイ', 'イタ', 'アナㇰ', 'ネ', 'インガラ', 'キリㇱト', 'テダ', 'アン', 'トアダ', 'アン', 'アリ', 'アン', 'イタㇰ', 'アニ', 'イェ', 'グル', 'アン', 'チキ', 'イテキ', 'エイソコロ', 'ヤン' ],
		audio: "audio/mark.13/20.wav",
		quizWords: [ 'トアダ' ]
	},
	{
		target: "イナㇺベ　クス　ネ　ヤクン、　スンゲ　キリㇱト　スンゲ　ウウェインカラ　ウタラ　ヘトゥク　ワ　エアㇱカイ　チキ　アヌㇺゲ　ウタラ　シレン　ワ　トゥライヌレ　クニ　クス　シロㇱ　ネワ　イヨクンヌレプ　ヌカレ　クス　ネ　ナ。",
		alt: "inambe kusu ne yakun, sunge Kiristo sunge uweinkara utara hetuku wa easkai ciki anumge utara siren wa turainure kuni kusu siros newa iyokunnurep nukare kusu ne na.",
		native: "for false Christs and false prophets will arise, and display signs and marvels, to lead astray, were it possible, even God\'s people.",
		words: [ 'イナㇺベ', 'クス', 'ネ', 'ヤクン', 'スンゲ', 'キリㇱト', 'スンゲ', 'ウウェインカラ', 'ウタラ', 'ヘトゥク', 'ワ', 'エアㇱカイ', 'チキ', 'アヌㇺゲ', 'ウタラ', 'シレン', 'ワ', 'トゥライヌレ', 'クニ', 'クス', 'シロㇱ', 'ネワ', 'イヨクンヌレプ', 'ヌカレ', 'クス', 'ネ', 'ナ' ],
		audio: "audio/mark.13/21.wav",
		quizWords: [ 'イヨクンヌレプ', 'スンゲ', 'トゥライヌレ', 'ヌカレ' ]
	},
	{
		target: "コロカ、　エチ　ヤイトゥバレ　ヤン:　インガラ、　エトコ　ワノ　ネプ　ネ　ヤㇰカ　エチ　ヌレ　アㇱ　ニサ　ルウェ　ネ。",
		alt: "Koroka, eci yaitubare yan: ingara, etoko wano nep ne yakka eci nure as nisa ruwe ne.",
		native: "But see that you are on your guard! I have told you all this beforehand.",
		words: [ 'コロカ', 'エチ', 'ヤイトゥバレ', 'ヤン', 'インガラ', 'エトコ', 'ワノ', 'ネプ', 'ネ', 'ヤㇰカ', 'エチ', 'ヌレ', 'アㇱ', 'ニサ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.13/22.wav",
		quizWords: [ 'エトコ' ]
	},
	{
		target: "コロカ、　ネイ　トホ　タ　ネイ　アエラムチゥプテㇰベ　アオケレ　イタ　アナㇰ　ネ、　トカプ　チゥプ　アクンネレ、　クンネ　チゥプ　ペケレ　アッテ　ソモキ、",
		alt: "Koroka, ney toho ta ney aeramucuptekbe aokere ita anak ne, tokap cup akunnere, kunne cup pekere atte somoki,",
		native: "\"In those days, after that time of distress, the sun will be darkened, the moon will not give her light,",
		words: [ 'コロカ', 'ネイ', 'トホ', 'タ', 'ネイ', 'アエラムチゥプテㇰベ', 'アオケレ', 'イタ', 'アナㇰ', 'ネ', 'トカプ', 'チゥプ', 'アクンネレ', 'クンネ', 'チゥプ', 'ペケレ', 'アッテ', 'ソモキ' ],
		audio: "audio/mark.13/23.wav",
		quizWords: [ 'アクンネレ', 'アオケレ' ]
	},
	{
		target: "オロワ　ノチウ　アナㇰ　ネ　カンド　オロワノ　ラパプセ、　サマタ、　カンド　ウン　キロロ　アスイェスイェ　クス　ネ。",
		alt: "orowa nociu anak ne kando orowano rapapse, samata, kando un kiroro asuyesuye kusu ne.",
		native: "the stars will be falling from the heavens, and the forces that are in the heavens will be convulsed.",
		words: [ 'オロワ', 'ノチウ', 'アナㇰ', 'ネ', 'カンド', 'オロワノ', 'ラパプセ', 'サマタ', 'カンド', 'ウン', 'キロロ', 'アスイェスイェ', 'クス', 'ネ' ],
		audio: "audio/mark.13/24.wav",
		quizWords: [ 'アスイェスイェ', 'ラパプセ' ]
	},
	{
		target: "オロワ、　アイヌ　ポホ　アナㇰ　ネ　ポロ　キロロ　ネワ　ヌペキヒ　コロ　ワ　ニㇱクル　オ　ワ　エㇰ　シリ　ウタラ　ヌカラ　クス　ネ。",
		alt: "Orowa, Ainu Poho anak ne poro kiroro newa nupekihi koro wa niskuru o wa ek siri utara nukara kusu ne.",
		native: "Then will be seen the Son of Man coming in clouds with great power and glory;",
		words: [ 'オロワ', 'アイヌ', 'ポホ', 'アナㇰ', 'ネ', 'ポロ', 'キロロ', 'ネワ', 'ヌペキヒ', 'コロ', 'ワ', 'ニㇱクル', 'オ', 'ワ', 'エㇰ', 'シリ', 'ウタラ', 'ヌカラ', 'クス', 'ネ' ],
		audio: "audio/mark.13/25.wav",
		quizSentence: true
	},
	{
		target: "オロワノ、　シヌマ　アナㇰ　ネ　コロ　ハウトゥルㇺベ　パイェレ　ワ　モシリパ　パㇰノ　モシリゲㇱ　パㇰノ、　カンド　パ　ワノ　カンド　ゲㇱ　パㇰノ　イネ　レラ　ワノ　コロ　ヌㇺゲ　ウタラ　ウウェカラパレ　クス　ネ　ナ。",
		alt: "Orowano, sinuma anak ne koro hauturumbe payere wa mosiripa pakno mosiriges pakno, kando pa wano kando ges pakno ine rera wano koro numge utara uwekarapare kusu ne na.",
		native: "and then he will send the angels, and gather his people from the four winds, from one end of the world to the other.",
		words: [ 'オロワノ', 'シヌマ', 'アナㇰ', 'ネ', 'コロ', 'ハウトゥルㇺベ', 'パイェレ', 'ワ', 'モシリパ', 'パㇰノ', 'モシリゲㇱ', 'パㇰノ', 'カンド', 'パ', 'ワノ', 'カンド', 'ゲㇱ', 'パㇰノ', 'イネ', 'レラ', 'ワノ', 'コロ', 'ヌㇺゲ', 'ウタラ', 'ウウェカラパレ', 'クス', 'ネ', 'ナ' ],
		audio: "audio/mark.13/26.wav",
		quizWords: [ 'ウウェカラパレ', 'モシリパ' ]
	},
	{
		target: "イチイィク　チクニ　アンクㇱケライ　イタㇰ　マウクㇱテ　イタㇰ　ヌ　ヤン:　コロ　ウイテㇰ　タネ　ハプル　ワ　ハㇺ　ヘトゥクレ　ヤㇰ　アナㇰ　ネ　サㇰ　エハンゲ　ルウェ　ネ　セコロ　エチ　エラマン;",
		alt: "Icijiku cikuni ankuskerai itak maukuste itak nu yan: koro uitek tane hapuru wa ham hetukure yak anak ne sak ehange ruwe ne sekoro eci eraman;",
		native: "\"Learn the lesson taught by the fig tree. As soon as its branches are full of sap, and it is bursting into leaf, you know that summer is near.",
		words: [ 'イチイィク', 'チクニ', 'アンクㇱケライ', 'イタㇰ', 'マウクㇱテ', 'イタㇰ', 'ヌ', 'ヤン', 'コロ', 'ウイテㇰ', 'タネ', 'ハプル', 'ワ', 'ハㇺ', 'ヘトゥクレ', 'ヤㇰ', 'アナㇰ', 'ネ', 'サㇰ', 'エハンゲ', 'ルウェ', 'ネ', 'セコロ', 'エチ', 'エラマン' ],
		audio: "audio/mark.13/27.wav",
		quizWords: [ 'ハプル', 'エハンゲ', 'マウクㇱテ', 'アンクㇱケライ' ]
	},
	{
		target: "タプ　コラチ　ネ　ヤㇰカ　タン　オカイペ　ヘトゥク　シリ　エチ　ヌカラ　チキ、　シヌマ　エハンゲノ　アン、　アパ　サマケタ　アン　ルウェ　ネ　アリ　アン　アㇺベ　エラマン　ヤン。",
		alt: "tap koraci ne yakka tan okaype hetuku siri eci nukara ciki, sinuma ehangeno an, apa samaketa an ruwe ne ari an ambe eraman yan.",
		native: "And so may you, as soon as you see these things happening, know that he is at your doors.",
		words: [ 'タプ', 'コラチ', 'ネ', 'ヤㇰカ', 'タン', 'オカイペ', 'ヘトゥク', 'シリ', 'エチ', 'ヌカラ', 'チキ', 'シヌマ', 'エハンゲノ', 'アン', 'アパ', 'サマケタ', 'アン', 'ルウェ', 'ネ', 'アリ', 'アン', 'アㇺベ', 'エラマン', 'ヤン' ],
		audio: "audio/mark.13/28.wav",
		quizSentence: true
	},
	{
		target: "ソンノ　エチ　オッタ　ク　イェ、　タㇺベ　オビッタ　アウウェオマレ　パㇰノ　タネ　オカイ　アイヌ　イキリ　イサㇺ　ソモキ　クス　ネ。",
		alt: "Sonno eci otta Ku ye, tambe obitta auweomare pakno tane okai ainu ikiri isam somoki kusu ne.",
		native: "I tell you that even the present generation will not pass away, until all these things have taken place.",
		words: [ 'ソンノ', 'エチ', 'オッタ', 'ク', 'イェ', 'タㇺベ', 'オビッタ', 'アウウェオマレ', 'パㇰノ', 'タネ', 'オカイ', 'アイヌ', 'イキリ', 'イサㇺ', 'ソモキ', 'クス', 'ネ' ],
		audio: "audio/mark.13/29.wav",
		quizWords: [ 'アウウェオマレ' ]
	},
	{
		target: "カンド　ネワ　トイ　アナㇰ　ネ　イサㇺ　クス　ネ:　コロカ、　ク　イェ　イタㇰ　アナㇰ　ネ　イサㇺ　ソモキ　クス　ネ　ルウェ　ネ。",
		alt: "Kando newa toi anak ne isam kusu ne: koroka, Ku ye itak anak ne isam somoki kusu ne ruwe ne.",
		native: "The heavens and the earth will pass away, but my words will not pass away.",
		words: [ 'カンド', 'ネワ', 'トイ', 'アナㇰ', 'ネ', 'イサㇺ', 'クス', 'ネ', 'コロカ', 'ク', 'イェ', 'イタㇰ', 'アナㇰ', 'ネ', 'イサㇺ', 'ソモキ', 'クス', 'ネ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.13/30.wav",
		quizSentence: true
	},
	{
		target: "コロカ、　ネイ　トホ　ヘネ、　パキヒ　ヘネ、　エラマン　グル　シネン　イサㇺ、　カンド　タ　オカイ　ハウトゥルㇺベ　カ、　ポホ　カ、　エラム　アン　ソモキ。",
		alt: "Koroka, ney toho hene, pakihi hene, eraman guru sinen isam, kando ta okai hauturumbe ka, Poho ka, eramu an somoki.",
		native: "\"But about that day, or the hour, no one knows - not even the angels in heaven, not even the Son - but only the Father.",
		words: [ 'コロカ', 'ネイ', 'トホ', 'ヘネ', 'パキヒ', 'ヘネ', 'エラマン', 'グル', 'シネン', 'イサㇺ', 'カンド', 'タ', 'オカイ', 'ハウトゥルㇺベ', 'カ', 'ポホ', 'カ', 'エラム', 'アン', 'ソモキ' ],
		audio: "audio/mark.13/31.wav",
		quizSentence: true
	},
	{
		target: "オウセ　ミチ　パテㇰ　エラマン　ルウェ　ネ。　ヤイラマッテ　ワ　シルワンデ　ヘㇺヘㇺ　キ、　イノンノ　イタㇰ　ヘㇺヘㇺ　キ　ヤン:　ネイ　パキヒ　ヘㇺバラ　タ　アン　ヤ　エチ　エラㇺペウテㇰ　ルウェ　ネ　クス　ネ　ナ。",
		alt: "Ouse Mici patek eraman ruwe ne. Yairamatte wa siruwande hemhem ki, inonno itak hemhem ki yan: ney pakihi hembara ta an ya eci erampeutek ruwe ne kusu ne na.",
		native: "\"See that you are on the watch; for you do not know when the time will be.",
		words: [ 'オウセ', 'ミチ', 'パテㇰ', 'エラマン', 'ルウェ', 'ネ', 'ヤイラマッテ', 'ワ', 'シルワンデ', 'ヘㇺヘㇺ', 'キ', 'イノンノ', 'イタㇰ', 'ヘㇺヘㇺ', 'キ', 'ヤン', 'ネイ', 'パキヒ', 'ヘㇺバラ', 'タ', 'アン', 'ヤ', 'エチ', 'エラㇺペウテㇰ', 'ルウェ', 'ネ', 'クス', 'ネ', 'ナ' ],
		audio: "audio/mark.13/32.wav",
		quizWords: [ 'ヤイラマッテ', 'シルワンデ', 'オウセ', 'パテㇰ' ]
	},
	{
		target: "ネイ　アㇺベ　アナㇰ、　コロ　ウㇱシウネ　ウタラ　オッタ　モンヅㇺ　コロパレ、　イキ　クニ　モニ　ピㇱノ　クス　エサンニヨ、　サマタ、　アパ　プンギ　ネ　ヤㇰカ　シルワンデ　クニ　カㇱパオッテ、　オヤ　モシリ　タ　レウシ　クス　コロ　チセイ　アンデ　アイヌ　コラチ　ネ　ルウェ　ネ。",
		alt: "Ney ambe anak, Koro ussiune utara otta mondum koropare, iki kuni moni pisno kusu esanniyo, samata, apa pungi ne yakka siruwande kuni kaspaotte, oya mosiri ta reusi kusu koro cisei ande ainu koraci ne ruwe ne.",
		native: "It is like a man going on a journey, who leaves his home, puts his servants in charge - each having their special duty - and orders the porter to watch.",
		words: [ 'ネイ', 'アㇺベ', 'アナㇰ', 'コロ', 'ウㇱシウネ', 'ウタラ', 'オッタ', 'モンヅㇺ', 'コロパレ', 'イキ', 'クニ', 'モニ', 'ピㇱノ', 'クス', 'エサンニヨ', 'サマタ', 'アパ', 'プンギ', 'ネ', 'ヤㇰカ', 'シルワンデ', 'クニ', 'カㇱパオッテ', 'オヤ', 'モシリ', 'タ', 'レウシ', 'クス', 'コロ', 'チセイ', 'アンデ', 'アイヌ', 'コラチ', 'ネ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.13/33.wav",
		quizWords: [ 'モンヅㇺ', 'ピㇱノ', 'プンギ', 'カㇱパオッテ', 'モニ' ]
	},
	{
		target: "タㇺベ　クス、　シルワンデ　ヤン:　イナㇺベ　クス　ネ　ヤクン、　チセイ　コン　ニㇱパ　ヘㇺバラ　タ　エㇰ　ヤ、　シリ　オヌマン　イタ　ヘネ、　アン　ノシケタ　ヘネ、　ニワトリ　チカプ　ハウ　コロ　イタ　ヘネ、　クンネイワノ　イタ　ヘネ、　エチ　エラムㇱカレ　ルウェ　ネ　クス　ネ　ナ:",
		alt: "Tambe kusu, siruwande yan: inambe kusu ne yakun, cisei kon nispa hembara ta ek ya, siri onuman ita hene, an nosiketa hene, niwatori cikap hau koro ita hene, kunneiwano ita hene, eci eramuskare ruwe ne kusu ne na:",
		native: "Therefore watch, for you cannot be sure when the Master of the house is coming - whether in the evening, at midnight, at daybreak, or in the morning -",
		words: [ 'タㇺベ', 'クス', 'シルワンデ', 'ヤン', 'イナㇺベ', 'クス', 'ネ', 'ヤクン', 'チセイ', 'コン', 'ニㇱパ', 'ヘㇺバラ', 'タ', 'エㇰ', 'ヤ', 'シリ', 'オヌマン', 'イタ', 'ヘネ', 'アン', 'ノシケタ', 'ヘネ', 'ニワトリ', 'チカプ', 'ハウ', 'コロ', 'イタ', 'ヘネ', 'クンネイワノ', 'イタ', 'ヘネ', 'エチ', 'エラムㇱカレ', 'ルウェ', 'ネ', 'クス', 'ネ', 'ナ' ],
		audio: "audio/mark.13/34.wav",
		quizWords: [ 'ノシケタ', 'ニワトリ' ]
	},
	{
		target: "イキネイペカ　イカ　シヌマ　エクㇱコンナ　エㇰ　ワ　エチ　モコロ　シリ　アヌカラ　ナ。",
		alt: "ikineipeka ika sinuma ekuskonna ek wa eci mokoro siri anukara na.",
		native: "otherwise he might come suddenly and find you asleep.",
		words: [ 'イキネイペカ', 'イカ', 'シヌマ', 'エクㇱコンナ', 'エㇰ', 'ワ', 'エチ', 'モコロ', 'シリ', 'アヌカラ', 'ナ' ],
		audio: "audio/mark.13/35.wav",
		quizWords: [ 'モコロ', 'イキネイペカ' ]
	},
	{
		target: "エチ　オッタ　ク　イェ　イタㇰ　オビッタノ　オカイ　ウタラ　オッタ　ク　イェ　シルワンデ　ヤン。",
		alt: "Eci otta Ku ye itak obittano okai utara otta Ku ye siruwande yan.",
		native: "And what I say to you I say to all - Watch!\"",
		words: [ 'エチ', 'オッタ', 'ク', 'イェ', 'イタㇰ', 'オビッタノ', 'オカイ', 'ウタラ', 'オッタ', 'ク', 'イェ', 'シルワンデ', 'ヤン' ],
		audio: "audio/mark.13/36.wav",
		quizSentence: true
	}
];
