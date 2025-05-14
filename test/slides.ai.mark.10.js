const gLang = 'ai';
const gBook = 'Mark';
const gChap = '10';
const gMode = 'ai';
const gSpeed = '120';

const slideData =
[
	{
		target: "オロワ、　シヌマ　ホプニ、　ヒネ、　ネイ　コタン　ワノ　オマン、　ワ　ヨロダン　ペッ　クㇱ　タ　アン、　ユデア　モシリ　オルン　エㇰ　ニサ　ルウェ　ネ:　オロワ、　カンナ　スイ　インネ　ウタラ　シヌマ　オッタ　ウウェカラパ;　アワ、　ラㇺマ　コラチ　スイ　シヌマ　エパカㇱヌ　ニサ　ルウェ　ネ　ナ。",
		alt: "Orowa, sinuma hopuni, hine, ney kotan wano oman, wa Yorodan pet kus ta an, Yudea mosiri orun ek nisa ruwe ne: orowa, kanna sui inne utara sinuma otta uwekarapa; awa, ramma koraci sui sinuma epakasnu nisa ruwe ne na.",
		native: "On leaving that place, Jesus went into the district of Judea on the other side of the Jordan. Crowds gathered about him again; and again, as usual, he began teaching them.",
		words: [ 'オロワ', 'シヌマ', 'ホプニ', 'ヒネ', 'ネイ', 'コタン', 'ワノ', 'オマン', 'ワ', 'ヨロダン', 'ペッ', 'クㇱ', 'タ', 'アン', 'ユデア', 'モシリ', 'オルン', 'エㇰ', 'ニサ', 'ルウェ', 'ネ', 'オロワ', 'カンナ', 'スイ', 'インネ', 'ウタラ', 'シヌマ', 'オッタ', 'ウウェカラパ', 'アワ', 'ラㇺマ', 'コラチ', 'スイ', 'シヌマ', 'エパカㇱヌ', 'ニサ', 'ルウェ', 'ネ', 'ナ' ],
		audio: "audio/mark.10/0.wav"
	},
	{
		target: "オロサマ、　オロタ　パリセエ　ウン　ウタラ　アラキ　ワ　コラㇺヌカラ、　ヒネ、　エネ　ウウェペケンヌヒ、　「アイヌ　アナㇰ　ネ、　コロ　マチ　オスルパ　チキ、　カㇱパオッテ　エハイタ　ルウェ　ヘ　アン」、　アニ　ヌ。",
		alt: "Orosama, orota Parisee un utara araki wa koramnukara, hine, ene uwepekennuhi, \"Ainu anak ne, koro maci osurupa ciki, kaspaotte ehaita ruwe he an\", ani nu.",
		native: "Presently some Pharisees came up and, to test him, asked, \"Has a husband the right to divorce his wife?\"",
		words: [ 'オロサマ', 'オロタ', 'パリセエ', 'ウン', 'ウタラ', 'アラキ', 'ワ', 'コラㇺヌカラ', 'ヒネ', 'エネ', 'ウウェペケンヌヒ', 'アイヌ', 'アナㇰ', 'ネ', 'コロ', 'マチ', 'オスルパ', 'チキ', 'カㇱパオッテ', 'エハイタ', 'ルウェ', 'ヘ', 'アン', 'アニ', 'ヌ' ],
		audio: "audio/mark.10/1.wav",
		quizWords: [ 'コラㇺヌカラ', 'カㇱパオッテ' ]
	},
	{
		target: "オロタ、　シヌマ　エセ　ワ　エネ　イタㇰヒ、　「モセ　アナㇰ　ネ、　ネプ　アニ　エチ　カㇱパオッテ　ヤ？」",
		alt: "Orota, sinuma ese wa ene itakhi, \"Mose anak ne, nep ani eci kaspaotte ya?\"",
		native: "\"What direction did Moses give you?\" replied Jesus.",
		words: [ 'オロタ', 'シヌマ', 'エセ', 'ワ', 'エネ', 'イタㇰヒ', 'モセ', 'アナㇰ', 'ネ', 'ネプ', 'アニ', 'エチ', 'カㇱパオッテ', 'ヤ' ],
		audio: "audio/mark.10/2.wav",
		quizWords: [ 'モセ' ]
	},
	{
		target: "タタオッタ、　ネイ　ウタラ　エネ　イェヒ、　「モセ　アナㇰ、　チ　ウタラ　ウヲスルパ　カㇺピ　コレ、　ワ　シウェンテプ　オスルパ　クニ　ラムオㇱマ　ニサ　ルウェ　ネ」、　セコロ　イタㇰ。",
		alt: "Tataotta, ney utara ene yehi, \"Mose anak, ci utara uwosurupa kampi kore, wa siwentep osurupa kuni ramuosma nisa ruwe ne\", sekoro itak.",
		native: "\"Moses,\" they said, \"permitted a man to draw up in writing a notice of separation and divorce his wife.\"",
		words: [ 'タタオッタ', 'ネイ', 'ウタラ', 'エネ', 'イェヒ', 'モセ', 'アナㇰ', 'チ', 'ウタラ', 'ウヲスルパ', 'カㇺピ', 'コレ', 'ワ', 'シウェンテプ', 'オスルパ', 'クニ', 'ラムオㇱマ', 'ニサ', 'ルウェ', 'ネ', 'セコロ', 'イタㇰ' ],
		audio: "audio/mark.10/3.wav",
		quizWords: [ 'イェヒ' ]
	},
	{
		target: "コロカ、　イェス　ネイ　ウタラ　オッタ　エネ　イタㇰヒ、　「エチ　コロ　サㇺベ　ニㇱテ、　ワ　クス、　モセ　ネイ　イカㇱパオッテ　エチ　クス　ヌイェ　ニサ　ルウェ　ネ。",
		alt: "Koroka, Yesu ney utara otta ene itakhi, \"Eci koro sambe niste, wa kusu, Mose ney ikaspaotte eci kusu nuye nisa ruwe ne.",
		native: "\"It was owing to the hardness of your hearts,\" said Jesus, \"that Moses gave you this direction;",
		words: [ 'コロカ', 'イェス', 'ネイ', 'ウタラ', 'オッタ', 'エネ', 'イタㇰヒ', 'エチ', 'コロ', 'サㇺベ', 'ニㇱテ', 'ワ', 'クス', 'モセ', 'ネイ', 'イカㇱパオッテ', 'エチ', 'クス', 'ヌイェ', 'ニサ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.10/4.wav"
	},
	{
		target: "コロカ、　モシリ　アカラ　ヘアシ　タ、　オㇰカイ　シネン、　マッネ　シネン　アカン　ルウェ　ネ。",
		alt: "Koroka, mosiri akara heasi ta, okkai sinen, matne sinen akan ruwe ne.",
		native: "but, at the beginning of the Creation, \'God made them male and female.\'",
		words: [ 'コロカ', 'モシリ', 'アカラ', 'ヘアシ', 'タ', 'オㇰカイ', 'シネン', 'マッネ', 'シネン', 'アカン', 'ルウェ', 'ネ' ],
		audio: "audio/mark.10/5.wav",
		quizWords: [ 'シネン' ]
	},
	{
		target: "タㇺベ　クス、　アイヌ　アナㇰ　ネ、　コロ　オナ　コロ　ウヌ　アンデ、　ワ　コン　マチ　トゥラ　コアン　クス　ネ;",
		alt: "Tambe kusu, ainu anak ne, koro ona koro unu ande, wa kon maci tura koan kusu ne;",
		native: "\'For this reason a man will leave his father and mother,",
		words: [ 'タㇺベ', 'クス', 'アイヌ', 'アナㇰ', 'ネ', 'コロ', 'オナ', 'コロ', 'ウヌ', 'アンデ', 'ワ', 'コン', 'マチ', 'トゥラ', 'コアン', 'クス', 'ネ' ],
		audio: "audio/mark.10/6.wav"
	},
	{
		target: "オロワ、　ネイ　トゥン　アナㇰ　ネ、　シネ　カㇺ　ネ　クス　ネ　ナ;　タㇺベ　クス、　ネイ　ウタラ　ナア　トゥン　ソモ　ネ、　シネ　カㇺ　ネ　ルウェ　ネ。",
		alt: "orowa, ney tun anak ne, sine kam ne kusu ne na; tambe kusu, ney utara naa tun somo ne, sine kam ne ruwe ne.",
		native: "and the man and his wife will become one;\' so that they are no longer two, but one.",
		words: [ 'オロワ', 'ネイ', 'トゥン', 'アナㇰ', 'ネ', 'シネ', 'カㇺ', 'ネ', 'クス', 'ネ', 'ナ', 'タㇺベ', 'クス', 'ネイ', 'ウタラ', 'ナア', 'トゥン', 'ソモ', 'ネ', 'シネ', 'カㇺ', 'ネ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.10/7.wav"
	},
	{
		target: "タㇺベ　クス、　カムイ　ウコトゥㇰカレ　ウタラ、　ネン　イェ　ヤㇰカ、　イテキ　ウサ　アンデ　ヤン。」",
		alt: "Tambe kusu, Kamui ukotukkare utara, nen ye yakka, iteki usa ande yan.\"",
		native: "What God himself, then, has yoked together no one must separate.\"",
		words: [ 'タㇺベ', 'クス', 'カムイ', 'ウコトゥㇰカレ', 'ウタラ', 'ネン', 'イェ', 'ヤㇰカ', 'イテキ', 'ウサ', 'アンデ', 'ヤン' ],
		audio: "audio/mark.10/8.wav"
	},
	{
		target: "オロワ、　チセイ　タ　オカイ　イタ　アナㇰ　ネ、　コロ　コイカラ　ウタラ　スイ　ネイ　オルㇱペ　クス、　シヌマ　オッタ　ヌ　ニサ　ルウェ　ネ。",
		alt: "Orowa, cisei ta okai ita anak ne, koro koikara utara sui ney oruspe kusu, sinuma otta nu nisa ruwe ne.",
		native: "When they were indoors, the disciples asked him again about this,",
		words: [ 'オロワ', 'チセイ', 'タ', 'オカイ', 'イタ', 'アナㇰ', 'ネ', 'コロ', 'コイカラ', 'ウタラ', 'スイ', 'ネイ', 'オルㇱペ', 'クス', 'シヌマ', 'オッタ', 'ヌ', 'ニサ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.10/9.wav"
	},
	{
		target: "オロタ、　シヌマ　エネ　イタㇰヒ、　「ネン　ネ　ヤㇰカ、　コン　マチ　オスルパ、　ワ　モシマ　アン　シウェンテプ　アニ、　マチ　ネ　カラ　グㇽ　アナㇰ　ネ、　シヌマ　クス　オモイヌ　コン　ルウェ　ネ:",
		alt: "Orota, sinuma ene itakhi, \"Nen ne yakka, kon maci osurupa, wa mosima an siwentep ani, maci ne kara gur anak ne, sinuma kusu omoinu kon ruwe ne:",
		native: "and he said, \"Anyone who divorces his wife and marries another woman is guilty of adultery against his wife;",
		words: [ 'オロタ', 'シヌマ', 'エネ', 'イタㇰヒ', 'ネン', 'ネ', 'ヤㇰカ', 'コン', 'マチ', 'オスルパ', 'ワ', 'モシマ', 'アン', 'シウェンテプ', 'アニ', 'マチ', 'ネ', 'カラ', 'グㇽ', 'アナㇰ', 'ネ', 'シヌマ', 'クス', 'オモイヌ', 'コン', 'ルウェ', 'ネ' ],
		audio: "audio/mark.10/10.wav",
		quizWords: [ 'モシマ' ]
	},
	{
		target: "サマタ、　ネイ　シウェンテプ　ヤイコタ　アナㇰ　ネ、　コロ　ホク　オスルパ　ワ　モシマ　アン　アイヌ　アニ　ホク　ネ　コロ　チキ、　シヌマ　オモイヌ　コン　ルウェ　ネ。」",
		alt: "samata, ney siwentep yaikota anak ne, koro hoku osurupa wa mosima an ainu ani hoku ne koro ciki, sinuma omoinu kon ruwe ne.\"",
		native: "and, if the woman divorces her husband and marries another man, she is guilty of adultery.\"",
		words: [ 'サマタ', 'ネイ', 'シウェンテプ', 'ヤイコタ', 'アナㇰ', 'ネ', 'コロ', 'ホク', 'オスルパ', 'ワ', 'モシマ', 'アン', 'アイヌ', 'アニ', 'ホク', 'ネ', 'コロ', 'チキ', 'シヌマ', 'オモイヌ', 'コン', 'ルウェ', 'ネ' ],
		audio: "audio/mark.10/11.wav"
	},
	{
		target: "オロワ、　アトモオㇱマレ　クニ　ネ　ウタラ　アナㇰ　ネ、　シヌマ　オロタ　ノカン　ウタラ　トゥラ　ワ　アラキ　ニサ　ルウェ　ネ:　アワ、　コイカラ　ウタラ　コパオ　ニサ　ルウェ　ネ。",
		alt: "Orowa, atomoosmare kuni ne utara anak ne, sinuma orota nokan utara tura wa araki nisa ruwe ne: awa, koikara utara kopao nisa ruwe ne.",
		native: "Some of the people were bringing little children to Jesus, for him to touch them; but the disciples rebuked those who had brought them.",
		words: [ 'オロワ', 'アトモオㇱマレ', 'クニ', 'ネ', 'ウタラ', 'アナㇰ', 'ネ', 'シヌマ', 'オロタ', 'ノカン', 'ウタラ', 'トゥラ', 'ワ', 'アラキ', 'ニサ', 'ルウェ', 'ネ', 'アワ', 'コイカラ', 'ウタラ', 'コパオ', 'ニサ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.10/12.wav"
	},
	{
		target: "コロカ、　イェス　ネイ　アㇺベ　ヌカラ　チキ、　イルㇱカ、　ヒネ、　オロタ　エネ　イタㇰヒ、　「ノカン　ウタラ　エン　オッタ　アラキ　クニ　アㇺベ　ラムオㇱマ;　イテキ　ハットキ　ヤン:　カムイ　モシㇽ　ウㇺベ　アナㇰ　ネ　ネイノ　オカイペ　ネ　ルウェ　ネ　クス　ネ　ナ。",
		alt: "Koroka, Yesu ney ambe nukara ciki, iruska, hine, orota ene itakhi, \"Nokan utara En otta araki kuni ambe ramuosma; iteki hattoki yan: Kamui mosir umbe anak ne neyno okaype ne ruwe ne kusu ne na.",
		native: "When, however, Jesus saw this, he was indignant. \"Let the little children come to me,\" he said, \"do not hinder them; for it is to the childlike that the kingdom of God belongs.",
		words: [ 'コロカ', 'イェス', 'ネイ', 'アㇺベ', 'ヌカラ', 'チキ', 'イルㇱカ', 'ヒネ', 'オロタ', 'エネ', 'イタㇰヒ', 'ノカン', 'ウタラ', 'エン', 'オッタ', 'アラキ', 'クニ', 'アㇺベ', 'ラムオㇱマ', 'イテキ', 'ハットキ', 'ヤン', 'カムイ', 'モシㇽ', 'ウㇺベ', 'アナㇰ', 'ネ', 'ネイノ', 'オカイペ', 'ネ', 'ルウェ', 'ネ', 'クス', 'ネ', 'ナ' ],
		audio: "audio/mark.10/13.wav"
	},
	{
		target: "ソンノ、　エチ　オッタ　ク　イェ、　ネン　ネ　ヤㇰカ、　ノカン　グル　ネイノ　カムイ　モシリ　ウㇰ　ソモキ　グㇽ　アナㇰ　ネ、　エアリキンネ　ネイ　モシリ　オルン　アフン　ソモキ　クス　ネ」、　アリ　イタㇰ。",
		alt: "Sonno, eci otta Ku ye, nen ne yakka, nokan guru neyno Kamui mosiri uk somoki gur anak ne, earikinne ney mosiri orun ahun somoki kusu ne\", ari itak.",
		native: "I tell you, unless a person receives the kingdom of God like a child, they will not enter it at all.\"",
		words: [ 'ソンノ', 'エチ', 'オッタ', 'ク', 'イェ', 'ネン', 'ネ', 'ヤㇰカ', 'ノカン', 'グル', 'ネイノ', 'カムイ', 'モシリ', 'ウㇰ', 'ソモキ', 'グㇽ', 'アナㇰ', 'ネ', 'エアリキンネ', 'ネイ', 'モシリ', 'オルン', 'アフン', 'ソモキ', 'クス', 'ネ', 'アリ', 'イタㇰ' ],
		audio: "audio/mark.10/14.wav"
	},
	{
		target: "オロワ、　シヌマ　ネイ　ノカン　ウタラ　オテコマレ、　ワ　カシケタ　テケヘ　アンデ　コロ、　シンヌヌケ　ニサ　ルウェ　ネ。",
		alt: "Orowa, sinuma ney nokan utara otekomare, wa kasiketa tekehe ande koro, sinnunuke nisa ruwe ne.",
		native: "Then he embraced the children, and, placing his hands on them, gave them his blessing.",
		words: [ 'オロワ', 'シヌマ', 'ネイ', 'ノカン', 'ウタラ', 'オテコマレ', 'ワ', 'カシケタ', 'テケヘ', 'アンデ', 'コロ', 'シンヌヌケ', 'ニサ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.10/15.wav"
	},
	{
		target: "オロワ、　シヌマ　パイェカイ　コラン　イタ、　オロタ　シネ　アイヌ　ホユプ　ワ　コッチャケタ　コㇰカエア、　ヒネ　エネ　イタㇰヒ、　「ピリカ　エパカㇱヌ　グル、　クアニ、　ヘㇺバラ　パㇰノ　ネ　ヤㇰカ、　シオケレ　ソモキ　イノトゥ　ク　エイケㇱコロ　クニ　ネ、　ネコン　ア　ク　キ　ヤㇰ　ピリカ　ヤ？」　セコロ　ヌ。",
		alt: "Orowa, sinuma payekai koran ita, orota sine ainu hoyupu wa kotcaketa kokkaea, hine ene itakhi, \"Pirika epakasnu guru, kuani, hembara pakno ne yakka, siokere somoki inotu ku eikeskoro kuni ne, nekon a ku ki yak pirika ya?\" sekoro nu.",
		native: "As Jesus was resuming his journey, a man came running up to him, and threw himself on his knees before him. \"Good teacher,\" he asked, \"what must I do to gain eternal life?\"",
		words: [ 'オロワ', 'シヌマ', 'パイェカイ', 'コラン', 'イタ', 'オロタ', 'シネ', 'アイヌ', 'ホユプ', 'ワ', 'コッチャケタ', 'コㇰカエア', 'ヒネ', 'エネ', 'イタㇰヒ', 'ピリカ', 'エパカㇱヌ', 'グル', 'クアニ', 'ヘㇺバラ', 'パㇰノ', 'ネ', 'ヤㇰカ', 'シオケレ', 'ソモキ', 'イノトゥ', 'ク', 'エイケㇱコロ', 'クニ', 'ネ', 'ネコン', 'ア', 'ク', 'キ', 'ヤㇰ', 'ピリカ', 'ヤ', 'セコロ', 'ヌ' ],
		audio: "audio/mark.10/16.wav",
		quizWords: [ 'コッチャケタ' ]
	},
	{
		target: "オロタ、　イェス　エネ　イタㇰヒ、　「ヘマンダ　クス　ピリカ　アニ　エン　イェ　ヤ？　シネン　モシマ　ピリカプ　イサマ、　ネイ　アㇺベ　アナㇰ　カムイ　ネ　ルウェ　ネ。",
		alt: "Orota, Yesu ene itakhi, \"Hemanda kusu pirika ani En ye ya? sinen mosima pirikap isama, ney ambe anak Kamui ne ruwe ne.",
		native: "\"Why do you call me good?\" answered Jesus. \"No one is good but God.",
		words: [ 'オロタ', 'イェス', 'エネ', 'イタㇰヒ', 'ヘマンダ', 'クス', 'ピリカ', 'アニ', 'エン', 'イェ', 'ヤ', 'シネン', 'モシマ', 'ピリカプ', 'イサマ', 'ネイ', 'アㇺベ', 'アナㇰ', 'カムイ', 'ネ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.10/17.wav"
	},
	{
		target: "エアニ　イカㇱパオッテ　エラマン、　「イテキ　ケウㇰ　ヤン、　イテキ　オモイヌ　コロ　ヤン、　イテキ　イㇰカ　ヤン、　イテキ　スンゲ　パウェテス　キ　ヤン、　イテキ　イラミサㇺカ、　エ　コロ　オナ　ネワ　ウヌ、　コオリパㇰ　ヤン」、　アリ　イタㇰ。",
		alt: "Eani ikaspaotte eraman, \'Iteki keuk yan, Iteki omoinu koro yan, Iteki ikka yan, Iteki sunge pawetesu ki yan, Iteki iramisamka, E koro ona newa unu, kooripak yan\'\", ari itak.",
		native: "You know the commandments - \'Do not kill. Do not commit adultery. Do not steal. Do not say what is false about others. Do not cheat. Honor your father and your mother.\'\"",
		words: [ 'エアニ', 'イカㇱパオッテ', 'エラマン', 'イテキ', 'ケウㇰ', 'ヤン', 'イテキ', 'オモイヌ', 'コロ', 'ヤン', 'イテキ', 'イㇰカ', 'ヤン', 'イテキ', 'スンゲ', 'パウェテス', 'キ', 'ヤン', 'イテキ', 'イラミサㇺカ', 'エ', 'コロ', 'オナ', 'ネワ', 'ウヌ', 'コオリパㇰ', 'ヤン', 'アリ', 'イタㇰ' ],
		audio: "audio/mark.10/18.wav",
		quizWords: [ 'スンゲ', 'パウェテス' ]
	},
	{
		target: "オロタ、　ネイ　グル　エネ　イタㇰヒ、　「エパカㇱヌ　グル、　ポン　ラㇺ　オロワノ、　タプ　オカイペ　オビッタ　ク　シㇰカシマ　ニサ　ルウェ　ネ。」",
		alt: "Orota, ney guru ene itakhi, \"Epakasnu guru, pon ram orowano, tap okaype obitta ku sikkasima nisa ruwe ne.\"",
		native: "\"Teacher,\" he replied, \"I have observed all these from my childhood.\"",
		words: [ 'オロタ', 'ネイ', 'グル', 'エネ', 'イタㇰヒ', 'エパカㇱヌ', 'グル', 'ポン', 'ラㇺ', 'オロワノ', 'タプ', 'オカイペ', 'オビッタ', 'ク', 'シㇰカシマ', 'ニサ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.10/19.wav"
	},
	{
		target: "オロワ、　イェス　ネイ　グル　オルン　ヌカラ、　ワ　オマプ　キ、　アイネ、　オロタ　エネ　イタㇰヒ、　「エ　ハイタ　アㇺベ　シネプ　アン:　エ　オマン　ワ　エ　コロベ　オビッタ　エホㇰ、　ヒネ、　イラポㇰカリ　グル　オッタ　コロパレ、　ヤㇰ　アナㇰ　ネ、　カンド　オシケタ　アエオテㇰヌプ　エ　コロ　クス　ネ;　オロワノ、　エㇰ　ワ　エン　オㇱ　アプカㇱ　ヤン」、　アリ　イタㇰ。",
		alt: "Orowa, Yesu ney guru orun nukara, wa omap ki, aine, orota ene itakhi, \"E haita ambe sinep an: e oman wa e korobe obitta ehok, hine, irapokkari guru otta koropare, yak anak ne, kando osiketa aeoteknup e koro kusu ne; orowano, ek wa En os apkas yan\", ari itak.",
		native: "Jesus looked at the man, and his heart went out to him, and he said, \"There is still one thing wanting in you; go and sell all that you have, and give to the poor, and you will have wealth in heaven; then come and follow me.\"",
		words: [ 'オロワ', 'イェス', 'ネイ', 'グル', 'オルン', 'ヌカラ', 'ワ', 'オマプ', 'キ', 'アイネ', 'オロタ', 'エネ', 'イタㇰヒ', 'エ', 'ハイタ', 'アㇺベ', 'シネプ', 'アン', 'エ', 'オマン', 'ワ', 'エ', 'コロベ', 'オビッタ', 'エホㇰ', 'ヒネ', 'イラポㇰカリ', 'グル', 'オッタ', 'コロパレ', 'ヤㇰ', 'アナㇰ', 'ネ', 'カンド', 'オシケタ', 'アエオテㇰヌプ', 'エ', 'コロ', 'クス', 'ネ', 'オロワノ', 'エㇰ', 'ワ', 'エン', 'オㇱ', 'アプカㇱ', 'ヤン', 'アリ', 'イタㇰ' ],
		audio: "audio/mark.10/20.wav"
	},
	{
		target: "コロカ、　シヌマ　ネイ　イタㇰ　ヌ　コロ、　エナンハチレ、　アイゲ、　オㇰナタラ　ワ　オマン　ニサ　ルウェ　ネ;　ネイ　グル　シリ　ポロ　アㇺベ　コロ　グル　ネ　ルウェ　ネ　クス　ネ　ナ。",
		alt: "Koroka, sinuma ney itak nu koro, enanhacire, aige, oknatara wa oman nisa ruwe ne; ney guru siri poro ambe koro guru ne ruwe ne kusu ne na.",
		native: "But the man\'s face clouded at these words, and he went away distressed, for he had great possessions.",
		words: [ 'コロカ', 'シヌマ', 'ネイ', 'イタㇰ', 'ヌ', 'コロ', 'エナンハチレ', 'アイゲ', 'オㇰナタラ', 'ワ', 'オマン', 'ニサ', 'ルウェ', 'ネ', 'ネイ', 'グル', 'シリ', 'ポロ', 'アㇺベ', 'コロ', 'グル', 'ネ', 'ルウェ', 'ネ', 'クス', 'ネ', 'ナ' ],
		audio: "audio/mark.10/21.wav"
	},
	{
		target: "オロワ、　イェス　エケㇱネ　オルン　インガラ、　ワ　コロ　コイカラ　ウタラ　オッタ　エネ　イタㇰヒ、　「ネプ　ホカㇺバノ、　アエオテㇰヌ　アㇺベ　コロ　ウタラ、　カムイ　モシリ　オルン　アフプ　フミ！」",
		alt: "Orowa, Yesu ekesne orun ingara, wa koro koikara utara otta ene itakhi, \"Nep hokambano, aeoteknu ambe koro utara, Kamui mosiri orun ahup humi!\"",
		native: "Then Jesus looked around, and said to his disciples, \"How hard it will be for people of wealth to enter the kingdom of God!\"",
		words: [ 'オロワ', 'イェス', 'エケㇱネ', 'オルン', 'インガラ', 'ワ', 'コロ', 'コイカラ', 'ウタラ', 'オッタ', 'エネ', 'イタㇰヒ', 'ネプ', 'ホカㇺバノ', 'アエオテㇰヌ', 'アㇺベ', 'コロ', 'ウタラ', 'カムイ', 'モシリ', 'オルン', 'アフプ', 'フミ' ],
		audio: "audio/mark.10/22.wav"
	},
	{
		target: "オロワ、　コイカラ　ウタラ　シヌマ　イェ　イタㇰ　エオヤモㇰテ。　コロカ、　イェス　スイ　エセ　ワ　ネイ　ウタラ　オッタ　エネ　イタㇰヒ、　「ポホ、　アエオテㇰヌ　アㇺベ　エヤイコパㇱテ　ウタラ、　カムイ　モシリ　オルン　アフプ　イ　ネプ　ホカㇺバ　ルウェ！",
		alt: "Orowa, koikara utara sinuma ye itak eoyamokte. Koroka, Yesu sui ese wa ney utara otta ene itakhi, \"Poho, aeoteknu ambe eyaikopaste utara, Kamui mosiri orun ahup i nep hokamba ruwe!",
		native: "The disciples were amazed at his words. But Jesus said again, \"My children, how hard a thing it is to enter the kingdom of God!",
		words: [ 'オロワ', 'コイカラ', 'ウタラ', 'シヌマ', 'イェ', 'イタㇰ', 'エオヤモㇰテ', 'コロカ', 'イェス', 'スイ', 'エセ', 'ワ', 'ネイ', 'ウタラ', 'オッタ', 'エネ', 'イタㇰヒ', 'ポホ', 'アエオテㇰヌ', 'アㇺベ', 'エヤイコパㇱテ', 'ウタラ', 'カムイ', 'モシリ', 'オルン', 'アフプ', 'イ', 'ネプ', 'ホカㇺバ', 'ルウェ' ],
		audio: "audio/mark.10/23.wav"
	},
	{
		target: "アエオテㇰヌ　グル　カムイ　モシリ　オルン　アフン　イ　カスノ、　ラクダ　チコイキプ　ケㇺ　プイ　オボソ　ワ　オマン　イ　アナㇰ　ネ、　ナア　イサイカ　ルウェ　ネ。」",
		alt: "Aeoteknu guru Kamui mosiri orun ahun i kasuno, rakuda cikoikip kem pui oboso wa oman i anak ne, naa isaika ruwe ne.\"",
		native: "It is easier for a camel to get through a needle\'s eye, than for a rich person to enter the kingdom of God.\"",
		words: [ 'アエオテㇰヌ', 'グル', 'カムイ', 'モシリ', 'オルン', 'アフン', 'イ', 'カスノ', 'ラクダ', 'チコイキプ', 'ケㇺ', 'プイ', 'オボソ', 'ワ', 'オマン', 'イ', 'アナㇰ', 'ネ', 'ナア', 'イサイカ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.10/24.wav",
		quizWords: [ 'カスノ' ]
	},
	{
		target: "オロワ、　ネイ　ウタラ　シノ　イヨクンヌレ、　ワ　オッタ　エネ　イタㇰヒ、　「ヤクン、　カシアオビウキ　エアㇱカイ　グル、　イナン　グル　ネ　ルウェ　ヘ　アン？」",
		alt: "Orowa, ney utara sino iyokunnure, wa otta ene itakhi, \"Yakun, kasiaobiuki easkai guru, inan guru ne ruwe he an?\"",
		native: "\"Then who can be saved?\" they exclaimed in the greatest astonishment.",
		words: [ 'オロワ', 'ネイ', 'ウタラ', 'シノ', 'イヨクンヌレ', 'ワ', 'オッタ', 'エネ', 'イタㇰヒ', 'ヤクン', 'カシアオビウキ', 'エアㇱカイ', 'グル', 'イナン', 'グル', 'ネ', 'ルウェ', 'ヘ', 'アン' ],
		audio: "audio/mark.10/25.wav"
	},
	{
		target: "イェス　ネイ　ウタラ　オルン　インガラ、　ワ　エネ　イタㇰヒ、　「タㇺベ　アナㇰ　ネ、　アイヌ　クス　エアイカプベ　ネ、　コロカ、　カムイ　クス　ソモ　ネ　ルウェ　ネ;　イナㇺベ　クス　ネ　ヤクン、　カムイ　アナㇰ　ネ、　ネプ　ネ　ヤㇰカ　キ　エアㇱカイ　ルウェ　ネ　クス　ネ　ナ。」",
		alt: "Yesu ney utara orun ingara, wa ene itakhi, \"Tambe anak ne, ainu kusu eaikapbe ne, koroka, Kamui kusu somo ne ruwe ne; inambe kusu ne yakun, Kamui anak ne, nep ne yakka ki easkai ruwe ne kusu ne na.\"",
		native: "Jesus looked at them, and answered, \"With people it is impossible, but not with God; for everything is possible with God.\"",
		words: [ 'イェス', 'ネイ', 'ウタラ', 'オルン', 'インガラ', 'ワ', 'エネ', 'イタㇰヒ', 'タㇺベ', 'アナㇰ', 'ネ', 'アイヌ', 'クス', 'エアイカプベ', 'ネ', 'コロカ', 'カムイ', 'クス', 'ソモ', 'ネ', 'ルウェ', 'ネ', 'イナㇺベ', 'クス', 'ネ', 'ヤクン', 'カムイ', 'アナㇰ', 'ネ', 'ネプ', 'ネ', 'ヤㇰカ', 'キ', 'エアㇱカイ', 'ルウェ', 'ネ', 'クス', 'ネ', 'ナ' ],
		audio: "audio/mark.10/26.wav"
	},
	{
		target: "オロタ　ペッロㇱ　イタㇰ　ヘアシ　ワ　エネ　イタㇰヒ、　「インガㇽ　アン、　チ　ウタラ　アナㇰ、　ネプ　ネ　ヤㇰカ、　チ　アンデ　アㇱ　ワ　エ　オㇱ　アラキ　アㇱ　ルウェ　ネ」、　セコロ　イタㇰ。",
		alt: "Orota Petros itak heasi wa ene itakhi, \"Ingar an, ci utara anak, nep ne yakka, ci ande as wa E os araki as ruwe ne\", sekoro itak.",
		native: "\"But we,\" began Peter, \"we left everything and have followed you.\"",
		words: [ 'オロタ', 'ペッロㇱ', 'イタㇰ', 'ヘアシ', 'ワ', 'エネ', 'イタㇰヒ', 'インガㇽ', 'アン', 'チ', 'ウタラ', 'アナㇰ', 'ネプ', 'ネ', 'ヤㇰカ', 'チ', 'アンデ', 'アㇱ', 'ワ', 'エ', 'オㇱ', 'アラキ', 'アㇱ', 'ルウェ', 'ネ', 'セコロ', 'イタㇰ' ],
		audio: "audio/mark.10/27.wav"
	},
	{
		target: "イェス　エネ　イタㇰヒ、　「ソンノ、　エチ　オッタ　ク　イェ、　ク　レンガプ　クス　ヘㇺヘㇺ、　ピリカ　ソンゴ　レンガプ　クス　ヘㇺヘㇺ、　チセイ　ヘネ、　オㇰカイ　アイヌ　ウイリワㇰ　ヘネ、　マッネ　アイヌ　ウイリワㇰ　ヘネ、　ウヌ　ヘネ、　オナ　ヘネ、　ポ　ウタラ　ヘネ、　トイ　ヘネ　アレ、",
		alt: "Yesu ene itakhi, \"Sonno, eci otta Ku ye, Ku rengap kusu hemhem, pirika songo rengap kusu hemhem, cisei hene, okkai ainu uiriwak hene, matne ainu uiriwak hene, unu hene, ona hene, po utara hene, toi hene are,",
		native: "\"I tell you,\" said Jesus, \"(there is no one) who has left house, or brothers, or sisters, or mother, or father, or children, or land, for my sake and for the good news,",
		words: [ 'イェス', 'エネ', 'イタㇰヒ', 'ソンノ', 'エチ', 'オッタ', 'ク', 'イェ', 'ク', 'レンガプ', 'クス', 'ヘㇺヘㇺ', 'ピリカ', 'ソンゴ', 'レンガプ', 'クス', 'ヘㇺヘㇺ', 'チセイ', 'ヘネ', 'オㇰカイ', 'アイヌ', 'ウイリワㇰ', 'ヘネ', 'マッネ', 'アイヌ', 'ウイリワㇰ', 'ヘネ', 'ウヌ', 'ヘネ', 'オナ', 'ヘネ', 'ポ', 'ウタラ', 'ヘネ', 'トイ', 'ヘネ', 'アレ' ],
		audio: "audio/mark.10/28.wav"
	},
	{
		target: "ワ、　タネ　アン　パキヒ　タ、　アシㇰネ　ホッネ　パㇰノ　ソモ　アコレ　グル　イサㇺ　ルウェ　ネ;　チセイ　ヘㇺヘㇺ、　オㇰカイ　アイヌ　ウイリワㇰ　ヘㇺヘㇺ、　マッネ　アイヌ　ウイリワㇰ　ヘㇺヘㇺ、　ウヌ　ヘㇺヘㇺ、　ポ　ウタラ　ヘㇺヘㇺ、　トイ　ヘㇺヘㇺ、　アエポㇰバプ　トゥラノ　コロ;　オロワ、　エㇰ　クㇱキ　モシリ　タ、　ヘㇺバラ　パㇰノ　ネ　ヤㇰカ、　シオケレ　ソモキ　イノトゥ　コン　ルウェ　ネ　クス　ネ　ナ。",
		alt: "wa, tane an pakihi ta, asikne hotne pakno somo akore guru isam ruwe ne; cisei hemhem, okkai ainu uiriwak hemhem, matne ainu uiriwak hemhem, unu hemhem, po utara hemhem, toi hemhem, aepokbap turano koro; orowa, ek kuski mosiri ta, hembara pakno ne yakka, siokere somoki inotu kon ruwe ne kusu ne na.",
		native: "who will not receive a hundred times as much, even now in the present - houses, and brothers, and sisters, and mothers, and children, and land, though not without persecutions - and in the age that is coming, eternal life.",
		words: [ 'ワ', 'タネ', 'アン', 'パキヒ', 'タ', 'アシㇰネ', 'ホッネ', 'パㇰノ', 'ソモ', 'アコレ', 'グル', 'イサㇺ', 'ルウェ', 'ネ', 'チセイ', 'ヘㇺヘㇺ', 'オㇰカイ', 'アイヌ', 'ウイリワㇰ', 'ヘㇺヘㇺ', 'マッネ', 'アイヌ', 'ウイリワㇰ', 'ヘㇺヘㇺ', 'ウヌ', 'ヘㇺヘㇺ', 'ポ', 'ウタラ', 'ヘㇺヘㇺ', 'トイ', 'ヘㇺヘㇺ', 'アエポㇰバプ', 'トゥラノ', 'コロ', 'オロワ', 'エㇰ', 'クㇱキ', 'モシリ', 'タ', 'ヘㇺバラ', 'パㇰノ', 'ネ', 'ヤㇰカ', 'シオケレ', 'ソモキ', 'イノトゥ', 'コン', 'ルウェ', 'ネ', 'クス', 'ネ', 'ナ' ],
		audio: "audio/mark.10/29.wav",
		quizWords: [ 'クㇱキ' ]
	},
	{
		target: "オロワ、　インネ　ホシキノ　オカイ　ウタラ　イヨシノ　ネ　クス　ネ;　サマタ、　イヨシノ　オカイ　ウタラ　ホシキノ　ネ　クス　ネ　ナ。",
		alt: "Orowa, inne hosikino okai utara iyosino ne kusu ne; samata, iyosino okai utara hosikino ne kusu ne na.",
		native: "But many who are first now will then be last, and the last will be first.\"",
		words: [ 'オロワ', 'インネ', 'ホシキノ', 'オカイ', 'ウタラ', 'イヨシノ', 'ネ', 'クス', 'ネ', 'サマタ', 'イヨシノ', 'オカイ', 'ウタラ', 'ホシキノ', 'ネ', 'クス', 'ネ', 'ナ' ],
		audio: "audio/mark.10/30.wav"
	},
	{
		target: "オロワ、　ネイ　ウタラ　イェルサレㇺ　コタン　オルン　ヘメス　コラン、　アワ、　ル　ホントモタ　オカイ;　イェス　ネイ　ウタラ　ラッチャオッ　オマン　シリ　アン:　アイネ、　ウタラ　オヤモㇰテ;　サマタ、　オㇱ　パイェ　ウタラ　イシトマ　ニサ　ルウェ　ネ、　オロワ、　スイ、　シヌマ　ネイ　トゥン　イカシマ　ワ　ニウ　ウㇰ、　ヒネ、　ヤイコタ　クス、　ヘトゥク　クス　ネ、　オルㇱペ　ヌレ　ヘアシ　ワ　エネ　オカイヒ、",
		alt: "Orowa, ney utara Yerusarem kotan orun hemesu koran, awa, ru hontomota okai; Yesu ney utara ratcaot oman siri an: aine, utara oyamokte; samata, os paye utara isitoma nisa ruwe ne, Orowa, sui, sinuma ney tun ikasima wa niu uk, hine, yaikota kusu, hetuku kusu ne, oruspe nure heasi wa ene okaihi,",
		native: "They were on the road going up to Jerusalem, with Jesus walking in front of them. The disciples were filled with awe, while those who were following behind were overwhelmed with fear. Gathering the Twelve around him once more, Jesus began to tell them what was about to happen to him,",
		words: [ 'オロワ', 'ネイ', 'ウタラ', 'イェルサレㇺ', 'コタン', 'オルン', 'ヘメス', 'コラン', 'アワ', 'ル', 'ホントモタ', 'オカイ', 'イェス', 'ネイ', 'ウタラ', 'ラッチャオッ', 'オマン', 'シリ', 'アン', 'アイネ', 'ウタラ', 'オヤモㇰテ', 'サマタ', 'オㇱ', 'パイェ', 'ウタラ', 'イシトマ', 'ニサ', 'ルウェ', 'ネ', 'オロワ', 'スイ', 'シヌマ', 'ネイ', 'トゥン', 'イカシマ', 'ワ', 'ニウ', 'ウㇰ', 'ヒネ', 'ヤイコタ', 'クス', 'ヘトゥク', 'クス', 'ネ', 'オルㇱペ', 'ヌレ', 'ヘアシ', 'ワ', 'エネ', 'オカイヒ' ],
		audio: "audio/mark.10/31.wav",
		quizWords: [ 'ヘトゥク', 'ヘメス', 'オカイヒ' ]
	},
	{
		target: "「インガㇽ　アン、　チ　ウタラ　イェルサレㇺ　コタン　オルン　ヘメㇱパ;　オロワ、　アイヌ　ポホ　アナㇰ　ネ、　カムイ　コラ　ケンル　エサパネ　ウタラ、　ネワ　カㇺピ　ヌイェ　ウタラ　オッタ　アエコシ;　オロワ、　ネイ　ウタラ　シヌマ　ライゲ　クニ　エサンニヨ、　ワ　オヤ　ウイルプ　ウタラ　オッタ　エコシ;",
		alt: "\"Ingar an, ci utara Yerusarem kotan orun hemespa; orowa, Ainu Poho anak ne, Kamui kora kenru esapane utara, newa kampi nuye utara otta aekosi; orowa, ney utara sinuma raige kuni esanniyo, wa Oya uirup utara otta ekosi;",
		native: "\"Listen!\" he said. \"We are going up to Jerusalem; and there the Son of Man will be betrayed to the chief priests and the teachers of the Law, and they will condemn him to death, and they will give him up to the Gentiles,",
		words: [ 'インガㇽ', 'アン', 'チ', 'ウタラ', 'イェルサレㇺ', 'コタン', 'オルン', 'ヘメㇱパ', 'オロワ', 'アイヌ', 'ポホ', 'アナㇰ', 'ネ', 'カムイ', 'コラ', 'ケンル', 'エサパネ', 'ウタラ', 'ネワ', 'カㇺピ', 'ヌイェ', 'ウタラ', 'オッタ', 'アエコシ', 'オロワ', 'ネイ', 'ウタラ', 'シヌマ', 'ライゲ', 'クニ', 'エサンニヨ', 'ワ', 'オヤ', 'ウイルプ', 'ウタラ', 'オッタ', 'エコシ' ],
		audio: "audio/mark.10/32.wav"
	},
	{
		target: "ネイ　ウタラ　アナㇰ　ネ、　シヌマ　エオヤイタㇰ　ヘㇺヘㇺ　キ、　カタ　トプセカラ　ヘㇺヘㇺ　キ、　シリキㇰ　ヘㇺヘㇺ　キ、　オロワノ　ライゲ　ヘㇺヘㇺ　キ　クス　ネ;　オロワ、　レレコ　オカケタ　シヌマ　ヘトポ　シㇰヌ　クス　ネ　ナ。」",
		alt: "ney utara anak ne, sinuma eoyaitak hemhem ki, kata topsekara hemhem ki, sirikik hemhem ki, orowano raige hemhem ki kusu ne; orowa, rereko okaketa sinuma hetopo siknu kusu ne na.\"",
		native: "who will mock him, spit on him, and scourge him, and put him to death; and after three days he will rise again.\"",
		words: [ 'ネイ', 'ウタラ', 'アナㇰ', 'ネ', 'シヌマ', 'エオヤイタㇰ', 'ヘㇺヘㇺ', 'キ', 'カタ', 'トプセカラ', 'ヘㇺヘㇺ', 'キ', 'シリキㇰ', 'ヘㇺヘㇺ', 'キ', 'オロワノ', 'ライゲ', 'ヘㇺヘㇺ', 'キ', 'クス', 'ネ', 'オロワ', 'レレコ', 'オカケタ', 'シヌマ', 'ヘトポ', 'シㇰヌ', 'クス', 'ネ', 'ナ' ],
		audio: "audio/mark.10/33.wav",
		quizWords: [ 'シㇰヌ' ]
	},
	{
		target: "オロワ、　ゼベデエ　コロ　ポホ　ヤコブ、　ネワ　ヨアンネㇱ　シヌマ　カランゲノ　アラキ、　ヒネ、　オロタ　エネ　イタㇰヒ、　「エパカㇱヌ　グル、　ネプ　ネ　ヤㇰカ、　アオカイ　オッタ、　チ　コラㇺコロベ　ウン　クス　イキ　クニ、　チ　コン　ルスイ　ルウェ　ネ。」",
		alt: "Orowa, Zebedee koro poho Yakob, newa Yoannes sinuma karangeno araki, hine, orota ene itakhi, \"Epakasnu guru, nep ne yakka, Aokai otta, ci koramkorobe un kusu iki kuni, ci kon rusui ruwe ne.\"",
		native: "James and John, the two sons of Zebedee, went to Jesus, and said, \"Teacher, we want you to do for us whatever we ask.\"",
		words: [ 'オロワ', 'ゼベデエ', 'コロ', 'ポホ', 'ヤコブ', 'ネワ', 'ヨアンネㇱ', 'シヌマ', 'カランゲノ', 'アラキ', 'ヒネ', 'オロタ', 'エネ', 'イタㇰヒ', 'エパカㇱヌ', 'グル', 'ネプ', 'ネ', 'ヤㇰカ', 'アオカイ', 'オッタ', 'チ', 'コラㇺコロベ', 'ウン', 'クス', 'イキ', 'クニ', 'チ', 'コン', 'ルスイ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.10/34.wav"
	},
	{
		target: "オロタ、　「ヘマンダ　エチ　クス、　ク　カラ　クニ　エチ　コン　ルスイ　ヤ？」　アリ　シヌマ　イタㇰ。",
		alt: "Orota, \"Hemanda eci kusu, Ku kara kuni eci kon rusui ya?\" ari sinuma itak.",
		native: "\"What do you want me to do for you?\" he asked.",
		words: [ 'オロタ', 'ヘマンダ', 'エチ', 'クス', 'ク', 'カラ', 'クニ', 'エチ', 'コン', 'ルスイ', 'ヤ', 'アリ', 'シヌマ', 'イタㇰ' ],
		audio: "audio/mark.10/35.wav"
	},
	{
		target: "オロタ、　ネイ　ウタラ　エネ　イタㇰヒ、　「エ　コロ　ヌペキ　オッタ、　チ　ウタラ　アナㇰ　ネ、　シネン　エ　シモン　テㇰ　サマタ、　シネン　エ　ハリキ　テㇰ　サマタ　ロㇰ　クニ、　カラ　ワ　ウン　コレ。」",
		alt: "Orota, ney utara ene itakhi, \"E koro nupeki otta, ci utara anak ne, sinen E simon tek samata, sinen E hariki tek samata rok kuni, kara wa un kore.\"",
		native: "\"Grant us this,\" they answered, \"to sit, one on your right, and the other on your left, when you come in glory.\"",
		words: [ 'オロタ', 'ネイ', 'ウタラ', 'エネ', 'イタㇰヒ', 'エ', 'コロ', 'ヌペキ', 'オッタ', 'チ', 'ウタラ', 'アナㇰ', 'ネ', 'シネン', 'エ', 'シモン', 'テㇰ', 'サマタ', 'シネン', 'エ', 'ハリキ', 'テㇰ', 'サマタ', 'ロㇰ', 'クニ', 'カラ', 'ワ', 'ウン', 'コレ' ],
		audio: "audio/mark.10/36.wav"
	},
	{
		target: "コロカ、　イェス　ネイ　ウタラ　オッタ　エネ　イタㇰヒ、　「エチ　エイコラㇺコロベ、　エチ　エラㇺペウテㇰ　ルウェ　ネ。　エチ　ウタラ　アナㇰ　ネ、　ク　イク　クニ　イタンギ、　エチ　ク　エアㇱカイ　ヤ？　サマタ、　ク　ウㇰ　クニ　バプチㇱマ　アニ、　バプチㇱマ　エチ　ウㇰ　エアㇱカイ　ヤ？」",
		alt: "Koroka, Yesu ney utara otta ene itakhi, \"Eci eikoramkorobe, eci erampeutek ruwe ne. Eci utara anak ne, Ku iku kuni itangi, eci ku easkai ya? Samata, Ku uk kuni baptisma ani, baptisma eci uk easkai ya?\"",
		native: "\"You do not know what you are asking,\" Jesus said to them. \"Can you drink the cup that I am to drink? Or receive the baptism that I am to receive?\"",
		words: [ 'コロカ', 'イェス', 'ネイ', 'ウタラ', 'オッタ', 'エネ', 'イタㇰヒ', 'エチ', 'エイコラㇺコロベ', 'エチ', 'エラㇺペウテㇰ', 'ルウェ', 'ネ', 'エチ', 'ウタラ', 'アナㇰ', 'ネ', 'ク', 'イク', 'クニ', 'イタンギ', 'エチ', 'ク', 'エアㇱカイ', 'ヤ', 'サマタ', 'ク', 'ウㇰ', 'クニ', 'バプチㇱマ', 'アニ', 'バプチㇱマ', 'エチ', 'ウㇰ', 'エアㇱカイ', 'ヤ' ],
		audio: "audio/mark.10/37.wav"
	},
	{
		target: "オロタ、　「エアㇱカイ　ルウェ　ネ」、　アリ　ネイ　ウタラ　イェ　ルウェ　ニサ　ネ。　オロタ　イェス　エネ　イタㇰヒ、　「ク　イク　クニ　イタンギ、　エチ　ク　クス　ネ、　サマタ、　ク　ウㇰ　クニ　バプチㇱマ　アニ、　バプチㇱマ　エチ　アコレ　クス　ネ　ナ:",
		alt: "Orota, \"easkai ruwe ne\", ari ney utara ye ruwe nisa ne. Orota Yesu ene itakhi, \"Ku iku kuni itangi, eci ku kusu ne, samata, Ku uk kuni baptisma ani, baptisma eci akore kusu ne na:",
		native: "\"Yes,\" they answered, \"we can.\" \"You will indeed drink the cup that I am to drink,\" Jesus said, \"and receive the baptism that I am to receive,",
		words: [ 'オロタ', 'エアㇱカイ', 'ルウェ', 'ネ', 'アリ', 'ネイ', 'ウタラ', 'イェ', 'ルウェ', 'ニサ', 'ネ', 'オロタ', 'イェス', 'エネ', 'イタㇰヒ', 'ク', 'イク', 'クニ', 'イタンギ', 'エチ', 'ク', 'クス', 'ネ', 'サマタ', 'ク', 'ウㇰ', 'クニ', 'バプチㇱマ', 'アニ', 'バプチㇱマ', 'エチ', 'アコレ', 'クス', 'ネ', 'ナ' ],
		audio: "audio/mark.10/38.wav"
	},
	{
		target: "コロカ、　ク　シモン　テㇰ　サマタ　ア　ヘネ、　ク　ハリキ　テㇰ　サマタ　ア　ヘネ　アニ　アン　アㇺベ　アナㇰ　ネ、　ク　コレ　クニプ　ソモ　ネ;　コロカ、　クス　アエトコオイキ　ウタラ　オッタ　アコレ　クス　ネ　ナ」、　セコロ　イタㇰ。",
		alt: "koroka, Ku simon tek samata a hene, Ku hariki tek samata a hene ani an ambe anak ne, Ku kore kunip somo ne; koroka, kusu aetokooiki utara otta akore kusu ne na\", sekoro itak.",
		native: "but as to a seat at my right or at my left - that is not mine to give, but it is for those for whom it has been prepared.\"",
		words: [ 'コロカ', 'ク', 'シモン', 'テㇰ', 'サマタ', 'ア', 'ヘネ', 'ク', 'ハリキ', 'テㇰ', 'サマタ', 'ア', 'ヘネ', 'アニ', 'アン', 'アㇺベ', 'アナㇰ', 'ネ', 'ク', 'コレ', 'クニプ', 'ソモ', 'ネ', 'コロカ', 'クス', 'アエトコオイキ', 'ウタラ', 'オッタ', 'アコレ', 'クス', 'ネ', 'ナ', 'セコロ', 'イタㇰ' ],
		audio: "audio/mark.10/39.wav"
	},
	{
		target: "オロワ、　ネイ　ワ　ニウ、　ネイ　イタㇰ　ヌ　チキ、　ヤコブ　ネワ　ヨアンネㇱ　コイルㇱカ　ヘアシ　ニサ　ルウェ　ネ。",
		alt: "Orowa, ney wa niu, ney itak nu ciki, Yakob newa Yoannes koiruska heasi nisa ruwe ne.",
		native: "On hearing of this, the ten others were at first very indignant about James and John.",
		words: [ 'オロワ', 'ネイ', 'ワ', 'ニウ', 'ネイ', 'イタㇰ', 'ヌ', 'チキ', 'ヤコブ', 'ネワ', 'ヨアンネㇱ', 'コイルㇱカ', 'ヘアシ', 'ニサ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.10/40.wav"
	},
	{
		target: "オロワ、　イェス　ネイ　ウタラ　シヘコテホトゥイェカラ、　ワ　オロタ　エネ　イタㇰヒ、　「オヤ　ウイルプ　ウタラ　エサパネ　クニ、　アエサンニヨ　ウタラ　アナㇰ　ネ　エニㇱパネ　イキ　ワ　エプンギネ、　オロワ、　ネイ　パセ　ウタラ　アナㇰ　ネ、　シラㇺニウケㇱ　モンヅㇺ　コ　キ　ルウェ　ネ。",
		alt: "Orowa, Yesu ney utara sihekotehotuyekara, wa orota ene itakhi, \"Oya uirup utara esapane kuni, aesanniyo utara anak ne enispane iki wa epungine, orowa, ney pase utara anak ne, siramniukes mondum ko ki ruwe ne.",
		native: "But Jesus called the ten to him, and said, \"Those who are regarded as ruling among the Gentiles lord it over them, as you know, and their great men oppress them.",
		words: [ 'オロワ', 'イェス', 'ネイ', 'ウタラ', 'シヘコテホトゥイェカラ', 'ワ', 'オロタ', 'エネ', 'イタㇰヒ', 'オヤ', 'ウイルプ', 'ウタラ', 'エサパネ', 'クニ', 'アエサンニヨ', 'ウタラ', 'アナㇰ', 'ネ', 'エニㇱパネ', 'イキ', 'ワ', 'エプンギネ', 'オロワ', 'ネイ', 'パセ', 'ウタラ', 'アナㇰ', 'ネ', 'シラㇺニウケㇱ', 'モンヅㇺ', 'コ', 'キ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.10/41.wav",
		quizWords: [ 'モンヅㇺ', 'アエサンニヨ' ]
	},
	{
		target: "コロカ、　エチ　ウタラ　トゥムゲタ、　ネイノ　アン　ソモ　ネ　クス　ネ:　コロカ、　ネン　ネ　ヤㇰカ、　エチ　トゥムゲタ　パセ　ルスイ　グㇽ　アナㇰ　ネ,　エチ　アウイテㇰ　グル　ネ　クス　ネ:",
		alt: "Koroka, eci utara tumugeta, neyno an somo ne kusu ne: koroka, nen ne yakka, eci tumugeta pase rusui gur anak ne, eci auitek guru ne kusu ne:",
		native: "But among you it is not so. No, whoever wants to become great among you must be your servant,",
		words: [ 'コロカ', 'エチ', 'ウタラ', 'トゥムゲタ', 'ネイノ', 'アン', 'ソモ', 'ネ', 'クス', 'ネ', 'コロカ', 'ネン', 'ネ', 'ヤㇰカ', 'エチ', 'トゥムゲタ', 'パセ', 'ルスイ', 'グㇽ', 'アナㇰ', 'ネ', 'エチ', 'アウイテㇰ', 'グル', 'ネ', 'クス', 'ネ' ],
		audio: "audio/mark.10/42.wav"
	},
	{
		target: "オロワ、　ネン　ネ　ヤㇰカ、　エチ　トゥムゲタ　サパネ　ルスイ　グㇽ　アナㇰ　ネ、　エチ　オビッタ　クス　アン　ウㇱシウネ　グル　ネ　クス　ネ　ナ。",
		alt: "orowa, nen ne yakka, eci tumugeta sapane rusui gur anak ne, eci obitta kusu an ussiune guru ne kusu ne na.",
		native: "and whoever wants to take the first place among you must be the servant of all;",
		words: [ 'オロワ', 'ネン', 'ネ', 'ヤㇰカ', 'エチ', 'トゥムゲタ', 'サパネ', 'ルスイ', 'グㇽ', 'アナㇰ', 'ネ', 'エチ', 'オビッタ', 'クス', 'アン', 'ウㇱシウネ', 'グル', 'ネ', 'クス', 'ネ', 'ナ' ],
		audio: "audio/mark.10/43.wav"
	},
	{
		target: "イナㇺベ　クス　ネ　ヤクン、　ソンノ　ネワ、　アイヌ　ポホ　アナㇰ　ネ、　モシマ　ウタラ　エイワンゲ　クニ　クス　エㇰ　ソモ　ネ、　コロカ、　ヤイシエイワンゲレ　クニ　クス　エㇰ、　インネ　ウタラ　キキライェ　クス、　コロ　イノトゥ　コレ　クニ　クス　エㇰ　ニサ　ルウェ　ネ　ナ。」",
		alt: "Inambe kusu ne yakun, sonno newa, Ainu Poho anak ne, mosima utara eiwange kuni kusu ek somo ne, koroka, yaisieiwangere kuni kusu ek, inne utara kikiraye kusu, koro inotu kore kuni kusu ek nisa ruwe ne na.\"",
		native: "for even the Son of Man came, not be served, but to serve, and to give his life as a ransom for many.\"",
		words: [ 'イナㇺベ', 'クス', 'ネ', 'ヤクン', 'ソンノ', 'ネワ', 'アイヌ', 'ポホ', 'アナㇰ', 'ネ', 'モシマ', 'ウタラ', 'エイワンゲ', 'クニ', 'クス', 'エㇰ', 'ソモ', 'ネ', 'コロカ', 'ヤイシエイワンゲレ', 'クニ', 'クス', 'エㇰ', 'インネ', 'ウタラ', 'キキライェ', 'クス', 'コロ', 'イノトゥ', 'コレ', 'クニ', 'クス', 'エㇰ', 'ニサ', 'ルウェ', 'ネ', 'ナ' ],
		audio: "audio/mark.10/44.wav"
	},
	{
		target: "オロワノ、　イェリコ　タ　アラキ:　アワ、　コロ　コイカラ　ウタラ　ネワ　インネ　ウタラ　トゥラノ、　イェリコ　オロワノ　パイェ　コロ、　チマイオㇱ　ポホ　バㇽチマイオㇱ　アニ　アプ　レイヘイ　コロ、　シㇰナㇰ　イヤフプ　グル、　ル　サㇺタ　ア　ワ　アン。",
		alt: "Orowano, Yeriko ta araki: awa, koro koikara utara newa inne utara turano, Yeriko orowano paye koro, Timaios poho Bartimaios ani ap reihei koro, siknak iyahup guru, ru samta a wa an.",
		native: "They came to Jericho. When Jesus was going out of the town with his disciples and a large crowd, Bartimaeus, the son of Timaeus, a blind beggar, was sitting by the roadside.",
		words: [ 'オロワノ', 'イェリコ', 'タ', 'アラキ', 'アワ', 'コロ', 'コイカラ', 'ウタラ', 'ネワ', 'インネ', 'ウタラ', 'トゥラノ', 'イェリコ', 'オロワノ', 'パイェ', 'コロ', 'チマイオㇱ', 'ポホ', 'バㇽチマイオㇱ', 'アニ', 'アプ', 'レイヘイ', 'コロ', 'シㇰナㇰ', 'イヤフプ', 'グル', 'ル', 'サㇺタ', 'ア', 'ワ', 'アン' ],
		audio: "audio/mark.10/45.wav",
		quizWords: [ 'シㇰナㇰ' ]
	},
	{
		target: "オロワ、　ナザレッ　コタン　ウン　イェス　ネ、　セコロ　ネイ　グル　ヌ　チキ、　ハウェ　アㇱテ　ヘアシ　ワ　エネ　イタㇰヒ、　「ダビダ　コロ　ポホ　イェス、　エン　エラㇺポキウェン　ワ　エン　コレ」、　アリ　イタㇰ。",
		alt: "Orowa, Nazaret kotan un Yesu ne, sekoro ney guru nu ciki, hawe aste heasi wa ene itakhi, \"Dabid koro Poho Yesu, en erampokiwen wa en kore\", ari itak.",
		native: "Hearing that it was Jesus the Nazarene, he began to call out, \"Jesus, Son of David, take pity on me.\"",
		words: [ 'オロワ', 'ナザレッ', 'コタン', 'ウン', 'イェス', 'ネ', 'セコロ', 'ネイ', 'グル', 'ヌ', 'チキ', 'ハウェ', 'アㇱテ', 'ヘアシ', 'ワ', 'エネ', 'イタㇰヒ', 'ダビダ', 'コロ', 'ポホ', 'イェス', 'エン', 'エラㇺポキウェン', 'ワ', 'エン', 'コレ', 'アリ', 'イタㇰ' ],
		audio: "audio/mark.10/46.wav"
	},
	{
		target: "オロワ、　インネ　ウタラ　シヌマ　モノ　アン　クニ　ネ　コサカヨカラ:　コロカ、　シヌマ　ナア　カスノ　エアリキンネ　ハウェ　アㇱテ、　「ダビダ　コロ　ポホ　ネ、　アオカイ、　エン　エラㇺポキウェン　ワ　エン　コレ」、　アリ　アン　イタㇰ　アニ　イェ。",
		alt: "Orowa, inne utara sinuma mono an kuni ne kosakayokara: koroka, sinuma naa kasuno earikinne hawe aste, \"Dabid koro Poho ne, Aokai, en erampokiwen wa en kore\", ari an itak ani ye.",
		native: "Many of the people kept telling him to be quiet; but the man continued to call out all the louder, \"Son of David, take pity on me.\"",
		words: [ 'オロワ', 'インネ', 'ウタラ', 'シヌマ', 'モノ', 'アン', 'クニ', 'ネ', 'コサカヨカラ', 'コロカ', 'シヌマ', 'ナア', 'カスノ', 'エアリキンネ', 'ハウェ', 'アㇱテ', 'ダビダ', 'コロ', 'ポホ', 'ネ', 'アオカイ', 'エン', 'エラㇺポキウェン', 'ワ', 'エン', 'コレ', 'アリ', 'アン', 'イタㇰ', 'アニ', 'イェ' ],
		audio: "audio/mark.10/47.wav"
	},
	{
		target: "オロワ、　イェス　アㇱ、　ワ、　「ネイ　グル　ホトゥイェカラ　ヤン」、　アリ　イェ。　オロワ、　オカイ　ウタラ　ネイ　シㇰナㇰ　グル　ホトゥイェカラ、　ワ、　「ラム　リテッケ　ヤン！　ホプニ、　シヌマ　エ　ホトゥイェカラ　アン　ナ」、　アリ　イタㇰ。",
		alt: "Orowa, Yesu as, wa, \"ney guru hotuyekara yan\", ari ye. Orowa, okai utara ney siknak guru hotuyekara, wa, \"ramu ritetke yan! Hopuni, sinuma e hotuyekara an na\", ari itak.",
		native: "Then Jesus stopped. \"Call him,\" he said. So they called the blind man. \"Have courage!\" they exclaimed. \"Get up; he is calling you.\"",
		words: [ 'オロワ', 'イェス', 'アㇱ', 'ワ', 'ネイ', 'グル', 'ホトゥイェカラ', 'ヤン', 'アリ', 'イェ', 'オロワ', 'オカイ', 'ウタラ', 'ネイ', 'シㇰナㇰ', 'グル', 'ホトゥイェカラ', 'ワ', 'ラム', 'リテッケ', 'ヤン', 'ホプニ', 'シヌマ', 'エ', 'ホトゥイェカラ', 'アン', 'ナ', 'アリ', 'イタㇰ' ],
		audio: "audio/mark.10/48.wav"
	},
	{
		target: "オロワ、　シヌマ　アナㇰ　ネ、　コロ　ミピ　エマカ、　ヒネ　ホプニ　カッタ、　ワ　イェス　オロタ　エㇰ　ニサ　ルウェ　ネ。",
		alt: "Orowa, sinuma anak ne, koro mipi emaka, hine hopuni katta, wa Yesu orota ek nisa ruwe ne.",
		native: "The man threw off his cloak, sprang up, and came to Jesus.",
		words: [ 'オロワ', 'シヌマ', 'アナㇰ', 'ネ', 'コロ', 'ミピ', 'エマカ', 'ヒネ', 'ホプニ', 'カッタ', 'ワ', 'イェス', 'オロタ', 'エㇰ', 'ニサ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.10/49.wav",
		quizWords: [ 'エマカ' ]
	},
	{
		target: "オロタ　イェス　エセ　ワ　エネ　イタㇰヒ、　「エ　オッタ　ク　キ　クニ、　ネプ　エ　コン　ルスイ　ヤ？」　オロタ　シㇰナㇰ　グル　エネ　イタㇰヒ、　「ラビボニ、　ク　インガラ　クニ　ク　コン　ルスイ　ルウェ　ネ。」",
		alt: "Orota Yesu ese wa ene itakhi, \"E otta Ku ki kuni, nep e kon rusui ya?\" Orota siknak guru ene itakhi, \"Rabboni, ku ingara kuni ku kon rusui ruwe ne.\"",
		native: "\"What do you want me to do for you?\" said Jesus, addressing him. \"Rabboni,\" the blind man answered, \"I want to recover my sight.\"",
		words: [ 'オロタ', 'イェス', 'エセ', 'ワ', 'エネ', 'イタㇰヒ', 'エ', 'オッタ', 'ク', 'キ', 'クニ', 'ネプ', 'エ', 'コン', 'ルスイ', 'ヤ', 'オロタ', 'シㇰナㇰ', 'グル', 'エネ', 'イタㇰヒ', 'ラビボニ', 'ク', 'インガラ', 'クニ', 'ク', 'コン', 'ルスイ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.10/50.wav"
	},
	{
		target: "シヌマ　オロタ　イェス　エネ　イタㇰヒ、　「パイェ　ヤン;　エ　コロ　エイソコリ　アナㇰ　ネ、　エ　イワンゲレ　ニサ　ルウェ　ネ　ナ」、　アリ　イタㇰ。　オロワ、　ネイ　グル　ナニ　ヌカラ、　ワ　ル　オッタ　イェス　オㇱ　オマン　ニサ　ルウェ　ネ　ナ。",
		alt: "sinuma orota Yesu ene itakhi, \"Paye yan; e koro eisokori anak ne, e iwangere nisa ruwe ne na\", ari itak. Orowa, ney guru nani nukara, wa ru otta Yesu os oman nisa ruwe ne na.",
		native: "\"You may go,\" Jesus said, \"Your faith has delivered you.\" Immediately he recovered his sight, and began to follow Jesus along the road.",
		words: [ 'シヌマ', 'オロタ', 'イェス', 'エネ', 'イタㇰヒ', 'パイェ', 'ヤン', 'エ', 'コロ', 'エイソコリ', 'アナㇰ', 'ネ', 'エ', 'イワンゲレ', 'ニサ', 'ルウェ', 'ネ', 'ナ', 'アリ', 'イタㇰ', 'オロワ', 'ネイ', 'グル', 'ナニ', 'ヌカラ', 'ワ', 'ル', 'オッタ', 'イェス', 'オㇱ', 'オマン', 'ニサ', 'ルウェ', 'ネ', 'ナ' ],
		audio: "audio/mark.10/51.wav",
		quizWords: [ 'イワンゲレ' ]
	}
];
