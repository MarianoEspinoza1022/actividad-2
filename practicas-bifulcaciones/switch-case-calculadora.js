let num1=10;
let operador='+';
let num2=5;

switch(operador) {
    case '+':
        resultado = num1 + num2;
        console.log("El resultado es: "+resultado);
        break;
    case '-':
        resultado = num1 - num2;
        console.log("El resultado es: "+resultado);
        break;
    case '*':
        resultado = num1 * num2;
        console.log("El resultado es: "+resultado);
        break;
    case '/':
        if (num2 !== 0) {
            resultado = num1 / num2;
        } else {
            console.log("Error: No se puede dividir por cero");
            return;
        }
            console.log("El resultado es: " + resultado);
    }