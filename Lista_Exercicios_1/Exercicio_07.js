//Exercicio 7: As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
//forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
//compradas, calcule e escreva o valor total da compra.

const prompt = require('prompt-sync')();

let macas = parseInt(prompt("Quantas maças foram compradas ? "));

// Preços das maçãs
const precoMenosDoze = 0.30; // Preço por maçã se menos de 12
const precoDozeOuMais = 0.25; // Preço por maçã se 12 ou mais

// Cálculo do custo total
let custoTotal;
if (macas < 12) {
    custoTotal = macas * precoMenosDoze;
} else {
    custoTotal = macas * precoDozeOuMais;
}

// Exibição do valor total
console.log(`O valor total da compra é R$ ${custoTotal.toFixed(2)}`);