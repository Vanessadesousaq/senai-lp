const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

frm.addEventListener("submit",(e)=>{
    const valor = Number(frm.inValor.value);//entrada de dados
    const tempo = Number(frm.inTempo.value);//entrada de dados
    const min = Math.ceil(tempo / 15 ); // processo 
    const preco = min * valor //processo
    resp2.innerText = `Valor a Pagar ${preco}`;//saida
    e.preventDefault();
});