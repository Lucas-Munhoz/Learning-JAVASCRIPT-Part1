let spaceships = {
    name: "Fenix",
    crewQuantity: 7,
    type: "Batalha"
}

console.log("spaceships")
console.log(spaceships)

//ACESSANDO PROPRIEDADES DENTRO DO OBJETO
console.log("__________________________________________")
console.log("Acessando propriedades:\n\n")
//É possivel acessar uma PROPRIEDADE dentro do objeto desta maneira:

console.log("spaceships.type")
console.log(spaceships.type)

//outra maneira:

console.log("spaceships['name']")
console.log(spaceships["name"])

//ADICIONANDO PROPRIEDADES AO OBJETO

console.log("__________________________________________")
console.log("Adicionando propriedades:\n\n")
//Ao chamar uma propriedade que não existe
// e atribuir um valor a ela, vc estará
// adicionando ela ao objeto

spaceships.isHitched = false
console.log("spaceships.isHitched = false")
console.log(spaceships)

//Outra maneira:

spaceships["shieldLevel"] = 100
console.log("spaceship['shieldLevel'] = 100")
console.log(spaceships)

//Criando objetos vazios:

console.log("__________________________________________")
console.log("Criando objetos vazios:\n\n")

console.log("let objVazio1 = {}")
let objVazio1 = {}
console.log(objVazio1)

//outra maneira:

console.log("let objVazio2 = new Object()")
let objVazio2 = new Object()
console.log(objVazio1)