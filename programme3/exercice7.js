var readline = require("readline-sync");

var lettreClasse = readline.question("entre la lettre de la classe(entre A et E) en Majuscule : ");

if(lettreClasse === "A" || lettreClasse === "B"){
    console.log("Numero1");
}else if(lettreClasse === "C" || lettreClasse === "D"){
    console.log("Numero 2");
}else if(lettreClasse === "E" || lettreClasse === "F"){
    console.log("Numero 3");
} else{
    console.log("classe inconnu");
}