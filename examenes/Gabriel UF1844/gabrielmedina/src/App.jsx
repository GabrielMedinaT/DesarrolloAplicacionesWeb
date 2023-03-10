import "./App.css";
import Datos from "./componets/datos";
import Listado from "./componets/Listado";

function App() {



  function faseCondicional() {
    let estado = "launch";
    return (
      // <><input type="text" name="" id="" value={estado}></input>
      //   <input type="button" value="buscar" />
        <Listado dato={Datos.filter((proyecto) => proyecto.fase === estado)} />
      
    );
  }

  return <div className="App">{faseCondicional()} </div>;
}

export default App;
