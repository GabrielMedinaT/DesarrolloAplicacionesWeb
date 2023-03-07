import React from 'react'
import  "./Formulario.css"

export const Formulario = () => {
  return (
      <div className='formu'>
          <form action="" className='Formulario'>
              <label className='intro' htmlFor="nombre">Nombre</label>
              <input className='entrada' type="text" name="nombre" id="nombre" placeholder="Nombre" />
              <label className='intro' htmlFor="apellido">Apellido</label>
              <input className='entrada' type="text" name="apellido" id="apellido" placeholder="Apellido" />
              <label className='intro' htmlFor="email">Email</label>
              <input className='entrada' type="email" name="email" id="email" placeholder="Email" />
              <input className='entrada' type="button" value="Enviar" />
              
          </form>
    </div>
  )
}
export default Formulario;
