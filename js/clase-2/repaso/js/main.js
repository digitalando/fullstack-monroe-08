// window.onload = () => {
//   var itemHome = document.querySelector('.item-home');
//   itemHome.classList.add('active');
// };

window.onbeforeunload = () => {
  alert('No te vayas porfa');
};


let itemHomeActivo = () => {
   var itemHome = document.querySelector('.item-home');
   itemHome.classList.add('active');
}

let bodyFondoTomate = () => {
  let body = document.querySelector('body');
  body.style.backgroundColor = 'tomato';
}

let bodyToggle = (event) => {
  let body = document.querySelector('body');
  body.classList.toggle('blancoNegro');

  let textoBoton = event.target.innerHTML;

  if (textoBoton == 'Blanco y negro') {
    event.target.innerHTML = 'Color';
  } else {
    event.target.innerHTML = 'Blanco y negro';
  }
}

// En el eventListener no va el prefijo on de los eventos
window.addEventListener('load', itemHomeActivo);
//window.addEventListener('load', bodyFondoTomate);
//window.removeEventListener('load', itemHomeActivo);

let botonBn = document.querySelector('.item-bn');

botonBn.addEventListener('click', bodyToggle);

let botonAddHobby = document.querySelector('#addHobby');

let addHobby = (event) => {
  event.preventDefault();

  let hobbies = document.querySelector('.hobbies');

  let input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('name', 'hobby[]');
  input.setAttribute('placeholder', 'Agregá tu hobby');

  hobbies.append(input);
}

botonAddHobby.addEventListener('click', addHobby);


// console.log('Hola desde main.js');
//
// // function saludar (nombre, apellido = 'Anonimous') {
// //   // return "Hola " + nombre + " " + apellido;
// //   return `Hola ${nombre} ${apellido}`;
// // }
//
// var saludar = function (nombre, apellido = 'Anonimous') {
//   // return "Hola " + nombre + " " + apellido;
//   return `Hola ${nombre} ${apellido}`;
// }
//
// // console.log(saludar);
// // console.log(saludar('Gabriel'));
// //
// // function calculadora (operacion, num1, num2) {
// //   function sumar() {
// //     return num1 + num2;
// //   }
// //   function restar() {
// //     return num1 - num2;
// //   }
// //   function multiplicar() {
// //     return num1 / num2;
// //   }
// //   function division () {
// //     return num1 * num2;
// //   }
// //   if (operacion == 'sumar') {
// //     return sumar(num1, num2);
// //   } else {
// //     return 'No sabo';
// //   }
// // }
//
// // console.log(calculadora('sumar', 10, 15));
//
//
// function calculadora (operacion, num1, num2) {
//   return operacion(num1, num2);
// }
// //
// // let sumar = function (num1, num2) {
// //   return num1 + num2;
// // }
//
// // Arrow fuction
// let sumar = (num1, num2) => num1 + num2;
//
// console.log(calculadora(sumar, 45, 67));
//
// // console.log(calculadora(function(num1, num2) { return num1 - num2 }, 45, 67));
//
// console.log(calculadora((num1, num2) => num1 - num2, 45, 67));
//
//
// // Arrays
//
// let numeros = [10,2,324,343,45,-12,0, 45, 101];
//
// var ultimoElemento = numeros.pop();
// var primerElemento = numeros.shift();
// var indiceDeElemento = numeros.indexOf(324);
// var indiceDeElemento = numeros.indexOf(666);
//
// // var contador = 0;
// // for (let numero of numeros) {
// //   contador += numero;
// // }
// // console.log('La suma de los elementos es:', contador);
//
// //console.log(indiceDeElemento);
//
// // recorrer un array con forEach()
// // array.forEach((numero) => console.log(numero));
//
// var buscandoElemento = numeros.find((numero) => numero == 45);
//
// var elDoble = numeros.map((numero) => numero * 2);
//
// let nombres = ['Ezequiel', 'Antonio', 'Tormenta', 'Patricio', 'Mariela'];
// let apellidos = ['Fernández', 'Sanchez', 'Pérez', 'Rodríguez', 'Fernández'];
//
// var nombresApellidos = nombres.map((nombre) => nombre + ' ' +  apellidos[Math.floor(Math.random() * apellidos.length-1)]);
//
// var losFernandez = apellidos.filter((apellido) => apellido == 'Fernández');
//
// var suma = numeros.reduce((acumulador, numero) => acumulador += numero);
//
// var personas = nombresApellidos.reduce(
//   (acumulador, persona) => acumulador += ', ' + persona
// );
//
// console.log(suma);
// console.log(personas);
// console.log(numeros.join(", "));
