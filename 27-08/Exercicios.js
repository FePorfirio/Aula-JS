//5 EXERCICIO DE REPETIÇÃO
//1 a 100
const numeroSecreto = Math.floor( Math.random()*100) + 1;
let palpite;
let tentativas = 0;

do {
 console.log("Advinhe um numero entre 1 e 10")
//alert(Math.floor)(Math random()*100) + 1

    palpite = Number(prompt("Adivinhe o numero secreto entre 1 e 100:"));
    tentativas++;

    if (Number.isNaN(palpite)) {
        alert("Digite um número válido.")
    }
    else if (palpite === numeroSecreto) {
        alert("ACERTOU!!!"+ "Em" + tentativas + "tentativas.")
        alert("Numero de tentativas: " + tentativas)
    } else {
        alert("Voce errou! Tente novamente.");
    }

} while (palpite !== numeroSecreto);



