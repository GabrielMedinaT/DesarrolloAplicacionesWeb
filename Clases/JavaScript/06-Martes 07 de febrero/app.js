contra = "prueba"
intro = prompt("introduzca contraseña")
cont = 0;
while (contra != intro && cont < 3) {
    cont = cont + 1
    intro = prompt("Contraseña incorrecta introduzca contraseña " + cont)

    console.log(cont)
}
if (cont === 3) {
    console.log("Contraseña incorrecta, demasiados intentos")
}else{console.log("Correcto")}
