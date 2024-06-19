// Função para contar elementos negativos em uma linha de uma matriz
function contarNegativos(linha) {
    let contador = 0;
    for (let i = 0; i < linha.length; i++) {
        if (linha[i] < 0) {
            contador++;
        }
    }
    return contador;
}

// Função para criar o vetor C a partir da matriz M
function criarVetorC(matriz) {
    let vetorC = [];
    for (let i = 0; i < matriz.length; i++) {
        vetorC.push(contarNegativos(matriz[i]));
    }
    return vetorC;
}

// Exemplo de matriz M[1..6,1..8]
let matrizM = [
    [1, -2, 3, 4, -5, 6, 7, -8],
    [9, 10, -11, 12, 13, -14, 15, 16],
    [17, -18, 19, -20, 21, 22, -23, 24],
    [-25, 26, 27, 28, 29, -30, 31, -32],
    [33, 34, -35, 36, -37, 38, -39, 40],
    [41, 42, -43, 44, 45, -46, 47, -48]
];

// Criar o vetor C
let vetorC = criarVetorC(matrizM);

// Imprimir a matriz M e o vetor C
console.log("Matriz M:");
for (let i = 0; i < matrizM.length; i++) {
    console.log(matrizM[i].join(' '));
}

console.log("\nVetor C (quantidade de elementos negativos por linha):");
console.log(vetorC.join(' '));
