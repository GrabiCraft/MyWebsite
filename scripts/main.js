var Datum = new Date().getDay()

window.alert("Alert! You have fallen victim to this unfinished site :)");

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

document.write(Tag);