import React from 'react';
import { connect } from 'react-redux';
import uniqid from 'uniqid'

const Messages = ({ messages }) => {
  const scrollingElement = (document.scrollingElement || document.body);
  scrollingElement.scrollTop = scrollingElement.scrollHeight;

  const getDate = (time) => {
    let d = new Date(time);

    const dateString = d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear() + " " +
      d.getHours() + ":" + d.getMinutes();
    return dateString;
  }
  const RenderMessages = messages.someoneMessages.map(item => (
    <div key={uniqid()}>
      <h2>{item.nickName}</h2>
      <p>{item.message}</p>
      <h5>{getDate(item.time)}</h5>
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
