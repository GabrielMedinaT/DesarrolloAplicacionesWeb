muestra = document.title;

const titulo = document.getElementById("titulo");
console.log(titulo.innerText);
titulo.innerHTML = "Adios";

//*ACCESO MEDIANTE ETIQUETAS

link = document.getElementsByTagName("a");
console.log(link);
titulo.style.color = "blue";
titulo.style.backgroundColor = "black";

//*ACCESO MEDIANTE CLASS

const enlaces = document.getElementsByClassName("lista");
console.log(enlaces);

listaEnlaces = Array.from(enlaces);
console.table([listaEnlaces]);

//*POR CSS

porElemento = document.querySelector("h1");
console.log(porElemento);

porClases = document.querySelectorAll("li");
console.log(porClases);

const h1 = document.querySelector("h3");
console.log(h1.getAttribute("class"));
h1.setAttribute("class", "fondo");

console.log(h1.classList);
h1.classList.remove("fondo");
console.log(h1.classList);
