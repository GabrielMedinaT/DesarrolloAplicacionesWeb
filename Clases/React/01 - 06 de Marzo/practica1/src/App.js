import "./App.css";
import "./Componets/Formulario";
import Formulario from "./Componets/Formulario";
import { Enlaces } from "./Componets/Enlaces";
import About from "./Componets/About";
import { Comprobar } from "./Componets/Comprobar";

function App() {
  const mensaje = "Hola Mundo";
  const mensaje2 = "Otra prueba dos";
  return (
    <div className="App">
      <h1 className="h1pr">Practica 1</h1>
      <h2 className="h2pr">Esta es la practica 1 el h2</h2>
      <p>Este es un parrafo</p>
      <ul className="lista1">
        Lista
        <li>Elemento 1</li>
        <li>Elemento 2</li>
        <li>Elemento 3</li>
        <li>Elemento 4</li>
      </ul>
      <Formulario />
      <Comprobar />
      <Enlaces />
      <About mensaje={mensaje} mensaje2={mensaje2} />
    </div>
  );
}

export default App;
