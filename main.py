"""
File: Theological German Vocab Tester
Author: David Sarkies
Initial: 22 January 2023
Update: 11 May 2023
Version: 1.5
"""

from flask import Flask, render_template, request, session, jsonify, make_response
import os
import vocab
import random
import copy

app = Flask(__name__,
	static_folder = 'static')
app.secretkey = os.environ.get("FLASK_API_KEY")

word_list = list(vocab.vocabulary.items())

#Generates the main screen
@app.route('/')
def main():

	new_list = get_list()

	return render_template("index.html",wordlist = new_list)

@app.route('/match')
def match():

	word_list = get_list()
	list_one = []
	list_two = []

	count = 0

	for x in word_list:

		list_one.append((x[0],count))
		list_two.append((select_word(x[1]),count))
		count +=1

	random.shuffle(list_one)

	new_list = [(list_one[i], list_two[i]) for i in range(len(list_one))]
	
	return render_template("match.html",wordlist = new_list)

#Splits the string based on commas and returns a random one.
def select_word(word):

    words = word.split(",")
    if len(words) == 1:
        return words[0]
    else:
        return random.choice(words)

#Gets a list of 10 random words
def get_list():

	#Creates a copy of the list
	copy_list = copy.deepcopy(word_list)
	new_list = []

	for x in range(10):
		random_index = random.randint(0,len(copy_list)-1)
		random_element = copy_list.pop(random_index)
		new_list.append(random_element)

	return new_list	

"""
22 January 2023 - Created File
5 April 2023 - Changed file so that a list of 10 word pairs are sent through each time
25 April 2023 - Added route for the match page. Wrote code for match page. Added code to select a random word
                if there are multiple words available
11 May 2023 - Removed the print statement displaying the words.
"""
