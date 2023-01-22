/*
File: Theological German Vocab Tester
Author: David Sarkies
Initial: 22 January 2023
Update: 22 January 2023
Version: 0.1
*/

function checkAnswer() {
	answer = document.getElementById("eng");
	answers = answer.value.split(",");
	attempt = document.getElementById("input");
	attempt.readonly = true;

	var correct = false;

	console.log(attempt);

	for (var x=0;x<answers.length; x++) {

		if (attempt.value == answers[x]) {
			correct = true;
		}
	}

	if (correct) {
		attempt.style.backgroundColor = "LightGreen";
	} else {
		alert("Wrong!!!");
		attempt.style.backgroundColor = "pink";
	}
}