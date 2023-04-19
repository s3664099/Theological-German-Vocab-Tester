/*
File: Theological German Vocab Tester Template File
Author: David Sarkies
Initial: 5 April 2023
Update: 5 April 2023
Version: 1.1
*/

var wordlist = []

{% for english,german in wordlist %}
	words = ["{{english}}","{{german}}"]
	wordlist.push(words)
{% endfor %}

updateWords()

//Removes a word couple from the list and adds them to the inputs
function updateWords() {

	var words = wordlist[0]
	wordlist.splice(0,1)
	//console.log(words)
	document.getElementById("eng").value = words[1]
	document.getElementById("ger").innerHTML = words[0]
	document.getElementById("input").value = ""
	document.getElementById("input").style.backgroundcolour = "white"
}

//5 April 2023 - Created File
