import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

import LogInButton from './ComponentsPart/LogInButton';
import RegistrationButton from './ComponentsPart/RegistrationButton';

// import logInModal from './logInModal';

class Header extends Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Chat</Navbar.Brand>
          <LogInButton />
          <RegistrationButton />
        </Navbar>
      </>
    );
  }
}

export default Header;
