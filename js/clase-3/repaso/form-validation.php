<?php require_once 'forms/projectRegisterForm.php'; ?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="css/styles.css">
    <title>Formulario de Registro | Proyectos DH</title>
    <script src="js/form-validation.js" type="text/javascript"></script>
  </head>
  <body>
    <header>
      <h1>Formulario de Registro | Proyectos DH</h1>
    </header>
    <div class="container">
      <main>
        <div class="register-form">
          <form method="post" action="" id="addProject">

            <div class="row">
              <label> Nombre del proyecto
                <input type="text" name="projectName" value="<?= old('projectName'); ?>">
              </label>
              <?php if ( hasError('projectName') ) : ?>
                <p class="errors"><?= getError('projectName') ?></p>
              <?php endif; ?>
            </div>

            <div class="row">
              <label> Tipo de proyecto
                <select name="projectType">
                  <option value="">Seleccione un tipo</option>
                  <option value="Marketplace" <?= selected(old('projectType'), 'Marketplace'); ?>>Marketplace</option>
                  <option value="Red social" <?= selected(old('projectType'), 'Red social'); ?>>Red social</option>
                  <option value="Juego" <?= selected(old('projectType'), 'Juego'); ?>>Juego</option>
                </select>
              </label>
              <?php if ( hasError('projectType') ) : ?>
                <p class="errors"><?= getError('projectType') ?></p>
              <?php endif; ?>
            </div>

            <div class="row">
              <label> Imagen
                <input type="file" name="projectImage">
              </label>
            </div>

            <div class="row">
              <label> Email
                <input type="text" name="email"  value="<?= old('email'); ?>">
              </label>
              <?php if ( hasError('email') ) : ?>
                <p class="errors"><?= getError('email') ?></p>
              <?php endif; ?>
            </div>

            <div class="row">
              <label> Contraseña
                <input type="password" name="pass" value="">
              </label>
            </div>

            <div class="row">
              <label> Confirme contraseña
                <input type="password" name="repass" value="">
              </label>
              <?php if ( hasError('pass') ) : ?>
                <p class="errors"><?= getError('pass') ?></p>
              <?php endif; ?>
            </div>

            <div class="row">
              <button type="submit">Enviar</button>
            </div>
          </form>
        </div>
      </main>
    </div>
    <footer>
      <h2>Formulario de Registro | Proyectos DH</h2>
    </footer>
  </body>
</html>
