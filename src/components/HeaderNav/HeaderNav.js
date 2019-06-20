import React, { Component } from 'react';
import { Power4, TimelineLite } from 'gsap';
import _ from 'lodash';
import BurgerSvg from '../../images/BurgerSvg';

class HeaderNav extends Component{
  constructor(props){
    super(props);
    this.state = {
      activeButton: 'Intro',
      sections:["Intro", "About", "Skills", "Portfolio", "Contact"],
      isOpen: false,
    }
    this.tl = new TimelineLite();
  }

  componentDidMount(){
    window.addEventListener('scroll', (e)=>this.getScrollPosition(e));
  }

  getScrollPosition = (e) => {
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
  }

  componentWillUnmount(){
    window.removeEventListener('scroll');
  }

  handleMenu = () => {
    if (this.state.isOpen){
      this.setState({isOpen:false})
      this.tl.to(".button-container-mobile", .5, {y:"0%", opacity:0, ease:Power4.easeOut})
    } else {
      this.setState({isOpen:true})
      this.tl.to(".button-container-mobile", .5, {y:"+=100%", opacity:1, ease:Power4.easeOut})
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

  render(){
    let buttons = _.map( this.state.sections, (x,i)=>{
      let isActive = x === this.state.activeButton ? "nav-active": ""
      return(<button key={i} className = { `h2 nav ${isActive}`} value={x} onClick={this.handleNavSelected}>{x}</button>)
    });

    return (
     <div className="HeaderNav">
       <div className="button-container ">
         {buttons}
       </div>
       <div className="cover"></div>
       <div className="button-container-mobile ">
         <div>
         {buttons}
         </div>
       </div>
       <BurgerSvg className="d-m-show" size="35" fill="white" onClick={this.handleMenu}/>
    </div>  
    );
  
  }
}

export default HeaderNav;