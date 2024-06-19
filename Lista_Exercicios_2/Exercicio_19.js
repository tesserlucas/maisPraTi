// Função para validar se a string representa um horário válido no formato HH:MM:SS
function validarHorario(horario) {
    // Expressão regular para validar o formato HH:MM:SS
    const regex = /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/;
    return regex.test(horario);
}

// Função para ler e validar 5 horários
function lerHorarios() {
    let horarios = [];
    
    for (let i = 0; i < 5; i++) {
        let horarioValido = false;
        let horario;

        while (!horarioValido) {
            horario = prompt(`Digite o horário ${i + 1} no formato HH:MM:SS:`);
            
            if (validarHorario(horario)) {
                horarioValido = true;
            } else {
                alert("Horário inválido. Por favor, insira no formato HH:MM:SS.");
            }
        }

        horarios.push(horario);
    }

    return horarios;
}

// Função para formatar e exibir os horários no formato HH.MM.SS
function mostrarHorarios(horarios) {
    console.log("Horários fornecidos no formato HH.MM.SS:");
    for (let horario of horarios) {
        let horarioFormatado = horario.replace(/:/g, ".");
        console.log(horarioFormatado);
    }
}

// Ler e validar os horários
let horarios = lerHorarios();

// Mostrar os horários no formato HH.MM.SS
mostrarHorarios(horarios);
