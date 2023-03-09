import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Example() {
  const [count, incrementa] = useState(0);
  const nuevoObjeto = {
    id: uuidv4(),
    nombre: "Juan",
  };
  console.log(nuevoObjeto);

  return (
    <div>
      <p>Clicado {count} veces</p>
      <button onClick={() => incrementa(count + 1)}>Clica aqui</button>
    </div>
  );
}
export default Example;
