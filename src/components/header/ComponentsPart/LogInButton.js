import React from 'react';
import { Button } from 'react-bootstrap';

import LogInModal from './LogInModal';

const LogInButton = ({ identification }) => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        LogIn
      </Button>
      <LogInModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        identification={identification}
      />
    </>
  );
};

export default LogInButton;
