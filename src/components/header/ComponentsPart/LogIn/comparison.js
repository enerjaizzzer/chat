const comparison = (nick, pass) => ({
  type: 'LOG_IN_USER',
  payload: {
    nickName: nick,
    password: pass,
  },
});

export default comparison;
