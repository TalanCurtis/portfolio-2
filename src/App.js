import React, { Component } from 'react';
import "./styles/main.css";

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';
import Skills from './components/Skills/Skills';
import About from './components/About/About';
// import Intro from './components/Intro/Intro';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="grid-container">
         
          {/* <Intro /> */}
          <About />
          <Skills />
          <Portfolio />
          <Contact />
          {/* <Footer /> */}
        </div>
      </div>
    );
  }
}

export default App;
