// Inicializar os dois primeiros termos da sequência de Fibonacci
var termo1 = 1;
var termo2 = 1;

// Exibir os dois primeiros termos
console.log(termo1);
console.log(termo2);

// Exibir os próximos 8 termos da sequência de Fibonacci
for (var i = 3; i <= 10; i++) {
    var proximoTermo = termo1 + termo2;
    console.log(proximoTermo);

    // Atualizar os termos para a próxima iteração
    termo1 = termo2;
    termo2 = proximoTermo;
}
