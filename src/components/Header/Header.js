import React from 'react';
import LogoSvg from '../../images/LogoSvg';
import BurgerSvg from '../../images/BurgerSvg';

const Header = () => {
  return (
    <div className = "Header">
      <div className = "title">
        <LogoSvg className = "logo" size = "60"/> 
        <div className = "h1">
          Alan Curtis
        </div>
      </div>
      <div className = "nav d-t-hide">
        {/* <button className = "h3" >Intro</button> */}
        <button className = "h3" >About</button>
        <button className = "h3" >Skills</button>
        <button className = "h3" >Portfolio</button>
        <button className = "h3 " >Contact</button>
      </div>
      <BurgerSvg className = "d-t-show" size = "60"/>
    </div>
  )
}

export default Header;