/*
File: Theological German Vocab Tester
Author: David Sarkies
Initial: 22 January 2023
Update: 4 May 2023
Version: 1.6
*/

var score = 0

//Checks if the answer is correct
function checkAnswer() {

	//Gets the answers and the attempts
	answer = document.getElementById("eng");
	answers = answer.value.split(",");
	attempt = document.getElementById("input");
	attempts = attempt.value.split(",")
	attempt.readonly = true;

	//Checks how correct the answer is
	var correct = compareAnswers(answers,attempts);
	var correctColour = ""

	//Sets the input as green of all the words guessed
	if (correct == 2) {
		correctColour = "LightGreen";
		increaseScore(3)

	//sets it as yellow if only a few
	} else if (correct == 1) {
		correctColour = "yellow";
		increaseScore(1)

	//Sets it red if it was wrong
	} else {
		correctColour = "pink";
	}

	addTupleToInput(document.getElementById("ger").innerHTML,answer.value, correctColour)

	if (wordlist.length == 0) {
		openPopup(30)
	} else {
		updateWords()		
	}

}

//Moves the words above and creates a new input.
//Sets the colour to display whether it worked or not
function addTupleToInput(german,english,colour) {
  var div = document.createElement("div");
  div.innerHTML = "<p>" + german + " : " + english + "</p>";
  div.style.backgroundColor = colour;
  var input = document.getElementById("eng");
  input.parentNode.insertBefore(div, input);
}

//Updates the score
function increaseScore(number) {
	score +=number;
	document.getElementById("score").innerHTML = score;
}

//Function that goes through the answers and the attempts, and checks which are correct
function compareAnswers(answers,attempts) {

	//Sets the correct value, and the number correct to 0.
	var correct = 0;
	var numberCorrect = 0;

	//Goes through each of the answers
	for (var x=0;x<answers.length; x++) {

		correctNumber = -1;

		//Goes through each of the attempts
		for (var y=0;y<attempts.length;y++) {

			//If an attempt is correct, a correct is marked
			if (attempts[y].trim() == answers[x].trim()) {
				numberCorrect ++;
				correctNumber = y;
				correct = 1;
			}
		}

		//The correct answer is removed from the attempt array
		if (correctNumber != -1) {
			attempts.splice(correctNumber,1);
		}
	}

	//If all are correct, the number is set
	if (numberCorrect == answers.length) {
		correct = 2;
	}

	return correct;
}

//Displays the correct answer
function showAnswer() {
	attempt = document.getElementById("input");
	const answer = document.getElementById("giveAnswer");
	answer.innerText=document.getElementById("eng").value;
	createNextButton(attempt);
}

//Creates a button to get the next question
function createNextButton() {
	const newButt = document.getElementById("reloadButton");
	const newButton = document.createElement("button");
	newButton.innerText = "Next Word";
	newButton.addEventListener("click",reloadPage);
	newButt.appendChild(newButton);
}

/*
22 January 2023 - Created File
5 April 2023 - Added new functions so that 10 words are tested every time, and a score is kept
11 April 2023 - Added script to display an iFrame for when all the questions have been answered
19 April 2023 - Moved the popup html to a separate file, and updated to code to handle it.
								Added check to check the size of the wordlist, and if it is empty opens the popup
								otherwise gets the next word.
25 April 2023 - Added code to place the score into the frame
4 May 2023 - Remove popup function and sent it to a separate file
*/