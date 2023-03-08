const doubleVelocity = (velocity) => {
    return velocity * 2
}
console.log("_______________________________________")
console.log("Retorno da arrow function")
console.log(doubleVelocity(60))

//---------------------------------------------
//     ATENÇÃO: CASOS MUUUUITO ESPECÍFICOS
//---------------------------------------------

console.log("_______________________________________")

// ARROW FUNCTION's com apenas uma linha
// podem ser mais simplificadas ainda

const doubleVelocity2 = (velocity) => velocity * 2

console.log("Retorno da arrow function de uma linha")
console.log(doubleVelocity(60))
console.log("_______________________________________")

// ARROW FUNCTION's com apenas uma linha
// podem ser mais simplificadas ainda
// caso possua apenas um parametro
// podemos remover os parenteses

const doubleVelocity3 = velocity => velocity * 2

console.log("Retorno da arrow function sem parenteses")
console.log(doubleVelocity(60))
console.log("_______________________________________")