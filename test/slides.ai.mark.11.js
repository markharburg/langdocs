const gLang = 'ai';
const gBook = 'Mark';
const gChap = '11';
const gMode = 'ai';
const gSpeed = '120';

const slideData =
[
	{
		target: "オロワ、　ネイ　ウタラ、　イェルサレㇺ　ネワ　ベッパゲ　ネワ　ベタニア　コタン　ウン、　カンラン　ウㇱ　ヌプリ　オロタ　カランゲノ　アラキ　チキ、　シヌマ　トゥ　コイカラ　ウタラ　オマンデ、　ワ　エネ　イタㇰヒ、",
		alt: "Orowa, ney utara, Yerusarem newa Betpage newa Betania kotan un, Kanran us nupuri orota karangeno araki ciki, sinuma tu koikara utara omande, wa ene itakhi,",
		native: "When they had almost reached Jerusalem, as far as Bethphage and Bethany, near the Mount of Olives, Jesus sent on two of his disciples. (and he said...)",
		words: [ 'オロワ', 'ネイ', 'ウタラ', 'イェルサレㇺ', 'ネワ', 'ベッパゲ', 'ネワ', 'ベタニア', 'コタン', 'ウン', 'カンラン', 'ウㇱ', 'ヌプリ', 'オロタ', 'カランゲノ', 'アラキ', 'チキ', 'シヌマ', 'トゥ', 'コイカラ', 'ウタラ', 'オマンデ', 'ワ', 'エネ', 'イタㇰヒ' ],
		audio: "audio/mark.11.0.wav"
	},
	{
		target: "「イクㇱタ　アン　コタン　オルン　パイェ　ヤン:　アイネ、　エチ　アフプ　コラン　イタ、　ナニ、　アイヌ　ナア　ソモ　オ、　アシリコテ　ワ　アン　ポン　ロバ　チコイキプ　エチ　ヌカラ　クス　ネ、　ネイ　アㇺベ　ピタ、　ヒネ　ニㇺバ　ワ　アラキ　ヤン。",
		alt: "\"Ikusta an kotan orun paye yan: aine, eci ahup koran ita, nani, ainu naa somo o, asirikote wa an pon roba cikoikip eci nukara kusu ne, ney ambe pita, hine nimba wa araki yan.",
		native: "\"Go to the village facing you,\" he said, \"and, as soon as you get there, you will find a foal tethered, which no one has ever ridden; untie it, and bring it.",
		words: [ 'イクㇱタ', 'アン', 'コタン', 'オルン', 'パイェ', 'ヤン', 'アイネ', 'エチ', 'アフプ', 'コラン', 'イタ', 'ナニ', 'アイヌ', 'ナア', 'ソモ', 'オ', 'アシリコテ', 'ワ', 'アン', 'ポン', 'ロバ', 'チコイキプ', 'エチ', 'ヌカラ', 'クス', 'ネ', 'ネイ', 'アㇺベ', 'ピタ', 'ヒネ', 'ニㇺバ', 'ワ', 'アラキ', 'ヤン' ],
		audio: "audio/mark.11.1.wav",
		quizWords: [ 'ピタ' ]
	},
	{
		target: "オロワノ、　ネン　カ、　「ヘマンダ　クス　ネイノ　エチ　キ　ヤ？」　アリ　アン　イタㇰ　アニ　イェ　グル　アン　ヤㇰ　アナㇰ　ネ、　「ウタラパ　コン　ルスイ、　オロワ、　ナニ　テダ　スイ　オマンデ　クス　ネ　ナ、」　アリ　イタㇰ　ヤン。」",
		alt: "Orowano, nen ka, \"Hemanda kusu neyno eci ki ya?\" ari an itak ani ye guru an yak anak ne, \'Utarapa kon rusui, orowa, nani teda sui omande kusu ne na\', ari itak yan.\"",
		native: "And, if anyone says to you \'Why are you doing that?\', say \'The Master wants it, and will be sure to send it back here at once.\'\"",
		words: [ 'オロワノ', 'ネン', 'カ', 'ヘマンダ', 'クス', 'ネイノ', 'エチ', 'キ', 'ヤ', 'アリ', 'アン', 'イタㇰ', 'アニ', 'イェ', 'グル', 'アン', 'ヤㇰ', 'アナㇰ', 'ネ', 'ウタラパ', 'コン', 'ルスイ', 'オロワ', 'ナニ', 'テダ', 'スイ', 'オマンデ', 'クス', 'ネ', 'ナ', 'アリ', 'イタㇰ', 'ヤン' ],
		audio: "audio/mark.11.2.wav",
		quizWords: [ 'スイ' ]
	},
	{
		target: "オロワ、　ネイ　ウタラ　パイェ、　アイネ、　ソイタ　チセイ　オカリ　ウン　ル　オッタ、　アパ　サマケタ、　アシリコテ　ワ　アン、　ポン　ロバ　ヌカラ、　アワ、　ピタ　ニサ　ルウェ　ネ。",
		alt: "Orowa, ney utara paye, aine, soita cisei okari un ru otta, apa samaketa, asirikote wa an, pon roba nukara, awa, pita nisa ruwe ne.",
		native: "The two disciples went, and, finding a foal tethered outside a door in the street, they untied it.",
		words: [ 'オロワ', 'ネイ', 'ウタラ', 'パイェ', 'アイネ', 'ソイタ', 'チセイ', 'オカリ', 'ウン', 'ル', 'オッタ', 'アパ', 'サマケタ', 'アシリコテ', 'ワ', 'アン', 'ポン', 'ロバ', 'ヌカラ', 'アワ', 'ピタ', 'ニサ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.11.3.wav"
	},
	{
		target: "オロワ、　ネイ　ウシケタ　ロㇱキ　グル　トゥムゲタ　オカイ　ウタラ　アナㇰ　ネ、　「ポン　ロバ　ピタ　グル、　ネプ　エチ　キ　ヤ？」　アリ　イタㇰ。",
		alt: "Orowa, ney usiketa roski guru tumugeta okai utara anak ne, \"Pon roba pita guru, nep eci ki ya?\" ari itak.",
		native: "Some of the bystanders said to them, \"What are you doing, untying the foal?\"",
		words: [ 'オロワ', 'ネイ', 'ウシケタ', 'ロㇱキ', 'グル', 'トゥムゲタ', 'オカイ', 'ウタラ', 'アナㇰ', 'ネ', 'ポン', 'ロバ', 'ピタ', 'グル', 'ネプ', 'エチ', 'キ', 'ヤ', 'アリ', 'イタㇰ' ],
		audio: "audio/mark.11.4.wav"
	},
	{
		target: "オロワ、　ネイ　ウタラ　イェス　イェ　コラチ　イタㇰ　ニサ　ルウェ　ネ:　アワ、　アオマンデ　ルウェ　ネ。",
		alt: "Orowa, ney utara Yesu ye koraci itak nisa ruwe ne: awa, aomande ruwe ne.",
		native: "And the two disciples answered as Jesus had told them; and they allowed them to go.",
		words: [ 'オロワ', 'ネイ', 'ウタラ', 'イェス', 'イェ', 'コラチ', 'イタㇰ', 'ニサ', 'ルウェ', 'ネ', 'アワ', 'アオマンデ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.11.5.wav"
	},
	{
		target: "オロワ、　ネイ　ウタラ　アナㇰ　ネ、　ネイ　ポン　ロバ　イェス　オッタ　ニㇺバ　ワ　アラキ、　アイゲ、　カシケタ　コロ　ミピ　アンデ;　オロワ、　シヌマ　オレ　ニサ　ルウェ　ネ。",
		alt: "Orowa, ney utara anak ne, ney pon roba Yesu otta nimba wa araki, aige, kasiketa koro mipi ande; orowa, sinuma ore nisa ruwe ne.",
		native: "Then they brought the foal to Jesus, and, when they had laid their cloaks on it, he seated himself on it.",
		words: [ 'オロワ', 'ネイ', 'ウタラ', 'アナㇰ', 'ネ', 'ネイ', 'ポン', 'ロバ', 'イェス', 'オッタ', 'ニㇺバ', 'ワ', 'アラキ', 'アイゲ', 'カシケタ', 'コロ', 'ミピ', 'アンデ', 'オロワ', 'シヌマ', 'オレ', 'ニサ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.11.6.wav",
		quizWords: [ 'アンデ' ]
	},
	{
		target: "オロワ、　インネ　ウタラ　アナㇰ　ネ、　コロ　ミピ　ル　カタ　ピラサ、　サマタ、　モシマ　ウタラ　オキㇺ　ワノ　ウイテㇰ　オトゥイバ　ワ　ピラㇱパ　ニサ　ルウェ　ネ　ナ。",
		alt: "Orowa, inne utara anak ne, koro mipi ru kata pirasa, samata, mosima utara okim wano uitek otuiba wa piraspa nisa ruwe ne na.",
		native: "Many of the people spread their cloaks on the road, while some strewed boughs which they had cut from the fields;",
		words: [ 'オロワ', 'インネ', 'ウタラ', 'アナㇰ', 'ネ', 'コロ', 'ミピ', 'ル', 'カタ', 'ピラサ', 'サマタ', 'モシマ', 'ウタラ', 'オキㇺ', 'ワノ', 'ウイテㇰ', 'オトゥイバ', 'ワ', 'ピラㇱパ', 'ニサ', 'ルウェ', 'ネ', 'ナ' ],
		audio: "audio/mark.11.7.wav",
		quizWords: [ 'モシマ', 'オトゥイバ' ]
	},
	{
		target: "オロワ、　イェス　コッチャオッ　パイェ　ウタラ　ヘㇺヘㇺ、　ネイ　オㇱ　アラキ　ウタラ　ヘㇺヘㇺ、　エネ　ハウェ　アㇱテヒ、　「ホサンナ;　ウタラパ　レイヘイ　アニ、　エㇰ　グㇽ　アナㇰ　ネ　アヌヌケ　ネ:",
		alt: "Orowa, Yesu kotcaot paye utara hemhem, ney os araki utara hemhem, ene hawe astehi, \"Hosanna; Utarapa reihei ani, ek gur anak ne anunuke ne:",
		native: "and those who led the way, as well as those who followed, kept shouting, \"God save him! Blessed is He who comes in the name of the Lord!",
		words: [ 'オロワ', 'イェス', 'コッチャオッ', 'パイェ', 'ウタラ', 'ヘㇺヘㇺ', 'ネイ', 'オㇱ', 'アラキ', 'ウタラ', 'ヘㇺヘㇺ', 'エネ', 'ハウェ', 'アㇱテヒ', 'ホサンナ', 'ウタラパ', 'レイヘイ', 'アニ', 'エㇰ', 'グㇽ', 'アナㇰ', 'ネ', 'アヌヌケ', 'ネ' ],
		audio: "audio/mark.11.8.wav",
		quizWords: [ 'オㇱ' ]
	},
	{
		target: "エㇰ　クㇱキ　モシリ、　エㇰ　クㇱキ　アコロ　ミチ　ダビダ　コロベ、　アヌヌケ　ネ:　イヨッタ　リクン　カンド　オッタ、　ホサンナ　アン　ナ」、　アリ　アン　ハウェ　アニ　ハウェ　アㇱテ　ニサ　ルウェ　ネ。",
		alt: "ek kuski mosiri, ek kuski akoro Mici Dabid korobe, anunuke ne: iyotta rikun kando otta, Hosanna an na\", ari an hawe ani hawe aste nisa ruwe ne.",
		native: "Blessed is the coming kingdom of our father David! God save him from on high!\"",
		words: [ 'エㇰ', 'クㇱキ', 'モシリ', 'エㇰ', 'クㇱキ', 'アコロ', 'ミチ', 'ダビダ', 'コロベ', 'アヌヌケ', 'ネ', 'イヨッタ', 'リクン', 'カンド', 'オッタ', 'ホサンナ', 'アン', 'ナ', 'アリ', 'アン', 'ハウェ', 'アニ', 'ハウェ', 'アㇱテ', 'ニサ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.11.9.wav",
		quizWords: [ 'クㇱキ' ]
	},
	{
		target: "オロワ、　シヌマ　イェルサレㇺ　コタン　タ　オマン、　ワ　カムイ　コラ　ケンル　オルン　アフン;　アワ、　ネプ　ネ　ヤㇰカ　オッタ　エケㇱネ　インガラ　チキ、　タネ　シリ　オヌマン　コロ、　ネイ　トゥン　イカシマ　ワ　ニウ　トゥラノ、　ベタニア　コタン　オロタ　オマン　ニサ　ルウェ　ネ。",
		alt: "Orowa, sinuma Yerusarem kotan ta oman, wa Kamui kora kenru orun ahun; awa, nep ne yakka otta ekesne ingara ciki, tane siri onuman koro, ney tun ikasima wa niu turano, Betania kotan orota oman nisa ruwe ne.",
		native: "Jesus entered Jerusalem, and went into the Temple Courts; and, after looking around at everything, as it was already late, he went out to Bethany with the Twelve.",
		words: [ 'オロワ', 'シヌマ', 'イェルサレㇺ', 'コタン', 'タ', 'オマン', 'ワ', 'カムイ', 'コラ', 'ケンル', 'オルン', 'アフン', 'アワ', 'ネプ', 'ネ', 'ヤㇰカ', 'オッタ', 'エケㇱネ', 'インガラ', 'チキ', 'タネ', 'シリ', 'オヌマン', 'コロ', 'ネイ', 'トゥン', 'イカシマ', 'ワ', 'ニウ', 'トゥラノ', 'ベタニア', 'コタン', 'オロタ', 'オマン', 'ニサ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.11.10.wav"
	},
	{
		target: "オロワノ、　ネイ　シㇺゲ　トホ　タ、　ベタニア　コタン　ワ　ソユㇺバ　イタ、　シヌマ　イベ　ルスイ、",
		alt: "Orowano, ney simge toho ta, Betania kotan wa soyumba ita, sinuma ibe rusui,",
		native: "The next day, after they had left Bethany, Jesus became hungry;",
		words: [ 'オロワノ', 'ネイ', 'シㇺゲ', 'トホ', 'タ', 'ベタニア', 'コタン', 'ワ', 'ソユㇺバ', 'イタ', 'シヌマ', 'イベ', 'ルスイ' ],
		audio: "audio/mark.11.11.wav"
	},
	{
		target: "アワ、　エハンゲコノ　アン　ウシケタ、　ハㇺ　オ　イチイィク　チクニ　ヌカラ、　アイゲ、　ネプカ　イベヘ　アオ　クニ　ラム　ワ　オロタ　エㇰ:　アワ、　オッタ　エㇰ　チキ、　ハㇺ　モシマ　ネプ　ネ　ヤㇰカ　イサㇺ　ルウェ　ネ;　イベ　オ　クニ、　パ　ソモ　ネ　ルウェ　ネ　クス　ネ　ナ。",
		alt: "awa, ehangekono an usiketa, ham o icijiku cikuni nukara, aige, nepka ibehe ao kuni ramu wa orota ek: awa, otta ek ciki, ham mosima nep ne yakka isam ruwe ne; ibe o kuni, pa somo ne ruwe ne kusu ne na.",
		native: "and, noticing a fig tree at a distance in leaf, he went to it to see if by any chance he could find something on it; but, on coming up to it, he found nothing but leaves, for it was not the season for figs.",
		words: [ 'アワ', 'エハンゲコノ', 'アン', 'ウシケタ', 'ハㇺ', 'オ', 'イチイィク', 'チクニ', 'ヌカラ', 'アイゲ', 'ネプカ', 'イベヘ', 'アオ', 'クニ', 'ラム', 'ワ', 'オロタ', 'エㇰ', 'アワ', 'オッタ', 'エㇰ', 'チキ', 'ハㇺ', 'モシマ', 'ネプ', 'ネ', 'ヤㇰカ', 'イサㇺ', 'ルウェ', 'ネ', 'イベ', 'オ', 'クニ', 'パ', 'ソモ', 'ネ', 'ルウェ', 'ネ', 'クス', 'ネ', 'ナ' ],
		audio: "audio/mark.11.12.wav",
		quizWords: [ 'アオ' ]
	},
	{
		target: "シヌマ　エセ　ワ　ネイ　チクニ　オッタ　エネ　イタㇰヒ、　「ネン　ネ　ヤㇰカ、　テワノ　ヘㇺバラ　パㇰノ　ネ　ヤㇰカ、　エアニ　オロワノ　ヘトゥク　ニカオプ、　イテキ　イベ　ヤン」、　アリ　イタㇰ。　ネイ　コイカラ　ウタラ　タン　イタㇰ　ヌ　ニサ　ルウェ　ネ　ナ。",
		alt: "sinuma ese wa ney cikuni otta ene itakhi, \"Nen ne yakka, tewano hembara pakno ne yakka, eani orowano hetuku nikaop, iteki ibe yan\", ari itak. Ney koikara utara tan itak nu nisa ruwe ne na.",
		native: "So, addressing the tree, he exclaimed, \"May no one ever again eat of your fruit!\" And his disciples heard what he said.",
		words: [ 'シヌマ', 'エセ', 'ワ', 'ネイ', 'チクニ', 'オッタ', 'エネ', 'イタㇰヒ', 'ネン', 'ネ', 'ヤㇰカ', 'テワノ', 'ヘㇺバラ', 'パㇰノ', 'ネ', 'ヤㇰカ', 'エアニ', 'オロワノ', 'ヘトゥク', 'ニカオプ', 'イテキ', 'イベ', 'ヤン', 'アリ', 'イタㇰ', 'ネイ', 'コイカラ', 'ウタラ', 'タン', 'イタㇰ', 'ヌ', 'ニサ', 'ルウェ', 'ネ', 'ナ' ],
		audio: "audio/mark.11.13.wav",
		quizWords: [ 'ヘトゥク', 'ニカオプ' ]
	},
	{
		target: "オロワ、　イェルサレㇺ　コタン　タ　アラキ;　アワ、　カムイ　コラ　ケンル　オルン　アフン、　ワ　ネイ　オシケタ、　エイホㇰ　ウタラ　ネワ　ホㇰ　ウタラ　エソユㇺバレ　ヘアシ、　サマタ、　イチェン　イタサリ　ウタラ　コロ　セッ　ヘネ、　クスウェプ　エイホㇰ　ウタラ　コロ　セッ　ヘネ　ホクㇱテ　ニサ　ルウェ　ネ;",
		alt: "Orowa, Yerusarem kotan ta araki; awa, Kamui kora kenru orun ahun, wa ney osiketa, eihok utara newa hok utara esoyumbare heasi, samata, icen itasari utara koro set hene, kusuwep eihok utara koro set hene hokuste nisa ruwe ne;",
		native: "They came to Jerusalem. Jesus went into the Temple Courts, and began to drive out those who were buying and selling there. He overturned the tables of the money changers, and the seats of the pigeon-dealers,",
		words: [ 'オロワ', 'イェルサレㇺ', 'コタン', 'タ', 'アラキ', 'アワ', 'カムイ', 'コラ', 'ケンル', 'オルン', 'アフン', 'ワ', 'ネイ', 'オシケタ', 'エイホㇰ', 'ウタラ', 'ネワ', 'ホㇰ', 'ウタラ', 'エソユㇺバレ', 'ヘアシ', 'サマタ', 'イチェン', 'イタサリ', 'ウタラ', 'コロ', 'セッ', 'ヘネ', 'クスウェプ', 'エイホㇰ', 'ウタラ', 'コロ', 'セッ', 'ヘネ', 'ホクㇱテ', 'ニサ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.11.14.wav",
		quizWords: [ 'イチェン', 'ホクㇱテ' ]
	},
	{
		target: "オロワ、　ネン　ネ　ヤㇰカ、　オロオマプ　アニ、　ワ　カムイ　コラ　ケンル　クㇱ　ワ　オマン、　アㇺベ　ラムオㇱマ　ソモキ　ルウェ　ネ。",
		alt: "orowa, nen ne yakka, oroomap ani, wa Kamui kora kenru kus wa oman, ambe ramuosma somoki ruwe ne.",
		native: "and would not allow anyone to carry anything across the Temple Courts.",
		words: [ 'オロワ', 'ネン', 'ネ', 'ヤㇰカ', 'オロオマプ', 'アニ', 'ワ', 'カムイ', 'コラ', 'ケンル', 'クㇱ', 'ワ', 'オマン', 'アㇺベ', 'ラムオㇱマ', 'ソモキ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.11.15.wav",
		quizSentence: true
	},
	{
		target: "オロワ、　シヌマ　エパカㇱヌ　ワ　ウタラ　オッタ　エネ　イタㇰヒ、　「ク　コッ　チセイ　アナㇰ　ネ、　インギモシㇽ　ウン　ウタラ　クス　アン、　イノンノ　イタㇰ　チセイ　ネ、　アポロセ　クス　ネ、　セコㇽ　アㇺベ　チエシンヌイェ　ワ　アン、　ソモキ　ルウェ　ヘ　アン？　コロカ、　エチ　ウタラ　アナㇰ　ネ、　イㇰカ　ウタラ　チセイ　ネ　カン　ニサ　ルウェ　ネ　ナ」、　アリ　イタㇰ。",
		alt: "Orowa, sinuma epakasnu wa utara otta ene itakhi, \"\'Ku kot cisei anak ne, ingimosir un utara kusu an, inonno itak cisei ne, aporose kusu ne\', sekor ambe ciesinnuye wa an, somoki ruwe he an? Koroka, eci utara anak ne, ikka utara cisei ne kan nisa ruwe ne na\", ari itak.",
		native: "Then he began to teach. \"Does not scripture say,\" he asked, \"\'My house will be called a house of prayer for all the nations\'? But you have made it a den of robbers.\"",
		words: [ 'オロワ', 'シヌマ', 'エパカㇱヌ', 'ワ', 'ウタラ', 'オッタ', 'エネ', 'イタㇰヒ', 'ク', 'コッ', 'チセイ', 'アナㇰ', 'ネ', 'インギモシㇽ', 'ウン', 'ウタラ', 'クス', 'アン', 'イノンノ', 'イタㇰ', 'チセイ', 'ネ', 'アポロセ', 'クス', 'ネ', 'セコㇽ', 'アㇺベ', 'チエシンヌイェ', 'ワ', 'アン', 'ソモキ', 'ルウェ', 'ヘ', 'アン', 'コロカ', 'エチ', 'ウタラ', 'アナㇰ', 'ネ', 'イㇰカ', 'ウタラ', 'チセイ', 'ネ', 'カン', 'ニサ', 'ルウェ', 'ネ', 'ナ', 'アリ', 'イタㇰ' ],
		audio: "audio/mark.11.16.wav",
		quizWords: [ 'コッ' ]
	},
	{
		target: "オロワ、　カムイ　コラ　ケンル　エサパネ　ウタラ　ヘㇺヘㇺ、　カㇺピ　ヌイェ　ウタラ　ヘㇺヘㇺ、　ネイ　オルㇱペ　ヌ、　アワ、　シヌマ　イサㇺカ　クニ、　イカ　フナラ　ルウェ　ネ:　ネイ　ウタラ　シヌマ　コイシトマ　クス、　サマタ、　インネ　ウタラ　オビッタ　ネイ　エパカシ　エイヨクンヌレ　コラン　ニサ　ルウェ　ネ　クス　ネ　ナ。",
		alt: "Orowa, Kamui kora kenru esapane utara hemhem, kampi nuye utara hemhem, ney oruspe nu, awa, sinuma isamka kuni, ika hunara ruwe ne: ney utara sinuma koisitoma kusu, samata, inne utara obitta ney epakasi eiyokunnure koran nisa ruwe ne kusu ne na.",
		native: "Now the chief priests and the teachers of the Law heard this and began to look for some way of putting Jesus to death; for they were afraid of him, since all the people were greatly impressed by his teaching.",
		words: [ 'オロワ', 'カムイ', 'コラ', 'ケンル', 'エサパネ', 'ウタラ', 'ヘㇺヘㇺ', 'カㇺピ', 'ヌイェ', 'ウタラ', 'ヘㇺヘㇺ', 'ネイ', 'オルㇱペ', 'ヌ', 'アワ', 'シヌマ', 'イサㇺカ', 'クニ', 'イカ', 'フナラ', 'ルウェ', 'ネ', 'ネイ', 'ウタラ', 'シヌマ', 'コイシトマ', 'クス', 'サマタ', 'インネ', 'ウタラ', 'オビッタ', 'ネイ', 'エパカシ', 'エイヨクンヌレ', 'コラン', 'ニサ', 'ルウェ', 'ネ', 'クス', 'ネ', 'ナ' ],
		audio: "audio/mark.11.17.wav",
		quizWords: [ 'エイヨクンヌレ', 'エパカシ' ]
	},
	{
		target: "オロワ、　シリ　オヌマン　ランゲ、　ネイ　マチヤ　ワノ　アラパ　ニサ　ルウェ　ネ。",
		alt: "Orowa, siri onuman range, ney maciya wano arapa nisa ruwe ne.",
		native: "As soon as evening fell, Jesus and his disciples went out of the city.",
		words: [ 'オロワ', 'シリ', 'オヌマン', 'ランゲ', 'ネイ', 'マチヤ', 'ワノ', 'アラパ', 'ニサ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.11.18.wav"
	},
	{
		target: "オロワ、　クンネイワノ　シリクㇱ　コラン　イタ、　ネイ　イチイィク　チクニ　シンリッ　パㇰノ　スムㇺゲ　ワ　アン、　シリ　アヌカラ。",
		alt: "Orowa, kunneiwano sirikus koran ita, ney icijiku cikuni sinrit pakno sumumge wa an, siri anukara.",
		native: "As they passed by early in the morning, they noticed that the fig tree was withered up from the roots.",
		words: [ 'オロワ', 'クンネイワノ', 'シリクㇱ', 'コラン', 'イタ', 'ネイ', 'イチイィク', 'チクニ', 'シンリッ', 'パㇰノ', 'スムㇺゲ', 'ワ', 'アン', 'シリ', 'アヌカラ' ],
		audio: "audio/mark.11.19.wav",
		quizSentence: true
	},
	{
		target: "ペッロㇱ　ネイ　チクニ　クス　アン　オルㇱペ　エㇱカルン、　ワ　シヌマ　オロタ　エネ　イタㇰヒ、　「ラビビ、　インガㇽ　アン、　アオカイ　オイタクシ　イチイィク　チクニ、　スムㇺゲ　オケレ　ルウェ　ネ」、　セコロ　イタㇰ。",
		alt: "Petros ney cikuni kusu an oruspe eskarun, wa sinuma orota ene itakhi, \"Rabbi, ingar an, Aokai oitakusi icijiku cikuni, sumumge okere ruwe ne\", sekoro itak.",
		native: "Then Peter recalled what had occurred. \"Look, Rabbi,\" he exclaimed, \"the fig tree which you doomed is withered up!\"",
		words: [ 'ペッロㇱ', 'ネイ', 'チクニ', 'クス', 'アン', 'オルㇱペ', 'エㇱカルン', 'ワ', 'シヌマ', 'オロタ', 'エネ', 'イタㇰヒ', 'ラビビ', 'インガㇽ', 'アン', 'アオカイ', 'オイタクシ', 'イチイィク', 'チクニ', 'スムㇺゲ', 'オケレ', 'ルウェ', 'ネ', 'セコロ', 'イタㇰ' ],
		audio: "audio/mark.11.20.wav",
		quizSentence: true
	},
	{
		target: "イェス　エセ　ワ　オロタ　エネ　イタㇰヒ、　「カムイ　エイソコロ　ヤン。",
		alt: "Yesu ese wa orota ene itakhi, \"Kamui eisokoro yan.",
		native: "\"Have faith in God!\" replied Jesus.",
		words: [ 'イェス', 'エセ', 'ワ', 'オロタ', 'エネ', 'イタㇰヒ', 'カムイ', 'エイソコロ', 'ヤン' ],
		audio: "audio/mark.11.21.wav"
	},
	{
		target: "ソンノ、　エチ　オッタ　ク　イェ、　ネン　ネ　ヤㇰカ、　タン　ヌプリ　オッタ、　「エアニ　アウㇰ　ワ　アトゥイ　オシケタ　エ　アエヤプキリ　ヤン」、　アニ　アン　イタㇰ　アニ　イェ　チキ、　サマタ、　ケウトゥㇺ　タ　ウトゥマシ　ソモキノ　イェ　イタㇰ　コラチ、　ウウェアオマレ　クス　ネ、　セコㇽ　アㇺベ　エイソコロ　ヤクン、　アカラ　クス　ネ　ナ。",
		alt: "Sonno, eci otta Ku ye, nen ne yakka, tan nupuri otta, \'eani auk wa atui osiketa e aeyapkiri yan\', ani an itak ani ye ciki, samata, keutum ta utumasi somokino ye itak koraci, uweaomare kusu ne, sekor ambe eisokoro yakun, akara kusu ne na.",
		native: "\"I tell you that if anyone should say to this hill \'Be lifted up and hurled into the sea!\', without ever a doubt in his mind, but in the faith that what he says will be done, he would find that it would be.",
		words: [ 'ソンノ', 'エチ', 'オッタ', 'ク', 'イェ', 'ネン', 'ネ', 'ヤㇰカ', 'タン', 'ヌプリ', 'オッタ', 'エアニ', 'アウㇰ', 'ワ', 'アトゥイ', 'オシケタ', 'エ', 'アエヤプキリ', 'ヤン', 'アニ', 'アン', 'イタㇰ', 'アニ', 'イェ', 'チキ', 'サマタ', 'ケウトゥㇺ', 'タ', 'ウトゥマシ', 'ソモキノ', 'イェ', 'イタㇰ', 'コラチ', 'ウウェアオマレ', 'クス', 'ネ', 'セコㇽ', 'アㇺベ', 'エイソコロ', 'ヤクン', 'アカラ', 'クス', 'ネ', 'ナ' ],
		audio: "audio/mark.11.22.wav",
		quizWords: [ 'アウㇰ', 'ソモキノ', 'アエヤプキリ' ]
	},
	{
		target: "タㇺベ　クス、　エチ　オッタ　ク　イェ、　ネプ　ネ　ヤㇰカ、　エチ　コロ　クニ　クス　コラㇺコロ　ワ　イノンノ　イタㇰ　チキ、　オビッタ　ネイ　オカイペ　エチ　コロ　クス　ネ、　アニ　エイソコロ　ヤン、　ヤクン、　アコレ　クス　ネ　ナ。",
		alt: "Tambe kusu, eci otta Ku ye, Nep ne yakka, eci koro kuni kusu koramkoro wa inonno itak ciki, obitta ney okaype eci koro kusu ne, ani eisokoro yan, yakun, akore kusu ne na.",
		native: "And therefore I say to you \'Have faith that whatever you ask for in prayer is already granted you, and you will find that it will be.\'",
		words: [ 'タㇺベ', 'クス', 'エチ', 'オッタ', 'ク', 'イェ', 'ネプ', 'ネ', 'ヤㇰカ', 'エチ', 'コロ', 'クニ', 'クス', 'コラㇺコロ', 'ワ', 'イノンノ', 'イタㇰ', 'チキ', 'オビッタ', 'ネイ', 'オカイペ', 'エチ', 'コロ', 'クス', 'ネ', 'アニ', 'エイソコロ', 'ヤン', 'ヤクン', 'アコレ', 'クス', 'ネ', 'ナ' ],
		audio: "audio/mark.11.23.wav",
		quizWords: [ 'コラㇺコロ' ]
	},
	{
		target: "オロワ、　カンド　オッタ　アン、　エチ　コロ　ミチ　アナㇰ　ネ、　エチ　コロ　チコカッパㇰ　トゥサレ　クニ　ネ、　ヘㇺバラ　ネ　ヤㇰカ、　エチ　ロㇱキ　ワ　イノンノ　イタㇰ　キ　イタ、　モシマ　グル　エチ　オッタ　キ　カッパㇰ　アン　ヤクン、　トゥサレ　ヤン。",
		alt: "Orowa, kando otta an, eci koro Mici anak ne, eci koro cikokatpak tusare kuni ne, hembara ne yakka, eci roski wa inonno itak ki ita, mosima guru eci otta ki katpak an yakun, tusare yan.",
		native: "\"And, whenever you stand up to pray, forgive any grievance that you have against anyone, so that your Father who is in heaven also may forgive you your offenses.\" [Note: Some later manuscripts add: But if you do not forgive, neither will your Father in heaven forgive your offenses. ]",
		words: [ 'オロワ', 'カンド', 'オッタ', 'アン', 'エチ', 'コロ', 'ミチ', 'アナㇰ', 'ネ', 'エチ', 'コロ', 'チコカッパㇰ', 'トゥサレ', 'クニ', 'ネ', 'ヘㇺバラ', 'ネ', 'ヤㇰカ', 'エチ', 'ロㇱキ', 'ワ', 'イノンノ', 'イタㇰ', 'キ', 'イタ', 'モシマ', 'グル', 'エチ', 'オッタ', 'キ', 'カッパㇰ', 'アン', 'ヤクン', 'トゥサレ', 'ヤン' ],
		audio: "audio/mark.11.24.wav",
		quizWords: [ 'トゥサレ', 'チコカッパㇰ' ]
	},
	{
		target: "オロワ、　スイ　シヌマ　ウタラ　イェルサレㇺ　コタン　タ　アラキ:　アワ、　イェス　カムイ　コラ　ケンル　ウプソロタ　アプカㇱ　コラン　イタ、　カムイ　コラ　ケンル　エサパネ　ウタラ　ネワ、　カㇺピ　ヌイェ　ウタラ　ネワ、　エカシ　ウタラ　トゥラ、　イェス　オロタ　アラキ:",
		alt: "Orowa, sui sinuma utara Yerusarem kotan ta araki: awa, Yesu Kamui kora kenru upsorota apkas koran ita, Kamui kora kenru esapane utara newa, kampi nuye utara newa, ekasi utara tura, Yesu orota araki:",
		native: "They came to Jerusalem again. While Jesus was walking about in the Temple Courts, the chief priests, the teachers of the Law, and the elders came up to him.",
		words: [ 'オロワ', 'スイ', 'シヌマ', 'ウタラ', 'イェルサレㇺ', 'コタン', 'タ', 'アラキ', 'アワ', 'イェス', 'カムイ', 'コラ', 'ケンル', 'ウプソロタ', 'アプカㇱ', 'コラン', 'イタ', 'カムイ', 'コラ', 'ケンル', 'エサパネ', 'ウタラ', 'ネワ', 'カㇺピ', 'ヌイェ', 'ウタラ', 'ネワ', 'エカシ', 'ウタラ', 'トゥラ', 'イェス', 'オロタ', 'アラキ' ],
		audio: "audio/mark.11.25.wav",
		quizSentence: true
	},
	{
		target: "アイゲ、　オロタ　エネ　イタㇰヒ、　「ネプ　モンヅㇺ　エ　コロ、　ワ　クス　タプ　オカイペ　エ　キ　ヤ？　タプ　オカイペ　エ　キ　クニ、　モンヅㇺ　エ　コレ　グル、　ネン　ネ　ルウェ　ヘ　アン」、　アリ　イタㇰ。",
		alt: "aige, orota ene itakhi, \"Nep mondum E koro, wa kusu tap okaype E ki ya? Tap okaype E ki kuni, mondum E kore guru, nen ne ruwe he an\", ari itak.",
		native: "\"What authority have you to do these things?\" they said. \"Who gave you the authority to do them?\"",
		words: [ 'アイゲ', 'オロタ', 'エネ', 'イタㇰヒ', 'ネプ', 'モンヅㇺ', 'エ', 'コロ', 'ワ', 'クス', 'タプ', 'オカイペ', 'エ', 'キ', 'ヤ', 'タプ', 'オカイペ', 'エ', 'キ', 'クニ', 'モンヅㇺ', 'エ', 'コレ', 'グル', 'ネン', 'ネ', 'ルウェ', 'ヘ', 'アン', 'アリ', 'イタㇰ' ],
		audio: "audio/mark.11.26.wav",
		quizWords: [ 'モンヅㇺ' ]
	},
	{
		target: "オロワ、　ネイ　ウタラ　オッタ　イェス　エネ　イタㇰヒ、　「クアニ、　シネ　イタㇰ　エチ　オッタ　ク　ヌ　クス　ネ、　エチ　ウタラ　エン　オルン　エセ　イタㇰ　キ　ヤクン、　クアニ、　ネプ　モンヅㇺ　ク　ゴロ、　ワ　クス、　タプ　オカイペ　キ　ヤ、　エチ　ヌレ　アㇱ　クス　ネ。",
		alt: "Orowa, ney utara otta Yesu ene itakhi, \"Kuani, sine itak eci otta Ku nu kusu ne, eci utara En orun ese itak ki yakun, Kuani, nep mondum Ku goro, wa kusu, tap okaype ki ya, eci nure as kusu ne.",
		native: "\"I will put one question to you,\" said Jesus. \"Answer me that, and then I will tell you what authority I have to act as I do.",
		words: [ 'オロワ', 'ネイ', 'ウタラ', 'オッタ', 'イェス', 'エネ', 'イタㇰヒ', 'クアニ', 'シネ', 'イタㇰ', 'エチ', 'オッタ', 'ク', 'ヌ', 'クス', 'ネ', 'エチ', 'ウタラ', 'エン', 'オルン', 'エセ', 'イタㇰ', 'キ', 'ヤクン', 'クアニ', 'ネプ', 'モンヅㇺ', 'ク', 'ゴロ', 'ワ', 'クス', 'タプ', 'オカイペ', 'キ', 'ヤ', 'エチ', 'ヌレ', 'アㇱ', 'クス', 'ネ' ],
		audio: "audio/mark.11.27.wav",
		quizSentence: true
	},
	{
		target: "ヨアンネㇱ　コレ　バプチㇱマ　アナㇰ　ネ、　カンド　オロワノ　エㇰベ　ネ　ルウェ、　アイヌ　オロワノ　エㇰベ　ネ　ルウェ？　エン　オルン　エセ　ヤン。」",
		alt: "Yoannes kore baptisma anak ne, kando orowano ekbe ne ruwe, ainu orowano ekbe ne ruwe? En orun ese yan.\"",
		native: "It is about John\'s baptism. Was it of divine or human origin? Answer me that.\"",
		words: [ 'ヨアンネㇱ', 'コレ', 'バプチㇱマ', 'アナㇰ', 'ネ', 'カンド', 'オロワノ', 'エㇰベ', 'ネ', 'ルウェ', 'アイヌ', 'オロワノ', 'エㇰベ', 'ネ', 'ルウェ', 'エン', 'オルン', 'エセ', 'ヤン' ],
		audio: "audio/mark.11.28.wav",
		quizSentence: true
	},
	{
		target: "オロワ、　ネイ　ウタラ　ウタㇱパ　ウパオレ　ワ　エネ　イタㇰヒ　「カンド　オロワノ　エㇰベ　ネ　アニ、　チ　イェ　コ　アナㇰ　ネ、　ヤクン、　ネプ　クス　エチ　ウタラ　シヌマ　エイソコロ　ソモキ　ヤ？　アリ　アン　イタㇰ　アニ　シヌマ　イェ　ナンゴロ。",
		alt: "Orowa, ney utara utaspa upaore wa ene itakhi \"Kando orowano ekbe ne ani, ci ye ko anak ne, yakun, nep kusu eci utara sinuma eisokoro somoki ya? ari an itak ani sinuma ye nangoro.",
		native: "They began arguing together. \"If we say \'divine,\' he will say \'Why then didn\'t you believe him?\'",
		words: [ 'オロワ', 'ネイ', 'ウタラ', 'ウタㇱパ', 'ウパオレ', 'ワ', 'エネ', 'イタㇰヒ', 'カンド', 'オロワノ', 'エㇰベ', 'ネ', 'アニ', 'チ', 'イェ', 'コ', 'アナㇰ', 'ネ', 'ヤクン', 'ネプ', 'クス', 'エチ', 'ウタラ', 'シヌマ', 'エイソコロ', 'ソモキ', 'ヤ', 'アリ', 'アン', 'イタㇰ', 'アニ', 'シヌマ', 'イェ', 'ナンゴロ' ],
		audio: "audio/mark.11.29.wav",
		quizSentence: true
	},
	{
		target: "コロカ、　アイヌ　オロワノ　エㇰベ　ネ　アニ、　チ　イェ　チキ、　ウタラ　コイシトマ:　ヨアンネㇱ　アナㇰ　ネ　ウウェインカラ　グル　ネ　アニ、　ウタラ　オビッタ　エイソコン　ニサ　ルウェ　ネ　クス　ネ　ナ。」",
		alt: "Koroka, ainu orowano ekbe ne ani, ci ye ciki, Utara koisitoma: Yoannes anak ne uweinkara guru ne ani, utara obitta eisokon nisa ruwe ne kusu ne na.\"",
		native: "Yet can we say \'human\'?\" (translation confusion - \'if WE say it, WE are afraid\') They were afraid of the people, for everyone regarded John as undoubtedly a prophet.",
		words: [ 'コロカ', 'アイヌ', 'オロワノ', 'エㇰベ', 'ネ', 'アニ', 'チ', 'イェ', 'チキ', 'ウタラ', 'コイシトマ', 'ヨアンネㇱ', 'アナㇰ', 'ネ', 'ウウェインカラ', 'グル', 'ネ', 'アニ', 'ウタラ', 'オビッタ', 'エイソコン', 'ニサ', 'ルウェ', 'ネ', 'クス', 'ネ', 'ナ' ],
		audio: "audio/mark.11.30.wav",
		quizSentence: true
	},
	{
		target: "オロワ、　イェス　オッタ、　「チ　エラムㇱカレ」、　アニ　エセ　イタㇰ　キ　ニサ　ルウェ　ネ。　オロタ　イェス　エネ　イタㇰヒ、　「ネプ　モンヅㇺ　ク　ゴロ、　ワ　クス　タプ　オカイペ　ク　キ　ヤ　ヘネ、　ソモ　エチ　ヌレ　アㇱ　ナ」、　アリ　イタㇰ。",
		alt: "Orowa, Yesu otta, \"ci eramuskare\", ani ese itak ki nisa ruwe ne. Orota Yesu ene itakhi, \"Nep mondum Ku goro, wa kusu tap okaype Ku ki ya hene, somo eci nure as na\", ari itak.",
		native: "So their answer to Jesus was - \"We do not know.\" \"Then I,\" replied Jesus, \"refuse to tell you what authority I have to do these things.\"",
		words: [ 'オロワ', 'イェス', 'オッタ', 'チ', 'エラムㇱカレ', 'アニ', 'エセ', 'イタㇰ', 'キ', 'ニサ', 'ルウェ', 'ネ', 'オロタ', 'イェス', 'エネ', 'イタㇰヒ', 'ネプ', 'モンヅㇺ', 'ク', 'ゴロ', 'ワ', 'クス', 'タプ', 'オカイペ', 'ク', 'キ', 'ヤ', 'ヘネ', 'ソモ', 'エチ', 'ヌレ', 'アㇱ', 'ナ', 'アリ', 'イタㇰ' ],
		audio: "audio/mark.11.31.wav",
		quizSentence: true
	}
];
