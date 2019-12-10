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
    lojaInfo: {},
    category: []
  }

  async componentDidMount() {
    const { id } = this.props.match.params;

    const response = await api.get(`/stores/${id}`);

    const { category, ...lojaInfo } = response.data

    this.setState({ loja: category, lojaInfo });

    this.setState({
      category,
      lojaInfo,
    });

  }

  render() {
    const { category, lojaInfo } = this.state;

    return (
      <div className="corpo-detalhes">
        <Link to={`/`} className="button"><FontAwesomeIcon icon={faHome} size="2x" /></Link>
        <div className="text-center">
          <h1>{lojaInfo.name}</h1>
          <Image onError={(e) => e.target.src = ImagemQuebrada} height="80px" src={lojaInfo.image_blob} alt="Logo da loja" thumbnail />
          <h5 className="categorias-detalhes">Categorias:</h5>
          {category.map(cat => <div className="categorias" key={cat}> {cat} </div>)}
          <h5 className="nota-detalhes">Nota: {lojaInfo.rating}</h5>
          <a href={lojaInfo.url}>
            <Button variant="primary">Ir para o site da loja</Button>
          </a>
        </div>
      </div>
    );
  }
}