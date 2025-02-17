//Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore(callback).
// La funzione deve eseguire l'operazione fornita sui due numeri.

// dicharazione funzione
function eseguiOperazione(a, b, operatore) {
    return operatore(a, b)
}

// operazioni da eseguoire 
const somma = (a, b) => a + b;
const moltiplica = (a, b) => a * b;

// invocazione
console.log(eseguiOperazione(3, 4, somma));
console.log(eseguiOperazione(3, 4, moltiplica));