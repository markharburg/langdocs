

let gInstId = 0;

////////////////////////////////////////////////////////////////////////////////

/**
 * Parse a grammar definition string into a data structure.
 * @param {string} inTxt   - The grammar text
 * @param {string} inTxtFl - Filename (for error messages, unused here)
 * @param {number} inLno   - Starting line number (0‑based or 1‑based as in Perl)
 * @returns {Object} An object with keys: kv, rdx, tok, rgx
 */
function parseGrammar(inTxt, inTxtFl, inLno)
{
	const retGram =
	{
		kv: {},
		rdx: {},
		tok: {},
		rgx: {}
	};

	// Normalize newlines
	let txt = inTxt.replace(/\r\n/g, '\n');

	let lno = inLno;

	let rdx;		  // current rule left‑hand side (string)
	let opts = [];	// array of rule options (each an array of symbol refs)

	let tok;		  // current token symbol (string)
	let mtch = {};	// hash of token alternatives (values are 1)

	const lines = txt.split('\n');
	for (let ln of lines)
	{
		lno++;

		// Remove comments
		ln = ln.replace(/---.*$/, '');
		ln = ln.replace(/===.*$/, '');

		// --- 1. Key: value assignments ---
		let match;
		if ((match = ln.match(/^\s*([a-z][a-z0-9\-_]*)\s*:\s*"(.*)"\s*$/i)) ||
			(match = ln.match(/^\s*([a-z][a-z0-9\-_]*)\s*:\s*'(.*)'\s*$/i)) ||
			(match = ln.match(/^\s*([a-z][a-z0-9\-_]*)\s*:\s*([^\s].*[^\s])\s*$/i)) ||
			(match = ln.match(/^\s*([a-z][a-z0-9\-_]*)\s*:\s*([^\s])\s*$/i)))
		{
			let kk = match[1];
			let vv = match[2];
			vv = vv.replace(/\\(.)/g, '$1');
			retGram.kv[kk] = vv;
			continue;
		}

		// --- 2. Rule start: "a ->" (line ends with arrow) ---
		if ((match = ln.match(/^\s*([a-z][a-z0-9\-_]*)\s*->\s*$/i)))
		{
			const rr = match[1];

			// Flush previous rule if any
			if (rdx != null)
			{
				retGram.rdx[rdx] = opts.slice(); // copy array
			}

			rdx = rr;
			opts = [];

			// Set default root if not already set
			if (retGram.kv.root == null)
			{
				retGram.kv.root = rdx;
			}

			// Flush previous token if any
			if (tok != null)
			{
				retGram.tok[tok] = Object.assign({}, mtch);
			}
			tok = null;
			mtch = {};
			continue;
		}

		// --- 3. Rule with inline definition: "a -> b+ c" ---
		if ((match = ln.match(/^\s*([a-z][a-z0-9\-_]*)\s*->\s*([a-z][a-z0-9\s\-_+*?{},]*[a-z0-9\-_+*?}])\s*$/i)) ||
			(match = ln.match(/^\s*([a-z][a-z0-9\-_]*)\s*->\s*([a-z])\s*$/i)))
		{
			const rr = match[1];
			const rulStr = match[2];

			// Flush previous rule
			if (rdx != null)
			{
				retGram.rdx[rdx] = opts.slice();
			}
			rdx = rr;
			opts = [];

			if (retGram.kv.root == null)
			{
				retGram.kv.root = rdx;
			}

			const rul = parseRule(rulStr, lno);
			opts.push(rul);

			// Flush previous token
			if (tok != null)
			{
				retGram.tok[tok] = Object.assign({}, mtch);
			}
			tok = null;
			mtch = {};
			continue;
		}

		// --- 4. Additional rule options: "b+ c" (when inside a rule) ---
		if ((rdx != null) &&
			((match = ln.match(/^\s*([a-z][a-z0-9\s\-_+*?{},]*[a-z0-9\-_+*?}])\s*$/i)) ||
			 (match = ln.match(/^\s*([a-z])\s*$/i))))
		{
			const rulStr = match[1];
			const rul = parseRule(rulStr, lno);
			opts.push(rul);
			continue;
		}

		// --- 5. Token start: "X =" (line ends with equals) ---
		if ((match = ln.match(/^\s*([a-z][a-z0-9\-_]*)\s*=\s*$/i)))
		{
			const tt = match[1];

			// Flush previous rule
			if (rdx != null)
			{
				retGram.rdx[rdx] = opts.slice();
			}
			rdx = null;
			opts = [];

			// Flush previous token
			if (tok != null)
			{
				retGram.tok[tok] = Object.assign({}, mtch);
			}
			tok = tt;
			mtch = {};
			continue;
		}

		// --- 6. Token regex definition: "X = /[a-z]+/" ---
		if ((match = ln.match(/^\s*([a-z][a-z0-9\-_]*)\s*=\s*\/([^\n]+)\/\s*$/i)))
		{
			const tt = match[1];
			let rgx = match[2];
			rgx = rgx.replace(/\\(.)/g, '$1');

			// Flush previous rule
			if (rdx != null)
			{
				retGram.rdx[rdx] = opts.slice();
			}
			rdx = null;
			opts = [];

			// Flush previous token
			if (tok != null)
			{
				retGram.tok[tok] = Object.assign({}, mtch);
			}
			tok = null;
			mtch = {};

			retGram.rgx[tt] = rgx;
			continue;
		}

		// --- 7. Token definition inline: "X = one, two, three" ---
		if ((match = ln.match(/^\s*([a-z][a-z0-9\-_]*)\s*=\s*([^\s].*[^\s])\s*$/i)) ||
			(match = ln.match(/^\s*([a-z][a-z0-9\-_]*)\s*=\s*([^\s])\s*$/i)))
		{
			const tt = match[1];
			const mtchStr = match[2].toLowerCase();

			// Flush previous rule
			if (rdx != null)
			{
				retGram.rdx[rdx] = opts.slice();
			}
			rdx = null;
			opts = [];

			// Flush previous token
			if (tok != null)
			{
				retGram.tok[tok] = Object.assign({}, mtch);
			}
			tok = tt;
			mtch = {};

			parseMatch(mtchStr, lno, mtch);
			continue;
		}

		// --- 8. Token continuation: "one, two, three" (when inside a token) ---
		if ((tok != null) &&
			((match = ln.match(/^\s*([^\s].*[^\s])\s*$/)) ||
			 (match = ln.match(/^\s*([^\s])\s*$/))))
		{
			const mtchStr = match[1].toLowerCase();
			parseMatch(mtchStr, lno, mtch);
			continue;
		}

		// --- 9. Non‑empty line that didn't match anything → error ---
		if (/\S/.test(ln))
		{
			errOut(`Grammar file syntax error:\n\n\t${lno}: "${ln}"`);
		}
	}

	// Flush any remaining rule
	if (rdx != null && opts.length > 0)
	{
		retGram.rdx[rdx] = opts.slice();
	}

	// Flush any remaining token
	if (tok != null)
	{
		retGram.tok[tok] = Object.assign({}, mtch);
	}

	////////////////////////////////////////////////////////////////////////////
	// now verify the integrity of the grammar
	//	- no infinite loops allowed - e.g., "a -> a"

	const loops = findInfiniteLoops(retGram);

	const badRdx = Object.keys(loops);

	if (badRdx.length > 0)
	{
		let msg = "Grammar infinite loop error: ";
		let sep = ""
		for (rr of badRdx)
		{
			msg += sep + "\"" + rr + " => " + loops[rr] + "\"";
			sep = ", ";
		}
		errOut(msg);
	}

	////////////////////////////////////////////////////////////////////////////

	return retGram;
}

