cont = 0;
prompt("comenzar");
cont++;
numero = parseInt(prompt("Indique número entre el 0 y el 99999"));
contador = 0; //Contador para numero de veces que son necesarias para coincidir el boleto del usuario con el generado aleatorio
console.log(numero);
do {
  // Arrays para generar la loteria automaricamente y un contador
  contador++;
  //---------------------------------------------------------------------------------------------
  loteria = Math.round(Math.random() * 99999);
  //Se compara uno a uno si los numero del boleto generado coinciden con el del usuario
  //Si coinciden todos generara un ganador=true
  if (numero === loteria) {
    ganador = true;
  } else {
    ganador = false; //Si no coinciden todos generara ganador FALSE
  }
} while (ganador === false); //Seguirá en el bucle mientras ganador sea FALSE

coste = 30000;
euros = contador * 3;
dine = coste - euros;
relleno = "0";
console.log(
  "El numero escogido ha sido " +
    relleno.repeat(5 - numero.toString().length) +
    numero
);
// if (numero > 0 && numero < 10) {
//   console.log(`Los numeros escogidos han sido 0000` + numero);
//   console.log("La loteria ha sido 0000" + loteria);
// } else if (numero >= 10 && numero < 100) {
//   console.log(`Los numeros escogidos han sido 000` + numero);
//   console.log("La loteria ha sido 000" + loteria);
// } else if (numero >= 100 && numero < 1000) {
//   console.log(`Los numeros escogidos han sido 00` + numero);
//   console.log("La loteria ha sido 00" + loteria);
// } else if (numero >= 1000 && numero < 10000) {
//   console.log(`Los numeros escogidos han sido 0` + numero);
//   console.log("La loteria ha sido 0" + loteria);
// } else {
//   console.log(`Los numeros escogidos han sido ` + numero);
//   console.log("La loteria ha sido " + loteria);
// }

console.log(
  "El numero de intentos ha sido " +
    contador +
    " por lo que ha tenido que gastar " +
    euros +
    " Euros para ganar 30000€"
);

if (dine < 0) {
  console.log("Ha tenido una perdida de " + dine * -1 + " euros");
} else {
  console.log("Ha tenido una ganancia de " + dine + " euros");
}
console.log(ganador);

dias = contador * 7;
console.log("Los dias que ha tardado en que coincida su numero son " + dias);
console.log(
  "Los años que tardaría en que coincida su número con el de la loteria son " +
    Math.round(dias / 56)
);
