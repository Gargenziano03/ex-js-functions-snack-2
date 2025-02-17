//Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!"
//dichiarazione funzione
function creaTimer(tempo) {
    console.log('inizio')
    //dichiarazione seconda funzione 
    setTimeout(() => {
        console.log('tempo scaduto!')
    }, tempo);
}
//invocazione
creaTimer(3000)