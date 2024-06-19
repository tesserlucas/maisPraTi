// Função para gerar uma matriz 5x5 com números reais aleatórios
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

// Função para calcular a soma das linhas da matriz
function calcularSomaLinhas(matriz) {
    let somaLinhas = [];
    for (let i = 0; i < matriz.length; i++) {
        let soma = matriz[i].reduce((acc, val) => acc + val, 0);
        somaLinhas.push(soma);
    }
    return somaLinhas;
}

// Função para calcular a soma das colunas da matriz
function calcularSomaColunas(matriz) {
    let somaColunas = Array(matriz[0].length).fill(0);
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            somaColunas[j] += matriz[i][j];
        }
    }
    return somaColunas;
}

// Função para imprimir a matriz
function imprimirMatriz(matriz) {
    console.log("Matriz M:");
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join(' '));
    }
}

// Gerar uma matriz 5x5 com números reais aleatórios
let matriz = gerarMatrizAleatoria(5, 5);

// Calcular as somas das linhas e das colunas
let somaLinhas = calcularSomaLinhas(matriz);
let somaColunas = calcularSomaColunas(matriz);

// Imprimir a matriz e os vetores de somas
imprimirMatriz(matriz);

console.log("\nVetor SL (Somas das Linhas):");
console.log(somaLinhas.join(' '));

console.log("\nVetor SC (Somas das Colunas):");
console.log(somaColunas.join(' '));
