//-----------------------------------------------------------------
//Obejeto com ARRAY aninhado:
//-----------------------------------------------------------------

let spaceship = {
    name: "Supernova",
    type: "Batalha",
    crew: ["Cap. Silva", "Lusquinhas", "Klebin"]
}

console.log(spaceship)
//Para podermos acessar o array dentro do objeto
//utilizaremos as funções de array mas indicando
//que este array está dentro do nosso objeto.

console.log("spaceship.crew.push('Ten. Fernanda')")
spaceship.crew.push("Ten. Fernanda")
console.log(spaceship)


//-----------------------------------------------------------------
//Array com OBJETO aninhado:
//-----------------------------------------------------------------

let spaceships = [
    {name: "Elemental", crewQuantity: 10},
    {name: "Colosus", crewQuantity: 29},
    {name: "Helmet", crewQuantity: 38}
]

//acessando o name do primeiro objeto
console.log("______________________________________")
console.log("spaceships[0].name")
console.log(spaceships[0].name)

//percorrendo o array com um forEach
console.log("______________________________________")
console.log("Percorrendo o array com forEach\n\n")
spaceships.forEach(spaceshipArrow => {
    console.log(spaceshipArrow.name + " tem " + spaceshipArrow.crewQuantity + " tripulantes.")
})


//-----------------------------------------------------------------
//Objeto aninhado com objeto
//-----------------------------------------------------------------

let spacoNave = {
    name: "VruVrumDEet",
    maxCrew: 100,
    captain: {
        name: "Billu o sabio",
        age: 65356465
    }
}

//acessando o objeto dentro do objeto
console.log("______________________________________")
console.log("Acessando o objeto dentro do objeto\n\n")
console.log(spacoNave.captain.name)
console.log(spacoNave.captain.age)