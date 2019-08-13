const actionYourMessage = (nickName, message) => ({
  type: 'YOUR_MESSAGE',
  payload: {
    nickName,
    message,
  },
});

export default actionYourMessage;
