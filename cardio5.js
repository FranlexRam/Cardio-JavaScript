/*
5) Crea 3 arrays. El primero tendra 5 numeros y el segundo se llamara pares y el tercero impares (ambos vacios).
Despues multiplica cada uno de los numeros del primer array por un numero aleatorio entre 1 y 10. Si el resultado es par,
guarda ese numero en el array de pares y si es impar en el array de impares.
Muestra por consola: 

- La multiplicacion que se produce junto con su resultado con el formato:   2 x 3 = 6
-El array de pares e impares.
*/


const numbers = [6,23,8,10,17];
let pares=[];
let impares=[];

for (number of numbers) {
    let random= Math.round(Math.random()*10);
    const result = number * random;

    console.log(`${number} x ${random} = ${result}`);

    if (result % 2 == 0) {
        pares.push(result);        
    } else {
        impares.push(result);        
    }    
}

console.log(`Estos son los numeros pares: ${pares}`);
console.log(`Estos son los numeros impares: ${impares}`);