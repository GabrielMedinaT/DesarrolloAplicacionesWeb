const coleccionFotos = [
  {
    nombre: "Hot Roque Nublo",
    camara: "Canon",
    caracteristicas: ["ISO 200", "50mm", "1/125", "1.4"],
    fecha: "20/01/2019",
    lugar: "Gran Canaria",
  },
  {
    nombre: "Snowy Teide",
    camara: "Sony",
    caracteristicas: ["ISO 400", "11mm", "1/50", "8"],
    fecha: "21/01/2019",
    lugar: "Tenerife",
  },
  {
    nombre: "Beautiful Fataga",
    camara: "Nikon",
    caracteristicas: ["ISO 1000", "22mm", "1/250", "1.2"],
    fecha: "20/01/2019",
    lugar: "Gran Canaria",
  },
  {
    nombre: "Sunny El Cotillo",
    camara: "Olympus",
    caracteristicas: ["ISO 2000", "35mm", "1/2000", "3.5"],
    fecha: "22/01/2019",
    lugar: "Fuerteventura",
  },
  {
    nombre: "Marvellous Valle Gran Rey",
    camara: "Canon",
    caracteristicas: ["ISO 100", "22mm", "1/125", "2.8"],
    fecha: "23/01/2019",
    lugar: "La Gomera",
  },
];
console.log("Inicio");
for (i = 0; i < coleccionFotos.length; i++) {
  for (j = 0; j < coleccionFotos[i].caracteristicas.length; j++) {
    if (coleccionFotos[i].caracteristicas[j] == "ISO 100") {
      console.log(coleccionFotos[i]);
    }
  }
}

alert(
  "EJERCICIO 2 -Indique los datos que se le pediran para añadir nueva foto"
);
nombreFoto = prompt("Indique el nombre de la foto");
nombreCamara = prompt("Indique nombre de la cámara");
iso = prompt("Indique el ISO");
distanciaFocal = prompt("Indique la distancia focal");
obturacion = prompt("Indique la obtutación");
diafragma = prompt("Indique el diafragma");
fecha = prompt("Indique la fecha en formato dd/mm/aaaa");
nombreLugar = prompt("Diga el lugar de toma de la foto");

coleccionFotos.push({
  nombre: nombreFoto,
  camara: nombreCamara,
  caracteristicas: [{ iso, distanciaFocal, obturacion, diafragma }],
  fecha: fecha,
  lugar: nombreLugar,
});

alert("EJERCICIO 3");
nombreParaEliminar = prompt("indique el nombre de la foto para eliminar");
esta = 0;
for (i = 0; i < coleccionFotos.length; i++) {
  if (coleccionFotos[i].nombre === nombreParaEliminar) {
    coleccionFotos.splice(i, 1);
    esta = 1;
  }
}
if (esta === 0) {
  alert("El nombre indicado de la foto no existe");
}

console.log(coleccionFotos);
alert("EJERCICIO 4");
existe = 0;
nombreParaLocalizar = prompt("Diga el nombre para cambiar la fecha");
nuevaFecha = prompt("Indique la nueva fecha en formato dd/mm/aaaa");
for (i = 0; i < coleccionFotos.length; i++) {
  if (coleccionFotos[i].nombre === nombreParaLocalizar) {
    coleccionFotos[i].fecha = nuevaFecha;
    existe = 1;
  }
}

if (existe === 0) {
  alert("El nombre indicado de la foto no existe");
}
console.log(coleccionFotos);
