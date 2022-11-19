/*
8) Programa donde el usuario introduzca un numero y que nos diga cual es mayor, el menor o si son iguales:
8.1) Si num1 introducido no es un numero o es un numero menor o igual a cero, que nos vuelva a pedir el numero.
*/
let num1;
let num2;


while (num1!=0) {

let num1 = parseInt(prompt('Introduce un numero del 1 al 10.'));
let num2 = Math.ceil(Math.random() * 10);

    

if (num1>0) {
    
    if (num1 > num2) {
        alert(`El primer numero ${num1} es MAYOR que el segundo ${num2}`);
        break;
        
    } else if (num1 < num2) {
        alert(`El primer numero ${num1} es MENOR que el segundo ${num2}`);
        break;
        
    } else {
        alert(`Ambos numeros son iguales:\nTu numero: ${num1}.\nNumero random: ${num2}.`);
        break;
    }

} else {

    alert('Dato invalido, por favor no ingresar letras o ingresar un numero mayor que cero.')

}



}
