import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import './styles.css';
import { Container, Card } from 'react-bootstrap';

import ImagemQuebrada from '../../assets/imagem.jpg'

const Main = () => {

  const [lojas, setLojas] = useState([]);

  useEffect(() => {
    getLojas();
  }, []);

  const getLojas = async () => {
    const response = await api.get('/stores');

    const lojas = response.data;

    setLojas(lojas);
  }

  return (
    <Container>
    {lojas.map(loja =>
      <div className="d-inline-flex p-4" key={loja.id}>
        <Card style={{ width: '14rem' }}>
          <Card.Header className="text-center">{loja.name}</Card.Header>
          <img onError={(e) => e.target.src = ImagemQuebrada} height="80px" src={loja.image_blob} alt="imagem" />
          <Card.Body className="text-center">
          </Card.Body>
          <Card.Text className="text-center">
            <small className="text-muted">Pegue de volta: {Number(loja.takeback).toFixed(1)}</small>
          </Card.Text>
        </Card>
      </div>
    )}
  </Container>
  )
}

export default Main;