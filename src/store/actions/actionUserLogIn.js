const actionUser = (nickName, password) => ({
  type: 'USER_LOG_IN',
  payload: {
    nickName,
    password,
  },
});

export default actionUser;
