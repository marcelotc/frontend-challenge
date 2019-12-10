import React, { Component } from 'react';

import api from '../../services/api';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Image, Button } from 'react-bootstrap';

import './styles.css';

import ImagemQuebrada from '../../assets/imagem.jpg'

export default class Loja extends Component {
  state = {
    loja: {},
  }

  async componentDidMount() {
    const { id } = this.props.match.params;

    const response = await api.get(`/stores/${id}`);

    this.setState({ loja: response.data });

  }

  render() {
    const { loja } = this.state;

    return (
      <div className="corpo-detalhes">
        <Link to={`/`} className="button"><FontAwesomeIcon icon={faHome} size="2x" /></Link>
        <div className="text-center">
          <h1>{loja.name}</h1>
          <Image variant="top" onError={(e) => e.target.src = ImagemQuebrada} height="80px" src={loja.image_blob} alt="imagem" thumbnail />
          <br></br><br></br>
          <h5>Categorias:</h5>
         
          <div className="nota">
            <h5>Nota: {loja.rating}</h5>
          </div>
          <br></br>
          <a href={loja.url} >
            <Button variant="primary">Ir para o site da loja</Button>
          </a>
        </div>
      </div>
    );
  }
}