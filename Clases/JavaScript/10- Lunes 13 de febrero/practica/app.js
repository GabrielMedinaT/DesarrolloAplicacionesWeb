//*EJERCICIO 1
personas = [
  "Maria",
  1250,
  "Juan",
  3000,
  "Ana",
  1400,
  "Manolo",
  2500,
  "Juana",
  4000,
  "Gabriel",
  5600,
  "Fran",
  100,
];
emp1 = personas.indexOf("Maria");

const empleados = [];

contador = emp1;
for (i = 0; i < personas.length / 2; i++) {
  empleados.push({
    nombre: personas.slice(contador, contador + 1).toString(),
    sueldo: parseInt(personas.slice(contador + 1, contador + 2)),
    necesidades: personas.slice(contador + 1, contador + 2) * 0.5,
    caprichos: personas.slice(contador + 1, contador + 2) * 0.3,
    ahorro: personas.slice(contador + 1, contador + 2) * 0.2,
  });
  contador = contador + 2;
  console.log(empleados[i]);
}

//*EJERCICIO 2

nombres = ["Stephany", "Nayet", "Akane", "Nishme", "Gabriel"];
ocupaciones = [
  "Dependienta",
  "Diseño gráfico",
  "Ingeniera",
  "Artista",
  "Ingeniero",
];
const nombreOcupacion = [];
if (nombres.length === ocupaciones.length) {
  const nombreOcupacion = [];
  for (i = 0; i < nombres.length; i++) {
    nombreOcupacion.push({
      nombre: nombres[i],
      ocupacion: ocupaciones[i],
    });
    console.log(nombreOcupacion[i]);
  }
} else if (nombres.length > ocupaciones.length) {
  nuevaOcupacion = prompt(
    "Añada una ocupacion para el nombre " + nombres[nombres.length - 1]
  );
  ocupaciones.push(nuevaOcupacion);
  for (i = 0; i < nombres.length; i++) {
    nombreOcupacion.push({
      nombre: nombres[i],
      ocupacion: ocupaciones[i],
    });
    console.log(nombreOcupacion[i]);
  }
} else if (nombres.length < ocupaciones.length) {
  console.log(ocupaciones.length);
  nuevoNombre = prompt(
    "Añada un nombre para la ocupacion  " + ocupaciones[ocupaciones.length - 1]
  );
  nombres.push(nuevoNombre);
  for (i = 0; i < ocupaciones.length; i++) {
    nombreOcupacion.push({
      nombre: nombres[i],
      ocupacion: ocupaciones[i],
    });
    console.log(nombreOcupacion[i]);
  }
}

//*EJERCICIO 3

const usuario = [
  {
    id: 001,
    nombre: "Pepe",
    subscripcion: "Básica",
    credito: 150,
    activo: true,
  },
  {
    id: 002,
    nombre: "Maria",
    subscripcion: "premium",
    credito: 0,
    activo: false,
  },
  {
    id: 003,
    nombre: "Juana",
    subscripcion: "plus",
    credito: 250,
    activo: true,
  },
  {
    id: 004,
    nombre: "Luis",
    subscripcion: "Básica",
    credito: 50,
    activo: true,
  },
];

//*USUARIO ELIGE OPCION
opcion = parseInt(
  prompt(
    "Elija la opcion: 1-Mostrar usuario    2-Cambiar suscripcion y credito de usuario    3-Eliminar usuario    4-Desactivar usuario    5-Crear usuario"
  )
);
//*OPCION 1 MOSTRAR USUARIO
if (opcion === 1) {
  idOpcionParte1 = parseInt(
    prompt("Seleccione entre el 1 y el " + usuario.length + " un usuario")
  );
  if (idOpcionParte1 <= usuario.length) {
    console.log(usuario[idOpcionParte1 - 1]);
  } else {
    console.log("El id seleccionado no se encuentra");
  }
  //*OPCION 2 CAMBIAR SUSCRIPCION Y CREDITO
} else if (opcion === 2) {
  idOpcion = parseInt(
    prompt("Seleccione entre el 1 y el " + usuario.length + " un usuario")
  );
  if (idOpcion <= usuario.length) {
    subsUsuario = prompt(
      "Indique el tipo de suscripcion a la que quiere cambiar "
    );
    creditoUsuario = parseInt(prompt("Indique el nuevo credito"));
    usuario[idOpcion - 1].subscripcion = subsUsuario;
    usuario[idOpcion - 1].credito = creditoUsuario;
  } else {
    console.log("El id seleccionado no se encuentra");
  }
  console.log(usuario[idOpcion - 1]);

  //*OPCION 3 ELIMINAR USUARIO
} else if (opcion === 3) {
  idOpcionBorrar = parseInt(
    prompt("Seleccione entre el 1 y el " + usuario.length + " un usuario")
  );
  if (idOpcionBorrar <= usuario.length) {
    delete usuario[idOpcionBorrar - 1];
  } else {
    console.log("El id seleccionado no se encuentra");
  }
  console.log(usuario);

  //*OPCION 4 DESACTIVAR USUARIO
} else if (opcion === 4) {
  usuarioParaCambiar = parseInt(
    prompt("Seleccione entre el 1 y el " + usuario.length + " un usuario")
  );
  if (usuarioParaCambiar <= usuario.length) {
    idDesactivar = parseInt(
      prompt("Seleccione 1 para activar o 2 para desactivar ")
    );
    if (idDesactivar > 0 && idDesactivar < 3) {
      if (idDesactivar === 1) {
        usuario[usuarioParaCambiar - 1].activo = true;
      } else {
        usuario[usuarioParaCambiar - 1].activo = false;
      }
    } else {
      prompt("La opcion elegida no es correcta, era 1 o 2 ");
    }
  } else {
    ("El usuario elegido no es correcto");
  }
  console.log(usuario[usuarioParaCambiar - 1]);

  //*OPCION 5 CREAR NUEVO USUARIO
} else if (opcion === 5) {
  nuevoId = parseInt(
    prompt("Indique el nuevo id, siendo superior a " + usuario.length)
  );
  nuevoNombre = prompt("Indique nombre del usuario");
  nuevaSuscripcion = prompt("Indique suscripcion entre Básica, Plus o Premium");
  nuevoCredito = parseInt(prompt("Indique el credito"));
  nuevaActivacion = parseInt(
    prompt("Indique 1 para activado o 2 para desactivado")
  );
  if (nuevaActivacion === 1) {
    activacionNuevoUsuario = true;
  } else {
    activacionNuevoUsuario = false;
  }
  if (nuevoId >= usuario.length) {
    usuario.push({
      id: nuevoId,
      nombre: nuevoNombre,
      subscripcion: nuevaSuscripcion,
      credito: nuevoCredito,
      activo: activacionNuevoUsuario,
    });
    console.log(usuario[usuario.length - 1]);
  } else {
    ("El id introducido ya existe en la base de datos ");
  }
}
