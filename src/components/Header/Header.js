import React, { Component } from 'react';
import LogoSvg from '../../images/LogoSvg';
import BurgerSvg from '../../images/BurgerSvg';
import { Power0, TimelineLite } from 'gsap';

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: false,
    }
    this.tl = new TimelineLite();
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

  render(){
    return (
      <div className = "Header">
        <div className = "title">
          <LogoSvg className = "logo" size = "60"/> 
          <div className = "h1">
            Alan Curtis
          </div>
        </div>
        <div className = "nav">
          <button className = "h3" >Intro</button>
          <button className = "h3" >About</button>
          <button className = "h3" >Skills</button>
          <button className = "h3" >Portfolio</button>
          <button className = "h3 " >Contact</button>
        </div>
        <BurgerSvg className = "burger " size = "50" onClick={this.handleMenu}/>
        <div className="sliding-menu ">
          <button className = "h3" >Intro</button>
          <button className = "h3" >About</button>
          <button className = "h3" >Skills</button>
          <button className = "h3" >Portfolio</button>
          <button className = "h3 " >Contact</button>
        </div>
      </div>
    )
  }
}

export default Header;