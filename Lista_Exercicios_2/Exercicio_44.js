function contarPropriedadesString(obj) {
    return Object.values(obj).filter(valor => typeof valor === 'string').length;
}

// Exemplo de uso
let objeto = { nome: "João", idade: 25, cidade: "São Paulo", email: "joao@example.com" };
console.log(contarPropriedadesString(objeto));
