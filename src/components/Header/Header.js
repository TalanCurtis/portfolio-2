import React, { Component } from 'react';
import LogoSvg from '../../images/LogoSvg';
// import BurgerSvg from '../../images/BurgerSvg';
import { Power0, TimelineLite } from 'gsap';
import _ from 'lodash';

// TODO: nav buttons should update highlight when just scrolling naturally.
// TODO: When on mobile change nav buttons to hamburger and make pop up menu.

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: false,
      activeButton: '',
      sections:["Intro", "About", "Skills", "Portfolio", "Contact"]
    }
    this.tl = new TimelineLite();
  }

  componentDidMount(){
    window.addEventListener('scroll', (e)=>{
      let scrollPosition = window.pageYOffset;
      let windowHeight = window.innerHeight;
      let documentHeight = document.body.scrollHeight;

      this.state.sections.forEach(section => {
        let elem = document.getElementById(section);
        let offset = elem.offsetTop - 100 ;
        if ( documentHeight === scrollPosition + windowHeight){
          // scroll has hit bottom
          this.setState({activeButton: section});
        } else if( scrollPosition > offset ){
          this.setState({activeButton: section});
        }
      });
    });
  }

  componentWillUnmount(){
    window.removeEventListener('scroll');
  }


  handleMenu = () => {
    if (this.state.isOpen){
      this.setState({isOpen:false})
      this.tl.to(".sliding-menu", 1, {y:"0%", opacity:0, ease:Power0.easeNone})
    } else {
      this.setState({isOpen:true})
      this.tl.to(".sliding-menu", 1, {y:"+=165%", opacity:1, ease:Power0.easeNone})
    }
  }

  handleNavSelected=(e)=>{
    let section = e.target.value
    this.setState({activeButton: section})
    let elem = document.getElementById(section);
    this.scrollToMyRef(elem);
  }

  scrollToMyRef = (elem) => {
    // add 60 for header offset;
    window.scrollTo(0, elem.offsetTop - 60);
  };

  renderButtons(){
    let buttons = _.map( this.state.sections, (x,i)=>{
      let isActive = x === this.state.activeButton ? "nav-active": ""
      return(<button key={i} className = { `h2 nav ${isActive}`} value={x} onClick={this.handleNavSelected}>{x}</button>)
    });
    return buttons;
  }

  render(){
    return (
      <div className = "Header" >
        <div className = "title">
          <LogoSvg className = "logo" size = "60"/> 
          <div className = "h1">
            Alan Curtis
          </div>
        </div>
        <div className = "nav">
          {this.renderButtons()}
        </div>
      </div>
    )
  }
}

export default Header;