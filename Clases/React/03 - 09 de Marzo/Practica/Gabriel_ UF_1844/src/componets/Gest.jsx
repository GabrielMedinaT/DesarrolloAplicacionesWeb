import React from 'react'

const Gest = ({nombre, raza, edad, color, }) => {
  return (
      <div className='gest'>
          <h1>{"Nombre: " + nombre} {"Raza: " + raza} { "Edad: " + edad} {"Color: " + color}</h1>

    </div>
  )
}

export default Gest