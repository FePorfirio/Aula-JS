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
  
//FOR - REPETIÇÃO LIMITADA A UM PARÂMETRO

//EX.1
for (let index = 1; index < 10; index++) {
    
    console.log(index)
}
//EX.2
//EXIBA NUMEROS PARES DE 0 A 20.

console.log("Numeros pares de 0 a 20:/n")

//pares=pares+2.
for(let pares=0; pares <=20; pares +=2) {
    console.log(pares)
}

//CONTAGEM REGRESSIVA
//conta --
//=
//conta - conta
for (let conta=10; conta >=1; conta --){
    console.log(conta+ "...")
}
console.log("Decolar!")

//CRIE UM PROGRAMA QUE MOSTRE OS NUMEROS DE 1 A 3.
/*
SAÍDA ESPERADA:
111   
222   
333

DICA: Use um for para controlar os numeros e outro for dentro para repretir cada número.
*/
for (let numero=1; numero <=3; numero ++){
let resultado ="";
    for(let vezes = 1; vezes <=3; vezes++){
        resultado += numero+""
    }
    console.log(resultado)
}
// /*
// DESENHE PIRAMIDES DE ASTERISTICOS

// SAÍDA:
// *
// **
// ***
// ****
// *****


 for (let num=1; num<=10; num++){
     let resultado="";
     for (let vezes = 1; vezes<=num; vezes++){
         resultado +="*"
     }
     console.log(resultado)
 }
//  1. Contagem de 1 a 10
// Crie um programa que exiba todos os números de 1 até 10, um por linha.
for(let num=1; num<=10; num++){
    console.log(num)
}
// 2. Tabuada de um número
// Solicite um número ao usuário e exiba sua tabuada de multiplicação de 1 a 10.
// Exemplo para o número 5:
// 5 x 1 = 5
// 5 x 2 = 10
// ...
// 5 x 10 = 50

