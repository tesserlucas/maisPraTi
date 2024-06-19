//Exercicio 16: Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100.
//Obs.: Número primo é aquele divisível somente por 1 e ele mesmo.

function isPrime(num) {
    for (let i = 2, sqrtNum = Math.sqrt(num); i <= sqrtNum; i++) {
        if (num % i === 0) return false;
    }
    return num > 1;
}

let count = 0;
let number = 101; // Começamos a partir do primeiro número maior que 100

while (count < 50) {
    if (isPrime(number)) {
        console.log(number);
        count++;
    }
    number++;
}
