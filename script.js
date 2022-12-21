/* Declare variables below to save the different sections (divs) of your story*/

let optionOne = document.querySelector('.option-one');
let optionTwo= document.querySelector('.option-two');
let storyOpening = document.querySelector('.story-opening');
let optionOneScreen = document.querySelector('.option-one-screen');
let optionTwoScreen = document.querySelector('.option-two-screen');

let optionOneEnd = document.querySelector('.option-one-end')
let optionTwoEnd = document.querySelector('.option-two-end')
let clickMeOne = document.querySelector('.click-me-one')
let clickMeTwo = document.querySelector('.click-me-two')


optionOne.onclick = function() {
  storyOpening.style.display = 'none';
  optionOneScreen.style.display = 'block';
  
}

optionTwo.onclick = function() {
  storyOpening.style.display = 'none';
  optionTwoScreen.style.display = 'block';
  
}

clickMeOne.onclick = function() {
  storyOpening.style.display = 'none';
  optionOneEnd.style.display = 'block';
  optionOneScreen.style.display = 'none';
}
clickMeTwo.onclick = function() {
  storyOpening.style.display = 'none';
  optionTwoEnd.style.display = 'block';
  optionTwoScreen.style.display = 'none';
  optionOneScreen.style.display = 'none';
}

















/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
INSERT_VARIABLE.onclick=function(){

};

INSERT_VARIABLE.onclick=function(){

};


INSERT_VARIABLE.onclick=function(){

};

*/
