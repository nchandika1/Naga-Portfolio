import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Portfolio from './components/Portfolio.js';
import Social from './components/Social.js';
import Footer from './components/Footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <span className="App-title">Naga's Portfolio <span className="Trademark">(Powered by React™)</span></span>
          <Social />
        </header>
        <Portfolio />
        <Footer />
      </div>
    );
  }
}

export default App;
