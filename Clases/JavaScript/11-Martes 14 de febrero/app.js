// var resto = 0;
// var letra = "";
// do {
//   var dni = prompt("Introduce tu dni");
//   if (Number(dni) == dni) {
//     dni = Number(dni);
//     if (dni >= 0 && dni <= 99999999) {
//       resto = dni % 23;
//       switch (resto) {
//         case 0:
//           letra = "T";
//           break;
//         case 1:
//           letra = "R";
//           break;
//         case 2:
//           letra = "W";
//           break;
//         case 3:
//           letra = "A";
//           break;
//         case 4:
//           letra = "G";
//           break;
//         case 5:
//           letra = "M";
//           break;
//         case 6:
//           letra = "Y";
//           break;
//         case 7:
//           letra = "F";
//           break;
//         case 8:
//           letra = "P";
//           break;
//         case 9:
//           letra = "D";
//           break;
//         case 10:
//           letra = "X";
//           break;
//         case 11:
//           letra = "B";
//           break;
//         case 12:
//           letra = "N";
//           break;
//         case 13:
//           letra = "J";
//           break;
//         case 14:
//           letra = "Z";
//           break;
//         case 15:
//           letra = "S";
//           break;
//         case 16:
//           letra = "Q";
//           break;
//         case 17:
//           letra = "V";
//           break;
//         case 18:
//           letra = "H";
//           break;
//         case 19:
//           letra = "L";
//           break;
//         case 20:
//           letra = "C";
//           break;
//         case 21:
//           letra = "K";
//           break;
//         case 22:
//           letra = "E";
//           break;
//         default:
//           alert("Numero erroneo");
//       }
//     }
//     alert("Numero: " + dni + ", Letra: " + letra);
//   } else {
//     if (dni != undefined) {
//       alert(dni + " No es un dni correcto");
//     }
//   }
// } while (dni != undefined);

color = {
  hue: 123,
  saturacion: 255,
  value: 200,
};
for (valor in color) {
  console.log(valor, color[valor]);
}
