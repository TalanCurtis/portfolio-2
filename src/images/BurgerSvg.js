import React from 'react';

const BurgerSvg = (props) => {
  const {className, height, width, fill , stroke, strokeWidth, onClick } = props
  return (
    <svg id="burger" viewBox="0 0 32 32" className={className} height={height} width={width} fill={fill} stroke={stroke} strokeWidth={strokeWidth} onClick={onClick}>
      <path
        id="mid"
        d="M28,18.2H4c-1.1,0-2-0.9-2-2v-0.3c0-1.1,0.9-2,2-2h24c1.1,0,2,0.9,2,2v0.3C30,17.3,29.1,18.2,28,18.2z"/>
      <path
        id="mid-part2"        
        d="M28,18.2H4c-1.1,0-2-0.9-2-2v-0.3c0-1.1,0.9-2,2-2h24c1.1,0,2,0.9,2,2v0.3C30,17.3,29.1,18.2,28,18.2z"/>
      <path
        id="bot"
        d="M28,26.2H4c-1.1,0-2-0.9-2-2v-0.3c0-1.1,0.9-2,2-2h24c1.1,0,2,0.9,2,2v0.3C30,25.3,29.1,26.2,28,26.2z"/>
      <path
        id="top"
        d="M28,10.2H4c-1.1,0-2-0.9-2-2V7.8c0-1.1,0.9-2,2-2h24c1.1,0,2,0.9,2,2v0.3C30,9.3,29.1,10.2,28,10.2z"/>
    </svg>
  )
};

export default BurgerSvg;