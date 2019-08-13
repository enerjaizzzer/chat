import React, { Component } from 'react';
import {
  Button,
  Modal,
  Form,
} from 'react-bootstrap';

import store from '../../../../store/state';
import actionUserRegistration from '../../../../store/actions/actionUserRegistration';

class RegistrationModal extends Component {
  constructor(props) {
    super(props);

    this.valueNickName = '';
    this.valuePassword = '';
  }

  submitValue = (e) => {
    e.preventDefault();
    store.dispatch(actionUserRegistration(this.valueNickName, this.valuePassword));
  };

  onChangeNickName = (e) => {
    this.valueNickName = e.target.value;
  };

  onChangePassword = (e) => {
    this.valuePassword = e.target.value;
  };

  render() {
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
            <Form.Label className="title-form">Invent your Nickname</Form.Label>
            <Form.Control
              type="text"
              onChange={this.onChangeNickName}
              placeholder="NickName"
            />
            <Form.Label className="title-form">Invent your Password</Form.Label>
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
            Registration
          </Button>
        </Form>
      </Modal>
    );
  }
}

export default RegistrationModal;
