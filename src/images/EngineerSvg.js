import React from 'react';

const EngineerSvg = (props) => {
  const {className, height, width, fill , stroke, strokeWidth, onClick } = props
  return (
    <svg id="engineer" viewBox="0 0 32 32" className={className} height={height} width={width} fill={fill} stroke={stroke} strokeWidth={strokeWidth} onClick={onClick}>
        <rect x="0" y="0" width="100%" height="100%" />
    </svg>
  )
};

export default EngineerSvg;