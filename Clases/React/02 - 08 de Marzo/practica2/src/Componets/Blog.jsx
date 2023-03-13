import "./Blog.css"
import Autor from "./Autor"
import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'


const Blog = () => {
    const  [posts, setPosts] = useState ([{
        id: uuidv4(),
        autor: "Manolo ",
        fecha: "22/05/2022 ",
        mensaje: "Hola soy Manolo "
    },
        {
            id: uuidv4(),
            autor: "Ana Maria ",
            fecha: "23/05/2022 ",
            mensaje: "Clatu Verata Nitte .... O era Nittu? "
        },
        {
            id: uuidv4(),
            autor: "Luis ",
            fecha: "Fecha estelar 202556745.2 ",
            mensaje: "Velocidad de curvatura 9 "
        }])
    const [autor, setAutor] = useState([""]);
    const [entrada, setEntrada] = useState([""]);

    const cambioAutor = (e) => {
    setAutor(e.target.value);
    };
    const cambioEntrada = (e) => {
    setEntrada(e.target.value);
    };


    const nuevaEntrada = (e) => {
    e.preventDefault();
    setPosts([...posts, {
        id: uuidv4(),
        autor: autor + " ",
        fecha: new Date().toLocaleDateString() + " ",
        mensaje: entrada + " "
    }])}

    return(
    
<div className="contenedor">
        

        <form onSubmit={nuevaEntrada}
            className="formulario">
        <label htmlFor="nombre">Autor</label>
        <input
            type="text"
            placeholder="Nombre"
            onChange={cambioAutor}
        className="'form-tex"
        value={autor}
        />
        <label htmlFor="entrada">Entrada</label>
        <input
        type="text"
        placeholder="Entrada"
        onChange={cambioEntrada}
        className="'form-tex"
        value={entrada}
        />
        <button type="submit">Enviar</button>
            </form>
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