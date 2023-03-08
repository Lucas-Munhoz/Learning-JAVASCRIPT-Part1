let nomes = ["lucas", "luiz", "gustavo", "will", "batata"]

console.log("Antes da função")
console.log(nomes)
//                    diz de qual até qual serão removidos
//                             | ids |            
let removedNomes = nomes.splice(1, 3, 5, 2, "Kleber", "ferdinando")
//                                   |         conteudo          |
//                            serão adicionados entre os ids passados
console.log("\nDepois da função")
console.log(nomes)

console.log("\nRetorno da função")
console.log(removedNomes)

//CASO VC NÃO PASSE OS ELEMENTOS QUE DESEJA COLOCAR NO LUGAR
//VC SIMPLESMENTE IRÁ DELETAR OS QUE ESTÃO NOS ID'S PASSADOS



console.log("\n\n\n================================================")
//SLICE
console.log("================================================\n\n\n\n")

//Utilizado mais para o retorno, pois ele não altera nada no array original

let spaceshipNames = ["Elemental", "Darwin", "Ártemis", "Supernova"]

console.log("Antes da função")
console.log(spaceshipNames)

let extractedNames = spaceshipNames.slice(1, 3)

console.log("\nDepois da função")
console.log(spaceshipNames)

console.log("\nRetorno da função")
console.log(extractedNames)