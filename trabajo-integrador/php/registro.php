<?php
  $pageTitle = 'Formulario de Registro | Proyectos DH';

  require_once 'forms/forms.php';

  if ($_POST) {

    // Validamos nombre de proyecto
    if (length(old('projectName'), 5, 20)) {
      addError('projectName', 'El nombre de proyecto debe tener entre 5 y 20 caracteres');
    }

    if ( empty(old('projectType'))) {
      addError('projectType', 'Debe elegir un tipo de proyecto');
    }

    if (!email(old('email'))) {
      addError('email', 'Debes escribir un email válido');
    }

    if (isValid()) {
      header('location: registro-exitoso.php');
    }
  }

?>
<?php require_once 'partials/head.php' ?>
  <?php require_once 'partials/header.php' ?>
    <div class="container">
      <main>
        <div class="register-form">
          <form method="post">

            <div class="row">
              <label> Nombre del proyecto
                <input type="text" name="projectName" value="<?= old('projectName') ?>">
              </label>
              <?php if (hasError('projectName')) : ?>
                <p class="errors"><?= getError('projectName') ?></p>
              <?php endif ?>
            </div>

            <div class="row">
              <label> Tipo de proyecto
                <select name="projectType">
                  <option value="">Seleccione un tipo</option>
                  <option value="Marketplace" <?= selected(old('projectType'), 'Marketplace') ?>>Marketplace</option>
                  <option value="Red social" <?= selected(old('projectType'), 'Red social') ?>>Red social</option>
                  <option value="Juego" <?= selected(old('projectType'), 'Juego') ?>>Juego</option>
                </select>
              </label>
              <?php if (hasError('projectType')) : ?>
                <p class="errors"><?= getError('projectType') ?></p>
              <?php endif ?>
            </div>

            <div class="row">
              <label> Imagen
                <input type="file" name="projectImage">
              </label>
            </div>

            <div class="row">
              <label> Email
                <input type="text" name="email"  value="<?= old('email') ?>">
              </label>
              <?php if (hasError('email')) : ?>
                <p class="errors"><?= getError('email') ?></p>
              <?php endif ?>
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
            </div>

            <div class="row">
              <button type="submit">Enviar</button>
            </div>
          </form>
        </div>
      </main>
    </div>
    <?php require_once 'partials/footer.php' ?>
  </body>
</html>
