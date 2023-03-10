import React from 'react'
import ElementoListado from './ElementoListado'


const Listado = ({ dato }) => {

  return (
    <div>
        <ul>
      {dato.map((dato) => {
            return <ElementoListado key={dato.id} dato={dato} />
      })}
        </ul>
    </div>
  )
}

export default Listado