//VARIAVEIS
let velocity = 150

//FUNÇÕES
function slowdown(velocity, printer){
    if(velocity == 10){
        printer(velocity)
        velocity -= 10
    }
    printer(velocity)

    return velocity
}

let printer = (velocity) => {
    console.log("Velocidade atual: " + velocity + "km/s")
}

//CÓDIGO PRINCIPAL
for(velocity; velocity >= 0; velocity -=20) {
    slowdown(velocity, printer)
}
console.log("Nave parada!\nPermissão para abrir comportas: TRUE")