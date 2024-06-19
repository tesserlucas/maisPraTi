//Exercicio 4: Escreva um algoritmo para ler as notas das duas avaliações de um aluno no semestre,
//calcular e escrever a média semestral e a seguinte mensagem: ‘PARABÉNS! Você foi
//aprovado’, somente se o aluno foi aprovado (considere 6.0 a nota mínima para
//aprovação).

const prompt = require('prompt-sync')();

let n1 = parseFloat(prompt("Nota 1: "));
let n2 = parseFloat(prompt("Nota 2: "));
let media = (n1 + n2) / 2;

console.log(`Sua média semestral é: ${media.toFixed(2)}`);

if (media >= 6.0) {
    console.log('PARABÉNS! Você foi aprovado');
}
else {
    console.log('Você foi reprovado');
}

//Exercicio 5: Acrescente ao exercício acima a mensagem ‘Você foi REPROVADO! Estude mais’ caso a
//média calculada seja menor que 6,0.

