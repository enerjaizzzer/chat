import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Button,
  Form,
  Col,
  Row,
  Container,
} from 'react-bootstrap';

import store from '../../store/state';
import actionYourMessage from '../../store/actions/actionYourMessage';

class Footer extends Component {
  submitValue = (e) => {
    e.preventDefault();
    if (this.props.userInformation) {
      this.nickName = this.props.userInformation.nickName;
    } else { this.nickName = 'Guest' }
    store.dispatch(actionYourMessage(this.nickName, this.message));
    this.props.ws.send(JSON.stringify({
      from: this.nickName,
      message: this.message,
    }))
    // this.onChangeMessage()
  }

  onChangeMessage = (e) => {
    this.message = e.target.value;
  }

  render() {
    return (
      <Container className="fixed-bottom bg-dark" fluid>
        <Form
          className="text-center"
          onSubmit={this.submitValue}
        >
          <Row>
            <Col xs={11}>
              <Form.Control
                type="text"
                onChange={this.onChangeMessage}
                placeholder="Text message"
              />
            </Col>
            <Col xs={1}>
              <Button
                variant="primary"
                type="submit"
              >
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>

    );
  }
}

export default connect(state => ({
  userInformation: state.settingUser.users[state.settingUser.loginUser],
}))(Footer);
