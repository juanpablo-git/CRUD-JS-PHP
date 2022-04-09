<?php
require "conect.php";
$nome = $_POST['nome'];
$id = $_POST['id']; 
if($_POST['nome']){

    $valor = $dbh->query("SELECT * FROM teste WHERE nome LIKE '%$nome%' or id LIKE '%$id%'");
    $rows = $valor->fetchAll();
    echo json_encode($rows);
}elseif($_POST['id']){
    $valor = $dbh->query("SELECT * FROM teste WHERE id ='$id'");
    $rows = $valor->fetchAll();
    echo json_encode($rows);
}


?>  
