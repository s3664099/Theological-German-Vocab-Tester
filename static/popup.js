/*
File: Theological German Vocab Tester Template File
Author: David Sarkies
Initial: 4 May 2023
Update: 4 May 2023
Version: 1.1
*/

function openPopup() {

	//Creates the popup and loads the HTML content
  var overlay = document.getElementById("overlay");
  overlay.style.display = "flex";
  var myFrame = document.getElementById("myFrame");
  myFrame.src = "static/endGameFrame.html";

  //Adds a function call to the button in the popup
	myFrame.addEventListener("load", function() {
		frame = myFrame.contentWindow.document;
		frame.getElementById("score").innerHTML = document.getElementById("score").innerHTML;
  	frame.getElementById("button").addEventListener("click", function() {
    window.parent.reloadPage(); 
  	});
	});
}

/*
4 May 2023 - Initial File
*/