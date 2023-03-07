// Progama para comprobar el numero de veces que hay que jugar a con la misma combinacion
// y ganar, en este ejemplo son solo 3 numeros y desde el 1 al 10 para acortar el tiempo de ejecucion

//Declaracion de arrays
loteriaUsuario = [];
numGanUsuario = [];
//Bucle for para rellenar el boleto del usuario
for (i = 0; i < 6; i++) {
  loteriaUsuario = parseInt(
    prompt(" Indique el numero " + (i + 1) + " de su combinación")
  );
  if (loteriaUsuario > 0 && loteriaUsuario < 50) {
    existeUsuario = numGanUsuario.includes(loteriaUsuario);
    if (existeUsuario === false) {
      numGanUsuario.push(loteriaUsuario);
    } else {
      prompt(
        "El numero introducido está repetido, pulse enter para volver a introducir el numero " +
          (i + 1) +
          " de su combinación"
      );
      i--;
    }
  } else {
    prompt(
      "El numero introducido está fuera de rango (desde el 1 al 49).Presione enter para volver a introducir el número " +
        (i + 1) +
        " de su combinación"
    );
    i--;
  }
}

contador = 0; //Contador para numero de veces que son necesarias para coincidir el boleto del usuario con el generado aleatorio
do {
  // Arrays para generar la loteria automaricamente y un contador
  contador++;
  loteria = [];
  numGan = [];
  //------------------------------------------------------------------------------------------------
  for (i = 0; i < 6; i++) {
    loteria = Math.round(Math.random() * 48 + 1);
    existe = numGan.includes(loteria);
    if (existe === false) {
      numGan.push(loteria);
    } else {
      i--;
    }
  }
  //Se compara uno a uno si los numero del boleto generado coinciden con el del usuario
  primero = numGan.includes(numGanUsuario[0]);
  segundo = numGan.includes(numGanUsuario[1]);
  tercero = numGan.includes(numGanUsuario[2]);
  cuarto = numGan.includes(numGanUsuario[3]);
  quinto = numGan.includes(numGanUsuario[4]);
  sexto = numGan.includes(numGanUsuario[5]);

  //Si coinciden todos generara un ganador=true

  if (
    primero === true &&
    segundo === true &&
    tercero === true &&
    cuarto === true &&
    quinto === true &&
    sexto === true
  ) {
    ganador = true;
  } else {
    ganador = false; //Si no coinciden todos generara ganador FALSE
  }

  numGan.includes(numGanUsuario);
} while (ganador === false); //Seguirá en el bucle mientras ganador sea FALSE
console.log("Los numeros escogidos han sido " + numGanUsuario);
console.log("La loteria ha sido " + numGan);
console.log("El numero de intentos ha sido " + contador);
console.log(ganador);
