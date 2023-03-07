// alert("EJERCICIO 1");
// nombreUsuario = prompt("Indique nombre del producto");
// precioProducto = parseInt(prompt("Indique el precio del producto"));
// descuentoTemporada = parseInt(prompt("Indique descuento "));
// descuentoFinal = precioProducto - precioProducto * (descuentoTemporada / 100);
// function tienda(nombre, precio, descuento) {
//   return alert(
//     "El producto es  " +
//       nombre +
//       " el precio del producto es " +
//       precio +
//       " con el descuento aplicado se quda en " +
//       descuentoFinal
//   );
// }
// tienda(nombreUsuario, precioProducto, descuentoFinal);

// alert("EJERCICIO 2");

// function listaEmpleados(nombre, contraseña, departamento) {
//   listadoEmpresa = [];
//   listadoEmpresa.push(nombre, contraseña, departamento);
//   return listadoEmpresa;
// }
// nombreEmpleado = prompt("Diga el nombre del empleado");
// contraseñaEmpleado = prompt("Introduzca su contraseña");
// departamentoEmpleado = prompt("Diga el departamento");

// console.log(
//   listaEmpleados(nombreEmpleado, contraseñaEmpleado, departamentoEmpleado)
// );

// alert("EJERCICIO 3");
// function listaEmpleados(nombre, contraseña, departamento) {
//   let listadoEmpresa = {
//     nombre: nombre,
//     contraseña: contraseña,
//     departamento: departamento,
//   };

//   return listadoEmpresa;
// }
// nombreEmpleado = prompt("Diga el nombre del empleado");
// contraseñaEmpleado = prompt("Introduzca su contraseña");
// departamentoEmpleado = prompt("Diga el departamento");

// alert(listaEmpleados(nombreEmpleado, contraseñaEmpleado, departamentoEmpleado));
// console.log(
//   listaEmpleados(nombreEmpleado, contraseñaEmpleado, departamentoEmpleado)
// );

// alert("EJERCICIO 4");

// tweet24horas = [
//   "ovni",
//   "bomba",
//   "aeronautica",
//   "Guerra en europa",
//   "otro tweet",
//   "a partir de aqui copio y pego",
//   "ovni",
//   "bomba",
//   "aeronautica",
//   "Guerra en europa",
//   "otro tweet",
//   "a partir de aqui copio y pego",
//   "ovni",
//   "bomba",
//   "aeronautica",
//   "Guerra en europa",
//   "otro tweet",
//   "a partir de aqui copio y pego",
// ];
// function recogeTweet(ultimos) {
//   resultado = [];
//   if (ultimos.length > 5) {
//     for (i = ultimos.length - 5; i < ultimos.length; i++) {
//       resultado.push(ultimos[i]);
//     }
//   }

//   return resultado;
// }
// console.log(
//   "Hay mas de 5 tweet, y los 5 ultimos son los siguientes " +
//     recogeTweet(tweet24horas)
// );

// alert("EJERCICIO 5");
// nombres = prompt("Introduzca un minimo de tres nombres separados por coma");

// function conversor(array) {
//   nuevoArray = array.split(",");
//   console.log(nuevoArray);
// }
// conversor(nombres);

// alert("EJERCICIO 6");

// numerosArray = [1, 45, 23, -32, 24];

// function cambiaSigno(numeros) {
//   resultado = [];
//   for (i = 0; i < numeros.length; i++) {
//     resultado.push(numeros[i] * -1);
//   }
//   console.log(resultado);
// }
// cambiaSigno(numerosArray);

// alert("EJERCICIO 7");

// rango = Math.round(Math.random() * 99 + 1);
// function dado(aleatorio) {
//   numeroDado = Math.round(Math.random() * aleatorio + 1);
//   return numeroDado;
// }
// console.log(rango + " Es el numero aleatorio que se le ha pasado a la funcion");
// console.log(dado(rango));

// alert("EJERCICIO 8");

// const listado = [
//   {
//     hora: "08:00",
//     tarea: "Hacer desayuno",
//     urgencia: "Moderada",
//   },
//   {
//     hora: "09:00",
//     tarea: "Hacer la cama",
//     urgencia: "Alta",
//   },
//   {
//     hora: "10:15",
//     tarea: "Estudiar",
//     urgencia: "Urgente",
//   },
//   {
//     hora: "11:30",
//     tarea: "Practicas",
//     urgencia: "Alta",
//   },
// ];
// tiempo = prompt("Indique la hora en formato HH:MM ");
// minutos = tiempo.slice(3, 5);
// function validacionHora(hora, minutos) {
//   //   tiempo = hora > "24:00";
//   if (hora > "23:00" || minutos > "59") {
//     alert("La hora es incorrecta");
//   } else {
//     prioridad(listado, hora);
//   }
// }
// function prioridad(tareas, hora) {
//   for (i = 0; i < tareas.length; i++) {
//     if (hora > tareas[i].hora) {
//       console.log("tarea " + tareas[i].tarea + " Vencida ");
//     } else {
//       console.log("Tarea" + tareas[i].tarea + " en tiempo");
//     }
//   }
// }
// validacionHora(tiempo, minutos);

// alert("EJERCICIO 9");

// nombre = prompt("Indique nombre ");
// contrasena = prompt("Indique contraseña sin espacios y minimo 8 caracteres");

// function validacion(nom, contra) {
//   if (contra.length < 8 || contra.includes(" ") || nombre === contrasena) {
//     correcto = false;
//   } else {
//     correcto = true;
//   }
//   if (correcto === true) {
//     alert("Bienvenido " + nom + " , has introducido una contraseña correcta");
//   } else {
//     alert("Contraseña introducida no es correcta ");
//   }
//   return correcto;
// }
// console.log(validacion(nombre, contrasena));
