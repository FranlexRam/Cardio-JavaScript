/*
6) Solicitar al usuario una palabra y mostrar por alert:
-numero de consonantes.
-numero de vocales.
-longitud de la palabra(numero de letras).
*/

let palabra = prompt('Introduce una palabra:').toLowerCase();

let consonantes=0;
let vocales=0;

for (const letra of palabra) {
    if (letra== 'a' || letra== 'e' || letra== 'i' || letra== 'o' || letra== 'u') 
        vocales++;
    else 
        consonantes++;  
}
alert(`La palabra tiene ${vocales} vocales, ${consonantes} consonantes y un total de ${palabra.length} letras.`)

