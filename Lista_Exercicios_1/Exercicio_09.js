//Exercicio 9: Escreva um algoritmo que leia o código de origem de um produto e imprima a região
//do mesmo, conforme a tabela.

const prompt = require('prompt-sync')();

let codigo = parseInt(prompt("Digite o código de origem do produto: "));

let regiao;

if (codigo === 1) {
    regiao = "Sul";
} else if (codigo === 2) {
    regiao = "Norte";
} else if (codigo === 3) {
    regiao = "Leste";
} else if (codigo === 4) {
    regiao = "Oeste";
} else if (codigo === 5 || codigo === 6) {
    regiao = "Nordeste";
} else if (codigo === 7 || codigo === 8 || codigo === 9) {
    regiao = "Sudeste";
} else if (codigo >= 10 && codigo <= 20) {
    regiao = "Centro-Oeste";
} else if (codigo >= 25 && codigo <= 50) {
    regiao = "Nordeste";
} else {
    regiao = "Produto Importado";
}

console.log(`O produto é da região: ${regiao}`);
