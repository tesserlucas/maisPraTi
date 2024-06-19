const prompt = require('prompt-sync')();

var totalSalarioHomens = 0;
var totalSalarioMulheres = 0;
var continuar = true;

while (continuar) {
    // Solicita o salário do funcionário
    var salario = Number(prompt("Digite o salário do funcionário: "));

    // Solicita o sexo do funcionário
    var sexo = prompt("Digite o sexo do funcionário (M para masculino, F para feminino): ").toUpperCase();

    // Verifica o sexo e acumula o salário
    if (sexo === "M") {
        totalSalarioHomens += salario;
    } else if (sexo === "F") {
        totalSalarioMulheres += salario;
    } else {
        console.log("Sexo inválido. Digite M para masculino ou F para feminino.");
    }

    // Pergunta se o usuário deseja continuar
    var resposta = prompt("Deseja continuar? (S para sim, N para não): ").toUpperCase();
    if (resposta !== "S") {
        continuar = false;
    }
}

// Exibindo o total de salários pagos
console.log("Total de salário pago aos homens: R$ " + totalSalarioHomens.toFixed(2));
console.log("Total de salário pago às mulheres: R$ " + totalSalarioMulheres.toFixed(2));
