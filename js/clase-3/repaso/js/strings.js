console.log('Práctica de strings');


// # Strings
//
// Para JS, los strings son similares a un array. En este caso un array de letras.
//
// ## Propiedades y métodos
//
// // Tomamos este string para todos los ejemplos
var string = 'Éste es un texto';
//
// ### .length
// // Devuelve la cantidad de caracteres de un string
//
string.length // 16
//
//
// ### .toLowerCase()
// // Convierte el string a minúsculas
//
string.toLowerCase() // 'éste es un texto'
//
//
// ### .indexOf()
// // Busca un string dentro de nuestro string
// // Devuelve la primera ocurrencia
//
string.indexOf('texto'); // 11
string.indexOf('php'); // -1 porque no existe en el string
//
//
// ### .match()
// // Machea una expresión regular contra nuestro string
// // y devuelve un array de resultados.
//
string.match(/expr/g)
string.match(/e./g)
//
//
// ### .test()
// // Verifica si nuestro string coincide con la expresión regular provista
// // Devuelve true si coincide, false de lo contrario
//
string.test()
cadena.test(/expr/g);
//
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
//
// https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions
// https://www.regular-expressions.info/
// https://regexr.com/
//
//
// ### .slice()
// // Nos da una tajada del string
//
// string.slice(start,end);
// string.slice(11,16); // Texto
// string.slice(-5); // Texto
//
//
// ### .trim()
// // Quita los espacios al comienzo y final del string, los del medio no.
//
// var otroString = '   con  muchos  espacios  ';
// otroString.trim(); // 'con  muchos  espacios'
//
//
// ### .split()
// // Separa el string usando el separador que indiquemos
// // Nos devuelve un array con las partes.
//
// var tercerString = 'Josefina, Javier, Octavio, Germán'
// tercerString.split(', ')
//
//
// ### .replace()
// // Reemplaza una parte de nuestro string por otra
//
// tercerString.replace('Javier', 'Rosa');
//
//
// // Todas estas funciones no modifican la variable orginal,
// // sinó que devuelven el resultado de la acción que hayamos realizado.
// // Para guardar los cambios tenemos que sobrescribir la variable original
// // o crear una nueva.
// var stringActualizado = tercerString.replace('Javier', 'Rosa');
//
//
// ### Convirtiendo otros tipos de datos a string
//
// var number = 1001;
// var numberString = String(number);
// var numberString = number.toString();
