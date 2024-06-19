function operacoesVetor(vetor, operacao) {
    let resultado;

    switch (operacao) {
        case 1:
            resultado = vetor.reduce((acc, val) => acc + val, 0);
            console.log("Soma dos elementos:", resultado);
            break;
        case 2:
            resultado = vetor.reduce((acc, val) => acc * val, 1);
            console.log("Produto dos elementos:", resultado);
            break;
        case 3:
            resultado = vetor.reduce((acc, val) => acc + val, 0) / vetor.length;
            console.log("Média dos elementos:", resultado);
            break;
        case 4:
            resultado = [...vetor].sort((a, b) => a - b);
            console.log("Vetor ordenado:", resultado);
            break;
        case 5:
            console.log("Vetor:", vetor);
            break;
        default:
            console.log("Operação inválida");
            break;
    }
}

// Exemplo de uso
let vetor6 = Array.from({ length: 6 }, () => Math.floor(Math.random() * 100));
let operacao = parseInt(prompt("Digite a operação (1-5):"));
operacoesVetor(vetor6, operacao);
