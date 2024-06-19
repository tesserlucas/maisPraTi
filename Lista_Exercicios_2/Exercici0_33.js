function processarMatriz3x3(matriz) {
    let diagonalSecundaria = [matriz[0][2], matriz[1][1], matriz[2][0]];
    let mediaDiagonalSecundaria = diagonalSecundaria.reduce((acc, val) => acc + val, 0) / 3;

    for (let i = 0; i < 3; i++) {
        matriz[i][i] *= mediaDiagonalSecundaria;
    }

    console.log("Matriz modificada:", matriz);
}

// Exemplo de uso
let matriz3x3 = Array.from({ length: 3 }, () => Array.from({ length: 3 }, () => Math.floor(Math.random() * 10)));
processarMatriz3x3(matriz3x3);
