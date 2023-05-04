/*
File: Theological German Vocab Tester Template File
Author: David Sarkies
Initial: 4 May 2023
Update: 4 May 2023
Version: 1.1
*/

function openPopup(maxScore) {

	//Creates the popup and loads the HTML content
  var overlay = document.getElementById("overlay");
  overlay.style.display = "flex";
  var myFrame = document.getElementById("myFrame");
  myFrame.src = "static/endGameFrame.html";

  //Adds a function call to the button in the popup
	myFrame.addEventListener("load", function() {
		frame = myFrame.contentWindow.document;
		frame.getElementById("score").innerHTML = document.getElementById("score").innerHTML;
  		frame.getElementById("max_score").innerHTML = maxScore;

  		//Adds dropdown list to select next page
		var selectDropdown = document.createElement("select");
		selectDropdown.setAttribute('id', 'dropdown');

		var optionOne = document.createElement("option");
		optionOne.value = "guess";
		optionOne.text = "Guess Word";
		selectDropdown.add(optionOne);

		var optionTwo = document.createElement("option");
		optionTwo.value = "match";
		optionTwo.text = "Match";
		selectDropdown.add(optionTwo);

		// Add the select dropdown to the frame
		frame.getElementById("dropdown-container").appendChild(selectDropdown);

  		frame.getElementById("button").addEventListener("click", function() {
  			var dropdownValue = frame.getElementById("dropdown").value;
    		window.parent.reloadPage(dropdownValue); 
  		});
	});
}

//Refreshes the page
function reloadPage(dropdownValue) {

	//get the domain name
	const domain = window.location.href.split('/')[0] + '//' + window.location.hostname;

	//Checks what has been selected and directs the user there
	if (dropdownValue == "guess") {
		attempt.value = "";
		window.location.href = domain+":5000/"
	} else if (dropdownValue == "match") {
		attempt.value = "";
		window.location.href = domain+":5000/match"
	}
}

/*
4 May 2023 - Initial File
*/