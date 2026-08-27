//*Crie um programa que solicite a idade de uma pessoa e informe se ela é maior de idade (18 anos ou mais) ou menor de idade.

const Idade = Number(prompt("Sua idade"));
 if(Number.isNaN(Number)) {
    alert("Idade Inválida")
  }  
if (idade<18) {
    alert("Menor de idade")
}
else if (idade>=18) {
    alert("Maior de Idade")
}

//*Solicite um número ao usuário e informe se ele é positivo ou negativo. Considere o número 0 como negativo.

const numero = Number(prompt("Informe um Número"));
 if(Number.isNaN(numero)) {
    alert("Número Inválido")  }
else if (numero<=0) {
    alert("Negativo")
}
else if(numero>1){
    alert("Positivo")
}

//*Peça ao usuário a nota final de um aluno (de 0 a 100). Caso a nota seja 60 ou maior, informe que ele foi Aprovado. Caso contrário, informe que foi Reprovado.

const numero = Number(prompt("Informe sua nota final (0 a 100)"));
 if(Number.isNaN(numero)) {
    alert("Número Inválido")  }

    else if (numero<0 || numero>100){
        alert ("Número Inválido")
    }else if (numero>0 && numero<60){
        alert ("Reprovado")
    }
else if (numero>=60 && numero <=100) {
        alert("Aprovado") }


//*Leia um número informado pelo usuário e indique se ele é:
// Positivo; 
//Negativo;
//Zero. 

const numero = Number(prompt("Informe um numero"));
 if(Number.isNaN(numero)) {
    alert("Número Inválido")  }
if (numero === 0){
        alert ("Zero")}
    else if (numero <0){
        alert("Negativo")
    }
    else if (numero>0){
        alert("Positivo")
    }

//*Solicite a idade de uma pessoa e classifique-a conforme as regras abaixo:
//Criança: de 0 a 12 anos; 
//Adolescente: de 13 a 17 anos; 
//Adulto: 18 anos ou mais. 
//Caso seja informada uma idade negativa, exiba uma mensagem de idade inválida.

const numero = Number(prompt("Informe sua idade"));
 if(Number.isNaN(numero)) {
    alert("idade Inválida")  }
    if (numero === 0 && numero <=12) {
        alert("Criança")
    }
    else if (numero>=13 && numero <=17){
        alert ("Adolescente")
    }
    else if (numero >=18){
        alert("Adulto")
    }
   // Solicite um número inteiro ao usuário e informe se ele é par ou ímpar.
   const numero = Number(prompt("Informe um numero inteiro"));
  if(Number.isNaN(numero)) {
    alert("Numero inválido")  }
if (numero % 2 === 0) {
        alert("Numero Par")
} else {alert("numero Impar")
    
}

//Crie uma calculadora que:
//Solicite o primeiro número; 
//Solicite a operação desejada (+, -, * ou /); 
//Solicite o segundo número. 
//Ao final, exiba o resultado da operação escolhida. Caso seja informada uma operação inválida, exiba uma mensagem de erro.

const numero = Number(prompt("CALCULADORA: Informe o primeiro numero"));
if (Number.isNaN(numero)){
    alert("Numero Inválido!")
    const numero1 = Number(prompt("Informe a operação desejada.(+, -, * ou /)"))
    const numero2 = Number(prompt("Informe o segundo numero."))

    if (operacao ==="+"){
        alert(numero1+numero2);
    }
    else if (operacao ==="-"){
        alert(numero1-numero2)
    }
    else if (==="*"){
        alert(numero1*numero2)
    }
    else if (==="/"){
        alert(numero1/numero2)
    }
}