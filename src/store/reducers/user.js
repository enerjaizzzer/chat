const initStateUser = {
  settingUser: {
    loginUser: 0,
    users: [
      {
        nickName: 1,
        password: 1,
      },
      {
        nickName: 'q',
        password: 'q',
      },
    ],
  },
};

const reducerUser = (state = initStateUser, action) => {
  switch (action.type) {
    case 'USER_LOG_IN':
      return { ...state, ...{ loginUser: (action.payload) } };
    default:
      return state;
  }
};

export default reducerUser;
