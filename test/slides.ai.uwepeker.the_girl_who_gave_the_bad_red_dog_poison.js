const gLang = 'ai';
const gBook = 'uwepeker';
const gChap = 'the_girl_who_gave_the_bad_red_dog_poison';
const gMode = 'ai';
const gSpeed = '120';

const slideData =
[
	{
		target: "ネ　エネ　イキ　ワ　アン　ペ　ア　ネ　ヒ　カ　ア　エラミㇱカリ　ノ、",
		alt: "ne ene iki wa an pe a= ne hi ka a= eramiskari no,",
		native: "I don\'t know why it happened,",
		words: [ 'ネ', 'エネ', 'イキ', 'ワ', 'アン', 'ペ', 'ア', 'ネ', 'ヒ', 'カ', 'ア', 'エラミㇱカリ', 'ノ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/0.wav",
		quizWords: [ 'エラミㇱカリ' ]
	},
	{
		target: "ポロ　チセ　オㇽ_　タ　ヤイェシカルン　アン。",
		alt: "poro cise or_ ta yayesikarun =an.",
		native: "but as long as I remember, I lived in a big house.",
		words: [ 'ポロ', 'チセ', 'オㇽ', 'タ', 'ヤイェシカルン', 'アン' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/1.wav",
		quizWords: [ 'チセ', 'オㇽ' ]
	},
	{
		target: "マッカチ　ア　ネ　ヒネ　アン　アン　ペ　ネ　ルウェ　ネ　ヒネ、",
		alt: "matkaci a= ne hine an =an pe ne ruwe ne hine,",
		native: "I was a girl.",
		words: [ 'マッカチ', 'ア', 'ネ', 'ヒネ', 'アン', 'アン', 'ペ', 'ネ', 'ルウェ', 'ネ', 'ヒネ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/2.wav",
		quizSentence: true
	},
	{
		target: "ネン　イ　エパカㇱヌ　カ　ソモ　キ　コㇽカ、",
		alt: "nen i= epakasnu ka somo ki korka,",
		native: "Nobody really taught me,",
		words: [ 'ネン', 'イ', 'エパカㇱヌ', 'カ', 'ソモ', 'キ', 'コㇽカ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/3.wav",
		quizWords: [ 'コㇽカ' ]
	},
	{
		target: "ネプ　ネ　ルウェ　ネ　ヤ　ムイェ　ア　カㇽ　ワ、",
		alt: "nep ne ruwe ne ya muye a= kar wa,",
		native: "[but I have memories of] taking things bundled",
		words: [ 'ネプ', 'ネ', 'ルウェ', 'ネ', 'ヤ', 'ムイェ', 'ア', 'カㇽ', 'ワ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/4.wav",
		quizWords: [ 'カㇽ', 'ムイェ' ]
	},
	{
		target: "パㇽカ　エシㇰ　ワ　オカイ　ペ、",
		alt: "parka esik wa okay pe,",
		native: "on the shelves",
		words: [ 'パㇽカ', 'エシㇰ', 'ワ', 'オカイ', 'ペ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/5.wav",
		quizWords: [ 'オカイ', 'パㇽカ', 'エシㇰ' ]
	},
	{
		target: "ヤイェシカルン　アン　ヒ　オラノ　ア　ラプテ。",
		alt: "yayesikarun =an hi orano a= rapte.",
		native: "(I have memories of) and lowering them.",
		words: [ 'ヤイェシカルン', 'アン', 'ヒ', 'オラノ', 'ア', 'ラプテ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/6.wav",
		quizWords: [ 'オラノ' ]
	},
	{
		target: "ニ　ア　コㇽ　ア　オッケオッケ　ワ　ア　ラプテ　ワ",
		alt: "ni a= kor a= otkeotke wa a= rapte wa",
		native: "I used a stick to pull them down,",
		words: [ 'ニ', 'ア', 'コㇽ', 'ア', 'オッケオッケ', 'ワ', 'ア', 'ラプテ', 'ワ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/7.wav",
		quizWords: [ 'ニ' ]
	},
	{
		target: "ヲㇽ　ア　オマレ　ワ　ア　フライェ　ワ、",
		alt: "wor a= omare wa a= huraye wa,",
		native: "and I put them in water and washed.",
		words: [ 'ヲㇽ', 'ア', 'オマレ', 'ワ', 'ア', 'フライェ', 'ワ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/8.wav",
		quizWords: [ 'フライェ', 'ヲㇽ' ]
	},
	{
		target: "ネン　イ　エパカㇱヌ　ソモ　キ　コㇽカ、",
		alt: "nen i= epakasnu somo ki korka,",
		native: "Nobody really taught me,",
		words: [ 'ネン', 'イ', 'エパカㇱヌ', 'ソモ', 'キ', 'コㇽカ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/9.wav",
		quizSentence: true
	},
	{
		target: "アペ　ア　アリ。",
		alt: "ape a= ari.",
		native: "but I started a fire.",
		words: [ 'アペ', 'ア', 'アリ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/10.wav",
		quizWords: [ 'アペ' ]
	},
	{
		target: "ニ　ポロンノ　セㇺ　オㇽ_　タ　オカイ　ペ　ネ　クㇱ、",
		alt: "ni poronno sem or_ ta okay pe ne kus,",
		native: "There was lots of firewood in the shed,",
		words: [ 'ニ', 'ポロンノ', 'セㇺ', 'オㇽ', 'タ', 'オカイ', 'ペ', 'ネ', 'クㇱ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/11.wav",
		quizWords: [ 'セㇺ' ]
	},
	{
		target: "アペ　ア　アリ　ワ　ア　スパ　ワ　ア　エ　コㇽ",
		alt: "ape a= ari wa a= supa wa a= e kor",
		native: "and I used that to make a fire and cook food.",
		words: [ 'アペ', 'ア', 'アリ', 'ワ', 'ア', 'スパ', 'ワ', 'ア', 'エ', 'コㇽ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/12.wav",
		quizSentence: true
	},
	{
		target: "ケラアン　ヒケ　ア　エ　コㇽ　アン　アン。",
		alt: "keraan hike a= e kor an =an.",
		native: "I ate many delicious things everyday.",
		words: [ 'ケラアン', 'ヒケ', 'ア', 'エ', 'コㇽ', 'アン', 'アン' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/13.wav",
		quizWords: [ 'ケラアン' ]
	},
	{
		target: "オラウン　ソ　ノㇱキ　パㇰノ　トゥムン　リキン　ワ　アン　ペ　ネ　クス、",
		alt: "oraun so noski pakno tumun rikin wa an pe ne kusu,",
		native: "There was trash piled to the middle of the floor.",
		words: [ 'オラウン', 'ソ', 'ノㇱキ', 'パㇰノ', 'トゥムン', 'リキン', 'ワ', 'アン', 'ペ', 'ネ', 'クス' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/14.wav",
		quizWords: [ 'オラウン', 'ノㇱキ', 'トゥムン', 'ソ' ]
	},
	{
		target: "オラノ　トゥムン　。。。　ネプ　*アエヤイ　。。。　ナニ　トゥカウモノデモ　アルカラ",
		alt: "orano tumun ... nep *aeyay ... NANI TUKAUMONODEMO ARUKARA",
		native: "The trash, there were many ...[many tools],",
		words: [ 'オラノ', 'トゥムン', 'ネプ', 'アエヤイ', 'ナニ', 'トゥカウモノデモ', 'アルカラ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/15.wav",
		quizSentence: true
	},
	{
		target: "コント、　ネプ　アエヤイラメコテプ　ネ　ヤㇰカ　オカイ　ペ　ネ　クス、",
		alt: "konto, nep aeyayramekotep ne yakka okay pe ne kusu,",
		native: "There were all sorts of tools, so",
		words: [ 'コント', 'ネプ', 'アエヤイラメコテプ', 'ネ', 'ヤㇰカ', 'オカイ', 'ペ', 'ネ', 'クス' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/16.wav",
		quizWords: [ 'コント', 'アエヤイラメコテプ' ]
	},
	{
		target: "アニ　ア　ニンパ　ワ　ソイ　ア　オマレ　ワ　ソイ　ア　オマレ。",
		alt: "ani a= ninpa wa soy a= omare wa soy a= omare.",
		native: "I used them to pull the trash outside,",
		words: [ 'アニ', 'ア', 'ニンパ', 'ワ', 'ソイ', 'ア', 'オマレ', 'ワ', 'ソイ', 'ア', 'オマレ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/17.wav",
		quizWords: [ 'ニンパ', 'ソイ' ]
	},
	{
		target: "チセ　オンナイ　カ　ピㇽカノ　ア　カㇽ。",
		alt: "cise onnay ka pirkano a= kar.",
		native: "and I cleaned the house up.",
		words: [ 'チセ', 'オンナイ', 'カ', 'ピㇽカノ', 'ア', 'カㇽ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/18.wav",
		quizWords: [ 'ピㇽカノ', 'オンナイ' ]
	},
	{
		target: "オラノ　ミンタㇽ　オㇽ　カ　ムン　サㇰ　ノ　ピㇽカノ　アン　アン　クニ　ネ　チセ　オカリ　ムニ　ア　カㇽ。",
		alt: "orano mintar or ka mun sak no pirkano an =an kuni ne cise okari muni a= kar.",
		native: "I cleared all of the trash out of the porch and tidied up the area. I cleaned around the house as well.",
		words: [ 'オラノ', 'ミンタㇽ', 'オㇽ', 'カ', 'ムン', 'サㇰ', 'ノ', 'ピㇽカノ', 'アン', 'アン', 'クニ', 'ネ', 'チセ', 'オカリ', 'ムニ', 'ア', 'カㇽ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/19.wav",
		quizWords: [ 'ミンタㇽ' ]
	},
	{
		target: "ネプ　アエヤイラメコテプ　ネ　ヤㇰカ　オカイ　ペ　ネ　クス、",
		alt: "nep aeyayramekotep ne yakka okay pe ne kusu,",
		native: "All sorts of tools were available",
		words: [ 'ネプ', 'アエヤイラメコテプ', 'ネ', 'ヤㇰカ', 'オカイ', 'ペ', 'ネ', 'クス' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/20.wav",
		quizSentence: true
	},
	{
		target: "チセ　オンナイ　ウン。。。　カ　ピㇽカノ　ア　カㇽ。",
		alt: "cise onnay un... ka pirkano a= kar.",
		native: "so I cleaned inside the house",
		words: [ 'チセ', 'オンナイ', 'ウン', 'カ', 'ピㇽカノ', 'ア', 'カㇽ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/21.wav",
		quizSentence: true
	},
	{
		target: "チセ　オカリ　カ　ムン_　サㇰ　ノ　ア　カㇽ　ワ　ピㇽカノ　アン　アン　クニ　ネ　ヒケ、",
		alt: "cise okari ka mun_ sak no a= kar wa pirkano an =an kuni ne hike,",
		native: "and got rid of the trash around the house so that I could live in a clean place.",
		words: [ 'チセ', 'オカリ', 'カ', 'ムン', 'サㇰ', 'ノ', 'ア', 'カㇽ', 'ワ', 'ピㇽカノ', 'アン', 'アン', 'クニ', 'ネ', 'ヒケ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/22.wav",
		quizSentence: true
	},
	{
		target: "ナイ　オㇽ　ウン　カ　ピㇽカノ　シロトゥイェ　アン　ワ、",
		alt: "nay or un ka pirkano sirotuye =an wa,",
		native: "I cut the grass to the water.",
		words: [ 'ナイ', 'オㇽ', 'ウン', 'カ', 'ピㇽカノ', 'シロトゥイェ', 'アン', 'ワ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/23.wav",
		quizWords: [ 'ナイ' ]
	},
	{
		target: "ナイ　オㇽ　ウン　ワㇰカタ　アン　ヤㇰカ　クサワワ（？）　ウェン　キキㇽ　オカ　ワ　ア　シトマ　p　ネ　クス、",
		alt: "nay or un wakkata =an yakka kusawawa(?) wen kikir oka wa a= sitoma p ne kusu,",
		native: "If one fetches water from the stream, there are many scary insects,",
		words: [ 'ナイ', 'オㇽ', 'ウン', 'ワㇰカタ', 'アン', 'ヤㇰカ', 'クサワワ', 'ウェン', 'キキㇽ', 'オカ', 'ワ', 'ア', 'シトマ', 'p', 'ネ', 'クス' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/24.wav",
		quizWords: [ 'オカ', 'p', 'キキㇽ', 'シトマ', 'ワㇰカタ' ]
	},
	{
		target: "オロワ　ピㇽカノ　シロトゥイェ　アン、　セプノ　キ　ワ、",
		alt: "orowa pirkano sirotuye =an, sepno ki wa,",
		native: "so I cut there the grass properly making [the area] open.",
		words: [ 'オロワ', 'ピㇽカノ', 'シロトゥイェ', 'アン', 'セプノ', 'キ', 'ワ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/25.wav",
		quizSentence: true
	},
	{
		target: "ナイ　オㇽ　ウン　カ　シㇽケㇽケリ　アン　ワ　ムン　サㇰ　ノ　ア　カㇽ　ワ　アン　アン。",
		alt: "nay or un ka sirkerkeri =an wa mun sak no a= kar wa an =an.",
		native: "I cleaned the ground to the water so that there were no weeds there.",
		words: [ 'ナイ', 'オㇽ', 'ウン', 'カ', 'シㇽケㇽケリ', 'アン', 'ワ', 'ムン', 'サㇰ', 'ノ', 'ア', 'カㇽ', 'ワ', 'アン', 'アン' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/26.wav",
		quizWords: [ 'シㇽケㇽケリ' ]
	},
	{
		target: "オラノ　ネン　イ　エパカㇱヌ　ソモ　キ　p　ネ　コㇽカ、",
		alt: "orano nen i= epakasnu somo ki p ne korka,",
		native: "Nobody really taught me but",
		words: [ 'オラノ', 'ネン', 'イ', 'エパカㇱヌ', 'ソモ', 'キ', 'p', 'ネ', 'コㇽカ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/27.wav",
		quizSentence: true
	},
	{
		target: "チセ　オカリ　ネプ　ムン　ネ　ルウェ　ネ　ヤ　オカ　ワ、",
		alt: "cise okari nep mun ne ruwe ne ya oka wa,",
		native: "there were some weeds growing around the house,",
		words: [ 'チセ', 'オカリ', 'ネプ', 'ムン', 'ネ', 'ルウェ', 'ネ', 'ヤ', 'オカ', 'ワ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/28.wav",
		quizSentence: true
	},
	{
		target: "ア　カㇽ　ワ　ア　スパ　ワ　ア　エ　ワ　ケラアン　ヒケ　ア　エ、",
		alt: "a= kar wa a= supa wa a= e wa keraan hike a= e,",
		native: "I gathered them, made food with them and ate them. I ate the delicious ones",
		words: [ 'ア', 'カㇽ', 'ワ', 'ア', 'スパ', 'ワ', 'ア', 'エ', 'ワ', 'ケラアン', 'ヒケ', 'ア', 'エ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/29.wav",
		quizSentence: true
	},
	{
		target: "ケラ　イサㇺ　ヒケ　ア　オスㇽパ、",
		alt: "kera isam hike a= osurpa,",
		native: "and threw away those that weren\'t tasty.",
		words: [ 'ケラ', 'イサㇺ', 'ヒケ', 'ア', 'オスㇽパ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/30.wav",
		quizWords: [ 'ケラ' ]
	},
	{
		target: "ピㇽカ　ヒケ　ア　エ　コㇽ、",
		alt: "pirka hike a= e kor,",
		native: "I ate good food.",
		words: [ 'ピㇽカ', 'ヒケ', 'ア', 'エ', 'コㇽ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/31.wav",
		quizWords: [ 'ピㇽカ' ]
	},
	{
		target: "シㇽサㇰ　コㇽ　オラノ　ネワオカ　パㇽカ　タ　オカ、",
		alt: "sirsak kor orano newaoka parka ta oka,",
		native: "When summer came, [I took what] was on the shelves,",
		words: [ 'シㇽサㇰ', 'コㇽ', 'オラノ', 'ネワオカ', 'パㇽカ', 'タ', 'オカ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/32.wav",
		quizWords: [ 'シㇽサㇰ' ]
	},
	{
		target: "ネプ　ネ　ルウェ　ネ　ヤ　ア　エラミㇱカリ　パ　p　ア　ラプテ　ワ　ヲㇽ　ア　オマレ、",
		alt: "nep ne ruwe ne ya a= eramiskari pa p a= rapte wa wor a= omare,",
		native: "although I didn\'t know what it was, I took it and put it in water",
		words: [ 'ネプ', 'ネ', 'ルウェ', 'ネ', 'ヤ', 'ア', 'エラミㇱカリ', 'パ', 'p', 'ア', 'ラプテ', 'ワ', 'ヲㇽ', 'ア', 'オマレ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/33.wav",
		quizSentence: true
	},
	{
		target: "ア　フライパ　ワ　ネア　。。。",
		alt: "a= huraypa wa nea ...",
		native: "and washed it.",
		words: [ 'ア', 'フライパ', 'ワ', 'ネア' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/34.wav",
		quizWords: [ 'ネア' ]
	},
	{
		target: "ネワオカ　キナ　ネ　ヤ　ア　コポイェ　ワ　ア　スパ　ワ　ア　エ　コㇽ　アン　アン　アイネ",
		alt: "newaoka kina ne ya a= kopoye wa a= supa wa a= e kor an =an ayne",
		native: "I mixed it with mountain vegetables and cooked it,",
		words: [ 'ネワオカ', 'キナ', 'ネ', 'ヤ', 'ア', 'コポイェ', 'ワ', 'ア', 'スパ', 'ワ', 'ア', 'エ', 'コㇽ', 'アン', 'アン', 'アイネ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/35.wav",
		quizWords: [ 'キナ', 'コポイェ', 'アイネ' ]
	},
	{
		target: "タンタネ　ポン　ポロ　アン　ネンネン　ルウェ　ネ　ア　p、",
		alt: "tantane pon poro =an nennen ruwe ne a p,",
		native: "and grew up.",
		words: [ 'タンタネ', 'ポン', 'ポロ', 'アン', 'ネンネン', 'ルウェ', 'ネ', 'ア', 'p' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/36.wav",
		quizSentence: true
	},
	{
		target: "エソイネ　アイヌ　フマㇱ　クㇱ　ソイネ　アン　ルウェ　ネ　アクㇱ、",
		alt: "esoyne aynu humas kus soyne =an ruwe ne akus,",
		native: "I heard voices outside so I went to see.",
		words: [ 'エソイネ', 'アイヌ', 'フマㇱ', 'クㇱ', 'ソイネ', 'アン', 'ルウェ', 'ネ', 'アクㇱ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/37.wav",
		quizWords: [ 'ソイネ', 'エソイネ', 'フマㇱ', 'アイヌ' ]
	},
	{
		target: "フレ　コソンテ　ウトㇺチウレ",
		alt: "hure kosonte utomciwre",
		native: "[It was a young man] wearing a red garment.",
		words: [ 'フレ', 'コソンテ', 'ウトㇺチウレ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/38.wav",
		quizWords: [ 'フレ', 'コソンテ', 'ウトㇺチウレ' ]
	},
	{
		target: "オㇰカイポ　セコㇽ　ア　イェ　p　ネ　ノイネ　アン、",
		alt: "okkaypo sekor a= ye p ne noyne an,",
		native: "It was a young man [wearing a red garment].",
		words: [ 'オㇰカイポ', 'セコㇽ', 'ア', 'イェ', 'p', 'ネ', 'ノイネ', 'アン' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/39.wav",
		quizWords: [ 'オㇰカイポ', 'ノイネ' ]
	},
	{
		target: "アイヌ　ヌカㇽ　カ　ア　エラミㇱカリ　p、",
		alt: "aynu nukar ka a= eramiskari p,",
		native: "I had never seen a person,",
		words: [ 'アイヌ', 'ヌカㇽ', 'カ', 'ア', 'エラミㇱカリ', 'p' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/40.wav",
		quizSentence: true
	},
	{
		target: "オㇰカイポ　セコㇽ　ア　イェ　p　ネ　ノイネ　アン　オㇰカイポ　ソイ　タ　アン　ヒ　クス、",
		alt: "okkaypo sekor a= ye p ne noyne an okkaypo soy ta an hi kusu,",
		native: "but a young person who seemed to be a so-called young man was standing outside.",
		words: [ 'オㇰカイポ', 'セコㇽ', 'ア', 'イェ', 'p', 'ネ', 'ノイネ', 'アン', 'オㇰカイポ', 'ソイ', 'タ', 'アン', 'ヒ', 'クス' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/41.wav",
		quizSentence: true
	},
	{
		target: "ネプ　カ　ア　イェ　ソモ　キ　ノ　アフン　アン　ヒネ　アン　アン　ルウェ　ネ　アクㇱ、",
		alt: "nep ka a= ye somo ki no ahun =an hine an =an ruwe ne akus,",
		native: "I went back inside without saying anything,",
		words: [ 'ネプ', 'カ', 'ア', 'イェ', 'ソモ', 'キ', 'ノ', 'アフン', 'アン', 'ヒネ', 'アン', 'アン', 'ルウェ', 'ネ', 'アクㇱ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/42.wav",
		quizSentence: true
	},
	{
		target: "イ　オㇱ　アフン　ヒネ　イ　エランカラプ　ル〔ウェ　ネ〕。",
		alt: "i= os ahun hine i= erankarap ru[we ne].",
		native: "and he followed me in and greeted me.",
		words: [ 'イ', 'オㇱ', 'アフン', 'ヒネ', 'イ', 'エランカラプ', 'ル', 'ウェ', 'ネ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/43.wav",
		quizWords: [ 'オㇱ', 'エランカラプ' ]
	},
	{
		target: "コㇽカ　アイヌ　ヌカㇽ　カ　ア　エラミㇱカリ　p　ネ　コㇽカ　イ　エランカラプ　ヤㇰカ、",
		alt: "korka aynu nukar ka a= eramiskari p ne korka i= erankarap yakka,",
		native: "I had never seen a human, but yet he greeted me.",
		words: [ 'コㇽカ', 'アイヌ', 'ヌカㇽ', 'カ', 'ア', 'エラミㇱカリ', 'p', 'ネ', 'コㇽカ', 'イ', 'エランカラプ', 'ヤㇰカ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/44.wav",
		quizSentence: true
	},
	{
		target: "エネ　ア　ラム　ヒ　カ　イサㇺ　ノ",
		alt: "ene a= ramu hi ka isam no",
		native: "I did not know what to think.",
		words: [ 'エネ', 'ア', 'ラム', 'ヒ', 'カ', 'イサㇺ', 'ノ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/45.wav",
		quizSentence: true
	},
	{
		target: "アン　アン　ヒネ　オラ　スケ　アン　ヒネ　ア　イペレ　アクス、",
		alt: "an =an hine ora suke =an hine a= ipere akusu,",
		native: "I prepared dinner and served him.",
		words: [ 'アン', 'アン', 'ヒネ', 'オラ', 'スケ', 'アン', 'ヒネ', 'ア', 'イペレ', 'アクス' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/46.wav",
		quizWords: [ 'イペレ', 'オラ', 'スケ', 'アクス' ]
	},
	{
		target: "イ　カスイ　イペ　ヒネ　レウシ　アン　アクス、",
		alt: "i= kasuy ipe hine rewsi =an akusu,",
		native: "He ate with me and we spent the night.",
		words: [ 'イ', 'カスイ', 'イペ', 'ヒネ', 'レウシ', 'アン', 'アクス' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/47.wav",
		quizWords: [ 'カスイ', 'レウシ', 'イペ' ]
	},
	{
		target: "オラ　ネウン　カ　アㇽパ　p　ネ　クナㇰ　ア　ラム　ア　p、",
		alt: "ora neun ka arpa p ne kunak a= ramu a p,",
		native: "I thought he was going somewhere, but",
		words: [ 'オラ', 'ネウン', 'カ', 'アㇽパ', 'p', 'ネ', 'クナㇰ', 'ア', 'ラム', 'ア', 'p' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/48.wav",
		quizWords: [ 'ネウン', 'アㇽパ', 'クナㇰ' ]
	},
	{
		target: "ネウン　カ　アㇽパ　カ　ソモ　キ　ノ",
		alt: "neun ka arpa ka somo ki no",
		native: "he did not go anywhere.",
		words: [ 'ネウン', 'カ', 'アㇽパ', 'カ', 'ソモ', 'キ', 'ノ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/49.wav",
		quizSentence: true
	},
	{
		target: "エキㇺネ　アクス、",
		alt: "ekimne akusu,",
		native: "He said he was going to the mountains to hunt,",
		words: [ 'エキㇺネ', 'アクス' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/50.wav",
		quizWords: [ 'エキㇺネ' ]
	},
	{
		target: "オラ　ネプ　ネ　ルウェ　ネ　セ　ワ　イワㇰ、",
		alt: "ora nep ne ruwe ne se wa iwak,",
		native: "and came back with something on his back.",
		words: [ 'オラ', 'ネプ', 'ネ', 'ルウェ', 'ネ', 'セ', 'ワ', 'イワㇰ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/51.wav",
		quizWords: [ 'セ', 'イワㇰ' ]
	},
	{
		target: "\"タプ　アナㇰ　ユㇰ　セコㇽ　ア　イェ　p　ネ　ルウェ　ネ　ワ、",
		alt: "\"tap anak yuk sekor a= ye p ne ruwe ne wa,",
		native: "\"This is a deer.",
		words: [ 'タプ', 'アナㇰ', 'ユㇰ', 'セコㇽ', 'ア', 'イェ', 'p', 'ネ', 'ルウェ', 'ネ', 'ワ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/52.wav",
		quizSentence: true
	},
	{
		target: "タプ　ネノ　ア　カㇽ　ワ　ア　スパ　ワ　ア　エ　p　ネ　ナ。\"",
		alt: "tap neno a= kar wa a= supa wa a= e p ne na.\"",
		native: "This is how you fix it, cook it and eat it.\"",
		words: [ 'タプ', 'ネノ', 'ア', 'カㇽ', 'ワ', 'ア', 'スパ', 'ワ', 'ア', 'エ', 'p', 'ネ', 'ナ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/53.wav",
		quizWords: [ 'ネノ' ]
	},
	{
		target: "セコㇽ　ハウェアン　コㇽ、",
		alt: "sekor hawean kor,",
		native: "he said.",
		words: [ 'セコㇽ', 'ハウェアン', 'コㇽ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/54.wav",
		quizWords: [ 'ハウェアン' ]
	},
	{
		target: "エネ　ア　スパ　クニ　イ　エパカㇱヌ　ヒネ",
		alt: "ene a= supa kuni i= epakasnu hine",
		native: "He taught me how to cook the deer.",
		words: [ 'エネ', 'ア', 'スパ', 'クニ', 'イ', 'エパカㇱヌ', 'ヒネ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/55.wav",
		quizSentence: true
	},
	{
		target: "スパ　ヒネ　イ　エレ　アクス　ケラアン。",
		alt: "supa hine i= ere akusu keraan.",
		native: "He cooked the dear and fed to me. It was very tasty.",
		words: [ 'スパ', 'ヒネ', 'イ', 'エレ', 'アクス', 'ケラアン' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/56.wav",
		quizWords: [ 'エレ' ]
	},
	{
		target: "タネポ　ピㇽカ　イペ　ア　キ　p　ネ　クㇱ　ケラアン　ヒネ　イペ　アン。",
		alt: "tanepo pirka ipe a= ki p ne kus keraan hine ipe =an.",
		native: "I ate delicious deer for the first time, so I [really] enjoyed the food.",
		words: [ 'タネポ', 'ピㇽカ', 'イペ', 'ア', 'キ', 'p', 'ネ', 'クㇱ', 'ケラアン', 'ヒネ', 'イペ', 'アン' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/57.wav",
		quizWords: [ 'タネポ' ]
	},
	{
		target: "オラノ　ネウン　カ　アㇽパ　カ　ソモ　キ　ノ、",
		alt: "orano neun ka arpa ka somo ki no,",
		native: "The man did not go anywhere.",
		words: [ 'オラノ', 'ネウン', 'カ', 'アㇽパ', 'カ', 'ソモ', 'キ', 'ノ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/58.wav",
		quizSentence: true
	},
	{
		target: "オラノ　ネノ　エキㇺネ　コㇽ、",
		alt: "orano neno ekimne kor,",
		native: "He went hunting",
		words: [ 'オラノ', 'ネノ', 'エキㇺネ', 'コㇽ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/59.wav",
		quizSentence: true
	},
	{
		target: "ユㇰ　ネ　チキ　カムイ　ネ　チキ　ヌウェ　コアン　ワ、",
		alt: "yuk ne ciki kamuy ne ciki nuwe koan wa,",
		native: "and came back with many deer and bears.",
		words: [ 'ユㇰ', 'ネ', 'チキ', 'カムイ', 'ネ', 'チキ', 'ヌウェ', 'コアン', 'ワ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/60.wav",
		quizWords: [ 'ヌウェ', 'カムイ' ]
	},
	{
		target: "\"タプ　ネノ　カムイ　アナㇰ　ア　ホプンパレ。",
		alt: "\"tap neno kamuy anak a= hopunpare.",
		native: "\"This is how you \"send\" a bear.",
		words: [ 'タプ', 'ネノ', 'カムイ', 'アナㇰ', 'ア', 'ホプンパレ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/61.wav",
		quizWords: [ 'ホプンパレ' ]
	},
	{
		target: "タプ　アナㇰ　ユㇰ　セコㇽ　ア　イェ　p　ネ。",
		alt: "tap anak yuk sekor a= ye p ne.",
		native: "This is a deer.",
		words: [ 'タプ', 'アナㇰ', 'ユㇰ', 'セコㇽ', 'ア', 'イェ', 'p', 'ネ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/62.wav",
		quizSentence: true
	},
	{
		target: "タプ　ネノ　ア　ホプンパレ。",
		alt: "tap neno a= hopunpare.",
		native: "This is how you \"send\" it.",
		words: [ 'タプ', 'ネノ', 'ア', 'ホプンパレ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/63.wav",
		quizSentence: true
	},
	{
		target: "イセポ　カ　チロンヌプ　カ　タプ　ネノ　タプ　ネノ　ア　ホプンパレ　p　ネ　ナ。\"",
		alt: "isepo ka cironnup ka tap neno tap neno a= hopunpare p ne na.\"",
		native: "Rabbits and fox are sent in such ways\",",
		words: [ 'イセポ', 'カ', 'チロンヌプ', 'カ', 'タプ', 'ネノ', 'タプ', 'ネノ', 'ア', 'ホプンパレ', 'p', 'ネ', 'ナ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/64.wav",
		quizSentence: true
	},
	{
		target: "セコㇽ　ハウェアン　コㇽ　イ　エパカㇱヌ　コㇽ　オカ　アン。",
		alt: "sekor hawean kor i= epakasnu kor oka =an.",
		native: "he told me as he taught me.",
		words: [ 'セコㇽ', 'ハウェアン', 'コㇽ', 'イ', 'エパカㇱヌ', 'コㇽ', 'オカ', 'アン' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/65.wav",
		quizSentence: true
	},
	{
		target: "オラ　アイヌ　エネ　イキ　パ　クニ　イ　エパカㇱヌ。",
		alt: "ora aynu ene iki pa kuni i= epakasnu.",
		native: "Then he taught me what people should do.",
		words: [ 'オラ', 'アイヌ', 'エネ', 'イキ', 'パ', 'クニ', 'イ', 'エパカㇱヌ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/66.wav",
		quizSentence: true
	},
	{
		target: "ネン　ア　ヌカㇽ　カ　ソモ　キ　p　ネ　カ",
		alt: "nen a= nukar ka somo ki p ne ka",
		native: "Even though I was not going to meet anyone,",
		words: [ 'ネン', 'ア', 'ヌカㇽ', 'カ', 'ソモ', 'キ', 'p', 'ネ', 'カ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/67.wav",
		quizSentence: true
	},
	{
		target: "ア　サパハ　カㇽ_　ネ　ヤ　ア　ナヌフ　カㇽ_　ネ　ヤ　キ　ワ、",
		alt: "a= sapaha kar_ ne ya a= nanuhu kar_ ne ya ki wa,",
		native: "he cut my hair and put on makeup.",
		words: [ 'ア', 'サパハ', 'カㇽ', 'ネ', 'ヤ', 'ア', 'ナヌフ', 'カㇽ', 'ネ', 'ヤ', 'キ', 'ワ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/68.wav",
		quizWords: [ 'サパハ' ]
	},
	{
		target: "アイヌ　エネ　イキ　パ　クニ、",
		alt: "aynu ene iki pa kuni,",
		native: "He taught me what humans should do,",
		words: [ 'アイヌ', 'エネ', 'イキ', 'パ', 'クニ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/69.wav",
		quizSentence: true
	},
	{
		target: "\"アイヌ　アナㇰ　タプ　ネノ　タプ　ネノ　イキ　パ　p　ネ　ナ。\"",
		alt: "\"aynu anak tap neno tap neno iki pa p ne na.\"",
		native: "\"This is how humans do it\",",
		words: [ 'アイヌ', 'アナㇰ', 'タプ', 'ネノ', 'タプ', 'ネノ', 'イキ', 'パ', 'p', 'ネ', 'ナ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/70.wav",
		quizSentence: true
	},
	{
		target: "セコㇽ　ハウェアン　コㇽ　イ　エパカㇱヌ　コㇽ　オラノ　オカ　アン　ルウェ　ネ。",
		alt: "sekor hawean kor i= epakasnu kor orano oka =an ruwe ne.",
		native: "he taught me saying so. We lived on in this way.",
		words: [ 'セコㇽ', 'ハウェアン', 'コㇽ', 'イ', 'エパカㇱヌ', 'コㇽ', 'オラノ', 'オカ', 'アン', 'ルウェ', 'ネ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/71.wav",
		quizSentence: true
	},
	{
		target: "パㇰ　イソン　クㇽ　イサㇺ　クㇽ_　ネ　p　ネ　クス、",
		alt: "pak ison kur isam kur_ ne p ne kusu,",
		native: "He was a very good hunter,",
		words: [ 'パㇰ', 'イソン', 'クㇽ', 'イサㇺ', 'クㇽ', 'ネ', 'p', 'ネ', 'クス' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/72.wav",
		quizWords: [ 'パㇰ', 'イソン', 'クㇽ' ]
	},
	{
		target: "ネプ　ア　エ　ルスイ　カ　ソモ　キ　ノ、",
		alt: "nep a= e rusuy ka somo ki no,",
		native: "so I never had to worry about what to eat.",
		words: [ 'ネプ', 'ア', 'エ', 'ルスイ', 'カ', 'ソモ', 'キ', 'ノ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/73.wav",
		quizWords: [ 'ルスイ' ]
	},
	{
		target: "ホカ　ウンノ　キㇽプ　オラㇱトㇺネㇺネ　コㇽカ、",
		alt: "hoka unno kirpu orastomnemne korka,",
		native: "He left the fat hanging over the hearth,",
		words: [ 'ホカ', 'ウンノ', 'キㇽプ', 'オラㇱトㇺネㇺネ', 'コㇽカ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/74.wav",
		quizWords: [ 'ウンノ', 'キㇽプ', 'ホカ' ]
	},
	{
		target: "アイヌ　ネ　ルウェ　ヘ　ネ　ヤ　ネプ　ネ　ルウェ　ネ　ヤ、",
		alt: "aynu ne ruwe he ne ya nep ne ruwe ne ya,",
		native: "but [I do not know] whether he was a human or not.",
		words: [ 'アイヌ', 'ネ', 'ルウェ', 'ヘ', 'ネ', 'ヤ', 'ネプ', 'ネ', 'ルウェ', 'ネ', 'ヤ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/75.wav",
		quizSentence: true
	},
	{
		target: "ミピヒ　ヤㇰカ　ソモ　キ　ノ　ラㇺマ　ウネノ　カネ　ミピヒ　アン　ペ　ネ　コㇽカ、",
		alt: "mipihi yakka somo ki no ramma uneno kane mipihi an pe ne korka,",
		native: "He never changed his clothes, and always wore the same things.",
		words: [ 'ミピヒ', 'ヤㇰカ', 'ソモ', 'キ', 'ノ', 'ラㇺマ', 'ウネノ', 'カネ', 'ミピヒ', 'アン', 'ペ', 'ネ', 'コㇽカ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/76.wav",
		quizWords: [ 'カネ', 'ウネノ' ]
	},
	{
		target: "ネン　カ　イ　イェ　ヘネ　イ　カㇽ　ヘネ　キ　カ　ソモ　キ　p　ネ　クㇱ、",
		alt: "nen ka i= ye hene i= kar hene ki ka somo ki p ne kus,",
		native: "He never said or did anything [bad] to me,",
		words: [ 'ネン', 'カ', 'イ', 'イェ', 'ヘネ', 'イ', 'カㇽ', 'ヘネ', 'キ', 'カ', 'ソモ', 'キ', 'p', 'ネ', 'クㇱ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/77.wav",
		quizSentence: true
	},
	{
		target: "ア　シトマ　カ　ソモ　キ　ノ、",
		alt: "a= sitoma ka somo ki no,",
		native: "so I did not feel afraid of him.",
		words: [ 'ア', 'シトマ', 'カ', 'ソモ', 'キ', 'ノ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/78.wav",
		quizSentence: true
	},
	{
		target: "ア　ユピ　コㇽ　クㇽ　〔ネ〕　アン　アン　ペ　ネ　ア　p、",
		alt: "a= yupi kor kur [ne] an =an pe ne a p,",
		native: "I treated him as a brother,",
		words: [ 'ア', 'ユピ', 'コㇽ', 'クㇽ', 'ネ', 'アン', 'アン', 'ペ', 'ネ', 'ア', 'p' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/79.wav",
		quizSentence: true
	},
	{
		target: "ア　ユピ　コㇽ　クㇽ_　ネ　ヤㇰ　イェ　p　ネ　クス　キ　コㇽ　オカ　アン　ペ　ネ　ルウェ　ネ　ア　p、",
		alt: "a= yupi kor kur_ ne yak ye p ne kusu ki kor oka =an pe ne ruwe ne a p,",
		native: "and he said brotherly things, so we continued living in this way.",
		words: [ 'ア', 'ユピ', 'コㇽ', 'クㇽ', 'ネ', 'ヤㇰ', 'イェ', 'p', 'ネ', 'クス', 'キ', 'コㇽ', 'オカ', 'アン', 'ペ', 'ネ', 'ルウェ', 'ネ', 'ア', 'p' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/80.wav",
		quizSentence: true
	},
	{
		target: "シネアンタ、　タネ　シッチゥㇰ　コパㇰ　アン　ヒネ、",
		alt: "sineanta, tane sitcuk kopak an hine,",
		native: "One day when autumn was near,",
		words: [ 'シネアンタ', 'タネ', 'シッチゥㇰ', 'コパㇰ', 'アン', 'ヒネ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/81.wav",
		quizWords: [ 'コパㇰ', 'シネアンタ' ]
	},
	{
		target: "ラポㇰケ　シネアント　シニ　ヒネ　オラ、",
		alt: "rapokke sineanto sini hine ora,",
		native: "the man stayed home (instead of going to the mountains).",
		words: [ 'ラポㇰケ', 'シネアント', 'シニ', 'ヒネ', 'オラ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/82.wav",
		quizWords: [ 'シニ', 'ラポㇰケ' ]
	},
	{
		target: "\"ア　コㇽ　ポン　メノコ、　ソモ　イ　エウタンネ　ルスイ　ルウェ　ヘ　アン？\"",
		alt: "\"a= kor pon menoko, somo i= ewtanne rusuy ruwe he an?\"",
		native: "\"My young girl, won\'t you be my wife?\",",
		words: [ 'ア', 'コㇽ', 'ポン', 'メノコ', 'ソモ', 'イ', 'エウタンネ', 'ルスイ', 'ルウェ', 'ヘ', 'アン' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/83.wav",
		quizWords: [ 'メノコ', 'エウタンネ' ]
	},
	{
		target: "セコㇽ　ハウェアン　コㇽカ、",
		alt: "sekor hawean korka,",
		native: "he said.",
		words: [ 'セコㇽ', 'ハウェアン', 'コㇽカ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/84.wav",
		quizSentence: true
	},
	{
		target: "ネプ　カ　ア　イェ　カ　ソモ　キ　ノ　ソイネ　アン　アクㇱ",
		alt: "nep ka a= ye ka somo ki no soyne =an akus",
		native: "I went outside without responding.",
		words: [ 'ネプ', 'カ', 'ア', 'イェ', 'カ', 'ソモ', 'キ', 'ノ', 'ソイネ', 'アン', 'アクㇱ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/85.wav",
		quizSentence: true
	},
	{
		target: "オカケ　タ　アイ　カㇽ　コㇽ　アン　ハウェ　アン　ネ　ア　p　ソイネ　アン　ヒネ",
		alt: "okake ta ay kar kor an hawe an ne a p soyne =an hine",
		native: "He was making an arrow so I went outside",
		words: [ 'オカケ', 'タ', 'アイ', 'カㇽ', 'コㇽ', 'アン', 'ハウェ', 'アン', 'ネ', 'ア', 'p', 'ソイネ', 'アン', 'ヒネ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/86.wav",
		quizWords: [ 'アイ' ]
	},
	{
		target: "ニナ　アン　ヒネ　ニシケ　アン。",
		alt: "nina =an hine nisike =an.",
		native: "to get firewood and came home with firewood on my back.",
		words: [ 'ニナ', 'アン', 'ヒネ', 'ニシケ', 'アン' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/87.wav",
		quizWords: [ 'ニナ', 'ニシケ' ]
	},
	{
		target: "レ　パ　カ　アン　コㇽ　オラ　ハウェアン　ネ　p　ネ　クス、",
		alt: "re pa ka an kor ora hawean ne p ne kusu,",
		native: "We had been living together for three years, so maybe that\'s why he asked,",
		words: [ 'レ', 'パ', 'カ', 'アン', 'コㇽ', 'オラ', 'ハウェアン', 'ネ', 'p', 'ネ', 'クス' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/88.wav",
		quizSentence: true
	},
	{
		target: "ニシケ　アン　ヒネ　ホシピ　アン　。。。",
		alt: "nisike =an hine hosipi =an ...",
		native: "but I came home with firewood on my back.",
		words: [ 'ニシケ', 'アン', 'ヒネ', 'ホシピ', 'アン' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/89.wav",
		quizSentence: true
	},
	{
		target: "ポンノ　ウパㇱ　。。。　ポンノ　ポンノ　ウパㇱ　アㇱ　アㇱ　カネ　ヒネ、",
		alt: "ponno upas ... ponno ponno upas as as kane hine,",
		native: "Snow was fluttering in the sky,",
		words: [ 'ポンノ', 'ウパㇱ', 'ポンノ', 'ポンノ', 'ウパㇱ', 'アㇱ', 'アㇱ', 'カネ', 'ヒネ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/90.wav",
		quizWords: [ 'ポンノ' ]
	},
	{
		target: "ネア　イ　エカリ　フレ　ポロ　セタ　ホユプ、　エㇰ",
		alt: "nea i= ekari hure poro seta hoyupu, ek",
		native: "and a big red dog came running toward me.",
		words: [ 'ネア', 'イ', 'エカリ', 'フレ', 'ポロ', 'セタ', 'ホユプ', 'エㇰ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/91.wav",
		quizWords: [ 'エカリ' ]
	},
	{
		target: "オラノ　イ　オカリ　ミㇰ　コㇽ　イ　オカリ　エアㇽキンネ　ア　エオハイシトマ",
		alt: "orano i= okari mik kor i= okari earkinne a= eohaysitoma",
		native: "The dog yelped and ran around me. I was very scared.",
		words: [ 'オラノ', 'イ', 'オカリ', 'ミㇰ', 'コㇽ', 'イ', 'オカリ', 'エアㇽキンネ', 'ア', 'エオハイシトマ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/92.wav",
		quizWords: [ 'ミㇰ', 'エオハイシトマ' ]
	},
	{
		target: "セタ　カ　ネプ　カ　イサㇺ　ペ　ネ　ア　p、",
		alt: "seta ka nep ka isam pe ne a p,",
		native: "There were no dogs living around us.",
		words: [ 'セタ', 'カ', 'ネプ', 'カ', 'イサㇺ', 'ペ', 'ネ', 'ア', 'p' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/93.wav",
		quizSentence: true
	},
	{
		target: "\"ヒナㇰ　ワ　エㇰ　セタ　エネ　イキ　ヒ　アン？\"",
		alt: "\"hinak wa ek seta ene iki hi an?\"",
		native: "\"Where did that dog come from?\".",
		words: [ 'ヒナㇰ', 'ワ', 'エㇰ', 'セタ', 'エネ', 'イキ', 'ヒ', 'アン' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/94.wav",
		quizWords: [ 'ヒナㇰ' ]
	},
	{
		target: "セコㇽ　ヤイヌ　アン。",
		alt: "sekor yaynu =an.",
		native: "I thought.",
		words: [ 'セコㇽ', 'ヤイヌ', 'アン' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/95.wav",
		quizSentence: true
	},
	{
		target: "カ　タ（？）　ソモ　トゥラノ　アン　アン　ペ　セタ　ネ　ヒネ、",
		alt: "ka ta(?) somo turano an =an pe seta ne hine,",
		native: "I had never spent any time with a dog...",
		words: [ 'カ', 'タ', 'ソモ', 'トゥラノ', 'アン', 'アン', 'ペ', 'セタ', 'ネ', 'ヒネ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/96.wav",
		quizSentence: true
	},
	{
		target: "\"アイヌ　ネ　ヤイカㇽ　ワ　ネ　ヤ？\"",
		alt: "\"aynu ne yaykar wa ne ya?\"",
		native: "\"Is it posing as a human?\"",
		words: [ 'アイヌ', 'ネ', 'ヤイカㇽ', 'ワ', 'ネ', 'ヤ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/97.wav",
		quizWords: [ 'ヤイカㇽ' ]
	},
	{
		target: "セコㇽ　ケウトゥㇺ　オㇽ_　タ　ヤイヌ　アン。",
		alt: "sekor kewtum or_ ta yaynu =an.",
		native: "I wondered in my heart.",
		words: [ 'セコㇽ', 'ケウトゥㇺ', 'オㇽ', 'タ', 'ヤイヌ', 'アン' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/98.wav",
		quizWords: [ 'ケウトゥㇺ' ]
	},
	{
		target: "セタ　カ　ネプ　カ　イサㇺ　ペ、",
		alt: "seta ka nep ka isam pe,",
		native: "There were no dogs in the area,",
		words: [ 'セタ', 'カ', 'ネプ', 'カ', 'イサㇺ', 'ペ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/99.wav",
		quizSentence: true
	},
	{
		target: "コント　シㇰラプパラプパ　アン　アクス　オアㇽ　イサㇺ　ヒネ、",
		alt: "konto sikrapparappa =an akusu oar isam hine,",
		native: "and within the blink of an eye, it was gone.",
		words: [ 'コント', 'シㇰラプパラプパ', 'アン', 'アクス', 'オアㇽ', 'イサㇺ', 'ヒネ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/100.wav",
		quizWords: [ 'シㇰラプパラプパ', 'オアㇽ' ]
	},
	{
		target: "オラウン　チセ　ソイ　タ　エㇰ　アン　ルウェ　ネ　アクス、",
		alt: "oraun cise soy ta ek =an ruwe ne akusu,",
		native: "When I made it to the front of my home,",
		words: [ 'オラウン', 'チセ', 'ソイ', 'タ', 'エㇰ', 'アン', 'ルウェ', 'ネ', 'アクス' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/101.wav",
		quizSentence: true
	},
	{
		target: "セㇺ　オㇽ　ウン　ウパㇱ　ポンノ　ポンノ　ウパㇱ　アㇱ　ペ　ネ　クス　レラプ（？）　アㇱ　ペ　ネ　クㇱ、",
		alt: "sem or un upas ponno ponno upas as pe ne kusu rerap(?) as pe ne kus,",
		native: "the snow was falling near the porch. The wind was blowing the snow in.",
		words: [ 'セㇺ', 'オㇽ', 'ウン', 'ウパㇱ', 'ポンノ', 'ポンノ', 'ウパㇱ', 'アㇱ', 'ペ', 'ネ', 'クス', 'レラプ', 'アㇱ', 'ペ', 'ネ', 'クㇱ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/102.wav",
		quizSentence: true
	},
	{
		target: "セㇺ　アパパ　タ　セタ　ル　シッチニナニナ　コㇽカ",
		alt: "sem apapa ta seta ru sitcininanina korka",
		native: "I could see many dog footprints in front of the porch door.",
		words: [ 'セㇺ', 'アパパ', 'タ', 'セタ', 'ル', 'シッチニナニナ', 'コㇽカ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/103.wav",
		quizWords: [ 'アパパ' ]
	},
	{
		target: "オラ　エクㇱコンナ　アフン　カ　ア　エトランネ　クス、",
		alt: "ora ekuskonna ahun ka a= etoranne kusu,",
		native: "I was scared to enter the house",
		words: [ 'オラ', 'エクㇱコンナ', 'アフン', 'カ', 'ア', 'エトランネ', 'クス' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/104.wav",
		quizSentence: true
	},
	{
		target: "ヒネ　オラ　イプヤロポソレ　アン　アクス　アイ　カㇽ　コㇽ　アン。",
		alt: "hine ora ipuyaroposore =an akusu ay kar kor an.",
		native: "so I peeked in from the window, and he was making an arrow.",
		words: [ 'ヒネ', 'オラ', 'イプヤロポソレ', 'アン', 'アクス', 'アイ', 'カㇽ', 'コㇽ', 'アン' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/105.wav",
		quizSentence: true
	},
	{
		target: "スイ　アイヌ　ネ　ヒネ　キ　コㇽ　アン　ヒ　クス、",
		alt: "suy aynu ne hine ki kor an hi kusu,",
		native: "He had transformed into a human again and was making an arrow,",
		words: [ 'スイ', 'アイヌ', 'ネ', 'ヒネ', 'キ', 'コㇽ', 'アン', 'ヒ', 'クス' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/106.wav",
		quizWords: [ 'スイ' ]
	},
	{
		target: "オラ　ソイ　タ　ア　ニシケ　ア　エシㇽコパㇱテ　ヒネ",
		alt: "ora soy ta a= nisike a= esirkopaste hine",
		native: "so I left the firewood standing at the front door,",
		words: [ 'オラ', 'ソイ', 'タ', 'ア', 'ニシケ', 'ア', 'エシㇽコパㇱテ', 'ヒネ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/107.wav",
		quizWords: [ 'エシㇽコパㇱテ' ]
	},
	{
		target: "ネプ　カ　ア　イェ　ア　イェ　ペコㇽ　ハウェアン　アン　コㇽ　アン　アン　アイネ　アフン　アン　コㇽカ、",
		alt: "nep ka a= ye a= ye pekor hawean =an kor an =an ayne ahun =an korka,",
		native: "and came in pretending to mutter something, and then entered the house.",
		words: [ 'ネプ', 'カ', 'ア', 'イェ', 'ア', 'イェ', 'ペコㇽ', 'ハウェアン', 'アン', 'コㇽ', 'アン', 'アン', 'アイネ', 'アフン', 'アン', 'コㇽカ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/108.wav",
		quizWords: [ 'ペコㇽ' ]
	},
	{
		target: "ア　シトマ　カトゥン　キ　カ　。。。　ヤㇰカ　ウェン　ワ　クス、",
		alt: "a= sitoma katun ki ka ... yakka wen wa kusu,",
		native: "I didn\'t want to appear scared,",
		words: [ 'ア', 'シトマ', 'カトゥン', 'キ', 'カ', 'ヤㇰカ', 'ウェン', 'ワ', 'クス' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/109.wav",
		quizWords: [ 'カトゥン' ]
	},
	{
		target: "ア　シトマ　カトゥン　キ　カ　ソモ　キ　ノ　オラ　スケ　アン。",
		alt: "a= sitoma katun ki ka somo ki no ora suke =an.",
		native: "so without showing that I was frightened, I prepared dinner.",
		words: [ 'ア', 'シトマ', 'カトゥン', 'キ', 'カ', 'ソモ', 'キ', 'ノ', 'オラ', 'スケ', 'アン' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/110.wav",
		quizSentence: true
	},
	{
		target: "ネン　カ　スイ　イペ　アン。",
		alt: "nen ka suy ipe =an.",
		native: "We ate dinner together again.",
		words: [ 'ネン', 'カ', 'スイ', 'イペ', 'アン' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/111.wav",
		quizSentence: true
	},
	{
		target: "オロワ　クネイワ　エキㇺネ　ヒネ　イサㇺ。",
		alt: "orowa kuneywa ekimne hine isam.",
		native: "When morning came, the man went hunting.",
		words: [ 'オロワ', 'クネイワ', 'エキㇺネ', 'ヒネ', 'イサㇺ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/112.wav",
		quizWords: [ 'クネイワ' ]
	},
	{
		target: "エキㇺネ　ヒネ　イサㇺ　ルウェ　ネ。　オカケ　タ　アン　アン　アクス",
		alt: "ekimne hine isam ruwe ne. okake ta an =an akusu",
		native: "I stayed at home while he was hunting.",
		words: [ 'エキㇺネ', 'ヒネ', 'イサㇺ', 'ルウェ', 'ネ', 'オカケ', 'タ', 'アン', 'アン', 'アクス' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/113.wav",
		quizSentence: true
	},
	{
		target: "トノノㇱキ　パキ　ペカ　エソイネ　アイヌ　フㇺ　アㇱ　クス　ソイネ　アン　アクㇱ、",
		alt: "tononoski paki peka esoyne aynu hum as kusu soyne =an akus,",
		native: "Around noon, I could hear someone approaching the house so I went outside.",
		words: [ 'トノノㇱキ', 'パキ', 'ペカ', 'エソイネ', 'アイヌ', 'フㇺ', 'アㇱ', 'クス', 'ソイネ', 'アン', 'アクㇱ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/114.wav",
		quizWords: [ 'フㇺ', 'パキ' ]
	},
	{
		target: "コント　タンペ　オㇽ_　タ　アナㇰ　アイヌ　セコㇽ　ア　イェ　p　ネ　ノイネ　アン",
		alt: "konto tanpe or_ ta anak aynu sekor a= ye p ne noyne an",
		native: "This time, there was a person who looked like a human.",
		words: [ 'コント', 'タンペ', 'オㇽ', 'タ', 'アナㇰ', 'アイヌ', 'セコㇽ', 'ア', 'イェ', 'p', 'ネ', 'ノイネ', 'アン' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/115.wav",
		quizWords: [ 'タンペ' ]
	},
	{
		target: "オㇰカイポ　カ　ウタㇽパケ　セコㇽ　ア　イェ　p　ネ　ノイネ　オㇰカイポ、　ソイ　タ　アン　ヒネ、",
		alt: "okkaypo ka utarpake sekor a= ye p ne noyne okkaypo, soy ta an hine,",
		native: "A young man who appeared to be a superior of the \"humans\" stood outside the door.",
		words: [ 'オㇰカイポ', 'カ', 'ウタㇽパケ', 'セコㇽ', 'ア', 'イェ', 'p', 'ネ', 'ノイネ', 'オㇰカイポ', 'ソイ', 'タ', 'アン', 'ヒネ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/116.wav",
		quizSentence: true
	},
	{
		target: "オラ　ネプ　カ　イェ　ソモ　キ　ノ　アフン　アン　アクㇱ、",
		alt: "ora nep ka ye somo ki no ahun =an akus,",
		native: "I went back inside without saying anything,",
		words: [ 'オラ', 'ネプ', 'カ', 'イェ', 'ソモ', 'キ', 'ノ', 'アフン', 'アン', 'アクㇱ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/117.wav",
		quizSentence: true
	},
	{
		target: "イ　オㇱ　アフン　ヒネ　イ　エランカラプ　ルウェ　ネ　ヒネ、",
		alt: "i= os ahun hine i= erankarap ruwe ne hine,",
		native: "and he followed me in and greeted me.",
		words: [ 'イ', 'オㇱ', 'アフン', 'ヒネ', 'イ', 'エランカラプ', 'ルウェ', 'ネ', 'ヒネ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/118.wav",
		quizSentence: true
	},
	{
		target: "オラ　イ　コウェペケンヌ　ヒ　クㇱ、",
		alt: "ora i= kowepekennu hi kus,",
		native: "He asked about me.",
		words: [ 'オラ', 'イ', 'コウェペケンヌ', 'ヒ', 'クㇱ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/119.wav",
		quizSentence: true
	},
	{
		target: "\"タプネ　カネ　アイヌ　ネ　ルウェ　ヘ　ネ　ヤ　ネプ　ネ　ルウェ　ネ　ヤ　ア　エラㇺペウテㇰ、",
		alt: "\"tapne kane aynu ne ruwe he ne ya nep ne ruwe ne ya a= erampewtek,",
		native: "\"I don\'t know how it happened, and I don\'t know whether he\'s a human or not,",
		words: [ 'タプネ', 'カネ', 'アイヌ', 'ネ', 'ルウェ', 'ヘ', 'ネ', 'ヤ', 'ネプ', 'ネ', 'ルウェ', 'ネ', 'ヤ', 'ア', 'エラㇺペウテㇰ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/120.wav",
		quizWords: [ 'エラㇺペウテㇰ' ]
	},
	{
		target: "フレ　コソンテ　ウトㇺチウレ　オㇰカイポ　エㇰ　ワ、",
		alt: "hure kosonte utomciwre okkaypo ek wa,",
		native: "but a young man wearing a red garment appeared,",
		words: [ 'フレ', 'コソンテ', 'ウトㇺチウレ', 'オㇰカイポ', 'エㇰ', 'ワ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/121.wav",
		quizSentence: true
	},
	{
		target: "タネ　レ　パ　カ　トゥラノ　アン　アン　コㇽカ、",
		alt: "tane re pa ka turano an =an korka,",
		native: "and we have been living together for three years.",
		words: [ 'タネ', 'レ', 'パ', 'カ', 'トゥラノ', 'アン', 'アン', 'コㇽカ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/122.wav",
		quizSentence: true
	},
	{
		target: "ネン　カ　イ　イェ　カ　ソモ　キ　ノ、",
		alt: "nen ka i= ye ka somo ki no,",
		native: "He has told me nothing [about himself],",
		words: [ 'ネン', 'カ', 'イ', 'イェ', 'カ', 'ソモ', 'キ', 'ノ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/123.wav",
		quizSentence: true
	},
	{
		target: "アイヌ　エネ　イキ　パ　クニ　イ　エパカㇱヌ。",
		alt: "aynu ene iki pa kuni i= epakasnu.",
		native: "but he told me all about things which humans should do.",
		words: [ 'アイヌ', 'エネ', 'イキ', 'パ', 'クニ', 'イ', 'エパカㇱヌ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/124.wav",
		quizSentence: true
	},
	{
		target: "ア　ナヌフ　カ　カㇽ　ア　サパハ　カ　カㇽ。",
		alt: "a= nanuhu ka kar a= sapaha ka kar.",
		native: "He prepared my face and cut my hair.",
		words: [ 'ア', 'ナヌフ', 'カ', 'カㇽ', 'ア', 'サパハ', 'カ', 'カㇽ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/125.wav",
		quizSentence: true
	},
	{
		target: "ソレクス　ネ　エネ　イキ　ワ　アン　ペ　ア　ネ　ル　アン　ヒ　カ　ア　エラㇺペウテㇰ　ノ、",
		alt: "sorekusu ne ene iki wa an pe a= ne ru an hi ka a= erampewtek no,",
		native: "Even though I did not know who I was,",
		words: [ 'ソレクス', 'ネ', 'エネ', 'イキ', 'ワ', 'アン', 'ペ', 'ア', 'ネ', 'ル', 'アン', 'ヒ', 'カ', 'ア', 'エラㇺペウテㇰ', 'ノ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/126.wav",
		quizWords: [ 'ソレクス' ]
	},
	{
		target: "ソ　ノㇱキ　パㇰノ　トゥムン　アン　ワ　ソイ　ア　オ　ネ　ヤ",
		alt: "so noski pakno tumun an wa soy a= o ne ya",
		native: "I got rid of the trash that was piled in the middle of the floor,",
		words: [ 'ソ', 'ノㇱキ', 'パㇰノ', 'トゥムン', 'アン', 'ワ', 'ソイ', 'ア', 'オ', 'ネ', 'ヤ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/127.wav",
		quizSentence: true
	},
	{
		target: "シントコ　ネ　ヤ　ソイ　ア　オ　ワ　ア　フライパ。",
		alt: "sintoko ne ya soy a= o wa a= huraypa.",
		native: "and even took lacquerware containers outside and washed them.",
		words: [ 'シントコ', 'ネ', 'ヤ', 'ソイ', 'ア', 'オ', 'ワ', 'ア', 'フライパ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/128.wav",
		quizSentence: true
	},
	{
		target: "エネ　テエタ　オ　イキリ　アン　ヒ　ネノ　ア　カㇽ　ワ　アン　アン　ワ　アン　アン　アクㇱ、",
		alt: "ene teeta o ikiri an hi neno a= kar wa an =an wa an =an akus,",
		native: "I made the treasure shelf as it used to be and I lived.",
		words: [ 'エネ', 'テエタ', 'オ', 'イキリ', 'アン', 'ヒ', 'ネノ', 'ア', 'カㇽ', 'ワ', 'アン', 'アン', 'ワ', 'アン', 'アン', 'アクㇱ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/129.wav",
		quizWords: [ 'テエタ' ]
	},
	{
		target: "オロ　タ　アフン　ヒネ　アン　ペ　ネ　ヒネ、",
		alt: "oro ta ahun hine an pe ne hine,",
		native: "Then he came",
		words: [ 'オロ', 'タ', 'アフン', 'ヒネ', 'アン', 'ペ', 'ネ', 'ヒネ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/130.wav",
		quizSentence: true
	},
	{
		target: "タネ　レ　パ　カ　アン　ア　p、",
		alt: "tane re pa ka an a p,",
		native: "and it has been three years.",
		words: [ 'タネ', 'レ', 'パ', 'カ', 'アン', 'ア', 'p' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/131.wav",
		quizSentence: true
	},
	{
		target: "ヌマン　ネ　シニ　ヒネ、",
		alt: "numan ne sini hine,",
		native: "Yesterday when we were resting at home,",
		words: [ 'ヌマン', 'ネ', 'シニ', 'ヒネ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/132.wav",
		quizWords: [ 'ヌマン' ]
	},
	{
		target: "\'ウエウタンネ　アン　チキ　マㇰ　ネ　ルウェ　アン？\'",
		alt: "\'uewtanne =an ciki mak ne ruwe an?\'",
		native: "\"Shall we get married?\",",
		words: [ 'ウエウタンネ', 'アン', 'チキ', 'マㇰ', 'ネ', 'ルウェ', 'アン' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/133.wav",
		quizWords: [ 'マㇰ', 'ウエウタンネ' ]
	},
	{
		target: "セコㇽ　ハウェアン　コㇽカ、",
		alt: "sekor hawean korka,",
		native: "he said.",
		words: [ 'セコㇽ', 'ハウェアン', 'コㇽカ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/134.wav",
		quizSentence: true
	},
	{
		target: "タサイタㇰ　アン　ヘネ　キ　カ　ソモ　キ　ノ、",
		alt: "tasaitak =an hene ki ka somo ki no,",
		native: "But without responding",
		words: [ 'タサイタㇰ', 'アン', 'ヘネ', 'キ', 'カ', 'ソモ', 'キ', 'ノ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/135.wav",
		quizSentence: true
	},
	{
		target: "オラ　ニナ　アン　クス　ソイネ　アン　ヒネ",
		alt: "ora nina =an kusu soyne =an hine",
		native: "I went outside to get firewood",
		words: [ 'オラ', 'ニナ', 'アン', 'クス', 'ソイネ', 'アン', 'ヒネ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/136.wav",
		quizSentence: true
	},
	{
		target: "ニナ　アン　ヒネ　ア　セ　ヒネ　イワㇰ　アン　アクㇱ、",
		alt: "nina =an hine a= se hine iwak =an akus,",
		native: "When I came home with the firewood on my back,",
		words: [ 'ニナ', 'アン', 'ヒネ', 'ア', 'セ', 'ヒネ', 'イワㇰ', 'アン', 'アクㇱ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/137.wav",
		quizSentence: true
	},
	{
		target: "セタ　カ　ネプ　カ　イサㇺ　ペ、",
		alt: "seta ka nep ka isam pe,",
		native: "even though there are no dogs around,",
		words: [ 'セタ', 'カ', 'ネプ', 'カ', 'イサㇺ', 'ペ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/138.wav",
		quizSentence: true
	},
	{
		target: "ポロ　フレ　セタ　イ　エカリ　アㇽパ、",
		alt: "poro hure seta i= ekari arpa,",
		native: "a large red dog came at me.",
		words: [ 'ポロ', 'フレ', 'セタ', 'イ', 'エカリ', 'アㇽパ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/139.wav",
		quizSentence: true
	},
	{
		target: "オラノ　イ　エカリ　イ　エミㇰ　コㇽ　テㇽケテㇽケ。",
		alt: "orano i= ekari i= emik kor terketerke.",
		native: "The dog came jumping toward me while yelping.",
		words: [ 'オラノ', 'イ', 'エカリ', 'イ', 'エミㇰ', 'コㇽ', 'テㇽケテㇽケ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/140.wav",
		quizWords: [ 'エミㇰ', 'テㇽケテㇽケ' ]
	},
	{
		target: "ネ　ラポㇰケヘ　ポンノ　シㇰラプパラプパ　アン　ヘ　キ　アクス",
		alt: "ne rapokkehe ponno sikrapparappa =an he ki akusu",
		native: "Then I just blinked my eyes",
		words: [ 'ネ', 'ラポㇰケヘ', 'ポンノ', 'シㇰラプパラプパ', 'アン', 'ヘ', 'キ', 'アクス' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/141.wav",
		quizSentence: true
	},
	{
		target: "オアㇽ　イサㇺ　ヒネ、",
		alt: "oar isam hine,",
		native: "and he was gone.",
		words: [ 'オアㇽ', 'イサㇺ', 'ヒネ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/142.wav",
		quizSentence: true
	},
	{
		target: "オラウン　エㇰ　アン　アクㇱ　ウパㇱ　カ　タ　ネプ　ネ　クス　セタ　ル　シッチニナニナ　ヒネ、",
		alt: "oraun ek =an akus upas ka ta nep ne kusu seta ru sitcininanina hine,",
		native: "When I returned home, for some reason there were many dog footprints on the snow.",
		words: [ 'オラウン', 'エㇰ', 'アン', 'アクㇱ', 'ウパㇱ', 'カ', 'タ', 'ネプ', 'ネ', 'クス', 'セタ', 'ル', 'シッチニナニナ', 'ヒネ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/143.wav",
		quizSentence: true
	},
	{
		target: "エㇰ　アン　アクㇱ　セㇺ　オㇽ_　タ　カ　セタ　ル　アン　ヤクン　アナㇰネ",
		alt: "ek =an akus sem or_ ta ka seta ru an yakun anakne",
		native: "When I made it home, I found the dog\'s footprints in front of the porch.",
		words: [ 'エㇰ', 'アン', 'アクㇱ', 'セㇺ', 'オㇽ', 'タ', 'カ', 'セタ', 'ル', 'アン', 'ヤクン', 'アナㇰネ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/144.wav",
		quizSentence: true
	},
	{
		target: "アイヌ　ネ　ル　ソモ　ネ　クニ　ア　ラム　ヒ　クス",
		alt: "aynu ne ru somo ne kuni a= ramu hi kusu",
		native: "That\'s when I thought that the man was not a human,",
		words: [ 'アイヌ', 'ネ', 'ル', 'ソモ', 'ネ', 'クニ', 'ア', 'ラム', 'ヒ', 'クス' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/145.wav",
		quizSentence: true
	},
	{
		target: "オラウン　アフン　アン　カ　ニサプ　アフン　カ　ア　エトランネ　クㇱ、",
		alt: "oraun ahun =an ka nisap ahun ka a= etoranne kus,",
		native: "so I hesitated about entering the house.",
		words: [ 'オラウン', 'アフン', 'アン', 'カ', 'ニサプ', 'アフン', 'カ', 'ア', 'エトランネ', 'クㇱ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/146.wav",
		quizWords: [ 'ニサプ' ]
	},
	{
		target: "アイ　カㇽ　コㇽ　アン　ペ　クㇱ、",
		alt: "ay kar kor an pe kus,",
		native: "He was making an arrow",
		words: [ 'アイ', 'カㇽ', 'コㇽ', 'アン', 'ペ', 'クㇱ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/147.wav",
		quizSentence: true
	},
	{
		target: "ソイ　タ　ネプ　カ　ア　イェ　ア　イェ　ペコㇽ　ハウェアン　コㇽ、",
		alt: "soy ta nep ka a= ye a= ye pekor hawean kor,",
		native: "so pretending to mutter something outside,",
		words: [ 'ソイ', 'タ', 'ネプ', 'カ', 'ア', 'イェ', 'ア', 'イェ', 'ペコㇽ', 'ハウェアン', 'コㇽ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/148.wav",
		quizSentence: true
	},
	{
		target: "ニ　ア　エシㇽコパㇱテ　ヒネ　ア　キ　コㇽ　アン　アン　アイネ　アフン　アン　コㇽカ、",
		alt: "ni a= esirkopaste hine a= ki kor an =an ayne ahun =an korka,",
		native: "I put the firewood up before going inside, but",
		words: [ 'ニ', 'ア', 'エシㇽコパㇱテ', 'ヒネ', 'ア', 'キ', 'コㇽ', 'アン', 'アン', 'アイネ', 'アフン', 'アン', 'コㇽカ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/149.wav",
		quizSentence: true
	},
	{
		target: "ア　シトマ　カトゥン　キ　ヤㇰカ　ウェン　ワ　クㇱ、",
		alt: "a= sitoma katun ki yakka wen wa kus,",
		native: "I thought it wouldn\'t be good to show him that I was scared, so",
		words: [ 'ア', 'シトマ', 'カトゥン', 'キ', 'ヤㇰカ', 'ウェン', 'ワ', 'クㇱ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/150.wav",
		quizSentence: true
	},
	{
		target: "ア　シトマ　カトゥン　キ　カ　ソモ　キ　ノ　スケ　アン　ヒネ、",
		alt: "a= sitoma katun ki ka somo ki no suke =an hine,",
		native: "I made dinner while trying not to look frightened.",
		words: [ 'ア', 'シトマ', 'カトゥン', 'キ', 'カ', 'ソモ', 'キ', 'ノ', 'スケ', 'アン', 'ヒネ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/151.wav",
		quizSentence: true
	},
	{
		target: "ネン　カ　イ　シシトマレ　ヘネ　キ　カ　ソモ　キ　p　ネ　クㇱ、",
		alt: "nen ka i= sisitomare hene ki ka somo ki p ne kus,",
		native: "He didn\'t do anything to frighten me,",
		words: [ 'ネン', 'カ', 'イ', 'シシトマレ', 'ヘネ', 'キ', 'カ', 'ソモ', 'キ', 'p', 'ネ', 'クㇱ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/152.wav",
		quizSentence: true
	},
	{
		target: "スケ　アン　ヒネ　ウカスイ　イペ　アン　テㇰ、",
		alt: "suke =an hine ukasuy ipe =an tek,",
		native: "so I cooked and we ate dinner together quickly,",
		words: [ 'スケ', 'アン', 'ヒネ', 'ウカスイ', 'イペ', 'アン', 'テㇰ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/153.wav",
		quizWords: [ 'ウカスイ' ]
	},
	{
		target: "エシㇽ　カ　ア　キ　ヒネ　オラ　エキㇺネ　ヒネ　イサㇺ　ルウェ　ネ。\"",
		alt: "esir ka a= ki hine ora ekimne hine isam ruwe ne.\"",
		native: "and he just headed off to the mountains.\"",
		words: [ 'エシㇽ', 'カ', 'ア', 'キ', 'ヒネ', 'オラ', 'エキㇺネ', 'ヒネ', 'イサㇺ', 'ルウェ', 'ネ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/154.wav",
		quizWords: [ 'エシㇽ' ]
	},
	{
		target: "セコㇽ　ハウェアン　アン　ルウェ　ネ　アクㇱ、",
		alt: "sekor hawean =an ruwe ne akus,",
		native: "When I told",
		words: [ 'セコㇽ', 'ハウェアン', 'アン', 'ルウェ', 'ネ', 'アクㇱ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/155.wav",
		quizSentence: true
	},
	{
		target: "ネア　オㇰカイポ　エネ　ハウェアン　ヒ。",
		alt: "nea okkaypo ene hawean hi.",
		native: "the young man he answered.",
		words: [ 'ネア', 'オㇰカイポ', 'エネ', 'ハウェアン', 'ヒ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/156.wav",
		quizSentence: true
	},
	{
		target: "\"ユペッ　エㇺコ　コㇽ　ニㇱパ　ア　オナ　アン　ヒネ",
		alt: "\"Yupet emko kor nispa a= ona an hine",
		native: "\"My father is an elder at Yupet Upstream,",
		words: [ 'ユペッ', 'エㇺコ', 'コㇽ', 'ニㇱパ', 'ア', 'オナ', 'アン', 'ヒネ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/157.wav",
		quizWords: [ 'ユペッ', 'エㇺコ' ]
	},
	{
		target: "ア　ユピヒ　トゥン　アン、　ア　トゥレシ　トゥン　アン　ヒネ　オカ　アン　ワ、",
		alt: "a= yupihi tun an, a= turesi tun an hine oka =an wa,",
		native: "and I have two older brothers and two younger sisters.",
		words: [ 'ア', 'ユピヒ', 'トゥン', 'アン', 'ア', 'トゥレシ', 'トゥン', 'アン', 'ヒネ', 'オカ', 'アン', 'ワ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/158.wav",
		quizSentence: true
	},
	{
		target: "ア　ポントゥレシヒ　ネ　エネ　イキ　ワ　イサㇺ　ヒ　カ　ア　エラㇺペウテㇰ。",
		alt: "a= ponturesihi ne ene iki wa isam hi ka a= erampewtek.",
		native: "However, I don\'t know why but my younger sister went missing.",
		words: [ 'ア', 'ポントゥレシヒ', 'ネ', 'エネ', 'イキ', 'ワ', 'イサㇺ', 'ヒ', 'カ', 'ア', 'エラㇺペウテㇰ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/159.wav",
		quizSentence: true
	},
	{
		target: "オロワノ　ア　フナラ　ヤㇰカ　ウェン。",
		alt: "orowano a= hunara yakka wen.",
		native: "I have been looking for her, but cannot find her.",
		words: [ 'オロワノ', 'ア', 'フナラ', 'ヤㇰカ', 'ウェン' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/160.wav",
		quizSentence: true
	},
	{
		target: "オラ　セタ　ポロンノ　オカイ　ペ　ネ　ア　p、",
		alt: "ora seta poronno okay pe ne a p,",
		native: "We had many dogs,",
		words: [ 'オラ', 'セタ', 'ポロンノ', 'オカイ', 'ペ', 'ネ', 'ア', 'p' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/161.wav",
		quizSentence: true
	},
	{
		target: "オロ　タ　フレ　ポロ　セタ　ア　コㇽ　ペ　ネ　ア　p、",
		alt: "oro ta hure poro seta a= kor pe ne a p,",
		native: "and one of them was a large red dog.",
		words: [ 'オロ', 'タ', 'フレ', 'ポロ', 'セタ', 'ア', 'コㇽ', 'ペ', 'ネ', 'ア', 'p' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/162.wav",
		quizSentence: true
	},
	{
		target: "コント　セタ　ウタㇽ　ウェンコイキカㇽ　ワ",
		alt: "konto seta utar wenkoykikar wa",
		native: "The dogs had a big fight",
		words: [ 'コント', 'セタ', 'ウタㇽ', 'ウェンコイキカㇽ', 'ワ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/163.wav",
		quizWords: [ 'ウェンコイキカㇽ', 'ウタㇽ' ]
	},
	{
		target: "ソレクス　カシ　タ　セタ　ウタㇽ　アルコテㇽケ　エウカオピウキ　コㇽ　オカイ　ペ　ネ　ア　p、",
		alt: "sorekusu kasi ta seta utar arukoterke eukaopiwki kor okay pe ne a p,",
		native: "and many dogs attacked that red dog.",
		words: [ 'ソレクス', 'カシ', 'タ', 'セタ', 'ウタㇽ', 'アルコテㇽケ', 'エウカオピウキ', 'コㇽ', 'オカイ', 'ペ', 'ネ', 'ア', 'p' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/164.wav",
		quizWords: [ 'アルコテㇽケ' ]
	},
	{
		target: "コント　エウン　アㇽパ　ワ　イサㇺ　ヒ　カ　ア　エラㇺペウテㇰ　ネ　アワ、",
		alt: "konto eun arpa wa isam hi ka a= erampewtek ne awa,",
		native: "I don\'t know where the dog went, but he disappeared.",
		words: [ 'コント', 'エウン', 'アㇽパ', 'ワ', 'イサㇺ', 'ヒ', 'カ', 'ア', 'エラㇺペウテㇰ', 'ネ', 'アワ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/165.wav",
		quizWords: [ 'エウン' ]
	},
	{
		target: "ネ　ウェン　カムイ　ネ　ハウェ　ネ　ナンコㇽ　*タㇰ　。。。",
		alt: "ne wen kamuy ne hawe ne nankor *tak ...",
		native: "It was just bad Kamui.",
		words: [ 'ネ', 'ウェン', 'カムイ', 'ネ', 'ハウェ', 'ネ', 'ナンコㇽ', 'タㇰ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/166.wav",
		quizWords: [ 'ナンコㇽ', 'タㇰ' ]
	},
	{
		target: "ヘタㇰ　エ　スケ　ワ　イペ　アン　チキ、",
		alt: "hetak e= suke wa ipe =an ciki,",
		native: "Make dinner and we\'ll eat it.",
		words: [ 'ヘタㇰ', 'エ', 'スケ', 'ワ', 'イペ', 'アン', 'チキ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/167.wav",
		quizWords: [ 'ヘタㇰ' ]
	},
	{
		target: "オラ　イペ　アン　チキ　オラウン　エ　p　オㇽ　スㇽク　エ　オマレ　ワ　エ　アヌ　ヤㇰ　ピㇽカ　ナ。",
		alt: "ora ipe =an ciki oraun e p or surku e= omare wa e= anu yak pirka na.",
		native: "When we finish eating, put poison in his food.",
		words: [ 'オラ', 'イペ', 'アン', 'チキ', 'オラウン', 'エ', 'p', 'オㇽ', 'スㇽク', 'エ', 'オマレ', 'ワ', 'エ', 'アヌ', 'ヤㇰ', 'ピㇽカ', 'ナ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/168.wav",
		quizWords: [ 'アヌ', 'スㇽク' ]
	},
	{
		target: "オラ　イワㇰ　チキ　イテキ　。。。",
		alt: "ora iwak ciki iteki ...",
		native: "When he comes home (don\'t...),",
		words: [ 'オラ', 'イワㇰ', 'チキ', 'イテキ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/169.wav",
		quizSentence: true
	},
	{
		target: "ホクレ　ホクレ　エ　イペレ　ホクレ　ホクレ　イペ　クナㇰ　エ　イェ　コㇽ　キ　ヤㇰ　ピㇽカ　ナ。",
		alt: "hokure hokure e= ipere hokure hokure ipe kunak e= ye kor ki yak pirka na.",
		native: "tell him that you will feed him quickly and that he should eat quickly.",
		words: [ 'ホクレ', 'ホクレ', 'エ', 'イペレ', 'ホクレ', 'ホクレ', 'イペ', 'クナㇰ', 'エ', 'イェ', 'コㇽ', 'キ', 'ヤㇰ', 'ピㇽカ', 'ナ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/170.wav",
		quizWords: [ 'ホクレ' ]
	},
	{
		target: "オラ　トマ　トゥナ　チョㇽポㇰ　タ　イ　カ　セㇱケ　ワ　アヌ　。。。　エ　アヌ　ヤㇰ　ピㇽカ　ナ。",
		alt: "ora toma tuna corpok ta i= ka seske wa anu ... e= anu yak pirka na.",
		native: "Hide me under the goza shelf.",
		words: [ 'オラ', 'トマ', 'トゥナ', 'チョㇽポㇰ', 'タ', 'イ', 'カ', 'セㇱケ', 'ワ', 'アヌ', 'エ', 'アヌ', 'ヤㇰ', 'ピㇽカ', 'ナ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/171.wav",
		quizWords: [ 'トゥナ', 'トマ', 'セㇱケ', 'チョㇽポㇰ' ]
	},
	{
		target: "シロヌマン　ワ　ネン　カ　オㇱシケ　アㇽカ　ヘネ　キ　ヤクン　オロ　タ　ア　エラマン　ナンコㇽ　クス",
		alt: "sironuman wa nen ka ossike arka hene ki yakun oro ta a= eraman nankor kusu",
		native: "When dusk comes and that someone gets a stomachache I will know,",
		words: [ 'シロヌマン', 'ワ', 'ネン', 'カ', 'オㇱシケ', 'アㇽカ', 'ヘネ', 'キ', 'ヤクン', 'オロ', 'タ', 'ア', 'エラマン', 'ナンコㇽ', 'クス' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/172.wav",
		quizWords: [ 'アㇽカ', 'シロヌマン' ]
	},
	{
		target: "ネン　カ　ネ　チキ　アペ　エ　ルイルイカ　p　ネ　ナ。\"",
		alt: "nen ka ne ciki ape e= ruyruyka p ne na.\"",
		native: "so do what you can to make a big fire.\",",
		words: [ 'ネン', 'カ', 'ネ', 'チキ', 'アペ', 'エ', 'ルイルイカ', 'p', 'ネ', 'ナ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/173.wav",
		quizSentence: true
	},
	{
		target: "セコㇽ　カネ　ネア　オㇰカイポ　ハウェアン　コㇽ　イペ　ヒネ、",
		alt: "sekor kane nea okkaypo hawean kor ipe hine,",
		native: "said the young man and finished his dinner.",
		words: [ 'セコㇽ', 'カネ', 'ネア', 'オㇰカイポ', 'ハウェアン', 'コㇽ', 'イペ', 'ヒネ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/174.wav",
		quizSentence: true
	},
	{
		target: "オラ　トマ　トゥナ　チョㇽポㇰ　タ　カシ　ア　セㇱケ　ヒネ　アン　アン。",
		alt: "ora toma tuna corpok ta kasi a= seske hine an =an.",
		native: "I hid him under the goza shelf.",
		words: [ 'オラ', 'トマ', 'トゥナ', 'チョㇽポㇰ', 'タ', 'カシ', 'ア', 'セㇱケ', 'ヒネ', 'アン', 'アン' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/175.wav",
		quizSentence: true
	},
	{
		target: "ラポㇰケ　イワㇰ　モイレ、　タント　オㇽ_　タ　キ、",
		alt: "rapokke iwak moyre, tanto or_ ta ki,",
		native: "[The red dog man] was late coming home that day.",
		words: [ 'ラポㇰケ', 'イワㇰ', 'モイレ', 'タント', 'オㇽ', 'タ', 'キ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/176.wav",
		quizWords: [ 'モイレ', 'タント' ]
	},
	{
		target: "イペ　アン　パ　*シ　。。。　p　ネ　クス、",
		alt: "ipe =an pa *si ... p ne kusu,",
		native: "We have already finished the dinner, so",
		words: [ 'イペ', 'アン', 'パ', 'シ', 'p', 'ネ', 'クス' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/177.wav",
		quizWords: [ 'シ' ]
	},
	{
		target: "オラ　タント　オㇽ_　タ　イワㇰ　モイレ　ヒネ　イワㇰ　キ　クス、",
		alt: "ora tanto or_ ta iwak moyre hine iwak ki kusu,",
		native: "when he came home late today,",
		words: [ 'オラ', 'タント', 'オㇽ', 'タ', 'イワㇰ', 'モイレ', 'ヒネ', 'イワㇰ', 'キ', 'クス' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/178.wav",
		quizSentence: true
	},
	{
		target: "\"カムイ　ア　ユピヒ　マㇰ　キ　ヒネ　エネポ　イワㇰ　モイレ。",
		alt: "\"kamuy a= yupihi mak ki hine enepo iwak moyre.",
		native: "\"Brother kamui, why are you so late today?",
		words: [ 'カムイ', 'ア', 'ユピヒ', 'マㇰ', 'キ', 'ヒネ', 'エネポ', 'イワㇰ', 'モイレ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/179.wav",
		quizWords: [ 'エネポ' ]
	},
	{
		target: "イペルスイ　アン　ワ　ホㇱキノ　イペ　アン　ルウェ　ネ。\"",
		alt: "iperusuy =an wa hoskino ipe =an ruwe ne.\"",
		native: "I was hungry, so I ate already.\"",
		words: [ 'イペルスイ', 'アン', 'ワ', 'ホㇱキノ', 'イペ', 'アン', 'ルウェ', 'ネ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/180.wav",
		quizWords: [ 'ホㇱキノ', 'イペルスイ' ]
	},
	{
		target: "セコㇽ　ハウェアン　アン。",
		alt: "sekor hawean =an.",
		native: "I said.",
		words: [ 'セコㇽ', 'ハウェアン', 'アン' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/181.wav",
		quizSentence: true
	},
	{
		target: "エアㇽキンネ　ア　エヤイコプンテㇰ　ペコㇽ　イキ　アン　ペ　ネ　クス、",
		alt: "earkinne a= eyaykopuntek pekor iki =an pe ne kusu,",
		native: "I was acting so happy,",
		words: [ 'エアㇽキンネ', 'ア', 'エヤイコプンテㇰ', 'ペコㇽ', 'イキ', 'アン', 'ペ', 'ネ', 'クス' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/182.wav",
		quizWords: [ 'エヤイコプンテㇰ' ]
	},
	{
		target: "ミナ　トゥラ　モノ　ア　ヒネ　イペ。",
		alt: "mina tura mono a hine ipe.",
		native: "he sat down smiling and ate his dinner.",
		words: [ 'ミナ', 'トゥラ', 'モノ', 'ア', 'ヒネ', 'イペ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/183.wav",
		quizWords: [ 'ミナ' ]
	},
	{
		target: "ア　コイプニ　ヒネ　イペ　ヒネ　シネ　イタンキ　トゥ　イタンキ　イペ　コㇽ　ラポㇰケ　マㇰ　ア　*イェ　。。。",
		alt: "a= koypuni hine ipe hine sine itanki tu itanki ipe kor rapokke mak a= *ye ...",
		native: "I served his dinner, and he ate one, two bowls of food, then,",
		words: [ 'ア', 'コイプニ', 'ヒネ', 'イペ', 'ヒネ', 'シネ', 'イタンキ', 'トゥ', 'イタンキ', 'イペ', 'コㇽ', 'ラポㇰケ', 'マㇰ', 'ア', 'イェ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/184.wav",
		quizWords: [ 'コイプニ', 'イタンキ' ]
	},
	{
		target: "ヤユンナタラレ　ワ　アン　ヒ　クス、",
		alt: "yayunnatarare wa an hi kusu,",
		native: "he began to suffer, so",
		words: [ 'ヤユンナタラレ', 'ワ', 'アン', 'ヒ', 'クス' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/185.wav",
		quizSentence: true
	},
	{
		target: "\"カムイ　ア　ユピ　マㇰ　キ　ヒネ　ヤユンナタラレ　ルウェ　アン？\"",
		alt: "\"kamuy a= yupi mak ki hine yayunnatarare ruwe an?\"",
		native: "\"Dear brother, why are you suffering?\"",
		words: [ 'カムイ', 'ア', 'ユピ', 'マㇰ', 'キ', 'ヒネ', 'ヤユンナタラレ', 'ルウェ', 'アン' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/186.wav",
		quizSentence: true
	},
	{
		target: "セコㇽ　ハウェアン　アン　アクス、",
		alt: "sekor hawean =an akusu,",
		native: "I asked.",
		words: [ 'セコㇽ', 'ハウェアン', 'アン', 'アクス' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/187.wav",
		quizSentence: true
	},
	{
		target: "\"マㇰ　キ　ア　オㇱシケ　アㇽカ　ペコㇽ　フマㇱ　ワ　ネ。\"",
		alt: "\"mak ki a= ossike arka pekor humas wa ne.\"",
		native: "\"My stomach hurts for some reason,\"",
		words: [ 'マㇰ', 'キ', 'ア', 'オㇱシケ', 'アㇽカ', 'ペコㇽ', 'フマㇱ', 'ワ', 'ネ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/188.wav",
		quizSentence: true
	},
	{
		target: "セコㇽ、",
		alt: "sekor,",
		native: "[he replied].",
		words: [ 'セコㇽ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/189.wav",
		quizSentence: true
	},
	{
		target: "\"ネプ　カ　パウチ　ア　オマレ　カ　ソモ　キ。",
		alt: "\"nep ka pawci a= omare ka somo ki.",
		native: "\"I didn\'t put any poison in.",
		words: [ 'ネプ', 'カ', 'パウチ', 'ア', 'オマレ', 'カ', 'ソモ', 'キ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/190.wav",
		quizWords: [ 'パウチ' ]
	},
	{
		target: "ヒンタ　パウチ　ア　オマレ",
		alt: "hinta pawci a= omare",
		native: "Why would I put poison in?",
		words: [ 'ヒンタ', 'パウチ', 'ア', 'オマレ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/191.wav",
		quizSentence: true
	},
	{
		target: "タネ　パㇰノ　ア　ユピ　エトㇰ　ウン　スケ　アン　ワ　イペ　アン　パ　p、",
		alt: "tane pakno a= yupi etok un suke =an wa ipe =an pa p,",
		native: "Till now I\'ve making dinner and eating just before you,",
		words: [ 'タネ', 'パㇰノ', 'ア', 'ユピ', 'エトㇰ', 'ウン', 'スケ', 'アン', 'ワ', 'イペ', 'アン', 'パ', 'p' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/192.wav",
		quizWords: [ 'エトㇰ' ]
	},
	{
		target: "ンタ　パウチ　ア　オマレ　ヒネ　マㇰ　ネ　ヒネ　エネ　ネ　ハウェアン　ヒ　アン。\"",
		alt: "hnta pawci a= omare hine mak ne hine ene ne hawean hi an.\"",
		native: "so why do you say I\'ve put poison in your dinner?\",",
		words: [ 'ンタ', 'パウチ', 'ア', 'オマレ', 'ヒネ', 'マㇰ', 'ネ', 'ヒネ', 'エネ', 'ネ', 'ハウェアン', 'ヒ', 'アン' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/193.wav",
		quizWords: [ 'ンタ' ]
	},
	{
		target: "セコㇽ　ハウェアン　アン。",
		alt: "sekor hawean =an.",
		native: "I said.",
		words: [ 'セコㇽ', 'ハウェアン', 'アン' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/194.wav",
		quizSentence: true
	},
	{
		target: "ラポㇰケ　コント　アペ　コホピ　ホクㇱ　ヒネ　ホチカチカ　コㇽ　アン、",
		alt: "rapokke konto ape kohopi hokus hine hocikacika kor an,",
		native: "He fell away from the hearth and noisily thrashed his legs.",
		words: [ 'ラポㇰケ', 'コント', 'アペ', 'コホピ', 'ホクㇱ', 'ヒネ', 'ホチカチカ', 'コㇽ', 'アン' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/195.wav",
		quizWords: [ 'コホピ' ]
	},
	{
		target: "ラポㇰケ　アペ　ホマㇽ　コㇽ",
		alt: "rapokke ape homar kor",
		native: "When the hearth\'s fire died down,",
		words: [ 'ラポㇰケ', 'アペ', 'ホマㇽ', 'コㇽ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/196.wav",
		quizWords: [ 'ホマㇽ' ]
	},
	{
		target: "ポロ　フレ　セタ　サラ　ア　ヌカㇽ_",
		alt: "poro hure seta sara a= nukar_",
		native: "I could see the tail of the big red dog.",
		words: [ 'ポロ', 'フレ', 'セタ', 'サラ', 'ア', 'ヌカㇽ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/197.wav",
		quizWords: [ 'サラ' ]
	},
	{
		target: "ラポㇰケ　ネア　オㇰカイポ　アニ　キㇰ　クニ、　キㇱマ　フㇺ　ピㇽカノ　アン、　アン　チクニ　トゥイェ　ヒネ",
		alt: "rapokke nea okkaypo ani kik kuni, kisma hum pirkano an, an cikuni tuye hine",
		native: "Then that young man cut a tree [such that] the feeling is good of grabbing it [i.e. which fits his hand] in order to beat with it.",
		words: [ 'ラポㇰケ', 'ネア', 'オㇰカイポ', 'アニ', 'キㇰ', 'クニ', 'キㇱマ', 'フㇺ', 'ピㇽカノ', 'アン', 'アン', 'チクニ', 'トゥイェ', 'ヒネ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/198.wav",
		quizWords: [ 'キㇱマ' ]
	},
	{
		target: "コㇽ　ワ　アン　ペ　ネ　クㇱ、",
		alt: "kor wa an pe ne kus,",
		native: "Holding it,",
		words: [ 'コㇽ', 'ワ', 'アン', 'ペ', 'ネ', 'クㇱ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/199.wav",
		quizSentence: true
	},
	{
		target: "アニ　エサパコキㇰキㇰ　ヒネ　キㇰキㇰ　ヒネ　ライケ　ルウェ　ネ。",
		alt: "ani esapakokikkik hine kikkik hine rayke ruwe ne.",
		native: "he hit the dog by its head with that and killed it.",
		words: [ 'アニ', 'エサパコキㇰキㇰ', 'ヒネ', 'キㇰキㇰ', 'ヒネ', 'ライケ', 'ルウェ', 'ネ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/200.wav",
		quizWords: [ 'キㇰキㇰ', 'ライケ' ]
	},
	{
		target: "コパㇱロタ　ア　コパㇱロタ　ア　ソレクㇱ、",
		alt: "kopasrota a kopasrota a sorekus,",
		native: "He cursed the red dog and said,",
		words: [ 'コパㇱロタ', 'ア', 'コパㇱロタ', 'ア', 'ソレクㇱ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/201.wav",
		quizWords: [ 'コパㇱロタ' ]
	},
	{
		target: "\"ウェン　ケウトゥㇺ　コㇽ　ウェン_　サㇺペ　コㇽ_　レイェプ　アナㇰネ、",
		alt: "\"wen kewtum kor wen_ sampe kor_ reyep anakne,",
		native: "\"You dog with a bad spirit and bad heart.",
		words: [ 'ウェン', 'ケウトゥㇺ', 'コㇽ', 'ウェン', 'サㇺペ', 'コㇽ', 'レイェプ', 'アナㇰネ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/202.wav",
		quizWords: [ 'レイェプ', 'サㇺペ' ]
	},
	{
		target: "レイェプ　セコㇽ　ア　イェ　p　アナㇰネ　ソレクス　カムイ　オヤカタ　パセ　p　ネ　ヤ　カ　ヤ　カ　ア　イェ　p、",
		alt: "reyep sekor a= ye p anakne sorekusu kamuy oyakata pase p ne ya ka ya ka a= ye p,",
		native: "It is said that a creature called dog has highly respectable parents,",
		words: [ 'レイェプ', 'セコㇽ', 'ア', 'イェ', 'p', 'アナㇰネ', 'ソレクス', 'カムイ', 'オヤカタ', 'パセ', 'p', 'ネ', 'ヤ', 'カ', 'ヤ', 'カ', 'ア', 'イェ', 'p' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/203.wav",
		quizWords: [ 'オヤカタ' ]
	},
	{
		target: "エネ　アン　ウェン　プリ　コㇽ。\"",
		alt: "ene an wen puri kor.\"",
		native: "but you have done bad things.\"",
		words: [ 'エネ', 'アン', 'ウェン', 'プリ', 'コㇽ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/204.wav",
		quizWords: [ 'プリ' ]
	},
	{
		target: "セコㇽ　ハウェアン　コㇽ　コパㇱロタ　コㇽ　エソイネ　オスラ　ヒネ、",
		alt: "sekor hawean kor kopasrota kor esoyne osura hine,",
		native: "He threw the dog outside while cursing it.",
		words: [ 'セコㇽ', 'ハウェアン', 'コㇽ', 'コパㇱロタ', 'コㇽ', 'エソイネ', 'オスラ', 'ヒネ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/205.wav",
		quizWords: [ 'オスラ' ]
	},
	{
		target: "オラ　アシㇽキンネ　スイ　ス　ア　フライェ　ヒネ　スケ　アン　ヒネ　イペ　アン　ヒネ、",
		alt: "ora asirkinne suy su a= huraye hine suke =an hine ipe =an hine,",
		native: "I washed the pan again, prepared dinner again and ate.",
		words: [ 'オラ', 'アシㇽキンネ', 'スイ', 'ス', 'ア', 'フライェ', 'ヒネ', 'スケ', 'アン', 'ヒネ', 'イペ', 'アン', 'ヒネ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/206.wav",
		quizWords: [ 'ス' ]
	},
	{
		target: "オラ　ホッケ　アン　パ　ルウェ　ネ、",
		alt: "ora hotke =an pa ruwe ne,",
		native: "When we both went to sleep,",
		words: [ 'オラ', 'ホッケ', 'アン', 'パ', 'ルウェ', 'ネ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/207.wav",
		quizSentence: true
	},
	{
		target: "ヒネ　ウェンタラプ　アン　アクス、",
		alt: "hine wentarap =an akusu,",
		native: "I had a dream.",
		words: [ 'ヒネ', 'ウェンタラプ', 'アン', 'アクス' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/208.wav",
		quizWords: [ 'ウェンタラプ' ]
	},
	{
		target: "ポンポン　オケレ　ヒネ　イルㇱカ　ワ　アン　ヒネ　エネ　ハウェアン　ヒ。",
		alt: "ponpon okere hine iruska wa an hine ene hawean hi.",
		native: "(The red dog man) was very small and angrily said this to me.",
		words: [ 'ポンポン', 'オケレ', 'ヒネ', 'イルㇱカ', 'ワ', 'アン', 'ヒネ', 'エネ', 'ハウェアン', 'ヒ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/209.wav",
		quizSentence: true
	},
	{
		target: "\"タン　ポン　メノコ　エ　ネ　ワ　イタㇰ　アン　チキ　エ　ヌ　カトゥ　アナㇰ　〔エネ　アン　ヒ〕。",
		alt: "\"tan pon menoko e= ne wa itak =an ciki e= nu katu anak [ene an hi].",
		native: "\"Young girl, listen well to what I have to say.",
		words: [ 'タン', 'ポン', 'メノコ', 'エ', 'ネ', 'ワ', 'イタㇰ', 'アン', 'チキ', 'エ', 'ヌ', 'カトゥ', 'アナㇰ', 'エネ', 'アン', 'ヒ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/210.wav",
		quizWords: [ 'カトゥ' ]
	},
	{
		target: "オヤチキ　カムイ　レス　ワ",
		alt: "oyaciki kamuy resu wa",
		native: "As I thought, you have been raised by kamui,",
		words: [ 'オヤチキ', 'カムイ', 'レス', 'ワ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/211.wav",
		quizWords: [ 'オヤチキ' ]
	},
	{
		target: "オハシㇽ_　タ　チウェンテ　コタン　オㇽ_　タ　アン　ペ　エ　ネ　アアン　ヒネ、",
		alt: "ohasir_ ta ciwente kotan or_ ta an pe e= ne aan hine,",
		native: "and you are living in this unpopular barren village.",
		words: [ 'オハシㇽ', 'タ', 'チウェンテ', 'コタン', 'オㇽ', 'タ', 'アン', 'ペ', 'エ', 'ネ', 'アアン', 'ヒネ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/212.wav",
		quizWords: [ 'アアン', 'オハシㇽ' ]
	},
	{
		target: "オラ　ユペッ　エㇺコ　コㇽ_　ニㇱパ　ポン　マッネポ　ア　カテオマレ　ワ　クス、",
		alt: "ora Yupet emko kor_ nispa pon matnepo a= kateomare wa kusu,",
		native: "I fell in love with a girl living in a village upstream of Yupet.",
		words: [ 'オラ', 'ユペッ', 'エㇺコ', 'コㇽ', 'ニㇱパ', 'ポン', 'マッネポ', 'ア', 'カテオマレ', 'ワ', 'クス' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/213.wav",
		quizWords: [ 'カテオマレ' ]
	},
	{
		target: "ネウン　ア　イェ　ヤㇰカ　ア　シンニウケㇱテ　ア　ルㇱカ　クス　ア　ライケ　ヒネ、",
		alt: "neun a= ye yakka a= sinniwkeste a= ruska kusu a= rayke hine,",
		native: "I tried to say many things but I could not make it work, so I got angry and killed her and",
		words: [ 'ネウン', 'ア', 'イェ', 'ヤㇰカ', 'ア', 'シンニウケㇱテ', 'ア', 'ルㇱカ', 'クス', 'ア', 'ライケ', 'ヒネ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/214.wav",
		quizWords: [ 'ルㇱカ' ]
	},
	{
		target: "サマㇺ　ニ　チョㇽポㇰ　ア　オマレ　ルウェ　ネ　ア　p、",
		alt: "samam ni corpok a= omare ruwe ne a p,",
		native: "hid her body under a fallen tree.",
		words: [ 'サマㇺ', 'ニ', 'チョㇽポㇰ', 'ア', 'オマレ', 'ルウェ', 'ネ', 'ア', 'p' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/215.wav",
		quizSentence: true
	},
	{
		target: "オラノ　セタ　ウタㇽ　エラムオカ。",
		alt: "orano seta utar eramuoka.",
		native: "The dogs found out,",
		words: [ 'オラノ', 'セタ', 'ウタㇽ', 'エラムオカ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/216.wav",
		quizSentence: true
	},
	{
		target: "オラノ　イ　カ　タ　ウコイキ　パ、　イ　ウェンコイキカㇽ　パ　ワ、",
		alt: "orano i= ka ta ukoyki pa, i= wenkoykikar pa wa,",
		native: "attacked me and hurt me badly,",
		words: [ 'オラノ', 'イ', 'カ', 'タ', 'ウコイキ', 'パ', 'イ', 'ウェンコイキカㇽ', 'パ', 'ワ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/217.wav",
		quizWords: [ 'ウコイキ' ]
	},
	{
		target: "アン　カ　ア　エアイカプ　クス、",
		alt: "an ka a= eaykap kusu,",
		native: "so I could not stay there any longer.",
		words: [ 'アン', 'カ', 'ア', 'エアイカプ', 'クス' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/218.wav",
		quizWords: [ 'エアイカプ' ]
	},
	{
		target: "インカㇽ　アン　アクㇱ　エ　アン　ルウェ　ア　ヌカㇽ　ヒ　クス",
		alt: "inkar =an akus e= an ruwe a= nukar hi kusu",
		native: "When I looked around I saw you.",
		words: [ 'インカㇽ', 'アン', 'アクㇱ', 'エ', 'アン', 'ルウェ', 'ア', 'ヌカㇽ', 'ヒ', 'クス' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/219.wav",
		quizWords: [ 'インカㇽ' ]
	},
	{
		target: "エ　ポロ　ア　エ　ポロレ　ヤㇰ　オラ　マッ　ネ　ア　エ　コㇽ_　ルスイ　クス",
		alt: "e= poro a= e= porore yak ora mat ne a= e= kor_ rusuy kusu",
		native: "I raised you and thought I wanted to marry you so",
		words: [ 'エ', 'ポロ', 'ア', 'エ', 'ポロレ', 'ヤㇰ', 'オラ', 'マッ', 'ネ', 'ア', 'エ', 'コㇽ', 'ルスイ', 'クス' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/220.wav",
		quizSentence: true
	},
	{
		target: "エ　オㇽ_　タ　アン　アン　ワ　レ　パ　カ　エ　カ　ア　オイキ　コㇽ　オカ　アン　アイネ",
		alt: "e= or_ ta an =an wa re pa ka e= ka a= oyki kor oka =an ayne",
		native: "for three years since I came here I have taken care of you.",
		words: [ 'エ', 'オㇽ', 'タ', 'アン', 'アン', 'ワ', 'レ', 'パ', 'カ', 'エ', 'カ', 'ア', 'オイキ', 'コㇽ', 'オカ', 'アン', 'アイネ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/221.wav",
		quizWords: [ 'オイキ' ]
	},
	{
		target: "タネ　エ　ポロ　ルウェ　ネ　ヤクン、",
		alt: "tane e= poro ruwe ne yakun,",
		native: "Now that you have grown up,",
		words: [ 'タネ', 'エ', 'ポロ', 'ルウェ', 'ネ', 'ヤクン' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/222.wav",
		quizSentence: true
	},
	{
		target: "マッ　ネ　ア　エ　コㇽ　エアㇱカイ　クナㇰ　ア　ラム　クス、",
		alt: "mat ne a= e= kor easkay kunak a= ramu kusu,",
		native: "I thought that I would take you as my wife.",
		words: [ 'マッ', 'ネ', 'ア', 'エ', 'コㇽ', 'エアㇱカイ', 'クナㇰ', 'ア', 'ラム', 'クス' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/223.wav",
		quizWords: [ 'エアㇱカイ' ]
	},
	{
		target: "マッ　ネ　ア　エ　コㇽ　クニ　ア　エ　イェ　コㇽカ、",
		alt: "mat ne a= e= kor kuni a= e= ye korka,",
		native: "I told you that I wanted to marry you,",
		words: [ 'マッ', 'ネ', 'ア', 'エ', 'コㇽ', 'クニ', 'ア', 'エ', 'イェ', 'コㇽカ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/224.wav",
		quizSentence: true
	},
	{
		target: "ネン　カ　ア　エ　カㇽ　ヘネ　キ　カ　ソモ　キ　ノ",
		alt: "nen ka a= e= kar hene ki ka somo ki no",
		native: "but before I could do anything,",
		words: [ 'ネン', 'カ', 'ア', 'エ', 'カㇽ', 'ヘネ', 'キ', 'カ', 'ソモ', 'キ', 'ノ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/225.wav",
		quizSentence: true
	},
	{
		target: "エ　ニナ　クス、　エ　エキㇺネ　アクㇱ",
		alt: "e= nina kusu, e= ekimne akus",
		native: "you went to the mountains to get firewood.",
		words: [ 'エ', 'ニナ', 'クス', 'エ', 'エキㇺネ', 'アクㇱ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/226.wav",
		quizSentence: true
	},
	{
		target: "ソレクス　カムイ　イ　コイパㇰ　ペ　ネ　クス、",
		alt: "sorekusu kamuy i= koypak pe ne kusu,",
		native: "Surely this is kamui\'s punishment,",
		words: [ 'ソレクス', 'カムイ', 'イ', 'コイパㇰ', 'ペ', 'ネ', 'クス' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/227.wav",
		quizWords: [ 'コイパㇰ' ]
	},
	{
		target: "セタ　ア　ネ　p　ネ　クㇱ",
		alt: "seta a= ne p ne kus",
		native: "but because I am a dog",
		words: [ 'セタ', 'ア', 'ネ', 'p', 'ネ', 'クㇱ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/228.wav",
		quizSentence: true
	},
	{
		target: "エ　エカリ　アㇽパ　アン　ワ　ア　エ　シネトパヌカレ？　ルウェ　ネ　ヒネ、",
		alt: "e= ekari arpa =an wa a= e= sinetopanukare? ruwe ne hine,",
		native: "I went near you and tried to play with you [lit. \'showed you games/tricks\'].",
		words: [ 'エ', 'エカリ', 'アㇽパ', 'アン', 'ワ', 'ア', 'エ', 'シネトパヌカレ', 'ルウェ', 'ネ', 'ヒネ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/229.wav",
		quizSentence: true
	},
	{
		target: "エ　エオアイシトマ　ヤㇰカ　エ　エオアイシトマ　カトゥン　カ　エ　。。。　ソモ　エ　キ　ルウェ　ネ。",
		alt: "e= eoaysitoma yakka e= eoaysitoma katun ka e= ... somo e= ki ruwe ne.",
		native: "Even though you were afraid, you did not show it.",
		words: [ 'エ', 'エオアイシトマ', 'ヤㇰカ', 'エ', 'エオアイシトマ', 'カトゥン', 'カ', 'エ', 'ソモ', 'エ', 'キ', 'ルウェ', 'ネ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/230.wav",
		quizSentence: true
	},
	{
		target: "カムイ　エ　レス　ソレクス　カムイ　レス　p　エ　ネ　p　ネ　クス　キ　ルウェ　ネ　アアン。",
		alt: "kamuy e= resu sorekusu kamuy resu p e= ne p ne kusu ki ruwe ne aan.",
		native: "If you had been raised by kamui, you would have done that.",
		words: [ 'カムイ', 'エ', 'レス', 'ソレクス', 'カムイ', 'レス', 'p', 'エ', 'ネ', 'p', 'ネ', 'クス', 'キ', 'ルウェ', 'ネ', 'アアン' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/231.wav",
		quizSentence: true
	},
	{
		target: "オラ　タアン　ユペッ　エㇺコ　コㇽ　オㇰカイポ　アナㇰネ　カムイ　サシミ　ネ、",
		alt: "ora taan Yupet emko kor okkaypo anakne kamuy sasimi ne,",
		native: "The young man from Yubestu Upstream is an offspring of kamui.",
		words: [ 'オラ', 'タアン', 'ユペッ', 'エㇺコ', 'コㇽ', 'オㇰカイポ', 'アナㇰネ', 'カムイ', 'サシミ', 'ネ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/232.wav",
		quizWords: [ 'タアン' ]
	},
	{
		target: "エアニ　カ　カムイ　サシミ　エチ　ネ　ワ　エチ　ウコㇽ　アタリマエ　ネ　ワ　シラン　ワ　クス、",
		alt: "eani ka kamuy sasimi eci= ne wa eci= ukor ATARIMAE ne wa siran wa kusu,",
		native: "You are also an offspring of kamui, so naturally you are two who should become man and wife.",
		words: [ 'エアニ', 'カ', 'カムイ', 'サシミ', 'エチ', 'ネ', 'ワ', 'エチ', 'ウコㇽ', 'アタリマエ', 'ネ', 'ワ', 'シラン', 'ワ', 'クス' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/233.wav",
		quizWords: [ 'シラン', 'ウコㇽ', 'アタリマエ' ]
	},
	{
		target: "イカヨプ　タクプ　セ　カネ　ワ　ヌマン　エㇰ　ヒネ、",
		alt: "ikayop takup se kane wa numan ek hine,",
		native: "That is why he came last night holding just an arrow holder.",
		words: [ 'イカヨプ', 'タクプ', 'セ', 'カネ', 'ワ', 'ヌマン', 'エㇰ', 'ヒネ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/234.wav",
		quizWords: [ 'イカヨプ', 'タクプ' ]
	},
	{
		target: "オヤチキ　ヌイナㇰ　ワ　アン　アアン　ペ　ヤ　カ　ア　エラミㇱカリ　ノ",
		alt: "oyaciki nuynak wa an aan pe ya ka a= eramiskari no",
		native: "I probably did not see him hiding,",
		words: [ 'オヤチキ', 'ヌイナㇰ', 'ワ', 'アン', 'アアン', 'ペ', 'ヤ', 'カ', 'ア', 'エラミㇱカリ', 'ノ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/235.wav",
		quizWords: [ 'ヌイナㇰ' ]
	},
	{
		target: "ア　イ　ライケ　ルウェ　ネ　コㇽカ、",
		alt: "a= i= rayke ruwe ne korka,",
		native: "and thus was killed.",
		words: [ 'ア', 'イ', 'ライケ', 'ルウェ', 'ネ', 'コㇽカ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/236.wav",
		quizSentence: true
	},
	{
		target: "ウェンノ　エチ　イ　カㇽ　ヤㇰカ　ネウン　ナニ　エチ　ピㇽカ　カ　ソモ　キ　p　ネ　クㇱ、",
		alt: "wenno eci= i= kar yakka neun nani eci= pirka ka somo ki p ne kus,",
		native: "But even if you punish me, nothing good will come of it.",
		words: [ 'ウェンノ', 'エチ', 'イ', 'カㇽ', 'ヤㇰカ', 'ネウン', 'ナニ', 'エチ', 'ピㇽカ', 'カ', 'ソモ', 'キ', 'p', 'ネ', 'クㇱ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/237.wav",
		quizWords: [ 'ウェンノ' ]
	},
	{
		target: "チャナンノ　ポカ　セタ　オヤカタ　エウン　アㇽパ　アン　クニ　エチ　イ　ホプンパレ　ワ　エチ　*コ　。。。　コレ　ヤㇰ、",
		alt: "cananno poka seta oyakata eun arpa =an kuni eci= i= hopunpare wa eci= *ko ... kore yak,",
		native: "If you can kind of send me off to my dog master ,",
		words: [ 'チャナンノ', 'ポカ', 'セタ', 'オヤカタ', 'エウン', 'アㇽパ', 'アン', 'クニ', 'エチ', 'イ', 'ホプンパレ', 'ワ', 'エチ', 'コ', 'コレ', 'ヤㇰ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/238.wav",
		quizWords: [ 'チャナンノ' ]
	},
	{
		target: "オラ　エチ　サマ　ア　エプンキネ　ヤㇰネ",
		alt: "ora eci= sama a= epunkine yakne",
		native: "I will protect you. Then,",
		words: [ 'オラ', 'エチ', 'サマ', 'ア', 'エプンキネ', 'ヤㇰネ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/239.wav",
		quizWords: [ 'エプンキネ', 'サマ', 'ヤㇰネ' ]
	},
	{
		target: "エチ　シトマ　カ　ネプ　エチ　コㇽ_　ルスイ　カ　ソモ　キ　ノ、",
		alt: "eci= sitoma ka nep eci= kor_ rusuy ka somo ki no,",
		native: "you will no longer be afraid of anything, and you will not want anything.",
		words: [ 'エチ', 'シトマ', 'カ', 'ネプ', 'エチ', 'コㇽ', 'ルスイ', 'カ', 'ソモ', 'キ', 'ノ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/240.wav",
		quizSentence: true
	},
	{
		target: "オラ　タネ　イㇱカㇽ　エㇺコホ　スプヤ　サㇰ　ヒ",
		alt: "ora tane Iskar emkoho supuya sak hi",
		native: "Now there is no smoke [there is no one living] upstream from Iskar,",
		words: [ 'オラ', 'タネ', 'イㇱカㇽ', 'エㇺコホ', 'スプヤ', 'サㇰ', 'ヒ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/241.wav",
		quizWords: [ 'イㇱカㇽ', 'スプヤ', 'エㇺコホ' ]
	},
	{
		target: "ユペッ　エㇺコ　コㇽ_　ニㇱパ　パㇰ　ケウトゥㇺ　ピㇽカ　ニㇱパ　イサㇺ　ペ　ネ　クス、",
		alt: "Yupet emko kor_ nispa pak kewtum pirka nispa isam pe ne kusu,",
		native: "but the elder at Yupet Upstream has a very good spirit,",
		words: [ 'ユペッ', 'エㇺコ', 'コㇽ', 'ニㇱパ', 'パㇰ', 'ケウトゥㇺ', 'ピㇽカ', 'ニㇱパ', 'イサㇺ', 'ペ', 'ネ', 'クス' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/242.wav",
		quizSentence: true
	},
	{
		target: "スプヤ　サㇰ　ヤㇰ　ウェン　セコㇽ　ハウェアン　コㇽ_、",
		alt: "supuya sak yak wen sekor hawean kor_,",
		native: "so when he says that it is not good that there is no smoke,",
		words: [ 'スプヤ', 'サㇰ', 'ヤㇰ', 'ウェン', 'セコㇽ', 'ハウェアン', 'コㇽ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/243.wav",
		quizSentence: true
	},
	{
		target: "テ　タ　コタン　エチ　カㇽ　ワ　エチ　オカ　ヒネ",
		alt: "te ta kotan eci= kar wa eci= oka hine",
		native: "you will build there a village and live.",
		words: [ 'テ', 'タ', 'コタン', 'エチ', 'カㇽ', 'ワ', 'エチ', 'オカ', 'ヒネ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/244.wav",
		quizWords: [ 'テ' ]
	},
	{
		target: "アシㇽ　アイヌ　パテㇰ　オカ　ヤクン、",
		alt: "asir aynu patek oka yakun,",
		native: "If new people come to live",
		words: [ 'アシㇽ', 'アイヌ', 'パテㇰ', 'オカ', 'ヤクン' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/245.wav",
		quizWords: [ 'アシㇽ', 'パテㇰ' ]
	},
	{
		target: "*オ　。。。　インネ　コタン　エチ　ネ　ヤㇰカ　ソレクス　カムイ　オㇽ　ウン　。。。",
		alt: "*o ... inne kotan eci= ne yakka sorekusu kamuy or un ...",
		native: "it will become a large village",
		words: [ 'オ', 'インネ', 'コタン', 'エチ', 'ネ', 'ヤㇰカ', 'ソレクス', 'カムイ', 'オㇽ', 'ウン' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/246.wav",
		quizSentence: true
	},
	{
		target: "エチ　サマ　ア　エプンキネ　p　ネ　ルウェ　ネ　ナ",
		alt: "eci= sama a= epunkine p ne ruwe ne na",
		native: "and I will protect you.",
		words: [ 'エチ', 'サマ', 'ア', 'エプンキネ', 'p', 'ネ', 'ルウェ', 'ネ', 'ナ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/247.wav",
		quizSentence: true
	},
	{
		target: "ネノ　エチ　イキ　ワ　エチ　イ　コレ　p　ネ　ナ。\"",
		alt: "neno eci= iki wa eci= i= kore p ne na.\"",
		native: "Please do me a favor [send me to the dog father] like this.\"",
		words: [ 'ネノ', 'エチ', 'イキ', 'ワ', 'エチ', 'イ', 'コレ', 'p', 'ネ', 'ナ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/248.wav",
		quizSentence: true
	},
	{
		target: "セコㇽ　ウェンタラプ　アン　ルウェ　ネ　ア　p、",
		alt: "sekor wentarap =an ruwe ne a p,",
		native: "I dreamt.",
		words: [ 'セコㇽ', 'ウェンタラプ', 'アン', 'ルウェ', 'ネ', 'ア', 'p' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/249.wav",
		quizSentence: true
	},
	{
		target: "ネア　オㇰカイポ　カ　ネノ　ウェンタラプ　ヤㇰ　イェ　コㇽ、",
		alt: "nea okkaypo ka neno wentarap yak ye kor,",
		native: "The young man said that he saw the same dream.",
		words: [ 'ネア', 'オㇰカイポ', 'カ', 'ネノ', 'ウェンタラプ', 'ヤㇰ', 'イェ', 'コㇽ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/250.wav",
		quizSentence: true
	},
	{
		target: "オラ　トリ　ヒネ　オラウン",
		alt: "ora tori hine oraun",
		native: "After one night,",
		words: [ 'オラ', 'トリ', 'ヒネ', 'オラウン' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/251.wav",
		quizWords: [ 'トリ' ]
	},
	{
		target: "\"アㇽパ　アン　ア　オナ　エウン　ア　イェ　オラ　エㇰ　アン　ペ　ネ。\"",
		alt: "\"arpa =an a= ona eun a= ye ora ek =an pe ne.\"",
		native: "\"I will go talk to my father and come back.\",",
		words: [ 'アㇽパ', 'アン', 'ア', 'オナ', 'エウン', 'ア', 'イェ', 'オラ', 'エㇰ', 'アン', 'ペ', 'ネ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/252.wav",
		quizSentence: true
	},
	{
		target: "セコㇽ　ハウェアン　コㇽ　アㇽパ　ワ　イサㇺ　ルウェ　ネ",
		alt: "sekor hawean kor arpa wa isam ruwe ne",
		native: "he said, and off he went.",
		words: [ 'セコㇽ', 'ハウェアン', 'コㇽ', 'アㇽパ', 'ワ', 'イサㇺ', 'ルウェ', 'ネ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/253.wav",
		quizSentence: true
	},
	{
		target: "ソレクㇱ、　リㇰ　ウン　カケンチャ　ランケ　カケンチャ　エレウェウセ　カネ、",
		alt: "sorekus, rik un kakenca ranke kakenca erewewse kane,",
		native: "With so many clothes that the upper clothes hanger and lower clothes hanger sagged,",
		words: [ 'ソレクㇱ', 'リㇰ', 'ウン', 'カケンチャ', 'ランケ', 'カケンチャ', 'エレウェウセ', 'カネ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/254.wav",
		quizWords: [ 'ランケ', 'カケンチャ' ]
	},
	{
		target: "イネアプクスン　ア　オナハ　ネ　ヤㇰカ　ニㇱパ　ネ　p　ネ　アアン　ワ　シラン　ヤ　カ　ア　エラミㇱカリ。",
		alt: "ineapkusun a= onaha ne yakka nispa ne p ne aan wa siran ya ka a= eramiskari.",
		native: "I somehow realized that my father was a great elder with no equals.",
		words: [ 'イネアプクスン', 'ア', 'オナハ', 'ネ', 'ヤㇰカ', 'ニㇱパ', 'ネ', 'p', 'ネ', 'アアン', 'ワ', 'シラン', 'ヤ', 'カ', 'ア', 'エラミㇱカリ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/255.wav",
		quizWords: [ 'オナハ' ]
	},
	{
		target: "ア　ウヌ　ネ　ヤㇰカ　シノ　カッケマッ　ネ　ア　ルウェ　ネ　ノイネ　シラン　ペ　ネ　クス、",
		alt: "a= unu ne yakka sino katkemat ne a ruwe ne noyne siran pe ne kusu,",
		native: "My mother was also a fine lady,",
		words: [ 'ア', 'ウヌ', 'ネ', 'ヤㇰカ', 'シノ', 'カッケマッ', 'ネ', 'ア', 'ルウェ', 'ネ', 'ノイネ', 'シラン', 'ペ', 'ネ', 'クス' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/256.wav",
		quizWords: [ 'カッケマッ' ]
	},
	{
		target: "ネプ　カ　ア　カㇽ　カ　エラㇺペウテㇰ。",
		alt: "nep ka a= kar ka erampewtek.",
		native: "and even though I didn\'t know how to do anything,",
		words: [ 'ネプ', 'カ', 'ア', 'カㇽ', 'カ', 'エラㇺペウテㇰ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/257.wav",
		quizSentence: true
	},
	{
		target: "ネン　イ　エパカㇱヌ　アペコㇽ　ケメイキ　ネ　ヤ　ネプ　ネ　ヤ、",
		alt: "nen i= epakasnu apekor kemeyki ne ya nep ne ya,",
		native: "[I was able] to sew and do other things just like someone else once taught me.",
		words: [ 'ネン', 'イ', 'エパカㇱヌ', 'アペコㇽ', 'ケメイキ', 'ネ', 'ヤ', 'ネプ', 'ネ', 'ヤ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/258.wav",
		quizWords: [ 'アペコㇽ', 'ケメイキ' ]
	},
	{
		target: "イネアプクスン　ア　エアㇱカイ　ワ　イキ　アン　ヤ　カ　ア　エラミㇱカリ　コㇽ　アン　ペ　ア　ネ　p　ネ　クス、",
		alt: "ineapkusun a= easkay wa iki =an ya ka a= eramiskari kor an pe a= ne p ne kusu,",
		native: "I was able to do very well.",
		words: [ 'イネアプクスン', 'ア', 'エアㇱカイ', 'ワ', 'イキ', 'アン', 'ヤ', 'カ', 'ア', 'エラミㇱカリ', 'コㇽ', 'アン', 'ペ', 'ア', 'ネ', 'p', 'ネ', 'クス' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/259.wav",
		quizSentence: true
	},
	{
		target: "オラ　ネア　オㇰカイポ　アㇽパ　ヒネ　イサㇺ　ルウェ　ネ　アクス、",
		alt: "ora nea okkaypo arpa hine isam ruwe ne akusu,",
		native: "Once the young man left,",
		words: [ 'オラ', 'ネア', 'オㇰカイポ', 'アㇽパ', 'ヒネ', 'イサㇺ', 'ルウェ', 'ネ', 'アクス' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/260.wav",
		quizSentence: true
	},
	{
		target: "トゥッコ　レㇽコ　ネ　コㇽ　ポロ　ユピヒ　サハ　ネ　ヤㇰ　キ　p　トゥラ　ワ　エㇰ",
		alt: "tutko rerko ne kor poro yupihi saha ne yak ki p tura wa ek",
		native: "he came back several days later with people he introduced as his older brother and sister.",
		words: [ 'トゥッコ', 'レㇽコ', 'ネ', 'コㇽ', 'ポロ', 'ユピヒ', 'サハ', 'ネ', 'ヤㇰ', 'キ', 'p', 'トゥラ', 'ワ', 'エㇰ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/261.wav",
		quizWords: [ 'トゥッコ', 'レㇽコ' ]
	},
	{
		target: "オラノ　ソレクス　イ　ケウェホㇺス　パ　コㇽ　キ　ルウェ　ネ　ヒネ、",
		alt: "orano sorekusu i= kewehomsu pa kor ki ruwe ne hine,",
		native: "They held a ceremony to pray for my safe being and rid me of any demons.",
		words: [ 'オラノ', 'ソレクス', 'イ', 'ケウェホㇺス', 'パ', 'コㇽ', 'キ', 'ルウェ', 'ネ', 'ヒネ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/262.wav",
		quizWords: [ 'ケウェホㇺス' ]
	},
	{
		target: "オラ　モヨノ　アイヌ　トゥラ　ワ　アㇽキ　パ　ヒネ　コタン　カㇽ　パ　ヒネ、",
		alt: "ora moyono aynu tura wa arki pa hine kotan kar pa hine,",
		native: "They brought a few people, and we made village and",
		words: [ 'オラ', 'モヨノ', 'アイヌ', 'トゥラ', 'ワ', 'アㇽキ', 'パ', 'ヒネ', 'コタン', 'カㇽ', 'パ', 'ヒネ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/263.wav",
		quizWords: [ 'アㇽキ', 'モヨノ' ]
	},
	{
		target: "オロ　タ　オカ　アン　ルウェ　ネ。",
		alt: "oro ta oka =an ruwe ne.",
		native: "lived there.",
		words: [ 'オロ', 'タ', 'オカ', 'アン', 'ルウェ', 'ネ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/264.wav",
		quizSentence: true
	},
	{
		target: "ネプ　ア　エ　ルスイ　ネプ　ア　コㇽ_　ルスイ　ソモ　キ　ノ　オカ　アン。",
		alt: "nep a= e rusuy nep a= kor_ rusuy somo ki no oka =an.",
		native: "After that, we led a life where we did not wish for food or things.",
		words: [ 'ネプ', 'ア', 'エ', 'ルスイ', 'ネプ', 'ア', 'コㇽ', 'ルスイ', 'ソモ', 'キ', 'ノ', 'オカ', 'アン' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/265.wav",
		quizSentence: true
	},
	{
		target: "オラノ　エアシㇽ　キ。",
		alt: "orano easir ki.",
		native: "At last we led such a life.",
		words: [ 'オラノ', 'エアシㇽ', 'キ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/266.wav",
		quizWords: [ 'エアシㇽ' ]
	},
	{
		target: "オラ　ネア　セタ　アナㇰネ　チャナンノ　ポカ　ア　ホプニレ　クナㇰ　イェ　p　ネ　クス、",
		alt: "ora nea seta anakne cananno poka a= hopunire kunak ye p ne kusu,",
		native: "that dog said he wanted us to send him in any manner.",
		words: [ 'オラ', 'ネア', 'セタ', 'アナㇰネ', 'チャナンノ', 'ポカ', 'ア', 'ホプニレ', 'クナㇰ', 'イェ', 'p', 'ネ', 'クス' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/267.wav",
		quizWords: [ 'ホプニレ' ]
	},
	{
		target: "セタ　オヤカタ　エウン　アㇽパレ　クニ　イェレ　ア　シンネ　ノイネ、",
		alt: "seta oyakata eun arpare kuni yere a sinne noyne,",
		native: "My husband instructed the dog to go to the dog master.",
		words: [ 'セタ', 'オヤカタ', 'エウン', 'アㇽパレ', 'クニ', 'イェレ', 'ア', 'シンネ', 'ノイネ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/268.wav",
		quizWords: [ 'アㇽパレ', 'イェレ' ]
	},
	{
		target: "イナウケ　ア　イナウケ　ア　ヒネ　イナウ　コㇽ　エネ　ハウ　トゥラノ　ホプニレ　ヒネ　オラノ　オカケ　タ　オカ　アン。",
		alt: "inawke a inawke a hine inaw kor ene haw turano hopunire hine orano okake ta oka =an.",
		native: "We cut many inaw-willow sticks and sent him off with prayers.",
		words: [ 'イナウケ', 'ア', 'イナウケ', 'ア', 'ヒネ', 'イナウ', 'コㇽ', 'エネ', 'ハウ', 'トゥラノ', 'ホプニレ', 'ヒネ', 'オラノ', 'オカケ', 'タ', 'オカ', 'アン' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/269.wav",
		quizWords: [ 'ハウ', 'イナウ', 'イナウケ' ]
	},
	{
		target: "ネプ　ア　エ　ルスイ　ネプ　ア　コㇽ_　ルスイ　ソモ　キ　ノ　オカ　アン",
		alt: "nep a= e rusuy nep a= kor_ rusuy somo ki no oka =an",
		native: "After that, we continued living without wishing for food.",
		words: [ 'ネプ', 'ア', 'エ', 'ルスイ', 'ネプ', 'ア', 'コㇽ', 'ルスイ', 'ソモ', 'キ', 'ノ', 'オカ', 'アン' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/270.wav",
		quizSentence: true
	},
	{
		target: "ラポㇰケ　アㇽ　スイ　ネ　ポカ　ネ　ア　シウトウタリ　オロ　タ　アㇽパ　アン　ワ　インカㇽ　アン　ルスイ　クス、",
		alt: "rapokke ar suy ne poka ne a= siwtoutari oro ta arpa =an wa inkar =an rusuy kusu,",
		native: "Just once though, I wanted to go to my parents-in law\'s place.",
		words: [ 'ラポㇰケ', 'アㇽ', 'スイ', 'ネ', 'ポカ', 'ネ', 'ア', 'シウトウタリ', 'オロ', 'タ', 'アㇽパ', 'アン', 'ワ', 'インカㇽ', 'アン', 'ルスイ', 'クス' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/271.wav",
		quizWords: [ 'シウトウタリ', 'アㇽ' ]
	},
	{
		target: "ネ　ア　ヘコテ　ニㇱパ　ア　シレン　ヒネ、",
		alt: "ne a= hekote nispa a= siren hine,",
		native: "I went together with my husband.",
		words: [ 'ネ', 'ア', 'ヘコテ', 'ニㇱパ', 'ア', 'シレン', 'ヒネ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/272.wav",
		quizWords: [ 'シレン', 'ヘコテ' ]
	},
	{
		target: "ポサㇰ　アン　ヒネ、",
		alt: "posak =an hine,",
		native: "Since we did not have children,",
		words: [ 'ポサㇰ', 'アン', 'ヒネ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/273.wav",
		quizWords: [ 'ポサㇰ' ]
	},
	{
		target: "アㇽパ　アン　ルスイ　ペ　ネ　クス　ア　トゥラ　ヒネ　アㇽパ　アン　ヒネ、",
		alt: "arpa =an rusuy pe ne kusu a= tura hine arpa =an hine,",
		native: "I wanted to go together with my husband, so I followed him.",
		words: [ 'アㇽパ', 'アン', 'ルスイ', 'ペ', 'ネ', 'クス', 'ア', 'トゥラ', 'ヒネ', 'アㇽパ', 'アン', 'ヒネ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/274.wav",
		quizSentence: true
	},
	{
		target: "オラノ　ユペッ　エㇺコ　コㇽ_　ニㇱパ　ソレクㇱ　イ　タㇺカスレ　イ　タㇺテㇱパレ　コㇽ",
		alt: "orano Yupet emko kor_ nispa sorekus i= tamkasure i= tamtespare kor",
		native: "The Yupet Upstream elder pointed a sword at us, and swinging the sword,",
		words: [ 'オラノ', 'ユペッ', 'エㇺコ', 'コㇽ', 'ニㇱパ', 'ソレクㇱ', 'イ', 'タㇺカスレ', 'イ', 'タㇺテㇱパレ', 'コㇽ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/275.wav",
		quizSentence: true
	},
	{
		target: "イ　ケウェホㇺス　ルウェ　ネ。",
		alt: "i= kewehomsu ruwe ne.",
		native: "carried out a demon exorcising ceremony.",
		words: [ 'イ', 'ケウェホㇺス', 'ルウェ', 'ネ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/276.wav",
		quizSentence: true
	},
	{
		target: "\"ア　コㇽ　ニㇱパ　コタヌフ　パ　オヤン　ヤㇰ　ア　イェ　ヤクン、",
		alt: "\"a= kor nispa kotanuhu pa oyan yak a= ye yakun,",
		native: "\"It was said that our elder\'s village (at Iskar Upstream) was plagued by disease,",
		words: [ 'ア', 'コㇽ', 'ニㇱパ', 'コタヌフ', 'パ', 'オヤン', 'ヤㇰ', 'ア', 'イェ', 'ヤクン' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/277.wav",
		quizWords: [ 'オヤン', 'コタヌフ' ]
	},
	{
		target: "ネプ　カ　イサㇺ　ルウェ　ネ　クナㇰ　ア　ラム　ワ　クス、",
		alt: "nep ka isam ruwe ne kunak a= ramu wa kusu,",
		native: "so I thought that no one was alive.",
		words: [ 'ネプ', 'カ', 'イサㇺ', 'ルウェ', 'ネ', 'クナㇰ', 'ア', 'ラム', 'ワ', 'クス' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/278.wav",
		quizSentence: true
	},
	{
		target: "ア　コㇽ　カッケマッ　カムイ　レス　ワ　アン　アアン　ワ、",
		alt: "a= kor katkemat kamuy resu wa an aan wa,",
		native: "Kamui-gods must have raised our daughter-in law.",
		words: [ 'ア', 'コㇽ', 'カッケマッ', 'カムイ', 'レス', 'ワ', 'アン', 'アアン', 'ワ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/279.wav",
		quizSentence: true
	},
	{
		target: "カムイ　レンカイネ　ア　ポホ　アㇽパ　ワ　ネ　ルウェ　ネ　ヤクン、",
		alt: "kamuy renkayne a= poho arpa wa ne ruwe ne yakun,",
		native: "Thanks to kamui-gods our son went [there], so",
		words: [ 'カムイ', 'レンカイネ', 'ア', 'ポホ', 'アㇽパ', 'ワ', 'ネ', 'ルウェ', 'ネ', 'ヤクン' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/280.wav",
		quizWords: [ 'レンカイネ' ]
	},
	{
		target: "ア　ウタリヒ　ニマリ　イㇱカㇽ　エㇺコ　ア　パイェレ　ルスイ　クス",
		alt: "a= utarihi nimari Iskar emko a= payere rusuy kusu",
		native: "I thought I would send half of our village to Iskar Upstream.",
		words: [ 'ア', 'ウタリヒ', 'ニマリ', 'イㇱカㇽ', 'エㇺコ', 'ア', 'パイェレ', 'ルスイ', 'クス' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/281.wav",
		quizWords: [ 'ウタリヒ' ]
	},
	{
		target: "パイェ　ワ　ウエコタンネ　パ　ルウェ　ネ　クス、",
		alt: "paye wa uekotanne pa ruwe ne kusu,",
		native: "Since they went and are now part of our village,",
		words: [ 'パイェ', 'ワ', 'ウエコタンネ', 'パ', 'ルウェ', 'ネ', 'クス' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/282.wav",
		quizSentence: true
	},
	{
		target: "アプンノ　オカ　アン　ヤㇰ　ピㇽカ。\"",
		alt: "apunno oka =an yak pirka.\"",
		native: "please live together in peace.\"",
		words: [ 'アプンノ', 'オカ', 'アン', 'ヤㇰ', 'ピㇽカ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/283.wav",
		quizWords: [ 'アプンノ' ]
	},
	{
		target: "セコㇽ　ユペッ　エㇺコ　コㇽ_　ニㇱパ　ハウェアン　ヒネ",
		alt: "sekor Yupet emko kor_ nispa hawean hine",
		native: "the Yupet Upstream elder told us.",
		words: [ 'セコㇽ', 'ユペッ', 'エㇺコ', 'コㇽ', 'ニㇱパ', 'ハウェアン', 'ヒネ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/284.wav",
		quizSentence: true
	},
	{
		target: "オラノ　ホシプパ　アン　オラノ　オカ　アン　オラノ　オカ　アン。",
		alt: "orano hosippa =an orano oka =an orano oka =an.",
		native: "We went back to the village to continue our lives.",
		words: [ 'オラノ', 'ホシプパ', 'アン', 'オラノ', 'オカ', 'アン', 'オラノ', 'オカ', 'アン' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/285.wav",
		quizSentence: true
	},
	{
		target: "ソレクス　コタン　コㇽ　。。。",
		alt: "sorekusu kotan kor ...",
		native: "Even when",
		words: [ 'ソレクス', 'コタン', 'コㇽ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/286.wav",
		quizSentence: true
	},
	{
		target: "イ　エコタンネ　ウタㇽ　ヤイィペレ　エアイカプ　パ　p、",
		alt: "i= ekotanne utar yayipere eaykap pa p,",
		native: "the people who came to live at our village could not support themselves,",
		words: [ 'イ', 'エコタンネ', 'ウタㇽ', 'ヤイィペレ', 'エアイカプ', 'パ', 'p' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/287.wav",
		quizWords: [ 'ヤイィペレ', 'エコタンネ' ]
	},
	{
		target: "ア　イペレ　パ　ア　イ　コㇽパレ　パ。",
		alt: "a= ipere pa a= i= korpare pa.",
		native: "we fed them and gave them things.",
		words: [ 'ア', 'イペレ', 'パ', 'ア', 'イ', 'コㇽパレ', 'パ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/288.wav",
		quizSentence: true
	},
	{
		target: "チョイペプ　ネ　ヤ　ア　オナハ　ヌウェ　コアン。",
		alt: "coypep ne ya a= onaha nuwe koan.",
		native: "Father had many valuable dinner dishes,",
		words: [ 'チョイペプ', 'ネ', 'ヤ', 'ア', 'オナハ', 'ヌウェ', 'コアン' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/289.wav",
		quizWords: [ 'チョイペプ' ]
	},
	{
		target: "チョイペプ　ウタㇽ　ア　ウコウサライェ　パ　ア　ウタリ　ウタㇽ　キ　ワ、　ウパㇰノ　ウネノ　チョイペプ　カ　ア　ウコウサライェ　パ。",
		alt: "coypep utar a= ukowsaraye pa a= utari utar ki wa, upakno uneno coypep ka a= ukowsaraye pa.",
		native: "and we equally divided those among the villagers.",
		words: [ 'チョイペプ', 'ウタㇽ', 'ア', 'ウコウサライェ', 'パ', 'ア', 'ウタリ', 'ウタㇽ', 'キ', 'ワ', 'ウパㇰノ', 'ウネノ', 'チョイペプ', 'カ', 'ア', 'ウコウサライェ', 'パ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/290.wav",
		quizWords: [ 'ウコウサライェ', 'ウパㇰノ', 'ウタリ' ]
	},
	{
		target: "ネプ　ア　エ　ルスイ　ネプ　ア　コㇽ_　ルスイ　ソモ　キ　ノ、",
		alt: "nep a= e rusuy nep a= kor_ rusuy somo ki no,",
		native: "We lived without wanting food or things at all.",
		words: [ 'ネプ', 'ア', 'エ', 'ルスイ', 'ネプ', 'ア', 'コㇽ', 'ルスイ', 'ソモ', 'キ', 'ノ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/291.wav",
		quizSentence: true
	},
	{
		target: "ア　コタヌ　ウン　カッケマッ　ウタㇽ　イ　オ　カッケマッ　ウシ　パ　コㇽ　キ　パ。",
		alt: "a= kotanu un katkemat utar i= o katkemat usi pa kor ki pa.",
		native: "The women of the village learned my ladylike manners.",
		words: [ 'ア', 'コタヌ', 'ウン', 'カッケマッ', 'ウタㇽ', 'イ', 'オ', 'カッケマッ', 'ウシ', 'パ', 'コㇽ', 'キ', 'パ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/292.wav",
		quizWords: [ 'コタヌ' ]
	},
	{
		target: "サケ　ア　コㇽ　コㇽ、　ユペッ　エㇺコ　ウン　ア　ヘコテ　ニㇱパ　イアㇱケウㇰ　ワ、　イクタㇱパ　ウタㇽ　アㇽキ　クス、",
		alt: "sake a= kor kor, Yupet emko un a= hekote nispa iaskeuk wa, ikutaspa utar arki kusu,",
		native: "We brewed wine, and my husband invited people from Yupet Upstream, and they came to have parties.",
		words: [ 'サケ', 'ア', 'コㇽ', 'コㇽ', 'ユペッ', 'エㇺコ', 'ウン', 'ア', 'ヘコテ', 'ニㇱパ', 'イアㇱケウㇰ', 'ワ', 'イクタㇱパ', 'ウタㇽ', 'アㇽキ', 'クス' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/293.wav",
		quizWords: [ 'サケ', 'イアㇱケウㇰ' ]
	},
	{
		target: "シネ　アパ　ネ、　シネ　ウタㇽ_　ネ　ウカㇽ　アン　コㇽ　オカ　アン　アイネ",
		alt: "sine apa ne, sine utar_ ne ukar =an kor oka =an ayne",
		native: "We lived together as relatives and as a tribe.",
		words: [ 'シネ', 'アパ', 'ネ', 'シネ', 'ウタㇽ', 'ネ', 'ウカㇽ', 'アン', 'コㇽ', 'オカ', 'アン', 'アイネ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/294.wav",
		quizSentence: true
	},
	{
		target: "ソレクㇱ　ポシレシッテ　アン。",
		alt: "sorekus posiresitte =an.",
		native: "Later on we had many children,",
		words: [ 'ソレクㇱ', 'ポシレシッテ', 'アン' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/295.wav",
		quizSentence: true
	},
	{
		target: "ア　ウタリ　ヘネ　ヤㇰカ　ポシレシッテ。",
		alt: "a= utari hene yakka posiresitte.",
		native: "and the villagers also had many children.",
		words: [ 'ア', 'ウタリ', 'ヘネ', 'ヤㇰカ', 'ポシレシッテ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/296.wav",
		quizSentence: true
	},
	{
		target: "オラ　オンネ　ウタㇽ_　ライ　。。。",
		alt: "ora onne utar_ ray ...",
		native: "When the village elders",
		words: [ 'オラ', 'オンネ', 'ウタㇽ', 'ライ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/297.wav",
		quizWords: [ 'ライ' ]
	},
	{
		target: "ライ　コㇽ　エシピンパ　パ　クニ　p　ア　カㇽ　ワ　ア　セ　ヒ　アン　ネ　ヤ　ソモ　アプカㇱ　アン　ヤㇰカ　キ　アイネ、",
		alt: "ray kor esipinpa pa kuni p a= kar wa a= se hi an ne ya somo apkas =an yakka ki ayne,",
		native: "died, we made burial outfits. While I did not go myself, those who delivered the outfits",
		words: [ 'ライ', 'コㇽ', 'エシピンパ', 'パ', 'クニ', 'p', 'ア', 'カㇽ', 'ワ', 'ア', 'セ', 'ヒ', 'アン', 'ネ', 'ヤ', 'ソモ', 'アプカㇱ', 'アン', 'ヤㇰカ', 'キ', 'アイネ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/298.wav",
		quizSentence: true
	},
	{
		target: "タネ　ア　シウトウタリ　カ　オンネ　ワ　イサㇺ　パ　ヤㇰ　ア　イェ　ヒケ　カ、",
		alt: "tane a= siwtoutari ka onne wa isam pa yak a= ye hike ka,",
		native: "told me that my parents-in-law had also died of old age.",
		words: [ 'タネ', 'ア', 'シウトウタリ', 'カ', 'オンネ', 'ワ', 'イサㇺ', 'パ', 'ヤㇰ', 'ア', 'イェ', 'ヒケ', 'カ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/299.wav",
		quizSentence: true
	},
	{
		target: "アシヌマ　アナㇰ　ポコインネ　アン。",
		alt: "asinuma anak pokoinne =an.",
		native: "However, I was blessed with children.",
		words: [ 'アシヌマ', 'アナㇰ', 'ポコインネ', 'アン' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/300.wav",
		quizWords: [ 'ポコインネ', 'アシヌマ' ]
	},
	{
		target: "アプカㇱ　カ　ア　エアイカプ　ヤㇰカ、",
		alt: "apkas ka a= eaykap yakka,",
		native: "I could not go (to the Yupet Upstream village),",
		words: [ 'アプカㇱ', 'カ', 'ア', 'エアイカプ', 'ヤㇰカ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/301.wav",
		quizSentence: true
	},
	{
		target: "ア　ヘコテ　ニㇱパ　アナㇰネ　シネ　チゥプ　タ　アㇽスイ　カ　アㇽパ　ランケ　コㇽ　オカ　アン　アイネ、",
		alt: "a= hekote nispa anakne sine cup ta arsuy ka arpa ranke kor oka =an ayne,",
		native: "but each time my husband went [there], and stayed for a month.",
		words: [ 'ア', 'ヘコテ', 'ニㇱパ', 'アナㇰネ', 'シネ', 'チゥプ', 'タ', 'アㇽスイ', 'カ', 'アㇽパ', 'ランケ', 'コㇽ', 'オカ', 'アン', 'アイネ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/302.wav",
		quizWords: [ 'アㇽスイ' ]
	},
	{
		target: "タネ　ア　シウトウタリ　カ　イサㇺ　ヤㇰ　ア　イェ　オカケ　タ、",
		alt: "tane a= siwtoutari ka isam yak a= ye okake ta,",
		native: "After it was said that my parents-in-law had passed on,",
		words: [ 'タネ', 'ア', 'シウトウタリ', 'カ', 'イサㇺ', 'ヤㇰ', 'ア', 'イェ', 'オカケ', 'タ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/303.wav",
		quizSentence: true
	},
	{
		target: "ア　オナウタリ　ア　ヌラプパ　ワ",
		alt: "a= onautari a= nurappa wa",
		native: "I held a memorial service for our parents.",
		words: [ 'ア', 'オナウタリ', 'ア', 'ヌラプパ', 'ワ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/304.wav",
		quizWords: [ 'オナウタリ', 'ヌラプパ' ]
	},
	{
		target: "シンリッ　オㇽ_　タ　ミプポ　カ　ア　オナウタリ　イコイトゥパ　ソモ　キ　クニ　ネ　イキ　コㇽ　オカ　アン　アイネ、",
		alt: "sinrit or_ ta mippo ka a= onautari ikoytupa somo ki kuni ne iki kor oka =an ayne,",
		native: "Their grandchildren did so that our parents would not be leading a difficult life in the afterworld, and so we lived.",
		words: [ 'シンリッ', 'オㇽ', 'タ', 'ミプポ', 'カ', 'ア', 'オナウタリ', 'イコイトゥパ', 'ソモ', 'キ', 'クニ', 'ネ', 'イキ', 'コㇽ', 'オカ', 'アン', 'アイネ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/305.wav",
		quizWords: [ 'イコイトゥパ', 'ミプポ' ]
	},
	{
		target: "タネ　オンネ　アン　パ　シリ　エネ　アン　ヒ　クス、",
		alt: "tane onne =an pa siri ene an hi kusu,",
		native: "\"We have also aged so",
		words: [ 'タネ', 'オンネ', 'アン', 'パ', 'シリ', 'エネ', 'アン', 'ヒ', 'クス' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/306.wav",
		quizSentence: true
	},
	{
		target: "ア　エイソイタㇰ　セコㇽ　シノ　カッケマッ　ハウェアン　セコㇽ。",
		alt: "a= eysoytak sekor sino katkemat hawean sekor.",
		native: "we are passing our stories on\", said one fine lady.",
		words: [ 'ア', 'エイソイタㇰ', 'セコㇽ', 'シノ', 'カッケマッ', 'ハウェアン', 'セコㇽ' ],
		audio: "audio/uwepeker.the_girl_who_gave_the_bad_red_dog_poison/307.wav",
		quizWords: [ 'エイソイタㇰ' ]
	}
];