// Função para gerar uma matriz 15x20 com números reais aleatórios
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

// Função para calcular a soma de cada coluna da matriz
function calcularSomaColunas(matriz) {
    let colunas = matriz[0].length;
    let somaColunas = Array(colunas).fill(0);
    
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < colunas; j++) {
            somaColunas[j] += matriz[i][j];
        }
    }

    return somaColunas;
}

// Gerar uma matriz 15x20 com números reais aleatórios
let matriz = gerarMatrizAleatoria(15, 20);

// Calcular a soma de cada coluna da matriz
let somaColunas = calcularSomaColunas(matriz);

// Imprimir a matriz
console.log("Matriz 15x20:");
for (let i = 0; i < matriz.length; i++) {
    console.log(matriz[i].join(' '));
}

// Imprimir a soma de cada coluna
console.log("\nSoma de cada coluna:");
for (let j = 0; j < somaColunas.length; j++) {
    console.log(`Coluna ${j + 1}: ${somaColunas[j].toFixed(2)}`);
}
