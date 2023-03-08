let warpCount = 0

let spaceship = prompt("Digite o nome da nave")
let chosenOption = prompt("Deseja entrar em dobra espacial?\n1-SIM\n2-NÃO")


//========================================================================================================================
//                                         MEU CÓDIGO FEIOSO
//========================================================================================================================

/*
switch(chosenOption) {
    case "1":
        warpCount += 1
        chosenOption = prompt("Deseja realizar a próxima dobra?\n1-SIM\n2-NÃO")
        while (chosenOption == 1) {
            warpCount += 1
            chosenOption = prompt("Deseja realizar a próxima dobra?\n1-SIM\n2-NÃO")
        }
    case "2":
        alert(
            "Nome da nave: " + spaceshipName + "\n" +
            "Quantidade de dobras: " + warpCount
        )
        break;
    default:
        alert("Opção inválida")
}
*/


//========================================================================================================================
//                                                CORREÇÃO
//========================================================================================================================

while(chosenOption == "1") {
    warpCount += 1
    chosenOption = prompt("Deseja realizar a próxima dobra?\n1-SIM\n2-NÃO")
}

alert("Nave: " + spaceship + "\nQuantidade de dobras: " + warpCount)