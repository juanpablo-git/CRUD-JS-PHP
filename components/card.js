export default function Card(msg){
    const data = JSON.parse(msg)
    const cardContainer = document.createElement("div")
    cardContainer.style.display = "flex"
    cardContainer.style.justifyContent = "center"
    cardContainer.style.alignItems = "center"
    

    const cardContent = document.createElement("div")
    cardContent.style.position = "absolute"
    cardContent.style.top = "50px"
    cardContent.style.width = "500px"
    cardContent.style.height= "auto"
    cardContent.innerHTML = ''

    cardContent.classList = 'bg-light '
    cardContent.innerHTML = `<table     >${data.map(i=>`<tr> 
                                <td class='border-bottom'>${i.id}</td> 
                                <td class='border-bottom'>${i.nome}</td>
                            </tr>`)}</table>`
    cardContainer.appendChild(cardContent)
    document.body.appendChild(cardContainer)
    $("#text").remove()
}