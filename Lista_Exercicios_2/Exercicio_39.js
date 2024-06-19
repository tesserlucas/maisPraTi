function compactarVetor(vetor) {
    let vetorCompactado = vetor.filter(valor => valor > 0);
    console.log("Vetor Compactado:", vetorCompactado);
}

// Exemplo de uso
let vetorA = Array.from({ length: 100 }, () => Math.floor(Math.random() * 201) - 100);
compactarVetor(vetorA);
