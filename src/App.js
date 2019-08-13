import React, { Component } from 'react';

import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

import connectWebSocket from './utils/connectWebSocket';

class App extends Component {
  constructor() {
    super();

    this.ws = new WebSocket('ws://st-chat.shas.tel');
  }

  render() {
    connectWebSocket(this.ws);

    return (
      <>
        <Header />
        <Main />
        <Footer ws={this.ws} />
      </>
    );
  }
}

export default App;
