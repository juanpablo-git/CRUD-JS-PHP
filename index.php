<?php
require "./banco/conect.php";
?>
<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    
    <script src="./functions/scriptNotModule.js" ></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <title>Listagem</title>
</head>
<body>
<h4></h4>
<div class="card" id="cadastro" style="display:none;">
    <label for="nome">nome:</label>
    <input class="form-control" type="text" name="nome" id="nome" aria-label="Disabled input example">

    <label  for="email">email:</label>
    <input class="form-control" type="text" name="email" id="email" aria-label="Disabled input example">
    
    <label for="senha">senha:</label>
    <input class="form-control" type="text" name="senha" id="senha" aria-label="Disabled input example">
    <div>
    <button  class="form-control" id="confirmar">confirmar</button> <button  class="form-control" id="cancelar">cancelar</button>
    </div>
</div>
<table class=" table">

<thead align="rigth">
<th >
    <button id="refresh" onclick="refresh()"> 🔄 </button>
</th>
<th >
    <button id="adicionar">adicionar +</button>
</th>
<th colspan="3">
    <input  id="search" value="" />
</th>
</thead>

<thead class="table-light">
<th colspan="5">
<p class="h4">Listagem de Usuarios</p>
</th>
</thead>

<thead>
<th>ID</th>
<th>Nome</th>
<th>Email</th>
<th>Senha</th>
<th>Editar</th>
</thead>
<tbody>
<?php foreach($dbh->query('SELECT * from teste') as $row) { ?>
    <tr>
        <td><?php echo $row['id'] ?></td>
        <td><?php echo $row['nome'] ?></td>
        <td><?php echo $row['email'] ?></td>
        <td><?php echo $row['senha'] ?></td>
        <td><button id='editar' onclick="editar(event)" value=<?=json_encode($row)?>>📝</button></td>

    </tr>
<?php } ?>
</tbody>
</table>
<script src="./script.js" type="module">

</script>

</body>
</html>
