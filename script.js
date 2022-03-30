import Alert from "./components/alert.js"
import {validationCadastro} from "./validations/index.js" 


document.getElementById('adicionar').addEventListener('click', function () {
    document.getElementById("cadastro").style.display = "block";
    document.getElementById("cadastro").style.width = "500px";
    document.getElementById("cadastro").style.height = "300px";
    document.getElementById("cadastro").style.position = "fixed";
    document.getElementById("cadastro").style.zIndex = "90";
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
         url: "api/criarusuario.php",
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