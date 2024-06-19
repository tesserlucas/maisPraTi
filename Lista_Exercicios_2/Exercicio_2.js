const prompt = require('prompt-sync')();

// Solicitando a velocidade do carro
var velocidade = prompt("Qual é a velocidade do carro em Km/h? ");

// Convertendo a entrada para número
velocidade = Number(velocidade);

// Definindo o limite de velocidade e o valor da multa por Km excedido
var limiteVelocidade = 80;
var valorPorKm = 5;

// Verificando se a velocidade ultrapassa o limite
if (velocidade > limiteVelocidade) {
    var kmAcima = velocidade - limiteVelocidade;
    var valorMulta = kmAcima * valorPorKm;
    console.log("Você foi multado! O valor da multa é R$ " + valorMulta.toFixed(2));
} else {
    console.log("Você está dentro do limite de velocidade.");
}
