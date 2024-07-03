let num1=10;
let operador='+';
let num2=5;

        if(resultado = num1 + num2){
            console.log("El resultado es: "+resultado);
        }else if(resultado = num1 - num2){
            console.log("El resultado es: "+resultado);
        }else if(resultado = num1 * num2){
            console.log("El resultado es: "+resultado);
        }else if (num2 !== 0) {
            resultado = num1 / num2;
            console.log("El resultado es: " + resultado);
        } else {
            console.log("Error: No se puede dividir por cero");
            return;
        }