import React from 'react'
import { useState } from 'react'
import {v4 as uuidv4} from 'uuid'

const Formulario = () => {
  const [usuario, setUsuario] = useState([{
    id: uuidv4(),
    nombre: "Pepe",
    email: "pepe@pepe",
    password: "sdfsdf",
  }])
  const [nuevoNombre, setNuevoNombre] = useState([''])
  const [nuevoEmail, setNuevoEmail] = useState([''])
  const [nuevoPassword, setNuevoPassword] = useState([''])
  const [error, setError] = useState(false)//para el error

  const gestorCambioNombre = (event) => {
    setNuevoNombre(event.target.value)
  }
  const gestorCambioEmail = (event) => {
    setNuevoEmail(event.target.value)
  }
  const gestorCambioPassword = (event) => {
    setNuevoPassword(event.target.value)
  }
  const gestSubmit = (e) => {
    e.preventDefault();
    setError(false)
    if ( nuevoNombre.trim() === '' || nuevoEmail.trim() === '' || nuevoPassword.trim() === '') {
      setError(true)
      return
    }
      setUsuario([...usuario, {
    id: uuidv4(),
    nombre: nuevoNombre,
    email: nuevoEmail,
    password: nuevoPassword
      }])
    setNuevoNombre('');
    setNuevoEmail('');
    setNuevoPassword('');
  }
  console.log(nuevoNombre, nuevoEmail, nuevoPassword)
  return (
    <div><h1>Hola</h1>
      {error? <h3>Debes completar todos los campos</h3> : null}
      <form onSubmit={gestSubmit} action="">
        <label htmlFor="nombre">Nombre </label>
        <input
          type="text"
          onChange={gestorCambioNombre}
          className="'form-tex"
          id="nombre"
          placeholder="Nombre"
          value={nuevoNombre}

        />
        <label htmlFor="email">email </label>
        <input
          type="email"
          onChange={gestorCambioEmail}
          className="'form-tex"
          id="email"
          placeholder="email"
          value={nuevoEmail}
        />
        <label htmlFor="password">Contraseña </label>
        <input
          type="password"
          onChange={gestorCambioPassword}
          className="'form-tex"
          id="password"
          placeholder="Contraseña"
          value={nuevoPassword}
        />
        <button className="btn btn-primary"  type="submit">
          Enviar
        </button>
      </form></div>
  )
}

export default Formulario