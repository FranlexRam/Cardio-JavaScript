/*
9) Utilizando un bucle, mostrar la suma y la media de los numeros introducidos hasta introducir un
numero negaivo y ahi mostrar el resultado.
*/

let sum=0;
let counter=0;



while(sum >= 0){
sum = sum + parseInt(prompt('Introduce un numero:'));
counter++;
}

alert(`La suma de los numeros introducidos fue de: ${sum}.
Promedio de numeros introducidos: (${sum/counter}).
El numero total de numeros introducidos fue de: ${counter}.`)
