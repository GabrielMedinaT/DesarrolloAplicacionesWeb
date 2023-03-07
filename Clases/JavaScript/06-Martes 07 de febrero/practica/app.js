// Ejercicio 1
// Dado el siguiente array:
// miAlfabeto = ['A', 'B', 'C', 'D','E','F', 'G'];
// -	Manda a consola la longitud del array
// -	Crea un condicional que indique si la longitud es menor que 4.

//*EJERCICIO 1
miAlfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
console.log(miAlfabeto.length);
if (miAlfabeto.length < 3) {
    console.log('El array tiene menos de 4 elementos ');
} else {
    console.log("El array tiene " + miAlfabeto.length + " elementos");
}

// Crea un array planetas con todos los planetas del Sistema Solar.
// -	Escribe en consola cada uno de ellos por separado
// -	Elimina Marte.
//*EJERCICIO 2
planetas = ['Mercurio', 'Venus', 'Tierra', 'Marte', 'Jupiter', 'Saturno', 'Urano', 'Neptuno'];
console.log(planetas.toString());
esta = planetas.includes('Marte')
if (esta === true) {
    pos = planetas.indexOf('Marte');
    planetas.splice(pos, 1);
    console.log(planetas.toString());
}

// Crea un array productos a partir de dos productos médicos pedidos al usuario.
// -	Añadir dos productos más al final del array
// -	Añadir dos productos más al principio del array
// Utilizar métodos de Arrays y spread operator
//*EJERCICIO 3

prod1 = prompt("Introduzca el primer medicamento por favor");
prod2 = prompt("Introduzca el segundo medicamento por favor");
lista = [prod1, prod2];
console.log(lista);

lista.push("gelocatil", "paracetamol");
console.log(lista)
lista.unshift("ibuprofeno", "Trankimanises");
console.log(lista);

listamas = ["aspirina", "diazepan", ...lista];
console.log(listamas);
listamas = [...listamas, "sal", "azucar"];
console.log(listamas);

// Dado el array:
// const numeros = ['1', '2', '3', '4', '5'];
// Convertir cada String del array en entero y mostrarlo en pantalla.
//*EJERCICIO 4
const numeros = ['1', '2', '3', '4', '5'];
for (i = 0; i < numeros.length; i++){
    console.log(parseInt(numeros[i]));
}



// Comprobar si un array cualquiera creado por el
// desarrollador contiene un número determinado que
// se pedirá por consola al usuario(positivo, negativo, entero o decimal).
//*EJERCICIO 5
const arraynum = [1, 4, 3, 2.3, 3, 5, 4, 323, 326, 456, 0];
pedir = parseInt(prompt("Introduzca un número por favor"));
resul = arraynum.includes(pedir);
if(resul===false){console.log("El numero no está en la lista")}else{console.log("El numero si está en la lista")}
//*NI CASO A ESTE FRAGMENTO
// for (i = 0; i < arraynum.length; i++) {
//     if (arraynum[i] % 1=== 0) {
//         console.log("el numero " + arraynum[i] + " no es decimal");
//     }else{console.log("el numero " + arraynum[i]+ " es decimal ")}
// }
// for (i = 0; i < arraynum.length; i++){
//     if (arraynum[i] < 0) {
//         console.log("El array contiene un número negativo");
//     } else {
//         console.log("El arrary no contiene número negativo");
//     }
// }
//*HASTA AQUI,DE AQUI EN ADELANTE SI VA BIEN


// Ejercicio 6
// Sumar todos los elementos de un array de números (enteros y decimales, negativos y positivos).
// Sumar el primer y último elemento de un array de números.
//*EJERCICIO 6
const arraynumero = [1, 4, 3, 2.3, 3, 5, 4, 323, 326, 456, 0];
total = 0;
for (i = 0; i < arraynumero.length; i++){
    total = total + arraynumero[i];
    
}
console.log("El total de la suma del arrary es " + total + " y la suma del primer y ultimo elemento es " + (arraynumero[(arraynumero.length)-1]+arraynumero[0]))

// Escribir un programa que,
// dado un número del 1 al 7 muestre en consola el día de la semana correspondiente.
//*EJERCICIO 7

dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
intro = parseInt(prompt("Diga un dia de el uno al siete "));
if (intro < 8 && intro > 0) {
    console.log("El dia elegido es el " + dias[intro - 1]);
} else {
    console.log("El numero introducido no es correcto")
}



// Ejercicio 8
// Crea un array con el nombre de 5 películas que te gusten
// -	Pídele a un usuario que te indique la posición de la película que quiere eliminar
// -	Eliminar la película en esa posición
// -	Pídele al usuario que te indique una película que quiera añadir, y en qué posición.
// -	Añadir película.
//*EJERCICIO 8

pelis = ['El club de la lucha', 'Moon', 'Braindead', 'El apartamento', 'Que te calles'];
cont = 0;
for (i = 0; i < pelis.length; i++){
    cont = cont + 1;
    console.log("La pelicula " + pelis[i] + " es la número " + cont)
}
elimi = parseInt(prompt("Indique entre el 1 y el 5 la pelicula que quiere elmiminar"));
if (elimi > 0 && elimi < 6) {
    NuPelis = pelis.splice(elimi - 1, 1);
    console.log(pelis);
    nuevaPeli = prompt("Ahora indique una pelicula usted ");
    nuevaPos = parseInt(prompt("Por ultimo indique en que posicion de la lista quiere que aparezca la pelicula"));
    pelis.splice(nuevaPos-1, 0, nuevaPeli);
    console.log(pelis);
}
else {
    console.log("El numero de pelicula seleccionada no es correcto")
}


// Ejercicio 9
// Dada la siguiente lista de números enteros:
// const listaNumeros = [1, 16, 22, 43, 55, 7, 14, 8, 9];
// Crear dos listas. Una contendrá los números pares y la otra los impares.
// El programa deberá decidir previamente si cada número es par o impar.
// *EJERCICIO 9

const listaNumeros = [1, 16, 22, 43, 55, 7, 14, 8, 9];
for (i = 0; i < listaNumeros.length; i++){
    if (listaNumeros[i] % 2 != 0) {
        console.log("El número  " + listaNumeros[i] + " es impar")
    }
    else{
        console.log("El número " + listaNumeros[i] + " es par");
         }
    }
    


//     Ejercicio 10
// Escribir un programa que muestre todos los números negativos de un array.

numeritos=[1, -4, 3, -2, 54, -342, 6, 3, 56324, -2];
for (i = 0; i < numeritos.length; i++){
    if (numeritos[i] < 0) {
        console.log(numeritos[i]);
    }
}



console.log("fin")
