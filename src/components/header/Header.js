import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LogInButton from './ComponentsPart/LogInButton';
import RegistrationButton from './ComponentsPart/RegistrationButton';

import identification from '../../store/actions/users';

class Header extends Component {
  constructor(props) {
    super(props);
    this.store = props.store;
  }

  render() {

    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Chat</Navbar.Brand>
        <LogInButton identification={identification} />
        <RegistrationButton />
      </Navbar>
    );
  }
}

const putStateToProps = (state) => {
  return { users: state.users };
}

const putActionToProps = (dispatch) => {
  return {
    identification: bindActionCreators(identification, dispatch)
  }
}

export default connect(putStateToProps, putActionToProps)(Header);
