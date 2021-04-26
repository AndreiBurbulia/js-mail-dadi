//chiedo all'utente la sua mail
var mailUtente = prompt("Inserisci la tua mail!");
document.getElementById("mail_inserita").innerHTML = mailUtente;
//controllo che sia nella lista di chi puo accedere

var listaPartecipanti = ["mirco@gmail.com", "stefano_rossi@libero.it", "mauro.fornasiero@outlook.com", "pincopallino19@simpatico.net", "andreiburbulia@hotmail.it"]
console.log(listaPartecipanti);


var controllo = listaPartecipanti.indexOf(mailUtente);
console.log(controllo);

if (controllo < listaPartecipanti.length && controllo >= 0) {
    document.getElementById("controllo_mail").innerHTML = "La tua mail è presente nella lista";
    document.getElementById("esito_mail").innerHTML = "Puoi accedere!";

} else {
    document.getElementById("controllo_mail").innerHTML = "La tua mail non è presente nella lista";
    document.getElementById("esito_mail").innerHTML = "Non puoi accedere!";
}


//communico l'esito all'utente