let cores = ["Branco", "Vermelho", "Azul"]

console.log("FUNÇÃO PUSH:")
//ADICIONA UM ITEM NO FINAL DO ARRAY    //NÃO TEM RETURN//
console.log(cores)
cores.push("Roxo")
console.log(cores)
console.log("==============================================")








cores = ["Branco", "Vermelho", "Azul"]

console.log("FUNÇÃO POP:")
//REMOVE O ULTIMO ITEM DO ARRAY, E ELA TBM RETORNA ELE
console.log(cores)
cores.pop("Roxo")
console.log(cores)
console.log("retorno da função POP")
let sla = cores.pop()
console.log(sla)
console.log(cores)
console.log("==============================================")






cores = ["Branco", "Vermelho", "Azul"]

console.log("FUNÇÃO SHIFT:")
//REMOVE O PRIMEIRO ITEM DO ARRAY, E ELA TBM RETORNA ELE
console.log(cores)
cores.shift()
console.log(cores)
cores = ["Branco", "Vermelho", "Azul"]
console.log("retorno da função SHIFT")
let sla2 = cores.shift()
console.log(sla2)
console.log(cores)
console.log("==============================================")






cores = ["Branco", "Vermelho", "Azul"]

console.log("FUNÇÃO UNSHIFT:")
//ADICIONA UM ITEM A PRIMEIRA POSIÇÃO DO ARRAY    //NÃO TEM RETORNO//
console.log(cores)
cores.unshift("ROSA")
console.log(cores)
console.log("==============================================")






cores = ["Branco", "Vermelho", "Azul"]

console.log("FUNÇÃO LENGTH:")
//RETORNA O TAMANHO DO ARRAY         //ULTIMO INDEX = TAMANHO - 1
console.log(cores)
console.log("Tamanho do array:")
console.log(cores.length)
console.log("==============================================")






cores = ["Branco", "Vermelho", "Azul"]

console.log("FUNÇÃO INDEXOF:")
//RETORNA O INDEX DO ITEM NO ARRAY
console.log(cores)
console.log("Index do item 'Vermelho':")
let fuedassi = cores.indexOf("Vermelho")
console.log(fuedassi)
//SE COLOCAR UM ITEM QUE NÃO ESTEJA NO ARRAY ELE RETORNA O VALOR -1
fuedassi = cores.indexOf("batata")
console.log("Retorno de item que não existe do array:")
console.log(fuedassi)
console.log("==============================================")
