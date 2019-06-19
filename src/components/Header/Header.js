import React from 'react';
import LogoSvg from '../../images/LogoSvg';
import HeaderNav from '../HeaderNav/HeaderNav';

const Header = () => {

  return (
    <div className = "Header" >
      <div className = "title">
        <LogoSvg className = "logo" size = "60"/> 
        <div className = "h1">
          Alan Curtis
        </div>
      </div>
      <div className = "nav">
        <HeaderNav />
      </div>
    </div>
  )
}

export default Header;