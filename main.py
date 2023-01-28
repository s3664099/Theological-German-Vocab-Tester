"""
File: Theological German Vocab Tester
Author: David Sarkies
Initial: 22 January 2023
Update: 23 January 2023
Version: 0.1
"""

from flask import Flask, render_template, request, session, jsonify, make_response
import os
import vocab
import random

app = Flask(__name__,
	static_folder = 'static')
app.secretkey = os.environ.get("FLASK_API_KEY")

#Generates the main screen
@app.route('/')
def main():

	#Picks a random work from the vocab list.
	german,english = random.choice(list(vocab.vocabulary.items()))

	return render_template("index.html",german=german,english=english)
