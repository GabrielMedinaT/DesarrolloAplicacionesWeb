import "./App.css";
import Datos from "./componets/datos";
import Listado from "./componets/Listado";

function App() {
  return (
    <div className="App">
      <Listado dato={Datos} />
    </div>
  );
}

export default App;
