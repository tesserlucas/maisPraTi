const prompt = require('prompt-sync')();

// Inicializar o vetor para armazenar os nomes
var nomes = [];

// Ler 7 nomes e armazená-los no vetor
for (var i = 0; i < 7; i++) {
    var nome = prompt("Digite o nome da pessoa " + (i + 1) + ": ");
    nomes.push(nome);
}

var linhadecorativa = '-'.repeat(30);

// Exibir os nomes na ordem inversa
console.log(linhadecorativa);
console.log("Nomes na ordem inversa:");
for (var i = 6; i >= 0; i--) {
    console.log(nomes[i]);
}
console.log(linhadecorativa);
