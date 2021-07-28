
function updateText(){
  let text = document.getElementById('text-input').value;
  document.getElementById('text-output').innerText = text;
  
}

function makeBold(elem){
  elem.classList.toggle('active');
  document.getElementById('text-output').classList.toggle('bold');
}

function makeItalic(elem){
  elem.classList.toggle('active');
  document.getElementById('text-output').classList.toggle('italic');
}

function makeUnderline(elem){
    elem.classList.toggle('active');
    document.getElementById('text-output').classList.toggle('underline');
}

function alignText(elem, alignType){ // alignType = left, right or center
  elem.classList.toggle('active'); // creating new element and class and 1st item in list toggled on by default
  document.getElementById('text-output').style.textAlign = alignType; // assigns styling to output onclick of button
  let buttonsList = document.getElementsByClassName('align'); // stores the 3 align buttons in a new list 
  for(let i = 0; i < buttonsList.length; i++){ // checks all buttons
    buttonsList[i].classList.remove('active'); // removes class 'active' we created for all buttons in list
  }
  elem.classList.add('active'); // adds class to the element last toggled again

}
