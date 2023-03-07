//*ARRAY
const clientes = [
  {
    nombre: "Vaelin Al Sorna",
    password: "34rft%&",
    estaDentro: false,
    carrito: [560, 600, 122, 1400],
    credito: 3000,
  },
  {
    nombre: "Locke Lamora",
    password: "lockito89",
    estaDentro: true,
    carrito: [100, 1200, 345, 612, 72],
    credito: 2000,
  },
  {
    nombre: "Addie LaRue",
    password: "adla?¿*",
    estaDentro: true,
    carrito: [1000, 1500, 2000],
    credito: 1000,
  },
  {
    nombre: "Tomas Piety",
    password: "Toty+012?",
    estaDentro: true,
    carrito: [125, 200, 50, 2],
    credito: 1000,
  },
  {
    nombre: "Pepe",
    password: "spa*?34A",
    estaDentro: true,
    carrito: [10, 10, 15, 15],
    credito: 400,
  },
];
busquedaUser = prompt("Indique el nombre de usuario por favor");
contador = 0;
//*BUCLE FOR PARA VERIFICA SI EL NOMBRE EXISTE, DE NO EXISTIR NO HACE NADA Y NO AÑADE NADA A
//* UN CONTADOR
for (i = 0; i < clientes.length; i++) {
  if (clientes[i].nombre.toLowerCase() === busquedaUser.toLowerCase()) {
    importeNuevo = parseInt(
      prompt("Indique el nuevo importe para añadir al carrito")
    );
    clientes[i].carrito.push(importeNuevo);
    contador++;
  }
}
//*SE COMPRUEBA SI CONTADOR ES 0, DE SER ASI AÑADE CLIENTE CON LO ESPECIFICADO EN EL EJERCICIO
if (contador === 0) {
  nuevoImportNuevoCliente = parseInt(
    prompt("Cliente no existe. Indique importe para el carrito nuevo cliente")
  );
  clientes.push({
    nombre: busquedaUser,
    password: null,
    estaDentro: true,
    carrito: [nuevoImportNuevoCliente],
    credito: 1000,
  });
}
console.log(clientes);
//*DELCARO E INICIO VARIABLE SUMA CON VALOR 0
suma = 0;
sumaDelCarrito = prompt("Diga el nombre para saber lo que lleva gastado");
//*BUCLE FOR PARA  VERIFICA SI EL NOMBRE EXISTE, DE NO EXISTIR NO HACE NADA
for (i = 0; i < clientes.length; i++) {
  if (clientes[i].nombre.toLowerCase() === sumaDelCarrito.toLowerCase()) {
    //*BUCLE FOR ANIDADO PARA RECORRER EL ARRAY CARRITO
    for (j = 0; j < clientes[i].carrito.length; j++) {
      algo = clientes[i].carrito[j]; //*RECOJO LO QUE HAY EN EL ARRAY CARRITO EN UNA VARIABLE QUE SE LLAMA ALGO
      suma += algo; //* SE HACE LA SUMATORIA EN LA VARIABLE SUMA
    }
  }
}
//*MUESTO LA SUMATORIA POR
console.log("La suma  del carrito de " + sumaDelCarrito + " es de " + suma);
