// * EJERCICIO 1
//* Crear un programa que solicite la edad del usuario y le responda si es o no mayor de edad.
edad=parseInt(prompt("Cuantos años tiene?"));
if(edad<18){
    console.log("Es menor de edad");
}else console.log("Es mayor de edad");

// * EJERCICIO 2
//*Un programa deberá tomar dos números pedidos al usuario e indicar cuál de los dos es mayor.

numA=parseInt(prompt("Diga el primer número"));
numB=parseInt(prompt("Diga el segundo número"));
if(numA>numB){
    console.log("El " + numA + " es mayor que " + numB);}
    else if(numA===numB){
        console.log("Los dos números son iguales");
    }
    else console.log("El " + numB + " es mayor que " + numA);


// * EJERCICIO 3
//*Crear un programa que pida un número y muestre en consola si es par o impar. Pista: Utilizar el operador %

num=parseInt(prompt("Diga un número"));
if((num%2)===0){
    console.log("El número " + num + " es par");
    }else console.log("El numero " + num + " es impar");


// * EJERCICIO 4
// El programador cuenta con los precios de 3 
// helados diferentes y de tres topping diferentes 
// (nueces, nubes y chocolate). Crear un programa en el que 
// se le pregunte al usuario que helado quiere y en función de este 
// aplique un precio de topping según el helado (topping para helado 
// de vainilla, turrón o chocolate, por ejemplo).
// A continuación, mostrará en consola el precio del helado + el topping 

precioFinal=0;
helado=parseInt(prompt("Introduzca 1 para helado de COCO, 2 para helado de VAINILLA 3 para helado de FRESA"));
topping=parseInt(prompt("Ahora elija un topping 1 para NUECES, 2 para NUBES, 3 para CHOCOLATE"));
if (helado===1){
    precioFinal=precioFinal+1;
}else if(helado===2){
    precioFinal=precioFinal+2;
} else   precioFinal=precioFinal+3;


if(topping===1 || topping===2){
    precioFinal=precioFinal+2;
}else {precioFinal=precioFinal+4;} 

console.log("El precio total del helado es de " + precioFinal)

// * EJERCICIO 5
//En una aplicación web para colecciones de libros un 
// programa debe comprobar si un usuario está en el sistema o no. 
// Si lo está, mostrará el mensaje “Comprobación rutinaria”. 
// Si no lo está le pedirá que entre en el sistema.
// No es necesario pedir nada por prompt.

user="Luis";
if (user==="Pepe"){
    console.log("Comprobacion rutinaria")
}else console.log("No está en el sistema")

// * EJERCICIO 6

// En una aplicación web para la gestión de 
// valores se ofrecen 3 tipos de suscripciones : 
// básico, plus y premium. Crear un programa que 
// solicite el tipo de suscripción que desea y mostrarle 
// en pantalla el mensaje: “Debe pagar … euros mensuales
// por la suscripción …”

subs=parseFloat(prompt("Elija una subscripción: 1 para Básico - 2 para Plus - 3 para Premium"));

if(subs===1){
    console.log("El precio de la subscripción es de  4 euros al mes" )
}else if(subs===2){
    console.log("El precio de la subscripción es de 8 euros al mes ")
}else if (subs===3){
    console.log("El precio de la subscripción es de 12 euros al mes ")
}else{
    console.log("La opción escogida no es correcta")
}

// * EJERCICIO 7



// El usuario de una cuenta quiere entrar en esta.
// Hacer un programa que verifique que ha pagado su 
// cuota mensual. Mostrar los mensajes necesarios.
// Nota: ¿Cómo simular si ha pagado la cuota? Con el método random()

d= Math.round(Math.random()) ;
if(d===0){
    console.log("La cuota está sin pagar");
    }else{console.log("La cuota está pagada");} 



// * EJERCICIO 8
// En una empresa de desarrollo web quieren crear una 
// aplicación para la gestión de criptomonedas. Elegir 3 
// criptomonedas al azar. La aplicación será capaz de convertir 
// valores de criptomonedas. Ejemplo: de Bitcoin a Ethereum.
// Nota: Con 3 ejemplos de conversión es suficiente.

eu=1;

bit=eu*21815.14;
eth=eu*1534;
bat=eu*0.27;
crip4=eu*2;

console.log("El valor del Bitcoin es de  " + bit + " Euros, " + ( bit/eth).toFixed(2) + 
" Etherum y de " +(21815/0.27).toFixed(2) + " Bat Coin")


