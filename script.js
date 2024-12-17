
// INPUT:
//  Numero dei chilometri che vuole percorrere il passeggero.
let userKm = parseFloat(prompt("Indica il numero di km che vuoi percorrere"));

// Età del passeggero.
let userAge = parseInt(prompt("Indica l'età del passeggero"));

console.log(userKm, userAge);


// ELABORAZIONE:

// verifica che i dati siano numeri, se si procedere con il calcolo della tariffa.

if (isNaN(userKm) || isNaN(userAge)) {
    console.log("Errore: uno dei valori immessi non è un numero.");
    // alert("Errore: uno dei valori immessi non è un numero valido.");
} else {

    function calcolaPrezzo(userKm, userAge) {

        // Prezzo per chilometro (COSTANTE)
        const prezzoPerKm = 0.21;

        // Calcolo del prezzo base del biglietto (senza sconti)
        let prezzoBase = userKm * prezzoPerKm;


        // Se il passeggero ha meno di 18 anni avrà uno sconto del 20% sul costo totale del biglietto.
        if (userAge < 18) {

            // formula calcolo dello sconto del 20%
            prezzoBase = prezzoBase - (prezzoBase * 20) / 100;

        }  // Se il passeggero ha più di 65 anni avrà uno sconto del 40% sul costo totale del biglietto. 
        else if (userAge > 65) {

            // formula calcolo dello sconto del 40%
            prezzoBase = prezzoBase - (prezzoBase * 40) / 100;

        }

        //  REGOLE DEL PREZZO FINALE
        // Rendi il prezzo finale con massimo due decimali
        let prezzoFinale = prezzoBase.toFixed(2);

        // Restituisce il prezzo in forma umana con il simbolo €
        return `€${prezzoFinale}`;

    }

}

// OUTPUT

// risultato della tariffa di viaggio
let prezzoTotale = calcolaPrezzo(userKm, userAge);
console.log("Il prezzo totale del viaggio è: " + prezzoTotale);

