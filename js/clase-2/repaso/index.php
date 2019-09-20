<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Interactuando con el DOM</title>
    <link rel="stylesheet" href="css/styles.css">
  </head>
  <body>
    <header>
      <nav class="navbar header-navbar">
          <a href="#" class="navbar-item item-home">Home</a>
          <a class="navbar-item item-about">Acerca de</a>
          <a href="#" class="navbar-item item-contact">Contacto</a>
          <a href="#" class="navbar-item item-bn">Blanco y negro</a>
      </nav>
    </header>
    <main>
      <div class="container">
        <h1 id="mainTitle">Interactuando con el DOM</h1>
        <h2>Un subtítulo</h2>
        <div class="content">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
          </ul>
          <h2>Un form</h2>
          <form class="" action="success.php" method="post">
            <div class="row">
              <label for="">
                <span>Nombre</span>
                <input type="text" name="name" value="">
              </label>
            </div>
            <div class="row">
              <label for="">
                <span>Apellido</span>
                <input type="text" name="name" value="">
              </label>
            </div>
            <div class="row">
              <label for="">
                <span>Email</span>
                <input type="text" name="name" value="">
              </label>
            </div>
            <div class="row">
              <label for="" class="hobbies">
                <span>Pasatiempos</span>
                <input type="text" name="hobby[]" placeholder="Agregá tu hobby">
              </label>
              <button id="addHobby">Agregar pasatiempo</button>
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </main>
    <footer>
      <nav class="navbar header-navbar">
          <a href="#" class="navbar-item">Home</a>
          <a href="#" class="navbar-item">Contacto</a>
      </nav>
    </footer>
    <script src="js/main.js"></script>
  </body>
</html>
