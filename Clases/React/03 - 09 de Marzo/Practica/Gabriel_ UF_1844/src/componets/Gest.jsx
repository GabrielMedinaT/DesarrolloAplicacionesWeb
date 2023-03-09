import React from 'react'

const Gest = ({ nombre, raza, edad, color, diagnosticos }) => {
console.log(diagnosticos)



    return (
      
      <div className='gest'>
        
        <h1>{"Nombre: " + nombre} {"Raza: " + raza} {"Edad: " + edad} {"Color: " + color}{ " Diagnostico " + diagnosticos }</h1>

    </div>
  )
}

export default Gest