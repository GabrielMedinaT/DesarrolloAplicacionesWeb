import React from 'react'
import Autor from './Autor'


const Blog = () => {
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
			<h2 className='large'>Listado de Usuarios</h2>
			<ul>
				{posts.map((posts) => {
                    return <Autor key={posts.id}
                        autor={posts.autor}
                        fecha={posts.fecha}
                        mensaje={posts.mensaje} />; 
				})}
			</ul>
		</div>
    
  )
}

export default Blog