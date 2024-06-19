//Escreva um algoritmo para ler o número de eleitores de um município, o número de
//votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa
//em relação ao total de eleitores.

const prompt = require('prompt-sync')();

function getNumberInput(question) {
  let isValid = false;
  let value;
  while (!isValid) {
    value = parseInt(prompt(question));
    isValid = !isNaN(value);
    if (!isValid) {
      console.log("Entrada inválida. Por favor, digite um número.");
    }
  }
  return value;
}

let eleitores = getNumberInput("Número de eleitores: ");
let brancos = getNumberInput("Número de votos em branco: ");
let nulos = getNumberInput("Número de votos nulos: ");
let validos = getNumberInput("Número de votos válidos: ");

// Certifique-se de que a soma dos votos não excede o número total de eleitores
if (brancos + nulos + validos > eleitores) {
  console.log("O número total de votos é maior que o número de eleitores.");
} else {
  // Calcula os percentuais
  let percentualBrancos = (brancos / eleitores) * 100;
  let percentualNulos = (nulos / eleitores) * 100;
  let percentualValidos = (validos / eleitores) * 100;

  // Exibe os resultados
  console.log(`Percentual de votos brancos: ${percentualBrancos.toFixed(2)}%`);
  console.log(`Percentual de votos nulos: ${percentualNulos.toFixed(2)}%`);
  console.log(`Percentual de votos válidos: ${percentualValidos.toFixed(2)}%`);
}
