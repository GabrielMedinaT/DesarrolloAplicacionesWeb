//---------------------EJERCICIO 1---------------------------------------------
// 1.	Crear una nueva lista que será un fusión de las dos listas iniciales y 
// que contenga el nombre del superhéroe y la editorial a la que pertenece como 
// dos elementos de dicha lista, de la forma nombre, editorial, nombre, editorial,....)
// Por ej. [‘Superman’, ‘DC Comics’, Capitán América’.......]
// Mostrar el resultado en consola.

superHeroes = ['Superman', 'Capitán América', 'Hellboy', 'Invincible', 'Shadowman'];
editoriales = ['DC Comics', 'Marvel', 'Dark Horse', 'Skybound', 'Valiant'];
heroesConEditorial = [];
for (i = 0; i < 5; i++) {
    heroesConEditorial.push(superHeroes[i]);
    heroesConEditorial.push(editoriales[i]);
}
console.log(heroesConEditorial);
//---------------------EJERCICIO 2---------------------------------------------
// 2.Comprobar que en la nueva lista existe un superhéroe
// cualquiera(pedir el nombre por consola(prompt)) y eliminar
// tanto el superhéroe como la editorial(por ejemplo Superman, DC Comics),
// mediante la localización de su ubicación en la lista.

solicitado=prompt("Indique un nombre de superheroe a eliminar de la lista mostrada");
solicitado = solicitado.toLowerCase();
auxiliar = "";
contador = 0;
for (i = 0; i < heroesConEditorial.length; i++){
    auxiliar = heroesConEditorial[i];
    auxiliar = auxiliar.toLowerCase();
    if (solicitado === auxiliar) {
        contador = i;
        break;
    }    
}
console.log(contador)
heroesConEditorial.splice(contador , 2);
console.log(heroesConEditorial);
//---------------------EJERCICIO 3---------------------------------------------
// 3.Modificar el par de Invincible, cambiando la editorial a FD Comics (localizando su ubicación)
posicion = heroesConEditorial.indexOf("Invincible");
console.log(posicion)
heroesConEditorial.splice(posicion +1,1, "FD Comics");
console.log(heroesConEditorial);

//---------------------EJERCICIO 4---------------------------------------------
// 4.	Pedir al usuario que introduzca un superhéroe nuevo y su editorial,
//     e insertarlo después de Dark Horse(localizado)

ejer4 = heroesConEditorial.indexOf("Dark Horse");
nuevoSuper = prompt("Diga un nuevo superheroe");
nuevaEdito = prompt("Diga la editorial ")
heroesConEditorial.splice(ejer4 + 1, 0, nuevoSuper);
heroesConEditorial.splice(ejer4 +2, 0, nuevaEdito);
console.log(heroesConEditorial);