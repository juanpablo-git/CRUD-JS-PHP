<?php
require "conect.php";
$nome = $_POST['nome'];
$id = $_POST['id']; 
$valor = $dbh->query("SELECT * FROM teste WHERE id = '$id' OR nome LIKE '%$nome%'");
$rows = $valor->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($rows);

?>  
