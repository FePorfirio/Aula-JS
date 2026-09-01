// //ARRAY
// //UM ARRAY É UM TIPO DE DAOS QUE SERVE PARA ARMAZENAR VALOR SEQUENCIALMENTE EM FORMA DE LISTA.
// //EX.
// //const numeros=[1,2,3,4,5]

// //ITENS  COMEÇAM EM ZERO.

// const numero= [1,2,3,4,5]
// const nomes = ["Ana", "Caio","Lucas"]

// // console.log(numero[0])

// // console.log(nomes[0])
// //no caso acima o resultado foi 1;Ana; pois o array começa em zero.
// // caso os parâmetros fossem 1;1; o resultado seria 2;Caio;
// console.log(numero[0])

// console.log(nomes[0])

// //LENGTH
// //É UMA PROPRIEDADE PARA OBTER O COMPRIMENTO DE UMA ARRAY.

// console.log(nomes.length)
// //nesse caso o resultado foi 3;
// //caso fosse (numero.length) o resultado seria 5.

// for (let i=0 ;i<; i++){
//     console.log(nomes[i])
// }

const numero= [1,2,3,4,5]
const nomes = ["Ana", "Caio","Lucas","sara","leticia","rita"]

console.log(numero[0])

console.log(nomes[0])

console.log(nomes.length)

for (let i=0 ;i<nomes.length; i++){
    console.log(nomes[i])
}

const frutas=["Maça","Laranja","Uva","Morango"]

for (const fruta of frutas){
    console.log(fruta)
}

//FAÇA A SOMA DE TODOS OS NUMEROS DE UM ARRAY

const listaNumeros = [10,25,8,42,15,7]
let soma=0
//of listanumeros - Percorra toda a lista!

for (const numero of listaNumeros) {
    soma+=numero
}
console.log("Numeros", listaNumeros)
console.log("Soma",soma)

const ListaNota= [7.5,9.0,6.5,8.8,10.0,5.5];

let maiorNota = ListaNota[0]

for (const nota of ListaNota){
    
    if(nota > maiorNota)
        maiorNota=nota
    
}
console.log("Maior nota:" + maiorNota)