const actionUser = (nickName, password) => ({
  type: 'USER_REGISTRATION',
  payload: {
    nickName,
    password,
  },
});

export default actionUser;
