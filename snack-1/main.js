//1 Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma
// dichiarazione funzione
function somma(a, b) {
    return a + b;
}
// invocazione
console.log(somma(3, 7));

//2 Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
// dichiarazione funzione
const somma2 = function (a, b) {
    return a + b;
}
// invocazione
console.log(somma2(4, 3));
