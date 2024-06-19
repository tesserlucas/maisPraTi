//Exercicio 11: Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros. Para
//cada valor fornecido escrever uma mensagem que indica se cada valor fornecido é PAR
//ou ÍMPAR. O algoritmo será encerrado imediatamente após a leitura de um valor NULO ou
//NEGATIVO.

const prompt = require('prompt-sync')();

function verificarNumero() {
    let numero = parseInt(prompt("Digite um número inteiro (ou um número negativo para sair): "), 10);

    if (numero <= 0) {
        console.log("Número nulo ou negativo detectado. Encerrando o programa.");
        return;
    }

    let mensagem = numero % 2 === 0 ? "PAR" : "ÍMPAR";
    console.log(`O número ${numero} é ${mensagem}.`);

    verificarNumero(); // Chama a função novamente, criando um loop recursivo
}

verificarNumero(); // Inicializa a função
