import { createStore } from 'redux';

import usersReducer from './actions/users';
import messagesReducer from './actions/messages';

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

const rootReducer = (state = initialState, action) => ({
  users: usersReducer(state.users, action),
  messages: messagesReducer(state.messages, action),
});

const store = createStore(rootReducer);

console.log(store.getState())

export default store;
