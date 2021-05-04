/**
 * TODO: Update the text in the "Formatted Text" section as a user types in the textarea
 * TODO TOGETHER: Add a .bold, .italic classes to "Formatted Text" when the appropriate button is clicked
 * TODO: Add an .underline class to "Formatted Text" when Underline button is clicked
 * TODO: Toggle the align style for "Formatted Text" when the appropriate button is clicked
 */


/**
 * Update the output text as a user types in the textarea
 * HINT: Use the onkeydown function inside HTML
 */
function updateText(){
  // CODE GOES HERE
  let text = document.getElementById('text-input').value;
  document.getElementById('text-output').innerText = text;
  
}

/**
 * Toggle the bold class for the output text
 * HINT: Use the onclick function insite HTML
 * HINT: Look into using this keyword
 * HINT: Use the classList property
 * HINT: Toggle .active class for the button
 */
function makeBold(elem){
  //CODE GOES HERE
  elem.classList.toggle('active');
  document.getElementById('text-output').classList.toggle('bold');
}

/**
 * Toggle the italic class for the output text
 */
function makeItalic(elem){
  elem.classList.toggle('active');
  document.getElementById('text-output').classList.toggle('italic');
}

/**
 * Toggle the underline class for the output text
 * HINT: Toggle the .active class for the button
 * HINT: Use the classList property
 * HINT: Use contains, remove, and add functions
 */
function makeUnderline(elem){
    //CODE GOES HERE
    elem.classList.toggle('active');
    document.getElementById('text-output').classList.toggle('underline');
}

/**
 * Toggle the style textAlign attribute
 * Toggle the active state for the align butttons
 * HINT: Use the style property of the element
 * HINT: Make sure to untoggle the active state for all other align buttons
 */
function alignText(elem, alignType){ // alignType = left, right or center
  // CODE GOES HERE
  elem.classList.toggle('active'); // creating new element and class and 1st item in list toggled on by default
  document.getElementById('text-output').style.textAlign = alignType; // assigns styling to output onclick of button
  let buttonsList = document.getElementsByClassName('align'); // stores the 3 align buttons in a new list 
  for(let i = 0; i < buttonsList.length; i++){ // checks all buttons
    buttonsList[i].classList.remove('active'); // removes class 'active' we created for all buttons in list
  }
  elem.classList.add('active'); // adds class to the element last toggled again

}