// Função para calcular o peso ideal
function calcularPesoIdeal(alt, sexo) {
    let pesoIdeal;

    if (sexo.toLowerCase() === 'masculino') {
        pesoIdeal = 72.7 * alt - 58;
    } else if (sexo.toLowerCase() === 'feminino') {
        pesoIdeal = 62.1 * alt - 44.7;
    } else {
        throw new Error("Sexo inválido. Use 'masculino' ou 'feminino'.");
    }

    return pesoIdeal;
}

// Exemplo de uso da função
try {
    let altura = parseFloat(prompt("Digite a altura da pessoa (em metros):"));
    let sexo = prompt("Digite o sexo da pessoa (masculino ou feminino):");

    let pesoIdeal = calcularPesoIdeal(altura, sexo);
    console.log(`O peso ideal para uma pessoa de sexo ${sexo} e altura ${altura}m é: ${pesoIdeal.toFixed(2)} kg`);
} catch (error) {
    console.error(error.message);
}
