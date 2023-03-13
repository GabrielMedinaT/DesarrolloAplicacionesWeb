import React from 'react'
import Autor from './Autor'
import "./Blog.css"


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
    const [post, setPost] = React.useState(posts);
    console.log(setPost)
    console.log(post)
    
  return (
<div>
          <h2 className='large'>Post mas recientes</h2>
			<ul className='largo'>
				{posts.map((post) => {
                    return <Autor key={post.id}
                        autor={"Autor: " + post.autor}
                        fecha={"Fecha: " + post.fecha}
                        mensaje={"Mensaje: " + post.mensaje}
                        post={post} />; 
				})}
			</ul>
		</div>
    
  )
}

export default Blog