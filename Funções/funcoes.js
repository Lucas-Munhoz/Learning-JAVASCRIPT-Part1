// DECLARAÇÃO DA FUNÇÃO
function falarBatata() {
    alert("BATATA!!!")
}

// CHAMANDO/EXECUTANDO A FUNÇÃO
falarBatata()


//-----------------------------------------
//               PARAMETROS
//-----------------------------------------

function speedUP(velocity, acceleration) {
    let newVelocity = velocity + acceleration
    console.log("Nova velocidade: " + newVelocity)
}

let velocity = 50
let aceleracao = 60

speedUP(velocity, aceleracao)
//Da pra passar variáveis aqui dentro tbm
//E elas não necessariamente precisam ser iguaias as da função
//MAS ELAS PRECISÃO OBRIGATÓRIAMENTE ESTAR NA MESMA ORDEM DA FUNÇÃO



//-----------------------------------------
//         PARAMETROS PADRÃO
//-----------------------------------------



//Caso a função não receba um parâmetro ela usará esse padrão
//Que será passado na declaração

function greetUser(name, message = "Olá") {
    console.log(message + ", " + name)
}

//caso sem o segundo parâmetro
console.log("-------------------------------")
greetUser("Lucas")

//caso com o segundo parâmetro
console.log("-------------------------------")
greetUser("Lucas", "Bem vindo ao site")
console.log("-------------------------------")


//-----------------------------------------
//        PARAMETROS TODO ERRADO
//-----------------------------------------

function greetUserCagado(name, message = "Olá", substantivo) {
    console.log(message + ", " + name + ", " + substantivo)
}
console.log("Objetivo é esse aqui em baixo, mas não vai dar certo")
console.log("mensagem     nome    substantivo")
greetUserCagado("NOME", "SUBSTANTIVO")
console.log("-------------------------------")
console.log("NÃO DEU CERTO PQ O PADRÃO NÃO SUBSTITUI NA ORDEM")
console.log("-------------------------------")



//-----------------------------------------
//            RETORNO DA FUNÇÃO
//-----------------------------------------



function fcomretorno(velocides, acerelacao) {
    let novaVelocides = velocides + acerelacao
    console.log("Nova velocides = " + novaVelocides)
    return novaVelocides
}

let velocides = 80
let acerelacao = 5

console.log("velocides")
console.log(velocides)
console.log("\n")
console.log("velocides, recebendo o retorno da função")
velocides = fcomretorno(velocides, acerelacao)
console.log("\n")
console.log("Velocides depois de receber o retorno da função")
console.log(velocides)