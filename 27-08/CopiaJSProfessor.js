//1

// for(let i=1;i<=10;i++){
//     console.log(i)
// }


// 2. Tabuada de um número
// Solicite um número ao usuário e exiba sua tabuada
// de multiplicação de 1 a 10.
//
// const numero = Number(prompt("Digite um numero:"))

// if(Number.isNaN(numero)){
//     console.log("Digite apenas numeros")
// }
// else{
//     console.log(`\n tabuada do ${numero}: \n`)

//     for(let i = 1;i <= 10; i++){
//         const resultado = numero * i;
//         console.log(`${numero} x ${i} = ${resultado}`)
//     }
// }


// 3. Soma dos primeiros N números
// Solicite um número inteiro positivo ao usuário e calcule a soma
//  de todos os números de 1 até esse valor.

// const n = Number(prompt("Digite um número inteiro positivo:"));

// let soma = 0;

// for (let i = 1; i <= n; i++) {
//     soma += i;
// }

// console.log(soma);


//4. Números pares de 1 a 50
//Exiba todos os números pares entre 1 e 50, um por linha.


/*
for (let i = 2; i <= 50; i += 2){
    console.log(i)
}
    */


//5. Jogo de adivinhação
//Crie um programa que gere um número aleatório entre 1 e 100.


// const numeroSecreto = Math.floor(Math.random() *100) +1;

// let palpite;
// let tentativas = 0;

// console.log("acerta o número aí👌")

// do {

//     palpite = Number(prompt("seu palpite!!!!!!!!"))
//     tentativas++

//     if (Number.isNaN(palpite)) {
//         console.log("digita certo")
//     }else if(palpite === numeroSecreto){
//         alert ("acertou✅✅✅✅✅✅✅✅✅" + "em" + tentativas + "tentativas🤣🤣🤣🤣🤣🤣")
//     }else if( palpite < numeroSecreto){
//         alert ("muito baixo⬇️⬇️⬇️⬇️⬇️⬇️⬇️, tente um pouco mais alto😮‍💨😮‍💨😮‍💨")
//     }else if( palpite > numeroSecreto){
//         alert ("muito alto🏠🏠🏠🏠, tente um pouco mais baixo😮")
//     } 


// }while(palpite != numeroSecreto)
    
    
// 6. Contagem regressiva
// Solicite um número inteiro ao usuário e faça uma contagem regressiva até
//  0, exibindo cada número.

// let tempo  = Number(prompt("Informe um número"))

// while(tempo > 0) {

//      console.log(tempo)

//      tempo--
// }  

// //for(tempo = 10;  tempo <= 1 ; tempo--)

// console.log("Fim.")



// 7. Soma dos dígitos
// Solicite um número inteiro positivo ao usuário e calcule
//  a soma de todos os seus dígitos.

// let numero = Number(prompt("Digite um número inteiro positivo:"));

// let soma = 0;

// while (numero > 0){
//     soma += numero % 10;
//     numero = Math.floor(numero / 10);
// }

// console.log(soma);



// 8. Fatorial
// Solicite um número inteiro positivo ao usuário e calcule o seu fatorial.
// O fatorial de um número é obtido multiplicando esse número por todos
//  os inteiros positivos menores que ele, até chegar em 1.
// Exemplo:
// 5! = 5 × 4 × 3 × 2 × 1 = 120 
// 4! = 4 × 3 × 2 × 1 = 24 
// 3! = 3 × 2 × 1 = 6 
// Ao final, exiba o resultado do cálculo.


// let num=Number(prompt("Digite um número"))
// let mult = 1

// for (i=num;i>=1;i--)
// {
// //alert(mult*=i)
// console.log(mult*=i)
// }



// 9. Inverter número
// Solicite um número inteiro positivo ao usuário e exiba 
// esse número com seus dígitos na ordem inversa.


// for (let i = 1; i <=5; i++){
//     const number = prompt("Digite um número inteiro positivo:")
//     const reversednumber = number.split('').reverse().join('')
//     console.log(`O número ${number} invertido é ${reversednumber}.`)
// }


let numero = Number(prompt("Digite um número:"));
let invertido = 0 


while (numero > 0 ) {

   let digito = numero % 10

   invertido  = invertido * 10 + digito

   numero = Math.floor(numero / 10)
    
}

console.log("Numero invertido" + invertido)


// 10. Números perfeitos até 1000
// Um número perfeito é aquele cuja soma de todos os seus divisores positivos, exceto ele mesmo, é igual ao próprio número.
// Exemplo:
// Divisores de 6: 1, 2 e 3 
// 1 + 2 + 3 = 6 
// Crie um programa que encontre e exiba todos os números perfeitos entre 1 e 1000.

// preciso escrever, está na midia do celular a resoluçao










