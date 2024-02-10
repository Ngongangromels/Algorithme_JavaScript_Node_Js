var readline = require("readline-sync");
 
var nbre = "";
while(nbre < 1 || nbre > 5){
    nbre = readline.questionInt("entrez un nombre ente (1 et 5):  ");
  
}
  console.log("vois avez saisie %d", nbre);
