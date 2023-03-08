import React from 'react'
import UsuariosUnicos from './UsuariosUnicos'


const Usuarios = () => {
    const users = [{
        id: 1,
        nombre: "Manolo",
        correo: "manologarcia@gmail.com",
        nikname: "ManoloGarcia",
    },
    {
        id: 1,
        nombre: "Paul Atreides",
        correo: "Paulatreides@arrakis.com",
        nikname: "PrincipeArrakis",
    },{
        id: 1,
        nombre: "Bender",
        correo: "benderdobladorrodriguez@gmail.com",
        nikname: "Muerteatodosloshumanos",
    }]
    return (
        <div>
            <ul>
                <li>{users[0].nikname}</li>
            </ul>
        </div>
  )
}

export default Usuarios