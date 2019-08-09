import { createStore } from 'redux';

const rootReducer = (state, action) => {
  switch (action.type) {
    case 'REGISTRATION_USER':
      console.log('state', state)
      for (let i = 0; i < state.users.length; i += 1) {
        if (state.users[i].nickName === action.i.nickName) {
          console.log('error');
          return state;
        }
      }
      return Object.assign({}, state, {
        users: [
          ...state.users,
          {
            nickName: action.i.nickName,
            password: '',
            avatar: 'https://hostenko.com/wpcafe/wp-content/uploads/wpavatar.png',
          },
        ],
      });
    case 'ololo':
      return state;
    default:
      return state;
  }
}

const store = createStore(rootReducer, {
  users: [
    {
      nickName: '',
      password: '',
      avatar: 'https://hostenko.com/wpcafe/wp-content/uploads/wpavatar.png',
    },
  ],
});

export default store;
