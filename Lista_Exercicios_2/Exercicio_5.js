const prompt = require('prompt-sync')();

// Opções possíveis
var opcoes = ["Pedra", "Papel", "Tesoura"];

// Escolha aleatória do computador
var indiceComputador = Math.floor(Math.random() * 3);
var escolhaComputador = opcoes[indiceComputador];

// Solicitando a escolha do jogador
var escolhaJogador = prompt("Escolha Pedra, Papel ou Tesoura: ");

// Convertendo a escolha para primeira letra maiúscula
escolhaJogador = escolhaJogador.charAt(0).toUpperCase() + escolhaJogador.slice(1).toLowerCase();

// Determinando o vencedor
var resultado;
if (escolhaJogador === escolhaComputador) {
    resultado = "Empate!";
} else if (
    (escolhaJogador === "Pedra" && escolhaComputador === "Tesoura") ||
    (escolhaJogador === "Papel" && escolhaComputador === "Pedra") ||
    (escolhaJogador === "Tesoura" && escolhaComputador === "Papel")
) {
    resultado = "Você venceu!";
} else {
    resultado = "Você perdeu!";
}

// Exibindo o resultado no console
console.log("Você escolheu: " + escolhaJogador);
console.log("O computador escolheu: " + escolhaComputador);
console.log(resultado);
