
const wordStorageKey = 'wordData';
const sentenceStorageKey = 'sentenceData';

let currentSlideNum = 0;
let wordTracker = {};
let wordAttemptTracker = {};
let sentenceTracker = {};
let sentenceAttemptTracker = {};

let quizQueue = [];
let quizIndex = 0;

let currentIsRunning = false;

const gMaxDefLng = 120;

const sentQuizOverlay = document.getElementById('sentQuizOverlay');
const sentQuizPopup = document.getElementById('sentQuizPopup');
const sentQuizPrompt = document.getElementById('sentQuizPrompt');
const progressDiv = document.getElementById('progress');
const progressAltDiv = document.getElementById('progressAlt');
const sentOptionsDiv = document.getElementById('sentOptions');
const sentQuitQuizBtn = document.getElementById('sentQuitQuiz');
const audioElement = document.getElementById('slide-audio');

let currentWordIndex;
let currentSentWrong;

let currentSentTargetWord = "";
let currentWordTargetWord = "";
let currentWordOptLst = { };

let gWrdOptsDiv;
let gShowWrdOtpsBtn;

function initWebApp()
{
	wordTracker = loadData(wordStorageKey);
	sentenceTracker = loadData(sentenceStorageKey);

//	slideData.forEach((slide, idx) =>
//	{
//		slide.words.forEach(w => wordTracker[gLang][w] = wordTracker[gLang][w] ? wordTracker[gLang][w] : false);
//		sentenceTracker[gLang][gBook][gChap][idx] = sentenceTracker[gLang][gBook][gChap][idx] ? sentenceTracker[gLang][gBook][gChap][idx] : false;
//	});

	const quiz = getQueryParam('quiz');
	if (quiz)
	{
		if (quiz == 1)
		{
			document.getElementById('toggleWordQuiz').checked = true;
			document.getElementById('toggleSentenceQuiz').checked = true;
		}
		else
		{
			document.getElementById('toggleWordQuiz').checked = false;
			document.getElementById('toggleSentenceQuiz').checked = false;
		}
	}
	else
	{
		document.getElementById('toggleWordQuiz').checked = controlParams.defaultWordQuizOn;
		document.getElementById('toggleSentenceQuiz').checked = controlParams.defaultSentQuizOn;
	}

	const spk = getQueryParam('speak');
	if (spk)
	{
		if (spk == 1)
		{
			document.getElementById('toggleSpeakOnRender').checked = true;
		}
		else
		{
			document.getElementById('toggleSpeakOnRender').checked = false;
		}
	}
	else
	{
		document.getElementById('toggleSpeakOnRender').checked = controlParams.defaultSpeakOn;
	}

	document.getElementById('toggleAlt').checked = controlParams.defaultAltOn;
	document.getElementById('toggleTranslation').checked = controlParams.defaultNativeOn;
	document.getElementById('toggleSkipNoQuiz').checked = controlParams.defaultSkipNoQuizOn;

	const select = document.getElementById('slideSelect');
	slideData.forEach((_, i) =>
	{
		const opt = document.createElement('option');
		opt.value = i;
		opt.text = `Slide ${i+1}`;
		select.add(opt);
	});
	select.value = currentSlideNum;
	presentSlide();

	document.getElementById('wrdQuitQuizBtn').addEventListener('click', () =>
	{
		closeWordQuiz();
	});

	document.getElementById('giveUpBtn').addEventListener('click', () =>
	{
		if (currentSentTargetWord.length > 0)
		{
			handleSentAnswer("", currentSentTargetWord);
		}
		else if (currentWordTargetWord.length > 0)
		{
			handleWordAnswer(currentWordTargetWord, "");
		}
	});

	document.getElementById('toggleTranslation').addEventListener('change', () =>
	{
		renderSlide(slideData[currentSlideNum]);
	});

	document.getElementById('toggleAlt').addEventListener('change', () =>
	{
		renderSlide(slideData[currentSlideNum]);
	});

	document.getElementById('speakTextBtn').addEventListener('click', () =>
	{
		doSpeak();
	});

	document.getElementById('runSlidesBtn').addEventListener('click', () =>
	{
		if (currentIsRunning)
		{
			document.getElementById('runSlidesBtn').innerHTML = 'Run';
			currentIsRunning = false;
		}
		else
		{
			document.getElementById('runSlidesBtn').innerHTML = 'Stop';
			currentIsRunning = true;
			presentSlide();
		}
	});
}

