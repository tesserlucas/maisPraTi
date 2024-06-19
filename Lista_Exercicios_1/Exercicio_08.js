//Exercicio 8: Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
//e escreve-los em ordem crescente.


const prompt = require('prompt-sync')();

let valor1 = parseInt(prompt("Valor 1: "));
let valor2 = parseInt(prompt("Valor 2: "));

if (valor1 < valor2) {
    console.log(`Os valores em ordem crescente são: ${valor1}, ${valor2}`);
} else {
    console.log(`Os valores em ordem crescente são: ${valor2}, ${valor1}`);
}
