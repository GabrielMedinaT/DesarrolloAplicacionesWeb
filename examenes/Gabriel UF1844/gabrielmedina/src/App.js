import "./App.css";
import Datos from "./componets/datos";
import Listado from "./componets/Listado";

function App() {
  let estado="launch"
  return (
    <div className="App">
      return <Listado dato = Dato.filter((est) => {
         est.estado===estado
      }) 
      />
    </div>
  );
}

export default App;
