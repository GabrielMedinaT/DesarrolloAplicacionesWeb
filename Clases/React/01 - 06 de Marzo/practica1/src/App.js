import React, { useState, useEffect } from "react";
function Example() {
  const [count, incrementa] = useState(0);

  return (
    <div>
      <p>Clicado {count} veces</p>
      <button onClick={() => incrementa(count + 1)}>Clica aqui</button>
    </div>
  );
}
export default Example;
