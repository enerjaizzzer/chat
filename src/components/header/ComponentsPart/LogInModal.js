import React from 'react';
import {
  Button,
  Modal,
  Form,
} from 'react-bootstrap';

import store from '../../../store/state';

store.subscribe(() => {
  console.log('New state', store.getState());
});

store.dispatch({
  type: 'LOG_IN_USER',
});

store.dispatch({
  type: 'REGISTRATION_USER',
  i: {
    nickName: 'newUser',
    password: '',
    avatar: '',
  },
});

store.dispatch({
  type: 'REGISTRATION_USER',
  i: {
    nickName: 'newUser',
    password: '',
    avatar: '',
  },
});

store.dispatch({
  type: 'REGISTRATION_USER',
  i: {
    nickName: 'newUser222',
    password: '',
    avatar: '',
  },
});

store.dispatch({
  type: 'REGISTRATION_USER',
  i: {
    nickName: 'newUser',
    password: '',
    avatar: '',
  },
});

const LogInModal = props => (
  <Modal
    {...props}
    size="xs"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Form className="text-center">
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Send your Nickname</Form.Label>
        <Form.Control
          type="text"
          placeholder="NickName"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        LogIn
      </Button>
    </Form>
  </Modal>
);

// const mapStateToProps = (state) => {
//   console.log(state);
//   return {
//     test: 1,
//   }
// }

// const WrappedLogInModalComponent = connect(mapStateToProps)(LogInModal)


export default LogInModal;
