const prompt = require('prompt-sync')();

var distancia = prompt('Qual distância você deseja percorrer em KM: ');

// Convertendo a entrada para número
distancia = Number(distancia);

var viagem200km = 0.50;
var viagemmaior200km = 0.45;

// Calculando o preço da passagem
var precoPassagem;
if (distancia <= 200) {
    precoPassagem = distancia * viagem200km;
} else {
    precoPassagem = distancia * viagemmaior200km;
}

// Gerando uma linha decorativa
var linhaDecorativa = '-'.repeat(50);

// Exibindo o resultado no console
console.log(linhaDecorativa);
console.log(`Percorrendo ${distancia} km, o preço da passagem é R$ ` + precoPassagem.toFixed(2));
console.log(linhaDecorativa);

