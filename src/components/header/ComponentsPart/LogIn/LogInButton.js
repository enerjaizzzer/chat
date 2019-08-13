import React from 'react';
import { Button } from 'react-bootstrap';

import LogInModal from './LogInModal';

const LogInButton = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button className="button" variant="outline-light" onClick={() => setModalShow(true)}>
        LogIn
      </Button>
      <LogInModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default LogInButton;
