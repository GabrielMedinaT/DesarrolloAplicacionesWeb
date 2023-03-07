let recetas = [
  {
    ingredientes: ["Papa", "Huevo"],
    horno: false,
    ollaExpress: false,
    microhondas: false,
    receta: [
      "Tortilla de papas",
      "Papas fritas con huevo frito",
      "Tortilla Francesa",
    ],
  },
  {
    ingredientes: ["Papa", "Tomate"],
    horno: false,
    ollaExpress: false,
    microhondas: false,
    receta: [
      "Papas sancochadas",
      "Papas fritas con tomate",
      "Papas sancochadas con tomate",
    ],
  },
  {
    ingredientes: ["Papa", "Arroz"],
    horno: false,
    ollaExpress: false,
    microhondas: false,
    receta: [
      "Papas sancochadas",
      "Papas fritas con arroz",
      "Papas sancochadas con arroz",
    ],
  },
  {
    ingredientes: ["Papa", "Huevo", "Arroz"],
    horno: false,
    ollaExpress: false,
    microhondas: false,
    receta: [
      "Tortilla de papas",
      "Papas fritas con huevo frito",
      "Tortilla Francesa",
      "Arroz con huevo",
    ],
  },
  {
    ingredientes: ["Papa", "Huevo", "Arroz", "Salchichas"],
    horno: false,
    ollaExpress: false,
    microhondas: false,
    receta: [
      "Tortilla de papas",
      "Papas fritas con huevo frito",
      "Tortilla Francesa",
      "Arroz con huevo",
    ],
  },
  {
    ingredientes: ["Papa", "Huevo", "Arroz", "Salchichas", "Tomate"],
    horno: false,
    ollaExpress: false,
    microhondas: false,
    receta: [
      "Tortilla de papas",
      "Papas fritas con huevo frito",
      "Tortilla Francesa",
      "Arroz con huevo",
      "Arroz a la cubana",
      "Papas fritas con tomate",
    ],
  },
];
ingredienteIntroducido = [];
let resultados = [{}];
do {
  ingre = prompt(
    "Introduzca ingrediente puse * para dejar de introducir ingredientes"
  );
  ingredienteIntroducido.push(ingre);
} while (ingre != "*");
ingredienteIntroducido.length = ingredienteIntroducido.length - 1;

console.log(ingredienteIntroducido);

numeIngre = recetas.filter(function (numero) {
  return ingredienteIntroducido.length === numero.ingredientes.length;
});
console.log(numeIngre);
