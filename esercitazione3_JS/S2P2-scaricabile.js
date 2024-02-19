// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

/*const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
}

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
}

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
}

let prices = [34, 5, 2]
const shippingCost = 50
let utenteCheEffettuaLAcquisto = amy //cambia il valore qui per provare se il tuo algoritmo funziona!*/

/*
// creo funzione con parametri di ingresso
// condice eseguibile all'interno con creazione di variabile 
//return della funzione 
function sommaValori (numero1, numero2){
  somma = numero1 + numero2
  return somma
}

//richiamo la funzione
sommaValori(4, 89)
//stampo a schermo la somma calcolata nella funzione 
console.log(somma) */


/*function welcomeMessage (name , lastName){
  
  intro = "welcome" + " " + name + " " + lastName
  return intro
}

welcomeMessage ("Luca", "Casparriello")
console.log(intro)

welcomeMessage ("Mario" , "Esposito")
console.log(intro) */







/*
let sommaCarrello = 0;

//ciclo per definire il costo totale del carrello
for( let i = 0 ; i < prices.length ; i++){
  sommaCarrello += prices[i]
}

console.log(sommaCarrello);


// verifica se ambassador or not !

if (utenteCheEffettuaLAcquisto.isAmbassador){ //true
  let sconto = (sommaCarrello * 30) / 100;
  sommaCarrello = sommaCarrello - sconto;
}
console.log(sommaCarrello) 

// verifica spedizione 

if (sommaCarrello <= 100){
  sommaCarrello += 50;
}
console.log(sommaCarrello)

//array ---> push
const users = [] ; 
users.push(marco, paul, amy) ;

console.log(users);

for ( let i = 0 ; i < users.length ; i++){
  let frase = `${ users[i].name} ${ users[i].lastName}`  //per rendere dinamico in una stringe si usa il tamplate backtick + dollaro nelle graffe

  //controllo se è ambassador o no !! 
  if (!users[i].isAmbassador){
    frase += " non è";
  } else {
    frase += " è";
  }
  frase += " un ambassador";
  console.log(frase)
}
*/





// Scrivi un programma che stampi i numeri da 1 a 5 utilizzando il ciclo while. 
/*
let numero = 1 ; 
while ( numero <= 5 ){
  console.log(numero)
  numero++
} */

/*// Scrivi un programma che calcoli la somma dei numeri da 1 a 10 utilizzando il ciclo while.
 let numero = 1 ; 
 let somma = 0 ; 
while (numero <= 10){
  somma+=numero;
  numero ++
}
console.log("La somma è: " + somma) */

// Scrivi un programma che stampi i numeri pari da 2 a 10 utilizzando il ciclo do while.

/* let numero = 2 ; 
do{
  console.log(numero)
  numero += 2
} while ( numero <= 10 ) */

//Scrivi un programma che prenda un numero in input e conti il numero di cifre presenti utilizzando il ciclo while.
/*let numero = 56300 ;
let counter = 0 ;

while ( numero !== 0 ){
  numero = Math.floor(numero / 10)
  counter++
} 
console.log("Il numero di cifre è: " + counter) */

// numeri randomici in javascript Math.floor(Math.random());

/* let nr = Math.floor(Math.random() * 10) //random number 
console.log(nr) */


// Calcolatrice 

function viewedMsg (){
  window.alert("Questa è una simulazione")
}

console.log(window.alert)