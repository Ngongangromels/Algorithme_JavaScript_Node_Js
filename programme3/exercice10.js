var age = 17;
console.log((age < 18)? "mineur" : "adulte");

var sprotif = true;
console.log((sprotif = true)? "bien" : "devrait faire du sport");

var sexe = false;
console.log((sexe = true) ? "Femme" : "Homme");

var readline = require("readline-sync");

var nombre = readline.questionInt("entrez un nombre: ");
console .log((nombre % 2 === 0) ? "paire" : "impaire");

var nombre2 = readline.questionInt("entrez le second nombre:  ");
console.log((nombre2 % 4 === 0) ? "divisible par 4" : "sorry le nombre est pas divisible pas 4");

