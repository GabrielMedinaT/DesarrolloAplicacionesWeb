import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Example() {
  const [count, incrementa] = useState(0);
  const [ratonEncima, setRatonEncima] = useState(false);
  const nuevoObjeto = {
    id: uuidv4(),
    nombre: "Juan",
  };
  console.log(nuevoObjeto.id);
  const incrementar = () => {
    incrementa(count + 1);
  };
  const gestionRatonSobre = () => {
    setRatonEncima(true);
  };
  const gestionRatonFuera = () => {
    setRatonEncima(false);
  };

  return (
    <div>
      <p>Clicado {count} veces</p>
      <button
        style={{ backgroundColor: ratonEncima ? "red" : "blue" }}
        onClick={incrementar}
        onMouseOver={gestionRatonFuera}
        onMouseOut={gestionRatonSobre}
      >
        Clica aqui
      </button>
    </div>
  );
}
export default Example;
