//Exercicio 15: Fazer um algoritmos para receber um número decimal e o peso de cada número até
//que o usuário digite o número 0. Fazer a média ponderada desses números e pesos
//respectivos.

const prompt = require('prompt-sync')();

let somaProdutos = 0; // A soma dos produtos de números por seus pesos
let somaPesos = 0; // A soma dos pesos
let numero, peso;

while (true) {
    numero = parseFloat(prompt("Digite um número decimal (ou '0' para finalizar): "));
    if (numero === 0) break;

    peso = parseFloat(prompt("Digite o peso para esse número: "));
    somaProdutos += numero * peso; // Adiciona o produto do número pelo peso à soma total
    somaPesos += peso; // Adiciona o peso à soma dos pesos
}

let mediaPonderada = somaPesos > 0 ? somaProdutos / somaPesos : 0;

console.log(`A média ponderada é: ${mediaPonderada.toFixed(2)}`);
