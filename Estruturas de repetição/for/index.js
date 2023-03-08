let spaceship = "Helmet"
let newSpaceship = ""

//Nesse caso newSpaceship passa a ter o conteudo de spaceship

for(let i = 0; i < spaceship.length; i++) {
    newSpaceship += spaceship[i]
}
console.log(newSpaceship)
console.log("_____________________________________________________")

//Nesse caso newSpaceship passa a ter o conteudo de spaceship
//MAS com a letra I no lugar de toda letra E

newSpaceship = "" //limpando a variável
for(let i = 0; i < spaceship.length; i++) {
    if(spaceship[i] == "e") {
        newSpaceship += "i"
    }else {
        newSpaceship += spaceship[i]
    }
}
console.log(newSpaceship)
console.log("_____________________________________________________")

