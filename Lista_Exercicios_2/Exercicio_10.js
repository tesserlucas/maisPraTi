const prompt = require('prompt-sync')();

var continuar;
var soma = 0;
var quantidadeValores = 0;
var menorValor = null;
var quantidadePares = 0;

do {
    // Lê um número
    var numero = Number(prompt("Digite um número: "));

    // Soma o número ao total
    soma += numero;

    // Aumenta a contagem de valores
    quantidadeValores++;

    // Verifica se o número é o menor valor
    if (menorValor === null || numero < menorValor) {
        menorValor = numero;
    }

    // Verifica se o número é par
    if (numero % 2 === 0) {
        quantidadePares++;
    }

    // Pergunta se o usuário quer continuar
    continuar = prompt("Deseja continuar? (S para sim, N para não): ").toUpperCase();
} while (continuar === "S");

// Calcula a média
var media = soma / quantidadeValores;

var linhaDecorativa = '-='.repeat(30);

// Exibe os resultados
console.log(linhaDecorativa);
console.log("Somatório entre todos os valores: " + soma);
console.log("Menor valor digitado: " + menorValor);
console.log("Média entre todos os valores: " + media.toFixed(2));
console.log("Quantidade de valores pares: " + quantidadePares);
console.log(linhaDecorativa);