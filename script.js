//ADICIONA EVENTO DE CARREGAMENTO NA JANELA E EVENTO DE CLICK NA FUNÇÃO CADASTRAR
window.addEventListener("load", () => {
    const elementoBotao = document.getElementById("botaoCadastrar")
    elementoBotao.addEventListener("click", cadastrar)
})

//ELEMENTO INPUT EM MÃOS
async function cadastrar() {
    const elementoTitulo = document.getElementById("tituloLivro")
    const elementoDescricao = document.getElementById("descricaoLivro")

    // LIMPANO TELA APOS RETORNO ERRO/SUCESSO
    resetMsgRetorno()

    // VALOR DOS INPUTS 
    title = elementoTitulo.value
    description = elementoDescricao.value

    //VALIDAÇÃO DOS CAMPOS
    if ((title === "") || (description === "")) {
        //ALTERA CSS DE UM OBJETO HTML(TAG DIV)
        document.getElementById("retornoErro").style.display = "inline-block"
        document.getElementById("retornoErro").style.backgroundColor = "#ac6363"
        document.getElementById("retornoErro").innerText = retorno.json()

    } else {
        //ATRIBUI URL Á UMA VARIAVEL, TAMBÉM OS DADOS PARA API
        const url = "https://target-api-simples.cyclic.app/livros"
        const payload = {
            title: title,
            description: description
        }

        //ATRIBUI O RETORNO DA API A UMA VARIAVEL
        const retorno = await dadosParaAPI(url, payload)
        // console.log(retorno)

        //ALTERA CSS DE UM OBJETO HTML(TAG DIV)
        const elementoResposta = document.getElementById("retornoSucesso")
        elementoResposta.style.display = "Block"
        elementoResposta.innerHTML = await retorno.json()
        document.getElementById("retornoErro").style.display = "none"
    }
}
//CRIA FUNÇÃO PARA CONFIGURAÇÃO E SELEÇÃO DE OBJETOS (CHAVE : VAOR) PARA API
async function dadosParaAPI(url, payload) {
    const resposta = await fetch(url,
        {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(payload)
        })
    return resposta

}

function resetMsgRetorno() {
    document.getElementById("retornoErro").style.display = "none"
    document.getElementById("retornoSucesso").style.display = "none"   
}