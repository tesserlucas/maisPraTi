// Array para armazenar os hotéis
var hoteis = [];

// Array para armazenar as reservas
var reservas = [];

// Função para adicionar hotéis ao sistema
function adicionarHotel(id, nome, cidade, quartosTotais) {
    hoteis.push({
        id: id,
        nome: nome,
        cidade: cidade,
        quartosTotais: quartosTotais,
        quartosDisponiveis: quartosTotais
    });
    console.log("Hotel adicionado com sucesso!");
}

// Função para buscar hotéis por cidade
function buscarHoteisPorCidade(cidade) {
    var hoteisNaCidade = hoteis.filter(function(hotel) {
        return hotel.cidade.toLowerCase() === cidade.toLowerCase();
    });

    if (hoteisNaCidade.length > 0) {
        console.log("Hotéis disponíveis em " + cidade + ":");
        hoteisNaCidade.forEach(function(hotel) {
            console.log(hotel);
        });
    } else {
        console.log("Nenhum hotel encontrado em " + cidade);
    }
}

// Função para fazer uma reserva
function fazerReserva(idReserva, idHotel, nomeCliente) {
    var hotel = hoteis.find(function(hotel) {
        return hotel.id === idHotel;
    });

    if (hotel && hotel.quartosDisponiveis > 0) {
        hotel.quartosDisponiveis--;
        reservas.push({
            idReserva: idReserva,
            idHotel: idHotel,
            nomeCliente: nomeCliente
        });
        console.log("Reserva feita com sucesso!");
    } else {
        console.log("Reserva não pode ser feita. Hotel não encontrado ou sem quartos disponíveis.");
    }
}

// Função para cancelar uma reserva
function cancelarReserva(idReserva) {
    var reservaIndex = reservas.findIndex(function(reserva) {
        return reserva.idReserva === idReserva;
    });

    if (reservaIndex !== -1) {
        var reserva = reservas[reservaIndex];
        var hotel = hoteis.find(function(hotel) {
            return hotel.id === reserva.idHotel;
        });

        if (hotel) {
            hotel.quartosDisponiveis++;
            reservas.splice(reservaIndex, 1);
            console.log("Reserva cancelada com sucesso!");
        } else {
            console.log("Hotel não encontrado para a reserva.");
        }
    } else {
        console.log("Reserva não encontrada.");
    }
}

// Função para listar todas as reservas
function listarReservas() {
    if (reservas.length > 0) {
        console.log("Listando todas as reservas:");
        reservas.forEach(function(reserva) {
            var hotel = hoteis.find(function(hotel) {
                return hotel.id === reserva.idHotel;
            });

            console.log("Reserva ID: " + reserva.idReserva + ", Cliente: " + reserva.nomeCliente + ", Hotel: " + hotel.nome + ", Cidade: " + hotel.cidade);
        });
    } else {
        console.log("Nenhuma reserva encontrada.");
    }
}

// Exemplo de uso
adicionarHotel(1, "Hotel A", "Cidade X", 10);
adicionarHotel(2, "Hotel B", "Cidade Y", 5);
adicionarHotel(3, "Hotel C", "Cidade X", 20);

buscarHoteisPorCidade("Cidade X");

fazerReserva(1, 1, "Cliente 1");
fazerReserva(2, 3, "Cliente 2");

listarReservas();

cancelarReserva(1);

listarReservas();

buscarHoteisPorCidade("Cidade Y");
