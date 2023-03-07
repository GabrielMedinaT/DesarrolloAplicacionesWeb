//*MODIFICAR TITULO
const tituloCambiado = document.getElementById("misterio");
tituloCambiado.innerHTML = "Titulo nuevo";
//*CAMBIAR TIPO DE LETRA CON UN ESTILO DE CSS
const parrafo = document.querySelector("p");
parrafo.style.fontFamily = "Oxigen";
parrafo.style.fontWeight = 900;
//*CAMBIAR EL PRIMER LINK DE UNA LISTA DE ENLACES
const link = document.getElementsByTagName("a");
const arrayEnlace = Array.from(link);
arrayEnlace[0].href = "https://www.google.es";
const cambiarNombre = document.getElementsByClassName("lka");
cambiarNombre[0].innerHTML = "Google";

//*

const cambio = document.getElementById("nombrecillo");
cambio.remove();

const parr = document.createElement("p");
parr.innerHTML = "Nuevo parrafo, aqui puedo escribir todo lo que quiera";
parr.style.fontSize = "101px";
parr.style.color = "black";
parrafo.append(parr);
parr.style.visibility = "hidden";

const lista = document.createElement("ul");
const elemento1 = document.createElement("li");
const elemento2 = document.createElement("li");
const elemento3 = document.createElement("li");
const elemento4 = document.createElement("li");

lista.append(elemento1, elemento2, elemento3, elemento4);

const nave = document.getElementById("navegador");
cambiarNombre[0].append(lista);
cambiarNombre[0].style.color = "black";
cambiarNombre[0].style.fontSize = "32px";

elemento1.innerHTML = "Oro";
elemento2.innerHTML = "Plata";
elemento3.innerHTML = "Cobre";
elemento4.innerHTML = "Gofio";

lista.style.fontWeight = 900;
