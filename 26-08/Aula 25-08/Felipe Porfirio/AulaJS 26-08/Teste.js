javascript
// Linguagem Interpretada
// Node.js
// Tipagem Fraca

// Condicionais (if, else, operadores logicos)

const chovendo = true;
const solApareceu = false;

const idade = 20;

if (idade >= 20) {
    console.log("maior de idade!");

    const idade = 15;
    
    if (idade >= 18) {
        console.log("Voce e maior de idade!");
    }
}


const idade = Number(prompt("Digite a sua idade"));

if (idade >= 18) {
    console.log("Voce pode tirar sua carteira de motorista!");
} else {
    console.log("Voce ainda nao pode dirigir.");
}


const idade = 20;
const temDocumento = true;
const estaLista = true;

if (idade >= 18 && temDocumento && estaLista) {
    console.log("Pode entrar!!!");
} else {
    console.log("Acesso negado!!!");
}


const temDinheiro = false;
const temCartao = true;
const temPix = false;

if (temDinheiro || temCartao || temPix) {
    console.log("Pode pagar");
} else {
    console.log("Nao pode pagar");
}


const usuario = "admin";
const senha = "1234";

const senhaCorreta = (senha === "1234");
const ehAdmin = (usuario === "admin");
const ehGerente = (usuario === "gerente");

if ((ehAdmin && senhaCorreta) || (ehGerente && senhaCorreta)) {
    console.log("Acesso liberado");
} else {
    console.log("Acesso negado");
}

if ((ehAdmin || ehGerente) && senhaCorreta) {

} else {

}


const usuario = prompt("Usuario:");
const senha = prompt("Senha:");

const acessoAdmin = (usuario === "admin" && senha === "1234");
const acessoUser = (usuario === "user" && senha === "senha1234");

if (acessoAdmin || acessoUser) {
    console.log("Acesso Liberado!");
} else {
    console.log("Acesso negado!");
}


const nota = 75;

if (nota >= 80) {
    console.log("Aprovado!");
} else if (nota >= 60) {
    console.log("Recuperacao!");
} else {
    console.log("Reprovado!");
}


// Crie um programa em JavaScript que solicite ao usuário uma temperatura em graus Celsius (°C)
// e classifique a temperatura de acordo com as faixas abaixo:

// Temperatura       Classificação
// Abaixo de 0°C     🥶 Muito frio
// De 0°C a 15°C     ❄️ Frio
// De 16°C a 25°C    😊 Agradável
// De 26°C a 35°C    🌡️ Quente
// Acima de 35°C     🔥 Muito quente

const temp = Number(prompt("Temperatura atual"));

if (Number.isNaN(temp)) {
    console.log("Temperatura invalida");
} else if (temp < 0) {
    console.log("Muito frio");
} else if (temp <= 15) {
    console.log("Frio");
} else if (temp <= 25) {
    console.log("Agradavel");
} else if (temp <= 35) {
    console.log("Quente");
} else {
    console.log("Muito quente");
}


let imc = peso / (altura ** 2);

console.log(imc.toFixed(2)); // toFixed = quantidade de casas apos a virgula.
alert(imc); // popup

// 18 - baixo
// 18 a 24 - normal
// 25 + - sobrepeso

if (imc < 18) {
    console.log("baixo");
} else if (imc >= 18 && imc <= 24) {
    console.log("normal");
} else {
    console.log("sobrepeso");
}


// && -> condicao: todas as condicoes devem ser TRUE
// || -> se alguma condicao for certa, vai entrar no IF
// ! -> significa NAO. Ele inverte o valor do booleano.

console.log(!true); // false

let idade = 18;

// Se NAO idade maior ou igual a 18

if (!(idade >= 18)) {
    console.log("Nao e maior de idade");
}


const idade = Number(prompt("Digite a sua idade"));

if (idade >= 18) {
    console.log("E maior de idade!");
} else {
    console.log("Nao e maior de idade");
}


let numero = Number(prompt("Digite um numero"));

