import React from 'react';
import LogoSvg from '../../images/LogoSvg';

const Header = () => {
  return (
    <div className = "Header">
      <LogoSvg className = "logo" size = "60"/>
      <div>Alan Curtis</div>
      <div className = "nav">
        <button>Intro</button>
        <button>About</button>
        <button>Skills</button>
        <button>Portfolio</button>
        <button>Contact</button>
      </div>
    </div>
  )
}

export default Header;