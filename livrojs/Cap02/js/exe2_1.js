//criar uma referencia ao form e ao h3 (onde sera exibida a resposta )
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

//cria um 'ouvinte' de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit",(e)=>{
    const nome = frm.inNome.value; //obtem o nome digitado no form
    resp.innerText = `Olá ${nome}`; //exibe a resposta no programa 
    e.preventDefault();//vai evitar que o form envie od dados pro destino.php
});

function executar(evento){
    const nome = frm.inNome.value;//obtem o nome digitado no form
    resp,innerHTML = `Olá <i> ${nome}</i>`; //exibe a resposta do programa
    evento.preventDefault();
}