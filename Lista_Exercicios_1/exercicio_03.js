// Exercicio 3: Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações:
/*  ● Some 25 ao primeiro inteiro;
    ● Triplique o valor do segundo inteiro;
    ● Modifique o valor do terceiro inteiro para 12% do valor original;
    ● Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou)
    dos primeiros três inteiros.
*/

const prompt = require('prompt-sync')();

let n1 = parseInt(prompt("Número 1: "));
let n2 = parseInt(prompt("Número 2: "));
let n3 = parseInt(prompt("Número 3: "));
let n4 = parseInt(prompt("Número 4: "));

// Soma os 3 primeiros inteiros 
n4 = n1 + n2 + n3;

// Some 25 ao primeiro inteiro
n1 += 25;

// Triplique o valor do segundo inteiro
n2 *= 3;

// Modifique o valor do terceiro inteiro para 12% do valor original
n3 *= 0.12;

// Exibe os resultados
console.log(`Número 1 (somado com 25): ${n1}`);
console.log(`Número 2 (valor triplicado): ${n2}`);
console.log(`Número 3 (12% do valor original): ${n3}`);
console.log(`Número 4 (soma dos valores modificados dos três números): ${n4}`);