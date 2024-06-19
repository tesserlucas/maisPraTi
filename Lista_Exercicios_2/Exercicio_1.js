const prompt = require('prompt-sync')();

// Função para calcular a redução do tempo de vida de um fumante
function calcularPerdaDeVida(cigarrosPorDia, anosFumando) {
    // Considerando que cada cigarro reduz a vida em 10 minutos
    var minutosPorCigarro = 10;

    // Calculando o total de cigarros fumados ao longo dos anos
    var totalCigarros = cigarrosPorDia * 365 * anosFumando;

    // Calculando a perda total de minutos de vida
    var totalMinutosPerdidos = totalCigarros * minutosPorCigarro;

    // Convertendo minutos perdidos em dias (1 dia = 24 horas * 60 minutos)
    var diasPerdidos = totalMinutosPerdidos / (24 * 60);

    return diasPerdidos;
}

// Solicitando a quantidade de cigarros fumados por dia e quantos anos a pessoa já fumou
var cigarrosPorDia = prompt("Quantos cigarros você fuma por dia?");
var anosFumando = prompt("Há quantos anos você fuma?");

// Convertendo as entradas para números
cigarrosPorDia = Number(cigarrosPorDia);
anosFumando = Number(anosFumando);

// Calculando a perda de dias de vida
var diasDeVidaPerdidos = calcularPerdaDeVida(cigarrosPorDia, anosFumando);

// Exibindo o resultado no console
console.log("Você perdeu aproximadamente " + diasDeVidaPerdidos.toFixed(2) + " dias de vida devido ao fumo.");
