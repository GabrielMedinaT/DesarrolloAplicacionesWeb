//* GESTION DE ERROR TRY CATCH

//try {} catch (error) {console.log(error.message)}
try {
  autenticarUsuario();
} catch (error) {
  console.log(error.message);
}

a = -10;
b = Math.sqrt(a);

console.log(b);

// async.. away

const listaDeAutorizaciones = () => {
  return new Promise((resolve, reject) => {
    const error = false;
    setTimeout(() => {
      if (!error) {
        resolve("OK");
      } else {
        reject("Error");
      }
    }, 3000);
  });
};

function procesar() {
  try {
    listaDeAutorizacione()
      .then((datos) => console.log(datos))
      .catch((err) => console.log(err));
  } catch (error) {
    console.log(error.message);
  }
}
procesar();
listaDeAutorizacione()
  .then((datos) => console.log(datos))
  .catch((err) => console.log(err));

console.log("hola ");
