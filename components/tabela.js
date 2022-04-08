export default function tabela({title,td,classe}){
    //container
   const container = document.createElement("div")
   container.style.position = "absolute"
   container.style.padding = "10px"
   container.style.width = "100%"
   container.style.height = "90%"
   container.style.display = "flex"
   container.style.justifyContent = "center"
   container.style.alignItems = "center"
   container.style.top = "10%"
   container.setAttribute("id","cardSearch")

   container.addEventListener('click', function (){
       container.remove()
   })
  //tabela
    const tabela = document.createElement("table")
    tabela.setAttribute("class",classe)    

    tabela.style.position = "absolute"
    tabela.style.width = "500px"
    //titulo tabela
    const head = document.createElement("thead")
    
    title.map(i=>{
        let hed =document.createElement("th")
        hed.innerHTML = i  
        head.appendChild(hed)
    })
    td.map((i)=>{
        //linha tabela
    let linha = document.createElement("tr")
        linha.innerHTML=`<td>${i['id']}</td> <td>${i['nome']}</td> `

        tabela.appendChild(linha)
    })
 



    tabela.appendChild(head)
    container.appendChild(tabela)
    document.body.appendChild(container)
}