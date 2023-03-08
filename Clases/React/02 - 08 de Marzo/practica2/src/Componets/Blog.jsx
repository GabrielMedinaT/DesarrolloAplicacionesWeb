import React from 'react'

const Blog = (props) => {
    const posts = [{
        id: 1,
        autor: "Manolo ",
        fecha: "22/05/2022 ",
        mensaje: "Hola soy Manolo "
    },
        {
            id: 2,
            autor: "Ana Maria ",
            fecha: "23/05/2022 ",
            mensaje: "Clatu Verata Nitte .... O era Nittu? "
        },
        {
            id: 3,
            autor: "Luis ",
            fecha: "Fecha estelar 202556745.2 ",
            mensaje: "Velocidad de curvatura 9 "
        }];
  return (
      <div>
          <h1>Post mas recientes</h1>
          <ul>
              <li>Autor:{posts[0].autor}   {posts[0].fecha}{ posts[0].mensaje}</li>
          </ul> 
          <h1>{props.posts[0]}</h1>
    </div>
  )
}

export default Blog