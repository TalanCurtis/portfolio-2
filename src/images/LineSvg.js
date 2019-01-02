import React from 'react';

const LineSvg = (props) => {
  const {className, height=32, width=32, fill='black', stroke = 'black', strokeWidth = '2', onClick } = props
  return (
    <svg viewBox={`0 0 ${width} ${height}`}  className={className} height={height} width={width}>
      <line x1="0%" y1="50%" x2="100%" y2="50%" fill={fill} stroke={stroke} strokeWidth={strokeWidth}/>
    </svg>
  )
};

export default LineSvg;