const hitchedSpaceships = [
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false],
]

//Filtrando o nome das naves que tem mais de 9 tripulantes
let maiorq9 = hitchedSpaceships.filter(element => {
    return element[1] > 9
}).map(spaceship => {
    return spaceship[0]
})

//Informando o número da plataforma em que está a primeira nave que ainda está com engate pendente
let platEngtPendente = hitchedSpaceships.findIndex(spaceship => {return spaceship[2] == false})
platEngtPendente += 1

//Destacando o nome de todas as naves colocando-as em caixa alta e exibindo
let upCasedSpaceships = hitchedSpaceships.map(spaceship => {return spaceship[0].toUpperCase()})

//EXIBINDO TODAS AS INFORMAÇÕES COM UM ALERT
alert(
    "Naves com mais de 9 tripulantes:\n" + maiorq9.join("\n") + "\n\n" +
    "Plataforma com engate pendente:\n" + platEngtPendente + "\n\n" +
    "TODAS AS NAVES REGISTRADAS:\n" + upCasedSpaceships.join("\n")
)

//debug no console
console.log(maiorq9)
console.log(platEngtPendente)
console.log(upCasedSpaceships)