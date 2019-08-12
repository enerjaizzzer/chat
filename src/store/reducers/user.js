const stateUser = {
  settingUser: {
    loginUser: 0,
    users: [],
  },
};

const reducerUser = (state = stateUser, action) => {
  switch (action.type) {
    case 'USER_LOG_IN':
      let newUserState = 0;
      state.users.forEach((element, i) => {
        if (element.nickName === action.payload.nickName
          && element.password === action.payload.password) {
          newUserState = i;
        }
        return 'error';
      });
      return { ...state, loginUser: newUserState };
    default:
      return state;
  }
};

export default reducerUser;
