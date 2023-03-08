let pilotName = prompt("Digite o nome do Piloto")
let velocity = 0
let nextVelocity = prompt("Digite a velocidade que dejesa")
let confirmation = confirm("A velocidade desejada é " + nextVelocity + "?")

if(confirmation == true){
    velocity = nextVelocity
}

if(velocity <= 0){
    alert("Nave está parada. Considere partir e aumentar a velocidade")
    console.log("Nave está parada. Considere partir e aumentar a velocidade")
} else if(velocity < 40){
    alert("Você está devagar, podemos aumentar mais")
    console.log("Você está devagar, podemos aumentar mais")
}else if(velocity >= 40 && velocity <80){
    alert("Parece uma boa velocidade para manter")
    console.log("Parece uma boa velocidade para manter")
}else if(velocity >= 80 && velocity < 100){
    alert("Velocidade alta. Considere diminuir")
    console.log("Velocidade alta. Considere diminuir")
} else if(velocity >= 100){
    alert("Velocidade perigosa. Controle automático forçado")
    console.log("Velocidade perigosa. Controle automático forçado")
}

console.log("Piloto: " + pilotName + "\nVelocidade atual: " + velocity)