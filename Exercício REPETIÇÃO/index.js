let spaceshipName = prompt("Digite o nome da nave")
let newSpaceshipName = ""

for(let i = (spaceshipName.length - 1); i >= 0; i--) {
    if(spaceshipName[i] == "e" || spaceshipName[i] == "E"){
        break
    }else{
        console.log(spaceshipName[i])
        newSpaceshipName += spaceshipName[i]
    }
}

alert(
        "Nome original da nave: " + spaceshipName +
        "\nNovo nome da nave: " + newSpaceshipName
)


//NÃO ESQUEÇA DE COMO FUNCIONA O ID DO CARACTERE
// B A T A T A
// 0 1 2 3 4 5
//BASICAMENTE ID = TAMANHO - 1