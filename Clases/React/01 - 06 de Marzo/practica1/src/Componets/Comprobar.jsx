import React from 'react'
// import App from '../App';
import axios from 'axios';

export const Comprobar = () => {
    
    const listar = async () => {
        try {
            const datos = await axios.get(
                "https://6400981f63e89b0913b297b5.mockapi.io/api/v1/clientes"
            );
            return datos;
        } catch (error) {
            console.log(error);
        }
    };
    listar()
        .then((datos) => {
                <ul>
                {datos.map((enlace, index) => (
                    <li>{enlace[index]}</li>
                ))}
                </ul> 
        })
        .catch((error) => {
            console.log(error);
        });
}