console.log("Escolha uma das opções abaixo:");
console.log("1 - Novo salário");
console.log("2 - Férias");
console.log("3 - Décimo terceiro");
console.log("4 - Sair");


let opcao;
opcao = Number(prompt("Digite a opção desejada: "));

while (opcao < 1 || opcao > 4 || Number.isNaN(opcao)) {

    opcao = Number(prompt("Opção inválida! Por favor, escolha uma opção entre 1 e 4."));
}

if (opcao === 1) {
    let salario = Number(prompt("Digite o salário do funcionário: "));
    if (salario <= 350) {
        let novoSalario = salario + (salario * 0.15);
        console.log(`O novo salário do funcionário com aumento de 15% é: R$ ${novoSalario.toFixed(2)}`);
    } else if (salario > 350 && salario <= 600) {
        let novoSalario = salario + (salario * 0.10);
        console.log(`O novo salário do funcionário com aumento de 10% é: R$ ${novoSalario.toFixed(2)}`);
    } else {
        let novoSalario = salario + (salario * 0.05);
        console.log(`O novo salário do funcionário com aumento de 5% é: R$ ${novoSalario.toFixed(2)}`);
    }
}


else if (opcao === 2) {
    let salario = Number(prompt("Digite o salário do funcionário: "));
    let ferias = salario + (salario / 2);
    console.log(`O valor das férias do funcionário é: R$ ${ferias.toFixed(2)}`);
}


else if (opcao === 3) {
    let salario = Number(prompt("Digite o salário do funcionário: "));
    let mesesTrabalhados = Number(prompt("Digite o número de meses trabalhados (máximo 12): "));
    while (mesesTrabalhados < 1 || mesesTrabalhados > 12 || Number.isNaN(mesesTrabalhados)) {
        alert("Número de meses inválido! Por favor, digite um valor entre 1 e 12.");
        mesesTrabalhados = Number(prompt("Digite o número de meses trabalhados (máximo 12): "));
    }
    let decimoTerceiro = (salario * mesesTrabalhados) / 12;
    console.log(`O valor do décimo terceiro do funcionário é: R$ ${decimoTerceiro.toFixed(2)}`);
}

else if (opcao === 4) {
    console.log("Saindo do programa...");
}