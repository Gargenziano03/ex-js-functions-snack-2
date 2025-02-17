//Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.
//Nota: Questa funzione creerà un loop infinito.Interrompilo manualmente o usa clearInterval() in un altro script.

// dichiarazione funzione
function messaggioripeturo(tempo, messaggio) {
    const intervallo = setInterval(() => {
        console.log(messaggio);
    }, tempo);

    setTimeout(() => {
        clearInterval(intervallo);
        console.log("Messaggi fermati!");
    }, 5000);
}

//invocazione
messaggioripeturo(1000, 'lol')