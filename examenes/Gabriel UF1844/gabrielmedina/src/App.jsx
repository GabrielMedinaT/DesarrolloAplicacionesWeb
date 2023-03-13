import "./App.css";
import Datos from "./componets/datos";
import Listado from "./componets/Listado";

function App() {
    let estado =prompt("Introduce el estado de los proyectos que quieres ver: desarrollo, test, launch o producción");
  return <div className="App">    
        <Listado dato={Datos.filter((proyecto) => proyecto.fase === estado)} />
       </div>;
}
export default App;
