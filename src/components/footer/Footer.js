import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Navbar,
  Button,
  Form,
  Col,
} from 'react-bootstrap';

class Footer extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" className="fixed-bottom">

        <Col xs={11}>
          <Form
            className="text-center"
            onSubmit={this.submitValue}
            md={10}
          >
            <Form.Control
              type="text"
              onChange={this.onChangePassword}
              placeholder="Text message"
            />
          </Form>
        </Col>
        <Col xs={1}>
          <Button
            variant="primary"
            type="submit"
          >
            Submit
          </Button>
        </Col>



      </Navbar>
    );
  }
}

export default connect(state => ({
  userInformation: state.settingUser.users[state.settingUser.loginUser],
}))(Footer);
