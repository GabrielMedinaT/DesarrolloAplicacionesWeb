import "./App.css";
import { useState } from "react";

function App() {
  const usuarios = [
    { usuario: "Pepe", contraseña: "casa" },
    { usuario: "Ana", contraseña: "parque" },
    { usuario: "Luis", contraseña: "playa" },
    { usuario: "Carmelo", contraseña: "montaña" },
  ];
  const comprueba = [];
  const [usuario, setUsuario] = useState([""]);
  const [pasword, setPasword] = useState([""]);

  const cambioNombre = (e) => {
    e.preventDefault();
    setUsuario(e.target.value);
  };
  const cambioPasword = (e) => {
    e.preventDefault();
    setPasword(e.target.value);
  };
  const nuevoUsuario = (e) => {
    e.preventDefault();
    comprueba.push({ usuario: usuario, contraseña: pasword });
  };
  const compruebaUsuario = (e) => {
    e.preventDefault();
    usuarios.filter((usuario) => {
      if (usuario.usuario.includes(comprueba.usuario)) {
        if (usuario.contraseña.includes(comprueba.contraseña)) {
          alert("Bienvenido");
        } else {
          alert("Contraseña incorrecta");
        }
      } else {
        alert("Usuario incorrecto");
      }
    });
  };

  return (
    <div className="App">
      <form onSubmit={nuevoUsuario}>
        <label>Usuario</label>
        <input type="text" onChange={cambioNombre} value={usuario} />
        <label>Contraseña</label>
        <input type="text" onChange={cambioPasword} value={pasword} />
        <button type="submit" onClick={compruebaUsuario}>
          Enviar
        </button>
      </form>
    </div>
  );
}

export default App;
