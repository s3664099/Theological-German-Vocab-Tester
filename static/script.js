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

	for (var x=0;x<answers.length; x++) {

		if (attempt.value == answers[x].trim()) {
			correct = true;
		}
	}

	if (correct) {
		attempt.style.backgroundColor = "LightGreen";
		createNextButton(attempt);
	} else {
		attempt.style.backgroundColor = "pink";
	}
}

function reloadPage() {
	attempt.value = "";
	window.location.reload();
}

function showAnswer() {
	attempt = document.getElementById("input");
	const answer = document.getElementById("giveAnswer");
	answer.innerText=document.getElementById("eng").value;
	createNextButton(attempt);
}

function createNextButton() {
	const newButt = document.getElementById("reloadButton");
	const newButton = document.createElement("button");
	newButton.innerText = "Next Word";
	newButton.addEventListener("click",reloadPage);
	newButt.appendChild(newButton);
}