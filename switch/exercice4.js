var readline = require("readline-sync");

var menu = "/1 Ajouder un joueur\n";
menu += "/2 Supprimer un joueur\n";
menu += "/3 Modifier les parametrree du joueur\n";
console.log(menu);

var saisie = readline.questionInt("entrez le numero de l'action que vous voulez realiser  (1 a 3)\n  ");

switch(saisie){
    case 1: console.log("vous avez selectionne l'ajout d'un joueur");
    break;
    case 2: console.log("voulez vous supprimer un joueur ?");
    break;
    case 3: console.log("Place a le modification");
    break;
    default: console.log("je ne prends pas en charge cette option");
}