import React from 'react'
import "./Enlaces.css"

export const Enlaces = () => {
    const enlaces=["https://nodejs.org/en/", "https://slides.com/", "https://google.es", "https://lenguajejs.com/"] 
    return (   
        
        <div>
            <ul className='enla'>
                <li className='enl'><a href={enlaces[0]}><div className='enl'>nodeJs</div> </a></li>
                <li className='enl'><a href={enlaces[1]}><div className='enl'>Slides</div></a></li>
                <li className='enl'><a href={enlaces[2]}><div className='enl'>Google</div></a></li>
                <li className='enl'><a href={enlaces[3]}><div className='enl'>JavaScript</div></a></li>
            </ul>
                    
    </div>
  )
}
