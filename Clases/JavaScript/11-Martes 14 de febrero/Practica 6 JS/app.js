//*EJERCICIO 1
const datosEmpresas = [
  {
    nombre: "Yelmo",
    clasificacion: "Alto",
    carteras: "NIKKEI",
    inversion: 250000000,
    activo: true,
  },
  {
    nombre: "Cinesa",
    clasificacion: "Medio",
    carteras: "IBEX",
    inversion: -3000000,
    activo: false,
  },
  {
    nombre: "Kinepolis",
    clasificacion: "Alto",
    carteras: "NIKKEI",
    inversion: 1250000000,
    activo: true,
  },
  {
    nombre: "EXCIN",
    clasificacion: "Alto",
    carteras: "S&P",
    inversion: 150,
    activo: true,
  },
];
//*EJERCICIO 2
nuevaCartera = prompt(
  "Indique el cliente al que quiere cambiar la cartera Yelmo, Cinesa, Kinepolis, EXCIN"
);
carteraNueva = prompt("Indique la cartera NIKKEI , IBEX , S&P, NASDAQ");
for (i = 0; i < datosEmpresas.length; i++) {
  if (nuevaCartera.toLowerCase() === datosEmpresas[i].nombre.toLowerCase()) {
    datosEmpresas[i].carteras = carteraNueva;
  }
}
console.log(datosEmpresas);

//*EJERCICIO 3

clienteParaEliminar = prompt(
  "Indique el cliente al que quiere eliminar Yelmo, Cinesa, Kinepolis, EXCIN"
);
for (i = 0; i < datosEmpresas.length; i++) {
  if (
    clienteParaEliminar.toLowerCase() === datosEmpresas[i].nombre.toLowerCase()
  ) {
    datosEmpresas.splice(i, 1);
  }
}
console.log(datosEmpresas);

//*EJERCICIO 4
nuevaEmpresa = prompt("Indique nombre de la nueva empresa");
clasificacionNueva = prompt(
  "Indique una clasificacion entre VIP, alto, medio y bajo"
);
nuevaCarteraEmpresa = prompt("Indique la cartera de " + nuevaEmpresa);
inversionNuevaEmpresa = parseInt(
  prompt("Indique la inversion de " + nuevaEmpresa)
);
ActivonoActivo = prompt(
  "Indique si " + nuevaEmpresa + " esta activo o no con si o no"
);
if (ActivonoActivo === "si") {
  activoNuevaEmpresa = true;
} else {
  activoNuevaEmpresa = false;
}
datosEmpresas.push({
  nombre: nuevaEmpresa,
  clasificacion: clasificacionNueva,
  carteras: nuevaCarteraEmpresa,
  inversion: inversionNuevaEmpresa,
  activo: activoNuevaEmpresa,
});
console.log(datosEmpresas);

//*EJERCICIO 5

for (i = 0; i < datosEmpresas.length; i++) {
  if (datosEmpresas[i].inversion > 0) {
    console.log(datosEmpresas[i]);
  }
}
