const frm = document.querySelector("form")// cria referência ao form e aos elementos de resposta (pelo seu id)
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")
// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
const produto = frm.inProduto.value // obtém o conteúdo dos campos
const preco = Number(frm.inPreco.value)
const descontoproduto = preco * 0.50 // calcula valor da entrada
const valor = (preco * 2) + descontoproduto // ... e das parcelas
resp1.innerText = `Promoção de: ${produto}` // exibe as respostas
resp2.innerText = `preço R$: ${preco.toFixed(2)}`
resp3.innerText = `Leve 3 por :  ${valor.toFixed(2)}`
e.preventDefault() // evita envio do form
})
