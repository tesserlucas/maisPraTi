function sumarizarVendas(vendas) {
    return vendas.reduce((acc, venda) => {
        acc[venda.vendedor] = (acc[venda.vendedor] || 0) + venda.valor;
        return acc;
    }, {});
}

// Exemplo de uso
let vendas = [
    { vendedor: "João", valor: 100 },
    { vendedor: "Maria", valor: 200 },
    { vendedor: "João", valor: 150 },
    { vendedor: "Maria", valor: 300 }
];
console.log(sumarizarVendas(vendas));
