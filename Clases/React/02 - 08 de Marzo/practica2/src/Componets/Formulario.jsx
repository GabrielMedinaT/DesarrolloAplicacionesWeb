import React from "react";


function Input(props) {
    
    return (
        <><h1>Hola</h1><form className="form">
            <input type="text" placeholder="Usuario" />
            <input type="password" placeholder="Contraseña" />
            <button type="submit">Enviar</button>
        </form></>
    );
}

export default Input;