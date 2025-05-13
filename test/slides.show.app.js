
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

	document.getElementById('toggleAlt').checked = controlParams.defaultAltOn;
	document.getElementById('toggleTranslation').checked = controlParams.defaultNativeOn;
	document.getElementById('toggleWordQuiz').checked = controlParams.defaultWordQuizOn;
	document.getElementById('toggleSentenceQuiz').checked = controlParams.defaultSentQuizOn;
	document.getElementById('toggleSkipNoQuiz').checked = controlParams.defaultSkipNoQuizOn;
	document.getElementById('toggleSpeakOnRender').checked = controlParams.defaultSpeakOn;

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
