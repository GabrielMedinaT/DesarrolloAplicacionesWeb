// * EJERCICIO 1

a=2;
b=3;
c=a+b;
console.log("a es igual a " + a);
console.log("b es igual a" + b);
console.log(" -EJERCICIO 1- La suma de a y b es igual a " + c);

// * EJERCICO 2

min= parseInt(prompt("Introduzca el tiempo en minutos"));
seg=min*60;
console.log(" -EJERCICIO 2- los " + min + " minutos introducidos, da un total de " + seg + " segundos" )

// * EJERCICIO 3

bas=parseInt(prompt("Digame la base del triangulo "));
alt=parseInt(prompt("Digame la altura del triangulo "));
area = (bas*alt)/2;
console.log(" -EJERCICIO 3- El area del triangulo es " + area );

// * EJERCICIO 4

edad=parseInt(prompt("Diga cuantos años cumplirá en su proximo cumpleaños"));
dias=edad*365;
console.log("-EJERCICIO 4-La edad en dias que tendrá en su próximo cumpleaños será " + dias);

// * EJERCICIO 5

bas=parseInt(prompt("Digame la base del triangulo "));
alt=parseInt(prompt("Digame la altura del triangulo "));
area = (bas*2)+(alt*2);
console.log("-EJERCICIO 5- El perimetro del rectangulo  es " + area );

// * EJERCICIO 6

nomb=prompt("Digame su nombre ");
ape= prompt("Digame su apellido ");
console.log("-EJERCICIO 6- El nombre y apellido introducidos son " + nomb + " " + ape);

// * EJERCICO 7

dobl=parseInt(prompt("Introduzca la cantidad de canastas dobles encestadas"));
trip=parseInt(prompt("Introduzca la cantidad de canastas triples encestadas"));
total= (dobl*2)+(trip*3);
console.log("-EJERCICIO 7- La cantidad de puntos con " + dobl + " dobles y " + trip+ " triples es de " + total + " puntos");

// * EJERCICIO 8

gan=3;
empt=1;
equ=prompt("Digame el equipo");
partgan=parseInt(prompt("Digame el total de partidos ganados"));
partemp=parseInt(prompt("Digame el total de partidos empatados"));
total= (partgan*3)+partemp;
console.log("-EJERCICIO 8- El " + equ + " ha obtenido un total de " + total + " puntos");

// * EJERCICIO 9

num=parseInt(prompt("Introduzca un número"));
numb=num*2;
numc=num-numb
console.log("-EJERCICIO 9- En numero negativo del introducido " + numc)

// * EJERCICIO 9B

num=parseInt(prompt("Introduzca un número"));
numb=-num;
console.log("-EJERCICIO 9B- El numero negativo del introducido es" + numb);

// * EJERCICIO 9C
num=parseInt(prompt("Introduzca un número"));
numb=num * -1;
console.log("-EJERCICIO 9B- El numero negativo del introducido es " + numb);

// *EXTRA 1

const desc=0.10;
const precio=parseFloat(prompt("introduzca el precio del cuchillo"));
cantprod=parseInt(prompt("Cuantos cuchillos compra?"));
console.log("El precio de " + cantprod + " cuchillos es " + (precio*cantprod) +
" Sin descuento, y con descuentos es de " + ((precio*cantprod)-((precio*cantprod)*desc)));

//* EXTRA 2


