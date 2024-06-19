const prompt = require('prompt-sync')();

// Sorteio de um número pelo computador entre 1 e 5
var numeroSorteado = Math.floor(Math.random() * 5) + 1;

// Solicitando a tentativa do jogador
var tentativaJogador = prompt("Tente adivinhar o número sorteado pelo computador (entre 1 e 5): ");

// Convertendo a entrada para número
tentativaJogador = Number(tentativaJogador);

// Verificando a tentativa do jogador
if (tentativaJogador === numeroSorteado) {
    console.log("Parabéns! Você acertou. O número sorteado foi " + numeroSorteado);
} else {
    console.log("Que pena! Você errou. O número sorteado foi " + numeroSorteado);
}
