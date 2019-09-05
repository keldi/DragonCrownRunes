
var oRunes;
var oSpells;
funInitialize();

function funRecalcRunes() {
	gel('textOutput').value = "";
	var asOut = [];
	for (var iCtr = 0; iCtr < oSpells.length; iCtr++) {
		if (oRunes[oSpells[iCtr][0]] == false) {continue;}
		if (oRunes[oSpells[iCtr][1]] == false) {continue;}
		asOut.push(oSpells[iCtr][2]);
	}
	gel('textOutput').value = asOut.join("\n");
}

function funSelectRune(vsRune) {
	if (oRunes[vsRune] == false) {oRunes[vsRune] = true;} else {oRunes[vsRune] = false;}
	funFormatRune(vsRune);
	funRecalcRunes();
}

function funDisableRune(vsRune) {
	oRunes[vsRune] = false;
	funFormatRune(vsRune);
	return;
}

function funFormatRune(vsRune) {
	if (oRunes[vsRune] == false) {gel('tdRune' + vsRune).className = "unselected";}
	else if (oRunes[vsRune] == true) {gel('tdRune' + vsRune).className = "selected";}
	return;
}

function funClearRoom() {
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

function gel(vsId) {return document.getElementById(vsId);}