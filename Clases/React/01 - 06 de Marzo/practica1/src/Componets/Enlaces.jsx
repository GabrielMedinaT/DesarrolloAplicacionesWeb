import React from 'react'

export const Enlaces = () => {
    const enlaces=["https://nodejs.org/en/", "https://slides.com/", "https.google.es", "https://lenguajejs.com/"] 
    return (   
        
        <div>
            <ul>
                <li><a href={enlaces[0]}>nodeJs</a></li>
                <li><a href={enlaces[1]}>Slides</a></li>
                <li><a href={enlaces[2]}>Google</a></li>
                <li><a href={enlaces[3]}>Wikipedia</a></li>
            </ul>
          

          
    </div>
  )
}
