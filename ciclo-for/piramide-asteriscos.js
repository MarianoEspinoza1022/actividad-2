function imprimirAsteriscos(filas){
    let asteriscos=1;
    for(let i=1; i<=6; i++){
        let fila='';
        for(let j=0; j<asteriscos; j++){
            fila+='*';
        }
        console.log(fila);
        asteriscos+=2;
    }
}
imprimirAsteriscos(6);