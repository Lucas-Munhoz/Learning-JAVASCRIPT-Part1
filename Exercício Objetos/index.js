//Variáveis
let choiceOption
let acceleration

//Objetos
spaceship = {}

//Funções
function speedUp(acceleration, velocity){
    let newVelocity = Number(acceleration) + velocity
    return newVelocity
}

function registerSpaceship(){
    spaceship.name = prompt("Informe o nome da nave:")
    spaceship.type = prompt("Informe o tipo da nave")
    spaceship.maxSpeed = prompt("Informe a velocidade máxima da nave")
    spaceship.velocity = 0
}

function stopSpaceship(){
    alert(
        "Nome da nave: " + spaceship.name + 
        "\nTipo da nave: " + spaceship.type + 
        "\nUltima velocidade: " + spaceship.velocity + "km/s"
    )
    spaceship.velocity = 0
}

//parseInt é uma função usada para converter uma STRING em INTEIRO
//tambem existe a parseFloat, que no caso converte para float
//AE EXISTE UMA FUNÇÃO MELHOR AINDA, CHAMA Number()


//Código

registerSpaceship()

do{
    choiceOption = prompt("Escolha uma das opções a baixo:\n1 - Acelerar\n2 - Parar")

    switch(choiceOption) {
        case "1":
            acceleration = prompt("Digite o quanto deseja acelerar:")
            spaceship.velocity = speedUp(acceleration, spaceship.velocity)
            //debugação da spaceship.velocity
            console.log(spaceship.velocity)
            
            if(spaceship.velocity > spaceship.maxSpeed){
                alert("VELOCIDADE MÁXIMA ULTRAPASSADA!!!")
            }
            break
        case "2":
            break
        default:
            alert("Opção inválida")
    }
} while(choiceOption != "2")

stopSpaceship()