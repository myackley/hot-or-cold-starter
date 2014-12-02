
$(document).ready(function(){

	var generate = function() {
		generatedNum = Math.floor((Math.random()*100)+1);
		console.log("The number: "+generatedNum);
		return generatedNum;
	};

	var resetUI = function() {
		$("#guessList").empty();
		$("#feedback").text("Make your guess!");
		console.log("cleared");
	};

	var newGame = function() {
		resetUI();
		generatedNum = generate();
	};

	var displayGuess = function() {
		$("#guessList").append("<li>" + userguess + "</li>");
		return userguess;
	};

	var generatedNum = generate();
	var guessCnt = 0 // guess counter

	$(".button").on("click", function(event) {
		event.preventDefault();

		guessCnt++;

		// store guess
		userguess = $("#userGuess").val(); //guess


		// validate guess
		if (userguess%1 != 0) {
			$("#feedback").text("You are not allowed to enter decimals"); // decimal?
		} else if ($.type(userguess) === "string") {
			$("#feedback").text("You are not allowed to enter text"); // string?
		} else if (userguess < 1 || userguess > 100) {
			$("#feedback").text("Please enter a number between 1 and 100"); // between 1 and 100?
		} else {
			// cold, warm, warmer, hot
			// if () {

			// } else {

			// }
		}

		// display guess
		displayGuess();

		// push to html
		$("#count").text(guessCnt); // ... to counter
		
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


