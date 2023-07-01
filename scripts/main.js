var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/osetr.jpeg') {
      myImage.setAttribute ('src','images/osetr2.jpeg');
    } else {
      myImage.setAttribute ('src','images/osetr.jpeg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Привет, ' + myName;
}

if(!localStorage.getItem('name')) {
   setUserName();
} else {
   var storedName = localStorage.getItem('name');
   myHeading.textContent = 'Привет, ' + storedName;
}

 myButton.onclick = function() {
    setUserName();
}
  