empleados = [
  (id = 1),
  "Pepe",
  (activo = true),
  (id = 2),
  "Manolo",
  (activo = true),
  (id = 3),
  "Ana",
  (activo = true),
];
console.log(empleados);

solicitud = parseInt(
  prompt("Ingrese un id de empleado para mostrar sus datos")
);

pos = empleados.indexOf(solicitud);
if (empleados.includes(solicitud)) {
  resultado = empleados.slice(pos, pos + 4);
  console.log("El empleado con el id " + solicitud + " es " + resultado);
} else {
  console.log("El id solicitado no existe ");
}

solicitud = parseInt(
  prompt("Ingrese un id de empleado para eliminar sus datos")
);
pos = empleados.indexOf(solicitud);
if (empleados.includes(solicitud)) {
  empleados.splice(pos, +3);
} else {
  console.log("El id a eliminar no existe ");
}

console.log(empleados);

solicitud = parseInt(
  prompt("Ingrese un id de empleado para activar o desactivar  su estado")
);
pos = empleados.indexOf(solicitud);
aux = pos + 2;
if (empleados.includes(solicitud)) {
  if (empleados[aux] === true) {
    empleados.splice(aux, 1, false);
  } else {
    empleados.splice(aux, 1, true);
  }
} else {
  console.log("El ID a activar o desactivar no existe");
}

console.log(empleados);

idNuevoEmpleado = parseInt(prompt("Indique el nuevo ID del nuevo empleado "));
if (empleados.includes(idNuevoEmpleado)) {
  console.log("El id del empleado existe");
} else {
  nombreNuevoEmpleado = prompt("Indique el nuevo nombre del nuevo empleado");
  Activacion = parseInt(
    prompt(
      "Indique si comenzará activado (Opcion 1) o comenzará desactivado (Opcion 2)"
    )
  );
  if (Activacion == 1) {
    Activacion = true;
  } else {
    Activacion = false;
  }
  empleados = [...empleados, idNuevoEmpleado, nombreNuevoEmpleado, Activacion];
  console.log(empleados);
}
