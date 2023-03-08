let spaceship = prompt("Digite o nome da nave")
let paraSubistituir = prompt("Digite o caractere que deseja substituir")
let substituto = prompt("Digite por qual caractere deseja substituir")

console.log(spaceship, paraSubistituir, substituto)

let newSpaceship = ""

for(let i = 0; i < spaceship.length; i++) {
    if(spaceship[i] == paraSubistituir) {            
        newSpaceship += substituto
    } else {
        newSpaceship += spaceship[i]
    }
    console.log(spaceship[i])
}

console.log("Novo nome da nave: " + newSpaceship)


//Crie uma nova string e passe para ela caracter por caracter a nova frase