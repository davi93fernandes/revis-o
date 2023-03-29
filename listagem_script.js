window.addEventListener("load", () => {
    const elementoBotao = document.getElementById("botaoBuscar")
    elementoBotao.addEventListener("click", mostrarLivros)
})

async function mostrarLivros() {

    //processamento

    //fatch
    const url = "https://target-api-simples.cyclic.app/livros"
    const resposta = await fetch(url)
    const respostaLivros = await resposta.json()

    //CHAMAMENTO DAS FUNÇÕES P/ FUNÇÃO PRINCIPAL

    //const texto = await montarRetornoList(respostaLivros)
    //const texto = await montarRetornoCard(respostaLivros)
    const texto = montarRetornoTable(respostaLivros)

    //saida de daods
    const listaLivros = document.getElementById("listagem")
    listaLivros.innerHTML = texto

}

//ENCAPSULAMENTO DAS FUNÇÕES LOOP

/*async function montarRetornoList(respostaLivros) {
let listaTexto = ""
for (let posLivro = 0; posLivro < await respostaLivros.length; posLivro++) {
    listaTexto +=
        `${respostaLivros[posLivro].id} - 
        ${respostaLivros[posLivro].title} -
        ${respostaLivros[posLivro].description} </br>`

}
return listaTexto
}*/

/*async function montarRetornoCard(respostaLivros) {
    let cardTexto = ""
    for (let posLivro = 0; posLivro < await respostaLivros.length; posLivro++) {
        cardTexto += `
        <div class="card">
        ${respostaLivros[posLivro].title}</br>
        ${respostaLivros[posLivro].description}
        
        </div>`

    }
    return cardTexto
}*/

function montarRetornoTable(respostaLivros) {

    let headTable = `
        <table border="2">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Título</th>
                    <th>Descrição</th>
                </tr>
            </thead>        
            <tbody>
        `
    let bodyTable = ""

    for (let posLivro = 0; posLivro < respostaLivros.length; posLivro++) {
        bodyTable += `
        <tr>
            <td>${respostaLivros[posLivro].id}</td>
            <td>${respostaLivros[posLivro].title}</td>
            <td>${respostaLivros[posLivro].description}</td>
        </tr>
         `
    }
    let endTable = `
            </tbody>
         </table>
       `
    const table = headTable + bodyTable + endTable
    return table
}