function presentSlide()
{
	updateNavigation();

	var noQuiz = true;

	if (document.getElementById('toggleWordQuiz').checked)
	{
		const pending = getPendingWords();
		if (pending.length)
		{
			noQuiz = false;
			startWordQuiz();
		}
	}

	if ((noQuiz) && (document.getElementById('toggleSentenceQuiz').checked))
	{
		if ((currentSlideNum in sentenceTracker[gLang][gBook][gChap]) &&
			(! (sentenceTracker[gLang][gBook][gChap][currentSlideNum])))
		{
			noQuiz = false;
			startSentQuiz();
		}
	}

	if (noQuiz)
	{
		if (document.getElementById('toggleSkipNoQuiz').checked)
		{
			if (advanceSlide())
			{
				presentSlide();
			}
			else
			{
				document.getElementById('runSlidesBtn').innerHTML = 'Run';
				currentIsRunning = false;
			}
		}
		else
		{
			renderSlide(slideData[currentSlideNum]);
		}
	}
}

function updateNavigation()
{
	document.getElementById('slideSelect').value = currentSlideNum;
}

function renderSlide(slide)
{
	const panel = document.getElementById('textPanel');
	panel.innerHTML = '';
	const sentenceEl = document.createElement('h2');
	let charIndex = 0;
	slide.words.forEach((word) =>
	{
		const idx = slide.target.indexOf(word, charIndex);
		if (idx > charIndex)
		{
			const between = slide.target.slice(charIndex, idx);
			sentenceEl.appendChild(document.createTextNode(between));
		}
		const span = document.createElement('span');
		span.className = 'word';
		span.textContent = word;

		const tooltip = document.createElement('span');
		tooltip.className = 'custom-tooltip';

		if (word in dictionary)
		{
			const info = dictionary[word];

//					if ((document.getElementById('toggleAlt').checked) &&
//						(info.alt))
//					{
				tooltip.textContent = info.alt + " - " + info.native;
//					}
//					else
//					{
//						tooltip.textContent = info.native;
//					}
		}
		else
		{
			tooltip.textContent = word;
		}

		span.appendChild(tooltip);

		sentenceEl.appendChild(span);
		charIndex = idx + word.length;
	});
	if (charIndex < slide.target.length)
	{
		const end = slide.target.slice(charIndex);
		sentenceEl.appendChild(document.createTextNode(end));
	}
	panel.appendChild(sentenceEl);

	// *** minimal addition: colorize tones if enabled and pinyin available ***

	if (document.getElementById('toggleColorTone').checked)
	{
		showColorizedTones = true;
	}
	else
	{
		showColorizedTones = false;
	}

	if (typeof showColorizedTones !== 'undefined' && showColorizedTones && slide.alt)
	{
		colorizeTones(sentenceEl, slide.alt);
	}

	if ((document.getElementById('toggleAlt').checked) &&
		(slide.alt))
	{
		const alt = document.createElement('p');
		alt.textContent = slide.alt;
		panel.appendChild(alt);
	}

	if (document.getElementById('toggleTranslation').checked)
	{
		const trans = document.createElement('p');
		trans.textContent = slide.native;
		panel.appendChild(trans);
	}

	if (document.getElementById('toggleSpeakOnRender').checked)
	{
		doSpeak();
	}

	if (currentIsRunning)
	{
		if (advanceSlide())
		{
			setTimeout(presentSlide, 2000);
		}
		else
		{
			document.getElementById('runSlidesBtn').innerHTML = 'Run';
			currentIsRunning = false;
		}
	}
}

function splitByLineLength(str, maxLength)
{
	let result = '';
	for (let i = 0; i < str.length; i += maxLength)
	{
		result += str.slice(i, i + maxLength) + '<br>';
	}
	return result.trim(); // remove trailing newline
}

/**
 * colorizeTones(sentenceEl, pinyin)
 *
 * sentenceEl: the container element (the <h2> element created in renderSlide)
 * pinyin: the slide.alt string containing pinyin with diacritics
 *
 * This looks for the word spans (class 'word') that were created by renderSlide,
 * finds their text nodes (the Chinese characters), and replaces each character
 * with a small span that has a tone class (tone-1..tone-4) according to the
 * diacritic on the next pinyin syllable.
 */
