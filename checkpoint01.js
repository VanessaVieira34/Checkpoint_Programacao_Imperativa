//Função da condição e mensagens

function preparacao(tempoPadrao, tempoUtilizado) {
    if (tempoUtilizado < tempoPadrao) {
        console.log("Prato pronto, bom apetite!!!");
        console.log("Tempo insuficiente para preparação");
    }
    else if ((tempoUtilizado > tempoPadrao * 2) && (tempoUtilizado < tempoPadrao * 3)) {
        console.log("Prato pronto, bom apetite!!!");
        console.log("Sua comida queimou");
    }
    else if (tempoUtilizado > tempoPadrao * 3) {
        console.log("Prato pronto, bom apetite!!!");
        console.log("KABUUUUM!!!!!");
    } else {
        console.log("Prato pronto, bom apetite!!!");
        console.log("Sua comida está pronta");
    }
}

//Função da condição do tempo

function microondas(alimento, tempo) {
    switch (alimento) {
        case "pipoca":
            return preparacao(10, tempo);
            break;
        case "macarrão":
            return preparacao(8, tempo);
            break;
        case "carne":
            return preparacao(15, tempo);
            break;
        case "feijão":
            return preparacao(12, tempo);
        case "brigadeiro":
            return preparacao(8, tempo);

        default:
            return console.log("Prato inexistente");
    }
}

microondas("pipoca", 25);