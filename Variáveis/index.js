//LET variável local padrão

//VAR variável local padrão, porem sempre lida no começo
//Não importa onde foi declarada, sempre será lida no começo DO LOCAL

//EXEMPLO MUITO BOM

function setSpaceshipDetails() {
    let velocity = 50
    if(velocity == 50) {
        velocity = 60
        var spaceshipName = "ELEMENTAL" //COMO SE FOSSE DECLARADA NO COMEÇO DA FUNÇÃO
        let spaceshipType = "Discovery" //MAS ESSA AQUI SÓ FUNCIONA DENTRO DO IF
    }                                   //POR ISSO QUE VAI DAR ESSE ERRO MUITO DOIDO AI

    console.log("___________________________")
    console.log("Declarada com LET no começo da function")
    console.log("velocity")
    console.log(velocity)
    console.log("___________________________")
    console.log("Declarada com VAR dentro do IF que está dentro da function")
    console.log("spaceshipName")
    console.log(spaceshipName)
    console.log("___________________________")
    console.log("Declarada com LET dentro do IF que está dentro da function")
    console.log("spaceshipType")
    console.log(spaceshipType)
    console.log("___________________________")
}

setSpaceshipDetails()