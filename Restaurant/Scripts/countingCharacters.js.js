function countingCharacters(stringToCount){
// The length property has been mentioned in
//The Logging Letter Exercise in Lession 4
console.log (stringtoCount + " has " +
stringToCount.length + " character.");
}
function countingCharacters2(stringToCount, characterToFind) {
	// Let's count the number of times a character appears in a string
	//We will look at each one-by-one with the help of a for loop
	var characterCount = 0;
	for (var characterPosition = 0;
	characterPosition < stringtoCount.length;
	characterPosition++) {
		if (stringToCount[characterPosition] == characterToFind) {
			characterCount++;
		}
	}
	console.log("string to search in: " + stringToCount);
	console.log("Character to find: " + characterToFind);
	console.log("Number of time the character appears: " + characterCount);
}