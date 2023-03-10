import React from 'react'
import ElementoListado from './ElementoListado'


const Listado = ({ dato }) => {
console.log(dato)
  return (
    <div>
        <ul>
      {dato.map((estados) => {
            return <ElementoListado key={dato.id} dato={estados} />
      })}
        </ul>
    </div>
  )
}

export default Listado