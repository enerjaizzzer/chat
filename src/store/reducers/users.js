const usersReducer = (state, action) => {
  switch (action.type) {
    case 'REGISTRATION_USER':
      for (let i = 0; i < state.length; i += 1) {
        if (state[i].nickName === action.payload.nickName) {
          alert('This nickname is already there');
          return state;
        }
      }
      state.push(
        {
          nickName: action.payload.nickName,
          password: '',
          avatar: 'https://hostenko.com/wpcafe/wp-content/uploads/wpavatar.png',
        },
      );
      return state;
    case 'LOG_IN_USER':
      return state;
    default:
      return state;
  }
};

export default usersReducer;
