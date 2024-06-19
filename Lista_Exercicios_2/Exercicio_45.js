function contarFrequenciaStrings(array) {
    return array.reduce((acc, str) => {
        acc[str] = (acc[str] || 0) + 1;
        return acc;
    }, {});
}

// Exemplo de uso
let arrayStrings = ["apple", "banana", "apple", "orange", "banana", "apple"];
console.log(contarFrequenciaStrings(arrayStrings));
