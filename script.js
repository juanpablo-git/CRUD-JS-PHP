import Alert from "./components/alert.js"
import {validationCadastro} from "./validations/index.js" 
import CardSearch from "./components/card.js"


document.getElementById('adicionar').addEventListener('click', function () {
    document.getElementById("cadastro").style.position = "fixed";
    document.getElementById("cadastro").style.display = "flex";
    document.getElementById("cadastro").style.margin = "0 34vw"
    document.getElementById("cadastro").style.width = "500px";
    document.getElementById("cadastro").style.height = "300px";
    document.getElementById("cadastro").style.zIndex = "1000";


    document.getElementById("cadastro").style.backgroundColor = "LightGray";
    document.getElementById("cadastro").style.padding = "10px";
    document.getElementById("cadastro").style.borderRadius = "1%";


})

document.getElementById('cancelar').addEventListener('click', function () {
    document.getElementById("cadastro").style.display = "none";

})

document.getElementById('confirmar').addEventListener('click', function () {

    let nome = $('#nome').val()
    let senha = $('#senha').val()
    let email = $('#email').val()
    let teste =  validationCadastro({nome,email,senha})
    if (teste){
     $.ajax({
         url: "banco/criarusuario.php",
         data: {
             nome,
             senha,
             email
            },
            
     }).done(function (resposta) {
         document.getElementById("cadastro").style.display = "none";
        })
    }


})

document.getElementById('editar').addEventListener('click',function(event){
    console.log(event)
    
})

$("#search").change(function(event){
    console.log(event.target.value)
    $.ajax({
        url:"./banco/pesquisa.php",
        method:"POST",
        data:{nome:event.target.value}
    }).done(function(msg){
       console.log("esta fazendo req",msg)
        CardSearch(msg)
    }).fail(function(msg) {
        alert( "error" +msg);
      })
   
})
