let toggleNav = document.querySelector(".toggle-nav");
let mainNav = document.querySelector(".main-nav");

toggleNav.addEventListener('click', function (e) {
  e.preventDefault()
  console.log(mainNav.classList)
  mainNav.classList.toggle('active');
})
