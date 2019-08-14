import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './header';
import Main from './main';
import Footer from './footer';

import connectWebSocket from '../utils/connectWebSocket';
import actionUserIsHere from '../store/actions/actionUserIsHere';

import store from '../store/state';

class App extends Component {
  constructor() {
    super();

    this.ws = new WebSocket('ws://st-chat.shas.tel');
  }

  render() {
    const { count, user } = this.props;
    connectWebSocket(this.ws);

    window.onfocus = () => {
      document.title = 'Chat';
      store.dispatch(actionUserIsHere(true, 0));
    };
    window.onblur = () => {
      store.dispatch(actionUserIsHere(false, count));
    };

    if (!user) {
      document.title = `${count} unread messages`;
    }

    return (
      <>
        <Header />
        <Main />
        <Footer ws={this.ws} />
      </>
    );
  }
}

export default connect(state => ({
  count: state.messages.countMessages,
  user: state.messages.userIsHere,
}))(App);
