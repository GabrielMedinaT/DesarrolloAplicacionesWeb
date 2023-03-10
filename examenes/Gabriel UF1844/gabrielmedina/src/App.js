import "./App.css";
import Datos from "./componets/datos";
import Listado from "./componets/Listado";

function App() {
  let estado = "desarrollo";
  console.log(Datos);
  return (
    <div className="App">
      {Datos.filter((item) => item.estado === estado).map((item) => (
        <Listado key={item.id} dato={item} />
      ))}
    </div>
  );
}

export default App;
