import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';

import LogInButton from './ComponentsPart/LogIn/LogInButton';
import RegistrationButton from './ComponentsPart/Registration/RegistrationButton';
import UserInformation from './ComponentsPart/UserInformation/UserInformation';

class Header extends Component {
  render() {
    const { loginUser } = this.props;
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Chat</Navbar.Brand>
        {(loginUser < 0) && <LogInButton />}
        {(loginUser < 0) && <RegistrationButton />}
        {(loginUser >= 0) && <UserInformation />}
      </Navbar>
    );
  }
}

export default connect(state => ({ loginUser: state.settingUser.loginUser }))(Header);
