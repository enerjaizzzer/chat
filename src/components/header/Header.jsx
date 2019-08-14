import React from 'react';
import { connect } from 'react-redux';
import {
  Navbar,
  Container,
  Row,
  Col,
} from 'react-bootstrap';

import LogInButton from './ComponentsPart/LogIn/LogInButton';
import RegistrationButton from './ComponentsPart/Registration/RegistrationButton';
import UserInformation from './ComponentsPart/UserInformation/UserInformation';
import LogOutButton from './ComponentsPart/UserInformation/LogOutButton';

const Header = (props) => {
  const { loginUser } = props;
  return (
    <Container className="fixed-top bg-dark header" fluid>
      <Row>
        <Col xs={2}>
          <Navbar.Brand href="#home" className="text-light logo">Chat.[enerjaizzzer]</Navbar.Brand>
        </Col>
        {(!loginUser) && (
          <Col xs={{ span: 2, offset: 8 }}>
            <LogInButton />
            <RegistrationButton />
          </Col>
        )}
        {(loginUser) && (
          <>
            <Col xs={{ span: 2, offset: 7 }}>
              <UserInformation />
            </Col>
            <Col xs={1}>
              <LogOutButton />
            </Col>
          </>
        )}
      </Row>
    </Container>
  );
};

export default connect(state => ({ loginUser: state.settingUser.loginUser }))(Header);
