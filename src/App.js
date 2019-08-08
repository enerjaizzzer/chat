import React, { Component } from 'react';

import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

class App extends Component {
  render() {
    return (
      <>
      <Header />
      <Main />
      <Footer />
      </>
    );
  }
}

export default App;
