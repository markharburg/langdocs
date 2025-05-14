const gLang = 'ai';
const gBook = 'Mark';
const gChap = '15';
const gMode = 'ai';
const gSpeed = '120';

const slideData =
[
	{
		target: "オロワ、　クンネイワノ　アン　イタ　ナニ　カムイ　コラ　ケンル　エサパネ　ウタラ　アナㇰ　ネ　エカシ　ウタラ　ネワ　カㇺピ　ヌイェ　ウタラ　ネワ　オビッタ　ウコラㇺコロ　ウタラ　トゥラ　エウコラㇺコロ、　オロワ、　イェス　トゥペトゥペ　ワ　トゥラ　ワ　パイェ　ヒネ　ピラト　オッタ　エコシ　ニサ　ルウェ　ネ。",
		alt: "Orowa, kunneiwano an ita nani Kamui kora kenru esapane utara anak ne ekasi utara newa kampi nuye utara newa obitta ukoramkoro utara tura eukoramkoro, orowa, Yesu tupetupe wa tura wa paye hine Pirato otta ekosi nisa ruwe ne.",
		native: "As soon as it was daylight, the chief priests, after holding a consultation with elders and teachers of the Law - that is to say, the whole High Council - put Jesus in chains, and took him away, and gave him up to Pilate.",
		words: [ 'オロワ', 'クンネイワノ', 'アン', 'イタ', 'ナニ', 'カムイ', 'コラ', 'ケンル', 'エサパネ', 'ウタラ', 'アナㇰ', 'ネ', 'エカシ', 'ウタラ', 'ネワ', 'カㇺピ', 'ヌイェ', 'ウタラ', 'ネワ', 'オビッタ', 'ウコラㇺコロ', 'ウタラ', 'トゥラ', 'エウコラㇺコロ', 'オロワ', 'イェス', 'トゥペトゥペ', 'ワ', 'トゥラ', 'ワ', 'パイェ', 'ヒネ', 'ピラト', 'オッタ', 'エコシ', 'ニサ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.15.0.wav",
		quizWords: [ 'トゥペトゥペ', 'ウコラㇺコロ' ]
	},
	{
		target: "オロワ、　ピラト　アナㇰ　ネ　シヌマ　オッタ　エネ　ヌヒ　エアニ　アナㇰ　ネ　ユデア　ウン　グル　シㇰカシマ　グル　エ　ネ　ルウェ　ヘ　アン？　シヌマ　エセ　ワ　オロタ　エネ　イタㇰヒ、　エ　イェ　ルウェ　ネ、　セコロ　イタㇰ。",
		alt: "Orowa, Pirato anak ne sinuma otta ene nuhi Eani anak ne Yudea un guru sikkasima guru E ne ruwe he an? sinuma ese wa orota ene itakhi, E ye ruwe ne, sekoro itak.",
		native: "\"Are you the king of the Jews?\" asked Pilate. \"It is true,\" replied Jesus.",
		words: [ 'オロワ', 'ピラト', 'アナㇰ', 'ネ', 'シヌマ', 'オッタ', 'エネ', 'ヌヒ', 'エアニ', 'アナㇰ', 'ネ', 'ユデア', 'ウン', 'グル', 'シㇰカシマ', 'グル', 'エ', 'ネ', 'ルウェ', 'ヘ', 'アン', 'シヌマ', 'エセ', 'ワ', 'オロタ', 'エネ', 'イタㇰヒ', 'エ', 'イェ', 'ルウェ', 'ネ', 'セコロ', 'イタㇰ' ],
		audio: "audio/mark.15.1.wav",
		quizWords: [ 'ヌヒ' ]
	},
	{
		target: "オロワ、　カムイ　コラ　ケンル　エサパネ　ウタラ　ポロンノ　オカイペ　アニ　シヌマ　エイヨンヌプバ　ニサ　ルウェ　ネ。",
		alt: "Orowa, Kamui kora kenru esapane utara poronno okaype ani sinuma eiyonnupba nisa ruwe ne.",
		native: "Then the chief priests brought a number of charges against him.",
		words: [ 'オロワ', 'カムイ', 'コラ', 'ケンル', 'エサパネ', 'ウタラ', 'ポロンノ', 'オカイペ', 'アニ', 'シヌマ', 'エイヨンヌプバ', 'ニサ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.15.2.wav",
		quizSentence: true
	},
	{
		target: "オロワ、　ピラト　アナㇰ　ネ　スイ　シヌマ　オッタ　ヌ　ワ　エネ　イタㇰヒ、　ネプ　カ　エ　エセ　ソモキ　ヤ？　ネプ　インネ　オカイペ　アニ　エ　エイヨンヌプバ　キ　シリ　インガラ！",
		alt: "Orowa, Pirato anak ne sui sinuma otta nu wa ene itakhi, Nep ka E ese somoki ya? Nep inne okaype ani E eiyonnupba ki siri ingara!",
		native: "So Pilate questioned Jesus again. \"Have you no reply to make?\" he asked. \"Listen, how many charges they are bringing against you.\"",
		words: [ 'オロワ', 'ピラト', 'アナㇰ', 'ネ', 'スイ', 'シヌマ', 'オッタ', 'ヌ', 'ワ', 'エネ', 'イタㇰヒ', 'ネプ', 'カ', 'エ', 'エセ', 'ソモキ', 'ヤ', 'ネプ', 'インネ', 'オカイペ', 'アニ', 'エ', 'エイヨンヌプバ', 'キ', 'シリ', 'インガラ' ],
		audio: "audio/mark.15.3.wav",
		quizWords: [ 'スイ' ]
	},
	{
		target: "コロカ、　イェス　ナア　ネプ　ネ　ヤㇰカ　エセ　イタㇰ　キ　カ　ソモキ:　タㇺベ　クス、　ピラト　アナㇰ　ネ　エヌㇱカリ　ニサ　ルウェ　ネ　ナ。",
		alt: "Koroka, Yesu naa nep ne yakka ese itak ki ka somoki: tambe kusu, Pirato anak ne enuskari nisa ruwe ne na.",
		native: "But Jesus still made no reply whatever; at which Pilate was astonished.",
		words: [ 'コロカ', 'イェス', 'ナア', 'ネプ', 'ネ', 'ヤㇰカ', 'エセ', 'イタㇰ', 'キ', 'カ', 'ソモキ', 'タㇺベ', 'クス', 'ピラト', 'アナㇰ', 'ネ', 'エヌㇱカリ', 'ニサ', 'ルウェ', 'ネ', 'ナ' ],
		audio: "audio/mark.15.4.wav",
		quizSentence: true
	},
	{
		target: "オロサマ、　マラプト　アン　イタ　オカイ　ウタラ　レンガイネ　コラㇺコロ　パカㇱヌ　グル　シネン　ホンネレ　プリ　アン。",
		alt: "Orosama, marapto an ita okai utara rengaine koramkoro pakasnu guru sinen honnere buri an.",
		native: "Now, at the feast, Pilate used to grant the people the release of any one prisoner whom they might ask for.",
		words: [ 'オロサマ', 'マラプト', 'アン', 'イタ', 'オカイ', 'ウタラ', 'レンガイネ', 'コラㇺコロ', 'パカㇱヌ', 'グル', 'シネン', 'ホンネレ', 'プリ', 'アン' ],
		audio: "audio/mark.15.5.wav",
		quizWords: [ 'コラㇺコロ', 'シネン', 'パカㇱヌ', 'マラプト', 'レンガイネ', 'ホンネレ' ]
	},
	{
		target: "アワ、　ネイ　イタ　アナㇰ　ネ　モシリ　シㇰカシマ　ウタラ　エイオㇰ―バレ　ワ　ケウェウㇰ　ウタラ　トゥラノ　トゥペトゥペ　ワ　アン　バラブ―バㇱ　アニ　アン　レイヘイ　コロ　グル　アン　ワ　アン。",
		alt: "Awa, ney ita anak ne Mosiri sikkasima utara eiok-bare wa keweuk utara turano tupetupe wa an Barab-bas ani an reihei koro guru an wa an.",
		native: "A man called Barabbas was in prison, with the rioters who had committed murder during a riot.",
		words: [ 'アワ', 'ネイ', 'イタ', 'アナㇰ', 'ネ', 'モシリ', 'シㇰカシマ', 'ウタラ', 'エイオㇰ', 'バレ', 'ワ', 'ケウェウㇰ', 'ウタラ', 'トゥラノ', 'トゥペトゥペ', 'ワ', 'アン', 'バラブ', 'バㇱ', 'アニ', 'アン', 'レイヘイ', 'コロ', 'グル', 'アン', 'ワ', 'アン' ],
		audio: "audio/mark.15.6.wav",
		quizSentence: true
	},
	{
		target: "アイゲ、　インネ　ウタラ　ピラト　オッタ　パイェ　ワ　ラㇺマ　コラチ　キ　クニ　コラㇺコロ　ヘアシ。",
		alt: "Aige, inne utara Pirato otta paye wa ramma koraci ki kuni koramkoro heasi.",
		native: "So, when the crowd went up and began to ask Pilate to follow his usual custom,",
		words: [ 'アイゲ', 'インネ', 'ウタラ', 'ピラト', 'オッタ', 'パイェ', 'ワ', 'ラㇺマ', 'コラチ', 'キ', 'クニ', 'コラㇺコロ', 'ヘアシ' ],
		audio: "audio/mark.15.7.wav",
		quizSentence: true
	},
	{
		target: "オロタ　ピラト　エセ　ワ　エネ　イタㇰヒ、　ユデア　ウン　ウタラ　シㇰカシマ　グル　ク　ホンネレ　クニ　エチ　コン　ルスイ　ヤ:　セコロ　イタㇰ。",
		alt: "Orota Pirato ese wa ene itakhi, Yudea un utara sikkasima guru ku honnere kuni eci kon rusui ya: sekoro itak.",
		native: "he answered, \"Do you want me to release the \'king of the Jews\' for you?\"",
		words: [ 'オロタ', 'ピラト', 'エセ', 'ワ', 'エネ', 'イタㇰヒ', 'ユデア', 'ウン', 'ウタラ', 'シㇰカシマ', 'グル', 'ク', 'ホンネレ', 'クニ', 'エチ', 'コン', 'ルスイ', 'ヤ', 'セコロ', 'イタㇰ' ],
		audio: "audio/mark.15.8.wav",
		quizSentence: true
	},
	{
		target: "ネイ　カムイ　コラ　ケンル　エサパネ　ウタラ　アナㇰ　ネ　エヤイトゥンナプ　クス　イェス　エコシ　ニサ　ルウェ　ネ、　セコロ　シヌマ　エラマン　ルウェ　ネ　クス　ネ　ナ。",
		alt: "Ney Kamui kora kenru esapane utara anak ne eyaitunnap kusu Yesu ekosi nisa ruwe ne, sekoro sinuma eraman ruwe ne kusu ne na.",
		native: "For he was aware that it was out of jealousy that the chief priests had given Jesus up to him.",
		words: [ 'ネイ', 'カムイ', 'コラ', 'ケンル', 'エサパネ', 'ウタラ', 'アナㇰ', 'ネ', 'エヤイトゥンナプ', 'クス', 'イェス', 'エコシ', 'ニサ', 'ルウェ', 'ネ', 'セコロ', 'シヌマ', 'エラマン', 'ルウェ', 'ネ', 'クス', 'ネ', 'ナ' ],
		audio: "audio/mark.15.9.wav",
		quizSentence: true
	},
	{
		target: "コロカ。　バラビバㇱ　アホンネレ　ワ　オッタ　アコレ　クニ　ネ　カムイ　コラ　ケンル　エサパネ　ウタラ　アナㇰ　ネ　インネ　ウタラ　エオニㇱニシ　ニサ　ルウェ　ネ。",
		alt: "Koroka. Barabbas ahonnere wa otta akore kuni ne Kamui kora kenru esapane utara anak ne inne utara eonisnisi nisa ruwe ne.",
		native: "But the chief priests incited the crowd to get Barabbas released instead.",
		words: [ 'コロカ', 'バラビバㇱ', 'アホンネレ', 'ワ', 'オッタ', 'アコレ', 'クニ', 'ネ', 'カムイ', 'コラ', 'ケンル', 'エサパネ', 'ウタラ', 'アナㇰ', 'ネ', 'インネ', 'ウタラ', 'エオニㇱニシ', 'ニサ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.15.10.wav",
		quizSentence: true
	},
	{
		target: "オロワ、　スイ　ピラト　エセ　ワ　オロタ　エネ　イタㇰヒ、　ヤクン、　ユデア　ウン　ウタラ　シㇰカシマ　グル　アニ　エチ　イェ　グル　オッタ　ネコン　ア　ク　キ　ヤ？　セコロ　イタㇰ。",
		alt: "Orowa, sui Pirato ese wa orota ene itakhi, Yakun, Yudea un utara sikkasima guru ani eci ye guru otta nekon a ku ki ya? sekoro itak.",
		native: "Pilate, however, spoke to them again, \"What should I do then with the man whom you call the \'king of the Jews\'?\"",
		words: [ 'オロワ', 'スイ', 'ピラト', 'エセ', 'ワ', 'オロタ', 'エネ', 'イタㇰヒ', 'ヤクン', 'ユデア', 'ウン', 'ウタラ', 'シㇰカシマ', 'グル', 'アニ', 'エチ', 'イェ', 'グル', 'オッタ', 'ネコン', 'ア', 'ク', 'キ', 'ヤ', 'セコロ', 'イタㇰ' ],
		audio: "audio/mark.15.11.wav",
		quizSentence: true
	},
	{
		target: "オロワ、　シウ　ネイ　ウタラ　アナㇰ　ネ、―ウタサ　チクニ　オッタ　シヌマ　クンギ　コキㇰキㇰ、　アニ　ハウェ　アㇱテ　ワ　イタㇰ　ニサ　ルウェ　ネ。",
		alt: "Orowa, siu ney utara anak ne,-Utasa cikuni otta sinuma kungi kokikkik, ani hawe aste wa itak nisa ruwe ne.",
		native: "Again they shouted, \"Crucify him!\"",
		words: [ 'オロワ', 'シウ', 'ネイ', 'ウタラ', 'アナㇰ', 'ネ', 'ウタサ', 'チクニ', 'オッタ', 'シヌマ', 'クンギ', 'コキㇰキㇰ', 'アニ', 'ハウェ', 'アㇱテ', 'ワ', 'イタㇰ', 'ニサ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.15.12.wav",
		quizWords: [ 'コキㇰキㇰ', 'シウ' ]
	},
	{
		target: "ヘマンダ　クス、　ネコン　ア　ウェン　プリ　シヌマ　キ　ヤ？　アニ　ネイ　ウタラ　オッタ　ピラト　イェ。　コロカ　スイ　ネイ　ウタラ　トイコ　ハウェ　アㇱテ　ワ、　ウタサ　チクニ　オッタ　クンギ　コキㇰキㇰ、　セコロ　イタㇰ。",
		alt: "Hemanda kusu, nekon a wen buri sinuma ki ya? ani ney utara otta Pirato ye. Koroka sui ney utara toiko hawe aste wa, Utasa cikuni otta kungi kokikkik, sekoro itak.",
		native: "\"Why, what harm has he done?\" Pilate kept saying to them. But they shouted furiously, \"Crucify him!\"",
		words: [ 'ヘマンダ', 'クス', 'ネコン', 'ア', 'ウェン', 'プリ', 'シヌマ', 'キ', 'ヤ', 'アニ', 'ネイ', 'ウタラ', 'オッタ', 'ピラト', 'イェ', 'コロカ', 'スイ', 'ネイ', 'ウタラ', 'トイコ', 'ハウェ', 'アㇱテ', 'ワ', 'ウタサ', 'チクニ', 'オッタ', 'クンギ', 'コキㇰキㇰ', 'セコロ', 'イタㇰ' ],
		audio: "audio/mark.15.13.wav",
		quizSentence: true
	},
	{
		target: "オロワ、　ピラト　アナㇰ　ネ　ネイ　インネ　ウタラ　ラムシンネレ　ルスイ　クス、　オロタ　バラブ―バㇱ　ホンネレ、　オロワ、　イェス　シリキㇰ　オケレ　チキ、　ウタサ　チクニ　オッタ　アライゲ　クニ　ネ　ウタラ　オッタ　エコシ　ニサ　ルウェ　ネ　ナ。",
		alt: "Orowa, Pirato anak ne ney inne utara ramusinnere rusui kusu, orota Barab-bas honnere, orowa, Yesu sirikik okere ciki, Utasa cikuni otta araige kuni ne utara otta ekosi nisa ruwe ne na.",
		native: "And Pilate, wishing to satisfy the crowd, released Barabbas to them, and, after scourging Jesus, gave him up to be crucified.",
		words: [ 'オロワ', 'ピラト', 'アナㇰ', 'ネ', 'ネイ', 'インネ', 'ウタラ', 'ラムシンネレ', 'ルスイ', 'クス', 'オロタ', 'バラブ', 'バㇱ', 'ホンネレ', 'オロワ', 'イェス', 'シリキㇰ', 'オケレ', 'チキ', 'ウタサ', 'チクニ', 'オッタ', 'アライゲ', 'クニ', 'ネ', 'ウタラ', 'オッタ', 'エコシ', 'ニサ', 'ルウェ', 'ネ', 'ナ' ],
		audio: "audio/mark.15.14.wav",
		quizSentence: true
	},
	{
		target: "オロワ、　トゥミコロ　ウタラ　シヌマ　アニ　ワ　プレトリウㇺ　アニ　アイェ　トゥㇺプ　オッタ　トゥラ、　オロワ、　トゥラノ　イキ　イキリ　アン　ウタラ　ウウェカラパレ　ニサ　ルウェ　ネ。",
		alt: "Orowa, tumikoro utara sinuma ani wa Pretorium ani aye tumbu otta tura, orowa, turano iki ikiri an utara uwekarapare nisa ruwe ne.",
		native: "The soldiers then took Jesus away into the courtyard - that is the Government house - and they called the whole garrison together.",
		words: [ 'オロワ', 'トゥミコロ', 'ウタラ', 'シヌマ', 'アニ', 'ワ', 'プレトリウㇺ', 'アニ', 'アイェ', 'トゥㇺプ', 'オッタ', 'トゥラ', 'オロワ', 'トゥラノ', 'イキ', 'イキリ', 'アン', 'ウタラ', 'ウウェカラパレ', 'ニサ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.15.15.wav",
		quizWords: [ 'トゥミコロ', 'ウウェカラパレ' ]
	},
	{
		target: "アワ、　フゥレ　アミプ　アニ　シヌマ　ミレ、",
		alt: "Awa, fure amip ani sinuma mire,",
		native: "They dressed him in a purple robe, and, having twisted a crown of thorns, put it on him,",
		words: [ 'アワ', 'フゥレ', 'アミプ', 'アニ', 'シヌマ', 'ミレ' ],
		audio: "audio/mark.15.16.wav",
		quizWords: [ 'ミレ' ]
	},
	{
		target: "オロワ、　アイウㇱ　ニ　アニ　サパ　ウㇺベ　カラ　ワ　カシケタ　ウヌ;　オロワ、　シヌマ　コランガラプ　ワ、　ユデア　ウン　ウタラ　シㇰカシマ　グル、　イランガラプテ　アキ　ナ、　アリ　イタㇰ。",
		alt: "orowa, aius ni ani sapa umbe kara wa kasiketa unu; orowa, sinuma korangarap wa, Yudea un utara sikkasima guru, irangarapte aki na, ari itak.",
		native: "and then began to salute him. \"Long life to you, king of the Jews!\" they said.",
		words: [ 'オロワ', 'アイウㇱ', 'ニ', 'アニ', 'サパ', 'ウㇺベ', 'カラ', 'ワ', 'カシケタ', 'ウヌ', 'オロワ', 'シヌマ', 'コランガラプ', 'ワ', 'ユデア', 'ウン', 'ウタラ', 'シㇰカシマ', 'グル', 'イランガラプテ', 'アキ', 'ナ', 'アリ', 'イタㇰ' ],
		audio: "audio/mark.15.17.wav",
		quizWords: [ 'ニ' ]
	},
	{
		target: "オロワ、　ラペㇺベ　アニ　シヌマ　コロ　サパ　シリキㇰ、　サマタ、　オッタ　トプセ　トプセ　カラ、　サマタ、　コㇰカエロㇰ　ヒネ　コ　オンガミ　ニサ　ルウェ　ネ。",
		alt: "Orowa, rapembe ani sinuma koro sapa sirikik, samata, otta topse topse kara, samata, kokkaerok hine ko ongami nisa ruwe ne.",
		native: "And they kept striking him on the head with a rod, spitting at him, and bowing to the ground before him - going down on their knees;",
		words: [ 'オロワ', 'ラペㇺベ', 'アニ', 'シヌマ', 'コロ', 'サパ', 'シリキㇰ', 'サマタ', 'オッタ', 'トプセ', 'トプセ', 'カラ', 'サマタ', 'コㇰカエロㇰ', 'ヒネ', 'コ', 'オンガミ', 'ニサ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.15.18.wav",
		quizWords: [ 'オンガミ', 'トプセ' ]
	},
	{
		target: "オロワノ、　エオヤ　イタㇰ　オケレ　コロ　ネイ　フゥレ　アミプ　ソㇱパ　ワ　コロ　ミピ　ミレ。　オロワ、　ウタサ　チクニ　オッタ　シヌマ　ライゲ　クニ　ネ　アニ　ワ　パイェ　ニサ　ルウェ　ネ。",
		alt: "Orowano, eoya itak okere koro ney fure amip sospa wa koro mipi mire. Orowa, utasa cikuni otta sinuma raige kuni ne ani wa paye nisa ruwe ne.",
		native: "and, when they had left off mocking him, they took off the purple robe, and put his own clothes on him.",
		words: [ 'オロワノ', 'エオヤ', 'イタㇰ', 'オケレ', 'コロ', 'ネイ', 'フゥレ', 'アミプ', 'ソㇱパ', 'ワ', 'コロ', 'ミピ', 'ミレ', 'オロワ', 'ウタサ', 'チクニ', 'オッタ', 'シヌマ', 'ライゲ', 'クニ', 'ネ', 'アニ', 'ワ', 'パイェ', 'ニサ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.15.19.wav",
		quizSentence: true
	},
	{
		target: "オロワ、　オキㇺ　ウン　エㇰ　シリクㇱ　ワ　アン　アレㇰサンヅㇿㇱ　ネワ　ロウポㇱ　コロ　ミチ　クレネ　コタン　ウン　シモン　アナㇰ　ネ　ネイ　ウタサ　チクニ　セイ　クニ　ネ　トゥラノ　アオマンデ　ニサ　ルウェ　ネ。",
		alt: "Orowa, okim un ek sirikus wa an Areksandros newa Roupos koro mici Kurene kotan un Simon anak ne ney utasa cikuni sei kuni ne turano aomande nisa ruwe ne.",
		native: "They led Jesus out to crucify him; and they compelled a passer-by, Simon from Cyrene, who was on his way in from the country, the father of Alexander and Rufus, to go with them to carry his cross.",
		words: [ 'オロワ', 'オキㇺ', 'ウン', 'エㇰ', 'シリクㇱ', 'ワ', 'アン', 'アレㇰサンヅㇿㇱ', 'ネワ', 'ロウポㇱ', 'コロ', 'ミチ', 'クレネ', 'コタン', 'ウン', 'シモン', 'アナㇰ', 'ネ', 'ネイ', 'ウタサ', 'チクニ', 'セイ', 'クニ', 'ネ', 'トゥラノ', 'アオマンデ', 'ニサ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.15.20.wav",
		quizWords: [ 'セイ' ]
	},
	{
		target: "アワ、　ゴロゴタ　アニ　アイェ　ウシケ　ウン　シヌマ　トゥラノ　アラキ;　ネイ　ゴロゴタ　アニ　アン　イタㇰ　イタㇰ　エエパケタ　ヤクン―　メチャㇰコ　アン　ウシケ、　アニ　アン　イタㇰ　イベヘ　ネ　ルウェ　ネ。",
		alt: "Awa, Gorogota ani aye usike un sinuma turano araki; ney Gorogota ani an itak itak eepaketa yakun- Mecakko an usike, ani an itak ibehe ne ruwe ne.",
		native: "They brought Jesus to the place which was known as Golgotha - a name which means \'place of a Skull.\'",
		words: [ 'アワ', 'ゴロゴタ', 'アニ', 'アイェ', 'ウシケ', 'ウン', 'シヌマ', 'トゥラノ', 'アラキ', 'ネイ', 'ゴロゴタ', 'アニ', 'アン', 'イタㇰ', 'イタㇰ', 'エエパケタ', 'ヤクン', 'メチャㇰコ', 'アン', 'ウシケ', 'アニ', 'アン', 'イタㇰ', 'イベヘ', 'ネ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.15.21.wav",
		quizWords: [ 'ウシケ' ]
	},
	{
		target: "オロワ、　シヌマ　オッタ　モッスヤク　ウコポイェゲ　ワ　アン　トノト　コレ、　コロカ、　シヌマ　ネイ　アㇺベ　ウㇰ　ソモキ　ニサ　ルウェ　ネ。",
		alt: "Orowa, sinuma otta motsuyaku ukopoyege wa an tonoto kore, koroka, sinuma ney ambe uk somoki nisa ruwe ne.",
		native: "There they offered him drugged wine; but Jesus refused it.",
		words: [ 'オロワ', 'シヌマ', 'オッタ', 'モッスヤク', 'ウコポイェゲ', 'ワ', 'アン', 'トノト', 'コレ', 'コロカ', 'シヌマ', 'ネイ', 'アㇺベ', 'ウㇰ', 'ソモキ', 'ニサ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.15.22.wav",
		quizSentence: true
	},
	{
		target: "オロワ、　ネイ　ウタラ　アナㇰ　ネ　シヌマ　ウタラ　チクニ　オッタ　クンギ　コキㇰキㇰ、　サマタ、　シネン　ランゲ　イナㇺベ　ウㇰ　ヤ　エサンニヨ　クニ　ネ　コロ　アミプ　クス　ウココンチ　エタイェ　ワ　ネイ　ミピヒ　ウコウサライェ　ニサ　ルウェ　ネ。",
		alt: "Orowa, ney utara anak ne sinuma utara cikuni otta kungi kokikkik, samata, sinen range inambe uk ya esanniyo kuni ne koro amip kusu ukokonci etaye wa ney mipihi ukousaraye nisa ruwe ne.",
		native: "Then they crucified him, and divided his clothes among them, casting lots for them, to settle what each should take.",
		words: [ 'オロワ', 'ネイ', 'ウタラ', 'アナㇰ', 'ネ', 'シヌマ', 'ウタラ', 'チクニ', 'オッタ', 'クンギ', 'コキㇰキㇰ', 'サマタ', 'シネン', 'ランゲ', 'イナㇺベ', 'ウㇰ', 'ヤ', 'エサンニヨ', 'クニ', 'ネ', 'コロ', 'アミプ', 'クス', 'ウココンチ', 'エタイェ', 'ワ', 'ネイ', 'ミピヒ', 'ウコウサライェ', 'ニサ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.15.23.wav",
		quizWords: [ 'ウコウサライェ', 'エタイェ' ]
	},
	{
		target: "レ　パキヒ　タ　ネイ　ウタラ　アナㇰ　ネ　イェス　ウタサ　チクニ　オッタ　クンギ　コキㇰキㇰ　ニサ　ルウェ　ネ。",
		alt: "Re pakihi ta ney utara anak ne Yesu utasa cikuni otta kungi kokikkik nisa ruwe ne.",
		native: "It was nine in the morning when they crucified him.",
		words: [ 'レ', 'パキヒ', 'タ', 'ネイ', 'ウタラ', 'アナㇰ', 'ネ', 'イェス', 'ウタサ', 'チクニ', 'オッタ', 'クンギ', 'コキㇰキㇰ', 'ニサ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.15.24.wav",
		quizSentence: true
	},
	{
		target: "オロワ、　シヌマ　カシケタ　タン　アヌイェ　ワ　アン　エイヨン―ヌプバ　イキリ　アヌイェ　ワ　アン　ユデア　ウン　ウタラ　シㇰカシマ　グル。",
		alt: "Orowa, sinuma kasiketa tan anuye wa an eiyon-nupba ikiri anuye wa an Yudea un utara sikkasima guru.",
		native: "The words of the charge against him, written up over his head, read - \'THE KING OF THE JEWS.\'",
		words: [ 'オロワ', 'シヌマ', 'カシケタ', 'タン', 'アヌイェ', 'ワ', 'アン', 'エイヨン', 'ヌプバ', 'イキリ', 'アヌイェ', 'ワ', 'アン', 'ユデア', 'ウン', 'ウタラ', 'シㇰカシマ', 'グル' ],
		audio: "audio/mark.15.25.wav",
		quizWords: [ 'アヌイェ' ]
	},
	{
		target: "サマタ、　シヌマ　トゥラ　トゥ　イㇰカ",
		alt: "Samata, sinuma tura tu ikka",
		native: "And with him they crucified two robbers, one on the right, and the other on the left.",
		words: [ 'サマタ', 'シヌマ', 'トゥラ', 'トゥ', 'イㇰカ' ],
		audio: "audio/mark.15.26.wav",
		quizSentence: true
	},
	{
		target: "グル　シネン　シヌマ　シモン　テㇰ　サマタ、　シネン　シヌマ　ハリキ　テㇰ　サマタ　アクンギ　コキㇰキㇰ　ニサ　ルウェ　ネ。",
		alt: "guru sinen sinuma simon tek samata, sinen sinuma hariki tek samata akungi kokikkik nisa ruwe ne.",
		native: "[Note: Some later manuscripts add: And the scripture was fulfilled that says, \'He was counted among outlaws.\' ]",
		words: [ 'グル', 'シネン', 'シヌマ', 'シモン', 'テㇰ', 'サマタ', 'シネン', 'シヌマ', 'ハリキ', 'テㇰ', 'サマタ', 'アクンギ', 'コキㇰキㇰ', 'ニサ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.15.27.wav",
		quizSentence: true
	},
	{
		target: "オロワノ、　シリクㇱ　ウタラ　アナㇰ　ネ　シヌマ　エオヤ　イタㇰ　ヒネ　コロ　サパ　スイェスイェ　ワ　エネ　イタㇰヒ、",
		alt: "Orowano, sirikus utara anak ne sinuma eoya itak hine koro sapa suyesuye wa ene itakhi,",
		native: "The passers-by railed at him, shaking their heads, as they said, \"Ah! You who would destroy the Temple and build one in three days,",
		words: [ 'オロワノ', 'シリクㇱ', 'ウタラ', 'アナㇰ', 'ネ', 'シヌマ', 'エオヤ', 'イタㇰ', 'ヒネ', 'コロ', 'サパ', 'スイェスイェ', 'ワ', 'エネ', 'イタㇰヒ' ],
		audio: "audio/mark.15.28.wav",
		quizWords: [ 'スイェスイェ' ]
	},
	{
		target: "アハ、　カムイ　コラ　ケンル　イサㇺカ　ワ　レレコ　ウトゥルタ　エアシンノ　カラ　グル、　ヤイカオビウキ　ワ　ウタサ　チクニ　ワノ　ラン　ヤン、　アリ　イタㇰ。",
		alt: "Aha, Kamui kora kenru isamka wa rereko uturuta easinno kara guru, yaikaobiuki wa utasa cikuni wano ran yan, ari itak.",
		native: "come down from the cross and save yourself!\"",
		words: [ 'アハ', 'カムイ', 'コラ', 'ケンル', 'イサㇺカ', 'ワ', 'レレコ', 'ウトゥルタ', 'エアシンノ', 'カラ', 'グル', 'ヤイカオビウキ', 'ワ', 'ウタサ', 'チクニ', 'ワノ', 'ラン', 'ヤン', 'アリ', 'イタㇰ' ],
		audio: "audio/mark.15.29.wav",
		quizWords: [ 'ラン', 'アハ' ]
	},
	{
		target: "スイ、　アン　アイ　コラチ　カムイ　コラ　ケンル　エサパネ　ウタラ　アナㇰ　ネ　カㇺピ　ヌイェ　ウタラ　トゥラ　イェス　ウコエオヤ　イタㇰ　ワ　エネ　イェ　ヒシヌマ　ウタラ　カシオビウキ、　コロカ、　ヤイコタ　ヤイカオビウキ　エアイカプベ　ネ　ルウェ　ネ。",
		alt: "sui, an ai koraci Kamui kora kenru esapane utara anak ne kampi nuye utara tura Yesu ukoeoya itak wa ene ye hisinuma utara kasiobiuki, koroka, yaikota yaikaobiuki eaikapbe ne ruwe ne.",
		native: "In the same way the chief priests, with the teachers of the Law, said to one another in mockery,",
		words: [ 'スイ', 'アン', 'アイ', 'コラチ', 'カムイ', 'コラ', 'ケンル', 'エサパネ', 'ウタラ', 'アナㇰ', 'ネ', 'カㇺピ', 'ヌイェ', 'ウタラ', 'トゥラ', 'イェス', 'ウコエオヤ', 'イタㇰ', 'ワ', 'エネ', 'イェ', 'ヒシヌマ', 'ウタラ', 'カシオビウキ', 'コロカ', 'ヤイコタ', 'ヤイカオビウキ', 'エアイカプベ', 'ネ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.15.30.wav",
		quizSentence: true
	},
	{
		target: "チ　ウタラ　ヌカラ　ワ　エイソコロ　クニ　ネ、　ネイ　キリㇱト　ネイ　イㇱラエル　シㇰカシマ　グル　タネ　ウタサ　チクニ　ワノ　ラン　ヤㇰ　ピリカ、　セコロ　イタㇰ。　サマタ、　トゥラノ　ウタサ　チクニ　オッタ　アクンギ　コキㇰキㇰ　ウタラ　シヌマ　エサプセ　ニサ　ルウェ　ネ　ナ。",
		alt: "ci utara nukara wa eisokoro kuni ne, ney Kiristo ney Israeru sikkasima guru tane utasa cikuni wano ran yak pirika, sekoro itak. Samata, turano utasa cikuni otta akungi kokikkik utara sinuma esapse nisa ruwe ne na.",
		native: "\"He saved others, but he cannot save himself! Let the Christ, the \'king of Israel,\' come down from the cross now so that we can see it and believe.\" Even the men who had been crucified with Jesus insulted him.",
		words: [ 'チ', 'ウタラ', 'ヌカラ', 'ワ', 'エイソコロ', 'クニ', 'ネ', 'ネイ', 'キリㇱト', 'ネイ', 'イㇱラエル', 'シㇰカシマ', 'グル', 'タネ', 'ウタサ', 'チクニ', 'ワノ', 'ラン', 'ヤㇰ', 'ピリカ', 'セコロ', 'イタㇰ', 'サマタ', 'トゥラノ', 'ウタサ', 'チクニ', 'オッタ', 'アクンギ', 'コキㇰキㇰ', 'ウタラ', 'シヌマ', 'エサプセ', 'ニサ', 'ルウェ', 'ネ', 'ナ' ],
		audio: "audio/mark.15.31.wav",
		quizSentence: true
	},
	{
		target: "オロワノ、　イワン　パキヒ　エㇰ　コロ　シネペサン　パキヒ　パㇰノ　シリ　エビッタ　シリクンネ　アン。",
		alt: "Orowano, iwan pakihi ek koro sinepesan pakihi pakno siri ebitta sirikunne an.",
		native: "At midday, a darkness came over the whole country, lasting until three in the afternoon.",
		words: [ 'オロワノ', 'イワン', 'パキヒ', 'エㇰ', 'コロ', 'シネペサン', 'パキヒ', 'パㇰノ', 'シリ', 'エビッタ', 'シリクンネ', 'アン' ],
		audio: "audio/mark.15.32.wav",
		quizWords: [ 'エビッタ' ]
	},
	{
		target: "アワ、　シネペサン　パキヒ　タ　イェス　ルイ　ハウ　サンゲ　ワ　エネ　イタㇰヒ:　―　エロイ、　エロイ、　ラマ　サバㇰタニ？　アリ　イタㇰ。　タン　イタㇰ　エエパケタ　ヤクン、―ク　ゴロ　カムイ、　ク　ゴロ　カムイ、　ネプ　クス　エ　エン　エマカ　ヤ？　セコㇽ　アン　イタㇰ　ネ。",
		alt: "Awa, sinepesan pakihi ta Yesu rui hau sange wa ene itakhi: - Eroi, eroi, rama sabaktani? ari itak. Tan itak eepaketa yakun,-Ku goro Kamui, Ku goro Kamui, nep kusu E en emaka ya? sekor an itak ne.",
		native: "And, at three, Jesus called out loudly, \"Eloi, Eloi, lama sabacthani?\" which means \'My God, my God, why have you forsaken me?\'",
		words: [ 'アワ', 'シネペサン', 'パキヒ', 'タ', 'イェス', 'ルイ', 'ハウ', 'サンゲ', 'ワ', 'エネ', 'イタㇰヒ', 'エロイ', 'エロイ', 'ラマ', 'サバㇰタニ', 'アリ', 'イタㇰ', 'タン', 'イタㇰ', 'エエパケタ', 'ヤクン', 'ク', 'ゴロ', 'カムイ', 'ク', 'ゴロ', 'カムイ', 'ネプ', 'クス', 'エ', 'エン', 'エマカ', 'ヤ', 'セコㇽ', 'アン', 'イタㇰ', 'ネ' ],
		audio: "audio/mark.15.33.wav",
		quizWords: [ 'エマカ' ]
	},
	{
		target: "オロワ、　サマケタ　ロㇱキ　ワ　オカイ　ウタラ　トゥムゲ　ウン　ウタラ　ネイ　イタㇰ　ヌ　チキ　インガラ、　シヌマ　エリチャ　ニスㇰ　ナ、　アニ　イタㇰ。",
		alt: "Orowa, samaketa roski wa okai utara tumuge un utara ney itak nu ciki Ingara, sinuma Erica nisuk na, ani itak.",
		native: "Some of those standing around heard this, and said, \"Listen! He is calling for Elijah!\"",
		words: [ 'オロワ', 'サマケタ', 'ロㇱキ', 'ワ', 'オカイ', 'ウタラ', 'トゥムゲ', 'ウン', 'ウタラ', 'ネイ', 'イタㇰ', 'ヌ', 'チキ', 'インガラ', 'シヌマ', 'エリチャ', 'ニスㇰ', 'ナ', 'アニ', 'イタㇰ' ],
		audio: "audio/mark.15.34.wav",
		quizWords: [ 'トゥムゲ', 'ニスㇰ' ]
	},
	{
		target: "オロワ、　シネ　アイヌ　ホユプ　ワ　スㇰカケプ　アニ　アトゥイ　ワタ　オロ　エㇱ　ヒㇰテ　ヒネ　ラペㇺベ　エトゥ　エウㇱ、　オロワ、　シヌマ　ク　クニ　コレ　ワ　エネ　イタㇰヒ、　イテキ　エコッタヌ;　エリチャ　エㇰ　ワ　シヌマ　ランゲ　ヤ　ソモ　ヤ　チ　ヌカンロ、　アニ　イタㇰ。",
		alt: "Orowa, sine ainu hoyupu wa sukkakep ani atui wata oro es hikte hine rapembe etu eus, orowa, sinuma ku kuni kore wa ene itakhi, Iteki ekottanu; Erica ek wa sinuma range ya somo ya ci nukanro, ani itak.",
		native: "And a man ran, and, soaking a sponge in common wine, put it on the end of a rod, and offered it to him to drink, saying as he did so, \"Wait and let us see if Elijah is coming to take him down.\"",
		words: [ 'オロワ', 'シネ', 'アイヌ', 'ホユプ', 'ワ', 'スㇰカケプ', 'アニ', 'アトゥイ', 'ワタ', 'オロ', 'エㇱ', 'ヒㇰテ', 'ヒネ', 'ラペㇺベ', 'エトゥ', 'エウㇱ', 'オロワ', 'シヌマ', 'ク', 'クニ', 'コレ', 'ワ', 'エネ', 'イタㇰヒ', 'イテキ', 'エコッタヌ', 'エリチャ', 'エㇰ', 'ワ', 'シヌマ', 'ランゲ', 'ヤ', 'ソモ', 'ヤ', 'チ', 'ヌカンロ', 'アニ', 'イタㇰ' ],
		audio: "audio/mark.15.35.wav",
		quizWords: [ 'ワタ', 'エトゥ', 'エㇱ', 'エコッタヌ' ]
	},
	{
		target: "オロワ、　イェス　ルイ　ハウェ　サンゲ　ワ　ラマッ　アラパレ　ニサ　ルウェ　ネ。",
		alt: "Orowa, Yesu rui hawe sange wa ramat arapare nisa ruwe ne.",
		native: "But Jesus, giving a loud cry, breathed his last.",
		words: [ 'オロワ', 'イェス', 'ルイ', 'ハウェ', 'サンゲ', 'ワ', 'ラマッ', 'アラパレ', 'ニサ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.15.36.wav",
		quizWords: [ 'アラパレ' ]
	},
	{
		target: "オロワノ、　カムイ　コラ　ケンル　タ　アン　オッベ　アナㇰ　ネ　ホリカシ　ワノ　ラ　オロ　パㇰノ　トゥプ　ネ　アヤㇱケ　エウコピ　ニサ　ルウェ　ネ。",
		alt: "Orowano, Kamui kora kenru ta an otbe anak ne horikasi wano ra oro pakno tup ne ayaske eukopi nisa ruwe ne.",
		native: "The Temple curtain was torn in two from top to bottom.",
		words: [ 'オロワノ', 'カムイ', 'コラ', 'ケンル', 'タ', 'アン', 'オッベ', 'アナㇰ', 'ネ', 'ホリカシ', 'ワノ', 'ラ', 'オロ', 'パㇰノ', 'トゥプ', 'ネ', 'アヤㇱケ', 'エウコピ', 'ニサ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.15.37.wav",
		quizWords: [ 'エウコピ', 'ホリカシ', 'ラ' ]
	},
	{
		target: "オロワ、　イェス　サマケタ　アㇱ　ワ　アン　ケン　トゥリオン　アナㇰ　ネ　シヌマ　ネイノ　ラマッ　アラパレ　シリ　ヌカラ　チキ;―ソオンノ　ポカ　タン　グル　アナㇰ　ネ　カムイ　ポホ　ネ　ルウェ　ネ、　セコロ　イタㇰ。",
		alt: "Orowa, Yesu samaketa as wa an Ken turion anak ne sinuma neyno ramat arapare siri nukara ciki;-Soonno poka tan guru anak ne Kamui Poho ne ruwe ne, sekoro itak.",
		native: "The Roman officer, who was standing facing Jesus, on seeing the way in which he breathed his last, exclaimed, \"This man must indeed have been God\'s son!\"",
		words: [ 'オロワ', 'イェス', 'サマケタ', 'アㇱ', 'ワ', 'アン', 'ケン', 'トゥリオン', 'アナㇰ', 'ネ', 'シヌマ', 'ネイノ', 'ラマッ', 'アラパレ', 'シリ', 'ヌカラ', 'チキ', 'ソオンノ', 'ポカ', 'タン', 'グル', 'アナㇰ', 'ネ', 'カムイ', 'ポホ', 'ネ', 'ルウェ', 'ネ', 'セコロ', 'イタㇰ' ],
		audio: "audio/mark.15.38.wav",
		quizWords: [ 'ケン' ]
	},
	{
		target: "オロワノ、　オトゥイマ　シッタ　ロㇱキ　ワ　オカイ　インガラ　コラン　シウェンテプ　ウタラ　カ　オカイ:　ネイ　トゥムゲタ　マㇰダレネ　ウン　マリア　ヘㇺヘㇺ、　ヤコブ　ネワ　ポン　ヨセㇱ　コロ　ハボ　マリア　ヘㇺヘㇺ、　サロメ　ヘㇺヘㇺ　オカイ　ルウェ　ネ;",
		alt: "Orowano, otuima sitta roski wa okai ingara koran siwentep utara ka okai: ney tumugeta Makdarene un Maria hemhem, Yakob newa pon Yoses koro habo Maria hemhem, Sarome hemhem okai ruwe ne;",
		native: "There were some women also watching from a distance, among them being Mary of Magdala, Mary the mother of James the Little and of Joseph, and Salome -",
		words: [ 'オロワノ', 'オトゥイマ', 'シッタ', 'ロㇱキ', 'ワ', 'オカイ', 'インガラ', 'コラン', 'シウェンテプ', 'ウタラ', 'カ', 'オカイ', 'ネイ', 'トゥムゲタ', 'マㇰダレネ', 'ウン', 'マリア', 'ヘㇺヘㇺ', 'ヤコブ', 'ネワ', 'ポン', 'ヨセㇱ', 'コロ', 'ハボ', 'マリア', 'ヘㇺヘㇺ', 'サロメ', 'ヘㇺヘㇺ', 'オカイ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.15.39.wav",
		quizSentence: true
	},
	{
		target: "シヌマ　ガリラヤ　モシリ　タ　アン　イタ、　タン　ウタラ　ネイ　オシ　パイェ　ワ　オッタ　ヤイシエイワンゲレ　ニサ　ルウェ　ネ;　サマタ、　シヌマ　トゥラノ　イェルサレㇺ　コタン　オッタ　アラキ　モシマ　オカイ　インネ　シウェンテプ　オカイ　ルウェ　ネ　ナ。",
		alt: "sinuma Gariraya mosiri ta an ita, tan utara ney osi paye wa otta yaisieiwangere nisa ruwe ne; samata, sinuma turano Yerusarem kotan otta araki mosima okai inne siwentep okai ruwe ne na.",
		native: "all of whom used to accompany Jesus when he was in Galilee, and give him support - besides many other women who had come up with him to Jerusalem.",
		words: [ 'シヌマ', 'ガリラヤ', 'モシリ', 'タ', 'アン', 'イタ', 'タン', 'ウタラ', 'ネイ', 'オシ', 'パイェ', 'ワ', 'オッタ', 'ヤイシエイワンゲレ', 'ニサ', 'ルウェ', 'ネ', 'サマタ', 'シヌマ', 'トゥラノ', 'イェルサレㇺ', 'コタン', 'オッタ', 'アラキ', 'モシマ', 'オカイ', 'インネ', 'シウェンテプ', 'オカイ', 'ルウェ', 'ネ', 'ナ' ],
		audio: "audio/mark.15.40.wav",
		quizWords: [ 'モシマ' ]
	},
	{
		target: "オロワ、　タネ　シリ　オヌマン　アン　コロ、　シニ　トホ　エトコ　アン　トホ　タ、　エトコイキ　アニ　レイヘイ　アン　トホ　ネ　ルウェ　ネ　クス、",
		alt: "Orowa, tane siri onuman an koro, sini toho etoko an toho ta, Etokoyki ani reihei an toho ne ruwe ne kusu,",
		native: "The evening had already fallen, when, as it was the Preparation day - the day before the Sabbath -",
		words: [ 'オロワ', 'タネ', 'シリ', 'オヌマン', 'アン', 'コロ', 'シニ', 'トホ', 'エトコ', 'アン', 'トホ', 'タ', 'エトコイキ', 'アニ', 'レイヘイ', 'アン', 'トホ', 'ネ', 'ルウェ', 'ネ', 'クス' ],
		audio: "audio/mark.15.41.wav",
		quizWords: [ 'シニ', 'エトコ' ]
	},
	{
		target: "ヤイコタ　カムイ　モシリ　エチパチパ　ワ　アン　ア　アイヌ　コロ　ウコラㇺコロ　グル　アリマテア　ウン　ヨセプ　エㇰ;　シヌマ　ラメトㇰコンノ　ピラト　オッタ　アフン　ワ　イェス　コン　ネトバケ　コラㇺコン　ニサ　ルウェ　ネ。",
		alt: "yaikota Kamui mosiri ecipacipa wa an a ainu koro ukoramkoro guru Arimatea un Yosep ek; sinuma rametokkonno Pirato otta ahun wa Yesu kon netobake koramkon nisa ruwe ne.",
		native: "Joseph from Arimathea, a councillor of good position, who was himself living in expectation of the kingdom of God, came and ventured to go in to see Pilate, and to ask for the body of Jesus.",
		words: [ 'ヤイコタ', 'カムイ', 'モシリ', 'エチパチパ', 'ワ', 'アン', 'ア', 'アイヌ', 'コロ', 'ウコラㇺコロ', 'グル', 'アリマテア', 'ウン', 'ヨセプ', 'エㇰ', 'シヌマ', 'ラメトㇰコンノ', 'ピラト', 'オッタ', 'アフン', 'ワ', 'イェス', 'コン', 'ネトバケ', 'コラㇺコン', 'ニサ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.15.42.wav",
		quizWords: [ 'コラㇺコン', 'ネトバケ', 'エチパチパ' ]
	},
	{
		target: "アワ、　ピラト　アナㇰ　ネ　タネ　シヌマ　ライ　オケレ　カトゥ　エヌㇱカリ:　オロワ、　ネイ　ケントゥリオン　タㇰ　ヤラ　ヒネ　シヌマ　オホンノ　ライ　ルウェ　ヘ　アン　アニ　ウウェペケンヌ。",
		alt: "Awa, Pirato anak ne tane sinuma rai okere katu enuskari: orowa, ney Kenturion tak yara hine sinuma ohonno rai ruwe he an ani uwepekennu.",
		native: "But Pilate was surprised to hear that he had already died. So he sent for the officer, and asked if he were already dead;",
		words: [ 'アワ', 'ピラト', 'アナㇰ', 'ネ', 'タネ', 'シヌマ', 'ライ', 'オケレ', 'カトゥ', 'エヌㇱカリ', 'オロワ', 'ネイ', 'ケントゥリオン', 'タㇰ', 'ヤラ', 'ヒネ', 'シヌマ', 'オホンノ', 'ライ', 'ルウェ', 'ヘ', 'アン', 'アニ', 'ウウェペケンヌ' ],
		audio: "audio/mark.15.43.wav",
		quizWords: [ 'ヤラ', 'カトゥ', 'タㇰ' ]
	},
	{
		target: "オロワノ、　ネイ　ケントゥリオン　オロワノ　ル　チキ、　ヨセプ　オッタ　ネイ　カイセイ　コロパレ　ニサ　ルウェ　ネ。",
		alt: "Orowano, ney Kenturion orowano Ru ciki, Yosep otta ney kaisei koropare nisa ruwe ne.",
		native: "and, on learning from the officer that it was so, he gave the corpse to Joseph.",
		words: [ 'オロワノ', 'ネイ', 'ケントゥリオン', 'オロワノ', 'ル', 'チキ', 'ヨセプ', 'オッタ', 'ネイ', 'カイセイ', 'コロパレ', 'ニサ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.15.44.wav",
		quizWords: [ 'カイセイ' ]
	},
	{
		target: "アイネ、　ネイ　グル　センカキ　ホㇰ、　オロワ、　シヌマ　ランゲ　ヒネ　ネイ　センカキ　オッタ　コカラカリ　ワ　ワタラ　アオウリ　ワ　アン　トゥシリ　オロタ　アンデ、　オロワノ、　ポロ　スマ　トゥシリ　アパ　オッタ　カラカラセレ　ニサ　ルウェ　ネ。",
		alt: "Aine, ney guru senkaki hok, orowa, sinuma range hine ney senkaki otta kokarakari wa watara aouri wa an tusiri orota ande, orowano, poro suma tusiri apa otta karakarasere nisa ruwe ne.",
		native: "Joseph, having bought a linen sheet, took Jesus down, and wound the sheet around him, and laid him in a tomb which had been cut out of the rock; and then rolled a stone up against the entrance of the tomb.",
		words: [ 'アイネ', 'ネイ', 'グル', 'センカキ', 'ホㇰ', 'オロワ', 'シヌマ', 'ランゲ', 'ヒネ', 'ネイ', 'センカキ', 'オッタ', 'コカラカリ', 'ワ', 'ワタラ', 'アオウリ', 'ワ', 'アン', 'トゥシリ', 'オロタ', 'アンデ', 'オロワノ', 'ポロ', 'スマ', 'トゥシリ', 'アパ', 'オッタ', 'カラカラセレ', 'ニサ', 'ルウェ', 'ネ' ],
		audio: "audio/mark.15.45.wav",
		quizWords: [ 'アンデ', 'センカキ', 'トゥシリ', 'スマ' ]
	},
	{
		target: "アイゲ、　マㇰダレネ　ウン　マリア　ネワ　ヨセㇱ　コロ　ハボ　マリア　アナㇰ　ネ　シヌマ　アアンデ　ウシケ　ヌカン――ニサ　ルウェ　ネ　ナ。",
		alt: "Aige, Makdarene un Maria newa Yoses koro habo Maria anak ne sinuma aande usike nukan--nisa ruwe ne na.",
		native: "Mary of Magdala and Mary, the mother of Joseph, were watching to see where he was laid.",
		words: [ 'アイゲ', 'マㇰダレネ', 'ウン', 'マリア', 'ネワ', 'ヨセㇱ', 'コロ', 'ハボ', 'マリア', 'アナㇰ', 'ネ', 'シヌマ', 'アアンデ', 'ウシケ', 'ヌカン', 'ニサ', 'ルウェ', 'ネ', 'ナ' ],
		audio: "audio/mark.15.46.wav",
		quizSentence: true
	}
];
