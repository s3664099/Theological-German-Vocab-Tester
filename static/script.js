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

		if (attempt.value == answers[x].trim()) {
			correct = true;
		}
	}

	if (correct) {
		attempt.style.backgroundColor = "LightGreen";
		const newButt = document.getElementById("reloadButton");
		const newButton = document.createElement("button");
		newButton.innerText = "Next Word";
		newButton.addEventListener("click",reloadPage);
		newButt.appendChild(newButton);

	} else {
		attempt.style.backgroundColor = "pink";
	}
}

function reloadPage() {
	window.location.reload();
}