/*
File: Theological German Vocab Tester
Author: David Sarkies
Initial: 25 April 2023
Update: 25 April 2023
Version: 1.0
*/

var score = 0

// Get the button container element
var buttonContainer = document.getElementById("button-container");
		
// Loop through each row
for (var i = 0; i < 10; i++) {

	// Create a row element
	var row = document.createElement("div");
	row.classList.add("row");
			
	// Create a primary button element
	var primaryButton = document.createElement("button");
	primaryButton.classList.add("button", "button-primary");
	primaryButton.textContent = "Primary Button";
			
	// Create a secondary button element
	var secondaryButton = document.createElement("button");
	secondaryButton.classList.add("button", "button-secondary");
	secondaryButton.textContent = "Secondary Button";
			
	// Add the buttons to the row
	row.appendChild(primaryButton);
	row.appendChild(secondaryButton);
			
	// Add the row to the container
	buttonContainer.appendChild(row);
}

/*
25 April 2023 - Created file
*/