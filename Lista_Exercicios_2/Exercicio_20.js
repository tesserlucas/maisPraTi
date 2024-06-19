// Função para calcular a dedução do INSS
function calcularDeducaoINSS(salarioBruto) {
    return salarioBruto * 0.12;
}

// Função para calcular o salário líquido
function calcularSalarioLiquido(salarioBruto, deducaoINSS) {
    return salarioBruto - deducaoINSS;
}

// Função para ler os dados dos funcionários
function lerDadosFuncionarios() {
    let funcionarios = [];

    for (let i = 0; i < 80; i++) {
        let matricula = prompt(`Digite a matrícula do funcionário ${i + 1}:`);
        let nome = prompt(`Digite o nome do funcionário ${i + 1}:`);
        let salarioBruto = parseFloat(prompt(`Digite o salário bruto do funcionário ${i + 1}:`));

        funcionarios.push({
            matricula: matricula,
            nome: nome,
            salarioBruto: salarioBruto
        });
    }

    return funcionarios;
}

// Função para emitir o contracheque de cada funcionário
function emitirContracheques(funcionarios) {
    for (let funcionario of funcionarios) {
        let deducaoINSS = calcularDeducaoINSS(funcionario.salarioBruto);
        let salarioLiquido = calcularSalarioLiquido(funcionario.salarioBruto, deducaoINSS);

        console.log(`Matrícula: ${funcionario.matricula}`);
        console.log(`Nome: ${funcionario.nome}`);
        console.log(`Salário bruto: R$ ${funcionario.salarioBruto.toFixed(2)}`);
        console.log(`Dedução INSS: R$ ${deducaoINSS.toFixed(2)}`);
        console.log(`Salário líquido: R$ ${salarioLiquido.toFixed(2)}`);
        console.log('-----------------------------------');
    }
}

// Ler os dados dos funcionários
let funcionarios = lerDadosFuncionarios();

// Emitir os contracheques
emitirContracheques(funcionarios);
