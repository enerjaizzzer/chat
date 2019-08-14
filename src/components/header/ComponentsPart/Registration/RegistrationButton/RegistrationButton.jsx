import React from 'react';
import { Button } from 'react-bootstrap';

import RegistrationModal from '../RegistrationModal';

const RegistrationButton = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button className="button" variant="outline-light" onClick={() => setModalShow(true)}>
        Registration
      </Button>
      <RegistrationModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default RegistrationButton;
