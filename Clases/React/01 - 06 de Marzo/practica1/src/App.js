import React, { useState, useEffect } from "react";
function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>clicado {count} veces</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
export default Example;
