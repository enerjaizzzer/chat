import React from 'react';
import { connect } from 'react-redux';

const ConnectUser = ({ nickName }) => {
  const scrollingElement = (document.scrollingElement || document.body);
  scrollingElement.scrollTop = scrollingElement.scrollHeight + 50;

  return (
    <>
      <p>
        {nickName}
        {' '}
        connected!
      </p>
    </>
  );
};

export default connect(state => ({
  nickName: state.settingUser.users[state.settingUser.numberUser].nickName,
}))(ConnectUser);
