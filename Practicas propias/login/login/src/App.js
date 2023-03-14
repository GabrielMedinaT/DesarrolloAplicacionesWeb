import "./App.css";
import { useState } from "react";

function App() {
  const usuarios = [
    { usuario: "Pepe", pasword: "casa" },
    { usuario: "Ana", pasword: "parque" },
    { usuario: "Luis", pasword: "playa" },
    { usuario: "Carmelo", pasword: "montaña" },
  ];

  const [usuario, setUsuario] = useState("");
  const [pasword, setPasword] = useState("");
  const [error, setError] = useState(false);

  const cambioNombre = (e) => {
    e.preventDefault();
    setError(false);
    setUsuario(e.target.value);
  };
  const cambioPasword = (e) => {
    e.preventDefault();
    setPasword(e.target.value);
  };
  const compruebaUsuario = (e) => {
    e.preventDefault();
    const busca = usuarios.find((u) => u.usuario === usuario);
    if (busca) {
      if (busca.pasword === pasword) {
        alert("Bienvenido");
      } else {
        alert("Contraseña incorrecta");
      }
    } else {
      alert("Usuario incorrecto");
    }
    setUsuario("");
    setPasword("");
  };

  return (
    <div className="App">
      <form onSubmit={compruebaUsuario}>
        <label>Usuario</label>
        <input type="text" onChange={cambioNombre} value={usuario} />
        <label>Contraseña</label>
        <input type="password" onChange={cambioPasword} value={pasword} />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
