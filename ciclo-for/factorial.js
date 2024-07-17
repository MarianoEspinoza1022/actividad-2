function factorial(n) {
        let result=1;
        for(let i=1; i<=n; i++){
            result*=i;
        }
        return result;
    }
const numero=5;
console.log("El factorial de "+n+" es "+factorial(numero));