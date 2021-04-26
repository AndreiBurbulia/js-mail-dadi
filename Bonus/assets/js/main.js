


//Inizializzazione delle variabili che mi serviranno successivamente
var vittorieGiocatore = 0;
var pareggi = 0;
var vittoriePc = 0;
var numeroRound = parseInt(prompt("Inserisci il numero di Round da fare!"))


for (i = 0; i < numeroRound; i++) {

    //Generiamo due numeri random da 1 a 6 per i due utenti
    var numeroGiocatore = Math.floor(Math.random() * 6) + 1;
    document.getElementById("giocatore_uno").innerHTML = numeroGiocatore;
    var numeroPc = Math.floor(Math.random() * 6) + 1;
    document.getElementById("giocatore_due").innerHTML = numeroPc;

    //stabilire chi è il vincitore in base ai numeri che sono usciti

    if (numeroGiocatore > numeroPc) {
        document.getElementById("vincitore").innerHTML = "Giocatore!";
        vittorieGiocatore = vittorieGiocatore + 1;
        document.getElementById("vittorie_giocatore").innerHTML = vittorieGiocatore;
    } else if (numeroGiocatore == numeroPc) {
        document.getElementById("vincitore").innerHTML = "Pari!";
        pareggi = pareggi + 1;
        document.getElementById("pareggi").innerHTML = pareggi;
    } else {
        document.getElementById("vincitore").innerHTML = "Pc!";
        vittoriePc = vittoriePc + 1;
        document.getElementById("vittorie_pc").innerHTML = vittoriePc;
    }

}

if (vittorieGiocatore > vittoriePc) {
    document.getElementById("risultato_finale").innerHTML = "Il giocatore ha accumulato piu vittorie!! Ha vinto con " + vittorieGiocatore + " round vinti!"
} else if (vittorieGiocatore == vittoriePc) {
    document.getElementById("risultato_finale").innerHTML = "Il risultato finale dei round è pari!! " + pareggi + " totali!"
} else {
    document.getElementById("risultato_finale").innerHTML = "Il Pc ha accumulato piu vittorie!! " + vittoriePc + " round vinti!"
}