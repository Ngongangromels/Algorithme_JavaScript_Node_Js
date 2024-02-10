var readline = require("readline-sync");

var age = readline.questionInt("entrez votre age  ");

switch(age){
    case 15:
    case 16:
    case 17:
        console.log("Mineur");
    break;
    case 18:
    case 19:
    case 20:
    case 21: 
        console.log("Majeur")
    break;
    case 22:
    case 24:
    case 25:
    case 26: 
    case 27:
        console.log("Adulte");
    break;
    default :
        console.log("Desole je ne prend pas en charge se cas de figure");
}