import React from 'react'
import "./Gestion.jsx"
import Gest from './Gest'

const gestion = ({ perro }) => {
              console.log(perro)
    return (
      
        <div className='nombre'>{
            <Gest key= {perro.id} 
                nombre={perro.nombre}
                raza={perro.raza}
                edad={perro.edad}
                color={perro.color}
            />
            

      }</div>
  )
}

export default gestion