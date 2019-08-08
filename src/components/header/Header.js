import React from 'react';
import {
  Navbar,
  Button,
} from 'react-bootstrap';

const Header = () => (
  <>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Chat</Navbar.Brand>
      <Button variant="outline-secondary">LogIn</Button>
    </Navbar>
  </>
);

export default Header;