/**
 * Parse a rule string like "b+ c{3}" into an array of symbol references.
 * Each reference is an object: { ref: string, min: number, max: number }.
 */
function parseRule(inRulStr, inLno)
{
	const retRul = [];

	const elms = inRulStr.split(/\s+/);
	for (let elm of elms)
	{
		let symRef = elm;
		let min = 1;
		let max = 1;

		let match;
		if (elm.match(/^[a-z][a-z0-9\-_]*$/i))
		{
			// simple symbol
		}
		else if ((match = elm.match(/^([a-z][a-z0-9\-_]*)([+*?])$/i)))
		{
			symRef = match[1];
			const itr = match[2];
			if (itr === '+')
			{
				max = 0; // 0 means unlimited (min stays 1)
			}
			else if (itr === '*')
			{
				min = 0;
				max = 0;
			}
			else if (itr === '?')
			{
				min = 0;
				// max stays 1
			}
		}
		else if ((match = elm.match(/^([a-z][a-z0-9\-_]*)\{\s*([0-9]+)\s*,\s*([0-9]+)\s*\}$/i)))
		{
			symRef = match[1];
			min = parseInt(match[2], 10);
			max = parseInt(match[3], 10);
			if (max < min)
			{
				errOut(`Grammar file syntax error: max < min: "${elm}".\n\n\t${inLno}: ${inRulStr}`);
			}
		}
		else if ((match = elm.match(/^([a-z][a-z0-9\-_]*)\{\s*([0-9]+)\s*\}$/i)))
		{
			symRef = match[1];
			min = parseInt(match[2], 10);
			max = min;
		}
		else
		{
			errOut(`Grammar file syntax error: bad symbol ref: "${elm}".\n\n\t${inLno}: ${inRulStr}`);
		}

		retRul.push({ ref: symRef, min: min, max: max });
	}

	return retRul;
}

