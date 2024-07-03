let letra;
let calificacion = 95;

  if (calificacion >= 90, calificacion <= 100) {
    letra = 'A';
    console.log("La calificación de "+calificacion+" es la letra "+letra);
  } else if (calificacion >= 80, calificacion <= 89) {
    letra = 'B';
    console.log("La calificación de "+calificacion+" es la letra "+letra);
  } else if (calificacion >= 70, calificacion <= 79) {
    letra = 'C';
    console.log("La calificación de "+calificacion+" es la letra "+letra);
  } else if (calificacion >= 60, calificacion <= 69) {
    letra = 'D';
    console.log("La calificación de "+calificacion+" es la letra "+letra);
  } else if (calificacion >= 0, calificacion <= 59) {
    letra = 'F';
    console.log("La calificación de "+calificacion+" es la letra "+letra);
  } else {
    letra = 'Calificación no válida';
  }
  return letra;