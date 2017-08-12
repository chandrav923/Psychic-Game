var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

	var wins = 0;
	var losses = 0;
	var guessesLeft = 9;
	var guessesSoFar = [];
		var totalGuesses = 9;
	
	
	
		document.onkeyup = function(event){
	
			var userGuess = event.key;
			guessesSoFar += (userGuess) + (" ");
		var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
		

		if ((userGuess) === (computerGuess)){
			wins+=1;
			newGame();
		}

		console.log(computerGuess)

		if ((userGuess) !== (computerGuess)) {
			guessesLeft --;
			if ((guessesLeft) == 0) {
				losses+= 1;
				newGame();
				

			}
			


		}

		function newGame() {
  			guessesLeft = 10;
  			guessesSoFar = [];
  			computerGuess = computerChoices[Math.floor(Math.random() * arrayOfLetters.length)];
}

	 html = 
			"<p>Wins:" + wins + "</p>" +
			"<p>Losses:" + losses + "</p>" +
			"<p>Guesses Left:" + guessesLeft + "</p>" +
			"<p>Your guesses so far:" + guessesSoFar + "</p";

			document.querySelector("#psychic").innerHTML = html;


		
	}


