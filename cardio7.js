/*
7) Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "rosa"],
determinar si un color introducido por el usuario a traves de un prompt se
encuentra dentro del array o no.
*/


const colors = ["azul", "amarillo", "rojo", "verde", "rosa"];

const color = prompt('Introduce un color:').toLocaleLowerCase();


/*
Solucion #1:
if (colors.indexOf(color) !== -1) {
    alert('Tu color se encuentra en la base de datos');
} else {
    alert('Tu color NO esta registrado en la base de datos.');
}
*/


//Solucion #2:
(colors.includes(color) ? alert('Tu color se encuentra en la base de datos') : alert('Tu color NO esta registrado en la base de datos.'));