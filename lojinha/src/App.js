import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import Header from './components/Header';
import Main from './pages/Main';

const App = () => (
  <div className="App">
    <Header></Header>
    <Main></Main>
  </div>
)

export default App;