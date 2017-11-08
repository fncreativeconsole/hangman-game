var words = ["activist", "petition","sit-in","protest","justice", "#blacklivesmatter","movement",];
var randomWord = "";
var lettersInRandomWord = [];
var numBlanks = 0
var numGuesses = 9;
var	guessing = [];
var	wrongGuesses = [];

//pushes info from here to the html




function game() {
	//clears old guesses stuff
	numGuesses = 9;
	guessing = [];
	wrongGuesses = [];

	//choose a random word from the list and make into blanks
	randomWord = words[Math.floor(Math.random() * words.length)];
	lettersInRandomWord = randomWord.split("");
	numBlanks = lettersInRandomWord.length;

	for (var i = 0; i < numBlanks; i++) {
		guessing.push("_");	


	};

		$("#guessesrem").append(numGuesses);
		$("#current-word").append(guessing.join(" "));
		$("#letters-guessed").append(wrongGuesses.join(" "));	

document.onkeyup = function(event) {
	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	wordCheck(letterGuessed);

//checks if the letter is correct and replaces the blank with the letter.

	function wordCheck(letterGuessed) {
	for (var i = 0; i < lettersInRandomWord; i++) {
		if (lettersInRandomWord[i] === letterGuessed) {
			guessing[i] = letterGuessed;
		}
		else {
			wrongGuesses.push(letter);
			numGuesses--;
		}	
	};

	};	
};

	if (lettersInRandomWord.toString() === guessing.toString()){
		var winCounter = $("#wins");
		winCounter++;
		alert("You win!");
		game();
		$("#guessesrem").append(numGuesses);
		$("#current-word").append(guessing.join(" "));
		$("#letters-guessed").append(wrongGuesses.join(" "));
	}
	else if (numGuesses === 0) {
		var lossCounter = $("#losses");
		lossCounter++;
		alert("You lose :(");
		game();
		$("#guessesrem").append(numGuesses);
		$("#current-word").append(guessing.join(" "));
		$("#letters-guessed").append(wrongGuesses.join(" "));
	};


};
//starts the game
	game();
//on click of letter, trigger function that compares letter to words








