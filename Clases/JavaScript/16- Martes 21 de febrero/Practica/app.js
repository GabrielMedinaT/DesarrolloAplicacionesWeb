const tareas = [
  {
    hora: "01:00",
    tarea: "Planchar",
    prioridad: "urgente",
  },
  {
    hora: "08:00",
    tarea: "Desayuno",
    prioridad: "alta",
  },
  {
    hora: "08:30",
    tarea: "Revisar llamadas",
    prioridad: "alta",
  },
  {
    hora: "10:00",
    tarea: "Reunión con plantilla",
    prioridad: "media",
  },
  {
    hora: "12:00",
    tarea: "Llamar a Hacienda",
    prioridad: "baja",
  },
  {
    hora: "14:00",
    tarea: "Almuerzo",
    prioridad: "media",
  },
  {
    hora: "16:00",
    tarea: "Cita con abogado",
    prioridad: "media",
  },
  {
    hora: "18:00",
    tarea: "Café",
    prioridad: "alta",
  },
  {
    hora: "18:30",
    tarea: "Reunión proyecto ",
    prioridad: "alta",
  },
  {
    hora: "19:00",
    tarea: "Agenda de mañana",
    prioridad: "media",
  },
  {
    hora: "20:10",
    tarea: "Supermercado",
    prioridad: "media",
  },
];
//*EJERCICIO 1
console.log("EJERCICIO 1");
prioridadAlta = tareas.filter((valor) => {
  return valor.prioridad === "alta";
});
console.log(prioridadAlta);

//*EJERCICIO 2
console.log("EJERCICIO 2");
prioridadAlta2 = tareas.filter((valor) => {
  if (valor.prioridad === "alta") {
    return (valor.tipo = "trabajo");
  }
});
prioridadAlta3 = tareas.filter((valor2) => {
  if (valor2.prioridad != "alta") {
    return (valor2.tipo = "personal");
  }
});

const tareas2 = [...prioridadAlta2, ...prioridadAlta3];
console.log(tareas2);

tipo = tareas2.filter((tipos) => {
  return tipos.tipo === "personal";
});
console.log("Lista con las tareas de tipo personal");
console.log(tipo);
//*EJERCICIO 3
console.log("EJERCICIO 3");
compro = tareas.some((exista) => {
  return exista.prioridad === "baja";
});
if (compro === true) {
  muestra = tareas.filter(function (tipo) {
    return tipo.tipo === "personal";
  });
  console.log(muestra);
}
//*EJERCICIO 4
console.log("EJERCICIO 4");
reuniones = tareas.filter((tipo) => {
  if (tipo.tarea.includes("Reunión")) {
    return tipo.hora;
  }
});
console.log(reuniones);

reuniones.forEach((tipo) => {
  console.log("Tiene una " + tipo.tarea + " a las " + tipo.hora);
});

console.log("EJERCICIO 5");
tarea = "";
tareas.forEach((hora) => {
  if (hora.hora > "12:00") {
    tarea += hora.tarea.toString() + ". ";
    console.log("Tiene las siguiente tarea despues de las 12 " + hora.tarea);
  }
});
console.log("Tiene las siguientes tareas despues de las 12:00 " + tarea);
