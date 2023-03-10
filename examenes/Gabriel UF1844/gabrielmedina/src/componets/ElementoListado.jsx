import React from 'react'


const ElementoListado = ({dato}) => {
  return (

    <div>
      <h1>Coder= {dato.coder}</h1>
      <h2>{dato.proyecto}</h2>
      <h3 key={dato.id}>
         {dato.fase}
      </h3>
      </div>
  )
}

export default ElementoListado