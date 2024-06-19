function filtrarPropriedadesArray(obj) {
    let resultado = {};
    for (let chave in obj) {
        if (Array.isArray(obj[chave])) {
            resultado[chave] = obj[chave];
        }
    }
    return resultado;
}

// Exemplo de uso
let dados = { nome: "João", idade: 25, hobbies: ["futebol", "leitura"], notas: [8, 9, 10] };
console.log(filtrarPropriedadesArray(dados));
