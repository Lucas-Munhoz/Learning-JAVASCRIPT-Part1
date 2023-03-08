//VARIÁVEIS
let spaceship = ""
let velocity = 0
let opt

//FUNÇÕES
function speedUp(velocity, unit = "km/s") {
    velocity = velocity + 5
    alert("Nova velocidade = " + velocity + unit)
    return velocity
}

function speedDown(velocity, unit = "km/s") {
    if(velocity > 0){
        velocity = velocity - 5
    }
    alert("Nova velocidade = " + velocity + unit)
    return velocity
}

function showBoardData(spaceship, velocity, unit = "km/s"){
    alert("Nome da nave: " + spaceship + "\nVelocidade: " + velocity + unit)
}

//OBTENDO O NOME DA NAVE
spaceship = prompt("Digite o nome da nave")

//MENU
do{
    if(opt < 1 || opt > 4){
        alert("Opção inválida")
    }
    opt = prompt("Escolha uma das opções\n 1- Acelerar a nave em 5km/s\n 2- Desacelerar em 5km/s\n 3 - Imprimir dados de bordo\n 4- SAIR")
    switch(opt){
        case "1":
            velocity = speedUp(velocity)
            break
        case "2":
            velocity = speedDown(velocity)
            break
        case "3":
            showBoardData(spaceship, velocity)
            break
        default:
            opt = 4
    }
}while(opt != 4)