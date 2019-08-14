const stateUser = {
  settingUser: {
    loginUser: false,
    numberUser: 0,
    defaultAvatar: 'https://windows10free.ru/uploads/posts/2017-04/1493287748_1487679899_icon-user-640x640.png',
    users: [],
  },
};

const reducerUser = (state = stateUser, action) => {
  switch (action.type) {
    case 'USER_LOG_IN': {
      let newUserLogInState = false;
      let newNumberUser = 0;

      state.users.forEach((element, i) => {
        if (element.nickName === action.payload.nickName
          && element.password === action.payload.password) {
          newUserLogInState = true;
          newNumberUser = i;
        }
      });
      if (!newUserLogInState) {
        alert('wrong login or password');
      }
      return { ...state, loginUser: newUserLogInState, numberUser: newNumberUser };
    }
    case 'USER_REGISTRATION': {
      let newUserRegistrationState = false;
      let newNumberUser = 0;
      let newUserInformation = {};
      state.users.forEach((element) => {
        if (element.nickName === action.payload.nickName) {
          alert('Nickname is busy');
        } else {
          newUserRegistrationState = state.users.length;
          newNumberUser = state.users.length;
          newUserInformation = {
            nickName: action.payload.nickName,
            password: action.payload.password,
            avatar: action.payload.avatar,
          };
        }
      });
      const newState = { ...state };
      newState.loginUser = newUserRegistrationState;
      newState.numberUser = newNumberUser;
      newState.users.push(newUserInformation);
      return newState;
    }
    case 'USER_LOG_OUT': {
      return { ...state, loginUser: action.payload };
    }
    default:
      return state;
  }
};

export default reducerUser;
