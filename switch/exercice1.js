var readline = require("readline-sync");

var sport = readline.question("Entrez votre sport :  ");

switch(sport){
    case "foot-ball" : console.log("Footballeur");
    break
    case "rudby" : console.log("Rubyman");
    break
    case "basket-ball" : console.log("Gtand basketteur");
    break
    default : console.log("desole je connais pas votre sport");
    break
}