//Exercicio 6: Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
//formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
//Isósceles, escaleno ou eqüilátero.

const prompt = require('prompt-sync')();

let lado1 = parseFloat(prompt("Lado A: "));
let lado2 = parseFloat(prompt("Lado B: "));
let lado3 = parseFloat(prompt("Lado C: "));

// Função para verificar se os lados formam um triângulo
function eTriangulo(a, b, c) {
    return (a < b + c && b < a + c && c < a + b);
}

// Função para determinar o tipo de triângulo
function tipoDeTriangulo(a, b, c) {
    if (a === b && b === c) {
        return "Equilátero";
    } else if (a === b || a === c || b === c) {
        return "Isósceles";
    } else {
        return "Escaleno";
    }
}

// Verificação e resposta ao usuário
if (eTriangulo(lado1, lado2, lado3)) {
    console.log(`Os lados fornecidos formam um triângulo ${tipoDeTriangulo(lado1, lado2, lado3)}.`);
} else {
    console.log("Os lados fornecidos não formam um triângulo.");
}