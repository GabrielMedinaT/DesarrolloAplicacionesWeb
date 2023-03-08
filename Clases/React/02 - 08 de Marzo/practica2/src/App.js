import "./App.css";
import Autor from "./Componets/Autor";
import Blog from "./Componets/Blog";
import Usuarios from "./Componets/Usuarios";
import UsuariosUnicos from "./Componets/UsuariosUnicos";

function App() {
  return (
    <div className="App">
      <header className="App-header">Blog Blanetario</header>
      <Blog />
      <Autor />
      <Usuarios />
      <UsuariosUnicos />
    </div>
  );
}

export default App;
