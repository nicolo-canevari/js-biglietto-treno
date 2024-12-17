# js-biglietto-treno
Esercizio biglietto del treno

ESERCIZIO:

Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero. 
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).


LOGICA:

INPUT
- Il programma dovrà chiedere all'utente il numero dei chilometri che vuole percorrere.
- Il programma dovrà chiedere all'utente l'età del passeggero.


ELABORAZIONE:

- Verifico che i dati immessi siano valori numererici. 
Se no: "Errore: uno dei valori immessi non è un numero.", posso mettere un alert...
Se si: procedere al calcolo della tariffa.

- Metto il prezzo per KM (è una costante).

- Calcolo del prezzo base del biglietto (senza sconti).

- Sezione dove vado ad applicare eventuali sconti:
Se il passeggero ha meno di 18 anni avrà uno sconto del 20% sul costo totale del biglietto; annessa formula calcolo dello sconto del 20%.

Se il passeggero ha più di 65 anni avrà uno sconto del 40% sul costo totale del biglietto; annessa formula calcolo dello sconto del 40%.

-Indico le regole del "Prezzo finale" del costo del biglietto, decimali e simbolo €.

OUTPUT:

- calcolo la tariffa del viaggio.
