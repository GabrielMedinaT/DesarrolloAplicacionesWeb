const lengthInt = function (introducir) {
  cantidad = Math.floor(Math.log10(Math.abs(introducir)) + 1);
  return cantidad;
};

numero = parseInt(prompt("Digame un numero "));
console.log(
  "El numero es " + numero + " y tiene " + lengthInt(numero) + " digitos"
);
a = 123;
b = lengthInt(a);
console.log(b);
export { lengthInt };
