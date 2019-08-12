const actionSomeoneMessage = (nickName, message, time) => ({
  type: 'SOMEONE_MESSAGE',
  payload: {
    nickName,
    message,
    time,
  },
});

export default actionSomeoneMessage;
