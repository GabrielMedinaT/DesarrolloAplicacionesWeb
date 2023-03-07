const personal = [
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
console.log(personal);
//*EJERCICIO 1
console.log("EJERCICIO 1");

prueba = personal.filter((prueba) => {
  return prueba.status === "Prueba";
});
console.log(prueba);
//*EJERCICIO 2
console.log("EJERCICIO 2");
cambio = personal.filter((cambios) => {
  if (cambios.id === 102) {
    cambios.status = "Revisión";
  }
  return cambios;
});
console.log(cambio);
//*EJERCICIO 3
console.log("EJERCICIO 3");

salario = personal.filter((sueldo) => {
  if (sueldo.salario === 12000) {
    return sueldo;
  }
});
console.log(salario);
//*EJERCICIO 4
console.log("EJERCICIO 4");

for (let sueldo of personal) {
  if (
    sueldo.puesto === "Programador Junior" ||
    sueldo.puesto === "Programadora Junior"
  ) {
    sueldo.salario = sueldo.salario + 2000;
  }
}
console.log(personal);

//*EJERCICIO 5
console.log("EJERCICIO 5");
compruebaActivo = personal.every((estado) => {
  estado.activo === true;
  return estado;
});
if (compruebaActivo === true) {
  console.log("Todos los empleados están activo");
}
copiaPersonal = personal;

bajaAlDeprimido = copiaPersonal.filter((baja) => {
  if (baja.puesto === "Director Ejecutivo") {
    baja.activo = false;
    numero = baja.id;
    console.log(baja);
  }
  return baja;
});
console.log(personal);

//*EJERCICIO 6
console.log("EJERCICIO 6");
console.log("EJERCICIO 6-1");
proyectoFooter = personal.filter((busqueda) => {
  if (busqueda.proyectos.includes("Fooofle Pixtel")) {
    return busqueda;
  }
});
console.log(proyectoFooter);
console.log("EJERCICIO 6-2");
empleJuySe = personal.filter((empleadillos) => {
  if (empleadillos.puesto.includes("Programador")) {
    empleadillos.proyectos.push("Working Title");
  }
  if (empleadillos.nombre === "Santiago Goñi") {
    empleadillos.proyectos.splice(0, empleadillos.proyectos.length);
  }
  return empleadillos;
});
console.log(empleJuySe);

//*EJERCICIO 7
console.log("EJERCICIO 7");
copiaEmpleados = new Array();
console.log(copiaEmpleados);
copiaEmpleados = [...personal2];
desactivar = copiaEmpleados.map((desca) => {
  if (desca.activo === true) {
    desca.activo = false;
  }
  return desca;
});
console.table(desactivar);
