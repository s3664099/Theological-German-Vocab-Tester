/*
File: Theological German Vocab Tester Template File
Author: David Sarkies
Initial: 25 April 2023
Update: 26 April 2023
Version: 1.1
*/

var wordlist = []

// Get the button container element
var buttonContainer = document.getElementById("button-container");

var wordlist = {{wordlist|tojson}}

for (var x=0;x<wordlist.length;x++) {

	german = wordlist[x][0][0]
	german = removeBrackets(german)
	german_count = wordlist[x][0][1]
	english = wordlist[x][1][0]
	english_count = wordlist[x][1][1]

	if (german == 'd.h.') {
		german = 'das Heisst';
	}

	// Create a row element
	var row = document.createElement("div");
	row.classList.add("row");

	german_id = 'german_'+german_count;

	// Create a primary button element
	var primaryButton = document.createElement("button");
	primaryButton.classList.add("button", "button-primary");
	primaryButton.setAttribute('id',german_id);
	primaryButton.textContent = german;
	primaryButton.onclick = function() {
  		german_select(this);
	};

	english_id = 'english_'+english_count;

	// Create a secondary button element
	var secondaryButton = document.createElement("button");
	secondaryButton.classList.add("button", "button-primary");
	secondaryButton.setAttribute('id',english_id);
	secondaryButton.textContent = english;
	secondaryButton.onclick = function() {
  		english_select(this);
	};	

	// Set the width of the buttons
	primaryButton.style.width = "150px";
	secondaryButton.style.width = "150px";

	// Add the buttons to the row
	row.appendChild(primaryButton);
	row.appendChild(secondaryButton);
			
	// Add the row to the container
	buttonContainer.appendChild(row);

}

//Removes brackets and everything between them.
function removeBrackets(str) {
  return str.replace(/\s*\([^)]*\)/g, "");
}

//25 April 2023 - Created File
//26 April 2023 - Added code that loads the words and builds the buttons that hold the words.
		
