function categorizarTransacoes(transacoes) {
    return transacoes.reduce((acc, transacao) => {
        let { categoria, valor } = transacao;
        if (!acc[categoria]) {
            acc[categoria] = { transacoes: [], subtotal: 0 };
        }
        acc[categoria].transacoes.push(transacao);
        acc[categoria].subtotal += valor;
        return acc;
    }, {});
}

// Exemplo de uso
let transacoes = [
    { id: 1, valor: 100, data: '2023-01-01', categoria: 'alimentação' },
    { id: 2, valor: 50, data: '2023-01-02', categoria: 'transporte' },
    { id: 3, valor: 200, data: '2023-01-03', categoria: 'alimentação' }
];
console.log(categorizarTransacoes(transacoes));
