function combinarObjetos(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

// Exemplo de uso
let obj1 = { nome: "João", idade: 25 };
let obj2 = { idade: 30, email: "joao@example.com" };
console.log(combinarObjetos(obj1, obj2));
