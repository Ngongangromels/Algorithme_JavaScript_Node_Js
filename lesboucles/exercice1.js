var readline = require("readline-sync");


var nbre; 
var constant = readline.questionInt("par combien voulez vous faire la table de multuplication ? ");
var resultat;

for(nbre = 1; nbre <= 10; nbre++){
    resultat = nbre * constant;
    console.log("%d * %d = %d",nbre, constant, resultat);
}