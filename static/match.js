/*
File: Theological German Vocab Tester
Author: David Sarkies
Initial: 25 April 2023
Update: 3 May 2023
Version: 1.2
*/

var score = 0;
var german_button = '';
var english_button = '';

function german_select(button_id) {

  button_id = button_id.id;

  var button = document.getElementById(button_id);
  var id_parts = button_id.split('_');
  var other_button;

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

  // Change color of matching buttons or turn them red
  if (english_button != '' && english_button.split('_')[1] == id_parts[1]) {

    // Matching English button already selected
    button.style.backgroundColor = 'green';
    button.disabled = true;
    german_button = '';
    var eng_button = document.getElementById(english_button);
    eng_button.style.backgroundColor = 'green';
    eng_button.disabled = true;
    english_button = '';
    score += 1;
    update_score(score);

  } else if (english_button != '' && english_button.split('_')[1] != id_parts[1]) {

	button.style.backgroundColor = 'red';
	var eng_button = document.getElementById(english_button);
    eng_button.style.backgroundColor = 'red';
    score -=1;

    setTimeout( function() {
      button.style.backgroundColor = 'blue';
      eng_button.style.backgroundColor = 'blue';
      german_button = '';
      eng_button = '';
    },2000) 
  }
}

function english_select(button_id) {

  button_id = button_id.id;

  var button = document.getElementById(button_id);
  var id_parts = button_id.split('_');

  // Change color of clicked button to grey
  button.style.backgroundColor = 'grey';

  console.log(english_button)

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

  // Change color of matching buttons or turn them red
  if (german_button != '' && german_button.split('_')[1] == id_parts[1]) {

    // Matching English button already selected
    button.style.backgroundColor = 'green';
    button.disabled = true;
    english_button = '';
    var ger_button = document.getElementById(german_button);
    ger_button.style.backgroundColor = 'green';
    ger_button.disabled = true;
    german_button = '';
    score += 1;
    update_score(score);

  } else if (german_button != '' && german_button.split('_')[1] != id_parts[1]) {

	button.style.backgroundColor = 'red';
	var ger_button = document.getElementById(german_button);
    ger_button.style.backgroundColor = 'red';
    score -=1;
    update_score(score);

    setTimeout( function() {
      button.style.backgroundColor = 'blue';
      ger_button.style.backgroundColor = 'blue';
      english_button = '';
      ger_button = '';
    },2000)
  }
}

function update_score(score) {
  document.getElementById('score').innerHTML = score;
}

/*
25 April 2023 - Created file
26 April 2023 - Added functions to manage the match template. Currently it isn't working.
3 May 2023 - Match now works.
*/