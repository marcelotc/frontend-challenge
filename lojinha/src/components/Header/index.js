import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Lojinha</Navbar.Brand>
      </Navbar>
    </>
  )
}

export default Header;