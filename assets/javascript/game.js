var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

	var wins = 0;
	var losses = 0;
	var guessesLeft = ["9", "8", "7", "6", "5", "4", "3", "2", "1"];
	var guessesSoFar = [string];	
	var totalGuesses = 9;



	document.onkeyup = function(event){

		var userGuess = event.key;
		var guessesSoFar = event.key;
		var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

		if ((userGuess) === (computerGuess)){
			wins++ && guessesLeft--;
		}

		if ((userGuess) !== (computerGuess)) {
			losses++ & guessesLeft --;
		}

		if  ((var guessesLeft) == 9){
			guessesLeft--;
		}


	 html = 
			"<p>Wins:" + wins + "</p>" +
			"<p>Losses:" + losses + "</p>" +
			"<p>Guesses Left:" + guessesLeft + "</p>" +
			"<p>Your guesses so far:" + guessesSoFar + "</p";

			document.querySelector("#psychic").innerHTML = html;


		
	}


