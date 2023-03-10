import "./App.css";
import Datos from "./componets/datos";
import Listado from "./componets/Listado";

function App() {
  let estado = "test";
  return (
    <div className="App">
      return(
      <Datos estado={Datos.filter((est) => est.estado === estado)} />)
    </div>
  );
}

export default App;
