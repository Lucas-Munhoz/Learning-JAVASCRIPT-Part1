let spaceship = {
//    ATRIBUTOS
    name: "Deméter",
    type: "Extração",
    maxCrew: 20,
//--------------------------------------

//       MÉTODOS
    turnOn: function() {
        alert("Preparando propulsão")
        alert("Ligando computador de bordo")
        console.log(this.name)//exemplo de this basico aqui
    }
//--------------------------------------
}

//--------------------------------------
//Adicionamos o atributo VELOCITY
spaceship.velocity = 0
//--------------------------------------

//--------------------------------------
//Usando o TurnOn só pelo meme
console.log("-----------------")
console.log("Usando o TurnOn só pelo meme:")
spaceship.turnOn()
console.log("-----------------")
//--------------------------------------

//--------------------------------------
//Adiconamos o método SPEEDUP

//FORMA MACARRÔNICA, OU SEJA, TODA EMBOLADA E TORTA
spaceship.speedUpMACARRAO = function(spaceshipToSpeedUp, acceleration){
    spaceshipToSpeedUp.velocity += acceleration
}

//FORMA BONITA, E DE ACORDO COM A CONVENÇÃO
spaceship.speedUp = function(acceleration){
    this.velocity += acceleration
}
/*
    O this é importante para que não precisemos chamar
    o próprio objeto como parâmetro para seus métodos
    então nós substituímos o parâmetro pela palavra
    THIS.
*/
//--------------------------------------



//--------------------------------------
//Usando o método

console.log("_____________________________________________________")
console.log("Antes do MÉTODO")
console.log(spaceship)

//Chamando a function tortassa:
//spaceship.speedUpMACARRAO(spaceship, 900)

//Chamando a function correta:
spaceship.speedUp(900)

console.log("_____________________________________________________")
console.log("Depois do MÉTODO")
console.log(spaceship)
//--------------------------------------