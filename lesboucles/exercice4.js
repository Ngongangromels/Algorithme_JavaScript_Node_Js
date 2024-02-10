var readline = require("readline-sync");

var nbre = readline.questionInt("entrez le nombre donc vous voulez calculer le factorielle:  ");
var resultat = 1;
var cpte;

for(cpte = 1; cpte <= nbre; cpte++ ){
    resultat = resultat * cpte;
    if(cpte === 1){
        console.log(cpte +" er passage - total " + resultat);
    }else{
        console.log(cpte +" eme passage - total " + resultat);
    }
    
}