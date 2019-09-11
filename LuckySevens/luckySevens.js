function playGame() {
	var begBet = Number(document.forms["luckySevens"]["begBet"].value);
	if (begBet <= 0) {
		alert("Starting bet must be greater than zero.");
		document.forms["luckySevens"]["begBet"].value = "";
		document.forms["luckySevens"]["begBet"].focus();
		return false;
	}
	var betArray = [begBet];
	var rollCounter = 0;
	for (var gameMoney = begBet; gameMoney >= 1; rollCounter++) {
		dieOne = Math.ceil(Math.random() * (1 + 6 - 1));		
		dieTwo = Math.ceil(Math.random() * (1 + 6 - 1));
		if (Number(dieOne + dieTwo) == 7) {
			gameMoney += 4;
			betArray[betArray.length] = gameMoney;
		} else {
			gameMoney -= 1;
			betArray[betArray.length] = gameMoney;
		}
	}
	
	var maxWin = 0;
	for (var indexCounter = 0; indexCounter < betArray.length; indexCounter++) {
		if (betArray[indexCounter] > maxWin) {
			maxWin = betArray[indexCounter];
		}
	}
	document.getElementById("results").style.display = "block";
	//Used .toFixed(2) function to create a string of 2 decimals even though the game only recognizes whole numbers.
	document.getElementById("startBet").innerText = ("$" + begBet.toFixed(2));
	document.getElementById("totalRolls").innerText = rollCounter;
	document.getElementById("highAmount").innerText = ("$" + maxWin.toFixed(2));
	document.getElementById("highRollCount").innerText = betArray.indexOf(maxWin);
	document.getElementById("submitButton").innerText = "Play Again";
	document.forms["luckySevens"]["begBet"].focus();
	return false;
}