/**
 * Parse a comma‑separated list of token alternatives and populate the mtch object.
 * @param {string} inMtchStr - e.g. 'one, two, "three, four"'
 * @param {number} inLno	 - line number (for error reporting, unused)
 * @param {Object} outMtch   - object to populate (keys become alternatives)
 */
function parseMatch(inMtchStr, inLno, outMtch)
{
	let ms = inMtchStr;

	// Escape commas inside quotes temporarily
	ms = ms.replace(/\\,/g, '<@COMMA@>');

	const parts = ms.split(/\s*,\s*/);
	for (let mm of parts)
	{
		// Remove surrounding quotes
		const quoted = mm.match(/^"(.*)"$/);
		if (quoted)
		{
			mm = quoted[1];
		}
		// Unescape
		mm = mm.replace(/\\(.)/g, '$1');
		mm = mm.replace(/<@COMMA@>/g, ',');
		outMtch[mm] = 1;
	}
}

////////////////////////////////////////////////////////////////////////////////

function findInfiniteLoops(inGrammar)
{
	let retSyms = { };

	let stk = [ ];

	for (rdx of Object.keys(inGrammar.rdx))
	{
		stk.push( { rdx: rdx, trck: null } );
	}

	while (stk.length > 0)
	{
		const frm = stk.pop();

		const { rdx, trck } = frm;

		let hasLoop = false;
		let pt = trck;
		let pth = "";

		while (pt)
		{
			const { sym, lst } = pt;

			if (rdx == sym)
			{
				retSyms[rdx] = pth;
				hasLoop = true;
				break;
			}

			if (pth.length > 0) { pth += "::"; }
			pth += sym;

			pt = lst;
		}

		if (! hasLoop)
		{
			for (opt of inGrammar.rdx[rdx])
			{
				for (pos = 0; pos<opt.length; pos++)
				{
					const { ref, min, max } = opt[pos];

					if ((inGrammar.rdx[ref] != null) &&
						(retSyms[ref] == null))
					{
						stk.push( { rdx: ref, trck: { sym: rdx, lst: trck } } );
					}

					if (min > 0)
					{
						break;
					}
				}
			}
		}
	}

	return retSyms;
}

////////////////////////////////////////////////////////////////////////////////

