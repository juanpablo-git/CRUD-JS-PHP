import Tabela from "./tabela.js"
export default function Card(msg){
    const data = JSON.parse(msg)
    console.log(msg)
    const cardContainer = document.createElement("div")
    cardContainer.style.display = "flex"
    cardContainer.style.justifyContent = "center"
    cardContainer.style.alignItems = "center"
  
    const cardContent = document.createElement("div")
    cardContent.style.position = "absolute"
    cardContent.style.top = "50px"
    cardContent.style.width = "500px"
    cardContent.style.height= "auto"
    

Tabela({title:["id","nome"],td:data,classe:"table-light bg-light"})

    cardContainer.appendChild(cardContent)
    document.body.appendChild(cardContainer)
}