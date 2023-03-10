import React from 'react'


const ElementoListado = ({ estados }) => {
  console.log(estados)
  return (

    <div>
      <h1>Coder= {estados.coder}</h1>
      <h2>{estados.proyecto}</h2>
      <h3 key={estados.id}>
         {estados.fase}
      </h3>
      </div>
  )
}

export default ElementoListado