/*
File: Theological German Vocab Tester
Author: David Sarkies
Initial: 22 January 2023
Update: 11 April 2023
Version: 1.3
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

	//Sets the input as green of all the words guessed
	if (correct == 2) {
		attempt.style.backgroundColor = "LightGreen";
		increaseScore(3)

	//sets it as yellow if only a few
	} else if (correct == 1) {
		attempt.style.backgroundColor = "yellow";
		increaseScore(1)

	//Sets it red if it was wrong
	} else {
		attempt.style.backgroundColor = "pink";
	}

	addTupleToInput(document.getElementById("ger").innerHTML,answer.value)
	updateWords()
	openPopup()
}

//Moves the words above and creates a new input.
function addTupleToInput(german,english) {
  var div = document.createElement("div");
  div.innerHTML = "<p>" + german + " : " + english + "</p>";
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

function openPopup() {
  var overlay = document.getElementById("overlay");
  overlay.style.display = "flex";
  var myFrame = document.getElementById("myFrame").contentWindow.document;
  var frameContent = "<html><head><style>body { background-color: white; } h1,h3 { text-align: center; } "
  frameContent += "#button { display: block; margin: 0 auto; }</style>"
  frameContent +="</head><body><h1>Congratulations</h1><h3>You win</h3><button id='button'>"
  frameContent +="Close</button></body></html>"
  myFrame.write(frameContent);
  myFrame.close();
	myFrame.getElementById("button").addEventListener("click", function() {
  window.parent.reloadPage(); 
	});
}

/*
22 January 2023 - Created File
5 April 2023 - Added new functions so that 10 words are tested every time, and a score is kept
11 April 2023 - Added script to display an iFrame for when all the questions have been answered
*/