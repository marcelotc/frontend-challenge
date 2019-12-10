import React, { Component } from 'react';

import api from '../../services/api';

import './styles.css';

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
      <div>
        <h1>{loja.name}</h1>
      </div>
    );
  }
}