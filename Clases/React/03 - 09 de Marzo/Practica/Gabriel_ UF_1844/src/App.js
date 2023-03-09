import "./App.css";
import Gestion from "./componets/Gestion";

function App() {
  const perros = [
    {
      id: 1,
      nombre: "Firulais",
      edad: 5,
      raza: "Nisu",
      color: "variado",
      diagnostico: "Sarna",
    },
    {
      id: 2,
      nombre: "Rex",
      edad: 6,
      raza: "Pastor Aleman",
      color: "café",
      diagnostico: "Rabia",
    },
    {
      id: 3,
      nombre: "Lassie",
      edad: 5,
      raza: "Collie",
      color: "amarillento",
      diagnostico: "Parvovirus",
    },
    {
      id: 4,
      nombre: "Scooby",
      edad: 4,
      raza: "Gran Danes",
      color: "marron",
      diagnostico: "Sano",
    },
    {
      id: 5,
      nombre: "Dante",
      edad: 5,
      raza: "Pitbull",
      color: "negro",
      diagnostico: "Sano",
    },
  ];
  perros.map((filtro) => {
    return filtro.edad >= 5
      ? (filtro.edad = "Adulto")
      : (filtro.edad = " Cachorro");
  });
  return (
    <div className="App">
      {perros.map((perro) => {
        return <Gestion perro={perro} />;
      })}
    </div>
  );
}

export default App;
