import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Comprobar = () => {
  const [clientes, listaClientes] = useState([]);

  useEffect(() => {
    const listar = async () => {
      try {
        const datos = await axios.get(
          'https://6400981f63e89b0913b297b5.mockapi.io/api/v1/clientes'
        );
        listaClientes(datos.data);
      } catch (error) {
        console.log(error);
      }
    };
    listar();
  },);

  return (
    <div>
      <h1>Lista Clientes</h1>
      <ul>
        {clientes.map((cliente) => (
          <li key={cliente.id}>
            <a href={cliente.enlace}>{cliente.nombre}</a>
          </li>
        ))}
      </ul>
      Comprobar
    </div>
  );
};

export default Comprobar;
