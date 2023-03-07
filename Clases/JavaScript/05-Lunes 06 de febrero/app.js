// a = 0;
// for (i = 0; i < 10; i=i+1){
//     console.log("Numero " + i);
// }

// console.log("SALTO DE LINEA")

// //* Breack y continue en bucle for

// for (i = 0; i < 100; i++){
//     if (i == 32) break;
//     console.log("Nummero" + i)
// }
// console.log("SALTO DE LINEA")

// //* continue
// for (i = 0; i < 11; i++){
//     if (i == 32){console.log("Has llegado a 32")}
//     console.log("Nummero" + i)
// }
// console.log("SALTO DE LINEA")
// //* Bucle While
// j = 1
// while (j < 11) {
//     console.log("Nummero j " + j)
//     j++
// }

// console.log("SALTO DE LINEA")
// //* do.. while
// j = 1;
// do {
//     console.log("Nummero j " + j);
//     j++;
// } while (j < 11);
    
// //*ARRAYS
// var arreglo = ["Mexico", "España", "Portugal", "Alemania", "Suiza"];
// console.log("ARRAYS");
// for (i = 0;i<arreglo.length; i++){
//     console.log(arreglo[i]);
// }
// user = parseInt(prompt("Introduzca un ID de usuario entre 123 y 127 por favor"));
// arrayLoco = [123, "Manolo", false, 124, "Cuco", false, 125, "Pepe", false, 126, "Antonio", true, 127, "Julia", true,];
// if (user < 123 || user > 127) { console.log("El ID introducido no es correcto") }
// else{
// for (i = 0; i < arrayLoco.length; i=i+3){
//     if (arrayLoco[i] === user) {
//         if (arrayLoco[i + 2] === true) { estado = "activado " } else { estado = " desactivado " }
//         console.log("El usuario " + arrayLoco[i] + " es " + arrayLoco[i+1] + " y está " + estado )
//         }
//     }
// }

// kolores = ["Amarillo", "Azul", "Verde"]
// console.log(kolores)
// console.log(kolores.toString())

// //*AÑADIR O QUITAR  ELEMENTO A ARRAY POR EL FINAL

// kolores.push("Azul", "Turquesa")
// console.log(kolores)

// //*AÑADIR EN LA LISTA DESDE EL PRINCIPIO
// kolores.unshift("Rojo")
// console.log(kolores)
colores=["rojo","azul",'naranja']
//*Spread operator
//*
console.log(colores)
mascolores = ['marron', 'verde', ...colores];
console.log(mascolores)

//*destructurin
const [na, vi, ro] = mascolores;
console.log(na, vi, ro);
const[,,te] = colores
console.log(te)

colores.sort()
console.log(colores)

colores.reverse()
console.log(colores)

incluye = colores.includes('naranja')
console.log(incluye);

pos = colores.indexOf('naranja');
console.log(pos);
ver = colores[pos]
console.log(ver)

//*metodo slice(). devuelve elementos sin eliminarlos
extraccion=colores.slice(0, 3);
console.log(extraccion)

const coloresTres = ['verde', 'azul', 'rojo', 'amarillo', 'violeta', 'marron']
console.log(coloresTres)
//*metodo splice(). elimina elementos
//*Suprimir
extra=coloresTres.splice(0, 2);
console.log(coloresTres);
console.log(extra)
//*insertar
console.log(coloresTres)
coloresTres.splice(1, 0, 'rosa');
console.log(coloresTres)

coloresTres.splice(1, 0, 'azul cobalto');
console.log(coloresTres);
//*Reemplazar
coloresTres.splice(0, 2, 'malva', 'rosita');
console.log(coloresTres)