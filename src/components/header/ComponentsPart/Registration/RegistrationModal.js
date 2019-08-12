import React from 'react';
import {
  Button,
  Modal,
  Form,
} from 'react-bootstrap';

const RegistrationModal = props => (
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
        Registration
      </Button>
    </Form>
  </Modal>
);

export default RegistrationModal;
