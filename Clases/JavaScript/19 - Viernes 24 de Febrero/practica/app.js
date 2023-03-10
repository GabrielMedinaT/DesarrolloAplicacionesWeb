const aviones = [
  {
    id: "A-0121",
    modelo: "A-350",
    version: "900",
    clientes: ["Iberia", "Qatar Airways", "Delta Airlines"],
    fase: "prueba de vuelo",
    matricula: "F-WFAB",
    precio: 300000000,
  },
  {
    id: "A-0122",
    modelo: "A-350",
    version: "1000",
    clientes: ["Iberia", "United", "American"],
    fase: "entrega",
    matricula: "F-WXCD",
    precio: 370000000,
  },
  {
    id: "A-0123",
    modelo: "A-321",
    version: "neo",
    clientes: ["Iberia", "Air France", "British Airways", "Lufthansa"],
    fase: "entrega",
    matricula: "F-WXAC",
    precio: 280000000,
  },
  {
    id: "A-0124",
    modelo: "A321",
    version: "ceo",
    clientes: ["Iberia", "Lufthansa"],
    fase: "prueba de vuelo",
    matricula: "F-WCCB",
    precio: 250000000,
  },
  {
    id: "A-0125",
    modelo: "A220",
    version: "100",
    clientes: ["Air France", "American"],
    fase: "montaje",
    matricula: "F-WFAW",
    precio: 190000000,
  },
  {
    id: "A-0126",
    modelo: "A330",
    version: "300",
    clientes: ["Iberia", "American", "Delta", "Etihad"],
    fase: "montaje",
    matricula: "F-EWED",
    precio: 317000000,
  },
];
//*EJERCICIO 1
console.log("EJERCICIO 1");
quatar = aviones.filter((qBuscar) => {
  if (qBuscar.clientes.includes("Qatar Airways")) {
    return qBuscar;
  }
});
console.log(
  "El pedido de Qatar Airways es un  " +
    aviones[0].modelo +
    " version " +
    aviones[0].version +
    " con un id " +
    aviones[0].id +
    " con un precio de " +
    aviones[0].precio +
    "€ " +
    "una matricula " +
    aviones[0].matricula +
    " y una fase " +
    aviones[0].fase
);
//*EJERCICIO 2
console.log("EJERCICIO 2");
modA330 = aviones.some((modelo) => {
  if (modelo.modelo === "A330" && modelo.fase === "montaje") {
    //compruebo si existe la condicion
    return modelo;
  }
});
if (modA330 === true) {
  //Si existe
  const modA330Montaje = aviones.filter((montaje) => {
    //Filtro por las condiciones que hay en el if
    if (montaje.version === "300" && montaje.fase === "montaje") {
      return montaje;
    }
  });
  if (modA330Montaje.length < 2) {
    //Si la lista resultante es menos de dos entra aqui
    console.log(
      "Solo existe un " +
        modA330Montaje[0].modelo +
        "en fase de " +
        modA330Montaje[0].fase +
        " del cual dependenden  " +
        modA330Montaje[0].clientes.length +
        "  clientes que son " +
        modA330Montaje[0].clientes[0] +
        ", " +
        modA330Montaje[0].clientes[1] +
        " ," +
        modA330Montaje[0].clientes[2] +
        "y " +
        modA330Montaje[0].clientes[3] +
        " .Llamar a los clientes cuando pase a fase de vuelo "
    );
  } else {
    //De lo contrario , se mayor o igual que dos, entra aqui
    console.log("Los aviones en fase de montaje son  ");
    for (i = 0; i < modA330Montaje.length; i++) {
      console.log(modA330Montaje[i]);
    }
    console.log(" Esos aviones son de los clientes ");
    for (i = 0; i < modA330Montaje.length; i++) {
      console.log(modA330Montaje[i].clientes + ", ");
    }
    console.log("Y las siguientes matrículas ");
    for (i = 0; i < modA330Montaje.length; i++) {
      console.log(modA330Montaje[i].matricula + ", ");
    }
  }
} else {
  //En caso de no existir A330 en fase de montaje
  console.log("No hay A330 en fáse de montaje");
}

//*EJERCICIO 3
console.log("EJERCICIO 3");
modA350 = aviones.some((modeloLuft) => {
  if (modeloLuft.modelo === "A350" && modeloLuft.fase === "montaje") {
    //compruebo si existe la condicion de haber un A350 en montaje
    return modeloLuft;
  }
});

if (modA350 === false) {
  //De no existir, crea un nuevo objeto con los datos para un A350 en montaje
  aviones.push({
    id: "A-0126",
    modelo: "A350",
    version: "900",
    clientes: ["Lufthansa"],
    fase: "montaje",
    matricula: "EC-WAF",
    precio: 300000000,
  });
  console.log(
    "Se ha añadido un " +
      aviones[aviones.length - 1].modelo +
      " para el cliente " +
      aviones[aviones.length - 1].clientes[0] +
      " .Comienza la fase de " +
      aviones[aviones.length - 1].fase +
      " con un precio de " +
      aviones[aviones.length - 1].precio
  );
} else {
  //En el caso que si exista añade el cliente a la lista de clientes en el A350 en montaje
  console.log("Ya existe un A350 en fase de montaje , se añade el cliente ");
  modA350Par = aviones.filter((busqueda) => {
    return busqueda.modelo === "A350" && busqueda.fase === "montaje";
  });
  modA350Par.clientes.push(" Lufthansa");
}
//*EJERCICIO 4
console.log("EJERCICIO 4");

matriculaFrancesa = aviones.every((matricula) => {
  return matricula.matricula.slice(0, 1) === "F";
});
if (matriculaFrancesa === true) {
  alert("Todos los aviones tienen matricula francesa");
  console.log(alert("Todos los aviones tienen matricula francesa"));
} else {
  alert("No todos los aviones tienen matricula francesa");
  console.log("No todos los aviones tienen matricula francesa");
}
//*EJERCICIO 5
console.log("EJERCICIO 5");

const buscaId = aviones.filter((busqId) => busqId.id === "A-0125");
long = buscaId[0].precio.toString().length;
console.log(
  "ID: " +
    buscaId[0].id +
    " Modelo" +
    buscaId[0].modelo +
    " Version: " +
    buscaId[0].version +
    " Clientes " +
    buscaId[0].clientes[0] +
    ", " +
    buscaId[0].clientes[1] +
    " En fase de " +
    buscaId[0].fase +
    " Con matrícula " +
    buscaId[0].matricula +
    " Y un precio de " +
    buscaId[0].precio.toString().slice(0, 3) +
    "." +
    buscaId[0].precio.toString().slice(3, 6) +
    "." +
    buscaId[0].precio.toString().slice(6, 9) +
    " Euros"
);
//*EJERCICIO 6
console.log("EJERCICIO 6");
IberiaGastoTotal = 0;
const iberiaGasto = aviones.filter((gasto) => {
  //   return gasto.clientes.includes("Iberia");
  if (gasto.clientes.includes("Iberia")) {
    IberiaGastoTotal += gasto.precio;
  }
});
console.log(iberiaGasto);
console.log(
  "El gasto total de Iberia ha sido de " + IberiaGastoTotal + " Euros"
);
