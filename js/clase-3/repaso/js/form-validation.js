// Requerimos que la página haya cargado antes de ejecutar nuestro código
window.addEventListener('load', () => {
  // Capturamos el formulario
  var theForm = document.querySelector('form#addProject');

  // Obtenemos los inputs
  // Como elements son un HTML Collection y nosotros queremos recorrerlo, lo pasamos a un array común.
  var formImputs = Array.from(theForm.elements);

  // Ahora que tenemos el array sacamos el último input que es botón.
  formImputs.pop();

  formImputs.forEach()

});
