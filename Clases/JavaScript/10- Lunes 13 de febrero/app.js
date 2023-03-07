mediciones = [
  2, 4, 12, 2.5, 3, 3.5, 5, 4.3, 2, 2, 2, 6, 7, 7, 7.1, 8, 8, 8, 8.9, 9.8, 8.7,
  7, 5, 4, 2, 1,
];
diasSemana = [
  "lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo",
];

//* OBJETO key:value => llave:valor

// const vivienda1 = {
//   id: 94,
//   tipo: "Duplex",
//   fecha: 2000,
//   precioVenta: 200000,
//   propietario: "Arturo Perez",
//   enVenta: false,
// };

// const vivienda2 = {
//   id: 95,
//   tipo: "Duplex",
//   fecha: 2020,
//   precioVenta: {
//     precioCompra: 8000000,
//     precioVenta: 1000000,
//   },
//   propietario: "Manolo Garcia",
//   enVenta: true,
// };
//*ARRASY DE OBJETOS
// const viviendas = [vivienda1, vivienda2];

//*EL MISMO ARRAY CON LOS OBJETOS Y SUS KEY:VALUE

const viviendas2 = [
  {
    id: 94,
    tipo: "Duplex",
    fecha: 2000,
    propietario: "Arturo Perez",
    enVenta: false,
  },
  {
    id: 95,
    tipo: "Duplex",
    fecha: 2020,
    precioVenta: {
      precioCompra: 8000000,
      precioVenta: 1000000,
    },
    propietario: "Manolo Garcia",
    enVenta: true,
  },
];
//*MOSTRAR OBJETOS DENTRO DEL ARRAY
console.log(viviendas2[0]);
console.log(viviendas2[1]);

//*MOSTRAR PROPIEDADES DE LOS OBJETOS DELTRO DEL ARRAY
console.log(viviendas2[0].precioVenta);
console.log(viviendas2[1].precioVenta);
console.log(viviendas2[0].enVenta);
console.log(viviendas2[1].enVenta);

//*MODIFICAR UN EL VALOR DE UNA PROPIEDAD

viviendas2[1].precioVenta = 350000;
console.log(viviendas2[1].precioVenta);
console.log(viviendas2[1].precioVenta);

viviendas2[0].precioCompra = 150000;
console.log(viviendas2[0].precioCompra);
//* ELIMINAR PAR KEY:VALUE DE UN OBJETO
delete viviendas2[1].precioVenta;

//*DESTRUCTURING DE OBJETOS

const [medicion1, medicion2, medicion3, , , , medicion5] = mediciones;
console.log(medicion1, medicion2, medicion3, medicion5);

const [id, tipo] = viviendas2;
console.log(id, tipo);

datosAdicionales = {
  financiacion: "obtenida",
  plazo: 30,
};
