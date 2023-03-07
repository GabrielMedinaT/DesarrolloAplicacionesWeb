const llamadas = [
  {
    id: 1,
    nombre: "Camila Cabello",
    problema: "streaming",
    ciclo: ["recibido", "pasado a", "en proceso", "solucionado", "cerrado"],
    resuelto: true,
  },
  {
    id: 2,
    nombre: "Ariana Grande",
    problema: "velocidad",
    ciclo: ["recibido", "pasado a"],
    resuelto: false,
  },
  {
    id: 3,
    nombre: "Lola Flores",
    problema: "velocidad",
    ciclo: ["recibido", "pasado a", "en proceso", "solucionado"],
    resuelto: false,
  },
  {
    id: 4,
    nombre: "Estrellita Castro",
    problema: "desconexiones",
    ciclo: ["recibido"],
    resuelto: false,
  },
  {
    id: 5,
    nombre: "Adele",
    problema: "velocidad",
    ciclo: ["recibido"],
    resuelto: false,
  },
  {
    id: 6,
    nombre: "La Chicha del Callejón",
    problema: "desconexiones",
    ciclo: ["recibido", "pasado a", "en proceso", "solucionado", "cerrado"],
    resuelto: true,
  },
];
//*EJERCICIO 1
const listadeLlamadas = () => {
  setTimeout(() => {
    console.log("Enviando solicitud de datos");
  }, 500);
  setTimeout(() => {
    console.log("Creando conexión");
  }, 1000);
  setTimeout(() => {
    console.log("...");
  }, 1500);
  setTimeout(() => {
    console.log("Conexión exitosa");
  }, 2000);
  setTimeout(() => {
    return new Promise((resultado) => {
      for (i = 0; i < llamadas.length; i++) {
        if (llamadas[i].problema === "velocidad") {
        } else {
          console.log(
            "El cliente " + llamadas[i].nombre + " tiene problemas de velocidad"
          );
        }
      }
    });
  }, 3000);
};
function listar() {
  try {
    listadeLlamadas()
      .then((resultado) => console.log(resultado))
      .catch((error) => console.log(error));
  } catch (fallo) {
    console.log(fallo);
  }
}
const enumerar = async () => {
  try {
    const datos = await listadeLlamadas();
    return datos;
  } catch (error) {
    console.log(error);
  }
};
//*EJERCICIO 2
const verificarsolucionados = () => {
  return new Promise(() => {
    for (i = 0; i < llamadas.length; i++) {
      if (
        llamadas[i].ciclo.includes("solucionado") &&
        !llamadas[i].ciclo.includes("cerrado")
      ) {
        console.log("solucionado");
        llamadas[i].ciclo.push("cerrado");
        llamadas[i].resuelto = true;
        console.log(llamadas[i]);
      }
    }
  });
};
const verifica = async () => {
  try {
    const respuesta = await verificarsolucionados();
    console.log(respuesta);
  } catch {
    console.log(fallo);
  }
};
//*EJERCICIO 3

const agregar = () => {
  return new Promise(() => {
    if (nombre.length > 0) {
      console.log("Agregado correctamente");
      llamadas.push({
        id: llamadas.length - 1,
        problema: "streaming",
        nombre: nombre,
        ciclo: ["abierto"],
      });
      console.log(
        llamadas[llamadas.length - 1].nombre +
          " con el problema de " +
          llamadas[llamadas.length - 1].problema +
          " se ha añadido correctamente"
      );
    } else {
      console.log("No ha añadido ningun nombre");
    }
  });
};
const agrega = async () => {
  try {
    const respuesta = await agregar();
    console.log(respuesta);
  } catch {
    console.log(fallo);
  }
};

//*EJERCICIO 4
const eliminar = () => {
  return new Promise(() => {
    for (i = 0; i < llamadas.length; i++) {
      if (llamadas[i].id === numId) {
        console.log(llamadas);
      } else {
        llamadas.splice(numId - 1, 1);
        console.table(llamadas);
        console.log("Id numero " + numId + " eliminado");
        break;
      }
    }
  });
};
const elimina = async () => {
  try {
    const respuesta = await eliminar();
    console.log(respuesta);
  } catch {
    console.log("fallo");
  }
};
numId = 0;

nombre = "";
const btn = document.getElementById("primero"),
  btn2 = document.getElementById("segundo"),
  textnom = document.getElementById("nombre"),
  introId = document.getElementById("id");

btn.addEventListener("click", enumerar);

btn2.addEventListener("click", verifica);

textnom.addEventListener("keyup", function (enter) {
  if (enter.keyCode === 13) {
    nombre = textnom.value;
    agrega();
  }
});
introId.addEventListener("keyup", function (enter) {
  if (enter.keyCode === 13) {
    numId = numId.value;
    elimina();
  }
});
