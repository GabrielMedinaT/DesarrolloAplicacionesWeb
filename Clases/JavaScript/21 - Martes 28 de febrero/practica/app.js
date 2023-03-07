const geoloc = [
  {
    lugar: "Tokyo",
    posicion: [35.6828387, 139.7594549],
  },
  {
    lugar: "Berlín",
    posicion: [52.5170365, 13.3888599],
  },
  {
    lugar: "Praga",
    posicion: [50.0874654, 14.4212535],
  },
  {
    lugar: "Las Palmas de Gran Canaria",
    posicion: [28.12584114074707, -15.434992790222168],
  },
  {
    lugar: "Viena",
    posicion: [48.239460835879946, 16.276373828906145],
  },
];
const verLista = () => {
  for (let loc of geoloc) {
    setTimeout(() => {
      lat = "";
      long = "";
      if (loc.posicion[0] > 0) {
        lat = "Norte";
      } else {
        lat = "Sur";
      }
      if (loc.posicion[1] > 0) {
        long = "Este";
      } else {
        long = "Oeste";
      }
      console.log(
        "Ciudad " +
          loc.lugar +
          " con coordenadas " +
          loc.posicion[0] +
          " " +
          lat +
          " " +
          loc.posicion[1] +
          " " +
          long
      );
    }, 2000);
  }
};
const ejer1 = document.querySelector("#bot1");
ejer1.addEventListener("click", () => {
  verLista();
});
//*EJERCICIO 2
const adjCiudad = () => {
  nueva = geoloc.push({
    lugar: "Bruselas",
    posicion: [50.84828677289808, 4.351149733536177],
  });
  setTimeout(() => {
    verLista();
    console.log(`La nueva ciudad añadida es ${geoloc[nueva - 1].lugar}`);
  }, 3000);
};
const ejer2 = document.querySelector("#bot2");
ejer2.addEventListener("click", () => {
  adjCiudad();
});
//*EJERCICIO 3 (EJERCICIO 1)
const mostrarLista = () => {
  return new Promise((reject) => {
    let fallo = false;
    setTimeout(() => {
      if (fallo) {
        reject("No se puede acceder a los datos Ejercicio 3");
      } else {
        setTimeout(() => {
          verLista();
        }, 2000);
      }
    }, 3000);
  });
};
const ejer3 = document.querySelector("#bot3-1");
ejer3.addEventListener("click", () => {
  mostrarLista().then(
    (lista) => {
      console.log(lista);
    },
    (fallo) => {
      console.log(fallo);
    }
  );
});
//*EJERCICIO 3 (EJERCICIO 2)
const crearEnLista = () => {
  return new Promise((reject) => {
    let error = false;
    setTimeout(() => {
      if (error) {
        reject("No se han podido obtener los datos Ejercicio 3-2");
      } else {
        nueva = geoloc.push({
          lugar: "Mordor",
          posicion: [43, 16.276373828906145],
        });
        setTimeout(() => {
          verLista();
          console.log("La nueva ciudad añadida es " + geoloc[nueva - 1].lugar);
        }, 3000);
      }
    }, 4000);
  });
};
const ejer3_2 = document.querySelector("#bot3-2");
ejer3_2.addEventListener("click", () => {
  crearEnLista().then(
    (lista) => {
      console.log(lista);
    },
    (error) => {
      console.log(error);
    }
  );
});

// //*EJERCICIO 4

const adjuntarALista = () => {
  fall = 0;
  ciudad = prompt("Indique ciudad a eliminar");
  for (i = 0; i < geoloc.length; i++) {
    if (ciudad.toLowerCase() === geoloc[i].lugar.toLowerCase()) {
      num = i;
      fall += 1;
    } else {
      fall += 0;
    }
  }
  return new Promise((reject) => {
    if (fall === 0) {
      reject("No se ha podido eliminar de la lista");
    } else {
      geoloc[num].posicion.splice(0, 2);
      verLista();
    }
  });
};
const ejer4 = document.querySelector("#bot4");
ejer4.addEventListener("click", () => {
  adjuntarALista().then(
    (borrada) => {
      console.log(borrada);
    },
    (fall) => {
      console.log(fall);
    }
  );
});

// //*EJERCICIO 5
const cambiarCoordes = () => {
  num = Math.round(Math.random() * 4);
  console.log("Ahora vamos a cambiar la localizacion de una ciudad");
  lat = parseInt(prompt("Indigue la latitud en grados"));
  long = parseInt(prompt("Indique la longitud en grados"));
  if (lat > 359 || long > 359) {
    grad = true;
  } else {
    grad = false;
  }
};

const cambiarCoordenadas = () => {
  return new Promise((reject) => {
    if (grad) {
      reject("No se ha cambiado ninguna coordenada");
    } else {
      geoloc[num].posicion.splice(0, 2, lat, long);
      console.log(
        "Las nuevas coordenadas de " +
          geoloc[num].lugar +
          " son latitud " +
          lat +
          " y Longitud  " +
          long
      );
    }
  });
};
const ejer5 = document.querySelector("#bot5");
ejer5.addEventListener("click", () => {
  cambiarCoordes();
  cambiarCoordenadas().then(
    (grad) => {
      console.log(grad);
    },
    (falli) => {
      console.log(falli);
    }
  );
});