if (numero > 0) {
    console.log("positivo");
} else if (numero < 0) {
    console.log("negativo");
} else {
    console.log("zero");
}


let nota = Number(prompt("Qual a sua nota?"));

if (nota >= 60) {
    console.log("Aprovado!");
} else {
    console.log("Reprovado!");
}


// 0 a 12 - crianca
// 13 a 17 - adolescente
// 18 + - adulto

const idade = Number(prompt("Digite a sua idade"));

if (idade < 0) {
    console.log("Idade invalida!");
} else if (idade <= 12) {
    console.log("Voce e uma crianca!");
} else if (idade <= 17) {
    console.log("Voce e um adolescente!");
} else {
    console.log("Voce e um adulto!");
}


const numero = parseInt(prompt("Digite um numero inteiro"));

if (numero % 2 === 0) {
    console.log("O numero e par.");
} else {
    console.log("O numero e impar.");
}


const numero1 = Number(prompt("Solicite o primeiro numero"));
const operacao = prompt("Digite a operacao (+, -, *, /):");
const numero2 = Number(prompt("Solicite o segundo numero"));

let resultado;

if (operacao === "+") {
    resultado = numero1 + numero2;
    console.log(resultado);
} else if (operacao === "-") {
    resultado = numero1 - numero2;
    console.log(resultado);
} else if (operacao === "*") {
    resultado = numero1 * numero2;
    console.log(resultado);
} else if (operacao === "/") {
    if (numero2 === 0) {
        console.log("Nao e possivel realizar a divisao por zero");
    } else {
        resultado = numero1 / numero2;
        console.log(resultado);
    }
} else {
    console.log("Erro");
}


let numero1 = Number(prompt("Digite o primeiro numero:"));
let numero2 = Number(prompt("Digite o segundo numero:"));
let numero3 = Number(prompt("Digite o terceiro numero:"));

if (numero1 >= numero2 && numero1 >= numero3) {
    console.log("Numero " + numero1 + " e maior");
} else if (numero2 >= numero1 && numero2 >= numero3) {
    console.log("Numero " + numero2 + " e maior");
} else {
    console.log("Numero " + numero3 + " e maior");
}


const usuarioCorreto = "admin";
const senhaCorreta = "1234";

const usuario = prompt("Digite o nome de usuario:");
const senha = prompt("Digite a senha:");

if (usuario === usuarioCorreto && senha === senhaCorreta) {
    alert("Login realizado com sucesso");
} else {
    alert("Usuario ou senha incorreto.");
}


let lado1 = Number(prompt("Qual o primeiro lado?"));
let lado2 = Number(prompt("Qual o segundo lado?"));
let lado3 = Number(prompt("Qual o terceiro lado?"));

if (lado1 < lado2 + lado3 &&
    lado2 < lado1 + lado3 &&
    lado3 < lado1 + lado2) {

    if (lado1 === lado2 && lado2 === lado3) {
        alert("Equilatero");
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        alert("Isosceles");
    } else {
        alert("Escaleno");
    }

} else {
    alert("Nao e possivel formar um triangulo");
}


let nota = Number(prompt("Digite sua nota: "));

if (nota > 100 || nota < 0) {
    console.log("Nota invalida, digite uma nota de 0 a 100");
} else if (nota < 60) {
    console.log("F");
} else if (nota >= 60 && nota <= 69) {
    console.log("D");
}


const nFinal = Number(prompt("Nota de 0 a 100:"));

if (nFinal >= 90 && nFinal <= 100) {
    alert("Conceito A");
} else if (nFinal >= 80) {
    alert("Conceito B");
} else if (nFinal >= 70) {
    alert("Conceito C");
} else if (nFinal >= 60) {
    alert("Conceito D");
} else {
    alert("Conceito F");
}


const ano = Number(prompt("Digite um ano"));

if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
    alert(ano + " e um ano bissexto.");
} else {
    alert(ano + " nao e um ano bissexto");
}

