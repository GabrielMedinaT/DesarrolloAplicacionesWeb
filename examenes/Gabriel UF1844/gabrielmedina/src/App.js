import "./App.css";
import Datos from "./componets/datos";
import Listado from "./componets/Listado";

function App() {
  let estado = "desarrollo";

  return (
    <div className="App">
      <Listado estados={Datos.filter((est) => est.estado === estado)} />
    </div>
  );
}

export default App;
