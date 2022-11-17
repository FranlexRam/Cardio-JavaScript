/*
2)Escribir un programa que pueda calcular el area de 3 figuras geometricas.
triangulo = b * h/2
rectangulo = b * h
circulo =  π * r2 (pi * radio al cuadrado)
*/


let figure = prompt('Ingresa la figura geometrica para calcular su area:\nPuedes colocar: triangulo, rectangulo o circulo.');
let base='';
let altura='';
let radio='';

switch (figure) {
    case 'triangulo':
        base=prompt('Ingresa la base del triangulo:');
        altura=prompt('Ingresa la altura del triangulo:');

        alert(`El area del triangulo es ${(base*altura)/2}`);        
        break;

    case 'rectangulo':
        base=prompt('Ingresa la base del rectangulo:');
        altura=prompt('Ingresa la altura del triangulo');

        alert(`El area del rectangulo es ${base*altura}`);
        break;

    case 'circulo':
        radio=prompt('Ingrese el radio del circulo:');

        alert(`El area del circulo es ${Math.PI * Math.pow(radio,2)}`);
        break;


    default:
        alert('Ingresar una figura geometrica valida (triangulo, rectangulo o circulo.)');
        break;
}