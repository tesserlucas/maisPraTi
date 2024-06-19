const prompt = require('prompt-sync')();

// Solicitando o tamanho dos segmentos de reta e convertendo para números
var segmentoA = parseFloat(prompt("Digite o comprimento do primeiro segmento de reta: "));
var segmentoB = parseFloat(prompt("Digite o comprimento do segundo segmento de reta: "));
var segmentoC = parseFloat(prompt("Digite o comprimento do terceiro segmento de reta: "));

// Verificando se é possível formar um triângulo
var podeFormarTriangulo = (segmentoA < segmentoB + segmentoC) &&
                          (segmentoB < segmentoA + segmentoC) &&
                          (segmentoC < segmentoA + segmentoB);


if (podeFormarTriangulo) {
    console.log("É possível formar um triângulo com os segmentos fornecidos.");
} else {
    console.log("Não é possível formar um triângulo com os segmentos fornecidos.");
}

