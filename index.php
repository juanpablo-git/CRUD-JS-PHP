<?php
 session_start();
if($_SESSION['nome']){
     header('Location:home.php');
}else{
     header('Location:login.php');
}
