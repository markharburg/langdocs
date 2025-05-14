const gLang = 'ai';
const gBook = 'Mark';
const gChap = '16';
const gMode = 'ai';
const gSpeed = '120';

const slideData =
[
	{
		target: "オロワ、　シニ　トホ　オケレ　チキ　マㇰダレネ　ウン　マリア　ネワ　ヤコブ　コロ　ハボ　マリア　アナㇰ　ネ　サロメ　ウトゥラ　ヒネ　アニ　シヌマ　カシ　オタ　クス　ピリカ　フラ　ウㇱベ　コロ　ワ　アラキ。",
		alt: "Orowa, sini toho okere ciki Makdarene un Maria newa Yakob koro habo Maria anak ne Sarome utura hine ani sinuma kasi ota kusu pirika hura usbe koro wa araki.",
		native: "When the Sabbath was over, Mary of Magdala, Mary the mother of James, and Salome bought some spices, so that they might go and anoint the body of Jesus.",
		words: [ 'オロワ', 'シニ', 'トホ', 'オケレ', 'チキ', 'マㇰダレネ', 'ウン', 'マリア', 'ネワ', 'ヤコブ', 'コロ', 'ハボ', 'マリア', 'アナㇰ', 'ネ', 'サロメ', 'ウトゥラ', 'ヒネ', 'アニ', 'シヌマ', 'カシ', 'オタ', 'クス', 'ピリカ', 'フラ', 'ウㇱベ', 'コロ', 'ワ', 'アラキ' ],
		audio: "./rsrc/ai/Mark/16/audio/120/0.wav",
		quizWords: [ 'シニ', 'フラ' ]
	},
	{
		target: "アワ、　シニ　トホ　エシㇺゲノ　アン　トホ　タ　アロ―クンネイワノ　アン　イタ、　チゥプ　ヘトゥク　チキ　トゥシリ　オロタ　アラキ　ニサ　ルウェ　ネ。",
		alt: "Awa, sini toho esimgeno an toho ta aro-kunneiwano an ita, cup hetuku ciki tusiri orota araki nisa ruwe ne.",
		native: "Very early on the first day of the week they went to the tomb, after sunrise.",
		words: [ 'アワ', 'シニ', 'トホ', 'エシㇺゲノ', 'アン', 'トホ', 'タ', 'アロ', 'クンネイワノ', 'アン', 'イタ', 'チゥプ', 'ヘトゥク', 'チキ', 'トゥシリ', 'オロタ', 'アラキ', 'ニサ', 'ルウェ', 'ネ' ],
		audio: "./rsrc/ai/Mark/16/audio/120/1.wav",
		quizWords: [ 'ヘトゥク', 'トゥシリ' ]
	},
	{
		target: "アイゲ、　ウン　クス　トゥシリ　アパ　ワノ　スマ　オヤㇰタ　コカラカラセレ　グル　フンナ　ルウェ？　アリ　イタㇰ;",
		alt: "Aige, un kusu tusiri apa wano suma oyakta kokarakarasere guru hunna ruwe? ari itak;",
		native: "They were saying to one another, \"Who will roll away the stone for us from the entrance of the tomb?\"",
		words: [ 'アイゲ', 'ウン', 'クス', 'トゥシリ', 'アパ', 'ワノ', 'スマ', 'オヤㇰタ', 'コカラカラセレ', 'グル', 'フンナ', 'ルウェ', 'アリ', 'イタㇰ' ],
		audio: "./rsrc/ai/Mark/16/audio/120/2.wav",
		quizWords: [ 'オヤㇰタ', 'スマ' ]
	},
	{
		target: "アイゲ、　ヘプニ　インガラ　チキ、　ネイ　スマ　オヤケ　ウン　コカラカラセ　ワ　アン、　アニ　ヌカラ;　ネイ　アㇺベ　シリ　ポロベ　ネ　クス　ネ　ナ。",
		alt: "aige, hepuni ingara ciki, ney suma oyake un kokarakarase wa an, ani nukara; ney ambe siri porobe ne kusu ne na.",
		native: "But, on looking up, they saw that the stone had already been rolled back; it was a very large one.",
		words: [ 'アイゲ', 'ヘプニ', 'インガラ', 'チキ', 'ネイ', 'スマ', 'オヤケ', 'ウン', 'コカラカラセ', 'ワ', 'アン', 'アニ', 'ヌカラ', 'ネイ', 'アㇺベ', 'シリ', 'ポロベ', 'ネ', 'クス', 'ネ', 'ナ' ],
		audio: "./rsrc/ai/Mark/16/audio/120/3.wav",
		quizSentence: true
	},
	{
		target: "オロワノ、　トゥシリ　オッタ　アフプ　コロ　シモン　サマタ　ア　レタラ　ミピヒ　アミレ　ワ　アン　シネ　ウペン　アイヌ　アヌカラ;　アイゲ、　ネイ　ウタラ　キマテㇰ　ニサ　ルウェ　ネ。",
		alt: "Orowano, tusiri otta ahup koro simon samata a retara mipihi amire wa an sine upen ainu anukara; aige, ney utara kimatek nisa ruwe ne.",
		native: "Going into the tomb, they saw a young man sitting on their right, in a white robe, and they were dismayed; but he said to them,",
		words: [ 'オロワノ', 'トゥシリ', 'オッタ', 'アフプ', 'コロ', 'シモン', 'サマタ', 'ア', 'レタラ', 'ミピヒ', 'アミレ', 'ワ', 'アン', 'シネ', 'ウペン', 'アイヌ', 'アヌカラ', 'アイゲ', 'ネイ', 'ウタラ', 'キマテㇰ', 'ニサ', 'ルウェ', 'ネ' ],
		audio: "./rsrc/ai/Mark/16/audio/120/4.wav",
		quizWords: [ 'キマテㇰ' ]
	},
	{
		target: "オロワ、　ネイ　シウェンテプ　オッタ　シヌマ　エネ　イタㇰヒ、　イテキ　キマテㇰ　ヤン、　エチ　ウタラ　アナㇰ　ネ　ウタサ　チクニ　オッタ　ア　クンギ　コキㇰキㇰ　ナザレッ　コタン　ウン　イェス　エチ　フナラ　シリ　オカイ:　シヌマ　ヘトポ　ア　シㇰヌレ　ワ　テダ　イサマ、　ウタラ　シヌマ　アンデ　ウシケ　インガラ　ヤン！",
		alt: "Orowa, ney siwentep otta sinuma ene itakhi, Iteki kimatek yan, eci utara anak ne utasa cikuni otta a kungi kokikkik Nazaret kotan un Yesu eci hunara siri okai: sinuma hetopo a siknure wa teda isama, utara sinuma ande usike ingara yan!",
		native: "\"Do not be dismayed; you are looking for Jesus, the Nazarene, who has been crucified; he has risen, he is not here! Look! Here is the place where they laid him.",
		words: [ 'オロワ', 'ネイ', 'シウェンテプ', 'オッタ', 'シヌマ', 'エネ', 'イタㇰヒ', 'イテキ', 'キマテㇰ', 'ヤン', 'エチ', 'ウタラ', 'アナㇰ', 'ネ', 'ウタサ', 'チクニ', 'オッタ', 'ア', 'クンギ', 'コキㇰキㇰ', 'ナザレッ', 'コタン', 'ウン', 'イェス', 'エチ', 'フナラ', 'シリ', 'オカイ', 'シヌマ', 'ヘトポ', 'ア', 'シㇰヌレ', 'ワ', 'テダ', 'イサマ', 'ウタラ', 'シヌマ', 'アンデ', 'ウシケ', 'インガラ', 'ヤン' ],
		audio: "./rsrc/ai/Mark/16/audio/120/5.wav",
		quizWords: [ 'アンデ', 'コキㇰキㇰ', 'ウシケ' ]
	},
	{
		target: "コロカ、　エチ　パイェ　ワシヌマ　アナㇰ　ネ　エチ　コッチャオッ　ガリラヤ　モシリ　ウン　オマン　ルウェ　ネ、　エチ　オッタ　イェ　コラチ　ネイ　モシリ　タ　エチ　ヌカラ　クス　ネ、　アリ　アン　イタㇰ　アニ　コロ　コイカラ　ウタラ　ネワ　ペッロㇱ　オッタ　イェ　ヤン、　アリ　イタㇰ。",
		alt: "Koroka, eci paye wasinuma anak ne eci kotcaot Gariraya mosiri un oman ruwe ne, eci otta ye koraci ney mosiri ta eci nukara kusu ne, ari an itak ani koro koikara utara newa Petros otta ye yan, ari itak.",
		native: "But go, and say to his disciples and to Peter \'He is going before you into Galilee; there you will see him, as he told you.\'\"",
		words: [ 'コロカ', 'エチ', 'パイェ', 'ワシヌマ', 'アナㇰ', 'ネ', 'エチ', 'コッチャオッ', 'ガリラヤ', 'モシリ', 'ウン', 'オマン', 'ルウェ', 'ネ', 'エチ', 'オッタ', 'イェ', 'コラチ', 'ネイ', 'モシリ', 'タ', 'エチ', 'ヌカラ', 'クス', 'ネ', 'アリ', 'アン', 'イタㇰ', 'アニ', 'コロ', 'コイカラ', 'ウタラ', 'ネワ', 'ペッロㇱ', 'オッタ', 'イェ', 'ヤン', 'アリ', 'イタㇰ' ],
		audio: "./rsrc/ai/Mark/16/audio/120/6.wav",
		quizSentence: true
	},
	{
		target: "オロワノ、　ネイ　ウタラ　ソユㇺバ　ワ　トゥシリ　ワノ　キラ　ニサ　ルウェ　ネ:　イナㇺベ　クス　ネ　ヤクン、　ネイ　ウタラ　トゥスㇱケ　ヘㇺヘㇺ　キ、　ホマトゥ　ヘㇺヘㇺ　キ　ルウェ　ネ　クス　ネ　ナ;　オロワ、　ネン　イェ　ヤㇰカ　オッタ　ネプ　カ　イェ　ソモキ:　イシトマ　ニサ　ルウェ　ネ　クス　ネ　ナ。",
		alt: "Orowano, ney utara soyumba wa tusiri wano kira nisa ruwe ne: inambe kusu ne yakun, ney utara tususke hemhem ki, homatu hemhem ki ruwe ne kusu ne na; orowa, nen ye yakka otta nep ka ye somoki: isitoma nisa ruwe ne kusu ne na.",
		native: "They went out, and fled from the tomb, for they were trembling and bewildered; and they did not say a word to anyone, for they were frightened.",
		words: [ 'オロワノ', 'ネイ', 'ウタラ', 'ソユㇺバ', 'ワ', 'トゥシリ', 'ワノ', 'キラ', 'ニサ', 'ルウェ', 'ネ', 'イナㇺベ', 'クス', 'ネ', 'ヤクン', 'ネイ', 'ウタラ', 'トゥスㇱケ', 'ヘㇺヘㇺ', 'キ', 'ホマトゥ', 'ヘㇺヘㇺ', 'キ', 'ルウェ', 'ネ', 'クス', 'ネ', 'ナ', 'オロワ', 'ネン', 'イェ', 'ヤㇰカ', 'オッタ', 'ネプ', 'カ', 'イェ', 'ソモキ', 'イシトマ', 'ニサ', 'ルウェ', 'ネ', 'クス', 'ネ', 'ナ' ],
		audio: "./rsrc/ai/Mark/16/audio/120/7.wav",
		quizSentence: true
	},
	{
		target: "オロサマ、　シニ　トホ　エシㇺゲ　トホ　タ　アロ―クンネイ　ワノ　シヌマ　ヘトポ　シㇰヌ　ワ　アン　イタ、　オロワノ　アラワン　ニッネ　カムイ　オアシンゲ　マㇰダレネ　ウン　マリア　オッタ　ホシキノ　ヤイヌカラ。",
		alt: "Orosama, sini toho esimge toho ta aro-kunnei wano sinuma hetopo siknu wa an ita, orowano arawan nitne kamui oasinge Makdarene un Maria otta hosikino yainukara.",
		native: "After his rising again, early on the first day of the week, Jesus appeared first of all to Mary of Magdala, from whom he had driven out seven demons.",
		words: [ 'オロサマ', 'シニ', 'トホ', 'エシㇺゲ', 'トホ', 'タ', 'アロ', 'クンネイ', 'ワノ', 'シヌマ', 'ヘトポ', 'シㇰヌ', 'ワ', 'アン', 'イタ', 'オロワノ', 'アラワン', 'ニッネ', 'カムイ', 'オアシンゲ', 'マㇰダレネ', 'ウン', 'マリア', 'オッタ', 'ホシキノ', 'ヤイヌカラ' ],
		audio: "./rsrc/ai/Mark/16/audio/120/8.wav",
		quizWords: [ 'ニッネ', 'シㇰヌ' ]
	},
	{
		target: "ネイ　グル　アナㇰ　ネ　ホシキノ、　シヌマ　トゥラノ　オカイ　ヤイトゥワㇱカラプ　ヘㇺヘㇺ　キ、　チㇱ　ヘㇺヘㇺ　キ　シリ　オカイ　ウタラ　オッタ　オマン　ワ　ヌレ　ニサ　ルウェ　ネ。",
		alt: "Ney guru anak ne hosikino, sinuma turano okai yaituwaskarap hemhem ki, cis hemhem ki siri okai utara otta oman wa nure nisa ruwe ne.",
		native: "She went and told the news to those who had been with him and who were now in sorrow and tears;",
		words: [ 'ネイ', 'グル', 'アナㇰ', 'ネ', 'ホシキノ', 'シヌマ', 'トゥラノ', 'オカイ', 'ヤイトゥワㇱカラプ', 'ヘㇺヘㇺ', 'キ', 'チㇱ', 'ヘㇺヘㇺ', 'キ', 'シリ', 'オカイ', 'ウタラ', 'オッタ', 'オマン', 'ワ', 'ヌレ', 'ニサ', 'ルウェ', 'ネ' ],
		audio: "./rsrc/ai/Mark/16/audio/120/9.wav",
		quizSentence: true
	},
	{
		target: "アワ、　ネイ　ウタラ　アナㇰ　シヌマ　シㇰヌ　ワ　アン、　アイゲ、　ネイ　シウェンテプ　オロワノ　アヌカラ　セコㇽ　オルㇱペ　ヌ　コロ、　エウㇺビプカ　ニサ　ルウェ　ネ。",
		alt: "Awa, ney utara anak sinuma siknu wa an, aige, ney siwentep orowano anukara sekor oruspe nu koro, eumbipka nisa ruwe ne.",
		native: "yet even they, when they heard that he was alive and had been seen by her, did not believe it.",
		words: [ 'アワ', 'ネイ', 'ウタラ', 'アナㇰ', 'シヌマ', 'シㇰヌ', 'ワ', 'アン', 'アイゲ', 'ネイ', 'シウェンテプ', 'オロワノ', 'アヌカラ', 'セコㇽ', 'オルㇱペ', 'ヌ', 'コロ', 'エウㇺビプカ', 'ニサ', 'ルウェ', 'ネ' ],
		audio: "./rsrc/ai/Mark/16/audio/120/10.wav",
		quizSentence: true
	},
	{
		target: "タプ　オカイペ　アン　オカケタ　ネイ　ウタラ　トゥムゲ　ウン　トゥ　ニウ　キㇺ　タ　アプカㇱ　ラポケタ、　オヤ　カトゥフ　コロ　ヒネ　オッタ　シヌマ　ヤイヌカラ　ニサ　ルウェ　ネ。",
		alt: "Tap okaype an okaketa ney utara tumuge un tu niu kim ta apkas rapoketa, oya katuhu koro hine otta sinuma yainukara nisa ruwe ne.",
		native: "Afterward, altered in appearance, he made himself known to two of them, as they were walking, on their way into the country.",
		words: [ 'タプ', 'オカイペ', 'アン', 'オカケタ', 'ネイ', 'ウタラ', 'トゥムゲ', 'ウン', 'トゥ', 'ニウ', 'キㇺ', 'タ', 'アプカㇱ', 'ラポケタ', 'オヤ', 'カトゥフ', 'コロ', 'ヒネ', 'オッタ', 'シヌマ', 'ヤイヌカラ', 'ニサ', 'ルウェ', 'ネ' ],
		audio: "./rsrc/ai/Mark/16/audio/120/11.wav",
		quizWords: [ 'カトゥフ', 'ラポケタ', 'トゥムゲ' ]
	},
	{
		target: "アワ、　ネイ　ウタラ　パイェ　ワ　モシマ　オカイ　ウタラ　ヌレ;　ヤㇰカ、　ネイ　ウタラ　ネ　ヤㇰカ　エイソコロ　ソモキ　ニサ　ルウェ　ネ。",
		alt: "Awa, ney utara paye wa mosima okai utara nure; yakka, ney utara ne yakka eisokoro somoki nisa ruwe ne.",
		native: "They also went and told the rest, but they did not believe even them.",
		words: [ 'アワ', 'ネイ', 'ウタラ', 'パイェ', 'ワ', 'モシマ', 'オカイ', 'ウタラ', 'ヌレ', 'ヤㇰカ', 'ネイ', 'ウタラ', 'ネ', 'ヤㇰカ', 'エイソコロ', 'ソモキ', 'ニサ', 'ルウェ', 'ネ' ],
		audio: "./rsrc/ai/Mark/16/audio/120/12.wav",
		quizWords: [ 'モシマ' ]
	},
	{
		target: "オロワ、　オカケタ、　ネイ　シネン　イカシマ　ワ　ニウ　イベ　クス　ロㇰ　ワ　オカイ　ラポケタ　オッタ　シヌマ　アヌカン　ニサ　ルウェ　ネ;　アワ、　ネイ　ウタラ　サㇺベ　ニㇱテ　エイソコㇽ――イ　サㇰ　クス　コサカヨカラ　ルウェ　ネ、　ヘトポ　ア　シㇰヌレ　オカケタ　シヌマ　ヌカラ　ウタラ　エイソコロ　ソモキ　ニサ　ルウェ　ネ　クス　ネ　ナ。",
		alt: "Orowa, okaketa, ney sinen ikasima wa niu ibe kusu rok wa okai rapoketa otta sinuma anukan nisa ruwe ne; awa, ney utara sambe niste eisokor--i sak kusu kosakayokara ruwe ne, hetopo a siknure okaketa sinuma nukara utara eisokoro somoki nisa ruwe ne kusu ne na.",
		native: "Later on, he made himself known to the Eleven themselves as they were at a meal, and reproached them with their want of faith and their stubbornness, because they did not believe those who had seen him after he had risen from the dead.",
		words: [ 'オロワ', 'オカケタ', 'ネイ', 'シネン', 'イカシマ', 'ワ', 'ニウ', 'イベ', 'クス', 'ロㇰ', 'ワ', 'オカイ', 'ラポケタ', 'オッタ', 'シヌマ', 'アヌカン', 'ニサ', 'ルウェ', 'ネ', 'アワ', 'ネイ', 'ウタラ', 'サㇺベ', 'ニㇱテ', 'エイソコㇽ', 'イ', 'サㇰ', 'クス', 'コサカヨカラ', 'ルウェ', 'ネ', 'ヘトポ', 'ア', 'シㇰヌレ', 'オカケタ', 'シヌマ', 'ヌカラ', 'ウタラ', 'エイソコロ', 'ソモキ', 'ニサ', 'ルウェ', 'ネ', 'クス', 'ネ', 'ナ' ],
		audio: "./rsrc/ai/Mark/16/audio/120/13.wav",
		quizWords: [ 'アヌカン', 'シネン', 'エイソコㇽ' ]
	},
	{
		target: "オロワ、　シヌマ　ネイ　ウタラ　オッタ　エネ　イタㇰヒ、　インギ　モシㇽ――オッタ　エチ　パイェ　ワ　オビッタノ　オカイ　ウタラ　オッタ　ピリカ　ソンゴ　エウパㇱクマ　ヤン。",
		alt: "Orowa, sinuma ney utara otta ene itakhi, Ingi mosir--otta eci paye wa obittano okai utara otta Pirika songo eupaskuma yan.",
		native: "Then he said to them, \"Go into all the world, and proclaim the good news to all creation.",
		words: [ 'オロワ', 'シヌマ', 'ネイ', 'ウタラ', 'オッタ', 'エネ', 'イタㇰヒ', 'インギ', 'モシㇽ', 'オッタ', 'エチ', 'パイェ', 'ワ', 'オビッタノ', 'オカイ', 'ウタラ', 'オッタ', 'ピリカ', 'ソンゴ', 'エウパㇱクマ', 'ヤン' ],
		audio: "./rsrc/ai/Mark/16/audio/120/14.wav",
		quizWords: [ 'エウパㇱクマ', 'オビッタノ' ]
	},
	{
		target: "エイソコロ　ワ　バプチㇱマ　アコレ　グル　アナㇰ　ネ　カシアオビウキ　クス　ネ;　コロカ、　エウㇺビプカ　グル　アナㇰ　ネ　カッパㇰ　コン　ルウェ　ネ　セコロ　アエサンニヨ　クス　ネ　ナ。",
		alt: "Eisokoro wa baptisma akore guru anak ne kasiaobiuki kusu ne; koroka, eumbipka guru anak ne katpak kon ruwe ne sekoro aesanniyo kusu ne na.",
		native: "He who believes and is baptized will be saved; but he who refuses to believe will be condemned.",
		words: [ 'エイソコロ', 'ワ', 'バプチㇱマ', 'アコレ', 'グル', 'アナㇰ', 'ネ', 'カシアオビウキ', 'クス', 'ネ', 'コロカ', 'エウㇺビプカ', 'グル', 'アナㇰ', 'ネ', 'カッパㇰ', 'コン', 'ルウェ', 'ネ', 'セコロ', 'アエサンニヨ', 'クス', 'ネ', 'ナ' ],
		audio: "./rsrc/ai/Mark/16/audio/120/15.wav",
		quizWords: [ 'アエサンニヨ' ]
	},
	{
		target: "オロワ、　タプ　オカイ　シロㇱ　アナㇰ　ネ　エイソコロ　グル　オシ　アラキ　クス　ネ;",
		alt: "Orowa, tap okai siros anak ne eisokoro guru osi araki kusu ne;",
		native: "Moreover these signs will attend those who believe. In my name they will drive out demons; they will speak in new languages;",
		words: [ 'オロワ', 'タプ', 'オカイ', 'シロㇱ', 'アナㇰ', 'ネ', 'エイソコロ', 'グル', 'オシ', 'アラキ', 'クス', 'ネ' ],
		audio: "./rsrc/ai/Mark/16/audio/120/16.wav",
		quizSentence: true
	},
	{
		target: "ク　レイヘイ　アンクㇱケライポ　ニッネ　カムイ　オアシンゲ、　オロワ、　アシリ　イタㇰ　アニ　イェ　クス　ネ;　オコㇰコ　キシマ、　オロワ、　ライゲ　クニ　イク　アㇺベ　イク　ヤㇰカ　オアラ　ア　ウェンデ　ソモキ;　タスㇺ　ウタラ　カタ　テケ　アンデ　チキ　アイワンゲレ　クス　ネ　ナ、　セコロ　イタㇰ。",
		alt: "Ku reihei ankuskeraipo nitne kamui oasinge, orowa, asiri itak ani ye kusu ne; okokko kisima, orowa, raige kuni iku ambe iku yakka oara a wende somoki; tasum utara kata teke ande ciki aiwangere kusu ne na, sekoro itak.",
		native: "they will take up snakes in their hands; and, if they drink any poison, it will not hurt them; they will place their hands on sick people and they will recover.\"",
		words: [ 'ク', 'レイヘイ', 'アンクㇱケライポ', 'ニッネ', 'カムイ', 'オアシンゲ', 'オロワ', 'アシリ', 'イタㇰ', 'アニ', 'イェ', 'クス', 'ネ', 'オコㇰコ', 'キシマ', 'オロワ', 'ライゲ', 'クニ', 'イク', 'アㇺベ', 'イク', 'ヤㇰカ', 'オアラ', 'ア', 'ウェンデ', 'ソモキ', 'タスㇺ', 'ウタラ', 'カタ', 'テケ', 'アンデ', 'チキ', 'アイワンゲレ', 'クス', 'ネ', 'ナ', 'セコロ', 'イタㇰ' ],
		audio: "./rsrc/ai/Mark/16/audio/120/17.wav",
		quizWords: [ 'タスㇺ', 'アイワンゲレ', 'オアラ', 'オコㇰコ' ]
	},
	{
		target: "タㇺベ　ガス、　ウタラパ　ネ　イェス　アナㇰ　ネ　ンタラ　オッタ　イタㇰ　オケレ　チキ　カンド　オッタ　アウㇰ　ワ　カラウイ　ㇱビイイイオン　テㇰ　サマタ　ア　ニサ　ルウェ　ネ。",
		alt: "Tambe gasu, Utarapa ne Yesu anak ne ntara otta itak okere ciki kando otta auk wa Karaui sbiiiion tek samata a nisa ruwe ne.",
		native: "So the Lord Jesus, after he had spoken to them, was taken up into heaven, and sat at the right hand of God.",
		words: [ 'タㇺベ', 'ガス', 'ウタラパ', 'ネ', 'イェス', 'アナㇰ', 'ネ', 'ンタラ', 'オッタ', 'イタㇰ', 'オケレ', 'チキ', 'カンド', 'オッタ', 'アウㇰ', 'ワ', 'カラウイ', 'ㇱビイイイオン', 'テㇰ', 'サマタ', 'ア', 'ニサ', 'ルウェ', 'ネ' ],
		audio: "./rsrc/ai/Mark/16/audio/120/18.wav",
		quizWords: [ 'アウㇰ' ]
	},
	{
		target: "オロワ、　ネイ　ウタラ　パイェ　ワ、　ネイタ　ネ　ヤㇰカ　ウパㇱクマ　キ、　ウタラパ　ネイ　ウタラ　トゥラノ　キ　ワ　オㇱビ　エㇰ　シロㇱブ　アニ　コロ　イタㇰ　アㇱブテ　ニサ　ルウェ　ネ　ナ。　アメン。",
		alt: "Orowa, ney utara paye wa, neita ne yakka upaskuma ki, Utarapa ney utara turano ki wa osbi ek sirosb ani koro itak asbte nisa ruwe ne na. Amen.",
		native: "But they set out, and made the proclamation everywhere, the Lord working with them, and confirming the message by the signs which attended it. Another appendix But all that had been revealed to them they reported briefly to Peter and his companions. Afterward Jesus himself sent them out, from east to west, the sacred and imperishable proclamation of eternal salvation.",
		words: [ 'オロワ', 'ネイ', 'ウタラ', 'パイェ', 'ワ', 'ネイタ', 'ネ', 'ヤㇰカ', 'ウパㇱクマ', 'キ', 'ウタラパ', 'ネイ', 'ウタラ', 'トゥラノ', 'キ', 'ワ', 'オㇱビ', 'エㇰ', 'シロㇱブ', 'アニ', 'コロ', 'イタㇰ', 'アㇱブテ', 'ニサ', 'ルウェ', 'ネ', 'ナ', 'アメン' ],
		audio: "./rsrc/ai/Mark/16/audio/120/19.wav",
		quizWords: [ 'ウパㇱクマ' ]
	}
];