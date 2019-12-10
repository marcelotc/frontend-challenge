import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import './styles.css';

const Main = () => {

  const [lojas, setLojas] = useState([]);

  useEffect(() => {
    getLojas();
  }, []);

  const getLojas = async () => {
    const response = await api.get('/stores');

    const lojas = response.data;

    setLojas(lojas);

    console.log(lojas)
  }

  return (
    <div>
      {lojas.map(loja =>
        <div key={loja.id}>
          <h1>{loja.name}</h1>
          <p>{loja.takeback}</p>
          <img src={loja.image_blob}></img>
        </div>
      )}
    </div>
  )
}

export default Main;