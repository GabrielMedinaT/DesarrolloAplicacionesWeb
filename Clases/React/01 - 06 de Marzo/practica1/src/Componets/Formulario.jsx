import React from 'react'

export const Formulario = () => {
  return (
      <div>
          <form action="" className='Formulario'>
              <label htmlFor="nombre">Nombre</label>
              <input type="text" name="nombre" id="nombre" placeholder="Nombre" />
              <label htmlFor="apellido">Apellido</label>
              <input type="text" name="apellido" id="apellido" placeholder="Apellido" />
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" placeholder="Email" />
              
          </form>
    </div>
  )
}
export default Formulario;
