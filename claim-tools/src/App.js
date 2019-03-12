import React, { Component } from 'react';
import Header from './comp/Header';
import MainView from './comp/MainView';
import Footer from './comp/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MainView />
        <Footer />
      </div>
    );
  }
}

export default App;
