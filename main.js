
// 1 Mail
// Crea una lista di email di invitati ad una festa.


// ! Chiedi all’utente la sua email,

//! controlla che sia nella lista di chi può accedere,

//! stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.

// Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).

// Si può fare? Certo che si basta ragionare un po’.
// Nota:
// Non è necessario provvedere alla validazione delle email

const emailList = [
    "mariorossi@gmail.com",
    "lucabianchi@yahoo.it",
    "annaverdi@hotmail.com",
    "federico.conti@outlook.com",
    "sara.mancini@libero.it",
    "giulia.neri@azienda.com",
    "andrea.gallo@universita.edu",
    "claudio.rossi@protonmail.com",
    "elena.costa@fastwebnet.it",
    "marco.martini@pec.it"
];

let mailUtente = prompt('Inserisci la tua mail per la verifica:', "lucabianchi@yahoo.it" )

let isMailPresent = false
// console.log(isMailPresent)


// console.log("hello")

for (let i = 0; i <= emailList.length; i++){

    if (mailUtente == emailList[i]) {

        isMailPresent = true

    }
    
}

if (isMailPresent) {
    console.log("L'email è presente nella lista degli invitati!");
} else {
    console.log("L'email non è presente nella lista degli invitati.");
}

// console.log(isMailPresent)











//2 Gioco dei dadi

//! Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.

//! Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?
// Consigli del giorno:
//! 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare

//! 2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare

//! 3. si ma noi cosa vogliamo fare?
//! 4. torniamo a scrivere in italiano
//! 5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
//! Buon lavoro e buon divertimento! :slightly_smiling_face

let dadoComputer= Math.floor(Math.random() * 6) + 1;
// console.log(dadoComputer)

let dadoGiocatore= Math.floor(Math.random() * 6) + 1;
// console.log(dadoComputer)



console.log("Hai tirato:", dadoGiocatore);
console.log("Il computer ha tirato:", dadoComputer);



isCPUWinner= dadoComputer === dadoGiocatore

if (dadoComputer> dadoGiocatore) {
    console.log(`il numero del computer e maggiore ${dadoComputer}, vince la CPU`)
} else if(dadoComputer< dadoGiocatore) {
    console.log(`il numero dell'utente e maggiore ${dadoGiocatore}, vince l' utente`)

} else {
    console.log('ahahah avete pareggiato')
}



