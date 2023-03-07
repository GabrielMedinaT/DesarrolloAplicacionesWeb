const productos = `[
  {
    "id":1,
    "marca": "Ray-Ban",
    "modelo": "Aviator",
    "precio": 125,
    "fechaventa": "12/10/2023"
  },
  {
    "id":2,
    "marca": "Emporio Armani",
    "modelo": "Flexi",
    "precio": 200,
    "fechaventa": "11/11/2022"
  },
  {
    "id":3,
    "marca": "Ray-Ban",
    "modelo": "Wayfarer",
    "precio": 145,
    "fechaventa": "9/9/2022"
  },
  {
    "id":4,
    "marca": "Guess",
    "modelo": "GU7741",
    "precio": 99,
    "fechaventa": "20/10/2023"
  },
  {
    "id":5,
    "marca": "Maui Jim",
    "modelo": "Red Sands",
    "precio": 218,
    "fechaventa": "12/10/2023"
  }
]`;
crear = () => {
  const lista = JSON.parse(productos);
  console.table(lista);
};
crear();
//*CONSULTAR LISTA DE CLIENTES

comprobar = () => {
  const listar = async () => {
    try {
      const datos = await axios.get(
        "https://6400981f63e89b0913b297b5.mockapi.io/api/v1/clientes"
      );
      return datos;
    } catch (error) {
      console.log(error);
    }
  };
  listar()
    .then((datos) => {
      lista = " ";
      if (idMostrar.toString().length === 0) {
        for (i = 0; i < datos.data.length; i++) {
          const p = document.createElement("p");
          p.innerText = `Nombre del/a cliente/a ${i + 1}: ${
            datos.data[i].nombre +
            " con correo " +
            datos.data[i].email +
            " y contraseña " +
            datos.data[i].password.slice(0, 2) +
            "*".repeat(datos.data[i].password.length)
          }`;
          entrada.appendChild(p);
        }
      } else {
        const p = document.createElement("p");
        p.innerText = `Nombre del/a cliente/a ${idMostrar}: ${
          datos.data[idMostrar].nombre +
          " con correo " +
          datos.data[idMostrar].email +
          " y contraseña " +
          datos.data[idMostrar].password.slice(0, 2) +
          "*".repeat(datos.data[idMostrar].password.length)
        }`;
        entrada.appendChild(p);
      }

      console.log(idMostrar.toString().length);
    })
    .catch((error) => {
      console.log(error);
    });
};
//*CREAR UN CLIENTE
nombre = " ";
correo = " ";
pass = " ";
adjuntar = () => {
  ocul = "*";

  async function crear2() {
    try {
      const cuerpo = {
        nombre: nombre,
        email: correo,
        password: pass,
      };
      const datos = await axios.post(
        //Metodo post para añadirlo
        "https://6400981f63e89b0913b297b5.mockapi.io/api/v1/clientes",
        cuerpo
      );
      return datos;
    } catch (err) {}
  }
  crear2()
    .then(() => {
      const p = document.createElement("p");
      p.innerText = "Cliente creado satisfactoriamente ";
      pass = "";
      document.getElementById("password").value = "";
      entrada.appendChild(p);
    })
    .catch((error) => {
      console.log(error);
    });

  const listar = async () => {
    //Se consulta para comprobar que se adjunta correctamente
    try {
      const datos = await axios.get(
        "https://6400981f63e89b0913b297b5.mockapi.io/api/v1/clientes"
      );
      return datos;
    } catch (error) {
      console.log(error);
    }
  };
  setTimeout(() => {
    // Muesto la lista con setTimeout para que de tiempo a
    listar() // actulizarse y que se muestre correctamente
      .then((dato) => {
        setTimeout(() => {
          entrada.innerHTML =
            "Nombre del nuevo cliente " +
            dato.data.length +
            " " +
            dato.data[dato.data.length - 1].nombre +
            " con el correo " +
            dato.data[dato.data.length - 1].email +
            " y contraseña " +
            dato.data[dato.data.length - 1].password.slice(0, 2) +
            ocul.repeat(dato.data[dato.data.length - 1].password.length - 2) +
            " ha sido dado de alta";
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, 2500);
  document.getElementById("nombre").value = "";
  document.getElementById("correo").value = "";
};

//*MODIFICAR USUARIO
const cambia = () => {
  const modificar = async () => {
    num = parseInt(prompt("indique número de id para cambiar contraseña "));
    pass = prompt("Introduzca contraseña ");
    api =
      "https://6400981f63e89b0913b297b5.mockapi.io/api/v1/clientes/" +
      num.toString();
    try {
      const datos = await axios.put(api, {
        method: "PUT",
        password: pass,
      });
      return datos;
    } catch (error) {
      console.log(error);
    }
  };
  modificar()
    .then((datos) => {
      console.log(datos);
    })
    .catch((error) => {
      console.log(error);
    });
};

//*ELIMINAR USUARIO
const eliminar = () => {
  num = parseInt(prompt("indique número de id para eliminar "));
  api =
    "https://6400981f63e89b0913b297b5.mockapi.io/api/v1/clientes/" +
    num.toString();
  const borrar = async () => {
    try {
      const elimina = await axios.delete(api);
      return elimina;
    } catch (error) {
      console.log(error);
    }
  };
  borrar()
    .then((elimina) => {
      console.log(elimina);
      //mostrar el usuario que se elimino
      const datos = axios.get(api);
      entrada.innerHTML = "Usuario eliminado";
    })
    .catch((error) => {
      console.log(error);
    });
};
const boton1 = document.getElementById("leer"),
  boton2 = document.getElementById("Añadir"),
  boton3 = document.getElementById("modificar"),
  boton4 = document.getElementById("eliminar"),
  nombr = document.getElementById("nombre"),
  corre = document.getElementById("correo"),
  contr = document.getElementById("password"),
  enviar = document.getElementById("enviar"),
  limpiar = document.getElementById("limpiar"),
  buscaId = document.getElementById("buscaId"),
  entradaId = document.getElementById("id"),
  botonBuscaId = document.getElementById("enviar2");
idMostrar = "";
botonBuscaId.addEventListener("click", () => {
  idMostrar = entradaId.value;

  comprobar();
});

boton1.addEventListener("click", () => {
  idMostrar = "";
  comprobar();
});

boton2.addEventListener("click", () => {
  adjuntar();
});
boton3.addEventListener("click", () => {
  cambia();
});
boton4.addEventListener("click", () => {
  eliminar();
});
limpiar.addEventListener("click", () => {
  entrada.innerHTML = " ";
});
enviar.addEventListener("click", () => {
  nombre = nombr.value;
  correo = corre.value;
  pass = contr.value;
  adjuntar();
});
enviar.addEventListener("clickup", () => {
  nombr.innerHTML = "";
  corre.innerHTML = "";
  pass.innerHTML = "";
});
const entrada = document.getElementById("entrada");
// num = parseInt(prompt("indique número de id para modificar contraseña "));
// cont = prompt("Indique la nueva contraseña");
// api = "https://6400981f63e89b0913b297b5.mockapi.io/api/v1/clientes?id=" + num;
