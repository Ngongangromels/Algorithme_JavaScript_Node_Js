var readline = require("readline-sync");

var constant = readline.questionInt("par quelle nombre voulez vous faire la table de multuplication ?  ");
var nbre;
var resultat;

for(nbre = 10; nbre >0; nbre--){
     resultat = nbre * constant;
     console.log("%d * %d = %d", nbre, constant, resultat);
}
