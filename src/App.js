import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import connectWebSockets from './utils/connectWebSocket';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

import rootReducer from './store/reducers';

const store = createStore(rootReducer)

class App extends Component {

  render() {
    connectWebSockets();

    return (
      <>
        <Provider store={store}>
          <Header />
        </Provider>
        <Main />
        <Footer />

      </>
    );
  }
}

export default App;
