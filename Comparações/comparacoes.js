let spaceship = "Golias"
let velocity = 80

/*
    COMPARAÇÕES

    Não se engane, com apenas 1 sinal de igualdade
    você estará atribuindo valores, logo isso
    NÃO É UMA COMPARAÇÃO.

    Por conta da tipagem fraca do JS as comparações
    podem ou não envolver a tipagem da variavel/dado.

    __________________________________________________
    COMPARAÇÕES DE IGUALDADE

    comparação sem tipagem ==
    comparação com tipagem ===
    
    __________________________________________________
    COMPARAÇÕES DE DESIGUALDADE

    comparação sem tipagem !=
    comparação com tipagem !==

    __________________________________________________
    COMPARAÇÕES DE GRANDEZA

    maior que >
    menor que <
    maior que ou igual >=
    menor que ou igual <=
    __________________________________________________
*/

console.log("_________________________________________")
console.log("DADOS\nspaceship = 'Golias'\nVelocity = 80")
console.log("_________________________________________\n\n\n\n\n")

console.log("COMPARAÇÕES DE IGUALDADE\n\n\n")

console.log("_________________________________________")
console.log("Compara sem tipagem | numb")
console.log("velocity == 80")
console.log(velocity == 80)
console.log("_________________________________________\n\n\n")

console.log("_________________________________________")
console.log("Compara sem tipagem | string ''")
console.log("velocity == '80'")
console.log(velocity == "80")
console.log("_________________________________________\n\n\n")

console.log("_________________________________________")
console.log("Compara com tipagem | numb")
console.log("velocity === 80")
console.log(velocity === 80)
console.log("_________________________________________\n\n\n")

console.log("_________________________________________")
console.log("Compara com tipagem | string ''")
console.log("velocity === '80'")
console.log(velocity === "80")
console.log("_________________________________________\n\n\n\n\n")

console.log("COMPARAÇÕES DE DESIGUALDADE\n\n\n")

console.log("_________________________________________")
console.log("Compara sem tipagem | numb")
console.log("velocity != 80")
console.log(velocity != 80)
console.log("_________________________________________\n\n\n")

console.log("_________________________________________")
console.log("Compara sem tipagem | string ''")
console.log("velocity != '80'")
console.log(velocity != "80")
console.log("_________________________________________\n\n\n")

console.log("_________________________________________")
console.log("Compara com tipagem | numb")
console.log("velocity !== 80")
console.log(velocity !== 80)
console.log("_________________________________________\n\n\n")

console.log("_________________________________________")
console.log("Compara com tipagem | string ''")
console.log("velocity !== '80'")
console.log(velocity !== "80")
console.log("_________________________________________\n\n\n\n\n")

console.log("COMPARAÇÃO DE MAIOR E MENOR\n\n\n")

console.log("_________________________________________")
console.log("velocity > 85")
console.log(velocity > 85)
console.log("_________________________________________\n\n\n")

console.log("_________________________________________")
console.log("velocity < 85")
console.log(velocity < 85)
console.log("_________________________________________\n\n\n")

console.log("_________________________________________")
console.log("velocity >= 85")
console.log(velocity >= 85)
console.log("_________________________________________\n\n\n")

console.log("_________________________________________")
console.log("velocity <= 85")
console.log(velocity <= 85)
console.log("_________________________________________\n\n\n\n\n")

console.log("COMPARAÇÃO DE MAIOR E MENOR (COM STRINGS)\n\n\n")
console.log("Strings compara-se por ordem alfabética")

console.log("_________________________________________")
console.log("spaceship > 'BATATA'")
console.log(spaceship > "BATATA")
console.log("_________________________________________\n\n\n")

console.log("_________________________________________")
console.log("spaceship < 'BATATA'")
console.log(spaceship < "BATATA")
console.log("_________________________________________\n\n\n\n\n")

console.log("COMPARAÇÃO DE TAMANHO DE STRING\n\n\n")

console.log("_________________________________________")
console.log("spaceship.length > 'BATATAS'.length")
console.log(spaceship.length > "BATATAS".length)
console.log("_________________________________________\n\n\n")

console.log("_________________________________________")
console.log("spaceship.length < 'BATATAS'.length")
console.log(spaceship.length < "BATATAS".length)
console.log("_________________________________________\n\n\n")
