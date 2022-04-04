<?php

 require "./conect.php";
 $nome = $_REQUEST['nome'];
 $senha = $_REQUEST['senha'];
 $email = $_REQUEST['email'];
 $count = $dbh->exec("INSERT INTO teste(nome, senha, email) VALUES ('$nome','$senha','$email')");
if($count >= 1){
    print("Mensagem: Usuario adicionado com sucesso");
}else{
    print("Mensagem: Não foi adicionado usuario.");
}
