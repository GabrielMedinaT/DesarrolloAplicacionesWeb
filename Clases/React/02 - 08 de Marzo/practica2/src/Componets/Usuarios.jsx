import React from 'react'
import UsuariosUnicos from './UsuariosUnicos'
import "./Usuarios.css"


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
        <div className='listado'>
            <ul className='listaUnica'>
                <UsuariosUnicos users=
                    { "Nombre: " +  users[0].nombre + " Nick: " + users[0].nikname + " " + users[0].correo 
                    + " Nombre: " + users[1].nombre + " Nick: " + users[1].nikname + " " + users[1].correo 
                    + " Nombre: " + users[2].nombre + " Nick: " + users[2].nikname + " " + users[2].correo
                } />
            </ul>
        </div>
  )
}

export default Usuarios