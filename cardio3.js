/*
3) Solicita un numero e imprime todos los numeros  pares e impares desde 1 hasta ese numero con el mensaje: "es par" o "es impar".
EJ: Si el numero es 5, el resultado sera:
    1- es impar
    2- es par
    3- es impar
    4- es par
    5- es impar
    */


    let num = parseInt(prompt('Ingresa un numero'));

    for (i=1; i<=num; i++){
        if(i%2==0){
            console.log(`${i} - es par.`);
        } else {
            console.log(`${i} - es impar.`);
        }
    }