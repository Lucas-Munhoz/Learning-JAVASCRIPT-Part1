//FUNÇÃO                          callback
function doubleVelocity(velocity, printer) {
    console.log("Entrei em doubleVelocity")
    let newVelocity = velocity * 2
    printer(newVelocity)
    return newVelocity
}

//FUNÇÃO ANÔNIMA
let printVelocity = velocity => {
    console.log("Nova velocidade: " + velocity + "km/s")
}

//-----------------------
//        CÓDIGO
//-----------------------

let newVelocity = doubleVelocity(60, printVelocity)
console.log(newVelocity)

//===================================================================
//===================================================================
//===================================================================
//===================================================================
//===================================================================

console.log("____________________________________________")
//=======================================================
console.log("FORMA MAIS POLIDA DO CÓDIGO DE CIMA")


//FUNÇÃO
function doubleVelocity2(velocity, printer) {
    console.log("Entrei em doubleVelocity")
    let newVelocity = velocity * 2
    printer(newVelocity)
    return newVelocity
}

//CÓDIGO
//               basicamente o segundo parâmetro ja é uma function
let anotherVelocity = doubleVelocity2(50, (velocity) => {
    console.log("Outra velocidade: " + velocity)
    console.log(velocity)
})
console.log(anotherVelocity)

//Forma melhor pra entender oque ta rolando ai em cima
//let anotherVelocity = doubleVelocity2(50, () => {console.log("Outra velocidade: " + velocity)} )
//                     |   função   |  |p1| |                   parâmetro 2                     |                             

//===================================================================
//===================================================================
//===================================================================
//===================================================================
//===================================================================

console.log("____________________________________________")
//=======================================================
console.log("MESMA COISA QUE O DE CIMA MAS SEM ARROW")


//FUNÇÃO
function doubleVelocity3(velocity, printer) {
    console.log("Entrei em doubleVelocity")
    let batata = velocity * 2
    printer(batata)
    return batata
}

//CÓDIGO

let anotherVelocity2 = doubleVelocity3(80, function(g) {
    console.log("Outra velocidade: " + g)
    console.log(g)
})

console.log(anotherVelocity2)
