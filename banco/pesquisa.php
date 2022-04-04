<?php
require "conect.php";
$nome = $_POST['nome'];
$id = $_POST['id'];
$valor = $dbh->query("SELECT * FROM teste WHERE nome LIKE '%$nome%'  ");
$rows = $valor->fetchAll();

echo json_encode($rows);

?>  
