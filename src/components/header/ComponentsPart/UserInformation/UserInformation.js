import React from 'react';
import { connect } from 'react-redux';

const UserInformation = (props) => {
  const { userInformation } = props;
  return (
    <>
      <h2>{userInformation.nickName}</h2>
    </>
  );
};

export default connect(state => ({
  userInformation: state.settingUser.users[state.settingUser.loginUser],
}))(UserInformation);
