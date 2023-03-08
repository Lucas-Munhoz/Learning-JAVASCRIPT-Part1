// Nesse exercício nós utilizamos duas BIBLIOTECAS JS
// Uma é nativa do JS, chama-se MATH, obiviamente sobre matemática
// A outra nós baixamos o arquivo e importamos, chama-se MOMENT JS
// Serve para aferirmos o tempo de diferentes formas

let dateEntry = prompt("Digite a data de partida (formato DD/MM/YYYY")

let departureDate = moment(dateEntry, "DD/MM/YYYY")

let today = moment()

let dateDiff = today - departureDate

let choseOption = prompt("Escolha como gostaria de exibir o tempo de partida\n1- Segundos\n2- Minutos\n3- Horas\n4- Dias\n5- Anos")

// Esse Math.round é uma função da biblioteca MATH que serve para arredondar valores.
// E como temos uma divisão que dará numeros quebrados é bom utilizarmos ele.

if(choseOption == "1") { 
    let secondsOfDeparture = Math.round(dateDiff / 1000)
    alert("Tempo de vôo: " + secondsOfDeparture + " segundos")
} else if(choseOption == "2") {
    let minutsOfDeparture = Math.round(dateDiff / 1000 / 60)
    alert("Tempo de vôo: " + minutsOfDeparture + " minutos")
} else if(choseOption == "3") {
    let hoursOfDeparture = Math.round(dateDiff / 1000 / 3600)
    alert("Tempo de vôo: " + hoursOfDeparture + " horas")
} else if(choseOption == "4") {
    let daysOfDeparture = Math.round(dateDiff / 1000 / 3600 / 24)
    alert("Tempo de vôo: " + daysOfDeparture + " dias")
} else if(choseOption == "5") {
    let yearsOfDeparture = Math.round(dateDiff / 1000 / 3600 / 24 / 365)
    alert("Tempo de vôo: " + yearsOfDeparture + " anos")
} else {
    alert("Opção inválida")
}