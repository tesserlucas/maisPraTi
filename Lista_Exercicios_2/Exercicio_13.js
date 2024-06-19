// Inicializar o vetor para armazenar os elementos da sequência de Fibonacci
var fibonacci = [];

// Inicializar os dois primeiros termos da sequência de Fibonacci
fibonacci[0] = 1;
fibonacci[1] = 1;

// Preencher o vetor com os primeiros 15 elementos da sequência de Fibonacci
for (var i = 2; i < 15; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

// Exibir o vetor no console
console.log(fibonacci);
