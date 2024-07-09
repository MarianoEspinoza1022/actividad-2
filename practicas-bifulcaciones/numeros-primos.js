let inicio=2;
let fin=97;

function Primo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

function Primos(inicio, fin) {
    for (let numero = inicio; numero <= fin; numero++) {
        if (Primo(numero)) {
            console.log(numero);
        }
    }
}
// Muestra el inicio y el final del rango
console.log ("Ingrese el inicio del rango:"+inicio);
console.log ("Ingrese el final del rango:"+fin);
Primos(inicio, fin); // Muestra los números primos en el rango dado