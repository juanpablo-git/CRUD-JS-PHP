<?php
require "./banco/conect.php";

?>
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        
    <script src="./script.js" type="module"></script>
    <script src="./functions/editar.js" ></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <title>Listagem</title>
</head>
<body>
<div class="container">
    <div style="width:100%; height:100%; display:flex; justify-content:center;" >
       <div class="card" id="cadastro" style="display:none;" >
            <label for="nome">nome:</label>
            <input class="form-control" type="text" name="nome" id="nome" required aria-label="Disabled input example">

            <label  for="email">email:</label>
            <input class="form-control" type="text" name="email" id="email" required aria-label="Disabled input example">
            
            <label for="senha">senha:</label>
            <input class="form-control" type="text" name="senha" id="senha" required aria-label="Disabled input example">
            <div>
            <button  type="submit" class="form-control" id="confirmar">confirmar</button> <button  class="form-control" id="cancelar">cancelar</button>
            </div>
        </div>
    </div>
    <table class=" table">

    <thead align="rigth">
    <th>
        <button id="refresh" onclick="refresh()"> 🔄 </button>
    </th>
    <th >
        <button id="adicionar">adicionar +</button>
    </th>
    <th colspan="2">
        <input  id="search" value="" placeholder="pesquisar"/>
    </th>
    <th>
        <?php session_start();
              echo $_SESSION['nome']."<a class='badge' href='sair.php'>❌</a>";
        ?>
    </th>
    </thead>

    <thead class="table-light">
    <th colspan="5">
    <p class="h4">Listagem de Usuarios</p>
    </th>
    </thead>

    <thead>
    <th scope="col">ID</th>
    <th scope="col">Nome</th>
    <th scope="col">Email</th>
    <th scope="col">Senha</th>
    <th scope="col">Editar</th>
    </thead>
    <tbody>
    <?php foreach($dbh->query('SELECT * from teste') as $row) { ?>
        <tr>
            <td><?php echo $row['id'] ?></td>
            <td><?php echo $row['nome'] ?></td>
            <td><?php echo $row['email'] ?></td>
            <td><?php echo $row['senha'] ?></td>
            <td><button id='editar' onclick="editar(this.value)" value="<?=$row['id']?>">📝</button></td>

        </tr>
    <?php } ?>
    </tbody>
    </table>
</div>
</body>
</html>
