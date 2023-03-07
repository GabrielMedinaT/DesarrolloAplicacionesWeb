// HTTP: Hypertext Transfer Protocol

// HTTP
// RESTful API o REST API

// GET:Solicitar o requerir algún recurso
// POST: Enviar datos al servidor para añadirlos a algún receptor
// PUT: Modificar datos ya presentes en el servidor
// DELETE: Eliminar determinados datos de la BDD

// HTTP Status Message

// 200 OK // Respuesta standard para peticiones HTTP exitosas
// 304 Not modified
// 404 Not found
// 500 Internal Server Error
// 502 Bad Gateway
// 503 Service Unavailable

// El conector de las APIs con el mundo exterior son los Endpoints (URLs)
// JSON

// AJAX: Asynchronous Javascript and XML

// JSON: JavaScript Object Notation

// De JSON a compatible con JS ==> JSON.parse()
// De JS a JSON => JSON.stringify()

const datos = `{"sistema": "Sol","planeta": "Marte","distancia": {"km": 150000000,"mi": 100000000},"habitable": false,"agua": true,"numexp": 2}`;

// Convertimos a JS
// const datosNuevos = JSON.parse(datos);
// console.log(datosNuevos);

// datos2 = datosNuevos;
// console.log(datos2);

// datosFormateados = JSON.stringify(datos2);
// console.log(datosFormateados);

//https://jsonplaceholder.typicode.com/comments?postId=1

//Fetch API
// XMLHttpRequest

// fetch("https://restcountries.com/v3.1/name/españa")
//   .then((respuesta) => {
//     console.log("RESPUESTA");
//     return respuesta.json();
//   })
//   .then((datos) => {
//     console.log("Datos Formateados", datos[0].languages);
//   });

// AXIOS
// const peticion = axios.get("https://swapi.dev/api/people/12");
// console.log(peticion);

// axios
//   .get("https://swapi.dev/api/people/12")
//   .then((datos) => {
//     console.log(datos);
//     // console.log(datos.data.name); //ejemplo: nombre del personaje
//     // console.log(datos.data.eye_color); //ejemplo: color de ojos del personaje
//   })
//   .catch((err) => {
//     console.log("ERROR", err);
//   });

// === Operación con Axios de un GET  ===
// const listar = async () => {
//   try {
//     const datos = await axios.get("https://swapi.dev/api/people/1");
//     // console.log(datos);
//     return datos;
//   } catch (e) {
//     console.log(e);
//   }
// };

// listar()
//   .then((datos) => {
//     console.log(datos);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Crear y enviar datos a una API mediante AXIOS
// const crear = async () => {
//   try {
//     const cuerpo_del_mensaje = {
//       title: "Mi viejo computer",
//       body: "lorem ipsum dolor sit amet",
//       userId: 1,
//     };
//     const datos = await axios.post(
//       "https://jsonplaceholder.typicode.com/posts",
//       {
//         body: cuerpo_del_mensaje,
//       }
//     );
//     return datos;
//   } catch (error) {
//     () => console.log("Error:" + error);
//   }
// };

// crear()
//   .then((datos) => {
//     console.log(datos);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Modificar datos mediante una API (PUT)
const modificar = async () => {
  try {
    const datos = await axios.put(
      "https://jsonplaceholder.typicode.com/posts/1",
      {
        body: {
          title: "clase",
          body: "tipo",
          userId: 1,
        },
      }
    );
    return datos;
  } catch (error) {
    console.log("Error: " + error);
  }
};

// Comprobamos la operación, mostrando los datos o el error
modificar()
  .then((datos) => {
    console.log(datos);
  })
  .catch((err) => {
    console.log(err);
  });

// Eliminar datos mediante AXIOS (DELETE)
const eliminar = async () => {
  try {
    const datos = await axios.delete(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    // console.log(datos);
    return datos;
  } catch (error) {
    console.log(error);
  }
};

eliminar()
  .then((datos) => {
    console.log(datos);
  })
  .catch((error) => {
    console.log(error);
  });
