const initialState = {
  users: [
    { activeUser: 0 },
    {
      nickName: '1',
      password: '1',
      avatar: 'https://hostenko.com/wpcafe/wp-content/uploads/wpavatar.png',
    },
    {
      nickName: '2',
      password: '2',
      avatar: 'https://hostenko.com/wpcafe/wp-content/uploads/wpavatar.png',
    },
    {
      nickName: 'q',
      password: 'q',
      avatar: 'https://hostenko.com/wpcafe/wp-content/uploads/wpavatar.png',
    },
  ],
  messages: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN_USER':
      console.log('state', state)
      // state.forEach((item, i) => {
      //   if (item.nickName === action.payload.nickName
      //     && item.password === action.payload.password) {
      //     return Object.assign(state, state[0].activeUser = i);
      //   }
      // });
      return state;
    default:
      return state;
  }
};

export default rootReducer;
