import React from 'react'
import ElementoListado from './ElementoListado'


const Listado = ({ estados }) => {
console.log(estados)
  return (
    <div>
        <ul>
      {estados.map((estados) => {
            return <ElementoListado key={estados.id} dato={estados} />
      })}
        </ul>
    </div>
  )
}

export default Listado