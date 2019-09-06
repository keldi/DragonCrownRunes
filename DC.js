
var oRunes; /* Global variable for storing whether a rune is active. */
var oSpells; /* Global variable for the spell combos. */


//Auto clear stuff.
var iLastChanged = (new Date()).getTime(); /* Last time something changed. */
var bNeedClear = false;  /* Does a clear need to happen? */
var c_iInterval = 5000; /* Time that the interface waits before clearing runes. */
var c_iTimeout = 500; /* Time that the interface waits before clearing runes. */
var bAutoClear = true; /* Is autoclearing enabled? */
var oTimer = window.setTimeout(funAutoClearRunes, c_iTimeout); /* Reference for the setTimeout. */

funInitialize();

function gel(vsId) {return document.getElementById(vsId);}

function funToggleAutoClear() {
	if (bAutoClear == true) {
		bAutoClear = false;
		gel("btnAutoClear").textContent = "Auto Clear (OFF)";
		window.clearTimeout(oTimer);
		return;
	}
	if (bAutoClear == false) {
		bAutoClear = true;
		gel("btnAutoClear").textContent = "Auto Clear (ON)";
		oTimer = window.setTimeout(funAutoClearRunes, c_iTimeout);
		return;
	}
}

function funRecalcRunes() {
	gel('textOutput').value = "";
	var asOut = [];
	for (var iCtr = 0; iCtr < oSpells.length; iCtr++) {
		if (oRunes[oSpells[iCtr][0]] == false) {continue;}
		if (oRunes[oSpells[iCtr][1]] == false) {continue;}
		asOut.push(oSpells[iCtr][2]);
	}
	gel('textOutput').value = asOut.join("\n");
	iLastChanged = (new Date()).getTime();
}

function funAutoClearRunes() {
	if (bAutoClear == true && bNeedClear == true) {
		if (((new Date()).getTime() - iLastChanged) >= c_iInterval) {
			funClearRoom();
		}
	}
	oTimer = window.setTimeout(funAutoClearRunes, c_iTimeout);
}

function funSelectRune(vsRune) {
	bNeedClear = true;
	if (oRunes[vsRune] == false) {oRunes[vsRune] = true;} else {oRunes[vsRune] = false;}
	funFormatRune(vsRune);
	funRecalcRunes();
}

function funDisableRune(vsRune) {
	if (oRunes[vsRune] == true) {
		oRunes[vsRune] = false;
		funFormatRune(vsRune);
	}
	return;
}

function funFormatRune(vsRune) {
	if (oRunes[vsRune] == false) {gel('tdRune' + vsRune).className = "unselected";}
	else if (oRunes[vsRune] == true) {gel('tdRune' + vsRune).className = "selected";}
	return;
}

function funClearRoom() {
	bNeedClear = false;
	funDisableRune("A");
	funDisableRune("B");
	funDisableRune("C");
	funDisableRune("F");
	funDisableRune("G");

	funDisableRune("H");
	funDisableRune("I");
	funDisableRune("K");
	funDisableRune("L");
	funDisableRune("O");

	funDisableRune("P");
	funDisableRune("S");
	funDisableRune("T");
	funDisableRune("W");
	funRecalcRunes();
}

function funPrintDebug1() {alert(oRunes);}
function funPrintDebug2() {alert(oSpells);}

function funInitialize() {
	//Tracks if the selected rune is "active".
	oRunes = {
		"A": false,
		"B": false,
		"C": false,
		"D": false,
		"F": false,
		"G": false,
		"H": false,
		"I": false,
		"K": false,
		"L": false,
		"O": false,
		"P": false,
		"S": false,
		"T": false,
		"W": false
	};

	/*
	//Version 1 of the spells array.  Deprecated when I decided to assume players have all 4 runes.
	oSpells = [];
	oSpells.push(["L", "F", "S", "L F S - Life From Stone"]);
	oSpells.push(["S", "F", "C", "S F C - Solomon's Flying Carpet"]);
	oSpells.push(["T", "S", "K", "T S K - The Skeleton Key"]);
	oSpells.push(["D", "B", "G", "D B G - Dead Be Gone"]);
	oSpells.push(["T", "H", "F", "T H F - Treasure Hunter's Friend"]);
	oSpells.push(["D", "S", "B", "D S B - Double Score Bonus"]);
	oSpells.push(["P", "A", "D", "P A D - Potency and Durability"]);
	oSpells.push(["T", "P", "I", "T P I - The Phoenix Incantation"]);
	oSpells.push(["S", "O", "D", "S O D - Sigil Of Death"]);
	oSpells.push(["T", "E", "B", "T E B - Tri Elemental Blast"]);
	oSpells.push(["E", "C", "G", "E C G - Enchanted Coin Geyser"]);
	oSpells.push(["E", "I", "S", "E I S - Extra Item Stock"]);
	oSpells.push(["T", "T", "F", "T T F - The True Fist"]);
	oSpells.push(["C", "S", "W", "C S W - Call Sylphide's Wind"]);
	oSpells.push(["S", "B", "S", "S B S - Strength Beyond Strength"]);
	oSpells.push(["P", "T", "F", "P T F - Petrify The Flesh"]);
	oSpells.push(["O", "T", "S", "O T S - Open the Sesame"]);
	oSpells.push(["D", "I", "E", "D I E - DIE"]);
	oSpells.push(["S", "O", "L", "S O L - Salve of Life"]);
	oSpells.push(["G", "W", "S", "G W S - Generate Weapon Stash"]);
	*/


	//Assuming player always has all 4 rune stones, made revisions.
	//Some of these are doubled up to account for players having 2 player runes; like "TSK" only listing KK.
	//Lame workaround but what the hell.
	oSpells = [];
	oSpells.push(["L", "F", "L F S - Life From Stone"]);
	oSpells.push(["F", "C", "S F C - Solomon's Flying Carpet"]);
	oSpells.push(["K", "K", "T S K - The Skeleton Key"]);
	oSpells.push(["B", "G", "D B G - Dead Be Gone"]);
	oSpells.push(["H", "F", "T H F - Treasure Hunter's Friend"]);
	oSpells.push(["B", "B", "D S B - Double Score Bonus"]);
	oSpells.push(["P", "A", "P A D - Potency and Durability"]);
	oSpells.push(["P", "I", "T P I - The Phoenix Incantation"]);
	oSpells.push(["O", "O", "S O D - Sigil Of Death"]);
	oSpells.push(["B", "B", "T E B - Tri Elemental Blast"]);
	oSpells.push(["C", "G", "E C G - Enchanted Coin Geyser"]);
	oSpells.push(["I", "I", "E I S - Extra Item Stock"]);
	oSpells.push(["T", "F", "T T F - The True Fist"]);
	oSpells.push(["C", "W", "C S W - Call Sylphide's Wind"]);
	oSpells.push(["B", "S", "S B S - Strength Beyond Strength"]);
	oSpells.push(["P", "F", "P T F - Petrify The Flesh"]);
	oSpells.push(["O", "O", "O T S - Open the Sesame"]);
	oSpells.push(["I", "I", "D I E - DIE"]);
	oSpells.push(["O", "L", "S O L - Salve of Life"]);
	oSpells.push(["G", "W", "G W S - Generate Weapon Stash"]);

}