function tokenize(inText)
{
	let retTokenBlock = [];

	// First, remove comments (--- or === followed by anything until newline)
	let text = inText.replace(/^(---|===).*$/gm, '');

	text = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n');

	// Split into lines for processing
	let lines = text.split('\n');

	let currentAnnotation = null;
	let currentTokens = [];
	let pendingTokens = [];

	// Helper function to tokenize a string
	function tokenizeString(str)
	{
		let tokens = [];
		let currentToken = '';

		// Check if character is an alpha character (including accented)
		function isAlpha(char)
		{
			return /[a-zA-ZÀ-ÖØ-öø-ÿ]/.test(char);
		}

		// Check if character is punctuation (any non-alpha, non-space)
		function isPunctuation(char)
		{
			return !isAlpha(char) && char !== ' ' && char !== '\t' && char !== '\r';
		}

		for (let ii = 0; ii < str.length; ii++)
		{
			let char = str[ii];

			if (isAlpha(char))
			{
				currentToken += char;
			}
			else if (char === ' ' || char === '\t' || char === '\r' || char === '\n')
			{
				// Space or newline - flush current token if any
				if (currentToken)
				{
					tokens.push(currentToken);
					currentToken = '';
				}
			}
			else if (isPunctuation(char))
			{
				// Flush current token if any
				if (currentToken)
				{
					tokens.push(currentToken);
					currentToken = '';
				}
				// Add punctuation as separate token
				tokens.push(char);
			}
		}

		// Flush remaining token
		if (currentToken)
		{
			tokens.push(currentToken);
		}

		return tokens;
	}

	// Check if a line ends with sentence-ending punctuation
	function isSentenceEnd(line)
	{
		let trimmed = line.trim();
		if (trimmed.length === 0) return false;
		let lastChar = trimmed[trimmed.length - 1];
		return ['.', '!', '?', ';'].includes(lastChar);
	}

	// Process each line
	for (let ii = 0; ii < lines.length; ii++)
	{
		let line = lines[ii];
		let trimmed = line.trim();

		// Skip empty lines
		if (trimmed === '') continue;

		// Check for annotation
		let annotationMatch = trimmed.match(/^\s*\{:\s*([^\n]*?)\s*:\}\s*$/);
		if (annotationMatch)
		{
			// This is an annotation line
			currentAnnotation = annotationMatch[1].trim();
			continue;
		}

		// If we get here, this is a text line
		// Remove any newline characters (they're treated as spaces)
		let textLine = line.replace(/[\r\n]+/g, ' ');

		// Tokenize this line
		let tokens = tokenizeString(textLine);

		// Add tokens to pending collection
		pendingTokens = pendingTokens.concat(tokens);

		// If this line ends a sentence, finalize the token block
		if (isSentenceEnd(line))
		{
			if (pendingTokens.length > 0)
			{
				let block =
				{
					toks: pendingTokens
				};
				if (currentAnnotation !== null)
				{
					block.annot = currentAnnotation;
					currentAnnotation = null;
				}
				retTokenBlock.push(block);
				pendingTokens = [];
			}
		}
	}

	// If there are any remaining tokens that form a sentence (shouldn't happen with proper input)
	if (pendingTokens.length > 0)
	{
		let block =
			{
				toks: pendingTokens
			};
		if (currentAnnotation !== null)
		{
			block.annot = currentAnnotation;
		}
		retTokenBlock.push(block);
	}

	return retTokenBlock;
}

function tokenize_OLD(inText)
{
	let retTokenBlock = [];

	let text = inText.toLowerCase().replace(/\r\n/g, '\n');

	text = text.replace(/---.*\n/g, '\n');
	text = text.replace(/===.*\n/g, '\n');
	text = text.replace(/\s+\n/g, '\n');
	text = text.replace(/\n+/g, '\n');

	const sentences = text.split(/(?<=[.!?;])\s+/)
		.filter(sentence => sentence.trim().length > 0);

	for (let sentence of sentences)
	{
		const trimmed = sentence.trim();

		let sentBlk = [];

		const tokens = sentence.split(/\s+|(?=[^a-zA-ZáàâǎāéèêëěēíìîïǐīóòǒōúùûüǔūǜǚÁÀÂǍĀÉÈÊËĚĒÍÌÎÏǏĪÓÒǑŌÚÙÛÜǓŪǛǙ0-9])|(?<=[^a-zA-ZáàâǎāéèêëěēíìîïǐīóòǒōúùûüǔūǜǚÁÀÂǍĀÉÈÊËĚĒÍÌÎÏǏĪÓÒǑŌÚÙÛÜǓŪǛǙ0-9])/)
			.filter(token => token.length > 0);

		for (let token of tokens)
		{
			sentBlk.push(token);
		}

		retTokenBlock.push(sentBlk);
	}

	return retTokenBlock;
}

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function alreadyHasRule(inRdxDef, inLhs)
{
	let retHas = false;

	for (opt of inRdxDef)
	{
		if (opt.length == inLhs.length)
		{
			retHas = true;

			for (let ii=0; ii<opt.length; ii++)
			{
				const { ref: aref, min: amin, max: amax } = inLhs[ii];
				const { ref: bref, min: bmin, max: bmax } = opt[ii];

				if ((aref != bref) ||
					(amin != bmin) ||
					(amax != bmax))
				{
					retHas = false;
					break;
				}
			}

			if (retHas == true)
			{
				break;
			}
		}
	}

	return retHas;
}

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fmtGrammar(inGrammar)
{
	return fmtGrammarRules(inGrammar) + "\n\n" + fmtGrammarTokens(inGrammar);
}

