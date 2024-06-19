function separarParesImpares(valores) {
    let vetorPares = [];
    let vetorImpares = [];

    valores.forEach(valor => {
        if (valor % 2 === 0) {
            vetorPares.push(valor);
            if (vetorPares.length === 5) {
                console.log("Vetor Pares:", vetorPares);
                vetorPares = [];
            }
        } else {
            vetorImpares.push(valor);
            if (vetorImpares.length === 5) {
                console.log("Vetor Ímpares:", vetorImpares);
                vetorImpares = [];
            }
        }
    });

    if (vetorPares.length > 0) {
        console.log("Vetor Pares Restante:", vetorPares);
    }

    if (vetorImpares.length > 0) {
        console.log("Vetor Ímpares Restante:", vetorImpares);
    }
}

// Exemplo de uso
let valores = Array.from({ length: 30 }, () => Math.floor(Math.random() * 100));
separarParesImpares(valores);
