function verificarProva(gabarito, respostasAlunos) {
    respostasAlunos.forEach((respostas, i) => {
        let acertos = respostas.reduce((acc, resposta, j) => acc + (resposta === gabarito[j] ? 1 : 0), 0);

        console.log(`Aluno ${i + 1}, Acertos: ${acertos}`);
        console.log(acertos >= 12 ? "APROVADO" : "REPROVADO");
    });
}

// Exemplo de uso
let gabaritoProva = Array.from({ length: 20 }, () => String.fromCharCode(65 + Math.floor(Math.random() * 4)));
let respostasAlunos = Array.from({ length: 50 }, () => Array.from({ length: 20 }, () => String.fromCharCode(65 + Math.floor(Math.random() * 4))));

verificarProva(gabaritoProva, respostasAlunos);