function fmtGrammarRules(inGrammar)
{
	let retTxt = "";

	const root = inGrammar.kv["root"];

	let ruleQueue = [ root ];
	let ruleDedupe = { };

	while (ruleQueue.length > 0)
	{
		const rdx = ruleQueue.shift();

		ruleDedupe[rdx] = 1;

		let optLst = "";

		for (opt of inGrammar.rdx[rdx])
		{
			let refLst = "";

			for (rul of opt)
			{
				const { ref, min, max } = rul;

				if (refLst.length > 0) { refLst += " "; }
				refLst += ref + iterDefToLabel(min, max);

				if (inGrammar.rdx[ref] != null)
				{
					if (ruleDedupe[ref] == null)
					{
						ruleQueue.push(ref);
						ruleDedupe[ref] = 1;
					}
				}
			}
			if (optLst.length === 0)
			{
				optLst += rdx + " ->\n\t";
			}
			else
			{
				optLst += "\t";
			}
			optLst += refLst + "\n";
		}

		////////////////////////////////////////////////////////////////////////
		// at end of queue - see if we missed any non-referenced rdx...
		if (ruleQueue.length == 0)
		{
			const sortedRdxs = Object.keys(inGrammar.rdx).sort((a, b) => a < b ? -1 : a > b ? 1 : 0);

			for (rr of sortedRdxs)
			{
				if (ruleDedupe[rr] == null)
				{
					ruleQueue.push(rr);
				}
			}
		}

		retTxt += optLst;
	}

	return retTxt;
}

function fmtGrammarTokens(inGrammar)
{
	let retTxt = "";

	let retLexiconRules = [ ];

	const tokKeys = Object.keys(inGrammar.tok);
	const rgxKeys = Object.keys(inGrammar.rgx);

	const sortedToks = [...new Set([...tokKeys, ...rgxKeys])].sort((a, b) => a < b ? -1 : a > b ? 1 : 0);

	for (tok of sortedToks)
	{
		if (inGrammar.tok[tok] != null)
		{
			let valLst = "";

			const sortedVals = Object.keys(inGrammar.tok[tok]).sort((a, b) => a < b ? -1 : a > b ? 1 : 0);

			for (let vv of sortedVals)
			{
				vv = vv.replace(/,/g, '\\,');

				if (valLst.length === 0)
				{
					valLst += tok + " =\n\t";
				}
				else
				{
					valLst += "\t";
				}
				valLst += vv + "\n";
			}

			retTxt += valLst;
		}
		if (inGrammar.rgx[tok] != null)
		{
			retTxt += tok + " =\t" + "/" + inGrammar.rgx[tok] + "/\n";
		}
	}

	return retTxt;
}

////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////

function iterDefToLabel(inMin, inMax)
{
	let retTxt = "";

	if (inMin === 0)
	{
		if (inMax === 0)
		{
			retTxt = "*";
		}
		else if (inMax === 1)
		{
			retTxt = "?";
		}
		else
		{
			retTxt = "{" + inMin + "," + inMax + "}";
		}
	}
	else if (inMin === 1)
	{
		if (inMax === 0)
		{
			retTxt = "+";
		}
		else if (inMax > 1)
		{
			retTxt = "{" + inMin + "," + inMax + "}";
		}
	}
	else
	{
		retTxt = "{" + inMin + "," + inMax + "}";
	}

	return retTxt;
}


////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


function initializeThreadPool(inGrammar)
{
	let retThreadPool = [];

	const root = inGrammar.kv["root"];

	const instFrm = { id: gInstId++, sym: root, val: null, par: null, lst: null, err: false, msm: false };

	for (let oo = 0; oo < inGrammar.rdx[root].length; oo++)
	{
		insertIntoThreadPool(retThreadPool, { scr: 0, bad: false, elm: 1, pos: { rdx: root, opt: oo, pnt: 0, itr: 0, parent: null, base: instFrm }, inst: instFrm, vpt: 0 });
	}

	return retThreadPool;
}

function insertIntoThreadPool(ioThdPool, inThdFrm)
{
	// Find insertion position
	let insertPos = ioThdPool.length;
	for (let ii = 0; ii < ioThdPool.length; ii++)
	{
		const current = ioThdPool[ii];
		// Check if inThdFrm should go before current
		// prefer: (1) low error, (2) high token count, (3) low node (elm) count
		if (inThdFrm.scr > current.scr ||
			(inThdFrm.scr === current.scr && inThdFrm.vpt < current.vpt) ||
			(inThdFrm.scr === current.scr && inThdFrm.vpt === current.vpt && inThdFrm.elm < current.elm))
		{
			insertPos = ii;
			break;
		}
	}

	// Insert at position
	ioThdPool.splice(insertPos, 0, inThdFrm);
}

