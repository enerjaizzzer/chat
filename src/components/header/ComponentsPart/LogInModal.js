import React from 'react';
import {
  Button,
  Modal,
  Form,
} from 'react-bootstrap';

import comparison from './LogIn/comparison';

// import store from '../../../store/state';

// store.dispatch({
//   type: 'LOG_IN_USER',
// });

// store.dispatch({
//   type: 'REGISTRATION_USER',
//   payload: {
//     nickName: 'newUser',
//     password: '',
//     avatar: '',
//   },
// });

// store.dispatch({
//   type: 'REGISTRATION_USER',
//   payload: {
//     nickName: 'newUser',
//     password: '',
//     avatar: '',
//   },
// });

// store.dispatch({
//   type: 'REGISTRATION_USER',
//   payload: {
//     nickName: 'newUser222',
//     password: '',
//     avatar: '',
//   },
// });

// store.dispatch({
//   type: 'REGISTRATION_USER',
//   payload: {
//     nickName: 'newUser',
//     password: '',
//     avatar: '',
//   },
// });

const LogInModal = (props) => {
  const { identification } = props;
  console.log(identification)
  let valueNickName = '';
  let valuePassword = '';

  const submitValue = (e) => {
    e.preventDefault();
    comparison(valueNickName, valuePassword);
  };

  const onChangeNickName = (e) => {
    valueNickName = e.target.value;
  };

  const onChangePassword = (e) => {
    valuePassword = e.target.value;
  };

  return (
    <Modal
      {...props}
      size="xs"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Form
        className="text-center"
        onSubmit={submitValue}
      >
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Send your Nickname</Form.Label>
          <Form.Control
            type="text"
            onChange={onChangeNickName}
            placeholder="NickName"
          />
          <Form.Label>Send Password</Form.Label>
          <Form.Control
            type="password"
            onChange={onChangePassword}
            placeholder="Password"
          />
        </Form.Group>
        <Button
          variant="primary"
          onClick={() => identification(valueNickName, valuePassword)}
          type="submit"
        >
          LogIn
        </Button>
      </Form>
    </Modal>
  );
};

// const mapStateToProps = (state) => {
//   console.log(state);
//   return {
//     test: 1,
//   }
// }

// const WrappedLogInModalComponent = connect(mapStateToProps)(LogInModal)


export default LogInModal;
