//Exercicio 1: Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o 
//valor correspondente em graus Fahrenheit.
const prompt = require('prompt-sync')();
let Celsius = parseFloat(prompt("Insira uma temperatura em °C:"));
Fahrenheit = (Celsius * 9/5) + 32

console.log("A temperatura em Fahrenheit é: " + Fahrenheit,"°F");