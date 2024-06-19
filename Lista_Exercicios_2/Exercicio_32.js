function processarMatrizM(matriz) {
    let matrizModificada = matriz.map(linha => {
        let maiorElemento = Math.max(...linha.map(Math.abs));
        return linha.map(valor => valor / maiorElemento);
    });

    console.log("Matriz original:", matriz);
    console.log("Matriz modificada:", matrizModificada);
}

// Exemplo de uso
let matrizM = Array.from({ length: 12 }, () => Array.from({ length: 13 }, () => (Math.random() * 200) - 100));
processarMatrizM(matrizM);
