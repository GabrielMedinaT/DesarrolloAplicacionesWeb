// 1
superHeroes = [
	'Superman',
	'Capitán América',
	'Hellboy',
	'Invincible',
	'Shadowman',
];
editoriales = ['DC Comics', 'Marvel', 'Dark Horse', 'Skybound', 'Valiant'];

listaComics = [];
for (let i = 0; i < superHeroes.length; i++) {
	listaComics.push(superHeroes[i]);
	listaComics.push(editoriales[i]);
}

console.table(listaComics);

// 2
superHeroe = prompt('Nombre de superhéroe? ');
listaIncluye = listaComics.includes(superHeroe);
if (listaIncluye) {
	posicionSuper = listaComics.indexOf(superHeroe);
	listaComics.splice(posicionSuper, 2);
	console.log(listaComics);
} else {
	console.log('Superhéroe no incluido en la lista');
}
console.table(listaComics);

// 3
posicionInv = listaComics.indexOf('Invincible');
listaComics.splice(posicionInv + 1, 1, 'FD Comics');
console.table(listaComics);

// 4
nuevoSuperHeroe = prompt('Nombre del superhéroe a insertar');
nuevaEditorial = prompt('Nombre de la editorial');
posicionSuper = listaComics.indexOf('Dark Horse');
listaComics.splice(posicionSuper + 1, 0, nuevoSuperHeroe, nuevaEditorial);
console.table(listaComics);
