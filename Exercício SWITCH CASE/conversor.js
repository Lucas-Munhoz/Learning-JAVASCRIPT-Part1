let initialDistance = prompt("Digite a distância em ANOS-LUZ:")
let option = prompt("1 - Parsec(pc)\n2 - Unidade astronônima(AU)\n3 - Quilômetros(km)")

let chosenUnity
let convertedDistance

switch(option) {
    case "1":
        chosenUnity = "Parsec"
        convertedDistance = initialDistance * 0.306601
        break
    case "2":
        chosenUnity = "Unidade Astronômica"
        convertedDistance = initialDistance * 63241.1
        break
    case "3":                 //codigo utilizado para realizar a operação 10¹²(10 elevado a 12ª potencia)
        convertedDistance = initialDistance * Math.pow(10,12)
        chosenUnity = "Quilômetros"
        break
    default:
        chosenUnity = "Unidade não identificada"
        convertedDistance = "Conversão fora de escopo"
}

alert("Distância em Anos-luz: " + initialDistance + "\n" + chosenUnity + ": " + convertedDistance)