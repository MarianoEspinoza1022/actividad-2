//Control de bucles

let listNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i=0; i<listNum.length; i++){
    //Exclusión de un valor -----> parametro bucle
    if(listNum[i] === 5){
        continue;
    }
    console.log(listNum[i]);

    //Interrumpir un bucle -----> parametro break
    if(listNum[i]>6){
        break;
    }
}