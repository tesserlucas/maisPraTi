function coletarDados() {
    let salarios = [];
    let numerosDeFilhos = [];
    let continuar = true;
    
    while (continuar) {
        let salario = parseFloat(prompt("Digite o salário da pessoa (ou um valor negativo para parar):"));
        if (salario < 0) break;
        
        let numFilhos = parseInt(prompt("Digite o número de filhos da pessoa:"));
        
        salarios.push(salario);
        numerosDeFilhos.push(numFilhos);

        continuar = confirm("Deseja continuar coletando dados?");
    }

    return { salarios, numerosDeFilhos };
}

function calcularEstatisticas(dados) {
    let totalSalarios = dados.salarios.reduce((acc, val) => acc + val, 0);
    let totalFilhos = dados.numerosDeFilhos.reduce((acc, val) => acc + val, 0);

    let mediaSalarios = totalSalarios / dados.salarios.length;
    let mediaFilhos = totalFilhos / dados.numerosDeFilhos.length;

    let maiorSalario = Math.max(...dados.salarios);
    let percentualSalariosAte350 = (dados.salarios.filter(salario => salario <= 350).length / dados.salarios.length) * 100;

    return {
        mediaSalarios,
        mediaFilhos,
        maiorSalario,
        percentualSalariosAte350
    };
}

function exibirEstatisticas(estatisticas) {
    console.log(`Média de salário da população: R$ ${estatisticas.mediaSalarios.toFixed(2)}`);
    console.log(`Média do número de filhos: ${estatisticas.mediaFilhos.toFixed(2)}`);
    console.log(`Maior salário: R$ ${estatisticas.maiorSalario.toFixed(2)}`);
    console.log(`Percentual de pessoas com salário até R$ 350,00: ${estatisticas.percentualSalariosAte350.toFixed(2)}%`);
}

// Coletar dados da população
let dados = coletarDados();

// Calcular estatísticas
let estatisticas = calcularEstatisticas(dados);

// Exibir estatísticas
exibirEstatisticas(estatisticas);
