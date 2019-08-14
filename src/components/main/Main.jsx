import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Messages from './ComponentsPart/Messages';
import ConnectUser from './ComponentsPart/ConnectUser';

class Main extends Component {
  render() {
    return (
      <Container className="main" fluid>
        <Row>
          <Col>
            <Messages />
            <ConnectUser />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Main;
