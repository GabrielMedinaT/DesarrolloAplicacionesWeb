import React from 'react'
import "./Gestion.jsx"
import Gest from './Gest'

const gestion = ({ perro }) => {

    return (
      
        <div className='nombre'>{
            <Gest Key= {perro.id} 
                nombre={perro.nombre}
                raza={perro.raza}
                edad={perro.edad}
                color={perro.color}
                diagnosticos={perro.diagnostico}
            />

             

      }</div>
  )
}

export default gestion