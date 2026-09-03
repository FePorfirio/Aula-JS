
// //BREAK -> Parar de percorrer a lista.

// const numeros = [5,12,8,3,19,7,25]

// const procurado = 19

// for(const num of numeros){

//     if(num === procurado){
//         console.log("Encontrado");
//         console.log ("Numero:",procurado)    
//         break; //para o loop imediatamente.
//     }
// }

// console.log("O loop terminou!")

//CONTINUE ->pular para a próxima repetição do loop

console.log ("Numeros impares de 1 a 10.")


for(let i=1; i<=10; i++){

    //i%2==0 SE O RESTO DA DIVISAO POR 2 É IGUAL A ZERO
    if (i%2==0){
        continue;   //PULA todo o restante do código.
    }
    console.log(i)
}

//REVERSE ->inverter a ordem

const nomes =["Guilherme","lailton","rita", "Miguel", "Vanessa","Michael Jackson"]

nomes.reverse() //Inverte a ordem dos elementos.

console.log(nomes)  //reverse inverte a ordem dos nomes

//exercicio  




const alunos = [
{aluno:"Carina", nota:4},
{aluno:"Caio", nota:7},
{aluno:"Sérgio", nota:9},
{aluno:"Carlos", nota:10},
]

for(const escola of alunos){

    if (escola.nota <7){
        continue
    }
    console.log(escola.aluno,escola.nota)
}