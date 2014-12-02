
$(document).ready(function(){

	var generate = function() {
		generatedNum = Math.floor((Math.random()*100)+1);
		return generatedNum;
	};

	var resetUI = function() {
		$("#feedback").text("Make your Guess!");
		$("#userGuess").val("");
		$("#count").text("0");
		$("#guessList").empty();
		guessCnt = 0;
	};

	var displayGuess = function() {
		$("#guessList").append("<li>" + userguess + "</li>");
	};

	var newGame = function() {
		resetUI(); // clear out ui and reset counter
		generatedNum = generate(); // generate new number
	};

	var generatedNum = generate();
	var guessCnt = 0; // guess counter

	$(".button").on("click", function(event) {
		event.preventDefault();

		// +1 to count
		guessCnt++;
		// store guess
		userguess = parseInt($("#userGuess").val(),10); //guess

		// validate guess
		if (userguess%1 != 0) {
			$("#feedback").text("You are not allowed to enter decimals"); // decimal?
		} else if ($.type(userguess) === "string") {
			$("#feedback").text("You are not allowed to enter text"); // string?
		} else if (userguess < 1 || userguess > 100) {
			$("#feedback").text("Please enter a number between 1 and 100"); // between 1 and 100?
		} else {
			// cold, warm, warmer, hot
			if (userguess == generatedNum) {
				$("#feedback").text("Nailed it!");
			} else if (Math.abs(generatedNum-userguess) < 3) {
				$("#feedback").text(userguess + " is hot!");
			} else if (Math.abs(generatedNum-userguess) < 9) {
				$("#feedback").text(userguess + " is getting warmer!");
			} else if (Math.abs(generatedNum-userguess) < 15) {
				$("#feedback").text(userguess + " is cold.");
			} else if (Math.abs(generatedNum-userguess) < 25) {
				$("#feedback").text(userguess + " is really cold.");
			} else if (Math.abs(generatedNum-userguess) < 35) {
				$("#feedback").text(userguess + " is freezing cold.");
			} else {
				$("#feedback").text("Colder than winter in Antartica");
			}
		}

		// display guess
		displayGuess();

		// push count to html
		$("#count").text(guessCnt);
		
	});

	$("nav .new").on("click", function() {
		newGame();
	});



	/*--- Display information modal box ---*/
	$(".what").click(function(){
		$(".overlay").fadeIn(1000);

	});

	/*--- Hide information modal box ---*/
	$("a.close").click(function(){
		$(".overlay").fadeOut(1000);
	});

});


