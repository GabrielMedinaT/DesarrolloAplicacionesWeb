import "./App.css";
import Gestion from "./componets/Gestion";
import Gest from "./componets/Gest";

function App() {
  const perros = [
    { id: 1, nombre: "Firulais", edad: 3, raza: "Nisu", color: "variado" },
    { id: 2, nombre: "Rex", edad: 3, raza: "Pastor Aleman", color: "café" },
    {
      id: 3,
      nombre: "Lassie",
      edad: 5,
      raza: "Collie",
      color: "amarillento",
    },
    {
      id: 4,
      nombre: "Scooby",
      edad: 4,
      raza: "Gran Danes",
      color: "marron",
    },
    {
      id: 5,
      nombre: "Dante",
      edad: 8,
      raza: "Pitbull",
      color: "negro",
    },
  ];
  return (
    <div className="App">
      {perros.map((perro) => {
        return <Gestion perro={perro} />;
      })}
      <Gest />
    </div>
  );
}

export default App;
