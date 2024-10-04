const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = frm.inNome.value;
    //  alert(nome);
    const nota1 = Number(frm.inNota1.value);
    const nota2 = Number(frm.inNota2.value);
    const media = (nota1 + nota2) / 2;

    //  alert(media.toFixed(2));
    resp1.innerText = `media das notas: ${media.toFixed(2)}`;
    // se a media for maior ou igual a 7 exibir aprovado senão "reprovado"
    // alert( media >= 7);
    if (media >= 7) {
        // alert("aprovado");
        resp2.innerText = `parabéns ${nome}! voce foi aprovado`;
        resp2.style.color = "blue";
    } else {
        // alert("reprovado");
        resp2.innerText = `sinto muito ${nome}! voce foi reprovado`;
        resp2.style.color = "red";
    }
})