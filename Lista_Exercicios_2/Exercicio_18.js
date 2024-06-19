// Definição do registro do funcionário como um objeto
let funcionario = {
    nome: "",
    cargo: "",
    salario: 0
};

// Função para ler os dados do funcionário
function lerDadosFuncionario() {
    funcionario.nome = prompt("Digite o nome do funcionário:");
    funcionario.cargo = prompt("Digite o cargo do funcionário:");
    funcionario.salario = parseFloat(prompt("Digite o salário do funcionário:"));
}

// Função para exibir os dados do funcionário
function mostrarDadosFuncionario() {
    console.log("Dados do Funcionário:");
    console.log(`Nome: ${funcionario.nome}`);
    console.log(`Cargo: ${funcionario.cargo}`);
    console.log(`Salário: R$ ${funcionario.salario.toFixed(2)}`);
}

// Ler os dados do funcionário
lerDadosFuncionario();

// Mostrar os dados do funcionário
mostrarDadosFuncionario();
