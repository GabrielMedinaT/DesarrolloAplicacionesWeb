import React from 'react'
import axios from 'axios'


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
      let lista = " ";
      
      for (let i = 0; i < datos.data.length; i++) {
        lista +=
          <tr key={datos.data[i].id}>
            <td>{datos.data[i].id}</td>
            <td>{datos.data[i].nombre}</td></tr>
      }


    })
}

export default Comprobar