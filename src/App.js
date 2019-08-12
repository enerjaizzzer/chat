import React, { Component } from 'react';

import connectWebSocket from './utils/connectWebSocket';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

class App extends Component {
  render() {
    const ws = new WebSocket('ws://st-chat.shas.tel');
    connectWebSocket(ws);

    return (
      <>
        <Header />
        <Main />
        <Footer ws={ws} />
      </>
    );
  }
}

export default App;
