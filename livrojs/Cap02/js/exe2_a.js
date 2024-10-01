const frm = document.querySelector("form")// cria referência ao form e aos elementos de resposta (pelo seu id)
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    const medicamento = frm.inMedicamento.value // obtém o conteúdo dos campos
    const preco = Number(frm.inPreco.value)
    const precox2 = preco * 2// calcula valor da entrada 
    const desconto = Math.floor(precox2)
    resp1.innerText = `Promoção de: ${medicamento}` // exibe as respostas
    resp2.innerText = `Leve 2 por apenas R$: ${desconto.toFixed(2)}`
    e.preventDefault()
})