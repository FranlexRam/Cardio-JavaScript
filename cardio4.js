/*
4) Escribir un programa que permita ir introduciendo una serie indeterminada de numeros mientras su suma no supere 50.
Cuando esto suceda, se debe mostrar el total acumulado y el contador de cuantos numeros se han introducido.
*/

let sum=0;
let counter=0;

while (sum <= 50) {
    sum = sum + parseInt(prompt('Introduce un numero:'));
    counter++;    
}

alert(`La suma total es de ${sum}.\nTotal de numeros introducidos: ${counter}`);
