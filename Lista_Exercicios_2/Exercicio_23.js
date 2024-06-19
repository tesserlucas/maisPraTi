// Função para criar a matriz identidade 7x7
function criarMatrizIdentidade(dimensao) {
    let matriz = [];

    for (let i = 0; i < dimensao; i++) {
        matriz[i] = [];
        for (let j = 0; j < dimensao; j++) {
            if (i === j) {
                matriz[i][j] = 1;
            } else {
                matriz[i][j] = 0;
            }
        }
    }

    return matriz;
}

// Função para imprimir a matriz
function imprimirMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join(' '));
    }
}

// Criar a matriz identidade 7x7
let matrizIdentidade = criarMatrizIdentidade(7);

// Imprimir a matriz identidade
imprimirMatriz(matrizIdentidade);
