function verificarGanhadores(resultados, apostas) {
    apostas.forEach((aposta, i) => {
        let ganhou = aposta.every((numero, j) => numero === resultados[j]);
        if (ganhou) {
            console.log(`Aposta ${i + 1}: Ganhador`);
        }
    });
}

// Exemplo de uso
let resultadosLoto = Array.from({ length: 5 }, () => Math.floor(Math.random() * 100));
let apostasLoto = Array.from({ length: 50 }, () => Array.from({ length: 5 }, () => Math.floor(Math.random() * 100)));

verificarGanhadores(resultadosLoto, apostasLoto);