function isAtGrammarEnd(inPos, inGrammar)
{
	let retIsTrue;

	const { rdx, opt, pnt, itr, parent, base } = inPos;

	const rule = inGrammar.rdx[rdx][opt];

	retIsTrue = ((parent == null) &&
			(rule.length <= pnt));

	return retIsTrue;
}

/*
The step() function is the nerve center of the app.

It takes a list of tokens being parsed (inTokLine) and a parsing process
thread (inThdFrm) and generates every subsequent thread ("step") from that state
in accordance with the defined grammar (inGrammar) or possible error states that
might subsequently occur (e.g., if an expected token is missing in the list of
tokens).

A thread in this context is the current state of a permutation of the walking
of a search tree where the search is for the best instance of the grammar that
matches the data (inTokLine).

There are 4 types of next states...

	1. reduce:		the state is at the end of a grammar rule, so this rule is
					popped off the stack and the prior rule that this rule was
					shifted from is now the current rule again.
	2. advance:		move to the next position in the rule. If the iteration
					count for the symbol reference doesn't reach the minimum,
					then this is an error state (i.e., the error count is
					increased for this state).
	3. shift:		the current symbol reference in the rule is not a token,
					so shift each of this symbol's rules onto its own thread.
	4. tokenize:	the current symbol reference in the rule IS a token,
					so try to consume the next token in the list of tokens.
*/

function step(inThdFrm, inGrammar, inValueLst)
{
	const retNxt = [];

	// Destructure the frame
	const { scr, bad, elm, inst, pos, vpt } = inThdFrm;

const dbgInst = dbgInstToTxt(instStackToObj(inst));
const dbgPos = dbgPosToTxt(pos, scr, inGrammar);

	// Destructure the position
	const { rdx, opt, pnt, itr, parent, base } = pos;

	// Get the grammar rule
	const rule = inGrammar.rdx[rdx][opt];

	// REDUCE: At end of rule
	if (pnt > rule.length - 1)
	{
		if (parent == null)
		{
			throw new Error("Internal error in step::reduce - cannot reduce at root level.");
		}

		// make a deep copy of the instance to record errors...
		const cpyInst = {
			id: inst.id,
			sym: inst.sym,
			val: inst.val,
			par: inst.par,
			lst: inst.lst,
			err: inst.err,
			msm: (inst.msm || bad) ? true : false
		};

		retNxt.push({
			scr: scr,
			bad: false,
			elm: elm,
			pos: pos.parent,
			inst: cpyInst,
			vpt: vpt
		});

const dbgInst2 = dbgInstToTxt(instStackToObj(cpyInst));
const dbgPos2 = dbgPosToTxt(pos.parent, scr, inGrammar);
const ll = "REDUCE";

	}
	// ADVANCE, SHIFT, or TOKENIZE
	else
	{
		const { ref: refSym, min, max } = rule[pnt];

		// --- ADVANCE ---
		// Calculate "underage" for advance
		let nxtScr = scr;
		let isMismatch = false;

		if (itr < min)
		{
			nxtScr++;
			isMismatch = true;
		}

		retNxt.push({
			scr: nxtScr,
			bad: isMismatch,
			elm: elm,
			pos: {
				rdx: rdx,
				opt: opt,
				pnt: pnt + 1,
				itr: 0,
				parent: parent,
				base: base
			},
			inst: inst,
			vpt: vpt
		});

const dbgInst2 = dbgInstToTxt(instStackToObj(inst));
const dbgPos2 = dbgPosToTxt(retNxt[retNxt.length-1].pos, nxtScr, inGrammar);
const ll = "ADVANCE";

		// --- Prepare common values for SHIFT / TOKENIZE ---
		// Calculate "overage" for shift/tokenize
		nxtScr = scr;
		isMismatch = false;

		if (max > 0 && itr >= max)
		{
			nxtScr++;
			isMismatch = true;
		}

		// Make next instance frame
		const nxtInst = {
			id: gInstId++,
			sym: refSym,
			val: null,
			par: base,
			lst: inst,
			err: false,
			msm: isMismatch
		};

		// --- SHIFT: Non-terminal symbol ---
		if (inGrammar.rdx[refSym] != null)
		{
			const newPar = {
				rdx: rdx,
				opt: opt,
				pnt: pnt,
				itr: itr + 1,
				parent: parent,
				base: base
			};

			const grmDef = inGrammar.rdx[refSym];
			for (let oo = 0; oo < grmDef.length; oo++)
			{
				retNxt.push({
					scr: nxtScr,
					bad: false,
					elm: elm + 1,
					pos: {
						rdx: refSym,
						opt: oo,
						pnt: 0,
						itr: 0,
						parent: newPar,
						base: nxtInst
					},
					inst: nxtInst,
					vpt: vpt
				});

const dbgInst3 = dbgInstToTxt(instStackToObj(nxtInst));
const dbgPos3 = dbgPosToTxt(retNxt[retNxt.length-1].pos, nxtScr, inGrammar);
const ll = "SHIFT";

			}
		}
		// --- TOKENIZE: Terminal symbol ---
		else
		{
			let val = "";
			if (inValueLst.length > vpt)
			{
				val = inValueLst[vpt].toLowerCase();
			}

			let ok = false;

			// Check against token table
			if (inGrammar.tok &&
				inGrammar.tok[refSym] != null &&
				inGrammar.tok[refSym][val] != null)
			{
				ok = true;
			}

			// Check against regex patterns
			if ((! ok) &&
				(inGrammar.rgx && inGrammar.rgx[refSym] != null))
			{
				const rgx = inGrammar.rgx[refSym];
				const regex = new RegExp(`^${rgx}$`, 'i');
				if (regex.test(val))
				{
					ok = true;
				}
			}

			// Set the token value
			nxtInst.val = inValueLst[vpt];

			// If no match found, increment error or drop thread
			if (!ok)
			{
				nxtInst.err = true;

				nxtScr++;
			}

			retNxt.push({
				scr: nxtScr,
				bad: false,
				elm: elm + 1,
				pos: {
					rdx: rdx,
					opt: opt,
					pnt: pnt,
					itr: itr + 1,
					parent: parent,
					base: base
				},
				inst: nxtInst,
				vpt: vpt + 1
			});

const dbgInst4 = dbgInstToTxt(instStackToObj(nxtInst));
const dbgPos5 = dbgPosToTxt(retNxt[retNxt.length-1].pos, nxtScr, inGrammar);
const ll = "TOKENIZE";

		}
	}

	return retNxt;
}

