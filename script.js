window.addEventListener("load", () => {
    const elementoBotao = document.getElementById("botaoCadastrar")
    elementoBotao.addEventListener("click", cadastrar)
})



function cadastrar() {
    const elementoTitulo = document.getElementById("tituloLivro")
    const elementoDescricao = document.getElementById("descricaoLivro")
    titleInput = elementoTitulo.value
    descriptionInput = elementoDescricao.value
    console.log(titleInput)
    console.log("clicou")
}
