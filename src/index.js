import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components';
import store from './store/state';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'),
);

serviceWorker.unregister();
