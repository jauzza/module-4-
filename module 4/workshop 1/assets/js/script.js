var eersteVariabele = "test";
console.log(eersteVariabele);

var voornaam = "Jayden"; // wijzig dit in jouw eigen voornaam
var achternaam = "Dijkstra"; // wijzig dit in jouw eigen achternaam
var volledigeNaam = "Jayden Dylano Dijkstra"; // plak hier de 3 bovenstaande variabelen aan elkaar, met spaties
var geboortedag = "15"; // je geboortedag
var geboortemaand = "Juni"; // je geboortemaand
var geboortejaar = "2006"; // je geboortejaar
var huidig_jaartal = "2022"// het huidige jaar;
var leeftijd = 16; // bereken hier jouw leeftijd op basis van de eerder ingevulde geboortegegevens.
var dag_van_het_jaar = 07; // bereken hier hoeveelste dag van dit kalenderjaar het is
var straat = "Laan van presikhaaf"; // je straat;
var huisnummer = "2-1"; // je huisnummer;
var woonplaats = "Arnhem"; // je woonplaats;
var woonachtig_in_utrecht = "nee"; // check hier dmv een boolean of jouw woonplaats gelijk is aan "Utrecht"
var aantal_studenten_in_deze_klas = 16;
var kosten_van_frikandelbroodje = 1.76;
var totale_lunchkosten = aantal_studenten_in_deze_klas * kosten_van_frikandelbroodje; // bereken hier het totaalbedrag als iedere student 2 frikandelbroodjes zou kopen

/* toon de waardes hieronder op het scherm gescheiden door het html: '<br>' element voor een nieuwe-regel
  bijvoorbeeld:
  document.write("Voornaam: " + voornaam);
  document.write("<br>");
  document.write("Achternaam: " + achternaam);
  enzovoorts, zorg dat alle bovenstaande variabelen op het scherm komen
*/

var eersteVariabele = "test";
console.log(eersteVariabele);


const displayName = document.createElement('p');
displayName.appendChild(document.createTextNode(volledigeNaam));
document.body.appendChild(displayName);



const firstName = document.createElement("p");
firstName.appendChild(document.createTextNode(voornaam));
document.body.appendChild(firstName);


const lastname = document.createElement('p');
lastname.appendChild(document.createTextNode(achternaam));
document.body.appendChild(lastname);


const Adress = document.createElement("p");
Adress.appendChild(document.createTextNode(woonplaats));
document.body.appendChild(Adress);
 

const bornDate = document.createElement('p');
bornDate.appendChild(document.createTextNode(geboortedag));
document.body.appendChild(bornDate);


const month = document.createElement('p');
month.appendChild(document.createTextNode(geboortemaand));
document.body.appendChild(month);


const year = document.createElement('p');
year.appendChild(document.createTextNode(geboortejaar));
document.body.appendChild(year);


const localDate = document.createElement('p');
localDate.appendChild(document.createTextNode(huidig_jaartal));
document.body.appendChild(localDate);


const age = document.createElement('p');
age.appendChild(document.createTextNode(leeftijd));
document.body.appendChild(age);


const dayDate = document.createElement('p');
dayDate.appendChild(document.createTextNode(dag_van_het_jaar));
document.body.appendChild(dayDate);


const street = document.createElement('p');
street.appendChild(document.createTextNode(straat));
document.body.appendChild(street);


const houseNumber = document.createElement('p');
houseNumber.appendChild(document.createTextNode(huisnummer));
document.body.appendChild(houseNumber);


const livesIn = document.createElement('p');
livesIn.appendChild(document.createTextNode(woonachtig_in_utrecht));
document.body.appendChild(livesIn);


const numberOfStudents = document.createElement('p');
numberOfStudents.appendChild(document.createTextNode(aantal_studenten_in_deze_klas));
document.body.appendChild(numberOfStudents);


const cost = document.createElement('p');
cost.appendChild(document.createTextNode(kosten_van_frikandelbroodje));
document.body.appendChild(cost);


const totalLunchCost = document.createElement('p');
totalLunchCost.appendChild(document.createTextNode(totale_lunchkosten));
document.body.appendChild(totalLunchCost);
