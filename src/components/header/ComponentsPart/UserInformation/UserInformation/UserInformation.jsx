import React from 'react';
import { Navbar, Image } from 'react-bootstrap';
import { connect } from 'react-redux';

const UserInformation = (props) => {
  const { userInformation } = props;
  console.log(userInformation)
  return (
    <>
      <Navbar.Brand href="#home" className="text-light logo">
        {userInformation.nickName}
      </Navbar.Brand>
      <Image
        src={userInformation.avatar}
        className="avatar"
        roundedCircle
      />
    </>
  );
};

export default connect(state => ({
  userInformation: state.settingUser.users[state.settingUser.numberUser],
}))(UserInformation);
