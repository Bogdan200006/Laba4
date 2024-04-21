let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/firefox-icon.png') {
    myImage.setAttribute ('src','images/imresizer-1713431277698.png');
    document.documentElement.style.backgroundColor = "#212121";
    document.body.style.backgroundColor = '#323232';
    let paragraphs = document.querySelectorAll('p');
    for(let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "gray";
    let audio = new Audio('you-are-my-sunshine_lebron-made-with-Voicemod.mp3');
    audio.play();

}
    let listItems = document.querySelectorAll('li');
    for(let i = 0; i < listItems.length; i++) {
    listItems[i].style.color = "gray";
}
  } else {
    myImage.setAttribute ('src','images/firefox-icon.png');
    document.body.style.backgroundColor = "orange";
    document.documentElement.style.backgroundColor = "#FFAF45";
    document.body.style.backgroundColor = "orange";
    let paragraphs = document.querySelectorAll('p');
    for(let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "Black";
}
    let listItems = document.querySelectorAll('li');
    for(let i = 0; i < listItems.length; i++) {
    listItems[i].style.color = "Black";
}
  }
}

// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is not cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is not cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

body.onclick = function(){
    
}