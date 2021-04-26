//chiedo all'utente la sua mail
var mailUtente = prompt("Inserisci la tua mail! \nAttenzione si tiene conto delle maiuscole e delle minuscole!");
document.getElementById("mail_inserita").innerHTML = mailUtente;


//controllo che sia nella lista di chi puo accedere
var listaPartecipanti = ["mirco@gmail.com", "stefano_rossi@libero.it", "mauro.fornasiero@outlook.com", "pincopallino19@simpatico.net", "andreiburbulia@hotmail.it"]


var controllo = listaPartecipanti.indexOf(mailUtente);

if (controllo < listaPartecipanti.length && controllo >= 0) {
    document.getElementById("controllo_mail").innerHTML = "Si!";
    document.getElementById("esito_mail").innerHTML = "Puoi accedere!";

} else {
    document.getElementById("controllo_mail").innerHTML = "No!";
    document.getElementById("esito_mail").innerHTML = "Non puoi accedere!";
}


//communico l'esito all'utente