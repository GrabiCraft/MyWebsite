<<<<<<< HEAD
var Datum = new Date().getDay()

window.alert("Alert! You have fallen victim to this unfinished site :)"); //WIll be removed once site is finished

switch(Datum){
    case 0:
        var Tag = "Today is sunday. Right now, I am probably sitting before my PC playing games or watching youtube.";
        break;
    case 1:
        var Tag = "Today is monday. Right now, I am probably in school or doing my homework";
        break;
    case 2:
        var Tag = "Today is tuesday. Right now, I am probably in school or doing my homework";
        break;
    case 3:
        var Tag = "Today is wednesday. Right now, I am probably in school or doing my homework";
        break;
    case 4:
        var Tag = "Today is thursday. Right now, I am probably in school or doing my homework";
        break;
    case 5:
        var Tag = "Today is friday. Right now, I am probably in school or doing my homework";
        break;
    case 6:
        var Tag = "Today is saturday. Right now, I am probably sitting before my PC playing games or watching youtube.";
        break;


}

document.write(Tag); //Displays costum message for the current day
=======
// Image switcher code

var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute ('src','images/firefox2.png');
	} else {
	  myImage.setAttribute ('src','images/firefox-icon.png');
	}
}

// Personalized welcome message code

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
>>>>>>> 247b182463763b9126278ee20b0195eabf6c0dd6
