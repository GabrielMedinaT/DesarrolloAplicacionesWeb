const simon = document.querySelector(".simon");
const cuadro = document.querySelectorAll(".cuadro");
const iniciar = document.getElementById("inicio");
const puntos = document.querySelector("#puntos");
let sonido1 = new Audio("./primera.mp3");
let secuencia = [];
let secuenciadeJugador = [];
let puntuacion = 0;

// genera una secuencia random de colores la cual aumenta en 1 por vuelta
function generaSecuencia() {
  const colores = ["rojo", "verde", "amarillo", "azul"];
  for (let i = 0; i < 1; i++) {
    const aleatorio = Math.floor(Math.random() * 4);
    secuencia.push(colores[aleatorio]);
  }
}

// El jugador debe repetir la secuencia
function jugador() {
  let i = 0;
  const intervalId = setInterval(() => {
    const button = document.querySelector(`.${secuencia[i]}`);
    button.style.opacity = "0.5";
    setTimeout(() => {
      button.style.opacity = "1";
    }, 300);
    i++;
    if (i === secuencia.length) {
      clearInterval(intervalId); //para el intervalo cuando coinciden el numero de vueltas con la longitud de la secuencia
    }
  }, 600);
}

// comprueba si la secuencia del jugador es correcta
function comprobar() {
  for (let i = 0; i < secuenciadeJugador.length; i++) {
    if (secuenciadeJugador[i] !== secuencia[i]) {
      return false;
    }
  }
  return true;
}

// boton pulsado
function botonPulsado(event) {
  const button = event.target;
  button.style.opacity = "0.5";
  setTimeout(() => {
    button.style.opacity = "1";
  }, 300);
  secuenciadeJugador.push(button.classList[1]);
  if (secuenciadeJugador.length === secuencia.length) {
    const isMatch = comprobar();
    if (isMatch) {
      puntuacion++;
      puntos.textContent = puntuacion;
      secuenciadeJugador = [];
      generaSecuencia();
      setTimeout(() => {
        jugador();
      }, 1000);
    } else {
      alert(`Game over! Tu puntuacion es  ${puntuacion}.`);
      puntuacion = 0;
      puntos.textContent = puntuacion;
      secuencia = [];
      secuenciadeJugador = [];
      console.log(secuencia);
    }
  }
}

// se inicia el juego al pulsar el boton
iniciar.addEventListener("click", () => {
  generaSecuencia();
  jugador();
});

// evento para el boton de iniciar
cuadro.forEach((button) => {
  button.addEventListener("click", botonPulsado);
});
