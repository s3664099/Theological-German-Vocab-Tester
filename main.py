"""
File: Theological German Vocab Tester
Author: David Sarkies
Initial: 22 January 2023
Update: 5 April 2023
Version: 1.2
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

	#Creates a copy of the list
	copy_list = copy.deepcopy(word_list)
	new_list = []

	for x in range(10):
		random_index = random.randint(0,len(copy_list)-1)
		random_element = copy_list.pop(random_index)
		new_list.append(random_element)

	return render_template("index.html",wordlist = new_list)

@app.route('/match')
def match():

	return render_template("match.html")

"""
22 January 2023 - Created File
5 April 2023 - Changed file so that a list of 10 word pairs are sent through each time
25 April 2023 - Added route for the match page
"""
