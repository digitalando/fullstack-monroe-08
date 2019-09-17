console.log('Codigo desde el archivo main.js');

// var mainTitle = document.getElementById('mainTitle');
var mainTitle = document.querySelector('#mainTitle');
var subTitle = document.querySelector('h2');
var contentDiv = document.querySelector('div.content');

mainTitle.innerHTML = 'Mi nuevo titular';

var contactLink = document.querySelector('.item-contact');

if (
  contactLink.hasAttribute('href')
  && contactLink.getAttribute('href').length <= 1
  ) {
  contactLink.setAttribute('href', 'contact.php');
}

var colors = ['red', 'brown', 'orange', 'tomato', 'yellow'];

var lis = document.querySelectorAll('ul li');
let liArray = Array.from(lis);
for (let li of liArray) { li.style.color = colors[Math.floor(Math.random()*5)] }
