/*
9) Utilizando un bucle, mostrar la suma y la media de los numeros introducidos hasta introducir un
numero negaivo y ahi mostrar el resultado.
*/

// let total=0;

let counter=0;
let sumaTotal=0;
let nroIntroducido = 0;

while(nroIntroducido >= 0){
    
    nroIntroducido = prompt('Introduce un numero:');
    sumaTotal = sumaTotal + Number(nroIntroducido);

    console.log('nroIntroducido: '+ nroIntroducido)
    console.log('sumaTotal: '+ sumaTotal)

    counter++;


}



alert(`La suma de los numeros introducidos fue de: ${sumaTotal}.
Promedio de numeros introducidos: (${sumaTotal/counter}).
El numero total de numeros introducidos fue de: ${counter}.`)
