//*FUNCIONES EN OBJETOS
const robot = {
  modelo: "T1000",
  capDestructiva: "10 megatones",
  arrancar: function () {
    console.log("Arrancando");
  },
  girarDerecha: function (grados) {
    console.log("Girando a la derecha " + grados + " grados");
  },
};
console.log(robot.modelo);
robot.arrancar();
robot.girarDerecha(90);
robot.parar = function () {
  console.log("Sayonara baby");
};
robot.parar();
//*METODOS EN ARRAY

//*METODO forEach
//*array.forEach(funcion() {})
const tipos = ["terrera", "atico", "piso", "loft", "villa", "apartamento"];
tipos.forEach(function (casa) {
  console.log("Tienes un/a " + casa);
});

const cervezas = ["Cruz Campo", "Mahou", "Tropical", "Alhambra", "Judas"];
cervezas.forEach(function (birra) {
  console.log(birra + " es buena");
});

//*METODO MAP
const precioSinImpuesto = [1000, 324, 4324, 54323, 54345, 33, 100];

let impuesto = precioSinImpuesto.map(function (x) {
  return x * 1.21;
});
console.log(impuesto);

let numeros = [1, 4, 9, 16, 25, 36, 49, 64, 81];
let r = numeros.map(function (num) {
  return Math.sqrt(num);
});
console.log(r);

const cervezas2 = ["Cruz Campo", "Mahou", "Tropical", "Alhambra", "Judas"];

let birras = cervezas2.map(function (birra) {
  return "la mejor cerveza es " + birra;
});
console.log(birras);

//*METODO FILTER()

const numeros3 = [12, 5, 8, 130, 44];
pares = numeros3.filter(function (numero) {
  return numero % 2 == 0;
});
console.log(pares);

//*METODO SOME()

const numeros4 = [1, 7, 3, 9, 5];
compruebaPares = numeros4.some(function (numero) {
  return numero % 2 === 0;
});
console.log(compruebaPares);

//*METODO EVERY()

const numeros5 = [2, 4, 6, 8];
compruebaParesTotal = numeros5.every(function (numero) {
  return numero % 2 === 0;
});
console.log(compruebaParesTotal);

//*METODO FIND()
const listado = [
  {
    hora: "08:00",
    tarea: "Hacer desayuno",
    urgencia: "Moderada",
  },
  {
    hora: "09:00",
    tarea: "Hacer la cama",
    urgencia: "Urgente",
  },
  {
    hora: "10:15",
    tarea: "Estudiar",
    urgencia: "Urgente",
  },
  {
    hora: "11:30",
    tarea: "Practicas",
    urgencia: "Alta",
  },
];

buscaTipo = listado.find(function (clase) {
  return clase.urgencia === "Urgente";
});
console.log(buscaTipo);

//*METODO FINDINDEX
const listado2 = [
  {
    hora: "08:00",
    tarea: "Hacer desayuno",
    urgencia: "Moderada",
  },
  {
    hora: "09:00",
    tarea: "Hacer la cama",
    urgencia: "Urgente",
  },
  {
    hora: "10:15",
    tarea: "Estudiar",
    urgencia: "Urgente",
  },
  {
    hora: "11:30",
    tarea: "Practicas",
    urgencia: "Alta",
  },
];

indiceTipo = listado2.findIndex(function (lista) {
  return lista.urgencia === "Urgente";
});

console.log(indiceTipo);
