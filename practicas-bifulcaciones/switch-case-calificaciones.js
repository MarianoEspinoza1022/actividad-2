let letra='A';
let calificacion = 95;

switch (calificacion){
    case 'A':
        calificacion >= 90, calificacion <= 100;
        console.log("La calificación de "+calificacion+" es la letra "+letra);
        break;
        case 'B':
            calificacion >= 80, calificacion <= 89;
                console.log("La calificación de "+calificacion+" es la letra "+letra);
            break;
            case 'C':
                calificacion >= 70, calificacion <= 79;
                    console.log("La calificación de "+calificacion+" es la letra "+letra);
                break;
                case 'D':
                    calificacion >= 60, calificacion <= 69;
                        console.log("La calificación de "+calificacion+" es la letra "+letra);
                    break;
                    case 'F':
                        calificacion >= 0, calificacion <= 59;
                            console.log("La calificación de "+calificacion+" es la letra "+letra);
                        break;
}