<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>

    <?php
      class Person {
        var $name;

        function set_name($new_name) {
          $this->name = $new_name;
        }
      }

      $stephan = new Person;

      echo $stephan->name;

    ?>





  </body>
</html>
