// fetch('https://restcountries.eu/rest/v2/all')
//   .then( function (response)  {
//     return response.json()
//   })
//   .then( function (data)  {
//     let select = document.getElementById('country');
//     for(country of data) {
//       let option = document.createElement('option');
//       option.append(document.createTextNode(country.name));
//       option.setAttribute('value', country.alpha3Code);
//
//       select.append(option);
//     }
//   })
//   .catch( function (error) {
//     return console.error(error)
//   })


goFetch = (url, callback) => {
  fetch(url)
    .then( function (response)  {
      return response.json()
    })
    .then( function (data)  {
      callback(data)
    })
    .catch( function (error) {
      return console.error(error)
    })
}

console.log('declaración goFetch');

goFetch('https://restcountries.eu/rest/v2/all', function(data) {
  let select = document.getElementById('country');
  for(country of data) {
    let option = document.createElement('option');
    option.append(document.createTextNode(country.name));
    option.setAttribute('value', country.alpha3Code);

    select.append(option);
  }
  console.log('llegó goFetch de paises');
})
console.log('fin goFetch de paises');


goFetch('https://apis.datos.gob.ar/georef/api/provincias', function(data) {
  let select = document.getElementById('province');
  for(province of data.provincias) {
    let option = document.createElement('option');
    option.append(document.createTextNode(province.nombre));
    option.setAttribute('value', province.id);

    select.append(option);
  }
  console.log('llegó goFetch de provincias');
});
console.log('fin goFetch de paises');



window.addEventListener('load', () => {
  console.log('terminó la carga de la página');

  let select = document.getElementById('country');
  let provincesRow = document.querySelector('form .row-provinces');

  select.addEventListener('change', () => {
    let currentValue = select.options[select.selectedIndex].value;
    if (currentValue === 'ARG') {
      provincesRow.style.display = 'block';
    } else {
      provincesRow.style.display = 'none';
    }
  })


});

console.log('llegé al final del js');
