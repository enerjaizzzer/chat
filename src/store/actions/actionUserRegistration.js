const actionUser = (nickName, password) => ({
  type: 'USER_REGISTRATION',
  payload: {
    nickName,
    password,
    avatar: 'https://hostenko.com/wpcafe/wp-content/uploads/wpavatar.png',
  },
});

export default actionUser;
