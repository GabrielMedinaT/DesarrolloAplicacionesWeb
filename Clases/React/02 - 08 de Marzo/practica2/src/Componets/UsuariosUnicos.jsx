import React from 'react'
import "./UsuariosUnicos.css"


const UsuariosUnicos = ({ nombre,nikname, correo  }) => {

  return (
      <div className='nick'>
              <h3>{nombre}</h3>
              <h3>{nikname}</h3>
              <h3>{correo }</h3>
          
    </div>
  )
}

export default UsuariosUnicos