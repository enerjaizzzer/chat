import { createStore, combineReducers } from 'redux';
import * as reducers from './reducers';

const initState = {
  settingUser: {
    loginUser: false,
    numberUser: 0,
    users: [
      {
        nickName: 'admin',
        password: 'admin',
      },
    ],
  },
  messages: {
    someoneMessages: [],
    yourMessages: [],
  },
};

const reducer = combineReducers(reducers);

const store = createStore(reducer, initState);

export default store;
