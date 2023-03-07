numero=parseInt(prompt("Su edad por favor"));
a="Eres menor de edad";
b="Eres joven";
c="Estas en la edad de oro"
d="Cuidate"
si="Puedes pasar";
no="No puedes pasar";
entrar=true;


if(numero<18){
    console.log(a)
    entrar=false
}else if(numero>=18 & numero<45){
    console.log(b)
}else if (numero>=45 & numero<80){
    console.log(c)
}else{
    console.log(d)
}

if(entrar===true){
    console.log(si)
}else{
    console.log(no)
}


// * Operador logico NOT que es negacion


// haEntrado=true;

// haEntrado= !haEntrado

// console.log(haEntrado)

// NaN no es un numero
// isNaN(x)  (No es x un numero)

// x="pepe luis"
// console.log(isNaN(x))

// Operadores de comparacion 
// > < >= <= === !== 

g=true
p=true

if(g | p){
    console.log("si")
}else console.log("no")

// * switch.. case

valor=3
switch(valor){
    case 1:
        console.log("uno");
        break;
    case 2:
        console.log("dos");
        break;
    case 3:
        console.log("tres");
        break;
    case 4:
        console.log("cuatro");
        break;
    default:
        console.log("Error");
        break;
    }

// * switch.. case

let fluzo = Math.random()*10+1;
fluzo = fluzo.toFixed(2);

switch(true) {
    case fluzo < 5:
        console.log("Esta por debajo de 5");
        break;
    case fluzo > 5:
        console.log("Esta por encima de 5");
}


// *Operador ternario
// * condicion (a=9)? "nueve": "No nueve"

a=4;
a>=5? console.log("Mayor que 5") : console.log("Menor que 5")