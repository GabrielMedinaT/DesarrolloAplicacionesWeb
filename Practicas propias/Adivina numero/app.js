numeroUsuario = parseInt(prompt("Indiqueme un número"));

numeroAleatorio = Math.round(Math.random() * 100);
console.log(numeroAleatorio);
contador = 0;
do {
  contador++;
  console.log(numeroAleatorio);
  if (numeroAleatorio < numeroUsuario) {
    numeroUsuario = parseInt(
      prompt("El numero que ha puesto es mas grande, indique uno mas pequeño")
    );
  } else {
    numeroUsuario = parseInt(
      prompt("El numero que ha puesto es mas pequeño, indique uno mas grande")
    );
  }
} while (numeroAleatorio != numeroUsuario);

console.log(
  "Conseguido, el numero era el " +
    numeroAleatorio +
    " lo ha logrado en " +
    contador +
    " intentos"
);
