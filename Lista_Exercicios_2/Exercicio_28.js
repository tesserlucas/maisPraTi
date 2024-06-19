// Função para gerar uma matriz 10x10 com números reais aleatórios
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

// Função para calcular a soma dos elementos acima da diagonal principal
function somaAcimaDiagonalPrincipal(matriz) {
    let soma = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = i + 1; j < matriz[i].length; j++) {
            soma += matriz[i][j];
        }
    }
    return soma;
}

// Função para calcular a soma dos elementos abaixo da diagonal principal
function somaAbaixoDiagonalPrincipal(matriz) {
    let soma = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < i; j++) {
            soma += matriz[i][j];
        }
    }
    return soma;
}

// Gerar uma matriz 10x10 com números reais aleatórios
let matriz = gerarMatrizAleatoria(10, 10);

// Calcular a soma dos elementos acima da diagonal principal
let somaAcima = somaAcimaDiagonalPrincipal(matriz);

// Calcular a soma dos elementos abaixo da diagonal principal
let somaAbaixo = somaAbaixoDiagonalPrincipal(matriz);

// Imprimir a matriz
console.log("Matriz 10x10:");
for (let i = 0; i < matriz.length; i++) {
    console.log(matriz[i].join(' '));
}

// Imprimir as somas calculadas
console.log(`\nSoma dos elementos acima da diagonal principal: ${somaAcima.toFixed(2)}`);
console.log(`Soma dos elementos abaixo da diagonal principal: ${somaAbaixo.toFixed(2)}`);
