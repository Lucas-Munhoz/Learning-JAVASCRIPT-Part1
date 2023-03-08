let velocity = prompt("Insira a velocidade")

if(velocity < 25) {
    console.log("Velocidade baixa")
} else if(velocity <= 100) {
        console.log("Cuidado! Próximo a velocidade de risco")
} else{
        console.log("Velocidade de Risco!")
}

//IF DE UMA LINHA       caso verdadeiro executa isso                  caso falso executa isso
(velocity > 100) ? console.log("Velocidade maior que 100") : console.log("Velocidade menor que 100")