function colorizeTones(sentenceEl, pinyin)
{
	if (!sentenceEl || !pinyin) return;

	const tonQltLst = splitPinyinToTonalQuality(pinyin);

	// regex to extract pinyin syllables — ensures one syllable per match by requiring a diacritic vowel per syllable
	// includes vowels with tone diacritics and ü/ǖ variants.
	const syllableRegex = /[A-Za-z]*[āáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜü][A-Za-z]*/g;
	const syllables = (pinyin.match(syllableRegex) || []).map(s => s.trim());

	// helper: determine tone number from a pinyin syllable containing a diacritic vowel
	function toneFromSyllable(syl)
	{
		// characters for each tone (diacritics)
		const t1 = 'āēīōūǖ';
		const t2 = 'áéíóúǘ';
		const t3 = 'ǎěǐǒǔǚ';
		const t4 = 'àèìòùǜ';
		for (const ch of syl)
		{
			if (t1.indexOf(ch) >= 0) return 1;
			if (t2.indexOf(ch) >= 0) return 2;
			if (t3.indexOf(ch) >= 0) return 3;
			if (t4.indexOf(ch) >= 0) return 4;
		}
		// if no diacritic present, treat as neutral (0)
		return 0;
	}

	// utility to detect punctuation/whitespace (unicode aware)
	// Uses Unicode property escape for punctuation; fall back to basic ASCII checks if unsupported.
	let isPunctOrSpace;
	try
	{
		// If the runtime supports \p{P}, use it.
		const re = /\p{P}|\s/u;
		isPunctOrSpace = ch => re.test(ch);
	} catch (e)
	{
		// Fallback basic set (covers common Chinese punctuation too)
		const fallback = /[\s\.,;:!?，。；：？！…—\-()（）〈〉「」『』“”"']/;
		isPunctOrSpace = ch => fallback.test(ch);
	}

	// Iterate through each word span and replace only the text nodes (the Chinese characters)
	let syllIdx = 0;
	const wordSpans = sentenceEl.querySelectorAll('span.word');

	wordSpans.forEach(wordSpan =>
	{
		// Find text nodes that contain the word characters (exclude the tooltip span)
		// We'll gather child text nodes (nodeType === 3)
		const childNodes = Array.from(wordSpan.childNodes);
		childNodes.forEach(node =>
		{
			if (node.nodeType !== Node.TEXT_NODE) return; // leave non-text (tooltip span etc.) intact

			const text = node.nodeValue;
			if (!text) return;

			const frag = document.createDocumentFragment();

			for (let i = 0; i < text.length; i++)
			{
				const ch = text[i];

				if (isPunctOrSpace(ch))
				{
					// keep punctuation/space as plain text or wrapped neutrally
					const txt = document.createTextNode(ch);
					frag.appendChild(txt);
				} else
				{
					// get tone for this character from the current syllable (if available)
//							const syl = syllables[syllIdx];
//							const tone = syl ? toneFromSyllable(syl) : 0;
					const tone = tonQltLst[syllIdx++];
					// Only advance the syllable index when the character consumes one syllable.
					// (We assume 1 character == 1 syllable mapping in most typical Mandarin text.)
					// If there are more characters than syllables, remaining chars stay neutral.
//							if (syl) syllIdx++;

					const span = document.createElement('span');
					span.textContent = ch;
					span.classList.add('char-tone');

					if (tone === 1) span.classList.add('tone-1');
					else if (tone === 2) span.classList.add('tone-2');
					else if (tone === 3) span.classList.add('tone-3');
					else if (tone === 4) span.classList.add('tone-4');
					else span.classList.add('neutral-tone');

					frag.appendChild(span);
				}
			} // end for each char

			// Replace original text node with the new fragment
			wordSpan.replaceChild(frag, node);
		}); // end text node loop
	}); // end wordSpans loop
}

function splitPinyinToTonalQuality(input) 
{
	const retTonalQltLst = [];

	// tone regexes mapping to quality number
	const gPinyinToneRgx = 
	{
		"[āēīōūǖ]": 1,
		"[áéíóúǘ]": 2,
		"[ǎěǐǒǔǚ]": 3,
		"[àèìòùǜ]": 4
	};

	// split into words (sequences containing vowels or consonants)
	const words = input
		.toLowerCase()
		.split(/[^a-zāáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ]/i)
		.filter(Boolean);

	for (let word of words) 
	{
		// insert '@' syllable dividers (repeat twice like in Perl)
		for (let ii = 0; ii < 2; ii++) 
		{
			// vowel+cons + (sh/ch/zh + vowel)
			word = word.replace(
				/([aeiouāáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ][qwrtypsdfghjklzxcvbnm]?)([szc]h[aeiouāáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ])/gi,
				"$1@$2"
			);
			// vowel+ng + cons
			word = word.replace(
				/([aeiouāáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ]ng)([qwrtypsdfghjklzxcvbnm])/gi,
				"$1@$2"
			);
			// vowel + cons+vowel
			word = word.replace(
				/([aeiouāáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ])([qwrtypsdfghjklzxcvbnm][aeiouāáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ])/gi,
				"$1@$2"
			);
			// vowel+cons + cons+vowel
			word = word.replace(
				/([aeiouāáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ][qwrtypsdfghjklzxcvbnm])([qwrtypsdfghjklzxcvbnm][aeiouāáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ])/gi,
				"$1@$2"
			);
		}

		const syllables = word.split("@");

		for (let syl of syllables) 
		{
			if (!/[aeiouāáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ]/i.test(syl)) 
			{
				continue; // no vowel at all → skip
			}

			let pyTonQlt = 5; // default no tone
			for (let rgx in gPinyinToneRgx) 
			{
				const regex = new RegExp(rgx, "i");
				if (regex.test(syl)) 
				{
					pyTonQlt = gPinyinToneRgx[rgx];
					break;
				}
			}

			retTonalQltLst.push(pyTonQlt);
		}
	}

	return retTonalQltLst;
}


function doSpeak()
{
	if (slideData[currentSlideNum].audio)
	{
		audioElement.src = slideData[currentSlideNum].audio;
		audioElement.play();
	}
	else
	{
		const text = slideData[currentSlideNum].target;
		const utterance = new SpeechSynthesisUtterance(text);
		utterance.lang = controlParams.targetLanguage;

		const rgx = /^[0-9]+$/;

//				const idx = parseInt(voiceSpeedSelect.value) - 1;

		utterance.rate = voiceSpeedSelect.value

//				if (rgx.test(gSpeed))
//				{
//					utterance.rate = (parseInt(gSpeed) / 175);
//				}

		speechSynthesis.speak(utterance);

//				await speakAsync(utterance);
	}
}

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

function getPendingWords()
{
	const slide = slideData[currentSlideNum];

//	return (slide.words||[]).filter(w => ((! wordTracker[gLang][w]) || (wordTracker[gLang][w] === false)));

	const retSet = [...new Set(slide.words)].filter(w => (((! wordTracker[gLang][w]) || (wordTracker[gLang][w] === false)) && (dictionary[w])));

	return retSet;
}

function startWordQuiz()
{
	quizQueue = shuffleArray(getPendingWords());
	quizIndex = 0;
	showWordQuiz();
}

function showWordQuiz()
{
	const overlay = document.getElementById('wrdQuizOverlay');
	const content = document.getElementById('wrdQuizContent');
	content.innerHTML = '';

	if (quizIndex >= quizQueue.length)
	{
		const remaining = getPendingWords();
		if (remaining.length)
		{
			quizQueue = shuffleArray(remaining);
			quizIndex = 0;
		}
		else
		{
			content.innerHTML = '<p>All word quizzes complete for this slide!</p>';
			overlay.style.display = 'flex';
			return;
		}
	}

	const word = quizQueue[quizIndex];
	let altWord;
	if ((dictionary[word]) &&
		(dictionary[word]['alt']))
	{
		altWord = dictionary[word]['alt'];
	}

	const correct = dictionary[word].native;
	const allDefs = Object.values(dictionary).map(d => d.native).filter(d => d !== correct);
	const opts = shuffleArray([correct, ...shuffleArray(allDefs).slice(0,3)]);

	let wordPrompt = word;

	if ((document.getElementById('toggleAlt').checked) &&
		(altWord))
	{
		wordPrompt += " (" + altWord + ")";
	}

	content.innerHTML = `<p><strong>${wordPrompt}</strong>?</p>`;
	let guessNum = 1;
	currentWordOptLst = { };
	currentWordTargetWord = word;

	gWrdOptsDiv = document.createElement('div');
	gShowWrdOtpsBtn = document.createElement('button');

	gWrdOptsDiv.className = 'quizOptions';
	opts.forEach(opt =>
	{
		const curGuessNum = guessNum++;

		currentWordOptLst[curGuessNum] = opt;

		const lbl = "" + curGuessNum;
		const btn = document.createElement('button');
		btn.textContent = lbl;
		btn.addEventListener('click', () => handleWordAnswer(word, opt));
		gWrdOptsDiv.append(btn);

		const span = document.createElement('span');
		span.className = 'word';
		span.textContent = " " + ((opt.length > gMaxDefLng) ? opt.slice(0, gMaxDefLng) : opt);

		gWrdOptsDiv.append(span);

		const br = document.createElement('br');
		gWrdOptsDiv.appendChild(br);

	});
	content.append(gWrdOptsDiv);

	gWrdOptsDiv.style.display = "none";
	gShowWrdOtpsBtn.textContent = "sho(w)";
	gShowWrdOtpsBtn.addEventListener('click', () => { gWrdOptsDiv.style.display = "block"; gShowWrdOtpsBtn.style.display = "none"; });
	content.append(gShowWrdOtpsBtn);

	document.getElementById('wrdQuizOverlay').style.display = 'flex';
}

function handleWordAnswer(word, selected)
{
	const result = document.getElementById('wrdQuizResult');
	let resStr = "";
	const info = dictionary[word];

	if (selected === info.native)
	{
		if ((document.getElementById('toggleAlt').checked) &&
			(info.alt))
		{
			resStr = `Correct! ${word} (${info.alt}) = ${info.native}`;
			if (! (word in wordAttemptTracker))
			{
				registerWordSuccessResponse(word);
			}
		}
		else
		{
			resStr = `Correct! ${word} = ${info.native}`;
		}
		wordTracker[gLang][word] = true;
	}
	else
	{
		if (info.alt)
		{
			resStr = `Incorrect. ${word} (${info.alt}) = ${info.native}`;
		}
		else
		{
			resStr = `Incorrect. ${word} = ${info.native}`;
		}
	}

	wordAttemptTracker[word] = true;

	resStr = (resStr.length > gMaxDefLng) ? resStr.slice(0, gMaxDefLng) : resStr;

	result.textContent = resStr;

	quizIndex++;
	showWordQuiz();
}

function closeWordQuiz()
{
	let retOk = true;

	const remaining = getPendingWords();
	if (remaining.length && !confirm('There are still words remaining. Quit quiz?'))
	{
		retOk = false;
	}
	else
	{
		currentWordTargetWord = "";
		document.getElementById('wrdQuizOverlay').style.display = 'none';
		renderSlide(slideData[currentSlideNum]);
	}

	return retOk;
}

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

function startSentQuiz()
{
	currentWordIndex = 0;
	currentSentWrong = false;
	progressDiv.innerHTML = '';
	progressAltDiv.innerHTML = '';
	showSentQuiz();
	showNextSentQuestion();
}

function showSentQuiz()
{
	sentQuizOverlay.style.display = 'block';
	sentQuizPopup.style.display = 'block';
}

function hideSentQuiz()
{
	sentQuizOverlay.style.display = 'none';
	sentQuizPopup.style.display = 'none';
	sentOptionsDiv.innerHTML = '';
	progressDiv.innerHTML = '';
	progressAltDiv.innerHTML = '';
}

function showNextSentQuestion()
{
	const slide = slideData[currentSlideNum];
	sentQuizPrompt.textContent = slide.native;
	sentOptionsDiv.innerHTML = '';

	const targetWord = slide.words[currentWordIndex];

	const distractors = selectRandomWords(
		slideData,
		dictionary,
		currentSlideNum,
		targetWord
	);

	const preChoices = distractors.slice(0, 3).concat(targetWord);
	const choices = shuffleArray(preChoices);

	let chcNum = 1;

	currentWordOptLst = { };
	currentSentTargetWord = targetWord;

	choices.forEach(choiceWord =>
	{
		const curChs = chcNum++;

		currentWordOptLst[curChs] = choiceWord;

		const btn = document.createElement('button');

		const span = document.createElement('span');
		span.className = 'word';

		btn.textContent = curChs;

		if ((document.getElementById('toggleAlt').checked) &&
			(choiceWord in dictionary) &&
			(dictionary[choiceWord].alt))
		{
			span.textContent = ` ${choiceWord} (${dictionary[choiceWord].alt})`;
		}
		else
		{
			span.textContent = ` ${choiceWord}`;
		}

		btn.className = 'optionButton';
		btn.addEventListener('click', () => handleSentAnswer(choiceWord, targetWord));
		sentOptionsDiv.append(btn);
		sentOptionsDiv.append(span);
		const br = document.createElement('br');
		sentOptionsDiv.appendChild(br);
	});
}

function handleSentAnswer(choiceWord, targetWord)
{
	const isCorrect = choiceWord === targetWord;

	if (! isCorrect)
	{
		currentSentWrong = true;
	}

	const span = document.createElement('span');
	span.textContent = targetWord;
	span.style.color = isCorrect ? 'green' : 'red';
	progressDiv.appendChild(span);

	if (document.getElementById('toggleAlt').checked)
	{
		const altSpan = document.createElement('span');

		if ((targetWord in dictionary) &&
			(dictionary[targetWord].alt))
		{
			altSpan.textContent = dictionary[targetWord].alt;
		}
		else
		{
			altSpan.textContent = targetWord;
		}
		altSpan.style.color = isCorrect ? 'green' : 'red';
		progressAltDiv.appendChild(altSpan);
	}

	currentWordIndex++;
	if (currentWordIndex >= slideData[currentSlideNum].words.length)
	{
		sentenceTracker[gLang][gBook][gChap][currentSlideNum] = true;
		if (currentSentWrong)
		{
			sentOptionsDiv.innerHTML = 'Made some mistakes';
		}
		else
		{
			sentOptionsDiv.innerHTML = 'All correct';

			if (!(currentSlideNum in sentenceAttemptTracker))
			{
				registerSentenceSuccessResponse();
			}
		}
		sentenceAttemptTracker[currentSlideNum] = true;
	}
	else
	{
		showNextSentQuestion();
	}
}

function closeSentenceQuiz()
{
	if (currentWordIndex < slideData[currentSlideNum].words.length)
	{
		if (!confirm('You have not finished the quiz. Are you sure you want to quit?')) return;
	}
	currentSentTargetWord = "";
	sentenceAttemptTracker[currentSlideNum] = true;
	hideSentQuiz();
	renderSlide(slideData[currentSlideNum]);
}

function registerWordSuccessResponse(inWord)
{

//if (gBook == "Mark") {return;}
	wordTracker[gLang][inWord] = true;
	saveData(wordStorageKey, wordTracker);

	for (const [key, values] of Object.entries(dictionary[inWord].vrn))
	{
//console.log(`${key}: ${values.join(':')}`);
		makeServerCall(
			{
				lang: gLang,
				book: gBook,
				chap: gChap,
				line: currentSlideNum,
				rom: key,
				vrn: values.join(":"),
				from: 'gly',
				to: 'eng',
				word: inWord,
				mode: gMode,
				type: 'vocab',
				result: 1
			});
	}

}

function registerSentenceSuccessResponse()
{
	saveData(sentenceStorageKey, sentenceTracker);

//if (gBook == "Mark") {return;}

	makeServerCall(
		{
			lang: gLang,
			book: gBook,
			chap: gChap,
			line: currentSlideNum,
			mode: gMode,
			type: 'produc',
			result: 1
		});
}

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

// Utility: Fisher–Yates shuffle and pick first N
function getRandomElements(array, count) 
{
	const arr = array.slice();
	for (let i = arr.length - 1; i > 0; i--) 
	{
		const j = Math.floor(Math.random() * (i + 1));
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
	return arr.slice(0, count);
}

// Main selection logic
function selectRandomWords(slideData, dictionary, currentSlideNum, targetWord) 
{
	const TOTAL = 3;
	let selected = [];

	// 1) Up to 2 from current slide
	const primaryPool = slideData[currentSlideNum].words.filter(w => w !== targetWord);
	const takePrimary = Math.min(1, primaryPool.length);
	selected.push(...getRandomElements(primaryPool, takePrimary));

	// 2) One from adjacent slide
	let adjIndex = null;
	if (currentSlideNum < slideData.length - 1) 
	{
		adjIndex = currentSlideNum + 1;
	} else if (currentSlideNum > 0) 
	{
		adjIndex = currentSlideNum - 1;
	}
	if (adjIndex !== null) 
	{
		const adjPool = slideData[adjIndex].words
			.filter(w => w !== targetWord && !selected.includes(w));
		if (adjPool.length > 0) 
		{
			selected.push(...getRandomElements(adjPool, 1));
		}
	}

	// 3) Fill to 4 from dictionary
	const dictPool = Object.keys(dictionary)
		.filter(w => w !== targetWord && !selected.includes(w));
	const remaining = TOTAL - selected.length;
	if (remaining > 0) 
	{
		selected.push(...getRandomElements(dictPool, remaining));
	}

	// 4) Final shuffle
	return getRandomElements(selected, selected.length);
}

function shuffleArray(arr)
{
	const a = arr.slice(); for (let i=a.length-1; i>0; i--)
	{
		const j = Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]];
	} return a;
}

