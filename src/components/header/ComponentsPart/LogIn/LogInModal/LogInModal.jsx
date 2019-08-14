import React, { Component } from 'react';
import {
  Button,
  Modal,
  Form,
} from 'react-bootstrap';

import store from '../../../../../store/state';
import actionUserLogIn from '../../../../../store/actions/actionUserLogIn';

class LogInModal extends Component {
  onChangeNickName = (e) => {
    this.valueNickName = e.target.value;
  }

  onChangePassword = (e) => {
    this.valuePassword = e.target.value;
  }

  submitValue = (e) => {
    e.preventDefault();
    store.dispatch(actionUserLogIn(this.valueNickName, this.valuePassword));
  }

  render() {
    this.valueNickName = ' ';
    this.valuePassword = ' ';
    return (
      <Modal
        {...this.props}
        size="xs"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Form
          className="text-center modal-form bg-dark text-light"
          onSubmit={this.submitValue}
        >
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="title-form">Send your Nickname</Form.Label>
            <Form.Control
              type="text"
              onChange={this.onChangeNickName}
              placeholder="NickName"
            />
            <Form.Label className="title-form">Send Password</Form.Label>
            <Form.Control
              type="password"
              onChange={this.onChangePassword}
              placeholder="Password"
            />
          </Form.Group>
          <Button
            variant="outline-light"
            type="submit"
            className="button"
          >
            LogIn
          </Button>
        </Form>
      </Modal>
    );
  }
}

export default LogInModal;
