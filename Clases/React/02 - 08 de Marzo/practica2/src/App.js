import "./App.css";
import Blog from "./Componets/Blog";
import Usuarios from "./Componets/Usuarios";

let entrada = false;
const num = Math.round(Math.random() * 1);
if (num === 0) {
  entrada = true;
} else entrada = false;

function App() {
  return (
    <div className="entrada">
      {entrada ? (
        <div className="blog">
          <Blog /> <Usuarios />{" "}
        </div>
      ) : (
        (entrada = true)
      )}
    </div>
  );
}

export default App;
