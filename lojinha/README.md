Para instalar as dependencias, digite: 

### `yarn install`

Para rodar o projeto, digite:

### `yarn start`


## Organização das pastas 

Para esse projeto decidi dividir em 4 pastas 

```
src
├── assets
├── components
├── pages
├── services

```

`assets` , `components`, `pages`, `services`


Em compoents vai os componentes da página que são compartilhados para todo o
prójeto nesse caso o Header da página.

Para facilitar na parte de roteamento criei um componente de rotas e em pages decidi dividir em mais duas pastas `main` e `detalhes`.

```
pages
├── Detalhes
│    └── index.js
│    └── styles.js
├── Main
.    └── index.js
.    └── styles.js
.
.
.
routes.js
```

Podemos verificar abaixo como as rotas são chamadas pelo import. 

```js

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from '../src/pages/Main';
import Detalhe from '../src/pages/Detalhes';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main}></Route>
      <Route path="/stores/:id" component={Detalhe}></Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;

```

E no App.js chamamos o componente de rotas.

```js

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

```
Isso nos dará uma maior organização quando quisermos adicionar novas páginas.


## Chamadas de API

Para me ajudar a trabalhar com requisições HTTP utilizei o axios e crie uma URL
base para ser usada em outros arquivos.

```js

import axios from 'axios';

const api = axios.create({ baseURL: 'http://challenge.getmore.com.br'});

export default api;

```

## Trabalhando com hooks e ciclos de vida

Utilizei os react hooks `useEffect` e `useState` na página main e os ciclos de vida 
`componentDidMount` na página detalhes.

Abaixo como eu "peguei" as informações que vêm da API com o `useEffect`.

```js

//Página main

const [lojas, setLojas] = useState([]);

  useEffect(() => {
    getLojas();
  }, []);

  const getLojas = async () => {
    const response = await api.get('/stores');

    const lojas = response.data;

    setLojas(lojas);
  }

```

Na página de detalhes resolvi usar o `componentDidMount`  para ter acesso
aos parâmetros da url, pegando o ID da loja e assim fazendo a filtragem.

```js

//Página Detalhes

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

  ```


  ## Estilização

  Para a estilização utilizei o [React Bootstrap](https://react-bootstrap.github.io/)
