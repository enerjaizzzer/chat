import { createStore, combineReducers } from 'redux';
import * as reducers from './reducers';

const initState = {
  settingUser: {
    loginUser: 0,
    users: [
      {
        nickName: 'olga',
        password: 1,
      },
      {
        nickName: 'Nastia',
        password: 'q',
      },
    ],
  },
};

const reducer = combineReducers(reducers);

const store = createStore(reducer, initState);

export default store;
