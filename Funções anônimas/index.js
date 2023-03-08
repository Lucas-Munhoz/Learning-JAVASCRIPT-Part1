console.log("TESTE PASSANDO VALOR EM UMA FUNÇÃO ANONIMA")

let funcaoAnonima = function(valor1){
    return result = valor1 * 5
}

console.log("Resultado F.A.= " + funcaoAnonima(10))

console.log("Passando um valor para a LET F.A.")
funcaoAnonima = "120"
console.log(funcaoAnonima)


//============================================
//     EXPLICAÇÕES SOBRE FUNÇÕES ANÔNIMAS
//============================================

console.log("______________________________________________")
console.log("______________________________________________")

console.log(speedUp(60, 10))
console.log(doubleSpeed(50))


//POR SER UMA FUNÇÃO ANONIMA E USADA POR MEIO DE UMA VARIAVEL
//RESULTARÁ EM UM ERRO, ENTAO ASSIM COMO UMA VARIÁVEL QUALQUER
//É NECESSÁRIO DECLARAR ANTES DE UTILIZAR NO CÓDIGO!!!!!!!!
let doubleSpeed = function(velocity) {
    return velocity * 2
}

//POR SER UMA FUNÇÃO DECLARADA DA MANEIRA CONVENCIONAL
//ELA É LIDA PELO CÓDIGO NO COMEÇO DO ARQUIVO, ENTÃO
//NÃO É NECESSARIO DECLARAR ANTES DE UTILIZAR NO CÓDIGO!!!
function speedUp(velocity, acceleration) {
    return velocity + acceleration
}