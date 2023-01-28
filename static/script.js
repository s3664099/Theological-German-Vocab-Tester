/*
File: Theological German Vocab Tester
Author: David Sarkies
Initial: 22 January 2023
Update: 22 January 2023
Version: 0.2
*/

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

	//Sets the input as green of all the words guessed
	if (correct == 2) {
		attempt.style.backgroundColor = "LightGreen";
		createNextButton(attempt);

	//sets it as yellow if only a few
	} else if (correct == 1) {
		attempt.style.backgroundColor = "yellow";

	//Sets it red if it was wrong
	} else {
		attempt.style.backgroundColor = "pink";
	}
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

//Refreshes the page
function reloadPage() {
	attempt.value = "";
	window.location.reload();
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