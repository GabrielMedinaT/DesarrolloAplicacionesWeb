import React from 'react'
import ElementoListado from './ElementoListado'


const Listado = ({ dato }) => {

  return (
    <div className='listota'>
        <ul className='lista'>
      {dato.map((dato) => {
            return <ElementoListado key={dato.id} dato={dato} />
      })}
        </ul>
    </div>
  )
}

export default Listado