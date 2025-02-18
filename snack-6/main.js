//Definisci una funzione creaContatoreAutomatico che accetta
// un intervallo di tempo e restituisce una funzione che avvia un setInterval,
// incrementando un contatore e stampandolo.

// dichiarazione funzione 
function creaContatoreAutomatico(intervallo) {
    let contatore = 0;

    return function avvia() {
        const timer = setInterval(() => {
            contatore++;
            console.log(`contatore: ${contatore}`);
        }, intervallo);

        return function stop() {
            clearInterval(timer);
            console.log('contatore fermato');
        }
    }
}

// invocazione
const avviaContatore = creaContatoreAutomatico(1000);
const stopContatore = avviaContatore();

setTimeout(() => {
    stopContatore()
}, 5000)