
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