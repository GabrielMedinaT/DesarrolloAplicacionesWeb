//*EJERCICIO 1
const boton1 = document.querySelector("#boton");
boton1.style.backgroundColor = "red";
boton1.addEventListener("click", () => {
  if (boton1.innerHTML === "Susbscribirse") {
    boton1.innerHTML = "Suscribido";
    boton1.style.backgroundColor = "gray";
  } else {
    boton1.innerHTML = "Susbscribirse";
    boton1.style.backgroundColor = "red";
  }
});

//*EJERCICIO 2
const parr = document.querySelector("#campeones");

const parr2 = document.querySelector("#segunda");
parr2.style.visibility = "hidden";

parr.addEventListener("mouseenter", () => (parr2.style.visibility = "visible"));
parr.addEventListener("mouseout", () => (parr2.style.visibility = "hidden"));

//*EJERCICIO 3

const boton2 = document.querySelector("#boton2");
const cesta = document.querySelector("#lista");
const intro = document.querySelector("#cesta");
boton2.addEventListener("click", () => {
  list = document.createElement("li");
  cesta.append(list);
  list.innerHTML = intro.value;
  intro.value = "";
});
//*EJERCICIO 4
const seleccion = document.querySelector("#seleccion");
const caja = document.getElementById("caja1");
cambio = false;
caja.addEventListener("mouseenter", () => {
  if (cambio === false) {
    console.log(cambio);
    caja.style.backgroundColor = seleccion.value;
  }
});
caja.addEventListener("click", () => {
  cambio = true;
  console.log(cambio);
  caja.style.backgroundColor = seleccion.value;
});
caja.addEventListener("mouseleave", () => {
  if (cambio === false) {
    caja.style.backgroundColor = "grey";
  } else {
    caja.style.backgroundColor = seleccion.value;
  }
  console.log(cambio);
});

//*CAJA2
const caja2 = document.getElementById("caja2");
cambio2 = false;
caja2.addEventListener("mouseenter", () => {
  console.log("Entra en area 2");
  if (cambio2 === false) {
    caja2.style.backgroundColor = seleccion.value;
  }
});
caja2.addEventListener("click", () => {
  cambio2 = true;
  console.log(cambio + " " + cambio2);
  caja2.style.backgroundColor = seleccion.value;
});
caja2.addEventListener("mouseleave", () => {
  if (cambio2 === false) {
    caja2.style.backgroundColor = "grey";
  } else {
    caja2.style.backgroundColor = seleccion.value;
  }
});
//*CAJA3
const caja3 = document.getElementById("caja3");
cambio3 = false;
caja3.addEventListener("mouseenter", () => {
  caja3.style.backgroundColor = seleccion.value;
});
caja3.addEventListener("click", () => {
  cambio3 = true;
  caja3.style.backgroundColor = seleccion.value;
});
caja3.addEventListener("mouseleave", () => {
  if (cambio3 === false) {
    caja3.style.backgroundColor = "grey";
  } else {
    caja3.style.backgroundColor = seleccion.value;
  }
});
//*CAJA4
const caja4 = document.getElementById("caja4");
cambio4 = false;
caja4.addEventListener("mouseenter", () => {
  caja4.style.backgroundColor = seleccion.value;
});
caja4.addEventListener("click", () => {
  cambio4 = true;
  caja4.style.backgroundColor = seleccion.value;
});
caja4.addEventListener("mouseleave", () => {
  if (cambio4 === false) {
    caja4.style.backgroundColor = "grey";
  } else {
    caja4.style.backgroundColor = seleccion.value;
  }
});
//*CAJA 5
const caja5 = document.getElementById("caja5");
cambio5 = false;
caja5.addEventListener("mouseenter", () => {
  caja5.style.backgroundColor = seleccion.value;
});
caja5.addEventListener("click", () => {
  cambio5 = true;
  caja5.style.backgroundColor = seleccion.value;
});
caja5.addEventListener("mouseleave", () => {
  if (cambio5 === false) {
    caja5.style.backgroundColor = "grey";
  } else {
    caja5.style.backgroundColor = seleccion.value;
  }
});
//*CAJA6
const caja6 = document.getElementById("caja6");
cambio6 = false;
caja6.addEventListener("mouseenter", () => {
  caja6.style.backgroundColor = seleccion.value;
});
caja6.addEventListener("click", () => {
  cambio6 = true;
  caja6.style.backgroundColor = seleccion.value;
});
caja6.addEventListener("mouseleave", () => {
  if (cambio6 === false) {
    caja6.style.backgroundColor = "grey";
  } else {
    caja6.style.backgroundColor = seleccion.value;
  }
});

//*EJERCICIO 5

const names = document.getElementById("nombre");
const correo = document.getElementById("correo");
const pass = document.getElementById("contra");
const envia = document.getElementById("enviar");
const recib = document.getElementById("recogerDatos");

envia.addEventListener("click", () => {
  recib.innerHTML =
    "Nombre: " +
    names.value +
    " Correo: " +
    correo.value +
    " Contraseña: " +
    pass.value;
});
