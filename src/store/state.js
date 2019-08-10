import { createStore } from 'redux';

import usersReducer from './reducers/users';
import messagesReducer from './reducers/messages';

const rootReducer = (state, action) => ({
  users: usersReducer(state.users, action),
  messages: messagesReducer(state.messages, action),
});

const store = createStore(rootReducer, {
  users: [
    {
      nickName: 'admin',
      password: '123qwe',
      avatar: 'https://hostenko.com/wpcafe/wp-content/uploads/wpavatar.png',
    },
  ],
  messages: [],
});

export default store;
