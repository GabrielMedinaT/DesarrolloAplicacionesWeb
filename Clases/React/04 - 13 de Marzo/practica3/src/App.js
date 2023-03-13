import "./App.css";
import Formulario from "./componets/Formulario";
import t800 from "./images/t800.jpg";

function App() {
  return (
    <div className="container">
      {<img src={t800} alt="t800" height={300} />}
      <Formulario />
    </div>
  );
}
export default App;
