// Função para calcular o produto de duas matrizes
function calcularMatrizProduto(matrizA, matrizB) {
    let matrizProduto = [];
    for (let i = 0; i < matrizA.length; i++) {
        let linhaProduto = [];
        for (let j = 0; j < matrizA[i].length; j++) {
            linhaProduto.push(matrizA[i][j] * matrizB[i][j]);
        }
        matrizProduto.push(linhaProduto);
    }
    return matrizProduto;
}

// Exemplo de matrizes A e B
let matrizA = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15]
];

let matrizB = [
    [2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11],
    [12, 13, 14, 15, 16]
];

// Calcular a matriz produto P
let matrizProduto = calcularMatrizProduto(matrizA, matrizB);

// Imprimir as matrizes A, B e P
console.log("Matriz A:");
for (let i = 0; i < matrizA.length; i++) {
    console.log(matrizA[i].join(' '));
}

console.log("\nMatriz B:");
for (let i = 0; i < matrizB.length; i++) {
    console.log(matrizB[i].join(' '));
}

console.log("\nMatriz Produto P:");
for (let i = 0; i < matrizProduto.length; i++) {
    console.log(matrizProduto[i].join(' '));
}
