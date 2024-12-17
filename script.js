// ESERCIZIO:

// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero. 
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// - L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).


// LOGICA:

// INPUT:
//  Il programma dovrà chiedere all'utente il numero dei chilometri che vuole percorrere.
let userKm = prompt ("indica il numero di km che vuoi percorrere")

// Il programma dovrà chiedere all'utente l'età del passeggero.
let userAge = prompt ("indica l'età del passeggero")

console.log(userKm, userAge);


// ELABORAZIONE:

// Sulla base dei dati raccolti nell'INPUT il programma dovrà calcolare il prezzo totale del viaggio (il prezzo del biglietto è di 0,21€ al km).
function calcolaPrezzo(userKm, userAge) {

    // Prezzo per chilometro
    const prezzoPerKm = 0.21;

    // Calcolo del prezzo base del biglietto (senza sconti)
    let prezzoBase = userKm * prezzoPerKm;

    
     // Se il passeggero ha meno di 18 anni avrà uno sconto del 20% sul costo totale del biglietto.
     if (userAge < 18) {

        prezzoBase = prezzoBase * 0,80;
        
     }  // Se il passeggero ha più di 65 anni avrà uno sconto del 40% sul costo totale del biglietto. 
     else if (userAge > 65) {

        prezzoBase = prezzoBase * 0,60;

     }

     let prezzoFinale = prezzoBase.toFixed(2);

     

}

   
   // Se il passeggero ha più di 65 anni avrà uno sconto del 40% sul costo totale del biglietto.
   // Se il passeggero ha un età compresa tra 18 e 65 anni non avrà nessuno sconto sul costo totale del biglietto.
   
