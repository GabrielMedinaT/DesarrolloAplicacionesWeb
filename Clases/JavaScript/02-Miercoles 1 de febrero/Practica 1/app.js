//* EJERCICIO 1

a=2;
b=3;
c=a+b;
console.log("a es igual a " + a);
console.log("b es igual a" + b);
console.log(" -EJERCICIO 1- La suma de a y b es igual a " + c);

a=parseInt(prompt("Introduzca el primer número"));
b=parseInt(prompt("Introduzca el segundo número"));

oper=prompt("Operacion a realizar Para suma + Para resta - para multiplicacion * para division /");

if(oper==="+"){
    console.log("La suma da " + (a+b)) ;
}else if(oper==="-"){
    console.log("La resta da " + (a-b)) ;
}else if (oper==="*"){
    console.log("La multiplicación da " + (a*b))
}else if(oper==="/"){
    if(b===0){
        console.log("No se puede dividir por cero tolete pendejo")
    }else{
        console.log("La division da " + (a/b).toFixed(2))
    }
}else{
    console.log("Operación no válida");
}


// * EJERCICO 2

min= parseInt(prompt("Introduzca el tiempo en minutos") *60);
console.log(" -EJERCICIO 2- los " + min/60 + " minutos introducidos, da un total de " + min + " segundos" )

// * EJERCICIO 3

bas=parseInt(prompt("Digame la base del triangulo "));
alt=parseInt(prompt("Digame la altura del triangulo "));
area = (bas*alt)/2;
console.log(" -EJERCICIO 3- El area del triangulo es " + area );

// * EJERCICIO 4

edad=parseInt(prompt("Diga cuantos años cumplirá en su proximo cumpleaños") *365);
// dias=edad*365;
console.log("-EJERCICIO 4-La edad en dias que tendrá en su próximo cumpleaños será " + edad);

// * EJERCICIO 5

bas=parseInt(prompt("Digame la base del rectangulo ")*2);
alt=parseInt(prompt("Digame la altura del rectangulo ")*2);
console.log("-EJERCICIO 5- El perimetro del rectangulo  es " + (base+altura) );

// * EJERCICIO 6

nomb=prompt("Digame su nombre ");
ape= prompt("Digame su apellido ");
if(isNaN(nomb) && isNaN(ape)){
    console.log("-EJERCICIO 6- El nombre y apellido introducidos son " + nomb + " " + ape);
    }else {
        console.log("No ha introducido un nombre o apellido correctamente")}



// * EJERCICO 7

dobl=parseInt(prompt("Introduzca la cantidad de canastas dobles encestadas"));
trip=parseInt(prompt("Introduzca la cantidad de canastas triples encestadas"));
total= (dobl*2)+(trip*3);
console.log("-EJERCICIO 7- La cantidad de puntos con " + dobl + " dobles y " + trip+ " triples es de " + total + " puntos");

// * EJERCICIO 8

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

//se introduce el precio del producto, despues cantidad de producto y descuento de producto

//* EJERCICIO 10

faren=parseInt(prompt("Diga una temperatura en grados Farenheit"));
console.log("La temperatura de " +faren+" son " + ((faren -32)*5/9 ) + " grados centigrados y " + Math.round(((faren - 32)*5/9+273.5))  + " grados Kelvin")


//* EJERCICIO 11

const desc=0.10
const precio=parseFloat(prompt("introduzca el precio del cuchillo"))
cantprod=parseInt(prompt("Cuantos cuchillos compra?"))
console.log("El precio de " + cantprod + " cuchillos es " + (precio*cantprod) + " sin descuento, y con descuentos es de " + ((precio*cantprod)-((precio*cantprod)*desc)))

// * EJERCICIO 12

tiempo=10000;
vel=0.3;
console.log("El tiempo que tardará al 30% de la velocidad de la luz en recorrer una distancia de 10 mil años luz es " + Math.round((tiempo/vel)) + " años desde el punto de vista del observador");
console.log("El tiempo que tardará al 30% de la velocidad de la luz en recorrer una distancia de 10 mil años luz es "  +  Math.round((33333/(Math.sqrt((Math.pow(90000,2)/(300000)))))) + " años, desde el punto de vista del piloto");

a= parseFloat(prompt("Introduzca un valor ")).toFixed(1)
console.log(a);

// * DECIR SI NUMERO ES PRIMO

b=3;
a=parseInt(prompt("Introduzca un numero entero"));
if ((a%2)=0){
    console.log("No primo ");
}