////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////
// convert an instance stack to the actual instance object that it represents.
// an instance object is a tree where each node is a label-value pair where the value can either be a text string (for leaf nodes) or an array of child nodes.
// an instance stack is a stack of frames that describe of an instance.
// each frame of the stack describes one node of the instance as well as its relationship to other nodes further down the stack.

function instStackToObj(inInstStkFrm)
{
	let retInst = {};

	// Register objects with their parents so that when the stack gets to the
	// parent, they can claim their child.
	const instRegTbl = {};

	let frm = inInstStkFrm;

	while (frm != null)
	{
		const { id, sym, val, par, lst, err, msm } = frm;

		let curNode;

		// This is a leaf node...
		if (val != null)
		{
			curNode = { label: sym, value: val, err: err, msm: msm };
		}
		// This must be a parent node...
		else
		{
			// tracks to see if any children are outside of iteration range...
			let mismatchErr = err;

			// Collect child nodes...
			const childArr = [];
			if (instRegTbl[id])
			{
				for (const ee of instRegTbl[id])
				{
					childArr.push(ee);

					// if any children are outside of their iteration range...
					if (ee.msm)
					{
						mismatchErr = true;
					}
				}
			}

			// Put the child list into the proper order...
			childArr.reverse();

			curNode = { label: sym, value: childArr, err: mismatchErr, msm: msm };
		}

		// is child of a node - register self for future retrieval...
		if (par != null)
		{
			// Save in register so when get to parent, node can be claimed...
			if (! instRegTbl[par.id])
			{
				instRegTbl[par.id] = [];
			}
			instRegTbl[par.id].push(curNode);
		}
		else
		{
			if (lst != null)
			{
				throw new Error(`Internal error - "${sym}" should be the root and last frame, but it has last frame: "${lst.sym}".`);
			}

			retInst = curNode
		}

		// Pop to next frame in the stack...
		frm = lst;
	}

	return retInst;
}

