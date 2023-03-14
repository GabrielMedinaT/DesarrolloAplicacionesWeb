import "./App.css";
import { useState } from "react";
import Card from "./Componets/Card.jsx";
import Denegado from "./Componets/Denegado";

function App() {
  function pasar() {
    if (pasa) {
      return <Card />;
    } else {
      return <Denegado />;
    }
  }
  let pasa = false;
  const usuarios = [
    { usuario: "Pepe", pasword: "casa" },
    { usuario: "Ana", pasword: "parque" },
    { usuario: "Luis", pasword: "playa" },
    { usuario: "Carmelo", pasword: "montaña" },
  ];

  const [usuario, setUsuario] = useState("");
  const [pasword, setPasword] = useState("");

  const cambioNombre = (e) => {
    e.preventDefault();
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
        pasa = true;
        return pasar();
      } else {
        alert("Contraseña incorrecta");
        pasa = false;
        return <Denegado />;
      }
    } else {
      alert("Usuario incorrecto");
      pasa = false;
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
      {pasar()}
    </div>
  );
}

export default App;
