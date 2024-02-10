var readline = require("readline-sync"); //recuperation du moduke d'ecriture

var moisEnChiffre = readline.questionInt("quelle mois de l'annee voulez vous ?");
// console.log("Moi saisie : " + moisEnChiffre);

if(moisEnChiffre === 1){
    console.log("Janvier");
}else if(moisEnChiffre === 2){
    console.log("Le mois est Fevrier");
} else if( moisEnChiffre === 3){
    console.log("Le mois est Mars");
}else if( moisEnChiffre === 4){
    console.log("le mois est Avril");
}else if( moisEnChiffre === 5){
    console.log("Le mois est Mai");
}else if( moisEnChiffre === 6){
    console.log("Le mois est Juin");
}else if( moisEnChiffre === 7){
    console.log("le mois est Juillet");
}else if( moisEnChiffre === 8){
    console.log("le loi est Aout");
}else if( moisEnChiffre === 9){
    console.log("le mois est Septembre");
}else if( moisEnChiffre === 10){
    console.log("le mois est octobre");
}else if( moisEnChiffre === 11){
    console.log("le mois est Novembre");
}else if( moisEnChiffre === 12){
    console.log("le mois est decembre");
}else{
    moisEnChiffre = readline.questionInt("Lz chiffre entre ne correspond pas essayer à nouveau");
}