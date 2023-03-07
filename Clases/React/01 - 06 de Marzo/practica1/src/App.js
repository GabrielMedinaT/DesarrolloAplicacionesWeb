import "./App.css";
import "./Componets/Formulario";
import Formulario from "./Componets/Formulario";
import { Enlaces } from "./Componets/Enlaces";

function App() {
  return (
    <div className="App">
      <h1>Practica 1</h1>
      <h2>Esta es la practica 1 el h2</h2>
      <p>Este es un parrafo</p>
      <ul>
        Lista
        <li>Elemento 1</li>
        <li>Elemento 2</li>
        <li>Elemento 3</li>
        <li>Elemento 4</li>
      </ul>
      <Formulario />
      <Enlaces />
    </div>
  );
}

export default App;
