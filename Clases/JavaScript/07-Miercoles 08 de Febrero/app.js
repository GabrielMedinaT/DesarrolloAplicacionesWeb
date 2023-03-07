personaje = 'Hu Tao';
console.log(personaje);
personaje = personaje.toLowerCase();
console.log(personaje);
personaje = personaje.toUpperCase();
console.log(personaje);
personaje = personaje.trim();
console.log(personaje);

nuevopersonaje = personaje.replace('HU TAO' , 'Shogun Raider');
console.log(nuevopersonaje);
console.log(nuevopersonaje.charAt(5));
varios = 'leche,Atun,huevos,legumbres,coca-cola';
fiestorro = varios.split(',');
console.log(fiestorro);