
var oRunes;
var oSpells;
funInitialize();

function funRecalcRunes() {
	return;
	gel('textOutput').value = "";
	var asOut = [];
	for (var iCtr = 0; iCtr < oSpells.length; iCtr++) {
		if (oRunes[oSpells[iCtr][0]] == false) {continue;}
		if (oRunes[oSpells[iCtr][1]] == false) {continue;}
		if (oRunes[oSpells[iCtr][2]] == false) {continue;}
		asOut.push(oSpells[iCtr][0] + " " + oSpells[iCtr][1] + " " + oSpells[iCtr][2] + " - " + oSpells[iCtr][3]);
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
		"F": false,
		"G": false,
		"H": false,
		"I": false,
		"K": false,
		"L": false,
		"O": false,
		"W": false,
		"S": false,
		"T": false,
		"D": false,
		"E": false
	};

	oSpells = [];
	oSpells.push(["L", "F", "S", "Life From Stone"]);
	oSpells.push(["S", "F", "C", "Solomon's Flying Carpet"]);
	oSpells.push(["T", "S", "K", "The Skeleton Key"]);
	oSpells.push(["D", "B", "G", "Dead Be Gone"]);
	oSpells.push(["T", "H", "F", "Treasure Hunter's Friend"]);
	oSpells.push(["D", "S", "B", "Double Score Bonus"]);
	oSpells.push(["P", "A", "D", "Potency and Durability"]);
	oSpells.push(["T", "P", "I", "The Phoenix Incantation"]);
	oSpells.push(["S", "O", "D", "Sigil Of Death"]);
	oSpells.push(["T", "E", "B", "Tri Elemental Blast"]);
	oSpells.push(["E", "C", "G", "Enchanted Coin Geyser"]);
	oSpells.push(["E", "I", "S", "Extra Item Stock"]);
	//oSpells.push(["T", "T", "F", "The True Fist"]);
	oSpells.push(["C", "S", "W", "Call Sylphide's Wind"]);
	//oSpells.push(["S", "B", "S", "Strength Beyond Strength"]);
	oSpells.push(["P", "T", "F", "Petrify The Flesh"]);
	oSpells.push(["O", "T", "S", "Open the Sesame"]);
	oSpells.push(["D", "I", "E", "D I E"]);
	oSpells.push(["S", "O", "L", "Salve of Life"]);
	oSpells.push(["G", "W", "S", "Generate Weapon Stash"]);
}

function gel(vsId) {return document.getElementById(vsId);}