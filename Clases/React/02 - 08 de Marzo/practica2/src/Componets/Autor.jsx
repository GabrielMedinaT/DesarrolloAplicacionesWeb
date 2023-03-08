import React from 'react'
import Blog from './Blog'

const Autor = ({autor, fecha, mensaje}) => {
  return (
      <div>
          
          <ul>
              <h3>{autor}{mensaje}{fecha }</h3>
          </ul>  
      </div>
  )
}

export default Autor