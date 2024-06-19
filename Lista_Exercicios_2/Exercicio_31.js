function processarMatriz(matriz, valorA) {
    let contador = 0;
    let matrizX = [];

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] === valorA) {
                contador++;
            } else {
                matrizX.push(matriz[i][j]);
            }
        }
    }

    console.log(`Número de valores iguais a ${valorA}: ${contador}`);
    console.log(`Matriz X (sem valores iguais a ${valorA}):`, matrizX);
}

// Exemplo de uso
let matrizV = Array.from({ length: 30 }, () => Array.from({ length: 30 }, () => Math.floor(Math.random() * 10)));
let valorA = 5;
processarMatriz(matrizV, valorA);
