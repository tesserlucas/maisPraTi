const prompt = require('prompt-sync')();

// Inicializar o vetor para armazenar os números
var numeros = [];

// Ler 10 números inteiros e armazená-los no vetor
for (var i = 0; i < 10; i++) {
    var numero = parseInt(prompt("Digite o número " + (i + 1) + ": "));
    numeros.push(numero);
}

// Exibir os números pares e suas posições
console.log("Números pares e suas posições:");
for (var i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        console.log("Número par: " + numeros[i] + " - Posição: " + (i+1));
    }
}
