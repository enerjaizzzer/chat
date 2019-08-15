import React from 'react';
import { connect } from 'react-redux';
import uniqid from 'uniqid';
import { Row, Col, Image } from 'react-bootstrap';

const Messages = ({
  messages,
  avatar,
  nickName,
  defaultAvatar,
  id,
}) => {
  const scrollingElement = (document.scrollingElement || document.body);
  scrollingElement.scrollTop = scrollingElement.scrollHeight + 50;

  const getDate = (time) => {
    const d = new Date(time);

    const dateString = `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()} ${
      d.getHours()}:${d.getMinutes()}`;
    return dateString;
  };

  const avatarIdentification = (messageNickName, userNickName) => {
    if (messageNickName === userNickName) {
      return avatar;
    }
    return defaultAvatar;
  };

  const identificationAuthor = (messageNickName, userNickName) => {
    if (messageNickName === userNickName) {
      return 'message-block my';
    }
    return 'message-block';
  };

  const RenderMessages = messages.someoneMessages.map(item => (
    <Row key={uniqid()} className={identificationAuthor(item.nickName, nickName)}>
      <Col xs={1}>
        <Image
          src={avatarIdentification(item.nickName, nickName)}
          className="message-avatar"
          roundedCircle
        />
      </Col>
      <Col xs={11}>
        <h2 className="message-nickName">{item.nickName}</h2>
        <p className="message-text">{item.message}</p>
        <p className="message-date">{getDate(item.time)}</p>
      </Col>
    </Row>
  ));

  return (
    <>
      {RenderMessages}
    </>
  );
};

export default connect(state => ({
  messages: state.messages,
  avatar: state.settingUser.users[state.settingUser.numberUser].avatar,
  defaultAvatar: state.settingUser.defaultAvatar,
  nickName: state.settingUser.users[state.settingUser.numberUser].nickName,
  id: state.settingUser.users[state.settingUser.numberUser].id,
}))(Messages);
