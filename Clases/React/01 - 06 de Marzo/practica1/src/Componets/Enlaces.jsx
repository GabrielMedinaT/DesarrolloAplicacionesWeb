import React from 'react'
import "./Enlaces.css"

export const Enlaces = () => {
    const enlaces=["https://nodejs.org/en/", "https://slides.com/", "https.google.es", "https://lenguajejs.com/"] 
    return (   
        
        <div>
            <ul className='enl'>
                <li className='enl'><a href={enlaces[0]}>nodeJs</a></li>
                <li className='enl'><a href={enlaces[1]}>Slides</a></li>
                <li className='enl'><a href={enlaces[2]}>Google</a></li>
                <li className='enl'><a href={enlaces[3]}>Wikipedia</a></li>
            </ul>
          

          
    </div>
  )
}
