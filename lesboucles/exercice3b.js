var nbre;
var somme = 0;

for(nbre = 1; nbre <= 100; nbre++){
    if(nbre % 2 === 0){
        somme = somme + nbre;
    }
}
console.log("%d", somme);