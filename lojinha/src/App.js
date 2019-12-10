import React from 'react';
import Routes from './routes';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import Header from './components/Header';

const App = () => (
  <div className="App">
    <Header></Header>
    <Routes></Routes>
  </div>
)

export default App;