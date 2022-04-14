<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>Document</title>
</head>
<body>
<div class="container-fluid " style="display:flex; justify-content: center; align-items: center; height:100vh; ">
    <div class="card bg-light" style="max-width: 18rem;">
        <form  class="card-body"  method="post" > 
            <label for="" class="form-group">
                Login:
                <input type="text" name="nome" class="form-control" id="" required>
            </label>
            <label for="" class="form-group" >
                Password:
                <input type="text" name="senha" class="form-control" id="" required>
            </label>
            <div class="card-body">  
                <button  type="submit" class="btn btn-primary">Logar</button>
            </div>
        </form>
    </div>
</div>

</body>
</html>
<?php 
session_start();
$_SESSION['nome']=$_POST['nome'];
if($_SESSION['nome']){
header("Location: home.php");
}
?>
