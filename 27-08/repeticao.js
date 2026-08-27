//1 exercício Repetição "While".
while (contador <=5){
    console.log("contagem:" + contador)
}

//contagem regressiva
let tempo =10
while(tempo >0){
    console.log(tempo)
    
    tempo--
    
}
console.log

//2 exercicio
const senhaCorreta="148supersenha"
let tentativa= ""
while(tentativa !==senhaCorreta){

    tentativa=prompt("Digite a Senha:")
    if (tentativa=== senhaCorreta) { alert("✅Senha correta! Acesso Liberado.")
        
    } else { alert("❌Senha incorreta. Tente novamente.")
        
    }
}
//3 crie uma calculadora que some até o limite de 100
let soma = 0;

while (soma < 100) {
    const numero = Number(prompt("Digite um numero:"));

    soma = soma + numero;

    alert("Soma atual: " + soma);
}

alert("A soma atingiu ou ultrapassou 100!");

//4 exercicio de repetição

// DO - WHILE -> PERMITE CRIAR LOOPS QUE SÃO EXECUTADOS UMA OU MAIS VEZES.

let repetir = false;

// FAÇA

do {
    console.log("Só uma vez");
} while (repetir); // enquanto a condição for TRUE


// while vs do..while

let num = 10;

// analisa se o bloco de codigo vai ser executado.

while (num < 5) {
    console.log("Isso não vai aparecer");
}


// EXECUTA O BLOCO

do {
    console.log("Isso vai aparecer pelo menos 1x");
} while (num < 5);

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



