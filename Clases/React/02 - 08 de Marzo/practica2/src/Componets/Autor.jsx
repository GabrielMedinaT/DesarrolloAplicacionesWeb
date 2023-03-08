import React from 'react'
import Blog from './Blog'

const Autor = ({autor, fecha, mensaje}) => {
  return (
      <div>
          <h3>Autor</h3>
          <ul>
              <h3>Autor: {autor} Mensaje:{mensaje} Fecha:{fecha }</h3>
          </ul>  
      </div>
  )
}

export default Autor