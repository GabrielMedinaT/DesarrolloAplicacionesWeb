import React from 'react'
import "./Autor.css"


const Autor = ({autor, mensaje, fecha}) => {
    
  return (
      <div className='aux'>
          
          <ul className='autor'>
              <h3>{autor}{mensaje}{fecha}</h3>
          </ul>  
      </div>
  )
}

export default Autor