////////////////////////////////////////////////////////////////////////////////

function dbgInstToTxt(inInst)
{
	let retTxt = "";

	let stk = [ { inst: inInst, dpt: 0 } ];

	while (stk.length > 0)
	{
		const {inst, dpt} = stk.pop();

		const { label, value, err, msm } = inst;

		if (retTxt.length > 0) { retTxt += "\n"; }

		for (let ii=0; ii<dpt; ii++) { retTxt += "\t"; }

		retTxt += label;

		if (err)
		{
			retTxt += " <ERR>";
		}

		if (msm)
		{
			retTxt += " <MISMATCH>";
		}

		if (Array.isArray(value))
		{
			for (let jj=value.length - 1; jj>=0; jj--)
			{
				stk.push({ inst: value[jj], dpt: dpt + 1 });
			}
		}
		else
		{
			retTxt += ": " + value;
		}
	}

	return retTxt;
}

function dbgPosToTxt(inPos, inScr, inGrammar)
{
	let retTxt = "SCR: " + inScr;

	let grmStr = "";

	let posPt = inPos;

	while (posPt != null)
	{
		const { rdx, opt, pnt, itr, parent, base } = posPt;

		grmStr += "\n" + rdx + " -> ";

		const rule = inGrammar.rdx[rdx][opt];

		let rulStr = "";

		for (let ii=0; ii<rule.length; ii++)
		{
			if (rulStr.length > 0) { rulStr += " "; }

			if (ii == pnt)
			{
				rulStr += ". ";
			}

			const { ref, min, max } = rule[ii];

			rulStr += ref;

			if ((min != 1) && (max != 1))
			{
				rulStr += "{" + min + ", " + max + "}";
			}

			if ((ii == pnt) && (itr > 0))
			{
				rulStr += "<" + itr + ">";
			}
		}

		if (pnt >= rule.length)
		{
			rulStr += " .";
		}

		grmStr += rulStr;

		posPt = parent;
	}

	retTxt += grmStr;

	return retTxt;
}

////////////////////////////////////////////////////////////////////////////////


function parseSentence(inLine, inGrammar)
{
	let retInst = null;

	const root = inGrammar.kv["root"];

	let thrdPool = initializeThreadPool(inGrammar);

	let bestInst = null;
	let bestLen = 0;
	let bestScr;

	let stopper = 100000;

	while ((thrdPool.length > 0) &&
			(retInst == null))
	{
		const thdFrm = thrdPool.pop();

		const { scr, bad, elm, inst, pos, vpt } = thdFrm;

const dbgInst = dbgInstToTxt(instStackToObj(inst));
const dbgPos = dbgPosToTxt(pos, scr, inGrammar);
const ll = "PULL";

		if (isAtGrammarEnd(pos, inGrammar))
		{
			if (vpt >= inLine.length)
			{
				retInst = instStackToObj(inst);

const dbgInst = dbgInstToTxt(instStackToObj(bestInst));
const dbgPos = dbgPosToTxt(pos, scr, inGrammar);
const ll = "RET INST";

			}
			else if ((bestInst == null) ||
					(bestLen < vpt) ||
					((bestLen == vpt) && ((! bestScr) || (bestScr > scr))))
			{
				bestScr = scr;
				bestLen = vpt;
				bestInst = inst;

const dbgInst = dbgInstToTxt(instStackToObj(bestInst));
const dbgPos = dbgPosToTxt(pos, scr, inGrammar);
const ll = "BEST INST";

			}
		}
		else
		{
			const nxtThds = step(thdFrm, inGrammar, inLine);

			for (thd of nxtThds)
			{


const dbgInst = dbgInstToTxt(instStackToObj(thd.inst));
const dbgPos = dbgPosToTxt(thd.pos, thd.scr, inGrammar);
const ll = "THREAD";

				insertIntoThreadPool(thrdPool, thd);
			}
		}

		if (((--stopper <= 50000) && (bestInst)) ||
			(stopper <= 0))
		{
			break;
		}
	}

	if ((retInst == null) &&
		(bestInst != null))
	{
		retInst = instStackToObj(bestInst);
	}

const dbgInst = dbgInstToTxt(retInst);

	return retInst;
}


////////////////////////////////////////////////////////////////////////////////


// Stub for error handling – replace with your own implementation
function errOut(message)
{
	throw new Error(message);
}


////////////////////////////////////////////////////////////////////////////////
