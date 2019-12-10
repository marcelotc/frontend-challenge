import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import './styles.css';
import { Container, Card, Image } from 'react-bootstrap';

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
        <div className="d-inline-flex p-4 col-lg-4 col-md-4 col-sm-6" key={loja.id}>
          <Card style={{ width: '14rem' }}>
            <Card.Header className="text-center">{loja.name}</Card.Header>
            <Image onError={(e) => e.target.src = ImagemQuebrada} height="80px" src={loja.image_blob} alt="Logo da loja" thumbnail/>
            <Card.Body className="text-center">
            </Card.Body>
            <Card.Text className="text-center">
              <small className="text-muted">Pegue de volta: {Number(loja.takeback).toFixed(1)}</small>
            </Card.Text>
            <Card.Footer className="text-center">
              <Link to={`/stores/${loja.id}`} className="button"><span>Detalhes </span></Link>
            </Card.Footer>
          </Card>
        </div>
      )}
    </Container>
  )
}

export default Main;