import React, { Component } from 'react';
import Header from './comp/Header';
import Footer from './comp/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
          <section>
            <h1>Main Section</h1>
          </section>
        <Footer />
      </div>
    );
  }
}

export default App;
