import React from 'react';
import { Button } from 'react-bootstrap';

import store from '../../../../store/state';
import actionUserLogOut from '../../../../store/actions/actionUserLogOut';

const LogOutButton = () => (
  <Button className="button" variant="outline-light" onClick={() => store.dispatch(actionUserLogOut())}>
    LogOut
  </Button>
);

export default LogOutButton;
