'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListaModulos = () => {
  const [modulos, setModulos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://j71yi4eoc6.execute-api.sa-east-1.amazonaws.com/dev/impostograma/desafio/listarModulos', {
          headers: {
            "Accept": "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)",
            "Authorization": "RRwPrJsGdiwdWZ1CZj9srRtCdQ99LPeg"
          }
        });
        setModulos(response.data.body);
      } catch (error) {
        console.error('Erro ao buscar os módulos:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Lista de Módulos</h1>
      <ul>
        {modulos.map(modulo => (
          <li key={modulo.id}>
            <strong>{modulo.Descricao}</strong>
            <ul>
              {modulo.subModulos.map(submodulo => (
                <li key={submodulo.id}>{submodulo.Descricao}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaModulos;
