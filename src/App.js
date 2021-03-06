import React, { Component } from 'react';
import "./styles/main.css";

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';
import Skills from './components/Skills/Skills';
import About from './components/About/About';
import Intro from './components/Intro/Intro';
// import Test from './components/Test/Test';
import { connect } from 'react-redux';
import { showModal } from './redux/reducers/modal/modalActions';
import Modal from './components/Modal/Modal';

// import Intro from './components/Intro/Intro';

// TODO: app should fade in nicely.

class App extends Component {
  handleShowModal = () => {
    this.props.showModal(true)
  }

  handleCloseModal = () => {
    this.props.showModal(false)
  }

  handleDisableScroll = () => {
    // if modal is open disable scroll
    let body = document.body
    if( body ){
      if (this.props.modal.showModal){
        body.style.overflow = "hidden"
      } else {
        body.style.overflow = ""
      }
    }
  }

  render() {
    this.handleDisableScroll();
    
    return (
      <div className="App">
        <Header />
        <div className="grid-container">
          {/* <Test /> */}
          <Intro />
          <About />
          <Skills />
          <Portfolio />
          <Contact />
        </div>
        <Footer />

        <Modal />

      </div>
    );
  }
}

const outputActions = {
  showModal
}

function mapStateToProps (state) {
  return {
    modal:state.modal
  }
}

export default connect(mapStateToProps, outputActions)(App);
