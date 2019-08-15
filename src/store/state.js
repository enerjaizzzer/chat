import { createStore, combineReducers } from 'redux';

import * as reducers from './reducers';

const initState = {
  settingUser: {
    loginUser: false,
    numberUser: 0,
    defaultAvatar: 'https://windows10free.ru/uploads/posts/2017-04/1493287748_1487679899_icon-user-640x640.png',
    users: [
      {
        id: '',
        nickName: 'Guest',
        password: 'admin',
        avatar: 'https://hostenko.com/wpcafe/wp-content/uploads/wpavatar.png',
      },
    ],
  },
  messages: {
    userIsHere: true,
    countMessages: 0,
    formValue: '',
    someoneMessages: [],
    yourMessages: [],
  },
};

const reducer = combineReducers(reducers);

const store = createStore(reducer, initState);

export default store;
