<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <h1>Práctica de php</h1>
    <h2>Ejercicio 1</h2>
    <?php
    $persona = [
      'nombre' => 'Juan',
      'apellido' => 'Topo',
      'edad' => 88
    ];
    ?>
    <hr>
    <pre><?php print_r($persona); ?></pre>
    <h2>Ejercicio 2</h2>
    <?php
    $persona = [
      'nombre' => 'Juan',
      'apellido' => 'Topo',
      'edad' => 88
    ];
    ?>
    <?php print_r($persona); ?>

  </body>
</html>
