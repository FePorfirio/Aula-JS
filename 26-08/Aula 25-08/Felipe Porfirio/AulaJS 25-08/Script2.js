//linguagem Interpretada
//Node.js
//tipagem fraca

//Condicionais (if, else, operadores lógicos)
//
//Exercício — Classificação da Temperatura

/*
Crie um programa em JavaScript que solicite ao usuário uma temperatura em graus Celsius (°C) e classifique a temperatura de acordo com as faixas abaixo:

Temperatura	Classificação
Abaixo de 0°C	🥶 Muito frio
De 0°C a 15°C	❄️ Frio
De 16°C a 25°C	😊 Agradável
De 26°C a 35°C	🌡️ Quente
Acima de 35°C	🔥 Muito quente


*/


const temp = Number(prompt("Temperatura Atual (°C)"));
 if(Number.isNaN(temp)) {
    alert("Temperatura Inválida")
    
} else if (temp <0) {
  alert("🥶 Muito frio");
    
}
else if (temp <=15 ) {
    alert("❄️ Frio")
}
else if (temp<=25) {
    alert("😊 Agradável")
}
else if (temp<=35) {
    alert("🌡️ Quente")
}
else if (temp> 35) {
    alert("🔥 Muito quente")
}
