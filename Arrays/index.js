let hitchedSpaceship = ["Supernova", "Elemental", "Helmet"]

console.log("Array: " + hitchedSpaceship)

console.log("CONTEUDO DO ARRAY\n")
console.log("\nPrimeiro item")
console.log(hitchedSpaceship[0])
console.log("\nSegundo item")
console.log(hitchedSpaceship[1])
console.log("\nTerceiro item")
console.log(hitchedSpaceship[2])
console.log("____________________________________")

console.log("PODE CONTEM DIVERSOS TIPOS")

let arrayEstranho = [true, "batata", 8]
console.log(arrayEstranho)
console.log("____________________________________")

console.log("TENTANDO IMPRIMIR UM ITEM QUE NÃO EXISTE")

//lembrando por ser linguagem interpretada, não existe lixo de memoria
//usando o array de cima
console.log(arrayEstranho[3])
console.log("____________________________________")

//NEW ARRAY
//Essa bosta serve APENAS PARA CRIAR ARRAYS VAZIOS
//Exemplo

let arrayVazio = new Array(5)
console.log(arrayVazio)
console.log("____________________________________")

//cuidado com essa coisa ai pq ela pode ser usada para
//passar dados pro array assim como os com []
//MAS SE VC SO PASSARA UM NÚMERO ELE CRIARÁ UM ARRAY COM 
//A QUANTIDADE DE ITENS QUE É O NUMERO

//POR ISSO SEMPRE USE O []