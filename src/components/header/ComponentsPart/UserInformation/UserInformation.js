import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

import store from '../../../../store/state';
import actionUserLogOut from '../../../../store/actions/actionUserLogOut';

const UserInformation = (props) => {
  const { userInformation } = props;
  return (
    <>
      <h2>{userInformation.nickName}</h2>
      <Button variant="primary" onClick={() => store.dispatch(actionUserLogOut())}>
        LogOut
      </Button>
    </>
  );
};

export default connect(state => ({
  userInformation: state.settingUser.users[state.settingUser.loginUser],
}))(UserInformation);
