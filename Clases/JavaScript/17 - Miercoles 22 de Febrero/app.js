const viajeTemp = function mensaje() {
  return console.log("mesaje desde el futuro");
};
viajeTemp();
const viajetemp2 = (mensaje) => {
  return console.log(mensaje);
};
viajetemp2("hola desde el pasado");

const viajetemp3 = (mensaje) => console.log(mensaje);

const Lint = (ir) => (lg = Math.floor(Math.log10(Math.abs(ir)) + 1));

console.log(Lint(323232323232323));

const cervezas = ["Cruz Campo", "Mahou", "Tropical", "Alhambra", "Judas"];

cervezas.map((producto) => {
  return console.log("La mejor cerveza del mundo es la " + producto);
});
