var readline = require("readline-sync");

var age = readline.questionInt("entre l'age de l'individu : ");

var sexe = readline.questionInt("entrez le sexe de l'individu (1 pour masculin 0 pour feminin) : ");
var ville = readline.question("entrez la ville (paris ou marseille");

if( (age > 19 && age <= 40) && sexe === 1 && ville === "paris" ){
    console.log("Personne adulte de %s de sexe %d", ville, sexe);
} else if(age > 40 && sexe === 0 && ville === "marseille"){
    console.log("personne agee de %s de sexe %d", ville, sexe );
}