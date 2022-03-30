<?php
require "conect.php";
$nome = $_POST['nome'];
$email = $_POST['email'];
$id = $_POST['id'];

$teste = $dbh->exec("UPDATE teste SET nome='$nome',email='$email' WHERE teste.id = $id");

echo "$teste linhas modificadas";