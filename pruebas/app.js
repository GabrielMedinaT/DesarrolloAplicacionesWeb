//*Maneras de saber la longitud de un entero
//*Modo 1
// numero = "0";
// introducir = parseInt(prompt("introduzca un numero"));
// console.log(
//   "El numero es " +
//     numero.repeat(5 - (Math.log10(Math.abs(introducir)) + 1)) +
//     introducir
// );

//*MODO 2
// console.log(
//   "El numero es " + numero.repeat(5 - introducir.length) + introducir
// );

//*PARA GUARDAR

// cantidad = Math.floor(Math.log10(Math.abs(introducir)) + 1);
// console.log(cantidad);

// const lengthInt = function (introducir) {
//   cantidad = Math.floor(Math.log10(Math.abs(introducir)) + 1);
//   return cantidad;
// };

// dime = parseInt(prompt("otro numero"));
// console.log(lengthInt(dime));

// a = parseInt(prompt("Dime numero"));
// i = 0;
// count = 0;
// while (a > 10 ** [i]) {
//   i++;
//   count = [i];
// }
// console.log("tiene " + count + " cifras");

const personal2 = [
  {
    id: 101,
    nombre: "Santiago Goñi",
    puesto: "Programador Junior",
    salario: 12000,
    status: "Para despido",
    activo: true,
    proyectos: ["Fooofle Pixtel"],
  },
  {
    id: 102,
    nombre: "Caridad Navarrete",
    puesto: "Programadora Junior",
    salario: 12000,
    status: "Prueba",
    activo: true,
    proyectos: ["Editor de texto"],
  },
  {
    id: 103,
    nombre: "Isabel Almedia",
    puesto: "Programadora Senior",
    salario: 120000,
    status: "Óptimo",
    activo: true,
    proyectos: ["Fooofle Pixtel", "Gestión VA"],
  },
  {
    id: 104,
    nombre: "Cara Lana",
    puesto: "Gestora de Proyectos",
    salario: 360000,
    status: "Óptimo",
    activo: true,
    proyectos: ["Fooofle Pixtel", "Gestión VA", "R3D3", "Backend SpaceY"],
  },
  {
    id: 105,
    nombre: "Alberto Serrano",
    puesto: "Especialista Front-End",
    salario: 240000,
    status: "Superior",
    activo: true,
    proyectos: ["Fooofle Pixtel", "Gestión VA", "R3D3"],
  },
  {
    id: 106,
    nombre: "Simón Escrivá",
    puesto: "Director Ejecutivo",
    salario: 400000,
    status: "Pobre",
    activo: true,
    proyectos: ["Fooofle Pixtel", "Gestión VA", "R3D3", "Backend SpaceY"],
  },
];

const nuevosEmpleados = [...personal2];
console.table([nuevosEmpleados]);

const nuevalista = nuevosEmpleados.filter((estado) => {
  if (estado.activo === true) {
    estado.activo = false;
  }
  return estado;
});
console.table([nuevalista]);
