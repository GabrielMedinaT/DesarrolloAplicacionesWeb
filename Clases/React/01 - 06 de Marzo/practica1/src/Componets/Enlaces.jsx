import React from 'react'
import "./Enlaces.css"

export const Enlaces = () => {
    const enlaces = ["https://nodejs.org/en/", "https://slides.com/", "https://google.es", "https://lenguajejs.com/", "https://www.w3schools.com/js/default.asp"] 
    //consulta a base de datos
    return (   
        
        <div>
            <ul className='enla'>
                <li className='enl'><a href={enlaces[0]}><div className='enl'>nodeJs</div> </a></li>
                <li className='enl'><a href={enlaces[1]}><div className='enl'>Slides</div></a></li>
                <li className='enl'><a href={enlaces[2]}><div className='enl'>Google</div></a></li>
                <li className='enl'><a href={enlaces[3]}><div className='enl'>JavaScript</div></a></li>
            </ul>
            <ul>
                {enlaces.map((enlace, index) => (
                    <ul>
                        <li><a href={enlace[index]}>Enlace</a></li>
                    </ul>
                ))}
            </ul> 
            
    </div>
  )
}
