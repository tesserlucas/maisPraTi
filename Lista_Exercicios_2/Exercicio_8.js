const prompt = require('prompt-sync')();

var horasAtividade = Number(prompt("Digite a quantidade de horas de atividade física no mês: "));

// Calculando os pontos
var pontos;
if (horasAtividade <= 10) {
    pontos = horasAtividade * 2;
} else if (horasAtividade <= 20) {
    pontos = (10 * 2) + ((horasAtividade - 10) * 5);
} else {
    pontos = (10 * 2) + (10 * 5) + ((horasAtividade - 20) * 10);
}

// Calculando o dinheiro ganho
var dinheiroGanho = pontos * 0.05;

// Exibindo o resultado no console
console.log("Você ganhou " + pontos + " pontos.");
console.log("Você faturou R$ " + dinheiroGanho.toFixed(2));
