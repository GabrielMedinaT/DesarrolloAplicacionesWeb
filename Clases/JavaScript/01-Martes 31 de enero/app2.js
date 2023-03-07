// let a=25;
// let b=36;
// console.log(b);
// console.log(a);
// suma= a+b;
// console.log("La suma es " + suma);
// nombre="Yo";
// console.log(nombre);
// console.log(suma);
// console.log(Math.PI);
numero=prompt("Numero por favor");
numeroEnt=parseInt(numero);

a="Eres menor de edad";
b="Eres joven";
c="Estas en la edad de oro"
d="Cuidate"

si="Puedes pasar";
no="No puedes pasar";


if(numeroEnt<18){
    console.log(a)
}else if(numeroEnt>18 & numeroEnt<45){
    console.log(b)
}else if (numeroEnt>45 & numeroEnt<80){
    console.log(c)
}else{
    console.log(d)
}

entrar=null;
if (numeroEnt<18) {
    entrar=false;
    console.log(no)
}else{
    entrar=true;
    console.log(si)
}

console.log(entrar)

// if(entrar=true){
//     console.log(si)
// }else {
//     console.log(no)
// }


