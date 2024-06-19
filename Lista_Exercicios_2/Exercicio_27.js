// Função para gerar uma matriz 6x6 com números reais aleatórios
function gerarMatrizAleatoria(linhas, colunas) {
    let matriz = [];
    for (let i = 0; i < linhas; i++) {
        let linha = [];
        for (let j = 0; j < colunas; j++) {
            linha.push(Math.random() * 100); // Gera números reais entre 0 e 100
        }
        matriz.push(linha);
    }
    return matriz;
}

// Função para multiplicar a matriz pelo valor A e colocar os valores no vetor V
function multiplicarMatrizPorValor(matriz, valor) {
    let vetor = [];
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            vetor.push(matriz[i][j] * valor);
        }
    }
    return vetor;
}

// Gerar uma matriz 6x6 com números reais aleatórios
let matriz = gerarMatrizAleatoria(6, 6);

// Solicitar ao usuário o valor de A
let valorA = parseFloat(prompt("Digite o valor de A:"));

// Multiplicar a matriz pelo valor A e colocar os valores no vetor V
let vetorV = multiplicarMatrizPorValor(matriz, valorA);

// Imprimir a matriz original
console.log("Matriz M:");
for (let i = 0; i < matriz.length; i++) {
    console.log(matriz[i].join(' '));
}

// Imprimir o vetor V
console.log("\nVetor V:");
console.log(vetorV.join(' '));
