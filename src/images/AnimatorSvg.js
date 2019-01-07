import React from 'react';

const AnimatorSvg = (props) => {
  let {className, height, width, fill , stroke, strokeWidth, onClick, size } = props
  if(size){
    height = size;
    width = size;
  }
  return (
    <svg id="animator" viewBox="0 0 32 32" className={className} height={height} width={width} fill={fill} stroke={stroke} strokeWidth={strokeWidth} onClick={onClick}>
        <rect x="0" y="0" width="100%" height="100%" rx="5" ry="5" fill='purple'/>
    </svg>
  )
};

export default AnimatorSvg;