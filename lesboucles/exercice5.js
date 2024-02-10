var readline = require("readline-sync");

var constant = readline.questionInt("Par quelle nombre  voulez vous faire la table de multiplication ? ");
var resultat;
var nbre = 10;

while(nbre >= 0){
    resultat = nbre * constant;
    console.log("%d * %d = %d",nbre, constant, resultat);
    nbre--;
}