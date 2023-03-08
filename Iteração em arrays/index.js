//FOR EACH
//PARA CADA, ou seja para cada item dentro do array

//  nomeArray.forEach(function (item, indice, array) {
//    bloco de código
//  })

let hitchedSpaceships = ["Deméter", "Darwin", "Supernova", "Fenix", "Puller"]

hitchedSpaceships.forEach(function(currentSpaceship, index) {
    console.log("Nave: " + currentSpaceship + "\nÍndece: " + index)
})


//MAP
//modifica os elementos um a um, sem alterar o original
//UTILIZAMOS O RETORNO DESSA FUNCTION
console.log("----------------------------------------------")

let hitchedSpaceships2 = ["Deméter", "Darwin", "Supernova", "Fenix", "Puller"]

console.log(hitchedSpaceships2)

let upcasedSpaceships2 = hitchedSpaceships2.map(function(currentSpaceship) {
    let upcased = currentSpaceship.toUpperCase()
    return upcased               //essa função ativa o CAPS
})

console.log(upcasedSpaceships2)


//FILTER
//cria um novo array com todos os elementos que passaram no teste
//implementado pela função fornecida.

//var newArray = array.filter(callback[, thisArg])
console.log("----------------------------------------------")

let hitchedSpaceships3 = ["Deméter", "Darwin", "Supernova", "Fenix", "Puller"]

console.log(hitchedSpaceships3)

let maioresq7 = hitchedSpaceships3.filter(element => { return element.length >= 7 })

console.log(maioresq7)

//FIND
//Faz a mesma coisa que o filter porem ele para assim que encontra
//algum elemento que atenda ao teste
console.log("----------------------------------------------")

let hitchedSpaceships4 = ["Deméter", "Darwin", "Supernova", "Fenix", "Puller"]

console.log(hitchedSpaceships4)

let primeiroMaiorQ7 = hitchedSpaceships4.find(function(element) { return element.length >= 7 })

console.log(primeiroMaiorQ7)