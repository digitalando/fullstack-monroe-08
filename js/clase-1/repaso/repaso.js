// Tipos de datos

// Strings

var unTexto = 'Esto es un texto';

let otroTexto = 'Esto es otro texto';

const unTextoMas = 'Este texto no puede cambiar';

// Number

var unNumero = 34;
var otroNumero = 34.56;

// Booleanos

var unBooleano = true;
var unbooleano = false;

// console.log('unBooleano: ', unBooleano);
// console.log('unbooleano: ', unbooleano);

// Arrays

var unArray = [
  'rojo',
  'azul',
  'verde',
  'amarillo',
];

unArray[2]  // azul

var ultimoElemento = unArray.pop();

unArray.push(ultimoElemento);
unArray.push('violeta');

// unArray.length;

// Objetos Literal

var unObjetoLiteral = {
  propiedad: 'valor',
  metodo: function() { return this.propiedad },
}

unObjetoLiteral.propiedad;
unObjetoLiteral.metodo();

// undefined
var indefinido;
console.log(indefinido)


// Operadores

// Aritméticos

var unNumero = 10;
var otroNumero = 20;

var suma = unNumero + otroNumero;
var resta = unNumero - otroNumero;
var multiplicacion = unNumero * otroNumero;
var division = unNumero / otroNumero;
//...

// Comparación
var mayor = unNumero > otroNumero;
var mayorIgual = unNumero >= otroNumero;
var menor = unNumero < otroNumero;
var menorIgual = unNumero <= otroNumero;
var igualdad = unNumero == otroNumero;
var igualdadEstricta = unNumero === otroNumero;
var desigualdad = unNumero != otroNumero;
var desigualdadEstricta = unNumero !== otroNumero;

// Lógicos
// && -> and
// || -> or
// ! -> not

var modulo = otroNumero % unNumero; // Resto de la division

// Condicionales

var edad = 16;

if(edad > 18) {
  console.log('Es mayor de edad');
} else if (edad >= 16 && edad < 18) {
  console.log('Es mayor de edad si está emancipado');
} else {
  console.log('Es menor de edad');
}

console.log('-----------------------');
console.log();

// Bucles
let otroArray = ['que', 'se', 'yo'];

consoleTitle('for');


for(let i = 0; i < otroArray.length; i++) {
  console.log(otroArray[i]);
}

consoleTitle('for of');


for(let item of otroArray) {
  console.log(item);
}

consoleTitle('do while');

let i = 0;
do {
  console.log(otroArray[i]);
  i++;
} while (
  i < otroArray.length
);

consoleTitle('while');

i = 0;

while (
  i < otroArray.length
) {
  console.log(otroArray[i]);
  i++;
};

consoleTitle('for ... in');

let persona = {
  nombre: 'Teodoro',
  apellido: 'García',
  edad: 56,
  saludar() { return 'Hola, yo soy ' + this.nombre + ' ' + this.apellido},
  decirEdad() { return `Tengo ${this.edad} años`},
}

for (let prop in persona) {
  console.log(prop + ': ' + persona[prop]);
}


// function

function consoleTitle(title) {
  console.log();
  console.log(title);
  console.log('-----------------------');
}
