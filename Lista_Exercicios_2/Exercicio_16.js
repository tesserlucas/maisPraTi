// Função para gerar um número aleatório entre 0 e 99
function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 100);
}

// Criar um vetor de 20 posições e preenchê-lo com números aleatórios
let vetor = [];
for (let i = 0; i < 20; i++) {
    vetor.push(gerarNumeroAleatorio());
}

// Mostrar os números gerados
console.log("Números gerados:", vetor);

// Ordenar o vetor em ordem crescente
vetor.sort((a, b) => a - b);

// Mostrar os valores ordenados
console.log("Valores ordenados:", vetor);
