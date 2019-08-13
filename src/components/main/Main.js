import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Messages from './ComponentsPart/Messages';

class Main extends Component {
  render() {
    return (
      <Container className="main" fluid>
        <Row>
          <Col>
            <Messages />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Main;
