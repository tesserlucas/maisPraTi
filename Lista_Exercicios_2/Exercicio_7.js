const prompt = require('prompt-sync')();

var tipoCarro = prompt("Digite o tipo de carro alugado (popular ou luxo): ").toLowerCase();
var diasAluguel = Number(prompt("Digite a quantidade de dias de aluguel: "));
var kmPercorridos = Number(prompt("Digite a quantidade de Km percorridos: "));

// Definindo as tarifas
var custoPorDia;
var custoPorKm;

if (tipoCarro === "popular") {
    custoPorDia = 90.00;
    if (kmPercorridos <= 100) {
        custoPorKm = 0.20;
    } else {
        custoPorKm = 0.10;
    }
} else if (tipoCarro === "luxo") {
    custoPorDia = 150.00;
    if (kmPercorridos <= 200) {
        custoPorKm = 0.30;
    } else {
        custoPorKm = 0.25;
    }
} else {
    console.log("Tipo de carro inválido. Por favor, escolha 'popular' ou 'luxo'.");
}

// Calculando o custo total
if (tipoCarro === "popular" || tipoCarro === "luxo") {
    var custoTotal = (diasAluguel * custoPorDia) + (kmPercorridos * custoPorKm);
    console.log("O custo total do aluguel é R$ " + custoTotal.toFixed(2));
}
