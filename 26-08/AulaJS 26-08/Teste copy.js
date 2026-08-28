const numero1 = Number(prompt("Informe o primeiro número:"));
const operacao = prompt("Informe a operação (+, -, * ou /):");
const numero2 = Number(prompt("Informe o segundo número:"));

let resultado;

if (operacao === "+") {
    resultado = numero1 + numero2;
} else if (operacao === "-") {
    resultado = numero1 - numero2;
} else if (operacao === "*") {
    resultado = numero1 * numero2;
} else if (operacao === "/") {
    resultado = numero1 / numero2;
} else {
    resultado = "Operação inválida!";
}

alert(resultado);