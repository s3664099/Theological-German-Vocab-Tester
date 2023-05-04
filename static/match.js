/*
File: Theological German Vocab Tester
Author: David Sarkies
Initial: 25 April 2023
Update: 3 May 2023
Version: 1.2
*/

var score = 0;
var match = 10;
var german_button = '';
var english_button = '';

//Function trigger when German Button Selected
function german_select(button_id) {

  button_id = button_id.id;
  var button = document.getElementById(button_id);

  // Change color of clicked button to grey
  button.style.backgroundColor = 'grey';

  if (german_button == '') {

    // First button clicked
    german_button = button_id;

  } else {
    // Another button already selected
    // Change color of previously selected button back to blue
    var prev_german_button = document.getElementById(german_button);
    prev_german_button.style.backgroundColor = 'blue';
    german_button = button_id;
  }

  if (english_button !='') {
    match_words(english_button,button_id);
  }
}

//Function triggered when English Button selected
function english_select(button_id) {

  button_id = button_id.id;
  var button = document.getElementById(button_id);

  // Change color of clicked button to grey
  button.style.backgroundColor = 'grey';

  if (english_button == '') {

    // First button clicked
    english_button = button_id;

  } else {

    // Another button already selected
    // Change color of previously selected button back to blue
    var prev_english_button = document.getElementById(english_button);
    prev_english_button.style.backgroundColor = 'blue';
    english_button = button_id;
  }

  if (german_button != '') {
    match_words(german_button,button_id);
  }
}

//Function to check if the words match
function match_words(first_word,second_word) {

  var first_button = document.getElementById(first_word);
  var second_button = document.getElementById(second_word);

  // Change color of matching buttons or turn them red
  if (second_word.split('_')[1] == first_word.split('_')[1]) {

    // Both buttons match
    first_button.style.backgroundColor = 'green';
    first_button.disabled = true;
    second_button.style.backgroundColor = 'green';
    second_button.disabled = true;

    //Clears buttons and increases score
    clear_buttons()
    score += 1;
    match -= 1;

    update_score(score);

    if (match == 0) {
      openPopup();
    }

  } else if (second_word.split('_')[1] != first_word.split('_')[1]) {

    first_button.style.backgroundColor = 'red';
    second_button.style.backgroundColor = 'red';

    score -=1;

    update_score(score);

    setTimeout( function() {

      if (first_button.style.backgroundColor == 'red') {
        first_button.style.backgroundColor = 'blue';
      }

      if (second_button.style.backgroundColor == 'red') {
        second_button.style.backgroundColor = 'blue';
      }

      clear_buttons();
    },2000)
  }
}

//Clears the variables that hold the details of the buttons that were pressed
function clear_buttons() {
  english_button = '';
  german_button = '';
}

//Updates the score
function update_score(score) {
  document.getElementById('score').innerHTML = score;
}

/*
25 April 2023 - Created file
26 April 2023 - Added functions to manage the match template. Currently it isn't working.
3 May 2023 - Match now works.
*/