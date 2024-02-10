var readline = require("readline-sync"); //recuperation du moduke d'ecriture

var moisEnLettre = readline.question("entrer le mois de l'annee : ");
// console.log("Moi saisie : " + moisEnChiffre);

var txt = "le mois" + moisEnLettre + "est equivalant à ";
if(moisEnLettre === "janvier"){
    console.log(txt + "1");
}