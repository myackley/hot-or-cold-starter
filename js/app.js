
$(document).ready(function(){

	var generatedNum;
	var guessCnt;
	var pastguesses;

	var generate = function() {
		generatedNum = Math.floor((Math.random()*100)+1);
		console.log("The number: "+generatedNum);
		return generatedNum;
	}
	var newGame = function() {
		generate();
		clearUI();
	}
	var clearUI = function() {
		// |-- reset variables
		var guessCnt = $("#count").text("0");
		// |-- clear ui
		$("#guessList li").remove();
		console.log("cleared");
	}

	var checkGuesses = function(pnum,unum) {
		if (pnum.val() == unum) { // already guessed
			return false; // matches
		} else {
			return true; // good to go
		}
	};

	var displayGuess = function(num) {
		$("#guessList").append("<li>" + num + "</li>");
	};

	$("form").on("submit", function(event) {
		event.preventDefault();
		//init variables
		userguess = $("#userGuess").val(); //guess
		guessCnt = $("#count").text(); // guess counter
		pastguesses = $("#guessList").children("li");

		//	see if guessed alread or no guesses exist
		checkGuesses(pastguesses,userguess);

		// |-- validate guess
		//      |-- already guessed? => checkGuesses==false

		//      |-- string?
		//      |-- decimal?

		// |-- if/else for cold, warm, warmer, hot

		// push to html
		displayGuess(userguess);
		
	});

	$(".new").on("click", newGame());



	/*--- Display information modal box ---*/
	$(".what").click(function(){
		$(".overlay").fadeIn(1000);

	});

	/*--- Hide information modal box ---*/
	$("a.close").click(function(){
		$(".overlay").fadeOut(1000);
	});

});


