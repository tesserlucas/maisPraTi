function processarMatriz50x50(matriz) {
    let matrizModificada = matriz.map((linha, i) => {
        let elementoDiagonal = matriz[i][i];
        return linha.map(valor => valor * elementoDiagonal);
    });

    console.log("Matriz modificada:", matrizModificada);
}

// Exemplo de uso
let matriz50x50 = Array.from({ length: 50 }, () => Array.from({ length: 50 }, () => Math.random() * 100));
processarMatriz50x50(matriz50x50);
