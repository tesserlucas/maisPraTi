// Vetores para armazenar os nomes e idades
let nomes = [];
let idades = [];

// Função para ler os dados das pessoas
function lerDados() {
    for (let i = 0; i < 9; i++) {
        let nome = prompt(`Digite o nome da pessoa ${i + 1}:`);
        let idade = parseInt(prompt(`Digite a idade da pessoa ${i + 1}:`));

        nomes.push(nome);
        idades.push(idade);
    }
}

// Função para mostrar os dados das pessoas menores de idade
function mostrarMenoresDeIdade() {
    console.log("Pessoas menores de idade:");
    for (let i = 0; i < nomes.length; i++) {
        if (idades[i] < 18) {
            console.log(`Nome: ${nomes[i]}, Idade: ${idades[i]}`);
        }
    }
}

// Ler os dados das 9 pessoas
lerDados();

// Mostrar os dados das pessoas menores de idade
mostrarMenoresDeIdade();
