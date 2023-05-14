# Theological German Tester

This is a simple web based program to assist students learn theological German. It contains two sections
a word guess section which gives you a german word, and you have to guess the english word, and a match
where one column has german words, and the other column has english words.

Before anybody jumps up and screams 'But Duo-lingo' I might point out that Duo-Lingo is designed to learn
a language so that you can interact with people, and read basic phrases and signs. It isn't designed for
academia, which this is. In academia, you are generally wanting to read texts and understand the context
in the original language. Sometimes the language of these texts are quite old (compare modern stories with
Shakespeare).

The original idea was as a tool for some friends who were wanting to learn Theological German for their PhDs
however, that group ended up falling apart because, well, there aren't many people out there who need to learn
theological german. However, this can be used as a basis in case anybody else would like to build on it to
make it easier for students to learn languages academically.

Also, it should be noted that the words that are included were only from the first couple of sections of the
book that was being used. However, more words can be added, or different langauges can be Added.

### Potential Expansions

As mentioned, more words can be added to the current word list, or different langauges can be added as well.
I personally won't be doing this because, well, I have little to no time, and lots of other projects I want
to focus on.

Also, lessons can be added so that the users start with a small number of words, and as each lesson is
completed, more words can be added. 

Different types of challenges can be added as well. However, remember, that languages for academic purposes
are more for reading and understanding the text in the original context as opposed to communicating with
anybody or reading signs (though I do believe a part of my Ancient Greek course did involve translating
to Greek).

Users and a progressive score can be added as well.

## Installation

The webpage can be found [here](https://theological-german.ts.r.appspot.com/)

This is has been built using flask, so to run it from the command line, you type the following:

export FLASK_APP=main.py

flask run

You then open a browser at: http://127.0.0.1:5000

## Usage

There are two tabs at the top, one for guessing and one for matching. The guessing give you ten questions
a correct answer (all forms of the words) gives three points, a partial answer (only one form of the word)
gives one point, and an incorrect answer gives no points. Once that has been completed a score out of thirty
is displayed in a popup box.

The match gives 10 word pairs, and you need to match the correct pairs. It isn't working 100% as sometimes
if you click too fast, or change words, the selected word doesn't change. A correct matching gives you 1 point
but an incorrect match deducts a point. Once you have selected all of them, once again, a popup appears with
your score.

## License
A GNU public license has been attached.