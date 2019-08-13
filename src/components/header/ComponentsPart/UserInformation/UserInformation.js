import React from 'react';
import { Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';

const UserInformation = (props) => {
  const { userInformation } = props;
  return (
    <Navbar.Brand href="#home" className="text-light logo">{userInformation.nickName}</Navbar.Brand>
  );
};

export default connect(state => ({
  userInformation: state.settingUser.users[state.settingUser.numberUser],
}))(UserInformation);
