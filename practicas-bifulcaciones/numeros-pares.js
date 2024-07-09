let suma = 0;

for (let i = 0; i <= 1000; i++) {
  if (i % 2 == 0) { //Verifica si el número es par
    suma += i; //Suma el número par
  }
}
console.log("La suma de todos los números pares del 0 al 1000 es: " + suma);