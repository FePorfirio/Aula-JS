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

//LISTA DE PRODUTOS.

//Informação de produto, preço e objeto

//Array de objetos
//Cada item do arrey é um objeto

const carrinho = [
    
    {produto: "Camiseta", preço:49.90, quantidade:2},
//abrindo o "{}" dentro do array "[]" eu consigo adicionar qualidade daquele item.

    {produto: "Calça Jeans", preço: 150.90, quantidade: 1},
    
    
   {produto: "Tenis", preço: 199.90, quantidade: 1}
]

//For..in --> Objetos | Retorna chaves / indice
//For..of --> Array, Strings | Retorna Valores

for (const itemDoMercardo of carrinho){
 //retornar apenas o nome do produto e preço.
    console.log(itemDoMercardo.produto)
    console.log("Valor Item", itemDoMercardo.preço)
    console.log("Valor total ",itemDoMercardo.preço*itemDoMercardo.quantidade )
}
// Desafio: Controle de pedidos de uma lanchonete 🍔

// Crie um programa que represente os pedidos de uma lanchonete.

// O programa deverá possuir pelo menos 4 itens, e cada item deve conter:

// nome
// preco
// quantidade

// Depois, o programa deverá:

// Percorrer todos os itens utilizando for...of.
// Calcular o valor total de cada item (preco × quantidade).
// Exibir no console o nome do item, a quantidade e o valor total.
// Calcular e exibir o valor total do pedido.
// Ao final, informar qual item teve o maior valor total, considerando a quantidade comprada.

const carrinho = [

    {item: "Hamburguer", preço: 19.99, quantidade: 2},

    {item: "Batata Frita G", preço:9.99, quantidade 2},

    {iItem: "Refrigerante G", preço: 16.99, quantidade: 2}
]
for (const CarrinhoVirtual of carrinho)
    console.log("Valor Individual:", CarrinhoVirtual.item)
console.log("Quantidade:", CarrinhoVirtual.quantidade)
console.log("Valor total do item:" CarrinhoVirtual.preço * CarrinhoVirtual.quantidade)
console.log("Valor total do pedido", (CarrinhoVirtual.preço * CarrinhoVirtual.quantidade) + carrinho.item)
// console.log("Item de maior valor adquirido")