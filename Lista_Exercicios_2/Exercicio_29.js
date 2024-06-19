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

// Função para calcular a soma da linha 4 de M
function somaLinha(matriz, linha) {
    return matriz[linha].reduce((acc, val) => acc + val, 0);
}

// Função para calcular a soma da coluna 2 de M
function somaColuna(matriz, coluna) {
    let soma = 0;
    for (let i = 0; i < matriz.length; i++) {
        soma += matriz[i][coluna];
    }
    return soma;
}

// Função para calcular a soma da diagonal principal de M
function somaDiagonalPrincipal(matriz) {
    let soma = 0;
    for (let i = 0; i < matriz.length; i++) {
        soma += matriz[i][i];
    }
    return soma;
}

// Função para calcular a soma de todos os elementos da matriz M
function somaTotal(matriz) {
    let soma = 0;
    for (let i = 0; i < matriz.length; i++) {
        soma += matriz[i].reduce((acc, val) => acc + val, 0);
    }
    return soma;
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

// Calcular as somas solicitadas
let somaLinha4 = somaLinha(matriz, 3); // Lembre-se que as linhas são indexadas a partir de 0
let somaColuna2 = somaColuna(matriz, 1); // Lembre-se que as colunas são indexadas a partir de 0
let somaDiagonal = somaDiagonalPrincipal(matriz);
let somaTotalMatriz = somaTotal(matriz);

// Imprimir a matriz e as somas
imprimirMatriz(matriz);

console.log("\nSoma da linha 4:", somaLinha4.toFixed(2));
console.log("Soma da coluna 2:", somaColuna2.toFixed(2));
console.log("Soma da diagonal principal:", somaDiagonal.toFixed(2));
console.log("Soma de todos os elementos da matriz:", somaTotalMatriz.toFixed(2));
