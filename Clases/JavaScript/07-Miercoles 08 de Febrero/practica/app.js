loteria = [];
numGan = [];
//------------------------------------------------------------------------------------------------
for (i = 0; i < 6; i++){
    loteria = Math.round(Math.random() * 48 + 1);
    existe = numGan.includes(loteria);
    if (existe === false) {
        numGan.push(loteria);
    } else {
        i--
    }
}
//---------------------------------------------------------------------------------------------------
loteriaUsuario = [];
numGanUsuario = [];
for (i = 0; i < 6; i++){
    loteriaUsuario = parseInt(prompt(" Indique el numero " + (i+1) + " de su combinación"))
    if (loteriaUsuario > 0 && loteriaUsuario < 50) {
        existeUsuario = numGanUsuario.includes(loteriaUsuario);
        if (existeUsuario === false) {
            numGanUsuario.push(loteriaUsuario);
        } else {
            prompt("El numero introducido está repetido, pulse enter para volver a introducir el numero " +(i+1)+ " de su combinación")
            i--;
        }
    } else {
        prompt("El numero introducido está fuera de rango (desde el 1 al 49).Presione enter para volver a introducir el número " +(i+1)+ " de su combinación");
        i--;
    }
}
console.log("El número de la loteria es "+numGan)
console.log("La combinación escogida es " + numGanUsuario)

aciertos = [];
contador = 0;

for (i = 0; i < 6; i++){
    for (j = 0; j < 6; j++){
        if (numGan[i] === numGanUsuario[j]) {
            contador++;
            aciertos.push(numGanUsuario[j]);
        }
    }
}

if (contador === 0) {
    console.log("Lo lamento no ha obtenido ningun acierto");
} else if (contador === 1) {
    console.log("Enorabuena, ha obtenido "+contador+" acierto. El número acertado es el " + aciertos)
}else{console.log("Felicidades, ha obtenido "+contador+ " aciertos, los números acertados son "+ aciertos)}
