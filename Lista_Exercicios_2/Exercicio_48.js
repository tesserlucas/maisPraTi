function transformarPropriedades(obj, fn) {
    let resultado = {};
    for (let chave in obj) {
        resultado[chave] = fn(obj[chave]);
    }
    return resultado;
}

// Exemplo de uso
let objetoEntrada = { a: 1, b: 2, c: 3 };
function dobrar(valor) {
    return valor * 2;
}
console.log(transformarPropriedades(objetoEntrada, dobrar));
