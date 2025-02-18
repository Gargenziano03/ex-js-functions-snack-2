//Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. 
// Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.

// dichiarazione funzione 
function eseguiEferma(inviato, messaggio, ricevuto) {

    return function esegui() {
        const invio = setInterval(() => {
            console.log(messaggio);
        }, inviato);
        setTimeout(() => {
            clearInterval(invio);
            console.log('messaggio ricevuto!');
        }, ricevuto)
    }
}

//invocazione 
const messaggioSaluto = eseguiEferma(1000, 'ciao', 1500);
messaggioSaluto();


