let spaceshipName = "Supernova"

for(let i = 0; i < spaceshipName.length; i++) {
    if(spaceshipName[i] == "o"){
        break
    }
    console.log(spaceshipName[i])
}

//O código parou de ser executado quando entrou no IF
//Porque o if possui um BREAK, que serve exatamente
//Para parar a execução do código