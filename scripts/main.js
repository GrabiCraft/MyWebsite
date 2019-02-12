//First project by Matthias Grabner. Check out my Github at https://github.com/MatthiasGrabner5

var Datum = new Date().getDay() //Creates Date variable

//window.alert("Alert! You have fallen victim to this unfinished site :)"); //WIll be removed once site is finished

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
    default:
        var Tag = "Looks like humanity has come to an end and weeks have more/less than 7 days."
}
document.write(Tag); // Displays curent day of week

//TODO: Make like counter and add like button