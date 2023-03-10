import "./App.css";
import Datos from "./componets/datos";
import Listado from "./componets/Listado";

function App() {
  function faseCondicional() {
    let estado = "launch";
    return (
      <Listado dato={Datos.filter((proyecto) => proyecto.fase === "launch")} />
    );
  }

  return <div className="App">{faseCondicional()} </div>;
}

export default App;