function advanceSlide()
{
	currentSlideNum = (currentSlideNum+1)%slideData.length;

	return (currentSlideNum != 0);
}

function navigateNext()
{
	if ((currentSentTargetWord.length > 0) ||
		(currentWordTargetWord.length > 0))
	{
		alert("First close quiz");
	}
	else
	{
		advanceSlide();
		presentSlide();
	}
}

function navigatePrevious()
{
	if ((currentSentTargetWord.length > 0) ||
		(currentWordTargetWord.length > 0))
	{
		alert("First close quiz");
	}
	else
	{
		currentSlideNum = (currentSlideNum-1+slideData.length)%slideData.length;
		presentSlide();
	}
}

document.getElementById('prevBtn').addEventListener('click', () =>
{
	navigatePrevious();
});
document.getElementById('nextBtn').addEventListener('click', () =>
{
	navigateNext();
});
document.getElementById('slideSelect').addEventListener('change', (e) =>
{
	currentSlideNum = +e.target.value;
	closeWordQuiz(); presentSlide();
});

sentQuitQuizBtn.addEventListener('click', () =>
{
	closeSentenceQuiz();
});

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
// KEYSTROKE CAPTURE

document.addEventListener('keydown', function(event)
{
	if (['1', '2', '3', '4'].includes(event.key))
	{
		if (currentSentTargetWord.length > 0)
		{
			handleSentAnswer(currentWordOptLst[event.key], currentSentTargetWord)
		}
		else if (currentWordTargetWord.length > 0)
		{
			handleWordAnswer(currentWordTargetWord, currentWordOptLst[event.key])
		}
	}
	else if  (['5'].includes(event.key))
	{
		if (currentSentTargetWord.length > 0)
		{
			handleSentAnswer("", currentSentTargetWord)
		}
		else if (currentWordTargetWord.length > 0)
		{
			handleWordAnswer(currentWordTargetWord, "")
		}
	}
	else if  (['q'].includes(event.key))
	{
		if (currentSentTargetWord.length > 0)
		{
			closeSentenceQuiz();
		}
		else if (currentWordTargetWord.length > 0)
		{
			closeWordQuiz();
		}
	}
	else if  (['r'].includes(event.key))
	{
		doSpeak();
	}
	else if  (['e'].includes(event.key))
	{
		navigateNext()
	}
	else if  (['w'].includes(event.key))
	{
		gWrdOptsDiv.style.display = "block";
		gShowWrdOtpsBtn.style.display = "none";
	}
});

function makeServerCall(inKV)
{
	return;
}

function loadData(inKey)
{
	const data = localStorage.getItem(inKey);
	let retData = data ? JSON.parse(data) : { };

	if (! retData[gLang])
	{
		retData[gLang] = { };
	}
	if (inKey === sentenceStorageKey)
	{
		if (! retData[gLang][gBook])
		{
			retData[gLang][gBook] = { };
		}
		if (! retData[gLang][gBook][gChap])
		{
			retData[gLang][gBook][gChap] = { };
		}
	}

	return retData;
}

function saveData(inKey, inData)
{
	const ss = JSON.stringify(inData);
	localStorage.setItem(inKey, ss);
}
