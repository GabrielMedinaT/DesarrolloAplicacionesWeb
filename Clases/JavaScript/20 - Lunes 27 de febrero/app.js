//*EVENTOS EN EL DOM

//*RESPUESTA A UN CLICK DE USUARIO

//*CREADO EN JAVASCRIPT
const btn = document.querySelector("#boton2");
btn.onclick = function () {
  alert("Ha pulsado el boton dos");
};

//*AÑADIENDO EL METODO GENERAL addEventListener
//*SE LE PASAN DOS ARGUMENTOS:
//* 1 : EL EVENTO EN SI
//* CALLBACK FUCTON QUE EJECUTARA EL CÓDIGO
const caja2 = document.querySelector("#caja2");
const btn2 = document.querySelector("#boton3");

btn2.addEventListener("click", () => alert("Boton 3"));
const nombre = document.querySelector("#nombre");
nombre.addEventListener("keydown", () => console.log("Tecla pulsada"));

nombre.addEventListener("keydown", (event) => {
  if (event.key === "a") {
    console.log("Tecla a pulsada");
  } else {
    console.log("Otra tecla que no es la a pulsada");
  }
});
nombre.addEventListener("blur", () => console.log("Has salido de la caja"));
nombre.addEventListener("copy", () => console.log("Copiado"));
nombre.addEventListener("paste", () => console.log("Pegado"));
nombre.addEventListener("cut", () => console.log("Has cortado "));

const caja1 = document.querySelector("#caja1");
caja1.addEventListener(
  "mouseenter",
  () => (caja1.style.backgroundColor = "blue")
);
caja1.addEventListener(
  "mouseout",
  () => (caja1.style.backgroundColor = "green")
);
caja2.addEventListener(
  "mouseenter",
  () => (caja2.style.backgroundColor = "blue")
);
caja2.addEventListener("mouseenter", () => (caja2.style.fontSize = "32px"));
caja2.addEventListener("mouseout", () => (caja2.style.backgroundColor = "red"));
caja2.addEventListener("mouseout", () => (caja2.style.fontSize = "16px"));
caja2.addEventListener(
  "mouseenter",
  () => (caja2.style.transformscale = "1.5")
);
