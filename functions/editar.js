var container = document.createElement("div");
container.style.display = "flex"
container.style.justifyContent = "center" 
container.style.alignItems = "center"


var form = document.createElement("div");
form.style.backgroundColor = "red"
form.style.display = "flex"
form.style.flexDirection = "column"
form.style.justifyContent = "center" 
form.style.alignItems = "center"
form.style.height = "500px"
form.style.width = "500px"
form.style.position = "fixed"
form.style.top = "0"
form.classList = "bg-light form-control"

var buttonEditar = document.createElement("button")
buttonEditar.innerText = "Editar" 
buttonEditar.addEventListener('click',function(){
    $.ajax({
        url:"./banco/editarUsuario.php",
        method: "POST",
        data:{nome:$('#dataNome').val(),email:$('#dataEmail').val(),id:$('#dataId').val()}
    }).done(function( msg ) {
        alert( "Data Saved: " + msg );
        container.remove()
      }).fail(function( jqXHR, textStatus ) {
        alert( "Request failed: " + textStatus );
      });
})

var buttonCancelar = document.createElement("button")
buttonCancelar.innerText = "Cancelar" 
buttonCancelar.addEventListener('click',function(){
    container.remove()
})

function editar(event){
    $.ajax({
        url:"./banco/pesquisa.php",
        method:"POST",
        data:{id:event,nome:null}
    }).done(function(msg){
        var data = JSON.parse(msg)[0]
        console.log("Requisiçao",data)

    
    
    form.innerHTML = ""
    form.innerHTML = `
    <label>Id:
    <input id='dataId' class='form-control' disabled value='${data.id}' />
    </label>
    <label>Nome:
    <input id='dataNome' class='form-control' value='${data.nome}'/>
    </label>
    <label>Email:
    <input id='dataEmail' class='form-control' value='${data.email}' />
    </label>
    
    `
    
container.appendChild(form)
form.appendChild( buttonEditar)
form.appendChild(buttonCancelar)
document.body.appendChild(container);

})

 }
 
//refrersh
function refresh(){
    window.location.href = "http://localhost/crud-JS-PHP/";
}