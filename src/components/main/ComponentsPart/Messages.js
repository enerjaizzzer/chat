import React from 'react';
import { connect } from 'react-redux';
import uniqid from 'uniqid';

const Messages = ({ messages }) => {
  const scrollingElement = (document.scrollingElement || document.body);
  scrollingElement.scrollTop = scrollingElement.scrollHeight + 50;

  const getDate = (time) => {
    const d = new Date(time);

    const dateString = `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()} ${
      d.getHours()}:${d.getMinutes()}`;
    return dateString;
  };

  const RenderMessages = messages.someoneMessages.map(item => (
    <div key={uniqid()} className="message-block">
      <h2 className="message-nickName">{item.nickName}</h2>
      <p className="message-text">{item.message}</p>
      <p className="message-date">{getDate(item.time)}</p>
    </div>
  ));

  return (
    <>
      {RenderMessages}
    </>
  );
};

export default connect(state => ({
  messages: state.messages,
}))(Messages);
