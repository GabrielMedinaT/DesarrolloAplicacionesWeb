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
const jsongeo = JSON.stringify(geoloc);
console.log(jsongeo);

const nuevoGeo = JSON.parse(jsongeo);
console.log(nuevoGeo);

//* Fetch API
pais = fetch("https://restcountries.com/v3.1/name/españa")
  .then((respuesta) => {
    console.log("RESPUESTA");
    return respuesta.json();
  })
  .then((datos) => {
    console.log("datos formateados ", datos[0].languages);
  });

fetch("https://swapi.dev/api/films")
  .then((respuesta) => {
    return respuesta.json();
  })
  .then((datos) => {
    for (i = 0; i < datos.results.length; i++) {
      console.log(
        "El director de la pelicula " +
          datos.results[i].title +
          " es " +
          datos.results[i].director
      );
    }
  });

//*AXIOS

axios
  .get("https://swapi.dev/api/films")
  .then((respuesta) => {
    console.log(respuesta);
  })
  .catch((err) => console.log("ERROR", err));

axios
  .get("https://6400981f63e89b0913b297b5.mockapi.io/api/v1/alumnos")
  .then((resp) => {
    console.log(resp);
  })
  .catch((err) => console.log("ERROR", err));
