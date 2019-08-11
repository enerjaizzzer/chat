import React, { Component } from 'react';
import {
  Button,
  Modal,
  Form,
} from 'react-bootstrap';
import { connect } from 'react-redux';
import store from '../../../store/state';


class LogInModal extends Component {
  constructor(props) {
    super(props);

    this.valueNickName = '';
    this.valuePassword = '';
  }

  submitValue = (e) => {
    e.preventDefault();
    store.dispatch({
      type: 'USER_LOG_IN',
      payload: this.valueNickName,
    });
  };

  onChangeNickName = (e) => {
    this.valueNickName = e.target.value;
  };

  onChangePassword = (e) => {
    this.valuePassword = e.target.value;
  };

  render() {
    const { loginUser } = this.props;
    return (
      <Modal
        {...this.props}
        size="xs"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Form
          className="text-center"
          onSubmit={this.submitValue}
        >
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Send your Nickname</Form.Label>
            <Form.Control
              type="text"
              onChange={this.onChangeNickName}
              placeholder="NickName"
            />
            <Form.Label>Send Password</Form.Label>
            <Form.Control
              type="password"
              onChange={this.onChangePassword}
              placeholder="Password"
            />
          </Form.Group>
          <h1>{loginUser}</h1>
          <Button
            variant="primary"
            type="submit"
          >
            LogIn
          </Button>
        </Form>
      </Modal>
    );
  }
}

export default connect(state => ({ loginUser: state.settingUser.loginUser }))(LogInModal);
