function verificarApostas(gabarito, apostas) {
    apostas.forEach(apostador => {
        let { numeroCartao, respostas } = apostador;
        let acertos = respostas.reduce((acc, resposta, i) => acc + (resposta === gabarito[i] ? 1 : 0), 0);

        console.log(`Número do Apostador: ${numeroCartao}, Acertos: ${acertos}`);
        if (acertos === 13) {
            console.log("Parabéns, tu foi o GANHADOR");
        }
    });
}

// Exemplo de uso
let gabarito = Array.from({ length: 13 }, () => Math.floor(Math.random() * 3));
let apostas = Array.from({ length: 100 }, (v, i) => ({
    numeroCartao: i + 1,
    respostas: Array.from({ length: 13 }, () => Math.floor(Math.random() * 3))
}));

verificarApostas(gabarito, apostas);
