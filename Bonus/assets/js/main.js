//Generiamo due numeri random da 1 a 6 per i due utenti
var numeroGiocatore = Math.floor(Math.random() * 6) + 1;
document.getElementById("giocatore_uno").innerHTML = numeroGiocatore;
var numeroPc = Math.floor(Math.random() * 6) + 1;
document.getElementById("giocatore_due").innerHTML = numeroPc;





//stabilire chi è il vincitore in base ai numeri che sono usciti
var vittorieGiocatore = 0;
if (numeroGiocatore > numeroPc) {
    document.getElementById("vincitore").innerHTML = "Giocatore!";

} else if (numeroGiocatore == numeroPc) {
    document.getElementById("vincitore").innerHTML = "Nessuno! Pari!";
} else {
    document.getElementById("vincitore").innerHTML = "Pc!";

}