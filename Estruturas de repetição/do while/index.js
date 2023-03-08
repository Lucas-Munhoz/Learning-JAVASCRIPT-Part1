// LEMBRANDO QUE O DO WHILE SEMPRE EXECUTARÁ UMA VEZ PELO MENOS

let velocity = 50
let acceleration = 5

do {
    console.log("Acelerando: estamos a " + velocity + "km/s")
    velocity += acceleration
} while(velocity <=100)

console.log("=======================================================")

//EXEMPLO DA ANOTAÇÃO

let velocityB = 1000
let accelerationB = 5

do {
    console.log("Acelerando: estamos a " + velocityB + "km/s")
    velocityB += accelerationB
} while(velocityB <=100)

//Ele exibe o 1000 e depois para, pq so depois de executar o código
//Dentro do DO que ele vê o WHILE, assim verificando que 1000<=100