var readline = require("readline-sync");


var saissie = "";

while(saissie !== 0){
    var menu = "1/ bonjour \n";
    menu += "2/ salut \n";
    menu += "3/ bonsoir \n";
    menu += "0/ Exit";
    console.log(menu);

     saissie = readline.questionInt("entre un chiffre : ");
    switch(saissie){
        case 1: console.log("bonjour");
        break;
        case 2: console.log("salut");
        break;
        case 3: console.log("bonsoir");
        break;
        case 0: console.log("Exit");
        break;
        default: console.log("le cas n'es pas prit en charge");
    }
}