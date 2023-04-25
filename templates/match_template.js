/*
File: Theological German Vocab Tester Template File
Author: David Sarkies
Initial: 25 April 2023
Update: 25 April 2023
Version: 1.0
*/

var wordlist = []

{% for english,german in wordlist %}
	words = [{{english}},{{german}}]
	wordlist.push(words)
{% endfor %}

//5 April 2023 - Created File
