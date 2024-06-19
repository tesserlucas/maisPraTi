const prompt = require('prompt-sync')();

var primeiroTermo = Number(prompt("Digite o primeiro termo da PA: "));
var razao = Number(prompt("Digite a razão da PA: "));

// Inicializar variáveis
var termoAtual = primeiroTermo;
var soma = 0;

console.log("Os 10 primeiros elementos da PA são:");

// Calcular e mostrar os 10 primeiros elementos da PA
for (var i = 0; i < 10; i++) {
    console.log(termoAtual);
    soma += termoAtual;
    termoAtual += razao;
}

// Exibir a soma dos valores
console.log("A soma de todos os valores da sequência é: " + soma);
