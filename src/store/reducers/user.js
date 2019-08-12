const stateUser = {
  settingUser: {
    loginUser: 0,
    users: [],
  },
};

const reducerUser = (state = stateUser, action) => {
  switch (action.type) {
    case 'USER_LOG_IN':
      let newUserLogInState = -1;
      state.users.forEach((element, i) => {
        if (element.nickName === action.payload.nickName
          && element.password === action.payload.password) {
          newUserLogInState = i;
          return;
        }
      });
      if (newUserLogInState < 0) {
        alert('wrong login or password')
      }
      return { ...state, loginUser: newUserLogInState };
    case 'USER_REGISTRATION':
      let newUserRegistrationState = -1;
      let newUserInformation = {};
      state.users.forEach((element) => {
        if (element.nickName === action.payload.nickName) {
          alert('Nickname is busy')
        } else {
          newUserRegistrationState = state.users.length;
          newUserInformation = {
            nickName: action.payload.nickName,
            password: action.payload.password,
          };
        }
      });
      const newState = { ...state };
      newState.loginUser = newUserRegistrationState;
      newState.users.push(newUserInformation);
      return newState;
    case 'USER_LOG_OUT':
      return { ...state, loginUser: action.payload };
    default:
      return state;
  }
};

export default reducerUser;
