import React from 'react'
import Listado from './Listado'

const ElementoListado = ({dato}) => {
  return (

    <div>
      <h1>{dato.coder}</h1>
      <h3 key={dato.id}>
         {dato.fase}
      </h3>
      </div>
  )
}

export default ElementoListado