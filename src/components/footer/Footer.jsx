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
  onChangeMessage = (e) => {
    this.message = e.target.value;
  }

  submitValue = (e) => {
    e.preventDefault();
    this.nickName = this.userInformation.nickName;

    store.dispatch(actionYourMessage(this.nickName, this.message));

    this.ws.send(JSON.stringify({
      from: this.nickName,
      message: this.message,
    }));
    e.target.form.value = '';
  }

  render() {
    const { userInformation, ws } = this.props;

    this.userInformation = userInformation;
    this.ws = ws;

    return (
      <Container className="fixed-bottom bg-dark footer" fluid>
        <Form
          className="text-center"
          onSubmit={this.submitValue}
        >
          <Row>
            <Col xs={11}>
              <Form.Control
                id="form"
                type="text"
                onChange={this.onChangeMessage}
                placeholder="Text message"
                className="send-form"
              />
            </Col>
            <Col xs={1}>
              <Button
                variant="outline-light"
                type="submit"
                className="button"
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
  userInformation: state.settingUser.users[state.settingUser.numberUser],
}))(Footer);
